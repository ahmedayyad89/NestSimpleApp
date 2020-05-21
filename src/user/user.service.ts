import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { CatService } from 'src/cat/cat.service';

@Injectable()
export class UserService {

    constructor(private readonly catService: CatService) {}

    findAllUsers() {
        throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);
        return [
            { name: 'User1', role: 'Admin' },
            { name: 'User2', role: 'Super Admin' },
            { name: 'User3', role: 'End User' },
        ];
    }

    findCatForUser(id: number) {
        throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);
        return this.catService.findAllCats();
    }


}
