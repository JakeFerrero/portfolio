import { useEffect } from 'react';
import style from './projects.module.css';
import TwoColumnStyle from './TwoColumnProjectGrid.module.css';

export const useProjectObserver = (isUnderWidth: boolean) => {
  useEffect(() => {
    isUnderWidth ? twoColumnProjects() : originalProjects();
  });
};

function twoColumnProjects() {
  const wrappers = document.querySelectorAll(`.${TwoColumnStyle.projectDescriptionWrapper}`);

  const observer = new IntersectionObserver(
    (entries) => {
      let hasCrossed = false;

      entries.forEach((entry) => {
        if (entry.intersectionRatio > 0.5) {
          if (!hasCrossed) {
            entry.target.classList.add(`${TwoColumnStyle.reveal}`);
            hasCrossed = true;
          }
        } else {
          const isScrollingUp = entry.boundingClientRect.top > 0;
          if (isScrollingUp) {
            entry.target.classList.remove(`${TwoColumnStyle.reveal}`);
            hasCrossed = false;
          }
        }
      });
    },
    {
      threshold: 0.5
    }
  );

  wrappers.forEach((wrapper) => observer.observe(wrapper));
}

function originalProjects() {
  const wrappers = document.querySelectorAll(`.${style.itemAnimationWrapper}`);
  const descriptions = document.querySelectorAll(`.${style.projectDescription}`);

  function slideInItemsSequentially() {
    wrappers.forEach((wrapper, index) => {
      setTimeout(() => {
        wrapper.classList.add(`${style.slideIn}`);
      }, index * 250);
    });
  }

  function slideOutItemsSequentially() {
    wrappers.forEach((wrapper, index) => {
      const reverseIndex = wrappers.length - 1 - index;
      setTimeout(() => {
        wrapper.classList.remove(`${style.slideIn}`);
      }, reverseIndex * 250);
    });
  }

  let gridHasCrossed = false;
  let projectAnimationHasFinished = false;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (!gridHasCrossed) {
            slideInItemsSequentially();
            gridHasCrossed = true;
            setTimeout(() => {
              projectAnimationHasFinished = true;
            }, 1000);
          }
        } else {
          const isScrollingUp = entry.boundingClientRect.top > 0;
          if (isScrollingUp) {
            slideOutItemsSequentially();
            gridHasCrossed = false;
            projectAnimationHasFinished = false;
          }
        }
      });
    },
    { threshold: 0.9 }
  );

  let descGridHasCrossed = false;

  const descriptionGridObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (!descGridHasCrossed) {
            descGridHasCrossed = true;
            setTimeout(
              () => {
                descriptions.forEach((description) => {
                  description.classList.add(`${style.reveal}`);
                });
              },
              projectAnimationHasFinished ? 0 : 800
            );
          }
        } else {
          const isScrollingUp = entry.boundingClientRect.top > 0;
          if (isScrollingUp) {
            descriptions.forEach((description) => {
              description.classList.remove(`${style.reveal}`);
            });
            descGridHasCrossed = false;
          }
        }
      });
    },
    { threshold: 0.45 }
  );

  const grid = document.querySelector(`.${style.grid}`);
  observer.observe(grid!);
  const descGrid = document.querySelector(`.${style.descriptionGrid}`);
  descriptionGridObserver.observe(descGrid!);
}
