import * as React from 'react';
import './input.scss';

type RefReturn =
  | string
  | ((instance: HTMLInputElement | null) => void)
  | React.RefObject<HTMLInputElement>
  | null
  | undefined;

export interface IInputProps {
  name: string;
  label?: string;
  className?: string;
  defaultValue?: any;
  inputRef: any,
  type?: string,
  placeholder?: string
}
 
const Input: React.FunctionComponent<IInputProps> = ({ label, name, placeholder, className, defaultValue, inputRef, type}) => {
  return (  
    <>
      { label ? <label>{label}</label> : null }
      <input 
        className={`${ className ? className : ''}`}
        name={name} 
        defaultValue={defaultValue} 
        ref={inputRef}
        type={type ? type : 'text'}
        placeholder={placeholder ? placeholder : ''}
      />

    </>
  );
}
 
export default Input;