import { Injectable } from '@nestjs/common';
import { CreateUserLangDto } from './dto/create-user-lang.dto.js';
import { UpdateUserLangDto } from './dto/update-user-lang.dto.js';

@Injectable()
export class UserLangService {
  create(createUserLangDto: CreateUserLangDto) {
    return 'This action adds a new userLang';
  }

  findAll() {
    return `This action returns all userLang`;
  }

  findOne(id: number) {
    return `This action returns a #${id} userLang`;
  }

  update(id: number, updateUserLangDto: UpdateUserLangDto) {
    return `This action updates a #${id} userLang`;
  }

  remove(id: number) {
    return `This action removes a #${id} userLang`;
  }
}
