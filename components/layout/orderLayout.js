import Layout from './layout';

class orderLayout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      subpage: 'Menu'
    }
  }
  render() {
    return (
      <div>
      {this.props.children}
      </div>
    )
  }
}