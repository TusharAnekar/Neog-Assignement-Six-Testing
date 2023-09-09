import commentReducer from "./comment.reducer";

describe("comment Reducer", () => {
  test("should add a new comment with the provided details to the comments", () => {
    const initialState = {
      comments: []
    };

    const action = {
      type: "ADD_COMMENT",
      payload: { id: 1, text: "Hi" }
    };

    const updatedState = commentReducer(initialState, action);

    const expectedState = {
      comments: [{ id: 1, text: "Hi", votes: 0, replies: [] }]
    };

    expect(updatedState).toEqual(expectedState);
  });

  test("should remove comment from comments array", () => {
    const state = {
      comments: [
        { id: 1, text: "Hi", votes: 0, replies: [] },
        { id: 2, text: "Bi", votes: 0, replies: [] }
      ]
    };

    const action = {
      type: "REMOVE_COMMENT",
      payload: 2
    };

    const updatedState = commentReducer(state, action);

    const expectedState = {
      comments: [{ id: 1, text: "Hi", votes: 0, replies: [] }]
    };

    expect(updatedState).toEqual(expectedState);
  });

  test("should increase the vote count of comment", () => {
    const state = {
      comments: [{ id: 1, text: "Hi", votes: 0, replies: [] }]
    };

    const action = {
      type: "UPVOTE_COMMENT",
      payload: 1
    };

    const updatedState = commentReducer(state, action);

    const expectedState = {
      comments: [{ id: 1, text: "Hi", votes: 1, replies: [] }]
    };

    expect(updatedState).toEqual(expectedState);
  });

  test("should add reply to comment", () => {
    const state = {
      comments: [{ id: 1, text: "Hi", votes: 1, replies: [] }]
    };

    const action = {
      type: "ADD_REPLY",
      payload: {
        commentId: 1,
        reply: { id: 1, text: "Hi, how are you?" }
      }
    };

    const updatedState = commentReducer(state, action);

    const expectedState = {
      comments: [
        {
          id: 1,
          text: "Hi",
          votes: 1,
          replies: [
            {
              id: 1,
              text: "Hi, how are you?"
            }
          ]
        }
      ]
    };

    expect(updatedState).toEqual(expectedState);
  });

  test("should remove reply from comment", () => {
    const state = {
      comments: [
        {
          id: 1,
          text: "Hi",
          votes: 1,
          replies: [
            {
              id: 1,
              text: "Hi, how are you?"
            },
            {
              id: 2,
              text: "When are you coming back?"
            }
          ]
        }
      ]
    };

    const action = {
      type: "REMOVE_REPLY",
      payload: {
        commentId: 1,
        replyId: 2
      }
    };

    const updatedState = commentReducer(state, action);

    const expectedState = {
      comments: [
        {
          id: 1,
          text: "Hi",
          votes: 1,
          replies: [
            {
              id: 1,
              text: "Hi, how are you?"
            }
          ]
        }
      ]
    };

    expect(updatedState).toEqual(expectedState);
  });

  test("should decrement the value of vote of a comment", () => {
    const state = {
      comments: [
        {
          id: 1,
          text: "Hi",
          votes: 4,
          replies: []
        }
      ]
    };

    const action = {
      type: "DOWNVOTE_COMMENT",
      payload: 1
    };

    const updatedState = commentReducer(state, action);

    const expectedState = {
      comments: [
        {
          id: 1,
          text: "Hi",
          votes: 3,
          replies: []
        }
      ]
    };

    expect(updatedState).toEqual(expectedState);
  });
});
