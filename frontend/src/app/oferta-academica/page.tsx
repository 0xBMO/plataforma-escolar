import Link from 'next/link';

export default function OfertaAcademicaPage() {
  const programas = [
    {
      codigo: 'TI-101',
      nombre: 'Introducción a las Tecnologías de la Información',
      tipo: 'Curso',
      descripcion: 'Fundamentos de hardware, redes, sistemas operativos y seguridad digital.',
      moodleRef: 'Curso 1 de prueba',
    },
    {
      codigo: 'DEV-201',
      nombre: 'Desarrollo Web con React',
      tipo: 'Diplomado',
      descripcion: 'Construcción de interfaces interactivas, componentes, hooks y consumo de APIs.',
      moodleRef: 'Curso 2 de prueba',
    },
    {
      codigo: 'LIC-001',
      nombre: 'Licenciatura en Ingeniería de Software',
      tipo: 'Licenciatura',
      descripcion: 'Formación profesional integral en desarrollo de sistemas, arquitectura y bases de datos.',
      moodleRef: 'Plan curricular 2026',
    },
  ];

  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      <div className="mb-10 text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">Oferta Académica</h1>
        <p className="text-slate-400 max-w-xl mx-auto text-sm md:text-base">
          Conoce nuestros programas, cursos y certificaciones vinculados directamente a las aulas virtuales de Moodle.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {programas.map((prog) => (
          <div key={prog.codigo} className="bg-slate-900 border border-slate-800 p-6 rounded-2xl flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-center mb-3">
                <span className="text-xs bg-indigo-900/60 border border-indigo-500/40 text-indigo-300 px-2.5 py-1 rounded-full font-semibold">
                  {prog.tipo}
                </span>
                <span className="text-xs text-slate-500 font-mono">{prog.codigo}</span>
              </div>
              <h2 className="text-xl font-bold text-white mb-2">{prog.nombre}</h2>
              <p className="text-sm text-slate-400 mb-4 leading-relaxed">{prog.descripcion}</p>
            </div>

            <div className="pt-4 border-t border-slate-800 flex justify-between items-center">
              <span className="text-xs text-sky-400">{prog.moodleRef}</span>
              <Link
                href="/registro"
                className="text-xs font-semibold bg-sky-600 hover:bg-sky-500 text-white px-3 py-1.5 rounded-lg transition-colors"
              >
                Inscribirme
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}