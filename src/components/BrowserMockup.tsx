import {
  Activity,
  Server,
  Layers,
  ShieldCheck,
  TrendingUp,
  Cpu,
  Database,
  ArrowUpRight,
  Terminal,
} from "lucide-react";

interface BrowserMockupProps {
  title?: string;
  className?: string;
}

export default function BrowserMockup({
  title = "TechMentors Enterprise Engine — Live Production Telemetry",
  className = "",
}: BrowserMockupProps) {
  return (
    <div
      className={`relative rounded-2xl bg-[#0E111A] border border-[#22293D] shadow-2xl shadow-black/90 overflow-hidden animate-subtle-float transition-all duration-300 hover:border-[#00D2FF]/40 hover:shadow-[0_20px_50px_rgba(0,102,255,0.2)] ${className}`}
      title={title}
    >
      {/* Electric Blue & Cyan radial background glow */}
      <div className="absolute -top-20 -right-20 w-80 h-80 bg-[#0066FF]/20 rounded-full blur-3xl pointer-events-none animate-pulse-glow" />
      <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-[#00D2FF]/15 rounded-full blur-3xl pointer-events-none animate-pulse-glow" />

      {/* Browser / OS Window Header Bar */}
      <div className="h-11 bg-[#08090E] border-b border-[#22293D] px-4 flex items-center justify-between select-none">
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-[#FF5F56]/90 inline-block shadow-[0_0_6px_rgba(255,95,86,0.6)]" />
          <span className="w-3 h-3 rounded-full bg-[#FFBD2E]/90 inline-block shadow-[0_0_6px_rgba(255,189,46,0.6)]" />
          <span className="w-3 h-3 rounded-full bg-[#27C93F]/90 inline-block shadow-[0_0_6px_rgba(39,201,63,0.6)]" />
        </div>
        <div className="flex items-center gap-2 px-3 py-1 rounded-md bg-[#0E111A] border border-[#22293D] text-[11px] text-[#94A3B8] max-w-xs sm:max-w-md truncate">
          <span className="w-1.5 h-1.5 rounded-full bg-[#00D2FF] animate-pulse shadow-[0_0_8px_#00D2FF]"></span>
          <span className="font-mono text-[#00D2FF]">https://</span>
          <span className="text-[#F8FAFC]">app.techmentors.dev/dashboard/telemetry</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded bg-[#141824] border border-[#22293D] text-[#38BDF8]">
            v2.4-prod
          </span>
        </div>
      </div>

      {/* Mockup Inner Body */}
      <div className="p-4 sm:p-6 grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6 bg-[#0B0D15]">
        {/* Left Mini Sidebar */}
        <div className="hidden sm:flex lg:col-span-3 flex-col gap-4 border-r border-[#22293D] pr-4">
          <div className="flex items-center gap-2 pb-3 border-b border-[#22293D]">
            <div className="w-7 h-7 rounded bg-[#0066FF]/20 border border-[#0066FF]/40 flex items-center justify-center text-[#00D2FF] shadow-[0_0_8px_rgba(0,102,255,0.4)]">
              <Layers className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs font-semibold text-[#F8FAFC]">Workspace</div>
              <div className="text-[10px] text-[#94A3B8]">Cluster US-East-1</div>
            </div>
          </div>

          <div className="space-y-1 text-xs">
            <div className="flex items-center justify-between p-2 rounded-lg bg-[#141824] text-[#00D2FF] border border-[#0066FF]/40 shadow-sm transition-all hover:translate-x-1">
              <span className="flex items-center gap-2 font-medium">
                <Activity className="w-3.5 h-3.5 text-[#00D2FF] animate-pulse" />
                Live Pipelines
              </span>
              <span className="text-[10px] font-mono bg-[#0066FF]/20 px-1.5 py-0.5 rounded text-[#38BDF8]">
                Active
              </span>
            </div>
            <div className="flex items-center justify-between p-2 rounded-lg text-[#94A3B8] hover:text-[#F8FAFC] hover:bg-[#141824] transition-all hover:translate-x-1">
              <span className="flex items-center gap-2">
                <Server className="w-3.5 h-3.5 text-[#38BDF8]" />
                API Services
              </span>
              <span className="text-[10px] font-mono">12/12</span>
            </div>
            <div className="flex items-center justify-between p-2 rounded-lg text-[#94A3B8] hover:text-[#F8FAFC] hover:bg-[#141824] transition-all hover:translate-x-1">
              <span className="flex items-center gap-2">
                <Database className="w-3.5 h-3.5 text-[#00D2FF]" />
                Databases
              </span>
              <span className="text-[10px] font-mono text-emerald-400">Synced</span>
            </div>
            <div className="flex items-center justify-between p-2 rounded-lg text-[#94A3B8] hover:text-[#F8FAFC] hover:bg-[#141824] transition-all hover:translate-x-1">
              <span className="flex items-center gap-2">
                <ShieldCheck className="w-3.5 h-3.5 text-[#38BDF8]" />
                Security Vault
              </span>
              <span className="text-[10px] font-mono text-emerald-400">Secure</span>
            </div>
          </div>

          {/* Quick Terminal Output Snippet */}
          <div className="mt-auto p-2.5 rounded-lg bg-[#08090E] border border-[#22293D] text-[10px] font-mono text-[#94A3B8]">
            <div className="flex items-center gap-1.5 text-[#00D2FF] mb-1">
              <Terminal className="w-3 h-3" />
              <span>CI/CD Pipeline</span>
            </div>
            <p className="text-emerald-400">✓ build passed in 2.1s</p>
            <p className="text-[#64748B] truncate">$ deploy --env=prod --zero-downtime</p>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="col-span-1 lg:col-span-9 space-y-4">
          {/* Top Scorecards Row */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            <div className="p-3.5 rounded-xl bg-[#141824] border border-[#22293D] transition-all duration-200 hover:border-[#00D2FF]/50 hover:shadow-[0_4px_16px_rgba(0,102,255,0.2)]">
              <div className="flex items-center justify-between text-xs text-[#94A3B8] mb-1">
                <span>System Uptime</span>
                <TrendingUp className="w-3.5 h-3.5 text-emerald-400" />
              </div>
              <div className="text-lg sm:text-xl font-bold text-[#F8FAFC] tracking-tight">
                99.98%
              </div>
              <div className="text-[10px] text-emerald-400 mt-1 flex items-center gap-1 font-medium">
                <span>↑ Zero incidents</span>
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-[#141824] border border-[#22293D] transition-all duration-200 hover:border-[#00D2FF]/50 hover:shadow-[0_4px_16px_rgba(0,102,255,0.2)]">
              <div className="flex items-center justify-between text-xs text-[#94A3B8] mb-1">
                <span>API Latency</span>
                <Cpu className="w-3.5 h-3.5 text-[#00D2FF]" />
              </div>
              <div className="text-lg sm:text-xl font-bold text-[#F8FAFC] tracking-tight">
                24ms
              </div>
              <div className="text-[10px] text-[#94A3B8] mt-1">
                Global p95 benchmark
              </div>
            </div>

            <div className="col-span-2 sm:col-span-1 p-3.5 rounded-xl bg-[#141824] border border-[#22293D] transition-all duration-200 hover:border-[#00D2FF]/50 hover:shadow-[0_4px_16px_rgba(0,102,255,0.2)]">
              <div className="flex items-center justify-between text-xs text-[#94A3B8] mb-1">
                <span>Throughput</span>
                <Activity className="w-3.5 h-3.5 text-[#38BDF8]" />
              </div>
              <div className="text-lg sm:text-xl font-bold text-[#F8FAFC] tracking-tight">
                1.4M / hr
              </div>
              <div className="text-[10px] text-[#00D2FF] mt-1 font-medium">
                Autoscaled nodes
              </div>
            </div>
          </div>

          {/* Central Analytics Graph Area */}
          <div className="p-4 rounded-xl bg-[#141824] border border-[#22293D] transition-all duration-200 hover:border-[#0066FF]/50">
            <div className="flex items-center justify-between mb-3">
              <div>
                <h4 className="text-xs font-semibold text-[#F8FAFC] flex items-center gap-2">
                  <span>Data Processing & Transaction Rate</span>
                  <span className="w-2 h-2 rounded-full bg-[#00D2FF] animate-pulse"></span>
                </h4>
                <p className="text-[10px] text-[#94A3B8]">
                  Real-time workload distribution across distributed microservices
                </p>
              </div>
              <div className="flex items-center gap-1 bg-[#0E111A] p-1 rounded-md border border-[#22293D] text-[10px]">
                <span className="px-2 py-0.5 rounded bg-[#0066FF] text-white font-medium shadow-[0_0_8px_rgba(0,102,255,0.5)]">1H</span>
                <span className="px-2 py-0.5 text-[#94A3B8]">24H</span>
                <span className="px-2 py-0.5 text-[#94A3B8]">7D</span>
              </div>
            </div>

            {/* Custom SVG Line Chart with Electric Blue to Cyan Gradient */}
            <div className="h-32 sm:h-36 w-full pt-2">
              <svg className="w-full h-full overflow-visible" viewBox="0 0 500 120" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#00D2FF" stopOpacity="0.4" />
                    <stop offset="60%" stopColor="#0066FF" stopOpacity="0.15" />
                    <stop offset="100%" stopColor="#0066FF" stopOpacity="0.0" />
                  </linearGradient>
                  <linearGradient id="lineStroke" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="#0052D4" />
                    <stop offset="50%" stopColor="#0066FF" />
                    <stop offset="100%" stopColor="#00D2FF" />
                  </linearGradient>
                </defs>
                {/* Horizontal reference grid lines */}
                <line x1="0" y1="30" x2="500" y2="30" stroke="#22293D" strokeDasharray="3 3" opacity="0.6" />
                <line x1="0" y1="70" x2="500" y2="70" stroke="#22293D" strokeDasharray="3 3" opacity="0.6" />
                <line x1="0" y1="110" x2="500" y2="110" stroke="#22293D" strokeDasharray="3 3" opacity="0.6" />

                {/* Area Fill */}
                <path
                  d="M0,90 Q 60,75 120,45 T 240,60 T 360,25 T 500,15 L 500,120 L 0,120 Z"
                  fill="url(#chartGradient)"
                />

                {/* Smooth Curve Line */}
                <path
                  d="M0,90 Q 60,75 120,45 T 240,60 T 360,25 T 500,15"
                  fill="none"
                  stroke="url(#lineStroke)"
                  strokeWidth="2.5"
                />

                {/* Metric Points */}
                <circle cx="120" cy="45" r="4" fill="#00D2FF" stroke="#0E111A" strokeWidth="2" />
                <circle cx="240" cy="60" r="4" fill="#0066FF" stroke="#0E111A" strokeWidth="2" />
                <circle cx="360" cy="25" r="4" fill="#38BDF8" stroke="#0E111A" strokeWidth="2" />
                <circle cx="500" cy="15" r="4" fill="#F8FAFC" stroke="#00D2FF" strokeWidth="2" />
              </svg>
            </div>

            {/* Bottom Status bar */}
            <div className="mt-3 pt-3 border-t border-[#22293D] flex items-center justify-between text-[11px] text-[#94A3B8]">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_6px_#10B981]"></span>
                <span>All microservices operational</span>
              </div>
              <span className="text-[#00D2FF] flex items-center gap-1 font-mono hover:text-[#38BDF8] transition-colors cursor-pointer">
                Cluster Health: Optimal <ArrowUpRight className="w-3 h-3" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
