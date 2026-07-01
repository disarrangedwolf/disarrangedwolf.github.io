<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Developer Portfolio — Dark Tech Style</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <script>
        tailwind.config = {
            theme: {
                extend: {
                    colors: {
                        darkBg: '#09090b',     /* Ultra-dark canvas background */
                        darkCard: '#141417',   /* Slightly lighter dark for components */
                        techBorder: '#27272a', /* Sharp IDE-style borders */
                    },
                    animation: {
                        'infinite-scroll': 'infinite-scroll 25s linear infinite',
                    },
                    keyframes: {
                        'infinite-scroll': {
                            from { transform: translateX(0); }
                            to { transform: translateX(-50%); }
                        }
                    }
                }
            }
        }
    </script>
    <style>
        /* Smooth scrolling for the modern portfolio feel */
        html { scroll-behavior: smooth; }
        /* Custom subtle scrollbar */
        ::-webkit-scrollbar { width: 6px; }
        ::-webkit-scrollbar-track { background: #09090b; }
        ::-webkit-scrollbar-thumb { background: #27272a; border-radius: 3px; }
    </style>
</head>
<body class="bg-darkBg text-zinc-100 font-sans antialiased selection:bg-zinc-700 selection:text-white">

    <header class="w-full max-w-5xl mx-auto px-6 py-8 flex justify-between items-center border-b border-techBorder/50">
        <a href="#" class="text-sm font-bold tracking-wider uppercase text-zinc-400 hover:text-white transition">YOURNAME</a>
        <nav class="flex gap-6 text-sm text-zinc-400">
            <a href="#projects" class="hover:text-white transition">Projects</a>
            <a href="https://github.com" target="_blank" class="hover:text-white transition">GitHub</a>
            <a href="#contact" class="hover:text-white transition">Contact</a>
        </nav>
    </header>

    <main class="max-w-5xl mx-auto px-6 pt-20 pb-12">
        <div class="max-w-2xl">
            <p class="text-xs font-mono text-zinc-500 uppercase tracking-widest mb-3">// Core Focus</p>
            <h1 class="text-4xl sm:text-5xl font-extrabold tracking-tight text-white mb-6 leading-tight">
                Systems Engineer & Full-Stack Developer.
            </h1>
            <p class="text-lg text-zinc-400 leading-relaxed mb-8">
                I build high-throughput backends, secure trade infrastructures, and custom UI layers. Server-synced, optimized for high load, and battle-tested against exploits.
            </p>
            
            <div class="flex flex-wrap gap-2">
                <span class="px-3 py-1 text-xs font-mono bg-darkCard border border-techBorder rounded text-zinc-300">TypeScript</span>
                <span class="px-3 py-1 text-xs font-mono bg-darkCard border border-techBorder rounded text-zinc-300">Go / Lua</span>
                <span class="px-3 py-1 text-xs font-mono bg-darkCard border border-techBorder rounded text-zinc-300">React</span>
                <span class="px-3 py-1 text-xs font-mono bg-darkCard border border-techBorder rounded text-zinc-300">PostgreSQL</span>
                <span class="px-3 py-1 text-xs font-mono bg-darkCard border border-techBorder rounded text-zinc-300">Docker</span>
            </div>
        </div>
    </main>

    <div class="w-full overflow-hidden bg-darkCard border-y border-techBorder py-4 my-12">
        <div class="flex whitespace-nowrap w-[200%] animate-infinite-scroll text-sm font-mono tracking-wider text-zinc-500 uppercase">
            <span class="mx-4">⚡ Real-time Architecture</span> <span class="text-zinc-700">•</span>
            <span class="mx-4">🛠️ Zero-Dupe Inventories</span> <span class="text-zinc-700">•</span>
            <span class="mx-4">🎯 Custom Canvas HUDs</span> <span class="text-zinc-700">•</span>
            <span class="mx-4">🔒 Atomic Database State</span> <span class="text-zinc-700">•</span>
            <span class="mx-4">⚡ Real-time Architecture</span> <span class="text-zinc-700">•</span>
            <span class="mx-4">🛠️ Zero-Dupe Inventories</span> <span class="text-zinc-700">•</span>
            <span class="mx-4">🎯 Custom Canvas HUDs</span> <span class="text-zinc-700">•</span>
            <span class="mx-4">🔒 Atomic Database State</span> <span class="text-zinc-700">•</span>
        </div>
    </div>

    <section id="projects" class="max-w-5xl mx-auto px-6 py-12">
        <div class="border-b border-techBorder pb-4 mb-12">
            <h2 class="text-xs font-mono uppercase tracking-widest text-zinc-500">01 / Featured Work</h2>
            <p class="text-xl text-zinc-300 mt-1">Built for performance, not just demos.</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            <div class="group relative bg-darkCard border border-techBorder rounded p-6 hover:border-zinc-500 transition-all duration-300 flex flex-col justify-between">
                <div>
                    <div class="flex justify-between items-start mb-6">
                        <span class="text-xs font-mono text-zinc-600 group-hover:text-zinc-400 transition">// 01</span>
                        <div class="flex gap-2">
                            <span class="px-2 py-0.5 text-[10px] font-mono bg-zinc-800 border border-techBorder text-zinc-400 rounded">Go</span>
                            <span class="px-2 py-0.5 text-[10px] font-mono bg-zinc-800 border border-techBorder text-zinc-400 rounded">gRPC</span>
                        </div>
                    </div>
                    <h3 class="text-xl font-bold text-white mb-2">Atomic Inventory Core</h3>
                    <p class="text-sm text-zinc-400 leading-relaxed mb-6">
                        A server-side inventory abstraction layer designed to prevent state desyncs and item duplication exploits entirely. Features custom item properties and thread-safe persistence.
                    </p>
                </div>
                <div class="text-xs font-mono text-zinc-500 group-hover:text-white transition flex items-center gap-1">
                    View Project <span class="transform group-hover:translate-x-1 transition-transform">→</span>
                </div>
            </div>

            <div class="group relative bg-darkCard border border-techBorder rounded p-6 hover:border-zinc-500 transition-all duration-300 flex flex-col justify-between">
                <div>
                    <div class="flex justify-between items-start mb-6">
                        <span class="text-xs font-mono text-zinc-600 group-hover:text-zinc-400 transition">// 02</span>
                        <div class="flex gap-2">
                            <span class="px-2 py-0.5 text-[10px] font-mono bg-zinc-800 border border-techBorder text-zinc-400 rounded">React</span>
                            <span class="px-2 py-0.5 text-[10px] font-mono bg-zinc-800 border border-techBorder text-zinc-400 rounded">Canvas</span>
                        </div>
                    </div>
                    <h3 class="text-xl font-bold text-white mb-2">Minimal Tactical HUD</h3>
                    <p class="text-sm text-zinc-400 leading-relaxed mb-6">
                        A highly optimized game user interface rendering critical status indicators at a rock-solid 60 FPS. Zero layout shifts, with modular container resizing.
                    </p>
                </div>
                <div class="text-xs font-mono text-zinc-500 group-hover:text-white transition flex items-center gap-1">
                    View Project <span class="transform group-hover:translate-x-1 transition-transform">→</span>
                </div>
            </div>

        </div>
    </section>

    <footer id="contact" class="max-w-5xl mx-auto px-6 pt-20 pb-12 border-t border-techBorder/50 mt-20">
        <div class="md:flex md:justify-between md:items-end">
            <div class="max-w-md mb-8 md:mb-0">
                <h2 class="text-xl font-bold text-white mb-2">Need an engineering overhaul?</h2>
                <p class="text-sm text-zinc-400 leading-relaxed">
                    Custom mechanics, optimized backend infrastructure, or custom web integration layers — let's build something solid.
                </p>
            </div>
            
            <div class="text-left md:text-right font-mono text-sm">
                <p class="text-zinc-500 mb-1">Get in touch</p>
                <a href="mailto:your.email@example.com" class="text-white hover:underline block mb-1">your.email@example.com</a>
                <a href="https://github.com" target="_blank" class="text-zinc-400 hover:text-white block">github.com/yourusername</a>
            </div>
        </div>

        <div class="flex justify-between items-center text-xs font-mono text-zinc-600 mt-16 pt-4 border-t border-techBorder/30">
            <span>© 2026 YOURNAME</span>
            <span>Code by day, Code by night</span>
        </div>
    </footer>

</body>
</html>