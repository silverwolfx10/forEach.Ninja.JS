### $forEach

Execute uma função fornecida uma vez por ordem de elemento a funcao curry

```javascript
this.Ninja(['$forEach'], function ($forEach) {
  $forEach([1, 2, 3], console.log.bind(console));
});
```
