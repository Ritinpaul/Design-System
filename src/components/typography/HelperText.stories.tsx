import type { Meta, StoryObj } from "@storybook/react"
import HelperText from "./HelperText"

const meta: Meta<typeof HelperText> = {
  title: "Typography/HelperText",
  component: HelperText,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "HelperText component for form field guidance, errors, or additional information.",
      },
    },
  },
  argTypes: {
    color: {
      control: { type: "select" },
      options: ["default", "muted", "accent", "success", "warning", "error", "info"],
      description: "Text color (overridden by error or success props)",
      table: {
        defaultValue: { summary: "muted" },
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
    error: {
      control: "boolean",
      description: "Whether the text indicates an error state",
      table: {
        defaultValue: { summary: "false" },
      },
    },
    success: {
      control: "boolean",
      description: "Whether the text indicates a success state",
      table: {
        defaultValue: { summary: "false" },
      },
    },
    children: {
      control: "text",
      description: "Helper text content",
    },
  },
}

export default meta
type Story = StoryObj<typeof HelperText>

export const Default: Story = {
  args: {
    children: "This field is optional",
  },
  decorators: [(Story) => <div className="w-full"><Story /></div>],
}

export const Error: Story = {
  args: {
    error: true,
    children: "This field is required",
  },
  decorators: [(Story) => <div className="w-full"><Story /></div>],
}

export const Success: Story = {
  args: {
    success: true,
    children: "Your input has been validated",
  },
  decorators: [(Story) => <div className="w-full"><Story /></div>],
}

export const CustomColor: Story = {
  args: {
    color: "info",
    children: "Enter your username to continue",
  },
  decorators: [(Story) => <div className="w-full"><Story /></div>],
}

export const Centered: Story = {
  args: {
    align: "center",
    children: "This text should be centered",
  },
  decorators: [(Story) => (
    <div className="w-full border border-dashed p-4">
      <Story />
    </div>
  )],
}

export const BoldWeight: Story = {
  args: {
    weight: "bold",
    children: "Bold helper text",
  },
  decorators: [(Story) => <div className="w-full"><Story /></div>],
}

export const Truncated: Story = {
  args: {
    truncate: true,
    children:
      "This is a very long helper text that will be truncated with an ellipsis when it reaches the edge of its container",
  },
  decorators: [
    (Story) => (
      <div className="w-[200px] border border-gray-200 p-2">
        <Story />
      </div>
    ),
  ],
  parameters: {
    docs: {
      description: {
        story:
          "Helper text with truncation enabled. The text will be cut off with an ellipsis when it exceeds the container width.",
      },
    },
  },
}

export const AllVariants: Story = {
  render: () => (
    <div className="space-y-4 w-full">
      <div>
        <HelperText>Default Helper Text (Muted)</HelperText>
      </div>
      <div>
        <HelperText error>Error Helper Text</HelperText>
      </div>
      <div>
        <HelperText success>Success Helper Text</HelperText>
      </div>
      <div>
        <HelperText color="info">Info Helper Text</HelperText>
      </div>
      <div>
        <HelperText color="warning">Warning Helper Text</HelperText>
      </div>
      <div>
        <HelperText weight="bold">Bold Helper Text</HelperText>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "All helper text variants displayed together for comparison.",
      },
    },
  },
}
