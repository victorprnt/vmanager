import { render, screen } from '@testing-library/react'

import SideBar from '.'

describe('<SideBar />', () => {
  it('should render the heading', () => {
    const { container } = render(<SideBar />)

    expect(screen.getByRole('heading', { name: /SideBar/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
