export function isNotPrivate(prop: string): string {
  return !prop.startsWith('_');
}
