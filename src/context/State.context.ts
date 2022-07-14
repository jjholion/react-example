import { createContext } from "react";
interface StateContextType {
    showIntro: boolean;
    hasShownIntro: boolean;
    setHasShownIntro: (hasShownIntro: boolean) => void;
    setShowIntro: (showIntro: boolean) => void;
}

export const StateContext = createContext<StateContextType>({
    showIntro: true, setShowIntro: () => { },
    hasShownIntro: false, setHasShownIntro: () => { },
});