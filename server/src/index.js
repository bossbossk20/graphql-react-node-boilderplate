const {GraphQLServer} = require('graphql-yoga');

const resolvers = require('./resolvers');

const server = new GraphQLServer({
	typeDefs: './src/schema.graphql',
	resolvers
});

const options = {
	port: process.env.PORT || 4000,
	playground: process.env.NODE_ENV === 'Production' ? false : '/playground',
	endpoint: '/graphql'
};

server.start(options, ({port}) => console.log(`Server is running on port: ${port}`));
