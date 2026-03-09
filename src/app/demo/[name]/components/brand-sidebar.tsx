import { BrandSidebar } from "@/components/brand-sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";

export const brandSidebar = {
  name: "brand-sidebar",
  components: {
    Default: (
      <SidebarProvider>
        <div className="relative flex min-h-[400px]">
          <BrandSidebar />
        </div>
      </SidebarProvider>
    ),
  },
};
