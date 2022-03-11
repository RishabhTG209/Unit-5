function GroceryList({value,deleteItem}) {

  // console.log({value})

    return (
      <div className="box">
        <div>{value.title}</div>
        <button className="size"
        onClick={()=>{
          deleteItem(value.id)
        }}>Delete</button>
      </div>
    );
  }
  
  export default GroceryList;
