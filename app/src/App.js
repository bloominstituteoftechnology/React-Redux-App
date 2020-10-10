import React from 'react';
import { connect } from 'react-redux';
import Exhibitions from './components/Exhibitions';
import 'semantic-ui-css/semantic.min.css'
import { Container, Header, Menu, Image, List, Divider, Segment } from 'semantic-ui-react'

const mapStateToProps = (state) => {
  console.log(state)
  return {
    exhibitsAsProps: state.exhibits
  }
}

function App({ exhibitsAsProps }) {
  return (
    <div>
      <Menu fixed='top' inverted>
        <Container>
          <Menu.Item as='a' header>
            <Image size='mini' src='/logo.svg' style={{ marginRight: '1.5em' }} />
            Project Name
          </Menu.Item>
          <Menu.Item as='a'>Home</Menu.Item>
        </Container>
      </Menu>
      <Container>
        <Header as='h1'>First Header</Header>
        <Exhibitions exhibits={exhibitsAsProps} />
      </Container>

      <Segment inverted vertical style={{ margin: '5em 0em 0em', padding: '5em 0em' }}>
      <Container textAlign='center'>
        <Divider inverted section />
        <Image centered size='mini' src='/logo.png' />
        <List horizontal inverted divided link size='small'>
          <List.Item as='a' href='#'>
            Site Map
          </List.Item>
          <List.Item as='a' href='#'>
            Contact Us
          </List.Item>
          <List.Item as='a' href='#'>
            Terms and Conditions
          </List.Item>
          <List.Item as='a' href='#'>
            Privacy Policy
          </List.Item>
        </List>
      </Container>
    </Segment>
    </div>
  );
}

export default connect(mapStateToProps, {})(App);
