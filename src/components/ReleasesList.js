import React, {Component} from 'react';
import ReleaseTitle from './ReleaseTitle.js';

class ReleasesList extends Component{

  render(){

    const titleNodes = this.props.data.map( title => {
      return (
        <ReleaseTitle key={title.id} name={title.name} url={title.url} />
      )
    })

    return (
        <ul className="release-list">
          {titleNodes}
        </ul>
    )

  }

}

export default ReleasesList;
