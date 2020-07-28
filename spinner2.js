const spin = ['|', '/', '-', '\\', '|', '/', '-', '\\', '|', '\n'];

for (let i = 0; i < spin.length; i++) {
  setTimeout((char) => {
    process.stdout.write(`\r` + char);
  }, 100 + i * 200, spin[i]);
}