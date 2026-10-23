import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center py-16 px-6 text-center">
      {/* Hero Section */}
      <div className="max-w-4xl mx-auto space-y-6">
        <span className="inline-block bg-sky-500/10 border border-sky-500/30 text-sky-400 text-xs md:text-sm font-semibold px-4 py-1.5 rounded-full uppercase tracking-wider">
          Plataforma Digital Universitaria
        </span>

        <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight leading-tight">
          Bienvenido al Portal Institucional <span className="text-sky-400">IINICIA</span>
        </h1>

        <p className="text-slate-400 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
          Educación superior, diplomados y certificaciones conectadas a través de nuestro campus virtual integrado con Moodle y tecnologías modernas.
        </p>

        <div className="flex flex-wrap justify-center gap-4 pt-4">
          <Link
            href="/oferta-academica"
            className="bg-sky-600 hover:bg-sky-500 text-white font-semibold px-6 py-3 rounded-xl transition-all shadow-lg shadow-sky-600/30"
          >
            Explorar Oferta Académica
          </Link>
          <Link
            href="/admisiones"
            className="bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-200 font-semibold px-6 py-3 rounded-xl transition-all"
          >
            Proceso de Admisión
          </Link>
        </div>
      </div>

      {/* Tarjetas informativas de la Universidad */}
      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mt-20 text-left">
        <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl">
          <h3 className="text-xl font-bold text-white mb-2">Modelo Educativo</h3>
          <p className="text-sm text-slate-400 leading-relaxed">
            Programas flexibles orientados a proyectos y desarrollo tecnológico, combinando teoría aplicada y prácticas en laboratorio.
          </p>
        </div>

        <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl">
          <h3 className="text-xl font-bold text-sky-400 mb-2">Campus Virtual</h3>
          <p className="text-sm text-slate-400 leading-relaxed">
            Aulas virtuales en Moodle con foros de discusión, entrega de actividades, evaluaciones continuas y seguimiento de avance académico.
          </p>
        </div>

        <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl">
          <h3 className="text-xl font-bold text-white mb-2">Comunidad</h3>
          <p className="text-sm text-slate-400 leading-relaxed">
            Acompañamiento docente especializado y canales de consulta técnica y académica durante toda tu trayectoria de formación.
          </p>
        </div>
      </div>
    </div>
  );
}