export interface Formation {
  id: string;
  label: string;
  gk: number;
  def: number;
  mid: number;
  fwd: number;
}

export const FORMATIONS: Formation[] = [
  { id: "4-3-3", label: "1-4-3-3", gk: 1, def: 4, mid: 3, fwd: 3 },
  { id: "4-4-2", label: "1-4-4-2", gk: 1, def: 4, mid: 4, fwd: 2 },
  { id: "3-3-4", label: "1-3-3-4", gk: 1, def: 3, mid: 3, fwd: 4 },
  { id: "3-4-3", label: "1-3-4-3", gk: 1, def: 3, mid: 4, fwd: 3 },
  { id: "3-5-2", label: "1-3-5-2", gk: 1, def: 3, mid: 5, fwd: 2 },
];

export function findFormation(id: string): Formation | undefined {
  return FORMATIONS.find((f) => f.id === id);
}
