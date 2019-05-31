import React from 'react';
import ShipRoom from './ShipRoom/';

class ShipFloor extends React.Component{
  render() {

    console.log('ShipFloor',this.props);

    const image = require.context('../../public/img', true);

    const {plane} = this.props;

    const style = {
      backgroundImage: 'url("'+image(plane.backgroundImage)+'")',
      width: plane.width,
      height: plane.height,
    };

    console.log(style);

    return (
      <div className={'ship-floor'}>
        <div className="ship-floor__plane" style={style}>
          {
            this.props.rooms.map(item=><ShipRoom key={item.id} {...item}/>)
          }
        </div>
        <div className="ship-floor__title">{this.props.name}</div>
      </div>
    );
  }
}

export default ShipFloor;