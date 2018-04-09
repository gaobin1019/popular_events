import React from 'react';
import {Link} from 'react-router-dom';

export const EventList = ({events}) => {
  return (
    <ul>
      {events.map(e => (
        <li key={e.id}>
          <Link to={`/${e.id}`}>{e.name}</Link>
        </li>
      ))}
    </ul>
  );
};