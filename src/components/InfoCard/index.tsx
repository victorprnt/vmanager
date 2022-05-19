import * as S from './styles'

type InfocardProps = {
  label: string
  value: number
  total: number
}

const InfoCard = ({ label, value, total }: InfocardProps) => (
  <S.Wrapper className="infocard">
    <img src="" alt="Infocard Image" className="infocard" />
    <div className="infocard-text">
      <p className="infocard-value">
        {value} / {total}
      </p>
      <p className="infocard-label">{label}</p>
    </div>
  </S.Wrapper>
)

export default InfoCard
