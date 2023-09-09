const initialState = {
  comments: []
};

function commentReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_COMMENT":
      return {
        ...state,
        comments: [
          ...state.comments,
          { ...action.payload, votes: 0, replies: [] }
        ]
      };

    case "REMOVE_COMMENT":
      return {
        ...state,
        comments: state.comments.filter(({ id }) => id !== action.payload)
      };

    case "UPVOTE_COMMENT":
      return {
        ...state,
        comments: state.comments.map((comment) =>
          comment.id === action.payload
            ? { ...comment, votes: comment.votes + 1 }
            : comment
        )
      };

    case "ADD_REPLY":
      return {
        ...state,
        comments: state.comments.map((comment) =>
          comment.id === action.payload.commentId
            ? {
                ...comment,
                replies: [...comment.replies, action.payload.reply]
              }
            : comment
        )
      };

    case "REMOVE_REPLY":
      return {
        ...state,
        comments: state.comments.map((comment) =>
          comment.id === action.payload.commentId
            ? {
                ...comment,
                replies: comment.replies.filter(
                  ({ id }) => id !== action.payload.replyId
                )
              }
            : comment
        )
      };

    case "DOWNVOTE_COMMENT":
      return {
        ...state,
        comments: state.comments.map((comment) =>
          comment.id === action.payload
            ? { ...comment, votes: comment.votes - 1 }
            : comment
        )
      };
    default:
      return state;
  }
}

export default commentReducer;
