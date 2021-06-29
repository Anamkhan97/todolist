import { shallow } from "enzyme";
import React from 'react';
import sinon from "sinon";
import ButtonComponent from "../../../component/common/Button";
describe('ButtonComponent ', () => {

  it('should render a submit button', () => {
    const mockCallBack = sinon.spy();
    const wrapper = shallow(<ButtonComponent onClick={mockCallBack} />);
    wrapper.find('button').simulate('click');
    expect(mockCallBack.calledOnce).toBe(true);
  });
});

