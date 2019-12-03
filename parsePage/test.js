const fs = require('fs');

const checkIsVolume = (path) => {
    const re = /[1-6]-[1-2]-[\d]{4}.pdf/i;
    const arr = path.match(re);
    return !!arr && arr.length !== 0;
}

const data = {
    journal: []
};

const sortJournal = (b, a) => {
    const arr = a.split('.')[0].split('-');
    const brr = b.split('.')[0].split('-');
    return (arr[2] - brr[2]) * 100 + (arr[1] - brr[1]) * 10 + (arr[0] - brr[0]);
}

fs.readdir('../src/static/img/', (err, files) => {
    files.forEach((item) => {
        if (checkIsVolume(item)) {
            data.journal.push(item);
        }
    });
    data.journal.sort(sortJournal);

    fs.writeFile('./pageList.json', JSON.stringify(data), (err) => {
        if (err) {
            console.log(err)
        }
    });
});
