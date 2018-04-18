import { InMemoryDbService } from 'angular-in-memory-web-api';

export class CervejaApi implements InMemoryDbService {

    createDb(){
        let cervejas = [
            {id: 1, nome: 'Johnny B. Good', estilo:'American Pale Ale', fabricante: 'Cervejaria JBG', paisOrigem:'Brasil'},
            {id: 2, nome: 'Johnny B. Good', estilo:'Blond Ale', fabricante: 'Cervejaria JBG', paisOrigem:'Brasil'}
        ];
        return {cervejas}
    }
} 
