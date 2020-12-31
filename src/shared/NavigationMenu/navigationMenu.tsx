import * as React from 'react';
import { ReactNode } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import logo from '../../logo.svg';
import './navigationMenu.scss';

export interface NavigationMenuProps {
  children: ReactNode;
  className?: string;
}

type NavigationMenuItemProps = {
  link?: string;
  icon: string;
  iconAlt: string;
  className?: string;
  imgClassName?: string;
  onClick?: () => void;
  children?: ReactNode
}

type NavigationMenuItemListProps = {
  children: ReactNode,
  className?: string
}

const Aside = styled.aside`
  height: 100vh;
  background: #fff;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 14px;
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
  position: fixed;
  width: 100px;
  top: 0;
  left: 0;
  overflow: hidden;
`

const Header = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 2.5rem;
  align-items: flex-start;
`
 
const NavigationMenu = (props: NavigationMenuProps) => {
  return (  
    <Aside className={`${props.className || ''}`}>
      {props.children}
    </Aside>
  );
}

const NavigationMenuHeader = () => {
  return (
    <Header>
      <img src={logo} alt="logo" className="sideMenu_logo"/>
    </Header>
  )
}

const NavigationMenuIconList = (props: NavigationMenuItemListProps) => {
  return (
    <ul className={`sideMenu__item_list ${props.className || ''}`}>
      {props.children}
    </ul>
  )
}

const NavigationMenuIcon = (props: NavigationMenuItemProps) => {
  return (
    <li className={`sideMenu__item ${props.className || ''}`} style={{ display: 'flex', justifyContent: 'center', margin: '2rem 0 3rem 0'}}>
      {props.children}
      {props.link ? 
        <NavLink to={props.link || '#'}>
          <img src={props.icon} alt={props.iconAlt} className={`${props.imgClassName || ''}`}/>
        </NavLink>
        : <img src={props.icon} alt={props.iconAlt} className={`${props.imgClassName || ''}`}/>
      }
    </li>
  )
}

NavigationMenu.NavigationMenuHeader = NavigationMenuHeader;
NavigationMenu.NavigationMenuIconList = NavigationMenuIconList;
NavigationMenu.NavigationMenuIcon = NavigationMenuIcon;

export default NavigationMenu;