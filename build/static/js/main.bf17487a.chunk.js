(this.webpackJsonpproject_1 = this.webpackJsonpproject_1 || []).push([
  [0],
  {
    150: function (e, t, a) {},
    151: function (e, t, a) {},
    184: function (e, t, a) {
      e.exports = a(575);
    },
    190: function (e, t, a) {},
    191: function (e, t, a) {},
    192: function (e, t, a) {},
    193: function (e, t, a) {},
    194: function (e, t, a) {},
    2: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, "validatePassword", function () {
          return o;
        }),
        a.d(t, "post", function () {
          return f;
        }),
        a.d(t, "AppColors", function () {
          return E;
        });
      var n = a(20),
        r = a(21),
        l = a(96),
        c = a(7),
        s = a(173),
        i = a.n(s),
        m = a(97),
        u = a.n(m);
      function o(e) {
        var t,
          a = 0,
          n = 0,
          r = 0;
        e.length < 6 && (t = 0);
        for (var l = 0; l < e.length; l++)
          e[l] >= "a" && e[l] <= "z"
            ? n++
            : e[l] >= "A" && e[l] <= "Z"
            ? a++
            : e[l] >= 0 && e[l] <= 9 && r++;
        return { caps: a, lows: n, nums: r, length: t };
      }
      var d = i.a.create({ withCredentials: !0 });
      function f(e, t, a) {
        return new Promise(function (n, r) {
          t || (t = {}),
            a || (a = {}),
            d
              .post(e, t, a)
              .then(function (e) {
                var t = e.data;
                if (!1 === t.access) {
                  var a = new Event("session");
                  (a.data = t), window.dispatchEvent(a);
                } else n(t);
              })
              .catch(function (e) {
                r(e);
              });
        });
      }
      var E = (function () {
        function e() {
          Object(n.a)(this, e);
        }
        return (
          Object(r.a)(e, null, [
            {
              key: "random255",
              value: function (e) {
                return Math.ceil(Math.random() * e);
              },
            },
            {
              key: "randomRGB",
              value: function (t) {
                return {
                  r: e.random255(t),
                  g: e.random255(t),
                  b: e.random255(t),
                };
              },
            },
            {
              key: "rgbToYIQ",
              value: function (e) {
                return (299 * e.r + 587 * e.g + 114 * e.b) / 1e3;
              },
            },
            {
              key: "contrast",
              value: function (t) {
                var a =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : 128;
                return void 0 === t || void 0 === t || e.rgbToYIQ(t) >= a
                  ? "#000"
                  : "#fff";
              },
            },
            {
              key: "generateRandomMatchingColors",
              value: function (t) {
                var a = this.randomRGB(t ? 153 : 255),
                  n = e.contrast(a);
                return {
                  bc: "rgb("
                    .concat(a.r, ", ")
                    .concat(a.g, ", ")
                    .concat(a.b, ")"),
                  c: n,
                };
              },
            },
          ]),
          e
        );
      })();
      function p(e) {
        var t =
            !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          a = e && new Date(e);
        if (!a) return "";
        var n = a.getFullYear(),
          r = a.getMonth() + 1;
        r < 10 && (r = "0".concat(r));
        var l = a.getDate();
        l < 10 && (l = "0".concat(l));
        var c = "".concat(l, "/").concat(r, "/").concat(n);
        if (t) {
          var s = a.getHours();
          s < 10 && (s = "0".concat(s));
          var i = a.getMinutes();
          i < 10 && (i = "0".concat(i)),
            (c = "".concat(c, " ").concat(s, ":").concat(i));
        }
        return c;
      }
      var b = {
        validatePassword: o,
        generatePassword: function (e) {
          for (
            var t = e || 8, a = "abcdefghjkmnopqrstuvwxyz", n = "", r = "";
            n.length < t;

          ) {
            var l = Math.ceil(a.length * Math.random() * Math.random()),
              c = Math.ceil(
                "0123456789".length * Math.random() * Math.random()
              ),
              s = Math.ceil("@".length * Math.random() * Math.random());
            (r += a.charAt(l)),
              (r += "0123456789".charAt(c)),
              (n = r += "@".charAt(s));
          }
          return (n = n
            .split("")
            .sort(function () {
              return 0.5 - Math.random();
            })
            .join("")).substr(0, t);
        },
        secureAndConvertStringToRegex: function (e, t) {
          return (
            t || (t = []),
            "string" === typeof e &&
              Object(l.a)(
                RegExp,
                [e.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&")].concat(
                  Object(c.a)(t)
                )
              )
          );
        },
        post: f,
        AppColors: E,
        toFixed: function (e, t) {
          return (
            (e = "number" === typeof e ? Math.floor(100 * e) / 100 : e),
            u()(e).format("0.[00]")
          );
        },
        fn: function (e) {
          return (
            (e = "number" === typeof e ? Math.floor(100 * e) / 100 : e),
            u()(e).format("0,0.[00]").replace(/\,/g, " ")
          );
        },
        roundDecimal: function (e) {
          return e;
        },
        ftd: p,
        formatTimeToHTMLDate: function () {
          var e = Object(l.a)(Date, Array.prototype.slice.call(arguments)),
            t = e.getFullYear(),
            a = e.getMonth() + 1;
          a < 10 && (a = "0".concat(a));
          var n = e.getDate();
          return (
            n < 10 && (n = "0".concat(n)),
            e && "".concat(t, "-").concat(a, "-").concat(n)
          );
        },
        returnDateIntervalMessage: function (e, t) {
          var a = "";
          return (
            e &&
              (a = ""
                .concat(a)
                .concat(t ? "de " : "")
                .concat(p(e, !1))),
            t && (a = "".concat(a, " \xe0 ").concat(p(t, !1))),
            a
          );
        },
        getLocation: function () {
          return new Promise(function (e) {
            navigator.geolocation.getCurrentPosition(
              function (t) {
                var a = [t.coords.latitude, t.coords.longitude];
                e(a);
              },
              function (t) {
                e(void 0);
              }
            );
          });
        },
      };
      t.default = b;
    },
    216: function (e, t, a) {},
    217: function (e, t, a) {},
    218: function (e, t, a) {},
    219: function (e, t, a) {},
    220: function (e, t, a) {},
    221: function (e, t, a) {},
    222: function (e, t, a) {},
    228: function (e, t, a) {},
    229: function (e, t, a) {},
    230: function (e, t, a) {},
    231: function (e, t, a) {},
    232: function (e, t, a) {},
    233: function (e, t, a) {},
    234: function (e, t, a) {},
    235: function (e, t, a) {},
    236: function (e, t, a) {},
    341: function (e, t, a) {},
    342: function (e, t, a) {},
    343: function (e, t, a) {},
    344: function (e, t, a) {},
    345: function (e, t, a) {},
    346: function (e, t, a) {},
    347: function (e, t, a) {},
    348: function (e, t, a) {},
    377: function (e, t, a) {},
    378: function (e, t, a) {},
    379: function (e, t, a) {},
    380: function (e, t, a) {},
    381: function (e, t, a) {},
    384: function (e, t, a) {},
    385: function (e, t, a) {},
    386: function (e, t, a) {},
    387: function (e, t, a) {},
    388: function (e, t, a) {},
    389: function (e, t, a) {},
    390: function (e, t, a) {},
    391: function (e, t, a) {},
    392: function (e, t, a) {},
    393: function (e, t, a) {},
    394: function (e, t, a) {},
    395: function (e, t, a) {},
    396: function (e, t, a) {},
    397: function (e, t, a) {},
    398: function (e, t, a) {},
    399: function (e, t, a) {},
    400: function (e, t, a) {},
    401: function (e, t, a) {},
    402: function (e, t, a) {},
    403: function (e, t, a) {},
    404: function (e, t, a) {},
    405: function (e, t, a) {},
    406: function (e, t, a) {},
    407: function (e, t, a) {},
    408: function (e, t, a) {},
    409: function (e, t, a) {},
    52: function (e, t, a) {
      var n = a(2).default;
      var r = {
        getCategories: function (e) {
          return new Promise(function (t, a) {
            e.skip || (e.skip = 0),
              n
                .post("/admin/vendeurs/getCategories", e)
                .then(function (e) {
                  t(e);
                })
                .catch(function (e) {
                  a(e);
                });
          });
        },
        getArticles: function (e) {
          return new Promise(function (t, a) {
            e.skip || (e.skip = 0),
              n
                .post("/admin/vendeurs/getArticles", e)
                .then(function (e) {
                  t(e);
                })
                .catch(function (e) {
                  a(e);
                });
          });
        },
        getClients: function (e) {
          return new Promise(function (t, a) {
            e.skip || (e.skip = 0),
              n
                .post("/admin/vendeurs/getClients", e)
                .then(function (e) {
                  t(e);
                })
                .catch(function (e) {
                  a(e);
                });
          });
        },
      };
      e.exports = r;
    },
    566: function (e, t, a) {},
    567: function (e, t, a) {},
    568: function (e, t, a) {},
    569: function (e, t, a) {},
    570: function (e, t, a) {},
    571: function (e, t, a) {},
    572: function (e, t, a) {},
    573: function (e, t, a) {},
    574: function (e, t, a) {},
    575: function (e, t, a) {
      "use strict";
      a.r(t);
      var n = a(0),
        r = a.n(n),
        l = a(95),
        c = a.n(l),
        s = (a(189), a(190), a(191), a(192), a(6)),
        i = a(13),
        m = (a(193), a(3)),
        u = (a(194), a(2)),
        o = function () {
          var e = Object(i.g)();
          return r.a.createElement(
            "div",
            {
              className: "Btn logoutBtn refresh-btn",
              onClick: function () {
                u.default
                  .post("/admin/session/logout", {}, { resolve: !0 })
                  .then(function (t) {
                    !1 === t.logged && e.push("/");
                  });
              },
            },
            r.a.createElement("i", { className: "fas fa-sign-out" })
          );
        },
        d = a(1),
        f =
          (a(216),
          function () {
            return r.a.createElement(
              "div",
              { className: "modern-loader-ret" },
              r.a.createElement(
                "div",
                { className: "modern-loader" },
                r.a.createElement("span", null, "Loading...")
              )
            );
          }),
        E = r.a.createContext(),
        p = function (e) {
          var t = e.children,
            a = Object(i.g)(),
            l = Object(n.useState)({}),
            c = Object(m.a)(l, 2),
            s = c[0],
            o = c[1];
          return (
            Object(n.useEffect)(function () {
              s.session ||
                s.netError ||
                u.default
                  .post("/admin/session")
                  .then(function (e) {
                    e.logged
                      ? o(function (t) {
                          return (t.session = e), Object(d.a)({}, t);
                        })
                      : a.push("/");
                  })
                  .catch(function (e) {
                    o(function (e) {
                      return (e.netError = !0), Object(d.a)({}, e);
                    });
                  });
            }),
            s.session
              ? r.a.createElement(E.Provider, { value: [s, o] }, t)
              : s.netError
              ? r.a.createElement("div", null, "erreur de connexion")
              : r.a.createElement(f, null)
          );
        },
        b = function () {
          return Object(n.useContext)(E);
        },
        v = function () {
          var e = b(),
            t = Object(m.a)(e, 2)[1];
          return r.a.createElement(
            "div",
            {
              className: "refresh-btn",
              tabIndex: 0,
              onClick: function () {
                t(function (e) {
                  return {};
                });
              },
            },
            r.a.createElement("i", { className: "fas fa-sync" })
          );
        },
        g = function () {
          var e = (localStorage && localStorage.getItem("theme")) || "light",
            t = Object(n.useState)({ theme: e }),
            a = Object(m.a)(t, 2),
            l = a[0],
            c = a[1];
          return (
            Object(n.useEffect)(
              function () {
                document.body.classList = l.theme;
              },
              [l]
            ),
            r.a.createElement(
              "div",
              {
                className: "refresh-btn",
                tabIndex: 0,
                onClick: function () {
                  c(function (e) {
                    return (
                      "dark" === e.theme
                        ? (e.theme = "light")
                        : (e.theme = "dark"),
                      localStorage && localStorage.setItem("theme", e.theme),
                      Object(d.a)({}, e)
                    );
                  });
                },
                style: { margin: "5px 10px" },
              },
              r.a.createElement("i", { className: "fas fa-adjust" })
            )
          );
        },
        h = {
          baseUrl: "/admin",
          defaultPaths: [
            { type: "icon", icon: "home", title: "Accueil", to: "/admin" },
            { title: "Categories", to: "/admin/categories" },
          ],
          clientPaths: [
            { type: "icon", icon: "home", title: "Accueil", to: "/admin" },
            { title: "Clients", to: "/admin/clients" },
          ],
          sellerPaths: [
            { type: "icon", icon: "home", title: "Accueil", to: "/admin" },
            { title: "Vendeurs", to: "/admin/vendeurs" },
          ],
          alertPaths: [
            { type: "icon", icon: "home", title: "Accueil", to: "/admin" },
          ],
          commandsPaths: [
            { type: "icon", icon: "home", title: "Accueil", to: "/admin" },
            { title: "Commandes", to: "/admin/commands" },
          ],
          fullfiledPaths: [
            { type: "icon", icon: "home", title: "Accueil", to: "/admin" },
            { title: "Historique", to: "/admin/commandHistory" },
          ],
          debitPaths: [
            { type: "icon", icon: "home", title: "Accueil", to: "/admin" },
            { title: "Vendeurs", to: "/admin/debitStatus" },
          ],
        },
        N = function () {
          return r.a.createElement(
            "div",
            { className: "user-nav" },
            r.a.createElement(
              "div",
              { className: "user-nav-item" },
              r.a.createElement(
                s.b,
                { className: "user-name-title", to: h.baseUrl },
                "Admin"
              )
            ),
            r.a.createElement(
              "div",
              { className: "user-nav-item btn-group-around" },
              r.a.createElement(v, null),
              r.a.createElement(g, null),
              r.a.createElement(o, null)
            )
          );
        },
        O =
          (a(217),
          a(218),
          function (e) {
            var t = e.paths;
            return r.a.createElement(
              "div",
              { className: "path-nav" },
              Array.isArray(t) &&
                t.map(function (e, a) {
                  return "icon" === e.type
                    ? r.a.createElement(
                        s.b,
                        {
                          key: e.to,
                          to: e.to,
                          className:
                            "path-btn " +
                            (t.length === a + 1 ? "path-btn-current" : ""),
                        },
                        r.a.createElement("i", {
                          className: "fas fa-" + e.icon,
                        })
                      )
                    : r.a.createElement(
                        s.b,
                        { key: e.to, to: e.to, className: "path-nav-item" },
                        e.title
                      );
                })
            );
          }),
        j =
          (a(219),
          function (e) {
            var t = e.children;
            return (
              Object(n.useEffect)(function () {
                window.scroll(0, 0);
              }, []),
              r.a.createElement("div", { className: "simple-container" }, t)
            );
          }),
        y = function () {
          var e = h.defaultPaths.slice(0, 1);
          return r.a.createElement(
            j,
            null,
            r.a.createElement(O, { paths: e }),
            r.a.createElement(
              "div",
              { className: "notfound" },
              r.a.createElement(
                "div",
                { className: "notfound-404" },
                r.a.createElement("h1", null, "404")
              ),
              r.a.createElement("h2", null, "Page n'est pas trouv\xe9"),
              r.a.createElement(
                "p",
                null,
                r.a.createElement(s.b, { to: h.baseUrl }, "Accueil")
              )
            )
          );
        },
        C = function () {
          return r.a.createElement(
            "div",
            {
              style: {
                fontSize: "1em",
                margin: "0px 5px",
                display: "inline-block",
              },
            },
            r.a.createElement("i", { className: "fas fa-spinner fa-spin" })
          );
        },
        k = function (e) {
          var t = e.endPoint,
            a = e.to,
            l = e.stateHook,
            c = Object(m.a)(l, 2),
            i = c[0],
            o = c[1];
          return (
            Object(n.useEffect)(function () {
              u.default.post(t).then(function (e) {
                e.ok &&
                  o(function (t) {
                    return (t.totalDebit = e.totalDebit), Object(d.a)({}, t);
                  });
              });
            }, []),
            r.a.createElement(
              s.b,
              { to: a, className: "app-card modern-app-card card-c-2" },
              "Credit",
              r.a.createElement(
                "div",
                { className: "card-badge card-alert" },
                r.a.createElement("i", { className: "fas fa-bell" })
              ),
              void 0 === i.totalDebit
                ? r.a.createElement(
                    "div",
                    { className: "card-status card-wait-status" },
                    r.a.createElement(C, null)
                  )
                : i.totalDebit > 0
                ? r.a.createElement(
                    "div",
                    { className: "card-status-long card-danger-status" },
                    u.default.toFixed(i.totalDebit)
                  )
                : r.a.createElement(
                    "div",
                    { className: "card-status card-success-status" },
                    r.a.createElement("i", { className: "fas fa-check" })
                  )
            )
          );
        },
        S = function (e) {
          var t = Object(m.a)(e.stateHook, 2),
            a = t[0],
            l = t[1],
            c = e.config,
            i = c.baseUrl,
            o = c.endPoint;
          return (
            Object(n.useEffect)(function () {
              u.default.post(o).then(function (e) {
                l(function (t) {
                  return (t.cmdCount = e.count), Object(d.a)({}, t);
                });
              });
            }, []),
            r.a.createElement(
              s.b,
              {
                to: i + "/commands",
                className: "app-card modern-app-card card-c-b",
              },
              "Commandes",
              r.a.createElement(
                "div",
                { className: "card-badge" },
                r.a.createElement("i", { className: "fas fa-terminal" })
              ),
              void 0 === a.cmdCount
                ? r.a.createElement(
                    "div",
                    { className: "card-status card-wait-status" },
                    r.a.createElement(C, null)
                  )
                : a.cmdCount > 0
                ? r.a.createElement(
                    "div",
                    { className: "card-status card-danger-status" },
                    a.cmdCount
                  )
                : r.a.createElement(
                    "div",
                    { className: "card-status card-success-status" },
                    r.a.createElement("i", { className: "fas fa-check" })
                  )
            )
          );
        },
        x = function () {
          var e = b(),
            t = Object(m.a)(e, 2),
            a = t[0],
            n = t[1];
          return r.a.createElement(S, {
            stateHook: [a, n],
            config: { endPoint: "/admin/cmd/count", baseUrl: h.baseUrl },
          });
        },
        _ = function () {
          var e = b(),
            t = Object(m.a)(e, 2),
            a = t[0],
            n = t[1];
          return r.a.createElement(
            j,
            null,
            r.a.createElement(
              "div",
              { className: "card-list" },
              r.a.createElement(
                s.b,
                {
                  to: h.baseUrl + "/vendeurs",
                  className: "app-card modern-app-card card-c-6",
                },
                "Vendeurs",
                r.a.createElement(
                  "div",
                  { className: "card-badge" },
                  r.a.createElement("i", { className: "fas fa-user" })
                )
              ),
              r.a.createElement(
                s.b,
                {
                  to: h.baseUrl + "/clients",
                  className: "app-card modern-app-card card-c-7",
                },
                "Clients",
                r.a.createElement(
                  "div",
                  { className: "card-badge" },
                  r.a.createElement("i", { className: "fas fa-star" })
                )
              ),
              r.a.createElement(x, null),
              r.a.createElement(
                s.b,
                {
                  to: h.baseUrl + "/commandHistory",
                  className: "app-card modern-app-card card-c-8",
                },
                "Historique Commandes",
                r.a.createElement(
                  "div",
                  { className: "card-badge" },
                  r.a.createElement("i", { className: "fas fa-history" })
                )
              ),
              r.a.createElement(k, {
                endPoint: "/admin/debit/count",
                to: h.baseUrl + "/debitStatus",
                stateHook: [a, n],
              }),
              r.a.createElement(
                s.b,
                {
                  to: h.baseUrl + "/pay",
                  className: "app-card modern-app-card card-c-a",
                },
                "Encaissement",
                r.a.createElement(
                  "div",
                  { className: "card-badge" },
                  r.a.createElement("i", { className: "fas fa-coins" })
                )
              ),
              r.a.createElement(
                s.b,
                {
                  to: h.baseUrl + "/payments",
                  className: "app-card modern-app-card card-c-3",
                },
                "Historique d'Encaissement",
                r.a.createElement(
                  "div",
                  { className: "card-badge" },
                  r.a.createElement("i", { className: "fas fa-history" })
                )
              )
            )
          );
        },
        A = function () {
          var e = b(),
            t = Object(m.a)(e, 2),
            a = t[0],
            l = t[1];
          Object(n.useEffect)(function () {
            a.vendeurs ||
              u.default.post("/admin/vendeurs/get").then(function (e) {
                l(function (t) {
                  return (t.vendeurs = e), Object(d.a)({}, t);
                });
              });
          }, []);
          var c = h.sellerPaths.slice(0, 1);
          return r.a.createElement(
            j,
            null,
            r.a.createElement(O, { paths: c }),
            a.vendeurs && Array.isArray(a.vendeurs)
              ? r.a.createElement(
                  "div",
                  { className: "card-list" },
                  a.vendeurs.map(function (e) {
                    return r.a.createElement(
                      s.b,
                      {
                        key: e._id,
                        to: h.baseUrl + "/vendeur/" + e._id,
                        className: "app-card",
                      },
                      e.name
                    );
                  })
                )
              : r.a.createElement(f, null)
          );
        },
        w = a(7),
        F = { defaultInputStep: "any" },
        D = function (e) {
          var t = e.history,
            a = e.match,
            l = Object(w.a)(new Array(6).keys()).map(function (e) {
              return r.a.createRef();
            }),
            c = Object(m.a)(l, 4),
            s = c[0],
            i = c[1],
            o = c[2],
            f = c[3],
            E = b(),
            p = Object(m.a)(E, 2),
            v = p[0],
            g = p[1],
            N = a.params.sellerId,
            y = Object(n.useState)({ sellerId: N || "" }),
            k = Object(m.a)(y, 2),
            S = k[0],
            x = k[1];
          Object(n.useEffect)(function () {
            v.vendeurs ||
              u.default.post("/admin/vendeurs/get").then(function (e) {
                g(function (t) {
                  return (t.vendeurs = e), Object(d.a)({}, t);
                }),
                  x(function (e) {
                    return (e.sellerId = N || ""), Object(d.a)({}, e);
                  });
              });
          }, []);
          var _ = h.clientPaths.slice(0, 2);
          return r.a.createElement(
            j,
            null,
            r.a.createElement(O, { paths: _ }),
            r.a.createElement(
              "div",
              { className: "add-page" },
              r.a.createElement(
                "form",
                {
                  className: "add-form",
                  onSubmit: function (e) {
                    e.preventDefault();
                    var a = s.current.value,
                      n = i.current.value,
                      r = parseFloat(o.current.value);
                    (isNaN(r) || r < 0) && (r = 0);
                    for (
                      var l = S.sellerId, c = 0, m = [a, n, r];
                      c < m.length;
                      c++
                    ) {
                      if (!m[c])
                        return (
                          x(function (e) {
                            return (e.error = !0), Object(d.a)({}, e);
                          }),
                          !1
                        );
                    }
                    u.default
                      .post("/admin/clients/add", {
                        name: a,
                        ice: n,
                        plafon: r,
                        sellerId: l,
                      })
                      .then(function (e) {
                        e.ok
                          ? (g(function (t) {
                              return (
                                t.clients && t.clients.unshift(e.insertInfo),
                                Object(d.a)({}, t)
                              );
                            }),
                            t.push(h.baseUrl + "/clients"))
                          : e.error &&
                            (e.errorMessage && alert(e.errorMessage),
                            x(function (t) {
                              return (t.error = e.error), Object(d.a)({}, t);
                            }));
                      });
                  },
                },
                r.a.createElement(
                  "div",
                  { className: "appTitle" },
                  "Ajouter un client"
                ),
                S.error &&
                  r.a.createElement(
                    "div",
                    { className: "error-message" },
                    "Erreur: fixe les champs!"
                  ),
                S.netError &&
                  r.a.createElement(
                    "div",
                    { className: "auth-error" },
                    "Erreur de connexion"
                  ),
                r.a.createElement(
                  "div",
                  { className: "appInput" },
                  r.a.createElement("input", {
                    ref: s,
                    autoFocus: !0,
                    placeholder: "Nom",
                  })
                ),
                r.a.createElement(
                  "div",
                  { className: "appInput" },
                  r.a.createElement("input", {
                    ref: i,
                    placeholder: "Nombre ICE",
                  })
                ),
                r.a.createElement(
                  "div",
                  { className: "appInput" },
                  r.a.createElement("input", {
                    ref: o,
                    type: "number",
                    step: F.defaultInputStep,
                    placeholder: "Plafon",
                  })
                ),
                r.a.createElement(
                  "div",
                  null,
                  "Vendeur:",
                  v.vendeurs
                    ? Array.isArray(v.vendeurs) &&
                        r.a.createElement(
                          "select",
                          {
                            ref: f,
                            value: S.sellerId,
                            onChange: function (e) {
                              x(function (e) {
                                return (
                                  (e.sellerId = f.current.value),
                                  Object(d.a)({}, e)
                                );
                              });
                            },
                          },
                          r.a.createElement("option", { value: "" }),
                          v.vendeurs.map(function (e) {
                            return r.a.createElement(
                              "option",
                              { key: e._id, value: e._id },
                              e.name
                            );
                          })
                        )
                    : r.a.createElement(C, null)
                ),
                r.a.createElement(
                  "label",
                  { tabIndex: 0, className: "submit-btn" },
                  r.a.createElement("input", { type: "submit", hidden: !0 }),
                  "Creer"
                )
              )
            )
          );
        },
        U =
          (a(220),
          function (e) {
            var t = e.onClick,
              a = e.isLoading;
            return r.a.createElement(
              "div",
              {
                className: "flat-btn-small btn-blue show-more-btn",
                onClick: a ? void 0 : t,
              },
              "Afficher plus",
              a && r.a.createElement(C, null)
            );
          }),
        P =
          (a(221),
          function () {
            var e = b(),
              t = Object(m.a)(e, 2),
              a = t[0],
              l = t[1],
              c = Object(n.useState)({}),
              i = Object(m.a)(c, 2),
              o = i[0],
              E = i[1],
              p = Object(n.useState)({ search: "", sellerId: "" }),
              v = Object(m.a)(p, 2),
              g = v[0],
              N = v[1],
              y = Object(n.useState)({}),
              C = Object(m.a)(y, 2),
              k = C[0],
              S = C[1],
              x = r.a.createRef(),
              _ = r.a.createRef();
            function A() {
              var e =
                  !(arguments.length > 0 && void 0 !== arguments[0]) ||
                  arguments[0],
                t = !0 === e ? 0 : a.clients && a.clients.length,
                n = { skip: t, search: g.search, sellerId: g.sellerId };
              E(function (e) {
                return (e.loading = !0), Object(d.a)({}, e);
              }),
                u.default.post("/admin/clients/get", n).then(function (e) {
                  l(function (a) {
                    return (
                      t || (a.clients = []),
                      (a.clients = [].concat(
                        Object(w.a)(a.clients),
                        Object(w.a)(e.clients)
                      )),
                      (a.endClients = e.endClients),
                      Object(d.a)({}, a)
                    );
                  }),
                    E(function (e) {
                      return (e.loading = !1), Object(d.a)({}, e);
                    });
                });
            }
            Object(n.useEffect)(function () {
              a.vendeurs ||
                u.default.post("/admin/vendeurs/get").then(function (e) {
                  l(function (t) {
                    return (t.vendeurs = e), Object(d.a)({}, t);
                  });
                });
            }, []),
              Object(n.useEffect)(A, [k]);
            var F = h.clientPaths.slice(0, 1);
            return r.a.createElement(
              j,
              null,
              r.a.createElement(O, { paths: F }),
              r.a.createElement(
                "form",
                {
                  onSubmit: function (e) {
                    e.preventDefault(), A(!0);
                  },
                },
                Array.isArray(a.vendeurs) &&
                  r.a.createElement(
                    "div",
                    null,
                    "Vendeur:",
                    r.a.createElement(
                      "select",
                      {
                        ref: _,
                        className: "form-control",
                        value: g.sellerId,
                        onChange: function () {
                          N(function (e) {
                            return (
                              (e.sellerId = _.current.value), Object(d.a)({}, e)
                            );
                          }),
                            S(function (e) {
                              return Object(d.a)({}, e);
                            });
                        },
                      },
                      r.a.createElement("option", { value: "" }),
                      a.vendeurs.map(function (e) {
                        return r.a.createElement(
                          "option",
                          { key: e._id, value: e._id },
                          e.name
                        );
                      })
                    )
                  ),
                r.a.createElement(
                  "div",
                  null,
                  "Client:",
                  r.a.createElement("input", {
                    ref: x,
                    className: "form-control",
                    placeholder: "Client",
                    value: g.search,
                    onChange: function (e) {
                      N(function (e) {
                        return (e.search = x.current.value), Object(d.a)({}, e);
                      });
                    },
                  })
                ),
                r.a.createElement("input", { type: "submit", hidden: !0 })
              ),
              a.clients
                ? r.a.createElement(
                    r.a.Fragment,
                    null,
                    r.a.createElement(
                      "div",
                      { className: "card-list" },
                      r.a.createElement(
                        s.b,
                        {
                          to: h.baseUrl + "/addClient",
                          className: "app-card card-add",
                        },
                        r.a.createElement("i", { className: "fas fa-plus" })
                      ),
                      a.clients &&
                        a.clients.map(function (e) {
                          return r.a.createElement(
                            s.b,
                            {
                              key: e._id,
                              to: h.baseUrl + "/client/" + e._id,
                              className: "app-card",
                            },
                            e.name
                          );
                        })
                    ),
                    !a.endClients &&
                      r.a.createElement(U, { isLoading: o.loading, onClick: A })
                  )
                : r.a.createElement(f, null)
            );
          }),
        I = a(15),
        T = a(36),
        H = a.n(T),
        R = (a(222), a(20)),
        q = a(21),
        V = a(27),
        L = a(28),
        M = a(175),
        Q = a.n(M),
        B = function (e) {
          var t = e.title,
            a = e.client,
            l = e.isUpdating,
            c = e.updateFunction,
            s = b(),
            i = Object(m.a)(s, 2),
            o = i[0],
            f = i[1];
          return (
            Object(n.useEffect)(function () {
              l &&
                !o.vendeurs &&
                u.default.post("/admin/vendeurs/get").then(function (e) {
                  f(function (t) {
                    return (t.vendeurs = e), Object(d.a)({}, t);
                  });
                });
            }, []),
            r.a.createElement(
              "div",
              { className: "client-info-line" },
              r.a.createElement("div", { className: "client-info-title" }, t),
              r.a.createElement(
                "div",
                { className: "client-info-content" },
                l
                  ? r.a.createElement(
                      "div",
                      null,
                      r.a.createElement(
                        "select",
                        {
                          value: a.sellerInfo._id,
                          onChange: function (e) {
                            c(
                              { field: "sellerId", value: e.target.value },
                              {
                                field: "sellerInfo",
                                value:
                                  o.vendeurs.find(function (t) {
                                    return t._id === e.target.value;
                                  }) || {},
                              }
                            );
                          },
                        },
                        r.a.createElement("option", { value: "" }),
                        Array.isArray(o.vendeurs) &&
                          o.vendeurs.map(function (e, t) {
                            return r.a.createElement(
                              "option",
                              { key: t, value: e._id },
                              e.name
                            );
                          })
                      )
                    )
                  : a.sellerInfo.name
              )
            )
          );
        },
        z = function (e) {
          var t = e.title,
            a = e.content,
            n = e.isUpdating,
            l = e.updateFunction;
          return r.a.createElement(
            "div",
            { className: "client-info-line" },
            r.a.createElement("div", { className: "client-info-title" }, t),
            r.a.createElement(
              "div",
              { className: "client-info-content" },
              n
                ? r.a.createElement(
                    "div",
                    null,
                    r.a.createElement("input", {
                      value: a,
                      type: "number",
                      step: F.defaultInputStep,
                      onChange: function (e) {
                        var t = parseFloat(e.target.value);
                        (isNaN(t) || t < 0) && (t = 0),
                          l({ field: "plafon", value: t });
                      },
                    })
                  )
                : a
            )
          );
        },
        K = function (e) {
          var t = e.title,
            a = e.content,
            n = e.isUpdating,
            l = e.updateFunction;
          return r.a.createElement(
            "div",
            { className: "client-info-line" },
            r.a.createElement("div", { className: "client-info-title" }, t),
            r.a.createElement(
              "div",
              { className: "client-info-content" },
              n
                ? r.a.createElement(
                    "div",
                    null,
                    r.a.createElement("input", {
                      value: a,
                      onChange: function (e) {
                        l({ field: "name", value: e.target.value });
                      },
                    })
                  )
                : a
            )
          );
        },
        Y = function (e) {
          var t = e.title,
            a = e.content,
            n = e.isUpdating,
            l = e.updateFunction;
          return r.a.createElement(
            "div",
            { className: "client-info-line" },
            r.a.createElement("div", { className: "client-info-title" }, t),
            r.a.createElement(
              "div",
              { className: "client-info-content" },
              n
                ? r.a.createElement(
                    "div",
                    null,
                    r.a.createElement("input", {
                      value: a,
                      onChange: function (e) {
                        l({ field: "ice", value: e.target.value });
                      },
                    })
                  )
                : a
            )
          );
        },
        W = (function (e) {
          Object(V.a)(a, e);
          var t = Object(L.a)(a);
          function a(e) {
            var n;
            return (
              Object(R.a)(this, a),
              ((n = t.call(this, e)).client = e.client),
              (n.isUpdating = e.isUpdating),
              (n.updateFunction = e.updateFunction),
              n
            );
          }
          return (
            Object(q.a)(a, [
              {
                key: "render",
                value: function () {
                  var e = this.client,
                    t = this.isUpdating;
                  return r.a.createElement(
                    "div",
                    { className: "client-info" },
                    r.a.createElement(
                      "div",
                      { className: "client-title" },
                      "Carte Client"
                    ),
                    r.a.createElement(Y, {
                      title: "ICE: ",
                      content: e.ice,
                      isUpdating: t,
                      updateFunction: this.updateFunction,
                    }),
                    r.a.createElement(K, {
                      title: "Nom: ",
                      content: e.name,
                      isUpdating: t,
                      updateFunction: this.updateFunction,
                    }),
                    r.a.createElement(z, {
                      title: "Plafond: ",
                      content: e.plafon,
                      isUpdating: t,
                      updateFunction: this.updateFunction,
                    }),
                    r.a.createElement(B, {
                      key: t,
                      title: "Vendeur: ",
                      client: e,
                      isUpdating: t,
                      updateFunction: this.updateFunction,
                    }),
                    r.a.createElement(Q.a, {
                      value: e.ice,
                      size: 500,
                      style: {
                        width: "30vw",
                        height: "30vw",
                        position: "relative",
                        left: "50%",
                        transform: "translate(-50%, 50px)",
                      },
                    })
                  );
                },
              },
            ]),
            a
          );
        })(r.a.Component),
        G =
          (a(228),
          function (e) {
            var t = e.children,
              a = e.className,
              l = e.style,
              c = e.onClick,
              s = Object(n.useState)({}),
              i = Object(m.a)(s, 2),
              u = i[0],
              o = i[1];
            function f() {
              o(function (e) {
                return (e.disabled = !1), Object(d.a)({}, e);
              });
            }
            return r.a.createElement(
              "div",
              {
                className: a,
                style: l,
                onClick: u.disabled
                  ? void 0
                  : function (e) {
                      var t = c(e);
                      o(function (e) {
                        return (e.disabled = !0), Object(d.a)({}, e);
                      }),
                        t && t.finally(f);
                    },
              },
              t
            );
          }),
        J = function (e) {
          var t = e.children,
            a = e.color,
            n = e.onClick;
          return r.a.createElement(
            G,
            { className: "flat-btn btn-" + a, onClick: n },
            t
          );
        },
        X =
          (a(229),
          a(230),
          function (e) {
            var t = e.children;
            return r.a.createElement("div", { className: "modal" }, t);
          }),
        $ = function (e) {
          var t = e.confirm,
            a = e.cancel,
            n = e.message,
            l = e.rawMessage;
          return r.a.createElement(
            X,
            null,
            r.a.createElement(
              "div",
              { className: "modal-message" },
              !l && "Supprimer ",
              n,
              "?"
            ),
            r.a.createElement(
              "div",
              { className: "modal-btn-group" },
              r.a.createElement(J, { color: "red", onClick: t }, "Oui"),
              r.a.createElement(J, { color: "blue", onClick: a }, "Non")
            )
          );
        },
        Z = function (e) {
          var t = e.match.params._id,
            a = Object(i.g)(),
            l = b(),
            c = Object(m.a)(l, 2),
            s = c[0],
            o = c[1],
            E = Object(n.useState)({}),
            p = Object(m.a)(E, 2),
            v = p[0],
            g = p[1],
            N = r.a.createRef(),
            C = v.client;
          Object(n.useEffect)(function () {
            C ||
              u.default
                .post("/admin/clients/getOne", { _id: t })
                .then(function (e) {
                  e.error
                    ? g(function (e) {
                        return (e.notFound = !0), Object(d.a)({}, e);
                      })
                    : g(function (t) {
                        return (t.client = e), Object(d.a)({}, t);
                      });
                });
          }, []);
          var k = Object(T.useReactToPrint)({
            content: function () {
              return N.current;
            },
            documentTitle: C && C.ice,
          });
          function S() {
            k();
          }
          function x() {
            g(function (e) {
              return (e.isUpdating = !0), Object(d.a)({}, e);
            });
          }
          function _() {
            u.default
              .post(h.baseUrl + "/clients/update", {
                _id: C._id,
                ice: C.ice,
                name: C.name,
                plafon: C.plafon,
                sellerId: C.sellerId,
              })
              .then(function (e) {
                e.ok
                  ? (g(function (e) {
                      return (e.isUpdating = !1), Object(d.a)({}, e);
                    }),
                    Array.isArray(s.clients) &&
                      o(function (e) {
                        return (
                          (e.clients = e.clients.map(function (e) {
                            return e._id === C._id ? C : e;
                          })),
                          Object(d.a)({}, e)
                        );
                      }))
                  : e.error && e.errorMessage && alert(e.errorMessage);
              });
          }
          function A() {
            g(function (e) {
              return (e.isDeleting = !0), Object(d.a)({}, e);
            });
          }
          var w = function (e) {
              var t = e.bottom;
              return r.a.createElement(
                "div",
                {
                  className:
                    "client-actions client-actions-" + (t ? "bottom" : "top"),
                },
                v.isUpdating
                  ? r.a.createElement(
                      r.a.Fragment,
                      null,
                      r.a.createElement(
                        "div",
                        { className: "flat-btn-small btn-green", onClick: _ },
                        r.a.createElement("span", null, "Terminer"),
                        r.a.createElement("i", { className: "far fa-check" })
                      )
                    )
                  : r.a.createElement(
                      r.a.Fragment,
                      null,
                      r.a.createElement(
                        "div",
                        { className: "client-actions-group" },
                        r.a.createElement(
                          "div",
                          { className: "flat-btn-small btn-green", onClick: x },
                          r.a.createElement("span", null, "Modifier"),
                          r.a.createElement("i", { className: "far fa-pen" })
                        ),
                        r.a.createElement(
                          "div",
                          { className: "flat-btn-small btn-red", onClick: A },
                          r.a.createElement("span", null, "Supprimer"),
                          r.a.createElement("i", { className: "far fa-trash" })
                        )
                      ),
                      r.a.createElement(
                        "div",
                        { className: "flat-btn-small btn-blue", onClick: S },
                        r.a.createElement("span", null, "Imprimer"),
                        r.a.createElement("i", { className: "far fa-print" })
                      )
                    )
              );
            },
            F = h.clientPaths.slice(0, 2);
          return r.a.createElement(
            r.a.Fragment,
            null,
            C
              ? r.a.createElement(
                  j,
                  null,
                  r.a.createElement(O, { paths: F }),
                  r.a.createElement(
                    "div",
                    { className: "client-page" },
                    r.a.createElement(w, null),
                    r.a.createElement(W, {
                      key: v.isUpdating,
                      ref: N,
                      client: C,
                      isUpdating: v.isUpdating,
                      updateFunction: function () {
                        var e = arguments;
                        g(function (t) {
                          var a,
                            n = t.client,
                            r = Object(I.a)(e);
                          try {
                            for (r.s(); !(a = r.n()).done; ) {
                              var l = a.value;
                              n[l.field] = l.value;
                            }
                          } catch (c) {
                            r.e(c);
                          } finally {
                            r.f();
                          }
                          return (t.client = n), Object(d.a)({}, t);
                        });
                      },
                    }),
                    r.a.createElement(w, { bottom: !0 })
                  ),
                  v.isDeleting
                    ? r.a.createElement($, {
                        message: C.name,
                        confirm: function () {
                          var e = u.default.post(
                            "/admin/clients/deleteClient",
                            { _id: C._id }
                          );
                          return (
                            e.then(function (e) {
                              e.ok &&
                                (s.clients &&
                                  o(function (e) {
                                    return (
                                      (e.clients = e.clients.filter(function (
                                        e
                                      ) {
                                        return e._id !== C._id;
                                      })),
                                      Object(d.a)({}, e)
                                    );
                                  }),
                                a.push(h.baseUrl + "/clients"));
                            }),
                            e
                          );
                        },
                        cancel: function () {
                          g(function (e) {
                            return (e.isDeleting = !1), Object(d.a)({}, e);
                          });
                        },
                      })
                    : r.a.createElement(r.a.Fragment, null)
                )
              : v.notFound
              ? r.a.createElement(y, null)
              : r.a.createElement(f, null)
          );
        };
      a(231), a(232);
      function ee(e, t) {
        u.default
          .post("/admin/vendeurs/getStats", { _id: e })
          .then(function (e) {
            e.error ||
              t(function (t) {
                return (t.stats = e), Object(d.a)({}, t);
              });
          });
      }
      var te = a(52),
        ae = a.n(te),
        ne = function (e) {
          var t = e.article,
            a = Object(n.useContext)(be),
            l = Object(m.a)(a, 2),
            c = l[0],
            s = l[1],
            i = Object(n.useState)({}),
            o = Object(m.a)(i, 2),
            f = o[0],
            E = (o[1], c.vendeur._id);
          function p(e) {
            s(function (a) {
              return (
                (a.articles = a.articles.map(function (a) {
                  return (
                    a._id === t._id && ((a.isUpdating = !1), (a.error = e)), a
                  );
                })),
                Object(d.a)({}, a)
              );
            });
          }
          return r.a.createElement(
            "tr",
            { key: t._id },
            f.error
              ? r.a.createElement(
                  "td",
                  null,
                  r.a.createElement(
                    "div",
                    { className: "btn-danger" },
                    "Erreur"
                  )
                )
              : r.a.createElement(r.a.Fragment, null),
            r.a.createElement(
              "td",
              null,
              r.a.createElement(
                "div",
                { className: "vendeur-article-card-name" },
                t.name
              )
            ),
            t.isUpdating
              ? r.a.createElement(
                  r.a.Fragment,
                  null,
                  r.a.createElement(
                    "td",
                    { colSpan: 2 },
                    r.a.createElement(
                      "div",
                      { className: "vendeur-art-edit" },
                      r.a.createElement(
                        "form",
                        {
                          onSubmit: function (e) {
                            e.preventDefault(),
                              u.default
                                .post("/admin/vendeurs/updateArticle", {
                                  qt: t.newQt,
                                  sellerId: E,
                                  _id: t._id,
                                })
                                .then(function (e) {
                                  e.ok &&
                                    (s(function (a) {
                                      return (
                                        e.newQtSeller > 0
                                          ? (a.articles = a.articles.map(
                                              function (a, n) {
                                                return (
                                                  a._id === t._id &&
                                                    ((a.isUpdating = !1),
                                                    (a.qtStocke =
                                                      e.newQtStocke),
                                                    (a.qt = e.newQtSeller),
                                                    n),
                                                  a
                                                );
                                              }
                                            ))
                                          : (a.articles = a.articles.filter(
                                              function (e, a) {
                                                return e._id !== t._id;
                                              }
                                            )),
                                        Object(d.a)({}, a)
                                      );
                                    }),
                                    ee(E, s));
                                })
                                .catch(function (e) {
                                  p(!0);
                                });
                          },
                          className: "vendeur-art-edit",
                        },
                        t.qt,
                        "\xa0-\xa0",
                        r.a.createElement("input", {
                          autoFocus: !0,
                          type: "number",
                          step: F.defaultInputStep,
                          className: "art-input",
                          value: t.newQt,
                          onChange: function (e) {
                            var a = parseFloat(e.target.value);
                            a < 0 ? (a = 0) : a > t.qt && (a = t.qt),
                              a && isNaN(a) && (a = 0),
                              s(function (e) {
                                return (
                                  (e.articles = e.articles.map(function (e) {
                                    return e._id === t._id && (e.newQt = a), e;
                                  })),
                                  Object(d.a)({}, e)
                                );
                              });
                          },
                        }),
                        r.a.createElement(
                          "label",
                          { className: "icon icon-success" },
                          r.a.createElement("i", { className: "fas fa-check" }),
                          r.a.createElement("input", {
                            type: "submit",
                            hidden: !0,
                          })
                        ),
                        r.a.createElement(
                          "div",
                          { onClick: p, className: "icon icon-danger" },
                          r.a.createElement("i", { className: "fas fa-times" })
                        )
                      )
                    )
                  )
                )
              : r.a.createElement(
                  r.a.Fragment,
                  null,
                  r.a.createElement(
                    "td",
                    null,
                    r.a.createElement(
                      "div",
                      { className: "vendeur-art-edit" },
                      t.qt
                    )
                  ),
                  r.a.createElement(
                    "td",
                    null,
                    t.qt > 0
                      ? r.a.createElement(
                          "div",
                          {
                            className: "vendeur-article-remove",
                            onClick: function () {
                              s(function (e) {
                                return (
                                  (e.articles = e.articles.map(function (e) {
                                    return (
                                      e._id === t._id
                                        ? (e.isUpdating = !0)
                                        : (e.isUpdating = !1),
                                      (e.newQt = ""),
                                      e
                                    );
                                  })),
                                  Object(d.a)({}, e)
                                );
                              });
                            },
                          },
                          r.a.createElement("i", { className: "fas fa-minus" })
                        )
                      : r.a.createElement(
                          "div",
                          { className: "vendeur-article-remove", disabled: !0 },
                          r.a.createElement("i", { className: "fas fa-minus" })
                        )
                  )
                )
          );
        },
        re =
          (a(233),
          a(234),
          (function (e) {
            Object(V.a)(a, e);
            var t = Object(L.a)(a);
            function a(e) {
              var n;
              return (
                Object(R.a)(this, a),
                ((n = t.call(this, e)).invoice = e.invoice),
                (n.vendeur = e.vendeur),
                n
              );
            }
            return (
              Object(q.a)(a, [
                {
                  key: "render",
                  value: function () {
                    var e = 0,
                      t = this.invoice,
                      a = this.vendeur,
                      n = new Date(),
                      l = t.articles,
                      c = l.reduce(function (e, t) {
                        return e + t.prixVente * t.qt;
                      }, 0),
                      s = n.getFullYear(),
                      i = [
                        n.getMonth() + 1,
                        n.getDate(),
                        n.getHours(),
                        n.getMinutes(),
                      ].map(function (e) {
                        return e < 10 ? "0".concat(e) : e;
                      }),
                      o = Object(m.a)(i, 4),
                      d = o[0],
                      f = o[1],
                      E = o[2],
                      p = o[3];
                    return r.a.createElement(
                      r.a.Fragment,
                      null,
                      r.a.createElement(
                        "div",
                        { id: "ContaineR" },
                        r.a.createElement(
                          "section",
                          { id: "invoice-title-number" },
                          r.a.createElement(
                            "div",
                            { className: "company-name" },
                            "Prefrite"
                          ),
                          r.a.createElement(
                            "span",
                            { id: "title" },
                            "Facture Vendeur"
                          )
                        ),
                        r.a.createElement("div", { className: "clearfix" }),
                        r.a.createElement(
                          "table",
                          { id: "client-info" },
                          r.a.createElement("thead", null),
                          r.a.createElement(
                            "tbody",
                            null,
                            r.a.createElement(
                              "tr",
                              null,
                              r.a.createElement("td", null, "VENDEUR:"),
                              r.a.createElement("td", null, a.name)
                            ),
                            r.a.createElement(
                              "tr",
                              null,
                              r.a.createElement("td", null, "DATE:"),
                              r.a.createElement(
                                "td",
                                null,
                                f,
                                "/",
                                d,
                                "/",
                                s,
                                "\xa0\xa0\xa0",
                                E,
                                ":",
                                p
                              )
                            )
                          )
                        ),
                        r.a.createElement("div", { className: "clearfix" }),
                        r.a.createElement(
                          "section",
                          { id: "items" },
                          r.a.createElement(
                            "table",
                            { cellPadding: "0", cellSpacing: "0" },
                            r.a.createElement(
                              "thead",
                              null,
                              r.a.createElement(
                                "tr",
                                null,
                                r.a.createElement("th", null),
                                r.a.createElement("th", null, "PRODUIT"),
                                r.a.createElement("th", null, "UNIT\xc9"),
                                r.a.createElement("th", null, "PRIX")
                              )
                            ),
                            Array.isArray(l) &&
                              l.map(function (t, a) {
                                return r.a.createElement(
                                  "tbody",
                                  { key: a },
                                  r.a.createElement(
                                    "tr",
                                    null,
                                    r.a.createElement("td", null, ++e, "."),
                                    r.a.createElement("td", null, t.name),
                                    r.a.createElement(
                                      "td",
                                      null,
                                      u.default.fn(t.qt)
                                    ),
                                    r.a.createElement(
                                      "td",
                                      null,
                                      u.default.fn(t.prixVente * t.qt),
                                      r.a.createElement("span", null, "DHS")
                                    )
                                  ),
                                  r.a.createElement(
                                    "tr",
                                    { border: "true" },
                                    r.a.createElement("td", null),
                                    r.a.createElement("td", null),
                                    r.a.createElement("td", null),
                                    r.a.createElement(
                                      "td",
                                      null,
                                      u.default.fn(t.qt),
                                      " x ",
                                      u.default.fn(t.prixVente),
                                      r.a.createElement("span", null, "DHS")
                                    )
                                  )
                                );
                              })
                          )
                        ),
                        r.a.createElement(
                          "section",
                          { id: "sums" },
                          r.a.createElement(
                            "table",
                            { cellPadding: "0", cellSpacing: "0" },
                            r.a.createElement("thead", null),
                            r.a.createElement(
                              "tbody",
                              null,
                              r.a.createElement(
                                "tr",
                                { className: "amount-total" },
                                r.a.createElement("th", null, "TOTAL:"),
                                r.a.createElement(
                                  "td",
                                  null,
                                  u.default.fn(c),
                                  " ",
                                  r.a.createElement("span", null, "DHS")
                                )
                              )
                            )
                          ),
                          r.a.createElement("div", { className: "clearfix" })
                        ),
                        r.a.createElement("div", { className: "clearfix" }),
                        r.a.createElement("div", { className: "clearfix" }),
                        r.a.createElement("div", { className: "clearfix" })
                      )
                    );
                  },
                },
              ]),
              a
            );
          })(r.a.PureComponent)),
        le = function () {
          var e = Object(n.useContext)(be),
            t = Object(m.a)(e, 1)[0],
            a = Object(n.useState)({}),
            l = Object(m.a)(a, 2),
            c = l[0],
            s = l[1],
            i = t.vendeur,
            o = r.a.createRef();
          return (
            Object(n.useEffect)(function () {
              u.default
                .post(h.baseUrl + "/vendeurs/getInvoice", { _id: i._id })
                .then(function (e) {
                  s(function (t) {
                    return (
                      (t.invoice = e),
                      (t.invoice.name = "lala haha babba"),
                      Object(d.a)({}, t)
                    );
                  });
                });
            }, []),
            c.invoice
              ? r.a.createElement(
                  "div",
                  { className: "art-adding-body" },
                  r.a.createElement(re, {
                    ref: o,
                    invoice: c.invoice,
                    vendeur: i,
                  }),
                  r.a.createElement(
                    H.a,
                    {
                      content: function () {
                        return o.current;
                      },
                    },
                    r.a.createElement(
                      T.PrintContextConsumer,
                      null,
                      function (e) {
                        var t = e.handlePrint,
                          a = setInterval(function () {
                            o.current && (t(), clearInterval(a));
                          });
                      }
                    )
                  )
                )
              : r.a.createElement(f, null)
          );
        },
        ce = function () {
          var e = Object(n.useState)({}),
            t = Object(m.a)(e, 2),
            a = t[0],
            l = t[1];
          return r.a.createElement(
            r.a.Fragment,
            null,
            a.print &&
              r.a.createElement(
                "div",
                { className: "art-adding" },
                r.a.createElement(
                  "div",
                  { className: "modal-nav" },
                  r.a.createElement(
                    "div",
                    {
                      className: "close-modal",
                      onClick: function () {
                        l(function (e) {
                          return (e.print = !1), Object(d.a)({}, e);
                        });
                      },
                    },
                    r.a.createElement("i", { className: "fas fa-times" })
                  )
                ),
                r.a.createElement(le, null)
              ),
            r.a.createElement(
              "div",
              {
                className: "flat-btn-small flat-btn-center btn-blue",
                onClick: function () {
                  l(function (e) {
                    return (e.print = !0), Object(d.a)({}, e);
                  });
                },
              },
              "Imprimer ",
              r.a.createElement("i", { className: "far fa-print" })
            )
          );
        },
        se = function (e) {
          var t = e.match,
            a = e.loadMore,
            l = (t.params._id, Object(n.useContext)(be)),
            c = Object(m.a)(l, 1)[0];
          return r.a.createElement(
            "div",
            { className: "vendeur-articles user-vendeur-item" },
            r.a.createElement(
              "a",
              { className: "art-add" },
              r.a.createElement("span", null, "Articles")
            ),
            Array.isArray(c.articles) &&
              0 !== c.articles.length &&
              r.a.createElement(
                r.a.Fragment,
                null,
                r.a.createElement(
                  "table",
                  { className: "modern-table" },
                  r.a.createElement(
                    "tbody",
                    null,
                    r.a.createElement(
                      "tr",
                      null,
                      r.a.createElement("th", null, "Nom"),
                      r.a.createElement("th", null, "Quantite"),
                      r.a.createElement("th", null, "Action")
                    ),
                    c.articles.map(function (e) {
                      return r.a.createElement(ne, {
                        key: e._id + e.isUpdating,
                        article: e,
                      });
                    })
                  )
                ),
                a &&
                  r.a.createElement(U, {
                    onClick: a,
                    isLoading: c.artsLoading,
                  }),
                r.a.createElement(ce, null)
              )
          );
        },
        ie =
          (a(235),
          function (e) {
            var t = e.loadMore,
              a = Object(n.useContext)(be),
              l = Object(m.a)(a, 1)[0],
              c = l.vendeur,
              i = l.clients;
            return r.a.createElement(
              "div",
              { className: "user-vendeur-item" },
              r.a.createElement(
                s.b,
                { className: "art-add", to: h.baseUrl + "/addClient/" + c._id },
                r.a.createElement("span", null, "Clients"),
                r.a.createElement("i", { className: "fas fa-plus" })
              ),
              Array.isArray(i) &&
                i.length > 0 &&
                r.a.createElement(
                  r.a.Fragment,
                  null,
                  r.a.createElement(
                    "table",
                    { className: "clients-table" },
                    r.a.createElement(
                      "thead",
                      null,
                      r.a.createElement(
                        "tr",
                        null,
                        r.a.createElement("th", null, "ICE"),
                        r.a.createElement("th", null, "Nom"),
                        r.a.createElement("th", null, "Plafond")
                      )
                    ),
                    r.a.createElement(
                      "tbody",
                      null,
                      i.map(function (e) {
                        return r.a.createElement(
                          "tr",
                          { key: e._id },
                          r.a.createElement(
                            "td",
                            null,
                            r.a.createElement(
                              s.b,
                              { to: h.baseUrl + "/client/" + e._id },
                              e.ice
                            )
                          ),
                          r.a.createElement(
                            "td",
                            null,
                            r.a.createElement(
                              s.b,
                              { to: h.baseUrl + "/client/" + e._id },
                              e.name
                            )
                          ),
                          r.a.createElement(
                            "td",
                            null,
                            r.a.createElement(
                              s.b,
                              { to: h.baseUrl + "/client/" + e._id },
                              e.plafon
                            )
                          )
                        );
                      })
                    )
                  ),
                  t &&
                    r.a.createElement(U, {
                      onClick: t,
                      isLoading: l.clientsLoading,
                    })
                )
            );
          }),
        me = (a(236), a(47)),
        ue = function (e) {
          var t = e.stats,
            a = u.default.toFixed(t.leftToSell || 0),
            n = u.default.toFixed(t.paid || 0),
            l = u.default.toFixed(t.credit || 0),
            c = [
              "rgba(99, 255, 0, 0.5)",
              "rgba(255, 0, 0, 0.5)",
              "rgba(0, 0, 0, 0.2)",
            ],
            s = {
              labels: [
                "Vendus: ".concat(n, " DHS"),
                "Credit: ".concat(l, " DHS"),
                "\xe0 Vendre ".concat(a, " DHS"),
              ],
              datasets: [
                {
                  label: "Stats",
                  data: [n, l, a],
                  backgroundColor: c,
                  borderColor: c,
                  borderWidth: 1,
                },
              ],
            };
          return r.a.createElement(
            "div",
            { className: "stats-chart" },
            r.a.createElement(me.b, {
              data: s,
              options: {
                responsive: !0,
                legend: {
                  onClick: function (e) {
                    return e.stopPropagation();
                  },
                },
              },
            })
          );
        },
        oe = function (e) {
          var t = e.stats,
            a = (t.sold || 0) + t.leftToSell;
          return r.a.createElement(
            "div",
            { className: "user-vendeur-item" },
            r.a.createElement("div", { className: "art-add" }, "Etat"),
            r.a.createElement(
              "div",
              { className: "stats-container" },
              r.a.createElement(
                "h3",
                null,
                "Total: ",
                u.default.toFixed(a),
                " DHS"
              ),
              r.a.createElement(ue, { stats: t })
            )
          );
        },
        de = function (e) {
          var t = e.content,
            a = e.onClick;
          return r.a.createElement(
            "div",
            { tabIndex: 1, className: "input-btn", onClick: a },
            t
          );
        },
        fe =
          (a(341),
          a(342),
          function (e) {
            var t = e.confirm,
              a = e.cancel,
              n = e.message;
            return r.a.createElement(
              X,
              null,
              r.a.createElement("div", { className: "modal-message" }, n),
              r.a.createElement(
                "div",
                { className: "modal-btn-group" },
                r.a.createElement(J, { color: "green", onClick: t }, "Oui"),
                r.a.createElement(J, { color: "red", onClick: a }, "Non")
              )
            );
          }),
        Ee = function (e) {
          var t = e.payment,
            a = Object(n.useContext)(be),
            l = Object(m.a)(a, 2),
            c = l[0],
            s = l[1],
            i = Object(n.useState)({ payment: t || "" }),
            o = Object(m.a)(i, 2),
            f = o[0],
            E = o[1],
            p = c.vendeur,
            b = p._id;
          var v = u.default.toFixed(f.payment);
          return r.a.createElement(
            "div",
            { className: "user-vendeur-item" },
            r.a.createElement("div", { className: "art-add" }, "Payment"),
            r.a.createElement(
              "form",
              {
                className: "vendeur-hand-payment",
                onSubmit: function (e) {
                  e.preventDefault(),
                    E(function (e) {
                      return (e.isHanding = !0), Object(d.a)({}, e);
                    });
                },
              },
              r.a.createElement(
                "div",
                { className: "inputContainer" },
                r.a.createElement("input", {
                  placeholder: "Payer",
                  className: "input",
                  value: v,
                  onChange: function () {},
                }),
                r.a.createElement(
                  "label",
                  null,
                  r.a.createElement(de, {
                    content: r.a.createElement("i", {
                      className: "fas fa-thumbs-up",
                    }),
                  }),
                  r.a.createElement("input", { type: "submit", hidden: !0 })
                )
              )
            ),
            f.isHanding &&
              r.a.createElement(fe, {
                message: "Payer ".concat(v, " DHS Pour ").concat(p.name, " ?"),
                confirm: function () {
                  var e = { _id: b, payment: f.payment },
                    t = u.default.post(h.baseUrl + "/vendeurs/handPayment", e);
                  return (
                    t.then(function (e) {
                      e.ok && ee(b, s);
                    }),
                    t
                  );
                },
                cancel: function (e) {
                  e.preventDefault(),
                    E(function (e) {
                      return (e.isHanding = !1), Object(d.a)({}, e);
                    });
                },
              })
          );
        },
        pe =
          (a(343),
          function () {
            var e = Object(n.useContext)(be),
              t = Object(m.a)(e, 1)[0].vendeur,
              a = Object(n.useState)(Object(d.a)({}, t)),
              l = Object(m.a)(a, 1)[0];
            return r.a.createElement(
              "div",
              { className: "user-vendeur-item" },
              r.a.createElement("div", { className: "art-add" }, "Extra"),
              r.a.createElement(
                "div",
                { className: "vendeur-extra" },
                [{ title: "Nom", field: "name" }].map(function (e, t) {
                  return r.a.createElement(
                    "div",
                    { key: t, className: "vendeur-extra-item" },
                    r.a.createElement("div", null, e.title, ":"),
                    r.a.createElement("div", null, l[e.field])
                  );
                })
              )
            );
          }),
        be = r.a.createContext(),
        ve = function (e) {
          var t = e.match,
            a = t.params._id,
            l = Object(n.useState)({ catSearch: "", artSearch: "" }),
            c = Object(m.a)(l, 2),
            s = c[0],
            i = c[1];
          Object(n.useEffect)(function () {
            u.default
              .post("/admin/vendeurs/getOne", { _id: a })
              .then(function (e) {
                e.vendeur
                  ? i(function (t) {
                      return Object(d.a)(Object(d.a)({}, t), e);
                    })
                  : i(function (e) {
                      return Object(d.a)(
                        Object(d.a)({}, e),
                        {},
                        { notFound: !0 }
                      );
                    });
              });
          }, []);
          var o = h.sellerPaths.slice(0, 2);
          return r.a.createElement(
            r.a.Fragment,
            null,
            s.vendeur
              ? r.a.createElement(
                  j,
                  null,
                  r.a.createElement(O, { paths: o }),
                  r.a.createElement(
                    be.Provider,
                    { value: [s, i] },
                    r.a.createElement(
                      "div",
                      { className: "user-vendeur" },
                      r.a.createElement(
                        "div",
                        { className: "user-vendeur-child" },
                        r.a.createElement(se, {
                          match: t,
                          loadMore:
                            !s.endArticles &&
                            function () {
                              i(function (e) {
                                return (e.artsLoading = !0), Object(d.a)({}, e);
                              }),
                                ae.a
                                  .getArticles({
                                    _id: a,
                                    skip: s.articles.length,
                                    exists: !0,
                                  })
                                  .then(function (e) {
                                    e.articles &&
                                      i(function (t) {
                                        return (
                                          (t.artsLoading = !1),
                                          (t.articles = [].concat(
                                            Object(w.a)(t.articles),
                                            Object(w.a)(e.articles)
                                          )),
                                          (t.endArticles = e.endArticles),
                                          Object(d.a)({}, t)
                                        );
                                      });
                                  });
                            },
                        }),
                        !s.vendeur.superSeller &&
                          r.a.createElement(ie, {
                            loadMore:
                              !s.endClients &&
                              function () {
                                i(function (e) {
                                  return (
                                    (e.clientsLoading = !0), Object(d.a)({}, e)
                                  );
                                }),
                                  ae.a
                                    .getClients({
                                      _id: a,
                                      skip: s.clients.length,
                                    })
                                    .then(function (e) {
                                      e.clients &&
                                        i(function (t) {
                                          return (
                                            (t.clientsLoading = !1),
                                            (t.clients = [].concat(
                                              Object(w.a)(t.clients),
                                              Object(w.a)(e.clients)
                                            )),
                                            (t.endClients = e.endClients),
                                            Object(d.a)({}, t)
                                          );
                                        });
                                    });
                              },
                          })
                      ),
                      r.a.createElement(
                        "div",
                        { className: "user-vendeur-child" },
                        r.a.createElement(oe, { stats: s.stats }),
                        s.stats && s.stats.paid && 0 !== s.stats.paid
                          ? r.a.createElement(Ee, { payment: s.stats.paid })
                          : r.a.createElement(r.a.Fragment, null),
                        r.a.createElement(pe, null)
                      )
                    )
                  )
                )
              : s.notFound
              ? r.a.createElement(y, null)
              : r.a.createElement(f, null)
          );
        },
        ge = function (e) {
          var t = Object(m.a)(e.stateHook, 2),
            a = t[0],
            n = t[1],
            r = e.startRef,
            l = e.endRef;
          function c(e, t) {
            if (e && t) {
              return (new Date(t) - new Date(e)) / 864e5 + 1;
            }
          }
          return [
            function (e) {
              var t = r.current.value;
              a.endTime && new Date(t) > new Date(a.endTime) && (t = a.endTime),
                n(function (e) {
                  return (
                    (e.startTime = t),
                    (e.daysInterval = c(e.startTime, e.endTime)),
                    Object(d.a)({}, e)
                  );
                });
            },
            function (e) {
              if (!a.startTime) return (l.current.value = ""), !1;
              var t = l.current.value;
              if ((t && new Date(t)) < new Date(a.startTime))
                return (
                  n(function (e) {
                    return (e.endTime = ""), Object(d.a)({}, e);
                  }),
                  !1
                );
              n(function (e) {
                return (
                  (e.endTime = t),
                  (e.daysInterval = c(e.startTime, e.endTime)),
                  Object(d.a)({}, e)
                );
              });
            },
          ];
        },
        he = function (e) {
          var t = e.sellers,
            a = e.stateHook,
            n = r.a.createRef(),
            l = r.a.createRef(),
            c = r.a.createRef(),
            s = ge({ stateHook: a, startRef: l, endRef: c });
          return r.a.createElement(
            "div",
            { className: "container" },
            r.a.createElement(
              "div",
              { className: "form-group" },
              r.a.createElement("span", null, "Vendeur:"),
              r.a.createElement(
                "select",
                {
                  ref: n,
                  className: "form-control",
                  value: a[0].sellerCmd || "",
                  onChange: function () {
                    a[1](function (e) {
                      return (
                        (e.sellerCmd = n.current.value), Object(d.a)({}, e)
                      );
                    });
                  },
                },
                r.a.createElement("option", { value: "" }),
                Array.isArray(t) &&
                  t.map(function (e) {
                    return r.a.createElement(
                      "option",
                      { key: e._id, value: e._id },
                      e.name
                    );
                  })
              )
            ),
            r.a.createElement(
              "div",
              null,
              r.a.createElement("span", null, "Debut:"),
              r.a.createElement("input", {
                ref: l,
                type: "date",
                value: a[0].startTime,
                onChange: s[0],
                className: "form-control",
              })
            ),
            r.a.createElement(
              "div",
              null,
              r.a.createElement("span", null, "Fin:"),
              r.a.createElement("input", {
                ref: c,
                type: "date",
                value: a[0].endTime,
                onChange: s[1],
                className: "form-control",
              })
            )
          );
        },
        Ne =
          (a(344),
          function (e) {
            var t = e.cols;
            return t.reduce(function (e, a, n) {
              return [
                e,
                r.a.createElement(
                  "td",
                  { key: n, className: "td-link" },
                  r.a.createElement(s.b, { to: a.to || t[0].to }, a.text)
                ),
              ];
            }, r.a.createElement(r.a.Fragment, { key: "fragment" }));
          }),
        Oe = function (e) {
          var t = e.fullfiled,
            a = e.paths,
            l = Object(m.a)(e.stateHook, 2),
            c = l[0],
            i = l[1],
            o = e.config,
            E = o.baseUrl,
            p = o.endPoint,
            b = Object(n.useState)({}),
            v = Object(m.a)(b, 2),
            g = v[0],
            h = v[1];
          function N() {
            var e = g.commands && g.commands.length;
            h(function (e) {
              return (e.loading = !0), Object(d.a)({}, e);
            });
            var a = {};
            if (((a.skip = e), t)) {
              (a.fullfiled = !0), (a.getSellers = !0);
              var n = {};
              (n.startTime = c.startTime),
                (n.endTime = c.endTime),
                (n.sellerCmd = c.sellerCmd),
                (a.filter = n);
            }
            u.default.post(p, a).then(function (e) {
              e.commands &&
                h(function (t) {
                  return (
                    (t.loading = !1),
                    (t.startTime = e.startTime),
                    (t.endTime = e.endTime),
                    t.commands || (t.commands = []),
                    (t.commands = [].concat(
                      Object(w.a)(t.commands),
                      Object(w.a)(e.commands)
                    )),
                    e.sellers && (t.sellers = e.sellers),
                    (t.endCmds = e.endCmds),
                    Object(d.a)({}, t)
                  );
                });
            });
          }
          return (
            Object(n.useEffect)(N, []),
            r.a.createElement(
              j,
              null,
              r.a.createElement(O, { paths: a }),
              Array.isArray(g.commands)
                ? r.a.createElement(
                    r.a.Fragment,
                    null,
                    t
                      ? r.a.createElement(
                          r.a.Fragment,
                          null,
                          r.a.createElement(he, {
                            sellers: g.sellers,
                            stateHook: [c, i],
                          }),
                          g.startTime &&
                            r.a.createElement(
                              "div",
                              { className: "time-interval-message" },
                              u.default.returnDateIntervalMessage(
                                g.startTime,
                                g.endTime
                              )
                            ),
                          r.a.createElement(
                            "table",
                            { className: "table table-striped" },
                            r.a.createElement(
                              "thead",
                              null,
                              r.a.createElement(
                                "tr",
                                null,
                                r.a.createElement("th", null, "Vendeur"),
                                r.a.createElement("th", null, "Date"),
                                r.a.createElement("th", null, "Nbr")
                              )
                            ),
                            r.a.createElement(
                              "tbody",
                              null,
                              g.commands.map(function (e) {
                                var t = [
                                  {
                                    to: E + "/command/" + e._id,
                                    text: e.sellerInfo && e.sellerInfo.name,
                                  },
                                  { text: u.default.ftd(e.fullfilTime) },
                                  { text: e.artCount },
                                ];
                                return r.a.createElement(
                                  "tr",
                                  { key: e._id },
                                  r.a.createElement(Ne, { cols: t })
                                );
                              })
                            )
                          )
                        )
                      : r.a.createElement(
                          "div",
                          { className: "card-list" },
                          g.commands.map(function (e) {
                            var t = "".concat(E, "/command/").concat(e._id);
                            return r.a.createElement(
                              s.b,
                              { key: e._id, className: "app-card", to: t },
                              e.sellerInfo && e.sellerInfo.name,
                              e.fullfiled
                                ? r.a.createElement(
                                    r.a.Fragment,
                                    null,
                                    r.a.createElement(
                                      "div",
                                      { className: "card-badge" },
                                      e.artCount
                                    ),
                                    r.a.createElement(
                                      "div",
                                      {
                                        className:
                                          "card-status card-success-status",
                                      },
                                      r.a.createElement("i", {
                                        className: "fas fa-check",
                                      })
                                    )
                                  )
                                : r.a.createElement(
                                    "div",
                                    {
                                      className: "card-status card-wait-status",
                                    },
                                    e.artCount
                                  )
                            );
                          })
                        ),
                    !g.endCmds &&
                      r.a.createElement(U, { isLoading: g.loading, onClick: N })
                  )
                : r.a.createElement(f, null)
            )
          );
        },
        je = function (e) {
          var t = e.fullfiled,
            a = b(),
            n = Object(m.a)(a, 2),
            l = n[0],
            c = n[1];
          return r.a.createElement(
            "div",
            null,
            r.a.createElement(Oe, {
              key: Date.now(),
              fullfiled: t,
              paths: h.defaultPaths.slice(0, 1),
              stateHook: [l, c],
              config: { baseUrl: h.baseUrl, endPoint: "/admin/cmd/get" },
            })
          );
        },
        ye = r.a.createContext(),
        Ce = function (e) {
          var t = e.children,
            a = r.a.useState({}),
            n = Object(m.a)(a, 2),
            l = n[0],
            c = n[1];
          return (
            r.a.useEffect(
              function () {
                l.reload &&
                  c(function (e) {
                    return (l.reload = !1), Object(d.a)({}, e);
                  });
              },
              [l]
            ),
            l.reload
              ? r.a.createElement(r.a.Fragment, null)
              : r.a.createElement(ye.Provider, { value: [l, c] }, t)
          );
        },
        ke = function () {
          return r.a.useContext(ye);
        },
        Se = function (e) {
          var t = e.cmd,
            a = e.article,
            n = e.control,
            l = e.reload,
            c = ke(),
            s = (Object(m.a)(c, 2)[1], r.a.useState({})),
            i = Object(m.a)(s, 2),
            o = i[0],
            f = i[1],
            E = function () {
              f(function (e) {
                return (e.isDeleting = !e.isDeleting), Object(d.a)({}, e);
              });
            };
          return r.a.createElement(
            "tbody",
            { key: a._id },
            r.a.createElement(
              "tr",
              null,
              r.a.createElement("td", { colSpan: "2" }, a.name),
              r.a.createElement("td", null, u.default.fn(a.qtStocke)),
              n &&
                r.a.createElement(
                  "td",
                  { rowspan: "2", className: "cmd-lastLine" },
                  r.a.createElement(
                    "div",
                    { className: "flat-btn-small btn-red", onClick: E },
                    r.a.createElement("i", { className: "fas fa-times" })
                  ),
                  o.isDeleting &&
                    r.a.createElement($, {
                      rawMessage: !0,
                      message: "Retirer " + a.name + " ?",
                      confirm: function () {
                        u.default
                          .post("/magasin/cmd/removeCmdArt", {
                            _id: t._id,
                            artId: a._id,
                          })
                          .then(function (e) {
                            e.ok &&
                              l(function (e) {
                                return {};
                              });
                          });
                      },
                      cancel: E,
                    })
                )
            ),
            r.a.createElement(
              "tr",
              { className: "cmd-lastLine" },
              r.a.createElement("td", null, "Qte: ", u.default.fn(a.qt)),
              r.a.createElement(
                "td",
                null,
                "Prix: ",
                u.default.fn(a.prixVente),
                " DHS"
              ),
              r.a.createElement(
                "td",
                null,
                u.default.fn(a.prixVente * a.qt),
                " DHS"
              )
            )
          );
        },
        xe = (function (e) {
          Object(V.a)(a, e);
          var t = Object(L.a)(a);
          function a(e) {
            var n;
            return (
              Object(R.a)(this, a),
              ((n = t.call(this, e)).cmd = e.cmd),
              (n.control = e.control),
              (n.reload = e.reload),
              n
            );
          }
          return (
            Object(q.a)(a, [
              {
                key: "render",
                value: function () {
                  var e = this,
                    t = 0;
                  return r.a.createElement(
                    "div",
                    null,
                    r.a.createElement(
                      "div",
                      { className: "printable-title" },
                      "Commande de ",
                      this.cmd.sellerInfo.name
                    ),
                    r.a.createElement(
                      "div",
                      { style: { textAlign: "center" } },
                      this.cmd._id
                    ),
                    r.a.createElement(
                      "div",
                      { className: "time-interval-message" },
                      u.default.ftd(this.cmd.time)
                    ),
                    this.control && !this.cmd.fullfiled
                      ? r.a.createElement(
                          "table",
                          { className: "cmd-art-table" },
                          r.a.createElement(
                            "thead",
                            null,
                            r.a.createElement(
                              "tr",
                              { className: "cmd-lastLine" },
                              r.a.createElement(
                                "th",
                                { colSpan: "2" },
                                "Article"
                              ),
                              r.a.createElement("th", null, "Qt Disp"),
                              r.a.createElement("th", null, "Retirer?")
                            )
                          ),
                          Array.isArray(this.cmd.articles) &&
                            this.cmd.articles.length > 0 &&
                            this.cmd.articles.map(function (a) {
                              return (
                                (t += (a.prixVente || 0) * (a.qt || 0)),
                                r.a.createElement(Se, {
                                  key: a._id,
                                  reload: e.reload,
                                  cmd: e.cmd,
                                  article: a,
                                  control: e.control,
                                })
                              );
                            }),
                          r.a.createElement(
                            "tbody",
                            null,
                            r.a.createElement(
                              "tr",
                              null,
                              r.a.createElement(
                                "td",
                                { colSpan: "2" },
                                "Total:"
                              ),
                              r.a.createElement(
                                "td",
                                null,
                                u.default.toFixed(t),
                                " DHS"
                              ),
                              r.a.createElement("td", null)
                            )
                          )
                        )
                      : r.a.createElement(
                          "table",
                          { className: "cmd-art-table" },
                          r.a.createElement(
                            "thead",
                            null,
                            r.a.createElement(
                              "tr",
                              { className: "cmd-lastLine" },
                              r.a.createElement(
                                "th",
                                { colSpan: "2" },
                                "Article"
                              ),
                              r.a.createElement("th", null, "Qt Disp")
                            )
                          ),
                          Array.isArray(this.cmd.articles) &&
                            this.cmd.articles.length > 0 &&
                            this.cmd.articles.map(function (e) {
                              return (
                                (t += (e.prixVente || 0) * (e.qt || 0)),
                                r.a.createElement(Se, {
                                  key: e._id,
                                  article: e,
                                })
                              );
                            }),
                          r.a.createElement(
                            "tbody",
                            null,
                            r.a.createElement(
                              "tr",
                              null,
                              r.a.createElement(
                                "td",
                                { colSpan: "2" },
                                "Total:"
                              ),
                              r.a.createElement(
                                "td",
                                null,
                                u.default.toFixed(t),
                                " DHS"
                              )
                            )
                          )
                        ),
                    this.cmd.fullfiled &&
                      r.a.createElement(
                        "div",
                        { className: "printable-title" },
                        "Valid\xe9e"
                      )
                  );
                },
              },
            ]),
            a
          );
        })(r.a.Component),
        _e =
          (a(345),
          function (e) {
            var t,
              a = e.match,
              l = e.userConfig,
              c = e.control,
              s = e.config.endPoint,
              o = a.params._id,
              E = r.a.createRef(),
              p = Object(i.g)(),
              b = Object(n.useState)({}),
              v = Object(m.a)(b, 2),
              g = v[0],
              h = v[1],
              N = Object(n.useState)({}),
              y = Object(m.a)(N, 2),
              C = y[0],
              k = y[1],
              S = g.cmd;
            Object(n.useEffect)(
              function () {
                u.default.post(s, { _id: o }).then(function (e) {
                  e.cmd &&
                    h(function (t) {
                      return (t.cmd = e.cmd), Object(d.a)({}, t);
                    });
                });
              },
              [C]
            );
            var x = Object(T.useReactToPrint)({
              content: function () {
                return E.current;
              },
              documentTitle:
                (null === S ||
                void 0 === S ||
                null === (t = S.sellerInfo) ||
                void 0 === t
                  ? void 0
                  : t.name) +
                " - " +
                (null === S || void 0 === S ? void 0 : S.time),
            });
            return r.a.createElement(
              j,
              null,
              S
                ? r.a.createElement(
                    r.a.Fragment,
                    null,
                    r.a.createElement(O, {
                      paths: (S.fullfiled
                        ? l.fullfiledPaths
                        : l.commandsPaths
                      ).slice(0, 2),
                    }),
                    g.error && g.exceeded
                      ? r.a.createElement(
                          "div",
                          {
                            className: "error-message",
                            style: { fontSize: "2em" },
                          },
                          "Erreur: les quantit\xe9s sont trop faibles pour \xeatre attribu\xe9es"
                        )
                      : r.a.createElement(r.a.Fragment, null),
                    r.a.createElement(
                      "div",
                      {
                        className: "flat-btn-small flat-btn-center btn-blue",
                        onClick: function () {
                          x();
                        },
                      },
                      "Imprimer"
                    ),
                    r.a.createElement(xe, {
                      reload: k,
                      key: S.lastModified || S.fullfilTime,
                      ref: E,
                      cmd: S,
                      control: c,
                    }),
                    c &&
                      !S.fullfiled &&
                      r.a.createElement(
                        "div",
                        { className: "cmd-btn-group" },
                        r.a.createElement(
                          G,
                          {
                            onClick: function () {
                              var e = u.default.post(
                                "/magasin/cmd/confirmCmd",
                                { _id: o }
                              );
                              return (
                                e.then(function (e) {
                                  e.ok
                                    ? k(function (e) {
                                        return {};
                                      })
                                    : e.error &&
                                      (e.errorMessage && alert(e.errorMessage),
                                      h(function (t) {
                                        return Object(d.a)(
                                          Object(d.a)({}, t),
                                          e
                                        );
                                      }));
                                }),
                                e
                              );
                            },
                          },
                          r.a.createElement(
                            "div",
                            { className: "flat-btn-small btn-green" },
                            r.a.createElement("i", {
                              className: "fas fa-thumbs-up",
                            })
                          )
                        ),
                        r.a.createElement(
                          "div",
                          {
                            className: "flat-btn-small btn-red",
                            onClick: function () {
                              u.default
                                .post("/magasin/cmd/cancelCmd", { _id: o })
                                .then(function (e) {
                                  e.ok && p.push("/magasin/commands");
                                });
                            },
                          },
                          r.a.createElement("i", {
                            className: "fas fa-thumbs-down",
                          })
                        )
                      )
                  )
                : r.a.createElement(f, null)
            );
          }),
        Ae = function (e) {
          var t = e.match;
          return r.a.createElement(_e, {
            match: t,
            paths: h.defaultPaths.slice(0, 1),
            userConfig: h,
            config: { endPoint: "/admin/cmd/getOne" },
          });
        },
        we = (function (e) {
          Object(V.a)(a, e);
          var t = Object(L.a)(a);
          function a(e) {
            var n;
            return (
              Object(R.a)(this, a),
              ((n = t.call(this, e)).component = e.component),
              n
            );
          }
          return (
            Object(q.a)(a, [
              {
                key: "render",
                value: function () {
                  return r.a.createElement(
                    "div",
                    { style: Fe.printContainer },
                    this.component
                  );
                },
              },
            ]),
            a
          );
        })(r.a.PureComponent),
        Fe = { printContainer: { margin: "20px" } },
        De = function (e) {
          var t = e.component,
            a = e.title,
            n = r.a.createRef(),
            l = {
              content: function () {
                return n.current;
              },
            };
          a && (l.documentTitle = a);
          var c = Object(T.useReactToPrint)(l);
          return r.a.createElement(
            "div",
            null,
            r.a.createElement(
              "div",
              {
                className: "flat-btn-small flat-btn-center btn-blue",
                onClick: function () {
                  c();
                },
              },
              "Imprimer"
            ),
            r.a.createElement(we, { ref: n, component: t })
          );
        },
        Ue = function (e) {
          var t = e.match,
            a = e.endPoint,
            l = e.paths,
            c = e.baseUrl,
            s = (e.stateHook, Object(n.useState)({})),
            i = Object(m.a)(s, 2),
            o = i[0],
            E = i[1],
            p = t.params._id;
          Object(n.useEffect)(function () {
            var e = { _id: p };
            u.default.post(a, e).then(function (e) {
              e.ok &&
                E(function (t) {
                  return (t.clients = e.clients), Object(d.a)({}, t);
                });
            });
          }, []);
          var b =
              Array.isArray(o.clients) &&
              r.a.createElement(
                r.a.Fragment,
                null,
                r.a.createElement(
                  "div",
                  { className: "printable-title" },
                  "Credit par Clients"
                ),
                r.a.createElement(
                  "div",
                  { className: "time-interval-message" },
                  u.default.ftd(Date.now())
                ),
                r.a.createElement(
                  "table",
                  { className: "table shadow" },
                  r.a.createElement(
                    "thead",
                    { className: "thead-dark" },
                    r.a.createElement(
                      "tr",
                      null,
                      r.a.createElement("th", null, "Client"),
                      r.a.createElement("th", null, "Credit")
                    )
                  ),
                  r.a.createElement(
                    "tbody",
                    null,
                    o.clients.map(function (e) {
                      return r.a.createElement(
                        "tr",
                        { key: e._id },
                        r.a.createElement(Ne, {
                          cols: [
                            {
                              to: c + "/debitStatusClient/" + e._id,
                              text: e.name,
                            },
                            { text: u.default.fn(e.debit) },
                          ],
                        })
                      );
                    })
                  )
                )
              ),
            v = Date.now();
          return r.a.createElement(
            j,
            null,
            r.a.createElement(O, { paths: l }),
            b
              ? r.a.createElement(De, {
                  key: v,
                  component: b,
                  title: "Credit par clients " + u.default.ftd(v),
                })
              : r.a.createElement(f, null)
          );
        },
        Pe = function (e) {
          var t = e.match;
          return r.a.createElement(Ue, {
            match: t,
            endPoint: "/admin/debit/getClients",
            baseUrl: h.baseUrl,
            paths: h.debitPaths.slice(0, 3),
          });
        },
        Ie = function (e) {
          var t = e.endPoint,
            a = e.paths,
            l = e.baseUrl,
            c = (e.stateHook, Object(n.useState)({})),
            s = Object(m.a)(c, 2),
            i = s[0],
            o = s[1];
          Object(n.useEffect)(function () {
            u.default.post(t).then(function (e) {
              e.ok &&
                o(function (t) {
                  return (t.sellers = e.sellers), Object(d.a)({}, t);
                });
            });
          }, []);
          var E =
              Array.isArray(i.sellers) &&
              r.a.createElement(
                r.a.Fragment,
                null,
                r.a.createElement(
                  "div",
                  { className: "printable-title" },
                  "Credit par Vendeurs"
                ),
                r.a.createElement(
                  "div",
                  { className: "time-interval-message" },
                  u.default.ftd(Date.now())
                ),
                r.a.createElement(
                  "table",
                  { className: "table shadow" },
                  r.a.createElement(
                    "thead",
                    { className: "thead-dark" },
                    r.a.createElement(
                      "tr",
                      null,
                      r.a.createElement("th", null, "Vendeur"),
                      r.a.createElement("th", null, "Credit")
                    )
                  ),
                  r.a.createElement(
                    "tbody",
                    null,
                    i.sellers.map(function (e) {
                      return r.a.createElement(
                        "tr",
                        { key: e._id },
                        r.a.createElement(Ne, {
                          cols: [
                            { to: l + "/debitStatus/" + e._id, text: e.name },
                            { text: "".concat(u.default.fn(e.debit)) },
                          ],
                        })
                      );
                    })
                  )
                )
              ),
            p = Date.now();
          return r.a.createElement(
            j,
            null,
            r.a.createElement(O, { paths: a }),
            E
              ? r.a.createElement(De, {
                  key: p,
                  component: E,
                  title: "Credit par vendeurs " + u.default.ftd(p),
                })
              : r.a.createElement(f, null)
          );
        },
        Te = function () {
          return r.a.createElement(Ie, {
            endPoint: "/admin/debit/getSellers",
            paths: h.debitPaths.slice(0, 1),
            baseUrl: h.baseUrl,
          });
        },
        He =
          (a(346),
          function () {
            var e = Object(n.useState)({}),
              t = Object(m.a)(e, 2),
              a = t[0],
              l = t[1];
            Object(n.useEffect)(function () {
              u.default.post("/admin/stats/getToPay").then(function (e) {
                e.ok &&
                  l(function (t) {
                    return (t.sellers = e.sellers), Object(d.a)({}, t);
                  });
              });
            }, []);
            var c = 0,
              s = 0,
              i = 0,
              o =
                Array.isArray(a.sellers) &&
                r.a.createElement(
                  r.a.Fragment,
                  null,
                  r.a.createElement(
                    "div",
                    { className: "printable-title" },
                    "Encaissement"
                  ),
                  r.a.createElement(
                    "div",
                    { className: "time-interval-message" },
                    u.default.ftd(Date.now())
                  ),
                  r.a.createElement(
                    "table",
                    { className: "legal-table" },
                    r.a.createElement(
                      "thead",
                      null,
                      r.a.createElement(
                        "tr",
                        null,
                        r.a.createElement("th", null, "Vendeur"),
                        r.a.createElement("th", null, "Versement"),
                        r.a.createElement("th", null, "Credit Vendeur"),
                        r.a.createElement("th", null, "Stocke Voiture"),
                        r.a.createElement("th", null, "Signature")
                      )
                    ),
                    r.a.createElement(
                      "tbody",
                      null,
                      a.sellers.map(function (e) {
                        var t = e.stats || {};
                        return (
                          (c += t.paid || 0),
                          (s += t.credit || 0),
                          (i += t.totalStock || 0),
                          r.a.createElement(
                            "tr",
                            { key: e._id },
                            r.a.createElement("td", null, e.name),
                            r.a.createElement(
                              "td",
                              null,
                              u.default.toFixed(t.paid || 0),
                              " DHS"
                            ),
                            r.a.createElement(
                              "td",
                              { className: "debit-td" },
                              u.default.toFixed(t.credit || 0),
                              " DHS"
                            ),
                            r.a.createElement(
                              "td",
                              null,
                              u.default.toFixed(t.totalStock || 0)
                            ),
                            r.a.createElement("td", { className: "signature" })
                          )
                        );
                      }),
                      r.a.createElement(
                        "tr",
                        null,
                        r.a.createElement("td", null, "Total"),
                        r.a.createElement(
                          "td",
                          null,
                          u.default.toFixed(c),
                          " DHS"
                        ),
                        r.a.createElement(
                          "td",
                          { className: "debit-td" },
                          u.default.toFixed(s),
                          " DHS"
                        ),
                        r.a.createElement(
                          "td",
                          null,
                          u.default.toFixed(i),
                          " DHS"
                        ),
                        r.a.createElement("td", null)
                      )
                    )
                  )
                );
            return r.a.createElement(
              j,
              null,
              r.a.createElement(O, { paths: h.debitPaths.slice(0, 1) }),
              o
                ? r.a.createElement(De, { key: Date.now(), component: o })
                : r.a.createElement(f, null)
            );
          }),
        Re = function (e) {
          var t = e.endPoint,
            a = e.paths,
            l = r.a.createRef(),
            c = r.a.createRef(),
            s = Object(n.useState)({}),
            i = Object(m.a)(s, 2),
            o = i[0],
            E = i[1],
            p = Object(n.useState)({
              startTime: u.default.formatTimeToHTMLDate(new Date()),
              endTime: "",
            }),
            b = Object(m.a)(p, 2),
            v = b[0],
            g = b[1],
            h = ge({ stateHook: [v, g], startRef: l, endRef: c });
          Object(n.useEffect)(
            function () {
              var e = { startTime: v.startTime };
              u.default.post(t, e).then(function (e) {
                e.ok &&
                  E(function (t) {
                    return (
                      (t.sellers = e.sellers),
                      (t.infoTime = e.startTime),
                      Object(d.a)({}, t)
                    );
                  });
              });
            },
            [v]
          );
          var N = 0,
            y = 0,
            C = 0,
            k =
              Array.isArray(o.sellers) &&
              r.a.createElement(
                r.a.Fragment,
                null,
                r.a.createElement(
                  "div",
                  { className: "message-flex" },
                  o.infoTime &&
                    r.a.createElement(
                      "div",
                      { className: "time-interval-message" },
                      u.default.ftd(o.infoTime, !1)
                    ),
                  r.a.createElement(
                    "div",
                    { className: "interval-message" },
                    "Historique d'Encaissement"
                  )
                ),
                r.a.createElement(
                  "table",
                  { className: "legal-table" },
                  r.a.createElement(
                    "thead",
                    null,
                    r.a.createElement(
                      "tr",
                      null,
                      r.a.createElement("th", null, "Vendeur"),
                      r.a.createElement("th", null, "Pay\xe9"),
                      r.a.createElement("th", null, "Credit Vendeur"),
                      r.a.createElement("th", null, "Stocke Voiture")
                    )
                  ),
                  r.a.createElement(
                    "tbody",
                    null,
                    o.sellers.map(function (e, t) {
                      return (
                        (N += e.payment || 0),
                        (y += e.totalStock || 0),
                        (C += e.debit || 0),
                        r.a.createElement(
                          "tr",
                          { key: t },
                          r.a.createElement("td", null, e.name),
                          r.a.createElement(
                            "td",
                            null,
                            u.default.fn(e.payment || 0),
                            " DHS"
                          ),
                          r.a.createElement(
                            "td",
                            { className: "debit-td" },
                            u.default.fn(e.debit || 0),
                            " DHS"
                          ),
                          r.a.createElement(
                            "td",
                            null,
                            u.default.fn(e.totalStock || 0),
                            " DHS"
                          )
                        )
                      );
                    }),
                    r.a.createElement(
                      "tr",
                      null,
                      r.a.createElement("td", null, "Total: "),
                      r.a.createElement("td", null, u.default.fn(N), " DHS"),
                      r.a.createElement(
                        "td",
                        { className: "debit-td" },
                        u.default.fn(C),
                        " DHS"
                      ),
                      r.a.createElement("td", null, u.default.fn(y), " DHS")
                    )
                  )
                )
              );
          return r.a.createElement(
            j,
            null,
            r.a.createElement(O, { paths: a }),
            r.a.createElement(
              "div",
              null,
              r.a.createElement(
                "div",
                { className: "filter-container" },
                r.a.createElement(
                  "div",
                  null,
                  r.a.createElement(
                    "span",
                    { className: "filter-title" },
                    "Jour"
                  ),
                  r.a.createElement("input", {
                    ref: l,
                    type: "date",
                    value: v.startTime,
                    onChange: h[0],
                    className: "filter-input",
                  })
                )
              )
            ),
            k
              ? r.a.createElement(De, { key: Date.now(), component: k })
              : r.a.createElement(f, null)
          );
        },
        qe = function () {
          return r.a.createElement(Re, {
            endPoint: "/superadmin/stats/getHistory",
            paths: h.debitPaths.slice(0, 1),
          });
        },
        Ve = function () {
          var e = b();
          return Object(m.a)(e, 1)[0].session.logged
            ? r.a.createElement(
                "div",
                { className: "user-home" },
                r.a.createElement(N, null),
                r.a.createElement(
                  i.d,
                  null,
                  r.a.createElement(i.b, {
                    exact: !0,
                    path: h.baseUrl,
                    component: _,
                  }),
                  r.a.createElement(i.b, {
                    exact: !0,
                    path: h.baseUrl + "/vendeurs",
                    component: A,
                  }),
                  r.a.createElement(i.b, {
                    exact: !0,
                    path: h.baseUrl + "/vendeur/:_id",
                    component: ve,
                  }),
                  r.a.createElement(i.b, {
                    exact: !0,
                    path: h.baseUrl + "/pay",
                    component: He,
                  }),
                  r.a.createElement(i.b, {
                    exact: !0,
                    path: h.baseUrl + "/payments",
                    component: qe,
                  }),
                  r.a.createElement(i.b, {
                    exact: !0,
                    path: h.baseUrl + "/clients",
                    component: P,
                  }),
                  r.a.createElement(i.b, {
                    exact: !0,
                    path: h.baseUrl + "/addClient",
                    component: D,
                  }),
                  r.a.createElement(i.b, {
                    exact: !0,
                    path: h.baseUrl + "/addClient/:sellerId",
                    component: D,
                  }),
                  r.a.createElement(i.b, {
                    exact: !0,
                    path: h.baseUrl + "/client/:_id",
                    component: Z,
                  }),
                  r.a.createElement(i.b, {
                    exact: !0,
                    path: h.baseUrl + "/commands",
                    component: je,
                  }),
                  r.a.createElement(i.b, {
                    exact: !0,
                    path: h.baseUrl + "/commandHistory",
                    render: function () {
                      return r.a.createElement(je, { fullfiled: !0 });
                    },
                  }),
                  r.a.createElement(i.b, {
                    exact: !0,
                    path: h.baseUrl + "/command/:_id",
                    component: Ae,
                  }),
                  r.a.createElement(i.b, {
                    exact: !0,
                    path: h.baseUrl + "/debitStatus",
                    component: Te,
                  }),
                  r.a.createElement(i.b, {
                    exact: !0,
                    path: h.baseUrl + "/debitStatus/:_id",
                    component: Pe,
                  }),
                  r.a.createElement(i.b, { component: y })
                )
              )
            : r.a.createElement(i.a, { to: h.baseUrl + "/login" });
        },
        Le =
          (a(347),
          a(348),
          function (e) {
            var t = e.visible,
              a = e.onClick;
            return r.a.createElement(
              "div",
              { tabIndex: 1, className: "eye-password", onClick: a },
              r.a.createElement("i", {
                className: "far fa-eye" + (t ? "-slash" : ""),
              })
            );
          }),
        Me = r.a.createContext(),
        Qe = window.BroadcastChannel && new BroadcastChannel("main_channel"),
        Be = function (e) {
          var t = e.children,
            a = b(),
            n = Object(m.a)(a, 2)[1];
          return (
            Qe &&
              (Qe.onmessage = function (e) {
                var t = e.data;
                switch (t.action) {
                  case "LOGOUT":
                  case "LOGIN":
                    n(function (e) {
                      return (e = t.data), Object(d.a)({}, e);
                    });
                }
              }),
            r.a.createElement(Me.Provider, { value: Qe }, t)
          );
        },
        ze = function () {
          var e = [1, 2].map(function () {
              return r.a.createRef();
            }),
            t = Object(m.a)(e, 2),
            a = t[0],
            l = t[1],
            c = b(),
            s = Object(m.a)(c, 2),
            o = s[0],
            f = s[1],
            E = Object(n.useContext)(Me),
            p = Object(n.useState)({ responded: void 0, passwordVisible: !1 }),
            v = Object(m.a)(p, 2),
            g = v[0],
            N = v[1];
          return o.session.logged
            ? r.a.createElement(i.a, { to: h.baseUrl })
            : r.a.createElement(
                j,
                null,
                r.a.createElement(
                  "div",
                  { className: "AuthContainer" },
                  r.a.createElement(
                    "div",
                    { className: "title" },
                    "Se Connecter"
                  ),
                  r.a.createElement(
                    "form",
                    {
                      onSubmit: function (t) {
                        t.preventDefault();
                        var n,
                          r = Object(I.a)(e);
                        try {
                          for (r.s(); !(n = r.n()).done; ) {
                            var c = n.value;
                            if ("" === c.current.value)
                              return c.current.focus(), !1;
                          }
                        } catch (m) {
                          r.e(m);
                        } finally {
                          r.f();
                        }
                        var s = a.current.value,
                          i = l.current.value;
                        N(
                          Object(d.a)(Object(d.a)({}, g), {}, { responded: !1 })
                        ),
                          u.default
                            .post("/admin/login", { username: s, password: i })
                            .then(function (e) {
                              if (e.logged) {
                                var t = Object(d.a)(
                                  Object(d.a)({}, o),
                                  {},
                                  { session: e }
                                );
                                f(t),
                                  E &&
                                    E.postMessage({ action: "LOGIN", data: t });
                              } else N(Object(d.a)(Object(d.a)({}, g), {}, { responded: !0, error: !0 }));
                            })
                            .catch(function (e) {
                              N(
                                Object(d.a)(
                                  Object(d.a)({}, g),
                                  {},
                                  { responded: !0, error: !0, netErr: !0 }
                                )
                              );
                            });
                      },
                    },
                    r.a.createElement(
                      "div",
                      { className: "box" },
                      r.a.createElement(
                        "div",
                        { className: "inputContainer" },
                        r.a.createElement(
                          "div",
                          { className: "icon" },
                          r.a.createElement("i", {
                            className: "far fa-envelope",
                          })
                        ),
                        r.a.createElement("input", {
                          ref: a,
                          autoFocus: !0,
                          className: "input",
                          type: "text",
                          placeholder: "Email ou username",
                        })
                      ),
                      r.a.createElement(
                        "div",
                        { className: "inputContainer" },
                        r.a.createElement(
                          "div",
                          { className: "icon" },
                          r.a.createElement("i", { className: "far fa-lock" })
                        ),
                        r.a.createElement("input", {
                          ref: l,
                          name: "password",
                          className: "input",
                          type: g.passwordVisible ? "text" : "password",
                          placeholder: "PASSWORD",
                        }),
                        r.a.createElement(Le, {
                          onClick: function () {
                            N(
                              Object(d.a)(
                                Object(d.a)({}, g),
                                {},
                                { passwordVisible: !g.passwordVisible }
                              )
                            );
                          },
                          visible: g.passwordVisible,
                        })
                      ),
                      g.error &&
                        r.a.createElement(
                          "div",
                          { className: "error-message" },
                          g.netErr
                            ? "Erreur de Connexion"
                            : "Le nom d'utilisateur ou mot de passe est incorrect"
                        ),
                      r.a.createElement(
                        "label",
                        { tabIndex: 0 },
                        r.a.createElement("input", {
                          type: "submit",
                          hidden: !0,
                        }),
                        r.a.createElement(
                          "div",
                          { className: "submit-btn" },
                          !1 === g.responded
                            ? r.a.createElement(C, null)
                            : r.a.createElement(r.a.Fragment, null),
                          "Se Connecter"
                        )
                      )
                    )
                  )
                )
              );
        },
        Ke = function () {
          return r.a.createElement(
            p,
            null,
            r.a.createElement(
              Be,
              null,
              r.a.createElement(
                i.d,
                null,
                r.a.createElement(i.b, {
                  exact: !0,
                  path: h.baseUrl + "/login",
                  component: ze,
                }),
                r.a.createElement(i.b, { path: h.baseUrl, component: Ve })
              )
            )
          );
        },
        Ye = a(178),
        We = ["polling", "websocket"],
        Ge = r.a.createContext(),
        Je = function (e) {
          var t = e.children,
            a = Object(n.useState)(void 0),
            l = Object(m.a)(a, 2),
            c = l[0],
            s = l[1];
          return (
            Object(n.useEffect)(function () {
              var e;
              return (
                s(function (t) {
                  return (e = Object(Ye.io)({ transports: We }));
                }),
                function () {
                  e && (e.off(), e.disconnect());
                }
              );
            }, []),
            c
              ? r.a.createElement(Ge.Provider, { value: [c, s] }, t)
              : r.a.createElement(r.a.Fragment, null)
          );
        },
        Xe = r.a.createContext();
      function $e(e) {
        var t = e.children,
          a = {
            serverLoaded: !1,
            logged: !1,
            step: 1,
            Total: 0,
            search: "",
            ref: r.a.createRef(),
          },
          l = Object(n.useState)(a),
          c = Object(m.a)(l, 2),
          s = c[0],
          i = c[1];
        return (
          Object(n.useEffect)(function () {
            u.default.post("/seller/session").then(function (e) {
              i(function (t) {
                return (
                  (t.logged = e.logged),
                  (t.serverLoaded = !0),
                  Object(d.a)({}, t)
                );
              });
            });
          }, []),
          s.refresh
            ? (u.default.post("/seller/session").then(function (e) {
                i(function (t) {
                  return Object(d.a)(
                    Object(d.a)({}, a),
                    {},
                    { serverLoaded: !0, logged: e.logged }
                  );
                });
              }),
              !1)
            : s.serverLoaded
            ? r.a.createElement(
                Je,
                null,
                r.a.createElement(Xe.Provider, { value: [s, i] }, t)
              )
            : r.a.createElement(f, null)
        );
      }
      a(377);
      var Ze = function () {
          var e = Object(i.g)();
          return r.a.createElement(
            "div",
            {
              className: "logoutBtn refresh-btn",
              onClick: function () {
                u.default.post("/seller/session/logout").then(function (t) {
                  t.logged || e.push("/");
                });
              },
            },
            r.a.createElement("i", { className: "fas fa-sign-out" })
          );
        },
        et = (a(378), a(179)),
        tt = a.n(et),
        at =
          (a(379),
          (function (e) {
            Object(V.a)(a, e);
            var t = Object(L.a)(a);
            function a(e) {
              var n;
              return (
                Object(R.a)(this, a),
                ((n = t.call(this, e)).invoice = e.invoice),
                (n.sellerInfo =
                  (e.sellerInfo && e.sellerInfo.sellerInfo) || {}),
                n
              );
            }
            return (
              Object(q.a)(a, [
                {
                  key: "render",
                  value: function () {
                    var e = this.invoice,
                      t = e.products,
                      a = e.client,
                      n = e.total - e.paid,
                      l = a && a.debit;
                    return r.a.createElement(
                      "div",
                      { className: "invoice-card" },
                      r.a.createElement(
                        "div",
                        { className: "invoice-title" },
                        r.a.createElement(
                          "div",
                          { className: "main-title" },
                          r.a.createElement(
                            "h4",
                            { className: "company-name seller-company-name" },
                            "Prefrite"
                          )
                        ),
                        r.a.createElement(
                          "div",
                          { className: "invoice-info" },
                          r.a.createElement(
                            "div",
                            { className: "invoice-info-item" },
                            "CLIENT : ",
                            a.name
                          ),
                          this.sellerInfo &&
                            this.sellerInfo.name &&
                            r.a.createElement(
                              "div",
                              { className: "invoice-info-item" },
                              "VENDEUR : ",
                              this.sellerInfo.name
                            ),
                          r.a.createElement(
                            "div",
                            { className: "invoice-info-item" },
                            "ICE : ",
                            a.ice
                          ),
                          r.a.createElement(
                            "div",
                            { className: "invoice-info-item" },
                            "DATE : ",
                            u.default.ftd(e.time)
                          )
                        )
                      ),
                      r.a.createElement(
                        "div",
                        { className: "invoice-details" },
                        r.a.createElement(
                          "table",
                          { className: "invoice-table" },
                          r.a.createElement(
                            "thead",
                            null,
                            r.a.createElement(
                              "tr",
                              null,
                              r.a.createElement(
                                "td",
                                { className: "invoice-details-item" },
                                "PRODUIT"
                              ),
                              r.a.createElement(
                                "td",
                                { className: "invoice-details-item" },
                                "QTE"
                              ),
                              r.a.createElement(
                                "td",
                                { className: "invoice-details-item" },
                                "PRIX"
                              )
                            )
                          ),
                          Array.isArray(t) &&
                            t.map(function (e, t) {
                              return r.a.createElement(
                                "tbody",
                                { key: t },
                                r.a.createElement(
                                  "tr",
                                  null,
                                  r.a.createElement(
                                    "td",
                                    { className: "invoice-item" },
                                    e.name
                                  ),
                                  r.a.createElement(
                                    "td",
                                    { className: "invoice-item" },
                                    u.default.fn(e.qt)
                                  ),
                                  r.a.createElement(
                                    "td",
                                    { className: "invoice-item" },
                                    u.default.fn(e.price * e.qt),
                                    r.a.createElement(
                                      "span",
                                      { className: "span" },
                                      "DHS"
                                    ),
                                    r.a.createElement(
                                      "div",
                                      { className: "price-calcul" },
                                      "(",
                                      u.default.fn(e.qt),
                                      " * ",
                                      u.default.fn(e.price),
                                      r.a.createElement(
                                        "span",
                                        { className: "span" },
                                        "DHS"
                                      ),
                                      ")"
                                    )
                                  )
                                )
                              );
                            })
                        )
                      ),
                      r.a.createElement(
                        "div",
                        { className: "invoice-footer-details" },
                        r.a.createElement(
                          "table",
                          { className: "invoice-table" },
                          r.a.createElement(
                            "tbody",
                            null,
                            r.a.createElement(
                              "tr",
                              { className: "footer-item" },
                              r.a.createElement(
                                "th",
                                { className: "total" },
                                "TOTAL:"
                              ),
                              r.a.createElement(
                                "td",
                                { className: "total" },
                                u.default.fn(e.total),
                                " ",
                                r.a.createElement(
                                  "span",
                                  { className: "span" },
                                  "DHS"
                                )
                              )
                            ),
                            r.a.createElement(
                              "tr",
                              { className: "footer-item" },
                              r.a.createElement(
                                "th",
                                { className: "total" },
                                "TOTAL PAY\xc9:"
                              ),
                              r.a.createElement(
                                "td",
                                { className: "total" },
                                u.default.fn(e.paid || 0),
                                " ",
                                r.a.createElement(
                                  "span",
                                  { className: "span" },
                                  "DHS"
                                )
                              )
                            ),
                            n > 0
                              ? r.a.createElement(
                                  "tr",
                                  { className: "footer-item" },
                                  r.a.createElement(
                                    "th",
                                    { className: "total" },
                                    "RESTE:"
                                  ),
                                  r.a.createElement(
                                    "td",
                                    { className: "total" },
                                    u.default.fn(n),
                                    " ",
                                    r.a.createElement(
                                      "span",
                                      { className: "span" },
                                      "DHS"
                                    )
                                  )
                                )
                              : r.a.createElement(r.a.Fragment, null),
                            l
                              ? r.a.createElement(
                                  "tr",
                                  { className: "footer-item" },
                                  r.a.createElement(
                                    "th",
                                    { className: "total" },
                                    "CR\xc9DIT:"
                                  ),
                                  r.a.createElement(
                                    "td",
                                    { className: "total" },
                                    u.default.fn(l),
                                    " ",
                                    r.a.createElement(
                                      "span",
                                      { className: "span" },
                                      "DHS"
                                    )
                                  )
                                )
                              : r.a.createElement(r.a.Fragment, null)
                          )
                        )
                      )
                    );
                  },
                },
              ]),
              a
            );
          })(r.a.PureComponent)),
        nt = function (e) {
          var t = e.children,
            a = e.className,
            l = e.style,
            c = e.onSubmit,
            s = Object(n.useState)({}),
            i = Object(m.a)(s, 2),
            u = i[0],
            o = i[1];
          function f() {
            o(function (e) {
              return (e.disabled = !1), Object(d.a)({}, e);
            });
          }
          return r.a.createElement(
            "form",
            {
              className: a,
              style: l,
              onSubmit: u.disabled
                ? function (e) {
                    e.preventDefault();
                  }
                : function (e) {
                    var t = c(e);
                    o(function (e) {
                      return (e.disabled = !0), Object(d.a)({}, e);
                    }),
                      t && t.finally(f);
                  },
            },
            t
          );
        },
        rt = function (e) {
          var t = e.match.params._id,
            a = Object(n.useContext)(Xe),
            l = Object(m.a)(a, 2),
            c = l[0],
            o = (l[1], ke()),
            f = Object(m.a)(o, 2)[1],
            E = Object(i.g)(),
            p = Object(n.useState)({ serverLoaded: !1, payRest: "" }),
            b = Object(m.a)(p, 2),
            v = b[0],
            g = b[1],
            h = r.a.createRef(),
            N = r.a.createRef();
          var O = function () {
            g(function (e) {
              return (e.isDeleting = !e.isDeleting), Object(d.a)({}, e);
            });
          };
          if (
            (Object(n.useEffect)(function () {
              u.default
                .post("/seller/invoice/getOne", { _id: t })
                .then(function (e) {
                  e.serverLoaded = !0;
                  var t = e.total - e.paid;
                  g(function (a) {
                    return Object(d.a)(
                      Object(d.a)(Object(d.a)({ serverLoaded: !0 }, a), e),
                      {},
                      { rest: t }
                    );
                  });
                });
            }, []),
            !v.serverLoaded)
          )
            return r.a.createElement("div", null, "Loading...");
          if (v.notFound) return r.a.createElement("div", null, "Not Found!");
          var j = r.a.createElement(at, {
            key: v.rest,
            invoice: v,
            sellerInfo: c,
          });
          return r.a.createElement(
            "div",
            { className: "multisteps-form__content" },
            c.isControlled &&
              r.a.createElement(
                r.a.Fragment,
                null,
                r.a.createElement(
                  "div",
                  { className: "flat-btn-small btn-red", onClick: O },
                  r.a.createElement("span", null, "Retirer"),
                  r.a.createElement("i", { className: "far fa-trash" })
                ),
                v.isDeleting &&
                  r.a.createElement($, {
                    message: "Ce BL",
                    confirm: function () {
                      return new Promise(function (e) {
                        u.default
                          .post("/seller/invoice/delete", { _id: v._id })
                          .then(function (e) {
                            f(function (e) {
                              return { reload: !0 };
                            }),
                              E.push("/seller/invoices");
                          });
                      });
                    },
                    cancel: O,
                  })
              ),
            r.a.createElement(
              "div",
              {
                style: {
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                },
              },
              r.a.createElement(
                s.b,
                {
                  to: "/seller/invoices",
                  className: "flat-btn-small btn-yellow",
                },
                "Retour"
              ),
              r.a.createElement(
                "div",
                {
                  className: "flat-btn-small btn-blue",
                  onClick: function () {
                    tt()(h.current).then(function (e) {
                      var t = "rawbt:" + e.toDataURL("image/jpeg", 0.2);
                      window.location.href = t;
                    });
                  },
                },
                r.a.createElement("span", null, "Imprimer"),
                r.a.createElement("i", { className: "far fa-print" })
              )
            ),
            r.a.createElement(
              "div",
              { ref: h },
              j,
              Array.isArray(v.payDetails) &&
                r.a.createElement(
                  r.a.Fragment,
                  null,
                  r.a.createElement(
                    "div",
                    { className: "title-2" },
                    "Historique Payment"
                  ),
                  r.a.createElement(
                    "table",
                    { className: "table" },
                    r.a.createElement(
                      "thead",
                      null,
                      r.a.createElement(
                        "tr",
                        null,
                        r.a.createElement("th", null, "Montant"),
                        r.a.createElement("th", null, "Date")
                      )
                    ),
                    r.a.createElement(
                      "tbody",
                      null,
                      v.payDetails.map(function (e, t) {
                        return r.a.createElement(
                          "tr",
                          { key: t },
                          r.a.createElement(
                            "td",
                            null,
                            u.default.fn(e.amount),
                            " DHS"
                          ),
                          r.a.createElement("td", null, u.default.ftd(e.time))
                        );
                      })
                    )
                  )
                )
            ),
            0 !== v.rest &&
              r.a.createElement(
                nt,
                {
                  className: "pay-rest inline-form",
                  onSubmit: function (e) {
                    e.preventDefault();
                    var t = v.payRest;
                    if ("number" === typeof t && t > 0 && t <= v.rest) {
                      var a = {
                          payRest: t,
                          clientId: v.client._id,
                          invoiceId: v._id,
                        },
                        n = u.default.post("/seller/payRest", a);
                      return (
                        n.then(function (e) {
                          e.ok
                            ? f(function (e) {
                                return { reload: !0 };
                              })
                            : e.error && alert("error");
                        }),
                        n
                      );
                    }
                  },
                },
                r.a.createElement(
                  "div",
                  null,
                  r.a.createElement("input", {
                    ref: N,
                    type: "number",
                    step: F.defaultInputStep,
                    className: "form-control",
                    placeholder: "Le Reste",
                    value: v.payRest,
                    onChange: function (e) {
                      var t = N.current.value;
                      (t = parseFloat(t)),
                        isNaN(t) || t < 1
                          ? (t = "")
                          : t > v.rest && (t = v.rest),
                        g(function (e) {
                          return (e.payRest = t), Object(d.a)({}, e);
                        });
                    },
                  })
                ),
                r.a.createElement(
                  "button",
                  { className: "flat-btn-small btn-blue" },
                  "Payer"
                )
              )
          );
        },
        lt = function (e) {
          var t = e.debit,
            a = Object(n.useContext)(Xe),
            l = Object(m.a)(a, 2)[1],
            c = Object(i.g)();
          return r.a.createElement(
            "div",
            {
              className: "small-app-card",
              onClick: function (e) {
                e.preventDefault(),
                  e.stopPropagation(),
                  l(function (e) {
                    return (
                      (e.filterInvoice = { state: "not_paid" }),
                      (e.invoices = null),
                      Object(d.a)({}, e)
                    );
                  }),
                  c.push("/seller/invoices");
              },
            },
            r.a.createElement("span", null, "Credit: "),
            "\xa0",
            u.default.fn(t),
            " DHS"
          );
        },
        ct =
          (a(380),
          function () {
            var e = Object(n.useContext)(Xe),
              t = Object(m.a)(e, 1)[0],
              a = Object(n.useState)({
                items: [
                  {
                    nameLink: "Vente",
                    to: "/seller/sell/clients",
                    icon: "money-bill",
                    color: "#57c757",
                  },
                  {
                    nameLink: "Bon de livraison",
                    to: "/seller/invoices",
                    icon: "copy",
                    color: "#555",
                  },
                  {
                    nameLink: "Stock Mobile",
                    to: "/seller/state",
                    icon: "cubes",
                    color: "purple",
                  },
                  {
                    nameLink: "Commander",
                    to: "/seller/addCommand",
                    icon: "terminal",
                    color: "#57c757",
                  },
                  {
                    nameLink: "Commandes",
                    to: "/seller/cmd",
                    icon: "history",
                    color: "purple",
                  },
                ],
              }),
              l = Object(m.a)(a, 1)[0],
              c = t.stats || {};
            return r.a.createElement(
              "div",
              { className: "seller-dashboard" },
              r.a.createElement(
                "div",
                { className: "card-list" },
                Array.isArray(l.items) &&
                  l.items.map(function (e, t) {
                    return r.a.createElement(
                      s.b,
                      { to: e.to, className: "small-app-card", key: t },
                      r.a.createElement("span", null, e.nameLink),
                      "\xa0",
                      r.a.createElement("i", {
                        className: "fas fa-" + e.icon,
                        style: { color: e.color },
                      })
                    );
                  }),
                r.a.createElement(
                  "div",
                  { className: "small-app-card" },
                  r.a.createElement("span", null, "Revenu: "),
                  "\xa0",
                  u.default.fn(c.paid || 0),
                  " DHS"
                ),
                r.a.createElement(
                  "div",
                  { className: "small-app-card" },
                  r.a.createElement("span", null, "My Commission: "),
                  "\xa0",
                  u.default.fn(0.02 * c.paid),
                  " DHS"
                ),
                c.debit > 0
                  ? r.a.createElement(lt, { debit: c.debit })
                  : r.a.createElement(r.a.Fragment, null)
              )
            );
          }),
        st = function (e) {
          var t = e.client;
          return r.a.createElement(
            "h3",
            {
              style: {
                textAlign: "center",
                margin: "10px auto",
                textDecoration: "underline",
              },
            },
            "Vente au ",
            t.name
          );
        },
        it =
          (a(150),
          function (e) {
            var t = e.step;
            return r.a.createElement(
              "div",
              { className: "row switch-pane", style: { marginBottom: "10px" } },
              r.a.createElement(
                "div",
                { className: "col-12 col-lg-8 ml-auto mr-auto m" },
                r.a.createElement(
                  "div",
                  { className: "multisteps-form__progress" },
                  [
                    { title: "Clients" },
                    { title: "Choisissez une cat\xe9gorie" },
                    { title: "Choisir un article" },
                    { title: "Payer" },
                    { title: "Facture d'achat" },
                  ].map(function (e, a) {
                    return r.a.createElement(
                      "button",
                      {
                        key: a,
                        className:
                          t >= a + 1
                            ? "multisteps-form__progress-btn js-active"
                            : "multisteps-form__progress-btn",
                        type: "button",
                      },
                      e.title
                    );
                  })
                )
              )
            );
          }),
        mt = function () {
          var e = Object(n.useContext)(Xe),
            t = Object(m.a)(e, 1)[0],
            a = ke(),
            l = Object(m.a)(a, 2)[1],
            c = t.articles.reduce(function (e, t) {
              return e + (t.qt || 0) * (t.price || 0);
            }, 0),
            s = Object(n.useState)({ payment: c }),
            o = Object(m.a)(s, 2),
            f = o[0],
            E = o[1],
            p = r.a.createRef(),
            b = t.currClient;
          if (!b) return r.a.createElement(i.a, { to: "/seller" });
          if (!c) return r.a.createElement("div", null, "Vide!");
          var v = {};
          return (
            (v._id = Math.random().toString(36).substring(2)),
            (v.client = t.currClient),
            (v.time = Date.now()),
            (v.products = t.articles.filter(function (e) {
              return e.qt;
            })),
            (v.total = c),
            (v.paid = f.payment),
            (v.debit = b.debit + (c - f.payment)),
            r.a.createElement(
              r.a.Fragment,
              null,
              r.a.createElement(it, { step: 4 }),
              r.a.createElement(
                "div",
                { className: " multisteps-form__content" },
                r.a.createElement(st, { client: b }),
                r.a.createElement(
                  "h2",
                  { className: "text-center" },
                  "Paiement"
                ),
                r.a.createElement(at, {
                  key: f.payment,
                  invoice: Object(d.a)(
                    Object(d.a)({}, v),
                    {},
                    {
                      client: Object(d.a)(
                        Object(d.a)({}, v.client),
                        {},
                        { debit: void 0 }
                      ),
                    }
                  ),
                }),
                r.a.createElement(
                  "table",
                  { className: "container mb-4 table-hover table-sortable" },
                  r.a.createElement("thead", null),
                  r.a.createElement(
                    "tbody",
                    null,
                    r.a.createElement(
                      "tr",
                      { className: "row" },
                      r.a.createElement(
                        "td",
                        { className: "col" },
                        r.a.createElement("strong", null, "Total: ")
                      ),
                      r.a.createElement(
                        "td",
                        { className: "col" },
                        r.a.createElement("strong", null, c, " DHS")
                      )
                    ),
                    r.a.createElement(
                      "tr",
                      { className: "row" },
                      r.a.createElement(
                        "td",
                        { className: "col" },
                        r.a.createElement("strong", null, "Plafon: ")
                      ),
                      r.a.createElement(
                        "td",
                        { className: "col" },
                        r.a.createElement("strong", null, b.plafon, " DHS")
                      )
                    ),
                    b.debit
                      ? r.a.createElement(
                          "tr",
                          { className: "row", style: { color: "red" } },
                          r.a.createElement(
                            "td",
                            { className: "col" },
                            r.a.createElement("strong", null, "D\xe9bit: ")
                          ),
                          r.a.createElement(
                            "td",
                            { className: "col" },
                            r.a.createElement("strong", null, b.debit, " DHS")
                          )
                        )
                      : r.a.createElement(r.a.Fragment, null)
                  )
                ),
                r.a.createElement(
                  "table",
                  { className: "container mb-4 table-hover table-sortable" },
                  r.a.createElement("thead", null),
                  r.a.createElement(
                    "tbody",
                    null,
                    r.a.createElement(
                      "tr",
                      { className: "row" },
                      r.a.createElement(
                        "td",
                        { className: "col" },
                        r.a.createElement("input", {
                          ref: p,
                          type: "number",
                          step: F.defaultInputStep,
                          className:
                            "form-control" + (f.error ? " is-invalid" : ""),
                          placeholder: "Payer",
                          value: f.payment,
                          onChange: function (e) {
                            var t,
                              a = parseFloat(p.current.value);
                            isNaN(a)
                              ? (a = "")
                              : a > c
                              ? (a = c)
                              : a < 0 && (a = "");
                            var n = b.plafon || 0,
                              r = b.debit || 0;
                            c - a > n - r && (t = !0),
                              E(function (e) {
                                return (
                                  (e.payment = a || ""),
                                  (e.rest = c - a),
                                  (e.error = t),
                                  Object(d.a)({}, e)
                                );
                              });
                          },
                        }),
                        r.a.createElement(
                          "div",
                          { className: "invalid-feedback" },
                          "Plafond d\xe9pass\xe9"
                        )
                      ),
                      r.a.createElement(
                        "td",
                        { className: "col" },
                        r.a.createElement(
                          G,
                          {
                            className: "btn btn-primary ml-auto js-btn-next",
                            onClick: function () {
                              var e;
                              E(function (e) {
                                return (
                                  (e.serverLoaded = !1), Object(d.a)({}, e)
                                );
                              }),
                                (e = t.sellerInfo.superSeller
                                  ? function (e) {
                                      return {
                                        _id: e._id,
                                        qt: e.qt,
                                        price: e.price,
                                      };
                                    }
                                  : function (e) {
                                      return { _id: e._id, qt: e.qt };
                                    });
                              var a = t.articles
                                  .filter(function (e) {
                                    return e.qt;
                                  })
                                  .map(e),
                                n = f.payment,
                                r = { clientId: b._id, arts: a, payment: n },
                                c = u.default.post("/seller/buy", r);
                              return (
                                c.then(function (e) {
                                  e.invoiceId
                                    ? l(function (e) {
                                        return { reload: !0 };
                                      })
                                    : E(function (e) {
                                        return (
                                          (e.serverLoaded = !0),
                                          Object(d.a)({}, e)
                                        );
                                      });
                                }),
                                c
                              );
                            },
                          },
                          "Payer"
                        ),
                        !1 === f.serverLoaded &&
                          r.a.createElement("i", {
                            className: "fas fa-spinner fa-spin",
                            style: { margin: "0px 10px" },
                          })
                      )
                    ),
                    f.rest
                      ? r.a.createElement(
                          "tr",
                          { className: "row" },
                          r.a.createElement(
                            "td",
                            { className: "col" },
                            r.a.createElement("strong", null, "Reste: "),
                            f.rest
                          ),
                          r.a.createElement("td", { className: "col" })
                        )
                      : r.a.createElement(r.a.Fragment, null)
                  )
                )
              )
            )
          );
        },
        ut = function () {
          var e = Object(n.useContext)(Xe),
            t = Object(m.a)(e, 2)[1],
            a = Object(i.g)();
          return r.a.createElement(
            "div",
            {
              className: "flat-btn-small btn-red",
              onClick: function () {
                t(function (e) {
                  return (
                    (e.articles = e.articles.map(function (e) {
                      return (e.price = e.prixVente), (e.qt = e.defaultQt), e;
                    })),
                    Object(d.a)({}, e)
                  );
                }),
                  a.push("/seller/sell/clients");
              },
            },
            "Anuuler"
          );
        },
        ot = function (e) {
          var t = e.article,
            a = Object(n.useContext)(Xe),
            l = Object(m.a)(a, 2),
            c = l[0],
            s = l[1],
            i = r.a.createRef(),
            o = r.a.createRef(),
            f = { sellerQt: t.sellerQt, price: t.price, qt: t.qt || "" },
            E = c.sellerInfo.superSeller,
            p = Object(n.useState)(f),
            b = Object(m.a)(p, 2),
            v = b[0],
            g = b[1];
          return r.a.createElement(
            "tr",
            null,
            r.a.createElement("td", null, t.name),
            r.a.createElement("td", null, t.sellerQt),
            r.a.createElement(
              "td",
              null,
              r.a.createElement("input", {
                className: "form-control",
                type: "number",
                step: F.defaultInputStep,
                ref: i,
                value: v.qt,
                onChange: function (e) {
                  var a = parseFloat(i.current.value);
                  isNaN(a) || a < 0
                    ? (a = "")
                    : a > v.sellerQt && (a = v.sellerQt),
                    (a = u.default.roundDecimal(a)),
                    g(function (e) {
                      return (e.qt = a), Object(d.a)({}, e);
                    }),
                    s(function (e) {
                      return (
                        e.articles || (e.articles = []),
                        (e.articles = e.articles.map(function (e) {
                          return e._id === t._id && (e.qt = a), e;
                        })),
                        Object(d.a)({}, e)
                      );
                    });
                },
              })
            ),
            r.a.createElement(
              "td",
              null,
              E
                ? r.a.createElement("input", {
                    className:
                      "form-control " + (v.priceError ? "error-input" : ""),
                    type: "number",
                    step: F.defaultInputStep,
                    ref: o,
                    value: v.price,
                    onChange: function () {
                      var e,
                        a = parseFloat(o.current.value);
                      isNaN(a) || a < 0
                        ? ((a = ""), (e = !0))
                        : a < t.prixAchat && (e = !0),
                        g(function (t) {
                          return (
                            (t.price = a),
                            (t.priceError = e),
                            Object(d.a)({}, t)
                          );
                        }),
                        s(function (e) {
                          return (
                            e.articles || (e.articles = []),
                            (e.articles = e.articles.map(function (e) {
                              return e._id === t._id && (e.price = a), e;
                            })),
                            Object(d.a)({}, e)
                          );
                        });
                    },
                  })
                : r.a.createElement(r.a.Fragment, null, t.prixVente)
            )
          );
        },
        dt =
          (a(381),
          function (e) {
            var t = e.match,
              a = Object(n.useContext)(Xe),
              l = Object(m.a)(a, 2),
              c = l[0],
              u = l[1];
            if (!c.currClient) return r.a.createElement(i.a, { to: "/seller" });
            var o = c.search.trim().toLowerCase(),
              f = t.params.catId,
              E = (c.articles || []).filter(function (e) {
                return e.catId === f && e.sellerQt;
              });
            if (o && o.length > 0) {
              var p = new RegExp(o, "i");
              E = c.articles.filter(function (e) {
                return e.catId === f && e.name.match(p);
              });
            }
            var b = c.articles.reduce(function (e, t) {
              return e + (t.qt || 0) * (t.price || 0);
            }, 0);
            return r.a.createElement(
              r.a.Fragment,
              null,
              r.a.createElement(it, { step: 3 }),
              r.a.createElement(
                "div",
                { className: " multisteps-form__content" },
                r.a.createElement(st, { client: c.currClient }),
                r.a.createElement(
                  "div",
                  { className: "md-form mt-0" },
                  r.a.createElement("input", {
                    ref: c.ref,
                    className: "form-control",
                    type: "text",
                    placeholder: "Rechercher",
                    value: c.search,
                    onChange: function (e) {
                      u(function (e) {
                        return (
                          (e.search = c.ref.current && c.ref.current.value),
                          Object(d.a)({}, e)
                        );
                      });
                    },
                  }),
                  r.a.createElement(
                    "table",
                    { className: "table" },
                    r.a.createElement(
                      "thead",
                      { className: "thead-dark" },
                      r.a.createElement(
                        "tr",
                        null,
                        r.a.createElement("th", null, "Nom"),
                        r.a.createElement("th", null, "Qt Disp"),
                        r.a.createElement("th", null, "Qte"),
                        r.a.createElement("th", null, "Prix")
                      )
                    ),
                    r.a.createElement(
                      "tbody",
                      null,
                      Array.isArray(E) &&
                        E.map(function (e, t) {
                          return r.a.createElement(ot, { key: t, article: e });
                        })
                    ),
                    r.a.createElement(
                      "tbody",
                      null,
                      r.a.createElement(
                        "tr",
                        null,
                        r.a.createElement("td", null),
                        r.a.createElement("td", null),
                        r.a.createElement(
                          "td",
                          null,
                          r.a.createElement("strong", null, "Total: ")
                        ),
                        r.a.createElement(
                          "td",
                          null,
                          r.a.createElement("strong", null, b, " DHS")
                        )
                      )
                    )
                  )
                ),
                r.a.createElement(
                  "div",
                  { className: "button-row d-flex mt-4" },
                  r.a.createElement(ut, null),
                  r.a.createElement(
                    s.b,
                    {
                      className: "ml-auto flat-btn-small btn-blue",
                      to: "/seller/sell/client/" + c.currClient._id,
                    },
                    "Suivant"
                  )
                )
              )
            );
          }),
        ft =
          (a(151),
          function (e) {
            var t = e.client;
            return r.a.createElement(
              s.b,
              {
                className: "seller-client-item",
                to: "/seller/sell/client/" + t._id,
              },
              r.a.createElement(
                "div",
                { className: "card-body" },
                r.a.createElement("h5", { className: "card-title" }, t.name),
                r.a.createElement(
                  "p",
                  { className: "card-text" },
                  "ICE : ",
                  t.ice
                ),
                r.a.createElement(
                  "p",
                  { className: "card-text" },
                  "Plafon : ",
                  t.plafon
                ),
                t.debit && 0 !== t.debit
                  ? r.a.createElement(
                      s.b,
                      {
                        to: "/seller/client/" + t._id + "/debit",
                        className: "flat-btn-small btn-red",
                      },
                      "Credit: ",
                      u.default.toFixed(t.debit),
                      " DHS"
                    )
                  : r.a.createElement(r.a.Fragment, null)
              )
            );
          }),
        Et = a(183),
        pt = function () {
          var e = Object(n.useContext)(Xe),
            t = Object(m.a)(e, 1)[0],
            a = Object(i.g)(),
            l = Object(n.useState)({ delay: 100 }),
            c = Object(m.a)(l, 1)[0];
          return r.a.createElement(
            "div",
            { className: "video" },
            r.a.createElement(Et.a, {
              delay: c.delay,
              style: { height: 300, width: "100%" },
              onError: function (e) {
                console.error(e);
              },
              onScan: function (e) {
                if (e) {
                  var n,
                    r = e,
                    l = t.clients;
                  if (Array.isArray(l)) {
                    var c,
                      s = Object(I.a)(l);
                    try {
                      for (s.s(); !(c = s.n()).done; ) {
                        var i = c.value;
                        if (i.ice === r)
                          return a.push("/seller/sell/client/" + i._id), !0;
                      }
                    } catch (m) {
                      s.e(m);
                    } finally {
                      s.f();
                    }
                    n = !0;
                  } else n = !0;
                  n && alert("Client n'existe pas!");
                }
              },
            })
          );
        },
        bt = a(23),
        vt = a.n(bt),
        gt = a(70),
        ht = (function (e) {
          Object(V.a)(a, e);
          var t = Object(L.a)(a);
          function a(e) {
            var n;
            return Object(R.a)(this, a), ((n = t.call(this, e)).props = e), n;
          }
          return (
            Object(q.a)(a, [
              {
                key: "updatedOnChange",
                value: function (e) {
                  var t,
                    a = this.props,
                    n = a._ref,
                    r = a.onChange,
                    l = a.pos,
                    c = void 0 === l || l,
                    s = (t =
                      n && n.current
                        ? n.current
                        : e && e.target
                        ? e.target
                        : {}).value,
                    i = parseFloat(s);
                  isNaN(i)
                    ? (t.value = "")
                    : i &&
                      (c
                        ? i < 0 && (t.value = "")
                        : (t.value = u.default.roundDecimal(i))),
                    "function" === typeof r && r(e);
                },
              },
              {
                key: "render",
                value: function () {
                  var e = this.props,
                    t = e._ref,
                    a = e.ph,
                    n = e.className,
                    l = e.style,
                    c = e.value,
                    s = e.onKeyDown;
                  return r.a.createElement("input", {
                    ref: t,
                    placeholder: a,
                    className: n,
                    style: l,
                    onKeyDown: s,
                    type: "number",
                    step: F.defaultInputStep,
                    value: c,
                    onChange: this.updatedOnChange.bind(this),
                  });
                },
              },
            ]),
            a
          );
        })(r.a.Component),
        Nt = function () {
          var e = Object(n.useContext)(Xe),
            t = Object(m.a)(e, 1)[0],
            a = Object(n.useState)({ clients: t.clients }),
            l = Object(m.a)(a, 2),
            c = l[0],
            s = l[1];
          return r.a.createElement(
            r.a.Fragment,
            null,
            r.a.createElement(it, { step: 1 }),
            r.a.createElement(
              "div",
              { className: " multisteps-form__content" },
              c.scanning
                ? r.a.createElement(
                    r.a.Fragment,
                    null,
                    r.a.createElement(
                      "div",
                      {
                        className: "flat-btn-small flat-btn-center btn-red",
                        onClick: function () {
                          s(function (e) {
                            return (e.scanning = !1), Object(d.a)({}, e);
                          });
                        },
                      },
                      r.a.createElement("span", null, "fermer la cam\xe9ra"),
                      r.a.createElement("i", { className: "fas fa-times" })
                    ),
                    r.a.createElement(pt, null)
                  )
                : r.a.createElement(
                    r.a.Fragment,
                    null,
                    r.a.createElement(
                      "div",
                      {
                        className: "flat-btn-small flat-btn-center btn-green",
                        onClick: function () {
                          s(function (e) {
                            return (e.scanning = !0), Object(d.a)({}, e);
                          });
                        },
                      },
                      r.a.createElement("span", null, "Scanner QRCode"),
                      r.a.createElement("i", { className: "fas fa-qrcode" })
                    )
                  ),
              r.a.createElement(
                "div",
                null,
                r.a.createElement("input", {
                  className: "form-control",
                  placeholder: "Nom Client",
                  value: c.search || "",
                  onChange: function (e) {
                    var a = e.target.value;
                    s(function (e) {
                      return (
                        (e.search = a),
                        (e.clients = a
                          ? t.clients.filter(function (e) {
                              return (
                                e.name &&
                                e.name.match(
                                  u.default.secureAndConvertStringToRegex(a, [
                                    "i",
                                  ])
                                )
                              );
                            })
                          : t.clients),
                        Object(d.a)({}, e)
                      );
                    });
                  },
                })
              ),
              r.a.createElement(
                "div",
                { className: "seller-clients" },
                Array.isArray(c.clients) &&
                  c.clients.map(function (e, t) {
                    return r.a.createElement(ft, { key: t, client: e });
                  })
              )
            )
          );
        },
        Ot =
          (a(384),
          function () {
            var e = Object(n.useContext)(Xe),
              t = Object(m.a)(e, 1)[0],
              a = Object(i.g)();
            if (!t.currClient) return r.a.createElement(r.a.Fragment, null);
            var l = t.articles.reduce(function (e, t) {
              return e + (t.qt || 0) * (t.price || 0);
            }, 0);
            return r.a.createElement(
              "div",
              { className: "multisteps-form__content" },
              r.a.createElement(
                "div",
                { className: "card-list" },
                Array.isArray(t.cats) &&
                  t.cats
                    .filter(function (e) {
                      return e;
                    })
                    .map(function (e, t) {
                      return r.a.createElement(
                        s.b,
                        {
                          className: "small-app-card",
                          key: t,
                          to: "/seller/sell/arts/" + e._id,
                        },
                        e.name
                      );
                    })
              ),
              r.a.createElement(
                "table",
                { className: "container mb-4" },
                r.a.createElement("thead", null),
                r.a.createElement(
                  "tbody",
                  null,
                  r.a.createElement(
                    "tr",
                    { className: "row" },
                    r.a.createElement("td", { className: "col" }),
                    r.a.createElement("td", { className: "col" }),
                    r.a.createElement(
                      "td",
                      { className: "col" },
                      r.a.createElement("strong", null, "Total: ")
                    ),
                    r.a.createElement(
                      "td",
                      { className: "col" },
                      r.a.createElement("strong", null, l, " DHS")
                    )
                  )
                )
              ),
              r.a.createElement(
                "div",
                { className: "button-row d-flex mt-4" },
                r.a.createElement(ut, null),
                r.a.createElement(
                  "div",
                  {
                    className: "ml-auto flat-btn-small btn-blue",
                    onClick: function () {
                      l && a.push("/seller/sell/payer");
                    },
                  },
                  "Termin\xe9"
                )
              )
            );
          }),
        jt = function (e) {
          var t,
            a,
            l = e.match,
            c = Object(n.useContext)(Xe),
            s = Object(m.a)(c, 2),
            i = s[0],
            u = s[1],
            o = l.params._id,
            f = i.clients,
            E = Object(I.a)(f);
          try {
            for (E.s(); !(a = E.n()).done; ) {
              var p = a.value;
              if (p._id === o) {
                t = p;
                break;
              }
            }
          } catch (b) {
            E.e(b);
          } finally {
            E.f();
          }
          return (
            Object(n.useEffect)(function () {
              u(function (e) {
                return (e.currClient = t), Object(d.a)({}, e);
              });
            }, []),
            t
              ? r.a.createElement(
                  r.a.Fragment,
                  null,
                  r.a.createElement(it, { step: 2 }),
                  r.a.createElement(st, { client: t }),
                  r.a.createElement(Ot, null)
                )
              : r.a.createElement(r.a.Fragment, null)
          );
        },
        yt = function () {
          var e = Object(n.useContext)(Xe),
            t = Object(m.a)(e, 2),
            a = (t[0], t[1]);
          return (
            Object(n.useEffect)(function () {
              a(function (e) {
                return (
                  (e.articles = e.articles.map(function (e) {
                    return (e.price = e.prixVente), (e.qt = e.defaultQt), e;
                  })),
                  Object(d.a)({}, e)
                );
              });
            }, []),
            r.a.createElement(
              r.a.Fragment,
              null,
              r.a.createElement(i.b, {
                exact: !0,
                path: "/seller/sell/clients",
                component: Nt,
              }),
              r.a.createElement(i.b, {
                exact: !0,
                path: "/seller/sell/client/:_id",
                component: jt,
              }),
              r.a.createElement(i.b, {
                exact: !0,
                path: "/seller/sell/arts/:catId",
                component: dt,
              }),
              r.a.createElement(i.b, {
                exact: !0,
                path: "/seller/sell/payer",
                component: mt,
              })
            )
          );
        },
        Ct =
          (a(385),
          function () {
            var e = Object(n.useContext)(Xe),
              t = Object(m.a)(e, 2),
              a = t[0],
              l = t[1],
              c = Object(w.a)(new Array(3).keys()).map(function () {
                return r.a.createRef();
              }),
              s = Object(m.a)(c, 3),
              i = s[0],
              u = s[1],
              o = s[2],
              f = a.filterInvoice;
            f || (f = { state: "", date: "", name: "" });
            var E = f,
              p = E.state,
              b = E.date,
              v = E.name;
            function g(e) {
              e && e.preventDefault();
              var t = i.current.value,
                a = u.current.value,
                n = o.current.value;
              l(function (e) {
                return (
                  (e.invoices = null),
                  (e.filterInvoice = { name: t, state: a, date: n }),
                  Object(d.a)({}, e)
                );
              });
            }
            return r.a.createElement(
              "div",
              { className: "invoice_filter form-row" },
              r.a.createElement(
                "form",
                { onSubmit: g, className: "invoice_filter-item inline-form" },
                r.a.createElement("input", {
                  ref: i,
                  placeholder: "Nom:",
                  className: "form-control",
                  value: v || "",
                  onChange: function () {
                    var e = i.current.value,
                      t = u.current.value,
                      a = o.current.value;
                    l(function (n) {
                      return (
                        (n.filterInvoice = { name: e, state: t, date: a }),
                        Object(d.a)({}, n)
                      );
                    });
                  },
                }),
                r.a.createElement(
                  "label",
                  null,
                  r.a.createElement(
                    "div",
                    { className: "flat-btn-small btn-blue" },
                    "Aller"
                  ),
                  r.a.createElement("input", { type: "submit", hidden: !0 })
                )
              ),
              r.a.createElement(
                "div",
                { className: "invoice_filter-item" },
                r.a.createElement(
                  "select",
                  {
                    ref: u,
                    className: "form-control",
                    value: p || "",
                    onChange: g,
                  },
                  r.a.createElement("option", { value: "all" }, "TOUS"),
                  r.a.createElement(
                    "option",
                    { value: "not_paid" },
                    "NON PAY\xc9S"
                  ),
                  r.a.createElement("option", { value: "paid" }, "PAY\xc9S")
                )
              ),
              r.a.createElement(
                "div",
                { className: "invoice_filter-item" },
                r.a.createElement("input", {
                  ref: o,
                  type: "date",
                  className: "form-control",
                  value: b || "",
                  onChange: g,
                })
              ),
              r.a.createElement(
                "div",
                {
                  className: "invoice_filter-item refresh-btn",
                  tabIndex: 0,
                  onClick: function () {
                    l(function (e) {
                      return (
                        (e.filterInvoice = null),
                        (e.invoices = null),
                        (e.endInvoice = !1),
                        Object(d.a)({}, e)
                      );
                    });
                  },
                },
                r.a.createElement("i", { className: "fas fa-sync" })
              )
            );
          }),
        kt =
          (a(386),
          function () {
            var e = Object(n.useContext)(Xe),
              t = Object(m.a)(e, 2),
              a = t[0],
              l = t[1],
              c = Object(n.useState)({}),
              s = Object(m.a)(c, 2),
              i = s[0],
              o = s[1];
            function f() {
              return new Promise(function (e, t) {
                var n = { skip: (a.invoices && a.invoices.length) || 0 },
                  r = a.filterInvoice;
                r && (n.filter = r),
                  u.default.post("/seller/invoice/get", n).then(function (t) {
                    var a,
                      n = [];
                    t && ((n = t.invoices), (a = t.endInvoice)),
                      l(function (e) {
                        return (
                          e.invoices || (e.invoices = []),
                          (e.invoices = e.invoices.concat(n)),
                          (e.endInvoice = a),
                          Object(d.a)({}, e)
                        );
                      }),
                      e(t);
                  });
              });
            }
            function E() {
              return (E = Object(gt.a)(
                vt.a.mark(function e() {
                  return vt.a.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if (a.endInvoice) {
                            e.next = 5;
                            break;
                          }
                          return (
                            o(function (e) {
                              return (e.loading = !0), Object(d.a)({}, e);
                            }),
                            (e.next = 4),
                            f()
                          );
                        case 4:
                          o(function (e) {
                            return (e.loading = !1), Object(d.a)({}, e);
                          });
                        case 5:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              )).apply(this, arguments);
            }
            return (
              Object(n.useEffect)(function () {
                a.invoices || f();
              }),
              r.a.createElement(
                "div",
                null,
                r.a.createElement(Ct, null),
                a.invoices
                  ? r.a.createElement(
                      r.a.Fragment,
                      null,
                      r.a.createElement(
                        "table",
                        { className: "table list-invoice-table" },
                        r.a.createElement(
                          "thead",
                          null,
                          r.a.createElement(
                            "tr",
                            null,
                            r.a.createElement("th", null, "CLIENT"),
                            r.a.createElement("th", null, "Date"),
                            r.a.createElement("th", null, "Status")
                          )
                        ),
                        r.a.createElement(
                          "tbody",
                          null,
                          Array.isArray(a.invoices) &&
                            a.invoices.map(function (e) {
                              if (!e)
                                return r.a.createElement(r.a.Fragment, null);
                              var t = e.total - e.paid;
                              return r.a.createElement(
                                "tr",
                                { key: e._id },
                                r.a.createElement(Ne, {
                                  cols: [
                                    {
                                      to: "/seller/invoice/" + e._id,
                                      text: e.client.name,
                                    },
                                    { text: u.default.ftd(e.time) },
                                    {
                                      text:
                                        0 === t
                                          ? r.a.createElement(
                                              "div",
                                              {
                                                className:
                                                  "invoice-status-cool",
                                              },
                                              r.a.createElement("i", {
                                                className: "fas fa-check",
                                              })
                                            )
                                          : r.a.createElement(
                                              "div",
                                              {
                                                className:
                                                  "invoice-status-uncool",
                                              },
                                              r.a.createElement("i", {
                                                className: "fas fa-bell",
                                              })
                                            ),
                                    },
                                  ],
                                })
                              );
                            })
                        )
                      ),
                      !a.endInvoice &&
                        r.a.createElement(U, {
                          onClick: function () {
                            return E.apply(this, arguments);
                          },
                          isLoading: i.loading,
                        })
                    )
                  : r.a.createElement("div", null, "Loading...")
              )
            );
          }),
        St = function () {
          var e = Object(n.useContext)(Xe),
            t = Object(m.a)(e, 2)[1];
          return r.a.createElement(
            "div",
            {
              className: "refresh-btn",
              tabIndex: 0,
              onClick: function () {
                t(function (e) {
                  return (e.refresh = !0), Object(d.a)({}, e);
                });
              },
            },
            r.a.createElement("i", { className: "fas fa-sync" })
          );
        },
        xt = function (e) {
          var t = e.article;
          return r.a.createElement(
            "tr",
            null,
            r.a.createElement("td", null, t.name),
            r.a.createElement(
              "td",
              { className: "heading" },
              u.default.toFixed(t.sellerQt)
            )
          );
        },
        _t =
          (a(387),
          a(388),
          function (e) {
            var t = e.stats,
              a = u.default.toFixed(t.leftToSell || 0),
              n = u.default.toFixed(t.paid || 0),
              l = u.default.toFixed(t.credit || 0),
              c = [
                "rgba(99, 255, 0, 0.5)",
                "rgba(255, 0, 0, 0.5)",
                "rgba(0, 0, 0, 0.2)",
              ],
              s = {
                labels: [
                  "Vendus: ".concat(n, " DHS"),
                  "Credit: ".concat(l, " DHS"),
                  "\xe0 Vendre ".concat(a, " DHS"),
                ],
                datasets: [
                  {
                    label: "Stats",
                    data: [n, l, a],
                    backgroundColor: c,
                    borderColor: c,
                    borderWidth: 1,
                  },
                ],
              };
            return r.a.createElement(
              "div",
              { className: "stats-chart" },
              r.a.createElement(me.b, {
                data: s,
                options: {
                  responsive: !0,
                  legend: {
                    onClick: function (e) {
                      return e.stopPropagation();
                    },
                  },
                },
              })
            );
          }),
        At = function () {
          var e = Object(n.useContext)(Xe),
            t = Object(m.a)(e, 1)[0],
            a = t.articles || [],
            l = t.stats || {};
          return r.a.createElement(
            r.a.Fragment,
            null,
            r.a.createElement(_t, { stats: l }),
            r.a.createElement(
              "table",
              { className: "content-table" },
              r.a.createElement(
                "thead",
                null,
                r.a.createElement(
                  "tr",
                  null,
                  r.a.createElement("th", { className: "heading" }, "Produit"),
                  r.a.createElement("th", { className: "heading" }, "Unit\xe9")
                )
              ),
              r.a.createElement(
                "tbody",
                null,
                Array.isArray(a) &&
                  a
                    .filter(function (e) {
                      return e.sellerQt;
                    })
                    .map(function (e, t) {
                      return r.a.createElement(xt, { key: t, article: e });
                    })
              )
            )
          );
        },
        wt = r.a.createContext();
      function Ft(e) {
        var t = e.children,
          a = Object(n.useState)({ SelectedArticles: [], passed: !1 }),
          l = Object(m.a)(a, 2),
          c = l[0],
          s = l[1];
        return (
          Object(n.useEffect)(function () {
            u.default.post("/seller/getToCommand").then(function (e) {
              e.categories &&
                s(function (t) {
                  return (
                    (t.categories = e.categories),
                    (t.articles = e.articles),
                    Object(d.a)({}, t)
                  );
                });
            });
          }, []),
          c.categories
            ? r.a.createElement(wt.Provider, { value: [c, s] }, t)
            : r.a.createElement(f, null)
        );
      }
      var Dt = function () {
          var e = Object(n.useContext)(wt),
            t = Object(m.a)(e, 2)[1],
            a = function () {
              t(function (e) {
                return (e.SelectedArticles = []), Object(d.a)({}, e);
              });
            };
          return r.a.createElement(
            r.a.Fragment,
            null,
            r.a.createElement(
              s.b,
              {
                className: "flat-btn-small btn-red",
                type: "button",
                onClick: a,
                to: "/seller/",
              },
              "Anuuler"
            )
          );
        },
        Ut =
          (a(389),
          function (e) {
            var t = e.SelectedArticles,
              a = Object(i.g)(),
              l = Object(n.useContext)(Xe),
              c = Object(m.a)(l, 2),
              s = (c[0], c[1]),
              o = Object(n.useState)({}),
              f = Object(m.a)(o, 2),
              E = f[0],
              p = f[1];
            return E.confirming
              ? r.a.createElement(
                  r.a.Fragment,
                  null,
                  r.a.createElement(
                    "h3",
                    { className: "texttitle" },
                    "Commande effectuee!"
                  ),
                  r.a.createElement(
                    "div",
                    {
                      className: "flat-btn-small btn-green",
                      onClick: function () {
                        a.push("/seller");
                      },
                    },
                    "Retour"
                  )
                )
              : r.a.createElement(
                  r.a.Fragment,
                  null,
                  r.a.createElement(
                    "h3",
                    { className: "texttitle" },
                    "votre commande est"
                  ),
                  r.a.createElement(
                    "table",
                    { className: "cmd-table" },
                    r.a.createElement(
                      "thead",
                      null,
                      r.a.createElement(
                        "tr",
                        null,
                        r.a.createElement("th", null, "Nom"),
                        r.a.createElement("th", null, "Qte")
                      )
                    ),
                    r.a.createElement(
                      "tbody",
                      null,
                      Array.isArray(t) &&
                        t.map(function (e, t) {
                          return r.a.createElement(
                            "tr",
                            { className: "grid-container-fluid", key: t },
                            r.a.createElement(
                              "td",
                              { className: "item" },
                              e.name
                            ),
                            r.a.createElement("td", { className: "item" }, e.qt)
                          );
                        })
                    )
                  ),
                  r.a.createElement(
                    "div",
                    { className: "info-flex" },
                    r.a.createElement(Dt, null),
                    r.a.createElement(
                      G,
                      {
                        onClick: function () {
                          var e = {};
                          e.articles = t.map(function (e) {
                            return { _id: e._id, qt: e.qt };
                          });
                          var a = u.default.post("/seller/addCommand", e);
                          return (
                            a.then(function (e) {
                              e.ok &&
                                (p(function (e) {
                                  return (
                                    (e.confirming = !0), Object(d.a)({}, e)
                                  );
                                }),
                                s(function (e) {
                                  return (e.cmds = void 0), Object(d.a)({}, e);
                                }));
                            }),
                            a
                          );
                        },
                        className: "ml-auto flat-btn-small btn-blue",
                      },
                      "effectuer"
                    )
                  )
                );
          }),
        Pt = function () {
          var e = Object(n.useContext)(wt),
            t = Object(m.a)(e, 2),
            a = t[0],
            l = t[1];
          return r.a.createElement(
            r.a.Fragment,
            null,
            a.passed && a.SelectedArticles.length
              ? r.a.createElement(Ut, { SelectedArticles: a.SelectedArticles })
              : r.a.createElement(
                  r.a.Fragment,
                  null,
                  r.a.createElement(
                    "h3",
                    { className: "texttitle" },
                    "Choisir une Categorie"
                  ),
                  r.a.createElement(
                    "div",
                    { className: "card-list" },
                    Array.isArray(a.categories) &&
                      a.categories.map(function (e, t) {
                        return r.a.createElement(
                          s.b,
                          {
                            key: t,
                            to: "/seller/addCommand/" + e._id,
                            className: "small-app-card",
                          },
                          e.name
                        );
                      })
                  ),
                  r.a.createElement(
                    "div",
                    { className: "button-row d-flex mt-4" },
                    r.a.createElement(Dt, null),
                    r.a.createElement(
                      "div",
                      {
                        className: "ml-auto flat-btn-small btn-blue",
                        onClick: function () {
                          var e =
                            (Array.isArray(a.articles) &&
                              a.articles.filter(function (e) {
                                return e.qt;
                              })) ||
                            [];
                          l(function (t) {
                            return (
                              (t.SelectedArticles = e),
                              (t.passed = !0),
                              Object(d.a)({}, t)
                            );
                          });
                        },
                      },
                      "r\xe9vision"
                    )
                  )
                )
          );
        },
        It =
          (a(390),
          a(391),
          function (e) {
            var t = e.article,
              a = Object(n.useContext)(wt),
              l = Object(m.a)(a, 2)[1],
              c = Object(n.useState)({ qt: t.qt || "", qtStocke: t.qtStocke }),
              s = Object(m.a)(c, 2),
              i = s[0],
              o = s[1],
              f = r.a.createRef();
            return r.a.createElement(
              "tr",
              null,
              r.a.createElement("td", null, t.name),
              r.a.createElement("td", null, u.default.fn(t.sellerQt || 0)),
              r.a.createElement("td", null, u.default.fn(t.qtStocke)),
              r.a.createElement(
                "td",
                null,
                r.a.createElement("input", {
                  className: "form-control",
                  type: "number",
                  step: F.defaultInputStep,
                  ref: f,
                  value: i.qt,
                  onChange: function (e) {
                    var a = parseFloat(e.target.value);
                    isNaN(a) || a < 0
                      ? (a = "")
                      : a > i.qtStocke && (a = i.qtStocke),
                      o(function (e) {
                        return (e.qt = a), Object(d.a)({}, e);
                      }),
                      l(function (e) {
                        return (
                          e.articles || (e.articles = []),
                          (e.articles = e.articles.map(function (e) {
                            return e._id === t._id && (e.qt = a), e;
                          })),
                          Object(d.a)({}, e)
                        );
                      });
                  },
                })
              )
            );
          }),
        Tt = function (e) {
          var t = e.match,
            a = Object(n.useContext)(wt),
            l = Object(m.a)(a, 1)[0],
            c = t.params._id,
            i =
              l.articles &&
              l.articles.filter(function (e) {
                return e.catId === c;
              });
          return r.a.createElement(
            r.a.Fragment,
            null,
            r.a.createElement(
              "h3",
              { className: "texttitle" },
              "Choisir les Artices"
            ),
            r.a.createElement(
              "table",
              { className: "simple-table" },
              r.a.createElement(
                "thead",
                null,
                r.a.createElement(
                  "tr",
                  null,
                  r.a.createElement("th", null, "Produit"),
                  r.a.createElement("th", null, "Qt Vndr"),
                  r.a.createElement("th", null, "Qt S"),
                  r.a.createElement("th", null, "Qt")
                )
              ),
              r.a.createElement(
                "tbody",
                null,
                Array.isArray(i) &&
                  i.map(function (e, t) {
                    return r.a.createElement(It, { article: e, key: t });
                  })
              )
            ),
            r.a.createElement(
              "div",
              { className: "button-row d-flex mt-4" },
              r.a.createElement(Dt, null),
              r.a.createElement(
                s.b,
                {
                  className: "ml-auto flat-btn-small btn-blue",
                  to: "/seller/addCommand",
                },
                "Suivant"
              )
            )
          );
        },
        Ht = function () {
          return r.a.createElement(
            r.a.Fragment,
            null,
            r.a.createElement(
              "div",
              { className: " multisteps-form__content" },
              r.a.createElement(
                Ft,
                null,
                r.a.createElement(
                  i.d,
                  null,
                  r.a.createElement(i.b, {
                    exact: !0,
                    path: "/seller/addCommand",
                    component: Pt,
                  }),
                  r.a.createElement(i.b, {
                    exact: !0,
                    path: "/seller/addCommand/:_id",
                    component: Tt,
                  })
                )
              )
            )
          );
        },
        Rt = function () {
          var e = Object(n.useContext)(Xe),
            t = Object(m.a)(e, 2),
            a = t[0],
            l = t[1],
            c = Object(n.useState)({}),
            s = Object(m.a)(c, 2),
            i = s[0],
            o = s[1];
          function f() {
            if (!a.cmds) {
              o(function (e) {
                return (e.loading = !0), Object(d.a)({}, e);
              });
              var e = { skip: a.cmds && a.cmds.length },
                t = u.default.post("/seller/cmd/get", e);
              return (
                t.then(function (e) {
                  o(function (e) {
                    return (e.loading = !1), Object(d.a)({}, e);
                  }),
                    e.commands &&
                      l(function (t) {
                        return (
                          t.cmds || (t.cmds = []),
                          (t.cmds = [].concat(
                            Object(w.a)(t.cmds),
                            Object(w.a)(e.commands)
                          )),
                          (t.endCmds = e.endCmds),
                          Object(d.a)({}, t)
                        );
                      });
                }),
                t
              );
            }
          }
          return (
            Object(n.useEffect)(function () {
              f();
            }, []),
            r.a.createElement(
              j,
              null,
              Array.isArray(a.cmds) &&
                r.a.createElement(
                  r.a.Fragment,
                  null,
                  r.a.createElement(
                    "table",
                    { className: "table list-invoice-table" },
                    r.a.createElement(
                      "thead",
                      null,
                      r.a.createElement(
                        "tr",
                        null,
                        r.a.createElement("th", null, "Date"),
                        r.a.createElement("th", null, "Arts"),
                        r.a.createElement("th", null, "Status")
                      )
                    ),
                    r.a.createElement(
                      "tbody",
                      null,
                      a.cmds.map(function (e) {
                        return r.a.createElement(
                          "tr",
                          { key: e._id },
                          r.a.createElement(Ne, {
                            cols: [
                              {
                                to: "/seller/cmd/" + e._id,
                                text: u.default.ftd(e.time),
                              },
                              { text: e.artCount },
                              {
                                text: e.fullfiled
                                  ? r.a.createElement(
                                      "div",
                                      { className: "invoice-status-cool" },
                                      r.a.createElement("i", {
                                        className: "fas fa-check",
                                      })
                                    )
                                  : r.a.createElement(
                                      "div",
                                      { className: "invoice-status-uncool" },
                                      r.a.createElement("i", {
                                        className: "fas fa-bell",
                                      })
                                    ),
                              },
                            ],
                          })
                        );
                      })
                    )
                  ),
                  !a.endCmds &&
                    r.a.createElement(U, { isLoading: i.loading, onClick: f })
                )
            )
          );
        },
        qt = function (e) {
          var t = e.match,
            a = Object(n.useState)({}),
            l = Object(m.a)(a, 2),
            c = l[0],
            s = l[1],
            i = t.params._id;
          Object(n.useEffect)(function () {
            u.default.post("/seller/cmd/getOne", { _id: i }).then(function (e) {
              e.ok &&
                s(function (t) {
                  return (t.cmd = e.cmd), Object(d.a)({}, t);
                });
            });
          }, []);
          var o = 0;
          return r.a.createElement(
            j,
            null,
            c.cmd
              ? r.a.createElement(
                  "div",
                  null,
                  r.a.createElement(
                    "div",
                    { style: { textAlign: "center" } },
                    c.cmd._id
                  ),
                  r.a.createElement(
                    "div",
                    { className: "time-interval-message" },
                    u.default.ftd(c.cmd.time)
                  ),
                  r.a.createElement(
                    "table",
                    { className: "table" },
                    r.a.createElement(
                      "thead",
                      { className: "thead-dark" },
                      r.a.createElement(
                        "tr",
                        null,
                        r.a.createElement("th", null, "Article"),
                        r.a.createElement("th", null, "Qte"),
                        r.a.createElement("th", null, "Prix")
                      )
                    ),
                    Array.isArray(c.cmd.articles) &&
                      c.cmd.articles.length > 0 &&
                      c.cmd.articles.map(function (e) {
                        return (
                          (o += (e.prixVente || 0) * (e.qt || 0)),
                          r.a.createElement(
                            "tbody",
                            { key: e._id },
                            r.a.createElement(
                              "tr",
                              null,
                              r.a.createElement("td", null, e.name),
                              r.a.createElement(
                                "td",
                                null,
                                u.default.toFixed(e.qt)
                              ),
                              r.a.createElement(
                                "td",
                                null,
                                u.default.toFixed(e.prixVente),
                                " DHS"
                              )
                            )
                          )
                        );
                      }),
                    r.a.createElement(
                      "tbody",
                      null,
                      r.a.createElement(
                        "tr",
                        null,
                        r.a.createElement("td", { colSpan: "2" }, "Total:"),
                        r.a.createElement(
                          "td",
                          null,
                          u.default.toFixed(o),
                          " DHS"
                        )
                      )
                    )
                  ),
                  c.cmd.fullfiled &&
                    r.a.createElement(
                      "div",
                      { className: "printable-title" },
                      "Valid\xe9e"
                    )
                )
              : r.a.createElement(f, null)
          );
        },
        Vt =
          (a(392),
          function (e) {
            var t,
              a = e.match,
              l = r.a.createRef(),
              c = r.a.useState({}),
              s = Object(m.a)(c, 2),
              o = s[0],
              f = s[1],
              E = Object(n.useContext)(Xe),
              p = Object(m.a)(E, 2),
              b = p[0],
              v = p[1],
              g = Object(i.g)(),
              h = a.params._id,
              N = b.clients,
              O = {},
              j = Object(I.a)(N);
            try {
              for (j.s(); !(t = j.n()).done; ) {
                var y = t.value;
                if (y._id === h) {
                  O = y;
                  break;
                }
              }
            } catch (C) {
              j.e(C);
            } finally {
              j.f();
            }
            return r.a.createElement(
              r.a.Fragment,
              null,
              r.a.createElement(
                "div",
                { className: "title-2" },
                "credit de ",
                O.name
              ),
              o.isClientPaying
                ? r.a.createElement(
                    "div",
                    null,
                    r.a.createElement(
                      "div",
                      null,
                      "Credit: ",
                      u.default.fn(O.debit || 0),
                      " DHS"
                    ),
                    !o.clicked &&
                      r.a.createElement(
                        nt,
                        {
                          className: "flex",
                          onSubmit: function (e) {
                            e.preventDefault(),
                              f(function (e) {
                                return (e.clicked = !0), Object(d.a)({}, e);
                              });
                            var t = u.default.post("/seller/clients/payDebit", {
                              _id: O._id,
                              payment: o.payment,
                            });
                            return (
                              t.then(function (e) {
                                e.ok && window.location.reload();
                              }),
                              t
                            );
                          },
                        },
                        r.a.createElement(ht, {
                          _ref: l,
                          className: "form-control",
                          ph: "Paiement",
                          value: o.payment || "",
                          onChange: function () {
                            var e = l.current.value;
                            e = parseFloat(e) || 0;
                            var t = O.debit || 0;
                            e > t && (e = t),
                              f(function (t) {
                                return (t.payment = e), Object(d.a)({}, t);
                              });
                          },
                        }),
                        r.a.createElement(
                          "button",
                          {
                            type: "submit",
                            className: "flat-btn-small btn-blue",
                          },
                          "Payer"
                        )
                      )
                  )
                : r.a.createElement(
                    "div",
                    { className: "debit-choice" },
                    r.a.createElement(
                      "div",
                      {
                        className: "flat-btn-small btn-green",
                        onClick: function () {
                          f(function (e) {
                            return (e.isClientPaying = !0), Object(d.a)({}, e);
                          });
                        },
                      },
                      "Payer par client"
                    ),
                    r.a.createElement(
                      "div",
                      {
                        className: "flat-btn-small btn-blue",
                        onClick: function (e) {
                          e.preventDefault(),
                            e.stopPropagation(),
                            v(function (e) {
                              return (
                                (e.filterInvoice = {
                                  ice: O.ice,
                                  state: "not_paid",
                                }),
                                (e.invoices = null),
                                Object(d.a)({}, e)
                              );
                            }),
                            g.push("/seller/invoices");
                        },
                      },
                      "Payer par facture"
                    )
                  )
            );
          }),
        Lt = function () {
          var e = Object(n.useContext)(Xe),
            t = Object(m.a)(e, 2),
            a = t[0],
            l = t[1];
          if (
            (Object(n.useEffect)(function () {
              a.logged &&
                (a.infoFetched ||
                  u.default.post("/seller/getAllInfo").then(function (e) {
                    var t = e.artsNcats,
                      a = e.clients;
                    e.ok &&
                      l(function (n) {
                        var r;
                        return (
                          (n.infoFetched = !0),
                          (n.logged = !0),
                          (n.sellerInfo = e.sellerInfo),
                          (n.clients = a),
                          (n.cats = t.cats),
                          (n.isControlled = e.isControlled),
                          (r = function (e) {
                            return (
                              (e.price = e.prixVente), (e.defaultQt = ""), e
                            );
                          }),
                          (n.articles = t.arts.map(r)),
                          (n.stats = t.stats),
                          Object(d.a)({}, n)
                        );
                      });
                  }));
            }),
            !a.logged)
          )
            return r.a.createElement(i.a, { to: "/" });
          if (!a.infoFetched) return r.a.createElement(f, null);
          var c = a.sellerInfo;
          return r.a.createElement(
            r.a.Fragment,
            null,
            r.a.createElement(
              "header",
              { className: "user-nav" },
              r.a.createElement(
                "div",
                { className: "user-nav-item" },
                r.a.createElement(
                  s.b,
                  { to: "/seller", className: "user-name-title" },
                  c && c.name
                )
              ),
              r.a.createElement(
                "div",
                { className: "user-nav-item" },
                r.a.createElement(St, null),
                r.a.createElement(g, null),
                r.a.createElement(Ze, null)
              )
            ),
            r.a.createElement(
              "div",
              { className: "content" },
              r.a.createElement(
                "div",
                { className: "content__inner" },
                r.a.createElement(
                  "div",
                  { className: "Container" },
                  r.a.createElement(
                    "div",
                    { className: "multisteps-form" },
                    r.a.createElement(
                      "div",
                      { className: "" },
                      r.a.createElement(
                        i.d,
                        null,
                        r.a.createElement(i.b, {
                          exact: !0,
                          path: "/seller",
                          component: ct,
                        }),
                        r.a.createElement(i.b, {
                          path: "/seller/sell",
                          component: yt,
                        }),
                        r.a.createElement(i.b, {
                          path: "/seller/client/:_id/debit",
                          component: Vt,
                        }),
                        r.a.createElement(i.b, {
                          exact: !0,
                          path: "/seller/invoices",
                          component: kt,
                        }),
                        r.a.createElement(i.b, {
                          exact: !0,
                          path: "/seller/invoice/:_id",
                          component: rt,
                        }),
                        r.a.createElement(i.b, {
                          exact: !0,
                          path: "/seller/state",
                          component: At,
                        }),
                        r.a.createElement(i.b, {
                          path: "/seller/addCommand",
                          component: Ht,
                        }),
                        r.a.createElement(i.b, {
                          exact: !0,
                          path: "/seller/cmd",
                          component: Rt,
                        }),
                        r.a.createElement(i.b, {
                          exact: !0,
                          path: "/seller/cmd/:_id",
                          component: qt,
                        }),
                        r.a.createElement(i.a, { to: "/seller" })
                      )
                    )
                  )
                )
              )
            )
          );
        },
        Mt = function () {
          return r.a.createElement(
            $e,
            null,
            r.a.createElement(
              i.d,
              null,
              r.a.createElement(i.b, { path: "/seller", component: Lt })
            )
          );
        },
        Qt = Object(n.createContext)(),
        Bt = function (e) {
          var t = e.children,
            a = Object(i.g)(),
            l = Object(n.useState)({
              startTime: "",
              endTime: "",
              positions: [],
            }),
            c = Object(m.a)(l, 2),
            s = c[0],
            o = c[1];
          return (
            Object(n.useEffect)(function () {
              s.session ||
                u.default.post("/superadmin/session").then(function (e) {
                  e.logged
                    ? o(function (t) {
                        return (t.session = e), Object(d.a)({}, t);
                      })
                    : a.push("/");
                });
            }),
            s.session
              ? s.session.logged
                ? r.a.createElement(
                    Je,
                    null,
                    r.a.createElement(Qt.Provider, { value: [s, o] }, t)
                  )
                : r.a.createElement(r.a.Fragment, null)
              : r.a.createElement(f, null)
          );
        },
        zt =
          (a(393),
          {
            baseUrl: "/superadmin",
            defaultPaths: [
              {
                type: "icon",
                icon: "home",
                title: "Accueil",
                to: "/superadmin",
              },
              {
                type: "icon",
                icon: "list",
                title: "Categories",
                to: "/superadmin/categories",
              },
            ],
            statsPaths: [
              {
                type: "icon",
                icon: "home",
                title: "Accueil",
                to: "/superadmin",
              },
              { title: "Statistiques", to: "/superadmin/stats" },
            ],
            alertPaths: [
              {
                type: "icon",
                icon: "home",
                title: "Accueil",
                to: "/superadmin",
              },
            ],
            accountPaths: [
              {
                type: "icon",
                icon: "home",
                title: "Accueil",
                to: "/superadmin",
              },
              { title: "Comptes", to: "/superadmin/accounts" },
            ],
            statusPaths: [
              {
                type: "icon",
                icon: "home",
                title: "Accueil",
                to: "/superadmin",
              },
              { title: "Etat", to: "/superadmin/status" },
              { title: "Vendeurs", to: "/superadmin/debitStatus" },
            ],
          }),
        Kt =
          (a(394),
          function (e) {
            var t = e.alert;
            return r.a.createElement(
              "tr",
              { className: "alert-component" },
              r.a.createElement(Ne, {
                cols: [
                  {
                    to: zt.baseUrl + "/article/" + t._id,
                    className: "alert-name",
                    text: t.name,
                  },
                  { text: u.default.fn(t.qtStocke) },
                  { text: u.default.fn(t.qtAlerte) },
                  {
                    text: r.a.createElement(
                      "div",
                      { className: "exceeded-alert" },
                      u.default.fn(t.qtAlerte - t.qtStocke)
                    ),
                  },
                ],
              })
            );
          }),
        Yt = function () {
          return Object(n.useContext)(Qt);
        },
        Wt = function () {
          var e = Yt(),
            t = Object(m.a)(e, 2),
            a = t[0],
            l = t[1],
            c = Object(n.useState)({ load: !0 }),
            s = Object(m.a)(c, 2),
            i = s[0],
            o = s[1];
          Object(n.useEffect)(
            function () {
              if (i.load) {
                var e = {};
                if (i.skip) {
                  var t = a.alerts && a.alerts.length;
                  e.skip = t;
                }
                u.default.post("/superadmin/alerts/get", e).then(function (e) {
                  l(function (t) {
                    return (
                      i.skip
                        ? (t.alerts || (t.alerts = []),
                          (t.alerts = [].concat(
                            Object(w.a)(t.alerts),
                            Object(w.a)(e.alerts)
                          )))
                        : (t.alerts = e.alerts),
                      (t.endAlerts = e.endAlerts),
                      Object(d.a)({}, t)
                    );
                  });
                }),
                  o(function (e) {
                    return (e.load = !1), (e.loading = !1), Object(d.a)({}, e);
                  });
              }
            },
            [i]
          );
          var E = zt.alertPaths.slice(0, 1),
            p =
              Array.isArray(a.alerts) &&
              r.a.createElement(
                r.a.Fragment,
                null,
                r.a.createElement(
                  "table",
                  { className: "table shadow" },
                  r.a.createElement(
                    "thead",
                    { className: "thead-dark" },
                    r.a.createElement(
                      "tr",
                      null,
                      r.a.createElement("th", null, "Nom"),
                      r.a.createElement("th", null, "Qt Stocke"),
                      r.a.createElement("th", null, "Qt Alerte"),
                      r.a.createElement("th", null, "Commision"),
                      r.a.createElement("th", null, "D\xe9pass\xe9")
                    )
                  ),
                  r.a.createElement(
                    "tbody",
                    null,
                    a.alerts.map(function (e) {
                      return r.a.createElement(Kt, { key: e._id, alert: e });
                    })
                  )
                ),
                !a.endAlerts &&
                  r.a.createElement(U, {
                    isLoading: i.loading,
                    onClick: function () {
                      o(function (e) {
                        return (
                          (e.load = !0),
                          (e.loading = !0),
                          (e.skip = !0),
                          Object(d.a)({}, e)
                        );
                      });
                    },
                  })
              );
          return r.a.createElement(
            j,
            null,
            r.a.createElement(
              "div",
              { className: "info-flex" },
              r.a.createElement(O, { paths: E }),
              r.a.createElement(
                "div",
                { className: "title-2" },
                "Alerts de quantites"
              )
            ),
            Array.isArray(a.alerts)
              ? a.alerts.length > 0
                ? r.a.createElement(De, {
                    key: Date.now(),
                    component: p,
                    title: "Alertes",
                  })
                : r.a.createElement(r.a.Fragment, null)
              : r.a.createElement(f, null)
          );
        },
        Gt =
          (a(395),
          a(396),
          function (e) {
            var t = e.progress;
            return r.a.createElement("div", {
              className: "file-upload-progress",
              style: { width: t + "%" },
            });
          }),
        Jt = function (e) {
          var t = e.history,
            a = e.match.params.catId,
            l = Object(w.a)(new Array(6).keys()).map(function (e) {
              return r.a.createRef();
            }),
            c = Object(m.a)(l, 6),
            s = c[0],
            i = c[1],
            o = c[2],
            f = c[3],
            E = c[4],
            p = c[5],
            b = Yt(),
            v = Object(m.a)(b, 2)[1],
            g = Object(n.useState)({}),
            h = Object(m.a)(g, 2),
            N = h[0],
            y = h[1];
          var C = {
            onUploadProgress: function (e) {
              var t = Math.round((100 * e.loaded) / e.total);
              y(function (e) {
                return (e.uploadProgress = t), Object(d.a)({}, e);
              });
            },
          };
          var k = zt.defaultPaths.slice(0, 2);
          return r.a.createElement(
            j,
            null,
            r.a.createElement(O, {
              paths: k.concat({
                title: "Categorie Correspondante",
                to: zt.baseUrl + "/category/" + a,
              }),
            }),
            r.a.createElement(
              "div",
              { className: "add-page" },
              r.a.createElement(
                "form",
                {
                  className: "add-form",
                  onSubmit: function (e) {
                    e.preventDefault();
                    var n = s.current.value,
                      r = parseFloat(i.current.value),
                      l = parseFloat(o.current.value),
                      c = parseFloat(f.current.value),
                      m = parseFloat(E.current.value),
                      b = p.current.files && p.current.files[0];
                    if (!n || isNaN(r) || isNaN(l) || isNaN(c) || isNaN(m))
                      return (
                        y(function (e) {
                          return (e.error = !0), Object(d.a)({}, e);
                        }),
                        !1
                      );
                    var g = new FormData();
                    g.append("catId", a),
                      g.append("name", n),
                      g.append("prixVente", r),
                      g.append("prixAchat", l),
                      g.append("qtStocke", c),
                      g.append("qtAlerte", m),
                      g.append("img", b),
                      u.default
                        .post("/superadmin/articles/add", g, C)
                        .then(function (e) {
                          e.ok
                            ? (v(function (t) {
                                return (
                                  t.articles || (t.articles = []),
                                  t.articles.unshift({
                                    _id: e._id,
                                    catId: a,
                                    name: n,
                                    prixVente: r,
                                    prixAchat: l,
                                    qtStocke: c,
                                    qtAlerte: m,
                                    img: N.imgPreview,
                                  }),
                                  Object(d.a)({}, t)
                                );
                              }),
                              t.push(zt.baseUrl + "/category/" + a))
                            : y(function (e) {
                                return (e.error = !0), Object(d.a)({}, e);
                              });
                        })
                        .catch(function (e) {
                          y(function (e) {
                            return (e.netError = !0), Object(d.a)({}, e);
                          });
                        });
                  },
                },
                r.a.createElement(
                  "div",
                  { className: "appTitle" },
                  "Ajouter un article"
                ),
                N.error &&
                  r.a.createElement(
                    "div",
                    { className: "error-message" },
                    "Veuillez valider tous les champs!"
                  ),
                N.netError &&
                  r.a.createElement(
                    "div",
                    { className: "error-message" },
                    "Erreur de connexion"
                  ),
                r.a.createElement(
                  "div",
                  { className: "appInput" },
                  r.a.createElement("input", {
                    ref: s,
                    autoFocus: !0,
                    placeholder: "Nom",
                  })
                ),
                [
                  { _ref: i, ph: "Prix de Vente" },
                  { _ref: o, ph: "Prix d'achat" },
                  { _ref: f, ph: "Qt Stocke" },
                  { _ref: E, ph: "Qt Alerte" },
                  { _ref: E, ph: "Commission" },
                ].map(function (e, t) {
                  return r.a.createElement(
                    "div",
                    { key: t, className: "appInput" },
                    r.a.createElement(ht, {
                      _ref: e._ref,
                      type: "number",
                      ph: e.ph,
                    })
                  );
                }),
                r.a.createElement(
                  "label",
                  { tabIndex: 0 },
                  r.a.createElement(
                    "div",
                    { className: "img-btn" },
                    r.a.createElement("input", {
                      ref: p,
                      type: "file",
                      hidden: !0,
                      onChange: function () {
                        var e = p.current.files && p.current.files[0],
                          t = URL.createObjectURL(e);
                        y(function (e) {
                          return (e.imgPreview = t), Object(d.a)({}, e);
                        });
                      },
                    }),
                    r.a.createElement("i", { className: "fas fa-image" }),
                    r.a.createElement("div", null, "Image")
                  )
                ),
                r.a.createElement(Gt, { progress: N.uploadProgress }),
                N.imgPreview
                  ? r.a.createElement(
                      "div",
                      { className: "img-preview" },
                      r.a.createElement("img", {
                        src: N.imgPreview,
                        alt: "image",
                      })
                    )
                  : r.a.createElement(r.a.Fragment, null),
                r.a.createElement(
                  "label",
                  { tabIndex: 0, className: "submit-btn" },
                  r.a.createElement("input", { type: "submit", hidden: !0 }),
                  "Creer"
                )
              )
            )
          );
        },
        Xt =
          (a(397),
          a(398),
          function () {
            var e = zt.defaultPaths.slice(0, 1);
            return r.a.createElement(
              j,
              null,
              r.a.createElement(O, { paths: e }),
              r.a.createElement(
                "div",
                { className: "notfound" },
                r.a.createElement(
                  "div",
                  { className: "notfound-404" },
                  r.a.createElement("h1", null, "404")
                ),
                r.a.createElement("h2", null, "Page n'est pas trouv\xe9"),
                r.a.createElement(
                  "p",
                  null,
                  r.a.createElement(s.b, { to: zt.baseUrl }, "Accueil")
                )
              )
            );
          }),
        $t =
          (a(399),
          function (e) {
            var t = e.height;
            return r.a.createElement(
              "div",
              { className: "image-loader", style: { height: t || "100%" } },
              r.a.createElement(
                "div",
                { className: "lds-roller" },
                r.a.createElement("div", null),
                r.a.createElement("div", null),
                r.a.createElement("div", null),
                r.a.createElement("div", null),
                r.a.createElement("div", null),
                r.a.createElement("div", null),
                r.a.createElement("div", null),
                r.a.createElement("div", null)
              )
            );
          }),
        Zt =
          (a(400),
          function () {
            return r.a.createElement(
              "div",
              { className: "notfound-img" },
              r.a.createElement("i", { className: "fad fa-images" })
            );
          }),
        ea = function (e) {
          var t = e.src,
            a = e.alt,
            l = e.className,
            c = e.height,
            s = Object(n.useState)(!1),
            i = Object(m.a)(s, 2),
            u = i[0],
            o = i[1];
          return r.a.createElement(
            r.a.Fragment,
            null,
            t
              ? r.a.createElement(
                  r.a.Fragment,
                  null,
                  r.a.createElement("img", {
                    draggable: !1,
                    src: t,
                    alt: a,
                    className: l,
                    style: { display: !u.loaded && "none" },
                    onLoad: function () {
                      o({ loaded: !0 });
                    },
                    onError: function () {
                      o({ error: !0 });
                    },
                  }),
                  u.loaded
                    ? r.a.createElement(r.a.Fragment, null)
                    : u.error
                    ? r.a.createElement(Zt, null)
                    : r.a.createElement($t, { height: c, className: l })
                )
              : r.a.createElement(Zt, null)
          );
        },
        ta =
          (a(401),
          function () {
            return r.a.createElement(
              "div",
              { className: "article-alert-message" },
              "Quantit\xe9 d'Alerte Atteinte"
            );
          }),
        aa = function (e) {
          var t = e.artState,
            a = e.onChange,
            n = e.onKeyDown,
            l = e.onDoubleClick,
            c = u.default.fn(t.article.qtStocke);
          return r.a.createElement(
            "div",
            { className: "article-detail" },
            r.a.createElement("div", null, "Quantite Stocke: "),
            t.isUpdating
              ? r.a.createElement(
                  "div",
                  { className: "article-update-group" },
                  c,
                  " +",
                  r.a.createElement(ht, {
                    className: "article-update-input",
                    onChange: a,
                    onKeyDown: n,
                    value: t.article.toAddToStock,
                    pos: !1,
                  })
                )
              : r.a.createElement("div", { onDoubleClick: l }, c)
          );
        },
        na = function (e) {
          var t = e.match,
            a = e.history,
            l = Object(n.useState)({}),
            c = Object(m.a)(l, 2),
            s = c[0],
            i = c[1],
            o = Object(n.useState)(!1),
            E = Object(m.a)(o, 2),
            p = E[0],
            b = E[1],
            v = Yt(),
            g = Object(m.a)(v, 2),
            h = g[0],
            N = g[1],
            y = t.params._id,
            C = Object(w.a)(new Array(5).keys()).map(function (e) {
              return r.a.createRef();
            }),
            k = Object(m.a)(C, 5),
            S = k[0],
            x = k[1],
            _ = k[2],
            A = k[3],
            F = k[4];
          var D = {
            onUploadProgress: function (e) {
              var t = Math.round((100 * e.loaded) / e.total);
              i(function (e) {
                return (e.updateProgress = t), Object(d.a)({}, e);
              });
            },
          };
          function U() {
            var e,
              t = new FormData(),
              a = s.article,
              n = s.originalArticle,
              r = !1;
            t.append("_id", y);
            for (
              var l = 0,
                c = [
                  "name",
                  "prixVente",
                  "prixAchat",
                  "qtAlerte",
                  "toAddToStock",
                ];
              l < c.length;
              l++
            ) {
              var m = c[l];
              a[m] !== n[m] && (t.append(m, a[m]), (r = !0));
            }
            var o =
              null === x ||
              void 0 === x ||
              null === (e = x.current) ||
              void 0 === e
                ? void 0
                : e.files[0];
            if ((o && (t.append("img", o), (r = !0)), !r))
              return (
                i(function (e) {
                  return (e.isUpdating = !1), Object(d.a)({}, e);
                }),
                !1
              );
            i(function (e) {
              return (e.updatingServer = !0), Object(d.a)({}, e);
            }),
              u.default
                .post("/superadmin/articles/update", t, D)
                .then(function (e) {
                  if (e.ok) {
                    var t = Object(d.a)({}, s.article);
                    e.newQt && (t.qtStocke = e.newQt),
                      (t.toAddToStock = ""),
                      i(function (e) {
                        return (
                          (e.updatingServer = !1),
                          (e.isUpdating = !1),
                          (e.isShowingHistory = !1),
                          (e.endHistory = void 0),
                          (e.stockHistory = []),
                          (e.originalArticle = Object(d.a)({}, t)),
                          (e.article = Object(d.a)({}, t)),
                          Object(d.a)({}, e)
                        );
                      }),
                      N(function (e) {
                        return (
                          e.articles || (e.articles = []),
                          e.categories || (e.categories = []),
                          (e.articles = e.articles.filter(function (e) {
                            return e.catId !== t.catId;
                          })),
                          (e.categories = e.categories.map(function (e) {
                            return (
                              e._id === t.catId &&
                                ((e.articles = !1), (e.endArticles = !1)),
                              e
                            );
                          })),
                          Object(d.a)({}, e)
                        );
                      });
                  }
                })
                .catch(function (e) {
                  i(function (e) {
                    return (
                      (e.updatingServer = !1),
                      (e.isUpdating = !1),
                      Object(d.a)({}, e)
                    );
                  });
                });
          }
          function P() {
            i(function (e) {
              return (
                (e.article = Object(d.a)({}, s.originalArticle)),
                (e.isUpdating = !1),
                Object(d.a)({}, e)
              );
            });
          }
          function T(e) {
            13 === e.keyCode ? U() : 27 === e.keyCode && P();
          }
          function H(e, t, a) {
            var n = e.current.value;
            "function" === typeof a && ((n = a(n)), isNaN(n) && (n = "")),
              i(function (e) {
                return (e.article[t] = n), Object(d.a)({}, e);
              });
          }
          function R() {
            i(function (e) {
              return (
                (e.isUpdating = !0),
                (e.article.toAddToStock = ""),
                Object(d.a)({}, e)
              );
            });
          }
          function q() {
            i(function (e) {
              return (e.isShowingHistory = !0), Object(d.a)({}, e);
            }),
              u.default
                .post("/superadmin/articles/getHistory", {
                  _id: y,
                  skip: s.stockHistory && s.stockHistory.length,
                })
                .then(function (e) {
                  e.ok &&
                    i(function (t) {
                      return (
                        t.stockHistory || (t.stockHistory = []),
                        (t.stockHistory = [].concat(
                          Object(w.a)(t.stockHistory),
                          Object(w.a)(e.stockHistory)
                        )),
                        (t.endHistory = e.endHistory),
                        Object(d.a)({}, t)
                      );
                    });
                });
          }
          Object(n.useEffect)(function () {
            if (!s.article) {
              var e = !1;
              if (h.articles) {
                var t,
                  a = Object(I.a)(h.articles);
                try {
                  for (a.s(); !(t = a.n()).done; ) {
                    var n = t.value;
                    n._id === y &&
                      (i({ article: n, originalArticle: Object(d.a)({}, n) }),
                      (e = !0));
                  }
                } catch (r) {
                  a.e(r);
                } finally {
                  a.f();
                }
              }
              e ||
                u.default
                  .post("/superadmin/articles/getOne", { _id: y })
                  .then(function (e) {
                    e
                      ? N(function (t) {
                          return (
                            t.articles || (t.articles = []),
                            (t.articles = t.articles.concat(e)),
                            Object(d.a)({}, t)
                          );
                        })
                      : b(!0);
                  });
            }
          });
          var V = zt.defaultPaths.slice(0, 3);
          return s.article
            ? r.a.createElement(
                j,
                null,
                r.a.createElement(O, {
                  paths: V.concat({
                    title: "Categorie Correspondante",
                    to: zt.baseUrl + "/category/" + s.article.catId,
                  }),
                }),
                r.a.createElement(
                  "div",
                  { className: "article-page" },
                  s.article.qtStocke - s.article.qtAlerte <= 0 &&
                    r.a.createElement(ta, null),
                  r.a.createElement(
                    "div",
                    { className: "article-controls" },
                    s.isUpdating
                      ? r.a.createElement(
                          r.a.Fragment,
                          null,
                          r.a.createElement(
                            "div",
                            {
                              className: "article-control article-modify",
                              onClick: U,
                            },
                            r.a.createElement("i", {
                              className: "fas fa-check",
                            })
                          ),
                          r.a.createElement(
                            "div",
                            {
                              className: "article-control article-remove",
                              onClick: P,
                            },
                            r.a.createElement("i", {
                              className: "fas fa-times",
                            })
                          )
                        )
                      : r.a.createElement(
                          r.a.Fragment,
                          null,
                          r.a.createElement(
                            "div",
                            {
                              className: "article-control article-modify",
                              onClick: R,
                            },
                            r.a.createElement("i", { className: "fas fa-pen" })
                          ),
                          r.a.createElement(
                            "div",
                            {
                              className: "article-control article-remove",
                              onClick: function () {
                                i(function (e) {
                                  return (
                                    (e.isDeleting = !0), Object(d.a)({}, e)
                                  );
                                });
                              },
                            },
                            r.a.createElement("i", {
                              className: "fas fa-trash",
                            })
                          )
                        )
                  ),
                  s.isUpdating
                    ? r.a.createElement("input", {
                        className: "article-name article-update-input",
                        ref: S,
                        onChange: function () {
                          H(S, "name");
                        },
                        onKeyDown: T,
                        value: s.article.name,
                      })
                    : r.a.createElement(
                        "div",
                        { className: "article-name", onDoubleClick: R },
                        s.article.name
                      ),
                  r.a.createElement(
                    "div",
                    { className: "article-img" },
                    r.a.createElement(ea, {
                      src: s.article.img,
                      alt: s.article.name,
                      height: "300px",
                    }),
                    s.isUpdating &&
                      r.a.createElement(
                        "label",
                        { className: "update-img" },
                        r.a.createElement("i", { className: "fas fa-pen" }),
                        r.a.createElement("input", {
                          ref: x,
                          type: "file",
                          hidden: !0,
                          onChange: function () {
                            var e = x.current.files[0];
                            if (!e) return !1;
                            var t = URL.createObjectURL(e);
                            i(function (e) {
                              return (e.article.img = t), Object(d.a)({}, e);
                            });
                          },
                        })
                      )
                  ),
                  r.a.createElement(
                    "div",
                    { className: "article-details" },
                    r.a.createElement(
                      "div",
                      { className: "details-container" },
                      r.a.createElement(aa, {
                        artState: s,
                        onChange: function (e) {
                          var t = parseFloat(e.target.value);
                          isNaN(t) && (t = ""),
                            i(function (e) {
                              return (
                                (e.article.toAddToStock = t), Object(d.a)({}, e)
                              );
                            });
                        },
                        onKeyDown: T,
                        onDoubleClick: R,
                      }),
                      [
                        {
                          title: "Quantite d'alerte",
                          value: u.default.fn(s.article.qtAlerte),
                          ref: F,
                          stateKey: "qtAlerte",
                          parse: parseFloat,
                        },
                        {
                          title: "Prix Vente",
                          value: u.default.fn(s.article.prixVente),
                          ref: _,
                          stateKey: "prixVente",
                          parse: parseFloat,
                        },
                        {
                          title: "Prix Achat",
                          value: u.default.fn(s.article.prixAchat),
                          ref: A,
                          stateKey: "prixAchat",
                          parse: parseFloat,
                        },
                        {
                          title: "Commission",
                          value: u.default.fn(s.article.commission),
                          ref: A,
                          stateKey: "prixAchat",
                          parse: parseFloat,
                        },
                      ].map(function (e, t) {
                        return r.a.createElement(
                          "div",
                          { key: "det" + t, className: "article-detail" },
                          r.a.createElement("div", null, e.title, ": "),
                          s.isUpdating
                            ? r.a.createElement(ht, {
                                _ref: e.ref,
                                className: "article-update-input",
                                type: "number",
                                onChange: function () {
                                  H(e.ref, e.stateKey, e.parse);
                                },
                                onKeyDown: T,
                                value: e.value,
                              })
                            : r.a.createElement(
                                "div",
                                { onDoubleClick: R },
                                e.value
                              )
                        );
                      })
                    )
                  ),
                  s.isShowingHistory
                    ? r.a.createElement(
                        r.a.Fragment,
                        null,
                        r.a.createElement(
                          "table",
                          { className: "table" },
                          r.a.createElement(
                            "thead",
                            null,
                            r.a.createElement(
                              "tr",
                              null,
                              r.a.createElement("th", null, "Article"),
                              r.a.createElement("th", null, "Qte"),
                              r.a.createElement("th", null, "Date")
                            )
                          ),
                          r.a.createElement(
                            "tbody",
                            null,
                            Array.isArray(s.stockHistory) &&
                              s.stockHistory.map(function (e) {
                                return r.a.createElement(
                                  "tr",
                                  { key: e._id },
                                  r.a.createElement("td", null, e.artInfo.name),
                                  r.a.createElement("td", null, e.qt),
                                  r.a.createElement(
                                    "td",
                                    null,
                                    u.default.ftd(e.time)
                                  )
                                );
                              })
                          )
                        ),
                        !1 === s.endHistory &&
                          r.a.createElement(
                            "button",
                            {
                              className:
                                "flat-btn-small flat-btn-center btn-blue",
                              onClick: q,
                            },
                            "Afficher Plus"
                          )
                      )
                    : r.a.createElement(
                        r.a.Fragment,
                        null,
                        r.a.createElement(
                          "button",
                          {
                            className:
                              "flat-btn-small flat-btn-center btn-blue",
                            onClick: q,
                          },
                          "Historique de Stocke"
                        )
                      ),
                  s.isDeleting
                    ? r.a.createElement($, {
                        message: s.article.name,
                        confirm: function () {
                          u.default
                            .post("/superadmin/articles/delete", { _id: y })
                            .then(function (e) {
                              e.ok &&
                                (h.articles &&
                                  N(function (e) {
                                    return (
                                      (e.articles = e.articles.filter(function (
                                        e
                                      ) {
                                        return e._id !== y;
                                      })),
                                      Object(d.a)({}, e)
                                    );
                                  }),
                                a.push(
                                  zt.baseUrl + "/category/" + s.article.catId
                                ));
                            });
                        },
                        cancel: function () {
                          i(function (e) {
                            return (e.isDeleting = !1), Object(d.a)({}, e);
                          });
                        },
                      })
                    : r.a.createElement(r.a.Fragment, null),
                  s.updatingServer &&
                    r.a.createElement(
                      "div",
                      { className: "server-updating" },
                      r.a.createElement(Gt, { progress: s.updateProgress }),
                      r.a.createElement(f, null)
                    )
                )
              )
            : p
            ? r.a.createElement(Xt, null)
            : r.a.createElement(f, null);
        },
        ra =
          (a(402),
          function (e) {
            var t = e.history,
              a = r.a.createRef(),
              n = Yt(),
              l = Object(m.a)(n, 2),
              c = l[0],
              s = l[1];
            var i = zt.defaultPaths.slice(0, 2);
            return r.a.createElement(
              j,
              null,
              r.a.createElement(O, { paths: i }),
              r.a.createElement(
                "div",
                { className: "add-page" },
                r.a.createElement(
                  "form",
                  {
                    className: "add-form",
                    onSubmit: function (e) {
                      e.preventDefault();
                      var n = a.current.value;
                      if (!n || 0 === n.length) return !1;
                      u.default
                        .post("/superadmin/categories/add", { name: n })
                        .then(function (e) {
                          e.ok &&
                            c.categories &&
                            s(function (t) {
                              return (
                                t.categories.unshift({ name: n, _id: e._id }),
                                Object(d.a)({}, t)
                              );
                            }),
                            t.push(zt.baseUrl + "/categories");
                        });
                    },
                  },
                  r.a.createElement(
                    "div",
                    { className: "appTitle" },
                    "Ajouter une categorie"
                  ),
                  r.a.createElement(
                    "div",
                    { className: "appInput" },
                    r.a.createElement("input", {
                      ref: a,
                      autoFocus: !0,
                      placeholder: "Nom",
                    })
                  ),
                  r.a.createElement(
                    "label",
                    { tabIndex: 0 },
                    r.a.createElement("input", { type: "submit", hidden: !0 }),
                    r.a.createElement(
                      "div",
                      { className: "submit-btn" },
                      "Creer"
                    )
                  )
                )
              )
            );
          }),
        la =
          (a(403),
          function (e) {
            var t = e.match,
              a = e.history,
              l = Yt(),
              c = Object(m.a)(l, 2),
              i = c[0],
              o = c[1],
              E = t.params._id,
              p = Object(n.useState)(null),
              b = Object(m.a)(p, 2),
              v = b[0],
              g = b[1],
              h = Object(n.useState)({}),
              N = Object(m.a)(h, 2),
              y = N[0],
              C = N[1],
              k = r.a.createRef(),
              S = !1;
            if (!v) {
              if (i && i.categories) {
                var x,
                  _ = Object(I.a)(i.categories);
                try {
                  var A = function () {
                    var e = x.value;
                    e._id === E &&
                      (e.articles
                        ? ((e.isUpdating = !1), (e.isDeleting = !1), g(e))
                        : u.default
                            .post("/superadmin/articles/get", { catId: E })
                            .then(function (t) {
                              var a = t.data;
                              o(function (n) {
                                return (
                                  n.articles || (n.articles = []),
                                  (n.articles = n.articles
                                    .filter(function (e) {
                                      return e.catId !== E;
                                    })
                                    .concat(a)),
                                  (e.articles = !0),
                                  (e.endArticles = t.endArticles),
                                  Object(d.a)({}, n)
                                );
                              });
                            }),
                      (S = !0));
                  };
                  for (_.s(); !(x = _.n()).done; ) A();
                } catch (P) {
                  _.e(P);
                } finally {
                  _.f();
                }
              }
              S ||
                u.default
                  .post("/superadmin/categories/getOne", { _id: E })
                  .then(function (e) {
                    e
                      ? (g(e.info),
                        o(function (t) {
                          return (
                            t.articles || (t.articles = []),
                            (t.articles = t.articles
                              .filter(function (e) {
                                return e.catId !== E;
                              })
                              .concat(e.articles)),
                            Object(d.a)({}, t)
                          );
                        }))
                      : g({ notFound: !0 });
                  });
            }
            var F =
              i.articles &&
              i.articles.filter(function (e) {
                return e.catId === E;
              });
            var D = zt.defaultPaths.slice(0, 2);
            return v
              ? v.notFound
                ? r.a.createElement(Xt, null)
                : r.a.createElement(
                    j,
                    null,
                    r.a.createElement(
                      "div",
                      { className: "info-flex" },
                      r.a.createElement(O, { paths: D }),
                      v.isUpdating
                        ? r.a.createElement(
                            "div",
                            { className: "cat-title" },
                            r.a.createElement(
                              "form",
                              {
                                onSubmit: function (e) {
                                  if (
                                    (e.preventDefault(), v.newName === v.name)
                                  )
                                    return g(function (e) {
                                      return (
                                        (e.isUpdating = !1), Object(d.a)({}, e)
                                      );
                                    });
                                  u.default
                                    .post(zt.baseUrl + "/categories/update", {
                                      _id: E,
                                      name: v.newName,
                                    })
                                    .then(function (e) {
                                      e.ok &&
                                        (o(function (e) {
                                          var t = function (e) {
                                            return (
                                              e._id === E &&
                                                (e.name = v.newName),
                                              e
                                            );
                                          };
                                          return (
                                            e.categories &&
                                              (e.categories =
                                                e.categories.map(t)),
                                            e.allCats &&
                                              (e.allCats = e.allCats.map(t)),
                                            Object(d.a)({}, e)
                                          );
                                        }),
                                        i.categories,
                                        g(function (e) {
                                          return (
                                            (e.isUpdating = !1),
                                            (e.name = v.newName),
                                            Object(d.a)({}, e)
                                          );
                                        }));
                                    });
                                },
                                style: { display: "inline-flex" },
                              },
                              r.a.createElement(
                                "div",
                                { style: { color: "var(--c-1)" } },
                                r.a.createElement("input", {
                                  autoFocus: !0,
                                  ref: k,
                                  className: "input",
                                  value: v.newName,
                                  onChange: function (e) {
                                    g(function (e) {
                                      return (
                                        (e.newName = k.current.value),
                                        Object(d.a)({}, e)
                                      );
                                    });
                                  },
                                  style: { width: "100%" },
                                })
                              ),
                              r.a.createElement(
                                "label",
                                { className: "update-cat-btn" },
                                r.a.createElement("i", {
                                  className: "fas fa-check",
                                }),
                                r.a.createElement("input", {
                                  type: "submit",
                                  hidden: !0,
                                })
                              )
                            )
                          )
                        : r.a.createElement(
                            "div",
                            { className: "cat-title-container" },
                            r.a.createElement(
                              "div",
                              { className: "cat-title" },
                              r.a.createElement(
                                "div",
                                {
                                  onClick: function () {
                                    g(function (e) {
                                      return (
                                        (e.isUpdating = !0),
                                        (e.newName = e.name),
                                        Object(d.a)({}, e)
                                      );
                                    });
                                  },
                                },
                                v.name
                              )
                            ),
                            r.a.createElement(
                              "div",
                              {
                                tabIndex: 0,
                                className: "square-btn",
                                onClick: function () {
                                  g(function (e) {
                                    return (
                                      (e.isDeleting = !0), Object(d.a)({}, e)
                                    );
                                  });
                                },
                              },
                              r.a.createElement("i", {
                                className: "fas fa-trash",
                              })
                            )
                          )
                    ),
                    r.a.createElement(
                      "div",
                      { className: "card-list-2" },
                      r.a.createElement(
                        s.b,
                        {
                          to: zt.baseUrl + "/addArticle/" + E,
                          className: "article-card article-add",
                        },
                        r.a.createElement("i", { className: "fas fa-plus" })
                      ),
                      F &&
                        F.map(function (e) {
                          return r.a.createElement(
                            s.b,
                            {
                              to: zt.baseUrl + "/article/" + e._id,
                              key: e._id,
                              className: "article-card",
                            },
                            r.a.createElement(
                              "div",
                              { className: "article-card-name" },
                              r.a.createElement("div", null, e.name),
                              e.qtStocke - e.qtAlerte <= 0
                                ? r.a.createElement(
                                    "div",
                                    { className: "alert-btn" },
                                    r.a.createElement("i", {
                                      className: "fas fa-bell",
                                    })
                                  )
                                : r.a.createElement(r.a.Fragment, null)
                            ),
                            r.a.createElement(
                              "div",
                              { className: "article-card-img" },
                              r.a.createElement(ea, { src: e.img, alt: e.name })
                            ),
                            r.a.createElement(
                              "div",
                              { className: "article-card-price" },
                              e.prixVente,
                              " DHS"
                            )
                          );
                        })
                    ),
                    v &&
                      !v.endArticles &&
                      r.a.createElement(U, {
                        isLoading: y.loading,
                        onClick: function () {
                          C(function (e) {
                            return (e.loading = !0), Object(d.a)({}, e);
                          });
                          var e = v._id;
                          u.default
                            .post("/superadmin/articles/get", {
                              catId: e,
                              skip: F.length,
                            })
                            .then(function (e) {
                              var t = e.data;
                              e.endArticles &&
                                g(function (e) {
                                  return (
                                    (e.endArticles = !0), Object(d.a)({}, e)
                                  );
                                }),
                                o(function (e) {
                                  return (
                                    (e.articles = [].concat(
                                      Object(w.a)(e.articles),
                                      Object(w.a)(t)
                                    )),
                                    Object(d.a)({}, e)
                                  );
                                }),
                                C(function (e) {
                                  return (e.loading = !1), Object(d.a)({}, e);
                                });
                            })
                            .catch(function (e) {
                              C(function (e) {
                                return (e.loading = !1), Object(d.a)({}, e);
                              });
                            });
                        },
                      }),
                    v.isDeleting
                      ? r.a.createElement($, {
                          message: v.name,
                          confirm: function () {
                            var e = u.default.post(
                              "/superadmin/categories/delete",
                              { _id: E }
                            );
                            return (
                              e.then(function (e) {
                                e.ok &&
                                  (o(function (e) {
                                    var t = function (e) {
                                      return e._id !== E;
                                    };
                                    return (
                                      e.categories &&
                                        (e.categories = e.categories.filter(t)),
                                      e.allCats &&
                                        (e.allCats = e.allCats.filter(t)),
                                      Object(d.a)({}, e)
                                    );
                                  }),
                                  i.categories,
                                  a.push(zt.baseUrl + "/categories"));
                              }),
                              e
                            );
                          },
                          cancel: function () {
                            g(function (e) {
                              return (e.isDeleting = !1), Object(d.a)({}, e);
                            });
                          },
                        })
                      : r.a.createElement(r.a.Fragment, null)
                  )
              : r.a.createElement(f, null);
          }),
        ca =
          (a(404),
          function (e) {
            e.history;
            var t = Yt(),
              a = Object(m.a)(t, 2),
              l = a[0],
              c = a[1],
              i = Object(n.useState)({}),
              o = Object(m.a)(i, 2),
              E = o[0],
              p = o[1];
            l.categories ||
              u.default.post("/superadmin/categories/get").then(function (e) {
                c(function (t) {
                  var a = e.array.map(function (e) {
                    return (
                      (e.colors =
                        u.default.AppColors.generateRandomMatchingColors()),
                      e
                    );
                  });
                  return (
                    (t.categories = a),
                    (t.endCats = e.endCats),
                    Object(d.a)({}, t)
                  );
                });
              });
            var b = zt.defaultPaths.slice(0, 1);
            return l.categories
              ? r.a.createElement(
                  j,
                  null,
                  r.a.createElement(O, { paths: b }),
                  r.a.createElement(
                    "div",
                    { className: "card-list" },
                    r.a.createElement(
                      s.b,
                      {
                        key: "card-add",
                        to: zt.baseUrl + "/addCategory/",
                        className: "app-card card-add",
                      },
                      r.a.createElement("i", { className: "fas fa-plus" })
                    ),
                    Array.isArray(l.categories) &&
                      l.categories.map(function (e) {
                        return (
                          e.colors ||
                            (e.colors =
                              u.default.AppColors.generateRandomMatchingColors()),
                          r.a.createElement(
                            s.b,
                            {
                              key: e._id,
                              to: zt.baseUrl + "/category/" + e._id,
                              className: "app-card modern-app-card",
                              style: {
                                color: e.colors.c,
                                backgroundColor: e.colors.bc,
                              },
                            },
                            e.name,
                            r.a.createElement(
                              "div",
                              {
                                className: "card-badge",
                                style: { color: "var(--c-9)" },
                              },
                              r.a.createElement("i", {
                                className: "fas fa-folder-open",
                              })
                            )
                          )
                        );
                      })
                  ),
                  !l.endCats &&
                    r.a.createElement(U, {
                      isLoading: E.loading,
                      onClick: function () {
                        p(function (e) {
                          return (e.loading = !0), Object(d.a)({}, e);
                        }),
                          u.default
                            .post("/superadmin/categories/get", {
                              skip: l.categories.length,
                            })
                            .then(function (e) {
                              p(function (e) {
                                return (e.loading = !1), Object(d.a)({}, e);
                              });
                              var t = e.array;
                              c(function (a) {
                                return (
                                  (t = t.map(function (e) {
                                    return (
                                      (e.colors =
                                        u.default.AppColors.generateRandomMatchingColors()),
                                      e
                                    );
                                  })),
                                  (a.categories = [].concat(
                                    Object(w.a)(a.categories),
                                    Object(w.a)(t)
                                  )),
                                  (a.endCats = e.endCats),
                                  Object(d.a)({}, a)
                                );
                              });
                            })
                            .catch(function (e) {
                              p(function (e) {
                                return (e.loading = !1), Object(d.a)({}, e);
                              });
                            });
                      },
                    })
                )
              : r.a.createElement(f, null);
          }),
        sa = function () {
          var e = Yt(),
            t = Object(m.a)(e, 2),
            a = t[0],
            l = t[1];
          return (
            Object(n.useEffect)(function () {
              u.default.post("/superadmin/alerts/count").then(function (e) {
                l(function (t) {
                  return (t.alertsCount = e.count), Object(d.a)({}, t);
                });
              });
            }, []),
            r.a.createElement(
              s.b,
              {
                to: zt.baseUrl + "/alerts",
                className: "app-card modern-app-card card-c-2",
              },
              "Alertes",
              r.a.createElement(
                "div",
                { className: "card-badge card-alert" },
                r.a.createElement("i", { className: "fas fa-bell" })
              ),
              void 0 === a.alertsCount
                ? r.a.createElement(
                    "div",
                    { className: "card-status card-wait-status" },
                    r.a.createElement(C, null)
                  )
                : a.alertsCount > 0
                ? r.a.createElement(
                    "div",
                    { className: "card-status card-danger-status" },
                    a.alertsCount
                  )
                : r.a.createElement(
                    "div",
                    { className: "card-status card-success-status" },
                    r.a.createElement("i", { className: "fas fa-check" })
                  )
            )
          );
        },
        ia = function () {
          var e = Yt(),
            t = Object(m.a)(e, 1)[0],
            a =
              (t.sellersStatus &&
                Object.values(t.sellersStatus).filter(function (e) {
                  return e.connected;
                }).length) ||
              0;
          return r.a.createElement(
            s.b,
            {
              to: zt.baseUrl + "/liveSellers",
              className: "app-card modern-app-card card-c-6",
            },
            "Vendeurs En Ligne",
            r.a.createElement(
              "div",
              { className: "card-badge " },
              r.a.createElement("i", { className: "fas fa-wifi" })
            ),
            a > 0
              ? r.a.createElement(
                  "div",
                  { className: "card-status card-success-status" },
                  a
                )
              : r.a.createElement(
                  "div",
                  { className: "card-status card-danger-status" },
                  r.a.createElement("i", { className: "fas fa-times" })
                )
          );
        },
        ma = function () {
          var e = Object(i.g)(),
            t = ke(),
            a = Object(m.a)(t, 2)[1];
          return r.a.createElement(
            "div",
            {
              className: "app-card modern-app-card card-c-5",
              onClick: function () {
                u.default
                  .post("/superadmin/access", { type: "seller" })
                  .then(function (t) {
                    t.ok &&
                      (e.push("/seller"),
                      a(function (e) {
                        return {};
                      }));
                  });
              },
            },
            "Vente",
            r.a.createElement(
              "div",
              { className: "card-badge" },
              r.a.createElement("i", { className: "fas fa-truck" })
            )
          );
        },
        ua = function () {
          return r.a.createElement(
            j,
            null,
            r.a.createElement(
              "div",
              { className: "card-list" },
              r.a.createElement(
                s.b,
                {
                  to: zt.baseUrl + "/categories",
                  className: "app-card modern-app-card card-c-1",
                },
                "Categories",
                r.a.createElement(
                  "div",
                  { className: "card-badge" },
                  r.a.createElement("i", { className: "fas fa-list" })
                )
              ),
              r.a.createElement(sa, null),
              r.a.createElement(
                s.b,
                {
                  to: zt.baseUrl + "/stats",
                  className: "app-card modern-app-card card-c-3",
                },
                "Statistiques",
                r.a.createElement(
                  "div",
                  { className: "card-badge" },
                  r.a.createElement("i", { className: "fas fa-chart-line" })
                )
              ),
              r.a.createElement(
                s.b,
                {
                  to: zt.baseUrl + "/accounts",
                  className: "app-card modern-app-card card-c-4",
                },
                "Comptes",
                r.a.createElement(
                  "div",
                  { className: "card-badge" },
                  r.a.createElement("i", { className: "fas fa-envelope" })
                )
              ),
              r.a.createElement(
                s.b,
                {
                  to: zt.baseUrl + "/offClients",
                  className: "app-card modern-app-card card-c-7",
                },
                "Clients Inactives",
                r.a.createElement(
                  "div",
                  { className: "card-badge" },
                  r.a.createElement("i", { className: "fas fa-star" })
                )
              ),
              r.a.createElement(ia, null),
              r.a.createElement(ma, null),
              r.a.createElement(
                s.b,
                {
                  to: zt.baseUrl + "/payments",
                  className: "app-card modern-app-card card-c-a",
                },
                "Encaissement",
                r.a.createElement(
                  "div",
                  { className: "card-badge" },
                  r.a.createElement("i", { className: "fas fa-coins" })
                )
              ),
              r.a.createElement(
                s.b,
                {
                  to: zt.baseUrl + "/status",
                  className: "app-card modern-app-card card-c-9",
                },
                "Etat",
                r.a.createElement(
                  "div",
                  { className: "card-badge" },
                  r.a.createElement("i", { className: "fas fa-leaf" })
                )
              )
            )
          );
        },
        oa = function () {
          var e = Object(i.g)();
          return r.a.createElement(
            "div",
            {
              className: "Btn logoutBtn refresh-btn",
              onClick: function () {
                u.default.post("/superadmin/session/logout").then(function (t) {
                  !1 === t.logged && e.push("/");
                });
              },
            },
            r.a.createElement("i", { className: "fas fa-sign-out" })
          );
        },
        da = function () {
          var e = Object(n.useContext)(Qt),
            t = Object(m.a)(e, 2)[1];
          return r.a.createElement(
            "div",
            {
              className: "refresh-btn",
              tabIndex: 0,
              onClick: function () {
                t(function (e) {
                  return {};
                });
              },
            },
            r.a.createElement("i", { className: "fas fa-sync" })
          );
        },
        fa = function (e) {
          var t = e.match,
            a = e.filterComponent,
            l = Object(n.useContext)(Qt),
            c = Object(m.a)(l, 1)[0],
            s = Object(n.useState)({}),
            i = Object(m.a)(s, 2),
            o = i[0],
            E = i[1],
            p = t.params._id;
          Object(n.useEffect)(function () {
            var e = {};
            e._id = p;
            var t = c.startTime,
              a = c.endTime;
            t && (e.startTime = new Date(t).getTime()),
              a && (e.endTime = new Date(a).getTime()),
              u.default
                .post("/superadmin/sellers/getOne", e)
                .then(function (e) {
                  E(function (t) {
                    return (
                      void 0 ===
                        (t = Object(d.a)(Object(d.a)({}, t), e)).seller
                          .charges && (t.seller.charges = ""),
                      Object(d.a)({}, t)
                    );
                  });
                });
          }, []);
          var b = (o.seller && o.seller.sellerStats) || {},
            v = b.paid ? 0.02 * b.paid : 0,
            g = (o.seller && o.seller.charges) || 0;
          c.daysInterval && (g *= c.daysInterval), (g += v);
          var h = (b.profit || 0) - g;
          return r.a.createElement(
            j,
            null,
            r.a.createElement(O, { paths: zt.statsPaths.slice(0, 2) }),
            o.error
              ? r.a.createElement("div", null, "Erreur!")
              : o.seller
              ? r.a.createElement(
                  "div",
                  null,
                  a,
                  r.a.createElement(
                    "div",
                    { className: "title-2" },
                    o.seller.name
                  ),
                  r.a.createElement(
                    "div",
                    { className: "super-content" },
                    r.a.createElement(
                      "div",
                      { className: "super-content-item" },
                      "Status:",
                      h > 0
                        ? r.a.createElement(
                            "span",
                            {
                              className:
                                "super-content-badge super-content-badge-success",
                            },
                            u.default.fn(h),
                            " DHS"
                          )
                        : r.a.createElement(
                            "span",
                            {
                              className:
                                "super-content-badge super-content-badge-danger",
                            },
                            u.default.fn(h),
                            " DHS"
                          )
                    ),
                    r.a.createElement(
                      "div",
                      { className: "super-content-item" },
                      "Benefice: ",
                      b.profit > 0
                        ? r.a.createElement(
                            "span",
                            {
                              className:
                                "super-content-badge super-content-badge-success",
                            },
                            u.default.fn(b.profit) || 0,
                            " DHS"
                          )
                        : r.a.createElement(
                            "span",
                            {
                              className:
                                "super-content-badge super-content-badge-danger",
                            },
                            u.default.fn(b.profit) || 0,
                            " DHS"
                          )
                    ),
                    r.a.createElement(
                      "div",
                      { className: "super-content-item" },
                      "Revenu: ",
                      b.paid > 0
                        ? r.a.createElement(
                            "span",
                            {
                              className:
                                "super-content-badge super-content-badge-success",
                            },
                            u.default.fn(b.paid) || 0,
                            " DHS"
                          )
                        : r.a.createElement(
                            "span",
                            {
                              className:
                                "super-content-badge super-content-badge-danger",
                            },
                            u.default.fn(b.paid) || 0,
                            " DHS"
                          )
                    ),
                    r.a.createElement(
                      "div",
                      { className: "super-content-item" },
                      "My 2 Commission: ",
                      v
                        ? r.a.createElement(
                            "span",
                            {
                              className:
                                "super-content-badge super-content-changeable",
                            },
                            u.default.fn(v),
                            " DHS"
                          )
                        : r.a.createElement(r.a.Fragment, null)
                    ),
                    r.a.createElement(
                      "div",
                      { className: "super-content-item" },
                      "Charges: ",
                      r.a.createElement(
                        r.a.Fragment,
                        null,
                        o.isUpdating
                          ? r.a.createElement(
                              r.a.Fragment,
                              null,
                              r.a.createElement(
                                "form",
                                {
                                  className: "inline-form",
                                  onSubmit: function (e) {
                                    e.preventDefault(),
                                      u.default
                                        .post(
                                          "/superadmin/sellers/updateCharges",
                                          {
                                            _id: p,
                                            newCharges: o.seller.charges,
                                          }
                                        )
                                        .then(function (e) {
                                          e.ok &&
                                            E(function (e) {
                                              return (
                                                (e.isUpdating = !1),
                                                Object(d.a)({}, e)
                                              );
                                            });
                                        });
                                  },
                                },
                                r.a.createElement("input", {
                                  autoFocus: !0,
                                  type: "number",
                                  step: F.defaultInputStep,
                                  value: o.seller.charges,
                                  onChange: function (e) {
                                    var t = parseFloat(e.target.value);
                                    isNaN(t) && (t = ""),
                                      E(function (e) {
                                        return (
                                          (e.seller.charges = t),
                                          Object(d.a)({}, e)
                                        );
                                      });
                                  },
                                }),
                                r.a.createElement(
                                  "label",
                                  null,
                                  r.a.createElement("input", {
                                    type: "submit",
                                    hidden: !0,
                                  }),
                                  r.a.createElement(
                                    "span",
                                    { className: "super-content-icon" },
                                    r.a.createElement("i", {
                                      className: "fas fa-check",
                                    })
                                  )
                                )
                              )
                            )
                          : r.a.createElement(
                              r.a.Fragment,
                              null,
                              r.a.createElement(
                                "span",
                                {
                                  className:
                                    "super-content-badge super-content-changeable",
                                },
                                o.seller.charges
                                  ? r.a.createElement(
                                      r.a.Fragment,
                                      null,
                                      u.default.fn(o.seller.charges),
                                      " ",
                                      c.daysInterval > 1
                                        ? r.a.createElement(
                                            r.a.Fragment,
                                            null,
                                            "x ",
                                            c.daysInterval,
                                            " = ",
                                            u.default.fn(
                                              o.seller.charges * c.daysInterval
                                            )
                                          )
                                        : r.a.createElement(r.a.Fragment, null)
                                    )
                                  : 0
                              ),
                              r.a.createElement(
                                "span",
                                {
                                  className: "super-content-icon",
                                  onClick: function () {
                                    E(function (e) {
                                      return (
                                        (e.isUpdating = !0), Object(d.a)({}, e)
                                      );
                                    });
                                  },
                                },
                                r.a.createElement("i", {
                                  className: "fas fa-pen",
                                })
                              )
                            )
                      )
                    )
                  )
                )
              : r.a.createElement(f, null)
          );
        },
        Ea = (a(405), a(181)),
        pa =
          (a(406),
          function () {
            var e = r.a.createRef();
            return (
              Object(n.useLayoutEffect)(function () {
                e.current.rewardMe();
              }, []),
              r.a.createElement(
                "div",
                { className: "happy-icon" },
                r.a.createElement(
                  Ea.a,
                  {
                    ref: e,
                    type: "confetti",
                    config: { elementSize: 15, startVelocity: 50 },
                  },
                  r.a.createElement(r.a.Fragment, null)
                )
              )
            );
          }),
        ba = function (e) {
          var t = e.filterComponent,
            a = Object(n.useContext)(Qt),
            l = Object(m.a)(a, 1)[0],
            c = Object(n.useState)({ showSellers: window.showSellers }),
            i = Object(m.a)(c, 2),
            o = i[0],
            E = i[1];
          Object(n.useEffect)(function () {
            var e = {},
              t = l.startTime,
              a = l.endTime;
            t && (e.startTime = new Date(t).getTime()),
              a && (e.endTime = new Date(a).getTime()),
              u.default.post("/superadmin/sellers/get", e).then(function (e) {
                E(function (t) {
                  return (t.sellers = e.sellers), Object(d.a)({}, t);
                });
              });
          }, []);
          var p = 0,
            b = 0,
            v = 0,
            g = 0,
            h = 0,
            N = 0;
          return Array.isArray(o.sellers)
            ? r.a.createElement(
                j,
                null,
                r.a.createElement(O, { paths: zt.statsPaths.slice(0, 1) }),
                t,
                r.a.createElement(
                  "div",
                  { className: "super-flex-reverse" },
                  r.a.createElement(
                    "div",
                    {
                      className: "card-list",
                      style: { display: o.showSellers ? "" : "none" },
                    },
                    o.sellers.map(function (e, t) {
                      e.sellerStats || (e.sellerStats = {});
                      var a = e.sellerStats.paid || 0;
                      b += a;
                      var n = 0.02 * a;
                      h += n;
                      var c = e.charges;
                      l.daysInterval && (c *= l.daysInterval),
                        (p += c || 0),
                        (c += n);
                      var i = e.sellerStats.profit || 0;
                      v += i;
                      var m = i - (c || 0);
                      return (
                        (g += m),
                        (N += e.sellerStats.debit || 0),
                        r.a.createElement(
                          s.b,
                          {
                            key: t,
                            className:
                              "app-card modern-app-card " +
                              (m > 0
                                ? "seller-card-profit"
                                : "seller-card-not-profit"),
                            to: "/superadmin/stats/seller/" + e._id,
                          },
                          r.a.createElement(
                            "div",
                            { className: "card-badge" },
                            m > 0
                              ? r.a.createElement(
                                  "div",
                                  null,
                                  r.a.createElement("i", {
                                    className: "fas fa-arrow-alt-from-bottom",
                                  }),
                                  "\xa0",
                                  r.a.createElement(
                                    "span",
                                    null,
                                    u.default.toFixed(m)
                                  )
                                )
                              : r.a.createElement(
                                  "div",
                                  null,
                                  r.a.createElement("i", {
                                    className: "fas fa-arrow-alt-to-bottom",
                                  }),
                                  "\xa0",
                                  r.a.createElement(
                                    "span",
                                    null,
                                    u.default.toFixed(m)
                                  )
                                )
                          ),
                          e.name
                        )
                      );
                    })
                  ),
                  r.a.createElement(
                    "div",
                    {
                      className:
                        "super-rapport " +
                        (g <= 0 ? "super-rapport-loss" : "super-rapport-gain"),
                      onClick: function () {
                        E(function (e) {
                          return (
                            (e.showSellers = !e.showSellers),
                            (window.showSellers = e.showSellers),
                            Object(d.a)({}, e)
                          );
                        });
                      },
                    },
                    r.a.createElement(
                      "div",
                      { className: "title-2" },
                      "Rapport pour ",
                      l.daysInterval > 1
                        ? r.a.createElement(
                            r.a.Fragment,
                            null,
                            l.daysInterval,
                            " jours"
                          )
                        : r.a.createElement(r.a.Fragment, null, "ce jour")
                    ),
                    [
                      {
                        title: "Statut",
                        value: r.a.createElement(
                          r.a.Fragment,
                          null,
                          u.default.toFixed(g),
                          " DHS",
                          g > 0 && r.a.createElement(pa, null)
                        ),
                      },
                      {
                        title: "Benefice",
                        value: r.a.createElement(
                          r.a.Fragment,
                          null,
                          u.default.toFixed(v),
                          " DHS"
                        ),
                      },
                      {
                        title: "Revenu",
                        value: r.a.createElement(
                          r.a.Fragment,
                          null,
                          u.default.toFixed(b),
                          " DHS"
                        ),
                      },
                      {
                        title: "My 3 Commission",
                        value: r.a.createElement(
                          r.a.Fragment,
                          null,
                          u.default.toFixed(h),
                          " DHS"
                        ),
                      },
                      {
                        title: "Charges",
                        value: r.a.createElement(
                          r.a.Fragment,
                          null,
                          u.default.toFixed(p),
                          " DHS"
                        ),
                      },
                    ].map(function (e, t) {
                      return r.a.createElement(
                        r.a.Fragment,
                        { key: t },
                        r.a.createElement(
                          "div",
                          { className: "super-rapport-item" },
                          r.a.createElement("span", null, e.title),
                          r.a.createElement("span", null, e.value)
                        ),
                        r.a.createElement("div", {
                          className: "super-rapport-sep",
                        })
                      );
                    })
                  ),
                  N > 0 &&
                    r.a.createElement(
                      s.b,
                      {
                        to: zt.baseUrl + "/debitStatus",
                        className:
                          "super-rapport super-debit-rapport super-rapport-loss",
                      },
                      r.a.createElement(
                        "div",
                        { className: "super-rapport-item" },
                        r.a.createElement("span", null, "Credit"),
                        r.a.createElement(
                          "span",
                          null,
                          u.default.toFixed(N),
                          " DHS"
                        )
                      )
                    )
                )
              )
            : r.a.createElement(f, null);
        },
        va = function () {
          var e = Object(n.useContext)(Qt),
            t = Object(m.a)(e, 2),
            a = t[0],
            l = t[1],
            c = r.a.createRef(),
            s = r.a.createRef(),
            o = ge({ stateHook: [a, l], startRef: c, endRef: s }),
            d = a.startTime + a.endTime,
            f = r.a.createElement(
              "div",
              null,
              r.a.createElement(
                "div",
                { className: "filter-container" },
                r.a.createElement(
                  "div",
                  null,
                  r.a.createElement(
                    "span",
                    { className: "filter-title" },
                    "Debut"
                  ),
                  r.a.createElement("input", {
                    ref: c,
                    type: "date",
                    value: a.startTime,
                    onChange: o[0],
                    className: "filter-input",
                  })
                ),
                r.a.createElement(
                  "div",
                  null,
                  r.a.createElement(
                    "span",
                    { className: "filter-title" },
                    "Fin"
                  ),
                  r.a.createElement("input", {
                    ref: s,
                    type: "date",
                    value: a.endTime,
                    onChange: o[1],
                    className: "filter-input",
                  })
                )
              ),
              r.a.createElement(
                "div",
                { className: "message-flex" },
                r.a.createElement(
                  "div",
                  { className: "time-interval-message" },
                  a.startTime
                    ? r.a.createElement(
                        r.a.Fragment,
                        null,
                        u.default.returnDateIntervalMessage(
                          a.startTime,
                          a.endTime
                        )
                      )
                    : r.a.createElement("div", null, "Paiement Dernier")
                ),
                r.a.createElement(
                  "div",
                  { className: "interval-message" },
                  "Affichage de status"
                )
              ),
              a.daysInterval > 1
                ? r.a.createElement(
                    "div",
                    { className: "charge-message" },
                    "Pour ",
                    a.daysInterval,
                    " Jours Calculant",
                    r.a.createElement(
                      "span",
                      { className: "charge-x" },
                      a.daysInterval,
                      "x"
                    ),
                    "de charges"
                  )
                : r.a.createElement(r.a.Fragment, null)
            );
          return r.a.createElement(
            r.a.Fragment,
            null,
            r.a.createElement(i.b, {
              exact: !0,
              path: "/superadmin/stats",
              render: function () {
                return r.a.createElement(ba, { key: d, filterComponent: f });
              },
            }),
            r.a.createElement(i.b, {
              exact: !0,
              path: "/superadmin/stats/seller/:_id",
              render: function (e) {
                return r.a.createElement(
                  fa,
                  Object.assign({ key: d }, e, { filterComponent: f })
                );
              },
            })
          );
        },
        ga =
          (a(407),
          function (e, t) {
            var a =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : {},
              r = a.shouldPreventDefault,
              l = void 0 === r || r,
              c = a.delay,
              s = void 0 === c ? 300 : c,
              i = Object(n.useState)(!1),
              u = Object(m.a)(i, 2),
              o = u[0],
              d = u[1],
              f = Object(n.useRef)(),
              E = function (t) {
                f.current = setTimeout(function () {
                  e(t), d(!0);
                }, s);
              },
              p = Object(n.useCallback)(E, [e, s, l]),
              b = function (e) {
                f.current && clearTimeout(f.current), d(!1);
              },
              v = Object(n.useCallback)(b, [l, t, o]);
            return {
              onMouseDown: function (e) {
                return p(e);
              },
              onTouchStart: function (e) {
                return p(e);
              },
              onMouseUp: function (e) {
                return v(e);
              },
              onMouseLeave: function (e) {
                return v(e, !1);
              },
              onTouchEnd: function (e) {
                return v(e);
              },
            };
          }),
        ha = function (e) {
          var t = e.acc,
            a = e.access,
            l = void 0 === a || a,
            c = e.del,
            s = void 0 === c || c,
            o = r.a.createRef(),
            f = r.a.createRef(),
            E = r.a.createRef(),
            p = Object(i.g)(),
            b = ke(),
            v = Object(m.a)(b, 2)[1],
            g = Object(n.useState)({ acc: t, showMore: !1 }),
            h = Object(m.a)(g, 2),
            N = h[0],
            O = h[1],
            j = ga(
              function (e) {
                O(function (e) {
                  return (e.isDeleting = !0), Object(d.a)({}, e);
                });
              },
              y,
              { delay: 700 }
            );
          function y() {
            u.default
              .post("/superadmin/access", { _id: N.acc._id, type: N.acc.type })
              .then(function (e) {
                e.ok &&
                  (p.push("/" + N.acc.type),
                  v(function (e) {
                    return {};
                  }));
              });
          }
          return r.a.createElement(
            r.a.Fragment,
            null,
            r.a.createElement(
              "div",
              { className: "app-card superusers-card" },
              r.a.createElement(
                "div",
                { className: "superusers-info superusers-info-flex" },
                r.a.createElement(
                  "div",
                  null,
                  r.a.createElement("i", { className: "fas fa-address-book" }),
                  N.isUpdating
                    ? r.a.createElement("input", {
                        ref: o,
                        autoFocus: !0,
                        className: "superusers-input",
                        value: N.acc.name,
                        onChange: function () {
                          O(function (e) {
                            return (
                              (e.acc.name = o.current.value), Object(d.a)({}, e)
                            );
                          });
                        },
                      })
                    : r.a.createElement(
                        "span",
                        { className: "superusers-info-text" },
                        N.acc.name
                      )
                ),
                r.a.createElement(
                  "div",
                  { className: "super-card-badge" },
                  r.a.createElement("i", {
                    className:
                      "fas fa-" +
                      {
                        superadmin: "cog",
                        seller: "truck",
                        admin: "cog",
                        magasin: "shopping-cart",
                      }[N.acc.type],
                  })
                )
              ),
              N.showMore
                ? r.a.createElement(
                    r.a.Fragment,
                    null,
                    r.a.createElement(
                      "div",
                      { className: "superusers-info superusers-info-more" },
                      r.a.createElement(
                        "div",
                        null,
                        r.a.createElement("i", { className: "fas fa-user" }),
                        N.isUpdating
                          ? r.a.createElement("input", {
                              ref: f,
                              className: "superusers-input",
                              value: N.acc.username,
                              onChange: function () {
                                O(function (e) {
                                  return (
                                    (e.acc.username = f.current.value),
                                    Object(d.a)({}, e)
                                  );
                                });
                              },
                            })
                          : r.a.createElement(
                              "span",
                              { className: "superusers-info-text" },
                              N.acc.username
                            )
                      ),
                      r.a.createElement(
                        "div",
                        null,
                        r.a.createElement("i", { className: "fas fa-lock" }),
                        N.isUpdating
                          ? r.a.createElement("input", {
                              ref: E,
                              className: "superusers-input",
                              value: N.acc.password,
                              onChange: function () {
                                O(function (e) {
                                  return (
                                    (e.acc.password = E.current.value),
                                    Object(d.a)({}, e)
                                  );
                                });
                              },
                            })
                          : r.a.createElement(
                              "span",
                              { className: "superusers-info-text" },
                              N.acc.password
                            )
                      )
                    ),
                    r.a.createElement(
                      "div",
                      { className: "superusers-actions" },
                      N.isUpdating
                        ? r.a.createElement(
                            r.a.Fragment,
                            null,
                            r.a.createElement(
                              "div",
                              {
                                className:
                                  "superusers-action-btn superusers-open",
                                onClick: function () {
                                  var e = {},
                                    t = N.acc,
                                    a = N.oldAcc;
                                  (e._id = t._id),
                                    (e.type = t.type),
                                    ["username", "password", "name"].forEach(
                                      function (n) {
                                        t[n] !== a[n] && (e[n] = t[n]);
                                      }
                                    ),
                                    u.default
                                      .post("/superadmin/accounts/update", e)
                                      .then(function (e) {
                                        e.ok &&
                                          O(function (e) {
                                            return (
                                              (e.isUpdating = !1),
                                              Object(d.a)({}, e)
                                            );
                                          });
                                      });
                                },
                              },
                              r.a.createElement("i", {
                                className: "fas fa-check",
                              })
                            ),
                            r.a.createElement(
                              "div",
                              {
                                className:
                                  "superusers-action-btn superusers-delete",
                                onClick: function () {
                                  O(function (e) {
                                    return (
                                      (e.isUpdating = !1),
                                      (e.acc = Object(d.a)({}, N.oldAcc)),
                                      Object(d.a)({}, e)
                                    );
                                  });
                                },
                              },
                              r.a.createElement("i", {
                                className: "fas fa-times",
                              })
                            )
                          )
                        : r.a.createElement(
                            r.a.Fragment,
                            null,
                            l &&
                              r.a.createElement(
                                "div",
                                {
                                  className:
                                    "superusers-action-btn superusers-open",
                                  onClick: y,
                                },
                                r.a.createElement("i", {
                                  className: "fas fa-external-link-alt",
                                })
                              ),
                            r.a.createElement(
                              "div",
                              {
                                className:
                                  "superusers-action-btn superusers-edit",
                                onClick: function () {
                                  O(function (e) {
                                    return (
                                      (e.isUpdating = !0),
                                      (e.oldAcc = Object(d.a)({}, N.acc)),
                                      Object(d.a)({}, e)
                                    );
                                  });
                                },
                              },
                              r.a.createElement("i", {
                                className: "fas fa-pen-alt",
                              })
                            ),
                            s &&
                              r.a.createElement(
                                "div",
                                Object.assign(
                                  {
                                    className:
                                      "superusers-action-btn superusers-delete",
                                  },
                                  j
                                ),
                                r.a.createElement("i", {
                                  className: "fas fa-trash",
                                })
                              )
                          )
                    ),
                    r.a.createElement(
                      "div",
                      {
                        tabIndex: 0,
                        className:
                          "refresh-btn superusers-more-btn superusers-more-btn-up",
                        onClick: function (e) {
                          e.preventDefault(),
                            e.stopPropagation(),
                            O(function (e) {
                              return (
                                (e.showMore = !1),
                                (e.isUpdating = !1),
                                Object(d.a)({}, e)
                              );
                            });
                        },
                      },
                      r.a.createElement("i", { className: "fas fa-arrow-up" })
                    )
                  )
                : r.a.createElement(
                    "div",
                    {
                      tabIndex: 0,
                      className: "refresh-btn superusers-more-btn",
                      onClick: function (e) {
                        e.preventDefault(),
                          e.stopPropagation(),
                          O(function (e) {
                            return (e.showMore = !0), Object(d.a)({}, e);
                          });
                      },
                    },
                    r.a.createElement("i", { className: "fas fa-arrow-down" })
                  )
            ),
            N.isDeleting &&
              r.a.createElement($, {
                message: N.acc.name,
                confirm: function () {
                  var e = { type: N.acc.type, _id: N.acc._id },
                    t = u.default.post("/superadmin/accounts/delete", e);
                  return (
                    t.then(function (e) {
                      e.ok && (window.location.href = zt.baseUrl + "/accounts");
                    }),
                    t
                  );
                },
                cancel: function () {
                  O(function (e) {
                    return (e.isDeleting = !1), Object(d.a)({}, e);
                  });
                },
              })
          );
        },
        Na = function () {
          var e = Object(n.useState)({}),
            t = Object(m.a)(e, 2),
            a = t[0],
            l = t[1];
          Object(n.useEffect)(function () {
            u.default.post(zt.baseUrl + "/accounts/get").then(function (e) {
              e.accounts &&
                l(function (t) {
                  return (t.accounts = e.accounts), Object(d.a)({}, t);
                });
            });
          }, []);
          var c =
            Array.isArray(a.accounts) &&
            a.accounts.filter(function (e) {
              return "seller" === e.type;
            });
          return r.a.createElement(
            j,
            null,
            r.a.createElement(O, { paths: zt.defaultPaths.slice(0, 1) }),
            r.a.createElement(
              "div",
              { className: "card-list superusers-list" },
              r.a.createElement(
                s.b,
                { to: zt.baseUrl + "/accounts/create", className: "app-card" },
                "Cr\xe9er un compte",
                r.a.createElement(
                  "div",
                  { className: "card-badge card-user" },
                  r.a.createElement("i", { className: "fas fa-plus" })
                )
              )
            ),
            Array.isArray(a.accounts)
              ? r.a.createElement(
                  r.a.Fragment,
                  null,
                  r.a.createElement(
                    "div",
                    { className: "superusers-title" },
                    "Vendeurs:"
                  ),
                  r.a.createElement(
                    "div",
                    { className: "card-list superusers-list" },
                    c
                      .filter(function (e) {
                        return !e.superSeller;
                      })
                      .map(function (e, t) {
                        return r.a.createElement(ha, { key: t, acc: e });
                      })
                  ),
                  r.a.createElement(
                    "div",
                    { className: "superusers-title" },
                    "Super Vendeurs:"
                  ),
                  r.a.createElement(
                    "div",
                    { className: "card-list superusers-list" },
                    c
                      .filter(function (e) {
                        return e.superSeller;
                      })
                      .map(function (e, t) {
                        return r.a.createElement(ha, { key: t, acc: e });
                      })
                  ),
                  r.a.createElement(
                    "div",
                    { className: "superusers-title" },
                    "Adminisrateurs:"
                  ),
                  r.a.createElement(
                    "div",
                    { className: "card-list superusers-list" },
                    a.accounts
                      .filter(function (e) {
                        return "admin" === e.type;
                      })
                      .map(function (e, t) {
                        return r.a.createElement(ha, { key: t, acc: e });
                      })
                  ),
                  r.a.createElement(
                    "div",
                    { className: "superusers-title" },
                    "Magasiniers:"
                  ),
                  r.a.createElement(
                    "div",
                    { className: "card-list superusers-list" },
                    a.accounts
                      .filter(function (e) {
                        return "magasin" === e.type;
                      })
                      .map(function (e, t) {
                        return r.a.createElement(ha, { key: t, acc: e });
                      })
                  ),
                  r.a.createElement(
                    "div",
                    { className: "superusers-title" },
                    "Super Admin:"
                  ),
                  r.a.createElement(
                    "div",
                    { className: "card-list superusers-list" },
                    a.accounts
                      .filter(function (e) {
                        return "superadmin" === e.type;
                      })
                      .map(function (e, t) {
                        return r.a.createElement(ha, {
                          key: t,
                          acc: e,
                          access: !1,
                          del: !1,
                        });
                      })
                  )
                )
              : r.a.createElement(f, null)
          );
        },
        Oa = function () {
          var e = Object(i.g)(),
            t = Object(n.useState)({
              mode: "seller",
              password: u.default.generatePassword(),
              passwordVisible: !0,
            }),
            a = Object(m.a)(t, 2),
            l = a[0],
            c = a[1],
            s = Object(w.a)(new Array(4).keys()).map(function (e) {
              return r.a.createRef();
            }),
            o = Object(m.a)(s, 3),
            f = o[0],
            E = o[1],
            p = o[2],
            b = r.a.createRef(),
            v = r.a.createRef();
          var g = zt.accountPaths.slice(0, 2);
          return r.a.createElement(
            j,
            null,
            r.a.createElement(O, { paths: g }),
            r.a.createElement(
              "div",
              { className: "add-page" },
              r.a.createElement(
                "form",
                {
                  className: "add-form",
                  onSubmit: function (t) {
                    t.preventDefault();
                    var a,
                      n = Object(I.a)(s);
                    try {
                      for (n.s(); !(a = n.n()).done; ) {
                        var r = a.value;
                        if (r.current && "" === r.current.value)
                          return r.current.focus(), !1;
                      }
                    } catch (v) {
                      n.e(v);
                    } finally {
                      n.f();
                    }
                    var c = f.current.value,
                      i = E.current.value,
                      m = p.current.value,
                      o = b.current && b.current.value,
                      d = {
                        type: l.mode,
                        name: c,
                        username: i,
                        password: m,
                        charges: o,
                      };
                    u.default
                      .post("/superadmin/accounts/create", d)
                      .then(function (t) {
                        t.ok
                          ? e.push(zt.baseUrl + "/accounts")
                          : t.error && t.errorMessage && alert(t.errorMessage);
                      });
                  },
                },
                r.a.createElement(
                  "div",
                  { className: "appTitle" },
                  "Creer un compte"
                ),
                r.a.createElement(
                  "div",
                  { className: "appInput" },
                  r.a.createElement(
                    "select",
                    {
                      ref: v,
                      style: { width: "100%" },
                      value: l.mode,
                      onChange: function () {
                        c(function (e) {
                          return (e.mode = v.current.value), Object(d.a)({}, e);
                        });
                      },
                    },
                    [
                      { type: "seller", text: "Vendeur" },
                      { type: "magasin", text: "Magasinier" },
                      { type: "admin", text: "Administrateur" },
                      { type: "superseller", text: "Super Vendeur" },
                    ].map(function (e, t) {
                      return r.a.createElement(
                        "option",
                        { key: t, value: e.type },
                        e.text
                      );
                    })
                  )
                ),
                r.a.createElement(
                  "div",
                  { className: "appInput" },
                  r.a.createElement("input", {
                    ref: f,
                    autoFocus: !0,
                    placeholder: "Nom et Pr\xe9nom",
                  })
                ),
                r.a.createElement(
                  "div",
                  { className: "appInput" },
                  r.a.createElement("input", {
                    ref: E,
                    placeholder: "Username",
                  })
                ),
                r.a.createElement(
                  "div",
                  { className: "appInput" },
                  r.a.createElement("input", {
                    ref: p,
                    placeholder: "Password",
                    type: l.passwordVisible ? "text" : "password",
                    value: l.password,
                    onChange: function () {
                      c(function (e) {
                        return (
                          (e.password = p.current.value), Object(d.a)({}, e)
                        );
                      });
                    },
                  }),
                  r.a.createElement(Le, {
                    visible: l.passwordVisible,
                    onClick: function () {
                      c(function (e) {
                        return (
                          (e.passwordVisible = !e.passwordVisible),
                          Object(d.a)({}, e)
                        );
                      });
                    },
                  })
                ),
                "seller" === l.mode &&
                  r.a.createElement(
                    r.a.Fragment,
                    null,
                    r.a.createElement(
                      "div",
                      { className: "appInput" },
                      r.a.createElement(ht, { _ref: b, ph: "Charges" })
                    )
                  ),
                r.a.createElement(
                  "label",
                  { tabIndex: 0 },
                  r.a.createElement("input", { type: "submit", hidden: !0 }),
                  r.a.createElement("div", { className: "submit-btn" }, "Creer")
                )
              )
            )
          );
        },
        ja = function () {
          return Object(n.useContext)(Ge);
        },
        ya =
          (a(408),
          function () {
            var e = Yt(),
              t = Object(m.a)(e, 2),
              a = t[0],
              n =
                (t[1],
                (
                  (a.sellersStatus && Object.values(a.sellersStatus)) ||
                  []
                ).sort(function (e, t) {
                  return (t.disconnectTime || 0) - (e.disconnectTime || 0);
                })),
              l = [].concat(
                Object(w.a)(
                  n.filter(function (e) {
                    return e.connected;
                  })
                ),
                Object(w.a)(
                  n.filter(function (e) {
                    return !e.connected;
                  })
                )
              );
            return r.a.createElement(
              j,
              null,
              r.a.createElement(O, { paths: zt.defaultPaths.slice(0, 1) }),
              r.a.createElement(
                "div",
                { className: "title-2" },
                "Statut Vendeurs"
              ),
              r.a.createElement(
                "div",
                { className: "card-list" },
                l.map(function (e, t) {
                  return r.a.createElement(
                    "div",
                    { key: t, className: "app-card" },
                    r.a.createElement(
                      "div",
                      { className: "superlive-info" },
                      e.connectTime &&
                        r.a.createElement(
                          "div",
                          { className: "superlive-info-text" },
                          r.a.createElement(
                            "div",
                            { className: "superlive-status-small" },
                            r.a.createElement("i", { className: "fas fa-wifi" })
                          ),
                          r.a.createElement(
                            "span",
                            null,
                            u.default.ftd(e.connectTime)
                          )
                        ),
                      !e.connected &&
                        e.disconnectTime &&
                        r.a.createElement(
                          "div",
                          { className: "superlive-info-text" },
                          r.a.createElement(
                            "div",
                            { className: "superlive-status-small" },
                            r.a.createElement("i", {
                              className: "fas fa-times",
                            })
                          ),
                          r.a.createElement(
                            "span",
                            null,
                            u.default.ftd(e.disconnectTime)
                          )
                        )
                    ),
                    e.name,
                    e.connected
                      ? r.a.createElement(
                          "div",
                          { className: "card-status card-success-status" },
                          r.a.createElement("i", { className: "fas fa-wifi" })
                        )
                      : r.a.createElement(
                          "div",
                          { className: "card-status card-danger-status" },
                          r.a.createElement("i", { className: "fas fa-times" })
                        )
                  );
                })
              )
            );
          }),
        Ca = function () {
          var e = Object(n.useState)({}),
            t = Object(m.a)(e, 2),
            a = t[0],
            l = t[1],
            c = Object(n.useState)({ startTime: "", endTime: "" }),
            s = Object(m.a)(c, 2),
            i = s[0],
            o = s[1],
            E = r.a.createRef(),
            p = r.a.createRef(),
            b = ge({ stateHook: [i, o], startRef: E, endRef: p });
          return (
            Object(n.useEffect)(
              function () {
                l(function (e) {
                  return (e.loading = !0), (e.clients = []), Object(d.a)({}, e);
                }),
                  u.default
                    .post("/superadmin/clients/getInactive", Object(d.a)({}, i))
                    .then(function (e) {
                      e.ok &&
                        l(function (t) {
                          return (
                            (t.loading = !1),
                            (t.clients = e.clients),
                            Object(d.a)({}, t)
                          );
                        });
                    });
              },
              [i]
            ),
            r.a.createElement(
              j,
              null,
              r.a.createElement(O, { paths: zt.defaultPaths.slice(0, 1) }),
              r.a.createElement(
                "div",
                { className: "title-2" },
                "Clients Inactives"
              ),
              r.a.createElement(
                "div",
                { className: "form-group" },
                r.a.createElement("span", null, "Debut:"),
                r.a.createElement("input", {
                  ref: E,
                  type: "date",
                  value: i.startTime,
                  onChange: b[0],
                  className: "form-control",
                })
              ),
              r.a.createElement(
                "div",
                null,
                r.a.createElement("span", null, "Fin"),
                r.a.createElement("input", {
                  ref: p,
                  type: "date",
                  value: i.endTime,
                  onChange: b[1],
                  className: "form-control",
                })
              ),
              i.startTime &&
                r.a.createElement(
                  "div",
                  { className: "time-interval-message" },
                  u.default.returnDateIntervalMessage(i.startTime, i.endTime)
                ),
              a.loading
                ? r.a.createElement(f, null)
                : Array.isArray(a.clients) &&
                    r.a.createElement(
                      "div",
                      { className: "card-list" },
                      a.clients.map(function (e) {
                        return r.a.createElement(
                          "div",
                          { key: e._id, className: "app-card" },
                          e.name
                        );
                      })
                    )
            )
          );
        },
        ka = null,
        Sa = function () {
          return r.a.createElement(
            "div",
            {
              className: "app-card modern-app-card card-c-8",
              onClick: function () {
                u.default
                  .post(
                    "/superadmin/db/backup",
                    {},
                    { responseType: "arraybuffer" }
                  )
                  .then(function (e) {
                    if (!e.error) {
                      var t = document.createElement("a");
                      t.setAttribute(
                        "download",
                        "database-" + Date.now() + ".zip"
                      ),
                        (t.href = (function (e) {
                          var t = new Blob([e], { type: "application/zip" });
                          return (
                            null !== ka && window.URL.revokeObjectURL(ka),
                            (ka = window.URL.createObjectURL(t))
                          );
                        })(e)),
                        window.document.body.appendChild(t),
                        window.requestAnimationFrame(function () {
                          var e = new MouseEvent("click");
                          t.dispatchEvent(e), document.body.removeChild(t);
                        });
                    }
                  });
              },
            },
            "Base de Donn\xe9es",
            r.a.createElement(
              "div",
              { className: "card-badge" },
              r.a.createElement("i", { className: "fas fa-database" })
            ),
            r.a.createElement(
              "div",
              { className: "card-status card-success-status" },
              r.a.createElement("i", { className: "fas fa-arrow-down" })
            )
          );
        },
        xa = function () {
          var e = Yt(),
            t = Object(m.a)(e, 2),
            a = t[0],
            n = t[1];
          return r.a.createElement(
            j,
            null,
            r.a.createElement(O, { paths: zt.defaultPaths.slice(0, 1) }),
            r.a.createElement(
              "div",
              { className: "card-list" },
              r.a.createElement(
                s.b,
                {
                  to: zt.baseUrl + "/stockStatus",
                  className: "app-card modern-app-card card-c-9",
                },
                "Etat Stocke",
                r.a.createElement(
                  "div",
                  { className: "card-badge" },
                  r.a.createElement("i", { className: "fas fa-leaf" })
                )
              ),
              r.a.createElement(k, {
                endPoint: "/superadmin/debit/count",
                to: zt.baseUrl + "/debitStatus",
                stateHook: [a, n],
              }),
              r.a.createElement(Sa, null)
            )
          );
        },
        _a = function () {
          r.a.createRef();
          var e = Object(n.useState)({}),
            t = Object(m.a)(e, 2),
            a = t[0],
            l = t[1];
          Object(n.useEffect)(function () {
            u.default
              .post("/superadmin/articles/get", { getAll: !0 })
              .then(function (e) {
                e.ok &&
                  l(function (t) {
                    return (t.stock = e.data), Object(d.a)({}, t);
                  });
              });
          }, []);
          var c = u.default.ftd(Date.now()),
            s = 0,
            i = 0,
            o =
              Array.isArray(a.stock) &&
              r.a.createElement(
                r.a.Fragment,
                null,
                r.a.createElement(
                  "div",
                  { className: "printable-title" },
                  "Stocke Local"
                ),
                r.a.createElement(
                  "div",
                  { className: "time-interval-message" },
                  c
                ),
                r.a.createElement(
                  "table",
                  { className: "table table-striped" },
                  r.a.createElement(
                    "thead",
                    null,
                    r.a.createElement(
                      "tr",
                      null,
                      r.a.createElement("th", null, "Article"),
                      r.a.createElement("th", null, "Qte"),
                      r.a.createElement("th", null, "P A"),
                      r.a.createElement("th", null, "P V")
                    )
                  ),
                  r.a.createElement(
                    "tbody",
                    null,
                    a.stock.map(function (e) {
                      return (
                        (s += e.prixVente * e.qtStocke),
                        (i += e.prixAchat * e.qtStocke),
                        r.a.createElement(
                          "tr",
                          { key: e._id },
                          r.a.createElement("td", null, e.name),
                          r.a.createElement(
                            "td",
                            null,
                            u.default.fn(e.qtStocke)
                          ),
                          r.a.createElement(
                            "td",
                            null,
                            u.default.fn(e.prixAchat)
                          ),
                          r.a.createElement(
                            "td",
                            null,
                            u.default.fn(e.prixVente)
                          )
                        )
                      );
                    }),
                    r.a.createElement(
                      "tr",
                      null,
                      r.a.createElement("td", { colSpan: "3" }, "Total Vente"),
                      r.a.createElement("td", null, u.default.fn(s), " DHS")
                    ),
                    r.a.createElement(
                      "tr",
                      null,
                      r.a.createElement("td", { colSpan: "2" }, "Total Achat"),
                      r.a.createElement("td", null, u.default.fn(i), " DHS"),
                      r.a.createElement("td", null)
                    ),
                    r.a.createElement(
                      "tr",
                      null,
                      r.a.createElement("td", { colSpan: "3" }, "Benefice"),
                      r.a.createElement("td", null, u.default.fn(s - i), " DHS")
                    )
                  )
                )
              ),
            E = Date.now();
          return r.a.createElement(
            j,
            null,
            r.a.createElement(O, { paths: zt.statusPaths.slice(0, 2) }),
            o
              ? r.a.createElement(De, { key: E, component: o, title: E })
              : r.a.createElement(f, null)
          );
        },
        Aa = function () {
          return r.a.createElement(Ie, {
            endPoint: "/superadmin/debit/getSellers",
            paths: zt.statusPaths.slice(0, 2),
            baseUrl: zt.baseUrl,
          });
        },
        wa = function (e) {
          var t = e.match;
          return r.a.createElement(Ue, {
            match: t,
            endPoint: "/superadmin/debit/getClients",
            baseUrl: zt.baseUrl,
            paths: zt.statusPaths.slice(0, 3),
          });
        },
        Fa = function () {
          return r.a.createElement(Re, {
            endPoint: "/superadmin/stats/getHistory",
            paths: zt.statusPaths.slice(0, 1),
          });
        },
        Da = function (e) {
          var t = e.match,
            a = e.endPoint,
            l = e.paths,
            c = e.baseUrl,
            s = Object(n.useState)({}),
            i = Object(m.a)(s, 2),
            o = i[0],
            E = i[1],
            p = t.params._id;
          Object(n.useEffect)(function () {
            var e = { _id: p };
            u.default.post(a, e).then(function (e) {
              e.ok &&
                E(function (t) {
                  return (t.invoices = e.invoices), Object(d.a)({}, t);
                });
            });
          }, []);
          var b =
              Array.isArray(o.invoices) &&
              r.a.createElement(
                r.a.Fragment,
                null,
                r.a.createElement(
                  "div",
                  { className: "printable-title" },
                  "Credit BL"
                ),
                r.a.createElement(
                  "div",
                  { className: "time-interval-message" },
                  u.default.ftd(Date.now())
                ),
                r.a.createElement(
                  "table",
                  { className: "table shadow" },
                  r.a.createElement(
                    "thead",
                    { className: "thead-dark" },
                    r.a.createElement(
                      "tr",
                      null,
                      r.a.createElement("th", null, "id"),
                      r.a.createElement("th", null, "Total"),
                      r.a.createElement("th", null, "Credit")
                    )
                  ),
                  r.a.createElement(
                    "tbody",
                    null,
                    o.invoices.map(function (e) {
                      return r.a.createElement(
                        "tr",
                        { key: e._id },
                        r.a.createElement(Ne, {
                          cols: [
                            {
                              to: c + "/debitStatusInvoice/" + e._id,
                              text: e._id,
                            },
                            { text: u.default.fn(e.total) },
                            { text: u.default.fn(e.total - e.paid) },
                          ],
                        })
                      );
                    })
                  )
                )
              ),
            v = Date.now();
          return r.a.createElement(
            j,
            null,
            r.a.createElement(O, { paths: l }),
            b
              ? r.a.createElement(De, {
                  key: v,
                  component: b,
                  title: "Credit par invoices " + u.default.ftd(v),
                })
              : r.a.createElement(f, null)
          );
        },
        Ua = function (e) {
          var t = e.match;
          return r.a.createElement(Da, {
            match: t,
            endPoint: "/superadmin/debit/getInvoices",
            baseUrl: zt.baseUrl,
            paths: zt.statusPaths.slice(0, 3),
          });
        },
        Pa = function (e) {
          var t = e.match,
            a = e.endPoint,
            l = e.paths,
            c = Object(n.useState)({}),
            s = Object(m.a)(c, 2),
            i = s[0],
            o = s[1],
            E = t.params._id;
          Object(n.useEffect)(function () {
            var e = { _id: E };
            u.default.post(a, e).then(function (e) {
              e.ok &&
                o(function (t) {
                  return (t.invoice = e.invoice), Object(d.a)({}, t);
                });
            });
          }, []);
          var p =
              i.invoice &&
              r.a.createElement(
                r.a.Fragment,
                null,
                r.a.createElement(
                  "div",
                  { className: "printable-title" },
                  "Bon de livraison"
                ),
                r.a.createElement(
                  "div",
                  { className: "time-interval-message" },
                  u.default.ftd(i.invoice.time)
                ),
                r.a.createElement(at, { invoice: i.invoice })
              ),
            b = Date.now();
          return r.a.createElement(
            j,
            null,
            r.a.createElement(O, { paths: l }),
            p
              ? r.a.createElement(De, {
                  key: b,
                  component: p,
                  title: "Credit par invoice " + u.default.ftd(b),
                })
              : r.a.createElement(f, null)
          );
        },
        Ia = function (e) {
          var t = e.match;
          return r.a.createElement(Pa, {
            match: t,
            endPoint: "/superadmin/debit/getInvoice",
            baseUrl: zt.baseUrl,
            paths: zt.statusPaths.slice(0, 5),
          });
        },
        Ta = function () {
          var e = Object(n.useContext)(Qt),
            t = Object(m.a)(e, 2),
            a = t[0],
            l = t[1],
            c = ja(),
            u = Object(m.a)(c, 1)[0];
          function o(e) {
            l(function (t) {
              t.sellersStatus || (t.sellersStatus = {});
              var a,
                n = Object(I.a)(e);
              try {
                for (n.s(); !(a = n.n()).done; ) {
                  var r = a.value || {};
                  t.sellersStatus[r._id] || (t.sellersStatus[r._id] = {}),
                    (t.sellersStatus[r._id] = Object(d.a)(
                      Object(d.a)({}, t.sellersStatus[r._id]),
                      r
                    ));
                }
              } catch (l) {
                n.e(l);
              } finally {
                n.f();
              }
              return Object(d.a)({}, t);
            });
          }
          return (
            Object(n.useEffect)(
              function () {
                a.session.logged &&
                  u &&
                  (u.on("connect", function () {}),
                  u.on("all_sellers", function (e) {
                    o(e.sellers);
                  }),
                  u.on("seller_connected", function (e) {
                    o([e.sellerInfo || {}]);
                  }),
                  u.on("seller_disconnected", function (e) {
                    o([e.sellerInfo || {}]);
                  }));
              },
              [u]
            ),
            r.a.createElement(
              r.a.Fragment,
              null,
              r.a.createElement(
                "div",
                { className: "user-nav" },
                r.a.createElement(
                  "div",
                  { className: "user-nav-item" },
                  r.a.createElement(
                    s.b,
                    { to: zt.baseUrl, className: "user-name-title" },
                    "Super Admin"
                  )
                ),
                r.a.createElement(
                  "div",
                  { className: "user-nav-item btn-group-around" },
                  r.a.createElement(da, null),
                  r.a.createElement(g, null),
                  r.a.createElement(oa, null)
                )
              ),
              r.a.createElement(
                i.d,
                null,
                r.a.createElement(i.b, {
                  exact: !0,
                  path: zt.baseUrl,
                  component: ua,
                }),
                r.a.createElement(i.b, {
                  exact: !0,
                  path: zt.baseUrl + "/categories",
                  component: ca,
                }),
                r.a.createElement(i.b, {
                  exact: !0,
                  path: zt.baseUrl + "/addCategory",
                  component: ra,
                }),
                r.a.createElement(i.b, {
                  exact: !0,
                  path: zt.baseUrl + "/category/:_id",
                  component: la,
                }),
                r.a.createElement(i.b, {
                  exact: !0,
                  path: zt.baseUrl + "/article/:_id",
                  component: na,
                }),
                r.a.createElement(i.b, {
                  exact: !0,
                  path: zt.baseUrl + "/addArticle/:catId",
                  component: Jt,
                }),
                r.a.createElement(i.b, {
                  exact: !0,
                  path: zt.baseUrl + "/alerts",
                  component: Wt,
                }),
                r.a.createElement(i.b, {
                  exact: !0,
                  path: zt.baseUrl + "/liveSellers",
                  component: ya,
                }),
                r.a.createElement(i.b, {
                  exact: !0,
                  path: zt.baseUrl + "/accounts/create",
                  component: Oa,
                }),
                r.a.createElement(i.b, {
                  path: zt.baseUrl + "/stats",
                  component: va,
                }),
                r.a.createElement(i.b, {
                  exact: !0,
                  path: zt.baseUrl + "/accounts",
                  component: Na,
                }),
                r.a.createElement(i.b, {
                  exact: !0,
                  path: zt.baseUrl + "/offClients",
                  component: Ca,
                }),
                r.a.createElement(i.b, {
                  exact: !0,
                  path: zt.baseUrl + "/status",
                  component: xa,
                }),
                r.a.createElement(i.b, {
                  exact: !0,
                  path: zt.baseUrl + "/stockStatus",
                  component: _a,
                }),
                r.a.createElement(i.b, {
                  exact: !0,
                  path: zt.baseUrl + "/debitStatus",
                  component: Aa,
                }),
                r.a.createElement(i.b, {
                  exact: !0,
                  path: zt.baseUrl + "/debitStatus/:_id",
                  component: wa,
                }),
                r.a.createElement(i.b, {
                  exact: !0,
                  path: zt.baseUrl + "/debitStatusClient/:_id",
                  component: Ua,
                }),
                r.a.createElement(i.b, {
                  exact: !0,
                  path: zt.baseUrl + "/debitStatusInvoice/:_id",
                  component: Ia,
                }),
                r.a.createElement(i.b, {
                  exact: !0,
                  path: zt.baseUrl + "/payments",
                  component: Fa,
                }),
                r.a.createElement(i.b, { component: Xt })
              )
            )
          );
        },
        Ha = function () {
          return r.a.createElement(Bt, null, r.a.createElement(Ta, null));
        },
        Ra = r.a.createContext(),
        qa = function (e) {
          var t = e.children,
            a = Object(i.g)(),
            l = Object(n.useState)({}),
            c = Object(m.a)(l, 2),
            s = c[0],
            o = c[1];
          return (
            Object(n.useEffect)(function () {
              s.session ||
                u.default.post("/magasin/session").then(function (e) {
                  e.logged
                    ? o(function (t) {
                        return Object(d.a)(
                          Object(d.a)({}, t),
                          {},
                          { session: e }
                        );
                      })
                    : a.push("/");
                });
            }),
            s.session
              ? r.a.createElement(Ra.Provider, { value: [s, o] }, t)
              : r.a.createElement(f, null)
          );
        },
        Va = {
          baseUrl: "/magasin",
          defaultPaths: [
            { type: "icon", icon: "home", title: "Accueil", to: "/magasin" },
          ],
          commandsPaths: [
            { type: "icon", icon: "home", title: "Accueil", to: "/magasin" },
            { title: "Commandes", to: "/magasin/commands" },
          ],
          fullfiledPaths: [
            { type: "icon", icon: "home", title: "Accueil", to: "/magasin" },
            { title: "Historique", to: "/magasin/commandHistory" },
          ],
        },
        La = function (e) {
          var t = e.match;
          return r.a.createElement(_e, {
            match: t,
            control: !0,
            paths: Va.defaultPaths.slice(0, 1),
            userConfig: Va,
            config: { endPoint: "/magasin/cmd/getOne" },
          });
        },
        Ma = function (e) {
          var t = e.fullfiled,
            a = Object(n.useContext)(Ra),
            l = Object(m.a)(a, 2),
            c = l[0],
            s = l[1];
          return r.a.createElement(
            "div",
            null,
            r.a.createElement(Oe, {
              key: Date.now(),
              fullfiled: t,
              paths: Va.defaultPaths.slice(0, 1),
              stateHook: [c, s],
              config: { baseUrl: "/magasin", endPoint: "/magasin/cmd/get" },
            })
          );
        },
        Qa = u.default.formatTimeToHTMLDate(),
        Ba = function () {
          r.a.createRef();
          var e = Object(n.useState)({ startTime: Qa, endTime: "" }),
            t = Object(m.a)(e, 2),
            a = t[0],
            l = t[1],
            c = Object(n.useState)({}),
            s = Object(m.a)(c, 2),
            i = s[0],
            o = s[1],
            f = r.a.createRef(),
            E = r.a.createRef(),
            p = ge({ stateHook: [a, l], startRef: f, endRef: E });
          Object(n.useEffect)(
            function () {
              u.default
                .post("/magasin/cmd/getStatus", Object(d.a)({}, a))
                .then(function (e) {
                  e.ok &&
                    o(function (t) {
                      return (
                        (t.startTime = e.startTime),
                        (t.endTime = e.endTime),
                        (t.articles = e.articles),
                        Object(d.a)({}, t)
                      );
                    });
                });
            },
            [a]
          );
          var b = 0,
            v =
              Array.isArray(i.articles) &&
              r.a.createElement(
                "div",
                null,
                r.a.createElement(
                  "div",
                  { className: "printable-title" },
                  "Commandes Valid\xe9es"
                ),
                r.a.createElement(
                  "div",
                  { className: "time-interval-message" },
                  u.default.returnDateIntervalMessage(i.startTime, i.endTime)
                ),
                r.a.createElement(
                  "table",
                  { className: "simple-table" },
                  r.a.createElement(
                    "thead",
                    null,
                    r.a.createElement(
                      "tr",
                      null,
                      r.a.createElement("th", null, "Article"),
                      r.a.createElement("th", null, "Qte")
                    )
                  ),
                  r.a.createElement(
                    "tbody",
                    null,
                    i.articles.map(function (e) {
                      return (
                        (b += e.prixVente * e.qt),
                        r.a.createElement(
                          "tr",
                          { key: e._id },
                          r.a.createElement("td", null, e.name),
                          r.a.createElement("td", null, u.default.fn(e.qt))
                        )
                      );
                    })
                  ),
                  r.a.createElement(
                    "tbody",
                    null,
                    r.a.createElement(
                      "tr",
                      null,
                      r.a.createElement("td", null, "Total:"),
                      r.a.createElement("td", null, u.default.fn(b), " DHS")
                    )
                  )
                )
              );
          return r.a.createElement(
            j,
            null,
            r.a.createElement(O, { paths: Va.defaultPaths.slice(0, 1) }),
            r.a.createElement(
              "div",
              null,
              r.a.createElement("span", null, "Debut:"),
              r.a.createElement("input", {
                ref: f,
                type: "date",
                value: a.startTime,
                onChange: p[0],
                className: "form-control",
              })
            ),
            r.a.createElement(
              "div",
              null,
              r.a.createElement("span", null, "Fin:"),
              r.a.createElement("input", {
                ref: E,
                type: "date",
                value: a.endTime,
                onChange: p[1],
                className: "form-control",
              })
            ),
            v && r.a.createElement(De, { key: Date.now(), component: v })
          );
        },
        za = function () {
          var e = Object(n.useContext)(Ra),
            t = Object(m.a)(e, 2),
            a = t[0],
            l = t[1];
          return r.a.createElement(S, {
            stateHook: [a, l],
            config: { endPoint: "/magasin/cmd/count", baseUrl: Va.baseUrl },
          });
        },
        Ka = function () {
          return r.a.createElement(
            s.b,
            {
              to: "/magasin/commandHistory",
              className: "app-card modern-app-card card-c-8",
            },
            "Historique Commandes",
            r.a.createElement(
              "div",
              { className: "card-badge" },
              r.a.createElement("i", { className: "fas fa-history" })
            )
          );
        },
        Ya = function () {
          return r.a.createElement(
            s.b,
            {
              to: "/magasin/commandStatus",
              className: "app-card modern-app-card card-c-3",
            },
            "Etat de ccommandes",
            r.a.createElement(
              "div",
              { className: "card-badge" },
              r.a.createElement("i", { className: "fas fa-file-alt" })
            )
          );
        },
        Wa = function () {
          return r.a.createElement(
            j,
            null,
            r.a.createElement(
              "div",
              { className: "card-list" },
              r.a.createElement(za, null),
              r.a.createElement(Ka, null),
              r.a.createElement(Ya, null),
              r.a.createElement(
                s.b,
                {
                  to: "/magasin/stockStatus",
                  className: "app-card modern-app-card card-c-9",
                },
                "Etat du Stocke",
                r.a.createElement(
                  "div",
                  { className: "card-badge" },
                  r.a.createElement("i", { className: "fas fa-leaf" })
                )
              )
            )
          );
        },
        Ga = function () {
          var e = Object(i.g)();
          return r.a.createElement(
            "div",
            {
              className: "Btn logoutBtn refresh-btn",
              onClick: function () {
                u.default.post("/magasin/session/logout").then(function (t) {
                  !1 === t.logged && e.push("/");
                });
              },
            },
            r.a.createElement("i", { className: "fas fa-sign-out" })
          );
        },
        Ja = function () {
          var e = Object(n.useContext)(Ra),
            t = Object(m.a)(e, 2)[1];
          return r.a.createElement(
            "div",
            {
              className: "refresh-btn",
              tabIndex: 0,
              onClick: function () {
                t(function (e) {
                  return {};
                });
              },
            },
            r.a.createElement("i", { className: "fas fa-sync" })
          );
        },
        Xa = function () {
          return r.a.createElement(
            "div",
            { className: "user-nav" },
            r.a.createElement(
              "div",
              { className: "user-nav-item" },
              r.a.createElement(
                s.b,
                { className: "user-name-title", to: Va.baseUrl },
                "Magasinier"
              )
            ),
            r.a.createElement(
              "div",
              { className: "user-nav-item" },
              r.a.createElement(Ja, null),
              r.a.createElement(g, null),
              r.a.createElement(Ga, null)
            )
          );
        },
        $a =
          (a(409),
          function () {
            var e = Object(n.useState)({}),
              t = Object(m.a)(e, 2),
              a = t[0],
              l = t[1];
            Object(n.useEffect)(function () {
              u.default.post("/magasin/stock/get").then(function (e) {
                e.ok &&
                  l(function (t) {
                    return (t.stock = e.articles), Object(d.a)({}, t);
                  });
              });
            }, []);
            var c = u.default.ftd(Date.now()),
              s =
                Array.isArray(a.stock) &&
                r.a.createElement(
                  r.a.Fragment,
                  null,
                  r.a.createElement(
                    "div",
                    { className: "printable-title" },
                    "Stocke Local"
                  ),
                  r.a.createElement(
                    "div",
                    { className: "time-interval-message" },
                    c
                  ),
                  r.a.createElement(
                    "table",
                    { className: "table" },
                    r.a.createElement(
                      "thead",
                      null,
                      r.a.createElement(
                        "tr",
                        null,
                        r.a.createElement("th", null, "Article"),
                        r.a.createElement("th", null, "Quantit\xe9")
                      )
                    ),
                    r.a.createElement(
                      "tbody",
                      null,
                      a.stock.map(function (e) {
                        return r.a.createElement(
                          "tr",
                          { key: e._id },
                          r.a.createElement("td", null, e.name),
                          r.a.createElement(
                            "td",
                            null,
                            u.default.fn(e.qtStocke)
                          )
                        );
                      })
                    )
                  )
                ),
              i = Date.now();
            return r.a.createElement(
              j,
              null,
              r.a.createElement(O, { paths: Va.defaultPaths.slice(0, 1) }),
              Array.isArray(a.stock)
                ? r.a.createElement(De, { key: i, component: s, title: i })
                : r.a.createElement(f, null)
            );
          }),
        Za = function () {
          var e = Object(n.useContext)(Ra),
            t = Object(m.a)(e, 1)[0];
          return t.session && t.session.logged
            ? r.a.createElement(
                r.a.Fragment,
                null,
                r.a.createElement(Xa, null),
                r.a.createElement(
                  i.d,
                  null,
                  r.a.createElement(i.b, {
                    exact: !0,
                    path: "/magasin",
                    component: Wa,
                  }),
                  r.a.createElement(i.b, {
                    exact: !0,
                    path: "/magasin/commands",
                    component: Ma,
                  }),
                  r.a.createElement(i.b, {
                    exact: !0,
                    path: "/magasin/commandHistory",
                    render: function () {
                      return r.a.createElement(Ma, { fullfiled: !0 });
                    },
                  }),
                  r.a.createElement(i.b, {
                    exact: !0,
                    path: "/magasin/command/:_id",
                    component: La,
                  }),
                  r.a.createElement(i.b, {
                    exact: !0,
                    path: "/magasin/commandStatus",
                    component: Ba,
                  }),
                  r.a.createElement(i.b, {
                    exact: !0,
                    path: "/magasin/stockStatus",
                    component: $a,
                  })
                )
              )
            : r.a.createElement(r.a.Fragment, null);
        },
        en = function () {
          return r.a.createElement(qa, null, r.a.createElement(Za, null));
        },
        tn = a(182),
        an = a.n(tn),
        nn =
          (a(566),
          {
            particles: {
              number: { value: 80, density: { enable: !0, value_area: 800 } },
              color: { value: "#ffffff" },
              shape: {
                type: "circle",
                stroke: { width: 0, color: "#000000" },
                polygon: { nb_sides: 5 },
                image: { src: "img/github.svg", width: 100, height: 100 },
              },
              opacity: {
                value: 0.5,
                random: !1,
                anim: { enable: !0, speed: 1, opacity_min: 0.1, sync: !1 },
              },
              size: {
                value: 4,
                random: !0,
                anim: { enable: !1, speed: 40, size_min: 0.1, sync: !1 },
              },
              line_linked: {
                enable: !0,
                distance: 150,
                color: "#ffffff",
                opacity: 0.4,
                width: 1,
              },
              move: {
                enable: !0,
                speed: 6,
                direction: "none",
                random: !1,
                straight: !1,
                out_mode: "out",
                bounce: !1,
                attract: { enable: !1, rotateX: 600, rotateY: 1200 },
              },
            },
            interactivity: {
              detect_on: "window",
              events: {
                onhover: { enable: !0, mode: "grab" },
                onclick: { enable: !0, mode: "push" },
                resize: !0,
              },
              modes: {
                grab: { distance: 200, line_linked: { opacity: 1 } },
                bubble: {
                  distance: 400,
                  size: 40,
                  duration: 2,
                  opacity: 8,
                  speed: 3,
                },
                repulse: { distance: 200, duration: 0.4 },
                push: { particles_nb: 4 },
                remove: { particles_nb: 2 },
              },
            },
            retina_detect: !1,
          }),
        rn = function () {
          var e = Object(i.g)(),
            t = [1, 2].map(function () {
              return r.a.createRef();
            }),
            a = Object(m.a)(t, 2),
            l = a[0],
            c = a[1],
            s = Object(n.useState)({ responded: void 0, passwordVisible: !1 }),
            o = Object(m.a)(s, 2),
            f = o[0],
            E = o[1];
          return r.a.createElement(
            r.a.Fragment,
            null,
            r.a.createElement(an.a, {
              params: nn,
              style: { position: "absolute" },
            }),
            r.a.createElement(
              j,
              null,
              r.a.createElement(
                "div",
                { className: "global-login" },
                r.a.createElement(
                  "div",
                  { className: "title" },
                  "Se Connecter"
                ),
                r.a.createElement(
                  "form",
                  {
                    onSubmit: function (a) {
                      a.preventDefault();
                      var n,
                        r = Object(I.a)(t);
                      try {
                        for (r.s(); !(n = r.n()).done; ) {
                          var s = n.value;
                          if ("" === s.current.value)
                            return s.current.focus(), !1;
                        }
                      } catch (o) {
                        r.e(o);
                      } finally {
                        r.f();
                      }
                      var i = l.current.value,
                        m = c.current.value;
                      E(Object(d.a)(Object(d.a)({}, f), {}, { responded: !1 })),
                        u.default
                          .post("/login", { username: i, password: m })
                          .then(function (t) {
                            t.logged
                              ? e.push("/" + t.route)
                              : E(
                                  Object(d.a)(
                                    Object(d.a)({}, f),
                                    {},
                                    { responded: !0, error: !0 }
                                  )
                                );
                          })
                          .catch(function (e) {
                            E(
                              Object(d.a)(
                                Object(d.a)({}, f),
                                {},
                                { responded: !0, error: !0, netErr: !0 }
                              )
                            );
                          });
                    },
                  },
                  r.a.createElement(
                    "div",
                    { className: "box" },
                    r.a.createElement(
                      "div",
                      { className: "inputContainer" },
                      r.a.createElement(
                        "div",
                        { className: "icon" },
                        r.a.createElement("i", { className: "far fa-envelope" })
                      ),
                      r.a.createElement("input", {
                        ref: l,
                        autoFocus: !0,
                        className: "input",
                        type: "text",
                        placeholder: "USERNAME",
                      })
                    ),
                    r.a.createElement(
                      "div",
                      { className: "inputContainer" },
                      r.a.createElement(
                        "div",
                        { className: "icon" },
                        r.a.createElement("i", { className: "far fa-lock" })
                      ),
                      r.a.createElement("input", {
                        ref: c,
                        name: "password",
                        className: "input",
                        type: f.passwordVisible ? "text" : "password",
                        placeholder: "PASSWORD",
                      }),
                      r.a.createElement(Le, {
                        onClick: function () {
                          E(
                            Object(d.a)(
                              Object(d.a)({}, f),
                              {},
                              { passwordVisible: !f.passwordVisible }
                            )
                          );
                        },
                        visible: f.passwordVisible,
                      })
                    ),
                    f.error &&
                      r.a.createElement(
                        "div",
                        { className: "error-message" },
                        f.netErr
                          ? "Erreur de Connexion"
                          : "Le nom d'utilisateur ou mot de passe est incorrect"
                      ),
                    r.a.createElement(
                      "label",
                      { tabIndex: 0 },
                      r.a.createElement("input", {
                        type: "submit",
                        hidden: !0,
                      }),
                      r.a.createElement(
                        "div",
                        { className: "submit-btn" },
                        !1 === f.responded
                          ? r.a.createElement(C, null)
                          : r.a.createElement(r.a.Fragment, null),
                        "Se Connecter"
                      )
                    )
                  )
                )
              )
            )
          );
        },
        ln =
          (a(567),
          function () {
            var e = Object(n.useState)({}),
              t = Object(m.a)(e, 2),
              a = t[0],
              l = t[1];
            Object(i.g)();
            return (
              Object(n.useEffect)(function () {
                u.default.post("/session").then(function (e) {
                  l(function (t) {
                    return Object(d.a)(
                      Object(d.a)(Object(d.a)({}, t), e),
                      {},
                      { responded: !0 }
                    );
                  });
                });
              }, []),
              a.responded
                ? a.logged
                  ? r.a.createElement(i.a, { to: "/" + a.route })
                  : r.a.createElement(
                      "div",
                      { className: "body" },
                      r.a.createElement(rn, null)
                    )
                : r.a.createElement(f, null)
            );
          }),
        cn = function () {
          return r.a.createElement(
            i.d,
            null,
            r.a.createElement(i.b, { exact: !0, path: "/", component: ln }),
            r.a.createElement(i.b, { path: h.baseUrl, component: Ke }),
            r.a.createElement(i.b, { path: "/seller", component: Mt }),
            r.a.createElement(i.b, { path: "/superadmin", component: Ha }),
            r.a.createElement(i.b, { path: "/magasin", component: en })
          );
        },
        sn =
          (a(568),
          a(569),
          a(570),
          a(571),
          a(572),
          a(573),
          a(574),
          new Date().getFullYear()),
        mn = function () {
          return r.a.createElement(
            "div",
            { className: "footer-copyright" },
            r.a.createElement(
              "div",
              null,
              "Tous Droits R\xe9serv\xe9s \xa9 2020 - ",
              sn,
              " | Ilias Al Fakir"
            ),
            r.a.createElement(
              "div",
              null,
              "d\xe9velopp\xe9 pour ",
              "Younes Belhouss"
            )
          );
        };
      var un = function () {
        return r.a.createElement(
          s.a,
          null,
          r.a.createElement(
            Ce,
            null,
            r.a.createElement(
              "div",
              { className: "app-container" },
              r.a.createElement(cn, null)
            ),
            r.a.createElement(mn, null)
          )
        );
      };
      Boolean(
        "localhost" === window.location.hostname ||
          "[::1]" === window.location.hostname ||
          window.location.hostname.match(
            /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
          )
      );
      c.a.render(r.a.createElement(un, null), document.getElementById("root")),
        "serviceWorker" in navigator &&
          navigator.serviceWorker.ready
            .then(function (e) {
              e.unregister();
            })
            .catch(function (e) {
              console.error(e.message);
            });
    },
  },
  [[184, 1, 2]],
]);
