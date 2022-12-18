import { IViewer, Point } from "./types";

/**
 *
 * 테트리스 오브젝트
 *
 */

export class Square {
  private _viewer?: IViewer;
  private _point: Point = {
    x: 0,
    y: 0,
  };
  private _color: string = "";

  public get viewer() {
    return this._viewer;
  }

  public set viewer(v) {
    this._viewer = v;
    if (v) {
      v.show();
    }
  }

  public get point() {
    return this._point;
  }

  public set point(val: Point) {
    this._point = val;

    if (this._viewer) {
      this._viewer.show();
    }
  }

  public get color() {
    return this._color;
  }

  public set color(c) {
    this._color = c;
  }

  public constructor() {}
}
