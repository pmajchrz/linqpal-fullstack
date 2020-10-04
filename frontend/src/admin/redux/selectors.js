export const getContext = store => store.admin || {};

export const getToken = store => getContext(store).token || null;

export const getItems = store => getContext(store).items || [];