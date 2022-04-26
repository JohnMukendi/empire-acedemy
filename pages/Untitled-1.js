<>
  <div key={index} className={styles.subjectDivHeader} onClick={display}>
    <p>{course.courseName}</p>
    <div className={styles.icon}>{angleDown}</div>
  </div>

  <div
    className={styles.subjectDiv}
    style={{
      backgroundImage: `${gradient},url(/${course.image})`,
      display: `${visibility}`,
    }}
    key={course.id}
  >
    {course.fullInfo}
  </div>
</>;
