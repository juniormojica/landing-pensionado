
import PropTypes from 'prop-types';
import classNames from 'classnames';

export function Button({ variant='solid', className, children, ...props }) {
  const baseStyle = 'px-4 py-2 rounded';
  const variantStyles = {
    outline: 'border border-gray-300 text-gray-700 hover:bg-gray-100',
    solid: 'bg-blue-500 text-white hover:bg-blue-600',
  };

  const buttonClass = classNames(baseStyle, variantStyles[variant], className);

  return (
    <button className={buttonClass} {...props}>
      {children}
    </button>
  );
}

Button.propTypes = {
  variant: PropTypes.oneOf(['outline', 'solid']),
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

