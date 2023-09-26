import { CapitalPipe } from './capital.pipe';

describe('CapitalPipe', () => {
  it('create an instance', () => {
    const pipe = new CapitalPipe();
    expect(pipe).toBeTruthy();
  });
});
