const path = require('path');
const fs = require('fs');

const indexPath = path.join(process.cwd(), 'index.html');
const dest = path.join(process.cwd(), 'build/index.html');

try {
    fs.createReadStream(indexPath).pipe(fs.createWriteStream(dest));
} catch (err) {
    console.err(err);
}


fs.readFile(path.join(process.cwd(), 'build', 'index.html'), (err, file) => {
    if (err) {
        console.log(err);
        // res.sendStatus(404);
    } else {
        console.log('looks fine');
        // res.send(file.toString());
    }
});

console.log('copy roger');
