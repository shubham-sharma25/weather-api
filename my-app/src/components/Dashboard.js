import React, { Component } from 'react';
import Pdf from "react-to-pdf";
class Dashboard extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let { weather, pollution, city, state, country, user } = this.props;
        const ref = React.createRef();
        return (
            <div>
                <div ref={ref} className="dashboard">
                <h3>User</h3>
                Name : {user}<br />
                City : {city}<br />
                State : {state}<br />
                Country : {country}<br />
                <h3>Weather stats</h3>
                Humidity : {weather.humidity}<br />
                Temperature : {weather.temp}<br />
                Pressure : {weather.pressure}<br />
                <h3>Pollution stats</h3>
                CO : {pollution.co}<br />
                NO : {pollution.no}<br />
                NO2 : {pollution.no2}<br />
                SO2 : {pollution.so2}<br />
                </div>
                <Pdf targetRef={ref} filename="dashboard.pdf">
                    {({ toPdf }) => <button onClick={toPdf} className="btn btn-primary">Generate Pdf</button>}
                </Pdf>
            </div>
        );
    }
}

export default Dashboard;