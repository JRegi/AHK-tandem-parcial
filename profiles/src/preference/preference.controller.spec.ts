import { Test, TestingModule } from '@nestjs/testing';
import { PreferenceController } from './preference.controller.js';
import { PreferenceService } from './preference.service.js';

describe('PreferenceController', () => {
  let controller: PreferenceController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PreferenceController],
      providers: [PreferenceService],
    }).compile();

    controller = module.get<PreferenceController>(PreferenceController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
