import axios from "axios";

const executeBasicAuthenticationService = (username, password) => {
    return axios.get('http://localhost:8080/api/auth',
        { headers: { authorization: createBasicAuthToken(username, password) } })
}

const createBasicAuthToken = (username, password) => {
    return 'Basic ' + window.btoa(username + ":" + password)
}

const addAuthorizationHeaderToRequests = () => {
    axios.interceptors.request.use(
        (config) => {
            if (isUserLoggedIn()) {
                config.headers.authorization = getToken();
            }
            return config
        }
    )
}

const logout = () => {
    localStorage.removeItem('login');
    localStorage.removeItem('token');
}

const registerSuccessfulLogin = (username, password) => {
    const token = createBasicAuthToken(username,password);
    localStorage.setItem('login', username)
    localStorage.setItem('token', token)
    addAuthorizationHeaderToRequests()
}

const isUserLoggedIn = () => {
    return localStorage.getItem('login') && localStorage.getItem('token')
}

const getLoggedInUserName = () => {
    let user = localStorage.getItem('login')
    if (user === null) return ''
    return user
}

const getToken = () => localStorage.getItem('token');

const AuthenticationService = {
    addAuthorizationHeaderToRequests,
        executeBasicAuthenticationService,
    registerSuccessfulLogin,
    getLoggedInUserName,
    isUserLoggedIn,
    logout
}

export default AuthenticationService;