function GroceryList({value}) {

  // console.log({value})

    return (
      <div className="box">
        <div>{value}</div>
        <button className="size">Delete</button>
      </div>
    );
  }
  
  export default GroceryList;
