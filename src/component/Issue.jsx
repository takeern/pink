import React, { useState, useEffect } from 'react';
import Api from '../ulits/api';

export default function Issue(){
    const [ state, setState ] = useState({
        data: [],
    });

    const getData = async () => {
        const res = await fetch(Api.getPageList).then(res => res.json());
        if (res.resData.code && res.resData.code === 200) {
            setState({
                ...state,
                data: res.resData.data,
            });
            
        }
    };
    if (data.length === 0) {
        getData();
    }

    if (state.data.length === 0) {
        return null;
    } else {
        const mouth = [
            '',
            'Feb',
            'Apr',
            'Jun',
            'Aug',
            'Oct',
            'Dec',
        ];

        const pathMap = state.data.map((item) => {
            const arr = item.match(/([1-6])-([1-2])-([\d]{4})/i);
            return {
                name: `Vol ${arr[2]}, No ${arr[1]}, (IJOMSR ${arr[3]} ${mouth[arr[1]]})`,
                path: item,
            };
        });
        
        const list = pathMap.map((item, index) => {
            return (
                <div key={index} className='issues'>
                    <a href={`/src/static/img/${item.path}`}>{item.name}</a>
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
    }
};