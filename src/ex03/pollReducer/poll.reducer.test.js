import pollReducer from "./poll.reducer";

describe("pollReducer", () => {
  test("should create a poll and add to polls array", () => {
    const initialState = {
      polls: []
    };

    const action = {
      type: "CREATE_POLL",
      payload: {
        id: 1,
        question: "What is my name?"
      }
    };

    const updatedState = pollReducer(initialState, action);

    const expectedState = {
      polls: [
        {
          id: 1,
          question: "What is my name?",
          options: []
        }
      ]
    };

    expect(updatedState).toEqual(expectedState);
  });

  test("should add options to poll with text and votes set to zero", () => {
    const state = {
      polls: [
        {
          id: 1,
          question: "What is my name?",
          options: []
        }
      ]
    };

    const action = {
      type: "ADD_OPTION",
      payload: {
        pollId: 1,
        question: "What is my name?",
        optionText: "Tushar"
      }
    };

    const updatedState = pollReducer(state, action);

    const expectedState = {
      polls: [
        {
          id: 1,
          question: "What is my name?",
          options: [{ text: "Tushar", votes: 0 }]
        }
      ]
    };

    expect(updatedState).toEqual(expectedState);
  });

  test("should increment vote count of the specified option in the specified poll by one", () => {
    const state = {
      polls: [
        {
          id: 1,
          question: "What is my name?",
          options: [{ text: "Tushar", votes: 0 }]
        }
      ]
    };

    const action = {
      type: "VOTE",
      payload: {
        pollId: 1,
        optionText: "Tushar"
      }
    };

    const updatedState = pollReducer(state, action);

    const expectedState = {
      polls: [
        {
          id: 1,
          question: "What is my name?",
          options: [{ text: "Tushar", votes: 1 }]
        }
      ]
    };

    expect(updatedState).toEqual(expectedState);
  });
});
