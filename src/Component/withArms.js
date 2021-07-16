import React, {Component }from 'react';

const Army = Men => {
    class NewMen extends Component {
        state = {
            gunShots: 0
       }
       handleGunshots = () => {
           this.setState({gunShots: this.state.gunShots + 1});
       }

        render(){
            return <Men hocGunName="Ak47" hocGunShots={this.state.gunShots}
                handlehocGunShots={this.handleGunshots}/>
        }
    }
    return NewMen;
}
export default Army;
