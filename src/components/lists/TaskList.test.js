import { render } from '@testing-library/react'
import TaskList from './TaskList'
// 0 - Render the component
test('renders the component', () => {
    const r = render(<TaskList />)
    expect(r).toMatchSnapshot()
})