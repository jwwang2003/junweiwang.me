import clsx from 'clsx'
import styles from './index.module.scss'

type sizes = 'xs' | 'sm' | 'md' | 'lg'

type types = 'primary' | 'success' | 'danger' | 'warning' | 'info'

interface ButtonProps {
  children: React.ReactNode | React.ReactNode[]
  isPrimary: boolean;
  isBlock: boolean;
  size: sizes;
  type: types;
  onClick: () => void
}

export default function Button({
  children,
  isPrimary = false,
  isBlock = false,
  size = 'sm',
  type = 'primary',
  onClick,
  ...props
}: ButtonProps) {
  return (
    <button
    type="button"
    className={clsx(
      styles.button,
      !isPrimary && styles['non-primary'],
      isBlock && styles['block'],
      styles[size],
      styles[type]
    )}
    {...props}
    >
      {children}
    </button>
  )
}