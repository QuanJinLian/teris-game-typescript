import { Square } from "./core/Square";
import { SquarePageViewer } from "./core/viewer/SquarePageViewer";
import $ from "jquery";

const sq = new Square();
sq.viewer = new SquarePageViewer(sq, $("#root"));

sq.color = "red";
sq.point = {
  x: 3,
  y: 0,
};

$("#btnDown").click(() => {
  sq.point = {
    x: sq.point.x,
    y: sq.point.y + 1,
  };
});
$("#btnRemove").click(() => {
  sq.viewer?.remove();
});
$("#btnAdd").click(() => {
  sq.viewer = new SquarePageViewer(sq, $("#root"));
});
