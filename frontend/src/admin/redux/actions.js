export const actionTypes = {
    STORE_TOKEN: "STORE_TOKEN",
    GET_SUBSCRIPTIONS: "GET_SUBSCRIPTIONS"
};

export const actions = {
    storeToken: (token) => ({
        type: actionTypes.STORE_TOKEN,
        payload: {
            token
        }
    }),
    getSubscriptions: (items) => ({
        type: actionTypes.GET_SUBSCRIPTIONS,
        payload: {
            items
        }
    })
};