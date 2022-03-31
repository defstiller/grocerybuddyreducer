function reducer (state, action) {
    if (action.type === "ADD_ITEM") {
        const newGrocery = [...state.groceries, action.payload]
        return {
            groceries: newGrocery,
            isModalOpen: true,
            modalContent: 'Success'
        }
    } else if (action.type === "NO_NAME") {
        return {...state, isModalOpen: true, modalContent: 'Please enter a name'}
    } else if (action.type === "NO_COMMENT"){
        return {...state, isModalOpen: true, modalContent: 'Please enter a comment'}
    } else if (action.type === "CLOSE_MODAL") {
        return {...state, isModalOpen:false}
    } else if (action.type === "CLEAR") {
        return {    
            groceries: [],
            isModalOpen: true,
            modalContent: 'Cleared'}
    } else if (action.type === "DELETE") {
        const newGroceries = state.groceries.filter(grocery => grocery.id !== action.payload && grocery)
        return {
            groceries:newGroceries,
            isModalOpen:true,
            modalContent: 'Deleted'
        }
    }
}
export default reducer;