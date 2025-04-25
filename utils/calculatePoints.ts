export function calculatePoints(dayOfSeason: number): number {
  if (dayOfSeason === 1) return 2;
  if (dayOfSeason === 2) return 3;

  let points = 3;
  let prev = 3,
    prevPrev = 2;

  for (let i = 3; i <= dayOfSeason; i++) {
    const current = Math.floor(prev + prevPrev * 0.6);
    prevPrev = prev;
    prev = current;
    points = current;
  }

  return points;
}

export function formatPoints(points: number): string {
  return points > 1000 ? `${Math.floor(points / 1000)}K` : points.toString();
}
