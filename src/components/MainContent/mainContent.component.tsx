import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import Header from './Header/header';
import './mainContent.component.scss';
import Items from './Items/items';
import { GET } from '../../services/http';
import { IItem } from '../../models/items';

export interface MainContentProps {
  
}

const Container = styled.main`
  padding: 2.5rem 5rem;
  display: grid;
  grid-gap: 3rem;
  margin-left: 100px;
`
 
const MainContent: React.FunctionComponent<MainContentProps> = () => {
  let items = useRef([]);

  useEffect(() => {
    GET('items').then((res) => {
      items.current = res.data.data.items;
    });
  }, []);

  return (  
    <Container>
      <Header></Header>
      {
        items.current.map((item, index) => <Items items={item} key={`${index}`}></Items>)
      }
    </Container>
  );
}
 
export default MainContent;