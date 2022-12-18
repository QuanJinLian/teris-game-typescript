import { Square } from "./core/Square";
import { SquarePageViewer } from "./core/viewer/SquarePageViewer";
import $ from "jquery";
import { SquareGroups } from "./core/SquareGroups";

const sqG = new SquareGroups(
  [
    { x: 0, y: -1 },
    { x: -1, y: 0 },
    { x: 0, y: 0 },
    { x: 0, y: 1 },
  ],
  { x: 3, y: 2 },
  "red"
);
sqG.squares.forEach((sq) => {
  sq.viewer = new SquarePageViewer(sq, $("#root"));
});

const sq = new Square();
sq.viewer = new SquarePageViewer(sq, $("#root"));
sq.color = "red";
sq.point = {
  x: 3,
  y: 0,
};
const sq2 = new Square();
sq2.viewer = new SquarePageViewer(sq2, $("#root"));
sq2.color = "red";
sq2.point = {
  x: 4,
  y: 0,
};

$("#btnDown").click(() => {
  // sqG
  sqG.centerPoint = {
    x: sqG.centerPoint.x,
    y: sqG.centerPoint.y + 1,
  };
});
$("#btnUp").click(() => {
  // sqG
  sqG.centerPoint = {
    x: sqG.centerPoint.x,
    y: sqG.centerPoint.y - 1,
  };
});

$("#btnLeft").click(() => {
  // sqG
  sqG.centerPoint = {
    x: sqG.centerPoint.x - 1,
    y: sqG.centerPoint.y,
  };
});

$("#btnRight").click(() => {
  // sqG
  sqG.centerPoint = {
    x: sqG.centerPoint.x + 1,
    y: sqG.centerPoint.y,
  };
});
