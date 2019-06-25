import React, { Component } from 'react'
import Axios from 'axios';
import ActivityIndicator from './Components/Activity-indicator/ActivityIndicator';
import Header from './Components/Header/Header';
import PlayerCard from './Components/Player-Card/PlayerCard';
import ErrorScreen from './Components/Error-Screen/ErrorScreen';

export default class App extends Component {
  //init state
  constructor(props){
    super(props);
    this.state={
      isLoading : true,
      players : null,
      error : null
    }
  }

  //get players infos on mount
  componentDidMount(){
    Axios.get('https://eurosportdigital.github.io/eurosport-web-developer-recruitment/headtohead.json')
    .catch(e=>{
      this.setState({
        error : e
      })
    })
    .then(res=>{
      this.setState({
        players: res.data.players,
        isLoading:false
      })
    })
  }

  render(){
    //destructuring
    const {isLoading , players , error} = this.state

    //if error while fetch data
    if(error!==null){
      return <ErrorScreen error={error}/>
    }

    //map card from request
    let cards = isLoading?<ActivityIndicator/>:players.map((val , i)=>{
      return <PlayerCard data={val} key={i}/>
    })


    //render
    return (
      <div className="container-fluid">
        <Header/>
        <br/>
        <div className="container" style={{display:"flex", flexDirection:"row", justifyContent:"space-around", alignItems:"center", flexWrap:"wrap"}}>
          {cards}
        </div>
        
      </div>
    )
  }
}


