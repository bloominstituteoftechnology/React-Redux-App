import React from 'react'; 
import Card from '@material-ui/core/Card'; 
import CardActions from '@material-ui/core/CardActions'; 
import CardContent from '@material-ui/core/CardContent'; 
import Button from '@material-ui/core/Button'; 
import Typography from '@material-ui/core/Typography'; 

const TriviaCard = (props) => {
    console.log(props)
    return(
        <div className="showAll">
            {props.question ? (
                <Card style={{ height: '30vh', alignItems: 'center' }}>
                    <CardContent>
                        <Typography gutterBottom 
                        variant="subtitle2" 
                        component="h2"
                        >
                            {props.question}
                        </Typography>
                            {props.answers.map(answer => (
                                <Typography 
                                variant="caption" 
                                component="p"
                                >
                                    {answer}
                                </Typography>
                            ))}
                        <Typography 
                        variant="caption" 
                        component="p"
                        >
                            {props.correctAnswer}
                        </Typography>
                    </CardContent>
                </Card>
            ) : null}
        </div>
    )
}

export default TriviaCard; 