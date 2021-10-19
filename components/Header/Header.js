import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import styles from './styles/header.module.css';
import data from '@/data/Header/header.json';

const Header = () => {
  const navLinksRef = useRef();
  const navLinksWrapperRef = useRef();
  const navLinksMobileWrapperRef = useRef();

  useEffect(() => {
    document.body.addEventListener('scroll', () => {
      if (
        document.body.scrollTop > 50 ||
        document.documentElement.scrollTop > 50
      ) {
        document.getElementById('ua-nav').classList.add('ua-nav-scrolled');
      } else if (
        document.body.scrollTop < 50 ||
        document.documentElement.scrollTop < 50
      ) {
        document.getElementById('ua-nav').classList.remove('ua-nav-scrolled');
      }
    });

    window.addEventListener('resize', () => {
      console.log(window.innerWidth);
      if (
        window.innerWidth > 1190 &&
        navLinksWrapperRef.current.children.length <= 2
      ) {
        navLinksWrapperRef.current.appendChild(navLinksRef.current);
      } else {
        navLinksMobileWrapperRef.current.appendChild(navLinksRef.current);
      }
    });
  }, [navLinksWrapperRef]);

  const toggleMobileNav = () => {
    console.log(navLinksRef.current.classList);
    console.log(navLinksWrapperRef.current);
    if (
      navLinksRef.current.classList.contains(`${styles.ua_nav_links_active}`)
    ) {
      navLinksWrapperRef.current.appendChild(navLinksRef.current);
      navLinksRef.current.classList.toggle(`${styles.ua_nav_links_active}`);
    } else {
      navLinksMobileWrapperRef.current.appendChild(navLinksRef.current);
      navLinksRef.current.classList.toggle(`${styles.ua_nav_links_active}`);
    }
  };

  return (
    <div className={styles.ua_nav_wrapper}>
      <nav className={styles.ua_nav} id='ua-nav'>
        <div className={styles.ua_logo_wrapper}>
          <img
            className={styles.ua_logo}
            src={data.logo.src}
            alt={data.logo.alt}
          />
        </div>
        <div ref={navLinksWrapperRef} id='ua-nav-links-wrapper'>
          <ul
            ref={navLinksRef}
            className={styles.ua_nav_links}
            id='ua-nav-links'
          >
            {data.header_links.map(({ slug, text }, idx) => (
              <li key={idx}>
                <a href={slug}>{text}</a>
              </li>
            ))}
          </ul>
          <button
            className={styles.ua_nav_links_mobile_toggle}
            id='ua-nav-links-mobile-toggle'
            onClick={toggleMobileNav}
          >
            <img
              src={data.mobile_nav_icon.src}
              alt={data.mobile_nav_icon.alt}
            />
          </button>
        </div>
        <div
          ref={navLinksMobileWrapperRef}
          className={styles.ua_mobile_nav_wrapper}
        ></div>
      </nav>
    </div>
  );
};

export default Header;
