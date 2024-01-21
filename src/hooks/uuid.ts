import { v4 as generateUuid } from "uuid";

export const uuid = (num?: number): string => {
  if (num === undefined) {
    return generateUuid();
  }

  const suffix = num.toString().padStart(12, "0");

  return `00000000-0000-0000-0000-${suffix}`;
};

export const isuuid = (uid: string) =>
  /^[0-9A-F]{8}-[0-9A-F]{4}-[4][0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i.test(
    uid,
  );
