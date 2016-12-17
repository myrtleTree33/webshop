import React, {Component} from 'react';
// import {Title} from './title';
// import {Techs} from '../techs/techs';
import {Header} from './header';
import {Footer} from './footer';

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100%'
  },
  main: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column'
  }
};

export class Layout extends Component {
  render() {
    return (
      <div style={styles.container}>
        <Header/>
        {this.props.children}
        <Footer/>
      </div>
    );
  }
}

Layout.propTypes = {
  children: React.PropTypes.node
};
