export type CharacterDetails = {
    name?: string;
    gender?: string;
    hair_color?: string;
    eye_color?: string;
    height?: string;
    mass?: string;
}

export interface NavigationItem {
    title: string;
    path: string;
}

export interface HeroDetails {
    name: string,
    img: string,
    id: string
}