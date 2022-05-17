import InfoCard from '../InfoCard'
import * as S from './styles'

const CardsContainer = () => (
  <S.Wrapper>
    <h1>CardsContainer</h1>
    <div className="infocard-container">
      <InfoCard />
      <InfoCard />
      <InfoCard />
    </div>
  </S.Wrapper>
)

export default CardsContainer
