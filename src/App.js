import React from 'react';
import './App.scss';
import ShipInfo from './Components/ShipInfo';
import RoomInfo from './Components/RoomInfo';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showRoom: false,
    };

  }

  render() {

    console.log(this.props.data);

    const { ship, currentTown } = this.props.data;

    // console.log('App', currentTown);

    return (
      <div className="rent-ship-app">

        <ShipInfo
          {...ship}
          currentTown={currentTown}
          _onSelectRoom={value => this.setState({ showRoom: value })}
        />

        <RoomInfo key={JSON.stringify(this.state.showRoom)} {...this.state.showRoom}/>

      </div>
    );
  }
}

export default App;
