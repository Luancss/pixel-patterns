export function formatDuration(durationMs: number) {
  return durationMs < 1000
    ? `${durationMs} ms`
    : `${(durationMs / 1000).toFixed(2)} s`;
}
