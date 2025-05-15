export default function BackgroundPattern() {
  return (
    <div className="fixed inset-0 z-[-1] pointer-events-none">
      <div className="absolute inset-0 bg-pattern transition-opacity duration-300" />
    </div>
  )
}
