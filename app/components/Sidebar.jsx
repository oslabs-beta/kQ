import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Sidebar extends Component {
  convertPageToPath(page) {
    // Grab the current heading, convert it to lower case, replace all spaces with "-",
    // and add a slash to the beginning
    return '/' + page.toLowerCase().replace(/ /g, '-');
  }

  render() {
    const pages = ['Dashboard', 'Documentation', 'About kafkaQ', 'Our Team'];

    const pageElements = pages.map((page) => (
      <button>
        <Link to={this.convertPageToPath(page)}>{page}</Link>
      </button>
    ));

    return <div className="sidebar">{pageElements}</div>;
  }
}

export default Sidebar;
