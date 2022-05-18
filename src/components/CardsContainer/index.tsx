import GraphCard from '../GraphCard'
import InfoCard from '../InfoCard'
import * as S from './styles'

const CardsContainer = () => (
  <S.Wrapper>
    <div className="infocard-container">
      <InfoCard aria-label="infocard" />
      <InfoCard aria-label="infocard" />
      <InfoCard aria-label="infocard" />
    </div>
    <GraphCard aria-label="graphcard" />
    <GraphCard aria-label="graphcard" />
  </S.Wrapper>
)

export default CardsContainer
