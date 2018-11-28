const getLogoSrc = () => {
    return fetch('http://127.0.0.1:1111/testRedux', {
        method: 'POST',
    });
};

export {
    getLogoSrc,
};