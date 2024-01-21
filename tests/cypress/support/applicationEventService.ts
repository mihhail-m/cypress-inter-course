import {ApolloClient, NormalizedCacheObject} from '@apollo/client';

class ApplicationEventsService {
  private readonly client: ApolloClient<NormalizedCacheObject>;

  constructor(client: ApolloClient<NormalizedCacheObject>) {
    this.client = client;
  }

  // TODO
  addApplicationEvent(eventName: string) {
    return 'eventId';
  }
}

export default ApplicationEventsService;
