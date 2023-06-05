import './SinglePhone_Avatar.css'

const SinglePhone_Avatar = ({user}) => {
    return(
        <div className={'SinglePhone_Avatar'}>
            <div className={'SinglePhone_Avatar-Shape'}>
                <img src={'https://robohash.org/' + user.id} alt={user.id}/>
            </div>
            <div>
                <h2>
                    {user.fullName}
                </h2>
            </div>
        </div>
    )
}

export default SinglePhone_Avatar