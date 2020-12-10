import * as React from 'react';
import './loader.scss';

export interface LoaderProps {
  
}
 
const Loader: React.FunctionComponent<LoaderProps> = () => {
  return (  
    <div className="spinner">
      <div className="bounce1"></div>
      <div className="bounce2"></div>
      <div className="bounce3"></div>
    </div>
  );
}
 
export default Loader;