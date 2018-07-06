import { CustomerResource } from "./customer.resource";
import { AbstractListResource } from "../../resources/abstract-list.resource";

export class CustomerListResource extends AbstractListResource {
  public customers: CustomerResource[];
}
