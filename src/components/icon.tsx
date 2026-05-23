import {
  Activity,
  Atom,
  Bot,
  BrainCircuit,
  Building2,
  CloudSun,
  Code2,
  Cpu,
  Database,
  Dna,
  FileText,
  Globe2,
  Languages,
  Leaf,
  Network,
  Orbit,
  ShieldCheck,
  Sparkles,
  Telescope,
  UsersRound,
  Waves,
  type LucideIcon,
} from "lucide-react";
import type { IconName } from "@/lib/content";

const icons: Record<IconName, LucideIcon> = {
  atom: Atom,
  bot: Bot,
  brain: BrainCircuit,
  building: Building2,
  climate: CloudSun,
  code: Code2,
  cpu: Cpu,
  database: Database,
  dna: Dna,
  file: FileText,
  globe: Globe2,
  health: Activity,
  language: Languages,
  leaf: Leaf,
  network: Network,
  orbit: Orbit,
  shield: ShieldCheck,
  spark: Sparkles,
  telescope: Telescope,
  users: UsersRound,
  wave: Waves,
};

type IconProps = {
  name: IconName;
  className?: string;
  strokeWidth?: number;
};

export function Icon({ name, className, strokeWidth = 1.7 }: IconProps) {
  const Component = icons[name];
  return <Component aria-hidden="true" className={className} strokeWidth={strokeWidth} />;
}
