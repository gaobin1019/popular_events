import React from 'react';
import {Event} from '../representationalComponents/Event';
import {Link} from 'react-router-dom';
import {CORS_URL, EVENT_ID_URL} from '../const';
import $ from 'jquery';

export class EventContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = null;
  }

  componentDidMount() {
    $.get({
      url: CORS_URL + EVENT_ID_URL + this.props.match.params.playerId
    }).then((result)=> {
      console.log(result);
      this.setState({info: result});
    });
  }

  render() {
    return this.state ? (
      <div>
        <Event eventInfo={this.state.info} />
        <Link to='/'>Back</Link>
      </div>
    ) : null;
  }
}