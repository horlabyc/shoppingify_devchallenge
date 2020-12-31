import React, { useContext } from 'react';
import styled from 'styled-components';
import ShoppingList from '../../components/ShoppingList/shoppingList';
import { AppContext } from '../../contexts/appContext';

export interface RightSideMenuProps {
  
}

const Container = styled.aside`
  /* background-color: #fff; */
  height: 100vh;
  width: 40%;
`
 
const RightSideMenu: React.FunctionComponent<RightSideMenuProps> = () => {
  const { state } = useContext(AppContext);
  const rightSideMenuType = state.rightSideMenuType;
  if(rightSideMenuType === 'shoppingList'){
    return (
      <Container style={{ backgroundColor: rightSideMenuType === 'shoppingList' ? '#FFF0DE' : '#fff'}}>
        <ShoppingList></ShoppingList>
      </Container>
    )
  } else if(rightSideMenuType === 'addNewItem') {
    return (  
      <Container>
        <h2>Add new item</h2>
      </Container>
    )
  } else {
    return (
      <Container>
        <h2>Item description</h2> 
      </Container>
    )
  }
}
 
export default RightSideMenu;