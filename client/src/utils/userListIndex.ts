import {UserType} from "../typedef/typedefs"

function userListIndex(user: UserType, list: UserType[]) {
  for (let i = 0; i < list.length; i++) {
    if (user.username === list[i].username) {
      return i
    }
  }
  return -1
}

export default userListIndex 
