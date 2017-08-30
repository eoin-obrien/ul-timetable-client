import {Injectable} from '@angular/core';
import {Apollo} from 'apollo-angular';
import gql from 'graphql-tag';
import {ITimetable, Timetable} from '../../types/timetable';

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

  getTimetable(studentId: string, weekId: string): Promise<Timetable> {
    let timetable = null;
    return this.apollo.query<QueryResponse>({
      query: TimetableQuery,
      variables: {
        studentId,
        weekId,
      }
    }).forEach(({data}) => {
      if (data.timetable) {
        timetable = new Timetable(data.timetable);
      }
    }).then(() => {
      return timetable;
    });
  }
}
