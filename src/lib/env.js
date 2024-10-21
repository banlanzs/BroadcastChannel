export function getEnv(env, Astro, name) {
  return env[name] ?? Astro.locals?.runtime?.env?.[name]
}

export function getChannels(env, Astro) {
  const channelEnv = getEnv(env, Astro, 'CHANNEL');
  return channelEnv ? channelEnv.split(',').map(c => c.trim()) : [];
}

