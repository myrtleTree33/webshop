import React, {Component} from 'react';
import {PageHeader, Grid, Row, Col} from 'react-bootstrap';
import {BuyItem} from './buyItem';

const styles = {
  container2: {}
};

const items = [
  {
    id: '1',
    name: 'DB Class 103',
    description: 'some shoes',
    isAvailable: false,
    price: 30.55,
    currency: 'sgd',
    type: 'engine'
  }, {
    id: '1',
    name: 'shoe A',
    description: 'some shoes',
    isAvailable: true,
    price: 30.55,
    currency: 'sgd',
    type: 'engine'
  }, {
    id: '1',
    name: 'shoe A',
    description: 'some shoes',
    isAvailable: true,
    price: 30.55,
    currency: 'sgd',
    type: 'engine'
  }, {
    id: '1',
    name: 'shoe A',
    description: 'some shoes',
    isAvailable: true,
    price: 30.55,
    currency: 'sgd',
    type: 'engine'
  }
];

export class Sell extends Component {

  titleCase(string) {
    if (!string) {
      return string;
    }
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  render() {
    const pageType = this.props.route.pageType || 'unknown';

    const dispItems = [];
    for (let i = 0; i < items.length; i++) {
      dispItems.push(
        <BuyItem className="item" key={i} item={items[i]}>hihi</BuyItem>
      );
    }
    return (
      <div style={styles.container2}>
        <Grid>
          <Row className="show-grid">
            <Col xs={12} md={12}>
              <PageHeader>
                {this.titleCase(pageType)}
              </PageHeader>
            </Col>
          </Row>
          <Row className="show-grid">
            {dispItems}
          </Row>
        </Grid>
        {this.props.children}
      </div>
    );
  }
}

Sell.propTypes = {
  children: React.PropTypes.node,
  params: React.PropTypes.any,
  route: React.PropTypes.any
  // route: React.PropTypes.shape({page: React.PropTypes.node})
};
