import React, { createContext } from "react";

export type AppContextType = {
    role: string,
    setRole: React.Dispatch<React.SetStateAction<string>>,
}

export const AppContext = createContext<AppContextType>({} as AppContextType)
