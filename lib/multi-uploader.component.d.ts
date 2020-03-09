import { OnInit, ElementRef, AfterViewInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
export declare class MultiUploaderComponent implements OnInit, AfterViewInit {
    private http;
    headers: HttpHeaders;
    fileUploader: ElementRef;
    config: any;
    files: any;
    previewFiles: any;
    allowedExt: any;
    errors: any;
    constructor(http: HttpClient);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    clickOnUploader(): void;
    uploadPreviewProcess(): void;
    removeFile(index: any): void;
    uploadFile(index?: any): void;
    uploadAllFile(): void;
    resetFileProcess(): void;
}
