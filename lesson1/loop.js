// lesson 1.7

const pendingTimers = [];
const pendingTasks = [];
const pendingOSOperations = [];

// new timers, tasks,operations are recorded from myFile running
myFile.runContents();

function shouldCountinue() {
  // check one: any pending setTieout, setInterval, setImmediate
  // check second: eny ending OS tasks? (like server listening to port)
  // check three: any pending long tunning operations? (like fs module)
  return (
    pendingTimers.length || pendingOSTasks.length || pendingOperations.length
  );
}

// entire body executes in one tick
while (shouldCountinue()) {
  // 1) Node looks at pendingTimers and sees if any functions are ready to be called.setTimeout and setInterval
  // 2) Node looks at pendingOSTasks and pendingOperations and calls relevant callback
  // 3) Pause execution. Countinue when...
  // - a new pendingOSTask is done
  // - a new pendingOperations is done
  // - a timer is about to complete
  // 4) Look at pendingTimers. Call any setImmediate
  // 5) handle any 'close' events . Like:
  //   readStream.on("close", () => {
  //     console.log("Some cleanup code");
  //   });
}
