// from https://stackoverflow.com/questions/47477060/django-react-fetch-submitting-csrf-token-on-post-request
export function getCookie(name) {
    if (!document.cookie) {
        return null;
    }
    const token = document.cookie.split(';')
        .map(c => c.trim())
        .filter(c => c.startsWith(name + '='));

    if (token.length === 0) {
        return null;
    }
    return decodeURIComponent(token[0].split('=')[1]);
}