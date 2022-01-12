export default function Input({ ...args }) {
  return (
    <input
      className="
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-transparent bg-clip-padding
        border border-solid border-zinc-700
        transition
        ease-in-out
        m-0
        focus:text-white focus:bg-zinc-700 focus:border-white focus:outline-none
      "
      {...args}
    />
  );
}
