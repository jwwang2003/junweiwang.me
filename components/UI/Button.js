import propTypes from 'prop-types';

export default function Button({
  children, className, ...args
}) {
  return (
    <button
      type="button"
      className={`${className} inline-block px-6 py-2.5 text-white font-medium text-base leading-tight uppercase shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out`}
      style={{ backgroundColor: '#24C7CB' }}
      {...args}
    >
      { children }
    </button>
  );
}

Button.defaultProps = {
  children: null,
  className: '',
  args: [],
};

Button.propTypes = {
  children: propTypes.node,
  className: propTypes.string,
  args: propTypes.arrayOf(propTypes.any),
};
