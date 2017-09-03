import Layout from '../containers/layout/layout';
import withRedux from 'next-redux-wrapper';

class Index extends React.Component {
  static async getInitialProps({ req }) {
    // console.log(req);

    return {};
  }

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Layout>
        <h1>We Just Hired A Few Japanese Waitress!</h1>
      </Layout>
    );
  }
}

export default Index;
// export default withRedux()(Index);
