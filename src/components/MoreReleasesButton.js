import React, {Component} from 'react';

class MoreReleasesButton extends Component{

  render(){
    return (
      <div className="button">
        <a href={this.props.link}>
          <h2>View more upcoming releases >></h2>
        </a>
      </div>
    )

  }

}

export default MoreReleasesButton;
