export const formatUserName = (
  user: { firstName?: string; lastName?: string; middleName?: string } = {},
  { short = false }: { short?: boolean } = {},
) =>
  short
    ? `${user?.firstName?.charAt(0) || ""}${user?.lastName?.charAt(0) || ""}`
    : `${user?.firstName || ""}${
        user?.middleName ? ` ${user?.middleName}` : ""
      }${user?.lastName ? ` ${user?.lastName}` : ""}`;
