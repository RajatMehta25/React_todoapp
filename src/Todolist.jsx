import react from "react";
import reactDom from "react-dom";

const Todolist=(props)=>{


    return(
        <> 
        <li>{props.text}&emsp;&emsp;<span className="material-icons" onClick={()=>{
            props.onSelect(props.id);
        }}>remove_circle</span></li>
     </> );
}
export default Todolist;