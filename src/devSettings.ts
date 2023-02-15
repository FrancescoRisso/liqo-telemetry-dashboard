const dev_requireLogin = false;
const dev_renderMap = false;

export const requireLogin = process.env.NODE_ENV === "production" || dev_requireLogin;
export const renderMap = process.env.NODE_ENV === "production" || dev_renderMap;
