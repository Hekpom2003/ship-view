let dataFromServer = {
  ship: {
    id: 12,
    name: 'ShipName',
    floors: [],
  },
  currentTown: 'Нижний Новгород'
};

for (let i = 1; i <= 4; i++) {
  const rooms = generateRoomsGrid(i, 28, { x: 100, y: 11 });

  let floor = {
    id: i,
    name: 'FloorName' + i,
    plane: {
      backgroundImage: './nikulin.jpg',
      width: 1055,
      height: 160,
    },
    rooms
  };

  dataFromServer.ship.floors.push(floor);
}

function generateRoomsGrid(floorId, ceil, baseOffset) {

  let rooms = [];

  for (let i = 0; i < 29; i++) {
    for (let j = 0; j < 5; j++) {

      if (j === 2) continue;

      const baseX = ceil * i + baseOffset.x;
      const baseY = ceil * j + baseOffset.y;

      const path = {
        base: {x: baseX, y: baseY},
        delta: {x:ceil,y:ceil},
      };

      // let path = "M " + baseX + " " + baseY; //ставим точку
      // path += " H " + (baseX + ceil); //идем по горизонтали вправо
      // path += " V " + (baseY + ceil); //Идем по вертикали вниз"
      // path += " H " + baseX; //идем по горизонтали влево
      // path += " L " + baseX + " " + baseY; //возвращаемся в начало и замыкаем фигуру


      let room = {
        id: i.toString() + j.toString(),
        path, // svg путь каюты
        name: 'Каюта ' + i,
        nowRent: (Math.random() > 0.75), // Куплена ли каюта
        townSell: (Math.random() > 0.5) ? 'Нижний Новгород' : 'Казань', //Город посадки
        isServiceSpace: (Math.random() > 0.8), //Служебное помещение
        // availableToRent: ы,
      };

      rooms.push(room);
    }
  }

  return rooms;
}

export default dataFromServer;