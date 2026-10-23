'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { createClient } from '@/lib/supabaseClient';

export default function Navbar() {
  const supabase = createClient();
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    supabase.auth.getUser().then(({ data: { user } }) => setUser(user));

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });

    return () => subscription.unsubscribe();
  }, [supabase]);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    window.location.href = '/login';
  };

  return (
    <nav className="bg-slate-900 border-b border-slate-800 text-white px-6 py-4 flex justify-between items-center sticky top-0 z-50">
      <Link href="/" className="text-xl font-bold tracking-wider text-sky-400">
        IINICIA
      </Link>

      <div className="flex items-center gap-6 text-sm font-medium">
        <Link href="/" className="hover:text-sky-400 transition-colors">Inicio</Link>
        <Link href="/oferta-academica" className="hover:text-sky-400 transition-colors">Oferta Académica</Link>
        <Link href="/admisiones" className="hover:text-sky-400 transition-colors">Admisiones</Link>

        {user ? (
          <>
            <Link href="/mi-iinicia" className="bg-sky-600 hover:bg-sky-500 px-4 py-2 rounded-lg font-semibold transition-colors">
              Mi IINICIA
            </Link>
            <button
              onClick={handleLogout}
              className="text-red-400 hover:text-red-300 transition-colors"
            >
              Cerrar Sesión
            </button>
          </>
        ) : (
          <>
            <Link href="/login" className="hover:text-sky-400 transition-colors">Iniciar Sesión</Link>
            <Link href="/registro" className="bg-indigo-600 hover:bg-indigo-500 px-4 py-2 rounded-lg font-semibold transition-colors">
              Registro
            </Link>
          </>
        )}
      </div>
    </nav>
  );
}