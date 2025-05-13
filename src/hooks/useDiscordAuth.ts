import { useState, useEffect } from 'react';
import { DISCORD_CONFIG } from '../config/discord';

interface DiscordUser {
  id: string;
  username: string;
  discriminator: string;
  avatar: string;
  email?: string;
  locale?: string;
  premium_type?: number;
  mfa_enabled?: boolean;
  accent_color?: number;
  banner?: string;
  flags?: number;
}

export const useDiscordAuth = () => {
  const [user, setUser] = useState<DiscordUser | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const login = () => {
    const params = new URLSearchParams({
      client_id: DISCORD_CONFIG.clientId,
      redirect_uri: DISCORD_CONFIG.redirectUri,
      response_type: 'code',
      scope: DISCORD_CONFIG.scopes.join(' '),
    });

    window.location.href = `${DISCORD_CONFIG.oauthEndpoint}/authorize?${params.toString()}`;
  };

  const handleCallback = async (code: string) => {
    try {
      const tokenResponse = await fetch(`${DISCORD_CONFIG.oauthEndpoint}/token`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
          client_id: DISCORD_CONFIG.clientId,
          client_secret: DISCORD_CONFIG.clientSecret,
          grant_type: 'authorization_code',
          code,
          redirect_uri: DISCORD_CONFIG.redirectUri,
        }),
      });

      const tokenData = await tokenResponse.json();

      if (!tokenResponse.ok) {
        throw new Error(tokenData.error_description || 'Erro ao obter token');
      }

      const userResponse = await fetch(`${DISCORD_CONFIG.apiEndpoint}/users/@me`, {
        headers: {
          Authorization: `Bearer ${tokenData.access_token}`,
        },
      });

      const userData = await userResponse.json();

      if (!userResponse.ok) {
        throw new Error('Erro ao obter dados do usuário');
      }

      setUser(userData);
      localStorage.setItem('discord_token', tokenData.access_token);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Erro desconhecido');
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('discord_token');
  };

  useEffect(() => {
    const token = localStorage.getItem('discord_token');
    if (token) {
      fetch(`${DISCORD_CONFIG.apiEndpoint}/users/@me`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.id) {
            setUser(data);
          } else {
            logout();
          }
        })
        .catch(() => logout())
        .finally(() => setLoading(false));
    } else {
      setLoading(false);
    }
  }, []);

  return {
    user,
    loading,
    error,
    login,
    logout,
    handleCallback,
  };
}; 