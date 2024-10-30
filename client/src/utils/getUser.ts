async function getUser(username: string) {
  const response = await fetch(window.location.origin + "/api/user/profile/"+username)
  const data = await response.json()

  if (data.error) {
    return false
  }
  return data.user
}

export default getUser
