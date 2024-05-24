import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    nome: "",
    cognome: "",
    indirizzo: "",
    email: "",
    password: "",
    confermaPassword: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const [isValid, setIsValid] = useState(true);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    if (name === "password") {
      setIsValid(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
          value
        )
      );
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (formData.password !== formData.confermaPassword) {
      setError("Le password non coincidono");
      return;
    }

    const { confermaPassword, ...dataToSave } = formData;

    localStorage.setItem("userData", JSON.stringify(dataToSave));
    setError("");
    alert("Registrazione avvenuta con successo");
    navigate("/");
  };

  return (
    <div className="registrationContainer">
      <h2 className="registrationTitle">Modulo di Registrazione</h2>
      <form className="registrationForm" onSubmit={handleSubmit}>
        <div className="formGroup">
          <label className="formLabel">Nome:</label>
          <input
            type="text"
            name="nome"
            className="formInput"
            value={formData.nome}
            onChange={handleChange}
            required
          />
        </div>
        <div className="formGroup">
          <label className="formLabel">Cognome:</label>
          <input
            type="text"
            name="cognome"
            className="formInput"
            value={formData.cognome}
            onChange={handleChange}
            required
          />
        </div>
        <div className="formGroup">
          <label className="formLabel">Indirizzo:</label>
          <input
            type="text"
            name="indirizzo"
            className="formInput"
            value={formData.indirizzo}
            onChange={handleChange}
            required
          />
        </div>
        <div className="formGroup">
          <label className="formLabel">Email:</label>
          <input
            type="email"
            name="email"
            className="formInput"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="formGroup">
          <label className="formLabel">Password:</label>
          <input
            type="password"
            name="password"
            className="formInput"
            value={formData.password}
            onChange={handleChange}
            required
            pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$"
          />
        </div>
        <div className="formGroup">
          <label className="formLabel">Conferma Password:</label>
          <input
            type="password"
            name="confermaPassword"
            className="formInput"
            value={formData.confermaPassword}
            onChange={handleChange}
            required
          />
        </div>
        {!isValid && (
          <p className="passwordAdvise">
            Password must be at least 8 characters long and contain at least one
            uppercase letter, one lowercase letter, one digit, and one special
            character.
          </p>
        )}
        {error && <p className="errorMessage">{error}</p>}
        <button type="submit" className="submitButton">
          Registrati
        </button>
      </form>
    </div>
  );
};

export default RegistrationForm;
