import React, { Component } from 'react';
import "semantic-ui-css/semantic.min.css";
import { Advertisement,
         Container,
         Segment,
         Image,
         Grid

       }
       from "semantic-ui-react";

class Profile extends Component {
  render() {
    return (
      <div>
      <Container>
          <Segment.Group size = "large">
            <Segment inverted color="blue">
              <Container>
                <Advertisement centered unit="billboard">
                  <Image src = "https://s3-ap-southeast-1.amazonaws.com/niomic/img-v1/c_login_logo.png"/>
                </Advertisement>
              </Container>
            </Segment>
            <Segment.Group>
              <Segment>Nested Top</Segment>
              <Segment>Nested Middle</Segment>
              <Segment>Nested Bottom</Segment>
            </Segment.Group>
            <Segment.Group horizontal>
              <Segment>Top</Segment>
              <Segment>Middle</Segment>
              <Segment>Bottom</Segment>
            </Segment.Group>
            <Segment>Bottom</Segment>
        </Segment.Group>
      </Container>
      </div>
    );
  }
}
export default Profile;
