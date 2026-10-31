import { useState } from 'react';
import SplashScreen from '@/components/widgets/SplashScreen';
import MainMenu from '@/components/widgets/MainMenu';

function Index() {
  const [showSplash, setShowSplash] = useState(true);

  if (showSplash) {
    return <SplashScreen onComplete={() => setShowSplash(false)} />;
  }

  return <MainMenu />;
}

export default Index;
