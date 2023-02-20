export const getCurrentTime = (seconds: number) => {
    const date = new Date(seconds * 1000).toLocaleString();
    const time = date.split(" ")[1];
    return time;
}
