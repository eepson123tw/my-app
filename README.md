# Getting Started with React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).


## Configure  about the Hooks api

1.**useState** : is about to store data useing the js clourse and return the changing data. 

2.**useEffect** : every render will evoke this api ， and user can choose clean Effect or not, also can ignore the change ，only some condition be complished.

3.**useRef**: like an domQuerySelector help developer use dom element easily
              ex.get domValue or get element focus use with few code

4.**useEffect**:  when render execute useEffect fn will run,include changing the state ,because changing state will rerender the Pag(*)。
                  when page render useEffect will render once and change the state will can once (render twice)
                  use empty ary to call once , or pass the watching state which you want to focus at

5.**useReducer**: like useState but we can set the  situation  which we want to change multiple states

6.**useLayoutEffect**:before the useEffect, before print the page, can use at some ui change UseCase
