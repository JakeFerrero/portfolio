export const SMALLEST_IPHONE_SCREEN_WIDTH = 430;

// TODO:
// function isMobileDevice(): boolean {
//   return false;
// }

export const isScreenUnderThreshold = (threshold = 950) => {
  if (typeof window !== 'undefined') {
    return window.innerWidth < threshold;
  }
  return false; // Default to false during SSR
};
