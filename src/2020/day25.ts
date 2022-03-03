export const example = (input: number, subjectNum: number) => {
  let value = 1;
  let loopsize = 0
  for (let i = 0; i < 8; i++) {
    value = value * subjectNum;
    value = value % 20201227;
  }
  console.log(value);
  return value
};
