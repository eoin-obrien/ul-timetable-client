import {Injectable} from '@angular/core';
import {Apollo, ApolloQueryObservable} from 'apollo-angular';
import gql from 'graphql-tag';
import {ITimetable} from './types/timetable';

const TimetableQuery = gql`
  query TimetableQuery($studentId: ID!, $weekId: String!) {
    timetable(_id: $studentId, week: $weekId) {
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
}

@Injectable()
export class TimetableService {
  constructor(private apollo: Apollo) {
  }

  getTimetable(studentId: string, weekId: string): ApolloQueryObservable<QueryResponse> {
    return this.apollo.watchQuery<QueryResponse>({
      query: TimetableQuery,
      variables: {
        studentId,
        weekId,
      }
    });
  }
}
