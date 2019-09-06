import {Entity, model, property} from '@loopback/repository';

@model({settings: {}})
export class Wbg extends Entity {
  @property({
    type: 'number',
    id: true,
  })
  id?: number;

  @property({
    type: 'string',
    required: true,
  })
  name: string;

  @property({
    type: 'string',
    required: true,
  })
  producer: string;

  @property({
    type: 'string',
    required: true,
  })
  grapes: string;

  @property({
    type: 'string',
    required: true,
  })
  country: string;

  @property({
    type: 'string',
    required: true,
  })
  region: string;

  @property({
    type: 'string',
    required: true,
  })
  subRegion: string;

  @property({
    type: 'string',
    required: true,
  })
  sight: string;

  @property({
    type: 'string',
    required: true,
  })
  nose: string;

  @property({
    type: 'string',
    required: true,
  })
  palate: string;

  @property({
    type: 'number',
    required: true,
  })
  abv: number;

  @property({
    type: 'string',
    required: true,
  })
  winemakingNotes: string;

  @property({
    type: 'string',
    required: true,
  })
  foodPairings: string;

  @property({
    type: 'string',
  })
  notes?: string;


  constructor(data?: Partial<Wbg>) {
    super(data);
  }
}

export interface WbgRelations {
  // describe navigational properties here
}

export type WbgWithRelations = Wbg & WbgRelations;
