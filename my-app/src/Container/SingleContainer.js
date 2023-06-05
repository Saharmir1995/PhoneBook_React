import PhoneContextProvider from '../Context/Context'
import SinglePhone from "../Components/SinglePhone/SinglePhone";

const SingleContainer = () => {
    return (
        <PhoneContextProvider>
            <SinglePhone/>
        </PhoneContextProvider>
    )
}

export default SingleContainer