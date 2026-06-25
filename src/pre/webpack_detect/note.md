```javascript
// webpack require function example

function r(i) {
    var o = e[i];
    if (void 0 !== o) return o.exports;
    var n = (e[i] = { exports: {} });
    return t[i].call(n.exports, n, n.exports, r), n.exports;
  }

function r(n) {
    var i = e[n];
    if (void 0 !== i) return i.exports;
    var o = (e[n] = { exports: {} });
    return t[n].call(o.exports, o, o.exports, r), o.exports;
  }
  
function n(r) {
    var o = t[r];
    if (void 0 !== o) return o.exports;
    var i = (t[r] = { id: r, loaded: !1, exports: {} });
    return e[r].call(i.exports, i, i.exports, n), (i.loaded = !0), i.exports;
  }

function i(t) {
    if (n[t]) return n[t].exports;
    var r = (n[t] = { i: t, l: !1, exports: {} });
    return e[t].call(r.exports, r, r.exports, i), (r.l = !0), r.exports;
  }

function __webpack_require__(o) {
  if (i[o]) return i[o].exports;
  var u = (i[o] = { i: o, l: !1, exports: {} });
  return (
    n[o].call(u.exports, u, u.exports, __webpack_require__),
    (u.l = !0),
    u.exports
 );
}
```

## AST strurcture

```md
Program .body -> ExpressionStatement .expression ->
  CallExpression
    .callee -> MemberExpression
      .object -> AssignmentExpression
        .left -> MemberExpression
          .object -> Identifier .name -> "self"
          .property -> Identifier .name -> "webpackChunk_N_E"
        .operator -> "="
        .right -> LogicalExpression
          .left -> MemberExpression
            .object -> Identifier .name -> "self"
            .property -> Identifier .name -> "webpackChunk_N_E"
          .operator -> "||"
          .right -> ArrayExpression .elements[] -> <empty array>
      .property -> Identifier .name -> "push"
    .arguments[0] -> ArrayExpression .elements[]
      -> ArrayExpression .elements[0] -> NumericLiteral .value -> <the chunk ID>
      -> ObjectExpression .properties[] -> ObjectProperty ... <the modules within this chunk>
      -> FunctionExpression -> <used for chunk initialisation/etc>
        .params[] -> ...
        .body[]
          -> VariableDeclaration -> ...
          -> ExpressionStatement .expression -> SequenceExpression .expressions[]
            -> CallExpression ->
              .callee -> ...
              .arguments -> ...
            -> AssignmentExpression
              .left -> Identifier .name -> "_N_E"
              .operator -> "="
              .right -> CallExpression ...
```
