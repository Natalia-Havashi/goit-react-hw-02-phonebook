import { nanoid } from 'nanoid';

const { Component } = require('react');

class Filter extends Component {
  render() {
    return (
      <div>
        <h4>Find contacts by me</h4>
        <input type="text" name="input" id={nanoid} />
      </div>
    );
  }
}

export default Filter;
