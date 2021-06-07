module.exports = async function (context, req) {
    context.log('probando que funcione');
    context.res = {
        body: "Primer tweet"
    };
};
