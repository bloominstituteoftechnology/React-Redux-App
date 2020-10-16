import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Container, Grid, Image, Header, Divider, List } from 'semantic-ui-react'

const Exhibition = (props) => {
    //console.log(props)
    console.log(props.exhibit.images.map((img, index) => ( index === 0 ? img.b.url : null )))
    return (
        <div>
            <Container
                style={{
                marginTop: '5.5em'
                }}
            >
                <Grid celled>
                    <Grid.Row>
                        <Grid.Column mobile={16} tablet={6} computer={6}>
                            {props.exhibit.images.map((img, index) => (
                                <Image size='medium' key={img.b.image_id} src={index === 0 ? img.b.url : null} ui={false} />
                            ))}
                        </Grid.Column>
                        <Grid.Column mobile={16} tablet={10} computer={10}>
                        <Header as='h4' style={{ fontSize: '2em' }}>
                        {props.exhibit.title}
                        </Header>
                        <p style={{ fontSize: '1.33em' }}>

                        </p>
                        <p style={{ fontSize: '1.0em' }}>
                        {props.exhibit.description}
                        </p>
                        <Divider />
                            <List>
                                <List.Item><span className='date'>Acquired in {props.exhibit.year_acquired}</span></List.Item>
                                <List.Item><span className='medium'>Medium is {props.exhibit.medium}</span></List.Item>
                                <List.Item>{props.exhibit.["woe:country_name"] ? props.exhibit.["woe:country_name"] : <span>Not provided</span>}</List.Item>
                            </List>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Container>
        </div>
    )
}

export default Exhibition;