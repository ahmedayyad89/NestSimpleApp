import { Controller, Get, Post, UsePipes, Body, ParseIntPipe, UseGuards, UseInterceptors } from '@nestjs/common';
import { CatService } from './cat.service';
import { ValidationPipe } from 'src/validation.pipe';
import { CreateCatDto } from './create.cat.dto';
import { RolesGuard } from 'src/roles.guard';
import { LoggingInterceptor } from 'src/logging.interceptor';

@Controller('cat')
@UseGuards(RolesGuard)
@UseInterceptors(LoggingInterceptor)
export class CatController {

    constructor(private readonly catService: CatService) { }


    @Get()
    findAllCats() {
        return this.catService.findAllCats();
    }

    @Post()
    async create(@Body() createCatDto: CreateCatDto) {
        return "Validated Successfully";
    }
}
