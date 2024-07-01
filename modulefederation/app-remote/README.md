MODULE FEDERATION COM VITE

Para rodar o module federation em aplicativos com vite é necessario adicionar essa extensao que ja faz algumas configurações para que os modulos sejam exportados
(considerando que todos projetos estejam em vite)

npm i @originjs/vite-plugin-federation

Depois de instalar precisa colocar essa configurações no vite.config.js na aplicação ROOT ( que vai exportar o conteudo para os demais projetos)

plugins: [
react(),
federation({
name: "remote-app",
filename: "remoteEntry.js",
exposes: {
"./Header": "./src/components/header",
},
shared: ["react", "react-dom"],
}),
],
build: {
modulePreload: false,
target: "esnext",
minify: false,
cssCodeSplit: false,
},

-- Depois de configurar precisa dar um npm run build

-- Dando um npm run preview e possivel ver o projeto rodando com o build
feito e assim ver que na pasta assets/remoteEntry.js por meio de arquivos
js ele compartilha os modulos em produção
