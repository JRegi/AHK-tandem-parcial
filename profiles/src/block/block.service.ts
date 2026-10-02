import { Injectable } from '@nestjs/common';
import { CreateBlockDto } from './dto/create-block.dto.js';
import { UpdateBlockDto } from './dto/update-block.dto.js';

@Injectable()
export class BlockService {
  create(createBlockDto: CreateBlockDto) {
    return 'This action adds a new block';
  }

  findAll() {
    return `This action returns all block`;
  }

  findOne(id: number) {
    return `This action returns a #${id} block`;
  }

  update(id: number, updateBlockDto: UpdateBlockDto) {
    return `This action updates a #${id} block`;
  }

  remove(id: number) {
    return `This action removes a #${id} block`;
  }
}
