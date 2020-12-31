import React from 'react';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import Input from '../../../shared/Input/input';

export interface HeaderProps {
  
}

const Wrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
` 

const Title = styled.div`
  font-size: 1.5rem;
  flex-basis: 65%;
`

const SearchBox = styled.div`

`
 
const Header: React.FunctionComponent<HeaderProps> = () => {
  const { register, handleSubmit, errors} = useForm();

  return (  
    <Wrapper>
      <Title>
        <p><span className="text-primary text-bold">Shoppingify</span> allows you to take your shopping list wherever you go</p>
      </Title>
      <div className="search">
        <Input 
          name="search"
          className="searchBox"
          defaultValue=""
          type="text"
          placeholder="Search item"
          inputRef={register()}
        ></Input>
      </div>
    </Wrapper>
  );
}
 
export default Header;