  export function addToCart(product) {
    return { //serve para dispararmos nossas Actions
      type: '@cart/ADD', // required
      product,
    };
  }

  export function removeFromCart(id) {
    return { type: '@cart/REMOVE',
    id,
   };
  }

  export function updateAmount(id, amount) {
    return {
      type: '@cart/UPDATE_AMOUNT',
      id,
      amount,
    };
  }
