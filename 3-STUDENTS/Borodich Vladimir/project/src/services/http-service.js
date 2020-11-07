export const httpGet = async (url) => {
    try {
        console.log('GET / ', url);
        let res = await fetch(url);
        return res.ok ? await res.json() : null;
    } catch (err) {
        console.log(err);
    }
    return null;
};
