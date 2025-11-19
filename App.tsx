import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, Github, Linkedin, Mail, Terminal, Database, Code2, ExternalLink, FileText, ChevronRight, MapPin, Gamepad2, Lock, Palette, Box, Monitor, Layers, CloudRain, Sun, Wind, Droplets, ArrowLeft, Thermometer, Sunrise, Sunset, Navigation, Users, GraduationCap, BookOpen, Search, Bell, MoreVertical, CheckCircle, XCircle, Clock, Save, Filter, Play, Rocket, Book, RefreshCw, Trash2, Target, Zap } from 'lucide-react';

// --- Weather App Component (Dark Mode / Easy on Eyes) ---
const WeatherApp = ({ onBack }: { onBack: () => void }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-[#0f172a] to-[#020617] text-slate-100 font-sans selection:bg-indigo-500/30 p-4 md:p-8 relative overflow-hidden animate-in fade-in duration-500">
      {/* Background Ambient Effects - Subtle & Darker */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-indigo-500/5 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] bg-blue-900/5 rounded-full blur-[100px]"></div>
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Header */}
        <header className="flex items-center justify-between mb-8 md:mb-12">
          <button 
            onClick={onBack}
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 hover:bg-white/10 backdrop-blur-md transition-all hover:-translate-x-1 border border-white/5 text-sm font-medium text-slate-300 hover:text-white"
          >
            <ArrowLeft size={18} /> Portföye Dön
          </button>
          <div className="flex items-center gap-2">
             <div className="w-2 h-2 rounded-full bg-emerald-500/50 animate-pulse"></div>
             <span className="text-xs font-medium tracking-widest uppercase text-slate-500">Atmosphere Demo</span>
          </div>
        </header>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* Main Card */}
          <div className="lg:col-span-2 bg-slate-800/40 backdrop-blur-xl border border-white/5 rounded-3xl p-8 relative overflow-hidden group shadow-2xl shadow-black/20">
            <div className="absolute -top-12 -right-12 text-amber-500/10 group-hover:text-amber-500/20 transition-colors duration-700 rotate-12">
               <Sun size={240} />
            </div>
            
            <div className="relative z-10">
              <div className="flex items-center gap-2 text-slate-400 mb-1">
                <MapPin size={18} />
                <span className="text-lg font-medium tracking-wide">Bolu, Türkiye</span>
              </div>
              <div className="text-sm text-slate-500 mb-12">Bugün, 14 Ekim</div>

              <div className="flex flex-col md:flex-row md:items-end gap-4 md:gap-12">
                <div>
                  <h1 className="text-8xl md:text-9xl font-bold tracking-tighter text-slate-100 drop-shadow-lg">
                    14°
                  </h1>
                </div>
                <div className="mb-4">
                  <div className="text-2xl font-medium mb-1 text-indigo-200">Parçalı Bulutlu</div>
                  <div className="flex gap-4 text-sm text-slate-400 font-medium">
                    <span>Y: 18°</span>
                    <span>D: 9°</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Side Metrics */}
          <div className="space-y-6">
            {/* Air Quality */}
            <div className="bg-slate-800/30 backdrop-blur-lg border border-white/5 rounded-3xl p-6 hover:bg-slate-800/50 transition-colors">
              <div className="flex items-center gap-3 mb-4 text-slate-400">
                <Wind size={20} />
                <span className="font-medium text-sm uppercase tracking-wider">Rüzgar</span>
              </div>
              <div className="flex items-end justify-between">
                <div>
                   <div className="text-3xl font-bold text-slate-200">12 <span className="text-sm font-normal opacity-50">km/s</span></div>
                   <div className="text-xs text-slate-500 mt-1">Kuzeybatı</div>
                </div>
                <div className="h-10 w-10 rounded-full border border-white/10 flex items-center justify-center bg-white/5">
                    <Navigation size={16} className="rotate-45 text-indigo-400" />
                </div>
              </div>
            </div>

            {/* Humidity */}
            <div className="bg-slate-800/30 backdrop-blur-lg border border-white/5 rounded-3xl p-6 hover:bg-slate-800/50 transition-colors">
              <div className="flex items-center gap-3 mb-4 text-slate-400">
                <Droplets size={20} />
                <span className="font-medium text-sm uppercase tracking-wider">Nem</span>
              </div>
              <div className="flex items-end justify-between">
                <div>
                   <div className="text-3xl font-bold text-slate-200">68%</div>
                   <div className="text-xs text-slate-500 mt-1">Çiy noktası: 11°</div>
                </div>
                <div className="h-full w-1.5 rounded-full bg-slate-700/50 overflow-hidden">
                    <div className="h-[68%] bg-indigo-500 w-full mt-auto rounded-full"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Forecast Row */}
          <div className="lg:col-span-3">
            <div className="bg-slate-900/40 backdrop-blur-md rounded-3xl p-6 border border-white/5">
               <h3 className="text-xs font-bold text-slate-500 mb-6 uppercase tracking-widest">Saatlik Tahmin</h3>
               <div className="flex justify-between overflow-x-auto pb-2 gap-8 no-scrollbar">
                  {[
                    { time: 'Şimdi', icon: <Sun size={20} />, temp: '14°' },
                    { time: '14:00', icon: <Sun size={20} />, temp: '15°' },
                    { time: '15:00', icon: <CloudRain size={20} />, temp: '13°' },
                    { time: '16:00', icon: <CloudRain size={20} />, temp: '12°' },
                    { time: '17:00', icon: <Wind size={20} />, temp: '11°' },
                    { time: '18:00', icon: <Sunset size={20} />, temp: '10°' },
                    { time: '19:00', icon: <Box size={20} />, temp: '9°' },
                  ].map((item, i) => (
                      <div key={i} className="flex flex-col items-center gap-3 min-w-[60px] group cursor-default">
                          <span className="text-xs text-slate-500 font-medium">{item.time}</span>
                          <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center border border-white/5 group-hover:border-indigo-500/50 group-hover:text-indigo-300 transition-all duration-300 text-slate-400">
                              {item.icon}
                          </div>
                          <span className="font-bold text-slate-300">{item.temp}</span>
                      </div>
                  ))}
               </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

