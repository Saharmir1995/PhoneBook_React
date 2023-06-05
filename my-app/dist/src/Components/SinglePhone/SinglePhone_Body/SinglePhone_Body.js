import Box from '@mui/material/Box';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import AccountCircle from '@mui/icons-material/AccountCircle';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import GroupIcon from '@mui/icons-material/Group';
import PhoneIcon from '@mui/icons-material/Phone';
import Checkbox from '@mui/material/Checkbox';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import './SinglePhone_Body.css'
import {useEffect} from "react";


const SinglePhone_Body = ({user ,dispatch}) => {
    const handleFavorite = id => {
        dispatch({type: 'FavoriteContact', payload: {id}})
    }
    useEffect(()=>{},[user])
    return (
        <Box className={'SinglePhone_Body'} sx={{'& > :not(style)': {m: 1, width: '80%'},}}>
            <TextField disabled value={user.fullName} id="input-with-icon-textfield" label="User Name" InputProps={{startAdornment: (<InputAdornment position="start"><AccountCircle/></InputAdornment>),}} variant="standard"/>
            <TextField disabled value={user.number} id="input-with-icon-textfield" label="Number" InputProps={{startAdornment: (<InputAdornment position="start"><PhoneIcon/></InputAdornment>),}} variant="standard"/>
            <TextField disabled value={user.age} id="input-with-icon-textfield" label="Age" InputProps={{startAdornment: (<InputAdornment position="start"><CalendarTodayIcon/></InputAdornment>),}} variant="standard"/>
            <TextField disabled value={user.group} id="input-with-icon-textfield" label="Group" InputProps={{startAdornment: (<InputAdornment position="start"><GroupIcon/></InputAdornment>),}} variant="standard"/>
            <div className={'SinglePhone_Body-Favorite'}>
                Favorite Contact
                <Checkbox onClick={()=>handleFavorite(user.id)} checked={user.favorite} size={'large'} color={'error'} icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
            </div>
        </Box>
    )
}

export default SinglePhone_Body