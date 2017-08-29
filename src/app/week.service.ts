import {Injectable} from '@angular/core';
import {Apollo, ApolloQueryObservable} from 'apollo-angular';
import gql from 'graphql-tag';
import {IWeek} from './types/week';

const WeeksQuery = gql`
  query WeeksQuery {
    weeks {
      _id
      name
      date
    }
  }
`;

interface QueryResponse {
  weeks: IWeek[];
}

@Injectable()
export class WeekService {
  constructor(private apollo: Apollo) {
  }

  getWeeks(): ApolloQueryObservable<QueryResponse> {
    return this.apollo.watchQuery<QueryResponse>({
      query: WeeksQuery,
    });
  }
}
