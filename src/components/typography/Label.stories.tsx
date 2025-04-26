import type { Meta, StoryObj } from "@storybook/react"
import Label from "./Label"

const meta: Meta<typeof Label> = {
  title: "Typography/Label",
  component: Label,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "Label component for form elements with consistent styling.",
      },
    },
  },
  decorators: [(Story) => <div className="w-full"><Story /></div>], 
  argTypes: {
    size: {
      control: { type: "select" },
      options: ["xs", "sm", "base", "lg"],
      description: "Text size",
      table: {
        defaultValue: { summary: "sm" },
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
      options: ["left", "center", "right"],
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
        defaultValue: { summary: "medium" },
      },
    },
    truncate: {
      control: "boolean",
      description: "Whether to truncate text with ellipsis",
      table: {
        defaultValue: { summary: "false" },
      },
    },
    required: {
      control: "boolean",
      description: "Whether the label is for a required field",
      table: {
        defaultValue: { summary: "false" },
      },
    },
    disabled: {
      control: "boolean",
      description: "Whether the label is disabled",
      table: {
        defaultValue: { summary: "false" },
      },
    },
    htmlFor: {
      control: "text",
      description: "HTML for attribute to associate with form element",
    },
    children: {
      control: "text",
      description: "Label content",
    },
  },
}

export default meta
type Story = StoryObj<typeof Label>

export const Default: Story = {
  args: {
    children: "Form Label",
  },
  
}

export const Required: Story = {
  args: {
    required: true,
    children: "Required Field",
  },
  
}

export const Disabled: Story = {
  args: {
    disabled: true,
    children: "Disabled Label",
  },
  
}

export const WithHtmlFor: Story = {
  args: {
    htmlFor: "email-input",
    children: "Email Address",
  },
  parameters: {
    docs: {
      description: {
        story: "Label with htmlFor attribute to associate with a form element.",
      },
    },
  },
  
}

export const LargeSize: Story = {
  args: {
    size: "lg",
    children: "Large Label",
  },
  
}

export const AccentColor: Story = {
  args: {
    color: "accent",
    children: "Accent Color Label",
  },
  
}

export const BoldWeight: Story = {
  args: {
    weight: "bold",
    children: "Bold Label",
  },
  
}

export const AllVariants: Story = {
  render: () => (
    <div className="space-y-4 w-full">
      <Label>Default Label</Label>
      <Label required>Required Label</Label>
      <Label disabled>Disabled Label</Label>
      <Label size="xs">Extra Small Label</Label>
      <Label size="sm">Small Label</Label>
      <Label size="base">Base Label</Label>
      <Label size="lg">Large Label</Label>
      <Label color="accent">Accent Label</Label>
      <Label color="error">Error Label</Label>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "All label variants displayed together for comparison.",
      },
    },
  },
}
