import React from 'react';

class RoomInfo extends React.Component {
  render() {
    const {roomId,floorKey} = this.props;

    if (roomId) {
      return (
        <div className={'room-info'}>
          info about room №{roomId} on floorKey:{floorKey}
        </div>
      );
    } else {
      return <div></div>;
    }
  }
}

export default RoomInfo;