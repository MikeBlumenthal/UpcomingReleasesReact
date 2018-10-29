import React, {Component} from 'react';

class MoreReleasesButton extends Component{

  render(){
    return (
      <div className="button">
        <a href={this.props.link}>
          <h3>View more upcoming releases >></h3>
        </a>
      </div>
    )

  }

}

export default MoreReleasesButton;
