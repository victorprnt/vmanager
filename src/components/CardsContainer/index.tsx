import { useContext, useEffect } from 'react'
import { VManagerContext } from '../../context/VManagerContext'
import GraphCard from '../GraphCard'
import InfoCard from '../InfoCard'
import * as S from './styles'

const CardsContainer = () => {
  const {
    totalHosts,
    vulnerableHosts,
    handleVulnerableHostsCount,
    totalVulnearabilities,
    activeVulnearabilities,
    handleVulnerabilitiesCount,
    riskAverage,
    handleRiskAverage
  } = useContext(VManagerContext)

  useEffect(() => {
    // if (!token) handleToken()
    if (totalHosts === 0 && vulnerableHosts === 0) handleVulnerableHostsCount()
    if (activeVulnearabilities === 0 && totalVulnearabilities === 0)
      handleVulnerabilitiesCount()
    if (riskAverage === 0) handleRiskAverage()
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
          value={activeVulnearabilities}
          total={totalVulnearabilities}
        />
        <InfoCard
          // aria-label="infocard"
          label="Average risk"
          value={riskAverage}
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
