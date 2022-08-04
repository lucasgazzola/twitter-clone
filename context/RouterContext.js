import { useRouter } from 'next/router';
import { createContext, useContext, useEffect, useState } from 'react';

const RouterContext = createContext({});

export function useRouterContext() {
  return useContext(RouterContext);
}

export function RouterContextProvider({ children }) {
  const router = useRouter();
  const [isRouterReady, setIsRouterReady] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsRouterReady(() => router.isReady);
    router.events.on('routeChangeStart', () => {
      setIsLoading(true);
    });

    router.events.on('routeChangeComplete', () => {
      setIsLoading(false);
    });

    router.events.on('routeChangeError', (e) => {
      console.error({ error: e });
      setError(e);
      setIsLoading(false);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    isRouterReady && setIsLoading(false);
    !isRouterReady && setIsLoading(true);
  }, [isRouterReady]);

  const routerContextValue = { router, isLoading, isRouterReady, error };

  return (
    <RouterContext.Provider value={routerContextValue}>
      {children}
    </RouterContext.Provider>
  );
}
