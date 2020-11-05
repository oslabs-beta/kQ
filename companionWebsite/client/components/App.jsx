import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import { Menu } from 'semantic-ui-react';

import About from './About.jsx';
import Docs from './Docs.jsx';
import Home from './Home.jsx';
import QuickStart from './QuickStart.jsx';

// $bright-white: #f9f9fc;
// $dim-white: #d1d1d2;

// $app-background-color: #0a0b18;
// $menu-background-color: #2c2c34;
// $box-background-color: #23252d;

const menuBackgroundColor = '#2c2c34';
const dimWhite = '#d1d1d2';

const menuStyling = {
  backgroundColor: menuBackgroundColor,
};

const linkStyling = {
  color: dimWhite,
};

class App extends Component {
  // This method generates a list of menu items to display on the top bar
  generateMenuItems() {
    const headings = ['Home', 'Quick Start', 'Documentation', 'Meet the Team'];

    return headings.map((heading) => {
      // Grab the current heading, convert it to lower case, replace all spaces with "-",
      // and add a slash to the beginning
      const routeTo = '/' + heading.toLowerCase().replace(/ /g, '-');

      return (
        <Menu.Item active={false} link={'/quick-start'}>
          <Link to={routeTo} style={linkStyling}>
            {heading}
          </Link>
        </Menu.Item>
      );
    });
  }

  render() {
    return (
      <Router>
        <div>
          <Menu pointing style={menuStyling}>
            {this.generateMenuItems()}
          </Menu>
          <Switch>
            {/* / */}
            <Route exact={true} path="/">
              <Home />
            </Route>

            {/* /home */}
            <Route path="/home">
              <Home />
            </Route>

            {/* /quick-start */}
            <Route path="/quick-start">
              <QuickStart />
            </Route>

            {/* /documentation */}
            <Route path="/documentation">
              <Docs />
            </Route>

            {/* /meet-the-team */}
            <Route path="/meet-the-team">
              <About />
            </Route>
          </Switch>

          {/* Footer */}
          <footer>
            <p>We are kafkaQ</p>
            <div>
              Contact us:
              <a href="https://www.gmail.com">kafkaQ21@gmail.com </a>
              <br />
              Twitter:
              <a href="https://www.twitter.com">#kafkaQ</a>
            </div>
            Join us:
            <a href="https://codesmith.io/">Career</a>
          </footer>
        </div>
      </Router>
    );
  }
}

export default App;
