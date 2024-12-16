import { faker } from "@faker-js/faker";

export function person(_length: number = 1) {
  return Array.from({ length: _length }).map(() => ({
    bio: faker.person.bio(),
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    middleName: faker.person.middleName(),
    fullName: faker.person.fullName(),
    gender: faker.person.gender(),
    sex: faker.person.sex(),
    sexType: faker.person.sexType(),
    jobArea: faker.person.jobArea(),
    jobDesc: faker.person.jobDescriptor(),
    jobTitle: faker.person.jobTitle(),
    jobType: faker.person.jobType(),
    prefix: faker.person.prefix(),
    suffix: faker.person.suffix(),
    zodiac: faker.person.zodiacSign(),
  }));
}

export function lorem(_length: number = 1) {
  return Array.from({ length: _length }).map(() => ({
    lines: faker.lorem.lines(),
    paragraph: faker.lorem.paragraph(),
    paragraphs: faker.lorem.paragraphs(),
    sentence: faker.lorem.sentence(),
    sentences: faker.lorem.sentences(),
    slug: faker.lorem.slug(),
    text: faker.lorem.text(),
    word: faker.lorem.word(),
    words: faker.lorem.words(),
  }));
}

export function music(_length: number = 1) {
  return Array.from({ length: _length }).map(() => ({
    album: faker.music.album(),
    artist: faker.music.artist(),
    genre: faker.music.genre(),
    songName: faker.music.songName(),
  }));
}

export function number(_length: number = 1) {
  return Array.from({ length: _length }).map(() => ({
    bigInt: faker.number.bigInt(),
    binary: faker.number.binary(),
    float: faker.number.float(),
    hex: faker.number.hex(),
    int: faker.number.int(),
    octal: faker.number.octal(),
    roman: faker.number.romanNumeral(),
  }));
}

export function phone(_length: number = 1) {
  return Array.from({ length: _length }).map(() => ({
    imei: faker.phone.imei(),
    number: faker.phone.number(),
  }));
}

export function science(_length: number = 1) {
  return Array.from({ length: _length }).map(() => ({
    element: faker.science.chemicalElement(),
    unit: faker.science.unit(),
  }));
}

export function string(_length: number = 1) {
  return Array.from({ length: _length }).map(() => ({
    alpha: faker.string.alpha(),
    alphaNum: faker.string.alphanumeric(),
    binary: faker.string.binary(),
    fromChar: faker.string.fromCharacters("a-z"),
    hexa: faker.string.hexadecimal(),
    nanoId: faker.string.nanoid(),
    numeric: faker.string.numeric(),
    octal: faker.string.octal(),
    sample: faker.string.sample(),
    symbol: faker.string.symbol(),
    ulid: faker.string.ulid(),
    uuid: faker.string.uuid(),
  }));
}

export function date(_length: number = 1) {
  return Array.from({ length: _length }).map(() => ({
    anytime: faker.date.anytime(),
    past: faker.date.past(),
  }));
}

export function system(_length: number = 1) {
  return Array.from({ length: _length }).map(() => ({
    commonFileExt: faker.system.commonFileExt(),
    commonFileName: faker.system.commonFileName(),
    commonFileType: faker.system.commonFileType(),
    cron: faker.system.cron(),
    directoryPath: faker.system.directoryPath(),
    fileExt: faker.system.fileExt(),
    fileName: faker.system.fileName(),
    filePath: faker.system.filePath(),
    fileType: faker.system.fileType(),
    mimeType: faker.system.mimeType(),
    networkInterface: faker.system.networkInterface(),
    semver: faker.system.semver(),
  }));
}

export function vehicle(_length: number = 1) {
  return Array.from({ length: _length }).map(() => ({
    bicycle: faker.vehicle.bicycle(),
    color: faker.vehicle.color(),
    fuel: faker.vehicle.fuel(),
    manufacturer: faker.vehicle.manufacturer(),
    model: faker.vehicle.model(),
    type: faker.vehicle.type(),
    vehicle: faker.vehicle.vehicle(),
    vin: faker.vehicle.vin(),
    vrm: faker.vehicle.vrm(),
  }));
}

export function word(_length: number = 1) {
  return Array.from({ length: _length }).map(() => ({
    adjectif: faker.word.adjective(),
    verb: faker.word.verb(),
    adverb: faker.word.adverb(),
    conjunction: faker.word.conjunction(),
    interjection: faker.word.interjection(),
    noun: faker.word.noun(),
    preposition: faker.word.preposition(),
    sample: faker.word.sample(),
    words: faker.word.words(),
  }));
}

export function location(_length: number = 1) {
  return Array.from({ length: _length }).map(() => ({
    building: faker.location.buildingNumber(),
    cardinal: faker.location.cardinalDirection(),
    city: faker.location.city(),
    continent: faker.location.continent(),
    country: faker.location.country(),
    countryCode: faker.location.countryCode(),
    county: faker.location.county(),
    direction: faker.location.direction(),
    latitude: faker.location.latitude(),
    longitude: faker.location.longitude(),
    gps: faker.location.nearbyGPSCoordinate(),
    ordinal: faker.location.ordinalDirection(),
    secondary: faker.location.secondaryAddress(),
    state: faker.location.state(),
    street: faker.location.street(),
    streetAdress: faker.location.streetAddress(),
    timeZone: faker.location.timeZone(),
    zipeCode: faker.location.zipCode(),
  }));
}

export function internet(_length: number = 1) {
  return Array.from({ length: _length }).map(() => ({
    color: faker.internet.color(),
    displayName: faker.internet.displayName(),
    domaineName: faker.internet.domainName(),
    domainSuffix: faker.internet.domainSuffix(),
    domainWord: faker.internet.domainWord(),
    email: faker.internet.email(),
    emoji: faker.internet.emoji(),
    exampleEmail: faker.internet.exampleEmail(),
    httpMethode: faker.internet.httpMethod(),
    httpStatusCode: faker.internet.httpStatusCode(),
    ip: faker.internet.ip(),
    ipv4: faker.internet.ipv4(),
    ipv6: faker.internet.ipv6(),
    jwt: faker.internet.jwt(),
    jwtAlgo: faker.internet.jwtAlgorithm(),
    mac: faker.internet.mac(),
    password: faker.internet.password(),
    port: faker.internet.port(),
    protocol: faker.internet.protocol(),
    url: faker.internet.url(),
    userAgent: faker.internet.userAgent(),
    userName: faker.internet.username(),
  }));
}

export function image(_length: number = 1) {
  return Array.from({ length: _length }).map(() => ({
    avatar: faker.image.avatar(),
    avatarGitHub: faker.image.avatarGitHub(),
    dataUri: faker.image.dataUri(),
    url: faker.image.url(),
    urlLoremFlickr: faker.image.urlLoremFlickr(),
    urlPicsumPhotos: faker.image.urlPicsumPhotos(),
    urlPlaceholder: faker.image.urlPlaceholder(),
  }));
}

export function timestamp(_length: number = 1) {
  return Array.from({ length: _length }).map(() => ({
    id: faker.string.uuid(),
    timestamp: faker.date.recent().toISOString(),
  }));
}

export function coordinate(_length: number = 1) {
  return Array.from({ length: _length }).map(() => ({
    id: faker.string.uuid(),
    latitude: faker.location.latitude(),
    longitude: faker.location.longitude(),
  }));
}
