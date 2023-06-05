import './InputPhone_Head.css'
import RotateLeftIcon from '@mui/icons-material/RotateLeft';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import {Link} from 'react-router-dom'

const InputPhone_Head = ({setUser}) => {
    const handleReset = () =>{
        setUser({id: '', fullName: '',number:'',group:'' ,age: '' ,favorite:false})
    }
    return(
        <div className={'InputPhone_Head'}>
            <div>
                <Link to={'/phonebook-p1'}>
                    <KeyboardBackspaceIcon/>
                </Link>
            </div>
            <div>
                <RotateLeftIcon cursor={'pointer'} onClick={handleReset}/>
            </div>
        </div>
    )
}

export default InputPhone_Head