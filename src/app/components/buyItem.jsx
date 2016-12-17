import React, {Component} from 'react';
import {
  Label,
  Button,
  Col,
  Panel,
  ListGroup,
  ListGroupItem,
  Image
} from 'react-bootstrap';

import img from '../img/splash.jpg';

// const styles = {};

export class BuyItem extends Component {

  printAvailable(isAvailable) {
    if (isAvailable) {
      return 'available';
    }
    return 'unavailable';
  }

  render() {
    console.log(this.props);
    const item = this.props.item;
    // const id = item.id || 'item';
    const name = item.name || 'name';
    const description = item.description || 'description';
    const isAvailable = item.isAvailable || false;
    const price = item.price || 0;
    const currency = item.currency || 'sgd';

    return (
      <Col xs={12} md={4}>
        <Panel header={name}>
          <ListGroup fill>
            <ListGroupItem>
              <Image src={img} rounded/>
            </ListGroupItem>
            <ListGroupItem>
              {description}
            </ListGroupItem>
            <ListGroupItem>
              <Label bsStyle="default">
                {this.printAvailable(isAvailable)}
              </Label>
            </ListGroupItem>
            <ListGroupItem>
              {currency.toUpperCase()}
              {price}
            </ListGroupItem>
            <ListGroupItem>
              <Button bsStyle="primary" bsSize="large" block>Buy now</Button>
            </ListGroupItem>
          </ListGroup>
        </Panel>
      </Col>
    );
  }
}

BuyItem.propTypes = {
  children: React.PropTypes.node,
  item: React.PropTypes.any
  // route: React.PropTypes.shape({page: React.PropTypes.node})
};
