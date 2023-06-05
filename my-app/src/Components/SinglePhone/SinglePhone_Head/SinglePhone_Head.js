import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import EditIcon from '@mui/icons-material/Edit';
import {Link} from 'react-router-dom'
import './SinglePhone_Head.css'

const SinglePhone_Head = ({user}) => {
    return(
        <div className={'SinglePhone_Head'}>
            <Link to={'/phonebook-p1'}>
                <KeyboardBackspaceIcon/>
            </Link>
            <Link to={`/inputForm/${user.id}`}>
                <EditIcon/>
            </Link>
        </div>
    )
}

export default SinglePhone_Head