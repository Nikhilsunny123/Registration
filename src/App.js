import React, { useState,useEffect } from "react";


const App = () => {
  const [fname,setFname]=useState("");
  const [lname,setLname]=useState("");
  const [email,setEmail]=useState("");
  const [phone,setPhone]=useState("");
  const [type,setType]=useState("");
  
  
  const [password, setPassword] = useState("");


  useEffect(() => {
    const loggedInUser = localStorage.getItem("email");
    if (loggedInUser) {
      const foundUser = JSON.parse(loggedInUser);
      setEmail(foundUser);
    }
  }, []);

  const handleLogout = () => {
    setEmail({});
    setEmail("");
    setPassword("");
    localStorage.clear();
  };

  
  const handleSubmit = async e => {
    e.preventDefault();
    const user = { email, password };
    
   
    
    
  };

  if (email) {
    return (
      <div>
        {email.fname} is logged in  <br/>
        <button onClick={handleLogout}>logout</button>
      </div>
    );
  }
  return (
    
    <form onSubmit={handleSubmit}>
      <h1 className="reg">Registration form</h1>
      <label> First name: </label>
      <input
        type="text"
        value={fname}
       
        onChange={({ target }) => setFname(target.value)}
      /><br/>
      <label> Last name: </label>
      <input
        type="text"
        value={lname}
       
        onChange={({ target }) => setLname(target.value)}
      /><br/>
      <label> email: </label>
      <input
        type="email"
        value={email}
       
        onChange={({ target }) => setEmail(target.value)}
      /><br/>
      <label> phone number </label>
      <input
        type="text"
        value={phone}
       
        onChange={({ target }) => setPhone(target.value)}
      /><br/>
      <label>type :</label>
      Admin 
      <input
        type="radio"
        value={type}
       
        onChange={({ target }) => setType(target.value)}
      />
      user
       <input
        type="radio"
        value={type}
       
        onChange={({ target }) => setType(target.value)}
      /><br/>


      <div>
        <label htmlFor="password">password: </label>
        <input
          type="password"
          value={password}
          placeholder="enter a password"
          onChange={({ target }) => setPassword(target.value)}
        />
      </div>
      <button type="submit">create</button>
    </form>
  );
};
export default App;