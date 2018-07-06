import { AbstractListResource } from "../../resources/abstract-list.resource";
import { AirlineResource } from "./airline.resource";

export class AirlineListResource extends AbstractListResource {
  public content: AirlineResource[];
}
