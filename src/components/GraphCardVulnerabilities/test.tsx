import { render, screen } from '@testing-library/react'

import GraphCardVulnerabilities from '.'

const props = {
  title: 'Test Title',
  subtitle: 'Test Subtitle',
  severity: {
    low: 0,
    medium: 1,
    high: 2,
    critic: 3
  }
}

describe('<GraphCardVulnerabilities />', () => {
  it('should render the heading', () => {
    const { container } = render(<GraphCardVulnerabilities {...props} />)

    expect(
      screen.getByRole('heading', { name: /GraphCardVulnerabilities/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
