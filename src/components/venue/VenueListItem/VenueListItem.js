import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import {Link} from 'react-router-dom'

export const VenueListItem = (props) => {
  let venue = props.venue.attributes
  let orgId = props.organizationId
  let path = `/organizations/${orgId}/venues/${props.venue.id}`
  return (
    <Link to={path} class="collection-item avatar" onClick={ () => { props.addBreadCrumb({path: path, name: venue.name}) } }>
      <img src="https://cdn2.iconfinder.com/data/icons/building-vol-2/512/restaurant-512.png" alt="" class="circle"/>
      <span class="title">{venue.name}</span>
      <p>{venue.address} <br/>
        clients: {venue.client_count} <br/>
        time zone: {venue.time_zone}
      </p>
      <a href="#!" class="secondary-content"><i class="material-icons">grade</i></a>
    </Link>
  );
}

const mapDispatchToProps = dispatch => {
  return {
    addBreadCrumb: (data) => dispatch({
      type: 'addBreadCrumb',
      value: data
    }), 
  }
}

const mapStateToProps = state => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(VenueListItem);
