const fs = require('fs');
const path = require('path');

const paths = [
  'C:\\Users\\USER\\OneDrive\\Desktop\\coffe shop\\brewing club cafe\\src\\app\\(admin)',
  'C:\\Users\\USER\\OneDrive\\Desktop\\coffe shop\\brewing club cafe\\src\\app\\(public)',
  'C:\\Users\\USER\\OneDrive\\Desktop\\coffe shop\\brewing club cafe\\src\\app\\admin',
  'C:\\Users\\USER\\OneDrive\\Desktop\\coffe shop\\brewing club cafe\\src\\components\\admin'
];

paths.forEach(p => {
  if (fs.existsSync(p)) {
    try {
      fs.rmSync(p, { recursive: true, force: true });
      console.log('Deleted: ' + p);
    } catch (err) {
      console.error('Error deleting ' + p + ': ' + err.message);
    }
  } else {
    console.log('Path does not exist: ' + p);
  }
});
