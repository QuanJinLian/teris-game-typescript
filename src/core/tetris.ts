import { SquareGroups } from "./SquareGroups";
import { Point, Shape } from "./types";
import { getRandom } from "./util";

export const TShape: Shape = [
  { x: -1, y: 0 },
  { x: 0, y: 0 },
  { x: 0, y: -1 },
  { x: 1, y: 0 },
];

export const LShape: Shape = [
  { x: -2, y: 0 },
  { x: -1, y: 0 },
  { x: 0, y: 0 },
  { x: 0, y: -1 },
];

export const LMirrorShape: Shape = [
  { x: 2, y: 0 },
  { x: 1, y: 0 },
  { x: 0, y: 0 },
  { x: 0, y: -1 },
];

export const SShape: Shape = [
  { x: 1, y: 0 },
  { x: 0, y: 0 },
  { x: 0, y: 1 },
  { x: -1, y: 1 },
];

export const SMirrorShape: Shape = [
  { x: 0, y: 0 },
  { x: -1, y: 0 },
  { x: 0, y: 1 },
  { x: 1, y: 1 },
];

export const SquareShape: Shape = [
  { x: 0, y: 0 },
  { x: 1, y: 0 },
  { x: 0, y: 1 },
  { x: 1, y: 1 },
];

export const LineShape: Shape = [
  { x: -1, y: 0 },
  { x: 0, y: 0 },
  { x: 1, y: 0 },
  { x: 2, y: 0 },
];

export const shapes = [
  LShape,
  SShape,
  TShape,
  LMirrorShape,
  SMirrorShape,
  SquareShape,
  LineShape,
];

export const colors = ["red", "green", "blue", "#fff", "orange"];

/**
 * 랜덤으로 블록 생성 (shape 랜덤, color 랜덤)
 * @param centerPoint
 * @returns SquareGroups
 *
 */
export const createTetris = (centerPoint: Point) => {
  let idx = getRandom(0, shapes.length);
  const shape = shapes[idx];
  idx = getRandom(0, colors.length);
  const color = colors[idx];
  return new SquareGroups(shape, centerPoint, color);
};
