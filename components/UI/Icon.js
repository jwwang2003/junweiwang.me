export default function Icon({
  children, className, label, ...args
}) {
  return (
    <a
      className={`text-2xl m-1 p-1 sm:m-2 sm:p-2 ${className} rounded-full hover:text-white transition-colors duration-300`}
      {...args}
    >
      { children }
      <span className="sr-only">{ label }</span>
    </a>
  );
}
