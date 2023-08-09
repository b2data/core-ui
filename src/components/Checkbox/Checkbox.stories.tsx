import { useState } from "react";

import { FavoriteBorderIcon, FavoriteIcon } from "src/icons";
import { Preview } from ".storybook/components";

import { FormControlLabel } from "../FormControlLabel";

import { Checkbox, CheckboxProps } from "./Checkbox";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<CheckboxProps> = {
  title: "Components/Inputs/Checkbox",
  component: Checkbox,
  tags: ["autodocs"]
};

export default meta;

export const Base: StoryObj<CheckboxProps> = {
  render: (props) => <Checkbox {...props} />
};

export const Variants: StoryObj<CheckboxProps> = {
  render: (props) => (
    <Preview>
      <Checkbox {...props} defaultChecked />
      <Checkbox {...props} />
      <Checkbox {...props} disabled />
      <Checkbox {...props} disabled checked />
    </Preview>
  )
};

export const Labels: StoryObj<CheckboxProps> = {
  render: (props) => (
    <Preview>
      <FormControlLabel label="Label" control={<Checkbox {...props} />} />
      <FormControlLabel
        label="Required"
        required
        control={<Checkbox {...props} />}
      />
      <FormControlLabel
        label="Disabled"
        disabled
        control={<Checkbox {...props} />}
      />
    </Preview>
  )
};

export const Sizes: StoryObj<CheckboxProps> = {
  render: (props) => (
    <Preview>
      <Checkbox {...props} size="small" />
      <Checkbox {...props} size="medium" />
    </Preview>
  )
};

export const Icons: StoryObj<CheckboxProps> = {
  args: {
    icon: <FavoriteBorderIcon />,
    checkedIcon: <FavoriteIcon />,
    color: "error"
  }
};

export const Colors: StoryObj<CheckboxProps> = {
  args: { checked: true },
  render: (props) => (
    <Preview>
      <Checkbox {...props} color="primary" />
      <Checkbox {...props} color="secondary" />
      <Checkbox {...props} color="default" />
      <Checkbox {...props} color="success" />
      <Checkbox {...props} color="error" />
      <Checkbox {...props} color="info" />
      <Checkbox {...props} color="warning" />
    </Preview>
  )
};

export const Indeterminate: StoryObj<CheckboxProps> = {
  render: (props) => {
    const [checked, setChecked] = useState([true, false]);

    const handleChange1 = (event: React.ChangeEvent<HTMLInputElement>) => {
      setChecked([event.target.checked, event.target.checked]);
    };

    const handleChange2 = (event: React.ChangeEvent<HTMLInputElement>) => {
      setChecked([event.target.checked, checked[1]]);
    };

    const handleChange3 = (event: React.ChangeEvent<HTMLInputElement>) => {
      setChecked([checked[0], event.target.checked]);
    };

    return (
      <div>
        <FormControlLabel
          label="Parent"
          control={
            <Checkbox
              {...props}
              checked={checked[0] && checked[1]}
              indeterminate={checked[0] !== checked[1]}
              onChange={handleChange1}
            />
          }
        />
        <div
          style={{ display: "flex", flexDirection: "column", marginLeft: 16 }}
        >
          <FormControlLabel
            label="Child 1"
            control={
              <Checkbox
                {...props}
                checked={checked[0]}
                onChange={handleChange2}
              />
            }
          />
          <FormControlLabel
            label="Child 2"
            control={
              <Checkbox
                {...props}
                checked={checked[1]}
                onChange={handleChange3}
              />
            }
          />
        </div>
      </div>
    );
  }
};
