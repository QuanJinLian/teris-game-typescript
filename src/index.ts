import { Square } from "./core/Square";
import { SquarePageViewer } from "./core/viewer/SquarePageViewer";
import $ from "jquery";
import { SquareGroups } from "./core/SquareGroups";
import { createTetris, LineShape } from "./core/tetris";

const sqG = createTetris({ x: 3, y: 3 });
sqG.squares.forEach((sq) => {
  sq.viewer = new SquarePageViewer(sq, $("#root"));
});

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
