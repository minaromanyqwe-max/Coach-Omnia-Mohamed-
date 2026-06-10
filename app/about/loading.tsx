'use client';

import React, { useState, useEffect } from 'react';

export default function ImageProcessor() {
  const [progress, setProgress] = useState(0);
  const [currentLine, setCurrentLine] = useState('def process_image(img_path):');

  // مصفوفة تحاكي أكواد الذكاء الاصطناعي التي تظهر على الشاشة
  const codeLines = [
    'def process_image(img_path):',
    '# analyzing pixels...',
    'results = AI_model.predict(img)',
    'detecting_edges(threshold=0.5)',
    'extracting_features...',
    'building_strength_profile()',
    'optimizing_mesh_grids...',
    'rendering_3d_cascade...'
  ];

  // عداد التحميل وتغيير الأكواد تلقائياً
  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress((prev) => (prev >= 100 ? 0 : prev + 1));
    }, 50);

    const codeInterval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * codeLines.length);
      setCurrentLine(codeLines[randomIndex]);
    }, 1500);

    return () => {
      clearInterval(progressInterval);
      clearInterval(codeInterval);
    };
  }, []);

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-950 p-4">
      {/* حاوية الكارت الرئيسي المستوحى من أبعاد الموبايل */}
      <div 
        className="relative flex h-[640px] w-[360px] flex-col justify-between overflow-hidden rounded-[32px] border border-zinc-800 p-6 shadow-2xl"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.4), rgba(0,0,0,0.6)), url('/WhatsApp Image 2026-05-26 at 12.07.33 PM.jpeg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        
        {/* العناوين العلوية */}
        <div className="relative z-10 text-center">
          <h1 className="text-3xl font-black tracking-widest text-white drop-shadow-[0_2px_8px_rgba(255,255,255,0.3)]">
            BUILDING
          </h1>
          <h2 className="mt-1 text-4xl font-black tracking-widest text-indigo-400 drop-shadow-[0_2px_10px_rgba(129,140,248,0.5)]">
            STRENGTH
          </h2>
        </div>

        {/* الكود البرمجي العشوائي (العلوي) */}
        <div className="absolute left-4 top-28 z-10 font-mono text-[10px] text-emerald-400 opacity-80 mix-blend-screen">
          <p>{currentLine}</p>
          <p className="text-zinc-400"># status: {progress}%</p>
        </div>

        {/* الجزء الأوسط: الـ Loader الدائري الذكي */}
        <div className="relative flex items-center justify-center">
          {/* الدائرة الخارجية المتوهجة (Cyan) */}
          <div className="absolute h-56 w-56 animate-[ping_3s_infinite] rounded-full border border-cyan-500/30 bg-cyan-500/5 blur-sm" />
          
          {/* الدائرة الزجاجية المحيطة بالـ Loader */}
          <div className="absolute h-48 w-48 rounded-full border border-white/10 bg-white/5 backdrop-blur-[2px]" />

          {/* حلقة التحميل المتحركة (التدرج الأرجواني إلى الذهبي) */}
          <div 
            className="h-40 w-40 animate-spin rounded-full border-[6px] border-transparent"
            style={{
              borderTopColor: '#818cf8',    // Indigo
              borderRightColor: '#a78bfa',  // Purple
              borderBottomColor: '#fcd34d', // Amber/Gold
              animationDuration: '2s'
            }}
          />

          {/* النسبة المئوية في المنتصف */}
          <div className="absolute font-mono text-xl font-bold text-white drop-shadow">
            {progress}%
          </div>
        </div>

        {/* الكود البرمجي العشوائي (السفلي) */}
        <div className="absolute right-4 bottom-32 z-10 font-mono text-[10px] text-cyan-400 opacity-70 mix-blend-screen text-right">
          <p>model.predict(image_path)</p>
          <p className="text-zinc-400">output = tensors.cuda()</p>
        </div>

        {/* النصوص السفلية للـ Loading */}
        <div className="relative z-10 text-center">
          <h3 className="text-xl font-extrabold tracking-wider text-white">
            IMAGE PROCESSING...
          </h3>
          <p className="mt-3 font-mono text-[11px] tracking-widest text-zinc-400 uppercase">
            POWERED BY <span className="text-amber-400 font-bold">[MY APP NAME]</span>
          </p>
        </div>

        {/* إطار جمالي يحيط بالشاشة مثل الهواتف الذكية */}
        <div className="absolute inset-2 pointer-events-none rounded-[26px] border border-white/5" />
      </div>
    </div>
  );
}