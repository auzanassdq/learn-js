class Stopwatch {

  constructor(startTime = 0, stopTime = 0) {
    this.startTime = startTime;
    this.stopTime = stopTime;
    this.result = 0
  }

  start() {
    let today = new Date()
    let time = `${today.getHours()}:${today.getMinutes()}:${today.getSeconds()}:${today.getUTCMilliseconds()}`;
    console.log(`this start at ${time}`)
    this.startTime = today.getTime()
  }

  stop() {
    let today = new Date()
    let time = `${today.getHours()}:${today.getMinutes()}:${today.getSeconds()}:${today.getUTCMilliseconds()}`;
    console.log(`this stop at ${time}`);
    this.stopTime = today.getTime()
  }

  duration() {
    this.result = (this.stopTime - this.startTime) / 1000
    console.log(this.result)
  }
}

let stopwatch = new Stopwatch()
// stopwatch.start()
// stopwatch.stop()

// console.log(stopwatch.duration())
