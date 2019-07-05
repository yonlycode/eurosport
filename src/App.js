import React from 'react'
import ActivityIndicator from './Components/Activity-indicator/ActivityIndicator';
import Header from './Components/Header/Header';
import PlayerCard from './Components/Player-Card/PlayerCard';
import ErrorScreen from './Components/Error-Screen/ErrorScreen';
import { useHttp } from './Hooks/http';


const App = () =>  {
  let  uri = "https://eurosportdigital.github.io/eurosport-web-developer-recruitment/headtohead.json"

  const [isLoading, data, error] = useHttp(uri, [])

  //map card from request
  let cards = isLoading?<ActivityIndicator/>:data.map((val , i)=>{
    return <PlayerCard data={val} key={i}/>
  })


  let content = (
    <div className="container-fluid">
      <Header/>
      <br/>
      <div className="container" style={{display:"flex", flexDirection:"row", justifyContent:"space-around", alignItems:"center", flexWrap:"wrap"}}>
        {cards}
      </div>
    </div>
  )

  if(error!==null){
    return <ErrorScreen error={error}/>
  }

  return content
}


export default App;