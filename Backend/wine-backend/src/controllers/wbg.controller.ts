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
import {Wbg} from '../models';
import {WbgRepository} from '../repositories';

export class WbgController {
  constructor(
    @repository(WbgRepository)
    public wbgRepository : WbgRepository,
  ) {}

  @post('/wbgs', {
    responses: {
      '200': {
        description: 'Wbg model instance',
        content: {'application/json': {schema: getModelSchemaRef(Wbg)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Wbg, {exclude: ['id']}),
        },
      },
    })
    wbg: Omit<Wbg, 'id'>,
  ): Promise<Wbg> {
    return this.wbgRepository.create(wbg);
  }

  @get('/wbgs/count', {
    responses: {
      '200': {
        description: 'Wbg model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(Wbg)) where?: Where<Wbg>,
  ): Promise<Count> {
    return this.wbgRepository.count(where);
  }

  @get('/wbgs', {
    responses: {
      '200': {
        description: 'Array of Wbg model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Wbg)},
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(Wbg)) filter?: Filter<Wbg>,
  ): Promise<Wbg[]> {
    return this.wbgRepository.find(filter);
  }

  @patch('/wbgs', {
    responses: {
      '200': {
        description: 'Wbg PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Wbg, {partial: true}),
        },
      },
    })
    wbg: Wbg,
    @param.query.object('where', getWhereSchemaFor(Wbg)) where?: Where<Wbg>,
  ): Promise<Count> {
    return this.wbgRepository.updateAll(wbg, where);
  }

  @get('/wbgs/{id}', {
    responses: {
      '200': {
        description: 'Wbg model instance',
        content: {'application/json': {schema: getModelSchemaRef(Wbg)}},
      },
    },
  })
  async findById(@param.path.number('id') id: number): Promise<Wbg> {
    return this.wbgRepository.findById(id);
  }

  @patch('/wbgs/{id}', {
    responses: {
      '204': {
        description: 'Wbg PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Wbg, {partial: true}),
        },
      },
    })
    wbg: Wbg,
  ): Promise<void> {
    await this.wbgRepository.updateById(id, wbg);
  }

  @put('/wbgs/{id}', {
    responses: {
      '204': {
        description: 'Wbg PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() wbg: Wbg,
  ): Promise<void> {
    await this.wbgRepository.replaceById(id, wbg);
  }

  @del('/wbgs/{id}', {
    responses: {
      '204': {
        description: 'Wbg DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.wbgRepository.deleteById(id);
  }
}
