import { Controller, Get, Param, UseFilters } from '@nestjs/common';
import { UserService } from './user.service';
import { HttpExceptionFilter } from 'src/http.exception.filter';

@Controller('user')
export class UserController {

    constructor(private readonly userService: UserService) { }


    @Get()
    // @UseFilters(new HttpExceptionFilter())
    findAllUsers() {
        return this.userService.findAllUsers();
    }

    @Get(":id")
    findCatsByUser(@Param('id') id: number) {
        return this.userService.findCatForUser(id);
    }
}
