const usersReducer = (users = [], action) => {
  if (action.type === 'USERS_LIST') {
    users = [action.data]
  }
  return users;
}

export default usersReducer;