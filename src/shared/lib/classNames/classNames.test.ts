import { classNames } from './classNames';

describe('classNames', () => {
  test('with only first param', () => {
    expect(classNames('someClass')).toBe('someClass');
  });
  test('with more params', () => {
    const expected = 'someClass secondClass thirdClass';
    expect(classNames('someClass', {}, ['secondClass', 'thirdClass'])).toBe(expected);
  });
  test('with mods params', () => {
    const expected = 'someClass hovered scrollable secondClass thirdClass';
    expect(classNames('someClass', { hovered: true, scrollable: true }, ['secondClass', 'thirdClass'])).toBe(expected);
  });
  test('with mod param false', () => {
    const expected = 'someClass scrollable secondClass thirdClass';
    expect(classNames('someClass', { hovered: false, scrollable: true }, ['secondClass', 'thirdClass'])).toBe(expected);
  });
  test('with mod param undefined', () => {
    const expected = 'someClass secondClass thirdClass';
    // @ts-expect-error
    expect(classNames('someClass', { scrollable: undefined }, ['secondClass', 'thirdClass'])).toBe(expected);
  });
});
