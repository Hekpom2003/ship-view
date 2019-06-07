import React from 'react';
import ShipFloor from './ShipFloor'

class ShipInfo extends React.Component {
  render() {

    const { name, floors, currentTown } = this.props;

    // console.log('ShipInfo',currentTown);

    return (
      <div className={'ship'}>
        <div className="ship-title">{name}</div>
        {
          floors.map( (item,floorKey) => {
            const props = {
              key:item.id,
              ...item,
              floorKey,

              currentTown:currentTown,
              _onSelectRoom: (value=>this.props._onSelectRoom(value))
            };
            return <ShipFloor {...props}/>
          })
        }
      </div>
    );
  }
}

export default ShipInfo;