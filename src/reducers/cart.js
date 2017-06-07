export default (state = [], payload) => {
    switch (payload) {
        case 'ADD':
            return [...state, payload.item]
        default:
            return state
    }
}