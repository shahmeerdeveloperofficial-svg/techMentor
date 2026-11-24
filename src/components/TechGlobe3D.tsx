import { useEffect, useRef } from "react";
import { Radio } from "lucide-react";

interface TechGlobe3DProps {
  className?: string;
  size?: number;
}

interface Point3D {
  x: number;
  y: number;
  z: number;
  lat: number;
  lng: number;
}

export default function TechGlobe3D({ className = "", size = 480 }: TechGlobe3DProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const context: CanvasRenderingContext2D = ctx;

    let animationFrameId: number;
    let rotationY = 0;
    let rotationX = 0.25;
    let targetRotationX = 0.25;
    let isDragging = false;
    let lastMouseX = 0;
    let lastMouseY = 0;

    // High DPI scaling
    const dpr = window.devicePixelRatio || 1;
    const width = size;
    const height = size;
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;
    context.scale(dpr, dpr);

    const radius = size * 0.36;
    const centerX = width / 2;
    const centerY = height / 2;

    // Generate globe surface points
    const points: Point3D[] = [];
    const numPoints = 280;
    const phi = Math.PI * (3 - Math.sqrt(5)); // Golden ratio spiral

    for (let i = 0; i < numPoints; i++) {
      const y = 1 - (i / (numPoints - 1)) * 2; // -1 to 1
      const radiusAtY = Math.sqrt(1 - y * y);
      const theta = phi * i;
      const x = Math.cos(theta) * radiusAtY;
      const z = Math.sin(theta) * radiusAtY;

      points.push({
        x: x * radius,
        y: y * radius,
        z: z * radius,
        lat: Math.asin(y),
        lng: theta,
      });
    }

    // Key tech hubs on globe (Lahore highlighted as primary)
    const hubs = [
      { name: "China Scheme, Lahore", lat: 31.5204 * (Math.PI / 180), lng: 74.3587 * (Math.PI / 180), isPrimary: true },
      { name: "Dubai", lat: 25.2048 * (Math.PI / 180), lng: 55.2708 * (Math.PI / 180), isPrimary: false },
      { name: "London", lat: 51.5074 * (Math.PI / 180), lng: -0.1278 * (Math.PI / 180), isPrimary: false },
      { name: "Singapore", lat: 1.3521 * (Math.PI / 180), lng: 103.8198 * (Math.PI / 180), isPrimary: false },
      { name: "San Francisco", lat: 37.7749 * (Math.PI / 180), lng: -122.4194 * (Math.PI / 180), isPrimary: false },
    ];

    // Mouse handlers for 3D rotation
    function onMouseDown(e: MouseEvent) {
      isDragging = true;
      lastMouseX = e.clientX;
      lastMouseY = e.clientY;
    }

    function onMouseMove(e: MouseEvent) {
      if (!isDragging) return;
      const dx = e.clientX - lastMouseX;
      const dy = e.clientY - lastMouseY;
      rotationY += dx * 0.008;
      targetRotationX += dy * 0.008;
      targetRotationX = Math.max(-0.8, Math.min(0.8, targetRotationX));
      lastMouseX = e.clientX;
      lastMouseY = e.clientY;
    }

    function onMouseUp() {
      isDragging = false;
    }

    // Touch handlers for mobile
    function onTouchStart(e: TouchEvent) {
      if (e.touches.length === 1) {
        isDragging = true;
        lastMouseX = e.touches[0].clientX;
        lastMouseY = e.touches[0].clientY;
      }
    }

    function onTouchMove(e: TouchEvent) {
      if (!isDragging || e.touches.length !== 1) return;
      const dx = e.touches[0].clientX - lastMouseX;
      const dy = e.touches[0].clientY - lastMouseY;
      rotationY += dx * 0.008;
      targetRotationX += dy * 0.008;
      targetRotationX = Math.max(-0.8, Math.min(0.8, targetRotationX));
      lastMouseX = e.touches[0].clientX;
      lastMouseY = e.touches[0].clientY;
    }

    function onTouchEnd() {
      isDragging = false;
    }

    canvas.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onMouseUp);
    canvas.addEventListener("touchstart", onTouchStart, { passive: true });
    window.addEventListener("touchmove", onTouchMove, { passive: true });
    window.addEventListener("touchend", onTouchEnd);

    // Render loop
    let tick = 0;
    function render() {
      tick += 0.015;
      if (!isDragging) {
        rotationY += 0.006; // continuous gentle spin
      }
      rotationX += (targetRotationX - rotationX) * 0.08;

      context.clearRect(0, 0, width, height);

      // 1. Draw glowing background aura
      const radialGlow = context.createRadialGradient(
        centerX,
        centerY,
        radius * 0.2,
        centerX,
        centerY,
        radius * 1.35
      );
      radialGlow.addColorStop(0, "rgba(0, 102, 255, 0.22)");
      radialGlow.addColorStop(0.6, "rgba(0, 210, 255, 0.08)");
      radialGlow.addColorStop(1, "rgba(8, 9, 14, 0)");
      context.fillStyle = radialGlow;
      context.beginPath();
      context.arc(centerX, centerY, radius * 1.35, 0, Math.PI * 2);
      context.fill();

      // 2. Draw 3D Orbital Rings (Matching Tech Mentors Logo Chrome & Cyan Orbit)
      const ringTilt = 0.55;
      const ringRadius = radius * 1.32;
      context.save();
      context.translate(centerX, centerY);
      context.rotate(-0.35); // slant angle like logo
      context.scale(1, ringTilt);

      // Outer glowing orbital track
      context.beginPath();
      context.arc(0, 0, ringRadius, 0, Math.PI * 2);
      context.strokeStyle = "rgba(0, 210, 255, 0.35)";
      context.lineWidth = 1.5;
      context.setLineDash([8, 8]);
      context.stroke();
      context.setLineDash([]);

      // Inner silver-chrome metallic orbital sweep
      context.beginPath();
      context.arc(0, 0, ringRadius - 2, 0, Math.PI * 2);
      const ringGrad = context.createLinearGradient(-ringRadius, 0, ringRadius, 0);
      ringGrad.addColorStop(0, "rgba(203, 213, 225, 0.15)");
      ringGrad.addColorStop(0.5, "rgba(0, 210, 255, 0.85)");
      ringGrad.addColorStop(1, "rgba(0, 102, 255, 0.2)");
      context.strokeStyle = ringGrad;
      context.lineWidth = 2.5;
      context.stroke();

      // Orbiting satellite pulse node
      const orbAngle = tick * 1.2;
      const orbX = Math.cos(orbAngle) * ringRadius;
      const orbY = Math.sin(orbAngle) * ringRadius;
      context.beginPath();
      context.arc(orbX, orbY, 4.5, 0, Math.PI * 2);
      context.fillStyle = "#00D2FF";
      context.shadowColor = "#00D2FF";
      context.shadowBlur = 12;
      context.fill();
      context.shadowBlur = 0;
      context.restore();

      // 3. Project 3D sphere points
      const cosY = Math.cos(rotationY);
      const sinY = Math.sin(rotationY);
      const cosX = Math.cos(rotationX);
      const sinX = Math.sin(rotationX);

      interface ProjectedPoint {
        px: number;
        py: number;
        z: number;
        alpha: number;
        size: number;
      }

      const projected: ProjectedPoint[] = [];

      for (let i = 0; i < points.length; i++) {
        const pt = points[i];
        // Rotate around Y axis
        const x1 = pt.x * cosY - pt.z * sinY;
        const z1 = pt.z * cosY + pt.x * sinY;
        // Rotate around X axis
        const y2 = pt.y * cosX - z1 * sinX;
        const z2 = z1 * cosX + pt.y * sinX;

        // Perspective depth scale
        const scale = 360 / (360 + z2);
        const px = centerX + x1 * scale;
        const py = centerY + y2 * scale;
        const alpha = Math.max(0.1, (z2 + radius) / (radius * 2));

        projected.push({
          px,
          py,
          z: z2,
          alpha,
          size: Math.max(1, 2.2 * scale),
        });
      }

      // Sort points from back to front for proper 3D rendering
      projected.sort((a, b) => a.z - b.z);

      // Draw points and connective web
      for (let i = 0; i < projected.length; i++) {
        const p = projected[i];
        context.beginPath();
        context.arc(p.px, p.py, p.size, 0, Math.PI * 2);

        if (p.z > 0) {
          context.fillStyle = `rgba(0, 210, 255, ${Math.min(1, p.alpha * 1.2)})`;
          context.shadowColor = "rgba(0, 210, 255, 0.4)";
          context.shadowBlur = p.size * 2;
        } else {
          context.fillStyle = `rgba(148, 163, 184, ${p.alpha * 0.4})`;
          context.shadowBlur = 0;
        }
        context.fill();
        context.shadowBlur = 0;
      }

      // 4. Render Hub Markers (Lahore Hub with pulsing beacon)
      for (const hub of hubs) {
        const hx = radius * Math.cos(hub.lat) * Math.sin(hub.lng);
        const hy = -radius * Math.sin(hub.lat);
        const hz = radius * Math.cos(hub.lat) * Math.cos(hub.lng);

        const x1 = hx * cosY - hz * sinY;
        const z1 = hz * cosY + hx * sinY;
        const y2 = hy * cosX - z1 * sinX;
        const z2 = z1 * cosX + hy * sinX;

        if (z2 > -radius * 0.2) {
          const scale = 360 / (360 + z2);
          const px = centerX + x1 * scale;
          const py = centerY + y2 * scale;

          if (hub.isPrimary) {
            // Pulsing Lahore Beacon
            const pulse = (Math.sin(tick * 4) + 1) / 2;
            context.beginPath();
            context.arc(px, py, 6 + pulse * 6, 0, Math.PI * 2);
            context.strokeStyle = `rgba(0, 210, 255, ${0.8 - pulse * 0.5})`;
            context.lineWidth = 1.5;
            context.stroke();

            context.beginPath();
            context.arc(px, py, 4, 0, Math.PI * 2);
            context.fillStyle = "#F8FAFC";
            context.shadowColor = "#00D2FF";
            context.shadowBlur = 14;
            context.fill();
            context.shadowBlur = 0;

            // City label pill
            context.font = "bold 10px Inter, system-ui, sans-serif";
            const text = "📍 Lahore Campus";
            const textWidth = context.measureText(text).width;
            context.fillStyle = "rgba(14, 17, 26, 0.85)";
            context.strokeStyle = "rgba(0, 210, 255, 0.5)";
            context.lineWidth = 1;
            context.beginPath();
            context.roundRect(px + 8, py - 12, textWidth + 10, 18, 4);
            context.fill();
            context.stroke();

            context.fillStyle = "#00D2FF";
            context.fillText(text, px + 13, py + 1);
          } else {
            // Secondary Hub Dot
            context.beginPath();
            context.arc(px, py, 2.5, 0, Math.PI * 2);
            context.fillStyle = "rgba(203, 213, 225, 0.7)";
            context.fill();
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    }

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      canvas.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);
      canvas.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("touchend", onTouchEnd);
    };
  }, [size]);

  return (
    <div className={`relative flex flex-col items-center select-none ${className}`}>
      {/* 3D Canvas */}
      <div className="relative group cursor-grab active:cursor-grabbing">
        <canvas
          ref={canvasRef}
          className="rounded-full drop-shadow-[0_0_40px_rgba(0,102,255,0.35)]"
        />

        {/* Floating 3D Pixel Voxel Cubes (Exact match with the Tech Mentors Logo 4 Cubes!) */}
        <div
          aria-hidden="true"
          className="absolute -top-4 -left-4 pointer-events-none hidden sm:flex flex-col gap-1.5 animate-subtle-float"
        >
          <div className="flex gap-1.5">
            <div className="w-5 h-5 rounded-md bg-gradient-to-br from-[#CBD5E1] to-[#64748B] border border-white/40 shadow-[0_0_12px_rgba(255,255,255,0.3)] transform rotate-6 hover:rotate-12 transition-transform" />
            <div className="w-5 h-5 rounded-md bg-gradient-to-br from-[#00D2FF] to-[#0066FF] border border-[#00D2FF]/60 shadow-[0_0_15px_rgba(0,210,255,0.6)] transform -rotate-3" />
          </div>
          <div className="flex gap-1.5 pl-3">
            <div className="w-4 h-4 rounded bg-gradient-to-br from-[#0066FF] to-[#003899] border border-[#0066FF]/60 shadow-[0_0_10px_rgba(0,102,255,0.5)] transform rotate-12" />
            <div className="w-4 h-4 rounded bg-gradient-to-br from-[#CBD5E1] to-[#94A3B8] border border-white/30 transform -rotate-6" />
          </div>
        </div>

        {/* Interactive hint overlay */}
        <div className="absolute bottom-2 inset-x-0 flex items-center justify-center pointer-events-none">
          <span className="text-[11px] font-medium text-[#94A3B8] bg-[#0E111A]/90 border border-[#22293D] px-3 py-1 rounded-full shadow-lg flex items-center gap-1.5 backdrop-blur-sm">
            <Radio className="w-3 h-3 text-[#00D2FF] animate-pulse" />
            <span>Interactive 3D Tech Globe • Drag to Rotate</span>
          </span>
        </div>
      </div>
    </div>
  );
}
