import React, { Component } from 'react';
import SystemData from './SystemData';
/* eslint-disable */

const api = {
  key: '9cf4213d3cc82809c8344f68d1ea107f',
  base: 'https://api.openweathermap.org/data/2.5/',
};

class Dashboard extends Component {
  // state should probably go in this component
  constructor(props) {
    super(props);
    this.state = {
      data: '',
    };
    this.clickMe = this.clickMe.bind(this);
  }

  // componentDidMount() {
  //   this.fetchData();
  // }

  componentDidMount() {
    // alert('hi');
    console.log('hey');
    // const socket = io.connect('http://localhost:5000');
    // alert('here');

    // socket.on('message', (data) => {
    //   alert(data.msg);
    // });

    // socket.emit('message', {
    //   msg: 'hi',
    // });
  }

  clickMe(e) {
    alert('button clicked');
  }

  // fetchData() {
  //   if (evt.key === 'Enter') {
  //     fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
  //       .then((res) => res.json())
  //       .then((result) => {
  //         setWeather(result);
  //         setQuery('');
  //       })
  //       .catch((error) => console.log('fetch request failed', error));
  //   }
  // }

  render() {
    return (
      <div className="dashboard">
        <div className="dashTitle">
          <h2>THIS IS THE DASHBOARD:</h2>
          <form className="dashForm" onSubmit={this.clickMe}>
            <input placeholder="search"></input>
            <button type="submit">click me</button>
          </form>

          {/* <input
               type="text"
               className="search-bar"
               placeholder="Search..."
               onChange={((((e)))) => setQuery(e.target.value)}
               value={query}
               onClick={search}
          /> */}
          {/* should dynamically render number of SystemData boxes */}
        </div>
        <div className="system-data-container">
          <SystemData className="item" />
          <SystemData className="item" />
          <SystemData className="item" />
        </div>
      </div>
    );
  }
}

export default Dashboard;
