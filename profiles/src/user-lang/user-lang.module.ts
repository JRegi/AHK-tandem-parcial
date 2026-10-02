import { Module } from '@nestjs/common';
import { UserLangService } from './user-lang.service.js';
import { UserLangController } from './user-lang.controller.js';

@Module({
  controllers: [UserLangController],
  providers: [UserLangService],
})
export class UserLangModule {}
