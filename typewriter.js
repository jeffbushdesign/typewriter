
const sentence = "hello there from lighthouse labs\n";
let delay = 0;
for (const char of sentence) {
  setTimeout(() => {
    process.stdout.write(char);
  }, delay += 100);
}


// setTimeout(() => {
//   console.log('w0rld');
// }, 3000);