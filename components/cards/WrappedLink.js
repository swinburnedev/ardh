import Link from 'next/link';

const Wrappedink = ({url, children, className}) => {
  if (!url) return children;
  return (
    <Link href={url}>
      <a className={className}>{children}</a>
    </Link>
  )
}

export default Wrappedink;