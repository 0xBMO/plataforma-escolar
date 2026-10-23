import Link from 'next/link';

export default function AdmisionesPage() {
  const pasos = [
    {
      num: '01',
      titulo: 'Creación de Cuenta',
      detalle: 'Regístrate en el portal con tu nombre, teléfono y correo electrónico para darte de alta como Aspirante.',
    },
    {
      num: '02',
      titulo: 'Validación y Selección',
      detalle: 'El área de coordinación y administración revisará tu solicitud y asignará tu programa académico correspondiente.',
    },
    {
      num: '03',
      titulo: 'Sincronización con Moodle',
      detalle: 'El backend vinculará tu cuenta con el campus virtual y te matriculará automáticamente en tus materias.',
    },
    {
      num: '04',
      titulo: 'Acceso al Campus',
      detalle: 'Ingresa a tu panel "Mi IINICIA" para acceder directamente a las actividades, foros y evaluaciones de cada curso.',
    },
  ];

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">Proceso de Admisión</h1>
        <p className="text-slate-400 max-w-xl mx-auto text-sm md:text-base">
          Sigue estos pasos para integrarte a la comunidad universitaria IINICIA y habilitar tus accesos al campus virtual.
        </p>
      </div>

      <div className="space-y-6">
        {pasos.map((paso) => (
          <div key={paso.num} className="bg-slate-900 border border-slate-800 p-6 rounded-2xl flex gap-6 items-start">
            <span className="text-3xl font-extrabold text-sky-500/80 font-mono">{paso.num}</span>
            <div>
              <h2 className="text-lg font-bold text-white mb-1">{paso.titulo}</h2>
              <p className="text-sm text-slate-400 leading-relaxed">{paso.detalle}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <Link
          href="/registro"
          className="bg-indigo-600 hover:bg-indigo-500 text-white font-semibold px-8 py-3.5 rounded-xl transition-all inline-block shadow-lg shadow-indigo-600/30"
        >
          Comenzar mi Registro Ahora
        </Link>
      </div>
    </div>
  );
}