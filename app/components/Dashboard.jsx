import React, { Component } from 'react';
import SystemData from './SystemData';
/* eslint-disable */

// const api = {
//   key: '9cf4213d3cc82809c8344f68d1ea107f',
//   base: 'https://api.openweathermap.org/data/2.5/',
// };

class Dashboard extends Component {
  // state should probably go in this component
  constructor(props) {
    super(props);
    this.state = {
      dataSize: {
        sum: 0,
        numOfDataPoints: 0,
        smallest: Number.POSITIVE_INFINITY,
        largest: Number.NEGATIVE_INFINITY,
      },
      pendingDuration: {
        sum: 0,
        numOfDataPoints: 0,
        smallest: 0,
        largest: 0,
      },
      processingTimeInMilliseconds: {
        sum: 0,
        numOfDataPoints: 0,
        smallest: Number.POSITIVE_INFINITY,
        largest: Number.NEGATIVE_INFINITY,
      },
    };
    this.clickMe = this.clickMe.bind(this);
  }

  // componentDidMount() {
  //   this.fetchData();
  // }

  componentDidMount() {
    const socket = io.connect('http://localhost:5000');
    console.log('cnct');

    socket.on('data', (data) => {
      const {
        dataSize,
        pendingDuration,
        processingTimeInMilliseconds,
      } = this.state;
      console.log(this.state);
      this.setState({
        ...this.state,
        dataSize: {
          sum: dataSize.sum + data.size,
          numOfDataPoints: dataSize.numOfDataPoints + 1,
          smallest: Math.min(dataSize.smallest, data.size),
          largest: Math.max(dataSize.largest, data.size),
        },
        pendingDuration: {
          sum: data.pendingDuration,
          numOfDataPoints: pendingDuration.numOfDataPoints + 1,
          smallest: 0,
          largest: 0,
        },
        processingTimeInMilliseconds: {
          sum:
            processingTimeInMilliseconds.sum +
            data.processingTimeInMilliseconds,
          numOfDataPoints: processingTimeInMilliseconds.numOfDataPoints + 1,
          smallest: Math.min(
            processingTimeInMilliseconds.smallest,
            data.processingTimeInMilliseconds
          ),
          largest: Math.max(
            processingTimeInMilliseconds.largest,
            data.processingTimeInMilliseconds
          ),
        },
      });
    });

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
        {/* <div className="dashTitle"> */}
        {/* <h2>THIS IS THE DASHBOARD:</h2>
          <form className="dashForm" onSubmit={this.clickMe}>
            <input placeholder="search"></input>
            <button type="submit">click me</button>
          </form> */}

        {/* <input
               type="text"
               className="search-bar"
               placeholder="Search..."
               onChange={((((e)))) => setQuery(e.target.value)}
               value={query}
               onClick={search}
          /> */}
        {/* should dynamically render number of SystemData boxes */}
        {/* </div> */}
        <div className="system-data-container">
          <SystemData
            className="item"
            data={this.state.dataSize}
            title={'Data Size'}
          />
          <SystemData
            className="item"
            data={this.state.pendingDuration}
            title={'Pending Duration'}
          />
          <SystemData
            className="item"
            data={this.state.processingTimeInMilliseconds}
            title={'Processing Time'}
          />
        </div>
      </div>
    );
  }
}

export default Dashboard;
