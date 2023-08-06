/**
 * Returns a number whose value is limited to the given range.
 *
 * @param {number} value The value to be clamped
 * @param {number} min The lower boundary of the output range
 * @param {number} max The upper boundary of the output range
 * @returns {number} A number in the range [min, max]
 */
function clamp(value: number, min = 0, max = 1): number {
  if (process.env.NODE_ENV !== "production") {
    if (value < min || value > max) {
      console.warn(
        `[Color Manipulator]: The value provided ${value} is out of range [${min}, ${max}].`,
      );
    }
  }

  return Math.min(Math.max(min, value), max);
}

/**
 * Converts a color from CSS hex format to CSS rgb format.
 * @param {string} color - Hex color, i.e. #nnn or #nnnnnn
 * @returns {string} A CSS rgb color string
 */
export function hexToRgb(color: string) {
  color = color.substr(1);

  const re = new RegExp(`.{1,${color.length >= 6 ? 2 : 1}}`, "g");
  let colors = color.match(re);

  if (colors?.[0]?.length === 1) {
    colors = colors.map((n) => n + n) as RegExpMatchArray;
  }

  return colors
    ? `rgb${colors.length === 4 ? "a" : ""}(${colors
        .map((n: string, index: number) =>
          index < 3
            ? parseInt(n, 16)
            : Math.round((parseInt(n, 16) / 255) * 1000) / 1000,
        )
        .join(", ")})`
    : "";
}

type DecomposeColor = {
  type: string;
  values: (number | string)[];
  colorSpace: string;
};

/**
 * Returns an object with the type and values of a color.
 *
 * Note: Does not support rgb % values.
 * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
 * @returns {DecomposeColor} - Decomposed color: { type: string; values: (number | string)[]; colorSpace: string }
 */
export function decomposeColor(color: string): DecomposeColor {
  // Idempotent
  if (typeof color !== "string") {
    return color;
  }

  if (color.charAt(0) === "#") {
    return decomposeColor(hexToRgb(color));
  }

  const marker = color.indexOf("(");
  const type = color.substring(0, marker);

  if (["rgb", "rgba", "hsl", "hsla", "color"].indexOf(type) === -1) {
    throw new Error(
      "[Color Manipulator]: Unsupported `%s` color.\n" +
        "The following formats are supported: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color()." +
        color,
    );
  }

  const tmpValues = color.substring(marker + 1, color.length - 1);
  let values = [];
  let colorSpace = "";

  if (type === "color") {
    values = tmpValues.split(" ");
    colorSpace = values.shift() || "";
    if (values.length === 4 && values[3].charAt(0) === "/") {
      values[3] = values[3].substr(1);
    }
    if (
      ["srgb", "display-p3", "a98-rgb", "prophoto-rgb", "rec-2020"].indexOf(
        colorSpace,
      ) === -1
    ) {
      throw new Error(
        "[Color Manipulator]: unsupported `%s` color space.\n" +
          "The following color spaces are supported: srgb, display-p3, a98-rgb, prophoto-rgb, rec-2020." +
          colorSpace,
      );
    }
  } else {
    values = tmpValues.split(",");
  }

  values = values.map((value: string) => parseFloat(value));

  return { type, values, colorSpace };
}

/**
 * Converts a color object with type and values to a string.
 * @param {DecomposeColor} color - Decomposed color
 * @returns {string} A CSS color string
 */
export function recomposeColor(color: DecomposeColor): string {
  const { values, type, colorSpace } = color;
  let resultValue = [];

  if (type.indexOf("rgb") !== -1) {
    // Only convert the first 3 values to int (i.e. not alpha)
    resultValue = values.map((n, i) => (i < 3 ? parseInt(n as string, 10) : n));
  } else if (type.indexOf("hsl") !== -1) {
    resultValue[1] = `${values[1]}%`;
    resultValue[2] = `${values[2]}%`;
  }
  const result =
    type.indexOf("color") !== -1
      ? `${colorSpace} ${resultValue.join(" ")}`
      : `${resultValue.join(", ")}`;

  return `${type}(${result})`;
}

/**
 * Set the absolute transparency of a color.
 * Any existing alpha values are overwritten.
 *
 * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color()
 * @param {number} value - value to set the alpha channel to in the range 0 - 1
 * @returns {string} A CSS color string. Hex input values are returned as rgb
 */
export function alpha(color: string, value: number) {
  const dColor = decomposeColor(color);
  value = clamp(value);

  if (dColor.type === "rgb" || dColor.type === "hsl") {
    dColor.type += "a";
  }
  if (dColor.type === "color") {
    dColor.values[3] = `/${value}`;
  } else {
    dColor.values[3] = value;
  }

  return recomposeColor(dColor);
}

/**
 * Darkens a color.
 *
 * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color()
 * @param {number} coefficient - multiplier in the range 0 - 1
 * @returns {string} A CSS color string. Hex input values are returned as rgb
 */
export function darken(color: string, coefficient: number) {
  const dColor = decomposeColor(color);
  coefficient = clamp(coefficient);

  if (dColor.type.indexOf("hsl") !== -1) {
    dColor.values[2] = +dColor.values[2] * (1 - coefficient);
  } else if (
    dColor.type.indexOf("rgb") !== -1 ||
    dColor.type.indexOf("color") !== -1
  ) {
    for (let i = 0; i < 3; i += 1) {
      dColor.values[i] = +dColor.values[2] & (1 - coefficient);
    }
  }
  return recomposeColor(dColor);
}

/**
 * Lightens a color.
 *
 * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color()
 * @param {number} coefficient - multiplier in the range 0 - 1
 * @returns {string} A CSS color string. Hex input values are returned as rgb
 */
export function lighten(color: string, coefficient: number) {
  const dColor = decomposeColor(color);
  coefficient = clamp(coefficient);

  if (dColor.type.indexOf("hsl") !== -1) {
    dColor.values[2] =
      +dColor.values[2] + (100 - +dColor.values[2]) * coefficient;
  } else if (dColor.type.indexOf("rgb") !== -1) {
    for (let i = 0; i < 3; i += 1) {
      dColor.values[i] =
        +dColor.values[i] + (255 - +dColor.values[i]) * coefficient;
    }
  } else if (dColor.type.indexOf("color") !== -1) {
    for (let i = 0; i < 3; i += 1) {
      dColor.values[i] =
        +dColor.values[i] + (1 - +dColor.values[i]) * coefficient;
    }
  }

  return recomposeColor(dColor);
}
