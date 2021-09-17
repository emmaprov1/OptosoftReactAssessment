const useLoggedInUser = () => {
  const loggedIn:any = localStorage.getItem('__session_op');
  return loggedIn ? JSON.parse(loggedIn) : null;
}
export default useLoggedInUser
