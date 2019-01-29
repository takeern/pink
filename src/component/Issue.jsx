import React from 'react';

export default () => {
    const pathMap = [
        {
            name: 'Vol 1 NO 6(IJMSR 2018)',
            path: '',
        },
        {
            name: 'Vol 1 NO 5(IJMSR 2018)',
            path: '',
        },
        {
            name: 'Vol 1 NO 4(IJMSR 2018)',
            path: '',
        },
        {
            name: 'Vol 1 NO 3(IJMSR 2018)',
            path: '',
        },
        {
            name: 'Vol 1 NO 2(IJMSR 2018)',
            path: '',
        },
        {
            name: 'Vol 1 NO 1(IJMSR 2018)',
            path: '',
        },
    ];
    const list = pathMap.map((item, index) => {
        return (
            <div key={index} className='issues'>
                <a href={item.path}>{item.name}</a>
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