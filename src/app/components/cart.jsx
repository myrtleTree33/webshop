import React, {Component} from 'react';
import {Grid, Row, Col, Table, Button} from 'react-bootstrap';

const styles = {
  floatRight: {
    float: 'right'
  }
};

class CartItem extends Component {
  render() {
    const index = (this.props.index || 0) + 1;
    const item = this.props.item;
    const name = item.name || 'name';
    const price = item.price || 0;
    const qty = item.qty || 0;
    const total = item.total || 0;

    return (
      <tr>
        <td>{index}</td>
        <td>{name}</td>
        <td>{price}</td>
        <td>{qty}</td>
        <td>{total}</td>
      </tr>
    );
  }
}

CartItem.propTypes = {
  children: React.PropTypes.node,
  item: React.PropTypes.any,
  index: React.PropTypes.any
};

export class Cart extends Component {

  render() {
    const bill = {
      id: '123',
      shipping: 7,
      tax: 5,
      items: [
        {
          name: 'DB Class 103',
          price: 30.55,
          currency: 'sgd',
          qty: 1,
          total: 30.55
        }, {
          name: 'DB Carriage',
          price: 15.50,
          currency: 'sgd',
          qty: 1,
          total: 15.50
        }
      ],
      total: 99
    };

    const dispItems = [];
    for (let i = 0; i < bill.items.length; i++) {
      dispItems.push(<CartItem className="item" key={i} index={i} item={bill.items[i]}/>);
    }

    return (
      <div style={styles.container3}>
        <Grid>
          <Row className="show-grid">
            <Col xs={12} md={12}>
              <Table striped bordered condensed hover>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Item</th>
                    <th>Unit Price (SGD)</th>
                    <th>Qty</th>
                    <th>total</th>
                  </tr>
                </thead>
                <tbody>
                  {dispItems}
                  <tr>
                    <td colSpan="3"/>
                    <td>Products total</td>
                    <td>180.00</td>
                  </tr>
                  <tr>
                    <td colSpan="3"/>
                    <td>Tax</td>
                    <td>{bill.tax}</td>
                  </tr>
                  <tr>
                    <td colSpan="3"/>
                    <td>Shipping</td>
                    <td>{bill.shipping}</td>
                  </tr>
                  <tr>
                    <td colSpan="3"/>
                    <th>Grand total</th>
                    <th>{bill.total}</th>
                  </tr>
                </tbody>
              </Table>
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={12}>
              <Button bsStyle="primary" bsSize="large" style={styles.floatRight}>Checkout now</Button>
            </Col>
          </Row>
        </Grid>
        <p/>
      </div>
    );
  }
}

Cart.propTypes = {
  children: React.PropTypes.node
};
