/*
  Highlight.js 10.6.0 (eb122d3b)
  License: BSD-3-Clause
  Copyright (c) 2006-2020, Ivan Sagalaev
*/
var hljs = (function () {
  "use strict";
  function e(t) {
    return (
      t instanceof Map
        ? (t.clear = t.delete = t.set = () => {
            throw Error("map is read-only");
          })
        : t instanceof Set &&
          (t.add = t.clear = t.delete = () => {
            throw Error("set is read-only");
          }),
      Object.freeze(t),
      Object.getOwnPropertyNames(t).forEach((n) => {
        var s = t[n];
        "object" != typeof s || Object.isFrozen(s) || e(s);
      }),
      t
    );
  }
  var t = e,
    n = e;
  t.default = n;
  class s {
    constructor(e) {
      void 0 === e.data && (e.data = {}), (this.data = e.data);
    }
    ignoreMatch() {
      this.ignore = !0;
    }
  }
  function r(e) {
    return e
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#x27;");
  }
  function a(e, ...t) {
    const n = Object.create(null);
    for (const t in e) n[t] = e[t];
    return (
      t.forEach((e) => {
        for (const t in e) n[t] = e[t];
      }),
      n
    );
  }
  const i = (e) => !!e.kind;
  class o {
    constructor(e, t) {
      (this.buffer = ""), (this.classPrefix = t.classPrefix), e.walk(this);
    }
    addText(e) {
      this.buffer += r(e);
    }
    openNode(e) {
      if (!i(e)) return;
      let t = e.kind;
      e.sublanguage || (t = `${this.classPrefix}${t}`), this.span(t);
    }
    closeNode(e) {
      i(e) && (this.buffer += "</span>");
    }
    value() {
      return this.buffer;
    }
    span(e) {
      this.buffer += `<span class="${e}">`;
    }
  }
  class l {
    constructor() {
      (this.rootNode = {
        children: [],
      }),
        (this.stack = [this.rootNode]);
    }
    get top() {
      return this.stack[this.stack.length - 1];
    }
    get root() {
      return this.rootNode;
    }
    add(e) {
      this.top.children.push(e);
    }
    openNode(e) {
      const t = { kind: e, children: [] };
      this.add(t), this.stack.push(t);
    }
    closeNode() {
      if (this.stack.length > 1) return this.stack.pop();
    }
    closeAllNodes() {
      for (; this.closeNode(); );
    }
    toJSON() {
      return JSON.stringify(this.rootNode, null, 4);
    }
    walk(e) {
      return this.constructor._walk(e, this.rootNode);
    }
    static _walk(e, t) {
      return (
        "string" == typeof t
          ? e.addText(t)
          : t.children &&
            (e.openNode(t),
            t.children.forEach((t) => this._walk(e, t)),
            e.closeNode(t)),
        e
      );
    }
    static _collapse(e) {
      "string" != typeof e &&
        e.children &&
        (e.children.every((e) => "string" == typeof e)
          ? (e.children = [e.children.join("")])
          : e.children.forEach((e) => {
              l._collapse(e);
            }));
    }
  }
  class c extends l {
    constructor(e) {
      super(), (this.options = e);
    }
    addKeyword(e, t) {
      "" !== e && (this.openNode(t), this.addText(e), this.closeNode());
    }
    addText(e) {
      "" !== e && this.add(e);
    }
    addSublanguage(e, t) {
      const n = e.root;
      (n.kind = t), (n.sublanguage = !0), this.add(n);
    }
    toHTML() {
      return new o(this, this.options).value();
    }
    finalize() {
      return !0;
    }
  }
  function u(e) {
    return e ? ("string" == typeof e ? e : e.source) : null;
  }
  const g = "[a-zA-Z]\\w*",
    d = "[a-zA-Z_]\\w*",
    h = "\\b\\d+(\\.\\d+)?",
    f =
      "(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",
    p = "\\b(0b[01]+)",
    m = {
      begin: "\\\\[\\s\\S]",
      relevance: 0,
    },
    b = {
      className: "string",
      begin: "'",
      end: "'",
      illegal: "\\n",
      contains: [m],
    },
    x = {
      className: "string",
      begin: '"',
      end: '"',
      illegal: "\\n",
      contains: [m],
    },
    E = {
      begin: /\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/,
    },
    v = (e, t, n = {}) => {
      const s = a({ className: "comment", begin: e, end: t, contains: [] }, n);
      return (
        s.contains.push(E),
        s.contains.push({
          className: "doctag",
          begin: "(?:TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):",
          relevance: 0,
        }),
        s
      );
    },
    w = v("//", "$"),
    N = v("/\\*", "\\*/"),
    y = v("#", "$");
  var R = Object.freeze({
    __proto__: null,
    MATCH_NOTHING_RE: /\b\B/,
    IDENT_RE: g,
    UNDERSCORE_IDENT_RE: d,
    NUMBER_RE: h,
    C_NUMBER_RE: f,
    BINARY_NUMBER_RE: p,
    RE_STARTERS_RE:
      "!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",
    SHEBANG: (e = {}) => {
      const t = /^#![ ]*\//;
      return (
        e.binary &&
          (e.begin = ((...e) => e.map((e) => u(e)).join(""))(
            t,
            /.*\b/,
            e.binary,
            /\b.*/
          )),
        a(
          {
            className: "meta",
            begin: t,
            end: /$/,
            relevance: 0,
            "on:begin": (e, t) => {
              0 !== e.index && t.ignoreMatch();
            },
          },
          e
        )
      );
    },
    BACKSLASH_ESCAPE: m,
    APOS_STRING_MODE: b,
    QUOTE_STRING_MODE: x,
    PHRASAL_WORDS_MODE: E,
    COMMENT: v,
    C_LINE_COMMENT_MODE: w,
    C_BLOCK_COMMENT_MODE: N,
    HASH_COMMENT_MODE: y,
    NUMBER_MODE: { className: "number", begin: h, relevance: 0 },
    C_NUMBER_MODE: { className: "number", begin: f, relevance: 0 },
    BINARY_NUMBER_MODE: { className: "number", begin: p, relevance: 0 },
    CSS_NUMBER_MODE: {
      className: "number",
      begin:
        h +
        "(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?",
      relevance: 0,
    },
    REGEXP_MODE: {
      begin: /(?=\/[^/\n]*\/)/,
      contains: [
        {
          className: "regexp",
          begin: /\//,
          end: /\/[gimuy]*/,
          illegal: /\n/,
          contains: [
            m,
            { begin: /\[/, end: /\]/, relevance: 0, contains: [m] },
          ],
        },
      ],
    },
    TITLE_MODE: { className: "title", begin: g, relevance: 0 },
    UNDERSCORE_TITLE_MODE: { className: "title", begin: d, relevance: 0 },
    METHOD_GUARD: {
      begin: "\\.\\s*[a-zA-Z_]\\w*",
      relevance: 0,
    },
    END_SAME_AS_BEGIN: (e) =>
      Object.assign(e, {
        "on:begin": (e, t) => {
          t.data._beginMatch = e[1];
        },
        "on:end": (e, t) => {
          t.data._beginMatch !== e[1] && t.ignoreMatch();
        },
      }),
  });
  function _(e, t) {
    "." === e.input[e.index - 1] && t.ignoreMatch();
  }
  function k(e, t) {
    t &&
      e.beginKeywords &&
      ((e.begin =
        "\\b(" + e.beginKeywords.split(" ").join("|") + ")(?!\\.)(?=\\b|\\s)"),
      (e.__beforeBegin = _),
      (e.keywords = e.keywords || e.beginKeywords),
      delete e.beginKeywords,
      void 0 === e.relevance && (e.relevance = 0));
  }
  function O(e, t) {
    Array.isArray(e.illegal) &&
      (e.illegal = ((...e) => "(" + e.map((e) => u(e)).join("|") + ")")(
        ...e.illegal
      ));
  }
  function M(e, t) {
    if (e.match) {
      if (e.begin || e.end)
        throw Error("begin & end are not supported with match");
      (e.begin = e.match), delete e.match;
    }
  }
  function A(e, t) {
    void 0 === e.relevance && (e.relevance = 1);
  }
  const L = [
    "of",
    "and",
    "for",
    "in",
    "not",
    "or",
    "if",
    "then",
    "parent",
    "list",
    "value",
  ];
  function B(e, t, n = "keyword") {
    const s = {};
    return (
      "string" == typeof e
        ? r(n, e.split(" "))
        : Array.isArray(e)
        ? r(n, e)
        : Object.keys(e).forEach((n) => {
            Object.assign(s, B(e[n], t, n));
          }),
      s
    );
    function r(e, n) {
      t && (n = n.map((e) => e.toLowerCase())),
        n.forEach((t) => {
          const n = t.split("|");
          s[n[0]] = [e, I(n[0], n[1])];
        });
    }
  }
  function I(e, t) {
    return t ? Number(t) : ((e) => L.includes(e.toLowerCase()))(e) ? 0 : 1;
  }
  function T(e, { plugins: t }) {
    function n(t, n) {
      return RegExp(
        u(t),
        "m" + (e.case_insensitive ? "i" : "") + (n ? "g" : "")
      );
    }
    class s {
      constructor() {
        (this.matchIndexes = {}),
          (this.regexes = []),
          (this.matchAt = 1),
          (this.position = 0);
      }
      addRule(e, t) {
        (t.position = this.position++),
          (this.matchIndexes[this.matchAt] = t),
          this.regexes.push([t, e]),
          (this.matchAt +=
            ((e) => RegExp(e.toString() + "|").exec("").length - 1)(e) + 1);
      }
      compile() {
        0 === this.regexes.length && (this.exec = () => null);
        const e = this.regexes.map((e) => e[1]);
        (this.matcherRe = n(
          ((e, t = "|") => {
            const n = /\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./;
            let s = 0,
              r = "";
            for (let a = 0; a < e.length; a++) {
              s += 1;
              const i = s;
              let o = u(e[a]);
              for (a > 0 && (r += t), r += "("; o.length > 0; ) {
                const e = n.exec(o);
                if (null == e) {
                  r += o;
                  break;
                }
                (r += o.substring(0, e.index)),
                  (o = o.substring(e.index + e[0].length)),
                  "\\" === e[0][0] && e[1]
                    ? (r += "\\" + (Number(e[1]) + i))
                    : ((r += e[0]), "(" === e[0] && s++);
              }
              r += ")";
            }
            return r;
          })(e),
          !0
        )),
          (this.lastIndex = 0);
      }
      exec(e) {
        this.matcherRe.lastIndex = this.lastIndex;
        const t = this.matcherRe.exec(e);
        if (!t) return null;
        const n = t.findIndex((e, t) => t > 0 && void 0 !== e),
          s = this.matchIndexes[n];
        return t.splice(0, n), Object.assign(t, s);
      }
    }
    class r {
      constructor() {
        (this.rules = []),
          (this.multiRegexes = []),
          (this.count = 0),
          (this.lastIndex = 0),
          (this.regexIndex = 0);
      }
      getMatcher(e) {
        if (this.multiRegexes[e]) return this.multiRegexes[e];
        const t = new s();
        return (
          this.rules.slice(e).forEach(([e, n]) => t.addRule(e, n)),
          t.compile(),
          (this.multiRegexes[e] = t),
          t
        );
      }
      resumingScanAtSamePosition() {
        return 0 !== this.regexIndex;
      }
      considerAll() {
        this.regexIndex = 0;
      }
      addRule(e, t) {
        this.rules.push([e, t]), "begin" === t.type && this.count++;
      }
      exec(e) {
        const t = this.getMatcher(this.regexIndex);
        t.lastIndex = this.lastIndex;
        let n = t.exec(e);
        if (this.resumingScanAtSamePosition())
          if (n && n.index === this.lastIndex);
          else {
            const t = this.getMatcher(0);
            (t.lastIndex = this.lastIndex + 1), (n = t.exec(e));
          }
        return (
          n &&
            ((this.regexIndex += n.position + 1),
            this.regexIndex === this.count && this.considerAll()),
          n
        );
      }
    }
    if (
      (e.compilerExtensions || (e.compilerExtensions = []),
      e.contains && e.contains.includes("self"))
    )
      throw Error(
        "ERR: contains `self` is not supported at the top-level of a language.  See documentation."
      );
    return (
      (e.classNameAliases = a(e.classNameAliases || {})),
      (function t(s, i) {
        const o = s;
        if (s.compiled) return o;
        [M].forEach((e) => e(s, i)),
          e.compilerExtensions.forEach((e) => e(s, i)),
          (s.__beforeBegin = null),
          [k, O, A].forEach((e) => e(s, i)),
          (s.compiled = !0);
        let l = null;
        if (
          ("object" == typeof s.keywords &&
            ((l = s.keywords.$pattern), delete s.keywords.$pattern),
          s.keywords && (s.keywords = B(s.keywords, e.case_insensitive)),
          s.lexemes && l)
        )
          throw Error(
            "ERR: Prefer `keywords.$pattern` to `mode.lexemes`, BOTH are not allowed. (see mode reference) "
          );
        return (
          (l = l || s.lexemes || /\w+/),
          (o.keywordPatternRe = n(l, !0)),
          i &&
            (s.begin || (s.begin = /\B|\b/),
            (o.beginRe = n(s.begin)),
            s.endSameAsBegin && (s.end = s.begin),
            s.end || s.endsWithParent || (s.end = /\B|\b/),
            s.end && (o.endRe = n(s.end)),
            (o.terminatorEnd = u(s.end) || ""),
            s.endsWithParent &&
              i.terminatorEnd &&
              (o.terminatorEnd += (s.end ? "|" : "") + i.terminatorEnd)),
          s.illegal && (o.illegalRe = n(s.illegal)),
          s.contains || (s.contains = []),
          (s.contains = [].concat(
            ...s.contains.map((e) =>
              ((e) => (
                e.variants &&
                  !e.cachedVariants &&
                  (e.cachedVariants = e.variants.map((t) =>
                    a(
                      e,
                      {
                        variants: null,
                      },
                      t
                    )
                  )),
                e.cachedVariants
                  ? e.cachedVariants
                  : j(e)
                  ? a(e, {
                      starts: e.starts ? a(e.starts) : null,
                    })
                  : Object.isFrozen(e)
                  ? a(e)
                  : e
              ))("self" === e ? s : e)
            )
          )),
          s.contains.forEach((e) => {
            t(e, o);
          }),
          s.starts && t(s.starts, i),
          (o.matcher = ((e) => {
            const t = new r();
            return (
              e.contains.forEach((e) =>
                t.addRule(e.begin, { rule: e, type: "begin" })
              ),
              e.terminatorEnd && t.addRule(e.terminatorEnd, { type: "end" }),
              e.illegal && t.addRule(e.illegal, { type: "illegal" }),
              t
            );
          })(o)),
          o
        );
      })(e)
    );
  }
  function j(e) {
    return !!e && (e.endsWithParent || j(e.starts));
  }
  function S(e) {
    const t = {
      props: ["language", "code", "autodetect"],
      data: () => ({ detectedLanguage: "", unknownLanguage: !1 }),
      computed: {
        className() {
          return this.unknownLanguage ? "" : "hljs " + this.detectedLanguage;
        },
        highlighted() {
          if (!this.autoDetect && !e.getLanguage(this.language))
            return (
              console.warn(
                `The language "${this.language}" you specified could not be found.`
              ),
              (this.unknownLanguage = !0),
              r(this.code)
            );
          let t = {};
          return (
            this.autoDetect
              ? ((t = e.highlightAuto(this.code)),
                (this.detectedLanguage = t.language))
              : ((t = e.highlight(
                  this.language,
                  this.code,
                  this.ignoreIllegals
                )),
                (this.detectedLanguage = this.language)),
            t.value
          );
        },
        autoDetect() {
          return !(this.language && ((e = this.autodetect), !e && "" !== e));
          var e;
        },
        ignoreIllegals: () => !0,
      },
      render(e) {
        return e("pre", {}, [
          e("code", {
            class: this.className,
            domProps: { innerHTML: this.highlighted },
          }),
        ]);
      },
    };
    return {
      Component: t,
      VuePlugin: {
        install(e) {
          e.component("highlightjs", t);
        },
      },
    };
  }
  const P = {
    "after:highlightBlock": ({ block: e, result: t, text: n }) => {
      const s = C(e);
      if (!s.length) return;
      const a = document.createElement("div");
      (a.innerHTML = t.value),
        (t.value = ((e, t, n) => {
          let s = 0,
            a = "";
          const i = [];
          function o() {
            return e.length && t.length
              ? e[0].offset !== t[0].offset
                ? e[0].offset < t[0].offset
                  ? e
                  : t
                : "start" === t[0].event
                ? e
                : t
              : e.length
              ? e
              : t;
          }
          function l(e) {
            a +=
              "<" +
              D(e) +
              [].map
                .call(e.attributes, function (e) {
                  return " " + e.nodeName + '="' + r(e.value) + '"';
                })
                .join("") +
              ">";
          }
          function c(e) {
            a += "</" + D(e) + ">";
          }
          function u(e) {
            ("start" === e.event ? l : c)(e.node);
          }
          for (; e.length || t.length; ) {
            let t = o();
            if (
              ((a += r(n.substring(s, t[0].offset))),
              (s = t[0].offset),
              t === e)
            ) {
              i.reverse().forEach(c);
              do {
                u(t.splice(0, 1)[0]), (t = o());
              } while (t === e && t.length && t[0].offset === s);
              i.reverse().forEach(l);
            } else
              "start" === t[0].event ? i.push(t[0].node) : i.pop(),
                u(t.splice(0, 1)[0]);
          }
          return a + r(n.substr(s));
        })(s, C(a), n));
    },
  };
  function D(e) {
    return e.nodeName.toLowerCase();
  }
  function C(e) {
    const t = [];
    return (
      (function e(n, s) {
        for (let r = n.firstChild; r; r = r.nextSibling)
          3 === r.nodeType
            ? (s += r.nodeValue.length)
            : 1 === r.nodeType &&
              (t.push({
                event: "start",
                offset: s,
                node: r,
              }),
              (s = e(r, s)),
              D(r).match(/br|hr|img|input/) ||
                t.push({
                  event: "stop",
                  offset: s,
                  node: r,
                }));
        return s;
      })(e, 0),
      t
    );
  }
  const H = (e) => {
      console.error(e);
    },
    U = (e, ...t) => {
      console.log("WARN: " + e, ...t);
    },
    $ = (e, t) => {
      console.log(`Deprecated as of ${e}. ${t}`);
    },
    z = r,
    K = a,
    G = Symbol("nomatch");
  return ((e) => {
    const n = Object.create(null),
      r = Object.create(null),
      a = [];
    let i = !0;
    const o = /(^(<[^>]+>|\t|)+|\n)/gm,
      l =
        "Could not find the language '{}', did you forget to load/include a language module?",
      u = {
        disableAutodetect: !0,
        name: "Plain text",
        contains: [],
      };
    let g = {
      noHighlightRe: /^(no-?highlight)$/i,
      languageDetectRe: /\blang(?:uage)?-([\w-]+)\b/i,
      classPrefix: "hljs-",
      tabReplace: null,
      useBR: !1,
      languages: null,
      __emitter: c,
    };
    function d(e) {
      return g.noHighlightRe.test(e);
    }
    function h(e, t, n, s) {
      const r = { code: t, language: e };
      M("before:highlight", r);
      const a = r.result ? r.result : f(r.language, r.code, n, s);
      return (a.code = r.code), M("after:highlight", a), a;
    }
    function f(e, t, r, o) {
      const c = t;
      function u(e, t) {
        const n = w.case_insensitive ? t[0].toLowerCase() : t[0];
        return (
          Object.prototype.hasOwnProperty.call(e.keywords, n) && e.keywords[n]
        );
      }
      function d() {
        null != R.subLanguage
          ? (() => {
              if ("" === M) return;
              let e = null;
              if ("string" == typeof R.subLanguage) {
                if (!n[R.subLanguage]) return void O.addText(M);
                (e = f(R.subLanguage, M, !0, k[R.subLanguage])),
                  (k[R.subLanguage] = e.top);
              } else e = p(M, R.subLanguage.length ? R.subLanguage : null);
              R.relevance > 0 && (A += e.relevance),
                O.addSublanguage(e.emitter, e.language);
            })()
          : (() => {
              if (!R.keywords) return void O.addText(M);
              let e = 0;
              R.keywordPatternRe.lastIndex = 0;
              let t = R.keywordPatternRe.exec(M),
                n = "";
              for (; t; ) {
                n += M.substring(e, t.index);
                const s = u(R, t);
                if (s) {
                  const [e, r] = s;
                  O.addText(n), (n = ""), (A += r);
                  const a = w.classNameAliases[e] || e;
                  O.addKeyword(t[0], a);
                } else n += t[0];
                (e = R.keywordPatternRe.lastIndex),
                  (t = R.keywordPatternRe.exec(M));
              }
              (n += M.substr(e)), O.addText(n);
            })(),
          (M = "");
      }
      function h(e) {
        return (
          e.className &&
            O.openNode(w.classNameAliases[e.className] || e.className),
          (R = Object.create(e, { parent: { value: R } })),
          R
        );
      }
      function m(e, t, n) {
        let r = ((e, t) => {
          const n = e && e.exec(t);
          return n && 0 === n.index;
        })(e.endRe, n);
        if (r) {
          if (e["on:end"]) {
            const n = new s(e);
            e["on:end"](t, n), n.ignore && (r = !1);
          }
          if (r) {
            for (; e.endsParent && e.parent; ) e = e.parent;
            return e;
          }
        }
        if (e.endsWithParent) return m(e.parent, t, n);
      }
      function b(e) {
        return 0 === R.matcher.regexIndex ? ((M += e[0]), 1) : ((I = !0), 0);
      }
      function x(e) {
        const t = e[0],
          n = c.substr(e.index),
          s = m(R, e, n);
        if (!s) return G;
        const r = R;
        r.skip
          ? (M += t)
          : (r.returnEnd || r.excludeEnd || (M += t),
            d(),
            r.excludeEnd && (M = t));
        do {
          R.className && O.closeNode(),
            R.skip || R.subLanguage || (A += R.relevance),
            (R = R.parent);
        } while (R !== s.parent);
        return (
          s.starts &&
            (s.endSameAsBegin && (s.starts.endRe = s.endRe), h(s.starts)),
          r.returnEnd ? 0 : t.length
        );
      }
      let E = {};
      function v(t, n) {
        const a = n && n[0];
        if (((M += t), null == a)) return d(), 0;
        if (
          "begin" === E.type &&
          "end" === n.type &&
          E.index === n.index &&
          "" === a
        ) {
          if (((M += c.slice(n.index, n.index + 1)), !i)) {
            const t = Error("0 width match regex");
            throw ((t.languageName = e), (t.badRule = E.rule), t);
          }
          return 1;
        }
        if (((E = n), "begin" === n.type))
          return (function (e) {
            const t = e[0],
              n = e.rule,
              r = new s(n),
              a = [n.__beforeBegin, n["on:begin"]];
            for (const n of a) if (n && (n(e, r), r.ignore)) return b(t);
            return (
              n &&
                n.endSameAsBegin &&
                (n.endRe = RegExp(
                  t.replace(/[-/\\^$*+?.()|[\]{}]/g, "\\$&"),
                  "m"
                )),
              n.skip
                ? (M += t)
                : (n.excludeBegin && (M += t),
                  d(),
                  n.returnBegin || n.excludeBegin || (M = t)),
              h(n),
              n.returnBegin ? 0 : t.length
            );
          })(n);
        if ("illegal" === n.type && !r) {
          const e = Error(
            'Illegal lexeme "' +
              a +
              '" for mode "' +
              (R.className || "<unnamed>") +
              '"'
          );
          throw ((e.mode = R), e);
        }
        if ("end" === n.type) {
          const e = x(n);
          if (e !== G) return e;
        }
        if ("illegal" === n.type && "" === a) return 1;
        if (B > 1e5 && B > 3 * n.index)
          throw Error(
            "potential infinite loop, way more iterations than matches"
          );
        return (M += a), a.length;
      }
      const w = _(e);
      if (!w)
        throw (H(l.replace("{}", e)), Error('Unknown language: "' + e + '"'));
      const N = T(w, { plugins: a });
      let y = "",
        R = o || N;
      const k = {},
        O = new g.__emitter(g);
      (() => {
        const e = [];
        for (let t = R; t !== w; t = t.parent)
          t.className && e.unshift(t.className);
        e.forEach((e) => O.openNode(e));
      })();
      let M = "",
        A = 0,
        L = 0,
        B = 0,
        I = !1;
      try {
        for (R.matcher.considerAll(); ; ) {
          B++,
            I ? (I = !1) : R.matcher.considerAll(),
            (R.matcher.lastIndex = L);
          const e = R.matcher.exec(c);
          if (!e) break;
          const t = v(c.substring(L, e.index), e);
          L = e.index + t;
        }
        return (
          v(c.substr(L)),
          O.closeAllNodes(),
          O.finalize(),
          (y = O.toHTML()),
          {
            relevance: Math.floor(A),
            value: y,
            language: e,
            illegal: !1,
            emitter: O,
            top: R,
          }
        );
      } catch (t) {
        if (t.message && t.message.includes("Illegal"))
          return {
            illegal: !0,
            illegalBy: {
              msg: t.message,
              context: c.slice(L - 100, L + 100),
              mode: t.mode,
            },
            sofar: y,
            relevance: 0,
            value: z(c),
            emitter: O,
          };
        if (i)
          return {
            illegal: !1,
            relevance: 0,
            value: z(c),
            emitter: O,
            language: e,
            top: R,
            errorRaised: t,
          };
        throw t;
      }
    }
    function p(e, t) {
      t = t || g.languages || Object.keys(n);
      const s = ((e) => {
          const t = {
            relevance: 0,
            emitter: new g.__emitter(g),
            value: z(e),
            illegal: !1,
            top: u,
          };
          return t.emitter.addText(e), t;
        })(e),
        r = t
          .filter(_)
          .filter(O)
          .map((t) => f(t, e, !1));
      r.unshift(s);
      const a = r.sort((e, t) => {
          if (e.relevance !== t.relevance) return t.relevance - e.relevance;
          if (e.language && t.language) {
            if (_(e.language).supersetOf === t.language) return 1;
            if (_(t.language).supersetOf === e.language) return -1;
          }
          return 0;
        }),
        [i, o] = a,
        l = i;
      return (l.second_best = o), l;
    }
    const m = {
        "before:highlightBlock": ({ block: e }) => {
          g.useBR &&
            (e.innerHTML = e.innerHTML
              .replace(/\n/g, "")
              .replace(/<br[ /]*>/g, "\n"));
        },
        "after:highlightBlock": ({ result: e }) => {
          g.useBR && (e.value = e.value.replace(/\n/g, "<br>"));
        },
      },
      b = /^(<[^>]+>|\t)+/gm,
      x = {
        "after:highlightBlock": ({ result: e }) => {
          g.tabReplace &&
            (e.value = e.value.replace(b, (e) =>
              e.replace(/\t/g, g.tabReplace)
            ));
        },
      };
    function E(e) {
      let t = null;
      const n = ((e) => {
        let t = e.className + " ";
        t += e.parentNode ? e.parentNode.className : "";
        const n = g.languageDetectRe.exec(t);
        if (n) {
          const t = _(n[1]);
          return (
            t ||
              (U(l.replace("{}", n[1])),
              U("Falling back to no-highlight mode for this block.", e)),
            t ? n[1] : "no-highlight"
          );
        }
        return t.split(/\s+/).find((e) => d(e) || _(e));
      })(e);
      if (d(n)) return;
      M("before:highlightBlock", { block: e, language: n }), (t = e);
      const s = t.textContent,
        a = n ? h(n, s, !0) : p(s);
      M("after:highlightBlock", { block: e, result: a, text: s }),
        (e.innerHTML = a.value),
        ((e, t, n) => {
          const s = t ? r[t] : n;
          e.classList.add("hljs"), s && e.classList.add(s);
        })(e, n, a.language),
        (e.result = {
          language: a.language,
          re: a.relevance,
          relavance: a.relevance,
        }),
        a.second_best &&
          (e.second_best = {
            language: a.second_best.language,
            re: a.second_best.relevance,
            relavance: a.second_best.relevance,
          });
    }
    const v = () => {
      v.called ||
        ((v.called = !0),
        $(
          "10.6.0",
          "initHighlighting() is deprecated.  Use highlightAll() instead."
        ),
        document.querySelectorAll("pre code").forEach(E));
    };
    let w = !1,
      N = !1;
    function y() {
      N ? document.querySelectorAll("pre code").forEach(E) : (w = !0);
    }
    function _(e) {
      return (e = (e || "").toLowerCase()), n[e] || n[r[e]];
    }
    function k(e, { languageName: t }) {
      "string" == typeof e && (e = [e]),
        e.forEach((e) => {
          r[e] = t;
        });
    }
    function O(e) {
      const t = _(e);
      return t && !t.disableAutodetect;
    }
    function M(e, t) {
      const n = e;
      a.forEach((e) => {
        e[n] && e[n](t);
      });
    }
    "undefined" != typeof window &&
      window.addEventListener &&
      window.addEventListener(
        "DOMContentLoaded",
        () => {
          (N = !0), w && y();
        },
        !1
      ),
      Object.assign(e, {
        highlight: h,
        highlightAuto: p,
        highlightAll: y,
        fixMarkup: (e) => {
          return (
            $("10.2.0", "fixMarkup will be removed entirely in v11.0"),
            $(
              "10.2.0",
              "Please see https://github.com/highlightjs/highlight.js/issues/2534"
            ),
            (t = e),
            g.tabReplace || g.useBR
              ? t.replace(o, (e) =>
                  "\n" === e
                    ? g.useBR
                      ? "<br>"
                      : e
                    : g.tabReplace
                    ? e.replace(/\t/g, g.tabReplace)
                    : e
                )
              : t
          );
          var t;
        },
        highlightBlock: E,
        configure: (e) => {
          e.useBR &&
            ($("10.3.0", "'useBR' will be removed entirely in v11.0"),
            $(
              "10.3.0",
              "Please see https://github.com/highlightjs/highlight.js/issues/2559"
            )),
            (g = K(g, e));
        },
        initHighlighting: v,
        initHighlightingOnLoad: () => {
          $(
            "10.6.0",
            "initHighlightingOnLoad() is deprecated.  Use highlightAll() instead."
          ),
            (w = !0);
        },
        registerLanguage: (t, s) => {
          let r = null;
          try {
            r = s(e);
          } catch (e) {
            if (
              (H(
                "Language definition for '{}' could not be registered.".replace(
                  "{}",
                  t
                )
              ),
              !i)
            )
              throw e;
            H(e), (r = u);
          }
          r.name || (r.name = t),
            (n[t] = r),
            (r.rawDefinition = s.bind(null, e)),
            r.aliases &&
              k(r.aliases, {
                languageName: t,
              });
        },
        listLanguages: () => Object.keys(n),
        getLanguage: _,
        registerAliases: k,
        requireLanguage: (e) => {
          $("10.4.0", "requireLanguage will be removed entirely in v11."),
            $(
              "10.4.0",
              "Please see https://github.com/highlightjs/highlight.js/pull/2844"
            );
          const t = _(e);
          if (t) return t;
          throw Error(
            "The '{}' language is required, but not loaded.".replace("{}", e)
          );
        },
        autoDetection: O,
        inherit: K,
        addPlugin: (e) => {
          a.push(e);
        },
        vuePlugin: S(e).VuePlugin,
      }),
      (e.debugMode = () => {
        i = !1;
      }),
      (e.safeMode = () => {
        i = !0;
      }),
      (e.versionString = "10.6.0");
    for (const e in R) "object" == typeof R[e] && t(R[e]);
    return (
      Object.assign(e, R), e.addPlugin(m), e.addPlugin(P), e.addPlugin(x), e
    );
  })({});
})();
"object" == typeof exports &&
  "undefined" != typeof module &&
  (module.exports = hljs);
