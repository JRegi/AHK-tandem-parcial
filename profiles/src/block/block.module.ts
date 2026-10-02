import { Module } from '@nestjs/common';
import { BlockService } from './block.service.js';
import { BlockController } from './block.controller.js';

@Module({
  controllers: [BlockController],
  providers: [BlockService],
})
export class BlockModule {}
