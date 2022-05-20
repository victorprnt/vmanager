import { useContext, useEffect } from 'react'
import { VManagerContext } from '../../context/VManagerContext'
import CardsContainer from '../CardsContainer'

import * as S from './styles'

const Main = () => {
  const { handleToken } = useContext(VManagerContext)
  useEffect(() => {
    // handleToken()
  }, [])
  return (
    <S.Wrapper>
      <CardsContainer />
    </S.Wrapper>
  )
}

export default Main
