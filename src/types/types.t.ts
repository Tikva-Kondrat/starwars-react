export type SetPage = (title: string) => void;

export type SkyWalkerDetails = {
    name?: string;
    gender?: string;
    hair_color?: string;
    eye_color?: string;
    height?: string;
    mass?: string;
}


/*params api*/
export type RequestWithoutParams = () => Promise<Response>;