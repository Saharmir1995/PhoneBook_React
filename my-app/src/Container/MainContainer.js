import PhoneContextProvider from '../Context/Context'
import MainPhone from "../Components/MainPhone/MainPhone";

const MainContainer = () => {
    return(
        <PhoneContextProvider>
            <MainPhone/>
        </PhoneContextProvider>
    )
}

export default MainContainer