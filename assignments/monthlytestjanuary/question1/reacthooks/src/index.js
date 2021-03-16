import React, { useState } from "react";
import ReactDOM from "react-dom";


function Viewuser({addUser,index,editUser,removeUser}){
  return(
  <div >
    {addUser.text}
    <div>
    <button onClick={() => editUser(index)}>Edit</button>
    <button onClick={() => removeUser(index)}>Delete</button>
  </div>
  </div>

  );
}

function Adduser({addUser}){

  const [value,setValue] = useState("")


  function handleSubmit(e) {
    e.preventDefault();


    if(!value) return;

    addUser(value)

    setValue("")
  }


  return(
    <form onSubmit={handleSubmit}>
      <input type="text" value={value}
      onChange={e => setValue(e.target.value)}/>
      <input type="email" value={value}
      onChange={e => setValue(e.target.value)}/>
      <input type="text" value={value}
      onChange={e => setValue(e.target.value)}/>
    </form>
  )
}

function App() {

  const [users, setusers] = useState([
    {
      name: "nares",
      email: "nares@gmail.com",
      username: "naresh",
      
    }
   
  ]);


  function addUser(text){
    const newuser = [...users,{text}];
    setusers(newuser);
  }



  function removeUser(index) {
    const newuser = [...users];

    newuser.splice(index,1);

    setusers(newuser);
  }

  return(
    <div className="app">
      {Viewuser.map((Adduser,index) => (
        <Adduser
        key={index}
        index={index}
        users={users}
        removeUser={removeUser}
        />
      ))}
      <Viewuser addUser={addUser}/>
    </div>
  );
}

 
ReactDOM.render(<App />, document.getElementById('root'));
