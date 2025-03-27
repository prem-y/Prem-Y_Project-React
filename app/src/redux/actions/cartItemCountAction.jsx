export const increment = (quantity=1) => {
    return {
        type:"INCREMENT",
        payload: quantity
    };
};

export const decrement = (quantity=1) => {
    return {
        type:"DECREMENT",
        payload: quantity
    };
};