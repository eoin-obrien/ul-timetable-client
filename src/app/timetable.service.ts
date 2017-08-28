import {Injectable} from '@angular/core';
import {Apollo, ApolloQueryObservable} from 'apollo-angular';
import gql from 'graphql-tag';
import {ITimetable} from './types/timetable';
import {IWeek} from './types/week';

const TimetableQuery = gql`
  query TimetableQuery($studentId: ID!) {
    timetable(_id: $studentId) {
      _id
      monday {
        ...lessonFields
      }
      tuesday {
        ...lessonFields
      }
      wednesday {
        ...lessonFields
      }
      thursday {
        ...lessonFields
      }
      friday {
        ...lessonFields
      }
      saturday {
        ...lessonFields
      }
    }
    weeks {
      _id
      name
      date
    }
  }

  fragment lessonFields on Lesson {
    startTime
    endTime
    module {
      _id
      name
    }
    group
    type
    rooms {
      _id
      building
      buildingCode
      floor
      number
    }
    weeks {
      _id
    }
  }
`;

interface QueryResponse {
  timetable: ITimetable;
  weeks: IWeek[];
  loading: boolean;
}

@Injectable()
export class TimetableService {
  constructor(private apollo: Apollo) {
  }

  getTimetable(id: string): ApolloQueryObservable<QueryResponse> {
    return this.apollo.watchQuery<QueryResponse>({
      query: TimetableQuery,
      variables: {
        studentId: id,
      }
    });
  }
}
