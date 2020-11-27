
export interface MovieBasics {
    id: string;
    title: string;
    poster: string;
}

export class Gallery {
    items: MovieBasics[];

    constructor(resp: MovieBasics[]){
        this.items = resp;
    }
}