import React from 'react';
import ShipRoom from './../ShipRoom/';
import './style.scss';

class ShipFloor extends React.Component {
  constructor(props) {
    super(props);

    this._onClickRoom = this._onClickRoom.bind(this);
  }

  _onClickRoom(id) {
    this.setState({ room: id });
  }

  render() {

    const image = require.context('../../../../public/img', true);

    const { plane } = this.props;

    const style = {
      backgroundImage: 'url("' + image(plane.backgroundImage) + '")',
      maxWidth: plane.width,
      maxHeight: plane.height,
    };

    const viewBox = '0 0 ' + plane.width + ' ' + plane.height;

    return (
      <div className={'ship-floor'}>
        <div className="ship-floor__plane" style={style}>
          <svg viewBox={viewBox} xmlns="http://www.w3.org/2000/svg">>
            {
              this.props.rooms.map(item => {

                const props = {
                  ...item,
                  key: item.id,
                  currentTown: this.props.currentTown,
                  floorKey: this.props.floorKey,

                  _onSelectRoom: value => this.props._onSelectRoom(value)
                };

                return <ShipRoom {...props} />
              })
            }
          </svg>
        </div>
        <div className="ship-floor__title">{this.props.name}</div>
      </div>
    );
  }
}

export default ShipFloor;