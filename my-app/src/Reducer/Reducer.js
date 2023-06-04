const Reducer = (state, action) => {
    const { type, payload } = action;
    switch (type){
        case 'DeleteContact':
            return state.filter(contact => contact.id !== payload.id)
        case 'FavoriteContact':
            return state.map(contact => contact.id === payload.id ? {...contact , favorite:(!contact.favorite)} : contact)
        case 'AddNewContact':
            return [...state , {...payload.user , id:Math.floor(Math.random()*1000)}]
        case 'UpdateContact':
            return state.map(contact => contact.id === payload.user.id ? {...payload.user} : contact)
        case 'LocalSave':
            return JSON.parse(payload.data)
        default:
            return state
    }
}

export default Reducer