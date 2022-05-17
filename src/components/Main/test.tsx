import { render, screen } from '@testing-library/react'

import Main from '.'

describe('<Main />', () => {
  it('should render the main page', () => {
    const { container } = render(<Main />)

    expect(screen.getByRole('navigation')).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
