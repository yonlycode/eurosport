import React ,{memo} from 'react'
import { Card, CardImg, CardBody, Row, Col, Badge } from 'reactstrap';
  

const PlayerCard = ({data, ...props}) => {
    let lastWins = 0
    let lastLooses= 0
    data.data.last.map((value, i)=>{
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
                            <CardImg top src={data.picture} alt="Card image cap" />
                        </Col>
                        <Col md="4">
                        <strong>
                            <h3>{data.firstname}</h3>
                            <h4>{data.lastname}</h4>
                            <p>
                                <img style={{width:"40px",heigth:"auto",borderRadius:"50%"}} src={data.country.picture} alt={data.firstname + " photo"}/>
                                {" "+ data.country.code}
                            </p>
                        </strong>
                        </Col>
                        <Col md="5">
                        <Card style={{color:"black"}}>
                            <CardBody>
                                <div>
                                    <p>
                                        Age : <strong>{data.data.age}</strong>
                                    </p>
                                    <p>
                                        Weight : <strong>{data.data.weight/1000}kg</strong>
                                    </p>
                                    <p>
                                        Height : <strong>{data.data.height} cm</strong>
                                    </p>
                                    <p>
                                        Sex:<strong>{" "+data.sex}</strong>
                                    </p> 
                                </div>
                            </CardBody>
                        </Card>
                        </Col>                        
                    </Row>

                    <br/>
                    <Row style={{fontWeight:"bolder"}}>  
                        <Col md="4">
                            <h4>Rank : { data.data.rank}</h4>
                        </Col>
                        <Col md="4">
                            <h4>Points : { data.data.points}</h4>
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
export default memo(PlayerCard)