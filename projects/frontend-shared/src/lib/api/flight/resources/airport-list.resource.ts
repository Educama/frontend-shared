import { AbstractListResource } from "../../resources/abstract-list.resource";
import { AirportResource } from "./airport.resource";

export class AirportListResource extends AbstractListResource {
  public content: AirportResource[];
}
