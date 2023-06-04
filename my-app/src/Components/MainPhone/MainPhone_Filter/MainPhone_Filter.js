import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PersonPinIcon from '@mui/icons-material/PersonPin';
import {useEffect, useState} from "react";

const MainPhone_Filter = ({setFilter}) => {
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    useEffect(()=>{
        if (value === 0) return setFilter(false)
        else return setFilter(true)
    },[value])
    return (
        <Tabs centered value={value} onChange={handleChange} aria-label="icon tabs example">
            <Tab style={{width: '50%'}} icon={<PersonPinIcon color={'primary'}/>} aria-label="person"/>
            <Tab style={{width: '50%'}} icon={<FavoriteIcon color={'error'}/>} aria-label="favorite"/>
        </Tabs>
    )
}

export default MainPhone_Filter