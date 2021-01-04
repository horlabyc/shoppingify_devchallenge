import React, { useState } from 'react';
import { IItem } from '../../models/items';
import Button from '../../shared/Button/button';
import { titleCase } from '../../utility';
import './itemDescription.scss';

export interface ItemDescriptionProps {
  item: IItem
}
 
const ItemDescription: React.FunctionComponent<ItemDescriptionProps> = ({item}) => {
  const defaultImage = 'https://cdn.pixabay.com/photo/2018/03/09/08/04/avocado-3210885_1280.jpg';
  const [buttonState, setButtonState] = useState<'idle' | 'loading'>('idle');
  const [buttonDisabled, setButtonDisabled] = useState<boolean>(false);
  return (  
    <div className="itemDescription">
      <div className="itemDescription__image">
        <img src={item.image ? item.image : defaultImage} alt="item"/>
      </div>
      <div className="itemDescription__section itemDescription__name">
        <h5 className="itemDescription__title">name</h5>
        <p className="itemDescription__name">{item.name}</p>
      </div>
      <div className="itemDescription__section">
        <h5 className="itemDescription__title">category</h5>
        <p className="itemDescription__category">{titleCase(item.category)}</p>
      </div>
      <div className="itemDescription__section">
        <h5 className="itemDescription__title">note</h5>
        <p className="itemDescription__description">{item.description}</p>
      </div>
      <div className="itemDescription__actions">
        <p>delete</p>
        <Button type="" action="Add to list" variant="secondary" className="itemDescription__actions__add" state={buttonState} disabled={buttonDisabled}></Button>
      </div>
    </div>
  );
}
 
export default ItemDescription;