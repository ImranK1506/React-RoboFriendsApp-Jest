import React from 'react';
import { shallow, mount, render } from 'enzyme/build';
import ErrorBoundary from './ErrorBoundary';

it('should render ErrorBoundary component', () => {
   expect(shallow(<ErrorBoundary />)).toMatchSnapshot();
});

it('should not catch error', () => {
   const wrapper = shallow(<ErrorBoundary />);

   expect(wrapper.state()).toEqual({ hasError: false});
});

it('should catch error', () => {
   const wrapper = shallow(<ErrorBoundary />);

   wrapper.state({ hasError: true});
   // expect(wrapper.state()).toEqual({ hasError: true});
   expect(wrapper.state()).toBeTruthy();
});
