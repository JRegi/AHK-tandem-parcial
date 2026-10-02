import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto.js';
import { UpdateUserDto } from './dto/update-user.dto.js';
import { User } from './entities/user.entity.js';
import { CountryService } from '../country/country.service.js';

/*
	'No puede estar aprendiendo un idioma que declara que habla.
	'Puede estar aprendiendo como máximo 3 idiomas a la vez. 
    'Para sumar un cuarto tiene que dejar uno.
	'Tiene que hablar al menos un idioma.
	'Solo se aceptan idiomas del catálogo.
  */

@Injectable()
export class UserService {
  users: User[] = [];

  constructor(private readonly countryService: CountryService) {}

  create(createUserDto: CreateUserDto) {
    const newUser = new User();

    newUser.id = Math.random();
    newUser.name = createUserDto.name;
    newUser.lastName = createUserDto.lastName;
    newUser.nickname = createUserDto.nickname;
    newUser.mail = createUserDto.mail;

    const country = this.countryService.findOne(createUserDto.residencyCountry);

    if (!country) {
      return new BadRequestException();
    }

    newUser.residencyCountry = country;
    // newUser.status = createUserDto.status;
    // newUser.learningLangs = createUserDto.learningLangs;
    // newUser.speakingLangs = createUserDto.speakingLangs;
    // newUser.blocks = createUserDto.blocks;
    this.users.push(newUser);

    return newUser;
  }

  findAll() {
    return this.users;
  }

  findOne(id: number) {
    const user = this.users.find((u) => u.id == id);

    return user;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
