function Grocery({name,amount, comment, handleDeleteClick, id}) {
    return (<>
        <h2>{name}</h2>
        <p>{amount}</p>
        <p>{comment}</p>
        <button onClick={() => handleDeleteClick(id)}>delete</button>
    </>
    )
}
export default Grocery;