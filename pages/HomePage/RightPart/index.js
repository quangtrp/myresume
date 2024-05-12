import React, { useEffect, useState } from "react";
import styles from "./index.module.scss";
import { SECTIONS } from "@/constant";
import { ArrowIcon } from "../../../CreateSvgIcons";
import { twMerge } from "tailwind-merge";
import Link from "next/link";
import { SCROLL_TABS, TAB_NAVIGATION, TYPES_HOVER } from "../../../constant";
import Image from "next/image";
import { observer } from "mobx-react-lite";
import { store } from "../../../Store";

const RightPart = observer(() => {
  const { scrollToTab } = store;

  const [hover, setHover] = useState("");

  const handleHover = (e, id) => {
    setHover(e.target.closest(`#${id}`).id);
  };

  useEffect(() => {
    if (scrollToTab === SCROLL_TABS.ABOUT.id) {
      window.scrollTo({
        top: SCROLL_TABS.ABOUT.top,
        behavior: "smooth",
      });
    }

    if (scrollToTab === SCROLL_TABS.EXPERIENCE.id) {
      window.scrollTo({
        top: SCROLL_TABS.EXPERIENCE.top,
        behavior: "smooth",
      });
    }

    if (scrollToTab === SCROLL_TABS.PROJECTS.id) {
      window.scrollTo({
        top: SCROLL_TABS.PROJECTS.top,
        behavior: "smooth",
      });
    }
  }, [scrollToTab]);
  return (
    <div className={styles.rightPartContainer}>
      <div className={styles.aboutWrapper}>
        <div className={styles.aboutTitle}>About</div>
        <div
          className={styles.aboutSection}
          dangerouslySetInnerHTML={{ __html: SECTIONS.ABOUT }}
        ></div>
      </div>

      <div className={styles.experienceContainer}>
        <div className={styles.experienceTitle}>Experience</div>

        <div className={styles.experienceSection}>
          {Object.keys(SECTIONS.EXPERIENCE).map((item) => {
            const id = item.toLocaleLowerCase();
            return (
              <a
                className={styles.experienceWrapper}
                key={SECTIONS.EXPERIENCE[item].time}
                id={id}
                onMouseOver={(e) => handleHover(e, id)}
                onMouseLeave={() => setHover("")}
                href={SECTIONS.EXPERIENCE[item].link}
                target="_blank"
              >
                <div
                  className={twMerge(
                    styles.shadowWrapper,
                    hover === id && styles.hoverWrapper
                  )}
                ></div>
                <div className={styles.time}>
                  {SECTIONS.EXPERIENCE[item].time}
                </div>
                <div className={styles.contentWrapper}>
                  <div className={styles.position}>
                    <h3
                      className={twMerge(
                        styles.positionText,
                        hover === id && styles.textActive
                      )}
                    >
                      {SECTIONS.EXPERIENCE[item].position}
                    </h3>
                    <div
                      className={twMerge(
                        styles.arrowIcon,
                        hover === id && styles.iconActive
                      )}
                      style={{
                        transform:
                          hover === id
                            ? "translateY(-4px) translateX(4px)"
                            : "",

                        transition: "all 0.3s ease",
                      }}
                    >
                      <ArrowIcon rotation={45} />
                    </div>
                  </div>
                  <div className={styles.description}>
                    {SECTIONS.EXPERIENCE[item].description}
                  </div>
                  <div className={styles.technologiesWrapper}>
                    {SECTIONS.EXPERIENCE[item].technologies.map((tech) => (
                      <div key={tech} className={styles.techContainer}>
                        {tech}
                      </div>
                    ))}
                  </div>
                </div>
              </a>
            );
          })}
          <Link
            className={styles.resumeWrapper}
            id={TYPES_HOVER.RESUME}
            onMouseOver={(e) => handleHover(e, TYPES_HOVER.RESUME)}
            onMouseLeave={() => setHover("")}
            href={"/"}
          >
            <p
              className={twMerge(
                styles.resume,
                hover === TYPES_HOVER.RESUME && styles.resumeActive
              )}
            >
              View Full Résumé
            </p>
            <div
              className={twMerge(
                styles.icon,
                hover === TYPES_HOVER.RESUME && styles.iconActive
              )}
              style={{
                transform:
                  hover === TYPES_HOVER.RESUME
                    ? "translateY(-4px) translateX(4px)"
                    : "",

                transition: "all 0.3s ease",
              }}
            >
              <ArrowIcon rotation={45} />
            </div>
          </Link>
        </div>
      </div>

      <div className={styles.projectContainer}>
        <div className={styles.projectTitle}>Project</div>
        <div className={styles.projectsSection}>
          {Object.keys(SECTIONS.PROJECTS).map((item) => {
            const id = item.toLocaleLowerCase();
            return (
              <a
                className={styles.projectsWrapper}
                key={id}
                id={id}
                onMouseOver={(e) => handleHover(e, id)}
                onMouseLeave={() => setHover("")}
                href={SECTIONS.PROJECTS[item].link}
                target="_blank"
              >
                <div
                  className={twMerge(
                    styles.shadowWrapper,
                    hover === id && styles.hoverWrapper
                  )}
                ></div>
                <div className={styles.imageWrapper}>
                  <Image
                    alt={id}
                    src={SECTIONS.PROJECTS[item].image}
                    className={twMerge(
                      styles.image,
                      hover === id && styles.imageHovered
                    )}
                    width={100}
                    height={48}
                  />
                </div>
                <div className={styles.projectsContent}>
                  <div className={styles.label}>
                    <h3
                      className={twMerge(
                        styles.labelText,
                        hover === id && styles.textActive
                      )}
                    >
                      {SECTIONS.PROJECTS[item].label}
                    </h3>
                    <div
                      className={twMerge(
                        styles.arrowIcon,
                        hover === id && styles.iconActive
                      )}
                      style={{
                        transform:
                          hover === id
                            ? "translateY(-4px) translateX(4px)"
                            : "",

                        transition: "all 0.3s ease",
                      }}
                    >
                      <ArrowIcon rotation={45} />
                    </div>
                  </div>
                  <div className={styles.description}>
                    {SECTIONS.PROJECTS[item].description}
                  </div>
                  <div className={styles.technologiesWrapper}>
                    {SECTIONS.PROJECTS[item].technologies.map((tech) => (
                      <div key={tech} className={styles.techContainer}>
                        {tech}
                      </div>
                    ))}
                  </div>
                </div>
              </a>
            );
          })}
          {/* <Link
          className={styles.resumeWrapper}
          id={TYPES_HOVER.RESUME}
          onMouseOver={(e) => handleHover(e, TYPES_HOVER.RESUME)}
          onMouseLeave={() => setHover("")}
          href={"/"}
        >
          <p
            className={twMerge(
              styles.resume,
              hover === TYPES_HOVER.RESUME && styles.resumeActive
            )}
          >
            View Full Résumé
          </p>
          <div
            className={twMerge(
              styles.icon,
              hover === TYPES_HOVER.RESUME && styles.iconActive
            )}
            style={{
              transform:
                hover === TYPES_HOVER.RESUME
                  ? "translateY(-4px) translateX(4px)"
                  : "",

              transition: "all 0.3s ease",
            }}
          >
            <ArrowIcon rotation={45} />
          </div>
        </Link> */}
        </div>
      </div>
    </div>
  );
});

export default RightPart;
