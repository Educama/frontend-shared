/*
 * Public API Surface of educama-frontend-shared
 */
export * from "./lib/frontend-shared.module";

export * from "./lib/api/customer/datastructures/address.datastructure";
export * from "./lib/api/customer/resources/customer.resource";
export * from "./lib/api/customer/resources/customer-list.resource";
export * from "./lib/api/customer/resources/customer-suggestions.resource";
export * from "./lib/api/customer/services/customer.service";
export * from "./lib/api/flight/resources/airline.resource";
export * from "./lib/api/flight/resources/airline-list.resource";
export * from "./lib/api/flight/resources/airline-suggestions.resource";
export * from "./lib/api/flight/resources/airport.resource";
export * from "./lib/api/flight/resources/airport-list.resource";
export * from "./lib/api/flight/resources/airport-suggestions.resource";
export * from "./lib/api/flight/services/airline.service";
export * from "./lib/api/flight/services/airport.service";
export * from "./lib/api/resources/abstract-list.resource";

export * from "./lib/enums/sort-order.enum";
export * from "./lib/enums/editor-mode.enum";

export * from "./lib/error/components/error.component";
export * from "./lib/error/store/error.actions";
export * from "./lib/error/store/error.initial-state";
export * from "./lib/error/store/error.reducer";
export * from "./lib/error/store/error.slice";

export * from "./lib/http/helper/http.helper";
export * from "./lib/http/services/rest-client.service";

export * from "./lib/translation/helper/browser-language-scanner.helper";
export * from "./lib/translation/helper/educama-missing-translation-handler.helper";
export * from "./lib/translation/pipes/i18n-date.pipe";
export * from "./lib/translation/pipes/time-ago.pipe";
export * from "./lib/translation/services/translation-notifier.service";

export * from "./lib/post-robot/post-robot.service";

export * from "./lib/window-ref/window-ref.service";
