import { type ComponentType, type SVGProps, forwardRef } from "react";
import {
  CustomCards,
  CustomCardsStar,
  CustomSearchImage,
  CustomSearchTrend,
  CustomSearchEarth,
  CustomInProgress,
  CustomInProgressWOStar,
  CustomCompareImage,
  CustomClusterHubSellerIntel,
  CustomThreads,
  CustomWhatsapp,
  CustomMessenger,
  CustomAudienceNetwork,
  CustomEth,
  CustomShapeArrow,
  CustomFormulaComponent,
} from "./icon-custom";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUp,
  ArrowDown,
  ArrowUpFromLine,
  ArrowDownFromLine,
  Check,
  Plus,
  Minus,
  X,
  Flag,
  CircleHelp,
  TriangleAlert,
  CircleAlert,
  Info,
  Send,
  Hourglass,
  Eye,
  LayoutGrid as Cards,
  Star as CardsStar,
  Trash2,
  Star,
  Lightbulb,
  BadgeCheck,
  Folder,
  Tag as LabelIcon,
  MoreHorizontal,
  Bell,
  BellRing,
  BellOff,
  Settings,
  UserRound,
  Store,
  Home,
  Globe,
  LayoutGrid,
  Menu,
  PanelLeftClose,
  PanelLeftOpen,
  Package,
  UserRoundX,
  Banknote,
  LayoutGrid as GridView,
  List,
  ListOrdered,
  ListTree,
  Filter,
  ArrowUpDown,
  PanelLeft,
  PanelRight,
  ArrowLeftFromLine,
  ArrowRightFromLine,
  ChevronDown,
  ChevronUp,
  ChevronLeft,
  ChevronRight,
  ChevronsUpDown,
  MoveUpRight,
  ArrowLeftRight,
  Repeat2,
  ArrowUpDown as SwapVertical,
  Split,
  Merge,
  ChevronDown as TriangleDown,
  ChevronUp as TriangleUp,
  Search,
  SearchX,
  TrendingUp as SearchTrend,
  Globe as SearchEarth,
  ScanSearch,
  Pencil,
  Download,
  Upload,
  RefreshCw,
  RotateCcw,
  ExternalLink,
  UnfoldVertical,
  FoldVertical,
  Calendar,
  Timer,
  ShoppingCart,
  Paperclip,
  Users,
  Link2,
  ClipboardCheck,
  CircleDotDashed,
  CircleDot,
  Tag,
  Sparkles,
  Zap,
  UserSearch,
  CalendarCheck,
  Tag as TagIcon,
  ShieldCheck,
  ShieldCheck as ProtectionCheck,
  ShieldAlert as ProtectionSearch,
  ShieldAlert,
  Shield,
  BarChart2,
  Hash,
  Printer,
  ChartLine,
  Table2,
  Hash as ChartNumber,
  Wand2,
  MonitorDot,
  ImageIcon,
  ImageIcon as ImagesIcon,
  Images,
  FileText,
  ChartBar,
  Lock,
  Server,
  Mail,
  MailX,
  PartyPopper,
  Pin,
  PinOff,
  ClipboardCheck as AssignmentConfirm,
  FileText as Document,
  Presentation,
  PieChart,
  Copy,
  Archive,
  UserRound as SellerPerson,
  UsersRound,
  ServerCog,
  MessageSquare,
  MessageSquarePlus,
  MessageSquareDot,
  FileSpreadsheet,
  ClipboardList,
  Clock,
  FolderPlus,
  MessageCircle,
  UserRound as Recipient,
  Gavel,
  Landmark,
  CreditCard,
  HandCoins,
  StickyNote,
  GitBranch,
  GripVertical,
  ThumbsUp,
  ThumbsDown,
  RefreshCcw,
  Ban,
  History,
  Siren,
  TrendingUp,
  TrendingDown,
  Globe as Web,
  Globe as Domain,
  Rocket,
  Share2,
  Languages,
  Gauge,
  Link,
  Radio,
  Reply,
  Bot,
  Megaphone,
  Facebook,
  AtSign,
  Instagram,
  MessageCircle as Whatsapp,
  MessageSquare as Messenger,
  Share2 as AudienceNetwork,
  SlidersHorizontal,
  Bold,
  Italic,
  Type,
  Underline,
  PenTool,
  Bookmark,
  Plug,
  SendHorizontal,
  ImageOff,
  Crop,
  Scan,
  Square,
  FlipHorizontal,
  FlipVertical,
  RotateCw,
  RotateCcw as Rotate90CCW,
  Undo,
  Redo,
  Circle,
  Hexagon,
  Square as Rectangle,
  Triangle,
  Minus as Line,
  MoveRight,
  Sigma,
  Blend,
  ZoomIn,
} from "lucide-react";

