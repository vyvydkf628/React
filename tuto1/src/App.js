import React from 'react';

import Board from './components/board'
import SeasonDisplay from './SeasonDisplay'
import Spinner from './components/Spinner'
class App extends React.Component {

  state = {
    lat: null, errorMessage:''
  };

  componentDidMount(){
    window.navigator.geolocation.getCurrentPosition(
      position => this.setState({ lat : position.coords.latitude}),
      err => this.setState({errorMessage : err.message})
    )
  }
  renderContent(){
    if (this.state.errorMessage && !this.state.lat){
      return <div> ERRoR : {this.state.errorMessage}</div>
    }
    
    if (!this.state.errorMessage && this.state.lat){
      return <SeasonDisplay lat={this.state.lat} />
    }
    return <Spinner message= "Please accept location request" />   
    
  }
  render(){
      return (
        <div>
          {this.renderContent()}
        </div>
      ) 
  }
}

export default App;
