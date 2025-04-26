"use client";

import { useState } from "react";
import {
  Heading,
  Paragraph,
  Label,
  Caption,
  HelperText,
} from "./components/typography/index";
import TextInput from "./components/data-entry/text-input/TextInput";
import Select from "./components/data-entry/select/Select";
import { Toast, ToastContainer } from "./components/feedback/toast/index";

function App() {
  const [toasts, setToasts] = useState<
    Array<{
      id: string;
      variant: "default" | "success" | "error" | "warning" | "info";
      title: string;
      message: string;
    }>
  >([]);

  const addToast = (
    variant: "default" | "success" | "error" | "warning" | "info"
  ) => {
    const id = Math.random().toString(36).substring(2, 9);
    const titles = {
      default: "Notification",
      success: "Success",
      error: "Error",
      warning: "Warning",
      info: "Information",
    };
    const messages = {
      default: "This is a default notification.",
      success: "Operation completed successfully.",
      error: "An error occurred. Please try again.",
      warning: "Please be cautious with this action.",
      info: "Here is some information for you.",
    };

    setToasts([
      ...toasts,
      {
        id,
        variant,
        title: titles[variant],
        message: messages[variant],
      },
    ]);
  };

  const removeToast = (id: string) => {
    setToasts(toasts.filter((toast) => toast.id !== id));
  };

  return (
    // Typography
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-8">
      <div className="max-w-4xl mx-auto">
        <Heading level={1} className="mb-8">
          Design System Demo
        </Heading>

        <section className="mb-12">
          <Heading level={2} className="mb-4">
            Typography
          </Heading>
          <div className="grid gap-6 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
            <div>
              <Heading level={1}>Heading 1</Heading>
              <Heading level={2}>Heading 2</Heading>
              <Heading level={3}>Heading 3</Heading>
              <Heading level={4}>Heading 4</Heading>
              <Heading level={5}>Heading 5</Heading>
              <Heading level={6}>Heading 6</Heading>
            </div>

            <div>
              <Paragraph className="mb-2">
                This is a default paragraph with normal text. Lorem ipsum dolor
                sit amet, consectetur adipiscing elit. Nullam in dui mauris.
              </Paragraph>
              <Paragraph size="sm" className="mb-2">
                This is a small paragraph with smaller text.
              </Paragraph>
              <Paragraph size="lg" className="mb-2">
                This is a large paragraph with larger text.
              </Paragraph>
              <Paragraph weight="bold" className="mb-2">
                This is a bold paragraph.
              </Paragraph>
              <Paragraph color="muted" className="mb-2">
                This is a muted paragraph.
              </Paragraph>
              <Paragraph color="accent" className="mb-2">
                This is an accent paragraph.
              </Paragraph>
            </div>

            <div className="space-y-4">
              <Heading level={3} size="xl" className="mb-4">
                Labels, Captions & Helper Text
              </Heading>

              <div className="space-y-1">
                <Label htmlFor="example-input">This is a label</Label>
                <input
                  id="example-input"
                  type="text"
                  className="border rounded px-2 py-1 w-full max-w-sm"
                />
                <HelperText>
                  Default helper text provides additional context
                </HelperText>
              </div>

              <div className="space-y-1">
                <Label htmlFor="required-input">
                  This is a required label{" "}
                  <span className="text-red-500">*</span>
                </Label>
                <input
                  id="required-input"
                  type="text"
                  required
                  className="border rounded px-2 py-1 w-full max-w-sm"
                />
                <HelperText>This field is required</HelperText>
              </div>

              <div className="space-y-1 opacity-70 cursor-not-allowed">
                <Label htmlFor="disabled-input" className="cursor-not-allowed">
                  This is a disabled label
                </Label>
                <input
                  id="disabled-input"
                  type="text"
                  disabled
                  className="border rounded px-2 py-1 w-full max-w-sm bg-gray-100"
                />
                <HelperText>This input is disabled</HelperText>
              </div>

              <div className="space-y-1">
                <Label>Success State</Label>
                <input
                  type="text"
                  value="Correct value"
                  readOnly
                  className="border border-green-500 rounded px-2 py-1 w-full max-w-sm"
                />
                <HelperText>Success helper text for valid input</HelperText>
              </div>

              <div className="space-y-1">
                <Label>Error State</Label>
                <input
                  type="text"
                  value="Incorrect value"
                  readOnly
                  className="border border-red-500 rounded px-2 py-1 w-full max-w-sm"
                />
                <HelperText>Error helper text indicates a problem</HelperText>
              </div>

              <div className="mt-6">
                <Caption>
                  This is a caption text that can be used for image captions or
                  smaller notes.
                </Caption>
              </div>
            </div>

            <div>
              <Caption className="mb-2">This is a caption text</Caption>
              <Caption size="sm" className="mb-2">
                This is a small caption text
              </Caption>
              <Caption color="accent" className="mb-2">
                This is an accent caption
              </Caption>
            </div>

            <div>
              <HelperText className="mb-2">This is a helper text</HelperText>
              <HelperText error className="mb-2">
                This is an error helper text
              </HelperText>
              <HelperText success className="mb-2">
                This is a success helper text
              </HelperText>
            </div>
          </div>
        </section>

        {/*text-input */}
        <section className="mb-12">
          <Heading level={2} className="mb-4">
            Data Entry
          </Heading>
          <div className="grid gap-6 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <TextInput label="Default Input" placeholder="Enter text" />
              </div>

              <div>
                <TextInput
                  label="Required Input"
                  placeholder="Enter text"
                  required
                />
              </div>

              <div>
                <TextInput
                  label="With Helper Text"
                  placeholder="Enter text"
                  helperText="This is a helpful message."
                />
              </div>

              <div>
                <TextInput
                  label="With Error"
                  placeholder="Enter text"
                  error="This field has an error."
                />
              </div>

              <div>
                <TextInput
                  label="With Success"
                  placeholder="Enter text"
                  success="This field is valid."
                />
              </div>

              <div>
                <TextInput
                  label="Disabled Input"
                  placeholder="Enter text"
                  disabled
                />
              </div>

              <div>
                <Select
                  label="Default Select"
                  placeholder="Select an option"
                  options={[
                    { value: "option1", label: "Option 1" },
                    { value: "option2", label: "Option 2" },
                    { value: "option3", label: "Option 3" },
                  ]}
                />
              </div>

              <div>
                <Select
                  label="Required Select"
                  placeholder="Select an option"
                  options={[
                    { value: "option1", label: "Option 1" },
                    { value: "option2", label: "Option 2" },
                    { value: "option3", label: "Option 3" },
                  ]}
                  required
                />
              </div>

              <div>
                <Select
                  label="With Error"
                  placeholder="Select an option"
                  options={[
                    { value: "option1", label: "Option 1" },
                    { value: "option2", label: "Option 2" },
                    { value: "option3", label: "Option 3" },
                  ]}
                  error="Please select an option."
                />
              </div>

              <div>
                <Select
                  label="Disabled Select"
                  placeholder="Select an option"
                  options={[
                    { value: "option1", label: "Option 1" },
                    { value: "option2", label: "Option 2" },
                    { value: "option3", label: "Option 3" },
                  ]}
                  disabled
                />
              </div>
            </div>
          </div>
        </section>
        {/*Feedback*/ }
        <section className="mb-12">
          <Heading level={2} className="mb-4">
            Feedback
          </Heading>
          <div className="grid gap-6 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
            <div>
              <Heading level={3} className="mb-4">
                Toast Notifications
              </Heading>
              <div className="flex flex-wrap gap-2">
                <button
                  className="px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded"
                  onClick={() => addToast("default")}
                >
                  Default Toast
                </button>
                <button
                  className="px-4 py-2 bg-green-200 dark:bg-green-700 rounded"
                  onClick={() => addToast("success")}
                >
                  Success Toast
                </button>
                <button
                  className="px-4 py-2 bg-red-200 dark:bg-red-700 rounded"
                  onClick={() => addToast("error")}
                >
                  Error Toast
                </button>
                <button
                  className="px-4 py-2 bg-amber-200 dark:bg-amber-700 rounded"
                  onClick={() => addToast("warning")}
                >
                  Warning Toast
                </button>
                <button
                  className="px-4 py-2 bg-blue-200 dark:bg-blue-700 rounded"
                  onClick={() => addToast("info")}
                >
                  Info Toast
                </button>
              </div>
            </div>
          </div>
        </section>
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
  );
}

export default App;
