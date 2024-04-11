function scoreGrades(score) {
  if (score >= 90) {
    console.log("very good");
  } else if (score >= 80) {
    console.log("good");
  } else if (score >= 70) {
    console.log("medium");
  } else if (score >= 60) {
    console.log("OK");
  } else {
    console.log("not ok");
  }
}

scoreGrades(81);
