import * as StreamActions from '../actions/stream.actions';
import { Stream } from '../models/stream';

export function selectedStreamReducer (state: Stream, action: StreamActions.Actions) {
  switch (action.type) {
    case StreamActions.SET_SELECTED_STREAM:
      return { ...state, ...action.payload };
    default:
      return state;
  }
}

export function fetchStreamsReducer (state: string = '', action: StreamActions.Actions) {
  switch (action.type) {
    case StreamActions.FETCH_STREAMS:
      return 'STREAMS FETCHED'
    default:
      return state;
  }
}

export function streamListReducer (state: Stream[] = [], action: StreamActions.Actions) {
  switch (action.type) {
    case StreamActions.SET_STREAMS:
      return [...state, ...action.payload]
    default:
      return state;
  }
};
