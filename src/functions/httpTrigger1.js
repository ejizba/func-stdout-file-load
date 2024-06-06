const { app } = require('@azure/functions');

console.log('stdout log during file load');

app.http('httpTrigger1', {
    methods: ['GET', 'POST'],
    authLevel: 'anonymous',
    handler: async (request, context) => {
        context.log(`rpc log during invocation`);

        console.log(`stdout log during invocation`);

        const name = request.query.get('name') || await request.text() || 'world';

        return { body: `Hello, ${name}!` };
    }
});
