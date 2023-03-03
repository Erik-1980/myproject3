import React, { useState } from "react";

function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (username==='login' && password==='Password1111') {
        alert('Welcome')} else if( username==='login' && password !== '1111'){
            alert('You entered the wrong password')} else {alert('The login you entered does not exist')};
  };

  return (
    <form onSubmit={handleSubmit}>
      <label className='input-usename'>
        Username:
        <input
          type="text"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />
      </label>
      <label className='input-password'>
        Password:
        <input
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
      </label>
      <button type="submit" className="logIn">Login</button>
    </form>
  );
}

export default LoginForm;
