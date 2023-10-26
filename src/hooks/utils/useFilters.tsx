import { useReducer, useState } from 'react';

export type ActionType = {
    type: string;
    payload: string;
}

const filterReducer = (state: string[], action: ActionType) => {
    let newState = [...state];
    switch (action.type) {
        case "RESET":
            newState = [];
            break;
        case "ADD":
            newState.push(action.payload);
            break;
        case "REMOVE":
            newState = newState.filter((filter) => filter !== action.payload);
            break;
        default:
            break;
    }
    return newState;
}


export const useCategoryFilters = () => {
    const [categoryFilters, dispatch] = useReducer(filterReducer, []);
    return [categoryFilters, dispatch] as const;
}
