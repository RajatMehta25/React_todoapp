import './App.css';
import react, { useState } from 'react';
import reactDom from 'react-dom';

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

  return (
    <>
      <div className="container">
<div className="heading">TO DO LIST</div>
<div className="inpmobile"><input type="text" placeholder="ADD A TASK" className="inp" onChange={setitems} value={item}/>
<button className="btn" onClick={listofitems}>+</button></div>
<div className="oldiv">
  <ol>
    
    {updateitem.map((itemval)=>{
      return <li>{itemval}</li>;
    })}
   
  </ol>
</div>
      </div>
      
      
    </>
  );
}

export default App;
