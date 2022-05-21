import { createContext, ReactNode, useState } from 'react'
import { getTokenFromLocalStorage, storeToken } from '../utils/persistedState'
import { getToken } from '../services/v-services'

export type HostProps = {
  id: number
  created: string
  modified: string
  hostname: string
  ip_address: string
  risk: string
  vuln_count: number
  vulnerabilities?: VulnerabilityProps[]
}

export type TopAssetProps = {
  host: string
  vuln_count: number
}

export type VulnerabilityProps = {
  id: number
  title: string
  severity: string
  cvss: string
  publication_date: string
  asset_count: number
}

export type SeverityProps = {
  low: number
  medium: number
  high: number
  critic: number
}

interface VManagerContextData {
  handleEmail: (email: string) => void
  handlePassword: (password: string) => void
  token: string
  handleToken: (username: string, password: string) => void
  hosts: HostProps[]
  handleHosts: () => void
  vulnerabilities: VulnerabilityProps[]
  handleVulnerabilities: () => void
  totalHosts: number
  vulnerableHosts: number
  handleVulnerableHostsCount: () => void
  totalVulnearabilities: number
  activeVulnearabilities: number
  handleVulnerabilitiesCount: () => void
  riskAverage: number
  handleRiskAverage: () => void
  topAssets: TopAssetProps[]
  handleTopAssets: () => void
  severity: SeverityProps
  handleSeverity: () => void
}

interface VmanagerProviderProps {
  children: ReactNode
}

export const VManagerContext = createContext({} as VManagerContextData)

