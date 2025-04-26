import type { Meta, StoryObj } from "@storybook/react"
import Caption from "./Caption"

const meta: Meta<typeof Caption> = {
  title: "Typography/Caption",
  component: Caption,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "Caption component for small, supplementary text.",
      },
    },
  },
  decorators: [(Story) => <div className="w-full"><Story /></div>],
  argTypes: {
    size: {
      control: { type: "select" },
      options: ["xs", "sm", "base"],
      description: "Text size",
      table: {
        defaultValue: { summary: "base" },
      },
    },
    color: {
      control: { type: "select" },
      options: ["default", "muted", "accent", "success", "warning", "error", "info"],
      description: "Text color",
      table: {
        defaultValue: { summary: "muted" },
      },
    },
    align: {
      control: { type: "select" },
      options: ["left", "center", "right", "justify"],
      description: "Text alignment",
      table: {
        defaultValue: { summary: "center" },
      },
    },
    weight: {
      control: { type: "select" },
      options: ["light", "normal", "medium", "semibold", "bold"],
      description: "Font weight",
      table: {
        defaultValue: { summary: "normal" },
      },
    },
    truncate: {
      control: "boolean",
      description: "Whether to truncate text with ellipsis",
      table: {
        defaultValue: { summary: "false" },
      },
    },
    children: {
      control: "text",
      description: "Caption content",
    },
  },
}

export default meta
type Story = StoryObj<typeof Caption>

export const Default: Story = {
  args: {
    children: "This is a caption text",
  },
}

export const Small: Story = {
  args: {
    size: "sm",
    children: "Small caption text",
  },
}

export const DefaultColor: Story = {
  args: {
    color: "default",
    children: "Default color caption",
  },
}

export const AccentColor: Story = {
  args: {
    color: "accent",
    children: "Accent color caption",
  },
}

export const ErrorColor: Story = {
  args: {
    color: "error",
    children: "Error color caption",
  },
}

export const Centered: Story = {
  args: {
    align: "center",
    children: "Centered caption",
  },
}

export const BoldWeight: Story = {
  args: {
    weight: "bold",
    children: "Bold caption",
  },
}

export const Truncated: Story = {
  args: {
    truncate: true,
    children:
      "This is a very long caption that will be truncated with an ellipsis when it reaches the edge of its container",
  },
  parameters: {
    docs: {
      description: {
        story:
          "Caption with truncation enabled. The text will be cut off with an ellipsis when it exceeds the container width.",
      },
    },
  },
  decorators: [
    (Story) => (
      <div style={{ width: "200px" }}>
        <Story />
      </div>
    ),
  ],
}

export const AllVariants: Story = {
  render: () => (
    <div className="space-y-4">
      <div>
        <Caption>Default Caption</Caption>
      </div>
      <div>
        <Caption size="sm">Small Caption</Caption>
      </div>
      <div>
        <Caption color="default">Default Color Caption</Caption>
      </div>
      <div>
        <Caption color="accent">Accent Color Caption</Caption>
      </div>
      <div>
        <Caption color="success">Success Color Caption</Caption>
      </div>
      <div>
        <Caption color="warning">Warning Color Caption</Caption>
      </div>
      <div>
        <Caption color="error">Error Color Caption</Caption>
      </div>
      <div>
        <Caption color="info">Info Color Caption</Caption>
      </div>
      <div>
        <Caption weight="bold">Bold Caption</Caption>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "All caption variants displayed together for comparison.",
      },
    },
  },
}
