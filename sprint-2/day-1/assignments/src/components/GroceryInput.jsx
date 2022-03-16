import { useState } from "react";

function GroceryInput({addto}) {

    const [text, setText] = useState("")

    

    return (
      <div className="GroceryInput">
        <input type="text" placeholder="Item name"
          onChange={e => {
            setText(e.target.value)
          }}
        />
        <br />
        <button onClick={()=>{
            addto(text)
        }}>Add Item</button>
      </div>
    );
  }
  
  export default GroceryInput;