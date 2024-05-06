// import React, { useState } from 'react'

// const App = () => { 
   
//   const [username , setname]=useState("")

//   const form_handler= (event)=>{ 
//        event.preventDefault();
//        console.log(username); 
      
//   }
//   return (
//  <>
//    <form onSubmit={form_handler}> 
//     <input onChange={(e)=>setname(e.target.value)} name='username' value={username} type="text" placeholder='name' /> <br /><hr />
//     <input type="email" name='email' placeholder='email'/><br /><hr />
//     <button>Submit</button>
//    </form>
//  </>
//   )
// }

// export default App


// import React, { useState } from 'react'

// const App = () => {

//   const[username, setname] = useState("") 

//   const handel_input_value=(event)=>{ 
//            console.log((event.target.value));
//   }
//   const form_handler =(event)=>{ 
//     event.preventDefault()
//         console.log(event.target.username.value); 
//         console.log(username);
//   }
//   return (
//     <div>
//        <form onSubmit={form_handler}> 
//         <input onChange={handel_input_value} value={username} type="text" name='username' placeholder='name'/>
//         <input type="text" placeholder='email'/>
//         <button>Submit</button>
//        </form>
//     </div>
//   )
// }

// export default App



// import React, { useState } from 'react'

// const App = () => { 

//   const[username,setusername]=useState("") 
//   const[gender,setgender]=useState("male") 
//   const[city,setcity]=useState("mumbai") 
//   const[discription,setdisc]=useState("enter")
//   const[accept,setaccept]=useState("sdf")

//   const input_handler=(event)=>{ 
//     event.preventDefault();
//      console.log(username);
//   }

//   return (
//     <div>
//     <form onSubmit={input_handler}> 
//       <input onChange={(e)=> setusername(e.target.value)} value={username} type="text" placeholder='name' /> <br /> 
//       <input type="password" placeholder='password' /> <br /> 
//       <input type="email" placeholder='email' /><br /> 
//       <input type="search"  placeholder='search'/><br /> 
//       <textarea defaultValue={discription} 
//       onChange={(e)=>setdisc(e.target.value)}  cols="30" rows="10"></textarea> <br /> 
//       <select 
//       defaultValue={city} 
//       onChange={(e)=>setcity(e.target.value)}> 
//         <option  value="delhi">Delhi</option> 
//         <option value="mumbai">Mumbai</option> 
//         <option value="raipur">raipur</option> 
//         <option value="chhatisharh">chattisgarh</option> 
//       </select>
//       <input type="checkbox" onChange={(e)=> setaccept(e.target.value)} checked={(accept =="true" ? true : false)}  value="male"/  />  <br />
//       <input type="radio"  onChange={(e)=> setgender(e.target.value)} checked={(gender =="male" ? true : false)}  value="male"/> male 
//       <input type="radio" onChange={(e)=> setgender(e.target.value)} value="female" /> female <br />
//       <input type="submit" /><br/>
//     </form>
//   </div>
  
//   )
// }

// export default App


// From handeling ////////// ......................................................... 

import React, { useState } from 'react';

const App = () => { 
  const [user,setuser]=useState([])
  const [username, setUsername] = useState("");
  const [gender, setGender] = useState("male");
  const [city, setCity] = useState("mumbai");
  const [description, setDescription] = useState("enter");
  const [accept, setAccept] = useState(false);
  
  const input_handler = (event) => { 
    event.preventDefault();
    console.log(username);
    // Add your form submission logic here 
      const newuser={username,gender,city,description}
      // setuser([...user,newuser])  
       
    const copyuser =[...user] 
    copyuser.push(newuser)
    setuser(copyuser)
    setUsername('')
    setDescription('')
    setCity("mumbai") 
    setGender("male") 
  };
  const listrender =user.length>0 ? user.map((user,index)=>{ 
    return(
      <div key={index}>
        <h1>{user.username}</h1> 
        {user.city} 
        {user.gender}
      </div>
    )
  }):"no data present" 
  
  return (
    <div>
      <form onSubmit={input_handler}> 
        <input 
          onChange={(e) => setUsername(e.target.value)} 
          value={username} 
          type="text" 
          placeholder='name' 
        /> <br /> 
        <textarea 
          value={description} 
          onChange={(e) => setDescription(e.target.value)}  
          cols="30" 
          rows="10"
        ></textarea> <br /> 
        <select 
          value={city} 
          onChange={(e) => setCity(e.target.value)}
        > 
          <option value="delhi">Delhi</option> 
          <option value="mumbai">Mumbai</option> 
          <option value="raipur">Raipur</option> 
          <option value="chattisgarh">Chattisgarh</option> 
        </select>
        <input 
          type="checkbox" 
          onChange={(e) => setAccept(e.target.checked)} 
          checked={accept}
        />  <br />
        <input 
          type="radio"  
          onChange={(e) => setGender(e.target.value)} 
          checked={gender === "male"}  
          value="male"
        /> Male 
        <input 
          type="radio" 
          onChange={(e) => setGender(e.target.value)} 
          checked={gender === "female"} 
          value="female" 
        /> Female <br />
        <input type="submit" /><br/>
      </form>
      {listrender}
    </div>
  );
}

export default App;






// From handeling ////////// .........................................................  



// two way binding   
// import React, { useState } from 'react'

// const App = () => {
     
//     const[name, setname]=useState("")
    
//     const form_handler = (event)=>{ 
//              event.preventDefault();  
//              console.log(name);
//     }

//   return (
//     <div>
//          <form  onSubmit={form_handler}>
//           <input onChange={(e)=>setname(e.target.value)} type="text" name='name' value={name} placeholder='name' /> <br />
//           <input type="text" placeholder='email' />  <br />
//           <button>Submit</button>
//          </form>
//     </div>
//   )
// }

// export default App
// Lexical, set time out , clouser , scope 

// import React from 'react'

// const App = () => {
//   return (
//     <div>
         
//     </div>
//   )
// }

// export default App




