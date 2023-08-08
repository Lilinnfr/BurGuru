import React, { useState } from "react";

export default function LoginForm() {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); // Empêcher le rechargement de la page
    alert(`Bonjour ${inputValue}`);
    setInputValue(""); // Vider le formulaire après soumission
  };

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <form action="submit" onSubmit={handleSubmit}>
      <h1>Bienvenue chez nous !</h1>
      <br />
      <h2>Connectez-vous</h2>
      <input
        value={inputValue} // Valeur de dépaart updatée grâce aux comportements
        onChange={handleChange}
        type="text"
        placeholder="Entrez votre prénom..."
        required
      />
      <button>Accéder à votre espace</button>
    </form>
  );
}
