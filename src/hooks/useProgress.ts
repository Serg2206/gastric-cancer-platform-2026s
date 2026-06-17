'use client';

import { useEffect, useMemo, useState } from 'react';
import { readProgress, writeProgress, type ProgressState } from '@/lib/progress';
import { supabase, hasSupabase } from '@/lib/supabase';

export function useProgress() {
  const [local, setLocal] = useState<ProgressState>(() => readProgress());
  const [cloud, setCloud] = useState<ProgressState | null>(null);
  const [synced, setSynced] = useState<boolean>(hasSupabase);

  const completed = useMemo(() => {
    const c = new Set<string>();
    for (const s of [local, cloud].filter(Boolean) as ProgressState[]) {
      for (const id of s.completed) c.add(id);
    }
    return Array.from(c);
  }, [local, cloud]);

  const percent = useMemo(() => Math.round((completed.length / 12) * 100), [completed.length]);

  async function syncToCloud(state: ProgressState) {
    if (!hasSupabase || !supabase) return;
    setSynced(false);
    const { error } = await supabase.from('progress').upsert({ id: 'singleton', ...state });
    if (!error) setCloud(state);
    setSynced(true);
  }

  async function markCompleted(etudeId: string) {
    const updated = { completed: [...new Set([...completed, etudeId])], lastVisited: etudeId };
    setLocal(updated);
    writeProgress(updated);
    syncToCloud(updated);
  }

  async function markVisited(etudeId: string) {
    const updated = { ...local, lastVisited: etudeId };
    setLocal(updated);
    writeProgress(updated);
    syncToCloud(updated);
  }

  useEffect(() => {
    if (!hasSupabase || !supabase) return;
    let cancelled = false;
    (async () => {
      setSynced(false);
      const { data, error } = await supabase.from('progress').select('*').eq('id', 'singleton').maybeSingle();
      if (!cancelled && data && !error) setCloud(data as ProgressState);
      if (!cancelled) setSynced(true);
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  return { completed, percent, lastVisited: local.lastVisited, markCompleted, markVisited, synced };
}
