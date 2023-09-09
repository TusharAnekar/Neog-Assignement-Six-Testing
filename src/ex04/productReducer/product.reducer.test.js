import productReducer from "./product.reducer";

describe("Products Reducer", () => {
  test("should update category filter", () => {
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

    const action = {
      type: "SET_CATEGORY_FILTER",
      payload: "Electronics"
    };

    const updatedState = productReducer(initialState, action);

    const expectedState = {
      products: [],
      filters: {
        category: "Electronics",
        searchQuery: "",
        sortBy: "price",
        ascending: true,
        priceRange: { min: 0, max: 1000 }
      }
    };

    expect(updatedState).toEqual(expectedState);
  });

  test("should update search query", () => {
    const state = {
      products: [],
      filters: {
        category: "Electronics",
        searchQuery: "",
        sortBy: "price",
        ascending: true,
        priceRange: { min: 0, max: 1000 }
      }
    };

    const action = {
      type: "SET_SEARCH_QUERY",
      payload: "Shirt"
    };

    const updatedState = productReducer(state, action);

    const expectedState = {
      products: [],
      filters: {
        category: "Electronics",
        searchQuery: "Shirt",
        sortBy: "price",
        ascending: true,
        priceRange: { min: 0, max: 1000 }
      }
    };

    expect(updatedState).toEqual(expectedState);
  });

  test("should update sort", () => {
    const state = {
      products: [],
      filters: {
        category: "Electronics",
        searchQuery: "Shirt",
        sortBy: "price",
        ascending: true,
        priceRange: { min: 0, max: 1000 }
      }
    };

    const action = {
      type: "SET_SORT",
      payload: "name"
    };

    const updatedState = productReducer(state, action);

    const expectedState = {
      products: [],
      filters: {
        category: "Electronics",
        searchQuery: "Shirt",
        sortBy: "name",
        ascending: true,
        priceRange: { min: 0, max: 1000 }
      }
    };

    expect(updatedState).toEqual(expectedState);
  });

  test("should update price range", () => {
    const state = {
      products: [],
      filters: {
        category: "Electronics",
        searchQuery: "Shirt",
        sortBy: "name",
        ascending: true,
        priceRange: { min: 0, max: 1000 }
      }
    };

    const action = {
      type: "SET_PRICE_RANGE",
      payload: { min: 500, max: 2000 }
    };

    const updatedState = productReducer(state, action);

    const expectedState = {
      products: [],
      filters: {
        category: "Electronics",
        searchQuery: "Shirt",
        sortBy: "name",
        ascending: true,
        priceRange: { min: 500, max: 2000 }
      }
    };

    expect(updatedState).toEqual(expectedState);
  });

  test("should toggle the availability of a product", () => {
    const state = {
      products: [
        {
          id: 1,
          name: "Phone",
          category: "Electronics",
          price: 500,
          inStock: true
        },
        {
          id: 3,
          name: "Laptop",
          category: "Electronics",
          price: 1000,
          inStock: false
        }
      ],
      filters: {
        category: "Electronics",
        searchQuery: "Shirt",
        sortBy: "name",
        ascending: true,
        priceRange: { min: 500, max: 2000 }
      }
    };

    const action = {
      type: "TOGGLE_AVAILABILITY",
      payload: 3
    };

    const updatedState = productReducer(state, action);

    const expectedState = {
      products: [
        {
          id: 1,
          name: "Phone",
          category: "Electronics",
          price: 500,
          inStock: true
        },
        {
          id: 3,
          name: "Laptop",
          category: "Electronics",
          price: 1000,
          inStock: true
        }
      ],
      filters: {
        category: "Electronics",
        searchQuery: "Shirt",
        sortBy: "name",
        ascending: true,
        priceRange: { min: 500, max: 2000 }
      }
    };

    expect(updatedState).toEqual(expectedState);
  });
});
