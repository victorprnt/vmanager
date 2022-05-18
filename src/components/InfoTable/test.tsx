import { render, screen } from '@testing-library/react'

import InfoTable from '.'

describe('<InfoTable />', () => {
  it('should render the table content', () => {
    const { container } = render(<InfoTable />)

    expect(screen.getByRole('textbox')).toHaveAttribute(
      'placeholder',
      'Search Filter'
    )
    expect(screen.getByRole('table')).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
