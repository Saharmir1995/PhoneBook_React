import PhoneContextProvider from '../Context/Context'
import InputPhone from "../Components/InputPhone/InputPhone";

const InputContainer = () => {
    return(
        <PhoneContextProvider>
            <InputPhone/>
        </PhoneContextProvider>
    )
}

export default InputContainer