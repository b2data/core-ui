import { useRef, useState } from "react";

import { Portal, PortalProps } from "./Portal";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<PortalProps> = {
  title: "Components/Portal",
  component: Portal,
  tags: ["autodocs"]
};

export default meta;

export const Base: StoryObj<PortalProps> = {
  render: (props) => {
    const [show, setShow] = useState(false);
    const container = useRef(null);

    return (
      <div>
        <button type="button" onClick={() => setShow(!show)}>
          {show ? "Unmount children" : "Mount children"}
        </button>
        <div style={{ padding: 8, margin: 8, border: "1px solid" }}>
          It looks like I will render here.
          {show ? (
            <Portal {...props} container={container.current}>
              <span>But I actually render here!</span>
            </Portal>
          ) : null}
        </div>
        <div
          style={{ padding: 8, margin: 8, border: "1px solid" }}
          ref={container}
        />
      </div>
    );
  }
};
