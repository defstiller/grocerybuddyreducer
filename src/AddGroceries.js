function AddGroceries({handleGrocerySubmit, grocery, setGrocery}) {

function handleChange(e) {
    const eventName = e.target.name
    const eventValue = e.target.value
    const randomId = Math.random() * 500
    setGrocery({...grocery, [eventName]:eventValue, id:randomId})
}
return ( //name="" need to be same as object key
    <form onSubmit={handleGrocerySubmit}>
        <label htmlFor="nameInput">Name</label>
        <input type="text" name="name" value={grocery.name} onChange={handleChange}/> 

        <label htmlFor="amountInput">Amount</label>
        <input type="number" name="amount" min="0" value={grocery.amount} onChange={handleChange}/>

        <label htmlFor="commentInput">Comment</label>
        <input type="text" name="comment" value={grocery.comment} onChange={handleChange}/>

        <button type="submit">Submit</button>
    </form>
)
}

export default AddGroceries;