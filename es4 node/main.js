import { createRequire } from "module";
const require = createRequire(import.meta.url);
process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0; 


const readText = (question) => {
    return new Promise((resolve) => {
        const read = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
        read.question(question, text => {
            read.close();
            resolve(text);
        });
    });
};

readText("inserisci un numero: ").then((n) => {
    const n=n;
    setImmediate(n).then(console.log);
    });

function setImmediate(n){
    const lista=[1,1]
    lista[n]=lista[n-1]+lista[n-2](n>1)
    console.log(k)
    if (lista.length<100){
        setImmediate(n)
        console.log(finito)
    }
}