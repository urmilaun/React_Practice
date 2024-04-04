//App.jsimport React from "react";
import React,{useState} from "react";
import Tweet from "./Tweet";

// //props
// function App(){
//   return(
//     <div className="app">
//       <Tweet name="Urmila" message="I am Urmila "/>
//       <Tweet name="Rushika"message="rushika good morning"/>
//       <Tweet name="Shruti" message="Shruti here"/>
//       <Tweet name="Pradnya"message="Pradnya is senior manager"/>
//     </div>
//   );
  
// }

//when you are calling the api

function App(){
  const [users,setUsers]=useState([
    {name:'Urmila',message:'Hello '},
    {name:'Pradnya',message:'good morning '},
    {name:'Rush',message:'Hii '}

  ]);



// function App(){

//   const [isRed, setRed]= useState(false);
//   const[count,setCount]=useState(0);

//   // //When gets data from api and saved in states

//   // const [user,setUser]=useState({
//   //   name:'Urmila',
//   //   age:22,
//   //   posts:['my first post','my lovely summer']
//   // });

//   const increment = ()=>{
//     setCount(count+1);
//     setRed(!isRed);
//   };


  return(
    // <div className="app">
    //   <h1 className={isRed ? "red" : ""}> change my color!</h1>                                                   
      
    //   <button onClick={increment}>Increment</button>
    //   <h2>{count}</h2>

    // </div>
    <div className="app">
      {users.map(user => (
        <Tweet name={user.name}message={user.message}/>
      ))}
    </div>
  );
}

export default App;




