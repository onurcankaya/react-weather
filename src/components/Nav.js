import React, { Component } from 'react';
import { Link, IndexLink, browserHistory } from 'react-router';

export default class Nav extends Component {
  onSearch(e) {
    e.preventDefault();

    let location = this.refs.location.value;
    let encodedLocation = encodeURIComponent(location);

    if (location.length > 0) {
      this.refs.location.value = '';
      browserHistory.push('/?location=' + encodedLocation);
    }
  }

  render() {
    return (
      <div className="top-bar">
        <div className="top-bar-left">
          <ul className="menu">
            <li className="menu-text">
              React Weather App
            </li>
            <li>
              <IndexLink to='/' activeClassName='active' activeStyle={{ fontWeight: 'bold' }}>Get Weather</IndexLink>
            </li>
            <li>
              <Link to='about' activeClassName='active' activeStyle={{ fontWeight: 'bold' }}>About</Link>
            </li>
            <li>
              <Link to='examples' activeClassName='active' activeStyle={{ fontWeight: 'bold' }}>Examples</Link>
            </li>
          </ul>
        </div>
        <div className="top-bar-right">
          <form onSubmit={this.onSearch.bind(this)}>
            <ul className="menu">
              <li>
                <input type="search" placeholder="Search weather by city" ref="location" />
              </li>
              <li>
                <input type="submit" className="button" value="Get Weather" />
              </li>
            </ul>
          </form>
        </div>
      </div>
    );
  }
}
