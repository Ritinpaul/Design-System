import type { Meta, StoryObj } from "@storybook/react"
import Select from "./Select"

const meta: Meta<typeof Select> = {
  title: "Data Entry/Select",
  component: Select,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "Select component for selecting from a list of options.",
      },
    },
  },
  argTypes: {
    label: {
      control: "text",
      description: "Select label",
    },
    helperText: {
      control: "text",
      description: "Helper text displayed below the select",
    },
    error: {
      control: "text",
      description: "Error message displayed below the select",
    },
    success: {
      control: "text",
      description: "Success message displayed below the select",
    },
    size: {
      control: { type: "select" },
      options: ["sm", "md", "lg"],
      description: "Select size",
      table: {
        defaultValue: { summary: "md" },
      },
    },
    variant: {
      control: { type: "select" },
      options: ["default", "filled", "outline"],
      description: "Select variant",
      table: {
        defaultValue: { summary: "default" },
      },
    },
    required: {
      control: "boolean",
      description: "Whether the select is required",
      table: {
        defaultValue: { summary: "false" },
      },
    },
    disabled: {
      control: "boolean",
      description: "Whether the select is disabled",
      table: {
        defaultValue: { summary: "false" },
      },
    },
    placeholder: {
      control: "text",
      description: "Placeholder text (displayed as a disabled option)",
    },

    options: {
      control: "object",
      description: "Options for the select",
    },
  },
}

export default meta
type Story = StoryObj<typeof Select>

const defaultOptions = [
  { value: "option1", label: "Option 1" },
  { value: "option2", label: "Option 2" },
  { value: "option3", label: "Option 3" },
  { value: "option4", label: "Option 4" },
]

export const Default: Story = {
  args: {
    label: "Select an option",
    options: defaultOptions,
    placeholder: "Select an option",
  },
}

export const WithHelperText: Story = {
  args: {
    label: "Select a country",
    options: [
      { value: "us", label: "United States" },
      { value: "ca", label: "Canada" },
      { value: "mx", label: "Mexico" },
      { value: "uk", label: "United Kingdom" },
    ],
    placeholder: "Select a country",
    helperText: "Please select your country of residence.",
  },
}

export const WithError: Story = {
  args: {
    label: "Select a country",
    options: [
      { value: "us", label: "United States" },
      { value: "ca", label: "Canada" },
      { value: "mx", label: "Mexico" },
      { value: "uk", label: "United Kingdom" },
    ],
    placeholder: "Select a country",
    error: "Please select a country to continue.",
  },
}

export const WithSuccess: Story = {
  args: {
    label: "Select a country",
    options: [
      { value: "us", label: "United States" },
      { value: "ca", label: "Canada" },
      { value: "mx", label: "Mexico" },
      { value: "uk", label: "United Kingdom" },
    ],
    defaultValue: "us",
    success: "Your selection has been validated!",
  },
  parameters: {
    docs: {
      description: {
        story: "Select with success message.",
      },
    },
  },
}

export const Required: Story = {
  args: {
    label: "Select a country",
    options: [
      { value: "us", label: "United States" },
      { value: "ca", label: "Canada" },
      { value: "mx", label: "Mexico" },
      { value: "uk", label: "United Kingdom" },
    ],
    placeholder: "Select a country",
    required: true,
  },
}

export const Disabled: Story = {
  args: {
    label: "Select a country",
    options: [
      { value: "us", label: "United States" },
      { value: "ca", label: "Canada" },
      { value: "mx", label: "Mexico" },
      { value: "uk", label: "United Kingdom" },
    ],
    placeholder: "Select a country",
    disabled: true,
  },
}

export const WithDisabledOptions: Story = {
  args: {
    label: "Select a country",
    options: [
      { value: "us", label: "United States" },
      { value: "ca", label: "Canada", disabled: true },
      { value: "mx", label: "Mexico" },
      { value: "uk", label: "United Kingdom", disabled: true },
    ],
    placeholder: "Select a country",
  },
  parameters: {
    docs: {
      description: {
        story: "Select with some disabled options.",
      },
    },
  },
}

export const Small: Story = {
  args: {
    label: "Select an option",
    options: defaultOptions,
    placeholder: "Select an option",
    size: "sm",
  },
}

export const Large: Story = {
  args: {
    label: "Select an option",
    options: defaultOptions,
    placeholder: "Select an option",
    size: "lg",
  },
}

export const FilledVariant: Story = {
  args: {
    label: "Select an option",
    options: defaultOptions,
    placeholder: "Select an option",
    variant: "filled",
  },
}

export const OutlineVariant: Story = {
  args: {
    label: "Select an option",
    options: defaultOptions,
    placeholder: "Select an option",
    variant: "outline",
  },
}

export const AllVariants: Story = {
  render: () => (
    <div className="space-y-6 w-full">
      <Select label="Default" options={defaultOptions} placeholder="Select an option" />
      <Select
        label="With helper text"
        options={defaultOptions}
        placeholder="Select an option"
        helperText="This is a helper text"
      />
      <Select
        label="With error"
        options={defaultOptions}
        placeholder="Select an option"
        error="This field has an error"
      />
      <Select label="With success" options={defaultOptions} defaultValue="option1" success="This field is valid" />
      <Select label="Required" options={defaultOptions} placeholder="Select an option" required />
      <Select label="Disabled" options={defaultOptions} placeholder="Select an option" disabled />
      <Select label="Small size" options={defaultOptions} placeholder="Select an option" size="sm" />
      <Select label="Large size" options={defaultOptions} placeholder="Select an option" size="lg" />
      <Select label="Filled variant" options={defaultOptions} placeholder="Select an option" variant="filled" />
      <Select label="Outline variant" options={defaultOptions} placeholder="Select an option" variant="outline" />
      
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "All Select variants displayed together for comparison.",
      },
    },
  },
}
