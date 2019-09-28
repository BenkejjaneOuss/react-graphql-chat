# Realtime Chat Application with React & Graphcool & Apollo
A simple Realtime Chat Application with :
* [React](https://facebook.github.io/react/): Frontend framework for building user interfaces
* [Apollo Client](https://github.com/apollographql/apollo-client): Fully-featured, production ready caching GraphQL client
* [Graphcool](https://www.graph.cool): Flexible backend platform combining GraphQL + AWS Lambda


## Setup

### 1. Clone example repository

```sh
git clone https://github.com/BenkejjaneOuss/react-graphql-chat.git
cd react-graphql-chat
```
### 2. Deploy the GraphQL server

You're now ready to put your Graphcool service into production! Navigate into the `server` directory and [deploy](https://docs-next.graph.cool/reference/graphcool-cli/commands-aiteerae6l#graphcool-deploy) the service:

```sh
cd server
graphcool deploy
```

When prompted which cluster you want to deploy to, choose any of the **Shared Clusters** options (`shared-eu-west-1`, `shared-ap-northeast-1` or `shared-us-west-2`).

Save the ID of your service, you'll need it in the next step.

> **Note**: You can now test your GraphQL API inside a GraphQL playground. Simply type the `graphcool playground` command and start sending queries and mutations.

  
### 3. Connect your App

In `./src/index.js` you need to set the variable `projectId` which is then used in `graphQLEndpoint` and `subscriptionsUrl`. You can access your project ID by using the `graphcool info` command inside the `graphcool` directory. 

```js
const projectId = `__YOUR_PROJECT_ID__`
```


### 4. Run the App 🚀

That's it, you can now start the app:

```sh
cd ../
npm install
npm start
```

Go to **[http://localhost:3000](http://localhost:3000)** in your browser to start chatting 💬
