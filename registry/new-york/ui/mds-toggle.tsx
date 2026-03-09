"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

const TOGGLE_CONFIG = {
  small: {
    width: 24,
    height: 16,
    thumbSize: 16,
    activeLeft: 8,
    iconSize: 10,
    labelClass: "text-xs",
  },
  medium: {
    width: 32,
    height: 20,
    thumbSize: 20,
    activeLeft: 12,
    iconSize: 12,
    labelClass: "text-sm",
  },
} as const

type MDSToggleProps = {
  value: boolean
  size?: "small" | "medium"
  onChange: (checked: boolean) => void
  isDisabled?: boolean
  label?: React.ReactNode
}

const MDSToggle = React.forwardRef<HTMLLabelElement, MDSToggleProps>(
  ({ value, size = "medium", onChange, isDisabled = false, label }, ref) => {
    const config = TOGGLE_CONFIG[size]

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      if (!isDisabled && onChange) {
        onChange(event.target.checked)
      }
    }

    const trackColor = value
      ? isDisabled
        ? "var(--mds-bg-fill-primary-default-disabled)"
        : "var(--mds-bg-fill-primary-default-normal)"
      : isDisabled
        ? "var(--mds-bg-fill-neutral-weak-disabled)"
        : "var(--mds-bg-fill-neutral-weak-normal)"

    const hoverTrackColor = isDisabled
      ? trackColor
      : value
        ? "var(--mds-bg-fill-primary-default-hover)"
        : "var(--mds-bg-fill-neutral-weak-hover)"

    return (
      <label
        ref={ref}
        className={cn(
          "group inline-flex items-center p-0.5",
          size === "medium" ? "gap-1" : "gap-0.5",
          isDisabled ? "cursor-default" : "cursor-pointer"
        )}
        onClick={(e) => e.stopPropagation()}
        style={
          {
            "--toggle-track": trackColor,
            "--toggle-track-hover": hoverTrackColor,
          } as React.CSSProperties
        }
      >
        <input
          type="checkbox"
          className="hidden"
          checked={value}
          disabled={isDisabled}
          onChange={handleChange}
        />
        <div
          className={cn(
            "relative rounded-[10px] transition-colors duration-150",
            "bg-[var(--toggle-track)]",
            !isDisabled && "group-hover:bg-[var(--toggle-track-hover)]"
          )}
          style={{ width: config.width, height: config.height }}
        >
          <div
            className="absolute left-0 top-0 flex items-center justify-center rounded-full transition-transform duration-150"
            style={{
              width: config.thumbSize,
              height: config.thumbSize,
              transform: `translateX(${value ? config.activeLeft : 0}px)`,
              transitionTimingFunction: "cubic-bezier(0.175, 0.885, 0.32, 1.37)",
              color: "var(--mds-bg-fill-inverse-default-normal)",
            }}
          >
            <div
              className={cn(
                "absolute flex items-center justify-center transition-opacity duration-150",
                value ? "opacity-100" : "opacity-0"
              )}
            >
              <svg
                width={config.iconSize}
                height={config.iconSize}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={3}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M20 6 9 17l-5-5" />
              </svg>
            </div>
            <div
              className={cn(
                "absolute flex items-center justify-center transition-opacity duration-150",
                !value ? "opacity-100" : "opacity-0"
              )}
            >
              <svg
                width={config.iconSize}
                height={config.iconSize}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={3}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="10" />
              </svg>
            </div>
          </div>
        </div>
        {label && (
          <span
            className={cn(
              config.labelClass,
              "text-[var(--mds-content-neutral-default-normal)]"
            )}
          >
            {label}
          </span>
        )}
      </label>
    )
  }
)
MDSToggle.displayName = "MDSToggle"

export { MDSToggle }
export type { MDSToggleProps }
