import { useContext, useEffect } from 'react'
import { VManagerContext } from '../../context/VManagerContext'
import TableRow from '../TableRow'
import * as S from './styles'

const InfoTable = () => {
  const { hosts, handleHosts, token, handleToken } = useContext(VManagerContext)

  useEffect(() => {
    // if (!token) handleToken()
    if (hosts.length === 0) handleHosts()
  })

  return (
    <S.Wrapper>
      <div className="table-container">
        <div className="input">
          <input type="text" className="filter" placeholder="Search Filter" />
          <button type="button" className="search-button">
            Search
          </button>
        </div>

        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Hostname</th>
              {/* <th>Created at</th>
              <th>Modified</th> */}
              <th>IP Address</th>
              <th>Risk</th>
              <th>N. Vuln</th>
            </tr>
          </thead>
          <tbody>
            {hosts &&
              hosts.map((host) => (
                <TableRow
                  key={host.id}
                  id={host.id}
                  created={host.created}
                  modified={host.modified}
                  hostname={host.hostname}
                  ip_address={host.ip_address}
                  risk={host.risk}
                  vuln_count={host.vuln_count}
                />
              ))}
          </tbody>
        </table>

        <div className="footer">
          <p className="text-results">Showing 1-50 of 200 results</p>
          <div className="page-selector"> {'<< < 1 2 > >>'} </div>
        </div>
      </div>
    </S.Wrapper>
  )
}

export default InfoTable
