import Alert from '@mui/material/Alert';
import CheckIcon from '@mui/icons-material/Check';
import ClearIcon from '@mui/icons-material/Clear';

const MainPhone_Alert = ({alert, setAlert, dispatch}) => {
    const handleDelete = id =>{
        dispatch({type: 'DeleteContact', payload: {id}})
        setAlert({display:'none',id:''})
    }
    return (
        <Alert variant="filled" severity="error" style={{display: alert.display}} action={
            <div>
                <CheckIcon cursor={'pointer'} onClick={()=>handleDelete(alert.id)}/>
                <ClearIcon cursor={'pointer'} onClick={()=>setAlert({display:'none',id:''})} />
            </div>}>
            Are you sure to delete ?
        </Alert>
    )
}

export default MainPhone_Alert