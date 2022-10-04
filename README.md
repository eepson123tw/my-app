# Getting Started with React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
[Reference1](https://react-typescript-cheatsheet.netlify.app/)


## Configure  about the Hooks api

1.**useState** : is about to store data useing the js clourse and return the changing data. 

2.**useRef**: like an domQuerySelector help developer use dom element easily
              ex.get domValue or get element focus use with few code

3.**useEffect**:  when render execute useEffect fn will run,include changing the state ,because changing state will rerender the Pag(*)。
                  when page render useEffect will render once and change the state will can once (render twice)
                  use empty ary to call once , or pass the watching state which you want to focus at.
                  
                  must take care of the non-primitive type. => the non-primitive state change will evoke the useEffect.
                  

4.**useReducer**: like useState but we can set the  situation  which we want to change multiple states

5.**useLayoutEffect**:before the useEffect, before print the page, can use at some ui change UseCase

6.**useImperativeHandle**:can call some function outside and made component more useable. like vue ref and pass props to do someThing.

7.**useContext**:To create State which can pass multiple component and like an global controller.(createContext<-need to pass value(which we want to control),useContext)
