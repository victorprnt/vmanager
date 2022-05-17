import { render, screen } from '@testing-library/react'

import SideBar from '.'

describe('<SideBar />', () => {
  it('should render the left navbar', () => {
    const { container } = render(<SideBar />)

    // Test to assert the first navbar link
    expect(
      screen.getByRole('img', {
        name: /Dashboard image to lead to dashboard page/i
      })
    ).toBeInTheDocument()
    expect(screen.getByText(/dashboard/i)).toBeInTheDocument()

    // Test to assert the second navbar link
    expect(
      screen.getByRole('img', {
        name: /Table image to lead to the hosts page/i
      })
    ).toBeInTheDocument()
    expect(screen.getByText(/hosts/i)).toBeInTheDocument()

    // Test to assert the third navbar link
    expect(
      screen.getByRole('img', {
        name: /Table image to lead to the vulnerability page/i
      })
    ).toBeInTheDocument()
    expect(screen.getByText(/vulnerabilites/i)).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
