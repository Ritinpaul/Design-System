import type { Meta, StoryObj } from "@storybook/react";
import TextInput from "./TextInput";
import { Search, Calendar, Mail, Lock } from "lucide-react";

const meta: Meta<typeof TextInput> = {
  title: "Data Entry/TextInput",
  component: TextInput,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "TextInput component for collecting user input.",
      },
    },
  },
  argTypes: {
    label: { control: "text" },
    helperText: { control: "text" },
    error: { control: "text" },
    success: { control: "text" },
    size: {
      control: { type: "select" },
      options: ["sm", "md", "lg"],
    },
    variant: {
      control: { type: "select" },
      options: ["default", "filled", "outline"],
    },
    required: { control: "boolean" },
    disabled: { control: "boolean" },
    placeholder: { control: "text" },
    type: {
      control: { type: "select" },
      options: ["text", "email", "password", "number", "tel", "url"],
    },
    startIcon: { table: { disable: true } },
    endIcon: { table: { disable: true } },  
  },
};

export default meta;
type Story = StoryObj<typeof TextInput>;

export const Default: Story = {
  args: {
    label: "Username",
    placeholder: "Enter your username",
  },
};

export const WithHelperText: Story = {
  args: {
    label: "Email",
    placeholder: "Enter your email",
    helperText: "We will never share your email with anyone else.",
    type: "email",
  },
};

export const WithError: Story = {
  args: {
    label: "Password",
    placeholder: "Enter your password",
    type: "password",
    error: "Password must be at least 8 characters long.",
  },
};

export const WithSuccess: Story = {
  args: {
    label: "Username",
    placeholder: "Enter your username",
    value: "johndoe",
    success: "Username is available!",
  },
};

export const Required: Story = {
  args: {
    label: "Email",
    placeholder: "Enter your email",
    required: true,
    type: "email",
  },
};

export const Disabled: Story = {
  args: {
    label: "Username",
    placeholder: "Enter your username",
    disabled: true,
    value: "johndoe",
  },
};

export const Small: Story = {
  args: {
    label: "Username",
    placeholder: "Enter your username",
    size: "sm",
  },
};

export const Large: Story = {
  args: {
    label: "Username",
    placeholder: "Enter your username",
    size: "lg",
  },
};

export const FilledVariant: Story = {
  args: {
    label: "Username",
    placeholder: "Enter your username",
    variant: "filled",
  },
};

export const OutlineVariant: Story = {
  args: {
    label: "Username",
    placeholder: "Enter your username",
    variant: "outline",
  },
};

export const WithStartIcon: Story = {
  render: (args) => (
    <TextInput
      {...args}
      startIcon={<Search className="h-5 w-5 text-gray-400" />}
    />
  ),
  args: {
    label: "Search",
    placeholder: "Search...",
  },
};

export const WithEndIcon: Story = {
  render: (args) => (
    <TextInput
      {...args}
      endIcon={<Calendar className="h-5 w-5 text-gray-400" />}
    />
  ),
  args: {
    label: "Date",
    placeholder: "Select date",
  },
};

export const WithLabelAndIcon: Story = {
  render: (args) => (
    <TextInput
      {...args}
      startIcon={<Mail className="h-5 w-5 text-gray-400" />}
    />
  ),
  args: {
    label: "Email",
    placeholder: "Enter your email",
  },
};

export const PasswordInput: Story = {
  render: (args) => (
    <TextInput
      {...args}
      startIcon={<Lock className="h-5 w-5 text-gray-400" />}
    />
  ),
  args: {
    label: "Password",
    placeholder: "Enter your password",
    type: "password",
  },
};

export const AllVariants: Story = {
  render: () => (
    <div className="space-y-6" style={{ width: "300px" }}>
      <TextInput label="Default" placeholder="Default input" />
      <TextInput label="Helper" placeholder="Enter" helperText="Helper text" />
      <TextInput label="Error" placeholder="Wrong input" error="Error message" />
      <TextInput label="Success" placeholder="Good input" success="Success!" />
      <TextInput label="Required" placeholder="Must fill" required />
      <TextInput label="Disabled" placeholder="Can't edit" disabled />
      <TextInput label="Small" placeholder="Small input" size="sm" />
      <TextInput label="Large" placeholder="Large input" size="lg" />
      <TextInput label="Filled" placeholder="Filled input" variant="filled" />
      <TextInput label="Outline" placeholder="Outline input" variant="outline" />
      <TextInput label="WithStartIcon" placeholder="hello" />
      <TextInput
        label="WithStartIcon"
        placeholder="hello"
        startIcon={<Search className="h-5 w-5 text-gray-400" />}
      />
      <TextInput
        label="WithEndIcon"
        placeholder="Select date"
        endIcon={<Calendar className="h-5 w-5 text-gray-400" />}
      />
      <TextInput
        label="Email"
        placeholder="Enter your email"
        type="email"
        startIcon={<Mail className="h-5 w-5 text-gray-400" />}
      />
      <TextInput
        label="Password"
        placeholder="Enter your password"
        type="password"
        startIcon={<Lock className="h-5 w-5 text-gray-400" />}
      />
    </div>
  ),
};
