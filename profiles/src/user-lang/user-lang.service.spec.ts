import { Test, TestingModule } from '@nestjs/testing';
import { UserLangService } from './user-lang.service.js';

describe('UserLangService', () => {
  let service: UserLangService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserLangService],
    }).compile();

    service = module.get<UserLangService>(UserLangService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
