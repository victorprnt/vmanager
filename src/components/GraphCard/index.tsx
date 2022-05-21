import * as S from './styles'
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts'
import { TopAssetProps } from '../../context/VManagerContext'

type GraphCardProps = {
  title: string
  subtitle: string
  topAssets: TopAssetProps[]
}

const GraphCard = ({ title, subtitle, topAssets }: GraphCardProps) => {
  const data = topAssets.map((asset) => ({
    host: asset.host,
    va: asset.vuln_count
  }))

  return (
    <S.Wrapper>
      <h2 className="graph-title graph-text">{title}</h2>
      <h3 className="graph-subtitle graph-text">{subtitle}</h3>

      <BarChart width={900} height={300} data={data}>
        <XAxis dataKey="host" stroke="#8884d8" />
        <YAxis />
        <Tooltip />
        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
        <Bar dataKey="va" fill="#8884d8" barSize={30} />
      </BarChart>
    </S.Wrapper>
  )
}

export default GraphCard
