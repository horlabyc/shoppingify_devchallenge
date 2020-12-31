import React, { Fragment } from 'react';
import ShoppingItem from '../ShoppingItem/shoppingItem';
import './shoppingList.scss';

export interface ShoppingListProps {
  categoryName: String
}
 
const ShoppingList: React.FunctionComponent<ShoppingListProps> = ({ categoryName }) => {
  const items = [
    {
      name: 'Avocado'
    },
    {
      name: 'Carrot'
    },
    {
      name: 'Spinnach'
    },
    {
      name: 'Mango'
    }
  ]
  return (
    <div className="container">
      <p className="items__categoryName">{categoryName}</p>
      <div className="items">
        { items.map((item: any) => <ShoppingItem name={item.name}></ShoppingItem>)}
      </div>
    </div>
  )
}
 
export default ShoppingList;