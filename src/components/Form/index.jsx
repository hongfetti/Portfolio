import { useState } from 'react';
import './style.css';
import validateEmail from '../utils/helper.js';

function Form() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [textArea, setTextArea] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === 'email') {
      setEmail(inputValue);
    } else if (inputType === 'name') {
      setName(inputValue);
    } else {
      setTextArea(inputValue);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!validateEmail(email) || !name || !textArea) {
      setErrorMessage('Email is invalid or name was left blank. Please try enter the required fields.');
      return;
    }
    // if (!checkPassword(password)) {
    //   setErrorMessage(
    //     `Choose a more secure password for the account: ${userName}`
    //   );
    //   return;
    // }
    alert(`Hello ${name}`);

    setName('');
    setTextArea('');
    setEmail('');
  };

  return (
    <main className="container text-center">
      <h1>Hello {name}</h1>
      <div className="container" id='form-container'>
      <form className="form" onSubmit={handleFormSubmit}>
        <input
          value={name}
          name="name"
          onChange={handleInputChange}
          type="text"
          placeholder="Enter name"
        />
        <input
          value={email}
          name="email"
          onChange={handleInputChange}
          type="email"
          placeholder="Enter email"
        />
        <input
          value={textArea}
          name="text area"
          onChange={handleInputChange}
          type="text"
          placeholder="Enter Text"
        />
        <button type="submit">Submit</button>
      </form>
      </div>
      {errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
      )}
    </main>
  );
}

export default Form;
