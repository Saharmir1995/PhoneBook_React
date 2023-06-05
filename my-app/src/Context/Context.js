import {useReducer, createContext} from "react";
import Data from "../Data/Data";
import Reducer from "../Reducer/Reducer";

export const PhoneContext = createContext({state:[] , dispatch: ()=>{}})

const PhoneContextProvider = ({children}) => {
    const [state ,dispatch] = useReducer(Reducer , Data)
    return(
        <PhoneContext.Provider value={{state , dispatch}}>
            {children}
        </PhoneContext.Provider>
    )
}

export default PhoneContextProvider