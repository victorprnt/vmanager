export function storeToken(token: string) {
  localStorage.setItem('@vmanager:token', token)
}

export function getTokenFromLocalStorage() {
  const storagedToken = localStorage.getItem('@vmanager:token')

  return storagedToken ? storagedToken : ''
}
