import React, { createContext, useState } from "react";

const CountContext = createContext(undefined);

function CountProvider({ children }) {
    // const [CountDetails, setCountDetails] = useState({
    //     Countname: "John Doe"
    // });

    const [count, setCount] = useState(0)

    return (
        <CountContext.Provider value={{ count, setCount }}>
            {children}
        </CountContext.Provider>
    );
}

export { CountProvider, CountContext };