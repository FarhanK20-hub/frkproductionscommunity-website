// Simple cn helper — avoids adding clsx/tailwind-merge as a dependency
export function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(' ')
}
