import { Injectable } from "@angular/core";
import { PostRobot } from "./post-robot.model";

declare var require: any;

const POST_ROBOT_INSTANCE: any = require("post-robot");

@Injectable()
export class PostRobotService {
  getInstance(): PostRobot {
    return POST_ROBOT_INSTANCE;
  }
}
