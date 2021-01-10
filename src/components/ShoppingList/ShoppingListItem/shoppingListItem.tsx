import React from 'react';
import { IItem } from '../../../models/items';
import { titleCase } from '../../../utility';
import './shoppingListItem.scss';

export interface ShoppingListItemProps {
  item: {
    category: string,
    items: IItem[]
  }
}
 
const ShoppingListItem: React.FunctionComponent<ShoppingListItemProps> = ({item}) => {
  console.log(item);
  return (  
    <div className="shoppingListItem__container">
      <h5 className="shoppingListItem__category">{titleCase(item.category)}</h5>
      {
        item.items.map((i) => (
          <div className="shoppingListItem__item">
            <p className="item_name">{i.name}</p>
            <p className="quantity">{i.quantity} {i.unitMeasure}</p>
          </div>
        ))
      }
    </div>
  );
}
 
export default ShoppingListItem;