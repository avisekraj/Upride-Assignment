"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "@/styles/components/CourseSelector.module.css";
import { anybody } from '../fonts';

type CourseType = "beginner" | "advanced" | "custom";

type Props = {
  selected: CourseType;
  setSelected: (value: CourseType) => void;
};

const CourseSelector = ({ selected, setSelected }: Props) => {
  const [expanded, setExpanded] = useState<CourseType | null>(selected);
  const [manuallyExpanded, setManuallyExpanded] = useState(false);
  const [expandedSession, setExpandedSession] = useState<string | null>(null);

  useEffect(() => {
    setExpanded(selected);
    setManuallyExpanded(false);
    setExpandedSession(null);
  }, [selected]);

  const handleSelect = (course: CourseType) => {
    setSelected(course);
    setManuallyExpanded(false);
    setExpandedSession(null);
  };

  const toggleExpand = (course: CourseType) => {
    setExpanded((prev) => (prev === course ? null : course));
    setManuallyExpanded(false);
    setExpandedSession(null);
  };

  const courses = [
    {
      key: "beginner",
      title: "Beginner Blast",
      subtitle: "10 Sessions to Mastery",
      isLong: true,
      sessions: Array.from(
        { length: 10 },
        (_, i) => `DAY ${i + 1} – Getting in Gear - Mastering the Basics`
      ),
    },
    {
      key: "advanced",
      title: "Advanced Ace",
      subtitle: "05 Sessions to Perfection",
      isLong: true,
      sessions: [
        "DAY 1 – Traffic Navigation",
        "DAY 2 – Highway Simulation",
        "DAY 3 – Night Driving",
        "DAY 4 – Parking Challenges",
        "DAY 5 – City Rush Practice",
      ],
    },
    {
      key: "custom",
      title: "Customize Course",
      subtitle: "",
      isLong: false,
      sessions: ["DAY 1 – Flexible: Choose any session"],
    },
  ];

  return (
    <div className={styles.wrapper}>
      {courses.map((course, index) => {
        const isActive = selected === course.key;
        const isExpanded = expanded === course.key;
        const courseKey = course.key as CourseType;

        return (
          <motion.div
            layout
            key={course.key}
            className={`${styles.card} ${isActive ? styles.active : ""}`}
            onClick={() => handleSelect(courseKey)}
            initial={{ opacity: 1, scale: 1 }}
            animate={{ opacity: 1, scale: isActive ? 1 : 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className={styles.topRow}>
              <div className={styles.titleSection}>
                <div
                  className={`${styles.circle} ${
                    isActive ? styles.circleActive : ""
                  }`}
                >
                  {isActive &&
                    <svg
                      width="13"
                      height="9"
                      viewBox="0 0 13 9"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0.835754 3.7449L5.01059 7.91991L12.1865 0.744049"
                        stroke="white"
                        strokeWidth="1.4483"
                        strokeLinecap="round"
                      />
                    </svg>}
                </div>
                <div className={styles.titleRow}>
                  <div className={styles.combinedTitle}>
                    {course.title}
                    {course.subtitle && (
                      <span className={styles.boldSubtitle}> – {course.subtitle}</span>
                    )}
                  </div>
                </div>
              </div>

              {/* Toggle icon with click handler to expand/collapse */}
              <div
                className={styles.toggleIcon}
                onClick={(e) => {
                  e.stopPropagation(); // Prevent selecting the card
                  toggleExpand(courseKey);
                }}
              >
                {isExpanded ? "−" : "+"}
              </div>
            </div>

            <AnimatePresence initial={false}>
              {isExpanded && (
                <motion.div
                  key="sessionList"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.35 }}
                  className={styles.sessionList}
                >
                  {(course.isLong && !manuallyExpanded
                    ? course.sessions.slice(0, 3)
                    : course.sessions
                  ).map((session, idx) => {
                    const [day, ...rest] = session.split("–");
                    const sessionKey = `${course.key}-${idx}`;
                    const isSessionExpanded = expandedSession === sessionKey;

                    return (
                      <motion.div
                        layout
                        key={idx}
                        className={`${styles.sessionItem} ${
                          isSessionExpanded ? styles.expanded : ""
                        }`}
                        onClick={(e) => {
                          e.stopPropagation();
                          setExpandedSession((prev) =>
                            prev === sessionKey ? null : sessionKey
                          );
                        }}
                      >
                        <div className={styles.sessionHeader}>
                          <span className={styles.sessionDay}>{day.trim()}</span>
                          <span className={styles.sessionDesc}>
                            {rest.join("–").trim()}
                          </span>
                          <img
                            src="/chevron-down.png"
                            alt="Chevron"
                            className={`${styles.chevronIcon} ${
                              isSessionExpanded ? styles.chevronRotated : ""
                            }`}
                          />
                        </div>

                        <AnimatePresence>
                          {isSessionExpanded && (
                            <motion.div
                              className={styles.sessionDetails}
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.4 }}
                            >
                              <div className={styles.sessionDetailsContent}>
                                <p>
                                  This session includes practical guidance, real-world
                                  exercises, and tips tailored to your level.
                                </p>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </motion.div>
                    );
                  })}

                  {course.isLong && (
                    <div
                      className={`${styles.viewMore} ${anybody.className}`}
                      onClick={(e) => {
                        e.stopPropagation();
                        setManuallyExpanded((prev) => !prev);
                      }}
                    >
                      {manuallyExpanded ? "View Less →" : "View More →"}
                    </div>
                  )}
                </motion.div>
              )}
            </AnimatePresence>

            {index < courses.length - 1 && <div className={styles.divider} />}
          </motion.div>
        );
      })}
    </div>
  );
};

export default CourseSelector;
