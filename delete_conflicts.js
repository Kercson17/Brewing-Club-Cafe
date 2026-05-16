const fs = require('fs');
const path = require('path');

const pathsToDelete = [
  path.join(__dirname, 'src', 'app', '(admin)'),
  path.join(__dirname, 'src', 'app', '(public)')
];

pathsToDelete.forEach(p => {
  if (fs.existsSync(p)) {
    console.log(`Deleting ${p}...`);
    fs.rmSync(p, { recursive: true, force: true });
    console.log(`Deleted ${p}`);
  } else {
    console.log(`${p} does not exist.`);
  }
});
