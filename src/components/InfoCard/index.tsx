import * as S from './styles'

import host from '../../assets/icons/computer-line-black.svg'
import threat from '../../assets/icons/threat-line.svg'
import numbers from '../../assets/icons/numbers-line.svg'

type InfocardProps = {
  label: 'Assets' | 'Vulnerabilities' | 'Average Risk'
  value: number
  total?: number
}

const InfoCard = ({ label, value, total }: InfocardProps) => (
  <S.Wrapper className="infocard">
    {label === 'Assets' ? (
      <img src={host} alt="Infocard Image" className="infocard" />
    ) : label === 'Vulnerabilities' ? (
      <img src={threat} alt="Infocard Image" className="infocard" />
    ) : (
      <img src={numbers} alt="Infocard Image" className="infocard" />
    )}
    <div className="infocard-text">
      <p className="infocard-value">
        {value} {total && '/'} {total}
      </p>
      <p className="infocard-label">{label}</p>
    </div>
  </S.Wrapper>
)

export default InfoCard
