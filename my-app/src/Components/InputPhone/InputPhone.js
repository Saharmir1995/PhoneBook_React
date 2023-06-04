import InputPhone_Head from "./InputPhone_Head/InputPhone_Head";
import InputPhone_Body from "./InputPhone_Body/InputPhone_Body";
import InputPhone_Alert from "./InputPhone_Alert/InputPhone_Alert";
import {useContext, useEffect, useState} from "react";
import {PhoneContext} from "../../Context/Context";
import {useParams} from "react-router-dom";

const InputPhone = () => {
    const {state, dispatch} = useContext(PhoneContext)
    const params = useParams()
    const [user, setUser] = useState({ id: '', fullName: '',number:'',group:'' ,age: '' ,favorite:false})
    const [alert , setAlert] = useState({display: 'none'})
    useEffect(() => {
        setUser(state.filter(user => user.id === Number(params.id))[0] || { id: '', fullName: '',number:'',group:'' ,age: '' ,favorite:false})
    }, [state])
    useEffect(()=>{
        const data = localStorage.getItem('state')
        if (data) {
            dispatch({type: 'LocalSave', payload: {data}})
        }
        setAlert({display: 'none'})
        if (params.id === 'newContact') return user
    },[])
    useEffect(() => {
        localStorage.setItem('state', JSON.stringify(state))
    }, [state])
    return(
        <div>
            <InputPhone_Head setUser={setUser}/>
            <InputPhone_Body setAlert={setAlert} params={params} dispatch={dispatch} setUser={setUser} user={user}/>
            <InputPhone_Alert alert={alert}/>
        </div>
    )
}

export default InputPhone