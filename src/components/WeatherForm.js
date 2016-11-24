import React, { Component } from 'react';

export default class About extends Component {
  onFormSubmit(e) {
    e.preventDefault();

    let location = this.refs.location.value;

    if (location.length > 0 && typeof location === 'string') {
      this.refs.location.value = '';
      this.props.onSearch(location);
    }
  }

  render() {
    return (
      <div>
        <form onSubmit={this.onFormSubmit.bind(this)}>
          <input type='text' placeholder='Enter city name' ref='location' />
          <button>Get Weather</button>
        </form>
      </div>
    );
  }
}
