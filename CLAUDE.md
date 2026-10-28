# Passageiro Premium — instruções do projeto

Blog de viagens em Astro, monetizado com Google AdSense. Nicho: viagens premium pagando menos (milhas, pontos, salas VIP, classe executiva, hotéis, destinos). Todo conteúdo em português do Brasil.

## Títulos: Técnica das 4 Camadas (obrigatória em todo post novo)

As 4 camadas são quatro partes do ASSUNTO do título, em sequência, e cada camada afunila a anterior:

- Camada 1: o assunto amplo (ex.: passagens)
- Camada 2: um tipo ou característica desse assunto (ex.: em classe executiva)
- Camada 3: para quem ou para quê (ex.: com milhas)
- Camada 4: um recorte ainda menor desse público ou situação (ex.: para a Europa)

Exemplos corretos:

- 1> COMIDA 2> VEGANA 3> PARA CACHORRO 4> IDOSO → Receitas de Comida Vegana para Cachorro Idoso
- 1> VESTIDOS DE FESTA 2> PARA CASAMENTO 3> NO INVERNO 4> PARA MADRINHAS → Vestidos de Festa para Casamento no Inverno para Madrinhas
- 1> ADESTRAMENTO 2> DE OBEDIÊNCIA 3> PARA CACHORRO 4> FILHOTE → Como Fazer Adestramento de Obediência para Cachorro Filhote
- 1> PONTOS 2> DO ALL ACCOR 3> COM BÔNUS DA LIVELO 4> PARA HOSPEDAGEM GRÁTIS → Como Juntar Pontos do ALL Accor com Bônus da Livelo para Hospedagem Grátis

Regras obrigatórias:

1. O verbo ou expressão de abertura (Como Fazer, Como Escolher, Melhores, Guia de, Receitas de) NÃO é camada. As 4 camadas são só o assunto que vem depois.
2. Cada camada afunila a anterior, formando uma única cadeia: assunto amplo → tipo → para quem → recorte menor. Deve ficar claro que é um assunto só, cada vez mais específico.
3. Não juntar ideias soltas que não afunilam umas às outras. Errado: "Destinos de Inverno para Ver Neve e Aproveitar Gastronomia em Família" (três assuntos paralelos).
4. Não repetir a mesma ideia com outras palavras. Errado: "Como Pescar um Salmão Rosa: Dicas de Pesca que Vão te Ajudar a Capturar um Salmão Rosa".
5. Nunca usar dois pontos (:) nos títulos.
6. O título precisa soar natural, como uma busca real no Google.

Ao propor um título, mostrar a decomposição (1> … 2> … 3> … 4> …) antes do título final.

Processo de criação em três etapas, uma de cada vez, sem pular nenhuma. Etapas: *ainda não enviadas pelo autor — pedir antes de usar o processo completo.*

## Padrão dos posts (quando o prompt do autor não disser outra coisa)

- Arquivos em `src/content/blog/` (`.md`, ou `.mdx` quando usar componentes como `AccorCalculator`).
- Frontmatter: `title` (4 camadas), `description` (até ~155 caracteres), `pubDate`, `heroImage`, `category` (milhas | destinos | dicas | salas-vip), `tags`.
- Pesquisar dados atuais na web; quando um dado não for confirmado em fonte oficial, usar linguagem cautelosa e incluir aviso no fim do post. Listar as fontes para o autor na resposta.
- Rodar `npx astro build` antes de publicar; publicar com push para `main` (a Vercel faz o deploy automático).
