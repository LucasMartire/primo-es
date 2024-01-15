import fetch from 'node-fetch'; 
import {createRequire} from "module";
const require=createRequire(import.meta.url);
const fs= require('fs');
process.env['NODE_TLS_REJECT_UNAUTHORIZED']=0;

const conf=JSON.parse(fs.readFileSync('conf.json'));
const token=conf.token;

const baseUrl="https://ws.progettimolinari.it";
const urlSet=baseUrl+"/cache/set";

const readtext=(question)=>{
    return new Promise((resolve)=>{
        const a=readlilne.createInterface({
            input: process.stdin,
            output: process.stdout
        });
        a.question(question, text =>{
            a.close();
            resolve(text);
        });
    });
};

const saveData= (key, value)=>{
    return new Promise((resolve, reject)=>{
        fetch(urlSet, {
            headers: {
                'Content-Type': 'application/json',
                'key': token
            },
            method: "POST",
            body: JSON.stringify({
                key: key,
                value: value
            })
        }).then(r => r.json())
            .then(resolve)
            .catch(resolve)
    })
};

readtext("inserire chiave: ").then((response)=>{
    const chiave=response;
    readtext("inserire valore: ").then((response)=>{
        const valore=response;
        saveData(chiave, valore).then(console.log);
    })
});

