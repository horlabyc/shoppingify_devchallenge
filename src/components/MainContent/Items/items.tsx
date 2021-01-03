import React from 'react';
import { IItem } from '../../../models/items';
import ShoppingItem from '../ShoppingItem/shoppingItem';
import './items.scss';

export interface ItemsProps {
  items: {
    category: string;
    items: IItem[]
  }
}
 
const Items: React.FunctionComponent<ItemsProps> = ({ items }) => {
  return (
    <div className="container">
      <p className="items__categoryName">{items.category}</p>
      <div className="items">
        { items.items.map((item) => <ShoppingItem name={item.name} key={`${item._id}`}></ShoppingItem>)}
      </div>
    </div>
  )
}
 
export default Items;