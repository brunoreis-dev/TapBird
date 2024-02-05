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
import { Bird } from "./Bird";
import { Pipes } from "./Pipes";
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
    type: Bird,
    tooltip: "results go here",
  })
  public bird: Bird;

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
    this.node.on(Node.EventType.TOUCH_START, () => {
      this.bird.fly();
    });
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
        this.bird.resetBird();
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

  passPipe() {
    this.result.addScore();
  }
}
