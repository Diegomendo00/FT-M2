import React from "react";
import { useState } from "react";

export default function Form() {
//   const [username, setUsername] = useState();
//   const [password, setPassword] = useState();
const [input, setInput] = useState({
	username: "",
	password: 
})

const handleInputChange =() => {
	...input,
	[e.target.name] : e.target.value
}
//   const clear =() => {
// 	  setUsername("");
// 	  setPassword("")
//   }

  return (
    <div>
      <div>
        <label>Username:</label>
        <input type="text" name="username" value={username} onChange={handleInputChange} />
      </div> 
      <div>
        <label>Password:</label>
        <input type="password" name="username" value={password} onChange={handleInputChange}/>
        <input type="submit" />
      </div>
    </div>
  );
}
