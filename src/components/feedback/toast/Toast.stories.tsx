"use client"

import type { Meta, StoryObj } from "@storybook/react"
import { useState } from "react"
import Toast from "./Toast"
import ToastContainer from "./ToastContainer"

const meta: Meta<typeof Toast> = {
  title: "Feedback/Toast",
  component: Toast,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "Toast component for displaying temporary notifications.",
      },
    },
  },
  argTypes: {
    title: {
      control: "text",
      description: "Toast title",
    },
    message: {
      control: "text",
      description: "Toast message",
    },
    variant: {
      control: { type: "select" },
      options: ["default", "success", "error", "warning", "info"],
      description: "Toast variant",
      table: {
        defaultValue: { summary: "default" },
      },
    },
    isVisible: {
      control: "boolean",
      description: "Whether the toast is visible",
      table: {
        defaultValue: { summary: "true" },
      },
    },
    duration: {
      control: { type: "number", min: 0 },
      description: "Auto-close duration in milliseconds (0 to disable)",
      table: {
        defaultValue: { summary: "5000" },
      },
    },
    showCloseButton: {
      control: "boolean",
      description: "Whether to show a close button",
      table: {
        defaultValue: { summary: "true" },
      },
    },
    position: {
      control: { type: "select" },
      options: ["top-right", "top-left", "bottom-right", "bottom-left", "top-center", "bottom-center"],
      description: "Toast position",
      table: {
        defaultValue: { summary: "top-right" },
      },
    },
    isDismissible: {
      control: "boolean",
      description: "Whether the toast is dismissible by clicking",
      table: {
        defaultValue: { summary: "true" },
      },
    },
    actionText: {
      control: "text",
      description: "Action button text",
    },
  },
}

export default meta
type Story = StoryObj<typeof Toast>

export const Default: Story = {
  args: {
    title: "Notification",
    message: "This is a default toast notification.",
  },
}

export const Success: Story = {
  args: {
    title: "Success",
    message: "Your changes have been saved successfully.",
    variant: "success",
  },
}

export const Error: Story = {
  args: {
    title: "Error",
    message: "There was an error processing your request.",
    variant: "error",
  },
}

export const Warning: Story = {
  args: {
    title: "Warning",
    message: "Your session will expire in 5 minutes.",
    variant: "warning",
  },
}

export const Info: Story = {
  args: {
    title: "Information",
    message: "A new version is available. Please refresh the page.",
    variant: "info",
  },
}

export const WithoutTitle: Story = {
  args: {
    message: "This is a toast notification without a title.",
  },
}

export const WithAction: Story = {
  args: {
    title: "New update available",
    message: "A new version of the application is available.",
    actionText: "Update now",
    variant: "info",
  },
  parameters: {
    docs: {
      description: {
        story: "Toast with an action button.",
      },
    },
  },
}

export const LongDuration: Story = {
  args: {
    title: "Long Duration",
    message: "This toast will stay visible for 10 seconds.",
    duration: 10000,
  },
  parameters: {
    docs: {
      description: {
        story: "Toast with a longer duration before auto-closing.",
      },
    },
  },
}

export const NeverClose: Story = {
  args: {
    title: "Persistent Toast",
    message: "This toast will not auto-close. You must click the close button.",
    duration: 0,
  },
  parameters: {
    docs: {
      description: {
        story: "Toast that never auto-closes (duration set to 0).",
      },
    },
  },
}

export const NoCloseButton: Story = {
  args: {
    title: "No Close Button",
    message: "This toast does not have a close button.",
    showCloseButton: false,
  },
}

export const NotDismissible: Story = {
  args: {
    title: "Not Dismissible",
    message: "This toast cannot be dismissed by clicking on it.",
    isDismissible: false,
  },
}

export const CustomPosition: Story = {
  args: {
    title: "Custom Position",
    message: "This toast appears at the bottom-right corner.",
    position: "bottom-right",
  },
}

export const MultipleToasts: Story = {
  render: () => {
    return (
      <ToastContainer position="top-right">
        <Toast title="Success" message="Your profile has been updated." variant="success" isVisible={true} />
        <Toast title="Information" message="You have 3 new messages." variant="info" isVisible={true} />
        <Toast title="Warning" message="Your subscription will expire soon." variant="warning" isVisible={true} />
      </ToastContainer>
    )
  },
  parameters: {
    docs: {
      description: {
        story: "Multiple toasts displayed in a container.",
      },
    },
  },
}

export const ToastManager: Story = {
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [toasts, setToasts] = useState<
      Array<{
        id: string
        variant: "default" | "success" | "error" | "warning" | "info"
        title: string
        message: string
      }>
    >([])

    const addToast = (variant: "default" | "success" | "error" | "warning" | "info") => {
      const id = Math.random().toString(36).substring(2, 9)
      const titles = {
        default: "Notification",
        success: "Success",
        error: "Error",
        warning: "Warning",
        info: "Information",
      }
      const messages = {
        default: "This is a default notification.",
        success: "Operation completed successfully.",
        error: "An error occurred. Please try again.",
        warning: "Please be cautious with this action.",
        info: "Here is some information for you.",
      }

      setToasts([
        ...toasts,
        {
          id,
          variant,
          title: titles[variant],
          message: messages[variant],
        },
      ])
    }

    const removeToast = (id: string) => {
      setToasts(toasts.filter((toast) => toast.id !== id))
    }

    return (
      <div className="space-y-4">
        <div className="flex flex-wrap gap-2">
          <button className="px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded" onClick={() => addToast("default")}>
            Add Default
          </button>
          <button className="px-4 py-2 bg-green-200 dark:bg-green-700 rounded" onClick={() => addToast("success")}>
            Add Success
          </button>
          <button className="px-4 py-2 bg-red-200 dark:bg-red-700 rounded" onClick={() => addToast("error")}>
            Add Error
          </button>
          <button className="px-4 py-2 bg-amber-200 dark:bg-amber-700 rounded" onClick={() => addToast("warning")}>
            Add Warning
          </button>
          <button className="px-4 py-2 bg-blue-200 dark:bg-blue-700 rounded" onClick={() => addToast("info")}>
            Add Info
          </button>
        </div>

        <ToastContainer position="top-right">
          {toasts.map((toast) => (
            <Toast
              key={toast.id}
              title={toast.title}
              message={toast.message}
              variant={toast.variant}
              isVisible={true}
              onClose={() => removeToast(toast.id)}
            />
          ))}
        </ToastContainer>
      </div>
    )
  },
  parameters: {
    docs: {
      description: {
        story: "Interactive toast manager demo. Click the buttons to add different types of toasts.",
      },
    },
  },
}
