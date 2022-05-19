import { render, screen } from '@testing-library/react'

import TableRow from '.'

const props = {
  id: 1,
  created: '2021-08-04T16:54:46.369764-03:00',
  modified: '2021-08-04T16:54:46.369787-03:00',
  hostname: 'WORKSTATION-1',
  ip_address: '172.18.0.1',
  risk: '10.00',
  vuln_count: 25
}

describe('<TableRow />', () => {
  it('should render the heading', () => {
    const { container } = render(<TableRow {...props} />)

    expect(screen.getByRole('row')).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
