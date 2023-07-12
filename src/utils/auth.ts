export const isAuthenticated = (url: string) => {
  // const path = window.location.pathname
  // const auth = path === '/dashboard' ? true : false
  const auth =
    url === '/' || url === '/login' || url === '/signup' ? false : true
  //This function will return true or false depending on whether the user is authenticated or not.
  // const authToken = localStorage.getItem('authToken')
  // return !!authToken

  return auth
}
