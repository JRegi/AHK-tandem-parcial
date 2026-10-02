import { PartialType } from '@nestjs/mapped-types';
import { CreateBanDto } from './create-ban.dto.js';

export class UpdateBanDto extends PartialType(CreateBanDto) {}
