import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Exhibition from './components/Exhibition';
import { fetchData } from './actions/exhibitActions';
import 'semantic-ui-css/semantic.min.css';
import CircleLoader from './CircleLoader';
import { Container, Menu, List, Divider, Segment } from 'semantic-ui-react';

function App(props) {
  useEffect(() => {
    props.fetchData();
  }, [])
  
  return (
    <div>
        <Menu fixed='top' inverted>
        <Container>
          <Menu.Item as='a' header>
            COOPER HEWITT EXHIBITS
          </Menu.Item>
        </Container>
      </Menu>
      <Container
        style={{
          marginTop: '5.5em'
          }}
      >

        {props.isFetching ? (
          <CircleLoader />
        ) : ( 
          props.exhibitsAsProps && props.exhibitsAsProps.map(item => 
            <Exhibition key={item.id} exhibit={item} />
          )
        )}
      </Container>
    <Segment inverted vertical style={{ margin: '5em 0em 0em', padding: '5em 0em' }}>
      <Container textAlign='center'>
        <Divider inverted section />
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
