import { useState } from "react";
import GroceryInput from "./GroceryInput";
import GroceryList from "./GroceryList";
import { nanoid } from 'nanoid'

function Grocery() {
  const [groceryData, setGroceryData] = useState([]);

  const addto = (data) => {
    const i ={
      id:nanoid(),
      title:data,
      status:false
    }
    setGroceryData([...groceryData,i])
  }

  const deleteItem=(id)=>{
    let list = groceryData.filter((e)=>{
      return e.id!=id
    })
    setGroceryData([...list])
  }

  return (
    <div className="Grocery">
      <GroceryInput addto = {addto} />
        <div id="output">
            {groceryData.map((e) => (
              <GroceryList value={e} key={e.id} deleteItem={deleteItem} />
        ))}</div>
      
    </div>
  );
}

export default Grocery;
