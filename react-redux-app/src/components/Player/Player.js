import React from 'react';
import { Card } from 'semantic-ui-react';

import './Player.scss';

const Player = props => {
    
    console.log('Player', props.player)

    return (
        <div className='player-card'>
            <Card className='ind-players'>
                <Card.Content>
                    <Card.Header>
                        {props.player.name_display_first_last}
                    </Card.Header>
                </Card.Content>
                <Card.Content>
                    <Card.Description>
                        Postion: {props.player.position_txt}
                    </Card.Description>

                    <Card.Description>
                        Bats: {props.player.bats}
                    </Card.Description>

                    <Card.Description>
                        Throws: {props.player.throws}
                    </Card.Description>
                </Card.Content>
                
            </Card>
        </div>
    )
}

export default Player;