// CALLBACKS, PROMISES & ASYNC AWAIT:-


// SYNC IN JAVASCRIPT:
                // Synchronous means the code runs in a particular sequence of instructions given in the program. 
                // Each instruction waits for the previous instruction to complete its execution.
                 console.log("Dear")
                 console.log("Zindagi")
// ASYNC IN JAVASCRIPT:
                // Due to synchronous programming, sometimes important instructions get blocked due to some previous instructions, which causes a delay in the UI.
                // Asynchronous code execution allows to execute next instructions immediately and does not block the flow.
             
                function hello(){
                    console.log("hello")
                }
                setTimeout(hello,2000)

                // OR

                setTimeout(()=>{
                    console.log("hello dear zindagi")
                },2000)


