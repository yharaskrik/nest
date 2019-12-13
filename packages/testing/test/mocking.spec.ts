import { Injectable } from '../../common/decorators/core';
import { Controller } from '../../common/decorators/core/controller.decorator';
import { Test } from '../test';
import { expect } from 'chai';

describe('ProviderMock', () => {
  @Injectable()
  class SecondaryService {}

  @Injectable()
  class PrimaryService {
    constructor(secondaryService: SecondaryService) {}
  }

  @Controller()
  class PrimaryController {
    constructor(primaryService: PrimaryService) {}
  }

  it('should not require SecondaryService to be provided', async () => {
    const module = await Test.createTestingModule(
      {
        imports: [],
        controllers: [PrimaryController],
        providers: [PrimaryService],
      },
      [PrimaryService],
    ).compile();

    const app = module.createNestApplication();

    const primaryService = module.get<PrimaryService>(PrimaryService);

    expect(primaryService).to.be.true;
    expect(app).to.be.true;
  });
});
