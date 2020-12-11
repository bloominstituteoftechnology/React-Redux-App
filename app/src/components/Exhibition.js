import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Container, Grid, Image, Header, Divider, List } from 'semantic-ui-react'

const Exhibition = (props) => {
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
                                <Image size='medium' key={img.b.image_id} src={index === 0 ? img.b.url : null} ui={false} alt={img.type} />
                            ))}
                        </Grid.Column>
                        <Grid.Column mobile={16} tablet={10} computer={10}>
                        <Header as='h4' style={{ fontSize: '2em' }}>
                        {props.exhibit.title}
                        </Header>
                        <p style={{ fontSize: '1.33em' }}>

                        </p>
                        <p style={{ fontSize: '1.2em' }}>
                        {props.exhibit.description ? props.exhibit.description : null}
                        </p>
                        <p>
                        {props.exhibit.label_text ? props.exhibit.label_text : null}
                        </p>
                        <Divider />
                            <List>
                                <List.Item><span className='date'>Acquired in {props.exhibit.year_acquired ? props.exhibit.year_acquired : <span>year not found</span>}</span></List.Item>
                                <List.Item>{props.exhibit.creditline}</List.Item>
                                <List.Item><span className='medium'>Medium is {props.exhibit.medium ? props.exhibit.medium : <span>not found</span>}</span></List.Item>
                                <List.Item>{props.exhibit.dimensions}</List.Item>
                                <List.Item>{props.exhibit.["woe:country_name"] ? props.exhibit.["woe:country_name"] : <span>Country Not provided</span>}</List.Item>
                            </List>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Container>
        </div>
    )
}

export default Exhibition;