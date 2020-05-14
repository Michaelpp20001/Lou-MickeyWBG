import {DefaultCrudRepository} from '@loopback/repository';
import {Deletedwbg, DeletedwbgRelations} from '../models';
import {MongodbDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class DeletedwbgRepository extends DefaultCrudRepository<
  Deletedwbg,
  typeof Deletedwbg.prototype.id,
  DeletedwbgRelations
> {
  constructor(
    @inject('datasources.mongodb') dataSource: MongodbDataSource,
  ) {
    super(Deletedwbg, dataSource);
  }
}