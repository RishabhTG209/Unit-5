// import "./button.css";
import styled from "styled-components";

const Button = styled.button`
    border: none;
    background-color: ${({theme})=>
        (theme == "light" ? "black" : "aqua")
    };
    font-size:20px;
    border-radius:4px;
    padding:10px;
    color: tomato;
    margin-top:2%;
    cursor: pointer;

    &:hover{
        transition:1s;
        padding:20px;
    }
`;
export {Button}

// export const Button =  ({children,onClick})=>{
//     return(
//         <button onClick={onClick} className="mybutton">
//             {children}
//         </button>
//     )
// }

// CSS IN JS

