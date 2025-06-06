import { createContext, useState, useContext } from "react";

const MediaContext = createContext();

export function useMedia() {
    return useContext (MediaContext);
}