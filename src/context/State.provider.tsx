import { useState } from "react";
import { StateContext } from './State.context';

import React from 'react';
import useLocalStorage from "../hooks/useLocalStorage.hook";

export default function StateProvider({ children }: { children: React.ReactNode; }) {
    const [showIntro, setShowIntro] = useLocalStorage("showIntro", true);
    const [hasShownIntro, setHasShownIntro] = useState(false);

    const State = {
        showIntro, setShowIntro,
        hasShownIntro, setHasShownIntro
    };

    return (
        <StateContext.Provider value={State}>
            {children}
        </StateContext.Provider>
    );
}