import React, { useRef, useState } from "react";
import { useForm } from 'react-hook-form';
import Input from "../../../shared/Input/input";
import { Link, useHistory } from "react-router-dom";
import Button from "../../../shared/Button/button";
import './register.scss';
import { POST } from "../../../services/http";
import { useToasts } from "react-toast-notifications";
export interface RegisterPageProps {
  
}
 
const RegisterPage: React.FunctionComponent<RegisterPageProps> = () => {
  const history = useHistory();
  const { register, handleSubmit, watch, errors} = useForm();
  const password = useRef({});
  const [buttonState, setButtonState] = useState<'idle' | 'loading'>('idle');
  const [buttonDisabled, setButtonDisabled] = useState<boolean>(false);
  const { addToast } = useToasts();
  password.current = watch('password');
  const onSubmit = (data: any) => {
    setButtonState('loading');
    setButtonDisabled(true);
    const payload = {
      email: data.email,
      username: data.username,
      password: data.password
    }
    POST('auth/register', payload).then((res) => {
      addToast("Cool! Your account has been created!", {
        appearance: "success",
        autoDismiss: true
      });
      setButtonState('idle');
      setButtonDisabled(false);
      history.push('/auth/login');
    }).catch((error) => {
      setButtonState('idle');
      setButtonDisabled(false);
      addToast(error.response.data.message, {
        appearance: "error",
        autoDismiss: true
      });
    })
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
              className={`${errors['username'] ? 'error' : ''}`}
              inputRef={register({  
                required: {
                  value: true,
                  message: 'Username is required'
                },
                maxLength: {
                  value: 10,
                  message: 'Username cannot have more than 10 characters'
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
              className={`${errors.email ? 'error' : ''}`}
              inputRef={register({  
                required: {
                  value: true,
                  message: 'Email is required'
                }
              })}
            />
            { errors.email && <p className="inputError">{ errors['email'].message }</p>}
            <Input 
              name="password"
              label="Password"
              type="password"
              placeholder="Enter your password"
              className={`${errors.password ? 'error' : ''}`}
              inputRef={register({  
                required: 'You must specify a password',
              })}
            />
            { errors['password'] && <p className="inputError">{ errors['password'].message }</p>}
            <Input 
              name="confirmPassword"
              label="Confirm Password"
              type="password"
              placeholder="Repeat your password"
              className={`${errors.confirmPassword ? 'error' : ''}`}
              inputRef={register({  
                validate: value => value === password.current || 'The passwords do not match'
              })}
            />
            { errors['confirmPassword'] && <p className="inputError">{ errors['confirmPassword'].message }</p>}
            <Link to="/auth/login">
              <p style={{ marginTop: '1rem'}}>Already have an account ? <span className="text__login">Login</span></p>
            </Link>
            <div className="form__submit flex justify-center align-center">
              <Button 
                type="submit" 
                variant="secondary" 
                action="Create account" 
                disabled={buttonDisabled}
                state={buttonState}/>
            </div>
          </form>
        </section>
      </div>
    </div>
  );
}
 
export default RegisterPage;