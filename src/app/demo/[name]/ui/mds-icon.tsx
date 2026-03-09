import { Icon, iconCategories } from "@/components/ui/icon";

function IconGrid({
  title,
  names,
}: {
  title: string;
  names: string[];
}) {
  return (
    <div className="space-y-3">
      <h3 className="text-sm font-medium text-muted-foreground">{title}</h3>
      <div className="grid grid-cols-6 gap-3 sm:grid-cols-8 md:grid-cols-10">
        {names.map((name) => (
          <div
            key={name}
            className="flex flex-col items-center gap-1.5 rounded-md border p-2 hover:bg-accent"
          >
            <Icon name={name as Parameters<typeof Icon>[0]["name"]} size={20} />
            <span className="truncate text-[10px] text-muted-foreground max-w-full">
              {name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export const icon = {
  name: "icon",
  components: {
    Default: (
      <div className="w-full space-y-6 p-4">
        <div className="space-y-1">
          <h2 className="text-lg font-semibold">MDS Icon</h2>
          <p className="text-sm text-muted-foreground">
            MDS-v2 아이콘 이름으로 lucide-react 아이콘을 사용합니다. 총 198개.
          </p>
        </div>
        <div className="flex items-center gap-4">
          <Icon name="Check" size={16} />
          <Icon name="Check" size={24} />
          <Icon name="Check" size={32} />
          <Icon name="Check" size={48} />
        </div>
        <IconGrid title="Arrows (6)" names={iconCategories.arrows} />
        <IconGrid
          title="Symbols (164)"
          names={iconCategories.symbols.slice(0, 40)}
        />
        <IconGrid title="Editor (28)" names={iconCategories.editor} />
      </div>
    ),
  },
};
