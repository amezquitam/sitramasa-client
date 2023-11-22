import { useState } from "react"
import { AppContext } from "./AppContext"
import { ChildProp } from "../util/interfaces/ChildProp"

export const AppProvider = ({ children }: ChildProp) => {
    const [role, setRole] = useState<string>('none')

    return (
        <AppContext.Provider value={{ role, setRole }}>
            { children }
        </AppContext.Provider>
    )
}