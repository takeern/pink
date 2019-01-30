import React from 'react';

export default () => {
    const pathMap = [
        {
            name: 'Vol 1, No 6 (IJOMSR 2018 Dec)',
            path: '1-6-2018',
        },
        {
            name: 'Vol 1, No 5 (IJOMSR 2018 Oct)',
            path: '1-5-2018',
        },
        {
            name: 'Vol 1, No 4 (IJOMSR 2018 Aug)',
            path: '1-4-2018',
        },
        {
            name: 'Vol 1, No 3 (IJOMSR 2018 Jun)',
            path: '1-3-2018',
        },
        {
            name: 'Vol 1, No 2 (IJOMSR 2018 Apr)',
            path: '1-2-2018',
        },
        {
            name: 'Vol 1, No 1 (IJOMSR 2018 Feb)',
            path: '1-1-2018',
        },
    ];
    const list = pathMap.map((item, index) => {
        return (
            <div key={index} className='issues'>
                <a href={`/src/static/img/${item.path}.pdf`}>{item.name}</a>
                <br />
                <br />
            </div>
        );
    });
    return (
        <div style={{ marginLeft: 10 }}>
            <h3 style={{ marginBlockStart: 0 }} >Issues</h3>
            {list}
        </div>
    );
};