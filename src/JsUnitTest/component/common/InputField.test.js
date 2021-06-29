import { shallow } from 'enzyme';
import InputField from '../../../component/common/InputField';
describe('render <InputField /> component', () => {

  it('should render an  input tag', () => {
    const wrapper = shallow(<InputField />);
    expect(wrapper.find('input').exists()).toBe(true);
  });
});