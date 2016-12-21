import React, {Component} from 'react';
import {
  Label,
  Button,
  Col,
  Panel,
  ListGroup,
  ListGroupItem,
  Image,
  ResponsiveEmbed,
  FormGroup,
  FormControl,
  Form,
  ControlLabel
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
              <ResponsiveEmbed a16by9>
                <Image src={img} rounded/>
              </ResponsiveEmbed>
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
              <Form horizontal>
                <FormGroup controlId="formHorizontalEmail">
                  <Col componentClass={ControlLabel} sm={2}>
                    Qty
                  </Col>
                  <Col sm={10}>
                    <FormControl type="number" placeholder="quantity" min="0"/>
                  </Col>
                </FormGroup>
              </Form>
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
  // route: React.PropTypes.shape({page: React.PropTypes.node})}
};
