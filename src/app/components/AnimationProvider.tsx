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
    // Logo drop animation completes after about 0.5s
    const logoTimer = setTimeout(() => {
      setLogoLoaded(true);
    }, 500);

    // Content fades in 0.3s after logo lands
    const contentTimer = setTimeout(() => {
      setContentVisible(true);
    }, 800);

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
