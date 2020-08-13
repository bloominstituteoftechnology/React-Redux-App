import React from 'react'; 
import Card from '@material-ui/core/Card'; 
import CardActions from '@material-ui/core/CardActions'; 
import CardContent from '@material-ui/core/CardContent'; 
import Button from '@material-ui/core/Button'; 
import Typography from '@material-ui/core/Typography'; 

const TriviaCard = (props) => {
    console.log(props)
    return(
        <div>
            {props.question ? (
                <Card>
                    <CardContent>
                        <Typography gutterBottom variant="headline" component="h2">
                            {props.question}
                        </Typography>
                            {props.answers.map(answer => (
                                <Typography component="p">
                                    {answer}
                                </Typography>
                            ))}
                        <Typography component="p">
                                {props.correctAnswer}
                        </Typography>
                    </CardContent>
                </Card>
            ) : null}
        </div>
    )
}

export default TriviaCard; 