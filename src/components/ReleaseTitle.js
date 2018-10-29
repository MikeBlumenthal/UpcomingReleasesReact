import React, {Component} from 'react';

class ReleaseTitle extends Component{

  render(){


    return (
      <div className="release-title">
        <li><a href={this.props.url}>{this.props.name}</a></li>
      </div>
    )

  }

}

export default ReleaseTitle;
