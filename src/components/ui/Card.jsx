export function Card({ children, className = "", ...props }) {
  return (
    <div
      className={`rounded-lg border border-gray-200 bg-white shadow-sm overflow-hidden h-full flex flex-col transition-all duration-200 hover:shadow-lg ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
