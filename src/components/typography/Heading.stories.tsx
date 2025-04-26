import type { Meta, StoryObj } from "@storybook/react"
import Heading from "./Heading"

const meta: Meta<typeof Heading> = {
  title: "Typography/Heading",
  component: Heading,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "Heading component for displaying h1-h6 elements with consistent styling.",
      },
    },
  },
  decorators: [(Story) => <div className="w-full"><Story /></div>],
  argTypes: {
    level: {
      control: { type: "select" },
      options: [1, 2, 3, 4, 5, 6],
      description: "HTML heading level (h1-h6)",
      table: {
        defaultValue: { summary: "2" },
      },
    },
    size: {
      control: { type: "select" },
      options: ["xs", "sm", "base", "lg", "xl", "2xl", "3xl", "4xl", "5xl", "6xl"],
      description: "Text size (overrides default size based on level)",
    },
    color: {
      control: { type: "select" },
      options: ["default", "muted", "accent", "success", "warning", "error", "info"],
      description: "Text color",
      table: {
        defaultValue: { summary: "default" },
      },
    },
    align: {
      control: { type: "select" },
      options: ["left", "center", "right", "justify"],
      description: "Text alignment",
      table: {
        defaultValue: { summary: "left" },
      },
    },
    weight: {
      control: { type: "select" },
      options: ["light", "normal", "medium", "semibold", "bold"],
      description: "Font weight",
      table: {
        defaultValue: { summary: "bold" },
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
      description: "Heading content",
    },
  },
}

export default meta
type Story = StoryObj<typeof Heading>

export const H1: Story = {
  args: {
    level: 1,
    children: "Heading Level 1",
  },
}

export const H2: Story = {
  args: {
    level: 2,
    children: "Heading Level 2",
  },
}

export const H3: Story = {
  args: {
    level: 3,
    children: "Heading Level 3",
  },
}

export const H4: Story = {
  args: {
    level: 4,
    children: "Heading Level 4",
  },
}

export const H5: Story = {
  args: {
    level: 5,
    children: "Heading Level 5",
  },
}

export const H6: Story = {
  args: {
    level: 6,
    children: "Heading Level 6",
  },
}

export const CustomSize: Story = {
  args: {
    level: 2,
    size: "5xl",
    children: "Custom Size Heading",
  },
}

export const AccentColor: Story = {
  args: {
    level: 2,
    color: "accent",
    children: "Accent Color Heading",
  },
}

export const Centered: Story = {
  args: {
    level: 2,
    align: "center",
    children: "Centered Heading",
  },
}

export const LightWeight: Story = {
  args: {
    level: 2,
    weight: "light",
    children: "Light Weight Heading",
  },
}

export const Truncated: Story = {
  args: {
    level: 2,
    truncate: true,
    children:
      "This is a very long heading that will be truncated with an ellipsis when it reaches the edge of its container",
  },
  parameters: {
    docs: {
      description: {
        story:
          "Heading with truncation enabled. The text will be cut off with an ellipsis when it exceeds the container width.",
      },
    },
  },
  decorators: [
    (Story) => (
      <div style={{ width: "300px" }}>
        <Story />
      </div>
    ),
  ],
}

export const AllHeadings: Story = {
  render: () => (
    <div className="space-y-4">
      <Heading level={1}>Heading Level 1</Heading>
      <Heading level={2}>Heading Level 2</Heading>
      <Heading level={3}>Heading Level 3</Heading>
      <Heading level={4}>Heading Level 4</Heading>
      <Heading level={5}>Heading Level 5</Heading>
      <Heading level={6}>Heading Level 6</Heading>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "All heading levels displayed together for comparison.",
      },
    },
  },
}
