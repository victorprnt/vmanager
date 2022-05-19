import { HostProps } from '../../context/VManagerContext'
import * as S from './styles'

const TableRow = ({
  id,
  hostname,
  ip_address,
  risk,
  vuln_count
}: HostProps) => (
  <S.Wrapper>
    <td>{id}</td>
    <td>{hostname}</td>
    <td>{ip_address}</td>
    <td>{risk}</td>
    <td>{vuln_count}</td>
  </S.Wrapper>
)

export default TableRow
