import React from 'react'

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number
  className?: string
}

export const Icon = React.forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, className = '', ...props }, ref) => {
    return (
      <svg
        {...props}
        ref={ref}
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        className={className}
      >
        <path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z" />
        <line x1="16" y1="8" x2="2" y2="22" />
        <line x1="17.5" y1="15" x2="9" y2="15" />
      </svg>
    )
  }
)

Icon.displayName = 'Icon'

export const PencilIcon = React.forwardRef<SVGSVGElement, IconProps>(
  (props, ref) => {
    return <Icon {...props} ref={ref} />
  }
)

PencilIcon.displayName = 'PencilIcon'