const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

/** "2024-02" -> "Feb 2024" */
export function formatMonth(value: string): string {
  const [year, month] = value.split("-");
  return `${MONTHS[Number(month) - 1]} ${year}`;
}

/** "Feb 2024 – Present" */
export function formatRange(start: string | undefined, end: string | undefined): string {
  const to = end ? formatMonth(end) : "Present";
  return start ? `${formatMonth(start)} – ${to}` : to;
}

/** Strip the scheme for display: https://github.com/x -> github.com/x */
export function displayUrl(url: string): string {
  return url.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "");
}
