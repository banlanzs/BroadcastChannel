// export function getEnv(env, Astro, name) {
//   return env[name] ?? Astro.locals?.runtime?.env?.[name]
// }
//改
// src/lib/env.js
export function getChannels(env, Astro) {
  const channelEnv = getEnv(env, Astro, 'CHANNEL');
  return channelEnv ? channelEnv.split(',').map(c => c.trim()) : [];
}

