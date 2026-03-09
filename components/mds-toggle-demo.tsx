"use client"

import * as React from "react"
import { MDSToggle } from "@/registry/new-york/ui/mds-toggle"

export function MDSToggleDemo() {
  const [value1, setValue1] = React.useState(false)
  const [value2, setValue2] = React.useState(true)
  const [value3, setValue3] = React.useState(false)
  const [value4, setValue4] = React.useState(true)

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-6">
        <MDSToggle value={value1} onChange={setValue1} label="Medium off" />
        <MDSToggle value={value2} onChange={setValue2} label="Medium on" />
      </div>
      <div className="flex items-center gap-6">
        <MDSToggle
          value={value3}
          onChange={setValue3}
          size="small"
          label="Small off"
        />
        <MDSToggle
          value={value4}
          onChange={setValue4}
          size="small"
          label="Small on"
        />
      </div>
      <div className="flex items-center gap-6">
        <MDSToggle
          value={false}
          onChange={() => {}}
          isDisabled
          label="Disabled off"
        />
        <MDSToggle
          value={true}
          onChange={() => {}}
          isDisabled
          label="Disabled on"
        />
      </div>
    </div>
  )
}