type IconName =
  // Arrows
  | "ArrowLeft"
  | "ArrowRight"
  | "ArrowUp"
  | "ArrowDown"
  | "ArrowUpward"
  | "ArrowDownward"
  // Symbols
  | "Check"
  | "AddPlus"
  | "Minus"
  | "CloseDelete"
  | "Flag"
  | "Help"
  | "ErrorWarning"
  | "Priority"
  | "Info"
  | "Send"
  | "HourglassDelay"
  | "View"
  | "Cards"
  | "CardsStar"
  | "Trash"
  | "Star"
  | "Tips"
  | "Verified"
  | "Folder"
  | "Label"
  | "More"
  | "Notifications"
  | "NotificationsOn"
  | "NotificationsOff"
  | "Settings"
  | "AccountProfile"
  | "StoreMarket"
  | "Home"
  | "Language"
  | "Apps"
  | "Menu"
  | "MenuClose"
  | "MenuOpen"
  | "BoxPackage"
  | "PersonAlert"
  | "Money"
  | "GridView"
  | "ListView"
  | "ListNumbered"
  | "ListBulleted"
  | "Filter"
  | "Sort"
  | "PullLeft"
  | "PullRight"
  | "PushLeft"
  | "PushRight"
  | "TailArrowDown"
  | "TailArrowUp"
  | "TailArrowLeft"
  | "TailArrowRight"
  | "AngleBracket"
  | "Northeast"
  | "Compare"
  | "Swap"
  | "SwapVertical"
  | "ArrowSplit"
  | "ArrowMerge"
  | "TriangleDown"
  | "TriangleUp"
  | "Search"
  | "SearchImage"
  | "SearchTrend"
  | "SearchEarth"
  | "SeeDetails"
  | "Edit"
  | "Download"
  | "Upload"
  | "Refresh"
  | "Reset"
  | "OpenNew"
  | "Unfold"
  | "Fold"
  | "Calendar"
  | "Timer"
  | "Shopping"
  | "AttachFile"
  | "Groups"
  | "LinkUrl"
  | "Task"
  | "InProgress"
  | "InProgressWOStar"
  | "Sell"
  | "Magic"
  | "SuperBolt"
  | "Sellers"
  | "CalendarCheckEvent"
  | "Tag"
  | "ProtectionStar"
  | "ProtectionCheck"
  | "ProtectionSearch"
  | "Protection"
  | "Insight"
  | "Formula"
  | "Print"
  | "ChartLine"
  | "ChartTable"
  | "ChartNumber"
  | "AutoMagic"
  | "ChartMonitoring"
  | "CompareImage"
  | "ProtectionWarning"
  | "Image"
  | "Images"
  | "Pdf"
  | "ChartBar"
  | "Lock"
  | "ClusterHubSellerIntel"
  | "Email"
  | "NoEmail"
  | "Celebration"
  | "Pin"
  | "Unpin"
  | "AssignmentConfirm"
  | "Document"
  | "Ppt"
  | "ChartCirclePie"
  | "CopyContent"
  | "Archive"
  | "SellerPerson"
  | "Group"
  | "ServerDNS"
  | "Comment"
  | "CommentAttached"
  | "CommentAdd"
  | "ExcelSheet"
  | "Assignment"
  | "Pending"
  | "FolderAdd"
  | "Chat"
  | "Recipient"
  | "Gavel"
  | "Bank"
  | "CreditCard"
  | "AddPayment"
  | "Note"
  | "SiteMapTree"
  | "DragHandle"
  | "ThumbUp"
  | "ThumbDown"
  | "Regenerate"
  | "Block"
  | "History"
  | "Siren"
  | "TrendingUp"
  | "TrendingDown"
  | "Web"
  | "Domain"
  | "Rocket"
  | "SocialMedia"
  | "Translate"
  | "Performance"
  | "Link"
  | "Live"
  | "Reply"
  | "GenerativeAI"
  | "Ads"
  | "Facebook"
  | "Threads"
  | "Instagram"
  | "Whatsapp"
  | "Messenger"
  | "AudienceNetwork"
  | "Equalizer"
  // Editor
  | "Bold"
  | "Italic"
  | "TextFormat"
  | "Underline"
  | "Sign"
  | "Bookmark"
  | "Connected"
  | "ScheduleSend"
  | "ImageNotSupported"
  | "Crop"
  | "CropFree"
  | "CropSquare"
  | "FlipX"
  | "FlipY"
  | "Rotate90CW"
  | "Rotate90CCW"
  | "Undo"
  | "Redo"
  | "Circle"
  | "Shapes"
  | "Rectangle"
  | "Triangle"
  | "Line"
  | "ShapeArrow"
  | "FormulaComponent"
  | "Eth"
  | "ZoomIn";

