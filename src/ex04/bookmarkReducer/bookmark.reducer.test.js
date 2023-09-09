import bookmarkReducer from "./bookmark.reducer";

describe("bookmarkReducer", () => {
  test("should add a new bookmark with the provided details to the bookmarks array", () => {
    const initialState = {
      bookmarks: []
    };

    const action = {
      type: "ADD_BOOKMARK",
      payload: {
        bookmark: {
          id: 1,
          title: "Youtube",
          url: "youtube.com",
          tags: ["videos"]
        }
      }
    };

    const updatedState = bookmarkReducer(initialState, action);

    const expectedState = {
      bookmarks: [
        {
          id: 1,
          title: "Youtube",
          url: "youtube.com",
          tags: ["videos"]
        }
      ]
    };

    expect(updatedState).toEqual(expectedState);
  });

  test("should remove bookmark from bookmarks array", () => {
    const state = {
      bookmarks: [
        {
          id: 1,
          title: "Youtube",
          url: "youtube.com",
          tags: ["videos"]
        },
        {
          id: 2,
          title: "Google",
          url: "google.com",
          tags: ["search"]
        }
      ]
    };

    const action = {
      type: "REMOVE_BOOKMARK",
      payload: 2
    };

    const updatedState = bookmarkReducer(state, action);

    const expectedState = {
      bookmarks: [
        { id: 1, title: "Youtube", url: "youtube.com", tags: ["videos"] }
      ]
    };

    expect(updatedState).toEqual(expectedState);
  });

  test("should update tags", () => {
    const state = {
      bookmarks: [{ id: 1, title: "Youtube", url: "youtube.com", tags: [] }]
    };

    const action = {
      type: "UPDATE_TAGS",
      payload: {
        bookmarkId: 1,
        tags: ["videos"]
      }
    };

    const updatedState = bookmarkReducer(state, action);

    const expectedState = {
      bookmarks: [
        {
          id: 1,
          title: "Youtube",
          url: "youtube.com",
          tags: ["videos"]
        }
      ]
    };

    expect(updatedState).toEqual(expectedState);
  });

  test("should filter bookmarks by tags", () => {
    const state = {
      bookmarks: [
        {
          id: 1,
          title: "LinkedIn",
          url: "https://www.linkedin.com",
          tags: ["Career", "Social Media"]
        },
        {
          id: 3,
          title: "Instagram",
          url: "https://www.instagram.com",
          tags: ["Entertainment"]
        },
        {
          id: 5,
          title: "YouTube",
          url: "https://www.youtube.com",
          tags: ["Entertainment", "Video Sharing", "Social Media"]
        }
      ],
      filteredBookmarks: []
    };

    const action = {
      type: "FILTER_BOOKMARKS_BY_TAG",
      payload: "Social Media"
    };

    const updatedState = bookmarkReducer(state, action);

    const expectedState = {
      bookmarks: [
        {
          id: 1,
          title: "LinkedIn",
          url: "https://www.linkedin.com",
          tags: ["Career", "Social Media"]
        },
        {
          id: 3,
          title: "Instagram",
          url: "https://www.instagram.com",
          tags: ["Entertainment"]
        },
        {
          id: 5,
          title: "YouTube",
          url: "https://www.youtube.com",
          tags: ["Entertainment", "Video Sharing", "Social Media"]
        }
      ],
      filteredBookmarks: [
        {
          id: 1,
          title: "LinkedIn",
          url: "https://www.linkedin.com",
          tags: ["Career", "Social Media"]
        },
        {
          id: 5,
          title: "YouTube",
          url: "https://www.youtube.com",
          tags: ["Entertainment", "Video Sharing", "Social Media"]
        }
      ]
    };

    expect(updatedState).toEqual(expectedState);
  });

  test("should add tag to bookmark", () => {
    const state = {
      bookmarks: [
        {
          id: 1,
          title: "LinkedIn",
          url: "https://www.linkedin.com",
          tags: ["Career", "Social Media"]
        }
      ]
    };

    const action = {
      type: "ADD_TAG",
      payload: {
        id: 1,
        tag: "Network"
      }
    };

    const updatedState = bookmarkReducer(state, action);

    const expectedState = {
      bookmarks: [
        {
          id: 1,
          title: "LinkedIn",
          url: "https://www.linkedin.com",
          tags: ["Career", "Social Media", "Network"]
        }
      ]
    };

    expect(updatedState).toEqual(expectedState);
  });

  test("should remove tag from bookmark", () => {
    const state = {
      bookmarks: [
        {
          id: 1,
          title: "LinkedIn",
          url: "https://www.linkedin.com",
          tags: ["Career", "Social Media"]
        }
      ]
    };

    const action = {
      type: "REMOVE_TAG",
      payload: {
        id: 1,
        tag: "Career"
      }
    };

    const updatedState = bookmarkReducer(state, action);

    const expectedState = {
      bookmarks: [
        {
          id: 1,
          title: "LinkedIn",
          url: "https://www.linkedin.com",
          tags: ["Social Media"]
        }
      ]
    };

    expect(updatedState).toEqual(expectedState);
  });
});
