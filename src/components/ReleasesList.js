import React, {Component} from 'react';
import ReleaseTitle from './ReleaseTitle.js';

class ReleasesList extends Component{

  render(){
    return (
      <div>
        <ol>
      <ReleaseTitle />
      <ReleaseTitle />
      <ReleaseTitle />
      <ReleaseTitle />
      <ReleaseTitle />
      </ol>
    </div>
    )

  }

}

export default ReleasesList;
