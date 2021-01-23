import React from 'react';
import { IItem } from '../../../models/items';
import { titleCase } from '../../../utility';
import trash from '../../../assets/images/trash.svg';
import minus from '../../../assets/images/minus.svg';
import plus from '../../../assets/images/plus_orange.svg';

import './shoppingListItem.scss';

export interface ShoppingListItemProps {
  item: {
    category: string,
    items: IItem[]
  }
}
 
const ShoppingListItem: React.FunctionComponent<ShoppingListItemProps> = ({item}) => {
  return (  
    <div className="shopping-list-item">
      <h5 className="shopping-list-item__category">{titleCase(item.category)}</h5>
      {
        item.items.map((i) => (
          <div className="shopping-list-item__item">
            <div>
              <p className="item-name">{i.name}</p>
            </div>
            <div className="shopping-list-item__actions">
              <img src={trash} alt="delete" className="" loading="lazy"/>
              <p className="quantity">{i.quantity} {i.unitMeasure}</p>
              <img src={minus} alt="reduce" className="" loading="lazy"/>
              <img src={plus} alt="add" className="" loading="lazy"/>
            </div>
          </div>
        ))
      }
    </div>
  );
}
 
export default ShoppingListItem;