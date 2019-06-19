import { Player } from '../src/player';

it('return name from Player', () => {
  expect(new Player("chris").name).toBe("chris");
});