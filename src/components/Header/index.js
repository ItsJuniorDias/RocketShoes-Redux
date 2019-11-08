import React from 'react';
import {Link} from 'react-router-dom';

import {MdShoppingBasket} from 'react-icons/md';

import { Container, Cart, Logo } from './styles';

 import logo from '../../assets/images/logo.svg';

export default function Header() {
  return (
   <Container>
     <Link to="/">
       <Logo to="/">
     <img src={logo} alt="SquadsShoes"  />
     </Logo>
     </Link>
     <Cart to="/cart">
       <div>
         <strong>Meu Carrinho</strong>
         <span>3 Itens</span>
         </div>
         <MdShoppingBasket size={36} color="#fff" />
       </Cart>
     </Container>
  );
}
