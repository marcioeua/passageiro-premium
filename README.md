# Passageiro Premium ✈️

Blog de viagens em [Astro](https://astro.build), com visual inspirado no tema Kadence e preparado para o Google AdSense.

## Comandos

| Comando           | Ação                                   |
| ----------------- | -------------------------------------- |
| `npm install`     | Instala as dependências                |
| `npm run dev`     | Servidor local em `localhost:4321`     |
| `npm run build`   | Gera o site estático em `./dist/`      |
| `npm run preview` | Visualiza o build localmente           |

Requer Node.js 22.12 ou superior.

## Estrutura

```
src/
├── consts.ts            # Nome, menu, categorias e ID do AdSense
├── content/blog/        # Posts em Markdown (.md / .mdx)
├── components/          # Header, Footer, PostCard, Sidebar, AdSlot, BaseHead
├── layouts/             # BaseLayout, PostLayout, PageLayout
├── pages/               # Home, blog, categorias, páginas institucionais, RSS
└── styles/global.css    # Cores e tipografia (variáveis CSS no :root)
public/
├── ads.txt              # Obrigatório para o AdSense
└── robots.txt
```

## Novo post

Crie um arquivo em `src/content/blog/meu-post.md`:

```md
---
title: 'Título do post'
description: 'Resumo para o Google (até ~155 caracteres)'
pubDate: 2026-11-01
heroImage: 'https://...'
category: 'milhas'   # milhas | destinos | dicas | salas-vip
tags: ['tag1', 'tag2']
---

Conteúdo aqui...
```

## Ativando o AdSense

1. Em `src/consts.ts`, preencha `ADSENSE_CLIENT = 'ca-pub-XXXXXXXXXXXXXXXX'`.
2. Em `public/ads.txt`, troque `pub-0000000000000000` pelo seu ID.
3. Crie blocos de anúncio no painel e passe o ID em `<AdSlot slot="1234567890" />`
   (posições: `PostLayout.astro`, `Sidebar.astro`, `index.astro`).
4. Atualize o domínio em `astro.config.mjs` e `public/robots.txt`.
