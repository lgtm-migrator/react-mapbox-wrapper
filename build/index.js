module.exports = (function(n) {
    var t = {};
    function e(o) {
        if (t[o]) return t[o].exports;
        var r = (t[o] = { i: o, l: !1, exports: {} });
        return n[o].call(r.exports, r, r.exports, e), (r.l = !0), r.exports;
    }
    return (
        (e.m = n),
        (e.c = t),
        (e.d = function(n, t, o) {
            e.o(n, t) || Object.defineProperty(n, t, { enumerable: !0, get: o });
        }),
        (e.r = function(n) {
            'undefined' != typeof Symbol &&
                Symbol.toStringTag &&
                Object.defineProperty(n, Symbol.toStringTag, { value: 'Module' }),
                Object.defineProperty(n, '__esModule', { value: !0 });
        }),
        (e.t = function(n, t) {
            if ((1 & t && (n = e(n)), 8 & t)) return n;
            if (4 & t && 'object' == typeof n && n && n.__esModule) return n;
            var o = Object.create(null);
            if (
                (e.r(o),
                Object.defineProperty(o, 'default', { enumerable: !0, value: n }),
                2 & t && 'string' != typeof n)
            )
                for (var r in n)
                    e.d(
                        o,
                        r,
                        function(t) {
                            return n[t];
                        }.bind(null, r),
                    );
            return o;
        }),
        (e.n = function(n) {
            var t =
                n && n.__esModule
                    ? function() {
                          return n.default;
                      }
                    : function() {
                          return n;
                      };
            return e.d(t, 'a', t), t;
        }),
        (e.o = function(n, t) {
            return Object.prototype.hasOwnProperty.call(n, t);
        }),
        (e.p = ''),
        e((e.s = 15))
    );
})([
    function(n, t) {
        n.exports = require('prop-types');
    },
    function(n, t, e) {
        'use strict';
        (function(n) {
            function o(n) {
                return (o =
                    'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
                        ? function(n) {
                              return typeof n;
                          }
                        : function(n) {
                              return n &&
                                  'function' == typeof Symbol &&
                                  n.constructor === Symbol &&
                                  n !== Symbol.prototype
                                  ? 'symbol'
                                  : typeof n;
                          })(n);
            }
            function r(n, t) {
                if (n === t) return !0;
                if (o(n) !== o(t)) return !1;
                var e = o(n);
                if (e !== o(t)) return !1;
                if ((null === n && null !== t) || (null !== n && null === t)) return !1;
                if ('number' === e && Number.isNaN(n) && Number.isNaN(t)) return !0;
                if ('undefined' === e || 'string' === e || 'number' === e || 'boolean' === e)
                    return !1;
                if (n instanceof Date && t instanceof Date) return n.getTime() === t.getTime();
                if (Array.isArray(n)) {
                    if (n.length !== t.length) return !1;
                    for (var a = 0, i = n.length; a < i; a += 1) if (!r(n[a], t[a])) return !1;
                }
                var c = Object.keys(n).sort(),
                    l = Object.keys(t).sort();
                if (c.join(',') !== l.join(',')) return !1;
                for (var p = 0, s = c.length; p < s; p += 1) {
                    var u = c[p];
                    if (!r(n[u], t[u])) return !1;
                }
                return !0;
            }
            function a(n) {
                return n instanceof Function;
            }
            function i() {
                return !('[object process]' === Object.prototype.toString.call(n.process));
            }
            e.d(t, 'a', function() {
                return r;
            }),
                e.d(t, 'd', function() {
                    return a;
                }),
                e.d(t, 'c', function() {
                    return i;
                }),
                (t.b = { deepEqual: r, isFunction: a, isBrowser: i });
        }.call(this, e(6)));
    },
    function(n, t, e) {
        'use strict';
        (function(n) {
            e.d(t, 'a', function() {
                return p;
            }),
                e.d(t, 'b', function() {
                    return s;
                }),
                e.d(t, 'c', function() {
                    return b;
                }),
                e.d(t, 'f', function() {
                    return g;
                }),
                e.d(t, 'e', function() {
                    return h;
                }),
                e.d(t, 'g', function() {
                    return v;
                });
            var o = e(8),
                r = e.n(o),
                a = e(0),
                i = e.n(a),
                c = e(1),
                l = e(3),
                p = i.a.oneOfType([
                    i.a.shape({ lat: i.a.number.isRequired, lng: i.a.number.isRequired }),
                    i.a.shape({ lat: i.a.number.isRequired, lon: i.a.number.isRequired }),
                    i.a.arrayOf(i.a.number.isRequired),
                ]),
                s = ['kilometers', 'meters', 'miles', 'feet'];
            function u(t) {
                var e =
                        arguments.length > 1 && void 0 !== arguments[1]
                            ? arguments[1]
                            : 'kilometers',
                    o = Number(t),
                    r = e;
                return (
                    Number.isFinite(t) || n.console.error('The radius given is not a number'),
                    -1 === s.indexOf(e) &&
                        ((r = s[0]),
                        n.console.warn(
                            'The unit "'
                                .concat(e, '" is not supported, the fallback "')
                                .concat(r, '" is used'),
                        )),
                    'meters' === e
                        ? ((o = t / 1e3), (r = 'kilometers'))
                        : 'feet' === e && ((o = t / 5280), (r = 'miles')),
                    { radius: o, unit: r }
                );
            }
            function f(n) {
                return Array.isArray(n) && 2 === n.length
                    ? { lng: n[0], lat: n[1] }
                    : n instanceof Object && null !== n
                    ? { lng: n.lng || n.lon, lat: n.lat }
                    : {};
            }
            function b(n, t) {
                var e = f(n),
                    o = f(t);
                return e.lat === o.lat && e.lng === o.lng;
            }
            function m(n) {
                var t = f(n);
                return [t.lng, t.lat];
            }
            function g(n, t, e) {
                var o = u(t, e),
                    a = o.radius,
                    i = o.unit;
                return r()(m(n), a, { steps: 64, units: i });
            }
            function d(n) {
                return ''.concat(n, '_layer');
            }
            function h(n, t, e) {
                var o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
                    r = arguments.length > 4 ? arguments[4] : void 0,
                    a = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 'fill';
                if (t && n && e) {
                    var i = d(t),
                        l = n.getSource(t);
                    l
                        ? (l.setData(e),
                          Object.keys(o).forEach(function(t) {
                              return n.setPaintProperty(i, t, o[t]);
                          }))
                        : (n.addSource(t, { type: 'geojson', data: e }),
                          n.addLayer({ id: i, type: a, source: t, layout: {}, paint: o }),
                          Object(c.d)(r) &&
                              (n.on('click', i, r),
                              n.on('mouseenter', i, function() {
                                  n.getCanvas().style.cursor = 'pointer';
                              }),
                              n.on('mouseleave', i, function() {
                                  n.getCanvas().style.cursor = '';
                              })));
                }
            }
            function v(t, e) {
                if (e && t) {
                    var o = d(e);
                    try {
                        t.getLayer(o) && t.removeLayer(o);
                    } catch (t) {
                        n.console.warn(
                            'Error while removing GeoJSON layer with id '.concat(
                                o,
                                ". It's sometimes due to an already removed map",
                            ),
                            t,
                        );
                    }
                    try {
                        t.getSource(e) && t.removeSource(e);
                    } catch (t) {
                        n.console.warn(
                            'Error while removing GeoJSON soruce with id '.concat(
                                e,
                                ". It's sometimes due to an already removed map",
                            ),
                            t,
                        );
                    }
                }
            }
            t.d = {
                convertRadiusUnit: u,
                coordinatesAreEqual: b,
                drawGeoJSON: h,
                getCircleData: g,
                getLayerId: d,
                newBound: m,
                newBounds: function(n, t) {
                    return new l.a.LngLatBounds(n, t);
                },
                removeGeoJSON: v,
            };
        }.call(this, e(6)));
    },
    function(n, t, e) {
        'use strict';
        var o = e(1);
        t.a = Object(o.c)() ? e(10) : {};
    },
    function(n, t) {
        n.exports = require('react');
    },
    function(n, t, e) {
        'use strict';
        n.exports = function(n) {
            var t = [];
            return (
                (t.toString = function() {
                    return this.map(function(t) {
                        var e = (function(n, t) {
                            var e = n[1] || '',
                                o = n[3];
                            if (!o) return e;
                            if (t && 'function' == typeof btoa) {
                                var r =
                                        ((i = o),
                                        (c = btoa(unescape(encodeURIComponent(JSON.stringify(i))))),
                                        (l = 'sourceMappingURL=data:application/json;charset=utf-8;base64,'.concat(
                                            c,
                                        )),
                                        '/*# '.concat(l, ' */')),
                                    a = o.sources.map(function(n) {
                                        return '/*# sourceURL='
                                            .concat(o.sourceRoot || '')
                                            .concat(n, ' */');
                                    });
                                return [e]
                                    .concat(a)
                                    .concat([r])
                                    .join('\n');
                            }
                            var i, c, l;
                            return [e].join('\n');
                        })(t, n);
                        return t[2] ? '@media '.concat(t[2], ' {').concat(e, '}') : e;
                    }).join('');
                }),
                (t.i = function(n, e, o) {
                    'string' == typeof n && (n = [[null, n, '']]);
                    var r = {};
                    if (o)
                        for (var a = 0; a < this.length; a++) {
                            var i = this[a][0];
                            null != i && (r[i] = !0);
                        }
                    for (var c = 0; c < n.length; c++) {
                        var l = [].concat(n[c]);
                        (o && r[l[0]]) ||
                            (e && (l[2] ? (l[2] = ''.concat(e, ' and ').concat(l[2])) : (l[2] = e)),
                            t.push(l));
                    }
                }),
                t
            );
        };
    },
    function(n, t) {
        var e;
        e = (function() {
            return this;
        })();
        try {
            e = e || new Function('return this')();
        } catch (n) {
            'object' == typeof window && (e = window);
        }
        n.exports = e;
    },
    function(n, t, e) {
        'use strict';
        var o,
            r = function() {
                return (
                    void 0 === o &&
                        (o = Boolean(window && document && document.all && !window.atob)),
                    o
                );
            },
            a = (function() {
                var n = {};
                return function(t) {
                    if (void 0 === n[t]) {
                        var e = document.querySelector(t);
                        if (window.HTMLIFrameElement && e instanceof window.HTMLIFrameElement)
                            try {
                                e = e.contentDocument.head;
                            } catch (n) {
                                e = null;
                            }
                        n[t] = e;
                    }
                    return n[t];
                };
            })(),
            i = [];
        function c(n) {
            for (var t = -1, e = 0; e < i.length; e++)
                if (i[e].identifier === n) {
                    t = e;
                    break;
                }
            return t;
        }
        function l(n, t) {
            for (var e = {}, o = [], r = 0; r < n.length; r++) {
                var a = n[r],
                    l = t.base ? a[0] + t.base : a[0],
                    p = e[l] || 0,
                    s = ''.concat(l, ' ').concat(p);
                e[l] = p + 1;
                var u = c(s),
                    f = { css: a[1], media: a[2], sourceMap: a[3] };
                -1 !== u
                    ? (i[u].references++, i[u].updater(f))
                    : i.push({ identifier: s, updater: d(f, t), references: 1 }),
                    o.push(s);
            }
            return o;
        }
        function p(n) {
            var t = document.createElement('style'),
                o = n.attributes || {};
            if (void 0 === o.nonce) {
                var r = e.nc;
                r && (o.nonce = r);
            }
            if (
                (Object.keys(o).forEach(function(n) {
                    t.setAttribute(n, o[n]);
                }),
                'function' == typeof n.insert)
            )
                n.insert(t);
            else {
                var i = a(n.insert || 'head');
                if (!i)
                    throw new Error(
                        "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.",
                    );
                i.appendChild(t);
            }
            return t;
        }
        var s,
            u =
                ((s = []),
                function(n, t) {
                    return (s[n] = t), s.filter(Boolean).join('\n');
                });
        function f(n, t, e, o) {
            var r = e ? '' : o.media ? '@media '.concat(o.media, ' {').concat(o.css, '}') : o.css;
            if (n.styleSheet) n.styleSheet.cssText = u(t, r);
            else {
                var a = document.createTextNode(r),
                    i = n.childNodes;
                i[t] && n.removeChild(i[t]), i.length ? n.insertBefore(a, i[t]) : n.appendChild(a);
            }
        }
        function b(n, t, e) {
            var o = e.css,
                r = e.media,
                a = e.sourceMap;
            if (
                (r ? n.setAttribute('media', r) : n.removeAttribute('media'),
                a &&
                    btoa &&
                    (o += '\n/*# sourceMappingURL=data:application/json;base64,'.concat(
                        btoa(unescape(encodeURIComponent(JSON.stringify(a)))),
                        ' */',
                    )),
                n.styleSheet)
            )
                n.styleSheet.cssText = o;
            else {
                for (; n.firstChild; ) n.removeChild(n.firstChild);
                n.appendChild(document.createTextNode(o));
            }
        }
        var m = null,
            g = 0;
        function d(n, t) {
            var e, o, r;
            if (t.singleton) {
                var a = g++;
                (e = m || (m = p(t))), (o = f.bind(null, e, a, !1)), (r = f.bind(null, e, a, !0));
            } else
                (e = p(t)),
                    (o = b.bind(null, e, t)),
                    (r = function() {
                        !(function(n) {
                            if (null === n.parentNode) return !1;
                            n.parentNode.removeChild(n);
                        })(e);
                    });
            return (
                o(n),
                function(t) {
                    if (t) {
                        if (t.css === n.css && t.media === n.media && t.sourceMap === n.sourceMap)
                            return;
                        o((n = t));
                    } else r();
                }
            );
        }
        n.exports = function(n, t) {
            (t = t || {}).singleton || 'boolean' == typeof t.singleton || (t.singleton = r());
            var e = l((n = n || []), t);
            return function(n) {
                if (((n = n || []), '[object Array]' === Object.prototype.toString.call(n))) {
                    for (var o = 0; o < e.length; o++) {
                        var r = c(e[o]);
                        i[r].references--;
                    }
                    for (var a = l(n, t), p = 0; p < e.length; p++) {
                        var s = c(e[p]);
                        0 === i[s].references && (i[s].updater(), i.splice(s, 1));
                    }
                    e = a;
                }
            };
        };
    },
    function(n, t) {
        n.exports = require('@turf/circle');
    },
    function(n, t) {
        n.exports = require('react-dom');
    },
    function(n, t) {
        n.exports = require('mapbox-gl');
    },
    function(n, t, e) {
        var o = e(7),
            r = e(12);
        'string' == typeof (r = r.__esModule ? r.default : r) && (r = [[n.i, r, '']]);
        var a = { insert: 'head', singleton: !1 };
        o(r, a);
        n.exports = r.locals || {};
    },
    function(n, t, e) {
        'use strict';
        e.r(t);
        var o = e(5),
            r = e.n(o)()(!1);
        r.push([
            n.i,
            ".mapboxgl-map {\n    font: 12px/20px 'Helvetica Neue', Arial, Helvetica, sans-serif;\n    overflow: hidden;\n    position: relative;\n    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n}\n\n.mapboxgl-map:-webkit-full-screen {\n    width: 100%;\n    height: 100%;\n}\n\n.mapboxgl-canary {\n    background-color: salmon;\n}\n\n.mapboxgl-canvas-container.mapboxgl-interactive,\n.mapboxgl-ctrl-group > button.mapboxgl-ctrl-compass {\n    cursor: -webkit-grab;\n    cursor: -moz-grab;\n    cursor: grab;\n    -moz-user-select: none;\n    -webkit-user-select: none;\n    -ms-user-select: none;\n    user-select: none;\n}\n\n.mapboxgl-canvas-container.mapboxgl-interactive:active,\n.mapboxgl-ctrl-group > button.mapboxgl-ctrl-compass:active {\n    cursor: -webkit-grabbing;\n    cursor: -moz-grabbing;\n    cursor: grabbing;\n}\n\n.mapboxgl-canvas-container.mapboxgl-touch-zoom-rotate,\n.mapboxgl-canvas-container.mapboxgl-touch-zoom-rotate .mapboxgl-canvas {\n    touch-action: pan-x pan-y;\n}\n\n.mapboxgl-canvas-container.mapboxgl-touch-drag-pan,\n.mapboxgl-canvas-container.mapboxgl-touch-drag-pan .mapboxgl-canvas {\n    touch-action: pinch-zoom;\n}\n\n.mapboxgl-canvas-container.mapboxgl-touch-zoom-rotate.mapboxgl-touch-drag-pan,\n.mapboxgl-canvas-container.mapboxgl-touch-zoom-rotate.mapboxgl-touch-drag-pan .mapboxgl-canvas {\n    touch-action: none;\n}\n\n.mapboxgl-ctrl-top-left,\n.mapboxgl-ctrl-top-right,\n.mapboxgl-ctrl-bottom-left,\n.mapboxgl-ctrl-bottom-right { position: absolute; pointer-events: none; z-index: 2; }\n.mapboxgl-ctrl-top-left     { top: 0; left: 0; }\n.mapboxgl-ctrl-top-right    { top: 0; right: 0; }\n.mapboxgl-ctrl-bottom-left  { bottom: 0; left: 0; }\n.mapboxgl-ctrl-bottom-right { right: 0; bottom: 0; }\n\n.mapboxgl-ctrl { clear: both; pointer-events: auto; }\n.mapboxgl-ctrl-top-left .mapboxgl-ctrl     { margin: 10px 0 0 10px; float: left; }\n.mapboxgl-ctrl-top-right .mapboxgl-ctrl    { margin: 10px 10px 0 0; float: right; }\n.mapboxgl-ctrl-bottom-left .mapboxgl-ctrl  { margin: 0 0 10px 10px; float: left; }\n.mapboxgl-ctrl-bottom-right .mapboxgl-ctrl { margin: 0 10px 10px 0; float: right; }\n\n.mapboxgl-ctrl-group {\n    border-radius: 4px;\n    -moz-box-shadow: 0 0 2px rgba(0, 0, 0, 0.1);\n    -webkit-box-shadow: 0 0 2px rgba(0, 0, 0, 0.1);\n    box-shadow: 0 0 0 2px rgba(0, 0, 0, 0.1);\n    overflow: hidden;\n    background: #fff;\n}\n\n.mapboxgl-ctrl-group > button {\n    width: 30px;\n    height: 30px;\n    display: block;\n    padding: 0;\n    outline: none;\n    border: 0;\n    box-sizing: border-box;\n    background-color: transparent;\n    cursor: pointer;\n}\n\n.mapboxgl-ctrl-group > button + button {\n    border-top: 1px solid #ddd;\n}\n\n/* https://bugzilla.mozilla.org/show_bug.cgi?id=140562 */\n.mapboxgl-ctrl > button::-moz-focus-inner {\n    border: 0;\n    padding: 0;\n}\n\n.mapboxgl-ctrl > button:hover {\n    background-color: rgba(0, 0, 0, 0.05);\n}\n\n.mapboxgl-ctrl-icon,\n.mapboxgl-ctrl-icon > .mapboxgl-ctrl-compass-arrow {\n    speak: none;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n}\n\n.mapboxgl-ctrl-icon {\n    padding: 5px;\n}\n\n.mapboxgl-ctrl-icon.mapboxgl-ctrl-zoom-out {\n    background-image: url(\"data:image/svg+xml;charset=utf-8,%3Csvg viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E %3Cpath style='fill:%23333333;' d='m 7,9 c -0.554,0 -1,0.446 -1,1 0,0.554 0.446,1 1,1 l 6,0 c 0.554,0 1,-0.446 1,-1 0,-0.554 -0.446,-1 -1,-1 z'/%3E %3C/svg%3E\");\n}\n\n.mapboxgl-ctrl-icon.mapboxgl-ctrl-zoom-in {\n    background-image: url(\"data:image/svg+xml;charset=utf-8,%3Csvg viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E %3Cpath style='fill:%23333333;' d='M 10 6 C 9.446 6 9 6.4459904 9 7 L 9 9 L 7 9 C 6.446 9 6 9.446 6 10 C 6 10.554 6.446 11 7 11 L 9 11 L 9 13 C 9 13.55401 9.446 14 10 14 C 10.554 14 11 13.55401 11 13 L 11 11 L 13 11 C 13.554 11 14 10.554 14 10 C 14 9.446 13.554 9 13 9 L 11 9 L 11 7 C 11 6.4459904 10.554 6 10 6 z'/%3E %3C/svg%3E\");\n}\n\n.mapboxgl-ctrl-icon.mapboxgl-ctrl-geolocate {\n    background-image: url(\"data:image/svg+xml;charset=utf-8,%3Csvg viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg' fill='%23333'%3E %3Cpath d='M10 4C9 4 9 5 9 5L9 5.1A5 5 0 0 0 5.1 9L5 9C5 9 4 9 4 10 4 11 5 11 5 11L5.1 11A5 5 0 0 0 9 14.9L9 15C9 15 9 16 10 16 11 16 11 15 11 15L11 14.9A5 5 0 0 0 14.9 11L15 11C15 11 16 11 16 10 16 9 15 9 15 9L14.9 9A5 5 0 0 0 11 5.1L11 5C11 5 11 4 10 4zM10 6.5A3.5 3.5 0 0 1 13.5 10 3.5 3.5 0 0 1 10 13.5 3.5 3.5 0 0 1 6.5 10 3.5 3.5 0 0 1 10 6.5zM10 8.3A1.8 1.8 0 0 0 8.3 10 1.8 1.8 0 0 0 10 11.8 1.8 1.8 0 0 0 11.8 10 1.8 1.8 0 0 0 10 8.3z'/%3E %3C/svg%3E\");\n}\n\n.mapboxgl-ctrl-icon.mapboxgl-ctrl-geolocate:disabled {\n    background-image: url(\"data:image/svg+xml;charset=utf-8,%3Csvg viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg' fill='%23aaa'%3E %3Cpath d='M10 4C9 4 9 5 9 5L9 5.1A5 5 0 0 0 5.1 9L5 9C5 9 4 9 4 10 4 11 5 11 5 11L5.1 11A5 5 0 0 0 9 14.9L9 15C9 15 9 16 10 16 11 16 11 15 11 15L11 14.9A5 5 0 0 0 14.9 11L15 11C15 11 16 11 16 10 16 9 15 9 15 9L14.9 9A5 5 0 0 0 11 5.1L11 5C11 5 11 4 10 4zM10 6.5A3.5 3.5 0 0 1 13.5 10 3.5 3.5 0 0 1 10 13.5 3.5 3.5 0 0 1 6.5 10 3.5 3.5 0 0 1 10 6.5zM10 8.3A1.8 1.8 0 0 0 8.3 10 1.8 1.8 0 0 0 10 11.8 1.8 1.8 0 0 0 11.8 10 1.8 1.8 0 0 0 10 8.3z'/%3E %3C/svg%3E\");\n}\n\n.mapboxgl-ctrl-icon.mapboxgl-ctrl-geolocate.mapboxgl-ctrl-geolocate-active {\n    background-image: url(\"data:image/svg+xml;charset=utf-8,%3Csvg viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg' fill='%2333b5e5'%3E %3Cpath d='M10 4C9 4 9 5 9 5L9 5.1A5 5 0 0 0 5.1 9L5 9C5 9 4 9 4 10 4 11 5 11 5 11L5.1 11A5 5 0 0 0 9 14.9L9 15C9 15 9 16 10 16 11 16 11 15 11 15L11 14.9A5 5 0 0 0 14.9 11L15 11C15 11 16 11 16 10 16 9 15 9 15 9L14.9 9A5 5 0 0 0 11 5.1L11 5C11 5 11 4 10 4zM10 6.5A3.5 3.5 0 0 1 13.5 10 3.5 3.5 0 0 1 10 13.5 3.5 3.5 0 0 1 6.5 10 3.5 3.5 0 0 1 10 6.5zM10 8.3A1.8 1.8 0 0 0 8.3 10 1.8 1.8 0 0 0 10 11.8 1.8 1.8 0 0 0 11.8 10 1.8 1.8 0 0 0 10 8.3z'/%3E %3C/svg%3E\");\n}\n\n.mapboxgl-ctrl-icon.mapboxgl-ctrl-geolocate.mapboxgl-ctrl-geolocate-active-error {\n    background-image: url(\"data:image/svg+xml;charset=utf-8,%3Csvg viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg' fill='%23e58978'%3E %3Cpath d='M10 4C9 4 9 5 9 5L9 5.1A5 5 0 0 0 5.1 9L5 9C5 9 4 9 4 10 4 11 5 11 5 11L5.1 11A5 5 0 0 0 9 14.9L9 15C9 15 9 16 10 16 11 16 11 15 11 15L11 14.9A5 5 0 0 0 14.9 11L15 11C15 11 16 11 16 10 16 9 15 9 15 9L14.9 9A5 5 0 0 0 11 5.1L11 5C11 5 11 4 10 4zM10 6.5A3.5 3.5 0 0 1 13.5 10 3.5 3.5 0 0 1 10 13.5 3.5 3.5 0 0 1 6.5 10 3.5 3.5 0 0 1 10 6.5zM10 8.3A1.8 1.8 0 0 0 8.3 10 1.8 1.8 0 0 0 10 11.8 1.8 1.8 0 0 0 11.8 10 1.8 1.8 0 0 0 10 8.3z'/%3E %3C/svg%3E\");\n}\n\n.mapboxgl-ctrl-icon.mapboxgl-ctrl-geolocate.mapboxgl-ctrl-geolocate-background {\n    background-image: url(\"data:image/svg+xml;charset=utf-8,%3Csvg viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg' fill='%2333b5e5'%3E %3Cpath d='M 10,4 C 9,4 9,5 9,5 L 9,5.1 C 7.0357113,5.5006048 5.5006048,7.0357113 5.1,9 L 5,9 c 0,0 -1,0 -1,1 0,1 1,1 1,1 l 0.1,0 c 0.4006048,1.964289 1.9357113,3.499395 3.9,3.9 L 9,15 c 0,0 0,1 1,1 1,0 1,-1 1,-1 l 0,-0.1 c 1.964289,-0.400605 3.499395,-1.935711 3.9,-3.9 l 0.1,0 c 0,0 1,0 1,-1 C 16,9 15,9 15,9 L 14.9,9 C 14.499395,7.0357113 12.964289,5.5006048 11,5.1 L 11,5 c 0,0 0,-1 -1,-1 z m 0,2.5 c 1.932997,0 3.5,1.5670034 3.5,3.5 0,1.932997 -1.567003,3.5 -3.5,3.5 C 8.0670034,13.5 6.5,11.932997 6.5,10 6.5,8.0670034 8.0670034,6.5 10,6.5 Z'/%3E %3C/svg%3E\");\n}\n\n.mapboxgl-ctrl-icon.mapboxgl-ctrl-geolocate.mapboxgl-ctrl-geolocate-background-error {\n    background-image: url(\"data:image/svg+xml;charset=utf-8,%3Csvg viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg' fill='%23e54e33'%3E %3Cpath d='M 10,4 C 9,4 9,5 9,5 L 9,5.1 C 7.0357113,5.5006048 5.5006048,7.0357113 5.1,9 L 5,9 c 0,0 -1,0 -1,1 0,1 1,1 1,1 l 0.1,0 c 0.4006048,1.964289 1.9357113,3.499395 3.9,3.9 L 9,15 c 0,0 0,1 1,1 1,0 1,-1 1,-1 l 0,-0.1 c 1.964289,-0.400605 3.499395,-1.935711 3.9,-3.9 l 0.1,0 c 0,0 1,0 1,-1 C 16,9 15,9 15,9 L 14.9,9 C 14.499395,7.0357113 12.964289,5.5006048 11,5.1 L 11,5 c 0,0 0,-1 -1,-1 z m 0,2.5 c 1.932997,0 3.5,1.5670034 3.5,3.5 0,1.932997 -1.567003,3.5 -3.5,3.5 C 8.0670034,13.5 6.5,11.932997 6.5,10 6.5,8.0670034 8.0670034,6.5 10,6.5 Z'/%3E %3C/svg%3E\");\n}\n\n.mapboxgl-ctrl-icon.mapboxgl-ctrl-geolocate.mapboxgl-ctrl-geolocate-waiting {\n    -webkit-animation: mapboxgl-spin 2s infinite linear;\n    -moz-animation: mapboxgl-spin 2s infinite linear;\n    -o-animation: mapboxgl-spin 2s infinite linear;\n    -ms-animation: mapboxgl-spin 2s infinite linear;\n    animation: mapboxgl-spin 2s infinite linear;\n}\n\n@-webkit-keyframes mapboxgl-spin {\n    0% { -webkit-transform: rotate(0deg); }\n    100% { -webkit-transform: rotate(360deg); }\n}\n\n@-moz-keyframes mapboxgl-spin {\n    0% { -moz-transform: rotate(0deg); }\n    100% { -moz-transform: rotate(360deg); }\n}\n\n@-o-keyframes mapboxgl-spin {\n    0% { -o-transform: rotate(0deg); }\n    100% { -o-transform: rotate(360deg); }\n}\n\n@-ms-keyframes mapboxgl-spin {\n    0% { -ms-transform: rotate(0deg); }\n    100% { -ms-transform: rotate(360deg); }\n}\n\n@keyframes mapboxgl-spin {\n    0% { transform: rotate(0deg); }\n    100% { transform: rotate(360deg); }\n}\n\n.mapboxgl-ctrl-icon.mapboxgl-ctrl-fullscreen {\n    background-image: url(\"data:image/svg+xml;charset=utf-8,%3Csvg viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E %3Cpath d='M 5 4 C 4.5 4 4 4.5 4 5 L 4 6 L 4 9 L 4.5 9 L 5.7773438 7.296875 C 6.7771319 8.0602131 7.835765 8.9565728 8.890625 10 C 7.8257121 11.0633 6.7761791 11.951675 5.78125 12.707031 L 4.5 11 L 4 11 L 4 15 C 4 15.5 4.5 16 5 16 L 9 16 L 9 15.5 L 7.2734375 14.205078 C 8.0428931 13.187886 8.9395441 12.133481 9.9609375 11.068359 C 11.042371 12.14699 11.942093 13.2112 12.707031 14.21875 L 11 15.5 L 11 16 L 14 16 L 15 16 C 15.5 16 16 15.5 16 15 L 16 14 L 16 11 L 15.5 11 L 14.205078 12.726562 C 13.177985 11.949617 12.112718 11.043577 11.037109 10.009766 C 12.151856 8.981061 13.224345 8.0798624 14.228516 7.3046875 L 15.5 9 L 16 9 L 16 5 C 16 4.5 15.5 4 15 4 L 11 4 L 11 4.5 L 12.703125 5.7773438 C 11.932647 6.7864834 11.026693 7.8554712 9.9707031 8.9199219 C 8.9584739 7.8204943 8.0698767 6.7627188 7.3046875 5.7714844 L 9 4.5 L 9 4 L 6 4 L 5 4 z '/%3E %3C/svg%3E\");\n}\n\n.mapboxgl-ctrl-icon.mapboxgl-ctrl-shrink {\n    background-image: url(\"data:image/svg+xml;charset=utf-8,%3Csvg viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E %3Cpath style='fill:%23000000;' d='M 4.2421875 3.4921875 A 0.750075 0.750075 0 0 0 3.71875 4.78125 L 5.9648438 7.0273438 L 4 8.5 L 4 9 L 8 9 C 8.500001 8.9999988 9 8.4999992 9 8 L 9 4 L 8.5 4 L 7.0175781 5.9550781 L 4.78125 3.71875 A 0.750075 0.750075 0 0 0 4.2421875 3.4921875 z M 15.734375 3.4921875 A 0.750075 0.750075 0 0 0 15.21875 3.71875 L 12.984375 5.953125 L 11.5 4 L 11 4 L 11 8 C 11 8.4999992 11.499999 8.9999988 12 9 L 16 9 L 16 8.5 L 14.035156 7.0273438 L 16.28125 4.78125 A 0.750075 0.750075 0 0 0 15.734375 3.4921875 z M 4 11 L 4 11.5 L 5.9648438 12.972656 L 3.71875 15.21875 A 0.75130096 0.75130096 0 1 0 4.78125 16.28125 L 7.0273438 14.035156 L 8.5 16 L 9 16 L 9 12 C 9 11.500001 8.500001 11.000001 8 11 L 4 11 z M 12 11 C 11.499999 11.000001 11 11.500001 11 12 L 11 16 L 11.5 16 L 12.972656 14.035156 L 15.21875 16.28125 A 0.75130096 0.75130096 0 1 0 16.28125 15.21875 L 14.035156 12.972656 L 16 11.5 L 16 11 L 12 11 z '/%3E %3C/svg%3E\");\n}\n\n.mapboxgl-ctrl-icon.mapboxgl-ctrl-compass > .mapboxgl-ctrl-compass-arrow {\n    width: 20px;\n    height: 20px;\n    margin: 5px;\n    background-image: url(\"data:image/svg+xml;charset=utf-8,%3Csvg viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E %3Cpolygon fill='%23333333' points='6,9 10,1 14,9'/%3E %3Cpolygon fill='%23CCCCCC' points='6,11 10,19 14,11 '/%3E %3C/svg%3E\");\n    background-repeat: no-repeat;\n    display: inline-block;\n}\n\na.mapboxgl-ctrl-logo {\n    width: 85px;\n    height: 21px;\n    margin: 0 0 -3px -3px;\n    display: block;\n    background-repeat: no-repeat;\n    cursor: pointer;\n    background-image: url(\"data:image/svg+xml;charset=utf-8,%3C?xml version='1.0' encoding='utf-8'?%3E%3Csvg version='1.1' id='Layer_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 84.49 21' style='enable-background:new 0 0 84.49 21;' xml:space='preserve'%3E%3Cg%3E %3Cpath class='st0' style='opacity:0.9; fill: %23FFFFFF; enable-background: new;' d='M83.25,14.26c0,0.12-0.09,0.21-0.21,0.21h-1.61c-0.13,0-0.24-0.06-0.3-0.17l-1.44-2.39l-1.44,2.39 c-0.06,0.11-0.18,0.17-0.3,0.17h-1.61c-0.04,0-0.08-0.01-0.12-0.03c-0.09-0.06-0.13-0.19-0.06-0.28l0,0l2.43-3.68L76.2,6.84 c-0.02-0.03-0.03-0.07-0.03-0.12c0-0.12,0.09-0.21,0.21-0.21h1.61c0.13,0,0.24,0.06,0.3,0.17l1.41,2.36l1.4-2.35 c0.06-0.11,0.18-0.17,0.3-0.17H83c0.04,0,0.08,0.01,0.12,0.03c0.09,0.06,0.13,0.19,0.06,0.28l0,0l-2.37,3.63l2.43,3.67 C83.24,14.18,83.25,14.22,83.25,14.26z'/%3E %3Cpath class='st0' style='opacity:0.9; fill: %23FFFFFF; enable-background: new;' d='M66.24,9.59c-0.39-1.88-1.96-3.28-3.84-3.28c-1.03,0-2.03,0.42-2.73,1.18V3.51c0-0.13-0.1-0.23-0.23-0.23h-1.4 c-0.13,0-0.23,0.11-0.23,0.23v10.72c0,0.13,0.1,0.23,0.23,0.23h1.4c0.13,0,0.23-0.11,0.23-0.23V13.5c0.71,0.75,1.7,1.18,2.73,1.18 c1.88,0,3.45-1.41,3.84-3.29C66.37,10.79,66.37,10.18,66.24,9.59L66.24,9.59z M62.08,13c-1.32,0-2.39-1.11-2.41-2.48v-0.06 c0.02-1.38,1.09-2.48,2.41-2.48s2.42,1.12,2.42,2.51S63.41,13,62.08,13z'/%3E %3Cpath class='st0' style='opacity:0.9; fill: %23FFFFFF; enable-background: new;' d='M71.67,6.32c-1.98-0.01-3.72,1.35-4.16,3.29c-0.13,0.59-0.13,1.19,0,1.77c0.44,1.94,2.17,3.32,4.17,3.3 c2.35,0,4.26-1.87,4.26-4.19S74.04,6.32,71.67,6.32z M71.65,13.01c-1.33,0-2.42-1.12-2.42-2.51s1.08-2.52,2.42-2.52 c1.33,0,2.42,1.12,2.42,2.51S72.99,13,71.65,13.01L71.65,13.01z'/%3E %3Cpath class='st1' style='opacity:0.35; enable-background:new;' d='M62.08,7.98c-1.32,0-2.39,1.11-2.41,2.48v0.06C59.68,11.9,60.75,13,62.08,13s2.42-1.12,2.42-2.51 S63.41,7.98,62.08,7.98z M62.08,11.76c-0.63,0-1.14-0.56-1.17-1.25v-0.04c0.01-0.69,0.54-1.25,1.17-1.25 c0.63,0,1.17,0.57,1.17,1.27C63.24,11.2,62.73,11.76,62.08,11.76z'/%3E %3Cpath class='st1' style='opacity:0.35; enable-background:new;' d='M71.65,7.98c-1.33,0-2.42,1.12-2.42,2.51S70.32,13,71.65,13s2.42-1.12,2.42-2.51S72.99,7.98,71.65,7.98z M71.65,11.76c-0.64,0-1.17-0.57-1.17-1.27c0-0.7,0.53-1.26,1.17-1.26s1.17,0.57,1.17,1.27C72.82,11.21,72.29,11.76,71.65,11.76z'/%3E %3Cpath class='st0' style='opacity:0.9; fill: %23FFFFFF; enable-background: new;' d='M45.74,6.53h-1.4c-0.13,0-0.23,0.11-0.23,0.23v0.73c-0.71-0.75-1.7-1.18-2.73-1.18 c-2.17,0-3.94,1.87-3.94,4.19s1.77,4.19,3.94,4.19c1.04,0,2.03-0.43,2.73-1.19v0.73c0,0.13,0.1,0.23,0.23,0.23h1.4 c0.13,0,0.23-0.11,0.23-0.23V6.74c0-0.12-0.09-0.22-0.22-0.22C45.75,6.53,45.75,6.53,45.74,6.53z M44.12,10.53 C44.11,11.9,43.03,13,41.71,13s-2.42-1.12-2.42-2.51s1.08-2.52,2.4-2.52c1.33,0,2.39,1.11,2.41,2.48L44.12,10.53z'/%3E %3Cpath class='st1' style='opacity:0.35; enable-background:new;' d='M41.71,7.98c-1.33,0-2.42,1.12-2.42,2.51S40.37,13,41.71,13s2.39-1.11,2.41-2.48v-0.06 C44.1,9.09,43.03,7.98,41.71,7.98z M40.55,10.49c0-0.7,0.52-1.27,1.17-1.27c0.64,0,1.14,0.56,1.17,1.25v0.04 c-0.01,0.68-0.53,1.24-1.17,1.24C41.08,11.75,40.55,11.19,40.55,10.49z'/%3E %3Cpath class='st0' style='opacity:0.9; fill: %23FFFFFF; enable-background: new;' d='M52.41,6.32c-1.03,0-2.03,0.42-2.73,1.18V6.75c0-0.13-0.1-0.23-0.23-0.23h-1.4c-0.13,0-0.23,0.11-0.23,0.23 v10.72c0,0.13,0.1,0.23,0.23,0.23h1.4c0.13,0,0.23-0.1,0.23-0.23V13.5c0.71,0.75,1.7,1.18,2.74,1.18c2.17,0,3.94-1.87,3.94-4.19 S54.58,6.32,52.41,6.32z M52.08,13.01c-1.32,0-2.39-1.11-2.42-2.48v-0.07c0.02-1.38,1.09-2.49,2.4-2.49c1.32,0,2.41,1.12,2.41,2.51 S53.4,13,52.08,13.01L52.08,13.01z'/%3E %3Cpath class='st1' style='opacity:0.35; enable-background:new;' d='M52.08,7.98c-1.32,0-2.39,1.11-2.42,2.48v0.06c0.03,1.38,1.1,2.48,2.42,2.48s2.41-1.12,2.41-2.51 S53.4,7.98,52.08,7.98z M52.08,11.76c-0.63,0-1.14-0.56-1.17-1.25v-0.04c0.01-0.69,0.54-1.25,1.17-1.25c0.63,0,1.17,0.58,1.17,1.27 S52.72,11.76,52.08,11.76z'/%3E %3Cpath class='st0' style='opacity:0.9; fill: %23FFFFFF; enable-background: new;' d='M36.08,14.24c0,0.13-0.1,0.23-0.23,0.23h-1.41c-0.13,0-0.23-0.11-0.23-0.23V9.68c0-0.98-0.74-1.71-1.62-1.71 c-0.8,0-1.46,0.7-1.59,1.62l0.01,4.66c0,0.13-0.11,0.23-0.23,0.23h-1.41c-0.13,0-0.23-0.11-0.23-0.23V9.68 c0-0.98-0.74-1.71-1.62-1.71c-0.85,0-1.54,0.79-1.6,1.8v4.48c0,0.13-0.1,0.23-0.23,0.23h-1.4c-0.13,0-0.23-0.11-0.23-0.23V6.74 c0.01-0.13,0.1-0.22,0.23-0.22h1.4c0.13,0,0.22,0.11,0.23,0.22V7.4c0.5-0.68,1.3-1.09,2.16-1.1h0.03c1.09,0,2.09,0.6,2.6,1.55 c0.45-0.95,1.4-1.55,2.44-1.56c1.62,0,2.93,1.25,2.9,2.78L36.08,14.24z'/%3E %3Cpath class='st1' style='opacity:0.35; enable-background:new;' d='M84.34,13.59l-0.07-0.13l-1.96-2.99l1.94-2.95c0.44-0.67,0.26-1.56-0.41-2.02c-0.02,0-0.03,0-0.04-0.01 c-0.23-0.15-0.5-0.22-0.78-0.22h-1.61c-0.56,0-1.08,0.29-1.37,0.78L79.72,6.6l-0.34-0.56C79.09,5.56,78.57,5.27,78,5.27h-1.6 c-0.6,0-1.13,0.37-1.35,0.92c-2.19-1.66-5.28-1.47-7.26,0.45c-0.35,0.34-0.65,0.72-0.89,1.14c-0.9-1.62-2.58-2.72-4.5-2.72 c-0.5,0-1.01,0.07-1.48,0.23V3.51c0-0.82-0.66-1.48-1.47-1.48h-1.4c-0.81,0-1.47,0.66-1.47,1.47v3.75 c-0.95-1.36-2.5-2.18-4.17-2.19c-0.74,0-1.46,0.16-2.12,0.47c-0.24-0.17-0.54-0.26-0.84-0.26h-1.4c-0.45,0-0.87,0.21-1.15,0.56 c-0.02-0.03-0.04-0.05-0.07-0.08c-0.28-0.3-0.68-0.47-1.09-0.47h-1.39c-0.3,0-0.6,0.09-0.84,0.26c-0.67-0.3-1.39-0.46-2.12-0.46 c-1.83,0-3.43,1-4.37,2.5c-0.2-0.46-0.48-0.89-0.83-1.25c-0.8-0.81-1.89-1.25-3.02-1.25h-0.01c-0.89,0.01-1.75,0.33-2.46,0.88 c-0.74-0.57-1.64-0.88-2.57-0.88H28.1c-0.29,0-0.58,0.03-0.86,0.11c-0.28,0.06-0.56,0.16-0.82,0.28c-0.21-0.12-0.45-0.18-0.7-0.18 h-1.4c-0.82,0-1.47,0.66-1.47,1.47v7.5c0,0.82,0.66,1.47,1.47,1.47h1.4c0.82,0,1.48-0.66,1.48-1.48l0,0V9.79 c0.03-0.36,0.23-0.59,0.36-0.59c0.18,0,0.38,0.18,0.38,0.47v4.57c0,0.82,0.66,1.47,1.47,1.47h1.41c0.82,0,1.47-0.66,1.47-1.47 l-0.01-4.57c0.06-0.32,0.25-0.47,0.35-0.47c0.18,0,0.38,0.18,0.38,0.47v4.57c0,0.82,0.66,1.47,1.47,1.47h1.41 c0.82,0,1.47-0.66,1.47-1.47v-0.38c0.96,1.29,2.46,2.06,4.06,2.06c0.74,0,1.46-0.16,2.12-0.47c0.24,0.17,0.54,0.26,0.84,0.26h1.39 c0.3,0,0.6-0.09,0.84-0.26v2.01c0,0.82,0.66,1.47,1.47,1.47h1.4c0.82,0,1.47-0.66,1.47-1.47v-1.77c0.48,0.15,0.99,0.23,1.49,0.22 c1.7,0,3.22-0.87,4.17-2.2v0.52c0,0.82,0.66,1.47,1.47,1.47h1.4c0.3,0,0.6-0.09,0.84-0.26c0.66,0.31,1.39,0.47,2.12,0.47 c1.92,0,3.6-1.1,4.49-2.73c1.54,2.65,4.95,3.53,7.58,1.98c0.18-0.11,0.36-0.22,0.53-0.36c0.22,0.55,0.76,0.91,1.35,0.9H78 c0.56,0,1.08-0.29,1.37-0.78l0.37-0.61l0.37,0.61c0.29,0.48,0.81,0.78,1.38,0.78h1.6c0.81,0,1.46-0.66,1.45-1.46 C84.49,14.02,84.44,13.8,84.34,13.59L84.34,13.59z M35.86,14.47h-1.41c-0.13,0-0.23-0.11-0.23-0.23V9.68 c0-0.98-0.74-1.71-1.62-1.71c-0.8,0-1.46,0.7-1.59,1.62l0.01,4.66c0,0.13-0.1,0.23-0.23,0.23h-1.41c-0.13,0-0.23-0.11-0.23-0.23 V9.68c0-0.98-0.74-1.71-1.62-1.71c-0.85,0-1.54,0.79-1.6,1.8v4.48c0,0.13-0.1,0.23-0.23,0.23h-1.4c-0.13,0-0.23-0.11-0.23-0.23 V6.74c0.01-0.13,0.11-0.22,0.23-0.22h1.4c0.13,0,0.22,0.11,0.23,0.22V7.4c0.5-0.68,1.3-1.09,2.16-1.1h0.03 c1.09,0,2.09,0.6,2.6,1.55c0.45-0.95,1.4-1.55,2.44-1.56c1.62,0,2.93,1.25,2.9,2.78l0.01,5.16C36.09,14.36,35.98,14.46,35.86,14.47 L35.86,14.47z M45.97,14.24c0,0.13-0.1,0.23-0.23,0.23h-1.4c-0.13,0-0.23-0.11-0.23-0.23V13.5c-0.7,0.76-1.69,1.18-2.72,1.18 c-2.17,0-3.94-1.87-3.94-4.19s1.77-4.19,3.94-4.19c1.03,0,2.02,0.43,2.73,1.18V6.74c0-0.13,0.1-0.23,0.23-0.23h1.4 c0.12-0.01,0.22,0.08,0.23,0.21c0,0.01,0,0.01,0,0.02v7.51h-0.01V14.24z M52.41,14.67c-1.03,0-2.02-0.43-2.73-1.18v3.97 c0,0.13-0.1,0.23-0.23,0.23h-1.4c-0.13,0-0.23-0.1-0.23-0.23V6.75c0-0.13,0.1-0.22,0.23-0.22h1.4c0.13,0,0.23,0.11,0.23,0.23v0.73 c0.71-0.76,1.7-1.18,2.73-1.18c2.17,0,3.94,1.86,3.94,4.18S54.58,14.67,52.41,14.67z M66.24,11.39c-0.39,1.87-1.96,3.29-3.84,3.29 c-1.03,0-2.02-0.43-2.73-1.18v0.73c0,0.13-0.1,0.23-0.23,0.23h-1.4c-0.13,0-0.23-0.11-0.23-0.23V3.51c0-0.13,0.1-0.23,0.23-0.23 h1.4c0.13,0,0.23,0.11,0.23,0.23v3.97c0.71-0.75,1.7-1.18,2.73-1.17c1.88,0,3.45,1.4,3.84,3.28C66.37,10.19,66.37,10.8,66.24,11.39 L66.24,11.39L66.24,11.39z M71.67,14.68c-2,0.01-3.73-1.35-4.17-3.3c-0.13-0.59-0.13-1.19,0-1.77c0.44-1.94,2.17-3.31,4.17-3.3 c2.36,0,4.26,1.87,4.26,4.19S74.03,14.68,71.67,14.68L71.67,14.68z M83.04,14.47h-1.61c-0.13,0-0.24-0.06-0.3-0.17l-1.44-2.39 l-1.44,2.39c-0.06,0.11-0.18,0.17-0.3,0.17h-1.61c-0.04,0-0.08-0.01-0.12-0.03c-0.09-0.06-0.13-0.19-0.06-0.28l0,0l2.43-3.68 L76.2,6.84c-0.02-0.03-0.03-0.07-0.03-0.12c0-0.12,0.09-0.21,0.21-0.21h1.61c0.13,0,0.24,0.06,0.3,0.17l1.41,2.36l1.41-2.36 c0.06-0.11,0.18-0.17,0.3-0.17h1.61c0.04,0,0.08,0.01,0.12,0.03c0.09,0.06,0.13,0.19,0.06,0.28l0,0l-2.38,3.64l2.43,3.67 c0.02,0.03,0.03,0.07,0.03,0.12C83.25,14.38,83.16,14.47,83.04,14.47L83.04,14.47L83.04,14.47z'/%3E %3Cpath class='st0' style='opacity:0.9; fill: %23FFFFFF; enable-background: new;' d='M10.5,1.24c-5.11,0-9.25,4.15-9.25,9.25s4.15,9.25,9.25,9.25s9.25-4.15,9.25-9.25 C19.75,5.38,15.61,1.24,10.5,1.24z M14.89,12.77c-1.93,1.93-4.78,2.31-6.7,2.31c-0.7,0-1.41-0.05-2.1-0.16c0,0-1.02-5.64,2.14-8.81 c0.83-0.83,1.95-1.28,3.13-1.28c1.27,0,2.49,0.51,3.39,1.42C16.59,8.09,16.64,11,14.89,12.77z'/%3E %3Cpath class='st1' style='opacity:0.35; enable-background:new;' d='M10.5-0.01C4.7-0.01,0,4.7,0,10.49s4.7,10.5,10.5,10.5S21,16.29,21,10.49C20.99,4.7,16.3-0.01,10.5-0.01z M10.5,19.74c-5.11,0-9.25-4.15-9.25-9.25s4.14-9.26,9.25-9.26s9.25,4.15,9.25,9.25C19.75,15.61,15.61,19.74,10.5,19.74z'/%3E %3Cpath class='st1' style='opacity:0.35; enable-background:new;' d='M14.74,6.25C12.9,4.41,9.98,4.35,8.23,6.1c-3.16,3.17-2.14,8.81-2.14,8.81s5.64,1.02,8.81-2.14 C16.64,11,16.59,8.09,14.74,6.25z M12.47,10.34l-0.91,1.87l-0.9-1.87L8.8,9.43l1.86-0.9l0.9-1.87l0.91,1.87l1.86,0.9L12.47,10.34z'/%3E %3Cpolygon class='st0' style='opacity:0.9; fill: %23FFFFFF; enable-background: new;' points='14.33,9.43 12.47,10.34 11.56,12.21 10.66,10.34 8.8,9.43 10.66,8.53 11.56,6.66 12.47,8.53 '/%3E%3C/g%3E%3C/svg%3E\");\n}\n\na.mapboxgl-ctrl-logo.mapboxgl-compact {\n    width: 21px;\n    height: 21px;\n    background-image: url(\"data:image/svg+xml;charset=utf-8,%3C?xml version='1.0' encoding='utf-8'?%3E %3Csvg version='1.1' id='Layer_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 21 21' style='enable-background:new 0 0 21 21;' xml:space='preserve'%3E%3Cg transform='translate(0,0.01)'%3E%3Cpath d='m 10.5,1.24 c -5.11,0 -9.25,4.15 -9.25,9.25 0,5.1 4.15,9.25 9.25,9.25 5.1,0 9.25,-4.15 9.25,-9.25 0,-5.11 -4.14,-9.25 -9.25,-9.25 z m 4.39,11.53 c -1.93,1.93 -4.78,2.31 -6.7,2.31 -0.7,0 -1.41,-0.05 -2.1,-0.16 0,0 -1.02,-5.64 2.14,-8.81 0.83,-0.83 1.95,-1.28 3.13,-1.28 1.27,0 2.49,0.51 3.39,1.42 1.84,1.84 1.89,4.75 0.14,6.52 z' style='opacity:0.9;fill:%23ffffff;enable-background:new' class='st0'/%3E%3Cpath d='M 10.5,-0.01 C 4.7,-0.01 0,4.7 0,10.49 c 0,5.79 4.7,10.5 10.5,10.5 5.8,0 10.5,-4.7 10.5,-10.5 C 20.99,4.7 16.3,-0.01 10.5,-0.01 Z m 0,19.75 c -5.11,0 -9.25,-4.15 -9.25,-9.25 0,-5.1 4.14,-9.26 9.25,-9.26 5.11,0 9.25,4.15 9.25,9.25 0,5.13 -4.14,9.26 -9.25,9.26 z' style='opacity:0.35;enable-background:new' class='st1'/%3E%3Cpath d='M 14.74,6.25 C 12.9,4.41 9.98,4.35 8.23,6.1 5.07,9.27 6.09,14.91 6.09,14.91 c 0,0 5.64,1.02 8.81,-2.14 C 16.64,11 16.59,8.09 14.74,6.25 Z m -2.27,4.09 -0.91,1.87 -0.9,-1.87 -1.86,-0.91 1.86,-0.9 0.9,-1.87 0.91,1.87 1.86,0.9 z' style='opacity:0.35;enable-background:new' class='st1'/%3E%3Cpolygon points='11.56,12.21 10.66,10.34 8.8,9.43 10.66,8.53 11.56,6.66 12.47,8.53 14.33,9.43 12.47,10.34 ' style='opacity:0.9;fill:%23ffffff;enable-background:new' class='st0'/%3E%3C/g%3E%3C/svg%3E\");\n}\n\n.mapboxgl-ctrl.mapboxgl-ctrl-attrib {\n    padding: 0 5px;\n    background-color: rgba(255, 255, 255, 0.5);\n    margin: 0;\n}\n\n@media screen {\n    .mapboxgl-ctrl-attrib.mapboxgl-compact {\n        padding-top: 2px;\n        padding-bottom: 2px;\n        margin: 0 10px 10px;\n        position: relative;\n        padding-right: 24px;\n        background-color: #fff;\n        border-radius: 3px 12px 12px 3px;\n        visibility: hidden;\n    }\n\n    .mapboxgl-ctrl-attrib.mapboxgl-compact:hover {\n        visibility: visible;\n    }\n\n    .mapboxgl-ctrl-attrib.mapboxgl-compact::after {\n        content: '';\n        cursor: pointer;\n        position: absolute;\n        bottom: 0;\n        right: 0;\n        background-image: url(\"data:image/svg+xml;charset=utf-8,%3Csvg viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E %3Cpath fill='%23333333' fill-rule='evenodd' d='M4,10a6,6 0 1,0 12,0a6,6 0 1,0 -12,0 M9,7a1,1 0 1,0 2,0a1,1 0 1,0 -2,0 M9,10a1,1 0 1,1 2,0l0,3a1,1 0 1,1 -2,0'/%3E %3C/svg%3E\");\n        background-color: rgba(255, 255, 255, 0.5);\n        width: 24px;\n        height: 24px;\n        box-sizing: border-box;\n        visibility: visible;\n        border-radius: 12px;\n    }\n}\n\n.mapboxgl-ctrl-attrib a {\n    color: rgba(0, 0, 0, 0.75);\n    text-decoration: none;\n}\n\n.mapboxgl-ctrl-attrib a:hover {\n    color: inherit;\n    text-decoration: underline;\n}\n\n/* stylelint-disable-next-line selector-class-pattern */\n.mapboxgl-ctrl-attrib .mapbox-improve-map {\n    font-weight: bold;\n    margin-left: 2px;\n}\n\n.mapboxgl-attrib-empty {\n    display: none;\n}\n\n.mapboxgl-ctrl-scale {\n    background-color: rgba(255, 255, 255, 0.75);\n    font-size: 10px;\n    border-width: medium 2px 2px;\n    border-style: none solid solid;\n    border-color: #333;\n    padding: 0 5px;\n    color: #333;\n    box-sizing: border-box;\n}\n\n.mapboxgl-popup {\n    position: absolute;\n    top: 0;\n    left: 0;\n    display: -webkit-flex;\n    display: flex;\n    will-change: transform;\n    pointer-events: none;\n}\n\n.mapboxgl-popup-anchor-top,\n.mapboxgl-popup-anchor-top-left,\n.mapboxgl-popup-anchor-top-right {\n    -webkit-flex-direction: column;\n    flex-direction: column;\n}\n\n.mapboxgl-popup-anchor-bottom,\n.mapboxgl-popup-anchor-bottom-left,\n.mapboxgl-popup-anchor-bottom-right {\n    -webkit-flex-direction: column-reverse;\n    flex-direction: column-reverse;\n}\n\n.mapboxgl-popup-anchor-left {\n    -webkit-flex-direction: row;\n    flex-direction: row;\n}\n\n.mapboxgl-popup-anchor-right {\n    -webkit-flex-direction: row-reverse;\n    flex-direction: row-reverse;\n}\n\n.mapboxgl-popup-tip {\n    width: 0;\n    height: 0;\n    border: 10px solid transparent;\n    z-index: 1;\n}\n\n.mapboxgl-popup-anchor-top .mapboxgl-popup-tip {\n    -webkit-align-self: center;\n    align-self: center;\n    border-top: none;\n    border-bottom-color: #fff;\n}\n\n.mapboxgl-popup-anchor-top-left .mapboxgl-popup-tip {\n    -webkit-align-self: flex-start;\n    align-self: flex-start;\n    border-top: none;\n    border-left: none;\n    border-bottom-color: #fff;\n}\n\n.mapboxgl-popup-anchor-top-right .mapboxgl-popup-tip {\n    -webkit-align-self: flex-end;\n    align-self: flex-end;\n    border-top: none;\n    border-right: none;\n    border-bottom-color: #fff;\n}\n\n.mapboxgl-popup-anchor-bottom .mapboxgl-popup-tip {\n    -webkit-align-self: center;\n    align-self: center;\n    border-bottom: none;\n    border-top-color: #fff;\n}\n\n.mapboxgl-popup-anchor-bottom-left .mapboxgl-popup-tip {\n    -webkit-align-self: flex-start;\n    align-self: flex-start;\n    border-bottom: none;\n    border-left: none;\n    border-top-color: #fff;\n}\n\n.mapboxgl-popup-anchor-bottom-right .mapboxgl-popup-tip {\n    -webkit-align-self: flex-end;\n    align-self: flex-end;\n    border-bottom: none;\n    border-right: none;\n    border-top-color: #fff;\n}\n\n.mapboxgl-popup-anchor-left .mapboxgl-popup-tip {\n    -webkit-align-self: center;\n    align-self: center;\n    border-left: none;\n    border-right-color: #fff;\n}\n\n.mapboxgl-popup-anchor-right .mapboxgl-popup-tip {\n    -webkit-align-self: center;\n    align-self: center;\n    border-right: none;\n    border-left-color: #fff;\n}\n\n.mapboxgl-popup-close-button {\n    position: absolute;\n    right: 0;\n    top: 0;\n    border: 0;\n    border-radius: 0 3px 0 0;\n    cursor: pointer;\n    background-color: transparent;\n}\n\n.mapboxgl-popup-close-button:hover {\n    background-color: rgba(0, 0, 0, 0.05);\n}\n\n.mapboxgl-popup-content {\n    position: relative;\n    background: #fff;\n    border-radius: 3px;\n    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);\n    padding: 10px 10px 15px;\n    pointer-events: auto;\n}\n\n.mapboxgl-popup-anchor-top-left .mapboxgl-popup-content {\n    border-top-left-radius: 0;\n}\n\n.mapboxgl-popup-anchor-top-right .mapboxgl-popup-content {\n    border-top-right-radius: 0;\n}\n\n.mapboxgl-popup-anchor-bottom-left .mapboxgl-popup-content {\n    border-bottom-left-radius: 0;\n}\n\n.mapboxgl-popup-anchor-bottom-right .mapboxgl-popup-content {\n    border-bottom-right-radius: 0;\n}\n\n.mapboxgl-marker {\n    position: absolute;\n    top: 0;\n    left: 0;\n    will-change: transform;\n}\n\n.mapboxgl-user-location-dot {\n    background-color: #1da1f2;\n    width: 15px;\n    height: 15px;\n    border-radius: 50%;\n    box-shadow: 0 0 2px rgba(0, 0, 0, 0.25);\n}\n\n.mapboxgl-user-location-dot::before {\n    background-color: #1da1f2;\n    content: '';\n    width: 15px;\n    height: 15px;\n    border-radius: 50%;\n    position: absolute;\n    -webkit-animation: mapboxgl-user-location-dot-pulse 2s infinite;\n    -moz-animation: mapboxgl-user-location-dot-pulse 2s infinite;\n    -ms-animation: mapboxgl-user-location-dot-pulse 2s infinite;\n    animation: mapboxgl-user-location-dot-pulse 2s infinite;\n}\n\n.mapboxgl-user-location-dot::after {\n    border-radius: 50%;\n    border: 2px solid #fff;\n    content: '';\n    height: 19px;\n    left: -2px;\n    position: absolute;\n    top: -2px;\n    width: 19px;\n    box-sizing: border-box;\n}\n\n@-webkit-keyframes mapboxgl-user-location-dot-pulse {\n    0%   { -webkit-transform: scale(1); opacity: 1; }\n    70%  { -webkit-transform: scale(3); opacity: 0; }\n    100% { -webkit-transform: scale(1); opacity: 0; }\n}\n\n@-ms-keyframes mapboxgl-user-location-dot-pulse {\n    0%   { -ms-transform: scale(1); opacity: 1; }\n    70%  { -ms-transform: scale(3); opacity: 0; }\n    100% { -ms-transform: scale(1); opacity: 0; }\n}\n\n@keyframes mapboxgl-user-location-dot-pulse {\n    0%   { transform: scale(1); opacity: 1; }\n    70%  { transform: scale(3); opacity: 0; }\n    100% { transform: scale(1); opacity: 0; }\n}\n\n.mapboxgl-user-location-dot-stale {\n    background-color: #aaa;\n}\n\n.mapboxgl-user-location-dot-stale::after {\n    display: none;\n}\n\n.mapboxgl-crosshair,\n.mapboxgl-crosshair .mapboxgl-interactive,\n.mapboxgl-crosshair .mapboxgl-interactive:active {\n    cursor: crosshair;\n}\n\n.mapboxgl-boxzoom {\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 0;\n    height: 0;\n    background: #fff;\n    border: 2px dotted #202020;\n    opacity: 0.5;\n}\n\n@media print {\n    /* stylelint-disable-next-line selector-class-pattern */\n    .mapbox-improve-map {\n        display: none;\n    }\n}\n",
            '',
        ]),
            (t.default = r);
    },
    function(n, t, e) {
        var o = e(7),
            r = e(14);
        'string' == typeof (r = r.__esModule ? r.default : r) && (r = [[n.i, r, '']]);
        var a = { insert: 'head', singleton: !1 };
        o(r, a);
        n.exports = r.locals || {};
    },
    function(n, t, e) {
        'use strict';
        e.r(t);
        var o = e(5),
            r = e.n(o)()(!1);
        r.push([n.i, '.mapboxgl-map .mapboxgl-canvas {\n  top: 0;\n  left: 0;\n}\n', '']),
            (t.default = r);
    },
    function(n, t, e) {
        'use strict';
        e.r(t),
            e.d(t, 'mapboxgl', function() {
                return p.a;
            }),
            e.d(t, 'Circle', function() {
                return z;
            }),
            e.d(t, 'Helpers', function() {
                return c.d;
            }),
            e.d(t, 'Marker', function() {
                return X;
            }),
            e.d(t, 'Popup', function() {
                return Z;
            }),
            e.d(t, 'Utils', function() {
                return l.b;
            }),
            e.d(t, 'Diagnose', function() {
                return ln;
            });
        var o = e(4),
            r = e.n(o),
            a = e(0),
            i = e.n(a),
            c = e(2),
            l = e(1),
            p = e(3);
        e(11), e(13);
        function s(n) {
            return (s =
                'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
                    ? function(n) {
                          return typeof n;
                      }
                    : function(n) {
                          return n &&
                              'function' == typeof Symbol &&
                              n.constructor === Symbol &&
                              n !== Symbol.prototype
                              ? 'symbol'
                              : typeof n;
                      })(n);
        }
        function u(n, t) {
            var e = Object.keys(n);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(n);
                t &&
                    (o = o.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(n, t).enumerable;
                    })),
                    e.push.apply(e, o);
            }
            return e;
        }
        function f(n, t, e) {
            return (
                t in n
                    ? Object.defineProperty(n, t, {
                          value: e,
                          enumerable: !0,
                          configurable: !0,
                          writable: !0,
                      })
                    : (n[t] = e),
                n
            );
        }
        function b(n, t) {
            if (null == n) return {};
            var e,
                o,
                r = (function(n, t) {
                    if (null == n) return {};
                    var e,
                        o,
                        r = {},
                        a = Object.keys(n);
                    for (o = 0; o < a.length; o++) (e = a[o]), t.indexOf(e) >= 0 || (r[e] = n[e]);
                    return r;
                })(n, t);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(n);
                for (o = 0; o < a.length; o++)
                    (e = a[o]),
                        t.indexOf(e) >= 0 ||
                            (Object.prototype.propertyIsEnumerable.call(n, e) && (r[e] = n[e]));
            }
            return r;
        }
        function m(n, t) {
            for (var e = 0; e < t.length; e++) {
                var o = t[e];
                (o.enumerable = o.enumerable || !1),
                    (o.configurable = !0),
                    'value' in o && (o.writable = !0),
                    Object.defineProperty(n, o.key, o);
            }
        }
        function g(n, t) {
            return (g =
                Object.setPrototypeOf ||
                function(n, t) {
                    return (n.__proto__ = t), n;
                })(n, t);
        }
        function d(n) {
            var t = (function() {
                if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ('function' == typeof Proxy) return !0;
                try {
                    return (
                        Date.prototype.toString.call(Reflect.construct(Date, [], function() {})), !0
                    );
                } catch (n) {
                    return !1;
                }
            })();
            return function() {
                var e,
                    o = y(n);
                if (t) {
                    var r = y(this).constructor;
                    e = Reflect.construct(o, arguments, r);
                } else e = o.apply(this, arguments);
                return h(this, e);
            };
        }
        function h(n, t) {
            return !t || ('object' !== s(t) && 'function' != typeof t) ? v(n) : t;
        }
        function v(n) {
            if (void 0 === n)
                throw new ReferenceError(
                    "this hasn't been initialised - super() hasn't been called",
                );
            return n;
        }
        function y(n) {
            return (y = Object.setPrototypeOf
                ? Object.getPrototypeOf
                : function(n) {
                      return n.__proto__ || Object.getPrototypeOf(n);
                  })(n);
        }
        var x = ['jumpTo', 'easeTo', 'flyTo'],
            w = (function(n) {
                !(function(n, t) {
                    if ('function' != typeof t && null !== t)
                        throw new TypeError('Super expression must either be null or a function');
                    (n.prototype = Object.create(t && t.prototype, {
                        constructor: { value: n, writable: !0, configurable: !0 },
                    })),
                        t && g(n, t);
                })(i, n);
                var t,
                    e,
                    o,
                    a = d(i);
                function i(n) {
                    var t;
                    !(function(n, t) {
                        if (!(n instanceof t))
                            throw new TypeError('Cannot call a class as a function');
                    })(this, i);
                    var e = (t = a.call(this, n)).props.accessToken;
                    return (
                        (p.a.accessToken = e),
                        (t.map = null),
                        (t.zoomendTimeout = null),
                        (t.onChange = t.onChange.bind(v(t))),
                        (t.onZoomEnd = t.onZoomEnd.bind(v(t))),
                        (t.initMap = t.initMap.bind(v(t))),
                        (t.addControls = t.addControls.bind(v(t))),
                        (t.addEvents = t.addEvents.bind(v(t))),
                        t
                    );
                }
                return (
                    (t = i),
                    (e = [
                        {
                            key: 'componentDidUpdate',
                            value: function(n) {
                                if (this.map) {
                                    var t = this.props,
                                        e = t.coordinates,
                                        o = t.zoom,
                                        r = t.minZoom,
                                        a = t.maxZoom,
                                        i = t.mapboxStyle,
                                        l = t.navigationType,
                                        p = n.coordinates,
                                        s = n.zoom,
                                        u = n.minZoom,
                                        f = n.maxZoom,
                                        b = n.mapboxStyle;
                                    if (!Object(c.c)(e, p)) {
                                        var m = (null == l ? void 0 : l.type) || 'jumpTo';
                                        if (x.indexOf(m) >= 0) {
                                            var g,
                                                d,
                                                h = { center: [e.lng, e.lat] };
                                            'flyTo' === m &&
                                                ((h.curve =
                                                    (null == l ||
                                                    null === (g = l.options) ||
                                                    void 0 === g
                                                        ? void 0
                                                        : g.curve) || 1.42),
                                                (h.speed =
                                                    (null == l ||
                                                    null === (d = l.options) ||
                                                    void 0 === d
                                                        ? void 0
                                                        : d.speed) || 1.2)),
                                                this.map[m](h);
                                        }
                                    }
                                    o !== s && this.map.setZoom(o),
                                        r !== u && this.map.setMinZoom(r),
                                        a !== f && this.map.setMaxZoom(a),
                                        i !== b && this.map.setStyle(i);
                                }
                            },
                        },
                        {
                            key: 'componentWillUnmount',
                            value: function() {
                                this.map && this.map.remove();
                            },
                        },
                        {
                            key: 'onChange',
                            value: function() {
                                var n = this.props.onChange;
                                if (Object(l.d)(n)) {
                                    var t = this.map.getCenter(),
                                        e = t.lng,
                                        o = t.lat;
                                    n({
                                        zoom: this.map.getZoom(),
                                        coordinates: { lng: e, lat: o },
                                    });
                                }
                            },
                        },
                        {
                            key: 'onZoomEnd',
                            value: function(n) {
                                var t = this;
                                clearTimeout(this.zoomendTimeout),
                                    (this.zoomendTimeout = setTimeout(function() {
                                        t.onChange();
                                        var e = t.props.onZoomEnd;
                                        Object(l.d)(e) && e(n);
                                    }, 300));
                            },
                        },
                        {
                            key: 'initMap',
                            value: function(n) {
                                var t = this;
                                if (n) {
                                    var e = this.props,
                                        o = e.coordinates,
                                        r = e.onLoad,
                                        a = e.mapboxStyle,
                                        i = b(e, ['coordinates', 'onLoad', 'mapboxStyle']);
                                    (this.map = new p.a.Map(
                                        (function(n) {
                                            for (var t = 1; t < arguments.length; t++) {
                                                var e = null != arguments[t] ? arguments[t] : {};
                                                t % 2
                                                    ? u(Object(e), !0).forEach(function(t) {
                                                          f(n, t, e[t]);
                                                      })
                                                    : Object.getOwnPropertyDescriptors
                                                    ? Object.defineProperties(
                                                          n,
                                                          Object.getOwnPropertyDescriptors(e),
                                                      )
                                                    : u(Object(e)).forEach(function(t) {
                                                          Object.defineProperty(
                                                              n,
                                                              t,
                                                              Object.getOwnPropertyDescriptor(e, t),
                                                          );
                                                      });
                                            }
                                            return n;
                                        })(
                                            {
                                                container: n,
                                                center: new p.a.LngLat(o.lng, o.lat),
                                                style: a,
                                            },
                                            i,
                                        ),
                                    )),
                                        this.map.on('load', function() {
                                            Object(l.d)(r) && r(t.map);
                                        }),
                                        this.addControls(),
                                        this.addEvents();
                                }
                            },
                        },
                        {
                            key: 'addControls',
                            value: function() {
                                var n = this.props,
                                    t = n.fullscreenControlPosition,
                                    e = n.navigationControlPosition,
                                    o = n.withZoom,
                                    r = n.withCompass,
                                    a = n.withFullscreen;
                                (o || r) &&
                                    this.map.addControl(
                                        new p.a.NavigationControl({ showCompass: r, showZoom: o }),
                                        e,
                                    ),
                                    a && this.map.addControl(new p.a.FullscreenControl(), t);
                            },
                        },
                        {
                            key: 'addEvents',
                            value: function() {
                                var n = this.props,
                                    t = n.onChange,
                                    e = n.onZoomStart,
                                    o = n.onZoomEnd,
                                    r = n.onClick;
                                Object(l.d)(t) && this.map.on('moveend', this.onChange),
                                    Object(l.d)(e) && this.map.on('zoomstart', e),
                                    (Object(l.d)(t) || Object(l.d)(o)) &&
                                        this.map.on('zoomend', this.onZoomEnd),
                                    Object(l.d)(r) && this.map.on('click', r);
                            },
                        },
                        {
                            key: 'render',
                            value: function() {
                                var n = this.props,
                                    t = n.renderNotSupported,
                                    e = n.className,
                                    o = n.children;
                                return !p.a.supported() && Object(l.d)(t)
                                    ? t(e)
                                    : r.a.createElement(
                                          'div',
                                          {
                                              className: e || '',
                                              ref: this.initMap,
                                              style: { height: '100%', width: '100%' },
                                          },
                                          o,
                                      );
                            },
                        },
                    ]) && m(t.prototype, e),
                    o && m(t, o),
                    i
                );
            })(o.Component);
        function C(n) {
            return (C =
                'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
                    ? function(n) {
                          return typeof n;
                      }
                    : function(n) {
                          return n &&
                              'function' == typeof Symbol &&
                              n.constructor === Symbol &&
                              n !== Symbol.prototype
                              ? 'symbol'
                              : typeof n;
                      })(n);
        }
        function O(n, t) {
            if (!(n instanceof t)) throw new TypeError('Cannot call a class as a function');
        }
        function k(n, t) {
            for (var e = 0; e < t.length; e++) {
                var o = t[e];
                (o.enumerable = o.enumerable || !1),
                    (o.configurable = !0),
                    'value' in o && (o.writable = !0),
                    Object.defineProperty(n, o.key, o);
            }
        }
        function L(n, t) {
            return (L =
                Object.setPrototypeOf ||
                function(n, t) {
                    return (n.__proto__ = t), n;
                })(n, t);
        }
        function j(n) {
            var t = (function() {
                if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ('function' == typeof Proxy) return !0;
                try {
                    return (
                        Date.prototype.toString.call(Reflect.construct(Date, [], function() {})), !0
                    );
                } catch (n) {
                    return !1;
                }
            })();
            return function() {
                var e,
                    o = M(n);
                if (t) {
                    var r = M(this).constructor;
                    e = Reflect.construct(o, arguments, r);
                } else e = o.apply(this, arguments);
                return E(this, e);
            };
        }
        function E(n, t) {
            return !t || ('object' !== C(t) && 'function' != typeof t)
                ? (function(n) {
                      if (void 0 === n)
                          throw new ReferenceError(
                              "this hasn't been initialised - super() hasn't been called",
                          );
                      return n;
                  })(n)
                : t;
        }
        function M(n) {
            return (M = Object.setPrototypeOf
                ? Object.getPrototypeOf
                : function(n) {
                      return n.__proto__ || Object.getPrototypeOf(n);
                  })(n);
        }
        function S(n, t, e, o, r, a, i) {
            n && (o ? Object(c.e)(n, t, Object(c.f)(e, o, r), a, i) : Object(c.g)(n, t));
        }
        (w.propTypes = {
            accessToken: i.a.string,
            coordinates: c.a.isRequired,
            children: i.a.oneOfType([i.a.node, i.a.arrayOf(i.a.node)]),
            className: i.a.string,
            fullscreenControlPosition: i.a.string,
            maxZoom: i.a.number,
            minZoom: i.a.number,
            navigationControlPosition: i.a.string,
            navigationType: i.a.shape({
                type: i.a.oneOf(x),
                options: i.a.shape({ speed: i.a.number, curve: i.a.number }),
            }),
            onChange: i.a.func,
            onClick: i.a.func,
            onLoad: i.a.func,
            onZoomEnd: i.a.func,
            onZoomStart: i.a.func,
            renderNotSupported: i.a.func,
            mapboxStyle: i.a.oneOfType([i.a.string, i.a.shape({})]),
            withCompass: i.a.bool,
            withFullscreen: i.a.bool,
            withZoom: i.a.bool,
            zoom: i.a.number,
        }),
            (w.defaultProps = {
                accessToken: '',
                children: null,
                className: '',
                fullscreenControlPosition: 'top-right',
                maxZoom: void 0,
                minZoom: void 0,
                navigationControlPosition: 'bottom-right',
                onChange: void 0,
                onClick: void 0,
                onLoad: void 0,
                onZoomEnd: void 0,
                onZoomStart: void 0,
                mapboxStyle: 'mapbox://styles/mapbox/streets-v10',
                navigationType: { type: 'jumpTo' },
                withCompass: !1,
                withFullscreen: !1,
                withZoom: !1,
                zoom: 15,
                renderNotSupported: function(n) {
                    return r.a.createElement(
                        'div',
                        {
                            className: n || '',
                            style: {
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                background:
                                    'repeating-linear-gradient(45deg, aliceblue, aliceblue 10px, white 10px, white 20px)',
                            },
                        },
                        r.a.createElement(
                            'div',
                            {
                                style: {
                                    backgroundColor: 'white',
                                    padding: 10,
                                    borderRadius: 4,
                                    fontWeight: 'bold',
                                    fontSize: 24,
                                },
                            },
                            'Your browser does not support Mapbox GL',
                        ),
                    );
                },
            });
        var z = (function(n) {
            !(function(n, t) {
                if ('function' != typeof t && null !== t)
                    throw new TypeError('Super expression must either be null or a function');
                (n.prototype = Object.create(t && t.prototype, {
                    constructor: { value: n, writable: !0, configurable: !0 },
                })),
                    t && L(n, t);
            })(a, n);
            var t,
                e,
                o,
                r = j(a);
            function a() {
                return O(this, a), r.apply(this, arguments);
            }
            return (
                (t = a),
                (e = [
                    {
                        key: 'componentDidMount',
                        value: function() {
                            var n = this.props;
                            S(n.map, n.id, n.coordinates, n.radius, n.unit, n.paint, n.onClick);
                        },
                    },
                    {
                        key: 'componentDidUpdate',
                        value: function(n) {
                            var t = this.props,
                                e = t.id,
                                o = t.map,
                                r = t.coordinates,
                                a = t.radius,
                                i = t.unit,
                                p = t.paint,
                                s = t.onClick,
                                u = n.coordinates,
                                f = n.radius,
                                b = n.paint;
                            (Object(c.c)(r, u) && a === f && Object(l.a)(p, b)) ||
                                S(o, e, r, a, i, p, s);
                        },
                    },
                    {
                        key: 'componentWillUnmount',
                        value: function() {
                            var n = this.props,
                                t = n.id,
                                e = n.map;
                            Object(c.g)(e, t);
                        },
                    },
                    {
                        key: 'render',
                        value: function() {
                            return null;
                        },
                    },
                ]) && k(t.prototype, e),
                o && k(t, o),
                a
            );
        })(o.Component);
        (z.propTypes = {
            coordinates: c.a.isRequired,
            id: i.a.string.isRequired,
            map: i.a.shape({}).isRequired,
            onClick: i.a.func,
            paint: i.a.shape({}),
            radius: i.a.number.isRequired,
            unit: i.a.oneOf(c.b),
        }),
            (z.defaultProps = { onClick: void 0, paint: {}, unit: c.b[0] });
        var P = e(9),
            _ = e.n(P);
        function T(n) {
            return (T =
                'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
                    ? function(n) {
                          return typeof n;
                      }
                    : function(n) {
                          return n &&
                              'function' == typeof Symbol &&
                              n.constructor === Symbol &&
                              n !== Symbol.prototype
                              ? 'symbol'
                              : typeof n;
                      })(n);
        }
        function F(n, t) {
            for (var e = 0; e < t.length; e++) {
                var o = t[e];
                (o.enumerable = o.enumerable || !1),
                    (o.configurable = !0),
                    'value' in o && (o.writable = !0),
                    Object.defineProperty(n, o.key, o);
            }
        }
        function A(n, t) {
            return (A =
                Object.setPrototypeOf ||
                function(n, t) {
                    return (n.__proto__ = t), n;
                })(n, t);
        }
        function R(n) {
            var t = (function() {
                if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ('function' == typeof Proxy) return !0;
                try {
                    return (
                        Date.prototype.toString.call(Reflect.construct(Date, [], function() {})), !0
                    );
                } catch (n) {
                    return !1;
                }
            })();
            return function() {
                var e,
                    o = B(n);
                if (t) {
                    var r = B(this).constructor;
                    e = Reflect.construct(o, arguments, r);
                } else e = o.apply(this, arguments);
                return D(this, e);
            };
        }
        function D(n, t) {
            return !t || ('object' !== T(t) && 'function' != typeof t) ? N(n) : t;
        }
        function N(n) {
            if (void 0 === n)
                throw new ReferenceError(
                    "this hasn't been initialised - super() hasn't been called",
                );
            return n;
        }
        function B(n) {
            return (B = Object.setPrototypeOf
                ? Object.getPrototypeOf
                : function(n) {
                      return n.__proto__ || Object.getPrototypeOf(n);
                  })(n);
        }
        var Z = (function(n) {
            !(function(n, t) {
                if ('function' != typeof t && null !== t)
                    throw new TypeError('Super expression must either be null or a function');
                (n.prototype = Object.create(t && t.prototype, {
                    constructor: { value: n, writable: !0, configurable: !0 },
                })),
                    t && A(n, t);
            })(a, n);
            var t,
                e,
                o,
                r = R(a);
            function a(n) {
                var t;
                !(function(n, t) {
                    if (!(n instanceof t)) throw new TypeError('Cannot call a class as a function');
                })(this, a),
                    ((t = r.call(this, n)).container = null),
                    (t.popup = null);
                var e = t.props,
                    o = e.anchor,
                    i = e.onMouseOver,
                    c = e.onMouseOut,
                    l = e.closeButton,
                    s = e.closeOnClick,
                    u = e.offset,
                    f = e.className,
                    b = e.coordinates,
                    m = e.map;
                return (
                    (t.container = document.createElement('div')),
                    t.container.addEventListener('mouseover', i),
                    t.container.addEventListener('mouseout', c),
                    (t.popup = new p.a.Popup({
                        closeButton: l,
                        closeOnClick: s,
                        offset: u,
                        className: f,
                        anchor: o,
                    })),
                    t.popup.setDOMContent(t.container),
                    b && t.popup.setLngLat(b),
                    m && t.popup.addTo(m),
                    (t.getMapboxPopup = t.getMapboxPopup.bind(N(t))),
                    t
                );
            }
            return (
                (t = a),
                (e = [
                    {
                        key: 'componentDidUpdate',
                        value: function(n) {
                            var t = n.coordinates,
                                e = this.props.coordinates;
                            Object(c.c)(t || {}, e || {}) || this.popup.setLngLat(e);
                        },
                    },
                    {
                        key: 'componentWillUnmount',
                        value: function() {
                            this.popup.remove();
                        },
                    },
                    {
                        key: 'getMapboxPopup',
                        value: function() {
                            return this.popup;
                        },
                    },
                    {
                        key: 'render',
                        value: function() {
                            return _.a.createPortal(this.props.children, this.container);
                        },
                    },
                ]) && F(t.prototype, e),
                o && F(t, o),
                a
            );
        })(o.Component);
        function V(n) {
            return (V =
                'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
                    ? function(n) {
                          return typeof n;
                      }
                    : function(n) {
                          return n &&
                              'function' == typeof Symbol &&
                              n.constructor === Symbol &&
                              n !== Symbol.prototype
                              ? 'symbol'
                              : typeof n;
                      })(n);
        }
        function U() {
            return (U =
                Object.assign ||
                function(n) {
                    for (var t = 1; t < arguments.length; t++) {
                        var e = arguments[t];
                        for (var o in e)
                            Object.prototype.hasOwnProperty.call(e, o) && (n[o] = e[o]);
                    }
                    return n;
                }).apply(this, arguments);
        }
        function q(n, t) {
            var e = Object.keys(n);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(n);
                t &&
                    (o = o.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(n, t).enumerable;
                    })),
                    e.push.apply(e, o);
            }
            return e;
        }
        function I(n, t, e) {
            return (
                t in n
                    ? Object.defineProperty(n, t, {
                          value: e,
                          enumerable: !0,
                          configurable: !0,
                          writable: !0,
                      })
                    : (n[t] = e),
                n
            );
        }
        function J(n, t) {
            if (null == n) return {};
            var e,
                o,
                r = (function(n, t) {
                    if (null == n) return {};
                    var e,
                        o,
                        r = {},
                        a = Object.keys(n);
                    for (o = 0; o < a.length; o++) (e = a[o]), t.indexOf(e) >= 0 || (r[e] = n[e]);
                    return r;
                })(n, t);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(n);
                for (o = 0; o < a.length; o++)
                    (e = a[o]),
                        t.indexOf(e) >= 0 ||
                            (Object.prototype.propertyIsEnumerable.call(n, e) && (r[e] = n[e]));
            }
            return r;
        }
        function W(n, t) {
            for (var e = 0; e < t.length; e++) {
                var o = t[e];
                (o.enumerable = o.enumerable || !1),
                    (o.configurable = !0),
                    'value' in o && (o.writable = !0),
                    Object.defineProperty(n, o.key, o);
            }
        }
        function H(n, t) {
            return (H =
                Object.setPrototypeOf ||
                function(n, t) {
                    return (n.__proto__ = t), n;
                })(n, t);
        }
        function G(n) {
            var t = (function() {
                if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ('function' == typeof Proxy) return !0;
                try {
                    return (
                        Date.prototype.toString.call(Reflect.construct(Date, [], function() {})), !0
                    );
                } catch (n) {
                    return !1;
                }
            })();
            return function() {
                var e,
                    o = Q(n);
                if (t) {
                    var r = Q(this).constructor;
                    e = Reflect.construct(o, arguments, r);
                } else e = o.apply(this, arguments);
                return Y(this, e);
            };
        }
        function Y(n, t) {
            return !t || ('object' !== V(t) && 'function' != typeof t) ? K(n) : t;
        }
        function K(n) {
            if (void 0 === n)
                throw new ReferenceError(
                    "this hasn't been initialised - super() hasn't been called",
                );
            return n;
        }
        function Q(n) {
            return (Q = Object.setPrototypeOf
                ? Object.getPrototypeOf
                : function(n) {
                      return n.__proto__ || Object.getPrototypeOf(n);
                  })(n);
        }
        (Z.propTypes = {
            anchor: i.a.oneOf([
                'center',
                'top',
                'bottom',
                'left',
                'right',
                'top-left',
                'top-right',
                'bottom-left',
                'bottom-right',
            ]),
            children: i.a.oneOfType([i.a.node, i.a.arrayOf(i.a.node)]),
            className: i.a.string,
            closeButton: i.a.bool,
            closeOnClick: i.a.bool,
            coordinates: c.a,
            map: i.a.shape({}),
            offset: i.a.number,
            onMouseOut: i.a.func,
            onMouseOver: i.a.func,
        }),
            (Z.defaultProps = {
                anchor: void 0,
                children: null,
                className: '',
                closeButton: !0,
                closeOnClick: !0,
                coordinates: void 0,
                map: void 0,
                offset: void 0,
                onMouseOut: void 0,
                onMouseOver: void 0,
            });
        var X = (function(n) {
            !(function(n, t) {
                if ('function' != typeof t && null !== t)
                    throw new TypeError('Super expression must either be null or a function');
                (n.prototype = Object.create(t && t.prototype, {
                    constructor: { value: n, writable: !0, configurable: !0 },
                })),
                    t && H(n, t);
            })(i, n);
            var t,
                e,
                o,
                a = G(i);
            function i(n) {
                var t;
                return (
                    (function(n, t) {
                        if (!(n instanceof t))
                            throw new TypeError('Cannot call a class as a function');
                    })(this, i),
                    ((t = a.call(this, n)).overTimeout = 0),
                    (t.marker = null),
                    (t.popup = null),
                    (t.onMarkerOver = t.onMarkerOver.bind(K(t))),
                    (t.onMarkerOut = t.onMarkerOut.bind(K(t))),
                    (t.onDragEnd = t.onDragEnd.bind(K(t))),
                    (t.initMarker = t.initMarker.bind(K(t))),
                    (t.initPopup = t.initPopup.bind(K(t))),
                    (t.clearDebounce = t.clearDebounce.bind(K(t))),
                    (t.moveToTop = t.moveToTop.bind(K(t))),
                    (t.markerProps = { ref: t.initMarker, 'data-marker': '' }),
                    t
                );
            }
            return (
                (t = i),
                (e = [
                    {
                        key: 'componentDidUpdate',
                        value: function(n) {
                            if (this.marker) {
                                var t = n.coordinates,
                                    e = this.props.coordinates;
                                Object(c.c)(e, t) || this.marker.setLngLat(e);
                            }
                        },
                    },
                    {
                        key: 'componentWillUnmount',
                        value: function() {
                            this.marker && (this.clearDebounce(), this.marker.remove());
                        },
                    },
                    {
                        key: 'onMarkerOver',
                        value: function(n) {
                            this.clearDebounce();
                            var t = this.props,
                                e = t.popupOnOver,
                                o = t.onMouseOver;
                            e && this.popup && !this.popup.isOpen() && this.marker.togglePopup(),
                                Object(l.d)(o) && o(n);
                        },
                    },
                    {
                        key: 'onMarkerOut',
                        value: function(n) {
                            var t = this;
                            this.clearDebounce(),
                                (this.overTimeout = setTimeout(function() {
                                    var e = t.props,
                                        o = e.popupOnOver,
                                        r = e.onMouseOut;
                                    o && t.popup && t.popup.isOpen() && t.marker.togglePopup(),
                                        Object(l.d)(r) && r(n);
                                }, 300));
                        },
                    },
                    {
                        key: 'onDragEnd',
                        value: function() {
                            var n = this.props.onDragEnd;
                            Object(l.d)(n) && n(this.marker.getLngLat());
                        },
                    },
                    {
                        key: 'initMarker',
                        value: function(n) {
                            if (n) {
                                var t = this.props,
                                    e = t.coordinates,
                                    o = t.map,
                                    r = t.draggable,
                                    a = t.onDragEnd,
                                    i = t.getRef,
                                    c = t.children,
                                    s = J(t, [
                                        'coordinates',
                                        'map',
                                        'draggable',
                                        'onDragEnd',
                                        'getRef',
                                        'children',
                                    ]);
                                (this.marker = new p.a.Marker(
                                    (function(n) {
                                        for (var t = 1; t < arguments.length; t++) {
                                            var e = null != arguments[t] ? arguments[t] : {};
                                            t % 2
                                                ? q(Object(e), !0).forEach(function(t) {
                                                      I(n, t, e[t]);
                                                  })
                                                : Object.getOwnPropertyDescriptors
                                                ? Object.defineProperties(
                                                      n,
                                                      Object.getOwnPropertyDescriptors(e),
                                                  )
                                                : q(Object(e)).forEach(function(t) {
                                                      Object.defineProperty(
                                                          n,
                                                          t,
                                                          Object.getOwnPropertyDescriptor(e, t),
                                                      );
                                                  });
                                        }
                                        return n;
                                    })({ element: c ? n : null, draggable: r }, s),
                                )),
                                    this.marker.setLngLat(e),
                                    this.marker.addTo(o),
                                    this.popup && this.marker.setPopup(this.popup),
                                    r &&
                                        Object(l.d)(a) &&
                                        this.marker.on('dragend', this.onDragEnd),
                                    Object(l.d)(i) && i(this);
                            }
                        },
                    },
                    {
                        key: 'initPopup',
                        value: function(n) {
                            n &&
                                ((this.popup = n.getMapboxPopup()),
                                this.marker && this.marker.setPopup(this.popup));
                        },
                    },
                    {
                        key: 'clearDebounce',
                        value: function() {
                            clearTimeout(this.overTimeout);
                        },
                    },
                    {
                        key: 'moveToTop',
                        value: function() {
                            this.marker &&
                                (this.marker.remove(), this.marker.addTo(this.props.map));
                        },
                    },
                    {
                        key: 'render',
                        value: function() {
                            var n,
                                t,
                                e = this.props,
                                o = e.children,
                                a = e.popup,
                                i = e.popupAnchor,
                                c = e.popupOffset,
                                l = e.popupCloseButton;
                            return (
                                o
                                    ? (n = r.a.createElement(
                                          'div',
                                          U(
                                              {
                                                  key: 'marker',
                                                  onMouseOver: this.onMarkerOver,
                                                  onFocus: this.onMarkerOver,
                                                  onMouseOut: this.onMarkerOut,
                                                  onBlur: this.onMarkerOut,
                                              },
                                              this.markerProps,
                                          ),
                                          o,
                                      ))
                                    : (t = this.markerProps),
                                r.a.createElement(
                                    'span',
                                    t,
                                    n,
                                    a &&
                                        r.a.createElement(
                                            Z,
                                            {
                                                key: 'popup',
                                                ref: this.initPopup,
                                                anchor: i,
                                                onMouseOver: this.clearDebounce,
                                                onFocus: this.clearDebounce,
                                                onMouseOut: this.onMarkerOut,
                                                onBlur: this.onMarkerOut,
                                                closeButton: l,
                                                offset: c,
                                            },
                                            a,
                                        ),
                                )
                            );
                        },
                    },
                ]) && W(t.prototype, e),
                o && W(t, o),
                i
            );
        })(o.Component);
        function $() {
            if (!('Worker' in window && 'Blob' in window && 'URL' in window)) return !1;
            var n,
                t,
                e = new Blob([''], { type: 'text/javascript' }),
                o = URL.createObjectURL(e);
            try {
                (t = new Worker(o)), (n = !0);
            } catch (t) {
                n = !1;
            }
            return t && t.terminate(), URL.revokeObjectURL(o), n;
        }
        (X.propTypes = {
            coordinates: c.a.isRequired,
            children: i.a.oneOfType([i.a.node, i.a.arrayOf(i.a.node)]),
            draggable: i.a.bool,
            getRef: i.a.func,
            map: i.a.shape({}).isRequired,
            onDragEnd: i.a.func,
            onMouseOut: i.a.func,
            onMouseOver: i.a.func,
            popup: i.a.oneOfType([i.a.node, i.a.arrayOf(i.a.node)]),
            popupAnchor: i.a.string,
            popupCloseButton: i.a.bool,
            popupOffset: i.a.number,
            popupOnOver: i.a.bool,
        }),
            (X.defaultProps = {
                children: null,
                draggable: !1,
                getRef: void 0,
                onDragEnd: void 0,
                onMouseOut: void 0,
                onMouseOver: void 0,
                popup: void 0,
                popupAnchor: void 0,
                popupCloseButton: !1,
                popupOffset: void 0,
                popupOnOver: !1,
            });
        var nn = { antialias: !1, alpha: !0, stencil: !0, depth: !0 };
        var tn = {};
        function en(n) {
            return (
                void 0 === tn[n] &&
                    (tn[n] = (function(n) {
                        var t = document.createElement('canvas'),
                            e = Object.create(nn);
                        return (
                            (e.failIfMajorPerformanceCaveat = n),
                            t.probablySupportsContext
                                ? t.probablySupportsContext('webgl', e) ||
                                  t.probablySupportsContext('experimental-webgl', e)
                                : t.supportsContext
                                ? t.supportsContext('webgl', e) ||
                                  t.supportsContext('experimental-webgl', e)
                                : t.getContext('webgl', e) || t.getContext('experimental-webgl', e)
                        );
                    })(n)),
                tn[n]
            );
        }
        function on() {
            return new Promise(function(n) {
                var t = document.querySelector('body'),
                    e = document.createElement('div');
                try {
                    (e.id = 'diagnose_map'), t.appendChild(e);
                    var o = new p.a.Map({
                        container: 'diagnose_map',
                        style: 'mapbox://styles/mapbox/streets-v9',
                        zoom: 1,
                    });
                    o.on('error', function(t) {
                        return n(t.error.toString());
                    }),
                        o.on('load', function() {
                            return n('ok');
                        });
                } catch (t) {
                    n(t.stack || t.tostring);
                } finally {
                    t.removeChild(e);
                }
            });
        }
        function rn(n, t, e) {
            var o = Object.create(p.a.supported.webGLContextAttributes);
            o.failIfMajorPerformanceCaveat = e;
            var r = document.createElement('canvas');
            if (r[n]) {
                var a = r[n](t, o);
                return { result: a, error: a && a.getError && a.getError() };
            }
            return { result: !1, error: 'detection method unavailable' };
        }
        function an() {
            return {
                probablySupportsContext_webgl_true: rn('probablySupportsContext', 'webgl', !0),
                probablySupportsContext_webgl_false: rn('probablySupportsContext', 'webgl', !1),
                probablySupportsContext_experimental_true: rn(
                    'probablySupportsContext',
                    'experimental-webgl',
                    !0,
                ),
                probablySupportsContext_experimental_false: rn(
                    'probablySupportsContext',
                    'experimental-webgl',
                    !1,
                ),
                supportsContext_webgl_true: rn('supportsContext', 'webgl', !0),
                supportsContext_webgl_false: rn('supportsContext', 'webgl', !1),
                supportsContext_experimental_true: rn('supportsContext', 'experimental-webgl', !0),
                supportsContext_experimental_false: rn('supportsContext', 'experimental-webgl', !1),
                getContext_webgl_true: rn('getContext', 'webgl', !0),
                getContext_webgl_false: rn('getContext', 'webgl', !1),
                getContext_experimental_true: rn('getContext', 'experimental-webgl', !0),
                getContext_experimental_false: rn('getContext', 'experimental-webgl', !1),
            };
        }
        function cn(n) {
            return {
                isBrowser: Object(l.c)(),
                isArraySupported:
                    Array.prototype &&
                    Array.prototype.every &&
                    Array.prototype.filter &&
                    Array.prototype.forEach &&
                    Array.prototype.indexOf &&
                    Array.prototype.lastIndexOf &&
                    Array.prototype.map &&
                    Array.prototype.some &&
                    Array.prototype.reduce &&
                    Array.prototype.reduceRight &&
                    Array.isArray,
                isFunctionSupported: Function.prototype && Function.prototype.bind,
                isObjectSupported:
                    Object.keys &&
                    Object.create &&
                    Object.getPrototypeOf &&
                    Object.getOwnPropertyNames &&
                    Object.isSealed &&
                    Object.isFrozen &&
                    Object.isExtensible &&
                    Object.getOwnPropertyDescriptor &&
                    Object.defineProperty &&
                    Object.defineProperties &&
                    Object.seal &&
                    Object.freeze &&
                    Object.preventExtensions,
                isJSONSupported: 'JSON' in window && 'parse' in JSON && 'stringify' in JSON,
                isWorkerSupported: $(),
                isUint8ClampedArraySupported: 'Uint8ClampedArray' in window,
                isArrayBufferSupported: ArrayBuffer.isView,
                isWebGLSupportedCached: en(n && n.failIfMajorPerformanceCaveat),
            };
        }
        var ln = {
            createMap: on,
            performanceTests: an,
            isSupported: cn,
            fullDiagnostic: function() {
                return on().then(function(n) {
                    return {
                        supported: p.a.supported(),
                        isSupported: cn(),
                        createMap: n,
                        performance: an(),
                        navigator: {
                            appCodeName: navigator.appCodeName,
                            appVersion: navigator.appVersion,
                            doNotTrack: navigator.doNotTrack,
                            platform: navigator.platform,
                            userAgent: navigator.userAgent,
                            webdriver: navigator.webdriver,
                            language: navigator.language,
                        },
                    };
                });
            },
        };
        t.default = w;
    },
]);
