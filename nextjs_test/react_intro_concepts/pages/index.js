import { useState } from "react";

function Header({title}) {
  return (<h1>{title ? title : "Default Title"}</h1>)
}

export default function Homepage() {
  const [likes, setLikes] = useState(0);
  const names = ['Ada Lovelace', 'Grace Hopper', 'Margaret Hamilton']

  function handleClick() {
    setLikes(likes + 1)
  }

  return (
    <div>
      <Header title="Develop. Preivew. Ship 🚀"/>
      <ul>
        {names.map((name) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
      <button onClick={handleClick}>Likes ({likes})</button>
    </div>
    )
}
