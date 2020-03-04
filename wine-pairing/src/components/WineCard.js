import React from 'react';
import { Card } from 'semantic-ui-react';

export const WineCard = (props) => {
    const {pairedWines, pairingText, productMatches,} = props.data;
    console.log("WineCard Props: ", props.data.wine)
    return(
        <>
    <Card className="wine_card">
        <Card.Content>
            <Card.Header className="wine_name" >
                <h2>{pairedWines}</h2>
            </Card.Header>
            <Card.Meta className="wine_name">
                <h4>Wine Type: {pairedWines}
                </h4>
            </Card.Meta>
            <Card.Description className="pairingText">{pairingText}
            </Card.Description> 
            <Card.Description className="productMatches">
            {productMatches.title}, {productMatches.description}
            </Card.Description>
        </Card.Content>
    </Card>
        </>
    )
}