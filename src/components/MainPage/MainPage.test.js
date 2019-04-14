import React from 'react';
import { shallow, mount, render } from 'enzyme/build';
import MainPage from './MainPage';

let wrapper;

beforeEach(() => {
   const mockProps = {
      onRequestRobots: jest.fn(),
      robots: [],
      searchField: '',
      isPending: false
   };
   wrapper = shallow(<MainPage { ...mockProps}/>)
});

it('should render MainPage component', () => {
   expect(wrapper).toMatchSnapshot();
});

it('should filter robots correctly', () => {
   const mockProps2 = {
      onRequestRobots: jest.fn(),
      robots: [{
         id: 3,
         name: 'Edward',
         email: 'edward@kgb.com'
      }],
         searchField: 'edward',
         isPending: false
   };
   const wrapper2 = shallow(<MainPage { ...mockProps2}/>);
   expect(wrapper2.instance().filterRobots()).toEqual([{
      id: 3,
      name: 'Edward',
      email: 'edward@kgb.com'
   }])
});

it('should filter robots correctly 2', () => {
   const mockProps3 = {
      onRequestRobots: jest.fn(),
      robots: [{
         id: 3,
         name: 'Edward',
         email: 'edward@kgb.com'
      }],
      searchField: 'b',
      isPending: false
   };
   const filteredRobots = [];
   const wrapper3 = shallow(<MainPage { ...mockProps3}/>);
   expect(wrapper3.instance().filterRobots()).toEqual(filteredRobots)
});
