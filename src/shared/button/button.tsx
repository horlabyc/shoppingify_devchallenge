import * as React from 'react';
import './button.scss';

export interface ButtonProps {
  variant?: 'primary' | 'secondary';
  type: string;
  state?: 'idle' | 'loading';
  action: string;
  // onClick: Function
}
 
const Button: React.FunctionComponent<ButtonProps> = ({ action, variant, state }) => {
  return (  
    <button className={`button ${variant ? 'button__' + variant : 'button__primary'}`}>
      {action}
    </button>
  );
}
 
export default Button;