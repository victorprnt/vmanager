import { useContext, useEffect } from 'react'
import { VManagerContext } from '../../context/VManagerContext'
import GraphCard from '../GraphCard'
import InfoCard from '../InfoCard'
import * as S from './styles'

const CardsContainer = () => {
  const {
    totalHosts,
    vulnerableHosts,
    handleVulnerableHosts,
    token,
    handleToken
  } = useContext(VManagerContext)

  useEffect(() => {
    if (!token) handleToken()
    if (totalHosts === 0 && vulnerableHosts === 0) handleVulnerableHosts()
  })
  return (
    <S.Wrapper>
      <div className="infocard-container">
        <InfoCard
          // aria-label="infocard"
          label="Assets"
          value={vulnerableHosts}
          total={totalHosts}
        />
        <InfoCard
          // aria-label="infocard"
          label="Vulnerabilities"
          value={vulnerableHosts}
          total={totalHosts}
        />
        <InfoCard
          // aria-label="infocard"
          label="Average risk"
          value={vulnerableHosts}
          total={totalHosts}
        />
        {/* <InfoCard aria-label="infocard" />
        <InfoCard aria-label="infocard" /> */}
      </div>
      <GraphCard aria-label="graphcard" />
      <GraphCard aria-label="graphcard" />
    </S.Wrapper>
  )
}

export default CardsContainer
