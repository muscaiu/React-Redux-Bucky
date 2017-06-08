export const selectUser = (user) => {
    console.log('selecting user:', user)
    return {
        type: 'USER_SELECTED',
        payload: user,
    }
}