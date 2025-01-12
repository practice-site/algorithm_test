export const calcNecessaryBoatCount = (arg: number[]): number => {
  if (arg.length === 0) {
    return 0;
  }
  if (arg.find((w) => w > 100)) {
    throw new Error("");
  }
  let boatCount = arg.length;
  let weights = arg;
  let first = 0;
  let second = first + 1;

  while (first < weights.length) {
    console.log(`first:${first}`);
    while (second < weights.length) {
      console.log(`second:${second}`);
      if (weights[first] + weights[second] <= 100) {
        boatCount--;
        weights = weights.filter((_, i) => i === first || i === second);
        second = first + 1;
        break;
      }
      second++;
    }
    first++;
    second = first + 1;
  }

  return boatCount;
};
