import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserDTO } from './dtos/user.dt';

import { UserService } from './user.service';

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Post()
    async create(@Body() data: UserDTO) {
        return this.userService.create(data);
    }

    @Get()
    async findAll() {
        return this.userService.findAll();
    }
}
