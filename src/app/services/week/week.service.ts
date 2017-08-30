import {Injectable} from '@angular/core';
import {Apollo} from 'apollo-angular';
import gql from 'graphql-tag';
import {IWeek, Week} from '../../types/week';

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

  getWeeks(): Promise<Week[]> {
    let weeks = null;
    return this.apollo.query<QueryResponse>({
      query: WeeksQuery,
    }).forEach(({data}) => {
      weeks = data.weeks.map(week => new Week(week));
    }).then(() => {
      return weeks;
    });
  }
}
