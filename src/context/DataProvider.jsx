import { createContext ,useState} from "react"

export const DataContext = createContext(null);


const DataProvider = ( { children } ) => {
    const [account, setAccount] = useState({username: '' , name: ''})

    return (
        <DataContext.Provider value ={{ // values to export
            account,
            setAccount
        }}>
           {children}
        </DataContext.Provider>
    )

}

export default DataProvider;
// dataProvider stores all the login info of the user