const bookmarksReducer = (state, action) => {
    switch (action.type){
        case 'ADD_BOOKMARK':
            return {
                bookmarks: [...state.bookmarks].concat(action.payload),
                current: action.payload
            };
        default:
            return state;
    }
}

export default bookmarksReducer;