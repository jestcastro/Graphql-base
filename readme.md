# GraphQL seed with Yoga and TypeORM

This is an samll example of a graphql server

### Tech
* [Yoga]
* [Typescript]

### Get started
* Create the .env file
* run this:


```sh
$/ cd <project-name>
$/ yarn
```

### Start Graphql server

```sh
$/ yarn dev // Initialize the yoga server and starts the playground 
```

### Project structure

```
Project Root/
│
├── src/
│   └── config/ # setup the services 
│   └── datasources/ # sources of data, here you can put databases, file services , etc
│   └── resolvers/ # example of how the resolvers can be structure
│   └── schema/ # Schema definition
│   └── types/ # Typescript types, interfaces
│   └── context # resolvers context
│   └── index # this is where the yoga server is started
├── .env.example # example of how the env file have to look like
├── .gitignore 
├── .graphqlconfig.yml # graphQL configuration file
├── package.json
├── README.md
└──  tsconfig.json  # Typescript configuration file
```
