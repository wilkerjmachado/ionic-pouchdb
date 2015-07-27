# ionic-pouchdb
Este aplicativo foi desenvolvido para fins de demonstração utilizando Ionic e PouchDB para utilização off-line. Estou compartilhando o código para aqueles que estão interessados ​​em estudar.

## Pré requisitos
- Node.js e NPM instalados
- Ionic CLI instalado, use this command to install globally the ionic command :
```shell
npm install -g ionic
```

## Como executar
- Instale pacotes NPM necessários, usar este comando para instalar globalmente o ionic:
```shell
npm install
```
- Inicie a aplicação
```shell
ionic serve
```

## Executar em um Simulador/Dispositivo
- Basicamente você escolher qual plataforma você deseja executar, basta executar os comandos que irá configurar o projeto para plataforma específica:
```shell
# Para iOS
ionic platform ios
# Para Android
ionic platform android
```
- Para criar e executar na plataforma que você escolher, executar o comando:
```shell
ionic run android
# or
ionic run ios
```