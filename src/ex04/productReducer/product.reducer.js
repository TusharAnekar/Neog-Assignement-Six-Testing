const initialState = {
  products: [],
  filters: {
    category: "All",
    searchQuery: "",
    sortBy: "price",
    ascending: true,
    priceRange: { min: 0, max: 1000 }
  }
};

function productReducer(state = initialState, action) {
  switch (action.type) {
    case "SET_CATEGORY_FILTER":
      return {
        ...state,
        filters: { ...state.filters, category: action.payload }
      };

    case "SET_SEARCH_QUERY":
      return {
        ...state,
        filters: { ...state.filters, searchQuery: action.payload }
      };

    case "SET_SORT":
      return {
        ...state,
        filters: { ...state.filters, sortBy: action.payload }
      };

    case "SET_PRICE_RANGE":
      return {
        ...state,
        filters: { ...state.filters, priceRange: action.payload }
      };

    case "TOGGLE_AVAILABILITY":
      return {
        ...state,
        products: state.products.map((product) =>
          product.id === action.payload
            ? { ...product, inStock: !product.inStock }
            : product
        )
      };
    default:
      return state;
  }
}

export default productReducer;
