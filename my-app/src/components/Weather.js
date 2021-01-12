import React, { Component } from 'react';
import axios from 'axios';
import Dashboard from './Dashboard';
class Weather extends Component {
    constructor(props) {
        super(props);
        this.state = {
            country: "",
            city: "",
            state: "",
            weatherData: null,
            pollutionData: null
        }
    }
    //London,uk,826
    fetchData = (e) => {
        e.preventDefault();
        let { country, city, state } = this.state;
        if (country !== "" && city !== "" && state !== "") {
            axios.get("http://api.openweathermap.org/data/2.5/weather?q=" + city + "," + state + "," + country + "&appid=476a9e9bd1000e4be06e6d52fab92625")
                .then(res => {
                    this.setState({ weatherData: res.data.main })
                    if (res !== undefined && res.data !== undefined && res.data.coord !== undefined) {
                        let { lon, lat } = res.data.coord;
                        axios.get("http://api.openweathermap.org/data/2.5/air_pollution?lat=" + lat + "&lon=" + lon + "&appid=476a9e9bd1000e4be06e6d52fab92625")
                            .then(response => {
                                this.setState({ pollutionData: response.data.list[0].components })
                            })
                            .catch(err => console.log(err))
                    }
                })
                .catch(err => console.log(err))
        } else {
            alert("Please enter country, city, state")
        }
    }

    render() {
        return (
            <div>
                <form onSubmit={this.fetchData}>
                    <div className="form-group">
                        <label >Country:</label>
                        <input type="text" className="form-control login-form" id="country" placeholder="Enter country, e.g., 826" onChange={(e) => this.setState({ country: e.target.value })} />
                    </div>
                    <div className="form-group">
                        <label >State:</label>
                        <input type="text" className="form-control login-form" id="state" placeholder="Enter state, e.g., uk" onChange={(e) => this.setState({ state: e.target.value })} />
                    </div>
                    <div className="form-group">
                        <label >City:</label>
                        <input type="text" className="form-control login-form" id="city" placeholder="Enter city, e.g., London" onChange={(e) => this.setState({ city: e.target.value })} />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
                {this.state.weatherData && this.state.pollutionData && <Dashboard weather={this.state.weatherData} pollution={this.state.pollutionData} city = {this.state.city} state = {this.state.state} country = {this.state.country} user={this.props.user}/>}
            </div>
        );
    }
}

export default Weather;