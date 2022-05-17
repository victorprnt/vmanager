import { render, screen } from '@testing-library/react'

import CardsContainer from '.'

describe('<CardsContainer />', () => {
  it('should render the heading', () => {
    const { container } = render(<CardsContainer />)

    expect(
      screen.getByRole('heading', { name: /CardsContainer/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
