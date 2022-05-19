import { createContext, ReactNode, useState } from 'react'
import axios from 'axios'
import qs from 'qs'

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

export type VulnerabilityProps = {
  id: number
  title: string
  severity: string
  cvss: string
  publication_date: string
  asset_count: number
}

interface VManagerContextData {
  token: string
  handleToken: () => void
  hosts: HostProps[]
  handleHosts: () => void
  vulnerabilities: VulnerabilityProps[]
  handleVulnerabilities: () => void
  totalHosts: number
  vulnerableHosts: number
  handleVulnerableHosts: () => void
}

interface VmanagerProviderProps {
  children: ReactNode
}

export const VManagerContext = createContext({} as VManagerContextData)

export function VManagerProvider({ children }: VmanagerProviderProps) {
  const [token, setToken] = useState('')
  const [totalHosts, setTotalHosts] = useState(0)
  const [vulnerableHosts, setVulnerableHosts] = useState(0)
  const [hosts, setHosts] = useState<HostProps[]>([])
  const [vulnerabilities, setVulnerabilities] = useState<VulnerabilityProps[]>(
    []
  )

  async function handleToken() {
    const myHeaders = new Headers()
    myHeaders.append('Content-Type', 'application/x-www-form-urlencoded')
    myHeaders.append(
      'Cookie',
      'csrftoken=vb01HtTSwIENduyagptoiTLOsiSCbcjQyHuZ8T3QVcMoxAxvADPuNyafPh4qWzBv'
    )

    const urlencoded = new URLSearchParams()
    urlencoded.append('username', 'victorprnt')
    urlencoded.append('password', '=-rq{Xw,3K2Xynsl5cVu')

    await fetch('http://201.49.62.134:8080/api-token-auth/', {
      method: 'POST',
      headers: myHeaders,
      body: urlencoded,
      redirect: 'follow'
    })
      .then((response) => response.text())
      .then((result) => {
        setToken(JSON.parse(result).token)
        console.log('token: ' + token)
      })
      .catch((error) => console.log('error', error))
  }

  async function handleVulnerableHosts() {
    const myHeaders = new Headers()
    myHeaders.append(
      'Authorization',
      'Token 48617639be811f6f52d976902ae99c951a73331d'
    )
    myHeaders.append(
      'Cookie',
      'csrftoken=vb01HtTSwIENduyagptoiTLOsiSCbcjQyHuZ8T3QVcMoxAxvADPuNyafPh4qWzBv'
    )

    fetch('http://201.49.62.134:8080/api/dashboard/cards/asset', {
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

  async function handleHosts() {
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
        console.log(hosts)
      })
      .catch((error) => console.log('error', error))
  }

  async function handleHostVulnerabilities(id: number) {
    const myHeaders = new Headers()
    myHeaders.append(
      'Authorization',
      'Token 48617639be811f6f52d976902ae99c951a73331d'
    )
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
    const myHeaders = new Headers()
    myHeaders.append(
      'Authorization',
      'Token 48617639be811f6f52d976902ae99c951a73331d'
    )
    myHeaders.append(
      'Cookie',
      'csrftoken=vb01HtTSwIENduyagptoiTLOsiSCbcjQyHuZ8T3QVcMoxAxvADPuNyafPh4qWzBv'
    )

    fetch('http://201.49.62.134:8080/api/vulnerabilities/', {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
    })
      .then((response) => response.text())
      .then((result) => setVulnerabilities(JSON.parse(result).results))
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
        handleVulnerableHosts
      }}
    >
      {children}
    </VManagerContext.Provider>
  )
}
