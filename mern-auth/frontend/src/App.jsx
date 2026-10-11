import { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");


const [loginEmail, setLoginEmail] = useState("");
const [loginPassword, setLoginPassword] = useState("");
const [loginMessage, setLoginMessage] = useState("");




  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("http://localhost:5000/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        password,
      }),
    });

    const data = await response.json();

    console.log(data);

    setMessage(data.message);
  };

const handleLogin = async (e) => {
  e.preventDefault();

  const response = await fetch("http://localhost:5000/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: loginEmail,
      password: loginPassword,
    }),
  });

  const data = await response.json();

  console.log(data);

  if (response.ok) {
    localStorage.setItem("token", data.token);
    setLoginMessage("Prisijungimas sėkmingas");
  } else {
    setLoginMessage(data.message);
  }
};








  
   return (
  <div>
    <h1>Registracija</h1>

    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Vardas"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        type="email"
        placeholder="El. paštas"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="Slaptažodis"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button type="submit">Registruotis</button>
    </form>

    {message && <p>{message}</p>}

    <h1>Prisijungimas</h1>

    <form onSubmit={handleLogin}>
      <input
        type="email"
        placeholder="El. paštas"
        value={loginEmail}
        onChange={(e) => setLoginEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="Slaptažodis"
        value={loginPassword}
        onChange={(e) => setLoginPassword(e.target.value)}
      />

      <button type="submit">Prisijungti</button>
    </form>

    {loginMessage && <p>{loginMessage}</p>}
  </div>
);
}


export default App;