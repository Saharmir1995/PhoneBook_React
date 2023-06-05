import './MainPhone_Head.css'
import AddCircleIcon from '@mui/icons-material/AddCircle';
import {Link} from  'react-router-dom'

const MainPhone_Head = ({state}) => {
    return(
        <div className={'MainPhone_Head'}>
            <div className={'MainPhone_Head-Title'}>
                <div className={'MainPhone_Head-Title-Main'}>
                    Contacts
                </div>
                <div className={'MainPhone_Head-Title-Side'}>
                    {state.length} contacts
                </div>
            </div>
            <div className={'MainPhone_Head-Add'}>
                <Link to={'/inputForm/newContact'}>
                    <AddCircleIcon color={'primary'} fontSize={'large'}/>
                </Link>
            </div>
        </div>
    )
}

export default MainPhone_Head