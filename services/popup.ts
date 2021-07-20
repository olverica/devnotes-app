import {Component} from 'vue'

export interface PopupRequest {
    component: Component;
    props?: object
}

export interface HintRequest extends PopupRequest {
    target: Element;
}

export type ShowModal = 
    (request: PopupRequest) => void;  

export type ShowAlert = 
    (request: PopupRequest) => void;

export type ShowHint = 
    (request: HintRequest) => void;