import {createContext, useState} from "react";

export const UserContext = createContext(null);

function UserContextProvider({children}) {
    const [searchResult, setSearchResult] = useState("neele neele ambar par");
    return (
        <UserContext.Provider
            value={{
                searchResult,
                setSearchResult
            }}>
            {children}
        </UserContext.Provider>
    );
}
export default UserContextProvider;
