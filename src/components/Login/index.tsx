import { FormEvent, useContext, useState } from 'react'
import { Navigate } from 'react-router-dom'
import { VManagerContext } from '../../context/VManagerContext'
import { getTokenFromLocalStorage } from '../../utils/persistedState'
import * as S from './styles'

const Login = () => {
  const [user, setUser] = useState('')
  const [password, setPassword] = useState('')
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const { handleEmail, handlePassword, handleToken, token } =
    useContext(VManagerContext)

  function handleOnSubmit(event: FormEvent) {
    event.preventDefault()

    handleEmail(user)
    handlePassword(password)
    handleToken(user, password)

    if (getTokenFromLocalStorage()) setIsLoggedIn(true)
  }

  if (isLoggedIn && isLoggedIn === true) {
    return <Navigate to="/dashboard" />
  } else {
    return (
      <S.Wrapper>
        <form onSubmit={handleOnSubmit}>
          <input
            type="text"
            name="user"
            placeholder="Username"
            value={user}
            onChange={(event) => setUser(event.target.value)}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            required
          />
          <button type="submit">Log In</button>
        </form>
      </S.Wrapper>
    )
  }
}

export default Login
