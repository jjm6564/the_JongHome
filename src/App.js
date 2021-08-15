import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Qna from './SG/Qna'
import Templete from './JM/Templete';
import INFO from './MS/info';

class App extends Component {
    render() {
        return (
            <div>
            <Templete/>
            <Route path="/info" component={INFO}/>
            <Route path="/qna" component={Qna}/>
            </div>
        );
    }
}

export default App;