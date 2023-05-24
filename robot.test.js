const { createRobot } = require('./robot.js');

describe('Robot', () => {
  test('Avanza en la direccion correcta', () => {
    // Arrange
    const robot = createRobot([2, 3], 'NORTH');
    const expectedPosition = { coordinates: [2, 4], orientation: 'NORTH' };

    // Act
    robot.advance();
    const currentPosition = robot.getPosition();

    // Assert
    expect(currentPosition).toEqual(expectedPosition);
  });

  test('Gira a la derecha correctamente', () => {
    // Arrange
    const robot = createRobot([2, 3], 'NORTH');
    const expectedPosition = { coordinates: [2, 3], orientation: 'EAST' };

    // Act
    robot.turnRight();
    const currentPosition = robot.getPosition();

    // Assert
    expect(currentPosition).toEqual(expectedPosition);
  });

  test('Gira a la izquierda correctamente', () => {
    // Arrange
    const robot = createRobot([2, 3], 'NORTH');
    const expectedPosition = { coordinates: [2, 3], orientation: 'WEST' };

    // Act
    robot.turnLeft();
    const currentPosition = robot.getPosition();

    // Assert
    expect(currentPosition).toEqual(expectedPosition);
  });

  test('Ejecutar las instrucciones correctamente', () => {
    // Arrange
    const robot = createRobot([7, 3], 'NORTH');
    const expectedPosition = { coordinates: [9, 4], orientation: 'WEST' };

    // Act
    robot.instructions('RAALAL');
    const currentPosition = robot.getPosition();

    // Assert
    expect(currentPosition).toEqual(expectedPosition);
  });

  test('Lanzar un error cuando se sale de los limites', () => {
    // Arrange
    const robot = createRobot([10, 10], 'NORTH');

    // Act & Assert
    expect(() => {
      robot.advance();
    }).toThrow('Fuera de los limites');
  });
});
	