import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Exhibition from './components/Exhibition';
import { fetchData } from './actions/exhibitActions';
import 'semantic-ui-css/semantic.min.css'
import { Container, Menu, Image, List, Divider, Segment, Message } from 'semantic-ui-react';

function App(props) {
  useEffect(() => {
    props.fetchData();
  }, [])
  console.log(props)
  
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
      <Container
        style={{
          marginTop: '5.5em'
          }}
      >
      {console.log(props.exhibitsAsProps && props.exhibitsAsProps.map(item => item.images))}
        {props.isFetching ? (
          <Message>
          <Message.Header>Fetching Exhibits</Message.Header>
          <p>
            ...this won't take long...
          </p>
        </Message>
        ) : ( 
          props.exhibitsAsProps && props.exhibitsAsProps.map(item => 
            <Exhibition exhibit={item} />
          )
        )}
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

const mapStateToProps = (state) => {
  return {
    exhibitsAsProps: state.data,
    isFetching: state.isFetching,
    error: state.error
  }
}

export default connect(mapStateToProps, {fetchData})(App);
