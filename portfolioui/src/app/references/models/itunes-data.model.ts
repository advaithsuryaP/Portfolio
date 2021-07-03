export class ItunesData {
    constructor(
        public author: { name: { label: string }, uri: { label: string } },
        public entry: Entry[],
        public icon: { label: string },
        public id: { label: string },
        public link: { attributes: { rel: string, type: string, href: string } }[],
        public rights: { label: string },
        public title: { label: string },
        public updated: { label: string }
    ) {}
}

export interface Entry {
    'category': { attributes: { 'im:id': string, term: string, scheme: string, label: string } },
    'id': { label: string, attributes: { label: string } },
    'im:artist': { label: string, attributes: { href: string } },
    'im:contentType': { attributes: { term: string, label: string }, 'im:contentType': { attributes: { term: string, label: string } } },
    'im:image': { label: string, attributes: { height: string } } [],
    'im:itemCount': { label: string },
    'im:name': { label: string },
    'im:price': { label: string, attributes: { amount: string, currency: string } },
    'im:releaseDate': { label: string, attributes: { label: string } },
    'link': { attributes: { rel: string, type: string, href: string } },
    'rights': { label: string },
    'title': { label: string },
    'updated': { label: string },
}

export class Entries {
    constructor(
        public image: string,
        public imageHeight: string,
        public artist: string,
        public artistLink: string | undefined,
        public latestAlbum: string,
        public category: string,
        public releaseDate: Date,
        public price: string,
    ) {}
}