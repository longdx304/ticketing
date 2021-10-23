import {
  ExpirationCompleteEvent,
  Publisher,
  Subjects,
} from '@ldxtickets/common';

export class ExpirationCompletePublisher extends Publisher<ExpirationCompleteEvent> {
  readonly subject = Subjects.ExpirationComplete;
}
