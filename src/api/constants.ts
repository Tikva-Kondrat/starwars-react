import friend2 from "../assets/images-jpg/friend2.jpg";
import friend1 from "../assets/images-jpg/friend1.jpg";
import friend6 from "../assets/images-jpg/friend6.jpg";
import friend8 from "../assets/images-jpg/friend8.jpg";
import friend4 from "../assets/images-jpg/friend4.jpg";
import friend5 from "../assets/images-jpg/friend5.jpg";
import friend9 from "../assets/images-jpg/friend9.jpg";
import friend3 from "../assets/images-jpg/friend3.jpg";
import friend7 from "../assets/images-jpg/friend7.jpg";
import friend0 from "../assets/images-jpg/friend0.jpg";
import {HeroDetails} from "../types/types.t.ts";

export const base_url = 'https://sw-info-api.herokuapp.com';
export const version = '/v1';
export const friends_url = `${base_url + version}/peoples/`

export const characters = new Map<string, HeroDetails>(
  [
    ['luke', {
      name: "Luke Skywalker",
      img: friend0,
      id: '1'
    }],
    ['c3po', {
      name: "C-3PO",
      img: friend2,
      id: '2'
    }],
    ['r2d2', {
      name: "R2-D2",
      img: friend1,
      id: '3'
    }],
    ['leia', {
      name: "Leia Organa",
      img: friend9,
      id: '5'
    }],
    ['obi_wan', {
      name: "Obi-Wan Kenobi",
      img: friend8,
      id: '10'
    }],
    ['chewbacca', {
      name: "Chewbacca",
      img: friend4,
      id: '13'
    }],
    ['han_solo', {
      name: "Han Solo",
      img: friend5,
      id: '14'
    }],
    ['yoda', {
      name: "Yoda",
      img: friend6,
      id: `0`
    }],
    ['ewok', {
      name: "Wicket Systri Warrick",
      img: friend3,
      id: '30'
    }],
    ['falcon', {
      name: "Millennium Falcon",
      img: friend7,
      id: '10'
    }]
  ])

export const defaultCharacterId = characters.get('luke')!.id