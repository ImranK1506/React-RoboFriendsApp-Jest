import React, { PureComponent } from 'react';

class CounterButton extends PureComponent {
   constructor(props) {
      super(props);
      this.state = {
         count: 0
      }
   }
   // React Lifecycle hook
   shouldComponentUpdate(nextProps, nextState) {
      if (this.state.count !== nextState.count) {
         return true
      } else {
      return false
      }
   }

   updateCount = () => {
      this.setState(state => {
         return { count: this.state.count + 1 }
      })
   };

   render() {
      return (
          // id is used in the unit test to use as a wrapper
          <button
             id='counter'
             className='f6 link dim ph3 pv2 mb2 dib white bg-black'
             color={this.props.color}
             onClick={this.updateCount}>
             Count: {this.state.count}
          </button>
      );
   }
}

export default CounterButton;
