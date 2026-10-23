'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { createClient } from '@/lib/supabaseClient';

export default function MiIiniciaPage() {
  const router = useRouter();
  const supabase = createClient();

  const [perfil, setPerfil] = useState<any>(null);
  const [roles, setRoles] = useState<string[]>([]);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    const cargarDatos = async () => {
      const { data: { user } } = await supabase.auth.getUser();

      if (!user) {
        router.push('/login');
        return;
      }

      // Consultar perfil
      const { data: profileData } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', user.id)
        .single();

      // Consultar roles
      const { data: rolesData } = await supabase
        .from('user_roles')
        .select('roles(name)')
        .eq('user_id', user.id);

      const nombresRoles = rolesData?.map((r: any) => r.roles?.name) || [];

      setPerfil({ ...profileData, email: user.email });
      setRoles(nombresRoles);
      setCargando(false);
    };

    cargarDatos();
  }, [router, supabase]);

  if (cargando) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <p className="text-slate-400 text-lg animate-pulse">Cargando información del perfil...</p>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-6 py-10">
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 mb-8 shadow-lg">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h1 className="text-3xl font-bold text-white mb-1">
              Bienvenido, {perfil?.first_name} {perfil?.last_name}
            </h1>
            <p className="text-slate-400 text-sm">{perfil?.email}</p>
          </div>
          <div className="flex gap-2">
            {roles.map((rol) => (
              <span
                key={rol}
                className="bg-indigo-900/60 border border-indigo-500/40 text-indigo-300 text-xs px-3 py-1.5 rounded-full font-semibold uppercase tracking-wider"
              >
                {rol}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Vistas según Rol */}
      {roles.includes('Aspirante') && (
        <div className="bg-amber-500/10 border border-amber-500/30 p-6 rounded-xl text-amber-200">
          <h2 className="text-xl font-bold mb-2">Estatus de Admisión: En revisión</h2>
          <p className="text-sm leading-relaxed">
            Tu registro como Aspirante ha sido recibido en Supabase. Un administrador autorizará tu programa académico para vincularte a Moodle y habilitar tus cursos.
          </p>
        </div>
      )}

      {(roles.includes('Estudiante') || roles.includes('Profesor')) && (
        <div className="space-y-4">
          <h2 className="text-xl font-bold text-sky-400">Tus Cursos Asignados (Moodle)</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-slate-900 border border-slate-800 p-5 rounded-xl">
              <h3 className="font-semibold text-lg text-white">Introducción a las TI</h3>
              <p className="text-xs text-slate-400 mt-1 mb-4">Curso 1 de ejemplo</p>
              <button className="bg-sky-600 hover:bg-sky-500 text-white text-xs px-4 py-2 rounded-lg font-medium">
                Entrar al Campus
              </button>
            </div>
            <div className="bg-slate-900 border border-slate-800 p-5 rounded-xl">
              <h3 className="font-semibold text-lg text-white">Desarrollo Web con React</h3>
              <p className="text-xs text-slate-400 mt-1 mb-4">Curso 2 de ejemplo</p>
              <button className="bg-sky-600 hover:bg-sky-500 text-white text-xs px-4 py-2 rounded-lg font-medium">
                Entrar al Campus
              </button>
            </div>
          </div>
        </div>
      )}

      {roles.includes('Administrador') && (
        <div className="bg-slate-900 border border-slate-800 p-6 rounded-xl">
          <h2 className="text-xl font-bold text-white mb-2">Panel de Control Administrativo</h2>
          <p className="text-sm text-slate-400 mb-4">
            Gestión de usuarios, asignación de roles e integración de matrículas con Moodle.
          </p>
          <button className="bg-indigo-600 hover:bg-indigo-500 text-white text-sm px-4 py-2 rounded-lg font-medium">
            Ver Gestión de Usuarios
          </button>
        </div>
      )}
    </div>
  );
}