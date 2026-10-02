import { Module } from '@nestjs/common';
import { BanService } from './ban.service.js';
import { BanController } from './ban.controller.js';

@Module({
  controllers: [BanController],
  providers: [BanService],
})
export class BanModule {}
