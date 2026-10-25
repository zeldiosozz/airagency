interface StatCounterProps {
  value: string;
  label: string;
  context?: string;
  id?: string;
}

export function StatCounter({ value, label, context, id }: StatCounterProps) {
  return (
    <div id={id} className="flex flex-col space-y-1">
      <div className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-neutral-900">
        {value}
      </div>
      <div className="text-sm font-semibold text-neutral-800">
        {label}
      </div>
      {context && (
        <p className="text-xs text-neutral-500 leading-normal max-w-xs">
          {context}
        </p>
      )}
    </div>
  );
}
