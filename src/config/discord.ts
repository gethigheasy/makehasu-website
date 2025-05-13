export const DISCORD_CONFIG = {
  clientId: import.meta.env.VITE_DISCORD_CLIENT_ID,
  clientSecret: import.meta.env.VITE_DISCORD_CLIENT_SECRET,
  redirectUri: import.meta.env.VITE_DISCORD_REDIRECT_URI,
  scopes: ['identify', 'guilds'],
  apiEndpoint: 'https://discord.com/api/v10',
  oauthEndpoint: 'https://discord.com/api/oauth2',
}; 