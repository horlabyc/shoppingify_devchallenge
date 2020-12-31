import React from 'react';
import ShoppingItem from '../ShoppingItem/shoppingItem';
import './items.scss';

export interface ItemsProps {
  categoryName: String
}
 
const Items: React.FunctionComponent<ItemsProps> = ({ categoryName }) => {
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
        { items.map((item: any, index) => <ShoppingItem name={item.name} key={`${item.name} ${index}`}></ShoppingItem>)}
      </div>
    </div>
  )
}
 
export default Items;