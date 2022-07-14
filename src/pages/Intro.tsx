import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { StateContext } from "../context/State.context";

export default function Intro() {
    const { setHasShownIntro, setShowIntro } = useContext(StateContext);
    const navigate = useNavigate();

    function closeIntroAnddontShowAgain() {
        setShowIntro(false);
        closeIntro();
    }

    function closeIntro() {
        setHasShownIntro(true);
        navigate("/");
    }

    return <div>
        <button onClick={closeIntroAnddontShowAgain}>Continue and don't show intro again</button>
        <button onClick={closeIntro}>Continue</button>
    </div>;
}
