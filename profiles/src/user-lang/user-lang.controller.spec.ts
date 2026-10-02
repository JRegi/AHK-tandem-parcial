import { Test, TestingModule } from '@nestjs/testing';
import { UserLangController } from './user-lang.controller.js';
import { UserLangService } from './user-lang.service.js';

describe('UserLangController', () => {
  let controller: UserLangController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserLangController],
      providers: [UserLangService],
    }).compile();

    controller = module.get<UserLangController>(UserLangController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
