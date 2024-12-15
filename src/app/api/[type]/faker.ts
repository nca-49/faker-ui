import { faker } from "@faker-js/faker";

export function person() {
  return Array.from({ length: 10 }).map(() => ({
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

export function lorem() {
  return Array.from({ length: 10 }).map(() => ({
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

export function music() {
  return Array.from({ length: 10 }).map(() => ({
    album: faker.music.album(),
    artist: faker.music.artist(),
    genre: faker.music.genre(),
    songName: faker.music.songName(),
  }));
}

export function number() {
  return Array.from({ length: 10 }).map(() => ({
    bigInt: faker.number.bigInt(),
    binary: faker.number.binary(),
    float: faker.number.float(),
    hex: faker.number.hex(),
    int: faker.number.int(),
    octal: faker.number.octal(),
    roman: faker.number.romanNumeral(),
  }));
}

export function phone() {
  return Array.from({ length: 10 }).map(() => ({
    imei: faker.phone.imei(),
    number: faker.phone.number(),
  }));
}

export function science() {
  return Array.from({ length: 10 }).map(() => ({
    element: faker.science.chemicalElement(),
    unit: faker.science.unit(),
  }));
}

export function string() {
  return Array.from({ length: 10 }).map(() => ({
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

export function date() {
  return Array.from({ length: 10 }).map(() => ({
    anytime: faker.date.anytime(),
    past: faker.date.past(),
  }));
}

export function timestamp() {
  return Array.from({ length: 10 }).map(() => ({
    id: faker.string.uuid(),
    timestamp: faker.date.recent().toISOString(),
  }));
}

export function coordinate() {
  return Array.from({ length: 10 }).map(() => ({
    id: faker.string.uuid(),
    latitude: faker.location.latitude(),
    longitude: faker.location.longitude(),
  }));
}
