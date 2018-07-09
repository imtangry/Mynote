function user(state = {
    data: [
        { loginname: "", points: "", join_data: "", topic_with: [], reply: [] }
    ], loading: true
}, action) {
    switch (action.type) {
        case "USER_INFO":
            return {
                data: action.data,
                loading:false
            };
        default:
            return state;
    }
}
export default user;