import orderLayout from '../components/layout/orderLayout';
import Layout from '../components/layout/layout';
import Menu from '../components/order/menu';
import Previous from '../components/order/previous';
import Favorite from '../components/order/favorite';

class Order extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      subpage: 'Menu'
    }
    this.handleMenu = this.handleMenu.bind(this);
    this.handlePrevious = this.handlePrevious.bind(this);
    this.handleFavorite = this.handleFavorite.bind(this);
  }

  handleMenu() {
    this.setState({subpage: 'Menu'});
  }

  handlePrevious() {
    this.setState({subpage: 'Previous'}); 
  } 

  handleFavorite() {
    this.setState({subpage: 'Favorite'})
  }

  render() {
    if (this.state.subpage === 'Menu') {
      return (
        <Layout>
          <orderLayout>
            <div>
              <div>
                Order
              </div>
              <a onClick={this.handleMenu} >Menu</a>
              <a onClick={this.handlePrevious} >Previous</a>
              <a onClick={this.handleFavorite} >Favorite</a>
            </div>
            <Menu />
          </orderLayout>
        </Layout>
      )
    } else if (this.state.subpage === 'Previous') {
      return (
        <Layout>
          <orderLayout>
            <div>
              <div>
                Order
              </div>
              <a onClick={this.handleMenu} >Menu</a>
              <a onClick={this.handlePrevious} >Previous</a>
              <a onClick={this.handleFavorite} >Favorite</a>
            </div>
            <Previous />
          </orderLayout>
        </Layout>
      )
    } else if (this.state.subpage === 'Favorite') {
      return (
        <Layout>
          <orderLayout>
            <div>
              <div>
                Order
              </div>
              <a onClick={this.handleMenu} >Menu</a>
              <a onClick={this.handlePrevious} >Previous</a>
              <a onClick={this.handleFavorite} >Favorite</a>
            </div>
            <Favorite />
          </orderLayout>
        </Layout>
      )
    }
  }

}

export default Order;


