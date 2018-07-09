function list(state = {
    data: [],
    loading: true
}, action) {
    switch (action.type) {
        case "LIST_UPDATE_SUCCESS":
            return {
                loading: false,
                data: action.data
            };
        default:
            return state;
    }
}
export default list;