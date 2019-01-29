import React from 'react';

export default () => {
    const pathMap = [
        {
            name: 'Vol 1, No 6 (IJMSR 2018)',
            path: '1-6-2018',
        },
        {
            name: 'Vol 1, NO 5(IJMSR 2018)',
            path: '1-5-2018',
        },
        {
            name: 'Vol 1, NO 4(IJMSR 2018)',
            path: '1-4-2018',
        },
        {
            name: 'Vol 1, NO 3(IJMSR 2018)',
            path: '1-3-2018',
        },
        {
            name: 'Vol 1, NO 2(IJMSR 2018)',
            path: '1-2-2018',
        },
        {
            name: 'Vol 1, NO 1(IJMSR 2018)',
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