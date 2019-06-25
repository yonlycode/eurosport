import React from 'react';
import ReactDOM from 'react-dom';
import PlayerCard from './PlayerCard';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<PlayerCard data={data} />, div);
});


let data = {
    "firstname": "Stan",
    "lastname": "Wawrinka",
    "shortname": "S.WAW",
    "sex": "M",
    "country": {
    "picture": "https://i.eurosport.com/_iss_/geo/country/flag/large/2213.png",
    "code": "SUI"
    },
    "picture": "https://i.eurosport.com/_iss_/person/pp_clubteam/large/325225.jpg",
    "data": {
    "rank": 21,
    "points": 1784,
    "weight": 81000,
    "height": 183,
    "age": 33,
    "last": [
    1,
    1,
    1,
    0,
    1
    ]
    }
}    