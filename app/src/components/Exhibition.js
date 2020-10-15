import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Container, Grid, Image, Card, Header } from 'semantic-ui-react'

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
                <Grid columns={1} divided>
                <Grid.Row>
                    <Grid.Column>
                    <Card>
                        {props.exhibit.images.map((img, index) => (
                            <Image key={img.b.image_id} src={index === 0 ? img.b.url : null} wrapped ui={false} />
                        ))}
                        <Card.Content>
                        <Card.Header>{props.exhibit.title}</Card.Header>
                        <Card.Meta>
                            <span className='date'>Acquired in {props.exhibit.year_acquired}</span>
                        </Card.Meta>
                        <Card.Meta>
                            <span className='medium'>Medium is {props.exhibit.medium}</span>
                        </Card.Meta>
                        <Card.Description>
                            {props.exhibit.description}
                        </Card.Description>
                        </Card.Content>
                        <Card.Content extra>
                        {props.exhibit.["woe:country_name"] ? props.exhibit.["woe:country_name"] : <span>Not provided</span>}
                        </Card.Content>
                    </Card>
                    </Grid.Column>
                    </Grid.Row>
                    
                </Grid>
            </Container>
        </div>
    )
}

export default Exhibition;