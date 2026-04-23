"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Logo } from "@/components/Logo";

function BeachCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let raf: number;
    let t = 0;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const sailboats = [
      { x: 0.08, speed: 0.00016, sz: 1.0 },
      { x: 0.25, speed: 0.00012, sz: 0.75 },
      { x: 0.42, speed: 0.00014, sz: 0.6 },
    ];

    const people = Array.from({ length: 5 }, () => ({
      x: 0.58 + Math.random() * 0.28,
      speed: (0.00013 + Math.random() * 0.00009) * (Math.random() > 0.5 ? 1 : -1),
      phase: Math.random() * Math.PI * 2,
      tone: `hsl(${15 + Math.random() * 30},55%,${42 + Math.random() * 16}%)`,
    }));

    const birds = Array.from({ length: 4 }, () => ({
      x: Math.random(),
      y: 0.06 + Math.random() * 0.22,
      speed: 0.00016 + Math.random() * 0.0001,
      phase: Math.random() * Math.PI * 2,
      dir: Math.random() > 0.5 ? 1 : -1,
    }));

    function draw() {
      const W = canvas!.width, H = canvas!.height;
      ctx!.clearRect(0, 0, W, H);

      const sky = ctx!.createLinearGradient(0, 0, 0, H * 0.48);
      sky.addColorStop(0, "#2e9fd8");
      sky.addColorStop(1, "#96d8f2");
      ctx!.fillStyle = sky;
      ctx!.fillRect(0, 0, W, H * 0.48);

      const sx = W * 0.9, sy = H * 0.14;
      const sg = ctx!.createRadialGradient(sx, sy, 0, sx, sy, H * 0.22);
      sg.addColorStop(0, "rgba(255,242,100,0.5)");
      sg.addColorStop(0.4, "rgba(255,218,50,0.14)");
      sg.addColorStop(1, "rgba(255,200,40,0)");
      ctx!.fillStyle = sg;
      ctx!.beginPath(); ctx!.arc(sx, sy, H * 0.22, 0, Math.PI * 2); ctx!.fill();
      ctx!.fillStyle = "#fff9b0";
      ctx!.beginPath(); ctx!.arc(sx, sy, H * 0.065, 0, Math.PI * 2); ctx!.fill();

      [[0.13, 0.1], [0.38, 0.07], [0.60, 0.12]].forEach(([cx, cy]) => {
        const bx = W * cx + Math.sin(t * 0.25 + cx * 10) * 5;
        const by = H * cy;
        ctx!.fillStyle = "rgba(255,255,255,0.9)";
        ctx!.beginPath(); ctx!.ellipse(bx, by, W * 0.055, H * 0.065, 0, 0, Math.PI * 2); ctx!.fill();
        ctx!.beginPath(); ctx!.ellipse(bx + W * 0.033, by + H * 0.01, W * 0.036, H * 0.05, 0, 0, Math.PI * 2); ctx!.fill();
        ctx!.beginPath(); ctx!.ellipse(bx - W * 0.030, by + H * 0.01, W * 0.033, H * 0.046, 0, 0, Math.PI * 2); ctx!.fill();
      });

      const seaTop = H * 0.46;
      const seaG = ctx!.createLinearGradient(0, seaTop, 0, H);
      seaG.addColorStop(0, "#12a8cc");
      seaG.addColorStop(0.5, "#0b80a0");
      seaG.addColorStop(1, "#085e78");
      ctx!.fillStyle = seaG;
      ctx!.fillRect(0, seaTop, W * 0.62, H - seaTop);

      const spG = ctx!.createRadialGradient(W * 0.9, seaTop + H * 0.06, 0, W * 0.6, seaTop + H * 0.3, W * 0.55);
      spG.addColorStop(0, "rgba(255,240,120,0.18)");
      spG.addColorStop(1, "rgba(255,210,60,0)");
      ctx!.fillStyle = spG;
      ctx!.fillRect(0, seaTop, W * 0.62, H - seaTop);

      for (let i = 0; i < 5; i++) {
        const wy = seaTop + (H - seaTop) * (0.08 + i * 0.16);
        const maxX = W * (0.58 - i * 0.03);
        ctx!.beginPath(); ctx!.moveTo(0, wy);
        for (let x = 0; x <= maxX; x += 3) {
          const yw = Math.sin((x / maxX) * Math.PI * 5 + t * 2.2 + i * 0.8) * (H * 0.009);
          ctx!.lineTo(x, yw + wy);
        }
        ctx!.strokeStyle = `rgba(255,255,255,${0.24 - i * 0.03})`;
        ctx!.lineWidth = 1.2; ctx!.stroke();
      }

      const sandG = ctx!.createLinearGradient(W * 0.45, 0, W, 0);
      sandG.addColorStop(0, "#dcc870");
      sandG.addColorStop(0.25, "#d8be60");
      sandG.addColorStop(1, "#c4a038");
      ctx!.fillStyle = sandG;
      ctx!.fillRect(W * 0.45, seaTop, W * 0.55, H - seaTop);

      for (let w = 0; w < 4; w++) {
        const waveOffset = t * 1.4 + w * 1.1;
        const reach = W * (0.52 + Math.sin(t * 0.9 + w * 0.7) * 0.025);
        ctx!.beginPath();
        ctx!.moveTo(0, H * 0.46);
        ctx!.lineTo(reach, H * 0.46);
        for (let y = H * 0.46; y <= H; y += 2) {
          const progress = (y - H * 0.46) / (H * 0.54);
          const waveX = reach
            + Math.sin(progress * Math.PI * 3 + waveOffset) * W * 0.018
            + Math.sin(progress * Math.PI * 6 - t * 2 + w) * W * 0.009
            - progress * W * 0.04;
          ctx!.lineTo(waveX, y);
        }
        ctx!.lineTo(0, H); ctx!.closePath();
        const wg = ctx!.createLinearGradient(W * 0.42, 0, W * 0.60, 0);
        wg.addColorStop(0, `rgba(18,168,204,${0.85 - w * 0.18})`);
        wg.addColorStop(0.6, `rgba(180,230,245,${0.35 - w * 0.07})`);
        wg.addColorStop(1, "rgba(200,235,248,0)");
        ctx!.fillStyle = wg; ctx!.fill();
      }

      for (let f = 0; f < 3; f++) {
        const foamX = W * (0.50 + Math.sin(t * 1.2 + f * 1.4) * 0.025 - f * 0.008);
        ctx!.beginPath();
        for (let y = H * 0.48; y <= H; y += 3) {
          const fx = foamX + Math.sin((y / H) * Math.PI * 5 + t * 2 + f * 0.9) * W * 0.012;
          y === H * 0.48 ? ctx!.moveTo(fx, y) : ctx!.lineTo(fx, y);
        }
        ctx!.strokeStyle = `rgba(255,255,255,${0.55 - f * 0.14})`;
        ctx!.lineWidth = W * 0.003 - f * 0.5; ctx!.stroke();
      }

      const wetG = ctx!.createLinearGradient(W * 0.50, 0, W * 0.60, 0);
      wetG.addColorStop(0, "rgba(160,210,225,0.38)");
      wetG.addColorStop(1, "rgba(160,210,225,0)");
      ctx!.fillStyle = wetG;
      ctx!.fillRect(W * 0.50, seaTop, W * 0.10, H - seaTop);

      const hx = W * 0.80, hy = H * 0.10;
      const hw = W * 0.18, hh = H * 0.62;
      ctx!.fillStyle = "rgba(0,0,0,0.08)";
      ctx!.fillRect(hx + hw * 0.05, hy + hh, hw * 0.9, H * 0.06);
      const buildG = ctx!.createLinearGradient(hx, 0, hx + hw, 0);
      buildG.addColorStop(0, "#f8eedc"); buildG.addColorStop(1, "#eedfc8");
      ctx!.fillStyle = buildG; ctx!.fillRect(hx, hy, hw, hh);
      ctx!.strokeStyle = "#c8a870"; ctx!.lineWidth = 1.5; ctx!.strokeRect(hx, hy, hw, hh);
      for (let fl = 1; fl < 3; fl++) {
        ctx!.beginPath(); ctx!.moveTo(hx, hy + hh * fl / 3); ctx!.lineTo(hx + hw, hy + hh * fl / 3);
        ctx!.strokeStyle = "rgba(180,150,100,0.4)"; ctx!.lineWidth = 0.8; ctx!.stroke();
      }
      for (let row = 0; row < 3; row++) {
        for (let col = 0; col < 4; col++) {
          const wx = hx + hw * (0.1 + col * 0.23);
          const wy = hy + hh * (0.08 + row * 0.3);
          const ww = hw * 0.14, wh = hh * 0.16;
          ctx!.fillStyle = (row + col) % 3 === 0 ? "#ffe898" : "rgba(160,210,240,0.75)";
          ctx!.fillRect(wx, wy, ww, wh);
          ctx!.strokeStyle = "#9a7848"; ctx!.lineWidth = 0.8; ctx!.strokeRect(wx, wy, ww, wh);
          ctx!.beginPath();
          ctx!.moveTo(wx + ww / 2, wy); ctx!.lineTo(wx + ww / 2, wy + wh);
          ctx!.moveTo(wx, wy + wh / 2); ctx!.lineTo(wx + ww, wy + wh / 2);
          ctx!.strokeStyle = "rgba(100,80,40,0.25)"; ctx!.lineWidth = 0.5; ctx!.stroke();
        }
      }
      ctx!.fillStyle = "#b86830";
      ctx!.beginPath();
      ctx!.moveTo(hx - W * 0.01, hy); ctx!.lineTo(hx + hw / 2, hy - hh * 0.18); ctx!.lineTo(hx + hw + W * 0.01, hy);
      ctx!.closePath(); ctx!.fill();
      ctx!.strokeStyle = "#904820"; ctx!.lineWidth = 1.2; ctx!.stroke();
      ctx!.fillStyle = "#c87838";
      ctx!.fillRect(hx + hw * 0.68, hy - hh * 0.22, hw * 0.07, hh * 0.1);
      const signH = hh * 0.13, signY = hy + hh * 0.85;
      ctx!.fillStyle = "#1a3a70";
      ctx!.fillRect(hx + hw * 0.04, signY, hw * 0.92, signH);
      ctx!.strokeStyle = "#c8a030"; ctx!.lineWidth = 1.5;
      ctx!.strokeRect(hx + hw * 0.04, signY, hw * 0.92, signH);
      const fontSize = Math.max(8, H * 0.085);
      ctx!.fillStyle = "#ffffff";
      ctx!.font = `bold ${fontSize}px sans-serif`;
      ctx!.textAlign = "center";
      ctx!.fillText("SWEET ESCAPE", hx + hw / 2, signY + signH * 0.62);

      const ptx = hx - W * 0.05, ptBase = hy + hh + H * 0.03;
      const sway = Math.sin(t * 0.85) * W * 0.006;
      ctx!.beginPath();
      ctx!.moveTo(ptx, ptBase);
      ctx!.quadraticCurveTo(ptx + sway * 0.5, ptBase - hh * 0.45, ptx + sway * 1.2, ptBase - hh * 0.72);
      ctx!.strokeStyle = "#8b6810"; ctx!.lineWidth = W * 0.007; ctx!.lineCap = "round"; ctx!.stroke();
      const tipX = ptx + sway * 1.2, tipY = ptBase - hh * 0.72;
      ctx!.fillStyle = "#7a5010";
      ctx!.beginPath(); ctx!.arc(tipX - 3, tipY + 4, 4, 0, Math.PI * 2); ctx!.fill();
      ctx!.beginPath(); ctx!.arc(tipX + 4, tipY + 6, 3.5, 0, Math.PI * 2); ctx!.fill();
      [[-0.5,-0.42],[0,-0.52],[0.52,-0.38],[-1.0,-0.12],[1.0,-0.16],[1.6,0.05],[-1.6,0.08]].forEach(([lx,ly]) => {
        const ls2 = Math.sin(t * 1.1 + Math.abs(lx)) * 0.06;
        ctx!.beginPath(); ctx!.moveTo(tipX, tipY);
        ctx!.quadraticCurveTo(tipX + lx * W * 0.04 + ls2 * W * 0.01, tipY + ly * H * 0.13, tipX + lx * W * 0.075, tipY + ly * H * 0.22);
        ctx!.strokeStyle = "#2e8020"; ctx!.lineWidth = W * 0.005; ctx!.lineCap = "round"; ctx!.stroke();
      });

      sailboats.forEach(b => {
        b.x += b.speed; if (b.x > 0.56) b.x = 0.02;
        const bx = W * b.x;
        const by = seaTop + (H - seaTop) * 0.22 + Math.sin(t * 1.1 + b.x * 8) * H * 0.025;
        const s = H * b.sz * 0.11;
        ctx!.save(); ctx!.translate(bx, by);
        ctx!.beginPath(); ctx!.moveTo(-s,0); ctx!.lineTo(s,0); ctx!.lineTo(s*0.65,s*0.45); ctx!.lineTo(-s*0.65,s*0.45); ctx!.closePath();
        ctx!.fillStyle = "#c07030"; ctx!.fill(); ctx!.strokeStyle = "#803010"; ctx!.lineWidth = 0.8; ctx!.stroke();
        ctx!.beginPath(); ctx!.moveTo(0,0); ctx!.lineTo(0,-s*2.2); ctx!.strokeStyle = "#604020"; ctx!.lineWidth = 1.2; ctx!.stroke();
        ctx!.beginPath(); ctx!.moveTo(0,0); ctx!.lineTo(0,-s*2.1); ctx!.lineTo(s*1.2,-s*0.15); ctx!.closePath(); ctx!.fillStyle = "rgba(255,255,255,0.93)"; ctx!.fill();
        ctx!.beginPath(); ctx!.moveTo(0,0); ctx!.lineTo(0,-s*1.7); ctx!.lineTo(-s*0.85,-s*0.1); ctx!.closePath(); ctx!.fillStyle = "rgba(240,240,255,0.85)"; ctx!.fill();
        ctx!.restore();
      });

      people.forEach(p => {
        p.x += p.speed; p.phase += 0.09;
        if (p.x > 0.96) p.x = 0.58; if (p.x < 0.55) p.x = 0.94;
        const px = W * p.x, py = H * 0.82, sz = H * 0.09;
        const dir = p.speed > 0 ? 1 : -1;
        const ls = Math.sin(p.phase) * sz * 0.3;
        ctx!.save(); ctx!.translate(px, py); if (dir < 0) ctx!.scale(-1, 1);
        ctx!.fillStyle = "rgba(0,0,0,0.09)";
        ctx!.beginPath(); ctx!.ellipse(0, sz*0.1, sz*0.4, sz*0.08, 0, 0, Math.PI*2); ctx!.fill();
        ctx!.strokeStyle = p.tone; ctx!.lineWidth = sz*0.14; ctx!.lineCap = "round";
        ctx!.beginPath(); ctx!.moveTo(0,-sz*0.08); ctx!.lineTo(-sz*0.15+ls, sz*0.42); ctx!.stroke();
        ctx!.beginPath(); ctx!.moveTo(0,-sz*0.08); ctx!.lineTo( sz*0.15-ls, sz*0.42); ctx!.stroke();
        ctx!.strokeStyle = p.tone; ctx!.lineWidth = sz*0.19;
        ctx!.beginPath(); ctx!.moveTo(0,-sz*0.55); ctx!.lineTo(0,-sz*0.08); ctx!.stroke();
        ctx!.lineWidth = sz*0.11;
        ctx!.beginPath(); ctx!.moveTo(0,-sz*0.38); ctx!.lineTo(-sz*0.3-ls*0.5,-sz*0.04); ctx!.stroke();
        ctx!.beginPath(); ctx!.moveTo(0,-sz*0.38); ctx!.lineTo( sz*0.3+ls*0.5,-sz*0.04); ctx!.stroke();
        ctx!.fillStyle = "#f5c5a3"; ctx!.beginPath(); ctx!.arc(0,-sz*0.72,sz*0.175,0,Math.PI*2); ctx!.fill();
        ctx!.fillStyle = "#5c3010"; ctx!.beginPath(); ctx!.arc(0,-sz*0.78,sz*0.15,Math.PI,0); ctx!.fill();
        ctx!.restore();
      });

      birds.forEach(b => {
        b.x += b.speed * b.dir; b.phase += 0.1;
        if (b.x > 1.05) b.x = -0.05; if (b.x < -0.05) b.x = 1.05;
        const bx = W * b.x, by = H * b.y;
        const fl = Math.sin(b.phase) * H * 0.026, sz = H * 0.024;
        ctx!.save(); ctx!.translate(bx, by); if (b.dir < 0) ctx!.scale(-1, 1);
        ctx!.strokeStyle = "rgba(25,25,45,0.65)"; ctx!.lineWidth = 1.3; ctx!.lineCap = "round";
        ctx!.beginPath(); ctx!.moveTo(-sz*1.4, fl*0.4); ctx!.quadraticCurveTo(0,-fl*0.25,sz*1.4,fl*0.4); ctx!.stroke();
        ctx!.restore();
      });

      t += 0.016;
      raf = requestAnimationFrame(draw);
    }

    draw();
    return () => { cancelAnimationFrame(raf); window.removeEventListener("resize", resize); };
  }, []);

  return (
    <canvas ref={canvasRef} style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", display: "block" }} />
  );
}

