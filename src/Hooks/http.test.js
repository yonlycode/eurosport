import React from 'react';
import {render} from 'react-dom';
import {fireEvent, cleanup} from '@testing-library/react'
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { useHttp } from './http';

let uri = "";

beforeEach(() => {
    uri = "https://eurosportdigital.github.io/eurosport-web-developer-recruitment/headtohead.json"
  })

Enzyme.configure({ adapter: new Adapter() })

function HookWrapper(props) {
    const hook = props.hook ? props.hook() : undefined;
    return <div hook={hook} />;
}


describe('useHttp Hook', () => {

    it('should render', () => {
        let wrapper = shallow(<HookWrapper />);
        expect(wrapper.exists()).toBeTruthy();
      });


    it('should set init value', () => {
        let wrapper = shallow(<HookWrapper hook={() => useHttp(uri)} />);
        
        let { hook } = wrapper.find('div').props();
        let [isLoading, players, error] = hook;
        expect(players).toEqual([]);
        expect(error).toEqual(null);
        expect(isLoading).toEqual(false);
    });

    it('fetch data on mount', ()=>{
        const domContainer = document.createElement('div');
        render(<HookWrapper hook={()=>useHttp(uri)}/>, domContainer);
        //let { hook } = wrapper.find('div').props();
        console.log(uri)
    })
})