function GroceryList({value,deleteItem}) {

  // console.log({value})

    return (
      <div className="box">
        <div>{value.title}</div>
        <div>{value.id}</div>
        <button className="size"
        onClick={()=>{
          deleteItem(value.id)
        }}>Delete</button>
      </div>
    );
  }
  
  export default GroceryList;
