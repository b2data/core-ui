import { ponyfillGlobal } from "@mui/utils";

export const getReleaseInfo = () => {
  const releaseInfo = "__RELEASE_INFO__";
  if (process.env.NODE_ENV !== "production") {
    // A simple hack to set the value in the test environment (has no build step).

    if (releaseInfo === "__RELEASE" + "_INFO__") {
      return ponyfillGlobal.__MUI_RELEASE_INFO__;
    }
  }

  return releaseInfo;
};
