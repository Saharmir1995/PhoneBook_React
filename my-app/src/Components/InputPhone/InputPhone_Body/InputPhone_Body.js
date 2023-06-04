import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import AccountCircle from "@mui/icons-material/AccountCircle";
import PhoneIcon from "@mui/icons-material/Phone";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import GroupIcon from "@mui/icons-material/Group";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import {useState} from "react";

const InputPhone_Body = ({setAlert ,dispatch ,params,user , setUser}) => {
    const [select , setSelect] = useState( [{value: 'Student', label: 'Student',}, {value: 'Family', label: 'Family',}, {value: 'Friend', label: 'Friend',},{value: 'Work', label: 'Work',}])
    const handleSubmit = e => {
        e.preventDefault()
        if (params.id === 'newContact'){
            dispatch({type: 'AddNewContact', payload: {user}})
        }else {
            dispatch({type: 'UpdateContact', payload: {user}})
        }
        setAlert({display: 'flex'})
    }
    const handleChange = e => {
        setUser({...user, [e.target.name]: e.target.value})
    }
    return (
        <Box component="form" onSubmit={handleSubmit} className={'SinglePhone_Body'} sx={{'& > :not(style)': {m: 1, width: '80%'},}}>
            <TextField required onChange={handleChange} value={user.fullName} id="input-with-icon-textfield" name={'fullName'} label="User Name" InputProps={{startAdornment: (<InputAdornment position="start"><AccountCircle/></InputAdornment>),}} variant="standard"/>
            <TextField required onChange={handleChange} value={user.number} id="input-with-icon-textfield" name={'number'} label="Number" InputProps={{startAdornment: (<InputAdornment position="start"><PhoneIcon/></InputAdornment>),}} variant="standard"/>
            <TextField required onChange={handleChange} value={user.age} id="input-with-icon-textfield" name={'age'} label="Age" InputProps={{startAdornment: (<InputAdornment position="start"><CalendarTodayIcon/></InputAdornment>),}} variant="standard"/>
            <TextField required onChange={handleChange} id="filled-select-currency" select label="Select" name={'group'} value={user.group}  variant="filled">
                {select.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                        {option.label}
                    </MenuItem>
                ))}
            </TextField>
            <Button type={'submit'} variant="contained" color="success">Save</Button>
        </Box>
    )
}

export default InputPhone_Body