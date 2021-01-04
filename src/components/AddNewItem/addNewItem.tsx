import React, { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { AppContext } from '../../contexts/appContext';
import { setCategories } from '../../features/categorySlice';
import { fetchItems } from '../../features/itemSlice';
import { GET, POST } from '../../services/http';
import Button from '../../shared/Button/button';
import Input from '../../shared/Input/input';
import Spinner from '../Spinner/spinner';
import './addNewItem.scss';

export interface AddNewItemProps {
  
}
 
const AddNewItem: React.FunctionComponent<AddNewItemProps> = () => {
  const { register, handleSubmit, errors, setValue, reset} = useForm();
  const [loading, setLoading] = useState(false);
  const [buttonState, setButtonState] = useState<'idle' | 'loading'>('idle');
  const [buttonDisabled, setButtonDisabled] = useState<boolean>(false);
  const dispatch = useDispatch();
  const { dispatch: dispatchContext } = useContext(AppContext);
  const showShoppingList = () => {
    dispatchContext({type: 'SET_RIGHT_SIDE_MENU_TYPE', payload: 'shoppingList'});
  }
  const onSubmit  = (data: any) => {
    setButtonState('loading');
    setButtonDisabled(true);
    const payload = {
      name: data.name,
      category: data.category,
      description: data.description,
      extraNote: data.extraNote,
      unitMeasure: data.unitMeasure
    }
    POST('items', payload).then((res) => {
      setButtonState('idle');
      setButtonDisabled(false);
      dispatch(fetchItems());
      reset();
    })
  };

  const [categories, setCategories] = useState([])
  useEffect(() => {
    setLoading(true);
    GET('categories').then(({data}) => {
      // dispatch(setCategories(data.data));
      setCategories(data.data);
      setLoading(false);
    })
  }, [dispatch]);
  return (  
    <div className="addNewItem">
      <form onSubmit={handleSubmit(onSubmit)}>
      <Input 
        name="name"
        defaultValue=""
        label="Name"
        type="text"
        placeholder="Enter a name"
        inputRef={register({  
          required: {
            value: true,
            message: 'Name is required'
          }
        })}
      />
      { errors['name'] && <p className="inputError">{ errors['name'].message }</p>}
      <label>Description (Optional)</label>
      <textarea   
        name="description"
        rows={5}
        cols={55}
        defaultValue=""
        placeholder="Describe the item"
        ref={register()}
      />
      <label>Note (Optional)</label>
      <textarea   
        name="extraNote"
        rows={5}
        cols={55}
        defaultValue=""
        placeholder="Enter a note"
        ref={register()}
      />
      <Input 
        name="category"
        defaultValue=""
        label="Category"
        type="text"
        placeholder="Enter a category or select from list below"
        inputRef={register({  
          required: {
            value: true,
            message: 'Category is required'
          }
        })}
      />
      { errors['category'] && <p className="inputError">{ errors['category'].message }</p>}
      {
        loading ? <Spinner></Spinner> : 
        <ul className="categories">
          {
            categories.map((category:any) => (
              <li 
                className="category" 
                key={category._id}
                onClick={() => setValue('category', category.name, {shouldDirty: true, shouldValidate: true})}
              >
                {category.name}
              </li>
            ))
          }
        </ul>
      }
      <Input 
        name="unitMeasure"
        defaultValue=""
        label="Unit"
        type="text"
        placeholder="Unit (e.g kg)"
        inputRef={register()}
      />
      <div className="actions">
        <p onClick={showShoppingList}>cancel</p>
        <Button type="submit" action="Save" variant="secondary" className="actions__add" state={buttonState} disabled={buttonDisabled}></Button>
      </div>
      </form>
    </div>
  );
}
 
export default AddNewItem;