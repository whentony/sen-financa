import  { createContext, useState } from 'react';

export const TableContext = createContext();
TableContext.displayName = 'Table';
export const TableProvider = ({ children }) =>{
    const [data, setData] = useState([]);
    return(
        <TableContext.Provider value = {{ data, setData }}>
            {children}
        </TableContext.Provider>
    )
}