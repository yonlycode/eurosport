import React from 'react'
import { Card, CardImg, CardBody, Row, Col, Badge } from 'reactstrap';
  
export default function PlayerCard(props) {
    let lastWins = 0
    let lastLooses= 0
    props.data.data.last.map((value, i)=>{
        if (value ===1){
            lastWins +=1
        }else{
            lastLooses+=1
        }
    }) 
    return (
        <div style={{width:"500px"}}>
            <Card color="dark" style={{color:"white"}}>
                <CardBody>
                    <Row>
                        <Col md="3">
                            <CardImg top src={props.data.picture} alt="Card image cap" />
                        </Col>
                        <Col md="4">
                        <strong>
                            <h3>{props.data.firstname}</h3>
                            <h4>{props.data.lastname}</h4>
                            <p>
                                <img style={{width:"40px",heigth:"auto",borderRadius:"50%"}} src={props.data.country.picture} alt={props.data.firstname + " photo"}/>
                                {" "+ props.data.country.code}
                            </p>
                        </strong>
                        </Col>
                        <Col md="5">
                        <Card style={{color:"black"}}>
                            <CardBody>
                                <div>
                                    <p>
                                        Age : <strong>{props.data.data.age}</strong>
                                    </p>
                                    <p>
                                        Weight : <strong>{props.data.data.weight/1000}kg</strong>
                                    </p>
                                    <p>
                                        Height : <strong>{props.data.data.height} cm</strong>
                                    </p>
                                    <p>
                                        Sex:<strong>{props.data.sex}</strong>
                                    </p> 
                                </div>
                            </CardBody>
                        </Card>
                        </Col>                        
                    </Row>

                    <br/>
                    <Row style={{fontWeight:"bolder"}}>  
                        <Col md="4">
                            <h4>Rank : { props.data.data.rank}</h4>
                        </Col>
                        <Col md="4">
                            <h4>Points : { props.data.data.points}</h4>
                        </Col>
                        
                    </Row>
                    <br/>
                    <h4> LAST MATCHS</h4>
                    <Row style={{fontWeight:"bolder"}}> 
                        <Col md="12">

                            <div style={{display:"flex", alignItems:"center", justifyContent:"space-around"}}> 
                                <div>
                                    <h2><Badge color="success">{lastWins+" "} Wins</Badge></h2>
                                </div>
                                <div>
                                    <h2><Badge color="danger">{lastLooses+" "}Looses</Badge></h2>

                                </div>
                                                            
                            </div>
                        </Col>
                                               
                    </Row>
                </CardBody>
            </Card>
        </div>
    )
}
