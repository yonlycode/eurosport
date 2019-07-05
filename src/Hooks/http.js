import {useState , useEffect} from 'react';
import Axios from 'axios';


const useHttp = (url , dependencies) =>{
    const [isLoading, setLoading] = useState(false);
    const [players, setPlayers] = useState([]);
    const [error, setError] = useState(null);
    useEffect(()=>{
        setLoading(true);
        Axios.get(url)
        .then(res=>{
            setLoading(false)
            if(res.status){
                setPlayers(res.data.players)
            }            
        })
        .catch(e=>{
            return setError("can't fetch")
        })
    },dependencies)
    return [isLoading, players, error]
}

export {useHttp}