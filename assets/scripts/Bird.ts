import { _decorator, CCFloat, Component, Node, Vec3, Animation } from "cc";
const { ccclass, property } = _decorator;

@ccclass("Bird")
export class Bird extends Component {
  @property({
    type: CCFloat,
    tooltip: "how high can they fly",
  })
  public jumpHeight: number = 3.5;

  @property({
    type: CCFloat,
    tooltip: "how high can they fly",
  })
  public jumpDuration: number = 3.5;

  public birdAnimation: Animation;
  public birdLocation: Vec3;

  onLoad() {
    this.resetBird();
    this.birdAnimation = this.getComponent(Animation);
  }

  resetBird() {
    this.birdLocation = new Vec3(0, 0, 0);
    this.node.setPosition(this.birdLocation);
  }
}
