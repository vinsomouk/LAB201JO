// DashBoard.js
import React, { Component } from 'react';
import { getSlidesCount, updateSlidesCount } from '../database/Database';

export default class DashBoard extends Component {
  state = {
    count: 0,
  };

  componentDidMount() {
    getSlidesCount().then((count) => {
      this.setState({ count });
      localStorage.setItem('slidesCount', count);
    });
  }

  addSlide = () => {
    const { count } = this.state;
    updateSlidesCount(count + 1);
    this.setState({ count: count + 1 });
    localStorage.setItem('slidesCount', count + 1);
  };

  removeSlide = () => {
    const { count } = this.state;
    if (count > 1) {
      updateSlidesCount(count - 1);
      this.setState({ count: count - 1 });
      localStorage.setItem('slidesCount', count - 1);
    }
  };

  render() {
    const { count } = this.state;

    return (
      <div>
        <h2>Slide Manager</h2>
        <p>Current number of slides: {count}</p>
        {count > 0 && (
          <>
            <button onClick={this.addSlide}>Add Slide</button>
            <button onClick={this.removeSlide}>Remove Slide</button>
          </>
        )}
      </div>
    );
  }
}