import * as React from 'react';
// import * as SplashScreen from 'expo-splash-screen';
import { useRouter, usePathname } from 'expo-router';
import { signInWithEmailAndPassword, subscribeOnAuthStateChanged, User } from '../api/auth';

interface ContextProps {
  isLoading: boolean;
  isSignOut: boolean;
  isSignedIn: boolean;
  user: User | null;
  userToken: string;
  signIn: () => void;
  signOut: () => void;
}

const defaultContextValue = {
  isLoading: false,
  isSignedIn: false,
  isSignOut: true,
  user: null,
  userToken: '',
  signIn: (data: { email: string; password: string }) => {},
  signOut: () => {},
};

// SplashScreen.preventAutoHideAsync();

export const AuthContext = React.createContext(defaultContextValue);

export default function AuthContextProvider({ children }: React.PropsWithChildren) {
  const [state, dispatch] = React.useReducer((prevState, action) => {
    switch (action.type) {
      case 'LOADING':
        return {
          ...prevState,
          isLoading: true,
        };
      case 'RESTORE_TOKEN':
        return {
          ...prevState,
          userToken: action.token,
          isSignedIn: !!action.token,
          isLoading: false,
        };
      case 'SIGN_IN':
        return {
          ...prevState,
          isSignOut: !action.user,
          isSignedIn: !!action.user,
          userToken: action.token,
          user: action.user,
          isLoading: false,
        };
      case 'SIGN_OUT':
        return {
          ...prevState,
          isSignOut: true,
          isSignedIn: false,
          userToken: null,
          user: null,
          isLoading: false,
        };
    }
  }, defaultContextValue);
  const router = useRouter();
  const pathname = usePathname();
  console.log(pathname);

  React.useEffect(() => {
    dispatch({ type: 'SIGN_IN', user: {} });
    // const unsubscribeFromAuthStatusChanged = subscribeOnAuthStateChanged((user) => {

    //   if (!user) {
    //     router.replace('auth/Login');
    //   }
    // });

    // return unsubscribeFromAuthStatusChanged;
  }, []);

  const authContext = React.useMemo<ContextProps>(
    () => ({
      ...state,
      signIn: async (data: { email: string; password: string }) => {
        dispatch({ type: 'LOADING' });

        if (data.email === '' || data.password === '') {
          dispatch({ type: 'SIGN_IN', user: null });
          return;
        }

        try {
          await signInWithEmailAndPassword(data.email, data.password);
        } catch (error) {
          dispatch({ type: 'SIGN_IN', user: null });
        }
      },
      signOut: () => dispatch({ type: 'SIGN_OUT' }),
    }),
    []
  );

  //   const onLayoutRootView = React.useCallback(async () => {
  //     if (!state.isLoading) {
  //       // This tells the splash screen to hide immediately! If we call this after
  //       // `setAppIsReady`, then we may see a blank screen while the app is
  //       // loading its initial state and rendering its first pixels. So instead,
  //       // we hide the splash screen once we know the root view has already
  //       // performed layout.
  //       await SplashScreen.hideAsync();
  //     }
  //   }, [state]);

  return (
    <AuthContext.Provider value={authContext}>
      {/* <View onLayout={onLayoutRootView}>{children}</View> */}
      {children}
    </AuthContext.Provider>
  );
}

export const useAuthContext = () => React.useContext(AuthContext);
