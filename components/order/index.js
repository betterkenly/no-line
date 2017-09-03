import React from 'react';
import { Menu } from './menu.js';

class Order extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    return (
      <div>
        <div>
          Order
        </div>
        <Menu />
      </div>
    )
  }
}

export default Order;