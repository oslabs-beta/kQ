import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Sidebar extends Component {
  convertPageToPath(page: string): string {
    // Grab the current heading, convert it to lower case, replace all spaces with "-",
    // and add a slash to the beginning
    return '/' + page.toLowerCase().replace(/ /g, '-');
  }

  render(): JSX.Element {
    const pages = [
      'Dashboard',
      'Documentation',
      'About kafkaQ',
      'Our Team',
      // 'Consumer',
      // 'Producer',
      // 'Coordinator',
      // 'Admin',
      // 'Broker',
      // 'Cluster',
    ];

    const pageElements = pages.map((page) => {
      let pageClass = page === 'Dashboard' ? 'dboard' : 'link';

      return (
        <button
          className="nav-item"
          id={page === 'Dashboard' ? 'dboard-btn' : ''}
        >
          <Link className={pageClass} to={this.convertPageToPath(page)}>
            {page}
          </Link>
        </button>
      );
    });

    return (
      <div className="sidebar">
        {pageElements}
        <div id="block"></div>
      </div>
    );
  }
}

export default Sidebar;
