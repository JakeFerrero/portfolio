import { useEffect } from 'react';
import { useDeviceDetection } from '../utils/useDeviceDetection';
import style from './AboutGrid.module.css';
import AboutGridItem from './AboutGridItem';

export default function AboutGrid() {
  const { isUnderWidth: isSmall } = useDeviceDetection(1179);
  const { isUnderWidth: isSuperSmall } = useDeviceDetection(639);

  useEffect(() => {
    const grid = document.querySelector(`.${style.grid}`)!;
    const items = grid.querySelectorAll(':scope > *');

    let gridThreshold = 1;
    if (isSmall) {
      gridThreshold = isSuperSmall ? 0.2 : 0.5;
    }

    function revealItemsSequentially() {
      items.forEach((child, index) => {
        setTimeout(() => {
          child.classList.add(`${style.slideIn}`);
        }, index * 150);
      });
    }

    function removeItemsSequentially() {
      items.forEach((child, index) => {
        const reverseIndex = items.length - 1 - index;
        setTimeout(() => {
          child.classList.remove(`${style.slideIn}`);
        }, reverseIndex * 160);
      });
    }

    let gridHasCrossed = false;

    const gridObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (!gridHasCrossed) {
              revealItemsSequentially();
              gridHasCrossed = true; // Lock the state
            }
          } else {
            // User scrolls back up past the line
            const isScrollingUp = entry.boundingClientRect.top > 0;
            if (isScrollingUp) {
              removeItemsSequentially();
              gridHasCrossed = false; // Unlock the state
            }
          }
        });
      },
      { threshold: gridThreshold }
    );

    gridObserver.observe(grid as any);
  });

  return (
    <div className={style.grid}>
      <div className={style.itemWrapper}>
        <AboutGridItem
          gridId="exp"
          title={['6 Years', 'Experience']}
          description={['Node.js', 'Typescript', 'Javascript']}
        />
      </div>
      <div className={style.itemWrapper}>
        <AboutGridItem
          gridId="aws"
          title="AWS"
          description="Over 5 years of experience developing scalable microservices leveraging AWS"
        />
      </div>
      <div className={style.itemWrapper}>
        <AboutGridItem
          gridId="ui"
          title={['UI / UX', 'Development']}
          description={['React.js', 'Next.js', 'CSS & HTML']}
        />
      </div>
      <div className={style.itemWrapper}>
        <AboutGridItem
          gridId="leadership"
          title="Leadership"
          description="Proven leadership skills as a technical lead for a small group of engineers"
        />
      </div>
    </div>
  );
}
