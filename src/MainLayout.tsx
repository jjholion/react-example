import { useContext, useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { StateContext } from './context/State.context';

export default function MainLayout() {
  const state = useContext(StateContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (state.showIntro && !state.hasShownIntro) {
      state.setHasShownIntro(true);
      navigate('/intro');
    }
  });


  return <>
    <div>
      <Outlet />
    </div>
  </>;
}
