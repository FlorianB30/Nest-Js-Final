import {
    BadRequestException,
    Body,
    ConflictException,
    Controller,
    Post,
} from '@nestjs/common';
import { UserService } from './user.service';

@Controller()
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Post()
    async addUser(@Body('email') email: string) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        if(!regex.test(email)) {
           throw new BadRequestException('${email} is not valid')
        }
        const user = await this.userService.getUser(email)
        if(user) {
            throw new ConflictException('Email already exists');
        }

        await this.userService.addUser(email)
    }
}
