import { useEffect, useState } from 'react';

export const SMALLEST_IPHONE_SCREEN_WIDTH = 430;

function isMobileDevice(): boolean {
  return /Mobi|Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

const useWindowWidth = (threshold = 950) => {
  const [isUnderThreshold, setIsUnderThreshold] = useState(window.innerWidth < threshold);

  useEffect(() => {
    const handleResize = () => {
      setIsUnderThreshold(window.innerWidth < threshold);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [threshold]);

  return isUnderThreshold;
};

export const useDeviceDetection = (widthThreshold = 950) => {
  const [isMobile, setIsMobile] = useState(isMobileDevice());
  const isUnderWidth = useWindowWidth(widthThreshold);

  useEffect(() => {
    const handleUserAgent = () => {
      setIsMobile(isMobileDevice());
    };
    handleUserAgent();
  }, []);

  return { isMobile, isUnderWidth };
};
