function createRobot(coordinates, direction) {
  let [x, y] = coordinates;
  let orientation = direction;

  const advance = () => {
    switch (orientation) {
      case 'NORTH':
        if (y < 10) y++;
        else throw new Error('Fuera de los limites');
        break;
      case 'EAST':
        if (x < 10) x++;
        else throw new Error('Fuera de los limites');
        break;
      case 'SOUTH':
        if (y > 0) y--;
        else throw new Error('Fuera de los limites');
        break;
      case 'WEST':
        if (x > 0) x--;
        else throw new Error('Fuera de los limites');
        break;
    }
  };

  const turnRight = () => {
    switch (orientation) {
      case 'NORTH':
        orientation = 'EAST';
        break;
      case 'EAST':
        orientation = 'SOUTH';
        break;
      case 'SOUTH':
        orientation = 'WEST';
        break;
      case 'WEST':
        orientation = 'NORTH';
        break;
    }
  };

  const turnLeft = () => {
    switch (orientation) {
      case 'NORTH':
        orientation = 'WEST';
        break;
      case 'EAST':
        orientation = 'NORTH';
        break;
      case 'SOUTH':
        orientation = 'EAST';
        break;
      case 'WEST':
        orientation = 'SOUTH';
        break;
    }
  };

  const instructions = (stringInstructions) => {
    for (let i = 0; i < stringInstructions.length; i++) {
      const instruction = stringInstructions[i];
      switch (instruction) {
        case 'A':
          advance();
          break;
        case 'R':
          turnRight();
          break;
        case 'L':
          turnLeft();
          break;
        default:
          throw new Error('Instruccion invalida');
      }
    }
  };

  const getPosition = () => {
    return { coordinates: [x, y], orientation };
  };

  return {
    advance,
    turnRight,
    turnLeft,
    instructions,
    getPosition,
  };
}

module.exports = {createRobot};

 console.log(createRobot([2, 3], 'NORTH').getPosition());
