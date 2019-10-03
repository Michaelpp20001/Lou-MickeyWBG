import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class Wbg extends Entity {
  @property({
    type: 'string',
    required: true,
  })
  category: string;

  @property({
    type: 'string',
    id: true,
  })
  id?: string;

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
  grape: string;

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
  apperance: string;

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
    type: 'string',
    required: true,
  })
  abv: string;

  @property({
    type: 'string',
  })
  wineMakingNotes?: string;

  @property({
    type: 'string',
  })
  foodPairings?: string;

  @property({
    type: 'string',
  })
  notes?: string;

  @property.array(String)
  keywords?: string[]

  @property({
    type: 'string',
  })
  labelImage?: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Wbg>) {
    super(data);
  }
}

export interface WbgRelations {
  // describe navigational properties here
}

export type WbgWithRelations = Wbg & WbgRelations;
