export const Get = async (url) => {
    try {
        console.log('GET / ', url);
        let res = await fetch(url);
        return res.ok ? await res.json() : null;
    } catch (err) {
        console.log(err);
    }
    return null;
};

export const Post = async (url, body = {}) => {
    try {
        console.log('POST / ', url);
        let res = await fetch(url, {
            method: 'POST',
            body: JSON.stringify(body),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        return res.ok ? await res.json() : null;
    } catch (err) {
        console.log(err);
    }
    return null;
};

export const Put = async (url, body = {}) => {
    try {
        console.log('PUT / ', url);
        let res = await fetch(url, {
            method: 'PUT',
            body: JSON.stringify(body),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        return res.ok ? await res.json() : null;
    } catch (err) {
        console.log(err);
    }
    return null;
};

export const Delete = async (url) => {
    try {
        console.log('DELETE / ', url);
        let res = await fetch(url, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        return res.ok ? await res.json() : null;
    } catch (err) {
        console.log(err);
    }
    return null;
};
