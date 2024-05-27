import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import closeButton from '../../assets/icons/x-close.svg';
import { FormattedMessage } from 'react-intl';

const LoginForm = ({ closeLoginForm }: any) => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [error, setError]: any = useState('');
  const [isSubmitEnabled, setIsSubmitEnabled] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    checkCredentials({ ...formData, [name]: value });
  };

  const checkCredentials = (data: { email: string; password: string }) => {
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const user = users.find(
      (user: any) => user.email === data.email && user.password === data.password
    );

    if (user) {
      setIsSubmitEnabled(true);
    } else {
      setIsSubmitEnabled(false);
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const user = users.find(
      (user: any) => user.email === formData.email && user.password === formData.password
    );

    if (user) {
      setError('');
      alert('Login effettuato con successo');
      closeLoginForm();
      setFormData({
        email: '',
        password: '',
      });
      navigate('/');
    } else {
      setError(
        <FormattedMessage id="login error" defaultMessage="Password or e-mail wrong or invalid" />
      );
    }
  };

  const handleGoToRegistration = () => {
    navigate('/register');
    closeLoginForm();
  };

  return (
    <div className="loginBox">
      <img className="closeButton" src={closeButton} alt="x" onClick={closeLoginForm} />
      <div className="loginFormBox">
        <h2>LOGIN</h2>
        <h4>
          <FormattedMessage
            id="login notifications"
            defaultMessage="Enter your email and password to access the MyAccount section."
          />
        </h4>
        <form className="loginForm" onSubmit={handleSubmit}>
          <div className="inputBox">
            <label>e-mail</label>
            <input
              className="emailInput"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="inputBox">
            <label>password</label>
            <input
              className="passwordInput"
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          {error && <p className="errorMessage">{error}</p>}
          <button className="loginButton" type="submit" disabled={!isSubmitEnabled}>
            Login
          </button>
        </form>
        <p className="forgotPassword">
          <FormattedMessage id="forgotten password" defaultMessage="Forgotten Password?" />
        </p>
        <div className="separatingLine" />
        <div className="registerQuestion">
          <h3>
            <FormattedMessage id="registration question" defaultMessage="Are you not registered yet?" />
          </h3>
          <p>
            <FormattedMessage id="registration subtitle" defaultMessage="Register now to use our advantages!" />
          </p>
          <button className="registerButton" onClick={handleGoToRegistration}>
            <FormattedMessage id="registration button" defaultMessage="Register" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
