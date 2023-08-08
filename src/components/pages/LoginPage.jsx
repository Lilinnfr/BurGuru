import { useState } from "react";

export default function LoginPage() {
  //state
  const [inputValue, setInputValue] = useState("");
  //comportement
  const handleSubmit = (e) => {
    e.preventDefault(); // Empêcher le rechargement de la page
    alert(`Bonjour ${inputValue}`);
    setInputValue(""); // Vider le formulaire après soumission
  };

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  //render
  return (
    <div>
      <h1>Bienvenue chez nous !</h1>
      <br />
      <h2>Connectez-vous</h2>
      <form action="submit" onSubmit={handleSubmit}>
        <input
          value={inputValue} // Valeur de dépaart updatée grâce aux comportements
          onChange={handleChange}
          type="text"
          placeholder="Entrez votre prénom..."
          required
        />
        <button>Accéder à votre espace</button>
      </form>
    </div>
  );
}
