function Card({
  className = '',
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return <div className={className}>{children}</div>;
}

function CardContent({
  className = '',
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return <div className={className}>{children}</div>;
}

import { useMemo, useState } from 'react';
import {
  Search,
  Sparkles,
  TrendingUp,
  Building2,
  Users,
  Target,
  BarChart3,
  Layers,
  CalendarDays,
  Mic2,
  Zap,
  SlidersHorizontal,
  ArrowUpDown,
  AlertTriangle,
  Lightbulb,
  BookOpen,
  Gauge,
  X,
  CheckCircle2,
} from 'lucide-react';
import { motion } from 'framer-motion';

const talks = [
  {
    id: 1,
    title: 'Errores críticos que están frenando la adopción de IA en LATAM',
    speaker: 'Panel / varios speakers',
    company: 'Mercado Libre, ADL, AWS, U. Sabana',
    date: 'Viernes 08 de mayo',
    stage: 'Industry Stage',
    category: 'Adopción',
    audience: 'Líderes técnicos / Directivos',
    maturity: 'Media',
    applicability: 'Alta',
    summary:
      'La adopción de IA falla cuando se trabaja desde el hype y no desde problemas reales del negocio. La charla remarca que tener modelos aislados no equivale a adoptar IA, especialmente si no están integrados en procesos core.',
    quickRead: [
      'El patrón central es resolver problemas reales, no producir pilotos llamativos.',
      'La adopción ocurre cuando IA entra a procesos core y cambia decisiones.',
      'La priorización debe estar guiada por impacto, foco y posibilidad real de ejecución.',
    ],
    keyInsights: [
      'La primera causa de falla es no resolver un problema real del negocio.',
      'Experimentar no es adoptar: la IA debe llegar a procesos core.',
      'Menos iniciativas, mejor priorizadas por impacto y posibilidad real de éxito.',
      'Construir criterio técnico y de negocio importa más que picar código rápido.',
    ],
    whyItMatters:
      'Ayuda a separar iniciativas útiles de experimentos atractivos pero desconectados del negocio. La señal principal es priorizar problemas reales, adopción y medición antes de sumar más herramientas.',
    risks: [
      'Hype sin ROI',
      'Proyectos piloto eternos',
      'Falta de ownership',
      'Mala priorización',
    ],
    tags: ['Adopción', 'ROI', 'Gobernanza', 'LATAM', 'Estrategia'],
    marketSignal: 92,
    businessImpact: 95,
    technicalDepth: 62,
  },
  {
    id: 2,
    title: 'Beyond the demo: cómo transformar en utilidades reales',
    speaker: 'Will Gaviria, Mario López, Valeria Soler',
    company: 'Coactive AI, Bravent, AI Young Leaders',
    date: 'Jueves 07 de mayo',
    stage: 'Industry Stage',
    category: 'Producción',
    audience: 'Developers / Líderes técnicos',
    maturity: 'Alta',
    applicability: 'Alta',
    summary:
      'La charla cuestiona la obsesión por demostrar viabilidad y propone enfocarse en entender negocio, estructurar datos, gobernar bien y llevar IA a utilidades reales sostenibles.',
    quickRead: [
      'La PoC ya no es el reto principal; el reto es convertirla en utilidad real.',
      'Datos, gobernanza y observabilidad aparecen como condiciones de producción.',
      'Comprar o construir depende de si el caso es commodity o diferencial.',
    ],
    keyInsights: [
      'Una PoC de IA ya es relativamente fácil; el reto está en convertirla en utilidad real.',
      'Los datos deben estructurarse antes de pensar en ponerles IA encima.',
      'La gobernanza y la observabilidad son fundamentales para sostener IA en el tiempo.',
      'Construir o comprar depende de si el caso es commodity o diferencial para la compañía.',
    ],
    whyItMatters:
      'Marca una diferencia importante entre demo y producto: datos, gobernanza, observabilidad, adopción y retorno. El valor debe evaluarse por su capacidad de sostenerse en operación y generar resultados verificables.',
    risks: [
      'Demos sin adopción',
      'Datos débiles',
      'Falta de observabilidad',
      'Vendor lock-in',
    ],
    tags: ['Producción', 'Gobernanza', 'Datos', 'PoC', 'Observabilidad'],
    marketSignal: 88,
    businessImpact: 90,
    technicalDepth: 78,
  },
  {
    id: 3,
    title: 'Qué se puede lograr al ser AI First',
    speaker: 'Valentina Ponce de León',
    company: 'LAB10',
    date: 'Jueves 07 de mayo',
    stage: 'Industry Stage',
    category: 'AI First',
    audience: 'General',
    maturity: 'Media',
    applicability: 'Alta',
    summary:
      'La charla presenta AI-first como una forma de rediseñar procesos, roles y decisiones alrededor de IA, no como una capa decorativa pegada al final de los flujos actuales.',
    quickRead: [
      'AI-first implica rediseñar la forma de operar, no solo acelerar tareas existentes.',
      'El valor aparece cuando IA queda integrada al trabajo diario.',
      'El cambio requiere habilidades, personas y hábitos nuevos.',
    ],
    keyInsights: [
      'AI-first implica cuestionar procesos existentes, no solo acelerarlos.',
      'La IA puede abrir nuevos modelos de operación y crecimiento.',
      'La adopción requiere habilidades, personas y hábitos nuevos.',
      'El valor aparece cuando IA queda integrada al trabajo diario.',
    ],
    whyItMatters:
      'Sirve para evaluar si una iniciativa realmente cambia la forma de operar o si solo incorpora IA sobre un proceso existente sin rediseñarlo.',
    risks: [
      'AI washing',
      'Cambio cultural superficial',
      'Automatizar procesos malos',
    ],
    tags: ['AI-first', 'Cultura', 'Productividad', 'Transformación'],
    marketSignal: 85,
    businessImpact: 84,
    technicalDepth: 58,
  },
  {
    id: 4,
    title: 'Más AI, mismo negocio: algo está fallando',
    speaker: 'Por validar',
    company: 'Por validar',
    date: 'Por validar',
    stage: 'Main Stage',
    category: 'Estrategia',
    audience: 'Directivos / Líderes técnicos',
    maturity: 'Media',
    applicability: 'Alta',
    summary:
      'La charla apunta a una tensión común: muchas empresas aumentan el uso de IA, pero el negocio sigue funcionando igual. La señal importante es que IA debe cambiar decisiones, procesos y propuestas de valor.',
    quickRead: [
      'Más herramientas no equivalen a transformación.',
      'La IA debe cambiar decisiones, procesos o propuesta de valor.',
      'La productividad aislada puede quedarse corta si no cambia el resultado del negocio.',
    ],
    keyInsights: [
      'Más herramientas no significan más transformación.',
      'El reto no es adoptar IA, sino modificar cómo opera el negocio.',
      'La promesa de valor debe ser visible para clientes o equipos internos.',
      'La productividad aislada no siempre cambia el resultado estratégico.',
    ],
    whyItMatters:
      'Es una alerta contra la adopción cosmética. Si el negocio no cambia, probablemente solo se incorporaron nuevas herramientas sin transformar la operación ni el modelo de valor.',
    risks: ['Tool sprawl', 'IA sin estrategia', 'Métricas pobres'],
    tags: ['Estrategia', 'Negocio', 'Transformación', 'ROI'],
    marketSignal: 80,
    businessImpact: 88,
    technicalDepth: 50,
  },
  {
    id: 5,
    title: 'La nueva ventaja automotriz está en la IA detrás de ella',
    speaker: 'Hugo Ramírez',
    company: 'Autogermana',
    date: 'Viernes 08 de mayo',
    stage: 'Industry Stage',
    category: 'Industria',
    audience: 'Directivos / Producto / Tecnología',
    maturity: 'Media',
    applicability: 'Alta',
    summary:
      'La charla conecta la evolución automotriz con IA, resaltando que la nueva ventaja no está solo en el vehículo, sino en los datos, la experiencia, la predicción y los servicios inteligentes alrededor.',
    quickRead: [
      'El valor se mueve del producto físico al ecosistema inteligente.',
      'Los datos habilitan diagnóstico, personalización y servicios proactivos.',
      'La experiencia del usuario se vuelve una fuente clave de diferenciación.',
    ],
    keyInsights: [
      'El valor se está moviendo del producto físico al ecosistema inteligente.',
      'La IA permite personalización, diagnóstico, eficiencia operativa y nuevos servicios.',
      'La transformación no parte de la tecnología sino del problema de negocio.',
      'La experiencia del usuario se vuelve una fuente clave de diferenciación.',
    ],
    whyItMatters:
      'La industria automotriz muestra cómo los datos y los servicios inteligentes empiezan a pesar tanto como el producto físico. Muy aplicable a modelos basados en monitoreo, operación y predicción.',
    risks: [
      'No partir del problema',
      'Datos subutilizados',
      'Soluciones desconectadas del cliente',
    ],
    tags: ['Automotriz', 'Telemetría', 'Datos', 'Predictivo', 'Experiencia'],
    marketSignal: 87,
    businessImpact: 91,
    technicalDepth: 65,
  },
  {
    id: 6,
    title: 'La era de la IA generativa: transformando organizaciones',
    speaker: 'Ángela Pinzón',
    company: 'Google Cloud',
    date: 'Viernes 08 de mayo',
    stage: 'Industry Stage',
    category: 'Transformación',
    audience: 'General',
    maturity: 'Media',
    applicability: 'Media',
    summary:
      'La charla plantea la IA generativa como motor para innovar, mejorar procesos, optimizar operaciones y acelerar crecimiento, con énfasis en cultura, adopción y capacidades organizacionales.',
    quickRead: [
      'La IA generativa está pasando de experimentación a implementación empresarial.',
      'El crecimiento depende de tecnología, cultura y adopción.',
      'Las organizaciones necesitan capacidades internas para sostener el cambio.',
    ],
    keyInsights: [
      'La IA generativa está pasando de experimentación a implementación empresarial.',
      'El crecimiento depende tanto de tecnología como de cultura y adopción.',
      'Las organizaciones deben construir capacidades internas para sostener el cambio.',
      'La ventaja aparece cuando IA se conecta con procesos y productos.',
    ],
    whyItMatters:
      'Funciona como marco general para entender cómo las empresas grandes están comunicando IA generativa: innovación, eficiencia, cultura y transformación operacional.',
    risks: [
      'Adopción superficial',
      'Dependencia de proveedores',
      'Cambio cultural lento',
    ],
    tags: ['GenAI', 'Google Cloud', 'Cultura', 'Organización'],
    marketSignal: 82,
    businessImpact: 78,
    technicalDepth: 55,
  },
  {
    id: 7,
    title: 'De roles a skills: cómo AI rehace el talento en las empresas',
    speaker: 'Juan Zerda',
    company: 'Coursera',
    date: 'Viernes 08 de mayo',
    stage: 'Industry Stage',
    category: 'Talento',
    audience: 'Líderes técnicos / Directivos',
    maturity: 'Media',
    applicability: 'Alta',
    summary:
      'La charla expone el paso de estructuras basadas en roles a organizaciones guiadas por skills, donde la IA exige nuevas capacidades, aprendizaje continuo y rediseño del talento operativo.',
    quickRead: [
      'El talento se empieza a gestionar por skills, no solo por cargos.',
      'La alfabetización en IA se vuelve una capacidad transversal.',
      'Los beneficios crecen cuando se alinean habilidades, procesos y herramientas.',
    ],
    keyInsights: [
      'El talento se empieza a gestionar por skills, no solo por cargos.',
      'La alfabetización en IA se vuelve una capacidad transversal.',
      'El impacto de IA depende de preparación, formación y adopción real.',
      'Los beneficios crecen cuando se alinean habilidades, procesos y herramientas.',
    ],
    whyItMatters:
      'Propone una lectura útil para formación interna: menos foco en cargos y más en capacidades reales, aprendizaje continuo y adopción práctica.',
    risks: [
      'Brecha de skills',
      'Capacitación genérica',
      'Resistencia cultural',
    ],
    tags: ['Skills', 'Talento', 'Formación', 'Liderazgo', 'Adopción'],
    marketSignal: 84,
    businessImpact: 82,
    technicalDepth: 45,
  },
];

const categories = [
  'Todas',
  ...Array.from(new Set(talks.map((talk) => talk.category))),
];
const audiences = [
  'Todas',
  ...Array.from(new Set(talks.map((talk) => talk.audience))),
];
const stages = [
  'Todos',
  ...Array.from(new Set(talks.map((talk) => talk.stage))),
];
const applicabilityOptions = ['Todas', 'Alta', 'Media', 'Baja'];
const sortOptions = [
  { label: 'Relevancia', value: 'marketSignal' },
  { label: 'Impacto negocio', value: 'businessImpact' },
  { label: 'Profundidad técnica', value: 'technicalDepth' },
  { label: 'Título A-Z', value: 'title' },
];

const metricDictionary = [
  {
    label: 'Señal de mercado',
    value: 'marketSignal',
    color: 'from-fuchsia-400 to-violet-400',
    description:
      'Qué tanto la charla representa una tendencia repetible, relevante o emergente del mercado.',
  },
  {
    label: 'Impacto de negocio',
    value: 'businessImpact',
    color: 'from-emerald-300 to-teal-400',
    description:
      'Qué tan conectada está la charla con valor, ROI, decisiones, eficiencia o crecimiento.',
  },
  {
    label: 'Profundidad técnica',
    value: 'technicalDepth',
    color: 'from-blue-300 to-cyan-400',
    description:
      'Nivel de detalle técnico, patrones, datos, arquitectura, implementación o aprendizajes prácticos.',
  },
];

const extendedSummaries = {
  1: [
    'La charla deja una alerta clara: muchas organizaciones siguen confundiendo experimentación con adopción. Probar modelos, hacer demos o lanzar pilotos aislados puede generar aprendizaje, pero no necesariamente transforma la operación. La adopción real aparece cuando la IA entra en procesos relevantes, cambia decisiones y se conecta con una métrica de negocio verificable.',
    'El punto más fuerte es la necesidad de criterio. La velocidad para construir soluciones con IA ha aumentado, pero eso no reemplaza la obligación de entender bien el problema, priorizar pocas apuestas y evitar iniciativas que solo responden al entusiasmo del momento. El mensaje práctico es empezar por dolores reales, medir impacto y escalar solo aquello que demuestra valor.',
    'También aparece una tensión importante para LATAM: no basta con importar casos de éxito o repetir discursos globales. Cada empresa debe evaluar su madurez de datos, sus procesos core y su capacidad interna de adopción antes de declarar que ya está transformándose con IA.',
  ],
  2: [
    'La charla se enfoca en una transición clave: pasar de demos atractivas a utilidades reales. Hoy una prueba de concepto con IA puede construirse relativamente rápido, pero llevarla a producción exige resolver temas menos vistosos y más difíciles: datos consistentes, gobierno, observabilidad, seguridad, operación y adopción.',
    'El mensaje central es que la IA no debe evaluarse solo por su capacidad de sorprender, sino por su capacidad de sostener valor en el tiempo. Una demo puede probar que algo es posible, pero una utilidad real debe funcionar en condiciones cambiantes, integrarse con procesos existentes y ser entendible para quienes la usan o la operan.',
    'La charla también propone una lectura pragmática sobre construir o comprar. Si el caso es genérico, comprar puede acelerar. Si el caso toca una ventaja diferencial de la compañía, construir o adaptar con más control puede tener mayor sentido. La decisión debe evaluarse según criticidad del caso, diferenciación esperada, capacidades internas, costos y riesgos operativos.',
  ],
  3: [
    'Ser AI-first no significa agregar IA a todo por reflejo, sino rediseñar la manera en que se toman decisiones, se ejecutan tareas y se crean capacidades. La charla plantea que el valor aparece cuando IA deja de ser una herramienta periférica y se vuelve parte normal del flujo de trabajo.',
    'La idea más importante es que la adopción AI-first requiere cambios de comportamiento. No basta con habilitar herramientas; las personas deben aprender a delegar, validar, iterar y rediseñar procesos con IA. Eso implica nuevas habilidades, nuevos hábitos y una relación distinta entre equipos, datos y tecnología.',
    'La señal para cualquier organización es clara: si una iniciativa no cambia el proceso, la decisión o la experiencia, probablemente no es AI-first. Puede tratarse únicamente de automatización superficial si no modifica de forma clara la operación o la experiencia.',
  ],
  4: [
    'La charla cuestiona una paradoja cada vez más común: empresas que incorporan más IA, más herramientas y más pilotos, pero siguen teniendo el mismo negocio de fondo. El problema no es la falta de tecnología, sino la falta de conexión entre las capacidades nuevas y la transformación real del modelo operativo o comercial.',
    'El mensaje principal es que la IA debería modificar decisiones, procesos o propuestas de valor. Si solo acelera tareas aisladas, puede mejorar productividad local, pero no necesariamente genera ventaja competitiva. La transformación requiere que la tecnología toque aquello que realmente cambia el resultado del negocio.',
    "Esta charla sirve como filtro incómodo pero útil: después de implementar una solución de IA, la pregunta no debería ser '¿funciona?', sino '¿qué cambió en el negocio gracias a esto?'. Esta pregunta permite conectar la implementación con resultados observables y decisiones de negocio.",
  ],
  5: [
    'La charla muestra cómo la ventaja en la industria automotriz se está desplazando del producto físico hacia el ecosistema inteligente que lo rodea. El vehículo sigue siendo importante, pero los datos, los servicios conectados, la predicción y la experiencia empiezan a definir una parte creciente del valor.',
    'La IA permite habilitar capacidades como diagnóstico, personalización, mantenimiento predictivo, eficiencia operativa y servicios proactivos. En ese contexto, la ventaja ya no depende solo de fabricar o vender mejor, sino de entender mejor al usuario, anticipar necesidades y convertir datos operativos en decisiones útiles.',
    'El aprendizaje transferible es que muchas industrias con activos físicos pueden reinventar su valor a partir de capas inteligentes. La tecnología importa, pero el punto de partida sigue siendo el problema del cliente y la capacidad de convertir datos en acciones concretas. El aprendizaje central es mantener el foco en necesidades reales y resultados accionables.',
  ],
  6: [
    'La charla presenta la IA generativa como una capacidad de transformación organizacional, no solo como una herramienta de productividad individual. El foco está en cómo las empresas pueden usarla para innovar, mejorar procesos, optimizar operaciones y acelerar nuevas formas de crecimiento.',
    'Uno de los mensajes relevantes es que la adopción no depende únicamente de la plataforma tecnológica. También requiere cultura, formación, gobierno y claridad sobre los casos de uso. Las organizaciones que logren combinar capacidades técnicas con aprendizaje interno tendrán mejores condiciones para convertir IA generativa en valor sostenido.',
    'La charla también refleja cómo los grandes proveedores están posicionando la IA generativa: como una capa transversal que puede tocar múltiples áreas de la organización. El reto para las empresas será evitar quedarse en discursos amplios y aterrizar casos concretos, medibles y operables.',
  ],
  7: [
    'La charla plantea un cambio importante en la forma de entender el talento: pasar de estructuras centradas en cargos a modelos guiados por habilidades. En un contexto donde la IA cambia tareas, herramientas y formas de trabajo, las organizaciones necesitan saber qué capacidades tienen, cuáles faltan y cómo desarrollarlas.',
    'La alfabetización en IA aparece como una habilidad transversal. No todos necesitan convertirse en expertos técnicos, pero sí entender cómo usar IA, cómo evaluar sus resultados, cómo integrarla al trabajo y cómo reconocer sus límites. El talento empieza a medirse menos por el título del rol y más por la capacidad de adaptarse y producir valor con nuevas herramientas.',
    'El punto más aplicable es que la adopción de IA no puede separarse de formación y gestión del cambio. Sin skills, las herramientas quedan subutilizadas. Sin procesos, las skills se dispersan. Sin liderazgo y seguimiento, la formación puede perder continuidad y no traducirse en cambios sostenidos.',
  ],
};

function getExtendedSummary(talk) {
  return (
    extendedSummaries[talk.id] || [
      talk.summary,
      talk.whyItMatters,
      talk.keyInsights.join(' '),
    ]
  );
}

function scoreColor(score) {
  if (score >= 88) return 'text-emerald-300';
  if (score >= 75) return 'text-cyan-300';
  return 'text-amber-300';
}

function scoreBorder(score) {
  if (score >= 88) return 'border-emerald-400/30 bg-emerald-400/8';
  if (score >= 75) return 'border-cyan-400/30 bg-cyan-400/8';
  return 'border-amber-400/30 bg-amber-400/8';
}

function Pill({ children, active = false, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`rounded-xl border px-3 py-2 text-xs transition ${
        active
          ? 'border-cyan-300/70 bg-cyan-300/15 text-cyan-100 shadow-[0_0_20px_rgba(34,211,238,0.18)]'
          : 'border-white/10 bg-white/[0.035] text-slate-300 hover:border-cyan-300/40 hover:bg-cyan-300/10'
      }`}
    >
      {children}
    </button>
  );
}

function MetricCard({ icon: Icon, label, value, hint }) {
  return (
    <Card className="border-white/10 bg-white/[0.04] text-white backdrop-blur-xl">
      <CardContent className="p-4">
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="text-xs text-slate-400">{label}</p>
            <p className="mt-1 text-2xl font-semibold tracking-tight">
              {value}
            </p>
            <p className="mt-1 text-xs text-slate-500">{hint}</p>
          </div>
          <div className="rounded-2xl border border-cyan-300/20 bg-cyan-300/10 p-2 text-cyan-200">
            <Icon size={18} />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

function TalkCard({ talk, selected, onClick }) {
  return (
    <motion.button
      layout
      onClick={onClick}
      className={`w-full rounded-3xl border p-4 text-left transition ${
        selected
          ? 'border-cyan-300/60 bg-cyan-300/10 shadow-[0_0_35px_rgba(34,211,238,0.16)]'
          : 'border-white/10 bg-white/[0.045] hover:border-cyan-300/30 hover:bg-white/[0.07]'
      }`}
    >
      <div className="flex items-start justify-between gap-4">
        <div className="min-w-0">
          <div className="mb-2 flex flex-wrap gap-2">
            <span className="rounded-full border border-white/10 bg-black/20 px-2 py-1 text-[11px] text-slate-300">
              {talk.category}
            </span>
            <span className="rounded-full border border-white/10 bg-black/20 px-2 py-1 text-[11px] text-slate-300">
              {talk.audience}
            </span>
          </div>
          <h3 className="line-clamp-2 text-base font-semibold leading-snug text-white">
            {talk.title}
          </h3>
          <p className="mt-2 line-clamp-1 text-sm text-slate-400">
            {talk.company}
          </p>
        </div>
        <div className="shrink-0 text-right">
          <p className="text-[10px] uppercase tracking-wider text-slate-500">
            Relevancia
          </p>
          <p
            className={`text-3xl font-semibold ${scoreColor(
              talk.marketSignal
            )}`}
          >
            {talk.marketSignal}
          </p>
        </div>
      </div>
      <div className="mt-4 flex flex-wrap gap-2">
        {talk.tags.slice(0, 4).map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-white/10 bg-black/20 px-2 py-1 text-[11px] text-slate-400"
          >
            #{tag}
          </span>
        ))}
      </div>
    </motion.button>
  );
}

function FilterGroup({ label, children }) {
  return (
    <div className="space-y-2">
      <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-slate-500">
        {label}
      </p>
      <div className="flex flex-wrap gap-2">{children}</div>
    </div>
  );
}

function MetricDictionary() {
  return (
    <section className="mb-6 rounded-[2rem] border border-white/10 bg-white/[0.04] p-5 backdrop-blur-xl">
      <div className="mb-4 flex items-center gap-2 text-sm font-semibold text-slate-100">
        <BookOpen size={16} /> Diccionario de métricas
      </div>
      <div className="grid gap-3 md:grid-cols-3">
        {metricDictionary.map((metric) => (
          <div
            key={metric.value}
            className="rounded-3xl border border-white/10 bg-black/20 p-4"
          >
            <div
              className={`mb-3 h-1.5 rounded-full bg-gradient-to-r ${metric.color}`}
            />
            <h3 className="text-sm font-semibold text-white">{metric.label}</h3>
            <p className="mt-2 text-xs leading-5 text-slate-400">
              {metric.description}
            </p>
            <p className="mt-3 text-[11px] uppercase tracking-[0.18em] text-slate-500">
              Escala 0 - 100
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default function AISummitMemoryDashboard() {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('Todas');
  const [audience, setAudience] = useState('Todas');
  const [stage, setStage] = useState('Todos');
  const [applicability, setApplicability] = useState('Todas');
  const [sortBy, setSortBy] = useState('marketSignal');
  const [selectedId, setSelectedId] = useState(talks[0].id);

  const filteredTalks = useMemo(() => {
    const normalized = query.toLowerCase().trim();
    const result = talks.filter((talk) => {
      const haystack = [
        talk.title,
        talk.speaker,
        talk.company,
        talk.summary,
        talk.whyItMatters,
        getExtendedSummary(talk).join(' '),
        talk.category,
        talk.audience,
        talk.stage,
        ...talk.tags,
      ]
        .join(' ')
        .toLowerCase();
      return (
        (!normalized || haystack.includes(normalized)) &&
        (category === 'Todas' || talk.category === category) &&
        (audience === 'Todas' || talk.audience === audience) &&
        (stage === 'Todos' || talk.stage === stage) &&
        (applicability === 'Todas' || talk.applicability === applicability)
      );
    });

    return [...result].sort((a, b) => {
      if (sortBy === 'title') return a.title.localeCompare(b.title);
      return b[sortBy] - a[sortBy];
    });
  }, [query, category, audience, stage, applicability, sortBy]);

  const selectedTalk =
    talks.find((talk) => talk.id === selectedId) ||
    filteredTalks[0] ||
    talks[0];
  const avgBusinessImpact = Math.round(
    talks.reduce((acc, talk) => acc + talk.businessImpact, 0) / talks.length
  );
  const avgMarketSignal = Math.round(
    talks.reduce((acc, talk) => acc + talk.marketSignal, 0) / talks.length
  );

  const clearFilters = () => {
    setQuery('');
    setCategory('Todas');
    setAudience('Todas');
    setStage('Todos');
    setApplicability('Todas');
    setSortBy('marketSignal');
  };

  return (
    <div className="min-h-screen overflow-hidden bg-[#05070d] text-white">
      <style>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
      <div className="pointer-events-none fixed inset-0 opacity-70">
        <div className="absolute left-[-10%] top-[-10%] h-96 w-96 rounded-full bg-cyan-500/20 blur-3xl" />
        <div className="absolute right-[-5%] top-[10%] h-96 w-96 rounded-full bg-violet-600/20 blur-3xl" />
        <div className="absolute bottom-[-15%] left-[30%] h-[28rem] w-[28rem] rounded-full bg-orange-500/10 blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:42px_42px]" />
      </div>

      <main className="relative mx-auto max-w-7xl px-5 py-8">
        <section className="mb-6 rounded-[2rem] border border-white/10 bg-white/[0.045] p-6 shadow-2xl backdrop-blur-xl">
          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <div>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-1 text-xs text-cyan-100">
                <Sparkles size={14} /> AI Summit Bogotá · Memory Dashboard
              </div>
              <h1 className="max-w-4xl text-4xl font-semibold tracking-tight text-white md:text-6xl">
                Memorias visuales para explorar charlas y aprendizajes
              </h1>
              <p className="mt-4 max-w-3xl text-sm leading-6 text-slate-300 md:text-base">
                Dashboard navegable para consultar charlas del evento, filtrar
                por audiencia, tema, escenario y aplicabilidad, y leer cada
                memoria con estructura ejecutiva.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-3 text-sm md:min-w-80">
              <MetricCard
                icon={BarChart3}
                label="Charlas"
                value={talks.length}
                hint="memorias cargadas"
              />
              <MetricCard
                icon={TrendingUp}
                label="Señal promedio"
                value={avgMarketSignal}
                hint="relevancia de mercado"
              />
            </div>
          </div>
        </section>

        <section className="mb-6 grid gap-4 md:grid-cols-4">
          <MetricCard
            icon={Target}
            label="Impacto promedio"
            value={avgBusinessImpact}
            hint="valor de negocio"
          />
          <MetricCard
            icon={Layers}
            label="Categorías"
            value={categories.length - 1}
            hint="temas principales"
          />
          <MetricCard
            icon={Building2}
            label="Empresas"
            value="15+"
            hint="referenciadas"
          />
          <MetricCard
            icon={Users}
            label="Audiencias"
            value="4"
            hint="general, devs, líderes, directivos"
          />
        </section>

        <MetricDictionary />

        <section className="mb-6 rounded-[2rem] border border-white/10 bg-white/[0.04] p-5 backdrop-blur-xl">
          <div className="mb-5 flex flex-col justify-between gap-3 md:flex-row md:items-center">
            <div className="flex items-center gap-2 text-sm font-medium text-slate-200">
              <SlidersHorizontal size={16} /> Navegación y filtros
            </div>
            <button
              onClick={clearFilters}
              className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.035] px-3 py-2 text-xs text-slate-300 transition hover:border-cyan-300/40 hover:bg-cyan-300/10"
            >
              <X size={14} /> Limpiar filtros
            </button>
          </div>

          <div className="mb-5 flex items-center gap-2 rounded-2xl border border-white/10 bg-black/20 px-3 py-3">
            <Search size={16} className="text-slate-500" />
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Buscar charla, tema, speaker, empresa..."
              className="w-full bg-transparent text-sm text-white outline-none placeholder:text-slate-500"
            />
          </div>

          <div className="grid gap-5 lg:grid-cols-5">
            <FilterGroup label="Tema">
              {categories.map((item) => (
                <Pill
                  key={item}
                  active={category === item}
                  onClick={() => setCategory(item)}
                >
                  {item}
                </Pill>
              ))}
            </FilterGroup>
            <FilterGroup label="Audiencia">
              {audiences.map((item) => (
                <Pill
                  key={item}
                  active={audience === item}
                  onClick={() => setAudience(item)}
                >
                  {item.replace(' / ', ' · ')}
                </Pill>
              ))}
            </FilterGroup>
            <FilterGroup label="Escenario">
              {stages.map((item) => (
                <Pill
                  key={item}
                  active={stage === item}
                  onClick={() => setStage(item)}
                >
                  {item}
                </Pill>
              ))}
            </FilterGroup>
            <FilterGroup label="Aplicabilidad">
              {applicabilityOptions.map((item) => (
                <Pill
                  key={item}
                  active={applicability === item}
                  onClick={() => setApplicability(item)}
                >
                  {item}
                </Pill>
              ))}
            </FilterGroup>
            <FilterGroup label="Orden">
              {sortOptions.map((item) => (
                <Pill
                  key={item.value}
                  active={sortBy === item.value}
                  onClick={() => setSortBy(item.value)}
                >
                  <span className="inline-flex items-center gap-1">
                    <ArrowUpDown size={12} /> {item.label}
                  </span>
                </Pill>
              ))}
            </FilterGroup>
          </div>
        </section>

        <section className="grid gap-6 lg:grid-cols-[0.82fr_1.58fr]">
          <div className="space-y-3 rounded-[2rem] border border-white/10 bg-white/[0.035] p-4 backdrop-blur-xl">
            <div className="flex items-center justify-between px-1">
              <h2 className="text-sm font-semibold text-slate-200">
                Charlas del evento
              </h2>
              <span className="rounded-full border border-white/10 bg-white/[0.04] px-2 py-1 text-xs text-slate-400">
                {filteredTalks.length} resultados
              </span>
            </div>
            <div className="no-scrollbar max-h-[860px] space-y-3 overflow-auto pr-1">
              {filteredTalks.map((talk) => (
                <TalkCard
                  key={talk.id}
                  talk={talk}
                  selected={selectedTalk.id === talk.id}
                  onClick={() => setSelectedId(talk.id)}
                />
              ))}
              {filteredTalks.length === 0 && (
                <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 text-sm text-slate-400">
                  No hay resultados con esos filtros.
                </div>
              )}
            </div>
          </div>

          <motion.div
            layout
            className="rounded-[2rem] border border-white/10 bg-white/[0.045] p-6 backdrop-blur-xl"
          >
            <div className="mb-4 flex flex-wrap items-center gap-2">
              <span className="rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-1 text-xs text-cyan-100">
                {selectedTalk.category}
              </span>
              <span className="rounded-full border border-white/10 bg-black/20 px-3 py-1 text-xs text-slate-300">
                {selectedTalk.stage}
              </span>
              <span className="rounded-full border border-white/10 bg-black/20 px-3 py-1 text-xs text-slate-300">
                {selectedTalk.applicability} aplicabilidad
              </span>
            </div>

            <div className="grid gap-6 lg:grid-cols-[1fr_210px]">
              <div>
                <h2 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">
                  {selectedTalk.title}
                </h2>
                <div className="mt-4 grid gap-2 text-sm text-slate-400 md:grid-cols-2">
                  <div className="flex items-center gap-2">
                    <Mic2 size={15} /> {selectedTalk.speaker}
                  </div>
                  <div className="flex items-center gap-2">
                    <Building2 size={15} /> {selectedTalk.company}
                  </div>
                  <div className="flex items-center gap-2">
                    <CalendarDays size={15} /> {selectedTalk.date}
                  </div>
                  <div className="flex items-center gap-2">
                    <Users size={15} /> {selectedTalk.audience}
                  </div>
                </div>
              </div>
              <div
                className={`rounded-3xl border p-5 ${scoreBorder(
                  selectedTalk.marketSignal
                )}`}
              >
                <p className="text-[11px] uppercase tracking-[0.18em] text-slate-400">
                  Relevancia
                </p>
                <p
                  className={`mt-2 text-5xl font-semibold ${scoreColor(
                    selectedTalk.marketSignal
                  )}`}
                >
                  {selectedTalk.marketSignal}
                </p>
                <p className="mt-2 text-xs text-slate-400">
                  Combinación de señal de mercado, impacto de negocio y
                  aplicabilidad.
                </p>
              </div>
            </div>

            <div className="mt-6 grid gap-5 xl:grid-cols-[1.1fr_0.9fr]">
              <div className="space-y-4">
                <div className="rounded-3xl border border-white/10 bg-black/20 p-5">
                  <h3 className="mb-3 flex items-center gap-2 text-sm font-semibold text-white">
                    <BarChart3 size={16} /> Resumen ejecutivo
                  </h3>
                  <p className="text-sm leading-6 text-slate-300">
                    {selectedTalk.summary}
                  </p>
                  <div className="mt-5 border-t border-white/10 pt-4">
                    <h4 className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                      Lectura rápida
                    </h4>
                    <div className="space-y-2">
                      {selectedTalk.quickRead.map((item) => (
                        <div
                          key={item}
                          className="flex gap-2 text-sm leading-5 text-slate-300"
                        >
                          <CheckCircle2
                            className="mt-0.5 shrink-0 text-emerald-300"
                            size={16}
                          />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="rounded-3xl border border-orange-300/20 bg-orange-300/10 p-5">
                  <h3 className="mb-2 flex items-center gap-2 text-sm font-semibold text-orange-100">
                    <Lightbulb size={16} /> Por qué importa
                  </h3>
                  <p className="text-sm leading-6 text-orange-50/85">
                    {selectedTalk.whyItMatters}
                  </p>
                </div>

                <div className="rounded-3xl border border-white/10 bg-black/20 p-5">
                  <h3 className="mb-3 flex items-center gap-2 text-sm font-semibold text-white">
                    <BookOpen size={16} /> Resumen ampliado
                  </h3>
                  <div className="space-y-4 text-sm leading-6 text-slate-300">
                    {getExtendedSummary(selectedTalk).map(
                      (paragraph, index) => (
                        <p key={index}>{paragraph}</p>
                      )
                    )}
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="rounded-3xl border border-white/10 bg-black/20 p-5">
                  <h3 className="mb-3 flex items-center gap-2 text-sm font-semibold text-white">
                    <Gauge size={16} /> Métricas de la charla
                  </h3>
                  <div className="space-y-4">
                    {metricDictionary.map((metric) => {
                      const value = selectedTalk[metric.value];
                      return (
                        <div key={metric.value}>
                          <div className="mb-1 flex items-center justify-between text-xs">
                            <span className="text-slate-300">
                              {metric.label}
                            </span>
                            <span className={scoreColor(value)}>
                              {value}/100
                            </span>
                          </div>
                          <div className="h-2 overflow-hidden rounded-full bg-white/10">
                            <div
                              className={`h-full rounded-full bg-gradient-to-r ${metric.color}`}
                              style={{ width: `${value}%` }}
                            />
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div className="rounded-3xl border border-white/10 bg-black/20 p-5">
                  <h3 className="mb-3 text-sm font-semibold text-white">
                    Etiquetas
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedTalk.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-slate-300"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-5 grid gap-5 xl:grid-cols-[1.2fr_0.8fr]">
              <div className="rounded-3xl border border-white/10 bg-black/20 p-5">
                <h3 className="mb-3 flex items-center gap-2 text-sm font-semibold text-white">
                  <Zap size={16} /> Ideas clave
                </h3>
                <div className="grid gap-3 md:grid-cols-2">
                  {selectedTalk.keyInsights.map((insight, index) => (
                    <div
                      key={insight}
                      className="flex gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-3"
                    >
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-cyan-300/10 text-xs font-semibold text-cyan-200">
                        {index + 1}
                      </span>
                      <p className="text-sm leading-5 text-slate-300">
                        {insight}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-3xl border border-white/10 bg-black/20 p-5">
                <h3 className="mb-3 flex items-center gap-2 text-sm font-semibold text-white">
                  <AlertTriangle size={16} /> Riesgos o alertas
                </h3>
                <div className="space-y-2">
                  {selectedTalk.risks.map((risk) => (
                    <div
                      key={risk}
                      className="rounded-2xl border border-red-300/10 bg-red-300/5 px-3 py-2 text-sm text-red-100/80"
                    >
                      {risk}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </section>
      </main>
    </div>
  );
}
