# React Router v6: useParams Hook Error

This repository demonstrates a common error when using the `useParams` hook in React Router v6 and how to fix it.

The error occurs when attempting to access route parameters outside of a component rendered within a route.

## Problem

The `useParams` hook requires a routing context, so using it outside of a route causes the error: `'useParams' hook was used outside of a route`.

## Solution

The solution is to move the use of `useParams` into a component that is rendered within a route defined using `<Route path='...' element={<.../>}/>` in the routing hierarchy. Alternatively you can use `useLocation` hook to get the current url path information outside of the route and parse the parameters manually.