export const FavoritesReducer = (state, action) => {
    const { type, payload } = action;
    console.log(payload)
    switch (type) {
        case "ADD_TO_FAVOURITES": {
            break;
        }
        case "REMOVE_FROM_FAVOURITES": {
            break;
        }
        default:
            return state;
    }
}
