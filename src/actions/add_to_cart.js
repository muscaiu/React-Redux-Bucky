export const addToCart = (item) => {
    console.log('adding item:', item)
    return {
        type: 'ADD',
        item
    }
}