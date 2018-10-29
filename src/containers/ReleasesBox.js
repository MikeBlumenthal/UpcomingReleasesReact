import React, {Component} from 'react';
import ReleasesList from '../components/ReleasesList.js';
import MoreReleasesButton from '../components/MoreReleasesButton.js';

class ReleasesBox extends Component {

  constructor(props){
    super(props)
  }

  render(){
    return (
      <div>
        <h1>Upcoming Film Releases For UK</h1>
        <ReleasesList />
        <MoreReleasesButton />
      </div>
    )
  }
}

export default ReleasesBox;
