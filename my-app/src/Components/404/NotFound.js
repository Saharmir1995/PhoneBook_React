import './NotFound.css'
import {Link} from 'react-router-dom'
import Button from '@mui/material/Button';

const NotFound = () => {
    return(
        <div className={'NotFound'}>
            <div>
                404
            </div>
            <div>
                Not Found
            </div>
            <div>
                <Link to={'/phonebook-p1'}>
                    <Button variant="contained" color={'warning'} size={'large'}>
                        Back to Contacts
                    </Button>
                </Link>
            </div>
        </div>
    )
}

export default NotFound