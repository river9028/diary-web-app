import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { RiArrowGoBackFill } from 'react-icons/ri';
import { FaPen } from 'react-icons/fa';
import { FirebaseContext } from '../context/firebase';
import { AuthForm, Header } from '../components';
import * as ROUTES from '../constants/routes';

const SignUp = () => {
  const history = useHistory();
  const { firebase } = useContext(FirebaseContext);

  const [firstName, setFirstName] = useState('');
  const [emailAddress, setEmailAddress] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const isInvalid = firstName === '' || password === '' || emailAddress === '';

  const handleSignup = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const UserCredential = await firebase?.auth().createUserWithEmailAndPassword(emailAddress, password);

    try {
      if (UserCredential?.user) {
        UserCredential.user
          .updateProfile({
            displayName: firstName,
          })
          .then(() => {
            history.push(ROUTES.HOME);
          });
      }
    } catch (error) {
      setFirstName('');
      setEmailAddress('');
      setPassword('');
      setError(error.message);
    }
  };

  return (
    <>
      <Header>
        <Header.Group handleClick={() => history.goBack()}>
          <RiArrowGoBackFill />
        </Header.Group>
        <Header.Group
          handleClick={() => {
            history.push(ROUTES.HOME);
          }}
        >
          Diary
        </Header.Group>
        <Header.Group
          handleClick={() => {
            history.push(ROUTES.WRITE);
          }}
        >
          <FaPen />
        </Header.Group>
      </Header>

      <AuthForm>
        <AuthForm.Title>Sign Up</AuthForm.Title>
        {error && <AuthForm.Error>{error}</AuthForm.Error>}

        <AuthForm.Base handleSubmit={handleSignup}>
          <AuthForm.Input
            placeholder='First name'
            value={firstName}
            handleChange={({ target }) => setFirstName(target.value)}
          />
          <AuthForm.Input
            placeholder='Email address'
            value={emailAddress}
            handleChange={({ target }) => setEmailAddress(target.value)}
          />
          <AuthForm.Input
            type='password'
            autoComplete='off'
            placeholder='Password'
            value={password}
            handleChange={({ target }) => setPassword(target.value)}
          />
          <AuthForm.Submit disabled={isInvalid}>Sign Up</AuthForm.Submit>
        </AuthForm.Base>

        <AuthForm.Text>
          Already a user? <AuthForm.Link to='/signin'>Sign Up Now.</AuthForm.Link>
        </AuthForm.Text>
      </AuthForm>
    </>
  );
};

export default SignUp;
