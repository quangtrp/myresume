import React, { useState } from "react";
import styles from "./index.module.scss";
import { TAB_NAVIGATION } from "@/constant";
import { twMerge } from "tailwind-merge";
import { SOCIAL_LINKS } from "@/constant";
import Link from "next/link";
import { store } from "../../../Store";
import { observer } from "mobx-react-lite";

const LeftPart = observer(() => {
  const { setScrollToTab } = store;

  const [activeTab, setActiveTab] = useState(TAB_NAVIGATION.ABOUT);
  const [hoverTab, setHoverTab] = useState(TAB_NAVIGATION.ABOUT);

  const handleHoverNavTabs = (e) => {
    setHoverTab(e.target.closest("#tabWrapper").textContent.toLowerCase());
  };

  const handleHoverSocialLinks = (e, type) => {
    setHoverTab(e.target.closest(`#${type}`).getAttribute("id"));
  };

  const hanleClickTab = (e) => {
    setActiveTab(e.target.closest("#tabWrapper").textContent.toLowerCase());
    setScrollToTab(e.target.closest("#tabWrapper").textContent.toLowerCase());
  };

  return (
    <div className={styles.leftPartContainer}>
      <div className={styles.introduction}>
        <h1 className={styles.name}>Pham Quang Trinh</h1>
        <h2 className={styles.position}>Frontend Engineer</h2>
        <p className={styles.text}>
          I build pixel-perfect, engaging, and accessible digital experiences.
        </p>
      </div>

      <div className={styles.navigationTabs}>
        {Object.keys(TAB_NAVIGATION).map((item) => {
          const typeTab = item.toLocaleLowerCase();
          return (
            <div
              key={item}
              id="tabWrapper"
              className={styles.tabWrapper}
              onMouseOver={handleHoverNavTabs}
              onMouseLeave={() => setHoverTab("")}
              onClick={hanleClickTab}
            >
              <div
                className={twMerge(
                  styles.horizontalLine,
                  (hoverTab === typeTab || activeTab === typeTab) &&
                    styles.activeLine
                )}
              ></div>
              <div
                className={twMerge(
                  styles.text,
                  (hoverTab === typeTab || activeTab === typeTab) &&
                    styles.active
                )}
              >
                {item}
              </div>
            </div>
          );
        })}
      </div>

      <div className={styles.socialLinksContainer}>
        {Object.keys(SOCIAL_LINKS).map((item) => {
          const typeLink = SOCIAL_LINKS[item].label.toLowerCase();
          return (
            <a
              key={SOCIAL_LINKS[item].label}
              className={twMerge(
                styles.icons,
                hoverTab === typeLink && styles.activeLink
              )}
              href={SOCIAL_LINKS[item].link}
              title={SOCIAL_LINKS[item].label}
              target="_blank"
              rel="noopener noreferrer"
              onMouseOver={(e) => handleHoverSocialLinks(e, typeLink)}
              onMouseLeave={() => setHoverTab("")}
              id={typeLink}
            >
              {SOCIAL_LINKS[item].icon}
            </a>
          );
        })}
      </div>
    </div>
  );
});

export default LeftPart;
