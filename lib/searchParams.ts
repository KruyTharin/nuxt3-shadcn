export default function getURLParams(key: string) {
    if (typeof window === 'undefined') return null;

    const query = new URLSearchParams(window.location.search);
    const value = query.get(key);

    return value;
}