/**
 * MDS-v2 아이콘 이름 → lucide-react 컴포넌트 매핑
 *
 * MDS-v2의 MDSIcon과 동일한 아이콘 이름을 사용하며,
 * lucide-react 아이콘으로 대체하여 렌더링합니다.
 */
const iconMap: Record<IconName, ComponentType<SVGProps<SVGSVGElement>>> = {
  // Arrows
  ArrowLeft,
  ArrowRight,
  ArrowUp,
  ArrowDown,
  ArrowUpward: ArrowUpFromLine,
  ArrowDownward: ArrowDownFromLine,

  // Symbols
  Check,
  AddPlus: Plus,
  Minus,
  CloseDelete: X,
  Flag,
  Help: CircleHelp,
  ErrorWarning: TriangleAlert,
  Priority: CircleAlert,
  Info,
  Send,
  HourglassDelay: Hourglass,
  View: Eye,
  Cards: CustomCards,
  CardsStar: CustomCardsStar,
  Trash: Trash2,
  Star,
  Tips: Lightbulb,
  Verified: BadgeCheck,
  Folder,
  Label: LabelIcon,
  More: MoreHorizontal,
  Notifications: Bell,
  NotificationsOn: BellRing,
  NotificationsOff: BellOff,
  Settings,
  AccountProfile: UserRound,
  StoreMarket: Store,
  Home,
  Language: Globe,
  Apps: LayoutGrid,
  Menu,
  MenuClose: PanelLeftClose,
  MenuOpen: PanelLeftOpen,
  BoxPackage: Package,
  PersonAlert: UserRoundX,
  Money: Banknote,
  GridView,
  ListView: List,
  ListNumbered: ListOrdered,
  ListBulleted: ListTree,
  Filter,
  Sort: ArrowUpDown,
  PullLeft: PanelLeft,
  PullRight: PanelRight,
  PushLeft: ArrowLeftFromLine,
  PushRight: ArrowRightFromLine,
  TailArrowDown: ChevronDown,
  TailArrowUp: ChevronUp,
  TailArrowLeft: ChevronLeft,
  TailArrowRight: ChevronRight,
  AngleBracket: ChevronsUpDown,
  Northeast: MoveUpRight,
  Compare: ArrowLeftRight,
  Swap: Repeat2,
  SwapVertical,
  ArrowSplit: Split,
  ArrowMerge: Merge,
  TriangleDown,
  TriangleUp,
  Search,
  SearchImage: CustomSearchImage,
  SearchTrend: CustomSearchTrend,
  SearchEarth: CustomSearchEarth,
  SeeDetails: ScanSearch,
  Edit: Pencil,
  Download,
  Upload,
  Refresh: RefreshCw,
  Reset: RotateCcw,
  OpenNew: ExternalLink,
  Unfold: UnfoldVertical,
  Fold: FoldVertical,
  Calendar,
  Timer,
  Shopping: ShoppingCart,
  AttachFile: Paperclip,
  Groups: Users,
  LinkUrl: Link2,
  Task: ClipboardCheck,
  InProgress: CustomInProgress,
  InProgressWOStar: CustomInProgressWOStar,
  Sell: Tag,
  Magic: Sparkles,
  SuperBolt: Zap,
  Sellers: UserSearch,
  CalendarCheckEvent: CalendarCheck,
  Tag: TagIcon,
  ProtectionStar: ShieldCheck,
  ProtectionCheck,
  ProtectionSearch,
  Protection: Shield,
  Insight: BarChart2,
  Formula: Hash,
  Print: Printer,
  ChartLine,
  ChartTable: Table2,
  ChartNumber,
  AutoMagic: Wand2,
  ChartMonitoring: MonitorDot,
  CompareImage: CustomCompareImage,
  ProtectionWarning: ShieldAlert,
  Image: ImageIcon,
  Images,
  Pdf: FileText,
  ChartBar,
  Lock,
  ClusterHubSellerIntel: CustomClusterHubSellerIntel,
  Email: Mail,
  NoEmail: MailX,
  Celebration: PartyPopper,
  Pin,
  Unpin: PinOff,
  AssignmentConfirm,
  Document,
  Ppt: Presentation,
  ChartCirclePie: PieChart,
  CopyContent: Copy,
  Archive,
  SellerPerson,
  Group: UsersRound,
  ServerDNS: ServerCog,
  Comment: MessageSquare,
  CommentAttached: MessageSquareDot,
  CommentAdd: MessageSquarePlus,
  ExcelSheet: FileSpreadsheet,
  Assignment: ClipboardList,
  Pending: Clock,
  FolderAdd: FolderPlus,
  Chat: MessageCircle,
  Recipient,
  Gavel,
  Bank: Landmark,
  CreditCard,
  AddPayment: HandCoins,
  Note: StickyNote,
  SiteMapTree: GitBranch,
  DragHandle: GripVertical,
  ThumbUp: ThumbsUp,
  ThumbDown: ThumbsDown,
  Regenerate: RefreshCcw,
  Block: Ban,
  History,
  Siren,
  TrendingUp,
  TrendingDown,
  Web,
  Domain,
  Rocket,
  SocialMedia: Share2,
  Translate: Languages,
  Performance: Gauge,
  Link,
  Live: Radio,
  Reply,
  GenerativeAI: Bot,
  Ads: Megaphone,
  Facebook,
  Threads: CustomThreads,
  Instagram,
  Whatsapp: CustomWhatsapp,
  Messenger: CustomMessenger,
  AudienceNetwork: CustomAudienceNetwork,
  Equalizer: SlidersHorizontal,

  // Editor
  Bold,
  Italic,
  TextFormat: Type,
  Underline,
  Sign: PenTool,
  Bookmark,
  Connected: Plug,
  ScheduleSend: SendHorizontal,
  ImageNotSupported: ImageOff,
  Crop,
  CropFree: Scan,
  CropSquare: Square,
  FlipX: FlipHorizontal,
  FlipY: FlipVertical,
  Rotate90CW: RotateCw,
  Rotate90CCW,
  Undo,
  Redo,
  Circle,
  Shapes: Hexagon,
  Rectangle,
  Triangle,
  Line,
  ShapeArrow: CustomShapeArrow,
  FormulaComponent: CustomFormulaComponent,
  Eth: CustomEth,
  ZoomIn,
};

