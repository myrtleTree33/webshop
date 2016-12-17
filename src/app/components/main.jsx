import React, {Component} from 'react';
import {Jumbotron, Button, Grid, Row, Col} from 'react-bootstrap';

const styles = {
  container2: {}
};

export class Main extends Component {
  render() {
    return (
      <div style={styles.container2}>
        <Grid>
          <Row className="show-grid">
            <Col xs={12} md={12}>
              <Jumbotron>
                <h1>SG Trains</h1>
                <p>Custom-made trains for your use</p>
                <p>
                  <Button bsStyle="primary">Learn more</Button>
                </p>
              </Jumbotron>
            </Col>
          </Row>
        </Grid>
        {this.props.children}
      </div>
    );
  }
}

Main.propTypes = {
  children: React.PropTypes.node
};
