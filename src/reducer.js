function reducer (state, action) {
    switch (action.type) {
        case "ADD_ITEM":
            const newGrocery = [...state.groceries, action.payload]
            return {
            groceries: newGrocery,
            isModalOpen: true,
            modalContent: 'Success'
            }
        case "NO_NAME":
            return {...state, isModalOpen: true, modalContent: 'Please enter a name'}
        case "NO_COMMENT":
            return {...state, isModalOpen: true, modalContent: 'Please enter a comment'}
        case "CLOSE_MODAL":
            return {...state, isModalOpen:false}
        case "CLEAR":
            return {    
                groceries: [],
                isModalOpen: true,
                modalContent: 'Cleared'}
        case "DELETE":
            const newGroceries = state.groceries.filter(grocery => grocery.id !== action.payload && grocery)
            return {
                groceries:newGroceries,
                isModalOpen:true,
                modalContent: 'Deleted'
            }
        default: throw new Error("No matching action type found")
    }
}
export default reducer;