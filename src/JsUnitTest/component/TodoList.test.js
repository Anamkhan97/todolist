import { shallow } from "enzyme";

import TodoList from '../../component/TodoList';
describe('<TodoList />', () => {
    it('should render properly', () => {
        const wrapper = shallow(<TodoList toDoItems={[]}/>);
        expect(wrapper.exists()).toBe(true);
      });
      it('should test <TodoList> component with list of todos', () => {
        const wrapper = shallow(
          <TodoList toDoItems={['Read Newspaper', 'Publish Article']} />
        );
        expect(wrapper.find('.items-list').exists()).toBe(true);
      });
   
   
});