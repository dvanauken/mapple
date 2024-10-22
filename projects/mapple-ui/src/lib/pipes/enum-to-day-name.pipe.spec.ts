import { EnumToDayNamePipe } from './enum-to-day-name.pipe';

describe('EnumToDayNamePipe', () => {
  it('create an instance', () => {
    const pipe = new EnumToDayNamePipe();
    expect(pipe).toBeTruthy();
  });
});
