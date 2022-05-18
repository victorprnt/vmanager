import { render, screen } from '@testing-library/react'

import GraphCard from '.'

describe('<GraphCard />', () => {
  it('should render the heading', () => {
    const { container } = render(<GraphCard />)

    expect(
      screen.getByRole('heading', { name: /Graph title/i })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /subtitle/i })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('img', { name: /graph image/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
