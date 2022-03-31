import {useState, useReducer, useEffect} from "react"
import AddGroceries from "./AddGroceries"
import reducer from "./reducer"
import Modal from "./Modal"
import Grocery from "./Grocery"


function Groceries() {
/* This is a way to get the local storage data into the state. */
const [groceryLocalList, setLocalList] = useState(JSON.parse(window.localStorage.getItem("groceries")) || [])
const [grocery, setGrocery] = useState({name:"", amount:1, comment:"", id:0})
/* This is setting the default state for the reducer. */
const defaultState = {
    groceries: groceryLocalList,
    isModalOpen: false,
    modalContent: ''
}
const [state, setState] = useReducer(reducer, defaultState)


function handleGrocerySubmit(e) {
    e.preventDefault()
/* This is a way to check if the user has entered a name and comment. If they have not, then we will
display a modal. */
    if(!grocery.name) {
        setState({type:'NO_NAME'})
    } else if (!grocery.comment) {
        setState({type:'NO_COMMENT'})
    } else {
        const newItem = { ...grocery, id:Math.random() * 500}
        setState({type:'ADD_ITEM', payload: newItem})
    }
}
function handleDeleteClick(id) {
    setState({type:'DELETE', payload:id})
}
function closeModal() { // function to trigger modal to close
    setState({type:'CLOSE_MODAL'})
}

function handleClearClick() {
    setState({type:'CLEAR'})
}
/* This is a way to save the data to the local storage when state updates*/
useEffect(() =>{
    window.localStorage.setItem("groceries", JSON.stringify(state.groceries))
}, [state])


return ( <>
    {state.isModalOpen && <Modal closeModal={closeModal} modalContent={state.modalContent}/>}

    <AddGroceries handleGrocerySubmit={handleGrocerySubmit} grocery={grocery} setGrocery={setGrocery}/>

    {state.groceries.map(grocery => <Grocery key={grocery.id} {...grocery} handleDeleteClick={handleDeleteClick}/>)}

    {state.groceries.length > 0 && <button onClick={handleClearClick}>Clear</button>}
</>)
}   

export default Groceries;