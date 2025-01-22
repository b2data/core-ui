import { BaseEvent } from "./models";
import { BlocksEventLookup, BlocksEvents } from "./blocksEventLookup";

type PublisherArgsNoEvent<E extends BlocksEvents, T extends { params: any }> = [
  E,
  T["params"],
];

type PublisherArgsRequiredEvent<
  E extends BlocksEvents,
  T extends { params: any; event: BaseEvent },
> = [E, T["params"], T["event"]];

type PublisherArgsOptionalEvent<
  E extends BlocksEvents,
  T extends { params: any; event: BaseEvent },
> = PublisherArgsRequiredEvent<E, T> | PublisherArgsNoEvent<E, T>;

type PublisherArgsEvent<
  E extends BlocksEvents,
  T extends { params: any; event: BaseEvent },
> = {} extends T["event"]
  ? PublisherArgsOptionalEvent<E, T>
  : PublisherArgsRequiredEvent<E, T>;

type PublisherArgsParams<E extends BlocksEvents, T extends { params: any }> = [
  E,
  T["params"],
];

type PublisherArgsNoParams<E extends BlocksEvents> = [E];

type BlocksEventPublisherArg<E extends BlocksEvents, T> = T extends {
  params: any;
  event: BaseEvent;
}
  ? PublisherArgsEvent<E, T>
  : T extends { params: any }
    ? PublisherArgsParams<E, T>
    : PublisherArgsNoParams<E>;

export type BlocksEventPublisher = <E extends BlocksEvents>(
  ...params: BlocksEventPublisherArg<E, BlocksEventLookup[E]>
) => void;
