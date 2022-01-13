export default function VersionHash(): string {
  const item: any = document.querySelector(`link[as="style"]`);
  if (item === null) return "dev";
  let parts = item.href.split(".");
  return parts[parts.length - 2] || "dev";
}
