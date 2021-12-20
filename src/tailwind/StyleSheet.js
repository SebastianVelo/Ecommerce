export default (style, children = {}) => ({
    get: style,
    ...children
});