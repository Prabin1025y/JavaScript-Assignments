// Write a JavaScript function that takes a callback and invokes it after a delay of 2 second.

const DelayedGreeting = callBack => {
    setTimeout(callBack, 2000);
  };
  
  const HelloWorld = () => console.log("Hello World");
  
  DelayedGreeting(HelloWorld);
  