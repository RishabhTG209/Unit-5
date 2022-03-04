

function Mobile(props){
    const array = props.data

    return(
        <div>
            <h1>{props.value}</h1>
            <ul>
            {array.map(elem =>{
                    return <li>{elem}</li>
            })}
            </ul>
        </div>

    )
}



export default Mobile