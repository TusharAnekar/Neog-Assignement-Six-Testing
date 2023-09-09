import cartReducer from "./cart.reducer";

describe("cartReducer", () => {
  test("should add item to cart", () => {
    const initialState = {
      items: [],
      totalPrice: 0,
      totalQuantity: 0,
      discounts: []
    };

    const action = {
      type: "ADD_TO_CART",
      payload: {
        item: {
          id: 1,
          name: "Bag",
          price: 1000
        }
      }
    };

    const updatedState = cartReducer(initialState, action);

    const expectedState = {
      items: [
        {
          id: 1,
          name: "Bag",
          price: 1000,
          quantity: 1
        }
      ],
      totalPrice: 1000,
      totalQuantity: 1,
      discounts: []
    };

    expect(updatedState).toEqual(expectedState);
  });

  test("should remove item from card", () => {
    const state = {
      items: [
        {
          id: 1,
          name: "Bag",
          price: 1000,
          quantity: 1
        },
        {
          id: 2,
          name: "Shoes",
          price: 1000,
          quantity: 1
        }
      ],
      totalPrice: 2000,
      totalQuantity: 2,
      discounts: []
    };

    const action = {
      type: "REMOVE_FROM_CART",
      payload: { itemId: 2 }
    };

    const updatedState = cartReducer(state, action);

    const expectedState = {
      items: [
        {
          id: 1,
          name: "Bag",
          price: 1000,
          quantity: 1
        }
      ],
      totalPrice: 1000,
      totalQuantity: 1,
      discounts: []
    };

    expect(updatedState).toEqual(expectedState);
  });

  test("should update quantity of item in cart", () => {
    const state = {
      items: [
        {
          id: 1,
          name: "Bag",
          price: 1000,
          quantity: 1
        }
      ],
      totalPrice: 1000,
      totalQuantity: 1,
      discounts: []
    };

    const action = {
      type: "UPDATE_QUANTITY",
      payload: { itemId: 1 }
    };

    const updatedState = cartReducer(state, action);

    const expectedState = {
      items: [
        {
          id: 1,
          name: "Bag",
          price: 1000,
          quantity: 2
        }
      ],
      totalPrice: 2000,
      totalQuantity: 1,
      discounts: []
    };

    expect(updatedState).toEqual(expectedState);
  });

  test("should add discount to the cart and the total price is recalculated", () => {
    const state = {
      items: [
        {
          id: 1,
          name: "Bag",
          price: 1000,
          quantity: 2
        }
      ],
      totalPrice: 2000,
      totalQuantity: 1,
      discounts: []
    };

    const action = {
      type: "ADD_DISCOUNT",
      payload: {
        discount: {
          id: 1,
          value: 300
        }
      }
    };

    const updatedState = cartReducer(state, action);

    const expectedState = {
      items: [
        {
          id: 1,
          name: "Bag",
          price: 1000,
          quantity: 2
        }
      ],
      totalPrice: 1700,
      totalQuantity: 1,
      discounts: [
        {
          id: 1,
          value: 300
        }
      ]
    };

    expect(updatedState).toEqual(expectedState);
  });

  test("should add promotion to the cart and the total price is recalculated", () => {
    const state = {
      items: [
        {
          id: 1,
          name: "Bag",
          price: 1000,
          quantity: 2
        }
      ],
      totalPrice: 2000,
      totalQuantity: 1,
      discounts: []
    };

    const action = {
      type: "APPLY_PROMOTION",
      payload: {
        promotion: {
          id: 2,
          value: 100
        }
      }
    };

    const updatedState = cartReducer(state, action);

    const expectedState = {
      items: [
        {
          id: 1,
          name: "Bag",
          price: 1000,
          quantity: 2
        }
      ],
      totalPrice: 1900,
      totalQuantity: 1,
      discounts: [
        {
          id: 2,
          value: 100
        }
      ]
    };

    expect(updatedState).toEqual(expectedState);
  });

  test("should remove a discount from the cart and the total price is recalculated", () => {
    const state = {
      items: [
        {
          id: 1,
          name: "Bag",
          price: 1000,
          quantity: 2
        }
      ],
      totalPrice: 1900,
      totalQuantity: 1,
      discounts: [
        {
          id: 2,
          value: 100
        }
      ]
    };

    const action = {
      type: "REMOVE_DISCOUNT",
      payload: {
        discountId: 2
      }
    };

    const updatedState = cartReducer(state, action);

    const expectedState = {
      items: [
        {
          id: 1,
          name: "Bag",
          price: 1000,
          quantity: 2
        }
      ],
      totalPrice: 2000,
      totalQuantity: 1,
      discounts: []
    };

    expect(updatedState).toEqual(expectedState);
  });
});