type IconProps = {
  /** MDS-v2 아이콘 이름 */
  name: IconName;
  /** 아이콘 크기 (px). 기본값 24 */
  size?: number;
  /** 아이콘 색상. CSS color 값 또는 Tailwind 클래스 사용 */
  color?: string;
  /** 추가 CSS 클래스 */
  className?: string;
  /** 접근성을 위한 라벨 */
  "aria-label"?: string;
} & Omit<SVGProps<SVGSVGElement>, "name" | "ref">;

/**
 * MDS Icon 컴포넌트
 *
 * MDS-v2의 MDSIcon과 동일한 아이콘 이름을 사용하며,
 * lucide-react 아이콘으로 렌더링합니다.
 *
 * @example
 * ```tsx
 * <Icon name="Check" />
 * <Icon name="ArrowLeft" size={16} className="text-muted-foreground" />
 * <Icon name="Settings" size={32} color="currentColor" />
 * ```
 */
const Icon = forwardRef<SVGSVGElement, IconProps>(
  ({ name, size = 24, color, className, ...rest }, ref) => {
    const LucideIcon = iconMap[name];

    if (!LucideIcon) {
      console.warn(`[MDS Icon] Unknown icon name: "${name}"`);
      return null;
    }

    return (
      <LucideIcon
        ref={ref}
        width={size}
        height={size}
        color={color}
        className={className}
        {...rest}
      />
    );
  }
);

