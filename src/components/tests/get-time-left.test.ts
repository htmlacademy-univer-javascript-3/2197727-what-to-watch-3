import { getTimeLeft } from "../../get-time-left";

describe('Get time left', () => {
  it('return time left in format "-MM:SS"', () => {
    const mockSecondsCount = 324;
    const expectedTimeLeft = '-05:24';
    const result = getTimeLeft(mockSecondsCount);

    expect(result).toEqual(expectedTimeLeft);
  });

  it('return time left in format "-HH:MM:SS"', () => {
    const mockSecondsCount = 2558;
    const expectedTimeLeft = '-00:42:38';
    const result = getTimeLeft(mockSecondsCount);

    expect(result).toEqual(expectedTimeLeft);
  });
});
