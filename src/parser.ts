import {IHtmlJson} from './Ihtml_json'

export class Parser{

    private html_json :IHtmlJson;
    private HTML_TEXT :string = "";

    constructor(html_json:IHtmlJson){
        this.html_json = html_json;
    }

    parse(html_jsons:IHtmlJson[]){
     /**
      * STEPS
      * 1. CREATE STARTING TAG AND SET ATTRIBUTES/STYLES TO THE TAG
      * 2. RECURSE THE FUNCTION 
      * 3. CLOSE TAG
      */ 
        for (const html_json of html_jsons) {
           if (html_json) {
            let resultantTag =  this.parseNode(html_json);
            this.HTML_TEXT += resultantTag;
           }
        }

        return this.HTML_TEXT ;
    }

    parseNode(html_json:IHtmlJson){
        let front_part = this.processStartTag(html_json);
        if(html_json.children && html_json.children.length > 0) {
            for (const tag of html_json.children) {
               front_part += this.parseNode(tag);
            }
        }
        const end_part = this.processEndTag(html_json);
        return front_part+ end_part;
    }

    processStartTag(tag:IHtmlJson):string{
        let tag_array = [];
        tag_array.push(`<${tag.tag}`);
        if(tag.css) tag_array.push(`style="${tag.css}"`);
        this.checkIfTagSelfEnding(tag.tag) ? tag_array.push(" />"): tag_array.push(" >") ;
        tag.value ? tag_array.push(tag.value): tag_array.push(" \n") ;
        return   tag_array.join(" ");
    }

    processEndTag(tag:IHtmlJson):string{
        let end_tag:string = "";
        if(!this.checkIfTagSelfEnding(tag.tag)){
             end_tag = `</${tag.tag}> \n` ;
        }
        return end_tag;
    }

    checkIfTagSelfEnding(tag:string):boolean{
        const self_ending_tags:string[] = ["img"];
        if(self_ending_tags.includes(tag)) return true ;else return false;
    }
}