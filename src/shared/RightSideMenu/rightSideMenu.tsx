import React, { useContext } from 'react';
import styled from 'styled-components';
import ShoppingList from '../../components/ShoppingList/shoppingList';
import { AppContext } from '../../contexts/appContext';
import arrowleft from '../../assets/images/arrowleft.svg';
import ItemDescription from '../../components/ItemDescription/itemDescription';
import './rightSideMenu.scss';
import { useSelector } from 'react-redux';
import { selectItem } from '../../features/itemSlice';
export interface RightSideMenuProps {
  
}

const Container = styled.aside`
  height: 100vh;
  flex: 0.4;
`
 
const RightSideMenu: React.FunctionComponent<RightSideMenuProps> = () => {
  const { state } = useContext(AppContext);
  const rightSideMenuType = state.rightSideMenuType;
  const { dispatch } = useContext(AppContext);
  const showShoppingList = () => {
    dispatch({type: 'SET_RIGHT_SIDE_MENU_TYPE', payload: 'shoppingList'});
  }
  const activeItem = useSelector(selectItem);
  if(rightSideMenuType === 'shoppingList'){
    return (
      <Container style={{ backgroundColor: '#FFF0DE'}}>
        <ShoppingList></ShoppingList>
      </Container>
    )
  } else if(rightSideMenuType === 'addNewItem') {
    return (  
      <Container style={{ backgroundColor:'#fff'}}>
        <div className="rightMenu__header">
          <img src={arrowleft} alt="Go back" onClick={showShoppingList}/>
        </div>
      </Container>
    )
  } else {
    return (
      <Container style={{ backgroundColor: '#fff'}}>
        <div className="rightMenu__header">
          <img src={arrowleft} alt="Go back" onClick={showShoppingList}/>
          <span>go back</span>
        </div>
        <ItemDescription item={activeItem}/>
      </Container>
    )
  }
}
 
export default RightSideMenu;