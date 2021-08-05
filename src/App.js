import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Qna from './SG/Qna'
import Templete from './JM/Templete';


class App extends Component {
    render() {
        return (
            <div>
            <Templete/>
            <Qna />
            </div>
            
        );
    }
}

export default App;