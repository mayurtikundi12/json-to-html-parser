# This is a HTML parser,takes json object as input and converts it to html string.

# The JSON object needs to be of type

```
interface IHtmlJson{
    tag:string;
    value:string ;
    type:string; //can string,number etc.
    children?:IHtmlJson[],
    css:string;
}
```

### Example JSON object.
``` // eg. JSON
    const completeStub = [{
        type: "",
        tag: "div",
        children: [{
            type: "",
            tag: "h3",
            children: null,
            css: "color:blue;",
            value: "I am just awesome"
        }],
        css: "color:blue;",
        value: null
    }, {
        type: "",
        tag: "h1",
        children: null,
        css: "color:red;",
        value: "This has the some value in it."
    }, {
        type: "",
        tag: "h2",
        children: null,
        css: "color:blue;",
        value: "This has the some less value in it."
    }];

    let parser = new Parser(completeStub); 
    let html_string = parser.parse(completeStub);

    // Result 

    /** <div style="color:blue;"  >  
    * <h3 style="color:blue;"  > I am just awesome</h3> 
    * </div> 
    * <h1 style="color:red;"  > This has the some value in it.</h1> 
    */ <h2 style="color:blue;"  > This has the some less value in it.</h2> 
```

## This project is part of [SHUKSHMA](https://github.com/mayurtikundi12/shukshma), it is a microservice framework, with automated code generation, please have a look and if possible give your reviews at mayurtikundi12@gmail.com .
