import React from 'react';
import { IItem } from '../../../models/items';
import { titleCase } from '../../../utility';
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
    <div className="items__container">
      <p className="items__categoryName">{titleCase(items.category)}</p>
      <div className="items">
        { items.items.map((item) => <ShoppingItem item={item} key={`${item._id}`}></ShoppingItem>)}
      </div>
    </div>
  )
}
 
export default Items;