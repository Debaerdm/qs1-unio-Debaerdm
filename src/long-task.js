const callstack = [];
const notSoHeavyDo = times => {  
    let count = 0;  
    for (let i = 0; i < times; i++) {  
      if (Math.round(Math.log(Math.sqrt(Math.abs(Math.round(Math.random() * 1e10))))) === 1)  
        count++;  
    }  
    return count;  
  };  
    
  const heavyDo = callback => {
    let total = 1e8,
      cuts = 100,
      counts = 0;
    for (let i = 0; i < cuts; i++) {
      callstack.push(() => notSoHeavyDo(total / cuts));
    }
    executeProcess(counts, callback);
  };

  const executeProcess = (count, cb) => {
    const subprocess = callstack.shift();
    count = count + subprocess();
    setImmediate(() => {(callstack.length != 0)? executeProcess(count, cb) : cb(count)});
  }; 
    
  const interval = setInterval(() => console.log('I am not blocked'), 1000);  
  setTimeout(() => clearInterval(interval), 10000);
  heavyDo(counts => console.log(counts));  