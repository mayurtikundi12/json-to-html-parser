import {expect} from 'chai';
import { Parser } from './parser';
import { IHtmlJson } from './Ihtml_json';

describe('Parser Happy Flow Testing', () => {
    const stub:IHtmlJson = {
        type:"",tag:"div",children:null,css:"color:red;",value:""
    }

    const completeStub = [
    {
        type:"",tag:"div",children:[
            {
                type:"",tag:"h3",children:null,css:"color:blue;",value:"I am just awesome"
            }
        ],css:"color:blue;",value:null
    },{
        type:"",tag:"h1",children:null,css:"color:red;",value:"This has the some value in it."
    },{
        type:"",tag:"h2",children:null,css:"color:blue;",value:"This has the some less value in it."
    }]

    let parser = new Parser(stub); 

    let sd = parser.parse(completeStub);

    console.log(sd, "******************")
    it("checkIfTagSelfEnding",()=>{
        let isTagSelfEnding = parser.checkIfTagSelfEnding("div");
        expect(isTagSelfEnding).equal(false) ;
        isTagSelfEnding = parser.checkIfTagSelfEnding('img');
        expect(isTagSelfEnding).equal(true) ;
    });



})
