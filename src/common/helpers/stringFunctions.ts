export function formatNumberWithSpaces(number:number) {
    return number.toLocaleString('en-US').replace(/,/g, ' ');
}

export function upperCase(string:string) {
    return string.toUpperCase();
}