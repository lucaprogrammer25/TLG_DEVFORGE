import closeButton from "../../assets/icons/x-close.svg";
import { useNavigate } from "react-router-dom";



const LoginForm = ({closeLoginForm}:any) => {

  const navigate = useNavigate();

  const handleGoToRegistration = () => {
    navigate("/register");
    closeLoginForm();
  }

  return (
    <div className="loginBox">
      <img className="closeButton" src={closeButton} alt="x" onClick={closeLoginForm}/>
      <div className="loginForm">
        <h2>LOGIN</h2>
        <h4>
          Inserisci e-mail e password per accedere alla sezione MyAccount.
        </h4>
        <div className="inputBox">
          <p>e-mail</p>
          <input className="emailInput" type="text" name="" id="" required/>
        </div>
        <div className="inputBox">
          <p>password</p>
          <input className="passwordInput" type="text" name="" id="" required/>
        </div>
        <button className="loginButton">Login</button>
        <p className="forgotPassword">Hai dimenticato la password?</p>
        <div className="separingLine" />
        <div className="registerQuestion">
          <h3>Non sei ancora registrato?</h3>
          <p>Crea adesso un account e approfitta dei nostri vantaggi</p>
          <button className="registerButton" onClick={handleGoToRegistration} >Registrati</button>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
