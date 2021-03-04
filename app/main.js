import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { authentication } from './store/actions/auth';

import MainNavigation from './navigations/Main';
import AuthScreen from './screens/AuthScreen';
import LoadingScreen from './screens/LoadingScreen';

const Main = () => {
  const [initial, setInitial] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    const init = async () => {
      try {
        await dispatch(authentication());
      } catch (e) {}
      setInitial(false);
    };
    init();
  }, [dispatch]);
  const user = useSelector((state) => state.auth.user);

  if (initial) {
    return <LoadingScreen />;
  }

  if (user) {
    return <MainNavigation />;
  }
  return <AuthScreen />;
};

export default Main;
