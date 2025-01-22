import * as React from "react";

export type BaseEvent =
  | React.SyntheticEvent<HTMLElement>
  | DocumentEventMap[keyof DocumentEventMap]
  | {};

export type Event<E extends BaseEvent = BaseEvent> = E;
