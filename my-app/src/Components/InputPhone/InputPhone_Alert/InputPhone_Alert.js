import Alert from '@mui/material/Alert';
import {Link} from 'react-router-dom'

const InputPhone_Alert = ({alert}) => {
    return(
        <Alert style={{display:alert.display}}>
            <Link to={'/phonebook-p1'}>
                Back to Contacts
            </Link>
        </Alert>
    )
}

export default InputPhone_Alert