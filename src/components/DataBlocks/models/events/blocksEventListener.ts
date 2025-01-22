import { BlocksEventLookup, BlocksEvents } from "./blocksEventLookup";
import { BaseEvent, Event } from "./models";

export type BlocksEventListener<E extends BlocksEvents> = (
  params: BlocksEventLookup[E] extends { params: any }
    ? BlocksEventLookup[E]["params"]
    : undefined,
  event: BlocksEventLookup[E] extends { event: BaseEvent }
    ? Event<BlocksEventLookup[E]["event"]>
    : Event<{}>,
) => void;
