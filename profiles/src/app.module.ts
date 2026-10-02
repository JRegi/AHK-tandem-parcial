import { Module } from '@nestjs/common';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { UserModule } from './user/user.module.js';
import { BanModule } from './ban/ban.module.js';
import { BlockModule } from './block/block.module.js';
import { UserLangModule } from './user-lang/user-lang.module.js';
import { CatalogLangModule } from './catalog-lang/catalog-lang.module.js';
import { CountryModule } from './country/country.module.js';
import { PreferenceModule } from './preference/preference.module.js';

@Module({
  imports: [UserModule, BanModule, BlockModule, UserLangModule, CatalogLangModule, CountryModule, PreferenceModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
