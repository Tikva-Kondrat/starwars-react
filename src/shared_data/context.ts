import {defaultCharacterShortName} from "../storage/constants.ts";
import {createContext} from "react";

export const SWContext = createContext<SWContextValue>({
  hero: defaultCharacterShortName,
  changeHero: (hero: string) => console.log(hero),
});

export const ErrorContext = createContext<ErrorContextValue>({
  isWrongRoute: false,
  setIsWrongRoute: (_: boolean) => {}
});

export interface SWContextValue {
  hero: string,
  changeHero: (hero: string) => void,
}

export interface ErrorContextValue {
  isWrongRoute: boolean
  setIsWrongRoute: (isWrongRoute: boolean) => void
}