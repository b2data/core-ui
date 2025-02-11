enum SymbolsMac {
  CMD = "⌘",
  CTRL = "⌃",
  OPTION = "⌥",
  SHIFT = "⇧",
  CAPS = "⇪",
  FN = "fn",
  TAB = "→",
  ENTER = "↩",
  BACKSPACE = "⌫",
}

enum SymbolsWindow {
  CTRL = "ctrl",
  SHIFT = "⇧",
  CAPS = "⇪",
  TAB = "→",
  ENTER = "↩",
  BACKSPACE = "⌫",
}

export type SymbolsKey =
  | "CMD"
  | "CTRL"
  | "OPTION"
  | "SHIFT"
  | "FN"
  | "CAPS"
  | "TAB"
  | "ENTER"
  | "BACKSPACE";

export const useDevice = (): {
  isMacOs: boolean;
  isWindows: boolean;
  Symbols: Record<SymbolsKey, string>;
} => {
  const isMacOs =
    window.navigator.platform.toUpperCase().includes("MAC") ||
    ["iPhone", "iPod", "iPad"].includes(navigator.platform);

  return {
    isMacOs,
    isWindows: !isMacOs,
    Symbols: {
      CMD: isMacOs ? SymbolsMac.CMD : SymbolsWindow.CTRL,
      CTRL: isMacOs ? SymbolsMac.CTRL : SymbolsWindow.CTRL,
      OPTION: isMacOs ? SymbolsMac.OPTION : SymbolsWindow.SHIFT,
      SHIFT: isMacOs ? SymbolsMac.SHIFT : SymbolsWindow.SHIFT,
      FN: isMacOs ? SymbolsMac.FN : "",
      CAPS: isMacOs ? SymbolsMac.CAPS : SymbolsWindow.CAPS,
      TAB: isMacOs ? SymbolsMac.TAB : SymbolsWindow.TAB,
      ENTER: isMacOs ? SymbolsMac.ENTER : SymbolsWindow.ENTER,
      BACKSPACE: isMacOs ? SymbolsMac.BACKSPACE : SymbolsWindow.BACKSPACE,
    },
  };
};
