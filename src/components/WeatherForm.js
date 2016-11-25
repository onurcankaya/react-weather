import React, { Component } from 'react';

export default class About extends Component {
  onFormSubmit(e) {
    e.preventDefault();

    let location = this.refs.location.value;

    if (location.length > 0) {
      this.refs.location.value = '';
      this.props.onSearch(location);
    }
  }

  render() {
    return (
      <div>
        <form onSubmit={this.onFormSubmit.bind(this)}>
          <input type='text' placeholder='Search weather by city' ref='location' />
          <button className="button expanded hollow">Get Weather</button>
        </form>
      </div>
    );
  }
}