Icon.displayName = "Icon";

/** MDS-v2 아이콘 이름 전체 목록 */
const iconNames = Object.keys(iconMap) as IconName[];

/** 카테고리별 아이콘 그룹 */
const iconCategories = {
  arrows: [
    "ArrowLeft",
    "ArrowRight",
    "ArrowUp",
    "ArrowDown",
    "ArrowUpward",
    "ArrowDownward",
  ] as IconName[],
  symbols: [
    "Check", "AddPlus", "Minus", "CloseDelete", "Flag", "Help",
    "ErrorWarning", "Priority", "Info", "Send", "HourglassDelay",
    "View", "Cards", "CardsStar", "Trash", "Star",
    "Tips", "Verified", "Folder", "Label", "More", "Notifications",
    "NotificationsOn", "NotificationsOff", "Settings", "AccountProfile",
    "StoreMarket", "Home", "Language", "Apps", "Menu", "MenuClose",
    "MenuOpen", "BoxPackage", "PersonAlert", "Money", "GridView",
    "ListView", "ListNumbered", "ListBulleted", "Filter", "Sort",
    "PullLeft", "PullRight", "PushLeft", "PushRight", "TailArrowDown",
    "TailArrowUp", "TailArrowLeft", "TailArrowRight", "AngleBracket",
    "Northeast", "Compare", "Swap", "SwapVertical", "ArrowSplit",
    "ArrowMerge", "TriangleDown", "TriangleUp", "Search", "SearchImage",
    "SearchTrend", "SearchEarth", "SeeDetails", "Edit", "Download",
    "Upload", "Refresh", "Reset", "OpenNew", "Unfold", "Fold",
    "Calendar", "Timer", "Shopping", "AttachFile", "Groups", "LinkUrl",
    "Task", "InProgress", "InProgressWOStar", "Sell", "Magic",
    "SuperBolt", "Sellers", "CalendarCheckEvent", "Tag",
    "ProtectionStar", "ProtectionCheck", "ProtectionSearch", "Protection",
    "Insight", "Formula", "Print", "ChartLine", "ChartTable",
    "ChartNumber", "AutoMagic", "ChartMonitoring", "CompareImage",
    "ProtectionWarning", "Image", "Images", "Pdf", "ChartBar", "Lock",
    "ClusterHubSellerIntel", "Email", "NoEmail", "Celebration", "Pin",
    "Unpin", "AssignmentConfirm", "Document", "Ppt", "ChartCirclePie",
    "CopyContent", "Archive", "SellerPerson", "Group", "ServerDNS",
    "Comment", "CommentAttached", "CommentAdd", "ExcelSheet",
    "Assignment", "Pending", "FolderAdd", "Chat", "Recipient", "Gavel",
    "Bank", "CreditCard", "AddPayment", "Note", "SiteMapTree",
    "DragHandle", "ThumbUp", "ThumbDown", "Regenerate", "Block",
    "History", "Siren", "TrendingUp", "TrendingDown", "Web", "Domain",
    "Rocket", "SocialMedia", "Translate", "Performance", "Link", "Live",
    "Reply", "GenerativeAI", "Ads", "Facebook", "Threads", "Instagram",
    "Whatsapp", "Messenger", "AudienceNetwork", "Equalizer",
  ] as IconName[],
  editor: [
    "Bold", "Italic", "TextFormat", "Underline", "Sign", "Bookmark",
    "Connected", "ScheduleSend", "ImageNotSupported", "Crop", "CropFree",
    "CropSquare", "FlipX", "FlipY", "Rotate90CW", "Rotate90CCW",
    "Undo", "Redo", "Circle", "Shapes", "Rectangle", "Triangle",
    "Line", "ShapeArrow", "FormulaComponent", "Eth", "ZoomIn",
  ] as IconName[],
};

export { Icon, iconMap, iconNames, iconCategories, type IconName, type IconProps };
