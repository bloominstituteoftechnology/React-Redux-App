import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Grid, Image, Card } from 'semantic-ui-react'

const Exhibition = (props) => {
    //console.log(props.exhibit.images.map(img => ( img.b.url)))
    return (
        <div>
            <Grid divided>
            <Grid.Row>
                <Grid.Column>
                <Card>
                    {props.exhibit.images.map(img => (
                        <Image key={img.d.image_id} src={img.d.url} wrapped ui={false} />
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
                </Card>
                </Grid.Column>
                </Grid.Row>
            </Grid>
        </div>
    )
}

export default Exhibition;