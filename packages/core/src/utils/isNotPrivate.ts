export function isNotPrivate(prop: string): boolean {
  return !prop.startsWith('_');
}
