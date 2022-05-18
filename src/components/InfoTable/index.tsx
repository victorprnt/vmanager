import TableRow from '../TableRow'
import * as S from './styles'

const InfoTable = () => (
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
            <th>Column 01</th>
            <th>Column 02</th>
            <th>Column 03</th>
            <th>Column 04</th>
            <th>Column 05</th>
            <th>Column 06</th>
            <th>Column 07</th>
          </tr>
        </thead>
        <tbody>
          <TableRow />
          <TableRow />
          <TableRow />
          <TableRow />
        </tbody>
      </table>

      <div className="footer">
        <p className="text-results">Showing 1-50 of 200 results</p>
        <div className="page-selector"> {'<< < 1 2 > >>'} </div>
      </div>
    </div>
  </S.Wrapper>
)

export default InfoTable
