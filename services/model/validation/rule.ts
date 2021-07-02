
export default interface ValidationRule {
    (property: unknown): boolean;
}