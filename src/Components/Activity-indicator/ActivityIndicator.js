import React from 'react'
import { Row, Spinner } from 'reactstrap'


export default function ActivityIndicator() {
    return (
        <Row style={{height:"80vh"}}>
            <Spinner type="grow" color="info" />
            <Spinner type="grow" color="info" />
            <Spinner type="grow" color="info" />
            <Spinner type="grow" color="info" />
            <Spinner type="grow" color="info" />  
        </Row>
    )
}
