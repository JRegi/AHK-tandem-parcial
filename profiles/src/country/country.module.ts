import { Module } from '@nestjs/common';
import { CountryService } from './country.service.js';
import { CountryController } from './country.controller.js';

@Module({
  controllers: [CountryController],
  providers: [CountryService],
  exports: [CountryService],
})
export class CountryModule {}
