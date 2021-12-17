import { ArrayFilterPipe } from './array-filter.pipe';

describe('ArrayFilterPipe', () => {
  let pipe!: ArrayFilterPipe|null;

  beforeEach(() => {
    pipe = new ArrayFilterPipe();
  });

  it('create an instance', () => {
    const pipe = new ArrayFilterPipe();
    expect(pipe).toBeTruthy();
  });

  it('should return items', () => {
    expect(pipe?.transform([1,2,3],null)).toEqual([1,2,3])
  });

  it('should return items > 1', () => {
    expect(pipe?.transform([1,2,3], (item:number) => item > 1)).toEqual([2,3])
  });

  it('should return items < 3', () => {
    expect(pipe?.transform([1,2,3], (item:number) => item < 3)).toEqual([1,2])
  });

  it('should return items = 2', () => {
    expect(pipe?.transform([1,2,2,3], (item:number) => item == 2)).toEqual([2,2])
  });

});

