import {DefaultCrudRepository} from '@loopback/repository';
import {Wbg, WbgRelations} from '../models';
import {MongodbDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class WbgRepository extends DefaultCrudRepository<
  Wbg,
  typeof Wbg.prototype.id,
  WbgRelations
> {
  constructor(
    @inject('datasources.mongodb') dataSource: MongodbDataSource,
  ) {
    super(Wbg, dataSource);
  }
}
