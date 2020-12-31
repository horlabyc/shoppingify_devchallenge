import React, { useState } from 'react';
import styled from 'styled-components';
import './shoppingList.scss';
import source from '../../assets/images/source.svg';
import edit from '../../assets/images/edit.svg';
import ShoppingListItem from './ShoppingListItem/shoppingListItem';

export interface ShoppingListProps {
  
}

const Container = styled.section`
  display: grid;
  /* grid-gap: 1.5rem; */
  /* height: 100%; */
`

const Header = styled.div`
  background: #80485B;
  position: relative;
  border-radius: 24px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  color: white;
  font-weight: 700;
  font-size: 0.9rem;
  padding: 0 1rem;
`
 
const ShoppingList: React.FunctionComponent<ShoppingListProps> = () => {

  const [editListName, setEditLastName] = useState(false);
  const [completeOrCancelList, setCompleteOrCancelList] = useState(true);

  const handleEditListName = () => {
    setEditLastName(true);
    setCompleteOrCancelList(false);
  }

  return (  
    <Container>
      <div className="header">
        <Header>
          <img src={source} alt="bottle"/>
          <div className="header__text">
            <h4>Didn't find what you need?</h4>
            <button className="additem">Add item</button>
          </div>
        </Header>
      </div>
      <section className="listName">
        <h3>Shopping List</h3>
        <img src={edit} alt="edit" onClick={() => handleEditListName()}/>
      </section>
      <section className="list">
        <ShoppingListItem></ShoppingListItem>
        <ShoppingListItem></ShoppingListItem>
        <ShoppingListItem></ShoppingListItem>
        <ShoppingListItem></ShoppingListItem>
        <ShoppingListItem></ShoppingListItem>
        <ShoppingListItem></ShoppingListItem>
      </section>
      <section className="action_center">
        {completeOrCancelList && <CancelOrCompleteList></CancelOrCompleteList>}
        {editListName && <EditListName></EditListName>}
      </section>
    </Container>
  );
}

const EditListName = () => {
  return (
    <h3>Edit list name</h3>
  )
}

const CancelOrCompleteList = () => {
  return (
    <h3>Complete list</h3>
  )
}
 
export default ShoppingList;