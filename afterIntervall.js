// Given an array of number such as [2, 3, 4, 1] of arbitrary length which contains the time intervals in second. Write a function that logs a statement after the completion of each time interval. in js

function delay(seconds) {
  return new Promise((resolve) => {
    setTimeout(resolve, seconds * 1000);
  });
}

async function logAfterTimeIntervals(timeIntervals) {
  for (const interval of timeIntervals) {
    await delay(interval);
    console.log(
      `Statement after ${interval} seconds ${new Date().getSeconds()}`
    );
  }
}

const timeIntervals = [2, 3, 4, 1];
logAfterTimeIntervals(timeIntervals);
