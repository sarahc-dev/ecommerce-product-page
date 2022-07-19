const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_NEW_ITEM":
      return [
        ...state,
        {
          productName: action.item.product,
          amount: action.item.amount,
        },
      ];

    case "DELETE_FROM_CART":
      return state.filter((item) => item.productName !== action.item.product);
    default:
      return state;
  }
};

export default cartReducer;
