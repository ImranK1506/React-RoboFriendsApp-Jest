import React from 'react';
import { shallow, mount, render } from 'enzyme';
import CounterButton from './CounterButton';

it('should render CounterButton component', () => {
   const mockColor = 'blue';
   expect(shallow(<CounterButton color={mockColor} />)).toMatchSnapshot();
});

it('should increment counter', () => {
   const mockColor = 'blue';
   const wrapper = shallow(<CounterButton color={mockColor} />);

   wrapper.find('[id="counter"]').simulate('click');
   expect(wrapper.state()).toEqual({ count: 1});
   expect(wrapper.props().color).toEqual('blue');
});
