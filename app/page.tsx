import * as React from "react"
import { OpenInV0Button } from "@/components/open-in-v0-button"
import { MDSLogo } from "@/registry/new-york/ui/mds-logo"
import { MDSToggleDemo } from "@/components/mds-toggle-demo"

export default function Home() {
  return (
    <div className="max-w-3xl mx-auto flex flex-col min-h-svh px-4 py-8 gap-8">
      <header className="flex flex-col gap-1">
        <h1 className="text-3xl font-bold tracking-tight">
          MDS Registry
        </h1>
        <p className="text-muted-foreground">
          MarqVision Design System components as a shadcn registry.
        </p>
      </header>
      <main className="flex flex-col flex-1 gap-8">
        <div className="flex flex-col gap-4 border rounded-lg p-4 relative">
          <div className="flex items-center justify-between">
            <h2 className="text-sm text-muted-foreground sm:pl-3">
              MarqVision logo with vision, ai, folio, and symbol variants.
            </h2>
            <OpenInV0Button name="mds-logo" className="w-fit" />
          </div>
          <div className="flex flex-col items-center justify-center gap-8 py-8">
            <div className="flex items-center gap-8">
              <MDSLogo logoType="vision" color="black" size={28} />
            </div>
            <div className="flex items-center gap-8">
              <MDSLogo logoType="ai" color="black" size={28} />
            </div>
            <div className="flex items-center gap-8">
              <MDSLogo logoType="folio" color="black" size={28} />
            </div>
            <div className="flex items-center gap-6">
              <MDSLogo variant="symbol" color="black" size={32} />
              <div className="rounded-lg bg-[var(--mds-bg-surface-inverse-light)] p-4">
                <MDSLogo variant="symbol" color="white" size={32} />
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4 border rounded-lg p-4 relative">
          <div className="flex items-center justify-between">
            <h2 className="text-sm text-muted-foreground sm:pl-3">
              Toggle switch with small/medium sizes and label support.
            </h2>
            <OpenInV0Button name="mds-toggle" className="w-fit" />
          </div>
          <div className="flex flex-col items-center justify-center gap-6 py-8">
            <MDSToggleDemo />
          </div>
        </div>
      </main>
    </div>
  )
}
