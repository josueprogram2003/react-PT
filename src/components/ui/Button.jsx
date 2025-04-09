export function ButtonPrimary({ children, className = "", ...props }) {
  return (
    <button
      className={`inline-flex h-10 items-center justify-center rounded-md bg-emerald-600 hover:bg-emerald-700 px-8 py-2 text-sm font-medium text-white shadow transition-colors ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

export function ButtonOutline({ children, className = "", ...props }) {
  return (
    <button
      className={`inline-flex h-10 items-center justify-center rounded-md border  px-8 py-2 text-sm font-medium shadow-sm transition-colors ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
