import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Grid, Image } from 'semantic-ui-react'

const Exhibition = (props) => {
    return (
        <div>
            <Grid columns={3} divided>
            <Grid.Row>
                <Grid.Column>
                    <Image src='/images/wireframe/media-paragraph.png' />
                </Grid.Column>
                <Grid.Column>
                    <Image src='/images/wireframe/media-paragraph.png' />
                </Grid.Column>
                <Grid.Column>
                    <Image src='/images/wireframe/media-paragraph.png' />
                </Grid.Column>
                </Grid.Row>
            </Grid>
        </div>
    )
}

export default Exhibition;