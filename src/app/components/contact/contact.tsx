import Image from 'next/image';
import { useEffect } from 'react';
import pic from '../../images/tokyo_temple_selfie.webp';
import style from './contact.module.css';

export default function Contact() {
  useEffect(() => {
    const container = document.querySelector(`.${style.container}`);
    const cover = document.querySelector(`.${style.cover}`);

    const observer = new IntersectionObserver(
      (entries) => {
        let hasCrossed = false;
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (!hasCrossed) {
              entry.target.classList.add(`${style.show}`);
              cover!.classList.add(`${style.animate}`);
              hasCrossed = true;
            }
          } else {
            const isScrollingUp = entry.boundingClientRect.top > 0;
            if (isScrollingUp) {
              entry.target.classList.remove(`${style.show}`);
              cover!.classList.remove(`${style.animate}`);
              hasCrossed = false;
            }
          }
        });
      },
      {
        threshold: 0.4
      }
    );

    // TODO: why any
    observer.observe(container as any);
  });

  return (
    <>
      <div className="sectionTitle">
        <h2 className="glow-text" data-content="Contact Me">
          Contact Me
        </h2>
      </div>
      <div className={style.container}>
        <div className={style.grid}>
          <div className={style.coverContainer}>
            <h3>Let&apos;s Connect</h3>
            <div className={style.cover} />
          </div>
          <p>
            Looking for a motivated developer who can bring a fresh perspective to your team? I can help! I&apos;m
            always interested in talking about new oppurtunities and how I can make a difference. Please do not hesitate
            to contact me via email or Linkedin!
          </p>
          <div className={style.emailLocation}>
            <div>
              <h4 style={{ color: 'grey' }}>Email</h4>
              <p style={{ fontWeight: 400 }}>jake.a.ferrero@gmail.com</p>
            </div>
            <div>
              <h4 style={{ color: 'grey' }}>Location</h4>
              <p style={{ fontWeight: 400 }}>Morrisville, NC</p>
            </div>
          </div>
          <div className={style.links}>
            <a href="mailto:jake.a.ferrero@gmail.com">
              <button className={style.button}>
                <i className={'bi bi-envelope-fill h4'} />
              </button>
            </a>
            <a href="https://www.linkedin.com/in/jacob-ferrero-1358a6123/">
              <button className={style.button}>
                <i className={'bi bi-linkedin h4'} />
              </button>
            </a>
            <a href="https://github.com/JakeFerrero">
              <button className={style.button}>
                <i className={'bi bi-github h4'} />
              </button>
            </a>
          </div>
        </div>
        <Image
          id={style.contactPic}
          src={pic}
          alt="Contact Picture"
          width={960 * 0.45}
          height={1280 * 0.45}
          style={{ borderRadius: '5%' }}
          loading='lazy'
        />
      </div>
    </>
  );
}
