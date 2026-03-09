"use client"

import * as React from "react"

const TOGGLE_CONFIG = {
  small: {
    width: 24,
    height: 16,
    thumbSize: 16,
    activeLeft: 8,
    iconSize: 10,
    gap: 2,
    fontSize: 12,
  },
  medium: {
    width: 32,
    height: 20,
    thumbSize: 20,
    activeLeft: 12,
    iconSize: 12,
    gap: 4,
    fontSize: 14,
  },
} as const

const COLORS = {
  track: {
    on: { normal: "#1648d2", hover: "#1f3f99", disabled: "#a3b9f5" },
    off: { normal: "#c4cdd5", hover: "#aab5c0", disabled: "#eaedf0" },
  },
  thumb: "#ffffff",
  label: "#212b36",
}

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
    const [hovered, setHovered] = React.useState(false)

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      if (!isDisabled && onChange) {
        onChange(event.target.checked)
      }
    }

    const colors = value ? COLORS.track.on : COLORS.track.off
    const trackColor = isDisabled
      ? colors.disabled
      : hovered
        ? colors.hover
        : colors.normal

    return (
      <label
        ref={ref}
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: config.gap,
          padding: 2,
          cursor: isDisabled ? "default" : "pointer",
        }}
        onClick={(e) => e.stopPropagation()}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <input
          type="checkbox"
          style={{ display: "none" }}
          checked={value}
          disabled={isDisabled}
          onChange={handleChange}
        />
        <div
          style={{
            position: "relative",
            width: config.width,
            height: config.height,
            borderRadius: 10,
            backgroundColor: trackColor,
            transition: "background-color 0.15s ease",
          }}
        >
          <div
            style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: config.thumbSize,
              height: config.thumbSize,
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              transform: `translateX(${value ? config.activeLeft : 0}px)`,
              transition: "transform 0.15s cubic-bezier(0.175, 0.885, 0.32, 1.37)",
              color: COLORS.thumb,
            }}
          >
            <div
              style={{
                position: "absolute",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                opacity: value ? 1 : 0,
                transition: "opacity 0.15s ease",
              }}
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
              style={{
                position: "absolute",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                opacity: value ? 0 : 1,
                transition: "opacity 0.15s ease",
              }}
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
          <span style={{ fontSize: config.fontSize, color: COLORS.label }}>
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
