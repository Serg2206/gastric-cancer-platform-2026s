'use client';

const STORAGE_KEY = 'gastric-cancer-platform-progress-v1';

export type ProgressState = {
  completed: string[];
  lastVisited: string | null;
};

export function readProgress(): ProgressState {
  if (typeof window === 'undefined') {
    return { completed: [], lastVisited: null };
  }

  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      return { completed: [], lastVisited: null };
    }

    const data = JSON.parse(raw) as ProgressState;
    return {
      completed: Array.isArray(data.completed) ? data.completed : [],
      lastVisited: typeof data.lastVisited === 'string' ? data.lastVisited : null,
    };
  } catch {
    return { completed: [], lastVisited: null };
  }
}

export function writeProgress(state: ProgressState): void {
  if (typeof window === 'undefined') {
    return;
  }

  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch {
    // ignore quota errors
  }
}
