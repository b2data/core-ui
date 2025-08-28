import type { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
  stories: [
    "../src/components/**/*.@(mdx|stories.@(ts|tsx))",
    "../src/components/**/**/*.@(mdx|stories.@(ts|tsx))",
  ],
  staticDirs: ["../public"],
  addons: [
    // Storybook v9 addons - removed v8 addons that are not compatible
    // "@storybook/addon-essentials", // Not available in v9 stable
    // "@storybook/addon-interactions", // Not available in v9 stable
    // "@storybook/addon-links", // Not available in v9 stable
    // "@storybook/addon-onboarding", // Not available in v9 stable
    // "@storybook/addon-themes", // Not available in v9 stable
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  typescript: {
    check: false,
    reactDocgen: "react-docgen-typescript",
    reactDocgenTypescriptOptions: {
      // makes union prop types like variant and size appear as select controls
      shouldExtractLiteralValuesFromEnum: true,
      // makes string and boolean types that can be undefined appear as inputs and switches
      shouldRemoveUndefinedFromOptional: true,
      // Filter out third-party props from node_modules except @mui packages
      propFilter: (prop) =>
        prop.parent
          ? !/node_modules\/(?!@mui|notistack)/.test(prop.parent.fileName)
          : true,
    },
  },
};

export default config;
