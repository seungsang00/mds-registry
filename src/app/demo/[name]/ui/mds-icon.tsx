import { Icon, iconCategories, type IconName } from "@/components/ui/icon";

/** MDS-v2 원본 SVG를 사용하는 커스텀 아이콘 (17개) */
const customSvgIcons: IconName[] = [
  "Cards", "CardsStar", "SearchImage", "SearchTrend",
  "SearchEarth", "InProgress", "InProgressWOStar", "CompareImage",
  "ClusterHubSellerIntel", "Threads", "Whatsapp", "Messenger",
  "AudienceNetwork", "Eth", "ShapeArrow", "FormulaComponent",
];

function IconGrid({
  title,
  names,
  showCustomBadge = false,
}: {
  title: string;
  names: string[];
  showCustomBadge?: boolean;
}) {
  return (
    <div className="space-y-3">
      <h3 className="text-sm font-medium text-muted-foreground">{title}</h3>
      <div className="grid grid-cols-6 gap-3 sm:grid-cols-8 md:grid-cols-10">
        {names.map((name) => {
          const isCustom =
            showCustomBadge &&
            customSvgIcons.includes(name as IconName);
          return (
            <div
              key={name}
              className={`flex flex-col items-center gap-1.5 rounded-md border p-2 hover:bg-accent ${
                isCustom ? "border-blue-300 bg-blue-50 dark:border-blue-700 dark:bg-blue-950 hover:bg-blue-100 dark:hover:bg-blue-900" : ""
              }`}
            >
              <Icon
                name={name as Parameters<typeof Icon>[0]["name"]}
                size={20}
              />
              <span className="truncate text-[10px] text-muted-foreground max-w-full" title={name}>
                {name}
              </span>
            </div>
          );
        })}
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
          <p className="text-xs text-blue-500">
            파란색 테두리 = MDS-v2 원본 커스텀 SVG ({customSvgIcons.length}개)
          </p>
        </div>
        <div className="flex items-center gap-4">
          <Icon name="Check" size={16} />
          <Icon name="Check" size={24} />
          <Icon name="Check" size={32} />
          <Icon name="Check" size={48} />
        </div>
        <IconGrid
          title="Arrows (6)"
          names={iconCategories.arrows}
          showCustomBadge
        />
        <IconGrid
          title="Symbols (164)"
          names={iconCategories.symbols}
          showCustomBadge
        />
        <IconGrid
          title="Editor (28)"
          names={iconCategories.editor}
          showCustomBadge
        />
      </div>
    ),
  },
};
