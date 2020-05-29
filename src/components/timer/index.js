import React, { useState, useEffect } from 'react';

export default function Timer(props) {
  const [time, setTimeObj] = useState({ minutes: 1, seconds: 0 });
  let intervalTimer;
  useEffect(() => {
    intervalTimer = setInterval(() => {
      let timeObj = time;
      const { minutes, seconds } = timeObj;
      if (seconds > 0) {
        timeObj.seconds = seconds - 1;
        setTimeObj(JSON.parse(JSON.stringify(timeObj)));
      }
      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(intervalTimer);
          props.timesOver();
        } else {
          timeObj.minutes = minutes - 1;
          timeObj.seconds = 59;
          setTimeObj(JSON.parse(JSON.stringify(timeObj)));//since we are keeping keyname same so state doesnt update hence a hack
        }
      }
    }, 1000);
    // return part is called on componentUnmount.
    return () => {
      clearInterval(intervalTimer)
    }
  }, []);
  const { minutes, seconds } = time;
  return (
    <>
      <div>
        {minutes === 0 && seconds === 0 &&
          <h1>Time Remaining: {minutes}:{seconds < 10 ? `0${seconds}` : seconds}</h1>
        }
      </div>
    </>
  );
}
