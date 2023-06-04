import SinglePhone_Head from "./SinglePhone_Head/SinglePhone_Head";
import SinglePhone_Body from "./SinglePhone_Body/SinglePhone_Body";
import SinglePhone_Avatar from "./SinglePhone_Avatar/SinglePhone_Avatar";
import {useParams} from "react-router-dom";
import {useContext, useEffect, useState} from "react";
import {PhoneContext} from "../../Context/Context";


const SinglePhone = () => {
    const {state, dispatch} = useContext(PhoneContext)
    const params = useParams()
    const [user, setUser] = useState({ id: '', fullName: '',number:'',group:'' ,age: '' ,favorite:false})
    useEffect(() => {
        setUser(state.filter(user => user.id === Number(params.id))[0] || { id: '', fullName: '',number:'',group:'' ,age: '' ,favorite:false})
    }, [state])
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
            <SinglePhone_Head user={user}/>
            <SinglePhone_Avatar user={user}/>
            <SinglePhone_Body   dispatch={dispatch} user={user}/>
        </div>
    )
}

export default SinglePhone