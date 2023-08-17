const BASE_URL = "https://proyecto-final-micaviegas.vercel.app/";

const apiQuery = async <T>(path: string, token: string) => {
    // console.log(token);
    if (!token) throw new Error("Can't query without a token");

    // console.log(`Fetching data at ${BASE_URL}${path}`);

    const response = await fetch(`${BASE_URL}${path}`, {
        method: "GET",
        headers: {
            Authorization: `Bearer ${token}`,
        },
        credentials: "include",
    });

    if (response.status === 401) throw new Error("Unauthorized");

    if (!response.ok) throw new Error("Query failed");

    // console.log(response);

    return (await response.json()) as T;
};

const apiMutation = async <T>(path: string, token: string, body: any) => {
    if (!token) throw new Error("Can't query without a token");

    const response = await fetch(`${BASE_URL}${path}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(body),
        credentials: "include",
    });

    return (await response.json()) as T;
};

const useAPIQuery = <T>() => {
    const query = async <T>(path: string, token: string) => {
        try {
            return (await apiQuery<T>(path, token)) as T;
        } catch (error) {
            throw error;
        }
    };

    const mutate = async (path: string, token: string, body: any) => {
        try {
            return await apiMutation<T>(path, token, body);
        } catch (error) {
            throw error;
        }
    };

    return { query, mutate };
};

export default useAPIQuery;
