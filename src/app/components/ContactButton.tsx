"use client";

import { AnimatePresence, motion } from "motion/react";
import React from "react";
import { cx } from "class-variance-authority";
import { useClickOutside } from "@/app/hooks/use-click-outside";
import { Mail } from "lucide-react";

const SPEED = 1;

interface ContactContext {
  showForm: boolean;
  success: boolean;
  openForm: () => void;
  closeForm: () => void;
}

const ContactContext = React.createContext({} as ContactContext);
const useContact = () => React.useContext(ContactContext);

export function ContactButton() {
  const rootRef = React.useRef<HTMLDivElement>(null);

  const nameRef = React.useRef<HTMLInputElement | null>(null);
  const [showForm, setShowForm] = React.useState(false);
  const [success, setSuccess] = React.useState(false);

  function closeForm() {
    setShowForm(false);
    nameRef.current?.blur();
  }

  function openForm() {
    setShowForm(true);
    setTimeout(() => {
      nameRef.current?.focus();
    });
  }

  function onFormSuccess() {
    closeForm();
    setSuccess(true);
    setTimeout(() => {
      setSuccess(false);
    }, 1500);
  }

  useClickOutside(rootRef, closeForm);

  const context = React.useMemo(
    () => ({
      showForm,
      success,
      openForm,
      closeForm,
    }),
    [showForm, success]
  );

  return (
    <motion.div
      data-contact
      ref={rootRef}
      className={cx(
        "bg-slate-800 relative flex flex-col items-center z-10 shadow-xl overflow-hidden"
      )}
      initial={false}
      animate={{
        width: showForm ? FORM_WIDTH : "auto",
        height: showForm ? FORM_HEIGHT : 56,
        borderRadius: showForm ? 14 : 28,
      }}
      transition={{
        type: "spring",
        stiffness: 550 / SPEED,
        damping: 45,
        mass: 0.7,
        delay: showForm ? 0 : 0.08,
      }}
    >
      <ContactContext.Provider value={context}>
        <Button />
        <Form ref={nameRef} onSuccess={onFormSuccess} />
      </ContactContext.Provider>
    </motion.div>
  );
}

///////////////////////////////////////////////////////////////////////////////////////

function Button() {
  const { success, showForm, openForm } = useContact();
  
  if (showForm) {
    return (
      <div className="flex items-center justify-between w-full px-4 h-14">
        <span className="text-[#E8E580] font-medium">Get in Touch</span>
      </div>
    );
  }
  
  return (
    <button
      className="flex items-center justify-center gap-2 px-8 h-14 rounded-full hover:scale-105 active:scale-95 transition-transform whitespace-nowrap"
      onClick={openForm}
    >
      <span className="text-[#E8E580] font-medium">Get in Touch</span>
      <Mail className="w-5 h-5 text-[#E8E580]" />
    </button>
  );
}

///////////////////////////////////////////////////////////////////////////////////////

const FORM_WIDTH = 400;
const FORM_HEIGHT = 280;

const Form = React.forwardRef<
  HTMLInputElement,
  {
    onSuccess: () => void;
  }
>(({ onSuccess }, ref) => {
  const { closeForm, showForm } = useContact();
  const submitRef = React.useRef<HTMLButtonElement>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    try {
      const response = await fetch("https://formspree.io/f/xkojonqa", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        onSuccess();
        e.currentTarget.reset();
      }
    } catch (error) {
      console.error("Form submission error:", error);
    }
  }

  function onKeyDown(e: React.KeyboardEvent) {
    if (e.key === "Escape") {
      closeForm();
    }
    if (e.key === "Enter" && e.metaKey) {
      e.preventDefault();
      submitRef.current?.click();
    }
  }

  return (
    <form
      onSubmit={onSubmit}
      className="absolute bottom-0"
      style={{
        width: FORM_WIDTH,
        height: FORM_HEIGHT,
        pointerEvents: showForm ? "all" : "none",
      }}
    >
      <AnimatePresence>
        {showForm && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              type: "spring",
              stiffness: 550 / SPEED,
              damping: 45,
              mass: 0.7,
            }}
            className="p-4 flex flex-col h-full gap-3"
          >
            <div className="flex justify-end items-center">
              <button
                type="submit"
                ref={submitRef}
                className="flex items-center gap-1 text-sm text-slate-400 bg-transparent select-none rounded-lg cursor-pointer px-2 py-1 hover:text-slate-300 transition-colors"
              >
                <Kbd>⌘</Kbd>
                <Kbd className="w-fit">Enter</Kbd>
              </button>
            </div>
            <input
              ref={ref}
              placeholder="Your name"
              name="name"
              className="w-full text-base outline-0 px-4 py-3 bg-slate-700 text-white placeholder:text-slate-400 rounded-lg focus:ring-2 focus:ring-[#E8E580] transition-all"
              required
              onKeyDown={onKeyDown}
              spellCheck={false}
            />
            <input
              placeholder="Your email"
              name="email"
              type="email"
              className="w-full text-base outline-0 px-4 py-3 bg-slate-700 text-white placeholder:text-slate-400 rounded-lg focus:ring-2 focus:ring-[#E8E580] transition-all"
              required
              onKeyDown={onKeyDown}
              spellCheck={false}
            />
            <textarea
              placeholder="What's on your mind?"
              name="message"
              className="resize-none w-full flex-1 text-base outline-0 px-4 py-3 bg-slate-700 text-white placeholder:text-slate-400 rounded-lg focus:ring-2 focus:ring-[#E8E580] transition-all"
              required
              onKeyDown={onKeyDown}
              spellCheck={false}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </form>
  );
});

Form.displayName = "Form";

///////////////////////////////////////////////////////////////////////////////////////

const LOGO_SPRING = {
  type: "spring",
  stiffness: 350 / SPEED,
  damping: 35,
} as const;

function IconCheck() {
  return (
    <svg
      width="16px"
      height="16px"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      color="black"
    >
      <path
        d="M5 13L9 17L19 7"
        stroke="black"
        strokeWidth="2px"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function Kbd({
  children,
  className,
}: {
  children: string;
  className?: string;
}) {
  return (
    <kbd
      className={cx(
        "w-6 h-6 bg-slate-700 text-slate-400 rounded flex items-center justify-center font-sans text-xs px-1.5",
        className
      )}
    >
      {children}
    </kbd>
  );
}