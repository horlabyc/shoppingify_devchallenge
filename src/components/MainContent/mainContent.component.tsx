import React from 'react';
import styled from 'styled-components';
import Header from './Header/header';
import './mainContent.component.scss';
import Items from './Items/items';

export interface MainContentProps {
  
}

const Container = styled.main`
  padding: 2.5rem 5rem;
  display: grid;
  grid-gap: 3rem;
  margin-left: 100px;
`
 
const MainContent: React.FunctionComponent<MainContentProps> = () => {
  const categories = [
    'Fruis and Vegetable', 'Grains', 'Drinks', 'Foodstuff'
  ]
  return (  
    <Container>
      <Header></Header>
      {
        categories.map((category, index) => <Items categoryName={category} key={`${category} ${index}`}></Items>)
      }
    </Container>
  );
}
 
export default MainContent;