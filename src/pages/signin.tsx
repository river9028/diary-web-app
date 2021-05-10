import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { RiArrowGoBackFill } from 'react-icons/ri';
import { FaPen } from 'react-icons/fa';
import { FirebaseContext } from '../context/firebase';
import { AuthForm, Header } from '../components';
import * as ROUTES from '../constants/routes';

const SignIn = () => {
  const history = useHistory();
  const { firebase } = useContext(FirebaseContext);

  const [emailAddress, setEmailAddress] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const isInvalid = password === '' || emailAddress === '';

  const handleSignIn = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // firebase work here!

    try {
      firebase
        ?.auth()
        .signInWithEmailAndPassword(emailAddress, password)
        .then(() => {
          history.push(ROUTES.HOME);
        });
      // push to the browse page
    } catch (error) {
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
        <AuthForm.Title>Sign In</AuthForm.Title>
        {error && <AuthForm.Error data-testid='error'>{error}</AuthForm.Error>}
        <AuthForm.Base handleSubmit={handleSignIn}>
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
          <AuthForm.Submit data-testid='sign-in' disabled={isInvalid}>
            Sign In
          </AuthForm.Submit>
        </AuthForm.Base>

        <AuthForm.Text>
          New to Netflix? <AuthForm.Link to='/signup'>Sign Up Now.</AuthForm.Link>
        </AuthForm.Text>
      </AuthForm>
    </>
  );
};

export default SignIn;
