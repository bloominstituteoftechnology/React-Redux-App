import React from 'react'
import {connect} from 'react-redux'
import {Card,CardHeader,Col,Row,Container} from 'reactstrap'
const Jokes = (props) => {
    console.log(props)
    return (
        <div>
            {props.jokes.map((joke)=>{
                return(
                    <Container>
                        <Col>
                            <Card className="mb-3">
                                {joke.setup}
                            </Card>
                        </Col>
                    </Container>
                )
            })}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        jokes: state.jokes,
        error:state.error
    }
}

export default connect(mapStateToProps,{})(Jokes);
