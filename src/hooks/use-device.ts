enum SymbolsMac {
  CMD = "⌘",
  CTRL = "⌃",
  OPTION = "⌥",
  SHIFT = "⇧",
  CAPS = "⇪",
  FN = "fn",
  TAB = "→",
}

enum SymbolsWindow {
  CTRL = "ctrl",
  SHIFT = "⇧",
  CAPS = "⇪",
  TAB = "→",
}

export const useDevice = () => {
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
      TAB: isMacOs ? SymbolsMac.TAB : SymbolsWindow.TAB,    },
  };
};
