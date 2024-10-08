const loginReq = (type: string, username: string, password: string, err: any, callback: any) => {

  const bod = {
    username : username, 
    password : password
  }

  try {
    fetch(window.location.origin + "/api/user/" + type, {
      method : "POST",
      body : JSON.stringify(bod)
    })
      .then(response => response.json())
      .then(data => {
        if (data.error) {
          err(data.error.message)
        }
      })

  } catch (error) {
    console.log(error)
    callback()
  }
}

export default loginReq
