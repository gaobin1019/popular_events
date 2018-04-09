import React from 'react';

export const Event = ({eventInfo}) => {
  console.log(eventInfo);
  return (
    <div>
      <p>{`Name: ${eventInfo.event.name}`}</p>
      <p>{`Type: ${eventInfo.event.event_type}`}</p>
      <p>{`League: ${eventInfo.event.parent_name}`}</p>
      <p>{`Start Time: ${eventInfo.event.start_datetime}`}</p>
    </div>
  );
};