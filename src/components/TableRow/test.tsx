import { render, screen } from '@testing-library/react'

import TableRow from '.'

describe('<TableRow />', () => {
  it('should render the heading', () => {
    const { container } = render(<TableRow />)

    expect(screen.getByRole('row')).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
