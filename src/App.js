import './App.css';
import react, { useState } from 'react';
import reactDom from 'react-dom';
import Todolist from './Todolist';
function App() {

const [item,setinput]=useState();
const setitems =(event)=>{
  setinput(event.target.value);
}

const [updateitem,arrayitems]=useState([]);
const listofitems =()=>{
  if ([item]==""){
 alert("Enter a Valid Task");
}
else{
  arrayitems((olditems)=>{
    return [...olditems,item];
  });
  setinput("");
}
};
const deleteitem=(id)=>{
  arrayitems((olditems)=>{
return olditems.filter((arrele,index)=>{
return index !== id;
});
  });
}

  return (
    <>
      <div className="container">
<div className="heading">TO DO LIST</div>
<div className="inpmobile"><input type="text" placeholder="ADD A TASK" className="inp" onChange={setitems} value={item}/>
<button className="btn" onClick={listofitems}>+</button></div>
<div className="oldiv">
  <ol>
    
    {
    updateitem.map((itemval,index)=>{
     return <Todolist key={index} id={index} text={itemval} onSelect={deleteitem}/>
  })
  }
   
  </ol>
</div>
      </div>
      
      
    </>
  );
}

export default App;
