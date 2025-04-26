import type { Meta, StoryObj } from "@storybook/react"
import Paragraph from "./Paragraph"

const meta: Meta<typeof Paragraph> = {
  title: "Typography/Paragraph",
  component: Paragraph,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "Paragraph component for displaying body text with consistent styling.",
      },
    },
  },
  decorators: [(Story) => <div className="w-full"><Story /></div>],
  argTypes: {
    size: {
      control: { type: "select" },
      options: ["xs", "sm", "base", "lg", "xl", "2xl"],
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
    maxLines: {
      control: { type: "number", min: 1, max: 10 },
      description: "Maximum number of lines before truncating",
    },
    children: {
      control: "text",
      description: "Paragraph content",
    },
  },
}

export default meta
type Story = StoryObj<typeof Paragraph>

const loremIpsum =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor. Ut in nulla enim. Phasellus molestie magna non est bibendum non venenatis nisl tempor. Suspendisse dictum feugiat nisl ut dapibus. Mauris iaculis porttitor posuere. Praesent id metus massa, ut blandit odio."

export const Default: Story = {
  args: {
    children: loremIpsum,
  },
}

export const Small: Story = {
  args: {
    size: "sm",
    children: loremIpsum,
  },
}

export const Large: Story = {
  args: {
    size: "lg",
    children: loremIpsum,
  },
}

export const Muted: Story = {
  args: {
    color: "muted",
    children: loremIpsum,
  },
}

export const Centered: Story = {
  args: {
    align: "center",
    children: loremIpsum,
  },
}

export const Bold: Story = {
  args: {
    weight: "bold",
    children: loremIpsum,
  },
}

export const MaxLines: Story = {
  args: {
    maxLines: 2,
    children: loremIpsum,
  },
  parameters: {
    docs: {
      description: {
        story: "Paragraph with a maximum of 2 lines. Additional content is truncated with an ellipsis.",
      },
    },
  },
}

export const Truncated: Story = {
  args: {
    truncate: true,
    children: loremIpsum,
  },
  parameters: {
    docs: {
      description: {
        story:
          "Paragraph with truncation enabled. The text will be cut off with an ellipsis when it exceeds the container width.",
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

export const AllSizes: Story = {
  render: () => (
    <div className="space-y-4">
      <Paragraph size="xs">Extra Small: {loremIpsum.substring(0, 100)}</Paragraph>
      <Paragraph size="sm">Small: {loremIpsum.substring(0, 100)}</Paragraph>
      <Paragraph size="base">Base: {loremIpsum.substring(0, 100)}</Paragraph>
      <Paragraph size="lg">Large: {loremIpsum.substring(0, 100)}</Paragraph>
      <Paragraph size="xl">Extra Large: {loremIpsum.substring(0, 100)}</Paragraph>
      <Paragraph size="2xl">2XL: {loremIpsum.substring(0, 100)}</Paragraph>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "All paragraph sizes displayed together for comparison.",
      },
    },
  },
}
