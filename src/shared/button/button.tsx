import * as React from 'react';
import Loader from '../loader/loader';
import './button.scss';

export interface ButtonProps {
  variant?: 'primary' | 'secondary';
  type: string;
  state?: 'idle' | 'loading';
  action: string;
  disabled?: boolean;
}
 
const Button: React.FunctionComponent<ButtonProps> = ({ action, variant, state, disabled }) => {
  return (  
    <button className={`button ${variant ? 'button__' + variant : 'button__primary'} ${disabled ? 'disabled' : ''}`}>
      {state === 'loading' ? <Loader /> : action}
    </button>
  );
}
 
export default Button;