// --- Library Automation System Component (Java/OOP Theme) ---
const LibrarySystemApp = ({ onBack }: { onBack: () => void }) => {
    const [activeTab, setActiveTab] = useState('books');
    const [books, setBooks] = useState([
        { id: 1, title: 'Clean Code', author: 'Robert C. Martin', isbn: '978-0132350884', status: 'Available' },
        { id: 2, title: 'Design Patterns', author: 'Erich Gamma', isbn: '978-0201633610', status: 'Loaned' },
        { id: 3, title: 'Refactoring', author: 'Martin Fowler', isbn: '978-0201485677', status: 'Available' },
        { id: 4, title: 'The Pragmatic Programmer', author: 'Andrew Hunt', isbn: '978-0201616224', status: 'Available' },
        { id: 5, title: 'Effective Java', author: 'Joshua Bloch', isbn: '978-0134685991', status: 'Loaned' },
    ]);
    const [filter, setFilter] = useState('');

    const toggleStatus = (id: number) => {
        setBooks(books.map(book => {
            if (book.id === id) {
                return { ...book, status: book.status === 'Available' ? 'Loaned' : 'Available' };
            }
            return book;
        }));
    };

    const filteredBooks = books.filter(b => b.title.toLowerCase().includes(filter.toLowerCase()) || b.author.toLowerCase().includes(filter.toLowerCase()));

    return (
        <div className="min-h-screen bg-[#1e293b] text-slate-200 font-sans flex flex-col animate-in slide-in-from-right duration-500">
            {/* Top Bar */}
            <div className="bg-[#0f172a] border-b border-white/10 px-6 py-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <div className="bg-amber-600 p-2 rounded-lg text-white">
                        <Book size={20} />
                    </div>
                    <div>
                        <h1 className="font-bold text-lg leading-tight text-white">LibSys <span className="text-amber-500">Pro</span></h1>
                        <p className="text-xs text-slate-500">Library Automation v2.4.1</p>
                    </div>
                </div>
                <button onClick={onBack} className="px-4 py-2 rounded bg-slate-800 hover:bg-slate-700 text-sm text-white transition-colors border border-white/5">
                    Sistemi Kapat
                </button>
            </div>

            <div className="flex flex-1 overflow-hidden">
                {/* Sidebar */}
                <aside className="w-64 bg-[#1e293b] border-r border-white/10 hidden md:flex flex-col">
                    <nav className="p-4 space-y-1">
                        <button onClick={() => setActiveTab('books')} className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors ${activeTab === 'books' ? 'bg-amber-600/10 text-amber-500 border border-amber-600/20' : 'text-slate-400 hover:bg-white/5 hover:text-slate-200'}`}>
                            <BookOpen size={18} /> Kitap Listesi
                        </button>
                        <button onClick={() => setActiveTab('members')} className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors ${activeTab === 'members' ? 'bg-amber-600/10 text-amber-500 border border-amber-600/20' : 'text-slate-400 hover:bg-white/5 hover:text-slate-200'}`}>
                            <Users size={18} /> Üyeler
                        </button>
                    </nav>
                    <div className="mt-auto p-6">
                        <div className="bg-slate-800/50 rounded-xl p-4 border border-white/5">
                            <div className="text-xs text-slate-500 mb-2 uppercase font-bold">Sistem İstatistikleri</div>
                            <div className="flex justify-between items-center mb-1">
                                <span className="text-sm text-slate-300">Toplam Kitap</span>
                                <span className="font-mono text-amber-500">1,245</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="text-sm text-slate-300">Aktif Ödünç</span>
                                <span className="font-mono text-amber-500">342</span>
                            </div>
                        </div>
                    </div>
                </aside>

                {/* Content */}
                <main className="flex-1 bg-[#0f172a]/50 p-6 md:p-8 overflow-y-auto">
                    {activeTab === 'books' ? (
                        <div className="max-w-5xl mx-auto">
                            <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
                                <h2 className="text-2xl font-bold text-white">Kitap Envanteri</h2>
                                <div className="flex gap-3 w-full md:w-auto">
                                    <div className="relative flex-1 md:w-64">
                                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" size={16} />
                                        <input 
                                            type="text" 
                                            placeholder="Kitap adı, yazar veya ISBN..." 
                                            value={filter}
                                            onChange={(e) => setFilter(e.target.value)}
                                            className="w-full bg-[#1e293b] border border-white/10 rounded-lg py-2 pl-10 pr-4 text-sm text-slate-300 focus:outline-none focus:border-amber-500/50 transition-all"
                                        />
                                    </div>
                                    <button className="bg-amber-600 hover:bg-amber-500 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center gap-2">
                                        <Book size={16} /> Yeni Ekle
                                    </button>
                                </div>
                            </div>

                            <div className="bg-[#1e293b] rounded-xl border border-white/10 overflow-hidden shadow-xl">
                                <table className="w-full text-sm text-left">
                                    <thead className="bg-[#0f172a] text-slate-400 uppercase text-xs font-semibold">
                                        <tr>
                                            <th className="px-6 py-4">ISBN</th>
                                            <th className="px-6 py-4">Kitap Adı</th>
                                            <th className="px-6 py-4">Yazar</th>
                                            <th className="px-6 py-4 text-center">Durum</th>
                                            <th className="px-6 py-4 text-right">İşlem</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-white/5">
                                        {filteredBooks.map((book) => (
                                            <tr key={book.id} className="hover:bg-white/5 transition-colors group">
                                                <td className="px-6 py-4 font-mono text-slate-500">{book.isbn}</td>
                                                <td className="px-6 py-4 font-medium text-white">{book.title}</td>
                                                <td className="px-6 py-4 text-slate-400">{book.author}</td>
                                                <td className="px-6 py-4 text-center">
                                                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${book.status === 'Available' ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' : 'bg-amber-500/10 text-amber-400 border border-amber-500/20'}`}>
                                                        {book.status === 'Available' ? 'Müsait' : 'Ödünçte'}
                                                    </span>
                                                </td>
                                                <td className="px-6 py-4 text-right">
                                                    <button 
                                                        onClick={() => toggleStatus(book.id)}
                                                        className={`text-xs font-bold px-3 py-1.5 rounded transition-colors ${book.status === 'Available' ? 'bg-amber-600/20 text-amber-500 hover:bg-amber-600 hover:text-white' : 'bg-slate-700 text-slate-300 hover:bg-slate-600'}`}
                                                    >
                                                        {book.status === 'Available' ? 'Ödünç Ver' : 'İade Al'}
                                                    </button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                                {filteredBooks.length === 0 && (
                                    <div className="p-8 text-center text-slate-500">
                                        Sonuç bulunamadı.
                                    </div>
                                )}
                            </div>
                        </div>
                    ) : (
                        <div className="flex items-center justify-center h-full text-slate-500">
                            <div className="text-center">
                                <Users size={48} className="mx-auto mb-4 opacity-20" />
                                <p>Üye yönetim modülü yapım aşamasında.</p>
                            </div>
                        </div>
                    )}
                </main>
            </div>
        </div>
    );
};

// --- Neon Space Shooter Component (Game Dev Theme) ---
interface Bullet {
  x: number;
  y: number;
}

interface Enemy {
  x: number;
  y: number;
  hp: number;
}

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  alpha: number;
  color: string;
  size: number;
}

const SpaceShooterGame = ({ onBack }: { onBack: () => void }) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [score, setScore] = useState(0);
    const [gameOver, setGameOver] = useState(false);
    const [gameStarted, setGameStarted] = useState(false);

    useEffect(() => {
        if (!gameStarted) return;

        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        // Resize canvas
        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        window.addEventListener('resize', resize);
        resize();

        // Game Constants
        const PLAYER_SPEED = 5;
        const BULLET_SPEED = 10;
        const ENEMY_SPEED = 2;
        const SPAWN_RATE = 60;

        // Game State
        let player = { x: canvas.width / 2, y: canvas.height - 100, width: 30, height: 30 };
        let bullets: Bullet[] = [];
        let enemies: Enemy[] = [];
        let particles: Particle[] = [];
        let frame = 0;
        let animationId: number;
        let localScore = 0;
        let isGameOver = false;

        // Input
        let mouseX = canvas.width / 2;
        let mouseY = canvas.height - 100;

        const handleMouseMove = (e: MouseEvent) => {
            const rect = canvas.getBoundingClientRect();
            mouseX = e.clientX - rect.left;
            mouseY = e.clientY - rect.top;
        };
        
        const handleTouchMove = (e: TouchEvent) => {
            const rect = canvas.getBoundingClientRect();
            if (e.touches.length > 0) {
                mouseX = e.touches[0].clientX - rect.left;
                mouseY = e.touches[0].clientY - rect.top;
            }
        };

        canvas.addEventListener('mousemove', handleMouseMove);
        canvas.addEventListener('touchmove', handleTouchMove);

        // Draw Functions
        const drawPlayer = () => {
            ctx.save();
            ctx.translate(player.x, player.y);
            ctx.shadowBlur = 20;
            ctx.shadowColor = '#00ffff';
            ctx.fillStyle = '#00ffff';
            ctx.beginPath();
            ctx.moveTo(0, -20);
            ctx.lineTo(15, 15);
            ctx.lineTo(0, 10);
            ctx.lineTo(-15, 15);
            ctx.closePath();
            ctx.fill();
            ctx.restore();
        };

        const drawBullets = () => {
            ctx.shadowBlur = 10;
            ctx.shadowColor = '#ff00ff';
            ctx.fillStyle = '#ff00ff';
            bullets.forEach(b => {
                ctx.fillRect(b.x - 2, b.y, 4, 15);
            });
            ctx.shadowBlur = 0;
        };

        const drawEnemies = () => {
            ctx.shadowBlur = 15;
            ctx.shadowColor = '#ff3333';
            ctx.strokeStyle = '#ff3333';
            ctx.lineWidth = 2;
            enemies.forEach(e => {
                ctx.save();
                ctx.translate(e.x, e.y);
                ctx.rotate(frame * 0.05);
                ctx.strokeRect(-15, -15, 30, 30);
                
                // Inner core
                ctx.fillStyle = 'rgba(255, 50, 50, 0.3)';
                ctx.fillRect(-10, -10, 20, 20);
                ctx.restore();
            });
            ctx.shadowBlur = 0;
        };

        const drawParticles = () => {
            particles.forEach((p, index) => {
                if (p.alpha <= 0) {
                    particles.splice(index, 1);
                    return;
                }
                p.x += p.vx;
                p.y += p.vy;
                p.alpha -= 0.02;
                ctx.globalAlpha = p.alpha;
                ctx.fillStyle = p.color;
                ctx.fillRect(p.x, p.y, p.size, p.size);
                ctx.globalAlpha = 1;
            });
        };

        const createExplosion = (x: number, y: number, color: string) => {
            for(let i = 0; i < 10; i++) {
                particles.push({
                    x, y,
                    vx: (Math.random() - 0.5) * 5,
                    vy: (Math.random() - 0.5) * 5,
                    alpha: 1,
                    color: color,
                    size: Math.random() * 3 + 1
                });
            }
        };

        const loop = () => {
            if (isGameOver) return;

            // Clear
            ctx.fillStyle = 'rgba(5, 5, 10, 0.3)'; // Trail effect
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            // Logic
            // Lerp for smooth movement
            player.x += (mouseX - player.x) * 0.15;
            player.y += (mouseY - player.y) * 0.15;

            // Auto Shoot
            if (frame % 15 === 0) {
                bullets.push({ x: player.x, y: player.y - 20 });
            }

            // Spawn Enemies
            if (frame % SPAWN_RATE === 0) {
                enemies.push({ 
                    x: Math.random() * (canvas.width - 40) + 20, 
                    y: -50,
                    hp: 2
                });
            }

            // Update Bullets
            for(let i = bullets.length - 1; i >= 0; i--) {
                bullets[i].y -= BULLET_SPEED;
                if(bullets[i].y < -20) bullets.splice(i, 1);
            }

            // Update Enemies & Collision
            for(let i = enemies.length - 1; i >= 0; i--) {
                enemies[i].y += ENEMY_SPEED + (localScore * 0.001); // Speed increases with score

                // Player Hit
                const dist = Math.hypot(player.x - enemies[i].x, player.y - enemies[i].y);
                if (dist < 30) {
                    isGameOver = true;
                    setGameOver(true);
                    createExplosion(player.x, player.y, '#00ffff');
                }

                // Bullet Hit
                for(let j = bullets.length - 1; j >= 0; j--) {
                    const b = bullets[j];
                    const e = enemies[i];
                    if (e && b.x > e.x - 20 && b.x < e.x + 20 && b.y > e.y - 20 && b.y < e.y + 20) {
                         bullets.splice(j, 1);
                         createExplosion(e.x, e.y, '#ff3333');
                         enemies.splice(i, 1);
                         localScore += 100;
                         setScore(localScore);
                         break;
                    }
                }

                if(enemies[i] && enemies[i].y > canvas.height) {
                     enemies.splice(i, 1); // Remove if passed
                }
            }

            // Draw
            drawPlayer();
            drawBullets();
            drawEnemies();
            drawParticles();

            // UI Grid Overlay (Retro effect)
            ctx.strokeStyle = 'rgba(0, 255, 255, 0.05)';
            ctx.lineWidth = 1;
            ctx.beginPath();
            for(let x = 0; x < canvas.width; x+=50) {
                ctx.moveTo(x, 0);
                ctx.lineTo(x, canvas.height);
            }
            for(let y = (frame * 2) % 50; y < canvas.height; y+=50) {
                ctx.moveTo(0, y);
                ctx.lineTo(canvas.width, y);
            }
            ctx.stroke();

            frame++;
            animationId = requestAnimationFrame(loop);
        };

        loop();

        return () => {
            cancelAnimationFrame(animationId);
            window.removeEventListener('resize', resize);
            if (canvasRef.current) {
                canvasRef.current.removeEventListener('mousemove', handleMouseMove);
                canvasRef.current.removeEventListener('touchmove', handleTouchMove);
            }
        };
    }, [gameStarted]);

    return (
        <div className="fixed inset-0 bg-black z-50 flex flex-col">
            {!gameStarted ? (
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/90 z-20 text-center p-6">
                    <h1 className="text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 mb-4 tracking-tighter drop-shadow-[0_0_25px_rgba(0,255,255,0.5)]">
                        NEON SHOOTER
                    </h1>
                    <p className="text-slate-400 mb-8 text-lg">Fareyi kullanarak gemiyi kontrol et. Otomatik ateş aktiftir.</p>
                    <div className="flex gap-4">
                         <button 
                            onClick={() => setGameStarted(true)}
                            className="px-8 py-4 bg-cyan-500 hover:bg-cyan-400 text-black font-bold text-xl rounded-full transition-all shadow-[0_0_20px_rgba(6,182,212,0.5)] hover:scale-105"
                        >
                            BAŞLAT
                        </button>
                        <button 
                            onClick={onBack}
                            className="px-8 py-4 bg-slate-800 hover:bg-slate-700 text-white font-bold text-xl rounded-full transition-all border border-white/10"
                        >
                            ÇIKIŞ
                        </button>
                    </div>
                </div>
            ) : (
                <>
                   {/* HUD */}
                   <div className="absolute top-0 left-0 w-full p-6 flex justify-between items-start pointer-events-none z-10">
                       <div>
                           <div className="text-xs text-cyan-400 font-bold uppercase tracking-widest">Skor</div>
                           <div className="text-4xl font-mono text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]">{score}</div>
                       </div>
                       <button onClick={onBack} className="pointer-events-auto px-4 py-2 bg-red-900/50 text-red-300 border border-red-500/30 rounded hover:bg-red-900/80 transition-colors backdrop-blur-sm">
                           Çıkış
                       </button>
                   </div>
                   
                   {/* Game Over Screen */}
                   {gameOver && (
                        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/80 backdrop-blur-sm z-20">
                            <h2 className="text-5xl font-bold text-red-500 mb-4 drop-shadow-[0_0_15px_rgba(239,68,68,0.8)]">OYUN BİTTİ</h2>
                            <p className="text-2xl text-white mb-8 font-mono">SKOR: {score}</p>
                            <div className="flex gap-4">
                                <button 
                                    onClick={() => {
                                        setGameOver(false);
                                        setScore(0);
                                        setGameStarted(false); 
                                        setTimeout(() => setGameStarted(true), 10); // Simple reset hack
                                    }}
                                    className="px-6 py-3 bg-white text-black font-bold rounded hover:bg-slate-200 transition-colors"
                                >
                                    Tekrar Oyna
                                </button>
                                <button 
                                    onClick={onBack}
                                    className="px-6 py-3 bg-transparent border border-white/20 text-white font-bold rounded hover:bg-white/10 transition-colors"
                                >
                                    Ana Menü
                                </button>
                            </div>
                        </div>
                   )}

                   <canvas ref={canvasRef} className="block w-full h-full touch-none cursor-none" />
                </>
            )}
        </div>
    );
};

// --- Student Information System Component (Functional) ---
const StudentSystemApp = ({ onBack }: { onBack: () => void }) => {
  const [activeTab, setActiveTab] = useState('dashboard');

  // Mock Data
  const students = [
    { id: '2023001', name: 'Erkut Altındal', dept: 'Bilgisayar Prog.', status: 'Aktif', gpa: 3.40 },
    { id: '2023002', name: 'Ayşe Yılmaz', dept: 'Yazılım Müh.', status: 'Aktif', gpa: 3.85 },
    { id: '2023003', name: 'Mehmet Demir', dept: 'Bilgisayar Prog.', status: 'Pasif', gpa: 2.10 },
    { id: '2023004', name: 'Zeynep Kaya', dept: 'Endüstri Müh.', status: 'Aktif', gpa: 3.15 },
    { id: '2023005', name: 'Can Yıldız', dept: 'Bilgisayar Prog.', status: 'Kayıt Dond.', gpa: 2.90 },
    { id: '2023006', name: 'Elif Demir', dept: 'Mimarlık', status: 'Aktif', gpa: 3.60 },
    { id: '2023007', name: 'Burak Yılmaz', dept: 'İnşaat Müh.', status: 'Aktif', gpa: 2.80 },
  ];

  const courses = [
    { code: 'BLP101', name: 'Algoritma ve Programlama', credit: 4, instructor: 'Dr. Ahmet Yılmaz' },
    { code: 'BLP103', name: 'Veritabanı Yönetim Sis.', credit: 3, instructor: 'Öğr. Gör. Mehmet Öztürk' },
    { code: 'MAT101', name: 'Matematik I', credit: 3, instructor: 'Prof. Dr. Ayşe Kara' },
    { code: 'ING101', name: 'Mesleki İngilizce', credit: 2, instructor: 'Okt. John Doe' },
  ];

  // --- Views ---

  const DashboardView = () => (
    <div className="animate-in fade-in duration-300">
       <div className="mb-8 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-white">Genel Bakış</h1>
          <div className="flex gap-2">
             <button className="px-3 py-1.5 bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-medium rounded-md transition-colors flex items-center gap-2">
                <Users size={16} /> Yeni Kayıt
             </button>
          </div>
       </div>

       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {[
            { label: 'Toplam Öğrenci', val: '1,240', icon: <Users className="text-blue-400" />, color: 'bg-blue-400/10' },
            { label: 'Aktif Dersler', val: '42', icon: <BookOpen className="text-emerald-400" />, color: 'bg-emerald-400/10' },
            { label: 'Ortalama GNO', val: '2.84', icon: <GraduationCap className="text-amber-400" />, color: 'bg-amber-400/10' },
            { label: 'Sistem Durumu', val: '%99.9', icon: <Monitor className="text-purple-400" />, color: 'bg-purple-400/10' },
          ].map((stat, i) => (
            <div key={i} className="bg-[#15171e] p-5 rounded-xl border border-white/5 hover:border-white/10 transition-colors">
               <div className="flex justify-between items-start mb-4">
                  <div className={`p-2 rounded-lg ${stat.color}`}>{stat.icon}</div>
                  <span className="text-xs font-medium text-slate-500 bg-white/5 px-2 py-1 rounded">+2.4%</span>
               </div>
               <div className="text-3xl font-bold text-white mb-1">{stat.val}</div>
               <div className="text-sm text-slate-500 font-medium">{stat.label}</div>
            </div>
          ))}
       </div>

       <div className="bg-[#15171e] rounded-xl border border-white/5 overflow-hidden">
          <div className="px-6 py-4 border-b border-white/5 flex items-center justify-between">
             <h3 className="font-semibold text-white">Son Kayıtlar</h3>
             <div className="relative hidden sm:block">
                <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" />
                <input type="text" placeholder="Öğrenci ara..." className="bg-[#0f1115] border border-white/5 rounded-lg py-1.5 pl-9 pr-4 text-sm text-slate-300 focus:outline-none focus:border-indigo-500/50 transition-all" />
             </div>
          </div>
          <div className="overflow-x-auto">
             <table className="w-full text-sm text-left">
                <thead className="text-xs text-slate-500 uppercase bg-[#0f1115]/50 border-b border-white/5">
                   <tr>
                      <th className="px-6 py-3">Öğrenci No</th>
                      <th className="px-6 py-3">Ad Soyad</th>
                      <th className="px-6 py-3">Bölüm</th>
                      <th className="px-6 py-3">Durum</th>
                      <th className="px-6 py-3">GNO</th>
                      <th className="px-6 py-3 text-right">İşlem</th>
                   </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                   {students.slice(0,5).map((student, i) => (
                      <tr key={i} className="hover:bg-white/[0.02] transition-colors">
                         <td className="px-6 py-4 font-mono text-slate-400">{student.id}</td>
                         <td className="px-6 py-4 font-medium text-white">{student.name}</td>
                         <td className="px-6 py-4 text-slate-400">{student.dept}</td>
                         <td className="px-6 py-4">
                            <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium ${
                               student.status === 'Aktif' ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' : 
                               student.status === 'Pasif' ? 'bg-red-500/10 text-red-400 border border-red-500/20' : 
                               'bg-amber-500/10 text-amber-400 border border-amber-500/20'
                            }`}>
                               {student.status === 'Aktif' ? <CheckCircle size={12} /> : student.status === 'Pasif' ? <XCircle size={12} /> : <Clock size={12} />}
                               {student.status}
                            </span>
                         </td>
                         <td className="px-6 py-4 font-semibold text-slate-200">{student.gpa}</td>
                         <td className="px-6 py-4 text-right"><MoreVertical size={16} className="ml-auto text-slate-500 cursor-pointer hover:text-white" /></td>
                      </tr>
                   ))}
                </tbody>
             </table>
          </div>
       </div>
    </div>
  );

  const StudentsView = () => (
    <div className="animate-in fade-in duration-300">
        <div className="mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <h1 className="text-2xl font-bold text-white">Öğrenci Listesi</h1>
            <div className="flex gap-2">
                <div className="relative">
                    <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" />
                    <input type="text" placeholder="İsim veya No ile ara..." className="bg-[#15171e] border border-white/5 rounded-lg py-2 pl-9 pr-4 text-sm text-slate-300 focus:outline-none focus:border-indigo-500/50 w-64" />
                </div>
                <button className="p-2 bg-[#15171e] border border-white/5 rounded-lg text-slate-400 hover:text-white hover:border-white/10"><Filter size={20} /></button>
            </div>
        </div>
        <div className="bg-[#15171e] rounded-xl border border-white/5 overflow-hidden">
            <table className="w-full text-sm text-left">
                <thead className="text-xs text-slate-500 uppercase bg-[#0f1115]/50 border-b border-white/5">
                   <tr>
                      <th className="px-6 py-3">Öğrenci No</th>
                      <th className="px-6 py-3">Ad Soyad</th>
                      <th className="px-6 py-3">Bölüm</th>
                      <th className="px-6 py-3">Durum</th>
                      <th className="px-6 py-3 text-right">İşlem</th>
                   </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                    {students.map((student, i) => (
                        <tr key={i} className="hover:bg-white/[0.02] transition-colors">
                            <td className="px-6 py-4 font-mono text-slate-400">{student.id}</td>
                            <td className="px-6 py-4 font-medium text-white">{student.name}</td>
                            <td className="px-6 py-4 text-slate-400">{student.dept}</td>
                            <td className="px-6 py-4">
                                <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${student.status === 'Aktif' ? 'bg-emerald-500/10 text-emerald-400' : 'bg-slate-700 text-slate-300'}`}>{student.status}</span>
                            </td>
                            <td className="px-6 py-4 text-right"><button className="text-indigo-400 hover:underline">Detay</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </div>
  );

  const CoursesView = () => (
      <div className="animate-in fade-in duration-300">
          <h1 className="text-2xl font-bold text-white mb-6">Dersler</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {courses.map((course, i) => (
                  <div key={i} className="bg-[#15171e] border border-white/5 rounded-xl p-6 hover:border-indigo-500/30 transition-all group">
                      <div className="flex justify-between items-start mb-4">
                          <div className="px-3 py-1 rounded bg-indigo-500/10 text-indigo-400 text-xs font-bold tracking-wider">{course.code}</div>
                          <MoreVertical size={16} className="text-slate-500" />
                      </div>
                      <h3 className="text-lg font-bold text-white mb-2 group-hover:text-indigo-300 transition-colors">{course.name}</h3>
                      <p className="text-sm text-slate-400 mb-4">{course.instructor}</p>
                      <div className="flex items-center gap-4 text-xs text-slate-500 font-medium border-t border-white/5 pt-4">
                          <span className="flex items-center gap-1"><Users size={14} /> 48 Öğrenci</span>
                          <span className="flex items-center gap-1"><Clock size={14} /> {course.credit} Kredi</span>
                      </div>
                  </div>
              ))}
              <div className="bg-[#15171e]/50 border border-dashed border-white/10 rounded-xl p-6 flex flex-col items-center justify-center text-slate-500 hover:bg-[#15171e] hover:border-indigo-500/50 hover:text-indigo-400 transition-all cursor-pointer group">
                  <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mb-3 group-hover:bg-indigo-500/20 transition-colors">
                      <Users size={24} />
                  </div>
                  <span className="font-medium">Yeni Ders Ekle</span>
              </div>
          </div>
      </div>
  );

  const GradesView = () => (
      <div className="animate-in fade-in duration-300">
          <h1 className="text-2xl font-bold text-white mb-6">Not Girişi</h1>
          <div className="bg-[#15171e] border border-white/5 rounded-xl p-6 mb-6">
              <div className="flex flex-wrap gap-4 items-end">
                  <div className="flex-1 min-w-[200px]">
                      <label className="block text-xs font-medium text-slate-500 mb-1 uppercase">Ders Seçin</label>
                      <select className="w-full bg-[#0f1115] border border-white/10 rounded-lg px-3 py-2 text-sm text-white focus:border-indigo-500 outline-none">
                          <option>BLP101 - Algoritma ve Programlama</option>
                          <option>BLP103 - Veritabanı Yönetim Sis.</option>
                      </select>
                  </div>
                  <div className="flex-1 min-w-[200px]">
                      <label className="block text-xs font-medium text-slate-500 mb-1 uppercase">Dönem</label>
                      <select className="w-full bg-[#0f1115] border border-white/10 rounded-lg px-3 py-2 text-sm text-white focus:border-indigo-500 outline-none">
                          <option>2024-2025 Güz</option>
                      </select>
                  </div>
                  <button className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg text-sm font-medium transition-colors">
                      Listele
                  </button>
              </div>
          </div>

          <div className="bg-[#15171e] border border-white/5 rounded-xl overflow-hidden">
              <table className="w-full text-sm text-left">
                  <thead className="text-xs text-slate-500 uppercase bg-[#0f1115]/50 border-b border-white/5">
                      <tr>
                          <th className="px-6 py-3">No</th>
                          <th className="px-6 py-3">Öğrenci</th>
                          <th className="px-6 py-3 w-24 text-center">Vize (%40)</th>
                          <th className="px-6 py-3 w-24 text-center">Final (%60)</th>
                          <th className="px-6 py-3 w-24 text-center">Ortalama</th>
                      </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5">
                      {students.slice(0,4).map((s,i) => (
                          <tr key={i}>
                              <td className="px-6 py-3 font-mono text-slate-400">{s.id}</td>
                              <td className="px-6 py-3 text-white">{s.name}</td>
                              <td className="px-6 py-3"><input type="number" className="w-full bg-[#0f1115] border border-white/10 rounded px-2 py-1 text-center text-white focus:border-indigo-500 outline-none" defaultValue={Math.floor(Math.random() * 40 + 60)} /></td>
                              <td className="px-6 py-3"><input type="number" className="w-full bg-[#0f1115] border border-white/10 rounded px-2 py-1 text-center text-white focus:border-indigo-500 outline-none" defaultValue={Math.floor(Math.random() * 40 + 60)} /></td>
                              <td className="px-6 py-3 text-center font-bold text-slate-300">--</td>
                          </tr>
                      ))}
                  </tbody>
              </table>
              <div className="p-4 border-t border-white/5 flex justify-end bg-[#0f1115]/30">
                  <button className="flex items-center gap-2 px-6 py-2 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg font-medium transition-colors">
                      <Save size={18} /> Kaydet
                  </button>
              </div>
          </div>
      </div>
  );

  const DatabaseView = () => (
      <div className="animate-in fade-in duration-300 h-full flex flex-col">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-2xl font-bold text-white">Veritabanı Konsolu</h1>
            <span className="text-xs font-mono text-emerald-400 bg-emerald-900/20 px-2 py-1 rounded border border-emerald-900/50">Connected: postgres@localhost:5432</span>
          </div>
          
          <div className="flex-1 bg-[#0d0e11] rounded-xl border border-white/10 flex flex-col overflow-hidden font-mono text-sm shadow-2xl">
              {/* Tab Bar */}
              <div className="flex bg-[#15171e] border-b border-white/5">
                  <div className="px-4 py-2 bg-[#0d0e11] text-indigo-400 border-t-2 border-indigo-500 flex items-center gap-2">
                      <Database size={14} /> query.sql <X size={12} className="text-slate-500" />
                  </div>
                  <div className="px-4 py-2 text-slate-500 flex items-center gap-2 hover:text-slate-300 cursor-pointer">
                      schema.json
                  </div>
              </div>
              
              {/* Editor */}
              <div className="p-4 text-slate-300 border-b border-white/5 bg-[#0d0e11] min-h-[120px]">
                  <div className="flex gap-4">
                      <div className="text-slate-600 text-right select-none flex flex-col">
                          <span>1</span><span>2</span><span>3</span>
                      </div>
                      <div>
                          <span className="text-purple-400">SELECT</span> * <span className="text-purple-400">FROM</span> students <br/>
                          <span className="text-purple-400">WHERE</span> gpa {'>'} 3.0 <br/>
                          <span className="text-purple-400">ORDER BY</span> gpa <span className="text-purple-400">DESC</span>;
                      </div>
                  </div>
              </div>

              {/* Toolbar */}
              <div className="px-4 py-2 bg-[#15171e] border-b border-white/5 flex items-center gap-4">
                  <button className="flex items-center gap-2 px-3 py-1 bg-indigo-600 text-white rounded text-xs font-bold hover:bg-indigo-500 transition-colors">
                      <Play size={12} /> RUN
                  </button>
                  <span className="text-xs text-slate-500">Query executed in 0.04ms</span>
              </div>

              {/* Results */}
              <div className="flex-1 overflow-auto bg-[#0d0e11] p-4">
                  <table className="w-full text-left border-collapse">
                      <thead>
                          <tr className="text-slate-500 border-b border-white/10">
                              <th className="p-2 font-normal">id (int)</th>
                              <th className="p-2 font-normal">full_name (varchar)</th>
                              <th className="p-2 font-normal">department_id (int)</th>
                              <th className="p-2 font-normal">gpa (decimal)</th>
                          </tr>
                      </thead>
                      <tbody className="text-slate-300">
                          {students.filter(s => s.gpa > 3.0).map((s, i) => (
                              <tr key={i} className="hover:bg-white/5">
                                  <td className="p-2 text-blue-400">{s.id}</td>
                                  <td className="p-2 text-orange-300">"{s.name}"</td>
                                  <td className="p-2 text-blue-400">101</td>
                                  <td className="p-2 text-emerald-400">{s.gpa}</td>
                              </tr>
                          ))}
                      </tbody>
                  </table>
              </div>
          </div>
      </div>
  );

  return (
    <div className="min-h-screen bg-[#0f1115] text-slate-200 font-sans flex flex-col md:flex-row overflow-hidden animate-in slide-in-from-bottom-4 duration-500">
      
      {/* Sidebar */}
      <aside className="w-full md:w-64 bg-[#15171e] border-r border-white/5 flex-shrink-0 flex flex-col">
        <div className="p-6 border-b border-white/5 flex items-center gap-3">
          <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center text-white shadow-lg shadow-indigo-900/20">
            <GraduationCap size={20} />
          </div>
          <span className="font-bold text-lg tracking-tight text-white">OBS Panel</span>
        </div>
        
        <nav className="flex-1 p-4 space-y-1">
          <div className="px-3 py-2 text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">Ana Menü</div>
          {[
            { id: 'dashboard', icon: <Monitor size={18} />, label: 'Dashboard' },
            { id: 'students', icon: <Users size={18} />, label: 'Öğrenciler' },
            { id: 'courses', icon: <BookOpen size={18} />, label: 'Dersler' },
            { id: 'grades', icon: <FileText size={18} />, label: 'Not Girişi' },
          ].map((item) => (
            <button 
                key={item.id} 
                onClick={() => setActiveTab(item.id)}
                className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 ${activeTab === item.id ? 'bg-indigo-600/10 text-indigo-400 border border-indigo-600/20' : 'text-slate-400 hover:bg-white/5 hover:text-slate-200 border border-transparent'}`}
            >
              {item.icon}
              {item.label}
            </button>
          ))}

          <div className="px-3 py-2 text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2 mt-8">Yönetim</div>
           <button 
                onClick={() => setActiveTab('database')}
                className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 ${activeTab === 'database' ? 'bg-indigo-600/10 text-indigo-400 border border-indigo-600/20' : 'text-slate-400 hover:bg-white/5 hover:text-slate-200 border border-transparent'}`}
           >
              <Database size={18} />
              <span>Veritabanı</span>
            </button>
        </nav>

        <div className="p-4 border-t border-white/5">
           <button 
              onClick={onBack} 
              className="w-full flex items-center justify-center gap-2 px-4 py-2 rounded-lg border border-red-900/30 text-red-400 hover:bg-red-900/20 transition-colors text-sm font-medium"
            >
              <ArrowLeft size={16} /> Çıkış Yap
           </button>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col h-screen overflow-hidden">
        {/* Topbar */}
        <header className="h-16 border-b border-white/5 bg-[#0f1115] flex items-center justify-between px-6 md:px-8">
          <div className="flex items-center gap-4 text-slate-500">
             <span className="text-sm font-medium">2024-2025 Güz Dönemi</span>
          </div>
          <div className="flex items-center gap-4">
             <button className="p-2 text-slate-400 hover:text-white transition-colors relative">
                <Bell size={20} />
                <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border border-[#0f1115]"></span>
             </button>
             <div className="flex items-center gap-3 pl-4 border-l border-white/10">
                 <div className="text-right hidden sm:block">
                     <div className="text-sm font-bold text-white">Erkut A.</div>
                     <div className="text-xs text-slate-500">Admin</div>
                 </div>
                 <div className="w-8 h-8 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 border border-white/10 shadow-inner"></div>
             </div>
          </div>
        </header>

        {/* View Container */}
        <main className="flex-1 overflow-y-auto p-6 md:p-8">
            {activeTab === 'dashboard' && <DashboardView />}
            {activeTab === 'students' && <StudentsView />}
            {activeTab === 'courses' && <CoursesView />}
            {activeTab === 'grades' && <GradesView />}
            {activeTab === 'database' && <DatabaseView />}
        </main>
      </div>
    </div>
  );
};

// --- Components ---

// 1. Navbar
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Hakkımda', href: '#about' },
    { name: 'Deneyim', href: '#experience' },
    { name: 'Beceriler', href: '#skills' },
    { name: 'Projeler', href: '#projects' },
    { name: 'İletişim', href: '#contact', highlight: true },
  ];

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 border-b ${
        scrolled 
          ? 'bg-brand-dark/80 backdrop-blur-md border-white/5 py-4' 
          : 'bg-transparent border-transparent py-6'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
        <a href="#" className="text-xl font-extrabold tracking-tight flex items-center gap-2 group">
          <span className="w-3 h-3 rounded-full bg-brand-glow shadow-[0_0_10px_rgba(225,29,72,0.6)] group-hover:shadow-[0_0_15px_rgba(225,29,72,0.9)] transition-shadow"></span>
          ERKUT.DEV
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-sm font-medium transition-colors duration-300 relative group ${
                link.highlight ? 'text-brand-glow hover:text-red-400' : 'text-gray-400 hover:text-white'
              }`}
            >
              {link.name}
              {!link.highlight && (
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-glow transition-all duration-300 group-hover:w-full"></span>
              )}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-gray-300 hover:text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav Overlay */}
      <div className={`md:hidden absolute top-full left-0 w-full bg-brand-surface border-b border-white/10 transition-all duration-300 overflow-hidden ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="flex flex-col p-6 gap-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={`text-lg font-medium ${link.highlight ? 'text-brand-glow' : 'text-gray-300'}`}
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
};

// 2. Hero Section
const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-brand-red/10 rounded-full blur-[120px] -z-10"></div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_80%)]"></div>
      </div>

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-brand-glow text-xs font-semibold mb-6 animate-pulse-slow">
          <span className="w-1.5 h-1.5 rounded-full bg-brand-glow"></span>
          Available for hire
        </div>
        
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 leading-tight">
          Merhaba, Ben <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-glow to-orange-500">
            Erkut Altındal
          </span>
        </h1>
        
        <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
          Oyun Geliştirme (<span className="text-white font-medium">Godot</span>), SQL ve Java dünyasında çözümler üreten, analitik düşünen bir yazılım geliştiriciyim.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a 
            href="#projects" 
            className="px-8 py-3.5 rounded-lg bg-brand-red hover:bg-brand-glow text-white font-semibold transition-all duration-300 shadow-[0_4px_20px_rgba(178,36,42,0.3)] hover:shadow-[0_8px_30px_rgba(225,29,72,0.4)] hover:-translate-y-1 w-full sm:w-auto"
          >
            Projelerimi Gör
          </a>
          <a 
            href="#contact" 
            className="px-8 py-3.5 rounded-lg bg-transparent border border-white/10 hover:border-white/30 text-white font-semibold transition-all duration-300 hover:bg-white/5 w-full sm:w-auto"
          >
            Bana Ulaş
          </a>
        </div>
      </div>
    </section>
  );
};

// 3. About Section
const About = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-4xl mx-auto px-6">
        <div className="flex items-center gap-4 mb-12">
          <div className="h-0.5 w-12 bg-brand-red"></div>
          <h2 className="text-3xl font-bold">Hakkımda</h2>
        </div>
        
        <div className="bg-white/5 border border-white/10 rounded-2xl p-8 md:p-12 backdrop-blur-sm hover:border-white/20 transition-colors">
          <p className="text-lg text-gray-300 leading-relaxed">
            Bilgisayar Programcılığı mezunuyum. Kod yazmayı sadece bir iş değil, bir <strong className="text-white">problem çözme sanatı</strong> olarak görüyorum.
            Oyun geliştirmede <strong className="text-brand-glow">Godot/GDScript</strong> ile hayal gücümü, veri tarafında <strong className="text-brand-glow">SQL</strong> ile mantığımı,
            uygulamada ise <strong className="text-brand-glow">Java</strong> ile disiplinimi birleştiriyorum. Karmaşık sorunları basit ve etkili çözümlere dönüştürmek en büyük tutkum.
          </p>
        </div>
      </div>
    </section>
  );
};

// 4. Experience Section (Timeline Layout)
const Experience = () => {
  const experiences = [
    {
      role: "Stajyer",
      company: "Bolu Akademi Bilgisayar",
      year: "2023",
      desc: "Teknik destek süreçleri, donanım bakımı ve temel yazılım sorun giderme görevlerinde aktif rol aldım. Müşteri ilişkileri ve hızlı problem çözme yeteneklerimi geliştirdim."
    },
    {
      role: "Stajyer",
      company: "Bolu Dolunay AR-GE",
      year: "2022",
      desc: "Ar-Ge projelerinde dökümantasyon, veri girişi ve raporlama süreçlerine destek sağladım. Kurumsal çalışma disiplini kazandım."
    },
    {
      role: "Ön Lisans",
      company: "Abant İzzet Baysal Üniversitesi",
      year: "2023 - 2025",
      desc: "Bilgisayar Programcılığı bölümü mezunu. Algoritma, Veri Tabanı Yönetimi, Nesne Yönelimli Programlama ve Web Teknolojileri odaklı kapsamlı eğitim."
    }
  ];

  return (
    <section id="experience" className="py-24 bg-black/20">
      <div className="max-w-4xl mx-auto px-6">
        <div className="flex items-center gap-4 mb-16">
          <div className="h-0.5 w-12 bg-brand-red"></div>
          <h2 className="text-3xl font-bold">Deneyim & Eğitim</h2>
        </div>

        <div className="relative space-y-12">
          {/* Timeline Line */}
          <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-white/10 md:left-1/2 md:-ml-px"></div>

          {experiences.map((exp, index) => (
            <div key={index} className={`relative flex flex-col md:flex-row items-center md:justify-between ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
              
              {/* Dot */}
              <div className="absolute left-4 md:left-1/2 -translate-x-[5.5px] w-3 h-3 rounded-full bg-brand-red ring-4 ring-black z-10 mt-1.5 md:mt-0"></div>

              {/* Content Width Half */}
              <div className="w-full md:w-5/12 pl-12 md:pl-0 md:pr-0">
                <div className={`p-6 rounded-xl bg-white/5 border border-white/5 hover:border-brand-red/30 transition-all duration-300 group ${index % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>
                  <span className="text-brand-glow text-sm font-bold tracking-wider uppercase mb-2 block">{exp.year}</span>
                  <h3 className="text-xl font-bold text-white mb-1">{exp.company}</h3>
                  <div className="text-sm text-gray-400 font-semibold mb-4">{exp.role}</div>
                  <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors">
                    {exp.desc}
                  </p>
                </div>
              </div>
              
              {/* Empty Spacer for the other side */}
              <div className="hidden md:block w-5/12"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// 5. Skills Section
const Skills = () => {
  const skills = [
    { name: "Godot (GDScript)", level: 90 },
    { name: "SQL & Databases", level: 85 },
    { name: "Java", level: 70 },
    { name: "HTML / CSS", level: 75 },
    { name: "Git & Version Control", level: 65 },
  ];

  return (
    <section id="skills" className="py-24">
      <div className="max-w-4xl mx-auto px-6">
        <div className="flex items-center gap-4 mb-12">
          <div className="h-0.5 w-12 bg-brand-red"></div>
          <h2 className="text-3xl font-bold">Teknik Yetkinlikler</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
                 <p className="text-gray-400 leading-relaxed">
                    Sürekli öğrenmeye ve gelişmeye odaklıyım. Özellikle oyun motorları ve backend mimarileri konusunda kendimi geliştirmeyi seviyorum.
                 </p>
                 <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 bg-white/5 rounded-lg border border-white/10 text-center hover:bg-white/10 transition">
                        <Terminal className="mx-auto text-brand-glow mb-2" />
                        <span className="text-sm font-medium">Backend Logic</span>
                    </div>
                    <div className="p-4 bg-white/5 rounded-lg border border-white/10 text-center hover:bg-white/10 transition">
                        <Database className="mx-auto text-brand-glow mb-2" />
                        <span className="text-sm font-medium">Data Design</span>
                    </div>
                 </div>
            </div>

            <div className="space-y-6">
            {skills.map((skill) => (
                <div key={skill.name} className="group">
                <div className="flex justify-between mb-2">
                    <span className="font-semibold text-gray-200">{skill.name}</span>
                    <span className="text-gray-500 text-sm">{skill.level}%</span>
                </div>
                <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
                    <div 
                    className="h-full bg-gradient-to-r from-brand-red to-brand-glow rounded-full relative"
                    style={{ width: `${skill.level}%` }}
                    >
                        <div className="absolute inset-0 bg-white/20 w-full h-full animate-[shimmer_2s_infinite]"></div>
                    </div>
                </div>
                </div>
            ))}
            </div>
        </div>
      </div>
    </section>
  );
};

// 6. Projects Section
const Projects = ({ 
    onOpenWeather, 
    onOpenStudentSystem, 
    onOpenLibrary, 
    onOpenSpaceShooter 
}: { 
    onOpenWeather: () => void, 
    onOpenStudentSystem: () => void,
    onOpenLibrary: () => void,
    onOpenSpaceShooter: () => void
}) => {
  const projects = [
    {
      title: "Atmosphere Weather",
      category: "React • API",
      desc: "İnteraktif, canlı hava durumu dashboard'u. Glassmorphism tasarımı ve anlık veri görselleştirmesi.",
      icon: <CloudRain className="w-6 h-6" />,
      isAction: true,
      action: onOpenWeather,
      linkText: "Canlı Demo"
    },
    {
      title: "2D Mini Platformer",
      category: "Godot • Game Dev",
      desc: "Godot motoru kullanılarak geliştirilen; fizik motoru, çarpışma testleri ve sahne geçişlerini içeren örnek oyun.",
      icon: <Gamepad2 className="w-6 h-6" />,
      isAction: false,
      link: "https://myquas.itch.io/2dg",
      linkText: "İncele"
    },
    {
      title: "Öğrenci Bilgi Sistemi",
      category: "SQL • Database",
      desc: "İlişkisel veritabanı tasarımı. Tablo normalizasyonu, SQL sorguları ve raporlama şemaları.",
      icon: <Database className="w-6 h-6" />,
      isAction: true,
      action: onOpenStudentSystem,
      linkText: "Sistem Demosu"
    },
    {
      title: "Kütüphane Otomasyonu",
      category: "Java • OOP",
      desc: "Nesne Yönelimli Programlama (OOP) prensipleri ile geliştirilmiş, kitap ödünç alma ve stok takibi yapan dashboard.",
      icon: <BookOpen className="w-6 h-6" />,
      isAction: true,
      action: onOpenLibrary,
      linkText: "Sistem Demosu"
    },
    {
      title: "Neon Space Shooter",
      category: "Godot • Arcade",
      desc: "Özel shader efektleri, parçacık sistemleri ve dinamik düşman spawner sistemine sahip arcade uzay savaşı oyunu.",
      icon: <Rocket className="w-6 h-6" />,
      isAction: true,
      action: onOpenSpaceShooter,
      linkText: "Oyunu Başlat"
    },
    {
      title: "Kişisel Portföy",
      category: "HTML • CSS",
      desc: "HTML5 ve Modern CSS kullanılarak hazırlanmış, mobil uyumlu (responsive) kişisel web sitesi.",
      icon: <Code2 className="w-6 h-6" />,
      isAction: false,
      link: "#",
      linkText: "GitHub"
    }
  ];

  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (gridRef.current) {
        const rect = gridRef.current.getBoundingClientRect();
        const transformY = rect.top * -0.08; 
        gridRef.current.style.transform = `translateY(${transformY}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="projects" className="py-24 bg-white/[0.02] overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center gap-4 mb-12">
          <div className="h-0.5 w-12 bg-brand-red"></div>
          <h2 className="text-3xl font-bold">Seçilmiş Projeler</h2>
        </div>

        <div 
          ref={gridRef}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 card-grid will-change-transform transition-transform duration-100 linear"
        >
          {projects.map((project, idx) => (
            <div key={idx} className="group bg-brand-surface border border-white/10 rounded-2xl p-6 hover:border-brand-red/50 transition-all duration-300 hover:-translate-y-2 flex flex-col relative z-10 bg-opacity-90">
              <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center text-brand-glow mb-6 border border-white/5 group-hover:bg-brand-red group-hover:text-white transition-colors">
                {project.icon}
              </div>
              
              <div className="text-xs font-bold text-brand-glow uppercase tracking-wider mb-2">{project.category}</div>
              <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow">
                {project.desc}
              </p>
              
              {project.isAction ? (
                 <button 
                    onClick={project.action}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-white/70 hover:text-brand-glow transition-colors mt-auto text-left"
                 >
                    {project.linkText} <ChevronRight size={14} />
                 </button>
              ) : (
                <a href={project.link || "#"} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm font-semibold text-white/70 hover:text-brand-glow transition-colors mt-auto">
                    {project.linkText} <ExternalLink size={14} />
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// 7. Contact Section
const Contact = () => {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    // Simulate delay
    setTimeout(() => {
        setFormStatus('success');
        alert("Mesajınız alındı! (Demo)");
        setFormStatus('idle');
    }, 1000);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
       {/* Background Glow */}
       <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-brand-red/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-3xl mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">İletişime Geç</h2>
            <p className="text-gray-400">Bir proje fikrin mi var? Veya sadece merhaba demek mi istiyorsun?</p>
        </div>

        <div className="bg-white/5 border border-white/10 rounded-2xl p-8 md:p-10 backdrop-blur-md">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300">Adınız</label>
                <input 
                  type="text" 
                  required 
                  placeholder="John Doe"
                  className="w-full px-4 py-3 bg-black/40 border border-white/10 rounded-lg focus:outline-none focus:border-brand-red focus:ring-1 focus:ring-brand-red transition-all text-white placeholder-gray-600"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300">E-posta</label>
                <input 
                  type="email" 
                  required 
                  placeholder="ornek@mail.com"
                  className="w-full px-4 py-3 bg-black/40 border border-white/10 rounded-lg focus:outline-none focus:border-brand-red focus:ring-1 focus:ring-brand-red transition-all text-white placeholder-gray-600"
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-300">Mesajın</label>
              <textarea 
                rows={5} 
                required 
                placeholder="Bir proje hakkında konuşalım..."
                className="w-full px-4 py-3 bg-black/40 border border-white/10 rounded-lg focus:outline-none focus:border-brand-red focus:ring-1 focus:ring-brand-red transition-all text-white placeholder-gray-600 resize-none"
              ></textarea>
            </div>

            <button 
              type="submit" 
              disabled={formStatus === 'submitting'}
              className="w-full py-4 rounded-lg bg-gradient-to-r from-brand-red to-brand-glow text-white font-bold hover:opacity-90 transition-opacity disabled:opacity-50 flex items-center justify-center gap-2"
            >
              {formStatus === 'submitting' ? 'Gönderiliyor...' : 'Mesaj Gönder'}
              {!formStatus && <ChevronRight size={18} />}
            </button>
          </form>
        </div>
        
        <div className="mt-12 flex justify-center gap-8">
            <a href="#" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
                <Mail size={20} /> <span className="text-sm">erkutaltindall@gmail.com</span>
            </a>
            <a href="#" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
                <MapPin size={20} /> <span className="text-sm">Bolu, TR</span>
            </a>
        </div>
      </div>
    </section>
  );
};

// 8. Footer
const Footer = () => {
  return (
    <footer className="border-t border-white/5 py-12 bg-black">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} Erkut Altındal — Tüm hakları saklıdır.
        </div>
        <div className="flex gap-6">
          <a href="#" className="text-gray-500 hover:text-brand-glow transition-colors"><Github size={20} /></a>
          <a href="#" className="text-gray-500 hover:text-brand-glow transition-colors"><Linkedin size={20} /></a>
          <a href="#" className="text-gray-500 hover:text-brand-glow transition-colors"><FileText size={20} /></a>
        </div>
      </div>
    </footer>
  );
};

// --- Main App ---
export default function App() {
  const [view, setView] = useState<'portfolio' | 'weather' | 'student-system' | 'library-system' | 'space-shooter'>('portfolio');

  if (view === 'weather') {
    return <WeatherApp onBack={() => setView('portfolio')} />;
  }

  if (view === 'student-system') {
    return <StudentSystemApp onBack={() => setView('portfolio')} />;
  }

  if (view === 'library-system') {
      return <LibrarySystemApp onBack={() => setView('portfolio')} />;
  }

  if (view === 'space-shooter') {
      return <SpaceShooterGame onBack={() => setView('portfolio')} />;
  }

  return (
    <div className="min-h-screen bg-brand-dark selection:bg-brand-red selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects 
           onOpenWeather={() => setView('weather')} 
           onOpenStudentSystem={() => setView('student-system')}
           onOpenLibrary={() => setView('library-system')}
           onOpenSpaceShooter={() => setView('space-shooter')}
        />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}