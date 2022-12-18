/**
 * min, max 숫자 범위 내의 랜덤 숫자 GET, max 값 포함하지 않음
 * @param min
 * @param max
 * @returns 랜덤수
 */
export const getRandom = (min: number, max: number) => {
  const dec = max - min;
  return Math.floor(Math.random() * dec + min);
};
