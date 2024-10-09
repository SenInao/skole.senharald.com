const loginReq = (type: string, username: string, password: string) => {
  const bod = {
    username : username, 
    password : password
  }

  return fetch(window.location.origin + "/api/user/" + type, {
    method : "POST",
    headers: {
      'Content-Type': 'application/json'
    },
    body : JSON.stringify(bod)
  })
    .then(response => response.json())
    .then(data => {
      if (data.error) {
        return {sucess:false, error:data.error.message}
      } else {
        return {sucess:true}
      }
    })
    .catch(err => {
      console.log(err)
      return {sucess:false, error:"Server error"}
    })
}

export default loginReq
