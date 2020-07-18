
function Stopwatch() {

  let startTime, stopTime, running, duration = 0;

  Object.defineProperty(this, 'startTime', {
    get: function () { return startTime; },
    set: function (value) { return startTime = value; }
  });

  Object.defineProperty(this, 'stopTime', {
    get: function () { return stopTime; },
    set: function (value) { return stopTime = value; }
  });

  Object.defineProperty(this, 'running', {
    get: function () { return running; },
    set: function (value) { return running = value; }
  });

  Object.defineProperty(this, 'duration', {

    get: function () { return duration; },

    set: function (value) { return duration = value; }

  });
}

Stopwatch.prototype.start = function () {
  if (this.running)
    throw new Error('stopwatch already started!!!');

  this.running = true;

  this.startTime = new Date();
}

Stopwatch.prototype.stop = function () {
  if (!this.running)
    throw new Error('stopwatch not started!!!');

  this.running = false;

  this.stopTime = new Date();

  this.duration += (this.stopTime.getTime() - this.startTime.getTime()) / 1000;
}

Stopwatch.prototype.reset = function () {
  this.startTime = null;
  this.stopTime = null;
  this.running = false;
  this.duration = 0;
}

