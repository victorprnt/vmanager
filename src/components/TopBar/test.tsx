import { render, screen } from '@testing-library/react'

import TopBar from '.'

describe('<TopBar />', () => {
  it('should render the heading', () => {
    const { container } = render(<TopBar />)

    expect(screen.getByRole('heading', { name: /TopBar/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
