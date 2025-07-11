"use client";

import { useEffect, useState } from "react";
import styles from "@/styles/components/CourseSelector.module.css";

type CourseType = "beginner" | "advanced" | "custom";

type Props = {
  selected: CourseType;
  setSelected: (value: CourseType) => void;
};

const CourseSelector = ({ selected, setSelected }: Props) => {
  const [expanded, setExpanded] = useState<CourseType | null>(selected);
  const [manuallyExpanded, setManuallyExpanded] = useState(false);

  useEffect(() => {
    // If user selects a new course, auto-expand that card (unless they had manually toggled View More)
    setExpanded(selected); // Always sync expand with selected
    setManuallyExpanded(false); // ✅ Reset manual view more
  }, [selected]);

  const handleSelect = (course: CourseType) => {
    setSelected(course);
  };

  const courses = [
    {
      key: "beginner",
      title: "Beginner Blast",
      subtitle: "10 Sessions Mastery",
      isLong: true,
      sessions: [
        "DAY 1 – Getting in Gear - Mastering the Basics",
        "DAY 2 – Getting in Gear - Mastering the Basics",
        "DAY 3 – Getting in Gear - Mastering the Basics",
        "DAY 4 – Getting in Gear - Mastering the Basics",
        "DAY 5 – Getting in Gear - Mastering the Basics",
        "DAY 6 – Getting in Gear - Mastering the Basics",
        "DAY 7 – Getting in Gear - Mastering the Basics",
        "DAY 8 – Getting in Gear - Mastering the Basics",
        "DAY 9 – Getting in Gear - Mastering the Basics",
        "DAY 10 – Getting in Gear - Mastering the Basics",
      ],
    },
    {
      key: "advanced",
      title: "Advanced Ace",
      subtitle: "5 Sessions Road Expert",
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
      sessions: ["Flexible: Choose any session"],
    },
  ];

  return (
    <div className={styles.wrapper}>
      {courses.map((course, index) => {
        const isActive = selected === course.key;
        const isExpanded = expanded === course.key;
        const courseKey = course.key as CourseType;

        return (
          <div
            key={course.key}
            className={`${styles.card} ${isActive ? styles.active : ""}`}
            onClick={() => handleSelect(courseKey)}
          >
            <div className={styles.topRow}>
              <div className={styles.titleSection}>
                <div
                  className={`${styles.circle} ${
                    isActive ? styles.circleActive : ""
                  }`}
                >
                  {isActive ? "✓" : ""}
                </div>
                <div className={styles.titleRow}>
                  <div className={styles.combinedTitle}>
                    {course.title}
                    {course.subtitle && (
                      <span className={styles.boldSubtitle}>
                        {" "}
                        – {course.subtitle}
                      </span>
                    )}
                  </div>
                </div>
              </div>
              <div className={styles.toggleIcon}>{isExpanded ? "−" : "+"}</div>
            </div>

            {isExpanded && (
              <>
                <div className={styles.sessionList}>
                  {(course.isLong && !manuallyExpanded
                    ? course.sessions.slice(0, 3)
                    : course.sessions
                  ).map((session, index) => {
                    const [day, ...rest] = session.split("–");
                    return (
                      <div key={index} className={styles.sessionItem}>
                        <span className={styles.sessionDay}>{day.trim()}</span>
                        <span className={styles.sessionDesc}>
                          {rest.join("–").trim()}
                        </span>
                        <img
                          src="/chevron-down.png"
                          alt="Chevron"
                          className={styles.chevronIcon}
                        />
                      </div>
                    );
                  })}
                </div>

                {/* View More */}
                {course.isLong && (
                  <div
                    className={styles.viewMore}
                    onClick={(e) => {
                      e.stopPropagation(); // don't trigger select
                      if (manuallyExpanded && isExpanded) {
                        setManuallyExpanded(false); // reset to default
                      } else {
                        setExpanded(courseKey);
                        setManuallyExpanded(true);
                      }
                    }}
                  >
                    {manuallyExpanded ? "View Less –" : "View More +"}
                  </div>
                )}
              </>
            )}
            {index < courses.length - 1 && <div className={styles.divider} />}
          </div>
        );
      })}
    </div>
  );
};

export default CourseSelector;
