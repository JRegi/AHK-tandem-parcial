import { Module } from '@nestjs/common';
import { UserService } from './user.service.js';
import { UserController } from './user.controller.js';
import { CountryService } from '../country/country.service.js';

@Module({
  controllers: [UserController],
  providers: [UserService, CountryService],
})
export class UserModule {}
