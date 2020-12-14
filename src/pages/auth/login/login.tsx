import React, { useContext, useState } from "react";
import { useForm } from 'react-hook-form';
import Input from "../../../shared/Input/input";
import { Link, useHistory } from "react-router-dom";
import Button from "../../../shared/button/button";
import './login.scss';
import logo from '../../../logo.svg';
import { useToasts } from "react-toast-notifications";
import { POST } from "../../../services/http";
import { AppContext } from "../../../contexts/appContext";

export interface LoginPageProps {
  
}
 
const LoginPage: React.FunctionComponent = (props: any) => {
  const history = useHistory();
  const { register, handleSubmit, errors} = useForm();
  const [buttonState, setButtonState] = useState<'idle' | 'loading'>('idle');
  const [buttonDisabled, setButtonDisabled] = useState<boolean>(false);
  const { addToast } = useToasts();
  const { dispatch } = useContext(AppContext);
  const onSubmit = (data: any) => {
    setButtonState('loading');
    setButtonDisabled(true);
    const payload = {
      email: data.email,
      password: data.password
    }
    login(payload);
  };

  const { from } = props.location.state || { from: { pathname: '/' } }

  const login = (payload: { email: string, password: string}) => {
    POST('auth/login', payload).then( async(res) => {
      addToast("Yeah! you are logged in!", {
        appearance: "success",
        autoDismiss: true
      });
      setButtonState('idle');
      setButtonDisabled(false);
      dispatch({type: 'SET_USER', payload: {accessToken: res.data.accessToken, username: res.data.username}});
      history.push(from);
    }).catch((error) => {
      setButtonState('idle');
      setButtonDisabled(false);
      if(error && error.response && error.response.data && error.response.data.message){
        addToast(error.response.data.message, {
          appearance: "error",
          autoDismiss: true
        });
      }
    })
  }

  return (  
    <div className="loginWrapper flex align-center justify-center">
      <div className="loginWrapper__body">
        <section className="loginWrapper__title flex align-center">
          <img src={logo} alt="logo"></img>
          <span style={{ fontWeight: 'bold'}}>Shoppingify</span>
        </section>
        <section className="loginWrapper__content">
          <form onSubmit={handleSubmit(onSubmit)}>
            <Input 
              name="email"
              defaultValue=""
              label="Email"
              type="email"
              placeholder="Enter your email"
              inputRef={register({  
                required: {
                  value: true,
                  message: 'Email is required'
                }
              })}
            />
            { errors['email'] && <p className="inputError">{ errors['email'].message }</p>}
            <Input 
              name="password"
              label="Password"
              type="password"
              placeholder="Enter your password"
              inputRef={register({  
                required: {
                  value: true,
                  message: 'Password is required'
                }
              })}
            />
            { errors['password'] && <p className="inputError">{ errors['password'].message }</p>}
            
            <div className="form__submit flex justify-center align-center">
              <Button 
                type="submit" 
                variant="secondary" 
                disabled={buttonDisabled}
                state={buttonState}
                action="Login"/>
            </div>
            <Link to="/auth/register">
              <p>You don't have an account ? <span className="text__register">Register</span></p>
            </Link>
          </form>
        </section>
      </div>
    </div>
  );
}
 
export default LoginPage;