export default function LinkButton({ icon, label, href }) {
  return (
    <a
      href={href}
      target="_blank"
      className="hero-link mb-3 shadow-xs"
    >
      {icon}
      {label}
    </a>
  )
}