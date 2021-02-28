import { useRouter } from 'next/router'
import Link from 'next/link'
import React, { Children } from 'react'

interface ActiveLinkProps{
    children: JSX.Element
    activeClassName: string
    href: string
}

const ActiveLink: React.FC<ActiveLinkProps> = ({ children, activeClassName, ...props }) => {
  const { asPath } = useRouter()
  const child = Children.only(children)
  const childClassName = child.props.className || ''

  // pages/index.js will be matched via props.href
  // pages/about.js will be matched via props.href
  // pages/[slug].js will be matched via props.as
  const className =
    asPath === props.href
      ? `${childClassName} ${activeClassName}`.trim()
      : childClassName

  return (
    <Link {...props}>
      {React.cloneElement(child, {
        className: className || null,
      })}
    </Link>
  )
}

export default ActiveLink