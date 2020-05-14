import {
  Count,
  CountSchema,
  Filter,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getFilterSchemaFor,
  getModelSchemaRef,
  getWhereSchemaFor,
  patch,
  put,
  del,
  requestBody,
} from '@loopback/rest';
import {Deletedwbg} from '../models';
import {DeletedwbgRepository} from '../repositories';

export class DeletedwbgController {
  constructor(
    @repository(DeletedwbgRepository)
    public deletedwbgRepository : DeletedwbgRepository,
  ) {}

  @post('/deletedwbgs', {
    responses: {
      '200': {
        description: 'Deletedwbg model instance',
        content: {'application/json': {schema: getModelSchemaRef(Deletedwbg)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Deletedwbg, {exclude: ['id']}),
        },
      },
    })
    deletedwbg: Omit<Deletedwbg, 'id'>,
  ): Promise<Deletedwbg> {
    return this.deletedwbgRepository.create(deletedwbg);
  }

  @get('/deletedwbgs/count', {
    responses: {
      '200': {
        description: 'Deletedwbg model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(Deletedwbg)) where?: Where<Deletedwbg>,
  ): Promise<Count> {
    return this.deletedwbgRepository.count(where);
  }

  @get('/deletedwbgs', {
    responses: {
      '200': {
        description: 'Array of Deletedwbg model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Deletedwbg)},
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(Deletedwbg)) filter?: Filter<Deletedwbg>,
  ): Promise<Deletedwbg[]> {
    return this.deletedwbgRepository.find(filter);
  }

  @patch('/deletedwbgs', {
    responses: {
      '200': {
        description: 'Deletedwbg PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Deletedwbg, {partial: true}),
        },
      },
    })
    deletedwbg: Deletedwbg,
    @param.query.object('where', getWhereSchemaFor(Deletedwbg)) where?: Where<Deletedwbg>,
  ): Promise<Count> {
    return this.deletedwbgRepository.updateAll(deletedwbg, where);
  }

  @get('/deletedwbgs/{id}', {
    responses: {
      '200': {
        description: 'Deletedwbg model instance',
        content: {'application/json': {schema: getModelSchemaRef(Deletedwbg)}},
      },
    },
  })
  async findById(@param.path.string('id') id: string): Promise<Deletedwbg> {
    return this.deletedwbgRepository.findById(id);
  }

  @patch('/deletedwbgs/{id}', {
    responses: {
      '204': {
        description: 'Deletedwbg PATCH success',
      },
    },
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Deletedwbg, {partial: true}),
        },
      },
    })
    deletedwbg: Deletedwbg,
  ): Promise<void> {
    await this.deletedwbgRepository.updateById(id, deletedwbg);
  }

  @put('/deletedwbgs/{id}', {
    responses: {
      '204': {
        description: 'Deletedwbg PUT success',
      },
    },
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() deletedwbg: Deletedwbg,
  ): Promise<void> {
    await this.deletedwbgRepository.replaceById(id, deletedwbg);
  }

  @del('/deletedwbgs/{id}', {
    responses: {
      '204': {
        description: 'Deletedwbg DELETE success',
      },
    },
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.deletedwbgRepository.deleteById(id);
  }
}
