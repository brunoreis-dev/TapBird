import {
  _decorator,
  CCInteger,
  Component,
  input,
  Node,
  Input,
  EventKeyboard,
  KeyCode,
  director,
} from "cc";
import { Ground } from "./ground";
import { Results } from "./Results";
const { ccclass, property } = _decorator;

@ccclass("gameCtrl")
export class GameCtrl extends Component {
  @property({
    type: Ground,
    tooltip: "this is ground",
  })
  public ground: Ground;

  @property({
    type: Results,
    tooltip: "results go here",
  })
  public result: Results;

  @property({
    type: CCInteger,
  })
  public speed: number = 300;

  @property({
    type: CCInteger,
  })
  public pipeSpeed: number = 200;

  onLoad() {
    this.initListener();
    this.result.resetScore();
    director.pause();
  }

  initListener() {
    input.on(Input.EventType.KEY_DOWN, this.onKeyDown, this);
  }

  // Testing method DELETE me in final version
  onKeyDown(event: EventKeyboard) {
    switch (event.keyCode) {
      case KeyCode.KEY_A:
        this.gameOver();
        break;
      case KeyCode.KEY_P:
        this.result.addScore();
        break;
      case KeyCode.KEY_Q:
        this.resetGame();
    }
  }

  startGame() {
    this.result.hideResults();
    director.resume();
  }

  gameOver() {
    this.result.showResults();
    director.pause();
  }

  resetGame() {
    this.result.resetScore();
    this.startGame();
  }
}
