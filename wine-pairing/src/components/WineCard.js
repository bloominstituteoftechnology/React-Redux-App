import React from 'react';
import { Card } from 'semantic-ui-react';

export const WineCard = ({data}) => {
    // const wines = data.pairedWines;
    console.log("WineCard Props: ", data)
    return(
    // <li>{wines}</li>

    // `Pairs well with: ${data.pairedWines[0]} or ${data.pairedWines[1]}${data.pairingText}`

        <>
    <Card className="wine_card">
        <Card.Content>
            <Card.Header className="wine_name" >
                <h2>Pairs well with: {data.pairedWines[0]} or {data.pairedWines[1]}</h2>
            </Card.Header>
            {/* <Card.Meta className="wine_name">
                <h4>Wine Type: {props.data.pairedWines}
                </h4>
            </Card.Meta> */}
            <Card.Description className="pairingText">{data.pairingText}
            </Card.Description> 
            <Card.Description className="productMatches">
            Matches: {data.productMatches.id}
            </Card.Description>
        </Card.Content>
    </Card>
        </>
    )
};
