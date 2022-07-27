/*
 * Intel WebRTC SDK version 5.0.0
 * Copyright (c) 2022 Intel <http://webrtc.intel.com>
 * Homepage: http://webrtc.intel.com
 */



! function(e) {
	"object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define &&
		define.amd ? define([], e) : ("undefined" != typeof window ? window : "undefined" != typeof global ? global :
			"undefined" != typeof self ? self : this).Owt = e()
}(function() {
	return function n(i, a, o) {
		function s(t, e) {
			if (!a[t]) {
				if (!i[t]) {
					var r = "function" == typeof require && require;
					if (!e && r) return r(t, !0);
					if (u) return u(t, !0);
					throw (r = new Error("Cannot find module '" + t + "'")).code = "MODULE_NOT_FOUND", r
				}
				r = a[t] = {
					exports: {}
				}, i[t][0].call(r.exports, function(e) {
					return s(i[t][1][e] || e)
				}, r, r.exports, n, i, a, o)
			}
			return a[t].exports
		}
		for (var u = "function" == typeof require && require, e = 0; e < o.length; e++) s(o[e]);
		return s
	}({
		1: [function(e, t, r) {
			t.exports = function(e, t) {
				(null == t || t > e.length) && (t = e.length);
				for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
				return n
			}, t.exports.default = t.exports, t.exports.__esModule = !0
		}, {}],
		2: [function(e, t, r) {
			t.exports = function(e) {
				if (Array.isArray(e)) return e
			}, t.exports.default = t.exports, t.exports.__esModule = !0
		}, {}],
		3: [function(e, t, r) {
			t.exports = function(e) {
				if (void 0 === e) throw new ReferenceError(
					"this hasn't been initialised - super() hasn't been called");
				return e
			}, t.exports.default = t.exports, t.exports.__esModule = !0
		}, {}],
		4: [function(e, t, r) {
			function u(e, t, r, n, i, a, o) {
				try {
					var s = e[a](o),
						u = s.value
				} catch (e) {
					return void r(e)
				}
				s.done ? t(u) : Promise.resolve(u).then(n, i)
			}
			t.exports = function(s) {
				return function() {
					var e = this,
						o = arguments;
					return new Promise(function(t, r) {
						var n = s.apply(e, o);

						function i(e) {
							u(n, t, r, i, a, "next", e)
						}

						function a(e) {
							u(n, t, r, i, a, "throw", e)
						}
						i(void 0)
					})
				}
			}, t.exports.default = t.exports, t.exports.__esModule = !0
		}, {}],
		5: [function(e, t, r) {
			t.exports = function(e, t) {
				if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
			}, t.exports.default = t.exports, t.exports.__esModule = !0
		}, {}],
		6: [function(e, n, t) {
			var i = e("./setPrototypeOf.js"),
				a = e("./isNativeReflectConstruct.js");

			function o(e, t, r) {
				return a() ? n.exports = o = Reflect.construct : n.exports = o = function(e, t, r) {
					var n = [null];
					n.push.apply(n, t);
					n = new(Function.bind.apply(e, n));
					return r && i(n, r.prototype), n
				}, n.exports.default = n.exports, n.exports.__esModule = !0, o.apply(null,
					arguments)
			}
			n.exports = o, n.exports.default = n.exports, n.exports.__esModule = !0
		}, {
			"./isNativeReflectConstruct.js": 12,
			"./setPrototypeOf.js": 16
		}],
		7: [function(e, t, r) {
			function n(e, t) {
				for (var r = 0; r < t.length; r++) {
					var n = t[r];
					n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n
						.writable = !0), Object.defineProperty(e, n.key, n)
				}
			}
			t.exports = function(e, t, r) {
				return t && n(e.prototype, t), r && n(e, r), e
			}, t.exports.default = t.exports, t.exports.__esModule = !0
		}, {}],
		8: [function(e, t, r) {
			function n(e) {
				return t.exports = n = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
					return e.__proto__ || Object.getPrototypeOf(e)
				}, t.exports.default = t.exports, t.exports.__esModule = !0, n(e)
			}
			t.exports = n, t.exports.default = t.exports, t.exports.__esModule = !0
		}, {}],
		9: [function(e, t, r) {
			var n = e("./setPrototypeOf.js");
			t.exports = function(e, t) {
				if ("function" != typeof t && null !== t) throw new TypeError(
					"Super expression must either be null or a function");
				e.prototype = Object.create(t && t.prototype, {
					constructor: {
						value: e,
						writable: !0,
						configurable: !0
					}
				}), t && n(e, t)
			}, t.exports.default = t.exports, t.exports.__esModule = !0
		}, {
			"./setPrototypeOf.js": 16
		}],
		10: [function(e, t, r) {
			t.exports = function(e) {
				return e && e.__esModule ? e : {
					default: e
				}
			}, t.exports.default = t.exports, t.exports.__esModule = !0
		}, {}],
		11: [function(e, t, r) {
			t.exports = function(e) {
				return -1 !== Function.toString.call(e).indexOf("[native code]")
			}, t.exports.default = t.exports, t.exports.__esModule = !0
		}, {}],
		12: [function(e, t, r) {
			t.exports = function() {
				if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
				if (Reflect.construct.sham) return !1;
				if ("function" == typeof Proxy) return !0;
				try {
					return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [],
						function() {})), !0
				} catch (e) {
					return !1
				}
			}, t.exports.default = t.exports, t.exports.__esModule = !0
		}, {}],
		13: [function(e, t, r) {
			t.exports = function(e, t) {
				var r = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] ||
					e["@@iterator"];
				if (null != r) {
					var n, i, a = [],
						o = !0,
						s = !1;
					try {
						for (r = r.call(e); !(o = (n = r.next()).done) && (a.push(n.value), !
								t || a.length !== t); o = !0);
					} catch (e) {
						s = !0, i = e
					} finally {
						try {
							o || null == r.return || r.return()
						} finally {
							if (s) throw i
						}
					}
					return a
				}
			}, t.exports.default = t.exports, t.exports.__esModule = !0
		}, {}],
		14: [function(e, t, r) {
			t.exports = function() {
				throw new TypeError(
					"Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
					)
			}, t.exports.default = t.exports, t.exports.__esModule = !0
		}, {}],
		15: [function(e, t, r) {
			var n = e("@babel/runtime/helpers/typeof").default,
				i = e("./assertThisInitialized.js");
			t.exports = function(e, t) {
				if (t && ("object" === n(t) || "function" == typeof t)) return t;
				if (void 0 !== t) throw new TypeError(
					"Derived constructors may only return object or undefined");
				return i(e)
			}, t.exports.default = t.exports, t.exports.__esModule = !0
		}, {
			"./assertThisInitialized.js": 3,
			"@babel/runtime/helpers/typeof": 18
		}],
		16: [function(e, r, t) {
			function n(e, t) {
				return r.exports = n = Object.setPrototypeOf || function(e, t) {
					return e.__proto__ = t, e
				}, r.exports.default = r.exports, r.exports.__esModule = !0, n(e, t)
			}
			r.exports = n, r.exports.default = r.exports, r.exports.__esModule = !0
		}, {}],
		17: [function(e, t, r) {
			var n = e("./arrayWithHoles.js"),
				i = e("./iterableToArrayLimit.js"),
				a = e("./unsupportedIterableToArray.js"),
				o = e("./nonIterableRest.js");
			t.exports = function(e, t) {
				return n(e) || i(e, t) || a(e, t) || o()
			}, t.exports.default = t.exports, t.exports.__esModule = !0
		}, {
			"./arrayWithHoles.js": 2,
			"./iterableToArrayLimit.js": 13,
			"./nonIterableRest.js": 14,
			"./unsupportedIterableToArray.js": 19
		}],
		18: [function(e, t, r) {
			function n(e) {
				return "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? t
					.exports = n = function(e) {
						return typeof e
					} : t.exports = n = function(e) {
						return e && "function" == typeof Symbol && e.constructor === Symbol && e !==
							Symbol.prototype ? "symbol" : typeof e
					}, t.exports.default = t.exports, t.exports.__esModule = !0, n(e)
			}
			t.exports = n, t.exports.default = t.exports, t.exports.__esModule = !0
		}, {}],
		19: [function(e, t, r) {
			var n = e("./arrayLikeToArray.js");
			t.exports = function(e, t) {
				if (e) {
					if ("string" == typeof e) return n(e, t);
					var r = Object.prototype.toString.call(e).slice(8, -1);
					return "Map" === (r = "Object" === r && e.constructor ? e.constructor.name :
							r) || "Set" === r ? Array.from(e) : "Arguments" === r ||
						/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? n(e, t) : void 0
				}
			}, t.exports.default = t.exports, t.exports.__esModule = !0
		}, {
			"./arrayLikeToArray.js": 1
		}],
		20: [function(e, t, r) {
			var n = e("./getPrototypeOf.js"),
				i = e("./setPrototypeOf.js"),
				a = e("./isNativeFunction.js"),
				o = e("./construct.js");

			function s(e) {
				var r = "function" == typeof Map ? new Map : void 0;
				return t.exports = s = function(e) {
					if (null === e || !a(e)) return e;
					if ("function" != typeof e) throw new TypeError(
						"Super expression must either be null or a function");
					if (void 0 !== r) {
						if (r.has(e)) return r.get(e);
						r.set(e, t)
					}

					function t() {
						return o(e, arguments, n(this).constructor)
					}
					return t.prototype = Object.create(e.prototype, {
						constructor: {
							value: t,
							enumerable: !1,
							writable: !0,
							configurable: !0
						}
					}), i(t, e)
				}, t.exports.default = t.exports, t.exports.__esModule = !0, s(e)
			}
			t.exports = s, t.exports.default = t.exports, t.exports.__esModule = !0
		}, {
			"./construct.js": 6,
			"./getPrototypeOf.js": 8,
			"./isNativeFunction.js": 11,
			"./setPrototypeOf.js": 16
		}],
		21: [function(e, t, r) {
			t.exports = e("regenerator-runtime")
		}, {
			"regenerator-runtime": 22
		}],
		22: [function(e, t, r) {
			t = function(o) {
				"use strict";
				var u, e = Object.prototype,
					c = e.hasOwnProperty,
					t = "function" == typeof Symbol ? Symbol : {},
					n = t.iterator || "@@iterator",
					r = t.asyncIterator || "@@asyncIterator",
					i = t.toStringTag || "@@toStringTag";

				function a(e, t, r) {
					return Object.defineProperty(e, t, {
						value: r,
						enumerable: !0,
						configurable: !0,
						writable: !0
					}), e[t]
				}
				try {
					a({}, "")
				} catch (e) {
					a = function(e, t, r) {
						return e[t] = r
					}
				}

				function s(e, t, r, n) {
					var i, a, o, s, t = t && t.prototype instanceof b ? t : b,
						t = Object.create(t.prototype),
						n = new k(n || []);
					return t._invoke = (i = e, a = r, o = n, s = d, function(e, t) {
						if (s === p) throw new Error("Generator is already running");
						if (s === h) {
							if ("throw" === e) throw t;
							return j()
						}
						for (o.method = e, o.arg = t;;) {
							var r = o.delegate;
							if (r) {
								var n = function e(t, r) {
									var n = t.iterator[r.method];
									if (n === u) {
										if (r.delegate = null, "throw" === r
											.method) {
											if (t.iterator.return && (r.method =
													"return", r.arg = u, e(t, r),
													"throw" === r.method)) return m;
											r.method = "throw", r.arg =
												new TypeError(
													"The iterator does not provide a 'throw' method"
													)
										}
										return m
									}
									var n = l(n, t.iterator, r.arg);
									if ("throw" === n.type) return r.method =
										"throw", r.arg = n.arg, r.delegate =
										null, m;
									n = n.arg;
									if (!n) return r.method = "throw", r.arg =
										new TypeError(
											"iterator result is not an object"),
										r.delegate = null, m; {
										if (!n.done) return n;
										r[t.resultName] = n.value, r.next = t
											.nextLoc, "return" !== r.method && (r
												.method = "next", r.arg = u)
									}
									r.delegate = null;
									return m
								}(r, o);
								if (n) {
									if (n === m) continue;
									return n
								}
							}
							if ("next" === o.method) o.sent = o._sent = o.arg;
							else if ("throw" === o.method) {
								if (s === d) throw s = h, o.arg;
								o.dispatchException(o.arg)
							} else "return" === o.method && o.abrupt("return", o.arg);
							s = p;
							n = l(i, a, o);
							if ("normal" === n.type) {
								if (s = o.done ? h : f, n.arg !== m) return {
									value: n.arg,
									done: o.done
								}
							} else "throw" === n.type && (s = h, o.method = "throw", o
								.arg = n.arg)
						}
					}), t
				}

				function l(e, t, r) {
					try {
						return {
							type: "normal",
							arg: e.call(t, r)
						}
					} catch (e) {
						return {
							type: "throw",
							arg: e
						}
					}
				}
				o.wrap = s;
				var d = "suspendedStart",
					f = "suspendedYield",
					p = "executing",
					h = "completed",
					m = {};

				function b() {}

				function v() {}

				function g() {}
				var _ = {};
				a(_, n, function() {
					return this
				});
				t = Object.getPrototypeOf, t = t && t(t(E([])));
				t && t !== e && c.call(t, n) && (_ = t);
				var y = g.prototype = b.prototype = Object.create(_);

				function S(e) {
					["next", "throw", "return"].forEach(function(t) {
						a(e, t, function(e) {
							return this._invoke(t, e)
						})
					})
				}

				function P(o, s) {
					var t;
					this._invoke = function(r, n) {
						function e() {
							return new s(function(e, t) {
								! function t(e, r, n, i) {
									e = l(o[e], o, r);
									if ("throw" !== e.type) {
										var a = e.arg;
										return (r = a.value) && "object" ==
											typeof r && c.call(r, "__await") ? s
											.resolve(r.__await).then(function(e) {
												t("next", e, n, i)
											}, function(e) {
												t("throw", e, n, i)
											}) : s.resolve(r).then(function(e) {
												a.value = e, n(a)
											}, function(e) {
												return t("throw", e, n, i)
											})
									}
									i(e.arg)
								}(r, n, e, t)
							})
						}
						return t = t ? t.then(e, e) : e()
					}
				}

				function w(e) {
					var t = {
						tryLoc: e[0]
					};
					1 in e && (t.catchLoc = e[1]), 2 in e && (t.finallyLoc = e[2], t.afterLoc =
						e[3]), this.tryEntries.push(t)
				}

				function C(e) {
					var t = e.completion || {};
					t.type = "normal", delete t.arg, e.completion = t
				}

				function k(e) {
					this.tryEntries = [{
						tryLoc: "root"
					}], e.forEach(w, this), this.reset(!0)
				}

				function E(t) {
					if (t) {
						var e = t[n];
						if (e) return e.call(t);
						if ("function" == typeof t.next) return t;
						if (!isNaN(t.length)) {
							var r = -1,
								e = function e() {
									for (; ++r < t.length;)
										if (c.call(t, r)) return e.value = t[r], e.done = !1, e;
									return e.value = u, e.done = !0, e
								};
							return e.next = e
						}
					}
					return {
						next: j
					}
				}

				function j() {
					return {
						value: u,
						done: !0
					}
				}
				return a(y, "constructor", v.prototype = g), a(g, "constructor", v), v
					.displayName = a(g, i, "GeneratorFunction"), o.isGeneratorFunction =
					function(e) {
						e = "function" == typeof e && e.constructor;
						return !!e && (e === v || "GeneratorFunction" === (e.displayName || e
							.name))
					}, o.mark = function(e) {
						return Object.setPrototypeOf ? Object.setPrototypeOf(e, g) : (e
								.__proto__ = g, a(e, i, "GeneratorFunction")), e.prototype =
							Object.create(y), e
					}, o.awrap = function(e) {
						return {
							__await: e
						}
					}, S(P.prototype), a(P.prototype, r, function() {
						return this
					}), o.AsyncIterator = P, o.async = function(e, t, r, n, i) {
						void 0 === i && (i = Promise);
						var a = new P(s(e, t, r, n), i);
						return o.isGeneratorFunction(t) ? a : a.next().then(function(e) {
							return e.done ? e.value : a.next()
						})
					}, S(y), a(y, i, "Generator"), a(y, n, function() {
						return this
					}), a(y, "toString", function() {
						return "[object Generator]"
					}), o.keys = function(r) {
						var e, n = [];
						for (e in r) n.push(e);
						return n.reverse(),
							function e() {
								for (; n.length;) {
									var t = n.pop();
									if (t in r) return e.value = t, e.done = !1, e
								}
								return e.done = !0, e
							}
					}, o.values = E, k.prototype = {
						constructor: k,
						reset: function(e) {
							if (this.prev = 0, this.next = 0, this.sent = this._sent = u,
								this.done = !1, this.delegate = null, this.method = "next",
								this.arg = u, this.tryEntries.forEach(C), !e)
								for (var t in this) "t" === t.charAt(0) && c.call(this,
									t) && !isNaN(+t.slice(1)) && (this[t] = u)
						},
						stop: function() {
							this.done = !0;
							var e = this.tryEntries[0].completion;
							if ("throw" === e.type) throw e.arg;
							return this.rval
						},
						dispatchException: function(r) {
							if (this.done) throw r;
							var n = this;

							function e(e, t) {
								return a.type = "throw", a.arg = r, n.next = e, t && (n
									.method = "next", n.arg = u), !!t
							}
							for (var t = this.tryEntries.length - 1; 0 <= t; --t) {
								var i = this.tryEntries[t],
									a = i.completion;
								if ("root" === i.tryLoc) return e("end");
								if (i.tryLoc <= this.prev) {
									var o = c.call(i, "catchLoc"),
										s = c.call(i, "finallyLoc");
									if (o && s) {
										if (this.prev < i.catchLoc) return e(i.catchLoc, !
										0);
										if (this.prev < i.finallyLoc) return e(i.finallyLoc)
									} else if (o) {
										if (this.prev < i.catchLoc) return e(i.catchLoc, !0)
									} else {
										if (!s) throw new Error(
											"try statement without catch or finally"
											);
										if (this.prev < i.finallyLoc) return e(i.finallyLoc)
									}
								}
							}
						},
						abrupt: function(e, t) {
							for (var r = this.tryEntries.length - 1; 0 <= r; --r) {
								var n = this.tryEntries[r];
								if (n.tryLoc <= this.prev && c.call(n, "finallyLoc") && this
									.prev < n.finallyLoc) {
									var i = n;
									break
								}
							}
							var a = (i = i && ("break" === e || "continue" === e) && i
									.tryLoc <= t && t <= i.finallyLoc ? null : i) ? i
								.completion : {};
							return a.type = e, a.arg = t, i ? (this.method = "next", this
								.next = i.finallyLoc, m) : this.complete(a)
						},
						complete: function(e, t) {
							if ("throw" === e.type) throw e.arg;
							return "break" === e.type || "continue" === e.type ? this.next =
								e.arg : "return" === e.type ? (this.rval = this.arg = e.arg,
									this.method = "return", this.next = "end") :
								"normal" === e.type && t && (this.next = t), m
						},
						finish: function(e) {
							for (var t = this.tryEntries.length - 1; 0 <= t; --t) {
								var r = this.tryEntries[t];
								if (r.finallyLoc === e) return this.complete(r.completion, r
									.afterLoc), C(r), m
							}
						},
						catch: function(e) {
							for (var t = this.tryEntries.length - 1; 0 <= t; --t) {
								var r = this.tryEntries[t];
								if (r.tryLoc === e) {
									var n, i = r.completion;
									return "throw" === i.type && (n = i.arg, C(r)), n
								}
							}
							throw new Error("illegal catch attempt")
						},
						delegateYield: function(e, t, r) {
							return this.delegate = {
								iterator: E(e),
								resultName: t,
								nextLoc: r
							}, "next" === this.method && (this.arg = u), m
						}
					}, o
			}("object" == typeof t ? t.exports : {});
			try {
				regeneratorRuntime = t
			} catch (e) {
				"object" == typeof globalThis ? globalThis.regeneratorRuntime = t : Function("r",
					"regeneratorRuntime = r")(t)
			}
		}, {}],
		23: [function(e, t, r) {
			"use strict";
			Object.defineProperty(r, "__esModule", {
				value: !0
			}), r.Base64 = void 0;
			var n = function() {
				for (var t, r, i = -1, a = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J",
						"K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W",
						"X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j",
						"k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w",
						"x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9",
						"+", "/"
					], n = [], e = 0; e < a.length; e += 1) n[a[e]] = e;

				function o(e) {
					t = e, r = 0
				}

				function s() {
					if (!t) return i;
					if (r >= t.length) return i;
					var e = 255 & t.charCodeAt(r);
					return r += 1, e
				}

				function u() {
					if (!t) return i;
					for (;;) {
						if (r >= t.length) return i;
						var e = t.charAt(r);
						if (r += 1, n[e]) return n[e];
						if ("A" === e) return 0
					}
				}

				function c(e) {
					return e = "%" + (e = 1 === (e = e.toString(16)).length ? "0" + e : e),
						unescape(e)
				}
				return {
					encodeBase64: function(e) {
						o(e);
						for (var t = "", r = new Array(3), n = !1; !n && (r[0] = s()) !==
							i;) r[1] = s(), r[2] = s(), t += a[r[0] >> 2], r[1] !== i ? (
							t += a[r[0] << 4 & 48 | r[1] >> 4], r[2] !== i ? (t += a[r[
								1] << 2 & 60 | r[2] >> 6], t += a[63 & r[2]]) : (t += a[
								r[1] << 2 & 60], t += "=", n = !0)) : (t += a[r[0] <<
							4 & 48], t += "=", t += "=", n = !0);
						return t
					},
					decodeBase64: function(e) {
						o(e);
						for (var t = "", r = new Array(4), n = !1; !n && (r[0] = u()) !==
							i && (r[1] = u()) !== i;) r[2] = u(), r[3] = u(), t += c(r[0] <<
							2 & 255 | r[1] >> 4), r[2] !== i ? (t += c(r[1] << 4 & 255 |
								r[2] >> 2), r[3] !== i ? t += c(r[2] << 6 & 255 | r[
							3]) : n = !0) : n = !0;
						return t
					}
				}
			}();
			r.Base64 = n
		}, {}],
		24: [function(e, t, r) {
			"use strict";
			var n = e("@babel/runtime/helpers/interopRequireDefault");
			Object.defineProperty(r, "__esModule", {
					value: !0
				}), r.VideoEncodingParameters = r.VideoCodecParameters = r.VideoCodec = r
				.AudioEncodingParameters = r.AudioCodecParameters = r.AudioCodec = void 0;
			var i = n(e("@babel/runtime/helpers/classCallCheck"));
			r.AudioCodec = {
				PCMU: "pcmu",
				PCMA: "pcma",
				OPUS: "opus",
				G722: "g722",
				ISAC: "iSAC",
				ILBC: "iLBC",
				AAC: "aac",
				AC3: "ac3",
				NELLYMOSER: "nellymoser"
			}, r.AudioCodecParameters = function e(t, r, n) {
				(0, i.default)(this, e), this.name = t, this.channelCount = r, this.clockRate =
					n
			}, r.AudioEncodingParameters = function e(t, r) {
				(0, i.default)(this, e), this.codec = t, this.maxBitrate = r
			};
			r.VideoCodec = {
				VP8: "vp8",
				VP9: "vp9",
				H264: "h264",
				H265: "h265",
				AV1: "av1",
				AV1X: "av1x"
			}, r.VideoCodecParameters = function e(t, r) {
				(0, i.default)(this, e), this.name = t, this.profile = r
			}, r.VideoEncodingParameters = function e(t, r) {
				(0, i.default)(this, e), this.codec = t, this.maxBitrate = r
			}
		}, {
			"@babel/runtime/helpers/classCallCheck": 5,
			"@babel/runtime/helpers/interopRequireDefault": 10
		}],
		25: [function(e, t, r) {
			"use strict";
			var n = e("@babel/runtime/helpers/interopRequireDefault");
			Object.defineProperty(r, "__esModule", {
					value: !0
				}), r.OwtEvent = r.MuteEvent = r.MessageEvent = r.EventDispatcher = r.ErrorEvent =
				void 0;
			var i = n(e("@babel/runtime/helpers/inherits")),
				a = n(e("@babel/runtime/helpers/possibleConstructorReturn")),
				o = n(e("@babel/runtime/helpers/getPrototypeOf")),
				s = n(e("@babel/runtime/helpers/classCallCheck"));

			function u(r) {
				var n = function() {
					if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
					if (Reflect.construct.sham) return !1;
					if ("function" == typeof Proxy) return !0;
					try {
						return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [],
							function() {})), !0
					} catch (e) {
						return !1
					}
				}();
				return function() {
					var e, t = (0, o.default)(r);
					return t = n ? (e = (0, o.default)(this).constructor, Reflect.construct(t,
						arguments, e)) : t.apply(this, arguments), (0, a.default)(this, t)
				}
			}
			r.EventDispatcher = function() {
				var r = {
					dispatcher: {}
				};
				r.dispatcher.eventListeners = {}, this.addEventListener = function(e, t) {
					void 0 === r.dispatcher.eventListeners[e] && (r.dispatcher
						.eventListeners[e] = []), r.dispatcher.eventListeners[e].push(t)
				}, this.removeEventListener = function(e, t) {
					!r.dispatcher.eventListeners[e] || -1 !== (t = r.dispatcher
							.eventListeners[e].indexOf(t)) && r.dispatcher.eventListeners[e]
						.splice(t, 1)
				}, this.clearEventListener = function(e) {
					r.dispatcher.eventListeners[e] = []
				}, this.dispatchEvent = function(t) {
					r.dispatcher.eventListeners[t.type] && r.dispatcher.eventListeners[t
						.type].map(function(e) {
						e(t)
					})
				}
			};

			function c(e) {
				(0, s.default)(this, c), this.type = e
			}
			r.OwtEvent = c;
			e = function() {
				(0, i.default)(n, c);
				var r = u(n);

				function n(e, t) {
					return (0, s.default)(this, n), (e = r.call(this, e)).origin = t.origin, e
						.message = t.message, e.to = t.to, e
				}
				return n
			}();
			r.MessageEvent = e;
			e = function() {
				(0, i.default)(n, c);
				var r = u(n);

				function n(e, t) {
					return (0, s.default)(this, n), (e = r.call(this, e)).error = t.error, e
				}
				return n
			}();
			r.ErrorEvent = e;
			e = function() {
				(0, i.default)(n, c);
				var r = u(n);

				function n(e, t) {
					return (0, s.default)(this, n), (e = r.call(this, e)).kind = t.kind, e
				}
				return n
			}();
			r.MuteEvent = e
		}, {
			"@babel/runtime/helpers/classCallCheck": 5,
			"@babel/runtime/helpers/getPrototypeOf": 8,
			"@babel/runtime/helpers/inherits": 9,
			"@babel/runtime/helpers/interopRequireDefault": 10,
			"@babel/runtime/helpers/possibleConstructorReturn": 15
		}],
		26: [function(e, t, r) {
			"use strict";
			Object.defineProperty(r, "__esModule", {
				value: !0
			});
			var n = e("./mediastream-factory.js");
			Object.keys(n).forEach(function(e) {
				"default" !== e && "__esModule" !== e && (e in r && r[e] === n[e] || Object
					.defineProperty(r, e, {
						enumerable: !0,
						get: function() {
							return n[e]
						}
					}))
			});
			var i = e("./stream.js");
			Object.keys(i).forEach(function(e) {
				"default" !== e && "__esModule" !== e && (e in r && r[e] === i[e] || Object
					.defineProperty(r, e, {
						enumerable: !0,
						get: function() {
							return i[e]
						}
					}))
			});
			var a = e("./mediaformat.js");
			Object.keys(a).forEach(function(e) {
				"default" !== e && "__esModule" !== e && (e in r && r[e] === a[e] || Object
					.defineProperty(r, e, {
						enumerable: !0,
						get: function() {
							return a[e]
						}
					}))
			});
			var o = e("./transport.js");
			Object.keys(o).forEach(function(e) {
				"default" !== e && "__esModule" !== e && (e in r && r[e] === o[e] || Object
					.defineProperty(r, e, {
						enumerable: !0,
						get: function() {
							return o[e]
						}
					}))
			})
		}, {
			"./mediaformat.js": 28,
			"./mediastream-factory.js": 29,
			"./stream.js": 32,
			"./transport.js": 33
		}],
		27: [function(e, t, r) {
			"use strict";
			Object.defineProperty(r, "__esModule", {
				value: !0
			}), r.default = void 0;
			var n, i = (n = {
				DEBUG: 0,
				TRACE: 1,
				INFO: 2,
				WARNING: 3,
				ERROR: 4,
				NONE: 5,
				log: function() {
					for (var e, t = arguments.length, r = new Array(t), n = 0; n <
						t; n++) r[n] = arguments[n];
					(e = window.console).log.apply(e, [(new Date).toISOString()].concat(
						r))
				}
			}, s(4), n.setLogLevel = s, n);

			function a() {}

			function o(i) {
				return "function" == typeof window.console[i] ? function() {
					for (var e, t = arguments.length, r = new Array(t), n = 0; n < t; n++) r[
						n] = arguments[n];
					(e = window.console)[i].apply(e, [(new Date).toISOString()].concat(r))
				} : n.log
			}

			function s(e) {
				n.debug = e <= 0 ? o("debug") : a, n.trace = e <= 1 ? o("trace") : a, n.info = e <=
					2 ? o("info") : a, n.warning = e <= 3 ? o("warn") : a, n.error = e <= 4 ? o(
						"error") : a
			}
			r.default = i
		}, {}],
		28: [function(e, t, r) {
			"use strict";
			var n = e("@babel/runtime/helpers/interopRequireDefault");
			Object.defineProperty(r, "__esModule", {
				value: !0
			}), r.VideoSourceInfo = r.TrackKind = r.Resolution = r.AudioSourceInfo = void 0;
			var i = n(e("@babel/runtime/helpers/classCallCheck"));
			r.AudioSourceInfo = {
				MIC: "mic",
				SCREENCAST: "screen-cast",
				FILE: "file",
				MIXED: "mixed"
			};
			r.VideoSourceInfo = {
				CAMERA: "camera",
				SCREENCAST: "screen-cast",
				FILE: "file",
				MIXED: "mixed"
			};
			r.TrackKind = {
				AUDIO: "audio",
				VIDEO: "video",
				AUDIO_AND_VIDEO: "av"
			}, r.Resolution = function e(t, r) {
				(0, i.default)(this, e), this.width = t, this.height = r
			}
		}, {
			"@babel/runtime/helpers/classCallCheck": 5,
			"@babel/runtime/helpers/interopRequireDefault": 10
		}],
		29: [function(e, t, r) {
			"use strict";
			var n = e("@babel/runtime/helpers/interopRequireDefault"),
				o = e("@babel/runtime/helpers/typeof");
			Object.defineProperty(r, "__esModule", {
					value: !0
				}), r.VideoTrackConstraints = r.StreamConstraints = r.MediaStreamFactory = r
				.AudioTrackConstraints = void 0;
			var i = n(e("@babel/runtime/helpers/createClass")),
				a = n(e("@babel/runtime/helpers/typeof")),
				s = n(e("@babel/runtime/helpers/classCallCheck")),
				u = d(e("./utils.js")),
				c = d(e("./mediaformat.js"));

			function l(e) {
				if ("function" != typeof WeakMap) return null;
				var t = new WeakMap,
					r = new WeakMap;
				return (l = function(e) {
					return e ? r : t
				})(e)
			}

			function d(e, t) {
				if (!t && e && e.__esModule) return e;
				if (null === e || "object" !== o(e) && "function" != typeof e) return {
					default: e
				};
				t = l(t);
				if (t && t.has(e)) return t.get(e);
				var r, n, i = {},
					a = Object.defineProperty && Object.getOwnPropertyDescriptor;
				for (r in e) "default" !== r && Object.prototype.hasOwnProperty.call(e, r) && ((n =
						a ? Object.getOwnPropertyDescriptor(e, r) : null) && (n.get || n.set) ?
					Object.defineProperty(i, r, n) : i[r] = e[r]);
				return i.default = e, t && t.set(e, i), i
			}

			function f(e) {
				return "object" === (0, a.default)(e.video) && e.video.source === c.VideoSourceInfo
					.SCREENCAST
			}
			r.AudioTrackConstraints = function e(t) {
				if ((0, s.default)(this, e), !Object.values(c.AudioSourceInfo).some(function(
					e) {
						return e === t
					})) throw new TypeError("Invalid source.");
				this.source = t, this.deviceId = void 0
			}, r.VideoTrackConstraints = function e(t) {
				if ((0, s.default)(this, e), !Object.values(c.VideoSourceInfo).some(function(
					e) {
						return e === t
					})) throw new TypeError("Invalid source.");
				this.source = t, this.deviceId = void 0, this.resolution = void 0, this
					.frameRate = void 0
			}, r.StreamConstraints = function e() {
				var t = 0 < arguments.length && void 0 !== arguments[0] && arguments[0],
					r = 1 < arguments.length && void 0 !== arguments[1] && arguments[1];
				(0, s.default)(this, e), this.audio = t, this.video = r
			}, r.MediaStreamFactory = function() {
				function e() {
					(0, s.default)(this, e)
				}
				return (0, i.default)(e, null, [{
					key: "createMediaStream",
					value: function(e) {
						if ("object" !== (0, a.default)(e) || !e.audio && !e
							.video) return Promise.reject(new TypeError(
							"Invalid constrains"));
						if (!f(e) && "object" === (0, a.default)(e.audio) && e
							.audio.source === c.AudioSourceInfo.SCREENCAST)
							return Promise.reject(new TypeError(
								"Cannot share screen without video."));
						if (f(e) && "object" === (0, a.default)(e.audio) && e
							.audio.source !== c.AudioSourceInfo.SCREENCAST)
							return Promise.reject(new TypeError(
								"Cannot capture video from screen cast while capture audio from other source."
								));
						if (!e.audio && !e.video) return Promise.reject(
							new TypeError(
								"At least one of audio and video must be requested."
								));
						var t = Object.create({});
						return "object" === (0, a.default)(e.audio) && e.audio
							.source === c.AudioSourceInfo.MIC ? (t.audio =
								Object.create({}), u.isEdge() ? t.audio
								.deviceId = e.audio.deviceId : t.audio
								.deviceId = {
									exact: e.audio.deviceId
								}) : e.audio.source === c.AudioSourceInfo
							.SCREENCAST ? t.audio = !0 : t.audio = e.audio,
							"object" === (0, a.default)(e.video) ? (t.video =
								Object.create({}), "number" == typeof e.video
								.frameRate && (t.video.frameRate = e.video
									.frameRate), e.video.resolution && e.video
								.resolution.width && e.video.resolution
								.height && (e.video.source === c.VideoSourceInfo
									.SCREENCAST ? (t.video.width = e.video
										.resolution.width, t.video.height = e
										.video.resolution.height) : (t.video
										.width = Object.create({}), t.video
										.width.exact = e.video.resolution.width,
										t.video.height = Object.create({}), t
										.video.height.exact = e.video.resolution
										.height)), "string" == typeof e.video
								.deviceId && (t.video.deviceId = {
									exact: e.video.deviceId
								}), u.isFirefox() && e.video.source === c
								.VideoSourceInfo.SCREENCAST && (t.video
									.mediaSource = "screen")) : t.video = e
							.video, f(e) ? navigator.mediaDevices
							.getDisplayMedia(t) : navigator.mediaDevices
							.getUserMedia(t)
					}
				}]), e
			}()
		}, {
			"./mediaformat.js": 28,
			"./utils.js": 34,
			"@babel/runtime/helpers/classCallCheck": 5,
			"@babel/runtime/helpers/createClass": 7,
			"@babel/runtime/helpers/interopRequireDefault": 10,
			"@babel/runtime/helpers/typeof": 18
		}],
		30: [function(e, t, r) {
			"use strict";
			var n = e("@babel/runtime/helpers/interopRequireDefault"),
				o = e("@babel/runtime/helpers/typeof");
			Object.defineProperty(r, "__esModule", {
					value: !0
				}), r.VideoPublicationSettings = r.PublishOptions = r.PublicationSettings = r
				.Publication = r.AudioPublicationSettings = void 0;
			var c = n(e("@babel/runtime/helpers/assertThisInitialized")),
				i = n(e("@babel/runtime/helpers/inherits")),
				a = n(e("@babel/runtime/helpers/possibleConstructorReturn")),
				s = n(e("@babel/runtime/helpers/getPrototypeOf")),
				l = n(e("@babel/runtime/helpers/classCallCheck")),
				d = function(e, t) {
					if (!t && e && e.__esModule) return e;
					if (null === e || "object" !== o(e) && "function" != typeof e) return {
						default: e
					};
					t = u(t);
					if (t && t.has(e)) return t.get(e);
					var r, n = {},
						i = Object.defineProperty && Object.getOwnPropertyDescriptor;
					for (r in e) {
						var a;
						"default" !== r && Object.prototype.hasOwnProperty.call(e, r) && ((a = i ?
							Object.getOwnPropertyDescriptor(e, r) : null) && (a.get || a
							.set) ? Object.defineProperty(n, r, a) : n[r] = e[r])
					}
					n.default = e, t && t.set(e, n);
					return n
				}(e("./utils.js")),
				e = e("../base/event.js");

			function u(e) {
				if ("function" != typeof WeakMap) return null;
				var t = new WeakMap,
					r = new WeakMap;
				return (u = function(e) {
					return e ? r : t
				})(e)
			}

			function f(r) {
				var n = function() {
					if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
					if (Reflect.construct.sham) return !1;
					if ("function" == typeof Proxy) return !0;
					try {
						return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [],
							function() {})), !0
					} catch (e) {
						return !1
					}
				}();
				return function() {
					var e, t = (0, s.default)(r);
					return t = n ? (e = (0, s.default)(this).constructor, Reflect.construct(t,
						arguments, e)) : t.apply(this, arguments), (0, a.default)(this, t)
				}
			}
			r.AudioPublicationSettings = function e(t) {
				(0, l.default)(this, e), this.codec = t
			}, r.VideoPublicationSettings = function e(t, r, n, i, a, o) {
				(0, l.default)(this, e), this.codec = t, this.resolution = r, this.frameRate =
					n, this.bitrate = i, this.keyFrameInterval = a, this.rid = o
			}, r.PublicationSettings = function e(t, r) {
				(0, l.default)(this, e), this.audio = t, this.video = r
			};
			e = function(e) {
				(0, i.default)(u, e);
				var s = f(u);

				function u(e, t, r, n, i, a) {
					var o;
					return (0, l.default)(this, u), o = s.call(this), Object.defineProperty((0,
						c.default)(o), "id", {
						configurable: !1,
						writable: !1,
						value: e || d.createUuid()
					}), Object.defineProperty((0, c.default)(o), "transport", {
						configurable: !1,
						writable: !1,
						value: t
					}), o.stop = r, o.getStats = n, o.mute = i, o.unmute = a, o
				}
				return u
			}(e.EventDispatcher);
			r.Publication = e, r.PublishOptions = function e(t, r, n) {
				(0, l.default)(this, e), this.audio = t, this.video = r, this.transport = n
			}
		}, {
			"../base/event.js": 25,
			"./utils.js": 34,
			"@babel/runtime/helpers/assertThisInitialized": 3,
			"@babel/runtime/helpers/classCallCheck": 5,
			"@babel/runtime/helpers/getPrototypeOf": 8,
			"@babel/runtime/helpers/inherits": 9,
			"@babel/runtime/helpers/interopRequireDefault": 10,
			"@babel/runtime/helpers/possibleConstructorReturn": 15,
			"@babel/runtime/helpers/typeof": 18
		}],
		31: [function(e, t, r) {
			"use strict";
			var n = e("@babel/runtime/helpers/interopRequireDefault");
			Object.defineProperty(r, "__esModule", {
				value: !0
			}), r.addLegacySimulcast = function(e, t, n, r) {
				if (!(n && 1 < n)) return e;
				var i = e.split("\r\n"),
					a = null,
					o = null; {
					var s;
					"string" != typeof r || (s = E(i, r)) && (r = s.start, s = s.end, a = i
						.slice(0, r), o = i.slice(s), i = i.slice(r, s))
				}
				t = w(i, "m=", t);
				if (null === t) return e;
				var u = C(i, t + 1, -1, "m=");
				null === u && (u = i.length);
				var c = new Set,
					l = new Set,
					d = new Set,
					f = [],
					p = [],
					h = t + 1;
				for (; h < u;) {
					var m = i[h];
					if ("" === m) break;
					if (-1 < m.indexOf("a=ssrc:")) {
						var b = function(e) {
							return e.split(" ")[0].split(":")[1]
						}(i[h]);
						if (l.add(b), -1 < m.indexOf("cname") || -1 < m.indexOf("msid"))
							for (var v = 1; v < n; v++) {
								var g = parseInt(b) + v + "";
								f.push(m.replace(b, g))
							} else c.add(m)
					}
					if (-1 < m.indexOf("a=ssrc-group:FID")) {
						var _ = m.split(" ");
						d.add(_[2]);
						for (var y = 1; y < n; y++) {
							var S = parseInt(_[1]) + y + "",
								P = parseInt(_[2]) + y + "";
							p.push(m.replace(_[1], S).replace(_[2], P))
						}
					}
					h++
				}
				t = h;
				l.forEach(function(e) {
					if (!d.has(e)) {
						for (var t = (t = "a=ssrc-group:SIM") + " " + e, r = 1; r <
							n; r++) t = t + " " + (parseInt(e) + r);
						p.push(t)
					}
				}), f.sort(), i.splice.apply(i, [t, 0].concat(p)), i.splice.apply(i, [t, 0]
					.concat(f)), i = i.filter(function(e) {
					return !c.has(e)
				}), a && (i = a.concat(i).concat(o));
				return e = i.join("\r\n")
			}, r.reorderCodecs = function(e, t, r, n) {
				if (!r || 0 === r.length) return e;
				r = "audio" === t ? r.concat(P) : r.concat(k);
				var i = e.split("\r\n"),
					a = null,
					o = null; {
					var s;
					"string" != typeof n || (s = E(i, n)) && (n = s.start, u = s.end, a = i
						.slice(0, n), o = i.slice(u), i = i.slice(n, u))
				}
				var u = w(i, "m=", t);
				if (null === u) return e;
				t = i[u].split(" ");
				t.splice(0, 3);
				var c, l = [],
					d = _(r);
				try {
					for (d.s(); !(c = d.n()).done;)
						for (var f = c.value, p = 0; p < i.length; p++) {
							var h, m = C(i, p, -1, "a=rtpmap", f);
							null === m || (h = S(i[m])) && (l.push(h), p = m)
						}
				} catch (e) {
					d.e(e)
				} finally {
					d.f()
				}
				l = function(e, t) {
					var r, n = _(t);
					try {
						for (n.s(); !(r = n.n()).done;) {
							var i, a = r.value,
								o = w(e, "a=fmtp", "apt=" + a);
							null !== o && (i = y(e[o]), t.push(i.pt))
						}
					} catch (e) {
						n.e(e)
					} finally {
						n.f()
					}
					return t
				}(i, l), i[u] = function(e, t) {
					e = e.split(" ").slice(0, 3);
					return (e = e.concat(t)).join(" ")
				}(i[u], l);
				var b, v = _(t);
				try {
					for (v.s(); !(b = v.n()).done;) {
						var g = b.value; - 1 === l.indexOf(g) && (i = function(e, t) {
							for (var r = new RegExp("a=(rtpmap|rtcp-fb|fmtp):" + t +
									"\\s"), n = e.length - 1; 0 < n; n--) e[n].match(
								r) && e.splice(n, 1);
							return e
						}(i, g))
					}
				} catch (e) {
					v.e(e)
				} finally {
					v.f()
				}
				a && (i = a.concat(i).concat(o));
				return e = i.join("\r\n")
			}, r.setMaxBitrate = function(e, t, r) {
				var n, i = _(t);
				try {
					for (i.s(); !(n = i.n()).done;) {
						var a = n.value;
						a.maxBitrate && (e = o(e, a.codec.name, "x-google-max-bitrate", a
							.maxBitrate.toString(), r))
					}
				} catch (e) {
					i.e(e)
				} finally {
					i.f()
				}
				return e
			};
			n(e("./logger.js"));

			function _(e, t) {
				var r = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
				if (!r) {
					if (Array.isArray(e) || (r = function(e, t) {
							if (e) {
								if ("string" == typeof e) return s(e, t);
								var r = Object.prototype.toString.call(e).slice(8, -1);
								return "Map" === (r = "Object" === r && e.constructor ? e
										.constructor.name : r) || "Set" === r ? Array.from(e) :
									"Arguments" === r ||
									/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? s(e,
									t) : void 0
							}
						}(e)) || t && e && "number" == typeof e.length) {
						r && (e = r);
						var n = 0,
							t = function() {};
						return {
							s: t,
							n: function() {
								return n >= e.length ? {
									done: !0
								} : {
									done: !1,
									value: e[n++]
								}
							},
							e: function(e) {
								throw e
							},
							f: t
						}
					}
					throw new TypeError(
						"Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
						)
				}
				var i, a = !0,
					o = !1;
				return {
					s: function() {
						r = r.call(e)
					},
					n: function() {
						var e = r.next();
						return a = e.done, e
					},
					e: function(e) {
						o = !0, i = e
					},
					f: function() {
						try {
							a || null == r.return || r.return()
						} finally {
							if (o) throw i
						}
					}
				}
			}

			function s(e, t) {
				(null == t || t > e.length) && (t = e.length);
				for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
				return n
			}

			function o(e, t, r, n, i) {
				var a = e.split("\r\n"),
					o = null,
					s = null;
				"string" != typeof i || (u = E(a, i)) && (c = u.start, l = u.end, o = a.slice(0, c),
					s = a.slice(l), a = a.slice(c, l));
				var u = f(a = a.length <= 1 ? e.split("\n") : a, t),
					c = {};
				if (null === u) {
					var l = w(a, "a=rtpmap", t);
					if (null === l) return e;
					t = S(a[l]);
					c.pt = t.toString(), c.params = {}, c.params[r] = n, a.splice(l + 1, 0, d(c))
				} else(c = y(a[u])).params[r] = n, a[u] = d(c);
				return e = (a = o ? o.concat(a).concat(s) : a).join("\r\n")
			}

			function y(e) {
				var t = {},
					r = e.indexOf(" "),
					n = e.substring(r + 1).split(";"),
					r = new RegExp("a=fmtp:(\\d+)"),
					r = e.match(r);
				if (!r || 2 !== r.length) return null;
				t.pt = r[1];
				for (var i = {}, a = 0; a < n.length; ++a) {
					var o = n[a].split("=");
					2 === o.length && (i[o[0]] = o[1])
				}
				return t.params = i, t
			}

			function d(e) {
				if (!e.hasOwnProperty("pt") || !e.hasOwnProperty("params")) return null;
				var t, r = e.pt,
					n = e.params,
					i = [],
					a = 0;
				for (t in n) i[a] = t + "=" + n[t], ++a;
				return 0 === a ? null : "a=fmtp:" + r.toString() + " " + i.join(";")
			}

			function f(e, t) {
				t = function(e, t) {
					t = w(e, "a=rtpmap", t);
					return t ? S(e[t]) : null
				}(e, t);
				return t ? w(e, "a=fmtp:" + t.toString()) : null
			}

			function w(e, t, r) {
				return C(e, 0, -1, t, r)
			}

			function C(e, t, r, n, i) {
				for (var a = -1 !== r ? r : e.length, o = t; o < a; ++o)
					if (0 === e[o].indexOf(n) && (!i || -1 !== e[o].toLowerCase().indexOf(i
							.toLowerCase()))) return o;
				return null
			}

			function S(e) {
				var t = new RegExp("a=rtpmap:(\\d+) [a-zA-Z0-9-]+\\/\\d+"),
					t = e.match(t);
				return t && 2 === t.length ? t[1] : null
			}
			var P = ["CN", "telephone-event"],
				k = ["red", "ulpfec", "flexfec"];

			function E(e, t) {
				for (var r = "a=mid:" + t, n = w(e, r); 0 <= n && e[n] !== r;) n = C(e, n, -1, r);
				if (0 <= n) {
					for (var t = C(e, n, -1, "m=") || -1, i = -1, a = n; 0 <= a; a--)
						if (0 <= e[a].indexOf("m=")) {
							i = a;
							break
						} if (0 <= i) return {
						start: i,
						end: t
					}
				}
				return null
			}
		}, {
			"./logger.js": 27,
			"@babel/runtime/helpers/interopRequireDefault": 10
		}],
		32: [function(e, t, r) {
			"use strict";
			var n = e("@babel/runtime/helpers/interopRequireDefault"),
				o = e("@babel/runtime/helpers/typeof");
			Object.defineProperty(r, "__esModule", {
					value: !0
				}), r.StreamSourceInfo = r.StreamEvent = r.Stream = r.RemoteStream = r.LocalStream =
				void 0;
			var s = n(e("@babel/runtime/helpers/typeof")),
				u = n(e("@babel/runtime/helpers/assertThisInitialized")),
				c = n(e("@babel/runtime/helpers/inherits")),
				i = n(e("@babel/runtime/helpers/possibleConstructorReturn")),
				a = n(e("@babel/runtime/helpers/getPrototypeOf")),
				l = n(e("@babel/runtime/helpers/classCallCheck")),
				d = function(e, t) {
					if (!t && e && e.__esModule) return e;
					if (null === e || "object" !== o(e) && "function" != typeof e) return {
						default: e
					};
					t = f(t);
					if (t && t.has(e)) return t.get(e);
					var r, n = {},
						i = Object.defineProperty && Object.getOwnPropertyDescriptor;
					for (r in e) {
						var a;
						"default" !== r && Object.prototype.hasOwnProperty.call(e, r) && ((a = i ?
							Object.getOwnPropertyDescriptor(e, r) : null) && (a.get || a
							.set) ? Object.defineProperty(n, r, a) : n[r] = e[r])
					}
					n.default = e, t && t.set(e, n);
					return n
				}(e("./utils.js")),
				n = e("./event.js");

			function f(e) {
				if ("function" != typeof WeakMap) return null;
				var t = new WeakMap,
					r = new WeakMap;
				return (f = function(e) {
					return e ? r : t
				})(e)
			}

			function p(r) {
				var n = function() {
					if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
					if (Reflect.construct.sham) return !1;
					if ("function" == typeof Proxy) return !0;
					try {
						return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [],
							function() {})), !0
					} catch (e) {
						return !1
					}
				}();
				return function() {
					var e, t = (0, a.default)(r);
					return t = n ? (e = (0, a.default)(this).constructor, Reflect.construct(t,
						arguments, e)) : t.apply(this, arguments), (0, i.default)(this, t)
				}
			}

			function h(t, e) {
				return e.some(function(e) {
					return e === t
				})
			}
			r.StreamSourceInfo = function e(t, r, n) {
				if ((0, l.default)(this, e), !h(t, [void 0, "mic", "screen-cast", "file",
						"mixed"
					])) throw new TypeError("Incorrect value for audioSourceInfo");
				if (!h(r, [void 0, "camera", "screen-cast", "file", "encoded-file", "raw-file",
						"mixed"
					])) throw new TypeError("Incorrect value for videoSourceInfo");
				this.audio = t, this.video = r, this.data = n
			};
			var m = function(e) {
				(0, c.default)(a, e);
				var i = p(a);

				function a(e, t, r) {
					var n;
					if ((0, l.default)(this, a), n = i.call(this), e && !(
							e instanceof MediaStream) && !("function" ==
							typeof WebTransportBidirectionalStream &&
							e instanceof WebTransportBidirectionalStream) || "object" !== (0, s
							.default)(t)) throw new TypeError("Invalid stream or sourceInfo.");
					if (e && e instanceof MediaStream && (0 < e.getAudioTracks().length && !t
							.audio || 0 < e.getVideoTracks().length && !t.video))
					throw new TypeError("Missing audio source info or video source info.");
					return e instanceof MediaStream && Object.defineProperty((0, u.default)(n),
						"mediaStream", {
							configurable: !1,
							writable: !0,
							value: e
						}), Object.defineProperty((0, u.default)(n), "stream", {
						configurable: !1,
						writable: !0,
						value: e
					}), Object.defineProperty((0, u.default)(n), "source", {
						configurable: !1,
						writable: !1,
						value: t
					}), Object.defineProperty((0, u.default)(n), "attributes", {
						configurable: !0,
						writable: !1,
						value: r
					}), n
				}
				return a
			}(n.EventDispatcher);
			r.Stream = m;
			e = function() {
				(0, c.default)(i, m);
				var n = p(i);

				function i(e, t, r) {
					if ((0, l.default)(this, i), !e) throw new TypeError(
						"Stream cannot be null.");
					return r = n.call(this, e, t, r), Object.defineProperty((0, u.default)(r),
						"id", {
							configurable: !1,
							writable: !1,
							value: d.createUuid()
						}), r
				}
				return i
			}();
			r.LocalStream = e;
			e = function() {
				(0, c.default)(o, m);
				var a = p(o);

				function o(e, t, r, n, i) {
					return (0, l.default)(this, o), i = a.call(this, r, n, i), Object
						.defineProperty((0, u.default)(i), "id", {
							configurable: !1,
							writable: !1,
							value: e || d.createUuid()
						}), Object.defineProperty((0, u.default)(i), "origin", {
							configurable: !1,
							writable: !1,
							value: t
						}), i.settings = void 0, i.extraCapabilities = void 0, i
				}
				return o
			}();
			r.RemoteStream = e;
			n = function(e) {
				(0, c.default)(n, e);
				var r = p(n);

				function n(e, t) {
					return (0, l.default)(this, n), (e = r.call(this, e)).stream = t.stream, e
				}
				return n
			}(n.OwtEvent);
			r.StreamEvent = n
		}, {
			"./event.js": 25,
			"./utils.js": 34,
			"@babel/runtime/helpers/assertThisInitialized": 3,
			"@babel/runtime/helpers/classCallCheck": 5,
			"@babel/runtime/helpers/getPrototypeOf": 8,
			"@babel/runtime/helpers/inherits": 9,
			"@babel/runtime/helpers/interopRequireDefault": 10,
			"@babel/runtime/helpers/possibleConstructorReturn": 15,
			"@babel/runtime/helpers/typeof": 18
		}],
		33: [function(e, t, r) {
			"use strict";
			var n = e("@babel/runtime/helpers/interopRequireDefault");
			Object.defineProperty(r, "__esModule", {
				value: !0
			}), r.TransportType = r.TransportSettings = r.TransportConstraints = void 0;
			var i = n(e("@babel/runtime/helpers/classCallCheck"));
			r.TransportType = {
				QUIC: "quic",
				WEBRTC: "webrtc"
			}, r.TransportConstraints = function e(t, r) {
				(0, i.default)(this, e), this.type = t, this.id = r
			}, r.TransportSettings = function e(t, r) {
				(0, i.default)(this, e), this.type = t, this.id = r, this.rtpTransceivers =
					void 0
			}
		}, {
			"@babel/runtime/helpers/classCallCheck": 5,
			"@babel/runtime/helpers/interopRequireDefault": 10
		}],
		34: [function(e, t, r) {
			"use strict";
			Object.defineProperty(r, "__esModule", {
				value: !0
			}), r.createUuid = function() {
				return "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx".replace(/[xy]/g, function(e) {
					var t = 16 * Math.random() | 0;
					return ("x" === e ? t : 3 & t | 8).toString(16)
				})
			}, r.isChrome = function() {
				return null !== window.navigator.userAgent.match("Chrome")
			}, r.isEdge = function() {
				return null !== window.navigator.userAgent.match(/Edge\/(\d+).(\d+)$/)
			}, r.isFirefox = function() {
				return null !== window.navigator.userAgent.match("Firefox")
			}, r.isSafari = i, r.sysInfo = function() {
				var e = Object.create({});
				e.sdk = {
					version: n,
					type: "JavaScript"
				};
				var t = navigator.userAgent,
					r = /Chrome\/([0-9.]+)/.exec(t);
				r ? e.runtime = {
					name: "Chrome",
					version: r[1]
				} : (r = /Firefox\/([0-9.]+)/.exec(t)) ? e.runtime = {
					name: "Firefox",
					version: r[1]
				} : (r = /Edge\/([0-9.]+)/.exec(t)) ? e.runtime = {
					name: "Edge",
					version: r[1]
				} : i() ? (r = /Version\/([0-9.]+) Safari/.exec(t), e.runtime = {
					name: "Safari"
				}, e.runtime.version = r ? r[1] : "Unknown") : e.runtime = {
					name: "Unknown",
					version: "Unknown"
				};
				(r = /Windows NT ([0-9.]+)/.exec(t)) ? e.os = {
					name: "Windows NT",
					version: r[1]
				}: (r = /Intel Mac OS X ([0-9_.]+)/.exec(t)) ? e.os = {
					name: "Mac OS X",
					version: r[1].replace(/_/g, ".")
				} : (r = /iPhone OS ([0-9_.]+)/.exec(t)) ? e.os = {
					name: "iPhone OS",
					version: r[1].replace(/_/g, ".")
				} : (r = /X11; Linux/.exec(t)) ? e.os = {
					name: "Linux",
					version: "Unknown"
				} : (r = /Android( ([0-9.]+))?/.exec(t)) ? e.os = {
					name: "Android",
					version: r[1] || "Unknown"
				} : (r = /CrOS/.exec(t)) ? e.os = {
					name: "Chrome OS",
					version: "Unknown"
				} : e.os = {
					name: "Unknown",
					version: "Unknown"
				};
				return e.capabilities = {
					continualIceGathering: !1,
					streamRemovable: "Firefox" !== e.runtime.name,
					ignoreDataChannelAcks: !0
				}, e
			};
			var n = "5.0";

			function i() {
				return /^((?!chrome|android).)*safari/i.test(window.navigator.userAgent)
			}
		}, {}],
		35: [function(e, t, r) {
			"use strict";
			var n = e("@babel/runtime/helpers/interopRequireDefault"),
				o = e("@babel/runtime/helpers/typeof");
			Object.defineProperty(r, "__esModule", {
				value: !0
			}), r.ConferencePeerConnectionChannel = void 0;
			var C = n(e("@babel/runtime/regenerator")),
				s = n(e("@babel/runtime/helpers/slicedToArray")),
				k = n(e("@babel/runtime/helpers/typeof")),
				u = n(e("@babel/runtime/helpers/asyncToGenerator")),
				c = n(e("@babel/runtime/helpers/classCallCheck")),
				l = n(e("@babel/runtime/helpers/createClass")),
				d = n(e("@babel/runtime/helpers/inherits")),
				i = n(e("@babel/runtime/helpers/possibleConstructorReturn")),
				a = n(e("@babel/runtime/helpers/getPrototypeOf")),
				E = n(e("../base/logger.js")),
				j = e("../base/event.js"),
				f = e("../base/mediaformat.js"),
				p = e("../base/publication.js"),
				h = e("./subscription.js"),
				O = e("./error.js"),
				T = g(e("../base/utils.js")),
				m = g(e("../base/sdputils.js")),
				b = e("../base/transport.js");

			function v(e) {
				if ("function" != typeof WeakMap) return null;
				var t = new WeakMap,
					r = new WeakMap;
				return (v = function(e) {
					return e ? r : t
				})(e)
			}

			function g(e, t) {
				if (!t && e && e.__esModule) return e;
				if (null === e || "object" !== o(e) && "function" != typeof e) return {
					default: e
				};
				t = v(t);
				if (t && t.has(e)) return t.get(e);
				var r, n, i = {},
					a = Object.defineProperty && Object.getOwnPropertyDescriptor;
				for (r in e) "default" !== r && Object.prototype.hasOwnProperty.call(e, r) && ((n =
						a ? Object.getOwnPropertyDescriptor(e, r) : null) && (n.get || n.set) ?
					Object.defineProperty(i, r, n) : i[r] = e[r]);
				return i.default = e, t && t.set(e, i), i
			}

			function x(e, t) {
				var r = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
				if (!r) {
					if (Array.isArray(e) || (r = function(e, t) {
							if (e) {
								if ("string" == typeof e) return _(e, t);
								var r = Object.prototype.toString.call(e).slice(8, -1);
								return "Map" === (r = "Object" === r && e.constructor ? e
										.constructor.name : r) || "Set" === r ? Array.from(e) :
									"Arguments" === r ||
									/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? _(e,
									t) : void 0
							}
						}(e)) || t && e && "number" == typeof e.length) {
						r && (e = r);
						var n = 0,
							t = function() {};
						return {
							s: t,
							n: function() {
								return n >= e.length ? {
									done: !0
								} : {
									done: !1,
									value: e[n++]
								}
							},
							e: function(e) {
								throw e
							},
							f: t
						}
					}
					throw new TypeError(
						"Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
						)
				}
				var i, a = !0,
					o = !1;
				return {
					s: function() {
						r = r.call(e)
					},
					n: function() {
						var e = r.next();
						return a = e.done, e
					},
					e: function(e) {
						o = !0, i = e
					},
					f: function() {
						try {
							a || null == r.return || r.return()
						} finally {
							if (o) throw i
						}
					}
				}
			}

			function _(e, t) {
				(null == t || t > e.length) && (t = e.length);
				for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
				return n
			}

			function y(r) {
				var n = function() {
					if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
					if (Reflect.construct.sham) return !1;
					if ("function" == typeof Proxy) return !0;
					try {
						return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [],
							function() {})), !0
					} catch (e) {
						return !1
					}
				}();
				return function() {
					var e, t = (0, a.default)(r);
					return t = n ? (e = (0, a.default)(this).constructor, Reflect.construct(t,
						arguments, e)) : t.apply(this, arguments), (0, i.default)(this, t)
				}
			}
			e = function(e) {
				(0, d.default)(o, e);
				var r, n, i, a = y(o);

				function o(e, t) {
					var r;
					return (0, c.default)(this, o), (r = a.call(this)).pc = null, r._config = e,
						r._videoCodecs = void 0, r._options = null, r._videoCodecs = void 0, r
						._signaling = t, r._internalId = null, r._pendingCandidates = [], r
						._subscribePromises = new Map, r._publishPromises = new Map, r
						._publications = new Map, r._subscriptions = new Map, r
						._publishTransceivers = new Map, r._subscribeTransceivers = new Map, r
						._reverseIdMap = new Map, r._disconnectTimer = null, r._ended = !1, r
						._id = void 0, r._internalCount = 0, r._sdpPromise = Promise.resolve(),
						r._sdpResolverMap = new Map, r._sdpResolvers = [], r._sdpResolveNum = 0,
						r._remoteMediaStreams = new Map, r
				}
				return (0, l.default)(o, [{
					key: "onMessage",
					value: function(e, t) {
						switch (e) {
							case "progress":
								"soac" === t.status ? this._sdpHandler(t.data) :
									"ready" === t.status ? this._readyHandler(t
										.sessionId) : "error" === t.status &&
									this._errorHandler(t.sessionId, t.data);
								break;
							case "stream":
								this._onStreamEvent(t);
								break;
							default:
								E.default.warning(
									"Unknown notification from MCU.")
						}
					}
				}, {
					key: "publishWithTransceivers",
					value: (i = (0, u.default)(C.default.mark(function e(o, s) {
						var t, u, r, n, c = this;
						return C.default.wrap(function(e) {
							for (;;) switch (e.prev = e
								.next) {
								case 0:
									t = x(s), e.prev =
										1, r = C.default
										.mark(
											function e() {
												var t,
													r,
													n,
													i,
													a;
												return C
													.default
													.wrap(
														function(
															e
															) {
															for (;;)
																switch (
																	e
																	.prev =
																	e
																	.next
																	) {
																	case 0:
																		if ("sendonly" !==
																			(t = u
																				.value
																				)
																			.direction
																			)
																			return e
																				.abrupt(
																					"return", {
																						v: Promise
																							.reject(
																								"RTCRtpTransceiver's direction must be sendonly."
																								)
																					}
																					);
																		e.next =
																			3;
																		break;
																	case 3:
																		if (o
																			.stream
																			.getTracks()
																			.includes(
																				t
																				.sender
																				.track
																				)
																			) {
																			e.next =
																				5;
																			break
																		}
																		return e
																			.abrupt(
																				"return", {
																					v: Promise
																						.reject(
																							"The track associated with RTCRtpSender is not included in stream."
																							)
																				}
																				);
																	case 5:
																		if (2 <
																			s
																			.length
																			)
																			return e
																				.abrupt(
																					"return", {
																						v: Promise
																							.reject(
																								"At most one transceiver for audio and one transceiver for video are accepted."
																								)
																					}
																					);
																		e.next =
																			7;
																		break;
																	case 7:
																		return r =
																			s
																			.map(
																				function(
																					e
																					) {
																					var t =
																						e
																						.sender
																						.track
																						.kind;
																					return {
																						type: t,
																						transceiver: e,
																						source: o
																							.source[
																								t
																								],
																						option: {}
																					}
																				}
																				),
																			n =
																			c
																			._createInternalId(),
																			e
																			.next =
																			11,
																			c
																			._chainSdpPromise(
																				n
																				);
																	case 11:
																		return c
																			._publishTransceivers
																			.set(
																				n,
																				r
																				),
																			e
																			.next =
																			14,
																			c
																			.pc
																			.createOffer();
																	case 14:
																		return i =
																			e
																			.sent,
																			e
																			.next =
																			17,
																			c
																			.pc
																			.setLocalDescription(
																				i
																				);
																	case 17:
																		return a =
																			s
																			.map(
																				function(
																					e
																					) {
																					var t =
																						e
																						.sender
																						.track
																						.kind;
																					return {
																						type: t,
																						source: o
																							.source[
																								t
																								],
																						mid: e
																							.mid
																					}
																				}
																				),
																			e
																			.next =
																			20,
																			c
																			._signaling
																			.sendSignalingMessage(
																				"publish", {
																					media: {
																						tracks: a
																					},
																					attributes: o
																						.attributes,
																					transport: {
																						id: c
																							._id,
																						type: "webrtc"
																					}
																				}
																				)
																			.id;
																	case 20:
																		return a =
																			e
																			.sent,
																			c
																			._publishTransceivers
																			.get(
																				n
																				)
																			.id =
																			a,
																			c
																			._reverseIdMap
																			.set(
																				a,
																				n
																				),
																			e
																			.next =
																			25,
																			c
																			._signaling
																			.sendSignalingMessage(
																				"soac", {
																					id: c
																						._id,
																					signaling: i
																				}
																				);
																	case 25:
																		return e
																			.abrupt(
																				"return", {
																					v: new Promise(
																						function(
																							e,
																							t
																							) {
																							c._publishPromises
																								.set(
																									n, {
																										resolve: e,
																										reject: t
																									}
																									)
																						}
																						)
																				}
																				);
																	case 26:
																	case "end":
																		return e
																			.stop()
																}
														},
														e
														)
											}), t.s();
								case 4:
									if ((u = t.n())
										.done) {
										e.next = 11;
										break
									}
									return e
										.delegateYield(
											r(), "t0", 6
											);
								case 6:
									if (n = e.t0,
										"object" === (0,
											k.default)(
											n)) return e
										.abrupt(
											"return",
											n.v);
									e.next = 9;
									break;
								case 9:
									e.next = 4;
									break;
								case 11:
									e.next = 16;
									break;
								case 13:
									e.prev = 13, e.t1 =
										e.catch(1), t.e(
											e.t1);
								case 16:
									return e.prev = 16,
										t.f(), e.finish(
											16);
								case 19:
								case "end":
									return e.stop()
							}
						}, e, null, [
							[1, 13, 16, 19]
						])
					})), function(e, t) {
						return i.apply(this, arguments)
					})
				}, {
					key: "publish",
					value: (n = (0, u.default)(C.default.mark(function e(t, n, r) {
						var i, a, o, s, u, c, l, d, f, p, h, m, b,
							v, g, _, y, S, P, w = this;
						return C.default.wrap(function(e) {
							for (;;) switch (e.prev = e
								.next) {
								case 0:
									if (this._ended)
										return e.abrupt(
											"return",
											Promise
											.reject(
												"Connection closed"
												));
									e.next = 2;
									break;
								case 2:
									if (Array.isArray(
										n)) return e
										.abrupt(
											"return",
											this
											.publishWithTransceivers(
												t, n
												));
									e.next = 4;
									break;
								case 4:
									if (void 0 === n &&
										(n = {
											audio: !
												!t
												.mediaStream
												.getAudioTracks()
												.length,
											video: !
												!t
												.mediaStream
												.getVideoTracks()
												.length
										}), "object" !==
										(0, k.default)(
											n)) return e
										.abrupt(
											"return",
											Promise
											.reject(
												new TypeError(
													"Options should be an object."
													)
												));
									e.next = 7;
									break;
								case 7:
									if (this
										._isRtpEncodingParameters(
											n.audio) &&
										this
										._isOwtEncodingParameters(
											n.video) ||
										this
										._isOwtEncodingParameters(
											n.audio) &&
										this
										._isRtpEncodingParameters(
											n.video))
										return e.abrupt(
											"return",
											Promise
											.reject(
												new O
												.ConferenceError(
													"Mixing RTCRtpEncodingParameters and AudioEncodingParameters/VideoEncodingParameters is not allowed."
													)
												));
									e.next = 9;
									break;
								case 9:
									if (void 0 === n
										.audio && (n
											.audio = !!t
											.mediaStream
											.getAudioTracks()
											.length),
										void 0 === n
										.video && (n
											.video = !!t
											.mediaStream
											.getVideoTracks()
											.length), n
										.audio && !t
										.mediaStream
										.getAudioTracks()
										.length || n
										.video && !t
										.mediaStream
										.getVideoTracks()
										.length)
									return e.abrupt(
											"return",
											Promise
											.reject(
												new O
												.ConferenceError(
													"options.audio/video is inconsistent with tracks presented in the MediaStream."
													)
												));
									e.next = 13;
									break;
								case 13:
									if (!1 !== n
										.audio &&
										null !== n
										.audio || !1 !==
										n.video &&
										null !== n.video
										) {
										e.next = 15;
										break
									}
									return e.abrupt(
										"return",
										Promise
										.reject(
											new O
											.ConferenceError(
												"Cannot publish a stream without audio and video."
												)));
								case 15:
									if ("object" !== (0,
											k.default)(n
											.audio)) {
										e.next = 35;
										break
									}
									if (Array.isArray(n
											.audio)) {
										e.next = 18;
										break
									}
									return e.abrupt(
										"return",
										Promise
										.reject(
											new TypeError(
												"options.audio should be a boolean or an array."
												)));
								case 18:
									i = x(n.audio), e
										.prev = 19, i
										.s();
								case 21:
									if ((a = i.n())
										.done) {
										e.next = 27;
										break
									}
									if (!(s = a.value)
										.codec ||
										"string" !=
										typeof s.codec
										.name ||
										void 0 !== s
										.maxBitrate &&
										"number" !=
										typeof s
										.maxBitrate)
										return e.abrupt(
											"return",
											Promise
											.reject(
												new TypeError(
													"options.audio has incorrect parameters."
													)
												));
									e.next = 25;
									break;
								case 25:
									e.next = 21;
									break;
								case 27:
									e.next = 32;
									break;
								case 29:
									e.prev = 29, e.t0 =
										e.catch(19), i
										.e(e.t0);
								case 32:
									return e.prev = 32,
										i.f(), e.finish(
											32);
								case 35:
									if ("object" !== (0,
											k.default)(n
											.video) ||
										Array.isArray(n
											.video)) {
										e.next = 37;
										break
									}
									return e.abrupt(
										"return",
										Promise
										.reject(
											new TypeError(
												"options.video should be a boolean or an array."
												)));
								case 37:
									if (!this
										._isOwtEncodingParameters(
											n.video)) {
										e.next = 55;
										break
									}
									o = x(n.video), e
										.prev = 39, o
										.s();
								case 41:
									if ((s = o.n())
										.done) {
										e.next = 47;
										break
									}
									if (!(c = s.value)
										.codec ||
										"string" !=
										typeof c.codec
										.name ||
										void 0 !== c
										.maxBitrate &&
										"number" !=
										typeof c
										.maxBitrate ||
										void 0 !== c
										.codec
										.profile &&
										"string" !=
										typeof c.codec
										.profile)
									return e.abrupt(
											"return",
											Promise
											.reject(
												new TypeError(
													"options.video has incorrect parameters."
													)
												));
									e.next = 45;
									break;
								case 45:
									e.next = 41;
									break;
								case 47:
									e.next = 52;
									break;
								case 49:
									e.prev = 49, e.t1 =
										e.catch(39), o
										.e(e.t1);
								case 52:
									return e.prev = 52,
										o.f(), e.finish(
											52);
								case 55:
									if (u = {}, this
										._createPeerConnection(),
										!(0 < t
											.mediaStream
											.getAudioTracks()
											.length && !
											1 !== n
											.audio &&
											null !== n
											.audio)) {
										e.next = 65;
										break
									}
									if (1 < t
										.mediaStream
										.getAudioTracks()
										.length && E
										.default
										.warning(
											"Publishing a stream with multiple audio tracks is not fully supported."
											),
										"boolean" !=
										typeof n
										.audio &&
										"object" !== (0,
											k.default)(n
											.audio))
										return e.abrupt(
											"return",
											Promise
											.reject(
												new O
												.ConferenceError(
													"Type of audio options should be boolean or an object."
													)
												));
									e.next = 61;
									break;
								case 61:
									u.audio = {}, u
										.audio.source =
										t.source.audio,
										e.next = 66;
									break;
								case 65:
									u.audio = !1;
								case 66:
									return 0 < t
										.mediaStream
										.getVideoTracks()
										.length && !
										1 !== n.video &&
										null !== n
										.video ? (1 < t
											.mediaStream
											.getVideoTracks()
											.length && E
											.default
											.warning(
												"Publishing a stream with multiple video tracks is not fully supported."
												), u
											.video = {},
											u.video
											.source = t
											.source
											.video, c =
											t
											.mediaStream
											.getVideoTracks()[
												0]
											.getSettings(),
											u.video
											.parameters = {
												resolution: {
													width: c
														.width,
													height: c
														.height
												},
												framerate: c
													.frameRate
											}) : u
										.video = !1, l =
										this
										._createInternalId(),
										e.next = 70,
										this
										._chainSdpPromise(
											l);
								case 70:
									if (d = {}, f = [],
										"function" !=
										typeof this.pc
										.addTransceiver
										) {
										e.next = 95;
										break
									}
									if (!(u.audio && 0 <
											t
											.mediaStream
											.getAudioTracks()
											.length)) {
										e.next = 83;
										break
									}
									if (p = {
											direction: "sendonly",
											streams: [t
												.mediaStream
											]
										}, this
										._isRtpEncodingParameters(
											n.audio) &&
										(p.sendEncodings =
											n.audio),
										h = this.pc
										.addTransceiver(
											t
											.mediaStream
											.getAudioTracks()[
												0], p),
										f.push({
											type: "audio",
											transceiver: h,
											source: u
												.audio
												.source,
											option: {
												audio: n
													.audio
											}
										}), T
										.isFirefox())
										return (m = h
												.sender
												.getParameters()
												)
											.encodings =
											p
											.sendEncodings,
											e.next = 83,
											h.sender
											.setParameters(
												m);
									e.next = 83;
									break;
								case 83:
									if (!(u.video && 0 <
											t
											.mediaStream
											.getVideoTracks()
											.length)) {
										e.next = 93;
										break
									}
									if (p = {
											direction: "sendonly",
											streams: [t
												.mediaStream
											]
										}, this
										._isRtpEncodingParameters(
											n.video) &&
										(p.sendEncodings =
											n.video,
											this
											._videoCodecs =
											r), h = this
										.pc
										.addTransceiver(
											t
											.mediaStream
											.getVideoTracks()[
												0], p),
										f.push({
											type: "video",
											transceiver: h,
											source: u
												.video
												.source,
											option: {
												video: n
													.video
											}
										}), T
										.isFirefox())
										return (m = h
												.sender
												.getParameters()
												)
											.encodings =
											p
											.sendEncodings,
											e.next = 93,
											h.sender
											.setParameters(
												m);
									e.next = 93;
									break;
								case 93:
									e.next = 99;
									break;
								case 95:
									if (u.audio && 0 < t
										.mediaStream
										.getAudioTracks()
										.length) {
										b = x(t.mediaStream
											.getAudioTracks()
											);
										try {
											for (b
											.s(); !(v =
													b
													.n()
													)
												.done;)
												g = v
												.value,
												this.pc
												.addTrack(
													g, t
													.mediaStream
													)
										} catch (e) {
											b.e(e)
										} finally {
											b.f()
										}
									}
									if (u.video && 0 < t
										.mediaStream
										.getVideoTracks()
										.length) {
										_ = x(t.mediaStream
											.getVideoTracks()
											);
										try {
											for (_
											.s(); !(y =
													_
													.n()
													)
												.done;)
												S = y
												.value,
												this.pc
												.addTrack(
													S, t
													.mediaStream
													)
										} catch (e) {
											_.e(e)
										} finally {
											_.f()
										}
									}
									d.offerToReceiveAudio = !
										1, d
										.offerToReceiveVideo = !
										1;
								case 99:
									return this
										._publishTransceivers
										.set(l, {
											transceivers: f
										}), this.pc
										.createOffer(d)
										.then(function(
											e) {
											return P =
												e, w
												.pc
												.setLocalDescription(
													e
													)
										}).then(
											function() {
												var
											n = [];
												return f
													.forEach(
														function(
															e
															) {
															var t =
																e
																.type,
																r =
																e
																.transceiver,
																e =
																e
																.source;
															n.push({
																type: t,
																mid: r
																	.mid,
																source: e
															})
														}
														),
													w
													._signaling
													.sendSignalingMessage(
														"publish", {
															media: {
																tracks: n
															},
															attributes: t
																.attributes,
															transport: {
																id: w
																	._id,
																type: "webrtc"
															}
														}
														)
													.catch(
														function(
															e
															) {
															throw w
																._signaling
																.sendSignalingMessage(
																	"soac", {
																		id: w
																			._id,
																		signaling: P
																	}
																	),
																e
														}
														)
											}).then(
											function(
											e) {
												var t =
													e
													.id,
													r =
													new j
													.MessageEvent(
														"id", {
															message: t,
															origin: w
																._remoteId
														}
														);
												w.dispatchEvent(
														r
														),
													w
													._publishTransceivers
													.get(
														l
														)
													.id =
													t, w
													._reverseIdMap
													.set(
														t,
														l
														),
													w
													._id &&
													w
													._id !==
													e
													.transportId &&
													E
													.default
													.warning(
														"Server returns conflict ID: " +
														e
														.transportId
														),
													w
													._id =
													e
													.transportId,
													n &&
													f
													.forEach(
														function(
															e
															) {
															e
															.type;
															var t =
																e
																.transceiver,
																e =
																e
																.option;
															P.sdp =
																w
																._setRtpReceiverOptions(
																	P
																	.sdp,
																	e,
																	t
																	.mid
																	),
																P
																.sdp =
																w
																._setRtpSenderOptions(
																	P
																	.sdp,
																	e,
																	t
																	.mid
																	)
														}
														),
													w
													._signaling
													.sendSignalingMessage(
														"soac", {
															id: w
																._id,
															signaling: P
														}
														)
											}).catch(
											function(
											e) {
												E.default
													.error(
														"Failed to create offer or set SDP. Message: " +
														e
														.message
														),
													w
													._publishTransceivers
													.get(
														l
														)
													.id ?
													(w._unpublish(
															l
															),
														w
														._rejectPromise(
															e
															),
														w
														._fireEndedEventOnPublicationOrSubscription()
														) :
													w
													._unpublish(
														l
														)
											}), e
										.abrupt(
											"return",
											new Promise(
												function(
													e, t
													) {
													w._publishPromises
														.set(
															l, {
																resolve: e,
																reject: t
															}
															)
												}));
								case 102:
								case "end":
									return e.stop()
							}
						}, e, this, [
							[19, 29, 32, 35],
							[39, 49, 52, 55]
						])
					})), function(e, t, r) {
						return n.apply(this, arguments)
					})
				}, {
					key: "subscribe",
					value: (r = (0, u.default)(C.default.mark(function e(t, n) {
						var r, i, a, o, s, u, c = this;
						return C.default.wrap(function(e) {
							for (;;) switch (e.prev = e
								.next) {
								case 0:
									if (this._ended)
										return e.abrupt(
											"return",
											Promise
											.reject(
												"Connection closed"
												));
									e.next = 2;
									break;
								case 2:
									if (void 0 === n &&
										(n = {
											audio: !
												!t
												.settings
												.audio,
											video: !
												!t
												.settings
												.video
										}), "object" !==
										(0, k.default)(
											n)) return e
										.abrupt(
											"return",
											Promise
											.reject(
												new TypeError(
													"Options should be an object."
													)
												));
									e.next = 5;
									break;
								case 5:
									if (void 0 === n
										.audio && (n
											.audio = !!t
											.settings
											.audio),
										void 0 === n
										.video && (n
											.video = !!t
											.settings
											.video),
										void 0 !== n
										.audio &&
										"object" !== (0,
											k.default)(n
											.audio) &&
										"boolean" !=
										typeof n
										.audio &&
										null !== n
										.audio ||
										void 0 !== n
										.video &&
										"object" !== (0,
											k.default)(n
											.video) &&
										"boolean" !=
										typeof n
										.video &&
										null !== n.video
										) return e
										.abrupt(
											"return",
											Promise
											.reject(
												new TypeError(
													"Invalid options type."
													)
												));
									e.next = 9;
									break;
								case 9:
									if (n.audio && !t
										.settings
										.audio || n
										.video && !t
										.settings.video)
										return e.abrupt(
											"return",
											Promise
											.reject(
												new O
												.ConferenceError(
													"options.audio/video cannot be true or an object if there is no audio/video track in remote stream."
													)
												));
									e.next = 11;
									break;
								case 11:
									if (!1 === n
										.audio && !1 ===
										n.video)
									return e.abrupt(
											"return",
											Promise
											.reject(
												new O
												.ConferenceError(
													"Cannot subscribe a stream without audio and video."
													)
												));
									e.next = 13;
									break;
								case 13:
									if (r = {}, !n
										.audio) {
										e.next = 22;
										break
									}
									if ("object" !== (0,
											k.default)(n
											.audio) || !
										Array.isArray(n
											.audio
											.codecs)) {
										e.next = 18;
										break
									}
									if (0 === n.audio
										.codecs.length)
										return e.abrupt(
											"return",
											Promise
											.reject(
												new TypeError(
													"Audio codec cannot be an empty array."
													)
												));
									e.next = 18;
									break;
								case 18:
									r.audio = {}, r
										.audio.from = t
										.id, e.next =
										23;
									break;
								case 22:
									r.audio = !1;
								case 23:
									if (!n.video) {
										e.next = 33;
										break
									}
									if ("object" !== (0,
											k.default)(n
											.video) || !
										Array.isArray(n
											.video
											.codecs)) {
										e.next = 27;
										break
									}
									if (0 === n.video
										.codecs.length)
										return e.abrupt(
											"return",
											Promise
											.reject(
												new TypeError(
													"Video codec cannot be an empty array."
													)
												));
									e.next = 27;
									break;
								case 27:
									r.video = {}, r
										.video.from = t
										.id, (n.video
											.resolution ||
											n.video
											.frameRate ||
											n.video
											.bitrateMultiplier &&
											1 !== n
											.video
											.bitrateMultiplier ||
											n.video
											.keyFrameInterval
											) && (r
											.video
											.parameters = {
												resolution: n
													.video
													.resolution,
												framerate: n
													.video
													.frameRate,
												bitrate: n
													.video
													.bitrateMultiplier ?
													"x" +
													n
													.video
													.bitrateMultiplier
													.toString() :
													void 0,
												keyFrameInterval: n
													.video
													.keyFrameInterval
											}), n.video
										.rid && ((a = t
												.settings
												.video
												.find(
													function(
														e
														) {
														return e
															.rid ===
															n
															.video
															.rid
													})
												) && a
											._trackId &&
											(r.video
												.from =
												a
												._trackId,
												delete r
												.video
												.parameters
												), n
											.video = !0
											), e.next =
										34;
									break;
								case 33:
									r.video = !1;
								case 34:
									return i = this
										._createInternalId(),
										e.next = 37,
										this
										._chainSdpPromise(
											i);
								case 37:
									return a = {},
										o = [], this
										._createPeerConnection(),
										"function" ==
										typeof this.pc
										.addTransceiver ?
										(r.audio && (s =
												this.pc
												.addTransceiver(
													"audio", {
														direction: "recvonly"
													}),
												o.push({
													type: "audio",
													transceiver: s,
													from: r
														.audio
														.from,
													option: {
														audio: n
															.audio
													}
												})), r
											.video && (
												s = this
												.pc
												.addTransceiver(
													"video", {
														direction: "recvonly"
													}),
												o.push({
													type: "video",
													transceiver: s,
													from: r
														.video
														.from,
													parameters: r
														.video
														.parameters,
													option: {
														video: n
															.video
													}
												}))) : (
											a
											.offerToReceiveAudio = !
											!n.audio, a
											.offerToReceiveVideo = !
											!n.video),
										this
										._subscribeTransceivers
										.set(i, {
											transceivers: o
										}), this.pc
										.createOffer(a)
										.then(function(
											e) {
											return u =
												e, c
												.pc
												.setLocalDescription(
													e
													)
												.catch(
													function(
														e
														) {
														throw E
															.default
															.error(
																"Set local description failed. Message: " +
																JSON
																.stringify(
																	e
																	)
																),
															e
													}
													)
										}, function(
											e) {
											throw E
												.default
												.error(
													"Create offer failed. Error info: " +
													JSON
													.stringify(
														e
														)
													),
												e
										}).then(
											function() {
												var
											a = [];
												return o
													.forEach(
														function(
															e
															) {
															var t =
																e
																.type,
																r =
																e
																.transceiver,
																n =
																e
																.from,
																i =
																e
																.parameters;
															e
															.option;
															a.push({
																type: t,
																mid: r
																	.mid,
																from: n,
																parameters: i
															})
														}
														),
													c
													._signaling
													.sendSignalingMessage(
														"subscribe", {
															media: {
																tracks: a
															},
															transport: {
																id: c
																	._id,
																type: "webrtc"
															}
														}
														)
													.catch(
														function(
															e
															) {
															throw c
																._signaling
																.sendSignalingMessage(
																	"soac", {
																		id: c
																			._id,
																		signaling: u
																	}
																	),
																e
														}
														)
											}).then(
											function(
											e) {
												var t =
													e
													.id,
													r =
													new j
													.MessageEvent(
														"id", {
															message: t,
															origin: c
																._remoteId
														}
														);
												c.dispatchEvent(
														r
														),
													c
													._subscribeTransceivers
													.get(
														i
														)
													.id =
													t, c
													._reverseIdMap
													.set(
														t,
														i
														),
													c
													._id &&
													c
													._id !==
													e
													.transportId &&
													E
													.default
													.warning(
														"Server returns conflict ID: " +
														e
														.transportId
														),
													c
													._id =
													e
													.transportId,
													n &&
													o
													.forEach(
														function(
															e
															) {
															e
															.type;
															var t =
																e
																.transceiver,
																e =
																e
																.option;
															u.sdp =
																c
																._setRtpReceiverOptions(
																	u
																	.sdp,
																	e,
																	t
																	.mid
																	)
														}
														),
													c
													._signaling
													.sendSignalingMessage(
														"soac", {
															id: c
																._id,
															signaling: u
														}
														)
											}).catch(
											function(
											e) {
												E.default
													.error(
														"Failed to create offer or set SDP. Message: " +
														e
														.message
														),
													c
													._subscribeTransceivers
													.get(
														i
														)
													.id ?
													(c._unsubscribe(
															i
															),
														c
														._rejectPromise(
															e
															),
														c
														._fireEndedEventOnPublicationOrSubscription()
														) :
													c
													._unsubscribe(
														i
														)
											}), e
										.abrupt(
											"return",
											new Promise(
												function(
													e, t
													) {
													c._subscribePromises
														.set(
															i, {
																resolve: e,
																reject: t
															}
															)
												}));
								case 44:
								case "end":
									return e.stop()
							}
						}, e, this)
					})), function(e, t) {
						return r.apply(this, arguments)
					})
				}, {
					key: "close",
					value: function() {
						this.pc && "closed" !== this.pc.signalingState && this
							.pc.close()
					}
				}, {
					key: "_chainSdpPromise",
					value: function(r) {
						var n = this,
							e = this._sdpPromise;
						return this._sdpPromise = e.then(function() {
							return new Promise(function(e, t) {
								e = {
									finish: !1,
									resolve: e,
									reject: t
								};
								n._sdpResolvers.push(e), n
									._sdpResolverMap.set(r, e),
									setTimeout(function() {
										return t(
											"Timeout to get SDP answer"
											)
									}, 1e4)
							})
						}), e.catch(function(e) {})
					}
				}, {
					key: "_nextSdpPromise",
					value: function() {
						for (var e = !1; this._sdpResolveNum < this
							._sdpResolvers.length;) {
							var t = this._sdpResolvers[this._sdpResolveNum];
							this._sdpResolveNum++, t.finish || (t.resolve(), e =
								t.finish = !0)
						}
						return e
					}
				}, {
					key: "_createInternalId",
					value: function() {
						return this._internalCount++
					}
				}, {
					key: "_unpublish",
					value: function(e) {
						var t, r, n = this;
						this._publishTransceivers.has(e) && (r = (t = this
								._publishTransceivers.get(e)).id, t = t
							.transceivers, r && (this._signaling
								.sendSignalingMessage("unpublish", {
									id: r
								}).catch(function(e) {
									E.default.warning(
										"MCU returns negative ack for unpublishing, " +
										e)
								}), this._reverseIdMap.delete(r)), t
							.forEach(function(e) {
								e = e.transceiver;
								"stable" === n.pc.signalingState && (e
									.sender.replaceTrack(null), n.pc
									.removeTrack(e.sender))
							}), this._publishTransceivers.delete(e), this
							._publications.has(r) ? (t = new j.OwtEvent(
									"ended"), this._publications.get(r)
								.dispatchEvent(t), this._publications
								.delete(r)) : (E.default.warning(
									"Invalid publication to unpublish: " + r
									), this._publishPromises.has(e) && this
								._publishPromises.get(e).reject(new O
									.ConferenceError("Failed to publish"))),
							this._sdpResolverMap.has(e) && ((r = this
									._sdpResolverMap.get(e)).finish || (r
									.resolve(), r.finish = !0), this
								._sdpResolverMap.delete(e)))
					}
				}, {
					key: "_unsubscribe",
					value: function(e) {
						var t, r;
						this._subscribeTransceivers.has(e) && (r = (t = this
								._subscribeTransceivers.get(e)).id, t = t
							.transceivers, r && this._signaling
							.sendSignalingMessage("unsubscribe", {
								id: r
							}).catch(function(e) {
								E.default.warning(
									"MCU returns negative ack for unsubscribing, " +
									e)
							}), t.forEach(function(e) {
								e.transceiver.receiver.track.stop()
							}), this._subscribeTransceivers.delete(e), this
							._subscriptions.has(r) ? (t = new j.OwtEvent(
									"ended"), this._subscriptions.get(r)
								.dispatchEvent(t), this._subscriptions
								.delete(r)) : (E.default.warning(
									"Invalid subscription to unsubscribe: " +
									r), this._subscribePromises.has(e) &&
								this._subscribePromises.get(e).reject(new O
									.ConferenceError("Failed to subscribe"))
								), this._sdpResolverMap.has(e) && ((r = this
									._sdpResolverMap.get(e)).finish || (r
									.resolve(), r.finish = !0), this
								._sdpResolverMap.delete(e)))
					}
				}, {
					key: "_muteOrUnmute",
					value: function(t, r, n, i) {
						var a = this;
						return this._signaling.sendSignalingMessage(n ?
							"stream-control" : "subscription-control", {
								id: t,
								operation: r ? "pause" : "play",
								data: i
							}).then(function() {
							var e;
							n || (e = r ? "mute" : "unmute", a
								._subscriptions.get(t)
								.dispatchEvent(new j.MuteEvent(e, {
									kind: i
								})))
						})
					}
				}, {
					key: "_applyOptions",
					value: function(e, t) {
						if ("object" !== (0, k.default)(t) || "object" !== (0, k
								.default)(t.video)) return Promise.reject(new O
							.ConferenceError(
								"Options should be an object."));
						var r = {};
						return r.resolution = t.video.resolution, r.framerate =
							t.video.frameRate, r.bitrate = t.video
							.bitrateMultiplier ? "x" + t.video.bitrateMultiplier
							.toString() : void 0, r.keyFrameInterval = t.video
							.keyFrameInterval, this._signaling
							.sendSignalingMessage("subscription-control", {
								id: e,
								operation: "update",
								data: {
									video: {
										parameters: r
									}
								}
							}).then()
					}
				}, {
					key: "_onRemoteStreamAdded",
					value: function(t) {
						E.default.debug("Remote stream added.");
						var e, r = x(this._subscribeTransceivers);
						try {
							for (r.s(); !(e = r.n()).done;) {
								var n, i = (0, s.default)(e.value, 2),
									a = i[0],
									o = i[1];
								if (o.transceivers.find(function(e) {
										return e.transceiver === t
											.transceiver
									})) return void(this._subscriptions.has(o
										.id) ? ((n = this._subscriptions
											.get(o.id)).stream = t
										.streams[0], this
										._subscribePromises.has(a) && (
											this._subscribePromises.get(
												a).resolve(n), this
											._subscribePromises.delete(
												a))) : this
									._remoteMediaStreams.set(o.id, t
										.streams[0]))
							}
						} catch (e) {
							r.e(e)
						} finally {
							r.f()
						}
						E.default.warning(
							"Received remote stream without subscription.")
					}
				}, {
					key: "_onLocalIceCandidate",
					value: function(e) {
						e.candidate ? "stable" !== this.pc.signalingState ? this
							._pendingCandidates.push(e.candidate) : this
							._sendCandidate(e.candidate) : E.default.debug(
								"Empty candidate.")
					}
				}, {
					key: "_fireEndedEventOnPublicationOrSubscription",
					value: function() {
						if (!this._ended) {
							this._ended = !0;
							var e, t = new j.OwtEvent("ended"),
								r = x(this._publications);
							try {
								for (r.s(); !(e = r.n()).done;) {
									var n = (0, s.default)(e.value, 2)[1];
									n.dispatchEvent(t), n.stop()
								}
							} catch (e) {
								r.e(e)
							} finally {
								r.f()
							}
							var i, a = x(this._subscriptions);
							try {
								for (a.s(); !(i = a.n()).done;) {
									var o = (0, s.default)(i.value, 2)[1];
									o.dispatchEvent(t), o.stop()
								}
							} catch (e) {
								a.e(e)
							} finally {
								a.f()
							}
							this.dispatchEvent(t), this.close()
						}
					}
				}, {
					key: "_rejectPromise",
					value: function(e) {
						e = e || new O.ConferenceError(
								"Connection failed or closed."), this.pc &&
							"closed" !== this.pc.iceConnectionState && this.pc
							.close();
						var t, r = x(this._publishPromises);
						try {
							for (r.s(); !(t = r.n()).done;)(0, s.default)(t
								.value, 2)[1].reject(e)
						} catch (e) {
							r.e(e)
						} finally {
							r.f()
						}
						this._publishPromises.clear();
						var n, i = x(this._subscribePromises);
						try {
							for (i.s(); !(n = i.n()).done;)(0, s.default)(n
								.value, 2)[1].reject(e)
						} catch (e) {
							i.e(e)
						} finally {
							i.f()
						}
						this._subscribePromises.clear()
					}
				}, {
					key: "_onIceConnectionStateChange",
					value: function(e) {
						e && e.currentTarget && (E.default.debug(
								"ICE connection state changed to " + e
								.currentTarget.iceConnectionState),
							"closed" !== e.currentTarget
							.iceConnectionState && "failed" !== e
							.currentTarget.iceConnectionState || (
								"failed" === e.currentTarget
								.iceConnectionState ? this._handleError(
									"connection failed.") : this
								._fireEndedEventOnPublicationOrSubscription()
								))
					}
				}, {
					key: "_onConnectionStateChange",
					value: function(e) {
						"closed" !== this.pc.connectionState && "failed" !==
							this.pc.connectionState || ("failed" === this.pc
								.connectionState ? this._handleError(
									"connection failed.") : this
								._fireEndedEventOnPublicationOrSubscription())
					}
				}, {
					key: "_sendCandidate",
					value: function(e) {
						this._signaling.sendSignalingMessage("soac", {
							id: this._id,
							signaling: {
								type: "candidate",
								candidate: {
									candidate: "a=" + e.candidate,
									sdpMid: e.sdpMid,
									sdpMLineIndex: e.sdpMLineIndex
								}
							}
						})
					}
				}, {
					key: "_createPeerConnection",
					value: function() {
						var e, t = this;
						this.pc || (e = this._config.rtcConfiguration || {}, T
							.isChrome() && (e.bundlePolicy = "max-bundle"),
							this.pc = new RTCPeerConnection(e), this.pc
							.onicecandidate = function(e) {
								t._onLocalIceCandidate.apply(t, [e])
							}, this.pc.ontrack = function(e) {
								t._onRemoteStreamAdded.apply(t, [e])
							}, this.pc.oniceconnectionstatechange =
							function(e) {
								t._onIceConnectionStateChange.apply(t, [e])
							}, this.pc.onconnectionstatechange = function(
							e) {
								t._onConnectionStateChange.apply(t, [e])
							})
					}
				}, {
					key: "_getStats",
					value: function() {
						return this.pc ? this.pc.getStats() : Promise.reject(
							new O.ConferenceError(
								"PeerConnection is not available."))
					}
				}, {
					key: "_readyHandler",
					value: function(t) {
						var e, r, n = this,
							i = this._reverseIdMap.get(t);
						this._subscribePromises.has(i) ? (e = this
								._remoteMediaStreams.get(t), (r = new b
									.TransportSettings(b.TransportType.WEBRTC,
										this._id)).rtpTransceivers = this
								._subscribeTransceivers.get(i).transceivers, r =
								new h.Subscription(t, e, r, function() {
									n._unsubscribe(i)
								}, function() {
									return n._getStats()
								}, function(e) {
									return n._muteOrUnmute(t, !0, !1, e)
								}, function(e) {
									return n._muteOrUnmute(t, !1, !1, e)
								}, function(e) {
									return n._applyOptions(t, e)
								}), this._subscriptions.set(t, r), this
								._subscriptions.get(t).stream && (this
									._subscribePromises.get(i).resolve(r), this
									._subscribePromises.delete(i))) : this
							._publishPromises.has(i) && ((r = new b
									.TransportSettings(b.TransportType.WEBRTC,
										this._id)).transceivers = this
								._publishTransceivers.get(i).transceivers, r =
								new p.Publication(t, r, function() {
									return n._unpublish(i), Promise
									.resolve()
								}, function() {
									return n._getStats()
								}, function(e) {
									return n._muteOrUnmute(t, !0, !0, e)
								}, function(e) {
									return n._muteOrUnmute(t, !1, !0, e)
								}), this._publications.set(t, r), this
								._publishPromises.get(i).resolve(r))
					}
				}, {
					key: "_sdpHandler",
					value: function(e) {
						var n = this;
						"answer" === e.type && this.pc.setRemoteDescription(e)
							.then(function() {
								if (0 < n._pendingCandidates.length) {
									var e, t = x(n._pendingCandidates);
									try {
										for (t.s(); !(e = t.n()).done;) {
											var r = e.value;
											n._sendCandidate(r)
										}
									} catch (e) {
										t.e(e)
									} finally {
										t.f()
									}
								}
							}, function(e) {
								E.default.error(
										"Set remote description failed: " +
										e), n._rejectPromise(e), n
									._fireEndedEventOnPublicationOrSubscription()
							}).then(function() {
								n._nextSdpPromise() || E.default.warning(
									"Unexpected SDP promise state")
							})
					}
				}, {
					key: "_errorHandler",
					value: function(e, t) {
						if (!e) return this._handleError(t);
						t = new j.ErrorEvent("error", {
							error: new O.ConferenceError(t)
						});
						this._publications.has(e) && this._publications.get(e)
							.dispatchEvent(t), this._subscriptions.has(e) &&
							this._subscriptions.get(e).dispatchEvent(t);
						e = this._reverseIdMap.get(e);
						this._publishTransceivers.has(e) && this._unpublish(e),
							this._subscribeTransceivers.has(e) && this
							._unsubscribe(e)
					}
				}, {
					key: "_handleError",
					value: function(e) {
						e = new O.ConferenceError(e);
						if (!this._ended) {
							var t, r = new j.ErrorEvent("error", {
									error: e
								}),
								n = x(this._publications);
							try {
								for (n.s(); !(t = n.n()).done;)(0, s.default)(t
									.value, 2)[1].dispatchEvent(r)
							} catch (e) {
								n.e(e)
							} finally {
								n.f()
							}
							var i, a = x(this._subscriptions);
							try {
								for (a.s(); !(i = a.n()).done;)(0, s.default)(i
									.value, 2)[1].dispatchEvent(r)
							} catch (e) {
								a.e(e)
							} finally {
								a.f()
							}
							this._fireEndedEventOnPublicationOrSubscription()
						}
					}
				}, {
					key: "_setCodecOrder",
					value: function(e, t, r) {
						var n, i;
						return t.audio && (e = t.audio.codecs ? (n = Array.from(
								t.audio.codecs,
								function(e) {
									return e.name
								}), m.reorderCodecs(e, "audio", n, r)) : (
								i = Array.from(t.audio, function(e) {
									return e.codec.name
								}), m.reorderCodecs(e, "audio", i, r))), e = t
							.video ? t.video.codecs ? (i = Array.from(t.video
								.codecs,
								function(e) {
									return e.name
								}), m.reorderCodecs(e, "video", i, r)) : (t =
								Array.from(t.video, function(e) {
									return e.codec.name
								}), m.reorderCodecs(e, "video", t, r)) : e
					}
				}, {
					key: "_setMaxBitrate",
					value: function(e, t, r) {
						return "object" === (0, k.default)(t.audio) && (e = m
								.setMaxBitrate(e, t.audio, r)), e = "object" ===
							(0, k.default)(t.video) ? m.setMaxBitrate(e, t
								.video, r) : e
					}
				}, {
					key: "_setRtpSenderOptions",
					value: function(e, t, r) {
						return this._isRtpEncodingParameters(t.audio) || this
							._isRtpEncodingParameters(t.video) ? e : e = this
							._setMaxBitrate(e, t, r)
					}
				}, {
					key: "_setRtpReceiverOptions",
					value: function(e, t, r) {
						return this._isRtpEncodingParameters(t.video) && T
							.isSafari() && 1 < t.video.length && (e = m
								.addLegacySimulcast(e, "video", t.video.length,
									r)), this._isRtpEncodingParameters(t
							.video) && this._videoCodecs ? e = m.reorderCodecs(
								e, "video", this._videoCodecs, r) : this
							._isRtpEncodingParameters(t.audio) || this
							._isRtpEncodingParameters(t.video) ? e : e = this
							._setCodecOrder(e, t, r)
					}
				}, {
					key: "_onStreamEvent",
					value: function(e) {
						var t = [];
						this._publications.has(e.id) && t.push(this
							._publications.get(e.id));
						var r, n, i = x(this._subscriptions);
						try {
							for (i.s(); !(r = i.n()).done;) {
								var a = r.value;
								e.id !== a._audioTrackId && e.id !== a
									._videoTrackId || t.push(a)
							}
						} catch (e) {
							i.e(e)
						} finally {
							i.f()
						}
						t.length && ("audio.status" === e.data.field ? n = f
							.TrackKind.AUDIO : "video.status" === e.data
							.field ? n = f.TrackKind.VIDEO : E.default
							.warning(
								"Invalid data field for stream update info."
								), "active" === e.data.value ? t.forEach(
								function(e) {
									return e.dispatchEvent(new j.MuteEvent(
										"unmute", {
											kind: n
										}))
								}) : "inactive" === e.data.value ? t
							.forEach(function(e) {
								return e.dispatchEvent(new j.MuteEvent(
									"mute", {
										kind: n
									}))
							}) : E.default.warning(
								"Invalid data value for stream update info."
								))
					}
				}, {
					key: "_isRtpEncodingParameters",
					value: function(e) {
						if (!Array.isArray(e)) return !1;
						e = e[0];
						return !!(e.codecPayloadType || e.dtx || e.active || e
							.ptime || e.maxFramerate || e
							.scaleResolutionDownBy || e.rid || e
							.scalabilityMode)
					}
				}, {
					key: "_isOwtEncodingParameters",
					value: function(e) {
						return !!Array.isArray(e) && !!e[0].codec
					}
				}]), o
			}(j.EventDispatcher);
			r.ConferencePeerConnectionChannel = e
		}, {
			"../base/event.js": 25,
			"../base/logger.js": 27,
			"../base/mediaformat.js": 28,
			"../base/publication.js": 30,
			"../base/sdputils.js": 31,
			"../base/transport.js": 33,
			"../base/utils.js": 34,
			"./error.js": 37,
			"./subscription.js": 45,
			"@babel/runtime/helpers/asyncToGenerator": 4,
			"@babel/runtime/helpers/classCallCheck": 5,
			"@babel/runtime/helpers/createClass": 7,
			"@babel/runtime/helpers/getPrototypeOf": 8,
			"@babel/runtime/helpers/inherits": 9,
			"@babel/runtime/helpers/interopRequireDefault": 10,
			"@babel/runtime/helpers/possibleConstructorReturn": 15,
			"@babel/runtime/helpers/slicedToArray": 17,
			"@babel/runtime/helpers/typeof": 18,
			"@babel/runtime/regenerator": 21
		}],
		36: [function(e, t, r) {
			"use strict";
			var n = e("@babel/runtime/helpers/interopRequireDefault"),
				o = e("@babel/runtime/helpers/typeof");
			Object.defineProperty(r, "__esModule", {
				value: !0
			}), r.ConferenceClient = void 0;
			var s = n(e("@babel/runtime/regenerator")),
				u = n(e("@babel/runtime/helpers/asyncToGenerator")),
				c = (n(e("@babel/runtime/helpers/classCallCheck")), i(e("../base/event.js"))),
				l = e("./signaling.js"),
				w = n(e("../base/logger.js")),
				C = e("../base/base64.js"),
				k = e("./error.js"),
				E = i(e("../base/utils.js")),
				d = i(e("../base/stream.js")),
				j = e("./participant.js"),
				O = e("./info.js"),
				T = e("./channel.js"),
				x = e("./quicconnection.js"),
				I = e("./mixedstream.js"),
				R = i(e("./streamutils.js"));

			function f(e) {
				if ("function" != typeof WeakMap) return null;
				var t = new WeakMap,
					r = new WeakMap;
				return (f = function(e) {
					return e ? r : t
				})(e)
			}

			function i(e, t) {
				if (!t && e && e.__esModule) return e;
				if (null === e || "object" !== o(e) && "function" != typeof e) return {
					default: e
				};
				t = f(t);
				if (t && t.has(e)) return t.get(e);
				var r, n, i = {},
					a = Object.defineProperty && Object.getOwnPropertyDescriptor;
				for (r in e) "default" !== r && Object.prototype.hasOwnProperty.call(e, r) && ((n =
						a ? Object.getOwnPropertyDescriptor(e, r) : null) && (n.get || n.set) ?
					Object.defineProperty(i, r, n) : i[r] = e[r]);
				return i.default = e, t && t.set(e, i), i
			}

			function M(e, t) {
				var r = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
				if (!r) {
					if (Array.isArray(e) || (r = function(e, t) {
							if (e) {
								if ("string" == typeof e) return p(e, t);
								var r = Object.prototype.toString.call(e).slice(8, -1);
								return "Map" === (r = "Object" === r && e.constructor ? e
										.constructor.name : r) || "Set" === r ? Array.from(e) :
									"Arguments" === r ||
									/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? p(e,
									t) : void 0
							}
						}(e)) || t && e && "number" == typeof e.length) {
						r && (e = r);
						var n = 0,
							t = function() {};
						return {
							s: t,
							n: function() {
								return n >= e.length ? {
									done: !0
								} : {
									done: !1,
									value: e[n++]
								}
							},
							e: function(e) {
								throw e
							},
							f: t
						}
					}
					throw new TypeError(
						"Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
						)
				}
				var i, a = !0,
					o = !1;
				return {
					s: function() {
						r = r.call(e)
					},
					n: function() {
						var e = r.next();
						return a = e.done, e
					},
					e: function(e) {
						o = !0, i = e
					},
					f: function() {
						try {
							a || null == r.return || r.return()
						} finally {
							if (o) throw i
						}
					}
				}
			}

			function p(e, t) {
				(null == t || t > e.length) && (t = e.length);
				for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
				return n
			}

			function A(e, t) {
				return (e = new c.OwtEvent(e, t)).participant = t.participant, e
			}
			var N = 1,
				D = 2,
				L = 3;
			r.ConferenceClient = function(f, e) {
				Object.setPrototypeOf(this, new c.EventDispatcher), f = f || {};
				var p, h, o = this,
					m = N,
					a = e || new l.SioSignaling,
					b = new Map,
					v = new Map,
					n = new Map,
					g = new Map,
					_ = null,
					y = null;

				function t(t, r) {
					var e, n, i, a;
					"soac" === t || "progress" === t ? g.has(r.id) ? g.get(r.id).onMessage(t,
						r) : y && y.hasContentSessionId(r.id) ? y.onMessage(t, r) : w.default
						.warning("Cannot find a channel for incoming data.") : "stream" === t ?
						"add" === r.status ? function(e) {
							e = S(e);
							b.set(e.id, e);
							e = new d.StreamEvent("streamadded", {
								stream: e
							});
							o.dispatchEvent(e)
						}(r.data) : "remove" === r.status ? (i = r, b.has(i.id) ? (a = b.get(i
								.id), i = new c.OwtEvent("ended"), b.delete(a.id), a
							.dispatchEvent(i)) : w.default.warning(
							"Cannot find specific remote stream.")) : "update" === r.status && (
							"audio.status" === r.data.field || "video.status" === r.data.field ?
							g.forEach(function(e) {
								e.onMessage(t, r)
							}) : "activeInput" === r.data.field ? (a = r, b.has(a.id) ? (i = b
								.get(a.id), a = new I.ActiveAudioInputChangeEvent(
									"activeaudioinputchange", {
										activeAudioInputStreamId: a.data.value
									}), i.dispatchEvent(a)) : w.default.warning(
								"Cannot find specific remote stream.")) : "video.layout" === r
							.data.field ? (e = r, b.has(e.id) ? (n = b.get(e.id), e = new I
								.LayoutChangeEvent("layoutchange", {
									layout: e.data.value
								}), n.dispatchEvent(e)) : w.default.warning(
								"Cannot find specific remote stream.")) : "." === r.data.field ?
							(n = r.data.value, b.has(n.id) ? ((e = b.get(n.id)).settings = R
								.convertToPublicationSettings(n.media), e
								.extraCapabilities = R.convertToSubscriptionCapabilities(n
									.media), n = new c.OwtEvent("updated"), e.dispatchEvent(
									n)) : w.default.warning(
								"Cannot find specific remote stream.")) : w.default.warning(
								"Unknown stream event from MCU.")) : "text" === t ? function(
						e) {
							e = new c.MessageEvent("messagereceived", {
								message: e.message,
								origin: e.from,
								to: e.to
							});
							o.dispatchEvent(e)
						}(r) : "participant" === t && function(e) {
							{
								var t;
								"join" === e.action ? (e = e.data, t = new j.Participant(e.id, e
									.role, e.user), v.set(e.id, t), t = new A(
									"participantjoined", {
										participant: t
									}), o.dispatchEvent(t)) : "leave" === e.action && (t = e
									.data, v.has(t) ? (e = v.get(t), v.delete(t), e
										.dispatchEvent(new c.OwtEvent("left"))) : w.default
									.warning(
										"Received leave message from MCU for an unknown participant."
										))
							}
						}(r)
				}

				function S(e) {
					if ("mixed" === e.type) return new I.RemoteMixedStream(e);
					var t, r, n = e.media.tracks.find(function(e) {
							return "audio" === e.type
						}),
						i = e.media.tracks.find(function(e) {
							return "video" === e.type
						});
					n && (t = n.source), i && (r = i.source);
					i = e.data, i = new d.RemoteStream(e.id, e.info.owner, void 0, new d
						.StreamSourceInfo(t, r, i), e.info.attributes);
					return i.settings = R.convertToPublicationSettings(e.media), i
						.extraCapabilities = R.convertToSubscriptionCapabilities(e.media), i
				}

				function r(e, t) {
					return a.send(e, t)
				}

				function P() {
					var e = Object.create(c.EventDispatcher);
					return e.sendSignalingMessage = r, e
				}

				function i() {
					v.clear(), b.clear()
				}
				Object.defineProperty(this, "peerConnection", {
					configurable: !1,
					get: function() {
						return null === _ || void 0 === _ ? void 0 : _.pc
					}
				}), a.addEventListener("data", function(e) {
					t(e.message.notification, e.message.data)
				}), a.addEventListener("disconnect", function() {
					i(), m = N, o.dispatchEvent(new c.OwtEvent("serverdisconnected"))
				}), Object.defineProperty(this, "info", {
					configurable: !1,
					get: function() {
						return h ? new O.ConferenceInfo(h.id, Array.from(v,
							function(e) {
								return e[1]
							}), Array.from(b, function(e) {
							return e[1]
						}), p) : null
					}
				}), this.join = function(i) {
					return new Promise(function(l, t) {
						var e, d = JSON.parse(C.Base64.decodeBase64(i)),
							r = !0 === d.secure,
							n = d.host;
						"string" == typeof n ? (-1 === n.indexOf("http") && (n = r ?
							"https://" + n : "http://" + n), m === N ? (m =
							D, e = E.sysInfo(), e = {
								token: i,
								userAgent: {
									sdk: e.sdk
								},
								protocol: "1.2"
							}, a.connect(n, r, e).then(function(e) {
								if (m = L, void 0 !== (h = e.room)
									.streams) {
									var t, r = M(h.streams);
									try {
										for (r.s(); !(t = r.n())
											.done;) {
											var n = t.value;
											"mixed" === n.type && (n
												.viewport = n.info
												.label), b.set(n.id,
												S(n))
										}
									} catch (e) {
										r.e(e)
									} finally {
										r.f()
									}
								}
								if (e.room && void 0 !== e.room
									.participants) {
									var i, a = M(e.room.participants);
									try {
										for (a.s(); !(i = a.n())
											.done;) {
											var o = i.value;
											v.set(o.id, new j
													.Participant(o.id, o
														.role, o.user)),
												o.id === e.id && (p = v
													.get(o.id))
										}
									} catch (e) {
										a.e(e)
									} finally {
										a.f()
									}
								}
								var s, u;
								s = P(), (u = new T
										.ConferencePeerConnectionChannel(
											f, s)).addEventListener(
										"id",
										function(e) {
											g.has(e.message) ? w.default
												.warning(
													"Channel already exists",
													e.message) : g.set(e
													.message, u)
										}), (_ = u).addEventListener(
										"ended",
										function() {
											_ = null
										}), "function" ==
									typeof WebTransport && d
									.webTransportUrl && (y = new x
										.QuicConnection(d
											.webTransportUrl, e
											.webTransportToken, P(), f
											.webTransportConfiguration)
										);
								var c = new O.ConferenceInfo(e.room.id,
									Array.from(v.values()), Array
									.from(b.values()), p);
								y ? y.init().then(function() {
									l(c)
								}) : l(c)
							}, function(e) {
								m = N, t(new k.ConferenceError(e))
							})) : t(new k.ConferenceError(
							"connection state invalid"))) : t(new k
							.ConferenceError("Invalid host."))
					})
				}, this.publish = function(e, t, r) {
					return e instanceof d.LocalStream ? e.source.data ? y.publish(e) : n
						.has(e.mediaStream.id) ? Promise.reject(new k.ConferenceError(
							"Cannot publish a published stream.")) : _.publish(e, t, r) :
						Promise.reject(new k.ConferenceError("Invalid stream."))
				}, this.subscribe = function(e, t) {
					return e instanceof d.RemoteStream ? e.source.data ? e.source.audio || e
						.source.video ? Promise.reject(new TypeError(
							"Invalid source info. A remote stream is either a data stream or a media stream."
							)) : y ? y.subscribe(e) : Promise.reject(new TypeError(
							"WebTransport is not supported.")) : _.subscribe(e, t) : Promise
						.reject(new k.ConferenceError("Invalid stream."))
				}, this.send = function(e, t) {
					return r("text", {
						to: t = void 0 === t ? "all" : t,
						message: e
					})
				}, this.leave = function() {
					return a.disconnect().then(function() {
						i(), m = N
					})
				}, x.QuicConnection && (this.createSendStream = (0, u.default)(s.default
					.mark(function e() {
						return s.default.wrap(function(e) {
							for (;;) switch (e.prev = e.next) {
								case 0:
									if (y) {
										e.next = 2;
										break
									}
									throw new k.ConferenceError(
										"No QUIC connection available."
										);
								case 2:
									return e.abrupt("return", y
										.createSendStream());
								case 3:
								case "end":
									return e.stop()
							}
						}, e)
					})))
			}
		}, {
			"../base/base64.js": 23,
			"../base/event.js": 25,
			"../base/logger.js": 27,
			"../base/stream.js": 32,
			"../base/utils.js": 34,
			"./channel.js": 35,
			"./error.js": 37,
			"./info.js": 39,
			"./mixedstream.js": 40,
			"./participant.js": 41,
			"./quicconnection.js": 42,
			"./signaling.js": 43,
			"./streamutils.js": 44,
			"@babel/runtime/helpers/asyncToGenerator": 4,
			"@babel/runtime/helpers/classCallCheck": 5,
			"@babel/runtime/helpers/interopRequireDefault": 10,
			"@babel/runtime/helpers/typeof": 18,
			"@babel/runtime/regenerator": 21
		}],
		37: [function(e, t, r) {
			"use strict";
			var n = e("@babel/runtime/helpers/interopRequireDefault");
			Object.defineProperty(r, "__esModule", {
				value: !0
			}), r.ConferenceError = void 0;
			var i = n(e("@babel/runtime/helpers/classCallCheck")),
				a = n(e("@babel/runtime/helpers/inherits")),
				o = n(e("@babel/runtime/helpers/possibleConstructorReturn")),
				s = n(e("@babel/runtime/helpers/getPrototypeOf"));

			function u(r) {
				var n = function() {
					if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
					if (Reflect.construct.sham) return !1;
					if ("function" == typeof Proxy) return !0;
					try {
						return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [],
							function() {})), !0
					} catch (e) {
						return !1
					}
				}();
				return function() {
					var e, t = (0, s.default)(r);
					return t = n ? (e = (0, s.default)(this).constructor, Reflect.construct(t,
						arguments, e)) : t.apply(this, arguments), (0, o.default)(this, t)
				}
			}
			e = function(e) {
				(0, a.default)(r, e);
				var t = u(r);

				function r(e) {
					return (0, i.default)(this, r), t.call(this, e)
				}
				return r
			}((0, n(e("@babel/runtime/helpers/wrapNativeSuper")).default)(Error));
			r.ConferenceError = e
		}, {
			"@babel/runtime/helpers/classCallCheck": 5,
			"@babel/runtime/helpers/getPrototypeOf": 8,
			"@babel/runtime/helpers/inherits": 9,
			"@babel/runtime/helpers/interopRequireDefault": 10,
			"@babel/runtime/helpers/possibleConstructorReturn": 15,
			"@babel/runtime/helpers/wrapNativeSuper": 20
		}],
		38: [function(e, t, r) {
			"use strict";
			Object.defineProperty(r, "__esModule", {
				value: !0
			}), Object.defineProperty(r, "ConferenceClient", {
				enumerable: !0,
				get: function() {
					return n.ConferenceClient
				}
			}), Object.defineProperty(r, "SioSignaling", {
				enumerable: !0,
				get: function() {
					return i.SioSignaling
				}
			});
			var n = e("./client.js"),
				i = e("./signaling.js")
		}, {
			"./client.js": 36,
			"./signaling.js": 43
		}],
		39: [function(e, t, r) {
			"use strict";
			var n = e("@babel/runtime/helpers/interopRequireDefault");
			Object.defineProperty(r, "__esModule", {
				value: !0
			}), r.ConferenceInfo = void 0;
			var a = n(e("@babel/runtime/helpers/classCallCheck"));
			r.ConferenceInfo = function e(t, r, n, i) {
				(0, a.default)(this, e), this.id = t, this.participants = r, this
					.remoteStreams = n, this.self = i
			}
		}, {
			"@babel/runtime/helpers/classCallCheck": 5,
			"@babel/runtime/helpers/interopRequireDefault": 10
		}],
		40: [function(e, t, r) {
			"use strict";
			var n = e("@babel/runtime/helpers/interopRequireDefault"),
				o = e("@babel/runtime/helpers/typeof");
			Object.defineProperty(r, "__esModule", {
					value: !0
				}), r.RemoteMixedStream = r.LayoutChangeEvent = r.ActiveAudioInputChangeEvent =
				void 0;
			var i = n(e("@babel/runtime/helpers/classCallCheck")),
				a = n(e("@babel/runtime/helpers/inherits")),
				s = n(e("@babel/runtime/helpers/possibleConstructorReturn")),
				u = n(e("@babel/runtime/helpers/getPrototypeOf")),
				c = f(e("../base/stream.js")),
				l = f(e("./streamutils.js")),
				n = e("../base/event.js");

			function d(e) {
				if ("function" != typeof WeakMap) return null;
				var t = new WeakMap,
					r = new WeakMap;
				return (d = function(e) {
					return e ? r : t
				})(e)
			}

			function f(e, t) {
				if (!t && e && e.__esModule) return e;
				if (null === e || "object" !== o(e) && "function" != typeof e) return {
					default: e
				};
				t = d(t);
				if (t && t.has(e)) return t.get(e);
				var r, n, i = {},
					a = Object.defineProperty && Object.getOwnPropertyDescriptor;
				for (r in e) "default" !== r && Object.prototype.hasOwnProperty.call(e, r) && ((n =
						a ? Object.getOwnPropertyDescriptor(e, r) : null) && (n.get || n.set) ?
					Object.defineProperty(i, r, n) : i[r] = e[r]);
				return i.default = e, t && t.set(e, i), i
			}

			function p(r) {
				var n = function() {
					if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
					if (Reflect.construct.sham) return !1;
					if ("function" == typeof Proxy) return !0;
					try {
						return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [],
							function() {})), !0
					} catch (e) {
						return !1
					}
				}();
				return function() {
					var e, t = (0, u.default)(r);
					return t = n ? (e = (0, u.default)(this).constructor, Reflect.construct(t,
						arguments, e)) : t.apply(this, arguments), (0, s.default)(this, t)
				}
			}
			e = function(e) {
				(0, a.default)(n, e);
				var r = p(n);

				function n(e) {
					var t;
					if ((0, i.default)(this, n), "mixed" !== e.type) throw new TypeError(
						"Not a mixed stream");
					return (t = r.call(this, e.id, void 0, void 0, new c.StreamSourceInfo(
						"mixed", "mixed"))).settings = l.convertToPublicationSettings(e
						.media), t.extraCapabilities = l.convertToSubscriptionCapabilities(e
						.media), t
				}
				return n
			}(c.RemoteStream);
			r.RemoteMixedStream = e;
			e = function(e) {
				(0, a.default)(n, e);
				var r = p(n);

				function n(e, t) {
					return (0, i.default)(this, n), (e = r.call(this, e))
						.activeAudioInputStreamId = t.activeAudioInputStreamId, e
				}
				return n
			}(n.OwtEvent);
			r.ActiveAudioInputChangeEvent = e;
			n = function(e) {
				(0, a.default)(n, e);
				var r = p(n);

				function n(e, t) {
					return (0, i.default)(this, n), (e = r.call(this, e)).layout = t.layout, e
				}
				return n
			}(n.OwtEvent);
			r.LayoutChangeEvent = n
		}, {
			"../base/event.js": 25,
			"../base/stream.js": 32,
			"./streamutils.js": 44,
			"@babel/runtime/helpers/classCallCheck": 5,
			"@babel/runtime/helpers/getPrototypeOf": 8,
			"@babel/runtime/helpers/inherits": 9,
			"@babel/runtime/helpers/interopRequireDefault": 10,
			"@babel/runtime/helpers/possibleConstructorReturn": 15,
			"@babel/runtime/helpers/typeof": 18
		}],
		41: [function(e, t, r) {
			"use strict";
			var n = e("@babel/runtime/helpers/interopRequireDefault"),
				o = e("@babel/runtime/helpers/typeof");
			Object.defineProperty(r, "__esModule", {
				value: !0
			}), r.Participant = void 0;
			var s = n(e("@babel/runtime/helpers/classCallCheck")),
				u = n(e("@babel/runtime/helpers/assertThisInitialized")),
				c = n(e("@babel/runtime/helpers/inherits")),
				i = n(e("@babel/runtime/helpers/possibleConstructorReturn")),
				a = n(e("@babel/runtime/helpers/getPrototypeOf"));

			function l(e) {
				if ("function" != typeof WeakMap) return null;
				var t = new WeakMap,
					r = new WeakMap;
				return (l = function(e) {
					return e ? r : t
				})(e)
			}

			function d(r) {
				var n = function() {
					if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
					if (Reflect.construct.sham) return !1;
					if ("function" == typeof Proxy) return !0;
					try {
						return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [],
							function() {})), !0
					} catch (e) {
						return !1
					}
				}();
				return function() {
					var e, t = (0, a.default)(r);
					return t = n ? (e = (0, a.default)(this).constructor, Reflect.construct(t,
						arguments, e)) : t.apply(this, arguments), (0, i.default)(this, t)
				}
			}
			e = function(e) {
				(0, c.default)(a, e);
				var i = d(a);

				function a(e, t, r) {
					var n;
					return (0, s.default)(this, a), n = i.call(this), Object.defineProperty((0,
						u.default)(n), "id", {
						configurable: !1,
						writable: !1,
						value: e
					}), Object.defineProperty((0, u.default)(n), "role", {
						configurable: !1,
						writable: !1,
						value: t
					}), Object.defineProperty((0, u.default)(n), "userId", {
						configurable: !1,
						writable: !1,
						value: r
					}), n
				}
				return a
			}(function(e, t) {
				if (!t && e && e.__esModule) return e;
				if (null === e || "object" !== o(e) && "function" != typeof e) return {
					default: e
				};
				t = l(t);
				if (t && t.has(e)) return t.get(e);
				var r, n = {},
					i = Object.defineProperty && Object.getOwnPropertyDescriptor;
				for (r in e) {
					var a;
					"default" !== r && Object.prototype.hasOwnProperty.call(e, r) && ((a =
						i ? Object.getOwnPropertyDescriptor(e, r) : null) && (a
						.get || a.set) ? Object.defineProperty(n, r, a) : n[r] = e[
						r])
				}
				n.default = e, t && t.set(e, n);
				return n
			}(e("../base/event.js")).EventDispatcher);
			r.Participant = e
		}, {
			"../base/event.js": 25,
			"@babel/runtime/helpers/assertThisInitialized": 3,
			"@babel/runtime/helpers/classCallCheck": 5,
			"@babel/runtime/helpers/getPrototypeOf": 8,
			"@babel/runtime/helpers/inherits": 9,
			"@babel/runtime/helpers/interopRequireDefault": 10,
			"@babel/runtime/helpers/possibleConstructorReturn": 15,
			"@babel/runtime/helpers/typeof": 18
		}],
		42: [function(e, t, r) {
			"use strict";
			var n = e("@babel/runtime/helpers/interopRequireDefault");
			Object.defineProperty(r, "__esModule", {
				value: !0
			}), r.QuicConnection = void 0;
			var l = n(e("@babel/runtime/regenerator")),
				d = n(e("@babel/runtime/helpers/asyncToGenerator")),
				f = n(e("@babel/runtime/helpers/classCallCheck")),
				p = n(e("@babel/runtime/helpers/createClass")),
				h = n(e("@babel/runtime/helpers/inherits")),
				i = n(e("@babel/runtime/helpers/possibleConstructorReturn")),
				a = n(e("@babel/runtime/helpers/getPrototypeOf")),
				m = n(e("../base/logger.js")),
				n = e("../base/event.js"),
				b = e("../base/publication.js"),
				v = e("./subscription.js"),
				g = e("../base/base64.js");

			function _(e, t) {
				var r = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
				if (!r) {
					if (Array.isArray(e) || (r = function(e, t) {
							if (e) {
								if ("string" == typeof e) return s(e, t);
								var r = Object.prototype.toString.call(e).slice(8, -1);
								return "Map" === (r = "Object" === r && e.constructor ? e
										.constructor.name : r) || "Set" === r ? Array.from(e) :
									"Arguments" === r ||
									/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? s(e,
									t) : void 0
							}
						}(e)) || t && e && "number" == typeof e.length) {
						r && (e = r);
						var n = 0,
							t = function() {};
						return {
							s: t,
							n: function() {
								return n >= e.length ? {
									done: !0
								} : {
									done: !1,
									value: e[n++]
								}
							},
							e: function(e) {
								throw e
							},
							f: t
						}
					}
					throw new TypeError(
						"Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
						)
				}
				var i, a = !0,
					o = !1;
				return {
					s: function() {
						r = r.call(e)
					},
					n: function() {
						var e = r.next();
						return a = e.done, e
					},
					e: function(e) {
						o = !0, i = e
					},
					f: function() {
						try {
							a || null == r.return || r.return()
						} finally {
							if (o) throw i
						}
					}
				}
			}

			function s(e, t) {
				(null == t || t > e.length) && (t = e.length);
				for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
				return n
			}

			function y(r) {
				var n = function() {
					if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
					if (Reflect.construct.sham) return !1;
					if ("function" == typeof Proxy) return !0;
					try {
						return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [],
							function() {})), !0
					} catch (e) {
						return !1
					}
				}();
				return function() {
					var e, t = (0, a.default)(r);
					return t = n ? (e = (0, a.default)(this).constructor, Reflect.construct(t,
						arguments, e)) : t.apply(this, arguments), (0, i.default)(this, t)
				}
			}
			n = function(e) {
				(0, h.default)(c, e);
				var t, r, n, i, a, o, s, u = y(c);

				function c(e, t, r, n) {
					var i;
					return (0, f.default)(this, c), (i = u.call(this))._tokenString = t, i
						._token = JSON.parse(g.Base64.decodeBase64(t)), i._signaling = r, i
						._ended = !1, i._quicStreams = new Map, i._quicTransport =
						new WebTransport(e, n), i._subscribePromises = new Map, i._transportId =
						i._token.transportId, i._initReceiveStreamReader(), i
				}
				return (0, p.default)(c, [{
					key: "onMessage",
					value: function(e, t) {
						switch (e) {
							case "progress":
								"soac" === t.status ? this._soacHandler(t
									.data) : "ready" === t.status ? this
									._readyHandler() : "error" === t.status &&
									this._errorHandler(t.data);
								break;
							case "stream":
								this._onStreamEvent(t);
								break;
							default:
								m.default.warning(
									"Unknown notification from MCU.")
						}
					}
				}, {
					key: "init",
					value: (s = (0, d.default)(l.default.mark(function e() {
						return l.default.wrap(function(e) {
							for (;;) switch (e.prev = e
								.next) {
								case 0:
									return e.next = 2,
										this
										._authenticate(
											this
											._tokenString
											);
								case 2:
								case "end":
									return e.stop()
							}
						}, e, this)
					})), function() {
						return s.apply(this, arguments)
					})
				}, {
					key: "_initReceiveStreamReader",
					value: (o = (0, d.default)(l.default.mark(function e() {
						var t, r, n, i, a, o, s;
						return l.default.wrap(function(e) {
							for (;;) switch (e.prev = e
								.next) {
								case 0:
									t = this
										._quicTransport
										.incomingBidirectionalStreams
										.getReader(), m
										.default.info(
											"Reader: " +
											t), r = !1;
								case 3:
									if (r) {
										e.next = 31;
										break
									}
									return e.next = 6, t
										.read();
								case 6:
									if (o = e.sent, n =
										o.value, o = o
										.done, m.default
										.info(
											"New stream received"
											), o)
									return r = !0, e
										.abrupt(
											"break",
											31);
									e.next = 13;
									break;
								case 13:
									return i = n
										.readable
										.getReader(), e
										.next = 16, i
										.read();
								case 16:
									if (s = e.sent, a =
										s.value, s.done)
										return m.default
											.error(
												"Stream closed unexpectedly."
												), e
											.abrupt(
												"return"
												);
									e.next = 22;
									break;
								case 22:
									if (16 != a.length)
										return m.default
											.error(
												"Unexpected length for UUID."
												), e
											.abrupt(
												"return"
												);
									e.next = 25;
									break;
								case 25:
									i.releaseLock(), o =
										this
										._uint8ArrayToUuid(
											a), this
										._quicStreams
										.set(o, n), this
										._subscribePromises
										.has(o) && (s =
											this
											._createSubscription(
												o, n),
											this
											._subscribePromises
											.get(o)
											.resolve(s)
											), e.next =
										3;
									break;
								case 31:
								case "end":
									return e.stop()
							}
						}, e, this)
					})), function() {
						return o.apply(this, arguments)
					})
				}, {
					key: "_createSubscription",
					value: function(e, t) {
						e = new v.Subscription(e, function() {
							t.abortReading()
						});
						return e.stream = t, e
					}
				}, {
					key: "_authenticate",
					value: (a = (0, d.default)(l.default.mark(function e(t) {
						var r, n, i;
						return l.default.wrap(function(e) {
							for (;;) switch (e.prev = e
								.next) {
								case 0:
									return e.next = 2,
										this
										._quicTransport
										.ready;
								case 2:
									return e.next = 4,
										this
										._quicTransport
										.createBidirectionalStream();
								case 4:
									return i = e.sent,
										r = i.readable
										.getReader(),
										n = i.writable
										.getWriter(), e
										.next = 9, n
										.ready;
								case 9:
									return n.write(
											new Uint8Array(
												16)),
										i =
										new TextEncoder,
										i = i.encode(t),
										n.write(
											Uint32Array
											.of(i
												.length)
											), n.write(
											i), e.next =
										16, r.read();
								case 16:
									m.default.info(
										"Authentication success."
										);
								case 17:
								case "end":
									return e.stop()
							}
						}, e, this)
					})), function(e) {
						return a.apply(this, arguments)
					})
				}, {
					key: "createSendStream",
					value: (i = (0, d.default)(l.default.mark(function e() {
						var t;
						return l.default.wrap(function(e) {
							for (;;) switch (e.prev = e
								.next) {
								case 0:
									return e.next = 2,
										this
										._quicTransport
										.ready;
								case 2:
									return e.next = 4,
										this
										._quicTransport
										.createBidirectionalStream();
								case 4:
									return t = e.sent, e
										.abrupt(
											"return", t
											);
								case 6:
								case "end":
									return e.stop()
							}
						}, e, this)
					})), function() {
						return i.apply(this, arguments)
					})
				}, {
					key: "createSendStream1",
					value: (n = (0, d.default)(l.default.mark(function e(t) {
						var r, n, i;
						return l.default.wrap(function(e) {
							for (;;) switch (e.prev = e
								.next) {
								case 0:
									return m.default
										.info(
											"Create stream."
											), e.next =
										3, this
										._quicTransport
										.ready;
								case 3:
									return e.next = 5,
										this
										._initiatePublication();
								case 5:
									return r = e.sent, e
										.next = 8, this
										._quicTransport
										.createSendStream();
								case 8:
									return n = e.sent,
										i = n.writable
										.getWriter(), e
										.next = 12, i
										.ready;
								case 12:
									return i.write(this
											._uuidToUint8Array(
												r)), i
										.releaseLock(),
										this
										._quicStreams
										.set(r, n), e
										.abrupt(
											"return", n
											);
								case 16:
								case "end":
									return e.stop()
							}
						}, e, this)
					})), function(e) {
						return n.apply(this, arguments)
					})
				}, {
					key: "publish",
					value: (r = (0, d.default)(l.default.mark(function e(t) {
						var r, n, i, a, o = this;
						return l.default.wrap(function(e) {
							for (;;) switch (e.prev = e
								.next) {
								case 0:
									return e.next = 2,
										this
										._initiatePublication();
								case 2:
									return r = e.sent,
										n = t.stream,
										i = n.writable
										.getWriter(), e
										.next = 7, i
										.ready;
								case 7:
									return i.write(this
											._uuidToUint8Array(
												r)), i
										.releaseLock(),
										m.default.info(
											"publish id"
											), this
										._quicStreams
										.set(r, n), a =
										new b
										.Publication(r,
											function() {
												o._signaling
													.sendSignalingMessage(
														"unpublish", {
															id: a
														}
														)
													.catch(
														function(
															e
															) {
															m.default
																.warning(
																	"MCU returns negative ack for unpublishing, " +
																	e
																	)
														}
														)
											}), e
										.abrupt(
											"return", a
											);
								case 13:
								case "end":
									return e.stop()
							}
						}, e, this)
					})), function(e) {
						return r.apply(this, arguments)
					})
				}, {
					key: "hasContentSessionId",
					value: function(e) {
						return this._quicStreams.has(e)
					}
				}, {
					key: "_uuidToUint8Array",
					value: function(e) {
						if (32 != e.length) throw new TypeError(
							"Incorrect UUID.");
						for (var t = new Uint8Array(16), r = 0; r < 16; r++) t[
							r] = parseInt(e.substring(2 * r, 2 * r + 2), 16);
						return t
					}
				}, {
					key: "_uint8ArrayToUuid",
					value: function(e) {
						var t, r = "",
							n = _(e);
						try {
							for (n.s(); !(t = n.n()).done;) r += t.value
								.toString(16).padStart(2, "0")
						} catch (e) {
							n.e(e)
						} finally {
							n.f()
						}
						return r
					}
				}, {
					key: "subscribe",
					value: function(e) {
						var i = this;
						return new Promise(function(r, n) {
							i._signaling.sendSignalingMessage(
								"subscribe", {
									media: null,
									data: {
										from: e.id
									},
									transport: {
										type: "quic",
										id: i._transportId
									}
								}).then(function(e) {
								var t;
								i._quicStreams.has(e.id) ? (t =
										i._createSubscription(e
											.id, i._quicStreams
											.get(e.id)), r(t)) :
									(i._quicStreams.set(e.id,
											null), i
										._subscribePromises.set(
											e.id, {
												resolve: r,
												reject: n
											}))
							})
						})
					}
				}, {
					key: "_readAndPrint",
					value: function() {
						var t = this;
						this._quicStreams[0].waitForReadable(5).then(
					function() {
							var e = new Uint8Array(t._quicStreams[0]
								.readBufferedAmount);
							t._quicStreams[0].readInto(e), m.default
								.info("Read data: " + e), t
								._readAndPrint()
						})
					}
				}, {
					key: "_initiatePublication",
					value: (t = (0, d.default)(l.default.mark(function e() {
						var t;
						return l.default.wrap(function(e) {
							for (;;) switch (e.prev = e
								.next) {
								case 0:
									return e.next = 2,
										this._signaling
										.sendSignalingMessage(
											"publish", {
												media: null,
												data: !
													0,
												transport: {
													type: "quic",
													id: this
														._transportId
												}
											});
								case 2:
									if (t = e.sent, this
										._transportId !==
										t.transportId)
										throw new Error(
											"Transport ID not match."
											);
									e.next = 5;
									break;
								case 5:
									return e.abrupt(
										"return", t
										.id);
								case 6:
								case "end":
									return e.stop()
							}
						}, e, this)
					})), function() {
						return t.apply(this, arguments)
					})
				}, {
					key: "_readyHandler",
					value: function() {}
				}]), c
			}(n.EventDispatcher);
			r.QuicConnection = n
		}, {
			"../base/base64.js": 23,
			"../base/event.js": 25,
			"../base/logger.js": 27,
			"../base/publication.js": 30,
			"./subscription.js": 45,
			"@babel/runtime/helpers/asyncToGenerator": 4,
			"@babel/runtime/helpers/classCallCheck": 5,
			"@babel/runtime/helpers/createClass": 7,
			"@babel/runtime/helpers/getPrototypeOf": 8,
			"@babel/runtime/helpers/inherits": 9,
			"@babel/runtime/helpers/interopRequireDefault": 10,
			"@babel/runtime/helpers/possibleConstructorReturn": 15,
			"@babel/runtime/regenerator": 21
		}],
		43: [function(e, t, r) {
			"use strict";
			var n = e("@babel/runtime/helpers/interopRequireDefault"),
				o = e("@babel/runtime/helpers/typeof");
			Object.defineProperty(r, "__esModule", {
				value: !0
			}), r.SioSignaling = void 0;
			var i = n(e("@babel/runtime/helpers/classCallCheck")),
				a = n(e("@babel/runtime/helpers/createClass")),
				s = n(e("@babel/runtime/helpers/inherits")),
				u = n(e("@babel/runtime/helpers/possibleConstructorReturn")),
				c = n(e("@babel/runtime/helpers/getPrototypeOf")),
				l = n(e("../base/logger.js")),
				d = function(e, t) {
					if (!t && e && e.__esModule) return e;
					if (null === e || "object" !== o(e) && "function" != typeof e) return {
						default: e
					};
					t = h(t);
					if (t && t.has(e)) return t.get(e);
					var r, n = {},
						i = Object.defineProperty && Object.getOwnPropertyDescriptor;
					for (r in e) {
						var a;
						"default" !== r && Object.prototype.hasOwnProperty.call(e, r) && ((a = i ?
							Object.getOwnPropertyDescriptor(e, r) : null) && (a.get || a
							.set) ? Object.defineProperty(n, r, a) : n[r] = e[r])
					}
					n.default = e, t && t.set(e, n);
					return n
				}(e("../base/event.js")),
				f = e("./error.js"),
				p = e("../base/base64.js");

			function h(e) {
				if ("function" != typeof WeakMap) return null;
				var t = new WeakMap,
					r = new WeakMap;
				return (h = function(e) {
					return e ? r : t
				})(e)
			}

			function m(r) {
				var n = function() {
					if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
					if (Reflect.construct.sham) return !1;
					if ("function" == typeof Proxy) return !0;
					try {
						return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [],
							function() {})), !0
					} catch (e) {
						return !1
					}
				}();
				return function() {
					var e, t = (0, c.default)(r);
					return t = n ? (e = (0, c.default)(this).constructor, Reflect.construct(t,
						arguments, e)) : t.apply(this, arguments), (0, u.default)(this, t)
				}
			}

			function b(e, t, r, n) {
				"ok" === e || "success" === e ? r(t) : "error" === e ? n(t) : l.default.error(
					"MCU returns unknown ack.")
			}
			e = function(e) {
				(0, s.default)(r, e);
				var t = m(r);

				function r() {
					var e;
					return (0, i.default)(this, r), (e = t.call(this))._socket = null, e
						._loggedIn = !1, e._reconnectTimes = 0, e._reconnectionTicket = null, e
						._refreshReconnectionTicket = null, e
				}
				return (0, a.default)(r, [{
					key: "connect",
					value: function(t, e, i) {
						var a = this;
						return new Promise(function(r, n) {
							a._socket = io(t, {
								reconnection: !0,
								reconnectionAttempts: 10,
								"force new connection": !0
							}), ["participant", "text", "stream",
								"progress"
							].forEach(function(t) {
								a._socket.on(t, function(e) {
									a.dispatchEvent(
										new d
										.MessageEvent(
											"data", {
												message: {
													notification: t,
													data: e
												}
											}))
								})
							}), a._socket.on("reconnecting",
								function() {
									a._reconnectTimes++
								}), a._socket.on("reconnect_failed",
								function() {
									10 <= a._reconnectTimes && a
										.dispatchEvent(new d
											.OwtEvent("disconnect"))
								}), a._socket.on("connect_error",
								function(e) {
									n("connect_error:".concat(t))
								}), a._socket.on("drop",
						function() {
								a._reconnectTimes = 10
							}), a._socket.on("disconnect",
							function() {
								a._clearReconnectionTask(),
									10 <= a._reconnectTimes && (
										a._loggedIn = !1, a
										.dispatchEvent(new d
											.OwtEvent(
												"disconnect")))
							}), a._socket.emit("login", i, function(
								e, t) {
								"ok" === e && (a._loggedIn = !0,
									a._onReconnectionTicket(
										t.reconnectionTicket
										), a._socket.on(
										"connect",
										function() {
											a._socket.emit(
												"relogin",
												a
												._reconnectionTicket,
												function(
													e, t
													) {
													"ok" ===
													e ? (a._reconnectTimes =
															0,
															a
															._onReconnectionTicket(
																t
																)
															) :
														a
														.dispatchEvent(
															new d
															.OwtEvent(
																"disconnect"
																)
															)
												})
										})), b(e, t, r, n)
							})
						})
					}
				}, {
					key: "disconnect",
					value: function() {
						var i = this;
						return !this._socket || this._socket.disconnected ?
							Promise.reject(new f.ConferenceError(
								"Portal is not connected.")) : new Promise(
								function(r, n) {
									i._socket.emit("logout", function(e, t) {
										i._reconnectTimes = 10, i
											._socket.disconnect(), b(e,
												t, r, n)
									})
								})
					}
				}, {
					key: "send",
					value: function(e, t) {
						var i = this;
						return new Promise(function(r, n) {
							i._socket.emit(e, t, function(e, t) {
								b(e, t, r, n)
							})
						})
					}
				}, {
					key: "_onReconnectionTicket",
					value: function(e) {
						var r = this;
						this._reconnectionTicket = e;
						var t = JSON.parse(p.Base64.decodeBase64(e)),
							n = Date.now();
						t.notAfter <= n - 1e4 ? l.default.warning(
							"Reconnection ticket expires too soon.") : ((e =
								t.notAfter - n - 6e4) < 0 && (e = t
								.notAfter - n - 1e4), this
							._clearReconnectionTask(), this
							._refreshReconnectionTicket = setTimeout(
								function() {
									r._socket.emit(
										"refreshReconnectionTicket",
										function(e, t) {
											"ok" === e ? r
												._onReconnectionTicket(
													t) : l.default
												.warning(
													"Failed to refresh reconnection ticket."
													)
										})
								}, e))
					}
				}, {
					key: "_clearReconnectionTask",
					value: function() {
						clearTimeout(this._refreshReconnectionTicket), this
							._refreshReconnectionTicket = null
					}
				}]), r
			}(d.EventDispatcher);
			r.SioSignaling = e
		}, {
			"../base/base64.js": 23,
			"../base/event.js": 25,
			"../base/logger.js": 27,
			"./error.js": 37,
			"@babel/runtime/helpers/classCallCheck": 5,
			"@babel/runtime/helpers/createClass": 7,
			"@babel/runtime/helpers/getPrototypeOf": 8,
			"@babel/runtime/helpers/inherits": 9,
			"@babel/runtime/helpers/interopRequireDefault": 10,
			"@babel/runtime/helpers/possibleConstructorReturn": 15,
			"@babel/runtime/helpers/typeof": 18
		}],
		44: [function(e, t, r) {
			"use strict";
			var n = e("@babel/runtime/helpers/interopRequireDefault"),
				o = e("@babel/runtime/helpers/typeof");
			Object.defineProperty(r, "__esModule", {
				value: !0
			}), r.convertToPublicationSettings = function(e) {
				var t, r, n, i, a, o, s, u, c = [],
					l = [],
					d = k(e.tracks);
				try {
					for (d.s(); !(u = d.n()).done;) {
						var f, p, h = u.value;
						"audio" === h.type ? (h.format && (t = new P.AudioCodecParameters(h
									.format.codec, h.format.channelNum, h.format.sampleRate
									)), (f = new m.AudioPublicationSettings(t))._trackId = h
							.id, c.push(f)) : "video" === h.type && (h.format && (r = new P
								.VideoCodecParameters(h.format.codec, h.format.profile)), h
							.parameters && (h.parameters.resolution && (n = new S
									.Resolution(h.parameters.resolution.width, h.parameters
										.resolution.height)), i = h.parameters.framerate,
								a = 1e3 * h.parameters.bitrate, o = h.parameters
								.keyFrameInterval), h.rid && (s = h.rid), (p = new m
								.VideoPublicationSettings(r, n, i, a, o, s))._trackId = h
							.id, l.push(p))
					}
				} catch (e) {
					d.e(e)
				} finally {
					d.f()
				}
				return new m.PublicationSettings(c, l)
			}, r.convertToSubscriptionCapabilities = function(e) {
				var t, r, n, i, a = k(e.tracks);
				try {
					for (a.s(); !(n = a.n()).done;) {
						var o = n.value;
						if ("audio" === o.type) {
							var s = [];
							if (o.optional && o.optional.format) {
								var u, c = k(o.optional.format);
								try {
									for (c.s(); !(u = c.n()).done;) {
										var l = u.value,
											d = new P.AudioCodecParameters(l.codec, l
												.channelNum, l.sampleRate);
										s.push(d)
									}
								} catch (e) {
									c.e(e)
								} finally {
									c.f()
								}
							}
							s.sort(), t = new w.AudioSubscriptionCapabilities(s)
						} else if ("video" === o.type) {
							var f, p, h, m, b = [];
							if (o.optional && o.optional.format) {
								var v, g = k(o.optional.format);
								try {
									for (g.s(); !(v = g.n()).done;) {
										var _ = v.value,
											y = new P.VideoCodecParameters(_.codec, _.profile);
										b.push(y)
									}
								} catch (e) {
									g.e(e)
								} finally {
									g.f()
								}
							}
							b.sort(), r = null !== (i = o.optional) && void 0 !== i && i
								.parameters ? ((f = Array.from(o.optional.parameters.resolution,
										function(e) {
											return new S.Resolution(e.width, e.height)
										})).sort(j), (p = Array.from(o.optional.parameters
										.bitrate,
										function(e) {
											return "string" == typeof(e = e) && e
												.startsWith("x") ? Number.parseFloat(e
													.replace(/^x/, "")) : (C.default
													.warning(
														"Invalid bitrate multiplier input."
														), 0)
										})).push(1), p.sort(E), (h = JSON.parse(JSON.stringify(o
										.optional.parameters.framerate))).sort(E), (m = JSON
										.parse(JSON.stringify(o.optional.parameters
											.keyFrameInterval))).sort(E), new w
									.VideoSubscriptionCapabilities(b, f, h, p, m)) : new w
								.VideoSubscriptionCapabilities(b, [], [], [], [])
						}
					}
				} catch (e) {
					a.e(e)
				} finally {
					a.f()
				}
				return new w.SubscriptionCapabilities(t, r)
			};
			var m = i(e("../base/publication.js")),
				S = i(e("../base/mediaformat.js")),
				P = i(e("../base/codec.js")),
				w = i(e("./subscription.js")),
				C = n(e("../base/logger.js"));

			function s(e) {
				if ("function" != typeof WeakMap) return null;
				var t = new WeakMap,
					r = new WeakMap;
				return (s = function(e) {
					return e ? r : t
				})(e)
			}

			function i(e, t) {
				if (!t && e && e.__esModule) return e;
				if (null === e || "object" !== o(e) && "function" != typeof e) return {
					default: e
				};
				t = s(t);
				if (t && t.has(e)) return t.get(e);
				var r, n, i = {},
					a = Object.defineProperty && Object.getOwnPropertyDescriptor;
				for (r in e) "default" !== r && Object.prototype.hasOwnProperty.call(e, r) && ((n =
						a ? Object.getOwnPropertyDescriptor(e, r) : null) && (n.get || n.set) ?
					Object.defineProperty(i, r, n) : i[r] = e[r]);
				return i.default = e, t && t.set(e, i), i
			}

			function k(e, t) {
				var r = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
				if (!r) {
					if (Array.isArray(e) || (r = function(e, t) {
							if (e) {
								if ("string" == typeof e) return u(e, t);
								var r = Object.prototype.toString.call(e).slice(8, -1);
								return "Map" === (r = "Object" === r && e.constructor ? e
										.constructor.name : r) || "Set" === r ? Array.from(e) :
									"Arguments" === r ||
									/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? u(e,
									t) : void 0
							}
						}(e)) || t && e && "number" == typeof e.length) {
						r && (e = r);
						var n = 0,
							t = function() {};
						return {
							s: t,
							n: function() {
								return n >= e.length ? {
									done: !0
								} : {
									done: !1,
									value: e[n++]
								}
							},
							e: function(e) {
								throw e
							},
							f: t
						}
					}
					throw new TypeError(
						"Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
						)
				}
				var i, a = !0,
					o = !1;
				return {
					s: function() {
						r = r.call(e)
					},
					n: function() {
						var e = r.next();
						return a = e.done, e
					},
					e: function(e) {
						o = !0, i = e
					},
					f: function() {
						try {
							a || null == r.return || r.return()
						} finally {
							if (o) throw i
						}
					}
				}
			}

			function u(e, t) {
				(null == t || t > e.length) && (t = e.length);
				for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
				return n
			}

			function E(e, t) {
				return e - t
			}

			function j(e, t) {
				return e.width !== t.width ? e.width - t.width : e.height - t.height
			}
		}, {
			"../base/codec.js": 24,
			"../base/logger.js": 27,
			"../base/mediaformat.js": 28,
			"../base/publication.js": 30,
			"./subscription.js": 45,
			"@babel/runtime/helpers/interopRequireDefault": 10,
			"@babel/runtime/helpers/typeof": 18
		}],
		45: [function(e, t, r) {
			"use strict";
			var n = e("@babel/runtime/helpers/interopRequireDefault");
			Object.defineProperty(r, "__esModule", {
					value: !0
				}), r.VideoSubscriptionUpdateOptions = r.VideoSubscriptionConstraints = r
				.VideoSubscriptionCapabilities = r.SubscriptionUpdateOptions = r
				.SubscriptionCapabilities = r.Subscription = r.SubscribeOptions = r
				.AudioSubscriptionConstraints = r.AudioSubscriptionCapabilities = void 0;
			var d = n(e("@babel/runtime/helpers/assertThisInitialized")),
				i = n(e("@babel/runtime/helpers/inherits")),
				a = n(e("@babel/runtime/helpers/possibleConstructorReturn")),
				o = n(e("@babel/runtime/helpers/getPrototypeOf")),
				f = n(e("@babel/runtime/helpers/classCallCheck")),
				e = e("../base/event.js");

			function s(r) {
				var n = function() {
					if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
					if (Reflect.construct.sham) return !1;
					if ("function" == typeof Proxy) return !0;
					try {
						return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [],
							function() {})), !0
					} catch (e) {
						return !1
					}
				}();
				return function() {
					var e, t = (0, o.default)(r);
					return t = n ? (e = (0, o.default)(this).constructor, Reflect.construct(t,
						arguments, e)) : t.apply(this, arguments), (0, a.default)(this, t)
				}
			}
			r.AudioSubscriptionCapabilities = function e(t) {
				(0, f.default)(this, e), this.codecs = t
			}, r.VideoSubscriptionCapabilities = function e(t, r, n, i, a) {
				(0, f.default)(this, e), this.codecs = t, this.resolutions = r, this
					.frameRates = n, this.bitrateMultipliers = i, this.keyFrameIntervals = a
			}, r.SubscriptionCapabilities = function e(t, r) {
				(0, f.default)(this, e), this.audio = t, this.video = r
			}, r.AudioSubscriptionConstraints = function e(t) {
				(0, f.default)(this, e), this.codecs = t
			}, r.VideoSubscriptionConstraints = function e(t, r, n, i, a, o) {
				(0, f.default)(this, e), this.codecs = t, this.resolution = r, this.frameRate =
					n, this.bitrateMultiplier = i, this.keyFrameInterval = a, this.rid = o
			}, r.SubscribeOptions = function e(t, r, n) {
				(0, f.default)(this, e), this.audio = t, this.video = r, this.transport = n
			}, r.VideoSubscriptionUpdateOptions = function e() {
				(0, f.default)(this, e), this.resolution = void 0, this.frameRate = void 0, this
					.bitrateMultipliers = void 0, this.keyFrameInterval = void 0
			}, r.SubscriptionUpdateOptions = function e() {
				(0, f.default)(this, e), this.video = void 0
			};
			e = function(e) {
				(0, i.default)(l, e);
				var c = s(l);

				function l(e, t, r, n, i, a, o, s) {
					var u;
					if ((0, f.default)(this, l), u = c.call(this), !e) throw new TypeError(
						"ID cannot be null or undefined.");
					return Object.defineProperty((0, d.default)(u), "id", {
							configurable: !1,
							writable: !1,
							value: e
						}), Object.defineProperty((0, d.default)(u), "stream", {
							configurable: !1,
							writable: !0,
							value: t
						}), Object.defineProperty((0, d.default)(u), "transport", {
							configurable: !1,
							writable: !1,
							value: r
						}), u.stop = n, u.getStats = i, u.mute = a, u.unmute = o, u
						.applyOptions = s, u._audioTrackId = void 0, u._videoTrackId = void 0, u
				}
				return l
			}(e.EventDispatcher);
			r.Subscription = e
		}, {
			"../base/event.js": 25,
			"@babel/runtime/helpers/assertThisInitialized": 3,
			"@babel/runtime/helpers/classCallCheck": 5,
			"@babel/runtime/helpers/getPrototypeOf": 8,
			"@babel/runtime/helpers/inherits": 9,
			"@babel/runtime/helpers/interopRequireDefault": 10,
			"@babel/runtime/helpers/possibleConstructorReturn": 15
		}],
		46: [function(e, t, r) {
			"use strict";
			var o = e("@babel/runtime/helpers/typeof");
			Object.defineProperty(r, "__esModule", {
				value: !0
			}), r.P2P = r.Conference = r.Base = void 0;
			var n = a(e("./base/export.js")),
				i = a(e("./p2p/export.js")),
				e = a(e("./conference/export.js"));

			function s(e) {
				if ("function" != typeof WeakMap) return null;
				var t = new WeakMap,
					r = new WeakMap;
				return (s = function(e) {
					return e ? r : t
				})(e)
			}

			function a(e, t) {
				if (!t && e && e.__esModule) return e;
				if (null === e || "object" !== o(e) && "function" != typeof e) return {
					default: e
				};
				t = s(t);
				if (t && t.has(e)) return t.get(e);
				var r, n, i = {},
					a = Object.defineProperty && Object.getOwnPropertyDescriptor;
				for (r in e) "default" !== r && Object.prototype.hasOwnProperty.call(e, r) && ((n =
						a ? Object.getOwnPropertyDescriptor(e, r) : null) && (n.get || n.set) ?
					Object.defineProperty(i, r, n) : i[r] = e[r]);
				return i.default = e, t && t.set(e, i), i
			}
			r.Base = n, r.P2P = i, r.Conference = e
		}, {
			"./base/export.js": 26,
			"./conference/export.js": 38,
			"./p2p/export.js": 48,
			"@babel/runtime/helpers/typeof": 18
		}],
		47: [function(e, t, r) {
			"use strict";
			var n = e("@babel/runtime/helpers/interopRequireDefault");
			Object.defineProperty(r, "__esModule", {
				value: !0
			}), r.errors = r.P2PError = void 0, r.getErrorByCode = function(e) {
				return {
					2100: c.P2P_CONN_SERVER_UNKNOWN,
					2101: c.P2P_CONN_SERVER_UNAVAILABLE,
					2102: c.P2P_CONN_SERVER_BUSY,
					2103: c.P2P_CONN_SERVER_NOT_SUPPORTED,
					2110: c.P2P_CONN_CLIENT_UNKNOWN,
					2111: c.P2P_CONN_CLIENT_NOT_INITIALIZED,
					2120: c.P2P_CONN_AUTH_UNKNOWN,
					2121: c.P2P_CONN_AUTH_FAILED,
					2201: c.P2P_MESSAGING_TARGET_UNREACHABLE,
					2400: c.P2P_CLIENT_UNKNOWN,
					2401: c.P2P_CLIENT_UNSUPPORTED_METHOD,
					2402: c.P2P_CLIENT_ILLEGAL_ARGUMENT,
					2403: c.P2P_CLIENT_INVALID_STATE,
					2404: c.P2P_CLIENT_NOT_ALLOWED,
					2500: c.P2P_WEBRTC_UNKNOWN,
					2501: c.P2P_WEBRTC_SDP
				} [e]
			};
			var i = n(e("@babel/runtime/helpers/classCallCheck")),
				a = n(e("@babel/runtime/helpers/inherits")),
				o = n(e("@babel/runtime/helpers/possibleConstructorReturn")),
				s = n(e("@babel/runtime/helpers/getPrototypeOf")),
				e = n(e("@babel/runtime/helpers/wrapNativeSuper"));

			function u(r) {
				var n = function() {
					if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
					if (Reflect.construct.sham) return !1;
					if ("function" == typeof Proxy) return !0;
					try {
						return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [],
							function() {})), !0
					} catch (e) {
						return !1
					}
				}();
				return function() {
					var e, t = (0, s.default)(r);
					return t = n ? (e = (0, s.default)(this).constructor, Reflect.construct(t,
						arguments, e)) : t.apply(this, arguments), (0, o.default)(this, t)
				}
			}
			var c = {
				P2P_CONN_SERVER_UNKNOWN: {
					code: 2100,
					message: "Server unknown error."
				},
				P2P_CONN_SERVER_UNAVAILABLE: {
					code: 2101,
					message: "Server is unavaliable."
				},
				P2P_CONN_SERVER_BUSY: {
					code: 2102,
					message: "Server is too busy."
				},
				P2P_CONN_SERVER_NOT_SUPPORTED: {
					code: 2103,
					message: "Method has not been supported by server."
				},
				P2P_CONN_CLIENT_UNKNOWN: {
					code: 2110,
					message: "Client unknown error."
				},
				P2P_CONN_CLIENT_NOT_INITIALIZED: {
					code: 2111,
					message: "Connection is not initialized."
				},
				P2P_CONN_AUTH_UNKNOWN: {
					code: 2120,
					message: "Authentication unknown error."
				},
				P2P_CONN_AUTH_FAILED: {
					code: 2121,
					message: "Wrong username or token."
				},
				P2P_MESSAGING_TARGET_UNREACHABLE: {
					code: 2201,
					message: "Remote user cannot be reached."
				},
				P2P_CLIENT_DENIED: {
					code: 2202,
					message: "User is denied."
				},
				P2P_CLIENT_UNKNOWN: {
					code: 2400,
					message: "Unknown errors."
				},
				P2P_CLIENT_UNSUPPORTED_METHOD: {
					code: 2401,
					message: "This method is unsupported in current browser."
				},
				P2P_CLIENT_ILLEGAL_ARGUMENT: {
					code: 2402,
					message: "Illegal argument."
				},
				P2P_CLIENT_INVALID_STATE: {
					code: 2403,
					message: "Invalid peer state."
				},
				P2P_CLIENT_NOT_ALLOWED: {
					code: 2404,
					message: "Remote user is not allowed."
				},
				P2P_WEBRTC_UNKNOWN: {
					code: 2500,
					message: "WebRTC error."
				},
				P2P_WEBRTC_SDP: {
					code: 2502,
					message: "SDP error."
				}
			};
			r.errors = c;
			e = function(e) {
				(0, a.default)(n, e);
				var r = u(n);

				function n(e, t) {
					return (0, i.default)(this, n), (t = r.call(this, t)).code = "number" ==
						typeof e ? e : e.code, t
				}
				return n
			}((0, e.default)(Error));
			r.P2PError = e
		}, {
			"@babel/runtime/helpers/classCallCheck": 5,
			"@babel/runtime/helpers/getPrototypeOf": 8,
			"@babel/runtime/helpers/inherits": 9,
			"@babel/runtime/helpers/interopRequireDefault": 10,
			"@babel/runtime/helpers/possibleConstructorReturn": 15,
			"@babel/runtime/helpers/wrapNativeSuper": 20
		}],
		48: [function(e, t, r) {
			"use strict";
			var n = e("@babel/runtime/helpers/interopRequireDefault");
			Object.defineProperty(r, "__esModule", {
				value: !0
			}), Object.defineProperty(r, "P2PClient", {
				enumerable: !0,
				get: function() {
					return i.default
				}
			}), Object.defineProperty(r, "P2PError", {
				enumerable: !0,
				get: function() {
					return a.P2PError
				}
			});
			var i = n(e("./p2pclient.js")),
				a = e("./error.js")
		}, {
			"./error.js": 47,
			"./p2pclient.js": 49,
			"@babel/runtime/helpers/interopRequireDefault": 10
		}],
		49: [function(e, t, r) {
			"use strict";
			var n = e("@babel/runtime/helpers/interopRequireDefault"),
				o = e("@babel/runtime/helpers/typeof");
			Object.defineProperty(r, "__esModule", {
				value: !0
			}), r.default = void 0;
			var p = n(e("../base/logger.js")),
				h = e("../base/event.js"),
				m = function(e, t) {
					if (!t && e && e.__esModule) return e;
					if (null === e || "object" !== o(e) && "function" != typeof e) return {
						default: e
					};
					t = s(t);
					if (t && t.has(e)) return t.get(e);
					var r, n = {},
						i = Object.defineProperty && Object.getOwnPropertyDescriptor;
					for (r in e) {
						var a;
						"default" !== r && Object.prototype.hasOwnProperty.call(e, r) && ((a = i ?
							Object.getOwnPropertyDescriptor(e, r) : null) && (a.get || a
							.set) ? Object.defineProperty(n, r, a) : n[r] = e[r])
					}
					n.default = e, t && t.set(e, n);
					return n
				}(e("./error.js")),
				b = n(e("./peerconnection-channel.js"));

			function s(e) {
				if ("function" != typeof WeakMap) return null;
				var t = new WeakMap,
					r = new WeakMap;
				return (s = function(e) {
					return e ? r : t
				})(e)
			}
			var v = 1,
				g = 2,
				_ = 3,
				e = function(e, t) {
					Object.setPrototypeOf(this, new h.EventDispatcher);
					var n, i = e,
						a = t,
						o = new Map,
						s = new Map,
						u = this,
						c = v;
					a.onMessage = function(e, t) {
						p.default.debug("Received signaling message from " + e + ": " + t);
						var r = JSON.parse(t),
							t = r.connectionId;
						u.allowedRemoteIds.indexOf(e) < 0 ? l(e, r.connectionId, "chat-closed",
								m.errors.P2P_CLIENT_DENIED) : !s.has(e) || s.get(e) === t || d(
								e) ? "chat-closed" !== r.type ? f(e, t).onMessage(r) : o.has(
							e) && (f(e, t).onMessage(r), o.delete(e)) : p.default.warning(
								"Collision detected, ignore this message because current endpoint is impolite peer."
								)
					}, a.onServerDisconnected = function() {
						c = v, u.dispatchEvent(new h.OwtEvent("serverdisconnected"))
					}, this.allowedRemoteIds = [], this.connect = function(e) {
						return c !== v ? (p.default.warning("Invalid connection state: " + c),
							Promise.reject(new m.P2PError(m.errors
								.P2P_CLIENT_INVALID_STATE))) : (c = g, new Promise(function(
							t, r) {
							a.connect(e).then(function(e) {
								c = _, t(n = e)
							}, function(e) {
								r(new m.P2PError(m.getErrorByCode(e)))
							})
						}))
					}, this.disconnect = function() {
						c != v && (o.forEach(function(e) {
							e.stop()
						}), o.clear(), a.disconnect())
					}, this.publish = function(e, t) {
						return c !== _ ? Promise.reject(new m.P2PError(m.errors
								.P2P_CLIENT_INVALID_STATE,
								"P2P Client is not connected to signaling channel.")) : this
							.allowedRemoteIds.indexOf(e) < 0 ? Promise.reject(new m.P2PError(m
								.errors.P2P_CLIENT_NOT_ALLOWED)) : Promise.resolve(f(e).publish(
								t))
					}, this.send = function(e, t) {
						return c !== _ ? Promise.reject(new m.P2PError(m.errors
								.P2P_CLIENT_INVALID_STATE,
								"P2P Client is not connected to signaling channel.")) : this
							.allowedRemoteIds.indexOf(e) < 0 ? Promise.reject(new m.P2PError(m
								.errors.P2P_CLIENT_NOT_ALLOWED)) : Promise.resolve(f(e).send(t))
					}, this.stop = function(e) {
						o.has(e) ? (o.get(e).stop(), o.delete(e)) : p.default.warning(
							"No PeerConnection between current endpoint and specific remote endpoint."
							)
					}, this.getStats = function(e) {
						return o.has(e) ? o.get(e).getStats() : Promise.reject(new m.P2PError(m
							.errors.P2P_CLIENT_INVALID_STATE,
							"No PeerConnection between current endpoint and specific remote endpoint."
							))
					}, this.getPeerConnection = function(e) {
						return o.has(e) ? o.get(e).peerConnection : Promise.reject(new m
							.P2PError(m.errors.P2P_CLIENT_INVALID_STATE,
								"No PeerConnection between current endpoint and specific remote endpoint."
								))
					};
					var l = function(e, t, r, n) {
							t = {
								type: r,
								connectionId: t
							};
							return n && (t.data = n), a.send(e, JSON.stringify(t)).catch(function(
							e) {
								if ("number" == typeof e) throw m.getErrorByCode(e)
							})
						},
						d = function(e) {
							return n < e
						},
						f = function(e, t) {
							var r;
							return !t && s.has(e) && (t = s.get(e)), s.has(e) && s.get(e) != t && u
								.stop(e), t || (t = Math.round(1e5 * Math.random())), s.set(e, t), o
								.has(e) || ((r = Object.create(h.EventDispatcher))
									.sendSignalingMessage = l, (r = new b.default(i, n, e, t, r))
									.addEventListener("streamadded", function(e) {
										u.dispatchEvent(e)
									}), r.addEventListener("messagereceived", function(e) {
										u.dispatchEvent(e)
									}), r.addEventListener("ended", function() {
										o.has(e) && o.delete(e), s.delete(e)
									}), o.set(e, r)), o.get(e)
						}
				};
			r.default = e
		}, {
			"../base/event.js": 25,
			"../base/logger.js": 27,
			"./error.js": 47,
			"./peerconnection-channel.js": 50,
			"@babel/runtime/helpers/interopRequireDefault": 10,
			"@babel/runtime/helpers/typeof": 18
		}],
		50: [function(e, t, r) {
			"use strict";
			var n = e("@babel/runtime/helpers/interopRequireDefault"),
				o = e("@babel/runtime/helpers/typeof");
			Object.defineProperty(r, "__esModule", {
				value: !0
			}), r.default = r.P2PPeerConnectionChannelEvent = void 0;
			var f = n(e("@babel/runtime/helpers/slicedToArray")),
				i = n(e("@babel/runtime/helpers/typeof")),
				a = n(e("@babel/runtime/helpers/createClass")),
				u = n(e("@babel/runtime/helpers/classCallCheck")),
				c = n(e("@babel/runtime/helpers/inherits")),
				s = n(e("@babel/runtime/helpers/possibleConstructorReturn")),
				l = n(e("@babel/runtime/helpers/getPrototypeOf")),
				d = n(e("@babel/runtime/helpers/wrapNativeSuper")),
				p = n(e("../base/logger.js")),
				h = e("../base/event.js"),
				m = e("../base/publication.js"),
				b = P(e("../base/utils.js")),
				v = P(e("./error.js")),
				g = P(e("../base/stream.js")),
				_ = P(e("../base/sdputils.js")),
				y = e("../base/transport.js");

			function S(e) {
				if ("function" != typeof WeakMap) return null;
				var t = new WeakMap,
					r = new WeakMap;
				return (S = function(e) {
					return e ? r : t
				})(e)
			}

			function P(e, t) {
				if (!t && e && e.__esModule) return e;
				if (null === e || "object" !== o(e) && "function" != typeof e) return {
					default: e
				};
				t = S(t);
				if (t && t.has(e)) return t.get(e);
				var r, n, i = {},
					a = Object.defineProperty && Object.getOwnPropertyDescriptor;
				for (r in e) "default" !== r && Object.prototype.hasOwnProperty.call(e, r) && ((n =
						a ? Object.getOwnPropertyDescriptor(e, r) : null) && (n.get || n.set) ?
					Object.defineProperty(i, r, n) : i[r] = e[r]);
				return i.default = e, t && t.set(e, i), i
			}

			function w(e, t) {
				var r = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
				if (!r) {
					if (Array.isArray(e) || (r = function(e, t) {
							if (e) {
								if ("string" == typeof e) return C(e, t);
								var r = Object.prototype.toString.call(e).slice(8, -1);
								return "Map" === (r = "Object" === r && e.constructor ? e
										.constructor.name : r) || "Set" === r ? Array.from(e) :
									"Arguments" === r ||
									/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? C(e,
									t) : void 0
							}
						}(e)) || t && e && "number" == typeof e.length) {
						r && (e = r);
						var n = 0,
							t = function() {};
						return {
							s: t,
							n: function() {
								return n >= e.length ? {
									done: !0
								} : {
									done: !1,
									value: e[n++]
								}
							},
							e: function(e) {
								throw e
							},
							f: t
						}
					}
					throw new TypeError(
						"Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
						)
				}
				var i, a = !0,
					o = !1;
				return {
					s: function() {
						r = r.call(e)
					},
					n: function() {
						var e = r.next();
						return a = e.done, e
					},
					e: function(e) {
						o = !0, i = e
					},
					f: function() {
						try {
							a || null == r.return || r.return()
						} finally {
							if (o) throw i
						}
					}
				}
			}

			function C(e, t) {
				(null == t || t > e.length) && (t = e.length);
				for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
				return n
			}

			function k(r) {
				var n = function() {
					if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
					if (Reflect.construct.sham) return !1;
					if ("function" == typeof Proxy) return !0;
					try {
						return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [],
							function() {})), !0
					} catch (e) {
						return !1
					}
				}();
				return function() {
					var e, t = (0, l.default)(r);
					return t = n ? (e = (0, l.default)(this).constructor, Reflect.construct(t,
						arguments, e)) : t.apply(this, arguments), (0, s.default)(this, t)
				}
			}
			d = function(e) {
				(0, c.default)(n, e);
				var r = k(n);

				function n(e) {
					var t;
					return (0, u.default)(this, n), (t = r.call(this, e)).stream = e.stream, t
				}
				return n
			}((0, d.default)(Event));
			r.P2PPeerConnectionChannelEvent = d;
			var E = "message",
				j = "chat-closed",
				O = "chat-track-sources",
				T = "chat-stream-info",
				x = "chat-signal",
				I = "chat-tracks-added",
				R = "chat-tracks-removed",
				M = "chat-data-received",
				A = "chat-ua",
				N = b.sysInfo(),
				d = function(e) {
					(0, c.default)(s, e);
					var o = k(s);

					function s(e, t, r, n, i) {
						var a;
						return (0, u.default)(this, s), (a = o.call(this))._config = e, a
							._remoteId = r, a._connectionId = n, a._signaling = i, a._pc = null, a
							._publishedStreams = new Map, a._pendingStreams = [], a
							._publishingStreams = [], a._pendingUnpublishStreams = [], a
							._remoteStreamInfo = new Map, a._remoteStreams = [], a
							._remoteTrackSourceInfo = new Map, a._publishPromises = new Map, a
							._unpublishPromises = new Map, a._publishingStreamTracks = new Map, a
							._publishedStreamTracks = new Map, a._isNegotiationNeeded = !1, a
							._remoteSideSupportsRemoveStream = !0, a
							._remoteSideIgnoresDataChannelAcks = !1, a._remoteIceCandidates = [], a
							._dataChannels = new Map, a._pendingMessages = [], a._dataSeq = 1, a
							._sendDataPromises = new Map, a._addedTrackIds = [], a._isPolitePeer =
							t < r, a._settingLocalSdp = !1, a._settingRemoteSdp = !1, a
							._disposed = !1, a._createPeerConnection(), a._sendUa(N), a
					}
					return (0, a.default)(s, [{
						key: "peerConnection",
						get: function() {
							return this._pc
						}
					}, {
						key: "publish",
						value: function(n) {
							var i = this;
							return n instanceof g.LocalStream ? this
								._publishedStreams.has(n) ? Promise.reject(new v
									.P2PError(v.errors.P2P_CLIENT_ILLEGAL_ARGUMENT,
										"Duplicated stream.")) : this
								._areAllTracksEnded(n.mediaStream) ? Promise.reject(
									new v.P2PError(v.errors
										.P2P_CLIENT_INVALID_STATE,
										"All tracks are ended.")) : this
								._sendStreamInfo(n).then(function() {
									return new Promise(function(e, t) {
										i._addStream(n.mediaStream), i
											._publishingStreams.push(n);
										var r = Array.from(n.mediaStream
											.getTracks(),
											function(e) {
												return e.id
											});
										i._publishingStreamTracks.set(n
												.mediaStream.id, r), i
											._publishPromises.set(n
												.mediaStream.id, {
													resolve: e,
													reject: t
												})
									})
								}) : Promise.reject(new TypeError(
									"Invalid stream."))
						}
					}, {
						key: "send",
						value: function(e) {
							var r = this;
							if ("string" != typeof e) return Promise.reject(
								new TypeError("Invalid message."));
							var n = {
								id: this._dataSeq++,
								data: e
							};
							return this._dataChannels.has(E) || this
								._createDataChannel(E), "open" === this
								._dataChannels.get(E).readyState ? (this
									._dataChannels.get(E).send(JSON.stringify(n)),
									Promise.resolve()) : (this._pendingMessages
									.push(n), new Promise(function(e, t) {
										r._sendDataPromises.set(n.id, {
											resolve: e,
											reject: t
										})
									}))
						}
					}, {
						key: "stop",
						value: function() {
							this._stop(void 0, !0)
						}
					}, {
						key: "getStats",
						value: function(e) {
							var t = this;
							if (this._pc) {
								if (void 0 === e) return this._pc.getStats();
								var r = [];
								return Promise.all([e.getTracks().forEach(function(
									e) {
									t._getStats(e, r)
								})]).then(function() {
									return new Promise(function(e, t) {
										e(r)
									})
								})
							}
							return Promise.reject(new v.P2PError(v.errors
								.P2P_CLIENT_INVALID_STATE))
						}
					}, {
						key: "_getStats",
						value: function(e, t) {
							return this._pc.getStats(e).then(function(e) {
								t.push(e)
							})
						}
					}, {
						key: "_addStream",
						value: function(e) {
							var t, r = w(e.getTracks());
							try {
								for (r.s(); !(t = r.n()).done;) {
									var n = t.value;
									this._pc.addTransceiver(n, {
										direction: "sendonly",
										streams: [e]
									})
								}
							} catch (e) {
								r.e(e)
							} finally {
								r.f()
							}
						}
					}, {
						key: "onMessage",
						value: function(e) {
							this._SignalingMesssageHandler(e)
						}
					}, {
						key: "_sendSdp",
						value: function(e) {
							return this._signaling.sendSignalingMessage(this
								._remoteId, this._connectionId, x, e)
						}
					}, {
						key: "_sendUa",
						value: function(e) {
							e = {
								sdk: e.sdk,
								capabilities: e.capabilities
							};
							this._sendSignalingMessage(A, e)
						}
					}, {
						key: "_sendSignalingMessage",
						value: function(e, t) {
							return this._signaling.sendSignalingMessage(this
								._remoteId, this._connectionId, e, t)
						}
					}, {
						key: "_SignalingMesssageHandler",
						value: function(e) {
							switch (p.default.debug("Channel received message: " +
								e), e.type) {
								case A:
									this._handleRemoteCapability(e.data);
									break;
								case O:
									this._trackSourcesHandler(e.data);
									break;
								case T:
									this._streamInfoHandler(e.data);
									break;
								case x:
									this._sdpHandler(e.data);
									break;
								case I:
									this._tracksAddedHandler(e.data);
									break;
								case R:
									this._tracksRemovedHandler(e.data);
									break;
								case M:
									this._dataReceivedHandler(e.data);
									break;
								case j:
									this._chatClosedHandler(e.data);
									break;
								default:
									p.default.error(
										"Invalid signaling message received. Type: " +
										e.type)
							}
						}
					}, {
						key: "_tracksAddedHandler",
						value: function(e) {
							var t, l = this,
								r = w(e);
							try {
								var n = function() {
									var c = t.value;
									l._publishingStreamTracks.forEach(function(
										e, u) {
										for (var t = 0; t < e
											.length; t++) e[t] === c &&
											(l._publishedStreamTracks
												.has(u) || l
												._publishedStreamTracks
												.set(u, []), l
												._publishedStreamTracks
												.get(u).push(e[t]), e
												.splice(t, 1)), 0 == e
											.length && function() {
												if (!l._publishPromises
													.has(u)) return p
													.default
													.warning(
														"Cannot find the promise for publishing " +
														u);
												var e = l
													._publishingStreams
													.findIndex(function(
														e) {
														return e
															.mediaStream
															.id == u
													}),
													t = l
													._publishingStreams[
														e];
												l._publishingStreams
													.splice(e, 1);
												var r = new y
													.TransportSettings(y
														.TransportType
														.WEBRTC, void 0
														);
												r.rtpTransceivers = [];
												var n, i = w(l._pc
													.getTransceivers()
													);
												try {
													for (i.s(); !(n = i
															.n())
														.done;) {
														var a, o = n
															.value;
														(null === (a = o
																.sender
																) ||
															void 0 ===
															a ? void 0 :
															a.track) in
														l._publishedStreamTracks
															.get(u) && r
															.rtpTransceivers
															.push(o)
													}
												} catch (e) {
													i.e(e)
												} finally {
													i.f()
												}
												var s = new m
													.Publication(c, r,
														function() {
															l._unpublish(
																	t)
																.then(
																	function() {
																		s.dispatchEvent(
																			new h
																			.OwtEvent(
																				"ended"
																				)
																			)
																	},
																	function(
																		e
																		) {
																		p.default
																			.debug(
																				"Something wrong happened during stopping a publication. " +
																				e
																				.message
																				)
																	})
														},
														function() {
															return t &&
																t
																.mediaStream ?
																l
																.getStats(
																	t
																	.mediaStream
																	) :
																Promise
																.reject(
																	new v
																	.P2PError(
																		v
																		.errors
																		.P2P_CLIENT_INVALID_STATE,
																		"Publication is not available."
																		)
																	)
														});
												l._publishedStreams.set(
														t, s), l
													._publishPromises
													.get(u).resolve(s),
													l._publishPromises
													.delete(u)
											}()
									})
								};
								for (r.s(); !(t = r.n()).done;) n()
							} catch (e) {
								r.e(e)
							} finally {
								r.f()
							}
						}
					}, {
						key: "_tracksRemovedHandler",
						value: function(e) {
							var t, r = this,
								n = w(e);
							try {
								for (n.s(); !(t = n.n()).done;) ! function() {
									var n = t.value;
									r._publishedStreamTracks.forEach(function(e,
										t) {
										for (var r = 0; r < e
											.length; r++) e[r] === n &&
											e.splice(r, 1)
									})
								}()
							} catch (e) {
								n.e(e)
							} finally {
								n.f()
							}
						}
					}, {
						key: "_dataReceivedHandler",
						value: function(e) {
							this._sendDataPromises.has(e) ? this._sendDataPromises
								.get(e).resolve() : p.default.warning(
									"Received unknown data received message. ID: " +
									e)
						}
					}, {
						key: "_sdpHandler",
						value: function(e) {
							"offer" === e.type ? this._onOffer(e) : "answer" === e
								.type ? this._onAnswer(e) : "candidates" === e
								.type && this._onRemoteIceCandidate(e)
						}
					}, {
						key: "_trackSourcesHandler",
						value: function(e) {
							var t, r = w(e);
							try {
								for (r.s(); !(t = r.n()).done;) {
									var n = t.value;
									this._remoteTrackSourceInfo.set(n.id, n.source)
								}
							} catch (e) {
								r.e(e)
							} finally {
								r.f()
							}
						}
					}, {
						key: "_streamInfoHandler",
						value: function(e) {
							e ? this._remoteStreamInfo.set(e.id, {
								source: e.source,
								attributes: e.attributes,
								stream: null,
								mediaStream: null,
								trackIds: e.tracks
							}) : p.default.warning("Unexpected stream info.")
						}
					}, {
						key: "_chatClosedHandler",
						value: function(e) {
							this._disposed = !0, this._stop(e, !1)
						}
					}, {
						key: "_onOffer",
						value: function(e) {
							var t = this;
							if (p.default.debug(
									"About to set remote description. Signaling state: " +
									this._pc.signalingState), "stable" !== this._pc
								.signalingState || this._settingLocalSdp) {
								if (!this._isPolitePeer) return void p.default
									.debug(
										"Collision detected. Ignore this offer."
										);
								p.default.debug("Rollback."), this
									._settingLocalSdp = !0, this._pc
									.setLocalDescription().then(function() {
										t._settingLocalSdp = !1
									})
							}
							e.sdp = this._setRtpSenderOptions(e.sdp, this._config);
							e = new RTCSessionDescription(e);
							this._settingRemoteSdp = !0, this._pc
								.setRemoteDescription(e).then(function() {
									t._settingRemoteSdp = !1, t
										._createAndSendAnswer()
								}, function(e) {
									p.default.debug(
										"Set remote description failed. Message: " +
										e.message), t._stop(e, !0)
								})
						}
					}, {
						key: "_onAnswer",
						value: function(e) {
							var t = this;
							p.default.debug(
									"About to set remote description. Signaling state: " +
									this._pc.signalingState), e.sdp = this
								._setRtpSenderOptions(e.sdp, this._config);
							e = new RTCSessionDescription(e);
							this._settingRemoteSdp = !0, this._pc
								.setRemoteDescription(new RTCSessionDescription(e))
								.then(function() {
									p.default.debug(
											"Set remote descripiton successfully."
											), t._settingRemoteSdp = !1, t
										._drainPendingMessages()
								}, function(e) {
									p.default.debug(
										"Set remote description failed. Message: " +
										e.message), t._stop(e, !0)
								})
						}
					}, {
						key: "_onLocalIceCandidate",
						value: function(e) {
							e.candidate ? this._sendSdp({
								type: "candidates",
								candidate: e.candidate.candidate,
								sdpMid: e.candidate.sdpMid,
								sdpMLineIndex: e.candidate.sdpMLineIndex
							}).catch(function(e) {
								p.default.warning(
									"Failed to send candidate.")
							}) : p.default.debug("Empty candidate.")
						}
					}, {
						key: "_onRemoteTrackAdded",
						value: function(e) {
							p.default.debug("Remote track added.");
							var t, r = w(e.streams);
							try {
								for (r.s(); !(t = r.n()).done;) {
									var n = t.value;
									if (!this._remoteStreamInfo.has(n.id))
									return void p.default.warning(
											"Missing stream info.");
									this._remoteStreamInfo.get(n.id).stream || this
										._setStreamToRemoteStreamInfo(n)
								}
							} catch (e) {
								r.e(e)
							} finally {
								r.f()
							}
							"connected" === this._pc.iceConnectionState ||
								"completed" === this._pc.iceConnectionState ? this
								._checkIceConnectionStateAndFireEvent() : this
								._addedTrackIds.concat(e.track.id)
						}
					}, {
						key: "_onRemoteStreamAdded",
						value: function(t) {
							var e, r;
							p.default.debug("Remote stream added."), this
								._remoteStreamInfo.has(t.stream.id) ? (
									"connected" === this._pc.iceConnectionState ||
									"completed" === this._pc.iceConnectionState ?
									this._sendSignalingMessage(I, this
										._remoteStreamInfo.get(t.stream.id).trackIds
										) : this._addedTrackIds = this
									._addedTrackIds.concat(this._remoteStreamInfo
										.get(t.stream.id).trackIds), e = this
									._remoteStreamInfo.get(t.stream.id).source
									.audio, r = this._remoteStreamInfo.get(t.stream
										.id).source.video, e = new g
									.StreamSourceInfo(e, r), b.isSafari() && (e
										.audio || t.stream.getAudioTracks().forEach(
											function(e) {
												t.stream.removeTrack(e)
											}), e.video || t.stream.getVideoTracks()
										.forEach(function(e) {
											t.stream.removeTrack(e)
										})), r = this._remoteStreamInfo.get(t.stream
										.id).attributes, (r = new g.RemoteStream(
										void 0, this._remoteId, t.stream, e, r)) &&
									(this._remoteStreams.push(r), r = new g
										.StreamEvent("streamadded", {
											stream: r
										}), this.dispatchEvent(r))) : p.default
								.warning("Cannot find source info for stream " + t
									.stream.id)
						}
					}, {
						key: "_onRemoteStreamRemoved",
						value: function(t) {
							p.default.debug("Remote stream removed.");
							var e, r = this._remoteStreams.findIndex(function(e) {
								return e.mediaStream.id === t.stream.id
							}); - 1 !== r && (e = this._remoteStreams[r], this
								._streamRemoved(e), this._remoteStreams.splice(
									r, 1))
						}
					}, {
						key: "_onNegotiationneeded",
						value: function() {
							"stable" !== this._pc.signalingState || this._pc
								._settingLocalSdp || this._settingRemoteSdp ? this
								._isNegotiationNeeded = !0 : this._doNegotiate()
						}
					}, {
						key: "_onRemoteIceCandidate",
						value: function(e) {
							e = new RTCIceCandidate({
								candidate: e.candidate,
								sdpMid: e.sdpMid,
								sdpMLineIndex: e.sdpMLineIndex
							});
							this._pc.remoteDescription && "" !== this._pc
								.remoteDescription.sdp ? (p.default.debug(
										"Add remote ice candidates."), this._pc
									.addIceCandidate(e).catch(function(e) {
										p.default.warning(
											"Error processing ICE candidate: " +
											e)
									})) : (p.default.debug(
										"Cache remote ice candidates."), this
									._remoteIceCandidates.push(e))
						}
					}, {
						key: "_onSignalingStateChange",
						value: function(e) {
							p.default.debug("Signaling state changed: " + this._pc
									.signalingState), "have-remote-offer" !== this
								._pc.signalingState && "stable" !== this._pc
								.signalingState || this
								._drainPendingRemoteIceCandidates(), "stable" ===
								this._pc.signalingState && (this._negotiating = !1,
									this._isNegotiationNeeded ? this
									._onNegotiationneeded() : (this
										._drainPendingStreams(), this
										._drainPendingMessages()))
						}
					}, {
						key: "_onIceConnectionStateChange",
						value: function(e) {
							var t;
							"closed" === e.currentTarget.iceConnectionState ||
								"failed" === e.currentTarget.iceConnectionState ? (
									t = new v.P2PError(v.errors.P2P_WEBRTC_UNKNOWN,
										"ICE connection failed or closed."), this
									._stop(t, !0)) : "connected" !== e.currentTarget
								.iceConnectionState && "completed" !== e
								.currentTarget.iceConnectionState || (this
									._sendSignalingMessage(I, this._addedTrackIds),
									this._addedTrackIds = [], this
									._checkIceConnectionStateAndFireEvent())
						}
					}, {
						key: "_onDataChannelMessage",
						value: function(e) {
							e = JSON.parse(e.data);
							this._remoteSideIgnoresDataChannelAcks || this
								._sendSignalingMessage(M, e.id);
							e = new h.MessageEvent("messagereceived", {
								message: e.data,
								origin: this._remoteId
							});
							this.dispatchEvent(e)
						}
					}, {
						key: "_onDataChannelOpen",
						value: function(e) {
							p.default.debug("Data Channel is opened."), e.target
								.label === E && (p.default.debug(
										"Data channel for messages is opened."),
									this._drainPendingMessages())
						}
					}, {
						key: "_onDataChannelClose",
						value: function(e) {
							p.default.debug("Data Channel is closed.")
						}
					}, {
						key: "_streamRemoved",
						value: function(e) {
							this._remoteStreamInfo.has(e.mediaStream.id) || p
								.default.warning("Cannot find stream info."), this
								._sendSignalingMessage(R, this._remoteStreamInfo
									.get(e.mediaStream.id).trackIds);
							var t = new h.OwtEvent("ended");
							e.dispatchEvent(t)
						}
					}, {
						key: "_createPeerConnection",
						value: function() {
							var t = this,
								e = this._config.rtcConfiguration || {};
							this._pc = new RTCPeerConnection(e), this._pc.ontrack =
								function(e) {
									t._onRemoteTrackAdded.apply(t, [e])
								}, this._pc.onicecandidate = function(e) {
									t._onLocalIceCandidate.apply(t, [e])
								}, this._pc.onsignalingstatechange = function(e) {
									t._onSignalingStateChange.apply(t, [e])
								}, this._pc.ondatachannel = function(e) {
									p.default.debug("On data channel."), t
										._dataChannels.has(e.channel.label) || (t
											._dataChannels.set(e.channel.label, e
												.channel), p.default.debug(
												"Save remote created data channel.")
											), t._bindEventsToDataChannel(e.channel)
								}, this._pc.oniceconnectionstatechange = function(
								e) {
									t._onIceConnectionStateChange.apply(t, [e])
								}, this._pc.onnegotiationneeded = function() {
									t._onNegotiationneeded()
								}
						}
					}, {
						key: "_drainPendingStreams",
						value: function() {
							if (p.default.debug("Draining pending streams."), this
								._pc && "stable" === this._pc.signalingState) {
								p.default.debug(
									"Peer connection is ready for draining pending streams."
									);
								for (var e = 0; e < this._pendingStreams
									.length; e++) {
									var t = this._pendingStreams[e];
									this._pendingStreams.shift(), t.mediaStream && (
										this._addStream(t.mediaStream), p
										.default.debug(
											"Added stream to peer connection."),
										this._publishingStreams.push(t))
								}
								this._pendingStreams.length = 0;
								var r, n = w(this._pendingUnpublishStreams);
								try {
									for (n.s(); !(r = n.n()).done;) {
										var i = r.value;
										if (i.stream) {
											if ("function" == typeof this._pc
												.getTransceivers && "function" ==
												typeof this._pc.removeTrack) {
												var a, o = w(this._pc
													.getTransceivers());
												try {
													for (o.s(); !(a = o.n())
														.done;) {
														var s, u = a.value,
															c = w(i.stream
																.getTracks());
														try {
															for (c.s(); !(s = c.n())
																.done;) {
																var l = s.value;
																u.sender.track ==
																	l && (
																		"sendonly" ===
																		u
																		.direction ?
																		u.stop() :
																		this._pc
																		.removeTrack(
																			l))
															}
														} catch (e) {
															c.e(e)
														} finally {
															c.f()
														}
													}
												} catch (e) {
													o.e(e)
												} finally {
													o.f()
												}
											} else p.default.debug(
												"getSender or removeTrack is not supported, fallback to removeStream."
												), this._pc.removeStream(i
												.stream);
											this._unpublishPromises.get(i.stream.id)
												.resolve(), this._publishedStreams
												.delete(i)
										}
									}
								} catch (e) {
									n.e(e)
								} finally {
									n.f()
								}
								this._pendingUnpublishStreams.length = 0
							}
						}
					}, {
						key: "_drainPendingRemoteIceCandidates",
						value: function() {
							for (var e = 0; e < this._remoteIceCandidates
								.length; e++) p.default.debug("Add candidate"), this
								._pc.addIceCandidate(this._remoteIceCandidates[e])
								.catch(function(e) {
									p.default.warning(
										"Error processing ICE candidate: " +
										e)
								});
							this._remoteIceCandidates.length = 0
						}
					}, {
						key: "_drainPendingMessages",
						value: function() {
							if (p.default.debug("Draining pending messages."), 0 !=
								this._pendingMessages.length) {
								var e = this._dataChannels.get(E);
								if (e && "open" === e.readyState) {
									for (var t = 0; t < this._pendingMessages
										.length; t++) {
										p.default.debug(
											"Sending message via data channel: " +
											this._pendingMessages[t]), e.send(
											JSON.stringify(this
												._pendingMessages[t]));
										var r = this._pendingMessages[t].id;
										this._sendDataPromises.has(r) && this
											._sendDataPromises.get(r).resolve()
									}
									this._pendingMessages.length = 0
								} else this._pc && "closed" !== this._pc
									.connectionState && !e && this
									._createDataChannel(E)
							}
						}
					}, {
						key: "_sendStreamInfo",
						value: function(t) {
							if (!t || !t.mediaStream) return new v.P2PError(v.errors
								.P2P_CLIENT_ILLEGAL_ARGUMENT);
							var r = [];
							return t.mediaStream.getTracks().map(function(e) {
								r.push({
									id: e.id,
									source: t.source[e.kind]
								})
							}), Promise.all([this._sendSignalingMessage(O, r),
								this._sendSignalingMessage(T, {
									id: t.mediaStream.id,
									attributes: t.attributes,
									tracks: Array.from(r, function(e) {
										return e.id
									}),
									source: t.source
								})
							])
						}
					}, {
						key: "_handleRemoteCapability",
						value: function(e) {
							e.sdk && e.sdk && "JavaScript" === e.sdk.type && e
								.runtime && "Firefox" === e.runtime.name ? this
								._remoteSideSupportsRemoveStream = !1 : this
								._remoteSideSupportsRemoveStream = !0, e
								.capabilities && (this
									._remoteSideIgnoresDataChannelAcks = e
									.capabilities.ignoreDataChannelAcks)
						}
					}, {
						key: "_doNegotiate",
						value: function() {
							this._createAndSendOffer()
						}
					}, {
						key: "_setCodecOrder",
						value: function(e) {
							var t;
							return this._config.audioEncodings && (t = Array.from(
									this._config.audioEncodings,
									function(e) {
										return e.codec.name
									}), e = _.reorderCodecs(e, "audio", t)), this
								._config.videoEncodings && (t = Array.from(this
									._config.videoEncodings,
									function(e) {
										return e.codec.name
									}), e = _.reorderCodecs(e, "video", t)), e
						}
					}, {
						key: "_setMaxBitrate",
						value: function(e, t) {
							return "object" === (0, i.default)(t.audioEncodings) &&
								(e = _.setMaxBitrate(e, t.audioEncodings)), e =
								"object" === (0, i.default)(t.videoEncodings) ? _
								.setMaxBitrate(e, t.videoEncodings) : e
						}
					}, {
						key: "_setRtpSenderOptions",
						value: function(e, t) {
							return e = this._setMaxBitrate(e, t)
						}
					}, {
						key: "_setRtpReceiverOptions",
						value: function(e) {
							return e = this._setCodecOrder(e)
						}
					}, {
						key: "_createAndSendOffer",
						value: function() {
							var t = this;
							this._pc ? (this._isNegotiationNeeded = !1, this._pc
								.createOffer().then(function(e) {
									if (e.sdp = t._setRtpReceiverOptions(e
											.sdp), "stable" === t._pc
										.signalingState && !t
										._settingLocalSdp && !t
										._settingRemoteSdp) return t
										._settingLocalSdp = !0, t._pc
										.setLocalDescription(e).then(
											function() {
												return t
													._settingLocalSdp = !
													1, t._sendSdp(t._pc
														.localDescription
														)
											})
								}).catch(function(e) {
									p.default.error(e.message);
									e = new v.P2PError(v.errors
										.P2P_WEBRTC_SDP, e.message);
									t._stop(e, !0)
								})) : p.default.error(
								"Peer connection have not been created.")
						}
					}, {
						key: "_createAndSendAnswer",
						value: function() {
							var t = this;
							this._drainPendingStreams(), this
								._isNegotiationNeeded = !1, this._pc.createAnswer()
								.then(function(e) {
									return e.sdp = t._setRtpReceiverOptions(e
											.sdp), t
										._logCurrentAndPendingLocalDescription(),
										t._settingLocalSdp = !0, t._pc
										.setLocalDescription(e).then(
									function() {
											t._settingLocalSdp = !1
										})
								}).then(function() {
									return t._sendSdp(t._pc.localDescription)
								}).catch(function(e) {
									p.default.error(e.message +
										" Please check your codec settings."
										);
									e = new v.P2PError(v.errors.P2P_WEBRTC_SDP,
										e.message);
									t._stop(e, !0)
								})
						}
					}, {
						key: "_logCurrentAndPendingLocalDescription",
						value: function() {
							p.default.info("Current description: " + this._pc
								.currentLocalDescription), p.default.info(
								"Pending description: " + this._pc
								.pendingLocalDescription)
						}
					}, {
						key: "_getAndDeleteTrackSourceInfo",
						value: function(e) {
							if (0 < e.length) {
								var t = e[0].id;
								if (this._remoteTrackSourceInfo.has(t)) {
									e = this._remoteTrackSourceInfo.get(t);
									return this._remoteTrackSourceInfo.delete(t), e
								}
								p.default.warning("Cannot find source info for " +
									t)
							}
						}
					}, {
						key: "_unpublish",
						value: function(r) {
							var n = this;
							return navigator.mozGetUserMedia || !this
								._remoteSideSupportsRemoveStream ? (p.default.error(
									"Stopping a publication is not supported on Firefox. Please use P2PClient.stop() to stop the connection with remote endpoint."
									), Promise.reject(new v.P2PError(v.errors
									.P2P_CLIENT_UNSUPPORTED_METHOD))) : this
								._publishedStreams.has(r) ? (this
									._pendingUnpublishStreams.push(r), new Promise(
										function(e, t) {
											n._unpublishPromises.set(r.mediaStream
												.id, {
													resolve: e,
													reject: t
												}), n._drainPendingStreams()
										})) : Promise.reject(new v.P2PError(v.errors
									.P2P_CLIENT_ILLEGAL_ARGUMENT))
						}
					}, {
						key: "_createDataChannel",
						value: function(e) {
							this._dataChannels.has(e) ? p.default.warning(
								"Data channel labeled " + e + " already exists."
								) : this._pc ? (p.default.debug(
									"Create data channel."), e = this._pc
								.createDataChannel(e), this
								._bindEventsToDataChannel(e), this._dataChannels
								.set(E, e)) : p.default.debug(
								"PeerConnection is not available before creating DataChannel."
								)
						}
					}, {
						key: "_bindEventsToDataChannel",
						value: function(e) {
							var t = this;
							e.onmessage = function(e) {
								t._onDataChannelMessage.apply(t, [e])
							}, e.onopen = function(e) {
								t._onDataChannelOpen.apply(t, [e])
							}, e.onclose = function(e) {
								t._onDataChannelClose.apply(t, [e])
							}, e.onerror = function(e) {
								p.default.debug("Data Channel Error: " + e)
							}
						}
					}, {
						key: "_getStreamByTrack",
						value: function(e) {
							var t, r = [],
								n = w(this._remoteStreamInfo);
							try {
								for (n.s(); !(t = n.n()).done;) {
									var i = (0, f.default)(t.value, 2)[1];
									if (i.stream && i.stream.mediaStream) {
										var a, o = w(i.stream.mediaStream
										.getTracks());
										try {
											for (o.s(); !(a = o.n()).done;) e === a
												.value && r.push(i.stream
													.mediaStream)
										} catch (e) {
											o.e(e)
										} finally {
											o.f()
										}
									}
								}
							} catch (e) {
								n.e(e)
							} finally {
								n.f()
							}
							return r
						}
					}, {
						key: "_areAllTracksEnded",
						value: function(e) {
							var t, r = w(e.getTracks());
							try {
								for (r.s(); !(t = r.n()).done;)
									if ("live" === t.value.readyState) return !1
							} catch (e) {
								r.e(e)
							} finally {
								r.f()
							}
							return !0
						}
					}, {
						key: "_stop",
						value: function(e, t) {
							var r, n = (n = e) || new v.P2PError(v.errors
									.P2P_CLIENT_UNKNOWN),
								i = w(this._dataChannels);
							try {
								for (i.s(); !(r = i.n()).done;)(0, f.default)(r
									.value, 2)[1].close()
							} catch (e) {
								i.e(e)
							} finally {
								i.f()
							}
							this._dataChannels.clear(), this._pc && "closed" !==
								this._pc.iceConnectionState && this._pc.close();
							var a, o = w(this._publishPromises);
							try {
								for (o.s(); !(a = o.n()).done;)(0, f.default)(a
									.value, 2)[1].reject(n)
							} catch (e) {
								o.e(e)
							} finally {
								o.f()
							}
							this._publishPromises.clear();
							var s, u = w(this._unpublishPromises);
							try {
								for (u.s(); !(s = u.n()).done;)(0, f.default)(s
									.value, 2)[1].reject(n)
							} catch (e) {
								u.e(e)
							} finally {
								u.f()
							}
							this._unpublishPromises.clear();
							var c, l, d = w(this._sendDataPromises);
							try {
								for (d.s(); !(c = d.n()).done;)(0, f.default)(c
									.value, 2)[1].reject(n)
							} catch (e) {
								d.e(e)
							} finally {
								d.f()
							}
							this._sendDataPromises.clear(), this._publishedStreams
								.forEach(function(e) {
									e.dispatchEvent(new h.OwtEvent("ended"))
								}), this._publishedStreams.clear(), this
								._remoteStreams.forEach(function(e) {
									e.dispatchEvent(new h.OwtEvent("ended"))
								}), this._remoteStreams = [], this._disposed || (
									t && (e && ((l = JSON.parse(JSON.stringify(e)))
											.message =
											"Error happened at remote side."), this
										._sendSignalingMessage(j, l).catch(function(
											e) {
											p.default.debug(
												"Failed to send close." + e
												.message)
										})), this.dispatchEvent(new Event("ended")))
						}
					}, {
						key: "_setStreamToRemoteStreamInfo",
						value: function(e) {
							var t = this._remoteStreamInfo.get(e.id),
								r = t.attributes,
								n = new g.StreamSourceInfo(this._remoteStreamInfo
									.get(e.id).source.audio, this._remoteStreamInfo
									.get(e.id).source.video);
							t.stream = new g.RemoteStream(void 0, this._remoteId, e,
								n, r), t.mediaStream = e;
							t = t.stream;
							t ? this._remoteStreams.push(t) : p.default.warning(
								"Failed to create RemoteStream.")
						}
					}, {
						key: "_checkIceConnectionStateAndFireEvent",
						value: function() {
							var i = this;
							if ("connected" === this._pc.iceConnectionState ||
								"completed" === this._pc.iceConnectionState) {
								var e, t = w(this._remoteStreamInfo);
								try {
									for (t.s(); !(e = t.n()).done;) {
										var r = (0, f.default)(e.value, 2)[1];
										if (r.mediaStream) {
											var n, a = new g.StreamEvent(
													"streamadded", {
														stream: r.stream
													}),
												o = w(r.mediaStream.getTracks());
											try {
												for (o.s(); !(n = o.n()).done;) n
													.value.addEventListener("ended",
														function(e) {
															var t, r = w(i
																._getStreamByTrack(
																	e.target));
															try {
																for (r.s(); !(t = r
																		.n())
																	.done;) {
																	var n = t.value;
																	i._areAllTracksEnded(
																			n) && i
																		._onRemoteStreamRemoved({
																			stream: n
																		})
																}
															} catch (e) {
																r.e(e)
															} finally {
																r.f()
															}
														})
											} catch (e) {
												o.e(e)
											} finally {
												o.f()
											}
											this._sendSignalingMessage(I, r
													.trackIds), this
												._remoteStreamInfo.get(r.mediaStream
													.id).mediaStream = null, this
												.dispatchEvent(a)
										}
									}
								} catch (e) {
									t.e(e)
								} finally {
									t.f()
								}
							}
						}
					}]), s
				}(h.EventDispatcher);
			r.default = d
		}, {
			"../base/event.js": 25,
			"../base/logger.js": 27,
			"../base/publication.js": 30,
			"../base/sdputils.js": 31,
			"../base/stream.js": 32,
			"../base/transport.js": 33,
			"../base/utils.js": 34,
			"./error.js": 47,
			"@babel/runtime/helpers/classCallCheck": 5,
			"@babel/runtime/helpers/createClass": 7,
			"@babel/runtime/helpers/getPrototypeOf": 8,
			"@babel/runtime/helpers/inherits": 9,
			"@babel/runtime/helpers/interopRequireDefault": 10,
			"@babel/runtime/helpers/possibleConstructorReturn": 15,
			"@babel/runtime/helpers/slicedToArray": 17,
			"@babel/runtime/helpers/typeof": 18,
			"@babel/runtime/helpers/wrapNativeSuper": 20
		}]
	}, {}, [46])(46)
});
