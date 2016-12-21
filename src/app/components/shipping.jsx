import React, {Component} from 'react';
import {Grid, Row, Col} from 'react-bootstrap';

const styles = {
  container2: {}
};

export class Shipping extends Component {
  render() {
    return (
      <div style={styles.container2}>
        <Grid>
          <Row className="show-grid">
            <Col xs={12} md={12}>
              <h1>Shipping policy</h1>
            </Col>
          </Row>
        </Grid>
        {this.props.children}
      </div>
    );
  }
}

Shipping.propTypes = {
  children: React.PropTypes.node
};
