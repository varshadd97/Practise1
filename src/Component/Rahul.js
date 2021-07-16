import React, { Component } from 'react';
import Army from "./withArms";

export class Rahul extends Component {
    
    render() {
        return (
           <>
           <h3 onMouseOver={this.props.handlehocGunShots}> Rahul {this.props.hocGunName}
            gunShots{this.props.hocGunShots}</h3>
           
           </>
        )
    }
}

export default Army(Rahul);
