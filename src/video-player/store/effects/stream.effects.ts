import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { Stream } from '../models/stream';
import * as StreamActions from '../actions/stream.actions';

const streams: Stream[] = [ // just pretending that we are loading data from an API in this effect.
  {
    src:'https://youtu.be/uv85oswcER4',
    title:'youtube'
  },
  {
    src: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    title: "Big Buck Bunny"
  },
  {
    src: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
    title: "Elephant Dream"
  },
  { 
    src: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    title: "For Bigger Blazes"
  },
  {
    src: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
    title: "For Bigger Escape"
  },
  {
    src: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
    title: "For Bigger Fun"
  },
  {
    src: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
    title: "For Bigger Joyrides"
  },
  { 
    src: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4",
    title: "For Bigger Meltdowns"
  },
  {
    src: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4",
    title: "Sintel"
  },
  {
    src: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4",
    title: "Subaru Outback On Street And Dirt"
  },
  {
    src: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4",
    title: "Tears of Steel"
  },
  {
    src: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/VolkswagenGTIReview.mp4",
    title: "Volkswagen GTI Review"
  },
  { 
    src: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WeAreGoingOnBullrun.mp4",
    title: "We Are Going On Bullrun"
  },
  {
    src: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WhatCarCanYouGetForAGrand.mp4",
    title: "What care can you get for a grand?"
  }
];


@Injectable()
export class StreamEffects {
  @Effect()
  fetch$: Observable<Action> = this.actions$.pipe(
    ofType(StreamActions.FETCH_STREAMS),
    map(action => ({ type: StreamActions.SET_STREAMS, payload: streams }))
  );

  constructor(private actions$: Actions) { }
}