hljs.registerLanguage(
  "typescript",
  (() => {
    "use strict";
    const e = "[A-Za-z$_][0-9A-Za-z$_]*",
      n = [
        "as",
        "in",
        "of",
        "if",
        "for",
        "while",
        "finally",
        "var",
        "new",
        "function",
        "do",
        "return",
        "void",
        "else",
        "break",
        "catch",
        "instanceof",
        "with",
        "throw",
        "case",
        "default",
        "try",
        "switch",
        "continue",
        "typeof",
        "delete",
        "let",
        "yield",
        "const",
        "class",
        "debugger",
        "async",
        "await",
        "static",
        "import",
        "from",
        "export",
        "extends",
      ],
      a = ["true", "false", "null", "undefined", "NaN", "Infinity"],
      s = [].concat(
        [
          "setInterval",
          "setTimeout",
          "clearInterval",
          "clearTimeout",
          "require",
          "exports",
          "eval",
          "isFinite",
          "isNaN",
          "parseFloat",
          "parseInt",
          "decodeURI",
          "decodeURIComponent",
          "encodeURI",
          "encodeURIComponent",
          "escape",
          "unescape",
        ],
        [
          "arguments",
          "this",
          "super",
          "console",
          "window",
          "document",
          "localStorage",
          "module",
          "global",
        ],
        [
          "Intl",
          "DataView",
          "Number",
          "Math",
          "Date",
          "String",
          "RegExp",
          "Object",
          "Function",
          "Boolean",
          "Error",
          "Symbol",
          "Set",
          "Map",
          "WeakSet",
          "WeakMap",
          "Proxy",
          "Reflect",
          "JSON",
          "Promise",
          "Float64Array",
          "Int16Array",
          "Int32Array",
          "Int8Array",
          "Uint16Array",
          "Uint32Array",
          "Float32Array",
          "Array",
          "Uint8Array",
          "Uint8ClampedArray",
          "ArrayBuffer",
        ],
        [
          "EvalError",
          "InternalError",
          "RangeError",
          "ReferenceError",
          "SyntaxError",
          "TypeError",
          "URIError",
        ]
      );
    function t(e) {
      return r("(?=", e, ")");
    }
    function r(...e) {
      return e
        .map((e) => {
          return (n = e) ? ("string" == typeof n ? n : n.source) : null;
          var n;
        })
        .join("");
    }
    return (i) => {
      const c = {
          $pattern: e,
          keyword: n.concat([
            "type",
            "namespace",
            "typedef",
            "interface",
            "public",
            "private",
            "protected",
            "implements",
            "declare",
            "abstract",
            "readonly",
          ]),
          literal: a,
          built_in: s.concat([
            "any",
            "void",
            "number",
            "boolean",
            "string",
            "object",
            "never",
            "enum",
          ]),
        },
        o = { className: "meta", begin: "@[A-Za-z$_][0-9A-Za-z$_]*" },
        l = (e, n, a) => {
          const s = e.contains.findIndex((e) => e.label === n);
          if (-1 === s) throw Error("can not find mode to replace");
          e.contains.splice(s, 1, a);
        },
        b = ((i) => {
          const c = e,
            o = {
              begin: /<[A-Za-z0-9\\._:-]+/,
              end: /\/[A-Za-z0-9\\._:-]+>|\/>/,
              isTrulyOpeningTag: (e, n) => {
                const a = e[0].length + e.index,
                  s = e.input[a];
                "<" !== s
                  ? ">" === s &&
                    (((e, { after: n }) => {
                      const a = "</" + e[0].slice(1);
                      return -1 !== e.input.indexOf(a, n);
                    })(e, { after: a }) ||
                      n.ignoreMatch())
                  : n.ignoreMatch();
              },
            },
            l = { $pattern: e, keyword: n, literal: a, built_in: s },
            b = "\\.([0-9](_?[0-9])*)",
            d = "0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*",
            g = {
              className: "number",
              variants: [
                {
                  begin: `(\\b(${d})((${b})|\\.)?|(${b}))[eE][+-]?([0-9](_?[0-9])*)\\b`,
                },
                {
                  begin: `\\b(${d})\\b((${b})\\b|\\.)?|(${b})\\b`,
                },
                {
                  begin: "\\b(0|[1-9](_?[0-9])*)n\\b",
                },
                {
                  begin: "\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b",
                },
                {
                  begin: "\\b0[bB][0-1](_?[0-1])*n?\\b",
                },
                { begin: "\\b0[oO][0-7](_?[0-7])*n?\\b" },
                {
                  begin: "\\b0[0-7]+n?\\b",
                },
              ],
              relevance: 0,
            },
            u = {
              className: "subst",
              begin: "\\$\\{",
              end: "\\}",
              keywords: l,
              contains: [],
            },
            E = {
              begin: "html`",
              end: "",
              starts: {
                end: "`",
                returnEnd: !1,
                contains: [i.BACKSLASH_ESCAPE, u],
                subLanguage: "xml",
              },
            },
            m = {
              begin: "css`",
              end: "",
              starts: {
                end: "`",
                returnEnd: !1,
                contains: [i.BACKSLASH_ESCAPE, u],
                subLanguage: "css",
              },
            },
            _ = {
              className: "string",
              begin: "`",
              end: "`",
              contains: [i.BACKSLASH_ESCAPE, u],
            },
            y = {
              className: "comment",
              variants: [
                i.COMMENT(/\/\*\*(?!\/)/, "\\*/", {
                  relevance: 0,
                  contains: [
                    {
                      className: "doctag",
                      begin: "@[A-Za-z]+",
                      contains: [
                        {
                          className: "type",
                          begin: "\\{",
                          end: "\\}",
                          relevance: 0,
                        },
                        {
                          className: "variable",
                          begin: c + "(?=\\s*(-)|$)",
                          endsParent: !0,
                          relevance: 0,
                        },
                        { begin: /(?=[^\n])\s/, relevance: 0 },
                      ],
                    },
                  ],
                }),
                i.C_BLOCK_COMMENT_MODE,
                i.C_LINE_COMMENT_MODE,
              ],
            },
            p = [
              i.APOS_STRING_MODE,
              i.QUOTE_STRING_MODE,
              E,
              m,
              _,
              g,
              i.REGEXP_MODE,
            ];
          u.contains = p.concat({
            begin: /\{/,
            end: /\}/,
            keywords: l,
            contains: ["self"].concat(p),
          });
          const N = [].concat(y, u.contains),
            f = N.concat([
              {
                begin: /\(/,
                end: /\)/,
                keywords: l,
                contains: ["self"].concat(N),
              },
            ]),
            A = {
              className: "params",
              begin: /\(/,
              end: /\)/,
              excludeBegin: !0,
              excludeEnd: !0,
              keywords: l,
              contains: f,
            };
          return {
            name: "Javascript",
            aliases: ["js", "jsx", "mjs", "cjs"],
            keywords: l,
            exports: { PARAMS_CONTAINS: f },
            illegal: /#(?![$_A-z])/,
            contains: [
              i.SHEBANG({ label: "shebang", binary: "node", relevance: 5 }),
              {
                label: "use_strict",
                className: "meta",
                relevance: 10,
                begin: /^\s*['"]use (strict|asm)['"]/,
              },
              i.APOS_STRING_MODE,
              i.QUOTE_STRING_MODE,
              E,
              m,
              _,
              y,
              g,
              {
                begin: r(
                  /[{,\n]\s*/,
                  t(
                    r(/(((\/\/.*$)|(\/\*(\*[^/]|[^*])*\*\/))\s*)*/, c + "\\s*:")
                  )
                ),
                relevance: 0,
                contains: [
                  { className: "attr", begin: c + t("\\s*:"), relevance: 0 },
                ],
              },
              {
                begin:
                  "(" + i.RE_STARTERS_RE + "|\\b(case|return|throw)\\b)\\s*",
                keywords: "return throw case",
                contains: [
                  y,
                  i.REGEXP_MODE,
                  {
                    className: "function",
                    begin:
                      "(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|" +
                      i.UNDERSCORE_IDENT_RE +
                      ")\\s*=>",
                    returnBegin: !0,
                    end: "\\s*=>",
                    contains: [
                      {
                        className: "params",
                        variants: [
                          {
                            begin: i.UNDERSCORE_IDENT_RE,
                            relevance: 0,
                          },
                          { className: null, begin: /\(\s*\)/, skip: !0 },
                          {
                            begin: /\(/,
                            end: /\)/,
                            excludeBegin: !0,
                            excludeEnd: !0,
                            keywords: l,
                            contains: f,
                          },
                        ],
                      },
                    ],
                  },
                  { begin: /,/, relevance: 0 },
                  { className: "", begin: /\s/, end: /\s*/, skip: !0 },
                  {
                    variants: [
                      { begin: "<>", end: "</>" },
                      {
                        begin: o.begin,
                        "on:begin": o.isTrulyOpeningTag,
                        end: o.end,
                      },
                    ],
                    subLanguage: "xml",
                    contains: [
                      {
                        begin: o.begin,
                        end: o.end,
                        skip: !0,
                        contains: ["self"],
                      },
                    ],
                  },
                ],
                relevance: 0,
              },
              {
                className: "function",
                beginKeywords: "function",
                end: /[{;]/,
                excludeEnd: !0,
                keywords: l,
                contains: ["self", i.inherit(i.TITLE_MODE, { begin: c }), A],
                illegal: /%/,
              },
              {
                beginKeywords: "while if switch catch for",
              },
              {
                className: "function",
                begin:
                  i.UNDERSCORE_IDENT_RE +
                  "\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{",
                returnBegin: !0,
                contains: [A, i.inherit(i.TITLE_MODE, { begin: c })],
              },
              {
                variants: [
                  {
                    begin: "\\." + c,
                  },
                  { begin: "\\$" + c },
                ],
                relevance: 0,
              },
              {
                className: "class",
                beginKeywords: "class",
                end: /[{;=]/,
                excludeEnd: !0,
                illegal: /[:"[\]]/,
                contains: [
                  {
                    beginKeywords: "extends",
                  },
                  i.UNDERSCORE_TITLE_MODE,
                ],
              },
              {
                begin: /\b(?=constructor)/,
                end: /[{;]/,
                excludeEnd: !0,
                contains: [i.inherit(i.TITLE_MODE, { begin: c }), "self", A],
              },
              {
                begin: "(get|set)\\s+(?=" + c + "\\()",
                end: /\{/,
                keywords: "get set",
                contains: [
                  i.inherit(i.TITLE_MODE, { begin: c }),
                  { begin: /\(\)/ },
                  A,
                ],
              },
              { begin: /\$[(.]/ },
            ],
          };
        })(i);
      return (
        Object.assign(b.keywords, c),
        b.exports.PARAMS_CONTAINS.push(o),
        (b.contains = b.contains.concat([
          o,
          {
            beginKeywords: "namespace",
            end: /\{/,
            excludeEnd: !0,
          },
          {
            beginKeywords: "interface",
            end: /\{/,
            excludeEnd: !0,
            keywords: "interface extends",
          },
        ])),
        l(b, "shebang", i.SHEBANG()),
        l(b, "use_strict", {
          className: "meta",
          relevance: 10,
          begin: /^\s*['"]use strict['"]/,
        }),
        (b.contains.find((e) => "function" === e.className).relevance = 0),
        Object.assign(b, {
          name: "TypeScript",
          aliases: ["ts"],
        }),
        b
      );
    };
  })()
);
hljs.registerLanguage(
  "xml",
  (() => {
    "use strict";
    function e(e) {
      return e ? ("string" == typeof e ? e : e.source) : null;
    }
    function n(e) {
      return a("(?=", e, ")");
    }
    function a(...n) {
      return n.map((n) => e(n)).join("");
    }
    function s(...n) {
      return "(" + n.map((n) => e(n)).join("|") + ")";
    }
    return (e) => {
      const t = a(/[A-Z_]/, a("(", /[A-Z0-9_.-]*:/, ")?"), /[A-Z0-9_.-]*/),
        i = {
          className: "symbol",
          begin: /&[a-z]+;|&#[0-9]+;|&#x[a-f0-9]+;/,
        },
        r = {
          begin: /\s/,
          contains: [
            {
              className: "meta-keyword",
              begin: /#?[a-z_][a-z1-9_-]+/,
              illegal: /\n/,
            },
          ],
        },
        c = e.inherit(r, { begin: /\(/, end: /\)/ }),
        l = e.inherit(e.APOS_STRING_MODE, {
          className: "meta-string",
        }),
        g = e.inherit(e.QUOTE_STRING_MODE, {
          className: "meta-string",
        }),
        m = {
          endsWithParent: !0,
          illegal: /</,
          relevance: 0,
          contains: [
            { className: "attr", begin: /[A-Za-z0-9._:-]+/, relevance: 0 },
            {
              begin: /=\s*/,
              relevance: 0,
              contains: [
                {
                  className: "string",
                  endsParent: !0,
                  variants: [
                    { begin: /"/, end: /"/, contains: [i] },
                    { begin: /'/, end: /'/, contains: [i] },
                    { begin: /[^\s"'=<>`]+/ },
                  ],
                },
              ],
            },
          ],
        };
      return {
        name: "HTML, XML",
        aliases: [
          "html",
          "xhtml",
          "rss",
          "atom",
          "xjb",
          "xsd",
          "xsl",
          "plist",
          "wsf",
          "svg",
        ],
        case_insensitive: !0,
        contains: [
          {
            className: "meta",
            begin: /<![a-z]/,
            end: />/,
            relevance: 10,
            contains: [
              r,
              g,
              l,
              c,
              {
                begin: /\[/,
                end: /\]/,
                contains: [
                  {
                    className: "meta",
                    begin: /<![a-z]/,
                    end: />/,
                    contains: [r, c, g, l],
                  },
                ],
              },
            ],
          },
          e.COMMENT(/<!--/, /-->/, {
            relevance: 10,
          }),
          { begin: /<!\[CDATA\[/, end: /\]\]>/, relevance: 10 },
          i,
          {
            className: "meta",
            begin: /<\?xml/,
            end: /\?>/,
            relevance: 10,
          },
          {
            className: "tag",
            begin: /<style(?=\s|>)/,
            end: />/,
            keywords: { name: "style" },
            contains: [m],
            starts: {
              end: /<\/style>/,
              returnEnd: !0,
              subLanguage: ["css", "xml"],
            },
          },
          {
            className: "tag",
            begin: /<script(?=\s|>)/,
            end: />/,
            keywords: { name: "script" },
            contains: [m],
            starts: {
              end: /<\/script>/,
              returnEnd: !0,
              subLanguage: ["javascript", "handlebars", "xml"],
            },
          },
          {
            className: "tag",
            begin: /<>|<\/>/,
          },
          {
            className: "tag",
            begin: a(/</, n(a(t, s(/\/>/, />/, /\s/)))),
            end: /\/?>/,
            contains: [
              { className: "name", begin: t, relevance: 0, starts: m },
            ],
          },
          {
            className: "tag",
            begin: a(/<\//, n(a(t, />/))),
            contains: [
              { className: "name", begin: t, relevance: 0 },
              { begin: />/, relevance: 0 },
            ],
          },
        ],
      };
    };
  })()
);
hljs.registerLanguage(
  "markdown",
  (() => {
    "use strict";
    function n(...n) {
      return n
        .map((n) => {
          return (e = n) ? ("string" == typeof e ? e : e.source) : null;
          var e;
        })
        .join("");
    }
    return (e) => {
      const a = {
          begin: /<\/?[A-Za-z_]/,
          end: ">",
          subLanguage: "xml",
          relevance: 0,
        },
        i = {
          variants: [
            { begin: /\[.+?\]\[.*?\]/, relevance: 0 },
            {
              begin: /\[.+?\]\(((data|javascript|mailto):|(?:http|ftp)s?:\/\/).*?\)/,
              relevance: 2,
            },
            {
              begin: n(/\[.+?\]\(/, /[A-Za-z][A-Za-z0-9+.-]*/, /:\/\/.*?\)/),
              relevance: 2,
            },
            { begin: /\[.+?\]\([./?&#].*?\)/, relevance: 1 },
            {
              begin: /\[.+?\]\(.*?\)/,
              relevance: 0,
            },
          ],
          returnBegin: !0,
          contains: [
            {
              className: "string",
              relevance: 0,
              begin: "\\[",
              end: "\\]",
              excludeBegin: !0,
              returnEnd: !0,
            },
            {
              className: "link",
              relevance: 0,
              begin: "\\]\\(",
              end: "\\)",
              excludeBegin: !0,
              excludeEnd: !0,
            },
            {
              className: "symbol",
              relevance: 0,
              begin: "\\]\\[",
              end: "\\]",
              excludeBegin: !0,
              excludeEnd: !0,
            },
          ],
        },
        s = {
          className: "strong",
          contains: [],
          variants: [
            { begin: /_{2}/, end: /_{2}/ },
            { begin: /\*{2}/, end: /\*{2}/ },
          ],
        },
        c = {
          className: "emphasis",
          contains: [],
          variants: [
            { begin: /\*(?!\*)/, end: /\*/ },
            {
              begin: /_(?!_)/,
              end: /_/,
              relevance: 0,
            },
          ],
        };
      s.contains.push(c), c.contains.push(s);
      let t = [a, i];
      return (
        (s.contains = s.contains.concat(t)),
        (c.contains = c.contains.concat(t)),
        (t = t.concat(s, c)),
        {
          name: "Markdown",
          aliases: ["md", "mkdown", "mkd"],
          contains: [
            {
              className: "section",
              variants: [
                { begin: "^#{1,6}", end: "$", contains: t },
                {
                  begin: "(?=^.+?\\n[=-]{2,}$)",
                  contains: [
                    { begin: "^[=-]*$" },
                    { begin: "^", end: "\\n", contains: t },
                  ],
                },
              ],
            },
            a,
            {
              className: "bullet",
              begin: "^[ \t]*([*+-]|(\\d+\\.))(?=\\s+)",
              end: "\\s+",
              excludeEnd: !0,
            },
            s,
            c,
            { className: "quote", begin: "^>\\s+", contains: t, end: "$" },
            {
              className: "code",
              variants: [
                { begin: "(`{3,})[^`](.|\\n)*?\\1`*[ ]*" },
                {
                  begin: "(~{3,})[^~](.|\\n)*?\\1~*[ ]*",
                },
                { begin: "```", end: "```+[ ]*$" },
                {
                  begin: "~~~",
                  end: "~~~+[ ]*$",
                },
                { begin: "`.+?`" },
                {
                  begin: "(?=^( {4}|\\t))",
                  contains: [{ begin: "^( {4}|\\t)", end: "(\\n)$" }],
                  relevance: 0,
                },
              ],
            },
            {
              begin: "^[-\\*]{3,}",
              end: "$",
            },
            i,
            {
              begin: /^\[[^\n]+\]:/,
              returnBegin: !0,
              contains: [
                {
                  className: "symbol",
                  begin: /\[/,
                  end: /\]/,
                  excludeBegin: !0,
                  excludeEnd: !0,
                },
                {
                  className: "link",
                  begin: /:\s*/,
                  end: /$/,
                  excludeBegin: !0,
                },
              ],
            },
          ],
        }
      );
    };
  })()
);
hljs.registerLanguage(
  "ruby",
  (() => {
    "use strict";
    function e(...e) {
      return e
        .map((e) => {
          return (n = e) ? ("string" == typeof n ? n : n.source) : null;
          var n;
        })
        .join("");
    }
    return (n) => {
      const a =
          "([a-zA-Z_]\\w*[!?=]?|[-+~]@|<<|>>|=~|===?|<=>|[<>]=?|\\*\\*|[-/+%^&*~`|]|\\[\\]=?)",
        i = {
          keyword:
            "and then defined module in return redo if BEGIN retry end for self when next until do begin unless END rescue else break undef not super class case require yield alias while ensure elsif or include attr_reader attr_writer attr_accessor __FILE__",
          built_in: "proc lambda",
          literal: "true false nil",
        },
        s = { className: "doctag", begin: "@[A-Za-z]+" },
        r = { begin: "#<", end: ">" },
        b = [
          n.COMMENT("#", "$", { contains: [s] }),
          n.COMMENT("^=begin", "^=end", { contains: [s], relevance: 10 }),
          n.COMMENT("^__END__", "\\n$"),
        ],
        c = { className: "subst", begin: /#\{/, end: /\}/, keywords: i },
        t = {
          className: "string",
          contains: [n.BACKSLASH_ESCAPE, c],
          variants: [
            {
              begin: /'/,
              end: /'/,
            },
            { begin: /"/, end: /"/ },
            { begin: /`/, end: /`/ },
            { begin: /%[qQwWx]?\(/, end: /\)/ },
            { begin: /%[qQwWx]?\[/, end: /\]/ },
            { begin: /%[qQwWx]?\{/, end: /\}/ },
            {
              begin: /%[qQwWx]?</,
              end: />/,
            },
            { begin: /%[qQwWx]?\//, end: /\// },
            { begin: /%[qQwWx]?%/, end: /%/ },
            { begin: /%[qQwWx]?-/, end: /-/ },
            { begin: /%[qQwWx]?\|/, end: /\|/ },
            {
              begin: /\B\?(\\\d{1,3})/,
            },
            { begin: /\B\?(\\x[A-Fa-f0-9]{1,2})/ },
            {
              begin: /\B\?(\\u\{?[A-Fa-f0-9]{1,6}\}?)/,
            },
            {
              begin: /\B\?(\\M-\\C-|\\M-\\c|\\c\\M-|\\M-|\\C-\\M-)[\x20-\x7e]/,
            },
            {
              begin: /\B\?\\(c|C-)[\x20-\x7e]/,
            },
            { begin: /\B\?\\?\S/ },
            {
              begin: /<<[-~]?'?(\w+)\n(?:[^\n]*\n)*?\s*\1\b/,
              returnBegin: !0,
              contains: [
                {
                  begin: /<<[-~]?'?/,
                },
                n.END_SAME_AS_BEGIN({
                  begin: /(\w+)/,
                  end: /(\w+)/,
                  contains: [n.BACKSLASH_ESCAPE, c],
                }),
              ],
            },
          ],
        },
        g = "[0-9](_?[0-9])*",
        d = {
          className: "number",
          relevance: 0,
          variants: [
            {
              begin: `\\b([1-9](_?[0-9])*|0)(\\.(${g}))?([eE][+-]?(${g})|r)?i?\\b`,
            },
            {
              begin: "\\b0[dD][0-9](_?[0-9])*r?i?\\b",
            },
            { begin: "\\b0[bB][0-1](_?[0-1])*r?i?\\b" },
            { begin: "\\b0[oO][0-7](_?[0-7])*r?i?\\b" },
            {
              begin: "\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*r?i?\\b",
            },
            {
              begin: "\\b0(_?[0-7])+r?i?\\b",
            },
          ],
        },
        l = {
          className: "params",
          begin: "\\(",
          end: "\\)",
          endsParent: !0,
          keywords: i,
        },
        o = [
          t,
          {
            className: "class",
            beginKeywords: "class module",
            end: "$|;",
            illegal: /=/,
            contains: [
              n.inherit(n.TITLE_MODE, {
                begin: "[A-Za-z_]\\w*(::\\w+)*(\\?|!)?",
              }),
              {
                begin: "<\\s*",
                contains: [
                  {
                    begin: "(" + n.IDENT_RE + "::)?" + n.IDENT_RE,
                    relevance: 0,
                  },
                ],
              },
            ].concat(b),
          },
          {
            className: "function",
            begin: e(/def\s*/, ((_ = a + "\\s*(\\(|;|$)"), e("(?=", _, ")"))),
            relevance: 0,
            keywords: "def",
            end: "$|;",
            contains: [n.inherit(n.TITLE_MODE, { begin: a }), l].concat(b),
          },
          { begin: n.IDENT_RE + "::" },
          {
            className: "symbol",
            begin: n.UNDERSCORE_IDENT_RE + "(!|\\?)?:",
            relevance: 0,
          },
          {
            className: "symbol",
            begin: ":(?!\\s)",
            contains: [t, { begin: a }],
            relevance: 0,
          },
          d,
          {
            className: "variable",
            begin: "(\\$\\W)|((\\$|@@?)(\\w+))(?=[^@$?])(?![A-Za-z])(?![@$?'])",
          },
          {
            className: "params",
            begin: /\|/,
            end: /\|/,
            relevance: 0,
            keywords: i,
          },
          {
            begin: "(" + n.RE_STARTERS_RE + "|unless)\\s*",
            keywords: "unless",
            contains: [
              {
                className: "regexp",
                contains: [n.BACKSLASH_ESCAPE, c],
                illegal: /\n/,
                variants: [
                  {
                    begin: "/",
                    end: "/[a-z]*",
                  },
                  { begin: /%r\{/, end: /\}[a-z]*/ },
                  { begin: "%r\\(", end: "\\)[a-z]*" },
                  { begin: "%r!", end: "![a-z]*" },
                  { begin: "%r\\[", end: "\\][a-z]*" },
                ],
              },
            ].concat(r, b),
            relevance: 0,
          },
        ].concat(r, b);
      var _;
      (c.contains = o), (l.contains = o);
      const E = [
        { begin: /^\s*=>/, starts: { end: "$", contains: o } },
        {
          className: "meta",
          begin:
            "^([>?]>|[\\w#]+\\(\\w+\\):\\d+:\\d+>|(\\w+-)?\\d+\\.\\d+\\.\\d+(p\\d+)?[^\\d][^>]+>)(?=[ ])",
          starts: { end: "$", contains: o },
        },
      ];
      return (
        b.unshift(r),
        {
          name: "Ruby",
          aliases: ["rb", "gemspec", "podspec", "thor", "irb"],
          keywords: i,
          illegal: /\/\*/,
          contains: [n.SHEBANG({ binary: "ruby" })]
            .concat(E)
            .concat(b)
            .concat(o),
        }
      );
    };
  })()
);
hljs.registerLanguage(
  "yaml",
  (() => {
    "use strict";
    return (e) => {
      var n = "true false yes no null",
        a = "[\\w#;/?:@&=+$,.~*'()[\\]]+",
        s = {
          className: "string",
          relevance: 0,
          variants: [
            { begin: /'/, end: /'/ },
            { begin: /"/, end: /"/ },
            { begin: /\S+/ },
          ],
          contains: [
            e.BACKSLASH_ESCAPE,
            {
              className: "template-variable",
              variants: [
                { begin: /\{\{/, end: /\}\}/ },
                { begin: /%\{/, end: /\}/ },
              ],
            },
          ],
        },
        i = e.inherit(s, {
          variants: [
            { begin: /'/, end: /'/ },
            { begin: /"/, end: /"/ },
            { begin: /[^\s,{}[\]]+/ },
          ],
        }),
        l = {
          end: ",",
          endsWithParent: !0,
          excludeEnd: !0,
          keywords: n,
          relevance: 0,
        },
        t = {
          begin: /\{/,
          end: /\}/,
          contains: [l],
          illegal: "\\n",
          relevance: 0,
        },
        g = {
          begin: "\\[",
          end: "\\]",
          contains: [l],
          illegal: "\\n",
          relevance: 0,
        },
        b = [
          {
            className: "attr",
            variants: [
              {
                begin: "\\w[\\w :\\/.-]*:(?=[ \t]|$)",
              },
              { begin: '"\\w[\\w :\\/.-]*":(?=[ \t]|$)' },
              {
                begin: "'\\w[\\w :\\/.-]*':(?=[ \t]|$)",
              },
            ],
          },
          { className: "meta", begin: "^---\\s*$", relevance: 10 },
          {
            className: "string",
            begin:
              "[\\|>]([1-9]?[+-])?[ ]*\\n( +)[^ ][^\\n]*\\n(\\2[^\\n]+\\n?)*",
          },
          {
            begin: "<%[%=-]?",
            end: "[%-]?%>",
            subLanguage: "ruby",
            excludeBegin: !0,
            excludeEnd: !0,
            relevance: 0,
          },
          { className: "type", begin: "!\\w+!" + a },
          { className: "type", begin: "!<" + a + ">" },
          { className: "type", begin: "!" + a },
          { className: "type", begin: "!!" + a },
          { className: "meta", begin: "&" + e.UNDERSCORE_IDENT_RE + "$" },
          { className: "meta", begin: "\\*" + e.UNDERSCORE_IDENT_RE + "$" },
          { className: "bullet", begin: "-(?=[ ]|$)", relevance: 0 },
          e.HASH_COMMENT_MODE,
          { beginKeywords: n, keywords: { literal: n } },
          {
            className: "number",
            begin:
              "\\b[0-9]{4}(-[0-9][0-9]){0,2}([Tt \\t][0-9][0-9]?(:[0-9][0-9]){2})?(\\.[0-9]*)?([ \\t])*(Z|[-+][0-9][0-9]?(:[0-9][0-9])?)?\\b",
          },
          { className: "number", begin: e.C_NUMBER_RE + "\\b", relevance: 0 },
          t,
          g,
          s,
        ],
        r = [...b];
      return (
        r.pop(),
        r.push(i),
        (l.contains = r),
        {
          name: "YAML",
          case_insensitive: !0,
          aliases: ["yml", "YAML"],
          contains: b,
        }
      );
    };
  })()
);
hljs.registerLanguage(
  "less",
  (() => {
    "use strict";
    const e = [
        "a",
        "abbr",
        "address",
        "article",
        "aside",
        "audio",
        "b",
        "blockquote",
        "body",
        "button",
        "canvas",
        "caption",
        "cite",
        "code",
        "dd",
        "del",
        "details",
        "dfn",
        "div",
        "dl",
        "dt",
        "em",
        "fieldset",
        "figcaption",
        "figure",
        "footer",
        "form",
        "h1",
        "h2",
        "h3",
        "h4",
        "h5",
        "h6",
        "header",
        "hgroup",
        "html",
        "i",
        "iframe",
        "img",
        "input",
        "ins",
        "kbd",
        "label",
        "legend",
        "li",
        "main",
        "mark",
        "menu",
        "nav",
        "object",
        "ol",
        "p",
        "q",
        "quote",
        "samp",
        "section",
        "span",
        "strong",
        "summary",
        "sup",
        "table",
        "tbody",
        "td",
        "textarea",
        "tfoot",
        "th",
        "thead",
        "time",
        "tr",
        "ul",
        "var",
        "video",
      ],
      t = [
        "any-hover",
        "any-pointer",
        "aspect-ratio",
        "color",
        "color-gamut",
        "color-index",
        "device-aspect-ratio",
        "device-height",
        "device-width",
        "display-mode",
        "forced-colors",
        "grid",
        "height",
        "hover",
        "inverted-colors",
        "monochrome",
        "orientation",
        "overflow-block",
        "overflow-inline",
        "pointer",
        "prefers-color-scheme",
        "prefers-contrast",
        "prefers-reduced-motion",
        "prefers-reduced-transparency",
        "resolution",
        "scan",
        "scripting",
        "update",
        "width",
        "min-width",
        "max-width",
        "min-height",
        "max-height",
      ],
      i = [
        "active",
        "any-link",
        "blank",
        "checked",
        "current",
        "default",
        "defined",
        "dir",
        "disabled",
        "drop",
        "empty",
        "enabled",
        "first",
        "first-child",
        "first-of-type",
        "fullscreen",
        "future",
        "focus",
        "focus-visible",
        "focus-within",
        "has",
        "host",
        "host-context",
        "hover",
        "indeterminate",
        "in-range",
        "invalid",
        "is",
        "lang",
        "last-child",
        "last-of-type",
        "left",
        "link",
        "local-link",
        "not",
        "nth-child",
        "nth-col",
        "nth-last-child",
        "nth-last-col",
        "nth-last-of-type",
        "nth-of-type",
        "only-child",
        "only-of-type",
        "optional",
        "out-of-range",
        "past",
        "placeholder-shown",
        "read-only",
        "read-write",
        "required",
        "right",
        "root",
        "scope",
        "target",
        "target-within",
        "user-invalid",
        "valid",
        "visited",
        "where",
      ],
      o = [
        "after",
        "backdrop",
        "before",
        "cue",
        "cue-region",
        "first-letter",
        "first-line",
        "grammar-error",
        "marker",
        "part",
        "placeholder",
        "selection",
        "slotted",
        "spelling-error",
      ],
      n = [
        "align-content",
        "align-items",
        "align-self",
        "animation",
        "animation-delay",
        "animation-direction",
        "animation-duration",
        "animation-fill-mode",
        "animation-iteration-count",
        "animation-name",
        "animation-play-state",
        "animation-timing-function",
        "auto",
        "backface-visibility",
        "background",
        "background-attachment",
        "background-clip",
        "background-color",
        "background-image",
        "background-origin",
        "background-position",
        "background-repeat",
        "background-size",
        "border",
        "border-bottom",
        "border-bottom-color",
        "border-bottom-left-radius",
        "border-bottom-right-radius",
        "border-bottom-style",
        "border-bottom-width",
        "border-collapse",
        "border-color",
        "border-image",
        "border-image-outset",
        "border-image-repeat",
        "border-image-slice",
        "border-image-source",
        "border-image-width",
        "border-left",
        "border-left-color",
        "border-left-style",
        "border-left-width",
        "border-radius",
        "border-right",
        "border-right-color",
        "border-right-style",
        "border-right-width",
        "border-spacing",
        "border-style",
        "border-top",
        "border-top-color",
        "border-top-left-radius",
        "border-top-right-radius",
        "border-top-style",
        "border-top-width",
        "border-width",
        "bottom",
        "box-decoration-break",
        "box-shadow",
        "box-sizing",
        "break-after",
        "break-before",
        "break-inside",
        "caption-side",
        "clear",
        "clip",
        "clip-path",
        "color",
        "column-count",
        "column-fill",
        "column-gap",
        "column-rule",
        "column-rule-color",
        "column-rule-style",
        "column-rule-width",
        "column-span",
        "column-width",
        "columns",
        "content",
        "counter-increment",
        "counter-reset",
        "cursor",
        "direction",
        "display",
        "empty-cells",
        "filter",
        "flex",
        "flex-basis",
        "flex-direction",
        "flex-flow",
        "flex-grow",
        "flex-shrink",
        "flex-wrap",
        "float",
        "font",
        "font-display",
        "font-family",
        "font-feature-settings",
        "font-kerning",
        "font-language-override",
        "font-size",
        "font-size-adjust",
        "font-stretch",
        "font-style",
        "font-variant",
        "font-variant-ligatures",
        "font-variation-settings",
        "font-weight",
        "height",
        "hyphens",
        "icon",
        "image-orientation",
        "image-rendering",
        "image-resolution",
        "ime-mode",
        "inherit",
        "initial",
        "justify-content",
        "left",
        "letter-spacing",
        "line-height",
        "list-style",
        "list-style-image",
        "list-style-position",
        "list-style-type",
        "margin",
        "margin-bottom",
        "margin-left",
        "margin-right",
        "margin-top",
        "marks",
        "mask",
        "max-height",
        "max-width",
        "min-height",
        "min-width",
        "nav-down",
        "nav-index",
        "nav-left",
        "nav-right",
        "nav-up",
        "none",
        "normal",
        "object-fit",
        "object-position",
        "opacity",
        "order",
        "orphans",
        "outline",
        "outline-color",
        "outline-offset",
        "outline-style",
        "outline-width",
        "overflow",
        "overflow-wrap",
        "overflow-x",
        "overflow-y",
        "padding",
        "padding-bottom",
        "padding-left",
        "padding-right",
        "padding-top",
        "page-break-after",
        "page-break-before",
        "page-break-inside",
        "perspective",
        "perspective-origin",
        "pointer-events",
        "position",
        "quotes",
        "resize",
        "right",
        "src",
        "tab-size",
        "table-layout",
        "text-align",
        "text-align-last",
        "text-decoration",
        "text-decoration-color",
        "text-decoration-line",
        "text-decoration-style",
        "text-indent",
        "text-overflow",
        "text-rendering",
        "text-shadow",
        "text-transform",
        "text-underline-position",
        "top",
        "transform",
        "transform-origin",
        "transform-style",
        "transition",
        "transition-delay",
        "transition-duration",
        "transition-property",
        "transition-timing-function",
        "unicode-bidi",
        "vertical-align",
        "visibility",
        "white-space",
        "widows",
        "width",
        "word-break",
        "word-spacing",
        "word-wrap",
        "z-index",
      ].reverse(),
      r = i.concat(o);
    return (a) => {
      const s = ((e) => ({
          IMPORTANT: { className: "meta", begin: "!important" },
          HEXCOLOR: {
            className: "number",
            begin: "#([a-fA-F0-9]{6}|[a-fA-F0-9]{3})",
          },
          ATTRIBUTE_SELECTOR_MODE: {
            className: "selector-attr",
            begin: /\[/,
            end: /\]/,
            illegal: "$",
            contains: [e.APOS_STRING_MODE, e.QUOTE_STRING_MODE],
          },
        }))(a),
        l = r,
        d = "([\\w-]+|@\\{[\\w-]+\\})",
        c = [],
        g = [],
        b = (e) => ({ className: "string", begin: "~?" + e + ".*?" + e }),
        m = (e, t, i) => ({ className: e, begin: t, relevance: i }),
        u = {
          $pattern: /[a-z-]+/,
          keyword: "and or not only",
          attribute: t.join(" "),
        },
        p = {
          begin: "\\(",
          end: "\\)",
          contains: g,
          keywords: u,
          relevance: 0,
        };
      g.push(
        a.C_LINE_COMMENT_MODE,
        a.C_BLOCK_COMMENT_MODE,
        b("'"),
        b('"'),
        a.CSS_NUMBER_MODE,
        {
          begin: "(url|data-uri)\\(",
          starts: { className: "string", end: "[\\)\\n]", excludeEnd: !0 },
        },
        s.HEXCOLOR,
        p,
        m("variable", "@@?[\\w-]+", 10),
        m("variable", "@\\{[\\w-]+\\}"),
        m("built_in", "~?`[^`]*?`"),
        {
          className: "attribute",
          begin: "[\\w-]+\\s*:",
          end: ":",
          returnBegin: !0,
          excludeEnd: !0,
        },
        s.IMPORTANT
      );
      const f = g.concat({ begin: /\{/, end: /\}/, contains: c }),
        h = {
          beginKeywords: "when",
          endsWithParent: !0,
          contains: [{ beginKeywords: "and not" }].concat(g),
        },
        w = {
          begin: d + "\\s*:",
          returnBegin: !0,
          end: /[;}]/,
          relevance: 0,
          contains: [
            { begin: /-(webkit|moz|ms|o)-/ },
            {
              className: "attribute",
              begin: "\\b(" + n.join("|") + ")\\b",
              end: /(?=:)/,
              starts: {
                endsWithParent: !0,
                illegal: "[<=$]",
                relevance: 0,
                contains: g,
              },
            },
          ],
        },
        v = {
          className: "keyword",
          begin:
            "@(import|media|charset|font-face|(-[a-z]+-)?keyframes|supports|document|namespace|page|viewport|host)\\b",
          starts: {
            end: "[;{}]",
            keywords: u,
            returnEnd: !0,
            contains: g,
            relevance: 0,
          },
        },
        y = {
          className: "variable",
          variants: [
            { begin: "@[\\w-]+\\s*:", relevance: 15 },
            {
              begin: "@[\\w-]+",
            },
          ],
          starts: { end: "[;}]", returnEnd: !0, contains: f },
        },
        k = {
          variants: [
            {
              begin: "[\\.#:&\\[>]",
              end: "[;{}]",
            },
            { begin: d, end: /\{/ },
          ],
          returnBegin: !0,
          returnEnd: !0,
          illegal: "[<='$\"]",
          relevance: 0,
          contains: [
            a.C_LINE_COMMENT_MODE,
            a.C_BLOCK_COMMENT_MODE,
            h,
            m("keyword", "all\\b"),
            m("variable", "@\\{[\\w-]+\\}"),
            {
              begin: "\\b(" + e.join("|") + ")\\b",
              className: "selector-tag",
            },
            m("selector-tag", d + "%?", 0),
            m("selector-id", "#" + d),
            m("selector-class", "\\." + d, 0),
            m("selector-tag", "&", 0),
            s.ATTRIBUTE_SELECTOR_MODE,
            {
              className: "selector-pseudo",
              begin: ":(" + i.join("|") + ")",
            },
            {
              className: "selector-pseudo",
              begin: "::(" + o.join("|") + ")",
            },
            { begin: "\\(", end: "\\)", contains: f },
            { begin: "!important" },
          ],
        },
        E = {
          begin: `[\\w-]+:(:)?(${l.join("|")})`,
          returnBegin: !0,
          contains: [k],
        };
      return (
        c.push(a.C_LINE_COMMENT_MODE, a.C_BLOCK_COMMENT_MODE, v, y, E, w, k),
        {
          name: "Less",
          case_insensitive: !0,
          illegal: "[=>'/<($\"]",
          contains: c,
        }
      );
    };
  })()
);
hljs.registerLanguage(
  "css",
  (() => {
    "use strict";
    const e = [
        "a",
        "abbr",
        "address",
        "article",
        "aside",
        "audio",
        "b",
        "blockquote",
        "body",
        "button",
        "canvas",
        "caption",
        "cite",
        "code",
        "dd",
        "del",
        "details",
        "dfn",
        "div",
        "dl",
        "dt",
        "em",
        "fieldset",
        "figcaption",
        "figure",
        "footer",
        "form",
        "h1",
        "h2",
        "h3",
        "h4",
        "h5",
        "h6",
        "header",
        "hgroup",
        "html",
        "i",
        "iframe",
        "img",
        "input",
        "ins",
        "kbd",
        "label",
        "legend",
        "li",
        "main",
        "mark",
        "menu",
        "nav",
        "object",
        "ol",
        "p",
        "q",
        "quote",
        "samp",
        "section",
        "span",
        "strong",
        "summary",
        "sup",
        "table",
        "tbody",
        "td",
        "textarea",
        "tfoot",
        "th",
        "thead",
        "time",
        "tr",
        "ul",
        "var",
        "video",
      ],
      t = [
        "any-hover",
        "any-pointer",
        "aspect-ratio",
        "color",
        "color-gamut",
        "color-index",
        "device-aspect-ratio",
        "device-height",
        "device-width",
        "display-mode",
        "forced-colors",
        "grid",
        "height",
        "hover",
        "inverted-colors",
        "monochrome",
        "orientation",
        "overflow-block",
        "overflow-inline",
        "pointer",
        "prefers-color-scheme",
        "prefers-contrast",
        "prefers-reduced-motion",
        "prefers-reduced-transparency",
        "resolution",
        "scan",
        "scripting",
        "update",
        "width",
        "min-width",
        "max-width",
        "min-height",
        "max-height",
      ],
      i = [
        "active",
        "any-link",
        "blank",
        "checked",
        "current",
        "default",
        "defined",
        "dir",
        "disabled",
        "drop",
        "empty",
        "enabled",
        "first",
        "first-child",
        "first-of-type",
        "fullscreen",
        "future",
        "focus",
        "focus-visible",
        "focus-within",
        "has",
        "host",
        "host-context",
        "hover",
        "indeterminate",
        "in-range",
        "invalid",
        "is",
        "lang",
        "last-child",
        "last-of-type",
        "left",
        "link",
        "local-link",
        "not",
        "nth-child",
        "nth-col",
        "nth-last-child",
        "nth-last-col",
        "nth-last-of-type",
        "nth-of-type",
        "only-child",
        "only-of-type",
        "optional",
        "out-of-range",
        "past",
        "placeholder-shown",
        "read-only",
        "read-write",
        "required",
        "right",
        "root",
        "scope",
        "target",
        "target-within",
        "user-invalid",
        "valid",
        "visited",
        "where",
      ],
      o = [
        "after",
        "backdrop",
        "before",
        "cue",
        "cue-region",
        "first-letter",
        "first-line",
        "grammar-error",
        "marker",
        "part",
        "placeholder",
        "selection",
        "slotted",
        "spelling-error",
      ],
      r = [
        "align-content",
        "align-items",
        "align-self",
        "animation",
        "animation-delay",
        "animation-direction",
        "animation-duration",
        "animation-fill-mode",
        "animation-iteration-count",
        "animation-name",
        "animation-play-state",
        "animation-timing-function",
        "auto",
        "backface-visibility",
        "background",
        "background-attachment",
        "background-clip",
        "background-color",
        "background-image",
        "background-origin",
        "background-position",
        "background-repeat",
        "background-size",
        "border",
        "border-bottom",
        "border-bottom-color",
        "border-bottom-left-radius",
        "border-bottom-right-radius",
        "border-bottom-style",
        "border-bottom-width",
        "border-collapse",
        "border-color",
        "border-image",
        "border-image-outset",
        "border-image-repeat",
        "border-image-slice",
        "border-image-source",
        "border-image-width",
        "border-left",
        "border-left-color",
        "border-left-style",
        "border-left-width",
        "border-radius",
        "border-right",
        "border-right-color",
        "border-right-style",
        "border-right-width",
        "border-spacing",
        "border-style",
        "border-top",
        "border-top-color",
        "border-top-left-radius",
        "border-top-right-radius",
        "border-top-style",
        "border-top-width",
        "border-width",
        "bottom",
        "box-decoration-break",
        "box-shadow",
        "box-sizing",
        "break-after",
        "break-before",
        "break-inside",
        "caption-side",
        "clear",
        "clip",
        "clip-path",
        "color",
        "column-count",
        "column-fill",
        "column-gap",
        "column-rule",
        "column-rule-color",
        "column-rule-style",
        "column-rule-width",
        "column-span",
        "column-width",
        "columns",
        "content",
        "counter-increment",
        "counter-reset",
        "cursor",
        "direction",
        "display",
        "empty-cells",
        "filter",
        "flex",
        "flex-basis",
        "flex-direction",
        "flex-flow",
        "flex-grow",
        "flex-shrink",
        "flex-wrap",
        "float",
        "font",
        "font-display",
        "font-family",
        "font-feature-settings",
        "font-kerning",
        "font-language-override",
        "font-size",
        "font-size-adjust",
        "font-stretch",
        "font-style",
        "font-variant",
        "font-variant-ligatures",
        "font-variation-settings",
        "font-weight",
        "height",
        "hyphens",
        "icon",
        "image-orientation",
        "image-rendering",
        "image-resolution",
        "ime-mode",
        "inherit",
        "initial",
        "justify-content",
        "left",
        "letter-spacing",
        "line-height",
        "list-style",
        "list-style-image",
        "list-style-position",
        "list-style-type",
        "margin",
        "margin-bottom",
        "margin-left",
        "margin-right",
        "margin-top",
        "marks",
        "mask",
        "max-height",
        "max-width",
        "min-height",
        "min-width",
        "nav-down",
        "nav-index",
        "nav-left",
        "nav-right",
        "nav-up",
        "none",
        "normal",
        "object-fit",
        "object-position",
        "opacity",
        "order",
        "orphans",
        "outline",
        "outline-color",
        "outline-offset",
        "outline-style",
        "outline-width",
        "overflow",
        "overflow-wrap",
        "overflow-x",
        "overflow-y",
        "padding",
        "padding-bottom",
        "padding-left",
        "padding-right",
        "padding-top",
        "page-break-after",
        "page-break-before",
        "page-break-inside",
        "perspective",
        "perspective-origin",
        "pointer-events",
        "position",
        "quotes",
        "resize",
        "right",
        "src",
        "tab-size",
        "table-layout",
        "text-align",
        "text-align-last",
        "text-decoration",
        "text-decoration-color",
        "text-decoration-line",
        "text-decoration-style",
        "text-indent",
        "text-overflow",
        "text-rendering",
        "text-shadow",
        "text-transform",
        "text-underline-position",
        "top",
        "transform",
        "transform-origin",
        "transform-style",
        "transition",
        "transition-delay",
        "transition-duration",
        "transition-property",
        "transition-timing-function",
        "unicode-bidi",
        "vertical-align",
        "visibility",
        "white-space",
        "widows",
        "width",
        "word-break",
        "word-spacing",
        "word-wrap",
        "z-index",
      ].reverse();
    return (n) => {
      const a = ((e) => ({
          IMPORTANT: { className: "meta", begin: "!important" },
          HEXCOLOR: {
            className: "number",
            begin: "#([a-fA-F0-9]{6}|[a-fA-F0-9]{3})",
          },
          ATTRIBUTE_SELECTOR_MODE: {
            className: "selector-attr",
            begin: /\[/,
            end: /\]/,
            illegal: "$",
            contains: [e.APOS_STRING_MODE, e.QUOTE_STRING_MODE],
          },
        }))(n),
        l = [n.APOS_STRING_MODE, n.QUOTE_STRING_MODE];
      return {
        name: "CSS",
        case_insensitive: !0,
        illegal: /[=|'\$]/,
        keywords: { keyframePosition: "from to" },
        classNameAliases: { keyframePosition: "selector-tag" },
        contains: [
          n.C_BLOCK_COMMENT_MODE,
          { begin: /-(webkit|moz|ms|o)-(?=[a-z])/ },
          n.CSS_NUMBER_MODE,
          { className: "selector-id", begin: /#[A-Za-z0-9_-]+/, relevance: 0 },
          {
            className: "selector-class",
            begin: "\\.[a-zA-Z-][a-zA-Z0-9_-]*",
            relevance: 0,
          },
          a.ATTRIBUTE_SELECTOR_MODE,
          {
            className: "selector-pseudo",
            variants: [
              {
                begin: ":(" + i.join("|") + ")",
              },
              { begin: "::(" + o.join("|") + ")" },
            ],
          },
          {
            className: "attribute",
            begin: "\\b(" + r.join("|") + ")\\b",
          },
          {
            begin: ":",
            end: "[;}]",
            contains: [
              a.HEXCOLOR,
              a.IMPORTANT,
              n.CSS_NUMBER_MODE,
              ...l,
              {
                begin: /(url|data-uri)\(/,
                end: /\)/,
                relevance: 0,
                keywords: { built_in: "url data-uri" },
                contains: [
                  {
                    className: "string",
                    begin: /[^)]/,
                    endsWithParent: !0,
                    excludeEnd: !0,
                  },
                ],
              },
              { className: "built_in", begin: /[\w-]+(?=\()/ },
            ],
          },
          {
            begin:
              ((s = /@/),
              ((...e) =>
                e
                  .map((e) =>
                    ((e) => (e ? ("string" == typeof e ? e : e.source) : null))(
                      e
                    )
                  )
                  .join(""))("(?=", s, ")")),
            end: "[{;]",
            relevance: 0,
            illegal: /:/,
            contains: [
              { className: "keyword", begin: /@-?\w[\w]*(-\w+)*/ },
              {
                begin: /\s/,
                endsWithParent: !0,
                excludeEnd: !0,
                relevance: 0,
                keywords: {
                  $pattern: /[a-z-]+/,
                  keyword: "and or not only",
                  attribute: t.join(" "),
                },
                contains: [
                  { begin: /[a-z-]+(?=:)/, className: "attribute" },
                  ...l,
                  n.CSS_NUMBER_MODE,
                ],
              },
            ],
          },
          { className: "selector-tag", begin: "\\b(" + e.join("|") + ")\\b" },
        ],
      };
      var s;
    };
  })()
);
hljs.registerLanguage(
  "json",
  (() => {
    "use strict";
    return (n) => {
      const e = {
          literal: "true false null",
        },
        i = [n.C_LINE_COMMENT_MODE, n.C_BLOCK_COMMENT_MODE],
        a = [n.QUOTE_STRING_MODE, n.C_NUMBER_MODE],
        l = {
          end: ",",
          endsWithParent: !0,
          excludeEnd: !0,
          contains: a,
          keywords: e,
        },
        t = {
          begin: /\{/,
          end: /\}/,
          contains: [
            {
              className: "attr",
              begin: /"/,
              end: /"/,
              contains: [n.BACKSLASH_ESCAPE],
              illegal: "\\n",
            },
            n.inherit(l, { begin: /:/ }),
          ].concat(i),
          illegal: "\\S",
        },
        s = {
          begin: "\\[",
          end: "\\]",
          contains: [n.inherit(l)],
          illegal: "\\S",
        };
      return (
        a.push(t, s),
        i.forEach((n) => {
          a.push(n);
        }),
        { name: "JSON", contains: a, keywords: e, illegal: "\\S" }
      );
    };
  })()
);
hljs.registerLanguage(
  "glsl",
  (() => {
    "use strict";
    return (e) => ({
      name: "GLSL",
      keywords: {
        keyword:
          "break continue discard do else for if return while switch case default attribute binding buffer ccw centroid centroid varying coherent column_major const cw depth_any depth_greater depth_less depth_unchanged early_fragment_tests equal_spacing flat fractional_even_spacing fractional_odd_spacing highp in index inout invariant invocations isolines layout line_strip lines lines_adjacency local_size_x local_size_y local_size_z location lowp max_vertices mediump noperspective offset origin_upper_left out packed patch pixel_center_integer point_mode points precise precision quads r11f_g11f_b10f r16 r16_snorm r16f r16i r16ui r32f r32i r32ui r8 r8_snorm r8i r8ui readonly restrict rg16 rg16_snorm rg16f rg16i rg16ui rg32f rg32i rg32ui rg8 rg8_snorm rg8i rg8ui rgb10_a2 rgb10_a2ui rgba16 rgba16_snorm rgba16f rgba16i rgba16ui rgba32f rgba32i rgba32ui rgba8 rgba8_snorm rgba8i rgba8ui row_major sample shared smooth std140 std430 stream triangle_strip triangles triangles_adjacency uniform varying vertices volatile writeonly",
        type:
          "atomic_uint bool bvec2 bvec3 bvec4 dmat2 dmat2x2 dmat2x3 dmat2x4 dmat3 dmat3x2 dmat3x3 dmat3x4 dmat4 dmat4x2 dmat4x3 dmat4x4 double dvec2 dvec3 dvec4 float iimage1D iimage1DArray iimage2D iimage2DArray iimage2DMS iimage2DMSArray iimage2DRect iimage3D iimageBuffer iimageCube iimageCubeArray image1D image1DArray image2D image2DArray image2DMS image2DMSArray image2DRect image3D imageBuffer imageCube imageCubeArray int isampler1D isampler1DArray isampler2D isampler2DArray isampler2DMS isampler2DMSArray isampler2DRect isampler3D isamplerBuffer isamplerCube isamplerCubeArray ivec2 ivec3 ivec4 mat2 mat2x2 mat2x3 mat2x4 mat3 mat3x2 mat3x3 mat3x4 mat4 mat4x2 mat4x3 mat4x4 sampler1D sampler1DArray sampler1DArrayShadow sampler1DShadow sampler2D sampler2DArray sampler2DArrayShadow sampler2DMS sampler2DMSArray sampler2DRect sampler2DRectShadow sampler2DShadow sampler3D samplerBuffer samplerCube samplerCubeArray samplerCubeArrayShadow samplerCubeShadow image1D uimage1DArray uimage2D uimage2DArray uimage2DMS uimage2DMSArray uimage2DRect uimage3D uimageBuffer uimageCube uimageCubeArray uint usampler1D usampler1DArray usampler2D usampler2DArray usampler2DMS usampler2DMSArray usampler2DRect usampler3D samplerBuffer usamplerCube usamplerCubeArray uvec2 uvec3 uvec4 vec2 vec3 vec4 void",
        built_in:
          "gl_MaxAtomicCounterBindings gl_MaxAtomicCounterBufferSize gl_MaxClipDistances gl_MaxClipPlanes gl_MaxCombinedAtomicCounterBuffers gl_MaxCombinedAtomicCounters gl_MaxCombinedImageUniforms gl_MaxCombinedImageUnitsAndFragmentOutputs gl_MaxCombinedTextureImageUnits gl_MaxComputeAtomicCounterBuffers gl_MaxComputeAtomicCounters gl_MaxComputeImageUniforms gl_MaxComputeTextureImageUnits gl_MaxComputeUniformComponents gl_MaxComputeWorkGroupCount gl_MaxComputeWorkGroupSize gl_MaxDrawBuffers gl_MaxFragmentAtomicCounterBuffers gl_MaxFragmentAtomicCounters gl_MaxFragmentImageUniforms gl_MaxFragmentInputComponents gl_MaxFragmentInputVectors gl_MaxFragmentUniformComponents gl_MaxFragmentUniformVectors gl_MaxGeometryAtomicCounterBuffers gl_MaxGeometryAtomicCounters gl_MaxGeometryImageUniforms gl_MaxGeometryInputComponents gl_MaxGeometryOutputComponents gl_MaxGeometryOutputVertices gl_MaxGeometryTextureImageUnits gl_MaxGeometryTotalOutputComponents gl_MaxGeometryUniformComponents gl_MaxGeometryVaryingComponents gl_MaxImageSamples gl_MaxImageUnits gl_MaxLights gl_MaxPatchVertices gl_MaxProgramTexelOffset gl_MaxTessControlAtomicCounterBuffers gl_MaxTessControlAtomicCounters gl_MaxTessControlImageUniforms gl_MaxTessControlInputComponents gl_MaxTessControlOutputComponents gl_MaxTessControlTextureImageUnits gl_MaxTessControlTotalOutputComponents gl_MaxTessControlUniformComponents gl_MaxTessEvaluationAtomicCounterBuffers gl_MaxTessEvaluationAtomicCounters gl_MaxTessEvaluationImageUniforms gl_MaxTessEvaluationInputComponents gl_MaxTessEvaluationOutputComponents gl_MaxTessEvaluationTextureImageUnits gl_MaxTessEvaluationUniformComponents gl_MaxTessGenLevel gl_MaxTessPatchComponents gl_MaxTextureCoords gl_MaxTextureImageUnits gl_MaxTextureUnits gl_MaxVaryingComponents gl_MaxVaryingFloats gl_MaxVaryingVectors gl_MaxVertexAtomicCounterBuffers gl_MaxVertexAtomicCounters gl_MaxVertexAttribs gl_MaxVertexImageUniforms gl_MaxVertexOutputComponents gl_MaxVertexOutputVectors gl_MaxVertexTextureImageUnits gl_MaxVertexUniformComponents gl_MaxVertexUniformVectors gl_MaxViewports gl_MinProgramTexelOffset gl_BackColor gl_BackLightModelProduct gl_BackLightProduct gl_BackMaterial gl_BackSecondaryColor gl_ClipDistance gl_ClipPlane gl_ClipVertex gl_Color gl_DepthRange gl_EyePlaneQ gl_EyePlaneR gl_EyePlaneS gl_EyePlaneT gl_Fog gl_FogCoord gl_FogFragCoord gl_FragColor gl_FragCoord gl_FragData gl_FragDepth gl_FrontColor gl_FrontFacing gl_FrontLightModelProduct gl_FrontLightProduct gl_FrontMaterial gl_FrontSecondaryColor gl_GlobalInvocationID gl_InstanceID gl_InvocationID gl_Layer gl_LightModel gl_LightSource gl_LocalInvocationID gl_LocalInvocationIndex gl_ModelViewMatrix gl_ModelViewMatrixInverse gl_ModelViewMatrixInverseTranspose gl_ModelViewMatrixTranspose gl_ModelViewProjectionMatrix gl_ModelViewProjectionMatrixInverse gl_ModelViewProjectionMatrixInverseTranspose gl_ModelViewProjectionMatrixTranspose gl_MultiTexCoord0 gl_MultiTexCoord1 gl_MultiTexCoord2 gl_MultiTexCoord3 gl_MultiTexCoord4 gl_MultiTexCoord5 gl_MultiTexCoord6 gl_MultiTexCoord7 gl_Normal gl_NormalMatrix gl_NormalScale gl_NumSamples gl_NumWorkGroups gl_ObjectPlaneQ gl_ObjectPlaneR gl_ObjectPlaneS gl_ObjectPlaneT gl_PatchVerticesIn gl_Point gl_PointCoord gl_PointSize gl_Position gl_PrimitiveID gl_PrimitiveIDIn gl_ProjectionMatrix gl_ProjectionMatrixInverse gl_ProjectionMatrixInverseTranspose gl_ProjectionMatrixTranspose gl_SampleID gl_SampleMask gl_SampleMaskIn gl_SamplePosition gl_SecondaryColor gl_TessCoord gl_TessLevelInner gl_TessLevelOuter gl_TexCoord gl_TextureEnvColor gl_TextureMatrix gl_TextureMatrixInverse gl_TextureMatrixInverseTranspose gl_TextureMatrixTranspose gl_Vertex gl_VertexID gl_ViewportIndex gl_WorkGroupID gl_WorkGroupSize gl_in gl_out EmitStreamVertex EmitVertex EndPrimitive EndStreamPrimitive abs acos acosh all any asin asinh atan atanh atomicAdd atomicAnd atomicCompSwap atomicCounter atomicCounterDecrement atomicCounterIncrement atomicExchange atomicMax atomicMin atomicOr atomicXor barrier bitCount bitfieldExtract bitfieldInsert bitfieldReverse ceil clamp cos cosh cross dFdx dFdy degrees determinant distance dot equal exp exp2 faceforward findLSB findMSB floatBitsToInt floatBitsToUint floor fma fract frexp ftransform fwidth greaterThan greaterThanEqual groupMemoryBarrier imageAtomicAdd imageAtomicAnd imageAtomicCompSwap imageAtomicExchange imageAtomicMax imageAtomicMin imageAtomicOr imageAtomicXor imageLoad imageSize imageStore imulExtended intBitsToFloat interpolateAtCentroid interpolateAtOffset interpolateAtSample inverse inversesqrt isinf isnan ldexp length lessThan lessThanEqual log log2 matrixCompMult max memoryBarrier memoryBarrierAtomicCounter memoryBarrierBuffer memoryBarrierImage memoryBarrierShared min mix mod modf noise1 noise2 noise3 noise4 normalize not notEqual outerProduct packDouble2x32 packHalf2x16 packSnorm2x16 packSnorm4x8 packUnorm2x16 packUnorm4x8 pow radians reflect refract round roundEven shadow1D shadow1DLod shadow1DProj shadow1DProjLod shadow2D shadow2DLod shadow2DProj shadow2DProjLod sign sin sinh smoothstep sqrt step tan tanh texelFetch texelFetchOffset texture texture1D texture1DLod texture1DProj texture1DProjLod texture2D texture2DLod texture2DProj texture2DProjLod texture3D texture3DLod texture3DProj texture3DProjLod textureCube textureCubeLod textureGather textureGatherOffset textureGatherOffsets textureGrad textureGradOffset textureLod textureLodOffset textureOffset textureProj textureProjGrad textureProjGradOffset textureProjLod textureProjLodOffset textureProjOffset textureQueryLevels textureQueryLod textureSize transpose trunc uaddCarry uintBitsToFloat umulExtended unpackDouble2x32 unpackHalf2x16 unpackSnorm2x16 unpackSnorm4x8 unpackUnorm2x16 unpackUnorm4x8 usubBorrow",
        literal: "true false",
      },
      illegal: '"',
      contains: [
        e.C_LINE_COMMENT_MODE,
        e.C_BLOCK_COMMENT_MODE,
        e.C_NUMBER_MODE,
        {
          className: "meta",
          begin: "#",
          end: "$",
        },
      ],
    });
  })()
);
hljs.registerLanguage(
  "scss",
  (() => {
    "use strict";
    const e = [
        "a",
        "abbr",
        "address",
        "article",
        "aside",
        "audio",
        "b",
        "blockquote",
        "body",
        "button",
        "canvas",
        "caption",
        "cite",
        "code",
        "dd",
        "del",
        "details",
        "dfn",
        "div",
        "dl",
        "dt",
        "em",
        "fieldset",
        "figcaption",
        "figure",
        "footer",
        "form",
        "h1",
        "h2",
        "h3",
        "h4",
        "h5",
        "h6",
        "header",
        "hgroup",
        "html",
        "i",
        "iframe",
        "img",
        "input",
        "ins",
        "kbd",
        "label",
        "legend",
        "li",
        "main",
        "mark",
        "menu",
        "nav",
        "object",
        "ol",
        "p",
        "q",
        "quote",
        "samp",
        "section",
        "span",
        "strong",
        "summary",
        "sup",
        "table",
        "tbody",
        "td",
        "textarea",
        "tfoot",
        "th",
        "thead",
        "time",
        "tr",
        "ul",
        "var",
        "video",
      ],
      t = [
        "any-hover",
        "any-pointer",
        "aspect-ratio",
        "color",
        "color-gamut",
        "color-index",
        "device-aspect-ratio",
        "device-height",
        "device-width",
        "display-mode",
        "forced-colors",
        "grid",
        "height",
        "hover",
        "inverted-colors",
        "monochrome",
        "orientation",
        "overflow-block",
        "overflow-inline",
        "pointer",
        "prefers-color-scheme",
        "prefers-contrast",
        "prefers-reduced-motion",
        "prefers-reduced-transparency",
        "resolution",
        "scan",
        "scripting",
        "update",
        "width",
        "min-width",
        "max-width",
        "min-height",
        "max-height",
      ],
      i = [
        "active",
        "any-link",
        "blank",
        "checked",
        "current",
        "default",
        "defined",
        "dir",
        "disabled",
        "drop",
        "empty",
        "enabled",
        "first",
        "first-child",
        "first-of-type",
        "fullscreen",
        "future",
        "focus",
        "focus-visible",
        "focus-within",
        "has",
        "host",
        "host-context",
        "hover",
        "indeterminate",
        "in-range",
        "invalid",
        "is",
        "lang",
        "last-child",
        "last-of-type",
        "left",
        "link",
        "local-link",
        "not",
        "nth-child",
        "nth-col",
        "nth-last-child",
        "nth-last-col",
        "nth-last-of-type",
        "nth-of-type",
        "only-child",
        "only-of-type",
        "optional",
        "out-of-range",
        "past",
        "placeholder-shown",
        "read-only",
        "read-write",
        "required",
        "right",
        "root",
        "scope",
        "target",
        "target-within",
        "user-invalid",
        "valid",
        "visited",
        "where",
      ],
      r = [
        "after",
        "backdrop",
        "before",
        "cue",
        "cue-region",
        "first-letter",
        "first-line",
        "grammar-error",
        "marker",
        "part",
        "placeholder",
        "selection",
        "slotted",
        "spelling-error",
      ],
      o = [
        "align-content",
        "align-items",
        "align-self",
        "animation",
        "animation-delay",
        "animation-direction",
        "animation-duration",
        "animation-fill-mode",
        "animation-iteration-count",
        "animation-name",
        "animation-play-state",
        "animation-timing-function",
        "auto",
        "backface-visibility",
        "background",
        "background-attachment",
        "background-clip",
        "background-color",
        "background-image",
        "background-origin",
        "background-position",
        "background-repeat",
        "background-size",
        "border",
        "border-bottom",
        "border-bottom-color",
        "border-bottom-left-radius",
        "border-bottom-right-radius",
        "border-bottom-style",
        "border-bottom-width",
        "border-collapse",
        "border-color",
        "border-image",
        "border-image-outset",
        "border-image-repeat",
        "border-image-slice",
        "border-image-source",
        "border-image-width",
        "border-left",
        "border-left-color",
        "border-left-style",
        "border-left-width",
        "border-radius",
        "border-right",
        "border-right-color",
        "border-right-style",
        "border-right-width",
        "border-spacing",
        "border-style",
        "border-top",
        "border-top-color",
        "border-top-left-radius",
        "border-top-right-radius",
        "border-top-style",
        "border-top-width",
        "border-width",
        "bottom",
        "box-decoration-break",
        "box-shadow",
        "box-sizing",
        "break-after",
        "break-before",
        "break-inside",
        "caption-side",
        "clear",
        "clip",
        "clip-path",
        "color",
        "column-count",
        "column-fill",
        "column-gap",
        "column-rule",
        "column-rule-color",
        "column-rule-style",
        "column-rule-width",
        "column-span",
        "column-width",
        "columns",
        "content",
        "counter-increment",
        "counter-reset",
        "cursor",
        "direction",
        "display",
        "empty-cells",
        "filter",
        "flex",
        "flex-basis",
        "flex-direction",
        "flex-flow",
        "flex-grow",
        "flex-shrink",
        "flex-wrap",
        "float",
        "font",
        "font-display",
        "font-family",
        "font-feature-settings",
        "font-kerning",
        "font-language-override",
        "font-size",
        "font-size-adjust",
        "font-stretch",
        "font-style",
        "font-variant",
        "font-variant-ligatures",
        "font-variation-settings",
        "font-weight",
        "height",
        "hyphens",
        "icon",
        "image-orientation",
        "image-rendering",
        "image-resolution",
        "ime-mode",
        "inherit",
        "initial",
        "justify-content",
        "left",
        "letter-spacing",
        "line-height",
        "list-style",
        "list-style-image",
        "list-style-position",
        "list-style-type",
        "margin",
        "margin-bottom",
        "margin-left",
        "margin-right",
        "margin-top",
        "marks",
        "mask",
        "max-height",
        "max-width",
        "min-height",
        "min-width",
        "nav-down",
        "nav-index",
        "nav-left",
        "nav-right",
        "nav-up",
        "none",
        "normal",
        "object-fit",
        "object-position",
        "opacity",
        "order",
        "orphans",
        "outline",
        "outline-color",
        "outline-offset",
        "outline-style",
        "outline-width",
        "overflow",
        "overflow-wrap",
        "overflow-x",
        "overflow-y",
        "padding",
        "padding-bottom",
        "padding-left",
        "padding-right",
        "padding-top",
        "page-break-after",
        "page-break-before",
        "page-break-inside",
        "perspective",
        "perspective-origin",
        "pointer-events",
        "position",
        "quotes",
        "resize",
        "right",
        "src",
        "tab-size",
        "table-layout",
        "text-align",
        "text-align-last",
        "text-decoration",
        "text-decoration-color",
        "text-decoration-line",
        "text-decoration-style",
        "text-indent",
        "text-overflow",
        "text-rendering",
        "text-shadow",
        "text-transform",
        "text-underline-position",
        "top",
        "transform",
        "transform-origin",
        "transform-style",
        "transition",
        "transition-delay",
        "transition-duration",
        "transition-property",
        "transition-timing-function",
        "unicode-bidi",
        "vertical-align",
        "visibility",
        "white-space",
        "widows",
        "width",
        "word-break",
        "word-spacing",
        "word-wrap",
        "z-index",
      ].reverse();
    return (a) => {
      const n = ((e) => ({
          IMPORTANT: { className: "meta", begin: "!important" },
          HEXCOLOR: {
            className: "number",
            begin: "#([a-fA-F0-9]{6}|[a-fA-F0-9]{3})",
          },
          ATTRIBUTE_SELECTOR_MODE: {
            className: "selector-attr",
            begin: /\[/,
            end: /\]/,
            illegal: "$",
            contains: [e.APOS_STRING_MODE, e.QUOTE_STRING_MODE],
          },
        }))(a),
        l = r,
        s = i,
        d = "@[a-z-]+",
        c = { className: "variable", begin: "(\\$[a-zA-Z-][a-zA-Z0-9_-]*)\\b" };
      return {
        name: "SCSS",
        case_insensitive: !0,
        illegal: "[=/|']",
        contains: [
          a.C_LINE_COMMENT_MODE,
          a.C_BLOCK_COMMENT_MODE,
          {
            className: "selector-id",
            begin: "#[A-Za-z0-9_-]+",
            relevance: 0,
          },
          {
            className: "selector-class",
            begin: "\\.[A-Za-z0-9_-]+",
            relevance: 0,
          },
          n.ATTRIBUTE_SELECTOR_MODE,
          {
            className: "selector-tag",
            begin: "\\b(" + e.join("|") + ")\\b",
            relevance: 0,
          },
          { className: "selector-pseudo", begin: ":(" + s.join("|") + ")" },
          { className: "selector-pseudo", begin: "::(" + l.join("|") + ")" },
          c,
          { begin: /\(/, end: /\)/, contains: [a.CSS_NUMBER_MODE] },
          { className: "attribute", begin: "\\b(" + o.join("|") + ")\\b" },
          {
            begin:
              "\\b(whitespace|wait|w-resize|visible|vertical-text|vertical-ideographic|uppercase|upper-roman|upper-alpha|underline|transparent|top|thin|thick|text|text-top|text-bottom|tb-rl|table-header-group|table-footer-group|sw-resize|super|strict|static|square|solid|small-caps|separate|se-resize|scroll|s-resize|rtl|row-resize|ridge|right|repeat|repeat-y|repeat-x|relative|progress|pointer|overline|outside|outset|oblique|nowrap|not-allowed|normal|none|nw-resize|no-repeat|no-drop|newspaper|ne-resize|n-resize|move|middle|medium|ltr|lr-tb|lowercase|lower-roman|lower-alpha|loose|list-item|line|line-through|line-edge|lighter|left|keep-all|justify|italic|inter-word|inter-ideograph|inside|inset|inline|inline-block|inherit|inactive|ideograph-space|ideograph-parenthesis|ideograph-numeric|ideograph-alpha|horizontal|hidden|help|hand|groove|fixed|ellipsis|e-resize|double|dotted|distribute|distribute-space|distribute-letter|distribute-all-lines|disc|disabled|default|decimal|dashed|crosshair|collapse|col-resize|circle|char|center|capitalize|break-word|break-all|bottom|both|bolder|bold|block|bidi-override|below|baseline|auto|always|all-scroll|absolute|table|table-cell)\\b",
          },
          {
            begin: ":",
            end: ";",
            contains: [
              c,
              n.HEXCOLOR,
              a.CSS_NUMBER_MODE,
              a.QUOTE_STRING_MODE,
              a.APOS_STRING_MODE,
              n.IMPORTANT,
            ],
          },
          {
            begin: "@(page|font-face)",
            lexemes: d,
            keywords: "@page @font-face",
          },
          {
            begin: "@",
            end: "[{;]",
            returnBegin: !0,
            keywords: {
              $pattern: /[a-z-]+/,
              keyword: "and or not only",
              attribute: t.join(" "),
            },
            contains: [
              { begin: d, className: "keyword" },
              { begin: /[a-z-]+(?=:)/, className: "attribute" },
              c,
              a.QUOTE_STRING_MODE,
              a.APOS_STRING_MODE,
              n.HEXCOLOR,
              a.CSS_NUMBER_MODE,
            ],
          },
        ],
      };
    };
  })()
);
hljs.registerLanguage(
  "javascript",
  (() => {
    "use strict";
    const e = "[A-Za-z$_][0-9A-Za-z$_]*",
      n = [
        "as",
        "in",
        "of",
        "if",
        "for",
        "while",
        "finally",
        "var",
        "new",
        "function",
        "do",
        "return",
        "void",
        "else",
        "break",
        "catch",
        "instanceof",
        "with",
        "throw",
        "case",
        "default",
        "try",
        "switch",
        "continue",
        "typeof",
        "delete",
        "let",
        "yield",
        "const",
        "class",
        "debugger",
        "async",
        "await",
        "static",
        "import",
        "from",
        "export",
        "extends",
      ],
      a = ["true", "false", "null", "undefined", "NaN", "Infinity"],
      s = [].concat(
        [
          "setInterval",
          "setTimeout",
          "clearInterval",
          "clearTimeout",
          "require",
          "exports",
          "eval",
          "isFinite",
          "isNaN",
          "parseFloat",
          "parseInt",
          "decodeURI",
          "decodeURIComponent",
          "encodeURI",
          "encodeURIComponent",
          "escape",
          "unescape",
        ],
        [
          "arguments",
          "this",
          "super",
          "console",
          "window",
          "document",
          "localStorage",
          "module",
          "global",
        ],
        [
          "Intl",
          "DataView",
          "Number",
          "Math",
          "Date",
          "String",
          "RegExp",
          "Object",
          "Function",
          "Boolean",
          "Error",
          "Symbol",
          "Set",
          "Map",
          "WeakSet",
          "WeakMap",
          "Proxy",
          "Reflect",
          "JSON",
          "Promise",
          "Float64Array",
          "Int16Array",
          "Int32Array",
          "Int8Array",
          "Uint16Array",
          "Uint32Array",
          "Float32Array",
          "Array",
          "Uint8Array",
          "Uint8ClampedArray",
          "ArrayBuffer",
        ],
        [
          "EvalError",
          "InternalError",
          "RangeError",
          "ReferenceError",
          "SyntaxError",
          "TypeError",
          "URIError",
        ]
      );
    function r(e) {
      return t("(?=", e, ")");
    }
    function t(...e) {
      return e
        .map((e) => {
          return (n = e) ? ("string" == typeof n ? n : n.source) : null;
          var n;
        })
        .join("");
    }
    return (i) => {
      const c = e,
        o = {
          begin: /<[A-Za-z0-9\\._:-]+/,
          end: /\/[A-Za-z0-9\\._:-]+>|\/>/,
          isTrulyOpeningTag: (e, n) => {
            const a = e[0].length + e.index,
              s = e.input[a];
            "<" !== s
              ? ">" === s &&
                (((e, { after: n }) => {
                  const a = "</" + e[0].slice(1);
                  return -1 !== e.input.indexOf(a, n);
                })(e, { after: a }) ||
                  n.ignoreMatch())
              : n.ignoreMatch();
          },
        },
        l = { $pattern: e, keyword: n, literal: a, built_in: s },
        b = "\\.([0-9](_?[0-9])*)",
        g = "0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*",
        d = {
          className: "number",
          variants: [
            {
              begin: `(\\b(${g})((${b})|\\.)?|(${b}))[eE][+-]?([0-9](_?[0-9])*)\\b`,
            },
            {
              begin: `\\b(${g})\\b((${b})\\b|\\.)?|(${b})\\b`,
            },
            {
              begin: "\\b(0|[1-9](_?[0-9])*)n\\b",
            },
            {
              begin: "\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b",
            },
            {
              begin: "\\b0[bB][0-1](_?[0-1])*n?\\b",
            },
            { begin: "\\b0[oO][0-7](_?[0-7])*n?\\b" },
            {
              begin: "\\b0[0-7]+n?\\b",
            },
          ],
          relevance: 0,
        },
        E = {
          className: "subst",
          begin: "\\$\\{",
          end: "\\}",
          keywords: l,
          contains: [],
        },
        u = {
          begin: "html`",
          end: "",
          starts: {
            end: "`",
            returnEnd: !1,
            contains: [i.BACKSLASH_ESCAPE, E],
            subLanguage: "xml",
          },
        },
        _ = {
          begin: "css`",
          end: "",
          starts: {
            end: "`",
            returnEnd: !1,
            contains: [i.BACKSLASH_ESCAPE, E],
            subLanguage: "css",
          },
        },
        m = {
          className: "string",
          begin: "`",
          end: "`",
          contains: [i.BACKSLASH_ESCAPE, E],
        },
        N = {
          className: "comment",
          variants: [
            i.COMMENT(/\/\*\*(?!\/)/, "\\*/", {
              relevance: 0,
              contains: [
                {
                  className: "doctag",
                  begin: "@[A-Za-z]+",
                  contains: [
                    {
                      className: "type",
                      begin: "\\{",
                      end: "\\}",
                      relevance: 0,
                    },
                    {
                      className: "variable",
                      begin: c + "(?=\\s*(-)|$)",
                      endsParent: !0,
                      relevance: 0,
                    },
                    { begin: /(?=[^\n])\s/, relevance: 0 },
                  ],
                },
              ],
            }),
            i.C_BLOCK_COMMENT_MODE,
            i.C_LINE_COMMENT_MODE,
          ],
        },
        y = [
          i.APOS_STRING_MODE,
          i.QUOTE_STRING_MODE,
          u,
          _,
          m,
          d,
          i.REGEXP_MODE,
        ];
      E.contains = y.concat({
        begin: /\{/,
        end: /\}/,
        keywords: l,
        contains: ["self"].concat(y),
      });
      const f = [].concat(N, E.contains),
        A = f.concat([
          { begin: /\(/, end: /\)/, keywords: l, contains: ["self"].concat(f) },
        ]),
        p = {
          className: "params",
          begin: /\(/,
          end: /\)/,
          excludeBegin: !0,
          excludeEnd: !0,
          keywords: l,
          contains: A,
        };
      return {
        name: "Javascript",
        aliases: ["js", "jsx", "mjs", "cjs"],
        keywords: l,
        exports: { PARAMS_CONTAINS: A },
        illegal: /#(?![$_A-z])/,
        contains: [
          i.SHEBANG({ label: "shebang", binary: "node", relevance: 5 }),
          {
            label: "use_strict",
            className: "meta",
            relevance: 10,
            begin: /^\s*['"]use (strict|asm)['"]/,
          },
          i.APOS_STRING_MODE,
          i.QUOTE_STRING_MODE,
          u,
          _,
          m,
          N,
          d,
          {
            begin: t(
              /[{,\n]\s*/,
              r(t(/(((\/\/.*$)|(\/\*(\*[^/]|[^*])*\*\/))\s*)*/, c + "\\s*:"))
            ),
            relevance: 0,
            contains: [
              { className: "attr", begin: c + r("\\s*:"), relevance: 0 },
            ],
          },
          {
            begin: "(" + i.RE_STARTERS_RE + "|\\b(case|return|throw)\\b)\\s*",
            keywords: "return throw case",
            contains: [
              N,
              i.REGEXP_MODE,
              {
                className: "function",
                begin:
                  "(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|" +
                  i.UNDERSCORE_IDENT_RE +
                  ")\\s*=>",
                returnBegin: !0,
                end: "\\s*=>",
                contains: [
                  {
                    className: "params",
                    variants: [
                      {
                        begin: i.UNDERSCORE_IDENT_RE,
                        relevance: 0,
                      },
                      { className: null, begin: /\(\s*\)/, skip: !0 },
                      {
                        begin: /\(/,
                        end: /\)/,
                        excludeBegin: !0,
                        excludeEnd: !0,
                        keywords: l,
                        contains: A,
                      },
                    ],
                  },
                ],
              },
              { begin: /,/, relevance: 0 },
              { className: "", begin: /\s/, end: /\s*/, skip: !0 },
              {
                variants: [
                  { begin: "<>", end: "</>" },
                  {
                    begin: o.begin,
                    "on:begin": o.isTrulyOpeningTag,
                    end: o.end,
                  },
                ],
                subLanguage: "xml",
                contains: [
                  { begin: o.begin, end: o.end, skip: !0, contains: ["self"] },
                ],
              },
            ],
            relevance: 0,
          },
          {
            className: "function",
            beginKeywords: "function",
            end: /[{;]/,
            excludeEnd: !0,
            keywords: l,
            contains: ["self", i.inherit(i.TITLE_MODE, { begin: c }), p],
            illegal: /%/,
          },
          {
            beginKeywords: "while if switch catch for",
          },
          {
            className: "function",
            begin:
              i.UNDERSCORE_IDENT_RE +
              "\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{",
            returnBegin: !0,
            contains: [p, i.inherit(i.TITLE_MODE, { begin: c })],
          },
          {
            variants: [
              {
                begin: "\\." + c,
              },
              { begin: "\\$" + c },
            ],
            relevance: 0,
          },
          {
            className: "class",
            beginKeywords: "class",
            end: /[{;=]/,
            excludeEnd: !0,
            illegal: /[:"[\]]/,
            contains: [
              {
                beginKeywords: "extends",
              },
              i.UNDERSCORE_TITLE_MODE,
            ],
          },
          {
            begin: /\b(?=constructor)/,
            end: /[{;]/,
            excludeEnd: !0,
            contains: [i.inherit(i.TITLE_MODE, { begin: c }), "self", p],
          },
          {
            begin: "(get|set)\\s+(?=" + c + "\\()",
            end: /\{/,
            keywords: "get set",
            contains: [
              i.inherit(i.TITLE_MODE, { begin: c }),
              { begin: /\(\)/ },
              p,
            ],
          },
          { begin: /\$[(.]/ },
        ],
      };
    };
  })()
);
