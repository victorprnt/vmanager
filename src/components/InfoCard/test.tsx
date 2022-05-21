import { render, screen } from '@testing-library/react'

import InfoCard from '.'

const props = {
  label: 'Assets',
  value: 33,
  total: 33
}

// describe('<InfoCard />', () => {
//   it('should render the heading', () => {
//     const { container } = render(<InfoCard {...props} />)

//     expect(
//       screen.getByRole('img', { name: /InfoCard Image/i })
//     ).toBeInTheDocument()
//     expect(screen.getByText(/value/i)).toBeInTheDocument()
//     expect(screen.getByText(/label/i)).toBeInTheDocument()

//     expect(container.firstChild).toMatchSnapshot()
//   })
// })