interface SharedHeaderProps {
  activePage?: string;
}

export default function SharedHeader({ activePage }: SharedHeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white border-b">
      {/* Beach animation strip */}
      <div className="container mx-auto px-2 py-3" style={{ position: "relative", overflow: "hidden", minHeight: "110px" }}>
        <BeachCanvas />
        <div className="flex items-center justify-between gap-2" style={{ position: "relative", zIndex: 1 }}>
          <div>
            <Link href="/">
              <Logo />
            </Link>
          </div>
          <div className="hidden md:flex gap-4"></div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="bg-[#2a2a2a] text-white">
        {/* Mobile burger button */}
        <div className="md:hidden flex items-center justify-between container mx-auto px-4 py-4">
          <button className="text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile dropdown — tıklanınca kapanır */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#2a2a2a] absolute w-full left-0 z-50 text-center">
            <Link href="/" className="block px-4 py-3 hover:bg-[#3a3a3a]" onClick={() => setMobileMenuOpen(false)}>Home</Link>
            <Link href="/about" className="block px-4 py-3 hover:bg-[#3a3a3a]" onClick={() => setMobileMenuOpen(false)}>About Us</Link>
            <Link href="/fethiye" className="block px-4 py-3 hover:bg-[#3a3a3a]" onClick={() => setMobileMenuOpen(false)}>Fethiye</Link>
            <Link href="/rooms" className="block px-4 py-3 hover:bg-[#3a3a3a]" onClick={() => setMobileMenuOpen(false)}>Reserve Your Stay</Link>
            <Link href="/gallery" className="block px-4 py-3 hover:bg-[#3a3a3a]" onClick={() => setMobileMenuOpen(false)}>Rooms and Aparts</Link>
            <Link href="/how-to-get" className="block px-4 py-3 hover:bg-[#3a3a3a]" onClick={() => setMobileMenuOpen(false)}>Location and Transportation</Link>
            <Link href="/check-in" className="block px-4 py-3 hover:bg-[#3a3a3a]" onClick={() => setMobileMenuOpen(false)}>Check-In Guide</Link>
            <Link href="/transfer" className="block px-4 py-3 hover:bg-[#3a3a3a]" onClick={() => setMobileMenuOpen(false)}>Airport Transfer</Link>
            <Link href="/contact" className="block px-4 py-3 hover:bg-[#3a3a3a]" onClick={() => setMobileMenuOpen(false)}>Contact Us</Link>
          </div>
        )}

        {/* Desktop nav */}
        <div className="container mx-auto px-4">
          <div className="hidden md:flex items-center justify-between">
            <div className="flex">
              <Link href="/" className={`px-3 py-4 transition text-sm lg:text-base ${activePage === "home" ? "bg-[#1a1a1a]" : "hover:bg-[#3a3a3a]"}`}>Home</Link>
              <Link href="/about" className={`px-3 py-4 transition text-sm lg:text-base ${activePage === "about" ? "bg-[#1a1a1a]" : "hover:bg-[#3a3a3a]"}`}>About Us</Link>
              <Link href="/fethiye" className={`px-3 py-4 transition text-sm lg:text-base ${activePage === "fethiye" ? "bg-[#1a1a1a]" : "hover:bg-[#3a3a3a]"}`}>Fethiye</Link>
              <Link href="/rooms" className={`px-3 py-4 transition text-sm lg:text-base ${activePage === "rooms" ? "bg-[#1a1a1a]" : "hover:bg-[#3a3a3a]"}`}>Reserve Your Stay</Link>
              <Link href="/gallery" className={`px-3 py-4 transition text-sm lg:text-base ${activePage === "gallery" ? "bg-[#1a1a1a]" : "hover:bg-[#3a3a3a]"}`}>Rooms and Aparts</Link>
              <Link href="/how-to-get" className={`px-3 py-4 transition text-sm lg:text-base ${activePage === "contact" ? "bg-[#1a1a1a]" : "hover:bg-[#3a3a3a]"}`}>Location and Transportation</Link>
            </div>
            <div className="flex">
              <Link href="/check-in" className={`px-3 py-4 transition text-sm lg:text-base ${activePage === "checkin" ? "bg-[#3a3a3a]" : "bg-black hover:bg-[#3a3a3a]"}`}>Check-In Guide</Link>
              <Link href="/transfer" className="px-3 py-4 hover:bg-[#3a3a3a] transition text-sm lg:text-base">Airport Transfer</Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
