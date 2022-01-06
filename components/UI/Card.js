import PropTypes from 'prop-types';

export default function Card({ children, className }) {
  return (
    <div className={`${className} block p-3 rounded shadow-lg hover:shadow-md bg-white max-w-sm transition-shadow duration-150`}>
      { children }
    </div>
  );
}

Card.defaultProps = {
  children: null,
  className: '',
};

Card.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};
