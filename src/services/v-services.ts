import { getTokenFromLocalStorage, storeToken } from '../utils/persistedState'

export async function getToken(username: string, password: string) {
  const myHeaders = new Headers()
  myHeaders.append('Content-Type', 'application/x-www-form-urlencoded')
  myHeaders.append(
    'Cookie',
    'csrftoken=vb01HtTSwIENduyagptoiTLOsiSCbcjQyHuZ8T3QVcMoxAxvADPuNyafPh4qWzBv'
  )

  const urlencoded = new URLSearchParams()
  urlencoded.append('username', username)
  urlencoded.append('password', password)

  await fetch('http://201.49.62.134:8080/api-token-auth/', {
    method: 'POST',
    headers: myHeaders,
    body: urlencoded,
    redirect: 'follow'
  })
    .then((response) => response.text())
    .then((result) => {
      // setToken(JSON.parse(result).token)
      storeToken(JSON.parse(result).token)
      // console.log('token: ' + token)
    })
    .catch((error) => console.log('error', error))
}

export async function getVulnerableCount() {
  return
}
