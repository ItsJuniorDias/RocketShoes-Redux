export default function cart(state = [], action) { //inicia o state de cart com um [] vazio
  switch (action.type) { //quer ouvir somente o reducer do cart
    case 'ADD_TO_CART':
      return [ ...state, action.product ]; // recebemos a action e add o product
      default:
        return state;
  }
}
