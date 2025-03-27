const storedCount = localStorage.getItem("count");
const initialCount = storedCount !== null ? JSON.parse(storedCount) : 0;
const initialState = { count: initialCount };


function cartItemCountReducer(state = initialState, action){
    switch(action.type){
        case "INCREMENT":
            const updatedCount = state.count + action.payload;
            localStorage.setItem("count", JSON.stringify(updatedCount));
            return {
                ...state,
                count: updatedCount
            };
        case "DECREMENT":
            const updatedCount2 = state.count > 0 ? state.count - action.payload : 0;
            localStorage.setItem("count", JSON.stringify(updatedCount2));
            return {
                ...state,
                count: updatedCount2
            }
        default:
            return state;
    }
}

export default cartItemCountReducer