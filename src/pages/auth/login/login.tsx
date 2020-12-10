import React from "react";
import { useForm } from 'react-hook-form';
import Input from "../../../shared/Input/input";
import { Link } from "react-router-dom";
import Button from "../../../shared/button/button";
import './login.scss';

export interface LoginPageProps {
  
}
 
const LoginPage: React.FunctionComponent<LoginPageProps> = () => {
  const { register, handleSubmit, watch, errors} = useForm();
  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (  
    <div className="loginWrapper flex align-center justify-center">
      <div className="loginWrapper__body">
        <section className="loginWrapper__title">
          <p>Login</p>
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
            <Link to="/auth/register">
              <p>You don't have an account ? <span className="text__register">Register</span></p>
            </Link>
            <div className="form__submit flex justify-center align-center">
              <Button type="submit" variant="secondary" action="Login"/>
            </div>
          </form>
        </section>
      </div>
    </div>
  );
}
 
export default LoginPage;