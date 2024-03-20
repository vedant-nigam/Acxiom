const checkAuth = (funcNot, funcYes) => {
    const token = window.localStorage.getItem("role");
    if (!token) {
        funcNot();
    }
    else {
        funcYes();
    }
}

export const logout = (navigateFunc) => {
    window.localStorage.removeItem("role");
    navigateFunc();
}

export default checkAuth;