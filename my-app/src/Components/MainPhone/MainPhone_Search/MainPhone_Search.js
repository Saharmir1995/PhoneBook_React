import './MainPhone_Search.css'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

const MainPhone_Search = ({setSearch}) => {
    return(
        <Box component="form" sx={{'& > :not(style)': { m: 0, width: '100%' },}} noValidate autoComplete="off">
            <TextField id="outlined-basic" label="Search ..." variant="outlined" onChange={(event) => setSearch(event.target.value)} />
        </Box>
    )
}

export default MainPhone_Search