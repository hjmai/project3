import React from "react";
import "./EventsListItems.css";
import moment from 'moment';

export const EventsListItems = props => (
  <li id="eventslistitems" className="list-group-item">
    <a data-toggle="collapse" data-target={`#collapse${props.href}`} aria-expanded="true" aria-controls={`collapse${props.href}`} id="eventsListItemsTitle"><h3 className="eventsListItemsTitle">{props.title}</h3></a>
    <div id={`collapse${props.href}`} className="collapse" data-parent="#accordionEvents">
      <div className="card-body">
        <p><div className="eventsListItemsSubtitle">Description:</div> {props.description}</p>
        <div><div className="eventsListItemsSubtitle">Starting Date:</div> {moment(props.date).format("MMM Do, YYYY")} {moment(props.eventTime, 'HH:mm').format('hh:mm a')}</div>

        <div id="goToEventBtn">
          <button className="btn"><a href={`/eventdetail/${props.href}`}>Go to Event</a></button>
        </div>
      </div>
    </div>
  </li>
);
