const timer = function () {
  elements = ["|", "/", "-", "\\", "|", "/", "-", "\\"]
  let theTime = 100
  for (let el in elements) {
    setTimeout(() => {process.stdout.write(`\r${elements[el]}   `);}, theTime);
    theTime += 200;
  };
  setTimeout(() => {process.stdout.write("\n");}, theTime);
}

timer()
