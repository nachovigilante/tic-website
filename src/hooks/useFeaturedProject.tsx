import { useContext } from "react";
import FeaturedProjectContext from "~/contexts/FeaturedProjectContext";

const useFeaturedProject = () => {
    return useContext(FeaturedProjectContext);
};

export default useFeaturedProject;
