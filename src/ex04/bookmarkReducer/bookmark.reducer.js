const initialState = {
  bookmarks: [],
  filteredBookmarks: []
};

function bookmarkReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_BOOKMARK":
      return {
        ...state,
        bookmarks: [...state.bookmarks, action.payload.bookmark]
      };
    case "REMOVE_BOOKMARK":
      return {
        ...state,
        bookmarks: state.bookmarks.filter(({ id }) => id !== action.payload)
      };

    case "UPDATE_TAGS": {
      const bookmarkToBeUpdated = state.bookmarks.find(
        ({ id }) => id === action.payload.bookmarkId
      );
      const updatedBookmarks = state.bookmarks.map((item) =>
        item.id === bookmarkToBeUpdated.id
          ? { ...item, tags: action.payload.tags }
          : item
      );
      return {
        ...state,
        bookmarks: updatedBookmarks
      };
    }

    case "FILTER_BOOKMARKS_BY_TAG":
      return {
        ...state,
        filteredBookmarks: state.bookmarks.filter((bookmark) =>
          bookmark.tags.includes(action.payload)
        )
      };

    case "ADD_TAG":
      return {
        ...state,
        bookmarks: state.bookmarks.map((bookmark) =>
          bookmark.id === action.payload.id
            ? { ...bookmark, tags: [...bookmark.tags, action.payload.tag] }
            : bookmark
        )
      };

    case "REMOVE_TAG":
      return {
        ...state,
        bookmarks: state.bookmarks.map((bookmark) =>
          bookmark.id === action.payload.id
            ? {
                ...bookmark,
                tags: bookmark.tags.filter((tag) => tag !== action.payload.tag)
              }
            : bookmark
        )
      };
    default:
      return state;
  }
}

export default bookmarkReducer;
