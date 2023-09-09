import todoReducer from "./todo.reducer";

describe("Todo List Reducer", () => {
  test("should add task to todo", () => {
    const initialState = {
      todos: []
    };

    const action = {
      type: "ADD_TODO",
      payload: {
        id: 1,
        text: "Gym time"
      }
    };

    const updatedState = todoReducer(initialState, action);

    const expectedState = {
      todos: [
        {
          id: 1,
          text: "Gym time",
          completed: false
        }
      ]
    };

    expect(updatedState).toEqual(expectedState);
  });

  describe("should toggle task in todo list", () => {
    const initialState = {
      todos: [
        {
          id: 1,
          text: "Gym time",
          completed: false
        }
      ]
    };

    const action = {
      type: "TOGGLE_TODO",
      payload: { id: 1 }
    };

    const updatedState = todoReducer(initialState, action);

    const expectedState = {
      todos: [
        {
          id: 1,
          text: "Gym time",
          completed: true
        }
      ]
    };

    expect(updatedState).toEqual(expectedState);
  });
});
