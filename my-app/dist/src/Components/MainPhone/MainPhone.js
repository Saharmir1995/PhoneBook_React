import MainPhone_Table from "./MainPhone_Table/MainPhone_Table";
import MainPhone_Head from "./MainPhone_Head/MainPhone_Head";
import MainPhone_Filter from "./MainPhone_Filter/MainPhone_Filter";
import MainPhone_Search from "./MainPhone_Search/MainPhone_Search";
import MainPhone_Alert from "./MainPhone_Alert/MainPhone_Alert";
import {useContext, useState ,useEffect} from "react";
import {PhoneContext} from "../../Context/Context";

const MainPhone = () => {
    const {state, dispatch} = useContext(PhoneContext)
    const [alert , setAlert] = useState({display:'none',id:''})
    const [search ,setSearch] = useState('')
    const [filter ,setFilter] = useState(false)
    useEffect(() => {
        const data = localStorage.getItem('state')
        if (data) {
            dispatch({type: 'LocalSave', payload: {data}})
        }
    }, [])
    useEffect(() => {
        localStorage.setItem('state', JSON.stringify(state))
    }, [state])
    return(
        <div>
            <MainPhone_Alert dispatch={dispatch} alert={alert} setAlert={setAlert}/>
            <MainPhone_Head state={state}/>
            <MainPhone_Search setSearch={setSearch}/>
            <MainPhone_Filter setFilter={setFilter}/>
            <MainPhone_Table filter={filter} search={search} state={state} setAlert={setAlert}/>
        </div>
    )
}

export default MainPhone