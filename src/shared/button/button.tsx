import * as React from 'react';
import Loader from '../Loader/loader';
import {Btn} from '../Styled Components/style';
import './button.scss';

export interface ButtonProps {
  variant?: 'primary' | 'secondary';
  type?: string;
  state?: 'idle' | 'loading';
  action: string;
  disabled?: boolean;
  className?: string;
  handleClick?: () => void;
}
 
const Button: React.FunctionComponent<ButtonProps> = ({ action, variant, state, disabled, className, handleClick }) => {
  return (  
    <Btn className={`${variant ? 'button__' + variant : 'button__primary'} ${disabled ? 'disabled' : ''} ${className ? className : ''}`} onClick={handleClick}>
      {state === 'loading' ? <Loader /> : action}
    </Btn>
  );
}
 
export default Button;