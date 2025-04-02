export function isObjectEmpty(object: any): boolean {
  for (const _ in object) {
    return false;
  }
  return true;
}
