import React, {Component} from 'react';
import Bookings from './components/Bookings';
import Meals from './components/Meals';
import Error from './components/Error';


class App extends Component {

    state = {
        results: [],
    }

    _handleSubmit = (results) => {
        this.setState({ results });
    }

    render() {
        const { results } = this.state;

        return (<div className="container-fluid">
            <center>
                <h2>Hacker Hostel</h2>
            </center>
            <div className="container">
                <Bookings handleSubmit={this._handleSubmit}></Bookings>
                <Error></Error>
                {results.map(result => (
                    <Meals nameHacker={result.hacker} day={result.date}></Meals>
                ))}
                
            </div>
        </div>);
    }
}

export default App;