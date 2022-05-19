import * as S from './styles'

// import { postApiAuth, getApiAuth } from '../../services/v-services'
import mphlogo from '../../assets/mph-logo.png'
import dashboardIcon from '../../assets/icons/dashboard-line.svg'
import hostsIcon from '../../assets/icons/computer-line.svg'
import vulnerabilityIcon from '../../assets/icons/table-line.svg'

const SideBar = () => {
  return (
    <S.Wrapper>
      <div className="logo-container">
        <img className="logo" src={mphlogo} alt="mph logo" />
      </div>

      <div className="page-link-container page-dashboard">
        <a href="/" className="page-link">
          <img
            src={dashboardIcon}
            alt="Dashboard image to lead to dashboard page"
            title="Dashboard link"
          />
          <p className="page-link-text">Dashboard</p>
        </a>
      </div>
      <div className="page-link-container page-hosts">
        <a href="/hosts" className="page-link">
          <img
            src={hostsIcon}
            alt="Table image to lead to the hosts page"
            title="Hosts link"
          />
          <p className="page-link-text">Hosts</p>
        </a>
      </div>
      <div className="page-link-container page-vulnerabilities">
        <a href="/vulnerabilities" className="page-link">
          <img
            src={vulnerabilityIcon}
            alt="Table image to lead to the vulnerability page"
            title="Vulnerabilities link"
          />
          <p className="page-link-text">Vulnerabilites</p>
        </a>
      </div>
    </S.Wrapper>
  )
}

export default SideBar
