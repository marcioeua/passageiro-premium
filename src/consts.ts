// Configurações globais do blog — edite aqui.
export const SITE_TITLE = 'Passageiro Premium';
export const SITE_TAGLINE = 'Viaje melhor, gaste menos';
export const SITE_DESCRIPTION =
  'Dicas de viagem, milhas, salas VIP, classe executiva e roteiros para quem quer viajar com conforto pagando menos.';
export const SITE_LANG = 'pt-BR';

// Google AdSense: substitua pelo seu ID de editor (ca-pub-XXXXXXXXXXXXXXXX).
// Enquanto estiver vazio, os blocos de anúncio aparecem como placeholders.
export const ADSENSE_CLIENT = '';

export const NAV_LINKS = [
  { href: '/', label: 'Início' },
  { href: '/categoria/milhas', label: 'Milhas' },
  { href: '/categoria/destinos', label: 'Destinos' },
  { href: '/categoria/dicas', label: 'Dicas' },
  { href: '/blog', label: 'Blog' },
  { href: '/sobre', label: 'Sobre' },
];

export const CATEGORIES: Record<string, string> = {
  milhas: 'Milhas e Pontos',
  destinos: 'Destinos',
  dicas: 'Dicas de Viagem',
  'salas-vip': 'Salas VIP',
};

export const POSTS_PER_PAGE = 9;
