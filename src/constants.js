const CANVAS_SIZE = [400, 400]; //размер поля
const SNAKE_START = [
    [8, 7],
    [8, 8]
]; //старт змейки
const APPLE_START = [8, 3];
const SCALE = 40; //масштаб
const SPEED = 200; //скорость
//направления
const DIRECTIONS = {
    38: [0, -1], // вверх
    40: [0, 1], // вниз
    37: [-1, 0], // влево
    39: [1, 0] // вправо
};

export {
    CANVAS_SIZE,
    SNAKE_START,
    APPLE_START,
    SCALE,
    SPEED,
    DIRECTIONS
};