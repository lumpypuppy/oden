import React, {Component} from 'react';
import Viewer from './Viewer';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Viewer url="https://sketchfab.com/models/b36d9a6575a04cc3948405d33c962900/embed"></Viewer>
            </div>
        );
    }
}

export default App;
