import { Injectable } from '@nestjs/common';

@Injectable()
export class CatService {

    findAllCats() {
        return [ 
            { name: 'Cat1', type: 'Romi' },
            { name: 'Cat2', type: 'Turki' },
            { name: 'Cat3', type: 'Egyptian' },
         ];
    }

}
