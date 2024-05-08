/**
 * v0 by Vercel.
 * @see https://v0.dev/t/WOwHNAb68vc
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
export default function Manutencao() {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-md max-w-md w-full">
        <div className="flex items-center justify-center mb-4">
          <PenToolIcon className="h-8 w-8 text-gray-500 dark:text-gray-400" />
        </div>
        <h2 className="text-lg font-medium text-gray-900 dark:text-gray-100 mb-2">
          Manutenção em Andamento
        </h2>
        <p className="text-gray-600 dark:text-gray-400 text-sm">
          Estamos realizando manutenção no site no momento. Pedimos desculpas
          pelo inconveniente e esperamos que o site esteja de volta ao ar em
          breve.
        </p>
      </div>
    </div>
  );
}

function PenToolIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15.707 21.293a1 1 0 0 1-1.414 0l-1.586-1.586a1 1 0 0 1 0-1.414l5.586-5.586a1 1 0 0 1 1.414 0l1.586 1.586a1 1 0 0 1 0 1.414z" />
      <path d="m18 13-1.375-6.874a1 1 0 0 0-.746-.776L3.235 2.028a1 1 0 0 0-1.207 1.207L5.35 15.879a1 1 0 0 0 .776.746L13 18" />
      <path d="m2.3 2.3 7.286 7.286" />
      <circle cx="11" cy="11" r="2" />
    </svg>
  );
}
