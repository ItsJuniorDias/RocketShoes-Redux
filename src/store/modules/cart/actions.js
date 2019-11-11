  export function addToCartRequest(id) {
    return { //serve para dispararmos nossas Actions
      type: '@cart/ADD_REQUEST', // required
      id,
    };
  }

  export function addToCartSuccess(product) {
    return { //serve para dispararmos nossas Actions
      type: '@cart/ADD_SUCCESS', // required
      product,
    };
  }

  export function removeFromCart(id) {
    return { type: '@cart/REMOVE',
    id,
   };
  }

  export function updateAmountRequest(id, amount) {
    return {
      type: '@cart/UPDATE_AMOUNT_REQUEST',
      id,
      amount,
    }
  }

  export function updateAmountSuccess(id, amount) {
    return {
      type: '@cart/UPDATE_AMOUNT_SUCCESS',
      id,
      amount,
    };
  }

