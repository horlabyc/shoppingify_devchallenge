import React from "react";
import { useForm } from 'react-hook-form';
import Input from "../../../shared/Input/input";
import { Link } from "react-router-dom";
import Button from "../../../shared/button/button";
import './register.scss';
export interface RegisterPageProps {
  
}
 
const RegisterPage: React.FunctionComponent<RegisterPageProps> = () => {
  const { register, handleSubmit, watch, errors} = useForm();
  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (  
    <div className="registerWrapper flex align-center justify-center">
      <div className="registerWrapper__body">
        <section className="registerWrapper__title">
          <p>Register</p>
        </section>
        <section className="registerWrapper__content">
          <form onSubmit={handleSubmit(onSubmit)}>
            <Input 
              name="username"
              defaultValue=""
              label="Username"
              type="username"
              placeholder="Enter your username"
              inputRef={register({  
                required: {
                  value: true,
                  message: 'Username is required'
                }
              })}
            />
            { errors['username'] && <p className="inputError">{ errors['username'].message }</p>}
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
            <Input 
              name="confirmPassword"
              label="Confirm Password"
              type="password"
              placeholder="Repeat your password"
              inputRef={register({  
                required: {
                  value: true,
                  message: 'Password is required'
                }
              })}
            />
            { errors['confirmPassword'] && <p className="inputError">{ errors['confirmPassword'].message }</p>}
            <Link to="/auth/login">
              <p>Already have an account ? <span className="text__login">Login</span></p>
            </Link>
            <div className="form__submit flex justify-center align-center">
              <Button type="submit" variant="secondary" action="Create account"/>
            </div>
          </form>
        </section>
      </div>
    </div>
  );
}
 
export default RegisterPage;