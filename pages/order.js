import Layout from '../components/layout/layout';
import Menu from '../pages/order/menu';
import Previous from '../pages/order/previous';
import Favorite from '../pages/order/favorite';

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
    const subPage = this.state.subpage === 'Menu' ? <Menu /> : this.state.subpage === 'Previous' ? <Previous /> : <Favorite />;
      return (
        <Layout>
            <div>
              <div>
                Order
              </div>
              <a onClick={this.handleMenu} >Menu</a>
              <a onClick={this.handlePrevious} >Previous</a>
              <a onClick={this.handleFavorite} >Favorite</a>
            </div>
            { subPage }
        </Layout>
      )
  }

}

export default Order;


