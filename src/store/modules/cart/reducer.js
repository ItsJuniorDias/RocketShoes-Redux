import produce from 'immer';

export default function cart(state = [], action) { //inicia o state de cart com um [] vazio
  switch (action.type) { //quer ouvir somente o reducer do cart
    case '@cart/ADD_SUCCESS':
      return produce(state, draft => {
       const {product } = action;

        draft.push(product);
      });
      case '@cart/REMOVE':
        return produce(state, draft => {
          const productIndex = draft.findIndex(p => p.id === action.id);

          if(productIndex >= 0) {
            draft.splice(productIndex, 1);
          }
        });
        case '@cart/UPDATE_AMOUNT_SUCCESS':{
        return produce(state, draft => {
          const productIndex = draft.findIndex(p => p.id === action.id);

          if(productIndex >= 0) {
            draft[productIndex].amount = Number(action.amount);
          }
        });
      }
      default:
        return state;
  }
}
