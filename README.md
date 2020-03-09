
# @binssoft/multi-uploader

A plugins to build your own multi uploader for your angular application. This plugin will help you to creat  multiple document uploader in your application.


[![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)]([https://github.com/BinsSoft/angular-multi-uploader](https://github.com/BinsSoft/angular-multi-uploader)) [![Support](https://img.shields.io/badge/Support-Angular%206%2B-blue.svg?style=flat-square)]() [![Support](https://img.shields.io/badge/Support-Angular%207%2B-blue.svg?style=flat-square)]() [![Support](https://img.shields.io/badge/Support-Angular%208%2B-blue.svg?style=flat-square)]() [![License](https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square)]()

> Please support this project by simply putting a Github star. Share this library with friends on Twitter and everywhere else you can.

## Table of contents:

 
 - Getting started
   - [Installation](#installation)
   - [Implementation](#implementation)
   - [Settings Option](#settings-option)
- [Demo](#demo)
 - [Creators](#creator)
 - [License](#license)

##  Getting started 

### Installation

> npm install @binssoft/multi-uploader --save

### Implementation

import "**MultiUploaderModule**" in your application module. For example: **app.module.ts**

    import {MultiUploaderModule}  from '@binssoft/multi-uploader';;
    @NgModule({
	    imports:[
		    MultiUploaderModule
		    ...
	    ]
    })
    export  class  AppModule { }



add configration in your component. For example : **app.component.ts**

	
    export  class  AppComponent  implements  OnInit {
    
     config:any = null;
     ngOnInit() {
	     this.config = {
            preview:true,
            type:'base64',
            upload:{
                url:'http://localhost:8080/api/1.0/upload-file',
                method:'POST',
                body: {
                    ...
                    _id:1,
                    ...
                },
                headers: {
                    "Content-Type": "application/json"
                }
            }
   	    }
   	}

				



Add **multi-uploader** html tag in your component html. For example : **app.component.html**

    <multi-uploader  [config]="config"></multi-uploader>

 - **[config]** : to set the  configuration of upload 


### Settings Option

|                |Description                          |Default Value                         
|----------------|-------------------------------|-----------------------------
|`type`| `base64` or `binary`        |     `base64`       
|`preview`| show the preview or not          | false 
|`upload`| upload api configuration          | 
|`upload.url`| upload api url          |  
|`upload.method`| upload api method `POST`, `PUT`          |  
|`upload.body`| upload api body       |  
|`upload.headers`| upload api headers       |  

## Demo
[Click Here](https://stackblitz.com/edit/multi-uploader) for the demo

## Creator

#### [Tonmoy Nandy](tonmoy.nandy@gmail.com)
- [@GitHub](https://github.com/tonmoynandy)

## License

#### The MIT License (MIT)