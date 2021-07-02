

export default function isString(prop: unknown): prop is string {
    return typeof prop === 'string';
}