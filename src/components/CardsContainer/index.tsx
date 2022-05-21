import { useContext, useEffect } from 'react'
import { VManagerContext } from '../../context/VManagerContext'
import GraphCard from '../GraphCard'
import GraphCardVulnerabilities from '../GraphCardVulnerabilities'
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
    handleRiskAverage,
    topAssets,
    handleTopAssets,
    severity,
    handleSeverity
  } = useContext(VManagerContext)

  useEffect(() => {
    // if (!token) handleToken()
    if (totalHosts === 0 && vulnerableHosts === 0) handleVulnerableHostsCount()
    if (activeVulnearabilities === 0 && totalVulnearabilities === 0)
      handleVulnerabilitiesCount()
    if (riskAverage === 0) handleRiskAverage()
    if (topAssets.length === 0) handleTopAssets()
    if (
      severity.low === 0 &&
      severity.medium === 0 &&
      severity.high === 0 &&
      severity.critic === 0
    )
      handleSeverity()
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
          label="Average Risk"
          value={riskAverage}
        />
        {/* <InfoCard aria-label="infocard" />
        <InfoCard aria-label="infocard" /> */}
      </div>
      <GraphCard
        aria-label="graphcard"
        title="Top 10"
        subtitle="most vulnerable hosts"
        topAssets={topAssets}
      />
      <GraphCardVulnerabilities
        aria-label="graphcard"
        title="Vulnerability amount"
        subtitle="distributed by severity"
        severity={severity}
      />
    </S.Wrapper>
  )
}

export default CardsContainer
