const path = require('path');
export default function getEntrypoint(page) {
    const filenameCapitalized = string.charAt(0).toUpperCase() + string.slice(1);
    const filename = `${filenameCapitalized}.js`;
    return path.resolve(__dirname, `../../app/pages/${filename}`);
}