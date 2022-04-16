const addBookmarkCreator = (value) => {
    return {
        type: 'ADD_BOOKMARK',
        payload: value
    };
}

export default addBookmarkCreator;