export function VManagerProvider({ children }: VmanagerProviderProps) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [token, setToken] = useState('')
  const [totalHosts, setTotalHosts] = useState(0)
  const [vulnerableHosts, setVulnerableHosts] = useState(0)
  const [totalVulnearabilities, setTotalVulnearabilities] = useState(0)
  const [activeVulnearabilities, setActiveVulnearabilities] = useState(0)
  const [riskAverage, setRiskAverage] = useState(0.0)
  const [hosts, setHosts] = useState<HostProps[]>([])
  const [vulnerabilities, setVulnerabilities] = useState<VulnerabilityProps[]>(
    []
  )
  const [topAssets, setTopAssets] = useState<TopAssetProps[]>([])
  const [severity, setSeverity] = useState<SeverityProps>({
    low: 0,
    medium: 0,
    high: 0,
    critic: 0
  })

  function handleEmail(queryEmail: string) {
    setEmail(queryEmail)
    console.log(email)
  }

  function handlePassword(queryPassword: string) {
    setPassword(queryPassword)
    console.log(password)
  }

  async function handleToken(username: string, password: string) {
    await getToken(username, password)
  }

  async function handleVulnerableHostsCount() {
    const token = getTokenFromLocalStorage()
    const myHeaders = new Headers()
    myHeaders.append('Authorization', `Token ${token}`)
    myHeaders.append(
      'Cookie',
      'csrftoken=vb01HtTSwIENduyagptoiTLOsiSCbcjQyHuZ8T3QVcMoxAxvADPuNyafPh4qWzBv'
    )

    await fetch('http://201.49.62.134:8080/api/dashboard/cards/asset', {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
    })
      .then((response) => response.text())
      .then((result) => {
        const jsonResult = JSON.parse(result)
        setTotalHosts(jsonResult.asset_count)
        setVulnerableHosts(jsonResult.vulnerable_asset_count)
      })
      .catch((error) => console.log('error', error))
  }

  async function handleVulnerabilitiesCount() {
    const token = getTokenFromLocalStorage()
    const myHeaders = new Headers()
    myHeaders.append('Authorization', `Token ${token}`)
    myHeaders.append(
      'Cookie',
      'csrftoken=vb01HtTSwIENduyagptoiTLOsiSCbcjQyHuZ8T3QVcMoxAxvADPuNyafPh4qWzBv'
    )

    await fetch('http://201.49.62.134:8080/api/dashboard/cards/vulnerability', {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
    })
      .then((response) => response.text())
      .then((result) => {
        const jsonResult = JSON.parse(result)
        console.log(result)
        setTotalVulnearabilities(jsonResult.vuln_count)
        setActiveVulnearabilities(jsonResult.active_vuln_count)
      })
      .catch((error) => console.log('error', error))
  }

  async function handleRiskAverage() {
    const token = getTokenFromLocalStorage()

    const myHeaders = new Headers()
    myHeaders.append('Authorization', `Token ${token}`)
    myHeaders.append(
      'Cookie',
      'csrftoken=vb01HtTSwIENduyagptoiTLOsiSCbcjQyHuZ8T3QVcMoxAxvADPuNyafPh4qWzBv'
    )

    await fetch('http://201.49.62.134:8080/api/dashboard/cards/risk', {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
    })
      .then((response) => response.text())
      .then((result) => setRiskAverage(JSON.parse(result).risk_avg))
      .catch((error) => console.log('error', error))
  }

  async function handleHosts() {
    const token = getTokenFromLocalStorage()
    const myHeaders = new Headers()
    myHeaders.append('Authorization', `Token ${token}`)
    myHeaders.append(
      'Cookie',
      'csrftoken=vb01HtTSwIENduyagptoiTLOsiSCbcjQyHuZ8T3QVcMoxAxvADPuNyafPh4qWzBv'
    )

    await fetch('http://201.49.62.134:8080/api/assets/', {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
    })
      .then((response) => response.text())
      .then((result) => {
        setHosts(JSON.parse(result).results)
        console.log('hosts' + hosts)
      })
      .catch((error) => console.log('error', error))
  }

  async function handleHostVulnerabilities(id: number) {
    const token = getTokenFromLocalStorage()
    const myHeaders = new Headers()
    myHeaders.append('Authorization', `Token ${token}`)
    myHeaders.append(
      'Cookie',
      'csrftoken=vb01HtTSwIENduyagptoiTLOsiSCbcjQyHuZ8T3QVcMoxAxvADPuNyafPh4qWzBv'
    )

    await fetch(`http://201.49.62.134:8080/api/assets/${id}`, {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
    })
      .then((response) => response.text())
      .then((result) => {
        return setVulnerabilities(JSON.parse(result).vulnerabilities)
      })
      .catch((error) => console.log('error', error))
  }

  async function handleVulnerabilities() {
    const token = getTokenFromLocalStorage()
    const myHeaders = new Headers()
    myHeaders.append('Authorization', `Token ${token}`)
    myHeaders.append(
      'Cookie',
      'csrftoken=vb01HtTSwIENduyagptoiTLOsiSCbcjQyHuZ8T3QVcMoxAxvADPuNyafPh4qWzBv'
    )

    await fetch('http://201.49.62.134:8080/api/vulnerabilities/', {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
    })
      .then((response) => response.text())
      .then((result) => setVulnerabilities(JSON.parse(result).results))
      .catch((error) => console.log('error', error))
  }

  async function handleTopAssets() {
    const token = getTokenFromLocalStorage()
    const myHeaders = new Headers()
    myHeaders.append('Authorization', `Token ${token}`)
    myHeaders.append(
      'Cookie',
      'csrftoken=vb01HtTSwIENduyagptoiTLOsiSCbcjQyHuZ8T3QVcMoxAxvADPuNyafPh4qWzBv'
    )

    await fetch('http://201.49.62.134:8080/api/dashboard/charts/top-assets', {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
    })
      .then((response) => response.text())
      .then((result) => setTopAssets(JSON.parse(result)))
      .catch((error) => console.log('error', error))
  }

  async function handleSeverity() {
    const token = getTokenFromLocalStorage()
    const myHeaders = new Headers()
    myHeaders.append('Authorization', `Token ${token}`)
    myHeaders.append(
      'Cookie',
      'csrftoken=vb01HtTSwIENduyagptoiTLOsiSCbcjQyHuZ8T3QVcMoxAxvADPuNyafPh4qWzBv'
    )

    fetch('http://201.49.62.134:8080/api/dashboard/charts/severity', {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
    })
      .then((response) => response.text())
      .then((result) => {
        const severityTemp = {
          low: JSON.parse(result).Baixo,
          medium: JSON.parse(result).Médio,
          high: JSON.parse(result).Alto,
          critic: JSON.parse(result).Crítico
        }
        setSeverity({ ...severityTemp })
      })
      .catch((error) => console.log('error', error))
  }

  return (
    <VManagerContext.Provider
      value={{
        token,
        handleToken,
        hosts,
        handleHosts,
        vulnerabilities,
        handleVulnerabilities,
        totalHosts,
        vulnerableHosts,
        handleVulnerableHostsCount,
        handleEmail,
        handlePassword,
        totalVulnearabilities,
        activeVulnearabilities,
        handleVulnerabilitiesCount,
        riskAverage,
        handleRiskAverage,
        topAssets,
        handleTopAssets,
        severity,
        handleSeverity
      }}
    >
      {children}
    </VManagerContext.Provider>
  )
}
