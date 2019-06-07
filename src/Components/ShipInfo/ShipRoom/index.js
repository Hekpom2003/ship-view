import React from 'react';
import './style.scss';

class Index extends React.Component {
  render() {

    // console.log('ShipRoom', this.props);

    const { isServiceSpace, currentTown, townSell, path } = this.props;

    const fill = (isServiceSpace)
      ? 'transparent'
      : (currentTown === townSell) ? 'green' : '#ddd';

    const style = {
      fill,
      stroke: "#ddd",
      strokeWidth: "1",
    };

    const translate = path.base.x + ' ' + path.base.y;

    let roomPath = 'M0,0 ';
    roomPath += 'H' + path.delta.x +' ';
    roomPath += 'V' + path.delta.y +' ';
    roomPath += 'H0 L0,0';

    const textPosition = {x: path.delta.x/2,y:path.delta.y/1};

    return (
      <g transform={'translate(' + translate + ')'} onClick={() => this.props._onSelectRoom({roomId:this.props.id,floorKey:this.props.floorKey})}>
        <path d={roomPath} {...style}/>
        <text x={textPosition.x} y={textPosition.y/2} alignmentBaseline="middle" textAnchor="middle">{this.props.id}</text>
      </g>
    );
  }
}

export default Index;