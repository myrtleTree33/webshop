import React, {Component} from 'react';
import {Button, Grid, Row, Col} from 'react-bootstrap';

const styles = {
  container2: {}
};

export class Profile extends Component {
  render() {
    return (
      <div style={styles.container2}>
        <Grid>
          <Row>
            <Col xs={12} md={12}>
              <h1>This is the profile page</h1>
              <p>
                <Button bsStyle="primary">Learn more</Button>
              </p>
            </Col>
          </Row>
        </Grid>
        {this.props.children}
      </div>
    );
  }
}

Profile.propTypes = {
  children: React.PropTypes.node
};
