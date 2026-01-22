import { createContext, useContext, useState, useEffect } from "react";

interface AnimationContextType {
  logoLoaded: boolean;
  contentVisible: boolean;
}

const AnimationContext = createContext<AnimationContextType>({
  logoLoaded: false,
  contentVisible: false,
});

export function useAnimation() {
  return useContext(AnimationContext);
}

export function AnimationProvider({ children }: { children: React.ReactNode }) {
  const [logoLoaded, setLogoLoaded] = useState(false);
  const [contentVisible, setContentVisible] = useState(false);

  useEffect(() => {
    // Logo animation starts after 1s delay, completes after about 0.6s
    const logoTimer = setTimeout(() => {
      setLogoLoaded(true);
    }, 1600);

    // Content fades in after logo lands
    const contentTimer = setTimeout(() => {
      setContentVisible(true);
    }, 1900);

    return () => {
      clearTimeout(logoTimer);
      clearTimeout(contentTimer);
    };
  }, []);

  return (
    <AnimationContext.Provider value={{ logoLoaded, contentVisible }}>
      {children}
    </AnimationContext.Provider>
  );
}
