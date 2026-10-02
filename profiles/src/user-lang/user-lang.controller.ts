import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UserLangService } from './user-lang.service.js';
import { CreateUserLangDto } from './dto/create-user-lang.dto.js';
import { UpdateUserLangDto } from './dto/update-user-lang.dto.js';

@Controller('user-lang')
export class UserLangController {
  constructor(private readonly userLangService: UserLangService) {}

  @Post()
  create(@Body() createUserLangDto: CreateUserLangDto) {
    return this.userLangService.create(createUserLangDto);
  }

  @Get()
  findAll() {
    return this.userLangService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userLangService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserLangDto: UpdateUserLangDto) {
    return this.userLangService.update(+id, updateUserLangDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userLangService.remove(+id);
  }
}
