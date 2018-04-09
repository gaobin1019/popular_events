import React from 'react';
import {EventList} from '../representationalComponents/EventList';
import $ from 'jquery';
import {POPULAR_EVENTS_URL, CORS_URL} from '../const';

export class EventListsContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      events: []
    };
  }

  componentDidMount() {
    $.get({
      url: CORS_URL + POPULAR_EVENTS_URL
    }).then((result)=> {
      this.setState({events: result.results});
    });
  }

  render() {
    return this.state ? <EventList events={this.state.events}/> : null;
  }
}