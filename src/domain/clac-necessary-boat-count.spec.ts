import { calcNecessaryBoatCount } from "./clac-necessary-boat-count";

describe("calcNecessaryBoatCount", () => {
  it("誰もいない場合に0を返す", () => {
    const input: number[] = [];
    const actual = calcNecessaryBoatCount(input);
    expect(actual).toEqual(0);
  });
  it("100kgがひとりいる場合は1を返す", () => {
    const input: number[] = [100];
    const actual = calcNecessaryBoatCount(input);
    expect(actual).toEqual(1);
  });
  it("100kgより大きい人がいる場合はエラーになる", () => {
    const input: number[] = [100, 101];
    expect(() => calcNecessaryBoatCount(input)).toThrow(Error);
  });
  it("2人の合計が100より大きい場合に2を返す", () => {
    const input: number[] = [50, 51];
    const actual = calcNecessaryBoatCount(input);
    expect(actual).toEqual(2);
  });
  it("2人の合計が100以下の場合は1を返す", () => {
    const input: number[] = [50, 50];
    const actual = calcNecessaryBoatCount(input);
    expect(actual).toEqual(1);
  });
  it("3人いて、100kg以下になるペアがある場合には2を返す", () => {
    const input = [50, 100, 50];
    const actual = calcNecessaryBoatCount(input);
    expect(actual).toEqual(2);
  });
  it("4人いて全員がペアを組める場合には2を返す", () => {
    const input = [50, 50, 50, 50];
    const actual = calcNecessaryBoatCount(input);
    expect(actual).toEqual(2);
  });
});
