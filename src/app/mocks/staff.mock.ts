import type { Staff } from '../shared/models/staff.model';

export const STAFF: Staff[] = [
  {
    id: '1',
    name: 'Minerva McGonagall',
    image: 'https://hp-api.onrender.com/images/mcgonagall.jpg',
    house: 'Gryffindor',
    gender: 'Female',
    actor: 'Dame Maggie Smith',
    alive: true,
    },
    {
    id: '2',
    name: 'Severus Snape',
    image: 'https://hp-api.onrender.com/images/snape.jpg',
    house: 'Slytherin',
    gender: 'Male',
    actor: 'Alan Rickman',
    alive   : false,
    },
];