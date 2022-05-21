import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts'
import { SeverityProps } from '../../context/VManagerContext'
import * as S from './styles'

type GraphCardProps = {
  title: string
  subtitle: string
  severity: SeverityProps
}

const GraphCardVulnerabilities = ({
  title,
  subtitle,
  severity
}: GraphCardProps) => {
  const data = [
    { severity: 'Low', amount: severity.low },
    { severity: 'Medium', amount: severity.medium },
    { severity: 'High', amount: severity.high },
    { severity: 'Critic', amount: severity.critic }
  ]

  return (
    <S.Wrapper>
      <h2 className="graph-title graph-text">{title}</h2>
      <h3 className="graph-subtitle graph-text">{subtitle}</h3>

      <BarChart width={600} height={300} data={data}>
        <XAxis dataKey="severity" stroke="#8884d8" />
        <YAxis />
        <Tooltip />
        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
        <Bar dataKey="amount" fill="#8884d8" barSize={30} />
      </BarChart>
    </S.Wrapper>
  )
}

export default GraphCardVulnerabilities
