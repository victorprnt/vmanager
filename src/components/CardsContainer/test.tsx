import { render, screen } from '@testing-library/react'

import CardsContainer from '.'

describe('<CardsContainer />', () => {
  it('should render the main portion of the cards', () => {
    const { container } = render(<CardsContainer />)

    // expect(screen.getAllByLabelText(/infocard/i)).toHaveLength(3)
    // expect(screen.getAllByLabelText(/graphcard/i)).toHaveLength(2)

    expect(container.firstChild).toMatchSnapshot()
  })
})
