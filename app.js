const startTiming = 20       // minutes
let time = startTiming * 60  // converts our time into seconds

const count = document.getElementById("countdownTimer")

setInterval(updateTimer, 1000) //how often will it call the function? 1000ms = 1 second

function updateTimer() {
  const minutes = Math.floor(time/60)  // converts it back to minutes, but rounds down
  let seconds = time % 60              // the seconds

  seconds = seconds < 10 ? '0' + seconds : seconds
            // condition ?       do this : or else do that (ternary)
            // if there are 8 seconds left, the 8 shows up in the tens digit place

            //display the information
  count.innerHTML = `${minutes}:${seconds}` // template literal
  time-- //decrement time

}