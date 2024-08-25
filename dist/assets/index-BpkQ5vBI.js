var e,
  t,
  r,
  i,
  n,
  s,
  o,
  a,
  h,
  l,
  u,
  d,
  c,
  f,
  p,
  g,
  m,
  w,
  A,
  v,
  y,
  V,
  x,
  E,
  b,
  S = Object.defineProperty,
  R = (e, t, r) => (
    ((e, t, r) => {
      t in e
        ? S(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
        : (e[t] = r);
    })(e, "symbol" != typeof t ? t + "" : t, r),
    r
  );
!(function () {
  const e = document.createElement("link").relList;
  if (!(e && e.supports && e.supports("modulepreload"))) {
    for (const e of document.querySelectorAll('link[rel="modulepreload"]'))
      t(e);
    new MutationObserver((e) => {
      for (const r of e)
        if ("childList" === r.type)
          for (const e of r.addedNodes)
            "LINK" === e.tagName && "modulepreload" === e.rel && t(e);
    }).observe(document, { childList: !0, subtree: !0 });
  }
  function t(e) {
    if (e.ep) return;
    e.ep = !0;
    const t = (function (e) {
      const t = {};
      return (
        e.integrity && (t.integrity = e.integrity),
        e.referrerPolicy && (t.referrerPolicy = e.referrerPolicy),
        "use-credentials" === e.crossOrigin
          ? (t.credentials = "include")
          : "anonymous" === e.crossOrigin
          ? (t.credentials = "omit")
          : (t.credentials = "same-origin"),
        t
      );
    })(e);
    fetch(e.href, t);
  }
})();
const M = {
  exit: "If you want to exit Lizzy's portfolio, just close the tab.",
  bed: "This where I sleep. I feel uncomfortable when someone touches my bed so please do not sit or lie on it!",
  "sofa-table": "That's my sofa. I like to relax here and watch YouTube.",
  tv: 'That\'s my TV. I\'ve been watching tech channels a lot recently like :\n  <a href="https://www.youtube.com/@freecodecamp" target="_blank">freeCodeCamp.org</a>, and <a href="https://www.youtube.com/@james-kool" target="_blank">走歪的工程師James</a>(sometimes)\n  also some English learning channels such as: <a href="https://www.youtube.com/@bbclearningenglish" target="_blank">BBC Learning English</a>,\n  <a href="https://www.youtube.com/@LearnEnglishwithBobtheCanadian" target="_blank">Learn English with Bob the Canadian</a>',
  pc: "This is my PC. I work mostly in Java these days. I've worked on several e-commerce projects in that language. I also like Javascript. \n  Anyway regardless of the language, I just like programming and watching Vtubers hehe.",
  degree:
    "This is my degree of Bachelor of Arts. I studied Japanese language and culture at university. Following that, I learned programming from a boot camp.",
  resume:
    'This is my desk and on it is my resume on linkedin. <a href="https://www.linkedin.com/in/huangaa-9203141a0/" target="_blank">Check it out?</a> \n  Contact me if you have any interesting job opportunities',
  library:
    "There are a lot of programming books on my shelves. Also for leisure reading, a bunch of comic books and novels",
  projects:
    'Info about my learning projects and some works in github. <a href="https://github.com/yuikou" target="_blank">here</a>.',
  plave:
    'A Korean virtual idol group. They write their songs and arrange the choreography by themselves. It\'s really amazing please visit their official channel <a href="https://www.youtube.com/@plave_official" target="_blank">PLAVE 플레이브</a>\n  . Here is my favorite song, hope you enjoy that! <a href="https://youtu.be/FxB6_qaqHlY?si=4PJfOBbnXgwRdT1D" target="_blank">PLAVE(플레이브) \'WAY 4 LUV\' M/V</a>',
  shu: 'My favorite English Vtuber Shu Yamino from the group luxiem. He is talented and creative. Hope you can give him some support <a href="https://www.youtube.com/@ShuYamino" target="_blank">Shu Yamino【NIJISANJI EN】</a>',
  TBC: "TBC",
};
var T = Object.defineProperty,
  P = (e, t) => T(e, "name", { value: t, configurable: !0 }),
  B = (() => {
    for (var e = new Uint8Array(128), t = 0; t < 64; t++)
      e[t < 26 ? t + 65 : t < 52 ? t + 71 : t < 62 ? t - 4 : 4 * t - 205] = t;
    return (t) => {
      for (
        var r = t.length,
          i = new Uint8Array(
            ((3 * (r - ("=" == t[r - 1]) - ("=" == t[r - 2]))) / 4) | 0
          ),
          n = 0,
          s = 0;
        n < r;

      ) {
        var o = e[t.charCodeAt(n++)],
          a = e[t.charCodeAt(n++)],
          h = e[t.charCodeAt(n++)],
          l = e[t.charCodeAt(n++)];
        (i[s++] = (o << 2) | (a >> 4)),
          (i[s++] = (a << 4) | (h >> 2)),
          (i[s++] = (h << 6) | l);
      }
      return i;
    };
  })();
function k(e) {
  return (e * Math.PI) / 180;
}
function F(e) {
  return (180 * e) / Math.PI;
}
function I(e, t, r) {
  return t > r ? I(e, r, t) : Math.min(Math.max(e, t), r);
}
function C(e, t, r) {
  if ("number" == typeof e && "number" == typeof t) return e + (t - e) * r;
  if (e instanceof N && t instanceof N) return e.lerp(t, r);
  if (e instanceof O && t instanceof O) return e.lerp(t, r);
  throw new Error(
    `Bad value for lerp(): ${e}, ${t}. Only number, Vec2 and Color is supported.`
  );
}
function D(e, t, r, i, n) {
  return i + ((e - t) / (r - t)) * (n - i);
}
function U(e, t, r, i, n) {
  return I(D(e, t, r, i, n), i, n);
}
P(k, "deg2rad"),
  P(F, "rad2deg"),
  P(I, "clamp"),
  P(C, "lerp"),
  P(D, "map"),
  P(U, "mapc");
var N =
  (P(
    (e = class {
      constructor(e = 0, t = e) {
        R(this, "x", 0), R(this, "y", 0), (this.x = e), (this.y = t);
      }
      static fromAngle(t) {
        let r = k(t);
        return new e(Math.cos(r), Math.sin(r));
      }
      clone() {
        return new e(this.x, this.y);
      }
      add(...t) {
        let r = L(...t);
        return new e(this.x + r.x, this.y + r.y);
      }
      sub(...t) {
        let r = L(...t);
        return new e(this.x - r.x, this.y - r.y);
      }
      scale(...t) {
        let r = L(...t);
        return new e(this.x * r.x, this.y * r.y);
      }
      dist(...e) {
        let t = L(...e);
        return this.sub(t).len();
      }
      sdist(...e) {
        let t = L(...e);
        return this.sub(t).slen();
      }
      len() {
        return Math.sqrt(this.dot(this));
      }
      slen() {
        return this.dot(this);
      }
      unit() {
        let t = this.len();
        return 0 === t ? new e(0) : this.scale(1 / t);
      }
      normal() {
        return new e(this.y, -this.x);
      }
      reflect(e) {
        return this.sub(e.scale(2 * this.dot(e)));
      }
      project(e) {
        return e.scale(e.dot(this) / e.len());
      }
      reject(e) {
        return this.sub(this.project(e));
      }
      dot(e) {
        return this.x * e.x + this.y * e.y;
      }
      cross(e) {
        return this.x * e.y - this.y * e.x;
      }
      angle(...e) {
        let t = L(...e);
        return F(Math.atan2(this.y - t.y, this.x - t.x));
      }
      angleBetween(...e) {
        let t = L(...e);
        return F(Math.atan2(this.cross(t), this.dot(t)));
      }
      lerp(t, r) {
        return new e(C(this.x, t.x, r), C(this.y, t.y, r));
      }
      slerp(e, t) {
        let r = this.dot(e),
          i = this.cross(e),
          n = Math.atan2(i, r);
        return this.scale(Math.sin((1 - t) * n))
          .add(e.scale(Math.sin(t * n)))
          .scale(1 / i);
      }
      isZero() {
        return 0 === this.x && 0 === this.y;
      }
      toFixed(t) {
        return new e(Number(this.x.toFixed(t)), Number(this.y.toFixed(t)));
      }
      transform(e) {
        return e.multVec2(this);
      }
      eq(e) {
        return this.x === e.x && this.y === e.y;
      }
      bbox() {
        return new de(this, 0, 0);
      }
      toString() {
        return `vec2(${this.x.toFixed(2)}, ${this.y.toFixed(2)})`;
      }
    }),
    "Vec2"
  ),
  R(e, "LEFT", new e(-1, 0)),
  R(e, "RIGHT", new e(1, 0)),
  R(e, "UP", new e(0, -1)),
  R(e, "DOWN", new e(0, 1)),
  e);
function L(...e) {
  if (1 === e.length) {
    if (e[0] instanceof N) return new N(e[0].x, e[0].y);
    if (Array.isArray(e[0]) && 2 === e[0].length) return new N(...e[0]);
  }
  return new N(...e);
}
P(L, "vec2");
var O =
  ((t = class {
    constructor(e, t, r) {
      R(this, "r", 255),
        R(this, "g", 255),
        R(this, "b", 255),
        (this.r = I(e, 0, 255)),
        (this.g = I(t, 0, 255)),
        (this.b = I(r, 0, 255));
    }
    static fromArray(e) {
      return new t(e[0], e[1], e[2]);
    }
    static fromHex(e) {
      if ("number" == typeof e)
        return new t((e >> 16) & 255, (e >> 8) & 255, 255 & e);
      if ("string" == typeof e) {
        let r = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);
        return new t(
          parseInt(r[1], 16),
          parseInt(r[2], 16),
          parseInt(r[3], 16)
        );
      }
      throw new Error("Invalid hex color format");
    }
    static fromHSL(e, r, i) {
      if (0 == r) return new t(255 * i, 255 * i, 255 * i);
      let n = P(
          (e, t, r) => (
            r < 0 && (r += 1),
            r > 1 && (r -= 1),
            r < 1 / 6
              ? e + 6 * (t - e) * r
              : r < 0.5
              ? t
              : r < 2 / 3
              ? e + (t - e) * (2 / 3 - r) * 6
              : e
          ),
          "hue2rgb"
        ),
        s = i < 0.5 ? i * (1 + r) : i + r - i * r,
        o = 2 * i - s,
        a = n(o, s, e + 1 / 3),
        h = n(o, s, e),
        l = n(o, s, e - 1 / 3);
      return new t(
        Math.round(255 * a),
        Math.round(255 * h),
        Math.round(255 * l)
      );
    }
    clone() {
      return new t(this.r, this.g, this.b);
    }
    lighten(e) {
      return new t(this.r + e, this.g + e, this.b + e);
    }
    darken(e) {
      return this.lighten(-e);
    }
    invert() {
      return new t(255 - this.r, 255 - this.g, 255 - this.b);
    }
    mult(e) {
      return new t(
        (this.r * e.r) / 255,
        (this.g * e.g) / 255,
        (this.b * e.b) / 255
      );
    }
    lerp(e, r) {
      return new t(C(this.r, e.r, r), C(this.g, e.g, r), C(this.b, e.b, r));
    }
    toHSL() {
      let e = this.r / 255,
        t = this.g / 255,
        r = this.b / 255,
        i = Math.max(e, t, r),
        n = Math.min(e, t, r),
        s = (i + n) / 2,
        o = s,
        a = s;
      if (i == n) s = o = 0;
      else {
        let h = i - n;
        switch (((o = a > 0.5 ? h / (2 - i - n) : h / (i + n)), i)) {
          case e:
            s = (t - r) / h + (t < r ? 6 : 0);
            break;
          case t:
            s = (r - e) / h + 2;
            break;
          case r:
            s = (e - t) / h + 4;
        }
        s /= 6;
      }
      return [s, o, a];
    }
    eq(e) {
      return this.r === e.r && this.g === e.g && this.b === e.b;
    }
    toString() {
      return `rgb(${this.r}, ${this.g}, ${this.b})`;
    }
    toHex() {
      return (
        "#" +
        ((1 << 24) + (this.r << 16) + (this.g << 8) + this.b)
          .toString(16)
          .slice(1)
      );
    }
  }),
  P(t, "Color"),
  R(t, "RED", new t(255, 0, 0)),
  R(t, "GREEN", new t(0, 255, 0)),
  R(t, "BLUE", new t(0, 0, 255)),
  R(t, "YELLOW", new t(255, 255, 0)),
  R(t, "MAGENTA", new t(255, 0, 255)),
  R(t, "CYAN", new t(0, 255, 255)),
  R(t, "WHITE", new t(255, 255, 255)),
  R(t, "BLACK", new t(0, 0, 0)),
  t);
function G(...e) {
  if (0 === e.length) return new O(255, 255, 255);
  if (1 === e.length) {
    if (e[0] instanceof O) return e[0].clone();
    if ("string" == typeof e[0]) return O.fromHex(e[0]);
    if (Array.isArray(e[0]) && 3 === e[0].length) return O.fromArray(e[0]);
  }
  return new O(...e);
}
P(G, "rgb");
var q = P((e, t, r) => O.fromHSL(e, t, r), "hsl2rgb"),
  H =
    (P(
      (r = class {
        constructor(e, t, r, i) {
          R(this, "x", 0),
            R(this, "y", 0),
            R(this, "w", 1),
            R(this, "h", 1),
            (this.x = e),
            (this.y = t),
            (this.w = r),
            (this.h = i);
        }
        scale(e) {
          return new r(
            this.x + this.w * e.x,
            this.y + this.h * e.y,
            this.w * e.w,
            this.h * e.h
          );
        }
        pos() {
          return new N(this.x, this.y);
        }
        clone() {
          return new r(this.x, this.y, this.w, this.h);
        }
        eq(e) {
          return (
            this.x === e.x && this.y === e.y && this.w === e.w && this.h === e.h
          );
        }
        toString() {
          return `quad(${this.x}, ${this.y}, ${this.w}, ${this.h})`;
        }
      }),
      "Quad"
    ),
    r);
function Y(e, t, r, i) {
  return new H(e, t, r, i);
}
P(Y, "quad");
var K =
  (P(
    (i = class {
      constructor(e) {
        R(this, "m", [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]),
          e && (this.m = e);
      }
      static translate(e) {
        return new i([1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, e.x, e.y, 0, 1]);
      }
      static scale(e) {
        return new i([e.x, 0, 0, 0, 0, e.y, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]);
      }
      static rotateX(e) {
        e = k(-e);
        let t = Math.cos(e),
          r = Math.sin(e);
        return new i([1, 0, 0, 0, 0, t, -r, 0, 0, r, t, 0, 0, 0, 0, 1]);
      }
      static rotateY(e) {
        e = k(-e);
        let t = Math.cos(e),
          r = Math.sin(e);
        return new i([t, 0, r, 0, 0, 1, 0, 0, -r, 0, t, 0, 0, 0, 0, 1]);
      }
      static rotateZ(e) {
        e = k(-e);
        let t = Math.cos(e),
          r = Math.sin(e);
        return new i([t, -r, 0, 0, r, t, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]);
      }
      translate(e) {
        return (
          (this.m[12] += this.m[0] * e.x + this.m[4] * e.y),
          (this.m[13] += this.m[1] * e.x + this.m[5] * e.y),
          (this.m[14] += this.m[2] * e.x + this.m[6] * e.y),
          (this.m[15] += this.m[3] * e.x + this.m[7] * e.y),
          this
        );
      }
      scale(e) {
        return (
          (this.m[0] *= e.x),
          (this.m[4] *= e.y),
          (this.m[1] *= e.x),
          (this.m[5] *= e.y),
          (this.m[2] *= e.x),
          (this.m[6] *= e.y),
          (this.m[3] *= e.x),
          (this.m[7] *= e.y),
          this
        );
      }
      rotate(e) {
        e = k(-e);
        let t = Math.cos(e),
          r = Math.sin(e),
          i = this.m[0],
          n = this.m[1],
          s = this.m[4],
          o = this.m[5];
        return (
          (this.m[0] = i * t + n * r),
          (this.m[1] = -i * r + n * t),
          (this.m[4] = s * t + o * r),
          (this.m[5] = -s * r + o * t),
          this
        );
      }
      mult(e) {
        let t = [];
        for (let r = 0; r < 4; r++)
          for (let i = 0; i < 4; i++)
            t[4 * r + i] =
              this.m[0 + i] * e.m[4 * r + 0] +
              this.m[4 + i] * e.m[4 * r + 1] +
              this.m[8 + i] * e.m[4 * r + 2] +
              this.m[12 + i] * e.m[4 * r + 3];
        return new i(t);
      }
      multVec2(e) {
        return new N(
          e.x * this.m[0] + e.y * this.m[4] + this.m[12],
          e.x * this.m[1] + e.y * this.m[5] + this.m[13]
        );
      }
      getTranslation() {
        return new N(this.m[12], this.m[13]);
      }
      getScale() {
        if (0 != this.m[0] || 0 != this.m[1]) {
          let e = this.m[0] * this.m[5] - this.m[1] * this.m[4],
            t = Math.sqrt(this.m[0] * this.m[0] + this.m[1] * this.m[1]);
          return new N(t, e / t);
        }
        if (0 != this.m[4] || 0 != this.m[5]) {
          let e = this.m[0] * this.m[5] - this.m[1] * this.m[4],
            t = Math.sqrt(this.m[4] * this.m[4] + this.m[5] * this.m[5]);
          return new N(e / t, t);
        }
        return new N(0, 0);
      }
      getRotation() {
        if (0 != this.m[0] || 0 != this.m[1]) {
          let e = Math.sqrt(this.m[0] * this.m[0] + this.m[1] * this.m[1]);
          return F(
            this.m[1] > 0 ? Math.acos(this.m[0] / e) : -Math.acos(this.m[0] / e)
          );
        }
        if (0 != this.m[4] || 0 != this.m[5]) {
          let e = Math.sqrt(this.m[4] * this.m[4] + this.m[5] * this.m[5]);
          return F(
            Math.PI / 2 -
              (this.m[5] > 0
                ? Math.acos(-this.m[4] / e)
                : -Math.acos(this.m[4] / e))
          );
        }
        return 0;
      }
      getSkew() {
        if (0 != this.m[0] || 0 != this.m[1]) {
          let e = Math.sqrt(this.m[0] * this.m[0] + this.m[1] * this.m[1]);
          return new N(
            Math.atan(this.m[0] * this.m[4] + this.m[1] * this.m[5]) / (e * e),
            0
          );
        }
        if (0 != this.m[4] || 0 != this.m[5]) {
          let e = Math.sqrt(this.m[4] * this.m[4] + this.m[5] * this.m[5]);
          return new N(
            0,
            Math.atan(this.m[0] * this.m[4] + this.m[1] * this.m[5]) / (e * e)
          );
        }
        return new N(0, 0);
      }
      invert() {
        let e = [],
          t = this.m[10] * this.m[15] - this.m[14] * this.m[11],
          r = this.m[9] * this.m[15] - this.m[13] * this.m[11],
          n = this.m[9] * this.m[14] - this.m[13] * this.m[10],
          s = this.m[8] * this.m[15] - this.m[12] * this.m[11],
          o = this.m[8] * this.m[14] - this.m[12] * this.m[10],
          a = this.m[8] * this.m[13] - this.m[12] * this.m[9],
          h = this.m[6] * this.m[15] - this.m[14] * this.m[7],
          l = this.m[5] * this.m[15] - this.m[13] * this.m[7],
          u = this.m[5] * this.m[14] - this.m[13] * this.m[6],
          d = this.m[4] * this.m[15] - this.m[12] * this.m[7],
          c = this.m[4] * this.m[14] - this.m[12] * this.m[6],
          f = this.m[5] * this.m[15] - this.m[13] * this.m[7],
          p = this.m[4] * this.m[13] - this.m[12] * this.m[5],
          g = this.m[6] * this.m[11] - this.m[10] * this.m[7],
          m = this.m[5] * this.m[11] - this.m[9] * this.m[7],
          w = this.m[5] * this.m[10] - this.m[9] * this.m[6],
          A = this.m[4] * this.m[11] - this.m[8] * this.m[7],
          v = this.m[4] * this.m[10] - this.m[8] * this.m[6],
          y = this.m[4] * this.m[9] - this.m[8] * this.m[5];
        (e[0] = this.m[5] * t - this.m[6] * r + this.m[7] * n),
          (e[4] = -(this.m[4] * t - this.m[6] * s + this.m[7] * o)),
          (e[8] = this.m[4] * r - this.m[5] * s + this.m[7] * a),
          (e[12] = -(this.m[4] * n - this.m[5] * o + this.m[6] * a)),
          (e[1] = -(this.m[1] * t - this.m[2] * r + this.m[3] * n)),
          (e[5] = this.m[0] * t - this.m[2] * s + this.m[3] * o),
          (e[9] = -(this.m[0] * r - this.m[1] * s + this.m[3] * a)),
          (e[13] = this.m[0] * n - this.m[1] * o + this.m[2] * a),
          (e[2] = this.m[1] * h - this.m[2] * l + this.m[3] * u),
          (e[6] = -(this.m[0] * h - this.m[2] * d + this.m[3] * c)),
          (e[10] = this.m[0] * f - this.m[1] * d + this.m[3] * p),
          (e[14] = -(this.m[0] * u - this.m[1] * c + this.m[2] * p)),
          (e[3] = -(this.m[1] * g - this.m[2] * m + this.m[3] * w)),
          (e[7] = this.m[0] * g - this.m[2] * A + this.m[3] * v),
          (e[11] = -(this.m[0] * m - this.m[1] * A + this.m[3] * y)),
          (e[15] = this.m[0] * w - this.m[1] * v + this.m[2] * y);
        let V =
          this.m[0] * e[0] +
          this.m[1] * e[4] +
          this.m[2] * e[8] +
          this.m[3] * e[12];
        for (let i = 0; i < 4; i++)
          for (let t = 0; t < 4; t++) e[4 * i + t] *= 1 / V;
        return new i(e);
      }
      clone() {
        return new i([...this.m]);
      }
      toString() {
        return this.m.toString();
      }
    }),
    "Mat4"
  ),
  i);
function j(e, t, r, i = (e) => -Math.cos(e)) {
  return e + ((i(r) + 1) / 2) * (t - e);
}
P(j, "wave");
var Q = 2147483648,
  z =
    (P(
      (n = class {
        constructor(e) {
          R(this, "seed"), (this.seed = e);
        }
        gen() {
          return (
            (this.seed = (1103515245 * this.seed + 12345) % Q), this.seed / Q
          );
        }
        genNumber(e, t) {
          return e + this.gen() * (t - e);
        }
        genVec2(e, t) {
          return new N(this.genNumber(e.x, t.x), this.genNumber(e.y, t.y));
        }
        genColor(e, t) {
          return new O(
            this.genNumber(e.r, t.r),
            this.genNumber(e.g, t.g),
            this.genNumber(e.b, t.b)
          );
        }
        genAny(...e) {
          if (0 === e.length) return this.gen();
          if (1 === e.length) {
            if ("number" == typeof e[0]) return this.genNumber(0, e[0]);
            if (e[0] instanceof N) return this.genVec2(L(0, 0), e[0]);
            if (e[0] instanceof O) return this.genColor(G(0, 0, 0), e[0]);
          } else if (2 === e.length) {
            if ("number" == typeof e[0] && "number" == typeof e[1])
              return this.genNumber(e[0], e[1]);
            if (e[0] instanceof N && e[1] instanceof N)
              return this.genVec2(e[0], e[1]);
            if (e[0] instanceof O && e[1] instanceof O)
              return this.genColor(e[0], e[1]);
          }
        }
      }),
      "RNG"
    ),
    n),
  J = new z(Date.now());
function X(e) {
  return null != e && (J.seed = e), J.seed;
}
function W(...e) {
  return J.genAny(...e);
}
function Z(...e) {
  return Math.floor(W(...e));
}
function _(e) {
  return W() <= e;
}
function $(e) {
  return e[Z(e.length)];
}
function ee(e, t) {
  return (
    e.pos.x + e.width > t.pos.x &&
    e.pos.x < t.pos.x + t.width &&
    e.pos.y + e.height > t.pos.y &&
    e.pos.y < t.pos.y + t.height
  );
}
function te(e, t) {
  if (
    (e.p1.x === e.p2.x && e.p1.y === e.p2.y) ||
    (t.p1.x === t.p2.x && t.p1.y === t.p2.y)
  )
    return null;
  let r =
    (t.p2.y - t.p1.y) * (e.p2.x - e.p1.x) -
    (t.p2.x - t.p1.x) * (e.p2.y - e.p1.y);
  if (0 === r) return null;
  let i =
      ((t.p2.x - t.p1.x) * (e.p1.y - t.p1.y) -
        (t.p2.y - t.p1.y) * (e.p1.x - t.p1.x)) /
      r,
    n =
      ((e.p2.x - e.p1.x) * (e.p1.y - t.p1.y) -
        (e.p2.y - e.p1.y) * (e.p1.x - t.p1.x)) /
      r;
  return i < 0 || i > 1 || n < 0 || n > 1 ? null : i;
}
function re(e, t) {
  let r = te(e, t);
  return r
    ? L(e.p1.x + r * (e.p2.x - e.p1.x), e.p1.y + r * (e.p2.y - e.p1.y))
    : null;
}
function ie(e, t) {
  if (ne(e, t.p1) || ne(e, t.p2)) return !0;
  let r = e.points();
  return !!(
    re(t, new ue(r[0], r[1])) ||
    re(t, new ue(r[1], r[2])) ||
    re(t, new ue(r[2], r[3])) ||
    re(t, new ue(r[3], r[0]))
  );
}
function ne(e, t) {
  return (
    t.x > e.pos.x &&
    t.x < e.pos.x + e.width &&
    t.y > e.pos.y &&
    t.y < e.pos.y + e.height
  );
}
function se(e, t) {
  let r = t.sub(e.p1),
    i = e.p2.sub(e.p1);
  if (Math.abs(r.cross(i)) > Number.EPSILON) return !1;
  let n = r.dot(i) / i.dot(i);
  return n >= 0 && n <= 1;
}
function oe(e, t) {
  let r = e.p2.sub(e.p1),
    i = r.dot(r),
    n = e.p1.sub(t.center),
    s = 2 * r.dot(n),
    o = s * s - 4 * i * (n.dot(n) - t.radius * t.radius);
  if (i <= Number.EPSILON || o < 0) return !1;
  if (0 == o) {
    let e = -s / (2 * i);
    if (e >= 0 && e <= 1) return !0;
  } else {
    let e = (-s + Math.sqrt(o)) / (2 * i),
      t = (-s - Math.sqrt(o)) / (2 * i);
    if ((e >= 0 && e <= 1) || (t >= 0 && t <= 1)) return !0;
  }
  return ae(t, e.p1);
}
function ae(e, t) {
  return e.center.sdist(t) < e.radius * e.radius;
}
function he(e, t) {
  let r = t.pts[t.pts.length - 1];
  for (let i of t.pts) {
    if (oe(new ue(r, i), e)) return !0;
    r = i;
  }
  return !!ae(e, t.pts[0]) || le(t, e.center);
}
function le(e, t) {
  let r = !1,
    i = e.pts;
  for (let n = 0, s = i.length - 1; n < i.length; s = n++)
    i[n].y > t.y != i[s].y > t.y &&
      t.x < ((i[s].x - i[n].x) * (t.y - i[n].y)) / (i[s].y - i[n].y) + i[n].x &&
      (r = !r);
  return r;
}
P(X, "randSeed"),
  P(W, "rand"),
  P(Z, "randi"),
  P(_, "chance"),
  P($, "choose"),
  P(ee, "testRectRect"),
  P(te, "testLineLineT"),
  P(re, "testLineLine"),
  P(ie, "testRectLine"),
  P(ne, "testRectPoint"),
  P(se, "testLinePoint"),
  P(oe, "testLineCircle"),
  P(ae, "testCirclePoint"),
  P(he, "testCirclePolygon"),
  P(le, "testPolygonPoint");
var ue =
    (P(
      (s = class {
        constructor(e, t) {
          R(this, "p1"),
            R(this, "p2"),
            (this.p1 = e.clone()),
            (this.p2 = t.clone());
        }
        transform(e) {
          return new s(e.multVec2(this.p1), e.multVec2(this.p2));
        }
        bbox() {
          return de.fromPoints(this.p1, this.p2);
        }
        area() {
          return this.p1.dist(this.p2);
        }
        clone() {
          return new s(this.p1, this.p2);
        }
      }),
      "Line"
    ),
    s),
  de =
    (P(
      (o = class {
        constructor(e, t, r) {
          R(this, "pos"),
            R(this, "width"),
            R(this, "height"),
            (this.pos = e.clone()),
            (this.width = t),
            (this.height = r);
        }
        static fromPoints(e, t) {
          return new o(e.clone(), t.x - e.x, t.y - e.y);
        }
        center() {
          return new N(
            this.pos.x + this.width / 2,
            this.pos.y + this.height / 2
          );
        }
        points() {
          return [
            this.pos,
            this.pos.add(this.width, 0),
            this.pos.add(this.width, this.height),
            this.pos.add(0, this.height),
          ];
        }
        transform(e) {
          return new pe(this.points().map((t) => e.multVec2(t)));
        }
        bbox() {
          return this.clone();
        }
        area() {
          return this.width * this.height;
        }
        clone() {
          return new o(this.pos.clone(), this.width, this.height);
        }
        distToPoint(e) {
          return Math.sqrt(this.sdistToPoint(e));
        }
        sdistToPoint(e) {
          let t = this.pos,
            r = this.pos.add(this.width, this.height),
            i = Math.max(t.x - e.x, 0, e.x - r.x),
            n = Math.max(t.y - e.y, 0, e.y - r.y);
          return i * i + n * n;
        }
      }),
      "Rect"
    ),
    o),
  ce =
    (P(
      (a = class {
        constructor(e, t) {
          R(this, "center"),
            R(this, "radius"),
            (this.center = e.clone()),
            (this.radius = t);
        }
        transform(e) {
          return new fe(this.center, this.radius, this.radius).transform(e);
        }
        bbox() {
          return de.fromPoints(
            this.center.sub(L(this.radius)),
            this.center.add(L(this.radius))
          );
        }
        area() {
          return this.radius * this.radius * Math.PI;
        }
        clone() {
          return new a(this.center, this.radius);
        }
      }),
      "Circle"
    ),
    a),
  fe =
    (P(
      (h = class {
        constructor(e, t, r) {
          R(this, "center"),
            R(this, "radiusX"),
            R(this, "radiusY"),
            (this.center = e.clone()),
            (this.radiusX = t),
            (this.radiusY = r);
        }
        transform(e) {
          return new h(
            e.multVec2(this.center),
            e.m[0] * this.radiusX,
            e.m[5] * this.radiusY
          );
        }
        bbox() {
          return de.fromPoints(
            this.center.sub(L(this.radiusX, this.radiusY)),
            this.center.add(L(this.radiusX, this.radiusY))
          );
        }
        area() {
          return this.radiusX * this.radiusY * Math.PI;
        }
        clone() {
          return new h(this.center, this.radiusX, this.radiusY);
        }
      }),
      "Ellipse"
    ),
    h),
  pe =
    (P(
      (l = class {
        constructor(e) {
          if ((R(this, "pts"), e.length < 3))
            throw new Error("Polygons should have at least 3 vertices");
          this.pts = e;
        }
        transform(e) {
          return new l(this.pts.map((t) => e.multVec2(t)));
        }
        bbox() {
          let e = L(Number.MAX_VALUE),
            t = L(-Number.MAX_VALUE);
          for (let r of this.pts)
            (e.x = Math.min(e.x, r.x)),
              (t.x = Math.max(t.x, r.x)),
              (e.y = Math.min(e.y, r.y)),
              (t.y = Math.max(t.y, r.y));
          return de.fromPoints(e, t);
        }
        area() {
          let e = 0,
            t = this.pts.length;
          for (let r = 0; r < t; r++) {
            let i = this.pts[r],
              n = this.pts[(r + 1) % t];
            (e += i.x * n.y * 0.5), (e -= n.x * i.y * 0.5);
          }
          return Math.abs(e);
        }
        clone() {
          return new l(this.pts.map((e) => e.clone()));
        }
      }),
      "Polygon"
    ),
    l);
function ge(e, t) {
  let r = Number.MAX_VALUE,
    i = L(0);
  for (let n of [e, t])
    for (let s = 0; s < n.pts.length; s++) {
      let o = n.pts[s],
        a = n.pts[(s + 1) % n.pts.length].sub(o).normal().unit(),
        h = Number.MAX_VALUE,
        l = -Number.MAX_VALUE;
      for (let t = 0; t < e.pts.length; t++) {
        let r = e.pts[t].dot(a);
        (h = Math.min(h, r)), (l = Math.max(l, r));
      }
      let u = Number.MAX_VALUE,
        d = -Number.MAX_VALUE;
      for (let e = 0; e < t.pts.length; e++) {
        let r = t.pts[e].dot(a);
        (u = Math.min(u, r)), (d = Math.max(d, r));
      }
      let c = Math.min(l, d) - Math.max(h, u);
      if (c < 0) return null;
      if (c < Math.abs(r)) {
        let e = d - h,
          t = u - l;
        (r = Math.abs(e) < Math.abs(t) ? e : t), (i = a.scale(r));
      }
    }
  return i;
}
P(ge, "sat");
var me =
    ((u = class extends Map {
      constructor(...e) {
        super(...e), R(this, "lastID"), (this.lastID = 0);
      }
      push(e) {
        let t = this.lastID;
        return this.set(t, e), this.lastID++, t;
      }
      pushd(e) {
        let t = this.push(e);
        return () => this.delete(t);
      }
    }),
    P(u, "Registry"),
    u),
  we =
    (P(
      (d = class {
        constructor(e) {
          R(this, "paused", !1), R(this, "cancel"), (this.cancel = e);
        }
        static join(e) {
          let t = new d(() => e.forEach((e) => e.cancel()));
          return (
            Object.defineProperty(t, "paused", {
              get: () => e[0].paused,
              set: (t) => e.forEach((e) => (e.paused = t)),
            }),
            (t.paused = !1),
            t
          );
        }
      }),
      "EventController"
    ),
    d),
  Ae =
    (P(
      (c = class {
        constructor() {
          R(this, "handlers", new me());
        }
        add(e) {
          let t = this.handlers.pushd((...t) => {
              r.paused || e(...t);
            }),
            r = new we(t);
          return r;
        }
        addOnce(e) {
          let t = this.add((...r) => {
            t.cancel(), e(...r);
          });
          return t;
        }
        next() {
          return new Promise((e) => this.addOnce(e));
        }
        trigger(...e) {
          this.handlers.forEach((t) => t(...e));
        }
        numListeners() {
          return this.handlers.size;
        }
        clear() {
          this.handlers.clear();
        }
      }),
      "Event"
    ),
    c),
  ve =
    (P(
      (f = class {
        constructor() {
          R(this, "handlers", {});
        }
        on(e, t) {
          return (
            this.handlers[e] || (this.handlers[e] = new Ae()),
            this.handlers[e].add(t)
          );
        }
        onOnce(e, t) {
          let r = this.on(e, (...e) => {
            r.cancel(), t(...e);
          });
          return r;
        }
        next(e) {
          return new Promise((t) => {
            this.onOnce(e, (...e) => t(e[0]));
          });
        }
        trigger(e, ...t) {
          this.handlers[e] && this.handlers[e].trigger(...t);
        }
        remove(e) {
          delete this.handlers[e];
        }
        clear() {
          this.handlers = {};
        }
        numListeners(e) {
          var t;
          return (
            (null == (t = this.handlers[e]) ? void 0 : t.numListeners()) ?? 0
          );
        }
      }),
      "EventHandler"
    ),
    f);
function ye(e, t) {
  if (e === t) return !0;
  let r = typeof e,
    i = typeof t;
  if (r !== i) return !1;
  if ("object" === r && "object" === i && null !== e && null !== t) {
    if (Array.isArray(e) !== Array.isArray(t)) return !1;
    let r = Object.keys(e),
      i = Object.keys(t);
    if (r.length !== i.length) return !1;
    for (let n of r) {
      if (!ye(e[n], t[n])) return !1;
    }
    return !0;
  }
  return !1;
}
function Ve(e) {
  let t = window.atob(e),
    r = t.length,
    i = new Uint8Array(r);
  for (let n = 0; n < r; n++) i[n] = t.charCodeAt(n);
  return i.buffer;
}
function xe(e) {
  return Ve(e.split(",")[1]);
}
function Ee(e, t) {
  let r = document.createElement("a");
  (r.href = t), (r.download = e), r.click();
}
function be(e, t) {
  Ee(e, "data:text/plain;charset=utf-8," + t);
}
function Se(e, t) {
  be(e, JSON.stringify(t));
}
function Re(e, t) {
  let r = URL.createObjectURL(t);
  Ee(e, r), URL.revokeObjectURL(r);
}
P(ye, "deepEq"),
  P(Ve, "base64ToArrayBuffer"),
  P(xe, "dataURLToArrayBuffer"),
  P(Ee, "download"),
  P(be, "downloadText"),
  P(Se, "downloadJSON"),
  P(Re, "downloadBlob");
var Me = P((e) => e.match(/^data:\w+\/\w+;base64,.+/), "isDataURL"),
  Te = P((e) => e.split(".").slice(0, -1).join("."), "getFileName");
function Pe(e, t) {
  return (...r) => {
    let i = r.length;
    return i === e.length ? e(...r) : i === t.length ? t(...r) : void 0;
  };
}
P(Pe, "overload2");
var Be = (() => {
    let e = 0;
    return () => e++;
  })(),
  ke = P(
    (e) => (e instanceof Error ? e.message : String(e)),
    "getErrorMessage"
  ),
  Fe =
    (P(
      (p = class {
        constructor(e = (e, t) => e < t) {
          R(this, "_items"),
            R(this, "_compareFn"),
            (this._compareFn = e),
            (this._items = []);
        }
        insert(e) {
          this._items.push(e), this.moveUp(this._items.length - 1);
        }
        remove() {
          if (0 === this._items.length) return null;
          let e = this._items[0],
            t = this._items.pop();
          return (
            0 !== this._items.length &&
              ((this._items[0] = t), this.moveDown(0)),
            e
          );
        }
        clear() {
          this._items.splice(0, this._items.length);
        }
        moveUp(e) {
          for (; e > 0; ) {
            let t = Math.floor((e - 1) / 2);
            if (
              !this._compareFn(this._items[e], this._items[t]) &&
              this._items[e] >= this._items[t]
            )
              break;
            this.swap(e, t), (e = t);
          }
        }
        moveDown(e) {
          for (; e < Math.floor(this._items.length / 2); ) {
            let t = 2 * e + 1;
            if (
              (t < this._items.length - 1 &&
                !this._compareFn(this._items[t], this._items[t + 1]) &&
                ++t,
              this._compareFn(this._items[e], this._items[t]))
            )
              break;
            this.swap(e, t), (e = t);
          }
        }
        swap(e, t) {
          [this._items[e], this._items[t]] = [this._items[t], this._items[e]];
        }
        get length() {
          return this._items.length;
        }
      }),
      "BinaryHeap"
    ),
    p),
  Ie = Object.freeze([
    776, 2359, 2367, 2984, 3007, 3021, 3633, 3635, 3648, 3657, 4352, 4449, 4520,
  ]);
function Ce(e) {
  if ("string" != typeof e)
    throw new TypeError("string cannot be undefined or null");
  let t = [],
    r = 0,
    i = 0;
  for (; r < e.length; )
    (i += De(r + i, e)),
      Ye(e[r + i]) && i++,
      Ge(e[r + i]) && i++,
      qe(e[r + i]) && i++,
      Ke(e[r + i]) ? i++ : (t.push(e.substring(r, r + i)), (r += i), (i = 0));
  return t;
}
function De(e, t) {
  let r = t[e];
  if (!Ue(r) || e === t.length - 1) return 1;
  let i = r + t[e + 1],
    n = t.substring(e + 2, e + 5);
  return Ne(i) && Ne(n)
    ? 4
    : Le(i) && He(n)
    ? t.slice(e).indexOf(String.fromCodePoint(917631)) + 2
    : Oe(n)
    ? 4
    : 2;
}
function Ue(e) {
  return e && Qe(e[0].charCodeAt(0), 55296, 56319);
}
function Ne(e) {
  return Qe(je(e), 127462, 127487);
}
function Le(e) {
  return Qe(je(e), 127988, 127988);
}
function Oe(e) {
  return Qe(je(e), 127995, 127999);
}
function Ge(e) {
  return "string" == typeof e && Qe(e.charCodeAt(0), 65024, 65039);
}
function qe(e) {
  return "string" == typeof e && Qe(e.charCodeAt(0), 8400, 8447);
}
function He(e) {
  let t = e.codePointAt(0);
  return "string" == typeof e && "number" == typeof t && Qe(t, 917504, 917631);
}
function Ye(e) {
  return "string" == typeof e && Ie.includes(e.charCodeAt(0));
}
function Ke(e) {
  return "string" == typeof e && 8205 === e.charCodeAt(0);
}
function je(e) {
  return ((e.charCodeAt(0) - 55296) << 10) + (e.charCodeAt(1) - 56320) + 65536;
}
function Qe(e, t, r) {
  return e >= t && e <= r;
}
P(Ce, "runes"),
  P(De, "nextUnits"),
  P(Ue, "isFirstOfSurrogatePair"),
  P(Ne, "isRegionalIndicator"),
  P(Le, "isSubdivisionFlag"),
  P(Oe, "isFitzpatrickModifier"),
  P(Ge, "isVariationSelector"),
  P(qe, "isDiacriticalMark"),
  P(He, "isSupplementarySpecialpurposePlane"),
  P(Ye, "isGrapheme"),
  P(Ke, "isZeroWidthJoiner"),
  P(je, "codePointFromSurrogatePair"),
  P(Qe, "betweenInclusive");
var ze = {
    "Joy-Con L+R (STANDARD GAMEPAD Vendor: 057e Product: 200e)": {
      buttons: {
        0: "south",
        1: "east",
        2: "west",
        3: "north",
        4: "lshoulder",
        5: "rshoulder",
        6: "ltrigger",
        7: "rtrigger",
        8: "select",
        9: "start",
        10: "lstick",
        11: "rstick",
        12: "dpad-up",
        13: "dpad-down",
        14: "dpad-left",
        15: "dpad-right",
        16: "home",
        17: "capture",
      },
      sticks: { left: { x: 0, y: 1 }, right: { x: 2, y: 3 } },
    },
    "Joy-Con (L) (STANDARD GAMEPAD Vendor: 057e Product: 2006)": {
      buttons: {
        0: "south",
        1: "east",
        2: "west",
        3: "north",
        4: "lshoulder",
        5: "rshoulder",
        9: "select",
        10: "lstick",
        16: "start",
      },
      sticks: { left: { x: 0, y: 1 } },
    },
    "Joy-Con (R) (STANDARD GAMEPAD Vendor: 057e Product: 2007)": {
      buttons: {
        0: "south",
        1: "east",
        2: "west",
        3: "north",
        4: "lshoulder",
        5: "rshoulder",
        9: "start",
        10: "lstick",
        16: "select",
      },
      sticks: { left: { x: 0, y: 1 } },
    },
    "Pro Controller (STANDARD GAMEPAD Vendor: 057e Product: 2009)": {
      buttons: {
        0: "south",
        1: "east",
        2: "west",
        3: "north",
        4: "lshoulder",
        5: "rshoulder",
        6: "ltrigger",
        7: "rtrigger",
        8: "select",
        9: "start",
        10: "lstick",
        11: "rstick",
        12: "dpad-up",
        13: "dpad-down",
        14: "dpad-left",
        15: "dpad-right",
        16: "home",
        17: "capture",
      },
      sticks: { left: { x: 0, y: 1 }, right: { x: 2, y: 3 } },
    },
    default: {
      buttons: {
        0: "south",
        1: "east",
        2: "west",
        3: "north",
        4: "lshoulder",
        5: "rshoulder",
        6: "ltrigger",
        7: "rtrigger",
        8: "select",
        9: "start",
        10: "lstick",
        11: "rstick",
        12: "dpad-up",
        13: "dpad-down",
        14: "dpad-left",
        15: "dpad-right",
        16: "home",
      },
      sticks: { left: { x: 0, y: 1 }, right: { x: 2, y: 3 } },
    },
  },
  Je =
    (P(
      (g = class {
        constructor() {
          R(this, "pressed", new Set([])),
            R(this, "pressedRepeat", new Set([])),
            R(this, "released", new Set([])),
            R(this, "down", new Set([]));
        }
        update() {
          this.pressed.clear(),
            this.released.clear(),
            this.pressedRepeat.clear();
        }
        press(e) {
          this.pressed.add(e), this.pressedRepeat.add(e), this.down.add(e);
        }
        pressRepeat(e) {
          this.pressedRepeat.add(e);
        }
        release(e) {
          this.down.delete(e), this.pressed.delete(e), this.released.add(e);
        }
      }),
      "ButtonState"
    ),
    g),
  Xe =
    (P(
      (m = class {
        constructor() {
          R(this, "buttonState", new Je()), R(this, "stickState", new Map());
        }
      }),
      "GamepadState"
    ),
    m),
  We =
    (P(
      (w = class {
        constructor() {
          R(this, "dts", []), R(this, "timer", 0), R(this, "fps", 0);
        }
        tick(e) {
          this.dts.push(e),
            (this.timer += e),
            this.timer >= 1 &&
              ((this.timer = 0),
              (this.fps = Math.round(
                1 / (this.dts.reduce((e, t) => e + t) / this.dts.length)
              )),
              (this.dts = []));
        }
      }),
      "FPSCounter"
    ),
    w),
  Ze = P((e) => {
    if (!e.canvas) throw new Error("Please provide a canvas");
    let t = {
      canvas: e.canvas,
      loopID: null,
      stopped: !1,
      dt: 0,
      time: 0,
      realTime: 0,
      fpsCounter: new We(),
      timeScale: 1,
      skipTime: !1,
      numFrames: 0,
      mousePos: new N(0),
      mouseDeltaPos: new N(0),
      keyState: new Je(),
      mouseState: new Je(),
      mergedGamepadState: new Xe(),
      gamepadStates: new Map(),
      gamepads: [],
      charInputted: [],
      isMouseMoved: !1,
      lastWidth: e.canvas.offsetWidth,
      lastHeight: e.canvas.offsetHeight,
      events: new ve(),
    };
    function r() {
      return t.dt * t.timeScale;
    }
    function i() {
      return t.time;
    }
    function n() {
      return t.fpsCounter.fps;
    }
    function s() {
      return t.numFrames;
    }
    function o() {
      return t.canvas.toDataURL();
    }
    function a(e) {
      t.canvas.style.cursor = e;
    }
    function h() {
      return t.canvas.style.cursor;
    }
    function l(e) {
      if (e)
        try {
          let e = t.canvas.requestPointerLock();
          e.catch && e.catch((e) => console.error(e));
        } catch (r) {
          console.error(r);
        }
      else document.exitPointerLock();
    }
    function u() {
      return !!document.pointerLockElement;
    }
    function d(e) {
      e.requestFullscreen
        ? e.requestFullscreen()
        : e.webkitRequestFullscreen && e.webkitRequestFullscreen();
    }
    function c() {
      document.exitFullscreen
        ? document.exitFullscreen()
        : document.webkitExitFullScreen && document.webkitExitFullScreen();
    }
    function f() {
      return document.fullscreenElement || document.webkitFullscreenElement;
    }
    function p(e = !0) {
      e ? d(t.canvas) : c();
    }
    function g() {
      return !!f();
    }
    function m() {
      t.stopped = !0;
      for (let e in de) t.canvas.removeEventListener(e, de[e]);
      for (let e in ce) document.removeEventListener(e, ce[e]);
      for (let e in fe) window.removeEventListener(e, fe[e]);
      Ae.disconnect();
    }
    function w(i) {
      null !== t.loopID && cancelAnimationFrame(t.loopID);
      let n = 0,
        s = P((o) => {
          if (t.stopped) return;
          if ("visible" !== document.visibilityState)
            return void (t.loopID = requestAnimationFrame(s));
          let a = o / 1e3,
            h = a - t.realTime,
            l = e.maxFPS ? 1 / e.maxFPS : 0;
          (t.realTime = a),
            (n += h),
            n > l &&
              (t.skipTime ||
                ((t.dt = n), (t.time += r()), t.fpsCounter.tick(t.dt)),
              (n = 0),
              (t.skipTime = !1),
              t.numFrames++,
              oe(),
              i(),
              ae()),
            (t.loopID = requestAnimationFrame(s));
        }, "frame");
      s(0);
    }
    function A() {
      return "ontouchstart" in window || navigator.maxTouchPoints > 0;
    }
    function v() {
      return t.mousePos.clone();
    }
    function y() {
      return t.mouseDeltaPos.clone();
    }
    function V(e = "left") {
      return t.mouseState.pressed.has(e);
    }
    function x(e = "left") {
      return t.mouseState.down.has(e);
    }
    function E(e = "left") {
      return t.mouseState.released.has(e);
    }
    function b() {
      return t.isMouseMoved;
    }
    function S(e) {
      return void 0 === e
        ? t.keyState.pressed.size > 0
        : t.keyState.pressed.has(e);
    }
    function R(e) {
      return void 0 === e
        ? t.keyState.pressedRepeat.size > 0
        : t.keyState.pressedRepeat.has(e);
    }
    function M(e) {
      return void 0 === e ? t.keyState.down.size > 0 : t.keyState.down.has(e);
    }
    function T(e) {
      return void 0 === e
        ? t.keyState.released.size > 0
        : t.keyState.released.has(e);
    }
    function B(e) {
      return void 0 === e
        ? t.mergedGamepadState.buttonState.pressed.size > 0
        : t.mergedGamepadState.buttonState.pressed.has(e);
    }
    function k(e) {
      return void 0 === e
        ? t.mergedGamepadState.buttonState.down.size > 0
        : t.mergedGamepadState.buttonState.down.has(e);
    }
    function F(e) {
      return void 0 === e
        ? t.mergedGamepadState.buttonState.released.size > 0
        : t.mergedGamepadState.buttonState.released.has(e);
    }
    function I(e) {
      return t.events.on("resize", e);
    }
    P(r, "dt"),
      P(i, "time"),
      P(n, "fps"),
      P(s, "numFrames"),
      P(o, "screenshot"),
      P(a, "setCursor"),
      P(h, "getCursor"),
      P(l, "setCursorLocked"),
      P(u, "isCursorLocked"),
      P(d, "enterFullscreen"),
      P(c, "exitFullscreen"),
      P(f, "getFullscreenElement"),
      P(p, "setFullscreen"),
      P(g, "isFullscreen"),
      P(m, "quit"),
      P(w, "run"),
      P(A, "isTouchscreen"),
      P(v, "mousePos"),
      P(y, "mouseDeltaPos"),
      P(V, "isMousePressed"),
      P(x, "isMouseDown"),
      P(E, "isMouseReleased"),
      P(b, "isMouseMoved"),
      P(S, "isKeyPressed"),
      P(R, "isKeyPressedRepeat"),
      P(M, "isKeyDown"),
      P(T, "isKeyReleased"),
      P(B, "isGamepadButtonPressed"),
      P(k, "isGamepadButtonDown"),
      P(F, "isGamepadButtonReleased"),
      P(I, "onResize");
    let C = Pe(
        (e) => t.events.on("keyDown", e),
        (e, r) => t.events.on("keyDown", (t) => t === e && r(e))
      ),
      U = Pe(
        (e) => t.events.on("keyPress", e),
        (e, r) => t.events.on("keyPress", (t) => t === e && r(e))
      ),
      L = Pe(
        (e) => t.events.on("keyPressRepeat", e),
        (e, r) => t.events.on("keyPressRepeat", (t) => t === e && r(e))
      ),
      O = Pe(
        (e) => t.events.on("keyRelease", e),
        (e, r) => t.events.on("keyRelease", (t) => t === e && r(e))
      ),
      G = Pe(
        (e) => t.events.on("mouseDown", (t) => e(t)),
        (e, r) => t.events.on("mouseDown", (t) => t === e && r(t))
      ),
      q = Pe(
        (e) => t.events.on("mousePress", (t) => e(t)),
        (e, r) => t.events.on("mousePress", (t) => t === e && r(t))
      ),
      H = Pe(
        (e) => t.events.on("mouseRelease", (t) => e(t)),
        (e, r) => t.events.on("mouseRelease", (t) => t === e && r(t))
      );
    function Y(e) {
      return t.events.on("mouseMove", () => e(v(), y()));
    }
    function K(e) {
      return t.events.on("charInput", e);
    }
    function j(e) {
      return t.events.on("touchStart", e);
    }
    function Q(e) {
      return t.events.on("touchMove", e);
    }
    function z(e) {
      return t.events.on("touchEnd", e);
    }
    function J(e) {
      return t.events.on("scroll", e);
    }
    function X(e) {
      return t.events.on("hide", e);
    }
    function W(e) {
      return t.events.on("show", e);
    }
    function Z(e, r) {
      return "function" == typeof e
        ? t.events.on("gamepadButtonDown", e)
        : "string" == typeof e && "function" == typeof r
        ? t.events.on("gamepadButtonDown", (t) => t === e && r(e))
        : void 0;
    }
    function _(e, r) {
      return "function" == typeof e
        ? t.events.on("gamepadButtonPress", e)
        : "string" == typeof e && "function" == typeof r
        ? t.events.on("gamepadButtonPress", (t) => t === e && r(e))
        : void 0;
    }
    function $(e, r) {
      return "function" == typeof e
        ? t.events.on("gamepadButtonRelease", e)
        : "string" == typeof e && "function" == typeof r
        ? t.events.on("gamepadButtonRelease", (t) => t === e && r(e))
        : void 0;
    }
    function ee(e, r) {
      return t.events.on("gamepadStick", (t, i) => t === e && r(i));
    }
    function te(e) {
      t.events.on("gamepadConnect", e);
    }
    function re(e) {
      t.events.on("gamepadDisconnect", e);
    }
    function ie(e) {
      return t.mergedGamepadState.stickState.get(e) || new N(0);
    }
    function ne() {
      return [...t.charInputted];
    }
    function se() {
      return [...t.gamepads];
    }
    function oe() {
      t.events.trigger("input"),
        t.keyState.down.forEach((e) => t.events.trigger("keyDown", e)),
        t.mouseState.down.forEach((e) => t.events.trigger("mouseDown", e)),
        ue();
    }
    function ae() {
      t.keyState.update(),
        t.mouseState.update(),
        t.mergedGamepadState.buttonState.update(),
        t.mergedGamepadState.stickState.forEach((e, r) => {
          t.mergedGamepadState.stickState.set(r, new N(0));
        }),
        (t.charInputted = []),
        (t.isMouseMoved = !1),
        t.gamepadStates.forEach((e) => {
          e.buttonState.update(),
            e.stickState.forEach((t, r) => {
              e.stickState.set(r, new N(0));
            });
        });
    }
    function he(e) {
      let r = {
        index: e.index,
        isPressed: (r) =>
          t.gamepadStates.get(e.index).buttonState.pressed.has(r),
        isDown: (r) => t.gamepadStates.get(e.index).buttonState.down.has(r),
        isReleased: (r) =>
          t.gamepadStates.get(e.index).buttonState.released.has(r),
        getStick: (r) => t.gamepadStates.get(e.index).stickState.get(r),
      };
      return (
        t.gamepads.push(r),
        t.gamepadStates.set(e.index, {
          buttonState: new Je(),
          stickState: new Map([
            ["left", new N(0)],
            ["right", new N(0)],
          ]),
        }),
        r
      );
    }
    function le(e) {
      (t.gamepads = t.gamepads.filter((t) => t.index !== e.index)),
        t.gamepadStates.delete(e.index);
    }
    function ue() {
      for (let e of navigator.getGamepads())
        e && !t.gamepadStates.has(e.index) && he(e);
      for (let r of t.gamepads) {
        let i = navigator.getGamepads()[r.index],
          n = (e.gamepads ?? {})[i.id] ?? ze[i.id] ?? ze.default,
          s = t.gamepadStates.get(r.index);
        for (let e = 0; e < i.buttons.length; e++)
          i.buttons[e].pressed
            ? (s.buttonState.down.has(n.buttons[e]) ||
                (t.mergedGamepadState.buttonState.press(n.buttons[e]),
                s.buttonState.press(n.buttons[e]),
                t.events.trigger("gamepadButtonPress", n.buttons[e])),
              t.events.trigger("gamepadButtonDown", n.buttons[e]))
            : s.buttonState.down.has(n.buttons[e]) &&
              (t.mergedGamepadState.buttonState.release(n.buttons[e]),
              s.buttonState.release(n.buttons[e]),
              t.events.trigger("gamepadButtonRelease", n.buttons[e]));
        for (let e in n.sticks) {
          let r = n.sticks[e],
            o = new N(i.axes[r.x], i.axes[r.y]);
          s.stickState.set(e, o),
            t.mergedGamepadState.stickState.set(e, o),
            t.events.trigger("gamepadStick", e, o);
        }
      }
    }
    P(Y, "onMouseMove"),
      P(K, "onCharInput"),
      P(j, "onTouchStart"),
      P(Q, "onTouchMove"),
      P(z, "onTouchEnd"),
      P(J, "onScroll"),
      P(X, "onHide"),
      P(W, "onShow"),
      P(Z, "onGamepadButtonDown"),
      P(_, "onGamepadButtonPress"),
      P($, "onGamepadButtonRelease"),
      P(ee, "onGamepadStick"),
      P(te, "onGamepadConnect"),
      P(re, "onGamepadDisconnect"),
      P(ie, "getGamepadStick"),
      P(ne, "charInputted"),
      P(se, "getGamepads"),
      P(oe, "processInput"),
      P(ae, "resetInput"),
      P(he, "registerGamepad"),
      P(le, "removeGamepad"),
      P(ue, "processGamepad");
    let de = {},
      ce = {},
      fe = {},
      pe = e.pixelDensity || window.devicePixelRatio || 1;
    de.mousemove = (e) => {
      let r = new N(e.offsetX, e.offsetY),
        i = new N(e.movementX, e.movementY);
      if (g()) {
        let i = t.canvas.width / pe,
          n = t.canvas.height / pe,
          s = window.innerWidth,
          o = window.innerHeight;
        if (s / o > i / n) {
          let t = o / n,
            a = (s - i * t) / 2;
          (r.x = D(e.offsetX - a, 0, i * t, 0, i)),
            (r.y = D(e.offsetY, 0, n * t, 0, n));
        } else {
          let t = s / i,
            a = (o - n * t) / 2;
          (r.x = D(e.offsetX, 0, i * t, 0, i)),
            (r.y = D(e.offsetY - a, 0, n * t, 0, n));
        }
      }
      t.events.onOnce("input", () => {
        (t.isMouseMoved = !0),
          (t.mousePos = r),
          (t.mouseDeltaPos = i),
          t.events.trigger("mouseMove");
      });
    };
    let ge = ["left", "middle", "right", "back", "forward"];
    (de.mousedown = (e) => {
      t.events.onOnce("input", () => {
        let r = ge[e.button];
        r && (t.mouseState.press(r), t.events.trigger("mousePress", r));
      });
    }),
      (de.mouseup = (e) => {
        t.events.onOnce("input", () => {
          let r = ge[e.button];
          r && (t.mouseState.release(r), t.events.trigger("mouseRelease", r));
        });
      });
    let me = new Set([
        " ",
        "ArrowLeft",
        "ArrowRight",
        "ArrowUp",
        "ArrowDown",
        "Tab",
      ]),
      we = {
        ArrowLeft: "left",
        ArrowRight: "right",
        ArrowUp: "up",
        ArrowDown: "down",
        " ": "space",
      };
    (de.keydown = (e) => {
      me.has(e.key) && e.preventDefault(),
        t.events.onOnce("input", () => {
          let r = we[e.key] || e.key.toLowerCase();
          1 === r.length
            ? (t.events.trigger("charInput", r), t.charInputted.push(r))
            : "space" === r &&
              (t.events.trigger("charInput", " "), t.charInputted.push(" ")),
            e.repeat
              ? (t.keyState.pressRepeat(r),
                t.events.trigger("keyPressRepeat", r))
              : (t.keyState.press(r),
                t.events.trigger("keyPressRepeat", r),
                t.events.trigger("keyPress", r));
        });
    }),
      (de.keyup = (e) => {
        t.events.onOnce("input", () => {
          let r = we[e.key] || e.key.toLowerCase();
          t.keyState.release(r), t.events.trigger("keyRelease", r);
        });
      }),
      (de.touchstart = (r) => {
        r.preventDefault(),
          t.events.onOnce("input", () => {
            let i = [...r.changedTouches],
              n = t.canvas.getBoundingClientRect();
            !1 !== e.touchToMouse &&
              ((t.mousePos = new N(i[0].clientX - n.x, i[0].clientY - n.y)),
              t.mouseState.press("left"),
              t.events.trigger("mousePress", "left")),
              i.forEach((e) => {
                t.events.trigger(
                  "touchStart",
                  new N(e.clientX - n.x, e.clientY - n.y),
                  e
                );
              });
          });
      }),
      (de.touchmove = (r) => {
        r.preventDefault(),
          t.events.onOnce("input", () => {
            let i = [...r.changedTouches],
              n = t.canvas.getBoundingClientRect();
            !1 !== e.touchToMouse &&
              ((t.mousePos = new N(i[0].clientX - n.x, i[0].clientY - n.y)),
              t.events.trigger("mouseMove")),
              i.forEach((e) => {
                t.events.trigger(
                  "touchMove",
                  new N(e.clientX - n.x, e.clientY - n.y),
                  e
                );
              });
          });
      }),
      (de.touchend = (r) => {
        t.events.onOnce("input", () => {
          let i = [...r.changedTouches],
            n = t.canvas.getBoundingClientRect();
          !1 !== e.touchToMouse &&
            ((t.mousePos = new N(i[0].clientX - n.x, i[0].clientY - n.y)),
            t.mouseState.release("left"),
            t.events.trigger("mouseRelease", "left")),
            i.forEach((e) => {
              t.events.trigger(
                "touchEnd",
                new N(e.clientX - n.x, e.clientY - n.y),
                e
              );
            });
        });
      }),
      (de.touchcancel = (r) => {
        t.events.onOnce("input", () => {
          let i = [...r.changedTouches],
            n = t.canvas.getBoundingClientRect();
          !1 !== e.touchToMouse &&
            ((t.mousePos = new N(i[0].clientX - n.x, i[0].clientY - n.y)),
            t.mouseState.release("left"),
            t.events.trigger("mouseRelease", "left")),
            i.forEach((e) => {
              t.events.trigger(
                "touchEnd",
                new N(e.clientX - n.x, e.clientY - n.y),
                e
              );
            });
        });
      }),
      (de.wheel = (e) => {
        e.preventDefault(),
          t.events.onOnce("input", () => {
            t.events.trigger("scroll", new N(e.deltaX, e.deltaY));
          });
      }),
      (de.contextmenu = (e) => e.preventDefault()),
      (ce.visibilitychange = () => {
        "visible" === document.visibilityState
          ? ((t.skipTime = !0), t.events.trigger("show"))
          : t.events.trigger("hide");
      }),
      (fe.gamepadconnected = (e) => {
        let r = he(e.gamepad);
        t.events.onOnce("input", () => {
          t.events.trigger("gamepadConnect", r);
        });
      }),
      (fe.gamepaddisconnected = (e) => {
        let r = se().filter((t) => t.index === e.gamepad.index)[0];
        le(e.gamepad),
          t.events.onOnce("input", () => {
            t.events.trigger("gamepadDisconnect", r);
          });
      });
    for (let P in de) t.canvas.addEventListener(P, de[P]);
    for (let P in ce) document.addEventListener(P, ce[P]);
    for (let P in fe) window.addEventListener(P, fe[P]);
    let Ae = new ResizeObserver((e) => {
      for (let r of e)
        if (r.target === t.canvas) {
          if (
            t.lastWidth === t.canvas.offsetWidth &&
            t.lastHeight === t.canvas.offsetHeight
          )
            return;
          (t.lastWidth = t.canvas.offsetWidth),
            (t.lastHeight = t.canvas.offsetHeight),
            t.events.onOnce("input", () => {
              t.events.trigger("resize");
            });
        }
    });
    return (
      Ae.observe(t.canvas),
      {
        dt: r,
        time: i,
        run: w,
        canvas: t.canvas,
        fps: n,
        numFrames: s,
        quit: m,
        setFullscreen: p,
        isFullscreen: g,
        setCursor: a,
        screenshot: o,
        getGamepads: se,
        getCursor: h,
        setCursorLocked: l,
        isCursorLocked: u,
        isTouchscreen: A,
        mousePos: v,
        mouseDeltaPos: y,
        isKeyDown: M,
        isKeyPressed: S,
        isKeyPressedRepeat: R,
        isKeyReleased: T,
        isMouseDown: x,
        isMousePressed: V,
        isMouseReleased: E,
        isMouseMoved: b,
        isGamepadButtonPressed: B,
        isGamepadButtonDown: k,
        isGamepadButtonReleased: F,
        getGamepadStick: ie,
        charInputted: ne,
        onResize: I,
        onKeyDown: C,
        onKeyPress: U,
        onKeyPressRepeat: L,
        onKeyRelease: O,
        onMouseDown: G,
        onMousePress: q,
        onMouseRelease: H,
        onMouseMove: Y,
        onCharInput: K,
        onTouchStart: j,
        onTouchMove: Q,
        onTouchEnd: z,
        onScroll: J,
        onHide: X,
        onShow: W,
        onGamepadButtonDown: Z,
        onGamepadButtonPress: _,
        onGamepadButtonRelease: $,
        onGamepadStick: ee,
        onGamepadConnect: te,
        onGamepadDisconnect: re,
        events: t.events,
      }
    );
  }, "default"),
  _e =
    (P(
      (A = class {
        constructor(e, t, r, i = {}) {
          R(this, "ctx"),
            R(this, "src", null),
            R(this, "glTex"),
            R(this, "width"),
            R(this, "height"),
            (this.ctx = e);
          let n = e.gl;
          (this.glTex = e.gl.createTexture()),
            e.onDestroy(() => this.free()),
            (this.width = t),
            (this.height = r);
          let s =
              { linear: n.LINEAR, nearest: n.NEAREST }[
                i.filter ?? e.opts.texFilter
              ] ?? n.NEAREST,
            o =
              { repeat: n.REPEAT, clampToEadge: n.CLAMP_TO_EDGE }[i.wrap] ??
              n.CLAMP_TO_EDGE;
          this.bind(),
            t &&
              r &&
              n.texImage2D(
                n.TEXTURE_2D,
                0,
                n.RGBA,
                t,
                r,
                0,
                n.RGBA,
                n.UNSIGNED_BYTE,
                null
              ),
            n.texParameteri(n.TEXTURE_2D, n.TEXTURE_MIN_FILTER, s),
            n.texParameteri(n.TEXTURE_2D, n.TEXTURE_MAG_FILTER, s),
            n.texParameteri(n.TEXTURE_2D, n.TEXTURE_WRAP_S, o),
            n.texParameteri(n.TEXTURE_2D, n.TEXTURE_WRAP_T, o),
            this.unbind();
        }
        static fromImage(e, t, r = {}) {
          let i = new A(e, t.width, t.height, r);
          return i.update(t), (i.src = t), i;
        }
        update(e, t = 0, r = 0) {
          let i = this.ctx.gl;
          this.bind(),
            i.texSubImage2D(i.TEXTURE_2D, 0, t, r, i.RGBA, i.UNSIGNED_BYTE, e),
            this.unbind();
        }
        bind() {
          this.ctx.pushTexture2D(this.glTex);
        }
        unbind() {
          this.ctx.popTexture2D();
        }
        free() {
          this.ctx.gl.deleteTexture(this.glTex);
        }
      }),
      "Texture"
    ),
    A),
  $e =
    (P(
      (v = class {
        constructor(e, t, r, i = {}) {
          R(this, "ctx"),
            R(this, "tex"),
            R(this, "glFramebuffer"),
            R(this, "glRenderbuffer"),
            (this.ctx = e);
          let n = e.gl;
          e.onDestroy(() => this.free()),
            (this.tex = new _e(e, t, r, i)),
            (this.glFramebuffer = n.createFramebuffer()),
            (this.glRenderbuffer = n.createRenderbuffer()),
            this.bind(),
            n.renderbufferStorage(n.RENDERBUFFER, n.DEPTH_STENCIL, t, r),
            n.framebufferTexture2D(
              n.FRAMEBUFFER,
              n.COLOR_ATTACHMENT0,
              n.TEXTURE_2D,
              this.tex.glTex,
              0
            ),
            n.framebufferRenderbuffer(
              n.FRAMEBUFFER,
              n.DEPTH_STENCIL_ATTACHMENT,
              n.RENDERBUFFER,
              this.glRenderbuffer
            ),
            this.unbind();
        }
        get width() {
          return this.tex.width;
        }
        get height() {
          return this.tex.height;
        }
        toImageData() {
          let e = this.ctx.gl,
            t = new Uint8ClampedArray(this.width * this.height * 4);
          this.bind(),
            e.readPixels(
              0,
              0,
              this.width,
              this.height,
              e.RGBA,
              e.UNSIGNED_BYTE,
              t
            ),
            this.unbind();
          let r = 4 * this.width,
            i = new Uint8Array(r);
          for (let n = 0; n < ((this.height / 2) | 0); n++) {
            let e = n * r,
              s = (this.height - n - 1) * r;
            i.set(t.subarray(e, e + r)), t.copyWithin(e, s, s + r), t.set(i, s);
          }
          return new ImageData(t, this.width, this.height);
        }
        toDataURL() {
          let e = document.createElement("canvas"),
            t = e.getContext("2d");
          return (
            (e.width = this.width),
            (e.height = this.height),
            t.putImageData(this.toImageData(), 0, 0),
            e.toDataURL()
          );
        }
        draw(e) {
          this.bind(), e(), this.unbind();
        }
        bind() {
          this.ctx.pushFramebuffer(this.glFramebuffer),
            this.ctx.pushRenderbuffer(this.glRenderbuffer),
            this.ctx.pushViewport({
              x: 0,
              y: 0,
              w: this.width,
              h: this.height,
            });
        }
        unbind() {
          this.ctx.popFramebuffer(),
            this.ctx.popRenderbuffer(),
            this.ctx.popViewport();
        }
        free() {
          let e = this.ctx.gl;
          e.deleteFramebuffer(this.glFramebuffer),
            e.deleteRenderbuffer(this.glRenderbuffer),
            this.tex.free();
        }
      }),
      "FrameBuffer"
    ),
    v),
  et =
    (P(
      (y = class {
        constructor(e, t, r, i) {
          R(this, "ctx"),
            R(this, "glProgram"),
            (this.ctx = e),
            e.onDestroy(() => this.free());
          let n = e.gl,
            s = n.createShader(n.VERTEX_SHADER),
            o = n.createShader(n.FRAGMENT_SHADER);
          n.shaderSource(s, t),
            n.shaderSource(o, r),
            n.compileShader(s),
            n.compileShader(o);
          let a = n.createProgram();
          if (
            ((this.glProgram = a),
            n.attachShader(a, s),
            n.attachShader(a, o),
            i.forEach((e, t) => n.bindAttribLocation(a, t, e)),
            n.linkProgram(a),
            !n.getProgramParameter(a, n.LINK_STATUS))
          ) {
            let e = n.getShaderInfoLog(s);
            if (e) throw new Error("VERTEX SHADER " + e);
            let t = n.getShaderInfoLog(o);
            if (t) throw new Error("FRAGMENT SHADER " + t);
          }
          n.deleteShader(s), n.deleteShader(o);
        }
        bind() {
          this.ctx.pushProgram(this.glProgram);
        }
        unbind() {
          this.ctx.popProgram();
        }
        send(e) {
          let t = this.ctx.gl;
          for (let r in e) {
            let i = e[r],
              n = t.getUniformLocation(this.glProgram, r);
            "number" == typeof i
              ? t.uniform1f(n, i)
              : i instanceof K
              ? t.uniformMatrix4fv(n, !1, new Float32Array(i.m))
              : i instanceof O
              ? t.uniform3f(n, i.r, i.g, i.b)
              : i instanceof N && t.uniform2f(n, i.x, i.y);
          }
        }
        free() {
          this.ctx.gl.deleteProgram(this.glProgram);
        }
      }),
      "Shader"
    ),
    y),
  tt =
    (P(
      (V = class {
        constructor(e, t, r, i) {
          R(this, "ctx"),
            R(this, "glVBuf"),
            R(this, "glIBuf"),
            R(this, "vqueue", []),
            R(this, "iqueue", []),
            R(this, "stride"),
            R(this, "maxVertices"),
            R(this, "maxIndices"),
            R(this, "vertexFormat"),
            R(this, "numDraws", 0),
            R(this, "curPrimitive", null),
            R(this, "curTex", null),
            R(this, "curShader", null),
            R(this, "curUniform", {});
          let n = e.gl;
          (this.vertexFormat = t),
            (this.ctx = e),
            (this.stride = t.reduce((e, t) => e + t.size, 0)),
            (this.maxVertices = r),
            (this.maxIndices = i),
            (this.glVBuf = n.createBuffer()),
            e.pushArrayBuffer(this.glVBuf),
            n.bufferData(n.ARRAY_BUFFER, 4 * r, n.DYNAMIC_DRAW),
            e.popArrayBuffer(),
            (this.glIBuf = n.createBuffer()),
            e.pushElementArrayBuffer(this.glIBuf),
            n.bufferData(n.ELEMENT_ARRAY_BUFFER, 4 * i, n.DYNAMIC_DRAW),
            e.popElementArrayBuffer();
        }
        push(e, t, r, i, n = null, s = {}) {
          (e !== this.curPrimitive ||
            n !== this.curTex ||
            i !== this.curShader ||
            !ye(this.curUniform, s) ||
            this.vqueue.length + t.length * this.stride > this.maxVertices ||
            this.iqueue.length + r.length > this.maxIndices) &&
            this.flush();
          let o = this.vqueue.length / this.stride;
          for (let a of t) this.vqueue.push(a);
          for (let a of r) this.iqueue.push(a + o);
          (this.curPrimitive = e),
            (this.curShader = i),
            (this.curTex = n),
            (this.curUniform = s);
        }
        flush() {
          var e, t;
          if (
            !this.curPrimitive ||
            !this.curShader ||
            0 === this.vqueue.length ||
            0 === this.iqueue.length
          )
            return;
          let r = this.ctx.gl;
          this.ctx.pushArrayBuffer(this.glVBuf),
            r.bufferSubData(r.ARRAY_BUFFER, 0, new Float32Array(this.vqueue)),
            this.ctx.pushElementArrayBuffer(this.glIBuf),
            r.bufferSubData(
              r.ELEMENT_ARRAY_BUFFER,
              0,
              new Uint16Array(this.iqueue)
            ),
            this.ctx.setVertexFormat(this.vertexFormat),
            this.curShader.bind(),
            this.curShader.send(this.curUniform),
            null == (e = this.curTex) || e.bind(),
            r.drawElements(
              this.curPrimitive,
              this.iqueue.length,
              r.UNSIGNED_SHORT,
              0
            ),
            null == (t = this.curTex) || t.unbind(),
            this.curShader.unbind(),
            this.ctx.popArrayBuffer(),
            this.ctx.popElementArrayBuffer(),
            (this.vqueue = []),
            (this.iqueue = []),
            this.numDraws++;
        }
        free() {
          let e = this.ctx.gl;
          e.deleteBuffer(this.glVBuf), e.deleteBuffer(this.glIBuf);
        }
      }),
      "BatchRenderer"
    ),
    V);
function rt(e) {
  let t = [],
    r = P((r) => {
      t.push(r), e(r);
    }, "push"),
    i = P(() => {
      t.pop(), e(n() ?? null);
    }, "pop"),
    n = P(() => t[t.length - 1], "cur");
  return [r, i, n];
}
function it(e, t = {}) {
  let r = [];
  function i(e) {
    r.push(e);
  }
  function n() {
    r.forEach((e) => e()), e.getExtension("WEBGL_lose_context").loseContext();
  }
  P(i, "onDestroy"), P(n, "destroy");
  let s = null;
  function o(t) {
    if (ye(t, s)) return;
    s = t;
    let r = t.reduce((e, t) => e + t.size, 0);
    t.reduce(
      (t, i, n) => (
        e.vertexAttribPointer(n, i.size, e.FLOAT, !1, 4 * r, t),
        e.enableVertexAttribArray(n),
        t + 4 * i.size
      ),
      0
    );
  }
  P(o, "setVertexFormat");
  let [a, h] = rt((t) => e.bindTexture(e.TEXTURE_2D, t)),
    [l, u] = rt((t) => e.bindBuffer(e.ARRAY_BUFFER, t)),
    [d, c] = rt((t) => e.bindBuffer(e.ELEMENT_ARRAY_BUFFER, t)),
    [f, p] = rt((t) => e.bindFramebuffer(e.FRAMEBUFFER, t)),
    [g, m] = rt((t) => e.bindRenderbuffer(e.RENDERBUFFER, t)),
    [w, A] = rt(({ x: t, y: r, w: i, h: n }) => {
      e.viewport(t, r, i, n);
    }),
    [v, y] = rt((t) => e.useProgram(t));
  return (
    w({ x: 0, y: 0, w: e.drawingBufferWidth, h: e.drawingBufferHeight }),
    {
      gl: e,
      opts: t,
      onDestroy: i,
      destroy: n,
      pushTexture2D: a,
      popTexture2D: h,
      pushArrayBuffer: l,
      popArrayBuffer: u,
      pushElementArrayBuffer: d,
      popElementArrayBuffer: c,
      pushFramebuffer: f,
      popFramebuffer: p,
      pushRenderbuffer: g,
      popRenderbuffer: m,
      pushViewport: w,
      popViewport: A,
      pushProgram: v,
      popProgram: y,
      setVertexFormat: o,
    }
  );
}
P(rt, "genStack"), P(it, "initGfx");
var nt =
    (P(
      (x = class {
        constructor(e) {
          R(this, "loaded", !1),
            R(this, "data", null),
            R(this, "error", null),
            R(this, "onLoadEvents", new Ae()),
            R(this, "onErrorEvents", new Ae()),
            R(this, "onFinishEvents", new Ae()),
            e
              .then((e) => {
                (this.data = e), this.onLoadEvents.trigger(e);
              })
              .catch((e) => {
                if (
                  ((this.error = e), !(this.onErrorEvents.numListeners() > 0))
                )
                  throw e;
                this.onErrorEvents.trigger(e);
              })
              .finally(() => {
                this.onFinishEvents.trigger(), (this.loaded = !0);
              });
        }
        static loaded(e) {
          let t = new x(Promise.resolve(e));
          return (t.data = e), (t.loaded = !0), t;
        }
        onLoad(e) {
          return (
            this.loaded && this.data ? e(this.data) : this.onLoadEvents.add(e),
            this
          );
        }
        onError(e) {
          return (
            this.loaded && this.error
              ? e(this.error)
              : this.onErrorEvents.add(e),
            this
          );
        }
        onFinish(e) {
          return this.loaded ? e() : this.onFinishEvents.add(e), this;
        }
        then(e) {
          return this.onLoad(e);
        }
        catch(e) {
          return this.onError(e);
        }
        finally(e) {
          return this.onFinish(e);
        }
      }),
      "Asset"
    ),
    x),
  st =
    (P(
      (E = class {
        constructor() {
          R(this, "assets", new Map()), R(this, "lastUID", 0);
        }
        add(e, t) {
          let r = e ?? this.lastUID++ + "",
            i = new nt(t);
          return this.assets.set(r, i), i;
        }
        addLoaded(e, t) {
          let r = e ?? this.lastUID++ + "",
            i = nt.loaded(t);
          return this.assets.set(r, i), i;
        }
        get(e) {
          return this.assets.get(e);
        }
        progress() {
          if (0 === this.assets.size) return 1;
          let e = 0;
          return (
            this.assets.forEach((t) => {
              t.loaded && e++;
            }),
            e / this.assets.size
          );
        }
      }),
      "AssetBucket"
    ),
    E);
function ot(e) {
  return fetch(e).then((t) => {
    if (!t.ok) throw new Error(`Failed to fetch "${e}"`);
    return t;
  });
}
function at(e) {
  return ot(e).then((e) => e.json());
}
function ht(e) {
  return ot(e).then((e) => e.text());
}
function lt(e) {
  return ot(e).then((e) => e.arrayBuffer());
}
function ut(e) {
  let t = new Image();
  return (
    (t.crossOrigin = "anonymous"),
    (t.src = e),
    new Promise((r, i) => {
      (t.onload = () => r(t)),
        (t.onerror = () => i(new Error(`Failed to load image from "${e}"`)));
    })
  );
}
P(ot, "fetchURL"),
  P(at, "fetchJSON"),
  P(ht, "fetchText"),
  P(lt, "fetchArrayBuffer"),
  P(ut, "loadImg");
var dt = 2.5949095,
  ct = 2.70158,
  ft = (2 * Math.PI) / 3,
  pt = (2 * Math.PI) / 4.5,
  gt = {
    linear: (e) => e,
    easeInSine: (e) => 1 - Math.cos((e * Math.PI) / 2),
    easeOutSine: (e) => Math.sin((e * Math.PI) / 2),
    easeInOutSine: (e) => -(Math.cos(Math.PI * e) - 1) / 2,
    easeInQuad: (e) => e * e,
    easeOutQuad: (e) => 1 - (1 - e) * (1 - e),
    easeInOutQuad: (e) =>
      e < 0.5 ? 2 * e * e : 1 - Math.pow(-2 * e + 2, 2) / 2,
    easeInCubic: (e) => e * e * e,
    easeOutCubic: (e) => 1 - Math.pow(1 - e, 3),
    easeInOutCubic: (e) =>
      e < 0.5 ? 4 * e * e * e : 1 - Math.pow(-2 * e + 2, 3) / 2,
    easeInQuart: (e) => e * e * e * e,
    easeOutQuart: (e) => 1 - Math.pow(1 - e, 4),
    easeInOutQuart: (e) =>
      e < 0.5 ? 8 * e * e * e * e : 1 - Math.pow(-2 * e + 2, 4) / 2,
    easeInQuint: (e) => e * e * e * e * e,
    easeOutQuint: (e) => 1 - Math.pow(1 - e, 5),
    easeInOutQuint: (e) =>
      e < 0.5 ? 16 * e * e * e * e * e : 1 - Math.pow(-2 * e + 2, 5) / 2,
    easeInExpo: (e) => (0 === e ? 0 : Math.pow(2, 10 * e - 10)),
    easeOutExpo: (e) => (1 === e ? 1 : 1 - Math.pow(2, -10 * e)),
    easeInOutExpo: (e) =>
      0 === e
        ? 0
        : 1 === e
        ? 1
        : e < 0.5
        ? Math.pow(2, 20 * e - 10) / 2
        : (2 - Math.pow(2, -20 * e + 10)) / 2,
    easeInCirc: (e) => 1 - Math.sqrt(1 - Math.pow(e, 2)),
    easeOutCirc: (e) => Math.sqrt(1 - Math.pow(e - 1, 2)),
    easeInOutCirc: (e) =>
      e < 0.5
        ? (1 - Math.sqrt(1 - Math.pow(2 * e, 2))) / 2
        : (Math.sqrt(1 - Math.pow(-2 * e + 2, 2)) + 1) / 2,
    easeInBack: (e) => ct * e * e * e - 1.70158 * e * e,
    easeOutBack: (e) =>
      1 + ct * Math.pow(e - 1, 3) + 1.70158 * Math.pow(e - 1, 2),
    easeInOutBack: (e) =>
      e < 0.5
        ? (Math.pow(2 * e, 2) * (7.189819 * e - dt)) / 2
        : (Math.pow(2 * e - 2, 2) * ((dt + 1) * (2 * e - 2) + dt) + 2) / 2,
    easeInElastic: (e) =>
      0 === e
        ? 0
        : 1 === e
        ? 1
        : -Math.pow(2, 10 * e - 10) * Math.sin((10 * e - 10.75) * ft),
    easeOutElastic: (e) =>
      0 === e
        ? 0
        : 1 === e
        ? 1
        : Math.pow(2, -10 * e) * Math.sin((10 * e - 0.75) * ft) + 1,
    easeInOutElastic: (e) =>
      0 === e
        ? 0
        : 1 === e
        ? 1
        : e < 0.5
        ? (-Math.pow(2, 20 * e - 10) * Math.sin((20 * e - 11.125) * pt)) / 2
        : (Math.pow(2, -20 * e + 10) * Math.sin((20 * e - 11.125) * pt)) / 2 +
          1,
    easeInBounce: (e) => 1 - gt.easeOutBounce(1 - e),
    easeOutBounce: (e) =>
      e < 1 / 2.75
        ? 7.5625 * e * e
        : e < 2 / 2.75
        ? 7.5625 * (e -= 1.5 / 2.75) * e + 0.75
        : e < 2.5 / 2.75
        ? 7.5625 * (e -= 2.25 / 2.75) * e + 0.9375
        : 7.5625 * (e -= 2.625 / 2.75) * e + 0.984375,
    easeInOutBounce: (e) =>
      e < 0.5
        ? (1 - gt.easeOutBounce(1 - 2 * e)) / 2
        : (1 + gt.easeOutBounce(2 * e - 1)) / 2,
  },
  mt = gt,
  wt =
    (P(
      (b = class {
        constructor(e, t, r) {
          R(this, "textures", []),
            R(this, "canvas"),
            R(this, "c2d"),
            R(this, "x", 0),
            R(this, "y", 0),
            R(this, "curHeight", 0),
            R(this, "gfx"),
            (this.gfx = e),
            (this.canvas = document.createElement("canvas")),
            (this.canvas.width = t),
            (this.canvas.height = r),
            (this.textures = [_e.fromImage(e, this.canvas)]),
            (this.c2d = this.canvas.getContext("2d"));
        }
        add(e) {
          if (e.width > this.canvas.width || e.height > this.canvas.height)
            throw new Error(
              `Texture size (${e.width} x ${e.height}) exceeds limit (${this.canvas.width} x ${this.canvas.height})`
            );
          this.x + e.width > this.canvas.width &&
            ((this.x = 0), (this.y += this.curHeight), (this.curHeight = 0)),
            this.y + e.height > this.canvas.height &&
              (this.c2d.clearRect(0, 0, this.canvas.width, this.canvas.height),
              this.textures.push(_e.fromImage(this.gfx, this.canvas)),
              (this.x = 0),
              (this.y = 0),
              (this.curHeight = 0));
          let t = this.textures[this.textures.length - 1],
            r = new N(this.x, this.y);
          return (
            (this.x += e.width),
            e.height > this.curHeight && (this.curHeight = e.height),
            e instanceof ImageData
              ? this.c2d.putImageData(e, r.x, r.y)
              : this.c2d.drawImage(e, r.x, r.y),
            t.update(this.canvas),
            [
              t,
              new H(
                r.x / this.canvas.width,
                r.y / this.canvas.height,
                e.width / this.canvas.width,
                e.height / this.canvas.height
              ),
            ]
          );
        }
        free() {
          for (let e of this.textures) e.free();
        }
      }),
      "TexPacker"
    ),
    b),
  At = B(
    "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L5QNSqT5iiySS9Ja2SV//5ME0ak//+4KgAAABgQBAADAMDgYCAEgCteQ0fZH6+ICXA357+MPfhR/+ywRf/U///LVTEFNRTMuMTAwVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVX/+5JknQAFoWhGLm5gBClBmT3GiAAAAAGkHAAAIAAANIOAAARVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV"
  ),
  vt =
    " !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~",
  yt = "topleft",
  Vt = "monospace",
  xt = 256,
  Et = "linear",
  bt = [
    { name: "a_pos", size: 2 },
    { name: "a_uv", size: 2 },
    { name: "a_color", size: 4 },
  ],
  St = 8192 * bt.reduce((e, t) => e + t.size, 0),
  Rt =
    "\nattribute vec2 a_pos;\nattribute vec2 a_uv;\nattribute vec4 a_color;\n\nvarying vec2 v_pos;\nvarying vec2 v_uv;\nvarying vec4 v_color;\n\nvec4 def_vert() {\n\treturn vec4(a_pos, 0.0, 1.0);\n}\n\n{{user}}\n\nvoid main() {\n\tvec4 pos = vert(a_pos, a_uv, a_color);\n\tv_pos = a_pos;\n\tv_uv = a_uv;\n\tv_color = a_color;\n\tgl_Position = pos;\n}\n",
  Mt =
    "\nprecision mediump float;\n\nvarying vec2 v_pos;\nvarying vec2 v_uv;\nvarying vec4 v_color;\n\nuniform sampler2D u_tex;\n\nvec4 def_frag() {\n\treturn v_color * texture2D(u_tex, v_uv);\n}\n\n{{user}}\n\nvoid main() {\n\tgl_FragColor = frag(v_pos, v_uv, v_color, u_tex);\n\tif (gl_FragColor.a == 0.0) {\n\t\tdiscard;\n\t}\n}\n",
  Tt =
    "\nvec4 vert(vec2 pos, vec2 uv, vec4 color) {\n\treturn def_vert();\n}\n",
  Pt =
    "\nvec4 frag(vec2 pos, vec2 uv, vec4 color, sampler2D tex) {\n\treturn def_frag();\n}\n",
  Bt = new Set(["id", "require"]),
  kt = new Set(["add", "update", "draw", "destroy", "inspect", "drawInspect"]);
function Ft(e) {
  switch (e) {
    case "topleft":
      return new N(-1, -1);
    case "top":
      return new N(0, -1);
    case "topright":
      return new N(1, -1);
    case "left":
      return new N(-1, 0);
    case "center":
      return new N(0, 0);
    case "right":
      return new N(1, 0);
    case "botleft":
      return new N(-1, 1);
    case "bot":
      return new N(0, 1);
    case "botright":
      return new N(1, 1);
    default:
      return e;
  }
}
function It(e) {
  switch (e) {
    case "left":
    default:
      return 0;
    case "center":
      return 0.5;
    case "right":
      return 1;
  }
}
function Ct(e) {
  return e.createBuffer(1, 1, 44100);
}
P(Ft, "anchorPt"), P(It, "alignPt"), P(Ct, "createEmptyAudioBuffer");
const Dt = P((e = {}) => {
  let t = e.root ?? document.body;
  t === document.body &&
    ((document.body.style.width = "100%"),
    (document.body.style.height = "100%"),
    (document.body.style.margin = "0px"),
    (document.documentElement.style.width = "100%"),
    (document.documentElement.style.height = "100%"));
  let r =
      e.canvas ??
      (() => {
        let e = document.createElement("canvas");
        return t.appendChild(e), e;
      })(),
    i = e.scale ?? 1,
    n = e.width && e.height && !e.stretch && !e.letterbox;
  n
    ? ((r.width = e.width * i), (r.height = e.height * i))
    : ((r.width = r.parentElement.offsetWidth),
      (r.height = r.parentElement.offsetHeight));
  let s = ["outline: none", "cursor: default"];
  if (n) {
    let e = r.width,
      t = r.height;
    s.push(`width: ${e}px`), s.push(`height: ${t}px`);
  } else s.push("width: 100%"), s.push("height: 100%");
  e.crisp &&
    (s.push("image-rendering: pixelated"),
    s.push("image-rendering: crisp-edges")),
    (r.style.cssText = s.join(";"));
  let o = e.pixelDensity || window.devicePixelRatio;
  (r.width *= o), (r.height *= o), (r.tabIndex = 0);
  let a = document.createElement("canvas");
  (a.width = xt), (a.height = xt);
  let h = a.getContext("2d", { willReadFrequently: !0 }),
    l = Ze({
      canvas: r,
      touchToMouse: e.touchToMouse,
      gamepads: e.gamepads,
      pixelDensity: e.pixelDensity,
      maxFPS: e.maxFPS,
    }),
    u = [],
    d = l.canvas.getContext("webgl", {
      antialias: !0,
      depth: !0,
      stencil: !0,
      alpha: !0,
      preserveDrawingBuffer: !0,
    }),
    c = it(d, { texFilter: e.texFilter }),
    f = (() => {
      let t = ot(Tt, Pt),
        r = _e.fromImage(
          c,
          new ImageData(new Uint8ClampedArray([255, 255, 255, 255]), 1, 1)
        ),
        n =
          e.width && e.height
            ? new $e(c, e.width * o * i, e.height * o * i)
            : new $e(c, d.drawingBufferWidth, d.drawingBufferHeight),
        s = null,
        a = 1;
      e.background &&
        ((s = G(e.background)),
        (a = Array.isArray(e.background) ? e.background[3] : 1),
        d.clearColor(s.r / 255, s.g / 255, s.b / 255, a ?? 1)),
        d.enable(d.BLEND),
        d.blendFuncSeparate(
          d.SRC_ALPHA,
          d.ONE_MINUS_SRC_ALPHA,
          d.ONE,
          d.ONE_MINUS_SRC_ALPHA
        );
      let h = new tt(c, bt, St, 12288),
        l = _e.fromImage(
          c,
          new ImageData(
            new Uint8ClampedArray([
              128, 128, 128, 255, 190, 190, 190, 255, 190, 190, 190, 255, 128,
              128, 128, 255,
            ]),
            2,
            2
          ),
          { wrap: "repeat", filter: "nearest" }
        );
      return {
        lastDrawCalls: 0,
        defShader: t,
        defTex: r,
        frameBuffer: n,
        postShader: null,
        postShaderUniform: null,
        renderer: h,
        transform: new K(),
        transformStack: [],
        bgTex: l,
        bgColor: s,
        bgAlpha: a,
        width: e.width ?? d.drawingBufferWidth / o / i,
        height: e.height ?? d.drawingBufferHeight / o / i,
        viewport: {
          x: 0,
          y: 0,
          width: d.drawingBufferWidth,
          height: d.drawingBufferHeight,
        },
        fixed: !1,
      };
    })();
  const p = class e {
    constructor(e, t, r = {}, i = null) {
      R(this, "tex"),
        R(this, "frames", [new H(0, 0, 1, 1)]),
        R(this, "anims", {}),
        R(this, "slice9", null),
        (this.tex = e),
        t && (this.frames = t),
        (this.anims = r),
        (this.slice9 = i);
    }
    get width() {
      return this.tex.width * this.frames[0].w;
    }
    get height() {
      return this.tex.height * this.frames[0].h;
    }
    static from(t, r = {}) {
      return "string" == typeof t
        ? e.fromURL(t, r)
        : Promise.resolve(e.fromImage(t, r));
    }
    static fromImage(t, r = {}) {
      let [i, n] = v.packer.add(t),
        s = r.frames
          ? r.frames.map(
              (e) =>
                new H(n.x + e.x * n.w, n.y + e.y * n.h, e.w * n.w, e.h * n.h)
            )
          : J(r.sliceX || 1, r.sliceY || 1, n.x, n.y, n.w, n.h);
      return new e(i, s, r.anims, r.slice9);
    }
    static fromURL(t, r = {}) {
      return ut(t).then((t) => e.fromImage(t, r));
    }
  };
  P(p, "SpriteData");
  let g = p;
  const m = class e {
    constructor(e) {
      R(this, "buf"), (this.buf = e);
    }
    static fromArrayBuffer(t) {
      return new Promise((e, r) => A.ctx.decodeAudioData(t, e, r)).then(
        (t) => new e(t)
      );
    }
    static fromURL(t) {
      return Me(t)
        ? e.fromArrayBuffer(xe(t))
        : lt(t).then((t) => e.fromArrayBuffer(t));
    }
  };
  P(m, "SoundData");
  let w = m,
    A = (() => {
      let e = new (window.AudioContext || window.webkitAudioContext)(),
        t = e.createGain();
      t.connect(e.destination);
      let r = new w(Ct(e));
      return (
        e
          .decodeAudioData(At.buffer.slice(0))
          .then((e) => {
            r.buf = e;
          })
          .catch((e) => {
            console.error("Failed to load burp: ", e);
          }),
        { ctx: e, masterNode: t, burpSnd: r }
      );
    })(),
    v = {
      urlPrefix: "",
      sprites: new st(),
      fonts: new st(),
      bitmapFonts: new st(),
      sounds: new st(),
      shaders: new st(),
      custom: new st(),
      packer: new wt(c, 2048, 2048),
      loaded: !1,
    };
  function y(e) {
    return "string" != typeof e || Me(e) ? e : v.urlPrefix + e;
  }
  P(y, "fixURL");
  let V = {
    events: new ve(),
    objEvents: new ve(),
    root: Mr([]),
    gravity: 0,
    scenes: {},
    logs: [],
    cam: { pos: null, scale: new N(1), angle: 0, shake: 0, transform: new K() },
  };
  function x(e) {
    return v.custom.add(null, e);
  }
  function E() {
    let e = [v.sprites, v.sounds, v.shaders, v.fonts, v.bitmapFonts, v.custom];
    return e.reduce((e, t) => e + t.progress(), 0) / e.length;
  }
  function b(e) {
    return void 0 !== e && (v.urlPrefix = e), v.urlPrefix;
  }
  function S(e, t) {
    return v.custom.add(e, at(t));
  }
  V.root.use(ci()),
    P(x, "load"),
    P(E, "loadProgress"),
    P(b, "loadRoot"),
    P(S, "loadJSON");
  const M = class {
    constructor(e, t = {}) {
      if (
        (R(this, "fontface"),
        R(this, "filter", Et),
        R(this, "outline", null),
        R(this, "size", 64),
        (this.fontface = e),
        (this.filter = t.filter ?? Et),
        (this.size = t.size ?? 64),
        this.size > xt)
      )
        throw new Error("Max font size: 256");
      t.outline &&
        ((this.outline = { width: 1, color: G(0, 0, 0) }),
        "number" == typeof t.outline
          ? (this.outline.width = t.outline)
          : "object" == typeof t.outline &&
            (t.outline.width && (this.outline.width = t.outline.width),
            t.outline.color && (this.outline.color = t.outline.color)));
    }
  };
  P(M, "FontData");
  let T = M;
  function B(e, t, r = {}) {
    let i = new FontFace(e, "string" == typeof t ? `url(${t})` : t);
    return (
      document.fonts.add(i),
      v.fonts.add(
        e,
        i
          .load()
          .catch((e) => {
            throw new Error(`Failed to load font from "${t}": ${e}`);
          })
          .then((e) => new T(e, r))
      )
    );
  }
  function Q(e, t, r, i, n = {}) {
    return v.bitmapFonts.add(
      e,
      ut(t).then((e) => dt(_e.fromImage(c, e, n), r, i, n.chars ?? vt))
    );
  }
  function J(e = 1, t = 1, r = 0, i = 0, n = 1, s = 1) {
    let o = [],
      a = n / e,
      h = s / t;
    for (let l = 0; l < t; l++)
      for (let t = 0; t < e; t++) o.push(new H(r + t * a, i + l * h, a, h));
    return o;
  }
  function te(e, t) {
    return (
      (e = y(e)),
      x(
        "string" == typeof t
          ? new Promise((r, i) => {
              at(t).then((t) => {
                te(e, t).then(r).catch(i);
              });
            })
          : g.from(e).then((e) => {
              let r = {};
              for (let i in t) {
                let n = t[i],
                  s = e.frames[0],
                  o = 2048 * s.w,
                  a = 2048 * s.h,
                  h = n.frames
                    ? n.frames.map(
                        (e) =>
                          new H(
                            s.x + ((n.x + e.x) / o) * s.w,
                            s.y + ((n.y + e.y) / a) * s.h,
                            (e.w / o) * s.w,
                            (e.h / a) * s.h
                          )
                      )
                    : J(
                        n.sliceX || 1,
                        n.sliceY || 1,
                        s.x + (n.x / o) * s.w,
                        s.y + (n.y / a) * s.h,
                        (n.width / o) * s.w,
                        (n.height / a) * s.h
                      ),
                  l = new g(e.tex, h, n.anims);
                v.sprites.addLoaded(i, l), (r[i] = l);
              }
              return r;
            })
      )
    );
  }
  function ae(e, t = {}) {
    let r = document.createElement("canvas"),
      i = e[0].width,
      n = e[0].height;
    (r.width = i * e.length), (r.height = n);
    let s = r.getContext("2d");
    e.forEach((e, t) => {
      e instanceof ImageData
        ? s.putImageData(e, t * i, 0)
        : s.drawImage(e, t * i, 0);
    });
    let o = s.getImageData(0, 0, e.length * i, n);
    return g.fromImage(o, { ...t, sliceX: e.length, sliceY: 1 });
  }
  function fe(e, t, r = { sliceX: 1, sliceY: 1, anims: {} }) {
    return (
      (t = y(t)),
      Array.isArray(t)
        ? t.some((e) => "string" == typeof e)
          ? v.sprites.add(
              e,
              Promise.all(
                t.map((e) =>
                  "string" == typeof e ? ut(e) : Promise.resolve(e)
                )
              ).then((e) => ae(e, r))
            )
          : v.sprites.addLoaded(e, ae(t, r))
        : "string" == typeof t
        ? v.sprites.add(e, g.from(t, r))
        : v.sprites.addLoaded(e, g.fromImage(t, r))
    );
  }
  function ye(e, t) {
    return (
      (t = y(t)),
      v.sprites.add(
        e,
        new Promise(async (e) => {
          let r = "string" == typeof t ? await at(t) : t,
            i = await Promise.all(r.frames.map(ut)),
            n = document.createElement("canvas");
          (n.width = r.width), (n.height = r.height * r.frames.length);
          let s = n.getContext("2d");
          i.forEach((e, t) => {
            s.drawImage(e, 0, t * r.height);
          }),
            e(await fe(null, n, { sliceY: r.frames.length, anims: r.anims }));
        })
      )
    );
  }
  function Ve(e, t, r) {
    (t = y(t)), (r = y(r)), "string" == typeof t && !r && (r = Te(t) + ".json");
    let i = "string" == typeof r ? at(r) : Promise.resolve(r);
    return v.sprites.add(
      e,
      i.then((e) => {
        let r = e.meta.size,
          i = e.frames.map(
            (e) =>
              new H(
                e.frame.x / r.w,
                e.frame.y / r.h,
                e.frame.w / r.w,
                e.frame.h / r.h
              )
          ),
          n = {};
        for (let t of e.meta.frameTags)
          t.from === t.to
            ? (n[t.name] = t.from)
            : (n[t.name] = {
                from: t.from,
                to: t.to,
                speed: 10,
                loop: !0,
                pingpong: "pingpong" === t.direction,
              });
        return g.from(t, { frames: i, anims: n });
      })
    );
  }
  function Ie(e, t, r) {
    return v.shaders.addLoaded(e, ot(t, r));
  }
  function De(e, t, r) {
    (t = y(t)), (r = y(r));
    let i = P((e) => (e ? ht(e) : Promise.resolve(null)), "resolveUrl"),
      n = Promise.all([i(t), i(r)]).then(([e, t]) => ot(e, t));
    return v.shaders.add(e, n);
  }
  function Ue(e, t) {
    return (
      (t = y(t)),
      v.sounds.add(
        e,
        "string" == typeof t ? w.fromURL(t) : w.fromArrayBuffer(t)
      )
    );
  }
  function Ne(e = "bean") {
    return fe(
      e,
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD0AAAA1CAYAAADyMeOEAAAAAXNSR0IArs4c6QAAAoVJREFUaIHdm7txwkAQhheGAqACiCHzOKQDQrqgILpwSAeEDBnEUAF0gCMxZ7G72qce/mec2Lpf9+3unaS78wgSNZ8uX5729+d1FNWXUuGmXlBOUUEIMckEpeQJgBu6C+BSFngztBR2vd+ovY+7g+p6LbgaWgJrAeUkDYIUXgXdBBwNi6kpABJwMTQH3AZsXRR8GHTfgEth8E3gjdAUcNewpbTgY85sCMCUuOokozE0YM0YRzM9NGAAXd8+omAF5h4lnmBRvpSnZHyLoLEbaN+aKB9KWv/KWw0tAbbANnlG+UvB2dm77NxxdwgBpjrF/d7rW9cbmpvio2A5z8iAYpVU8pGZlo6/2+MSco2lHfd3rv9jAP038e1xef9o2mjvYb2OqpqKE81028/jeietlSEVO5FRWsxWsJit1G3aFpW8iWe5RwpiCZAk25QvV6nz6fIlynRGuTd5WqpJ4guAlDfVKBK87hXljflgv1ON6fV+4+5gVlA17SfeG0heKqQd4l4jI/wrmaA9N9R4ar+wpHJDZyrrfcH0nB66PqAzPi76pn+faSyJk/vzOorYhGurQrzj/P68jtBMawHaHBIR9xoD5O34dy0qQOSYHvqExq2TpT2nf76+w7y251OYF0CRaU+J920TwLUa6inx6OxE6g80lu2ux7Y2eJLF/rCXE6zEPdnenk9o+4ih9AEdnW2q81HXl5LuU6OTl2fXUhqganbXAGq3g6jJOWV/OnoesO6YqqEB/GdNsjf7uHtwj2DzmRNpp7iOZfm6D9oAxB6Yi1gC4oIYeo4MIPdopEQRB+cAko5J1tW386HpB2Kz1eop4Epdwls/kgZ1sh8gZsEjdcWkr//D8Qu3Z3l5Nl1NtAAAAABJRU5ErkJggg=="
    );
  }
  function Le(e) {
    return v.sprites.get(e);
  }
  function Oe(e) {
    return v.sounds.get(e);
  }
  function Ge(e) {
    return v.fonts.get(e);
  }
  function qe(e) {
    return v.bitmapFonts.get(e);
  }
  function He(e) {
    return v.shaders.get(e);
  }
  function Ye(e) {
    return v.custom.get(e);
  }
  function Ke(e) {
    if ("string" == typeof e) {
      let t = Le(e);
      if (t) return t;
      if (E() < 1) return null;
      throw new Error(`Sprite not found: ${e}`);
    }
    if (e instanceof g) return nt.loaded(e);
    if (e instanceof nt) return e;
    throw new Error(`Invalid sprite: ${e}`);
  }
  function je(e) {
    if ("string" == typeof e) {
      let t = Oe(e);
      if (t) return t;
      if (E() < 1) return null;
      throw new Error(`Sound not found: ${e}`);
    }
    if (e instanceof w) return nt.loaded(e);
    if (e instanceof nt) return e;
    throw new Error(`Invalid sound: ${e}`);
  }
  function Qe(e) {
    if (!e) return f.defShader;
    if ("string" == typeof e) {
      let t = He(e);
      if (t) return t.data ?? t;
      if (E() < 1) return null;
      throw new Error(`Shader not found: ${e}`);
    }
    return e instanceof nt && e.data ? e.data : e;
  }
  function ze(t) {
    if (!t) return ze(e.font ?? "monospace");
    if ("string" == typeof t) {
      let e = qe(t),
        r = Ge(t);
      if (e) return e.data ?? e;
      if (r) return r.data ?? r;
      if (document.fonts.check(`64px ${t}`)) return t;
      if (E() < 1) return null;
      throw new Error(`Font not found: ${t}`);
    }
    return t instanceof nt && t.data ? t.data : t;
  }
  function Je(e) {
    return (
      void 0 !== e && (A.masterNode.gain.value = e), A.masterNode.gain.value
    );
  }
  function Xe(e, t = {}) {
    let r = A.ctx,
      i = t.paused ?? !1,
      n = r.createBufferSource(),
      s = new Ae(),
      o = r.createGain(),
      a = t.seek ?? 0,
      h = 0,
      l = 0,
      u = !1;
    (n.loop = !!t.loop),
      (n.detune.value = t.detune ?? 0),
      (n.playbackRate.value = t.speed ?? 1),
      n.connect(o),
      (n.onended = () => {
        var e;
        f() >= (null == (e = n.buffer) ? void 0 : e.duration) && s.trigger();
      }),
      o.connect(A.masterNode),
      (o.gain.value = t.volume ?? 1);
    let d = P((e) => {
        (n.buffer = e.buf), i || ((h = r.currentTime), n.start(0, a), (u = !0));
      }, "start"),
      c = je(e);
    c instanceof nt && c.onLoad(d);
    let f = P(() => {
        if (!n.buffer) return 0;
        let e = i ? l - h : r.currentTime - h,
          t = n.buffer.duration;
        return n.loop ? e % t : Math.min(e, t);
      }, "getTime"),
      p = P((e) => {
        let t = r.createBufferSource();
        return (
          (t.buffer = e.buffer),
          (t.loop = e.loop),
          (t.playbackRate.value = e.playbackRate.value),
          (t.detune.value = e.detune.value),
          (t.onended = e.onended),
          t.connect(o),
          t
        );
      }, "cloneNode");
    return {
      stop() {
        (this.paused = !0), this.seek(0);
      },
      set paused(e) {
        if (i !== e)
          if (((i = e), e)) u && (n.stop(), (u = !1)), (l = r.currentTime);
          else {
            n = p(n);
            let e = l - h;
            n.start(0, e), (u = !0), (h = r.currentTime - e), (l = 0);
          }
      },
      get paused() {
        return i;
      },
      play(e = 0) {
        this.seek(e), (this.paused = !1);
      },
      seek(e) {
        var t;
        (null == (t = n.buffer) ? void 0 : t.duration) &&
          (e > n.buffer.duration ||
            (i
              ? ((n = p(n)), (h = l - e))
              : (n.stop(),
                (n = p(n)),
                (h = r.currentTime - e),
                n.start(0, e),
                (u = !0),
                (l = 0))));
      },
      set speed(e) {
        n.playbackRate.value = e;
      },
      get speed() {
        return n.playbackRate.value;
      },
      set detune(e) {
        n.detune.value = e;
      },
      get detune() {
        return n.detune.value;
      },
      set volume(e) {
        o.gain.value = Math.max(e, 0);
      },
      get volume() {
        return o.gain.value;
      },
      set loop(e) {
        n.loop = e;
      },
      get loop() {
        return n.loop;
      },
      duration() {
        var e;
        return (null == (e = n.buffer) ? void 0 : e.duration) ?? 0;
      },
      time() {
        return f() % this.duration();
      },
      onEnd: (e) => s.add(e),
      then(e) {
        return this.onEnd(e);
      },
    };
  }
  function We(e) {
    return Xe(A.burpSnd, e);
  }
  function rt(e, t) {
    return new $e(c, e, t);
  }
  function ot(e = Tt, t = Pt) {
    let r = Rt.replace("{{user}}", e ?? Tt),
      i = Mt.replace("{{user}}", t ?? Pt);
    try {
      return new et(
        c,
        r,
        i,
        bt.map((e) => e.name)
      );
    } catch (n) {
      let e = /(?<type>^\w+) SHADER ERROR: 0:(?<line>\d+): (?<msg>.+)/,
        t = ke(n).match(e),
        r = Number(t.groups.line) - 14,
        i = t.groups.msg.trim(),
        s = t.groups.type.toLowerCase();
      throw new Error(`${s} shader line ${r}: ${i}`);
    }
  }
  function dt(e, t, r, i) {
    let n = e.width / t,
      s = {},
      o = i.split("").entries();
    for (let [a, h] of o)
      s[h] = new H((a % n) * t, Math.floor(a / n) * r, t, r);
    return { tex: e, map: s, size: r };
  }
  function ct(e, t, r, i = f.defTex, n = f.defShader, s = {}) {
    let o = Qe(n);
    if (!o || o instanceof nt) return;
    let a = f.fixed || r ? f.transform : V.cam.transform.mult(f.transform),
      h = [];
    for (let l of e) {
      let e = Ut(a.multVec2(l.pos));
      h.push(
        e.x,
        e.y,
        l.uv.x,
        l.uv.y,
        l.color.r / 255,
        l.color.g / 255,
        l.color.b / 255,
        l.opacity
      );
    }
    f.renderer.push(d.TRIANGLES, h, t, o, i, s);
  }
  function ft() {
    f.renderer.flush();
  }
  function pt() {
    d.clear(d.COLOR_BUFFER_BIT),
      f.frameBuffer.bind(),
      d.clear(d.COLOR_BUFFER_BIT),
      f.bgColor ||
        nr(() => {
          Yt({
            width: cr(),
            height: fr(),
            quad: new H(0, 0, cr() / 64, fr() / 64),
            tex: f.bgTex,
            fixed: !0,
          });
        }),
      (f.renderer.numDraws = 0),
      (f.fixed = !1),
      (f.transformStack.length = 0),
      (f.transform = new K());
  }
  function gt(e, t) {
    (f.postShader = e), (f.postShaderUniform = t ?? null);
  }
  function Dt() {
    ft(),
      (f.lastDrawCalls = f.renderer.numDraws),
      f.frameBuffer.unbind(),
      d.viewport(0, 0, d.drawingBufferWidth, d.drawingBufferHeight);
    let e = f.width,
      t = f.height;
    (f.width = d.drawingBufferWidth / o),
      (f.height = d.drawingBufferHeight / o),
      Kt({
        flipY: !0,
        tex: f.frameBuffer.tex,
        pos: new N(f.viewport.x, f.viewport.y),
        width: f.viewport.width,
        height: f.viewport.height,
        shader: f.postShader,
        uniform:
          "function" == typeof f.postShaderUniform
            ? f.postShaderUniform()
            : f.postShaderUniform,
        fixed: !0,
      }),
      ft(),
      (f.width = e),
      (f.height = t);
  }
  function Ut(e) {
    return new N((e.x / cr()) * 2 - 1, (-e.y / fr()) * 2 + 1);
  }
  function Nt(e) {
    f.transform = e.clone();
  }
  function Lt(...e) {
    if (void 0 === e[0]) return;
    let t = L(...e);
    (0 === t.x && 0 === t.y) || f.transform.translate(t);
  }
  function Ot(...e) {
    if (void 0 === e[0]) return;
    let t = L(...e);
    (1 === t.x && 1 === t.y) || f.transform.scale(t);
  }
  function Gt(e) {
    e && f.transform.rotate(e);
  }
  function qt() {
    f.transformStack.push(f.transform.clone());
  }
  function Ht() {
    f.transformStack.length > 0 && (f.transform = f.transformStack.pop());
  }
  function Yt(e) {
    if (void 0 === e.width || void 0 === e.height)
      throw new Error('drawUVQuad() requires property "width" and "height".');
    if (e.width <= 0 || e.height <= 0) return;
    let t = e.width,
      r = e.height,
      i = Ft(e.anchor || yt).scale(new N(t, r).scale(-0.5)),
      n = e.quad || new H(0, 0, 1, 1),
      s = e.color || G(255, 255, 255),
      o = e.opacity ?? 1,
      a = e.tex ? 0.1 / e.tex.width : 0,
      h = e.tex ? 0.1 / e.tex.height : 0,
      l = n.x + a,
      u = n.y + h,
      d = n.w - 2 * a,
      c = n.h - 2 * h;
    qt(),
      Lt(e.pos),
      Gt(e.angle),
      Ot(e.scale),
      Lt(i),
      ct(
        [
          {
            pos: new N(-t / 2, r / 2),
            uv: new N(e.flipX ? l + d : l, e.flipY ? u : u + c),
            color: s,
            opacity: o,
          },
          {
            pos: new N(-t / 2, -r / 2),
            uv: new N(e.flipX ? l + d : l, e.flipY ? u + c : u),
            color: s,
            opacity: o,
          },
          {
            pos: new N(t / 2, -r / 2),
            uv: new N(e.flipX ? l : l + d, e.flipY ? u + c : u),
            color: s,
            opacity: o,
          },
          {
            pos: new N(t / 2, r / 2),
            uv: new N(e.flipX ? l : l + d, e.flipY ? u : u + c),
            color: s,
            opacity: o,
          },
        ],
        [0, 1, 3, 1, 2, 3],
        e.fixed,
        e.tex,
        e.shader,
        e.uniform
      ),
      Ht();
  }
  function Kt(e) {
    if (!e.tex) throw new Error('drawTexture() requires property "tex".');
    let t = e.quad ?? new H(0, 0, 1, 1),
      r = e.tex.width * t.w,
      i = e.tex.height * t.h,
      n = new N(1);
    if (e.tiled) {
      let s = Math.ceil((e.width || r) / r),
        o = Math.ceil((e.height || i) / i),
        a = Ft(e.anchor || yt)
          .add(new N(1, 1))
          .scale(0.5)
          .scale(s * r, o * i);
      for (let h = 0; h < s; h++)
        for (let s = 0; s < o; s++)
          Yt(
            Object.assign({}, e, {
              pos: (e.pos || new N(0)).add(new N(r * h, i * s)).sub(a),
              scale: n.scale(e.scale || new N(1)),
              tex: e.tex,
              quad: t,
              width: r,
              height: i,
              anchor: "topleft",
            })
          );
    } else
      e.width && e.height
        ? ((n.x = e.width / r), (n.y = e.height / i))
        : e.width
        ? ((n.x = e.width / r), (n.y = n.x))
        : e.height && ((n.y = e.height / i), (n.x = n.y)),
        Yt(
          Object.assign({}, e, {
            scale: n.scale(e.scale || new N(1)),
            tex: e.tex,
            quad: t,
            width: r,
            height: i,
          })
        );
  }
  function jt(e) {
    if (!e.sprite) throw new Error('drawSprite() requires property "sprite"');
    let t = Ke(e.sprite);
    if (!t || !t.data) return;
    let r = t.data.frames[e.frame ?? 0];
    if (!r) throw new Error(`Frame not found: ${e.frame ?? 0}`);
    Kt(
      Object.assign({}, e, {
        tex: t.data.tex,
        quad: r.scale(e.quad ?? new H(0, 0, 1, 1)),
      })
    );
  }
  function Qt(e, t, r, i, n, s = 1) {
    (i = k(i % 360)), (n = k(n % 360)) <= i && (n += 2 * Math.PI);
    let o = [],
      a = (n - i) / Math.ceil(((n - i) / k(8)) * s);
    for (let h = i; h < n; h += a)
      o.push(e.add(t * Math.cos(h), r * Math.sin(h)));
    return o.push(e.add(t * Math.cos(n), r * Math.sin(n))), o;
  }
  function zt(e) {
    if (void 0 === e.width || void 0 === e.height)
      throw new Error('drawRect() requires property "width" and "height".');
    if (e.width <= 0 || e.height <= 0) return;
    let t = e.width,
      r = e.height,
      i = Ft(e.anchor || yt)
        .add(1, 1)
        .scale(new N(t, r).scale(-0.5)),
      n = [new N(0, 0), new N(t, 0), new N(t, r), new N(0, r)];
    if (e.radius) {
      let i = Math.min(Math.min(t, r) / 2, e.radius);
      n = [
        new N(i, 0),
        new N(t - i, 0),
        ...Qt(new N(t - i, i), i, i, 270, 360),
        new N(t, i),
        new N(t, r - i),
        ...Qt(new N(t - i, r - i), i, i, 0, 90),
        new N(t - i, r),
        new N(i, r),
        ...Qt(new N(i, r - i), i, i, 90, 180),
        new N(0, r - i),
        new N(0, i),
        ...Qt(new N(i, i), i, i, 180, 270),
      ];
    }
    $t(
      Object.assign({}, e, {
        offset: i,
        pts: n,
        ...(e.gradient
          ? {
              colors: e.horizontal
                ? [e.gradient[0], e.gradient[1], e.gradient[1], e.gradient[0]]
                : [e.gradient[0], e.gradient[0], e.gradient[1], e.gradient[1]],
            }
          : {}),
      })
    );
  }
  function Jt(e) {
    let { p1: t, p2: r } = e;
    if (!t || !r)
      throw new Error('drawLine() requires properties "p1" and "p2".');
    let i = e.width || 1,
      n = r
        .sub(t)
        .unit()
        .normal()
        .scale(0.5 * i);
    ct(
      [t.sub(n), t.add(n), r.add(n), r.sub(n)].map((t) => ({
        pos: new N(t.x, t.y),
        uv: new N(0),
        color: e.color ?? O.WHITE,
        opacity: e.opacity ?? 1,
      })),
      [0, 1, 3, 1, 2, 3],
      e.fixed,
      f.defTex,
      e.shader,
      e.uniform
    );
  }
  function Xt(e) {
    let t = e.pts;
    if (!t) throw new Error('drawLines() requires property "pts".');
    if (!(t.length < 2))
      if (e.radius && t.length >= 3) {
        let r = t[0].sdist(t[1]);
        for (let e = 1; e < t.length - 1; e++)
          r = Math.min(t[e].sdist(t[e + 1]), r);
        Math.min(e.radius, Math.sqrt(r) / 2),
          Jt(Object.assign({}, e, { p1: t[0], p2: t[1] }));
        for (let i = 1; i < t.length - 2; i++) {
          let r = t[i],
            n = t[i + 1];
          Jt(Object.assign({}, e, { p1: r, p2: n }));
        }
        Jt(Object.assign({}, e, { p1: t[t.length - 2], p2: t[t.length - 1] }));
      } else
        for (let r = 0; r < t.length - 1; r++)
          Jt(Object.assign({}, e, { p1: t[r], p2: t[r + 1] })),
            "none" !== e.join &&
              Zt(Object.assign({}, e, { pos: t[r], radius: e.width / 2 }));
  }
  function Wt(e) {
    if (!e.p1 || !e.p2 || !e.p3)
      throw new Error(
        'drawTriangle() requires properties "p1", "p2" and "p3".'
      );
    return $t(Object.assign({}, e, { pts: [e.p1, e.p2, e.p3] }));
  }
  function Zt(e) {
    if ("number" != typeof e.radius)
      throw new Error('drawCircle() requires property "radius".');
    0 !== e.radius &&
      _t(
        Object.assign({}, e, { radiusX: e.radius, radiusY: e.radius, angle: 0 })
      );
  }
  function _t(e) {
    if (void 0 === e.radiusX || void 0 === e.radiusY)
      throw new Error(
        'drawEllipse() requires properties "radiusX" and "radiusY".'
      );
    if (0 === e.radiusX || 0 === e.radiusY) return;
    let t = e.start ?? 0,
      r = e.end ?? 360,
      i = Ft(e.anchor ?? "center").scale(new N(-e.radiusX, -e.radiusY)),
      n = Qt(i, e.radiusX, e.radiusY, t, r, e.resolution);
    n.unshift(i);
    let s = Object.assign({}, e, {
      pts: n,
      radius: 0,
      ...(e.gradient
        ? {
            colors: [e.gradient[0], ...Array(n.length - 1).fill(e.gradient[1])],
          }
        : {}),
    });
    if (r - t >= 360 && e.outline)
      return (
        !1 !== e.fill && $t(Object.assign(s, { outline: null })),
        void $t(Object.assign(s, { pts: n.slice(1), fill: !1 }))
      );
    $t(s);
  }
  function $t(e) {
    if (!e.pts) throw new Error('drawPolygon() requires property "pts".');
    let t = e.pts.length;
    if (!(t < 3)) {
      if (
        (qt(), Lt(e.pos), Ot(e.scale), Gt(e.angle), Lt(e.offset), !1 !== e.fill)
      ) {
        let r = e.color ?? O.WHITE,
          i = e.pts.map((t, i) => ({
            pos: new N(t.x, t.y),
            uv: new N(0, 0),
            color: e.colors && e.colors[i] ? e.colors[i].mult(r) : r,
            opacity: e.opacity ?? 1,
          })),
          n = [...Array(t - 2).keys()].map((e) => [0, e + 1, e + 2]).flat();
        ct(i, e.indices ?? n, e.fixed, f.defTex, e.shader, e.uniform);
      }
      e.outline &&
        Xt({
          pts: [...e.pts, e.pts[0]],
          radius: e.radius,
          width: e.outline.width,
          color: e.outline.color,
          join: e.outline.join,
          uniform: e.uniform,
          fixed: e.fixed,
          opacity: e.opacity,
        }),
        Ht();
    }
  }
  function er(e, t, r) {
    ft(),
      d.clear(d.STENCIL_BUFFER_BIT),
      d.enable(d.STENCIL_TEST),
      d.stencilFunc(d.NEVER, 1, 255),
      d.stencilOp(d.REPLACE, d.REPLACE, d.REPLACE),
      t(),
      ft(),
      d.stencilFunc(r, 1, 255),
      d.stencilOp(d.KEEP, d.KEEP, d.KEEP),
      e(),
      ft(),
      d.disable(d.STENCIL_TEST);
  }
  function tr(e, t) {
    er(e, t, d.EQUAL);
  }
  function rr(e, t) {
    er(e, t, d.NOTEQUAL);
  }
  function ir() {
    return (f.viewport.width + f.viewport.height) / (f.width + f.height);
  }
  function nr(e) {
    ft();
    let t = f.width,
      r = f.height;
    (f.width = f.viewport.width),
      (f.height = f.viewport.height),
      e(),
      ft(),
      (f.width = t),
      (f.height = r);
  }
  function sr(e, t) {
    t.pos && (e.pos = e.pos.add(t.pos)),
      t.scale && (e.scale = e.scale.scale(L(t.scale))),
      t.angle && (e.angle += t.angle),
      t.color && 1 === e.ch.length && (e.color = e.color.mult(t.color)),
      t.opacity && (e.opacity *= t.opacity);
  }
  P(B, "loadFont"),
    P(Q, "loadBitmapFont"),
    P(J, "slice"),
    P(te, "loadSpriteAtlas"),
    P(ae, "createSpriteSheet"),
    P(fe, "loadSprite"),
    P(ye, "loadPedit"),
    P(Ve, "loadAseprite"),
    P(Ie, "loadShader"),
    P(De, "loadShaderURL"),
    P(Ue, "loadSound"),
    P(Ne, "loadBean"),
    P(Le, "getSprite"),
    P(Oe, "getSound"),
    P(Ge, "getFont"),
    P(qe, "getBitmapFont"),
    P(He, "getShader"),
    P(Ye, "getAsset"),
    P(Ke, "resolveSprite"),
    P(je, "resolveSound"),
    P(Qe, "resolveShader"),
    P(ze, "resolveFont"),
    P(Je, "volume"),
    P(Xe, "play"),
    P(We, "burp"),
    P(rt, "makeCanvas"),
    P(ot, "makeShader"),
    P(dt, "makeFont"),
    P(ct, "drawRaw"),
    P(ft, "flush"),
    P(pt, "frameStart"),
    P(gt, "usePostEffect"),
    P(Dt, "frameEnd"),
    P(Ut, "screen2ndc"),
    P(Nt, "pushMatrix"),
    P(Lt, "pushTranslate"),
    P(Ot, "pushScale"),
    P(Gt, "pushRotate"),
    P(qt, "pushTransform"),
    P(Ht, "popTransform"),
    P(Yt, "drawUVQuad"),
    P(Kt, "drawTexture"),
    P(jt, "drawSprite"),
    P(Qt, "getArcPts"),
    P(zt, "drawRect"),
    P(Jt, "drawLine"),
    P(Xt, "drawLines"),
    P(Wt, "drawTriangle"),
    P(Zt, "drawCircle"),
    P(_t, "drawEllipse"),
    P($t, "drawPolygon"),
    P(er, "drawStenciled"),
    P(tr, "drawMasked"),
    P(rr, "drawSubtracted"),
    P(ir, "getViewportScale"),
    P(nr, "drawUnscaled"),
    P(sr, "applyCharTransform");
  let or = /\[(?<style>\w+)\](?<text>.*?)\[\/\k<style>\]/g;
  function ar(e) {
    let t = {},
      r = e.replace(or, "$2"),
      i = 0;
    for (let n of e.matchAll(or)) {
      let e = n.index - i;
      for (let r = 0; r < n.groups.text.length; r++)
        t[r + e] = [n.groups.style];
      i += n[0].length - n.groups.text.length;
    }
    return { charStyleMap: t, text: r };
  }
  P(ar, "compileStyledText");
  let hr = {};
  function lr(e) {
    var t, r;
    if (void 0 === e.text)
      throw new Error('formatText() requires property "text".');
    let i = ze(e.font);
    if ("" === e.text || i instanceof nt || !i)
      return { width: 0, height: 0, chars: [], opt: e };
    let { charStyleMap: n, text: s } = ar(e.text + ""),
      o = Ce(s);
    if (i instanceof T || "string" == typeof i) {
      let e = i instanceof T ? i.fontface.family : i,
        n =
          i instanceof T
            ? { outline: i.outline, filter: i.filter }
            : { outline: null, filter: Et },
        s = hr[e] ?? {
          font: {
            tex: new _e(c, 2048, 2048, { filter: n.filter }),
            map: {},
            size: 64,
          },
          cursor: new N(0),
          outline: n.outline,
        };
      hr[e] || (hr[e] = s), (i = s.font);
      for (let l of o)
        if (!s.font.map[l]) {
          let n = h;
          n.clearRect(0, 0, a.width, a.height),
            (n.font = `${i.size}px ${e}`),
            (n.textBaseline = "top"),
            (n.textAlign = "left"),
            (n.fillStyle = "#ffffff");
          let o = n.measureText(l),
            u = Math.ceil(o.width),
            d = i.size;
          s.outline &&
            ((n.lineJoin = "round"),
            (n.lineWidth = 2 * s.outline.width),
            (n.strokeStyle = s.outline.color.toHex()),
            n.strokeText(l, s.outline.width, s.outline.width),
            (u += 2 * s.outline.width),
            (d += 3 * s.outline.width)),
            n.fillText(
              l,
              (null == (t = s.outline) ? void 0 : t.width) ?? 0,
              (null == (r = s.outline) ? void 0 : r.width) ?? 0
            );
          let c = n.getImageData(0, 0, u, d);
          if (
            s.cursor.x + u > 2048 &&
            ((s.cursor.x = 0), (s.cursor.y += d), s.cursor.y > 2048)
          )
            throw new Error("Font atlas exceeds character limit");
          i.tex.update(c, s.cursor.x, s.cursor.y),
            (i.map[l] = new H(s.cursor.x, s.cursor.y, u, d)),
            (s.cursor.x += u);
        }
    }
    let l = e.size || i.size,
      u = L(e.scale ?? 1).scale(l / i.size),
      d = e.lineSpacing ?? 0,
      f = e.letterSpacing ?? 0,
      p = 0,
      g = 0,
      m = 0,
      w = [],
      A = [],
      v = 0,
      y = null,
      V = null;
    for (; v < o.length; ) {
      let t = o[v];
      if ("\n" === t)
        (m += l + d),
          w.push({ width: p - f, chars: A }),
          (y = null),
          (V = null),
          (p = 0),
          (A = []);
      else {
        let r = i.map[t];
        if (r) {
          let n = r.w * u.x;
          e.width &&
            p + n > e.width &&
            ((m += l + d),
            null != y &&
              ((v -= A.length - y),
              (t = o[v]),
              (r = i.map[t]),
              (n = r.w * u.x),
              (A = A.slice(0, y - 1)),
              (p = V)),
            (y = null),
            (V = null),
            w.push({ width: p - f, chars: A }),
            (p = 0),
            (A = [])),
            A.push({
              tex: i.tex,
              width: r.w,
              height: r.h,
              quad: new H(
                r.x / i.tex.width,
                r.y / i.tex.height,
                r.w / i.tex.width,
                r.h / i.tex.height
              ),
              ch: t,
              pos: new N(p, m),
              opacity: e.opacity ?? 1,
              color: e.color ?? O.WHITE,
              scale: L(u),
              angle: 0,
            }),
            " " === t && ((y = A.length), (V = p)),
            (p += n),
            (g = Math.max(g, p)),
            (p += f);
        }
      }
      v++;
    }
    w.push({ width: p - f, chars: A }), (m += l), e.width && (g = e.width);
    let x = [];
    for (let a of w) {
      let t = (g - a.width) * It(e.align ?? "left");
      for (let r of a.chars) {
        let s = i.map[r.ch],
          o = x.length;
        if (
          ((r.pos = r.pos.add(t, 0).add(s.w * u.x * 0.5, s.h * u.y * 0.5)),
          e.transform)
        ) {
          let t =
            "function" == typeof e.transform
              ? e.transform(o, r.ch)
              : e.transform;
          t && sr(r, t);
        }
        if (n[o]) {
          let t = n[o];
          for (let i of t) {
            let t = e.styles[i],
              n = "function" == typeof t ? t(o, r.ch) : t;
            n && sr(r, n);
          }
        }
        x.push(r);
      }
    }
    return { width: g, height: m, chars: x, opt: e };
  }
  function ur(e) {
    dr(lr(e));
  }
  function dr(e) {
    qt(),
      Lt(e.opt.pos),
      Gt(e.opt.angle),
      Lt(
        Ft(e.opt.anchor ?? "topleft")
          .add(1, 1)
          .scale(e.width, e.height)
          .scale(-0.5)
      ),
      e.chars.forEach((t) => {
        Yt({
          tex: t.tex,
          width: t.width,
          height: t.height,
          pos: t.pos,
          scale: t.scale,
          angle: t.angle,
          color: t.color,
          opacity: t.opacity,
          quad: t.quad,
          anchor: "center",
          uniform: e.opt.uniform,
          shader: e.opt.shader,
          fixed: e.opt.fixed,
        });
      }),
      Ht();
  }
  function cr() {
    return f.width;
  }
  function fr() {
    return f.height;
  }
  function pr(e) {
    return new N(
      ((e.x - f.viewport.x) * cr()) / f.viewport.width,
      ((e.y - f.viewport.y) * fr()) / f.viewport.height
    );
  }
  function gr(e) {
    return new N(
      (e.x * f.viewport.width) / f.width,
      (e.y * f.viewport.height) / f.height
    );
  }
  function mr() {
    return pr(l.mousePos());
  }
  P(lr, "formatText"),
    P(ur, "drawText"),
    P(dr, "drawFormattedText"),
    P(cr, "width"),
    P(fr, "height"),
    P(pr, "windowToContent"),
    P(gr, "contentToView"),
    P(mr, "mousePos");
  let wr = !1,
    Ar = {
      inspect: !1,
      timeScale: 1,
      showLog: !0,
      fps: () => l.fps(),
      numFrames: () => l.numFrames(),
      stepFrame: Zi,
      drawCalls: () => f.lastDrawCalls,
      clearLog: () => (V.logs = []),
      log: (t) => {
        let r = e.logMax ?? 8;
        V.logs.unshift({ msg: t, time: l.time() }),
          V.logs.length > r && (V.logs = V.logs.slice(0, r));
      },
      error: (e) => Ar.log(new Error(e.toString ? e.toString() : e)),
      curRecording: null,
      numObjects: () => Yi("*", { recursive: !0 }).length,
      get paused() {
        return wr;
      },
      set paused(e) {
        (wr = e), e ? A.ctx.suspend() : A.ctx.resume();
      },
    };
  function vr() {
    return l.dt() * Ar.timeScale;
  }
  function yr(...e) {
    return (
      e.length > 0 && (V.cam.pos = L(...e)),
      V.cam.pos ? V.cam.pos.clone() : Fi()
    );
  }
  function Vr(...e) {
    return e.length > 0 && (V.cam.scale = L(...e)), V.cam.scale.clone();
  }
  function xr(e) {
    return void 0 !== e && (V.cam.angle = e), V.cam.angle;
  }
  function Er(e = 12) {
    V.cam.shake += e;
  }
  function br(e) {
    return V.cam.transform.multVec2(e);
  }
  function Sr(e) {
    return V.cam.transform.invert().multVec2(e);
  }
  function Rr(e) {
    let t = new K();
    return (
      e.pos && t.translate(e.pos),
      e.scale && t.scale(e.scale),
      e.angle && t.rotate(e.angle),
      e.parent ? t.mult(e.parent.transform) : t
    );
  }
  function Mr(e = []) {
    let t = new Map(),
      r = {},
      i = new ve(),
      n = [],
      s = null,
      o = !1,
      a = {
        id: Be(),
        hidden: !1,
        transform: new K(),
        children: [],
        parent: null,
        set paused(e) {
          if (e !== o) {
            o = e;
            for (let t of n) t.paused = e;
          }
        },
        get paused() {
          return o;
        },
        add(e = []) {
          let t = Array.isArray(e) ? Mr(e) : e;
          if (t.parent)
            throw new Error("Cannot add a game obj that already has a parent.");
          return (
            (t.parent = this),
            (t.transform = Rr(t)),
            this.children.push(t),
            t.trigger("add", t),
            V.events.trigger("add", t),
            t
          );
        },
        readd(e) {
          let t = this.children.indexOf(e);
          return (
            -1 !== t && (this.children.splice(t, 1), this.children.push(e)), e
          );
        },
        remove(e) {
          let t = this.children.indexOf(e);
          if (-1 !== t) {
            (e.parent = null), this.children.splice(t, 1);
            let r = P((e) => {
              e.trigger("destroy"),
                V.events.trigger("destroy", e),
                e.children.forEach((e) => r(e));
            }, "trigger");
            r(e);
          }
        },
        removeAll(e) {
          if (e) this.get(e).forEach((e) => this.remove(e));
          else for (let t of [...this.children]) this.remove(t);
        },
        update() {
          this.paused ||
            (this.children
              .sort((e, t) => (e.z ?? 0) - (t.z ?? 0))
              .forEach((e) => e.update()),
            this.trigger("update"));
        },
        draw() {
          if (this.hidden) return;
          this.canvas && this.canvas.bind();
          let e = f.fixed;
          this.fixed && (f.fixed = !0),
            qt(),
            Lt(this.pos),
            Ot(this.scale),
            Gt(this.angle);
          let t = this.children.sort((e, t) => (e.z ?? 0) - (t.z ?? 0));
          if (this.mask) {
            let e = { intersect: tr, subtract: rr }[this.mask];
            if (!e) throw new Error(`Invalid mask func: "${this.mask}"`);
            e(
              () => {
                t.forEach((e) => e.draw());
              },
              () => {
                this.trigger("draw");
              }
            );
          } else this.trigger("draw"), t.forEach((e) => e.draw());
          Ht(), (f.fixed = e), this.canvas && this.canvas.unbind();
        },
        drawInspect() {
          this.hidden ||
            (qt(),
            Lt(this.pos),
            Ot(this.scale),
            Gt(this.angle),
            this.children
              .sort((e, t) => (e.z ?? 0) - (t.z ?? 0))
              .forEach((e) => e.drawInspect()),
            this.trigger("drawInspect"),
            Ht());
        },
        use(e) {
          if (!e) return;
          if ("string" == typeof e) return this.use({ id: e });
          let i = [];
          e.id &&
            (this.unuse(e.id), (r[e.id] = []), (i = r[e.id]), t.set(e.id, e));
          for (let t in e) {
            if (Bt.has(t)) continue;
            let r = Object.getOwnPropertyDescriptor(e, t);
            if (
              ("function" == typeof r.value && (e[t] = e[t].bind(this)),
              r.set && Object.defineProperty(e, t, { set: r.set.bind(this) }),
              r.get && Object.defineProperty(e, t, { get: r.get.bind(this) }),
              kt.has(t))
            ) {
              let r =
                "add" === t
                  ? () => {
                      (s = P((e) => i.push(e), "onCurCompCleanup")),
                        e[t](),
                        (s = null);
                    }
                  : e[t];
              i.push(this.on(t, r).cancel);
            } else {
              if (void 0 !== this[t])
                throw new Error(`Duplicate component property: "${t}"`);
              Object.defineProperty(this, t, {
                get: () => e[t],
                set: (r) => (e[t] = r),
                configurable: !0,
                enumerable: !0,
              }),
                i.push(() => delete this[t]);
            }
          }
          let n = P(() => {
            if (e.require)
              for (let t of e.require)
                if (!this.c(t))
                  throw new Error(
                    `Component "${e.id}" requires component "${t}"`
                  );
          }, "checkDeps");
          e.destroy && i.push(e.destroy.bind(this)),
            this.exists()
              ? (n(),
                e.add &&
                  ((s = P((e) => i.push(e), "onCurCompCleanup")),
                  e.add.call(this),
                  (s = null)))
              : e.require && i.push(this.on("add", n).cancel);
        },
        unuse(e) {
          r[e] && (r[e].forEach((e) => e()), delete r[e]),
            t.has(e) && t.delete(e);
        },
        c: (e) => t.get(e),
        get(e, t = {}) {
          let r = t.recursive
            ? this.children.flatMap(
                P(function e(t) {
                  return [t, ...t.children.flatMap(e)];
                }, "recurse")
              )
            : this.children;
          if (((r = r.filter((t) => !e || t.is(e))), t.liveUpdate)) {
            let i = P(
                (e) => (t.recursive ? this.isAncestorOf(e) : e.parent === this),
                "isChild"
              ),
              n = [];
            n.push(
              kr((t) => {
                i(t) && t.is(e) && r.push(t);
              })
            ),
              n.push(
                Fr((t) => {
                  if (i(t) && t.is(e)) {
                    let e = r.findIndex((e) => e.id === t.id);
                    -1 !== e && r.splice(e, 1);
                  }
                })
              ),
              this.onDestroy(() => {
                for (let e of n) e.cancel();
              });
          }
          return r;
        },
        isAncestorOf(e) {
          return (
            !!e.parent && (e.parent === this || this.isAncestorOf(e.parent))
          );
        },
        exists() {
          return V.root.isAncestorOf(this);
        },
        is(e) {
          if ("*" === e) return !0;
          if (Array.isArray(e)) {
            for (let t of e) if (!this.c(t)) return !1;
            return !0;
          }
          return null != this.c(e);
        },
        on(e, t) {
          let r = i.on(e, t.bind(this));
          return s && s(() => r.cancel()), r;
        },
        trigger(e, ...t) {
          i.trigger(e, ...t), V.objEvents.trigger(e, this, ...t);
        },
        destroy() {
          this.parent && this.parent.remove(this);
        },
        inspect() {
          let e = {};
          for (let [r, i] of t) e[r] = i.inspect ? i.inspect() : null;
          return e;
        },
        onAdd(e) {
          return this.on("add", e);
        },
        onUpdate(e) {
          return this.on("update", e);
        },
        onDraw(e) {
          return this.on("draw", e);
        },
        onDestroy(e) {
          return this.on("destroy", e);
        },
        clearEvents() {
          i.clear();
        },
      },
      h = [
        "onKeyPress",
        "onKeyPressRepeat",
        "onKeyDown",
        "onKeyRelease",
        "onMousePress",
        "onMouseDown",
        "onMouseRelease",
        "onMouseMove",
        "onCharInput",
        "onMouseMove",
        "onTouchStart",
        "onTouchMove",
        "onTouchEnd",
        "onScroll",
        "onGamepadButtonPress",
        "onGamepadButtonDown",
        "onGamepadButtonRelease",
        "onGamepadStick",
      ];
    for (let u of h)
      a[u] = (...e) => {
        let t = l[u](...e);
        return n.push(t), a.onDestroy(() => t.cancel()), t;
      };
    for (let l of e) a.use(l);
    return a;
  }
  function Tr(e, t, r) {
    return (
      V.objEvents[e] || (V.objEvents[e] = new me()),
      V.objEvents.on(e, (e, ...i) => {
        e.is(t) && r(e, ...i);
      })
    );
  }
  P(vr, "dt"),
    P(yr, "camPos"),
    P(Vr, "camScale"),
    P(xr, "camRot"),
    P(Er, "shake"),
    P(br, "toScreen"),
    P(Sr, "toWorld"),
    P(Rr, "calcTransform"),
    P(Mr, "make"),
    P(Tr, "on");
  let Pr = Pe(
      (e) => {
        let t = Gi([{ update: e }]);
        return {
          get paused() {
            return t.paused;
          },
          set paused(e) {
            t.paused = e;
          },
          cancel: () => t.destroy(),
        };
      },
      (e, t) => Tr("update", e, t)
    ),
    Br = Pe(
      (e) => {
        let t = Gi([{ draw: e }]);
        return {
          get paused() {
            return t.hidden;
          },
          set paused(e) {
            t.hidden = e;
          },
          cancel: () => t.destroy(),
        };
      },
      (e, t) => Tr("draw", e, t)
    ),
    kr = Pe(
      (e) => V.events.on("add", e),
      (e, t) => Tr("add", e, t)
    ),
    Fr = Pe(
      (e) => V.events.on("destroy", e),
      (e, t) => Tr("destroy", e, t)
    );
  function Ir(e, t, r) {
    return Tr("collide", e, (e, i, n) => i.is(t) && r(e, i, n));
  }
  function Cr(e, t, r) {
    return Tr("collideUpdate", e, (e, i, n) => i.is(t) && r(e, i, n));
  }
  function Dr(e, t, r) {
    return Tr("collideEnd", e, (e, i, n) => i.is(t) && r(e, i, n));
  }
  function Ur(e, t) {
    Yi(e, { recursive: !0 }).forEach(t), kr(e, t);
  }
  P(Ir, "onCollide"),
    P(Cr, "onCollideUpdate"),
    P(Dr, "onCollideEnd"),
    P(Ur, "forAllCurrentAndFuture");
  let Nr = Pe(
    (e) => l.onMousePress(e),
    (e, t) => {
      let r = [];
      return (
        Ur(e, (e) => {
          if (!e.area)
            throw new Error(
              "onClick() requires the object to have area() component"
            );
          r.push(e.onClick(() => t(e)));
        }),
        we.join(r)
      );
    }
  );
  function Lr(e, t) {
    let r = [];
    return (
      Ur(e, (e) => {
        if (!e.area)
          throw new Error(
            "onHover() requires the object to have area() component"
          );
        r.push(e.onHover(() => t(e)));
      }),
      we.join(r)
    );
  }
  function Or(e, t) {
    let r = [];
    return (
      Ur(e, (e) => {
        if (!e.area)
          throw new Error(
            "onHoverUpdate() requires the object to have area() component"
          );
        r.push(e.onHoverUpdate(() => t(e)));
      }),
      we.join(r)
    );
  }
  function Gr(e, t) {
    let r = [];
    return (
      Ur(e, (e) => {
        if (!e.area)
          throw new Error(
            "onHoverEnd() requires the object to have area() component"
          );
        r.push(e.onHoverEnd(() => t(e)));
      }),
      we.join(r)
    );
  }
  function qr(e) {
    V.gravity = e;
  }
  function Hr() {
    return V.gravity;
  }
  function Yr(...e) {
    1 === e.length || 2 === e.length
      ? ((f.bgColor = G(e[0])), e[1] && (f.bgAlpha = e[1]))
      : (3 === e.length || 4 === e.length) &&
        ((f.bgColor = G(e[0], e[1], e[2])), e[3] && (f.bgAlpha = e[3])),
      d.clearColor(
        f.bgColor.r / 255,
        f.bgColor.g / 255,
        f.bgColor.b / 255,
        f.bgAlpha
      );
  }
  function Kr() {
    return f.bgColor.clone();
  }
  function jr(...e) {
    return {
      id: "pos",
      pos: L(...e),
      moveBy(...e) {
        this.pos = this.pos.add(L(...e));
      },
      move(...e) {
        this.moveBy(L(...e).scale(vr()));
      },
      moveTo(...e) {
        if ("number" == typeof e[0] && "number" == typeof e[1])
          return this.moveTo(L(e[0], e[1]), e[2]);
        let t = e[0],
          r = e[1];
        if (void 0 === r) return void (this.pos = L(t));
        let i = t.sub(this.pos);
        i.len() <= r * vr() ? (this.pos = L(t)) : this.move(i.unit().scale(r));
      },
      worldPos() {
        return this.parent
          ? this.parent.transform.multVec2(this.pos)
          : this.pos;
      },
      screenPos() {
        let e = this.worldPos();
        return ri(this) ? e : br(e);
      },
      inspect() {
        return `(${Math.round(this.pos.x)}, ${Math.round(this.pos.y)})`;
      },
      drawInspect() {
        Zt({ color: G(255, 0, 0), radius: 4 / ir() });
      },
    };
  }
  function Qr(...e) {
    return 0 === e.length
      ? Qr(1)
      : {
          id: "scale",
          scale: L(...e),
          scaleTo(...e) {
            this.scale = L(...e);
          },
          scaleBy(...e) {
            this.scale.scale(L(...e));
          },
          inspect() {
            return `(${Xr(this.scale.x, 2)}, ${Xr(this.scale.y, 2)})`;
          },
        };
  }
  function zr(e) {
    return {
      id: "rotate",
      angle: e ?? 0,
      rotateBy(e) {
        this.angle += e;
      },
      rotateTo(e) {
        this.angle = e;
      },
      inspect() {
        return `${Math.round(this.angle)}`;
      },
    };
  }
  function Jr(...e) {
    return {
      id: "color",
      color: G(...e),
      inspect() {
        return this.color.toString();
      },
    };
  }
  function Xr(e, t) {
    return Number(e.toFixed(t));
  }
  function Wr(e) {
    return {
      id: "opacity",
      opacity: e ?? 1,
      inspect() {
        return `${Xr(this.opacity, 1)}`;
      },
      fadeOut(e = 1, t = mt.linear) {
        return Qi(this.opacity, 0, e, (e) => (this.opacity = e), t);
      },
    };
  }
  function Zr(e) {
    if (!e) throw new Error("Please define an anchor");
    return {
      id: "anchor",
      anchor: e,
      inspect() {
        return "string" == typeof this.anchor
          ? this.anchor
          : this.anchor.toString();
      },
    };
  }
  function _r(e) {
    return {
      id: "z",
      z: e,
      inspect() {
        return `${this.z}`;
      },
    };
  }
  function $r(e, t) {
    return {
      id: "follow",
      require: ["pos"],
      follow: { obj: e, offset: t ?? L(0) },
      add() {
        e.exists() && (this.pos = this.follow.obj.pos.add(this.follow.offset));
      },
      update() {
        e.exists() && (this.pos = this.follow.obj.pos.add(this.follow.offset));
      },
    };
  }
  function ei(e, t) {
    let r = "number" == typeof e ? N.fromAngle(e) : e.unit();
    return {
      id: "move",
      require: ["pos"],
      update() {
        this.move(r.scale(t));
      },
    };
  }
  P(Lr, "onHover"),
    P(Or, "onHoverUpdate"),
    P(Gr, "onHoverEnd"),
    P(qr, "setGravity"),
    P(Hr, "getGravity"),
    P(Yr, "setBackground"),
    P(Kr, "getBackground"),
    P(jr, "pos"),
    P(Qr, "scale"),
    P(zr, "rotate"),
    P(Jr, "color"),
    P(Xr, "toFixed"),
    P(Wr, "opacity"),
    P(Zr, "anchor"),
    P(_r, "z"),
    P($r, "follow"),
    P(ei, "move");
  function ti(e = {}) {
    let t = e.distance ?? 200,
      r = !1;
    return {
      id: "offscreen",
      require: ["pos"],
      isOffScreen() {
        let e = this.screenPos(),
          r = new de(L(0), cr(), fr());
        return !ne(r, e) && r.sdistToPoint(e) > t * t;
      },
      onExitScreen(e) {
        return this.on("exitView", e);
      },
      onEnterScreen(e) {
        return this.on("enterView", e);
      },
      update() {
        this.isOffScreen()
          ? (r || (this.trigger("exitView"), (r = !0)),
            e.hide && (this.hidden = !0),
            e.pause && (this.paused = !0),
            e.destroy && this.destroy())
          : (r && (this.trigger("enterView"), (r = !1)),
            e.hide && (this.hidden = !1),
            e.pause && (this.paused = !1));
      },
    };
  }
  function ri(e) {
    return !!e.fixed || (!!e.parent && ri(e.parent));
  }
  function ii(e = {}) {
    let t = {},
      r = new Set();
    return {
      id: "area",
      collisionIgnore: e.collisionIgnore ?? [],
      add() {
        this.area.cursor && this.onHover(() => l.setCursor(this.area.cursor)),
          this.onCollideUpdate((e, i) => {
            t[e.id] || this.trigger("collide", e, i),
              (t[e.id] = i),
              r.add(e.id);
          });
      },
      update() {
        for (let e in t)
          r.has(Number(e)) ||
            (this.trigger("collideEnd", t[e].target), delete t[e]);
        r.clear();
      },
      drawInspect() {
        let e = this.localArea();
        qt(), Ot(this.area.scale), Lt(this.area.offset);
        let t = {
          outline: { width: 4 / ir(), color: G(0, 0, 255) },
          anchor: this.anchor,
          fill: !1,
          fixed: ri(this),
        };
        e instanceof de
          ? zt({ ...t, pos: e.pos, width: e.width, height: e.height })
          : e instanceof pe
          ? $t({ ...t, pts: e.pts })
          : e instanceof ce && Zt({ ...t, pos: e.center, radius: e.radius }),
          Ht();
      },
      area: {
        shape: e.shape ?? null,
        scale: e.scale ? L(e.scale) : L(1),
        offset: e.offset ?? L(0),
        cursor: e.cursor ?? null,
      },
      isClicked() {
        return l.isMousePressed() && this.isHovering();
      },
      isHovering() {
        let e = ri(this) ? mr() : Sr(mr());
        return this.hasPoint(e);
      },
      checkCollision: (e) => t[e.id] ?? null,
      getCollisions: () => Object.values(t),
      isColliding: (e) => !!t[e.id],
      isOverlapping(e) {
        let r = t[e.id];
        return r && r.hasOverlap();
      },
      onClick(e) {
        let t = l.onMousePress("left", () => {
          this.isHovering() && e();
        });
        return this.onDestroy(() => t.cancel()), t;
      },
      onHover(e) {
        let t = !1;
        return this.onUpdate(() => {
          t ? (t = this.isHovering()) : this.isHovering() && ((t = !0), e());
        });
      },
      onHoverUpdate(e) {
        return this.onUpdate(() => {
          this.isHovering() && e();
        });
      },
      onHoverEnd(e) {
        let t = !1;
        return this.onUpdate(() => {
          t ? this.isHovering() || ((t = !1), e()) : (t = this.isHovering());
        });
      },
      onCollide(e, t) {
        return "function" == typeof e && void 0 === t
          ? this.on("collide", e)
          : "string" == typeof e
          ? this.onCollide((r, i) => {
              r.is(e) && t(r, i);
            })
          : void 0;
      },
      onCollideUpdate(e, t) {
        return "function" == typeof e && void 0 === t
          ? this.on("collideUpdate", e)
          : "string" == typeof e
          ? this.on("collideUpdate", (r, i) => r.is(e) && t(r, i))
          : void 0;
      },
      onCollideEnd(e, t) {
        return "function" == typeof e && void 0 === t
          ? this.on("collideEnd", e)
          : "string" == typeof e
          ? this.on("collideEnd", (r) => r.is(e) && t(r))
          : void 0;
      },
      hasPoint(e) {
        return le(this.worldArea(), e);
      },
      resolveCollision(e) {
        let t = this.checkCollision(e);
        t &&
          !t.resolved &&
          ((this.pos = this.pos.add(t.displacement)), (t.resolved = !0));
      },
      localArea() {
        return this.area.shape ? this.area.shape : this.renderArea();
      },
      worldArea() {
        let e = this.localArea();
        if (!(e instanceof pe || e instanceof de))
          throw new Error("Only support polygon and rect shapes for now");
        let t = this.transform
          .clone()
          .scale(L(this.area.scale ?? 1))
          .translate(this.area.offset);
        if (e instanceof de) {
          let r = Ft(this.anchor || yt)
            .add(1, 1)
            .scale(-0.5)
            .scale(e.width, e.height);
          t.translate(r);
        }
        return e.transform(t);
      },
      screenArea() {
        let e = this.worldArea();
        return ri(this) ? e : e.transform(V.cam.transform);
      },
    };
  }
  function ni(e) {
    return {
      color: e.color,
      opacity: e.opacity,
      anchor: e.anchor,
      outline: e.outline,
      shader: e.shader,
      uniform: e.uniform,
    };
  }
  function si(e, t = {}) {
    let r = null,
      i = null,
      n = null,
      s = new Ae();
    if (!e)
      throw new Error("Please pass the resource name or data to sprite()");
    let o = P((e, t, r, i) => {
      let n = L(1, 1);
      return (
        r && i
          ? ((n.x = r / (e.width * t.w)), (n.y = i / (e.height * t.h)))
          : r
          ? ((n.x = r / (e.width * t.w)), (n.y = n.x))
          : i && ((n.y = i / (e.height * t.h)), (n.x = n.y)),
        n
      );
    }, "calcTexScale");
    return {
      id: "sprite",
      width: 0,
      height: 0,
      frame: t.frame || 0,
      quad: t.quad || new H(0, 0, 1, 1),
      animSpeed: t.animSpeed ?? 1,
      flipX: t.flipX ?? !1,
      flipY: t.flipY ?? !1,
      draw() {
        if (!r) return;
        let e = r.frames[this.frame ?? 0];
        if (!e) throw new Error(`Frame not found: ${this.frame ?? 0}`);
        if (r.slice9) {
          let { left: i, right: n, top: s, bottom: o } = r.slice9,
            a = r.tex.width * e.w,
            h = r.tex.height * e.h,
            l = this.width - i - n,
            u = this.height - s - o,
            d = i / a,
            c = n / a,
            f = 1 - d - c,
            p = s / h,
            g = o / h,
            m = 1 - p - g,
            w = [
              Y(0, 0, d, p),
              Y(d, 0, f, p),
              Y(d + f, 0, c, p),
              Y(0, p, d, m),
              Y(d, p, f, m),
              Y(d + f, p, c, m),
              Y(0, p + m, d, g),
              Y(d, p + m, f, g),
              Y(d + f, p + m, c, g),
              Y(0, 0, i, s),
              Y(i, 0, l, s),
              Y(i + l, 0, n, s),
              Y(0, s, i, u),
              Y(i, s, l, u),
              Y(i + l, s, n, u),
              Y(0, s + u, i, o),
              Y(i, s + u, l, o),
              Y(i + l, s + u, n, o),
            ];
          for (let A = 0; A < 9; A++) {
            let i = w[A],
              n = w[A + 9];
            Kt(
              Object.assign(ni(this), {
                pos: n.pos(),
                tex: r.tex,
                quad: e.scale(i),
                flipX: this.flipX,
                flipY: this.flipY,
                tiled: t.tiled,
                width: n.w,
                height: n.h,
              })
            );
          }
        } else
          Kt(
            Object.assign(ni(this), {
              tex: r.tex,
              quad: e.scale(this.quad ?? new H(0, 0, 1, 1)),
              flipX: this.flipX,
              flipY: this.flipY,
              tiled: t.tiled,
              width: this.width,
              height: this.height,
            })
          );
      },
      add() {
        let i = P((e) => {
            let i = e.frames[0].clone();
            t.quad && (i = i.scale(t.quad));
            let n = o(e.tex, i, t.width, t.height);
            (this.width = e.tex.width * i.w * n.x),
              (this.height = e.tex.height * i.h * n.y),
              t.anim && this.play(t.anim),
              (r = e),
              s.trigger(r);
          }, "setSpriteData"),
          n = Ke(e);
        n ? n.onLoad(i) : Si(() => i(Ke(e).data));
      },
      update() {
        if (!i) return;
        let e = r.anims[i.name];
        if ("number" != typeof e) {
          if (0 === e.speed) throw new Error("Sprite anim speed cannot be 0");
          (i.timer += vr() * this.animSpeed),
            i.timer >= 1 / i.speed &&
              ((i.timer = 0),
              (this.frame += n),
              (this.frame < Math.min(e.from, e.to) ||
                this.frame > Math.max(e.from, e.to)) &&
                (i.loop
                  ? i.pingpong
                    ? ((this.frame -= n), (n *= -1), (this.frame += n))
                    : (this.frame = e.from)
                  : ((this.frame = e.to), i.onEnd(), this.stop())));
        } else this.frame = e;
      },
      play(e, t = {}) {
        if (!r) return void s.add(() => this.play(e, t));
        let o = r.anims[e];
        if (void 0 === o) throw new Error(`Anim not found: ${e}`);
        i && this.stop(),
          (i =
            "number" == typeof o
              ? {
                  name: e,
                  timer: 0,
                  loop: !1,
                  pingpong: !1,
                  speed: 0,
                  onEnd: () => {},
                }
              : {
                  name: e,
                  timer: 0,
                  loop: t.loop ?? o.loop ?? !1,
                  pingpong: t.pingpong ?? o.pingpong ?? !1,
                  speed: t.speed ?? o.speed ?? 10,
                  onEnd: t.onEnd ?? (() => {}),
                }),
          (n = "number" == typeof o ? null : o.from < o.to ? 1 : -1),
          (this.frame = "number" == typeof o ? o : o.from),
          this.trigger("animStart", e);
      },
      stop() {
        if (!i) return;
        let e = i.name;
        (i = null), this.trigger("animEnd", e);
      },
      numFrames: () => (null == r ? void 0 : r.frames.length) ?? 0,
      curAnim: () => (null == i ? void 0 : i.name),
      onAnimEnd(e) {
        return this.on("animEnd", e);
      },
      onAnimStart(e) {
        return this.on("animStart", e);
      },
      renderArea() {
        return new de(L(0), this.width, this.height);
      },
      inspect() {
        if ("string" == typeof e) return `"${e}"`;
      },
    };
  }
  function oi(e, t = {}) {
    function r(e) {
      var r, i;
      let n = lr(
        Object.assign(ni(e), {
          text: e.text + "",
          size: e.textSize,
          font: e.font,
          width: t.width && e.width,
          align: e.align,
          letterSpacing: e.letterSpacing,
          lineSpacing: e.lineSpacing,
          transform: e.textTransform,
          styles: e.textStyles,
        })
      );
      return (
        t.width ||
          (e.width = n.width / ((null == (r = e.scale) ? void 0 : r.x) || 1)),
        (e.height = n.height / ((null == (i = e.scale) ? void 0 : i.y) || 1)),
        n
      );
    }
    P(r, "update");
    let i = {
      id: "text",
      set text(t) {
        (e = t), r(this);
      },
      get text() {
        return e;
      },
      textSize: t.size ?? 36,
      font: t.font,
      width: t.width ?? 0,
      height: 0,
      align: t.align,
      lineSpacing: t.lineSpacing,
      letterSpacing: t.letterSpacing,
      textTransform: t.transform,
      textStyles: t.styles,
      add() {
        Si(() => r(this));
      },
      draw() {
        dr(r(this));
      },
      renderArea() {
        return new de(L(0), this.width, this.height);
      },
    };
    return r(i), i;
  }
  function ai(e, t = {}) {
    if (e.length < 3)
      throw new Error(
        `Polygon's need more than two points, ${e.length} points provided`
      );
    return {
      id: "polygon",
      pts: e,
      colors: t.colors,
      radius: t.radius,
      draw() {
        $t(
          Object.assign(ni(this), {
            pts: this.pts,
            colors: this.colors,
            radius: this.radius,
            fill: t.fill,
          })
        );
      },
      renderArea() {
        return new pe(this.pts);
      },
      inspect() {
        return this.pts.map((e) => `[${e.x},${e.y}]`).join(",");
      },
    };
  }
  function hi(e, t, r = {}) {
    return {
      id: "rect",
      width: e,
      height: t,
      radius: r.radius || 0,
      draw() {
        zt(
          Object.assign(ni(this), {
            width: this.width,
            height: this.height,
            radius: this.radius,
            fill: r.fill,
          })
        );
      },
      renderArea() {
        return new de(L(0), this.width, this.height);
      },
      inspect() {
        return `${Math.ceil(this.width)}, ${Math.ceil(this.height)}`;
      },
    };
  }
  function li(e, t) {
    return {
      id: "rect",
      width: e,
      height: t,
      draw() {
        Yt(Object.assign(ni(this), { width: this.width, height: this.height }));
      },
      renderArea() {
        return new de(L(0), this.width, this.height);
      },
      inspect() {
        return `${Math.ceil(this.width)}, ${Math.ceil(this.height)}`;
      },
    };
  }
  function ui(e, t = {}) {
    return {
      id: "circle",
      radius: e,
      draw() {
        Zt(Object.assign(ni(this), { radius: this.radius, fill: t.fill }));
      },
      renderArea() {
        return new de(
          new N(this.anchor ? 0 : -this.radius),
          2 * this.radius,
          2 * this.radius
        );
      },
      inspect() {
        return `${Math.ceil(this.radius)}`;
      },
    };
  }
  function di(e = 1, t = G(0, 0, 0)) {
    return { id: "outline", outline: { width: e, color: t } };
  }
  function ci() {
    return {
      id: "timer",
      wait(e, t) {
        let r = [];
        t && r.push(t);
        let i = 0,
          n = this.onUpdate(() => {
            (i += vr()), i >= e && (r.forEach((e) => e()), n.cancel());
          });
        return {
          get paused() {
            return n.paused;
          },
          set paused(e) {
            n.paused = e;
          },
          cancel: n.cancel,
          onEnd(e) {
            r.push(e);
          },
          then(e) {
            return this.onEnd(e), this;
          },
        };
      },
      loop(e, t) {
        let r = null,
          i = P(() => {
            (r = this.wait(e, i)), t();
          }, "newAction");
        return (
          (r = this.wait(0, i)),
          {
            get paused() {
              return r.paused;
            },
            set paused(e) {
              r.paused = e;
            },
            cancel: () => r.cancel(),
          }
        );
      },
      tween(e, t, r, i, n = mt.linear) {
        let s = 0,
          o = [],
          a = this.onUpdate(() => {
            s += vr();
            let h = Math.min(s / r, 1);
            i(C(e, t, n(h))),
              1 === h && (a.cancel(), i(t), o.forEach((e) => e()));
          });
        return {
          get paused() {
            return a.paused;
          },
          set paused(e) {
            a.paused = e;
          },
          onEnd(e) {
            o.push(e);
          },
          then(e) {
            return this.onEnd(e), this;
          },
          cancel() {
            a.cancel();
          },
          finish() {
            a.cancel(), i(t), o.forEach((e) => e());
          },
        };
      },
    };
  }
  P(ti, "offscreen"),
    P(ri, "isFixed"),
    P(ii, "area"),
    P(ni, "getRenderProps"),
    P(si, "sprite"),
    P(oi, "text"),
    P(ai, "polygon"),
    P(hi, "rect"),
    P(li, "uvquad"),
    P(ui, "circle"),
    P(di, "outline"),
    P(ci, "timer");
  let fi;
  function pi(e = {}) {
    let t = null,
      r = null,
      i = !1;
    return {
      id: "body",
      require: ["pos", "area"],
      vel: new N(0),
      jumpForce: e.jumpForce ?? 640,
      gravityScale: e.gravityScale ?? 1,
      isStatic: e.isStatic ?? !1,
      mass: e.mass ?? 1,
      add() {
        if (0 === this.mass) throw new Error("Can't set body mass to 0");
        this.onCollideUpdate((e, t) => {
          if (
            e.is("body") &&
            !t.resolved &&
            (this.trigger("beforePhysicsResolve", t),
            e.trigger("beforePhysicsResolve", t.reverse()),
            !(t.resolved || (this.isStatic && e.isStatic)))
          ) {
            if (this.isStatic || e.isStatic) {
              let r = !this.isStatic && e.isStatic ? t : t.reverse();
              (r.source.pos = r.source.pos.add(r.displacement)),
                (r.source.transform = Rr(r.source));
            } else {
              let r = this.mass + e.mass;
              (this.pos = this.pos.add(t.displacement.scale(e.mass / r))),
                (e.pos = e.pos.add(t.displacement.scale(-this.mass / r))),
                (this.transform = Rr(this)),
                (e.transform = Rr(e));
            }
            (t.resolved = !0),
              this.trigger("physicsResolve", t),
              e.trigger("physicsResolve", t.reverse());
          }
        }),
          this.onPhysicsResolve((e) => {
            V.gravity &&
              (e.isBottom() && this.isFalling()
                ? ((this.vel.y = 0),
                  (t = e.target),
                  (r = e.target.pos),
                  i ? (i = !1) : this.trigger("ground", t))
                : e.isTop() &&
                  this.isJumping() &&
                  ((this.vel.y = 0), this.trigger("headbutt", e.target)));
          });
      },
      update() {
        if (!V.gravity || this.isStatic) return;
        if (
          (i && ((t = null), (r = null), this.trigger("fallOff"), (i = !1)), t)
        ) {
          if (this.isColliding(t) && t.exists() && t.is("body"))
            return (
              !t.pos.eq(r) &&
                !1 !== e.stickToPlatform &&
                this.moveBy(t.pos.sub(r)),
              void (r = t.pos)
            );
          i = !0;
        }
        let n = this.vel.y;
        (this.vel.y += V.gravity * this.gravityScale * vr()),
          (this.vel.y = Math.min(this.vel.y, e.maxVelocity ?? 65536)),
          n < 0 && this.vel.y >= 0 && this.trigger("fall"),
          this.move(this.vel);
      },
      onPhysicsResolve(e) {
        return this.on("physicsResolve", e);
      },
      onBeforePhysicsResolve(e) {
        return this.on("beforePhysicsResolve", e);
      },
      curPlatform: () => t,
      isGrounded: () => null !== t,
      isFalling() {
        return this.vel.y > 0;
      },
      isJumping() {
        return this.vel.y < 0;
      },
      jump(e) {
        (t = null), (r = null), (this.vel.y = -e || -this.jumpForce);
      },
      onGround(e) {
        return this.on("ground", e);
      },
      onFall(e) {
        return this.on("fall", e);
      },
      onFallOff(e) {
        return this.on("fallOff", e);
      },
      onHeadbutt(e) {
        return this.on("headbutt", e);
      },
    };
  }
  function gi(e = 2) {
    let t = e;
    return {
      id: "doubleJump",
      require: ["body"],
      numJumps: e,
      add() {
        this.onGround(() => {
          t = this.numJumps;
        });
      },
      doubleJump(e) {
        t <= 0 ||
          (t < this.numJumps && this.trigger("doubleJump"), t--, this.jump(e));
      },
      onDoubleJump(e) {
        return this.on("doubleJump", e);
      },
      inspect: () => `${t}`,
    };
  }
  function mi(e, t) {
    return {
      id: "shader",
      shader: e,
      ...("function" == typeof t
        ? {
            uniform: t(),
            update() {
              this.uniform = t();
            },
          }
        : { uniform: t }),
    };
  }
  function wi() {
    return { id: "fixed", fixed: !0 };
  }
  function Ai(e) {
    return { id: "stay", stay: !0, scenesToStay: e };
  }
  function vi(e, t) {
    if (null == e)
      throw new Error("health() requires the initial amount of hp");
    return {
      id: "health",
      hurt(t = 1) {
        this.setHP(e - t), this.trigger("hurt", t);
      },
      heal(t = 1) {
        let r = e;
        this.setHP(e + t), this.trigger("heal", e - r);
      },
      hp: () => e,
      maxHP: () => t ?? null,
      setMaxHP(e) {
        t = e;
      },
      setHP(r) {
        (e = t ? Math.min(t, r) : r) <= 0 && this.trigger("death");
      },
      onHurt(e) {
        return this.on("hurt", e);
      },
      onHeal(e) {
        return this.on("heal", e);
      },
      onDeath(e) {
        return this.on("death", e);
      },
      inspect: () => `${e}`,
    };
  }
  function yi(e, t = {}) {
    if (null == e) throw new Error("lifespan() requires time");
    let r = t.fade ?? 0;
    return {
      id: "lifespan",
      async add() {
        await Ki(e),
          r > 0 &&
            this.opacity &&
            (await Qi(
              this.opacity,
              0,
              r,
              (e) => (this.opacity = e),
              mt.linear
            )),
          this.destroy();
      },
    };
  }
  function Vi(e, t, r) {
    if (!e) throw new Error("state() requires an initial state");
    let i = {};
    function n(e) {
      i[e] ||
        (i[e] = {
          enter: new Ae(),
          end: new Ae(),
          update: new Ae(),
          draw: new Ae(),
        });
    }
    function s(e, t, r) {
      return n(t), i[t][e].add(r);
    }
    function o(e, t, ...r) {
      n(t), i[t][e].trigger(...r);
    }
    P(n, "initStateEvents"), P(s, "on"), P(o, "trigger");
    let a = !1;
    return {
      id: "state",
      state: e,
      enterState(e, ...i) {
        if (((a = !0), t && !t.includes(e)))
          throw new Error(`State not found: ${e}`);
        let n = this.state;
        if (r) {
          if (!(null == r ? void 0 : r[n])) return;
          let t = "string" == typeof r[n] ? [r[n]] : r[n];
          if (!t.includes(e))
            throw new Error(
              `Cannot transition state from "${n}" to "${e}". Available transitions: ${t
                .map((e) => `"${e}"`)
                .join(", ")}`
            );
        }
        o("end", n, ...i),
          (this.state = e),
          o("enter", e, ...i),
          o("enter", `${n} -> ${e}`, ...i);
      },
      onStateTransition: (e, t, r) => s("enter", `${e} -> ${t}`, r),
      onStateEnter: (e, t) => s("enter", e, t),
      onStateUpdate: (e, t) => s("update", e, t),
      onStateDraw: (e, t) => s("draw", e, t),
      onStateEnd: (e, t) => s("end", e, t),
      update() {
        a || (o("enter", e), (a = !0)), o("update", this.state);
      },
      draw() {
        o("draw", this.state);
      },
      inspect() {
        return this.state;
      },
    };
  }
  function xi(e = 1) {
    let t = 0,
      r = !1;
    return {
      require: ["opacity"],
      add() {
        this.opacity = 0;
      },
      update() {
        r ||
          ((t += vr()),
          (this.opacity = D(t, 0, e, 0, 1)),
          t >= e && ((this.opacity = 1), (r = !0)));
      },
    };
  }
  function Ei(e = "intersect") {
    return { id: "mask", mask: e };
  }
  function bi(e) {
    return {
      add() {
        this.canvas = e;
      },
    };
  }
  function Si(e) {
    v.loaded ? e() : V.events.on("load", e);
  }
  function Ri(e, t) {
    V.scenes[e] = t;
  }
  function Mi(e, ...t) {
    if (!V.scenes[e]) throw new Error(`Scene not found: ${e}`);
    V.events.onOnce("frameEnd", () => {
      V.events.trigger("sceneLeave", e),
        l.events.clear(),
        V.events.clear(),
        V.objEvents.clear(),
        [...V.root.children].forEach((t) => {
          (!t.stay || (t.scenesToStay && !t.scenesToStay.includes(e))) &&
            V.root.remove(t);
        }),
        V.root.clearEvents(),
        pn(),
        (V.cam = {
          pos: null,
          scale: L(1),
          angle: 0,
          shake: 0,
          transform: new K(),
        }),
        V.scenes[e](...t);
    });
  }
  function Ti(e) {
    return V.events.on("sceneLeave", e);
  }
  function Pi(e, t) {
    try {
      return JSON.parse(window.localStorage[e]);
    } catch {
      return t ? (Bi(e, t), t) : null;
    }
  }
  function Bi(e, t) {
    window.localStorage[e] = JSON.stringify(t);
  }
  function ki(t, ...r) {
    let i,
      n = t(gn);
    i = "function" == typeof n ? n(...r)(gn) : n;
    for (let s in i) (gn[s] = i[s]), !1 !== e.global && (window[s] = i[s]);
    return gn;
  }
  function Fi() {
    return L(cr() / 2, fr() / 2);
  }
  var Ii;
  function Ci(e = {}) {
    let t = L(0),
      r = e.isObstacle ?? !1,
      i = e.cost ?? 0,
      n = e.edges ?? [],
      s = P(() => {
        let e = { left: 1, top: 2, right: 4, bottom: 8 };
        return n.map((t) => e[t] || 0).reduce((e, t) => e | t, 0);
      }, "getEdgeMask"),
      o = s();
    return {
      id: "tile",
      tilePosOffset: e.offset ?? L(0),
      set tilePos(e) {
        let r = this.getLevel();
        (t = e.clone()),
          (this.pos = L(
            this.tilePos.x * r.tileWidth(),
            this.tilePos.y * r.tileHeight()
          ).add(this.tilePosOffset));
      },
      get tilePos() {
        return t;
      },
      set isObstacle(e) {
        r !== e && ((r = e), this.getLevel().invalidateNavigationMap());
      },
      get isObstacle() {
        return r;
      },
      set cost(e) {
        i !== e && ((i = e), this.getLevel().invalidateNavigationMap());
      },
      get cost() {
        return i;
      },
      set edges(e) {
        (n = e), (o = s()), this.getLevel().invalidateNavigationMap();
      },
      get edges() {
        return n;
      },
      get edgeMask() {
        return o;
      },
      getLevel() {
        return this.parent;
      },
      moveLeft() {
        this.tilePos = this.tilePos.add(L(-1, 0));
      },
      moveRight() {
        this.tilePos = this.tilePos.add(L(1, 0));
      },
      moveUp() {
        this.tilePos = this.tilePos.add(L(0, -1));
      },
      moveDown() {
        this.tilePos = this.tilePos.add(L(0, 1));
      },
    };
  }
  function Di(e, t) {
    if (!t.tileWidth || !t.tileHeight)
      throw new Error("Must provide tileWidth and tileHeight.");
    let r = Gi([jr(t.pos ?? L(0))]),
      i = e.length,
      n = 0,
      s = null,
      o = null,
      a = null,
      h = null,
      l = P((e) => e.x + e.y * n, "tile2Hash"),
      u = P((e) => L(Math.floor(e % n), Math.floor(e / n)), "hash2Tile"),
      d = P(() => {
        s = [];
        for (let e of r.children) c(e);
      }, "createSpatialMap"),
      c = P((e) => {
        let t = l(e.tilePos);
        s[t] ? s[t].push(e) : (s[t] = [e]);
      }, "insertIntoSpatialMap"),
      f = P((e) => {
        let t = l(e.tilePos);
        if (s[t]) {
          let r = s[t].indexOf(e);
          r >= 0 && s[t].splice(r, 1);
        }
      }, "removeFromSpatialMap"),
      p = P(() => {
        let e = !1;
        for (let t of r.children) {
          let i = r.pos2Tile(t.pos);
          (t.tilePos.x != i.x || t.tilePos.y != i.y) &&
            ((e = !0), f(t), (t.tilePos.x = i.x), (t.tilePos.y = i.y), c(t));
        }
        e && r.trigger("spatial_map_changed");
      }, "updateSpatialMap"),
      g = P(() => {
        let e = r.getSpatialMap(),
          t = r.numRows() * r.numColumns();
        o ? (o.length = t) : (o = new Array(t)), o.fill(1, 0, t);
        for (let r = 0; r < e.length; r++) {
          let t = e[r];
          if (t) {
            let e = 0;
            for (let r of t) {
              if (r.isObstacle) {
                e = 1 / 0;
                break;
              }
              e += r.cost;
            }
            o[r] = e || 1;
          }
        }
      }, "createCostMap"),
      m = P(() => {
        let e = r.getSpatialMap(),
          t = r.numRows() * r.numColumns();
        a ? (a.length = t) : (a = new Array(t)), a.fill(15, 0, t);
        for (let r = 0; r < e.length; r++) {
          let t = e[r];
          if (t) {
            let e = t.length,
              i = 15;
            for (let r = 0; r < e; r++) i |= t[r].edgeMask;
            a[r] = i;
          }
        }
      }, "createEdgeMap"),
      w = P(() => {
        let e = r.numRows() * r.numColumns(),
          t = P((e, t) => {
            let r = [];
            for (r.push(e); r.length > 0; ) {
              let e = r.pop();
              y(e).forEach((e) => {
                h[e] < 0 && ((h[e] = t), r.push(e));
              });
            }
          }, "traverse");
        h ? (h.length = e) : (h = new Array(e)), h.fill(-1, 0, e);
        let i = 0;
        for (let r = 0; r < o.length; r++) h[r] >= 0 || t(r, i), i++;
      }, "createConnectivityMap"),
      A = P((e, t) => o[t], "getCost"),
      v = P((e, t) => {
        let r = u(e),
          i = u(t);
        return r.dist(i);
      }, "getHeuristic"),
      y = P((e, t) => {
        let r = [],
          s = Math.floor(e % n),
          h = s > 0 && 1 & a[e] && o[e - 1] !== 1 / 0,
          l = e >= n && 2 & a[e] && o[e - n] !== 1 / 0,
          u = s < n - 1 && 4 & a[e] && o[e + 1] !== 1 / 0,
          d = e < n * i - n - 1 && 8 & a[e] && o[e + n] !== 1 / 0;
        return (
          t
            ? (h &&
                (l && r.push(e - n - 1), r.push(e - 1), d && r.push(e + n - 1)),
              l && r.push(e - n),
              u &&
                (l && r.push(e - n + 1), r.push(e + 1), d && r.push(e + n + 1)),
              d && r.push(e + n))
            : (h && r.push(e - 1),
              l && r.push(e - n),
              u && r.push(e + 1),
              d && r.push(e + n)),
          r
        );
      }, "getNeighbours"),
      V = {
        id: "level",
        tileWidth: () => t.tileWidth,
        tileHeight: () => t.tileHeight,
        spawn(e, ...i) {
          let n = L(...i),
            o = (() => {
              if ("string" != typeof e) {
                if (Array.isArray(e)) return e;
                throw new Error("Expected a symbol or a component list");
              }
              if (t.tiles[e]) {
                if ("function" != typeof t.tiles[e])
                  throw new Error(
                    "Level symbol def must be a function returning a component list"
                  );
                return t.tiles[e](n);
              }
              if (t.wildcardTile) return t.wildcardTile(e, n);
            })();
          if (!o) return null;
          let a = !1,
            h = !1;
          for (let t of o)
            "tile" === t.id && (h = !0), "pos" === t.id && (a = !0);
          a || o.push(jr()), h || o.push(Ci());
          let l = r.add(o);
          return (
            a && (l.tilePosOffset = l.pos.clone()),
            (l.tilePos = n),
            s &&
              (c(l),
              this.trigger("spatial_map_changed"),
              this.trigger("navigation_map_invalid")),
            l
          );
        },
        numColumns: () => n,
        numRows: () => i,
        levelWidth() {
          return n * this.tileWidth();
        },
        levelHeight() {
          return i * this.tileHeight();
        },
        tile2Pos(...e) {
          return L(...e).scale(this.tileWidth(), this.tileHeight());
        },
        pos2Tile(...e) {
          let t = L(...e);
          return L(
            Math.floor(t.x / this.tileWidth()),
            Math.floor(t.y / this.tileHeight())
          );
        },
        getSpatialMap: () => (s || d(), s),
        onSpatialMapChanged(e) {
          return this.on("spatial_map_changed", e);
        },
        onNavigationMapInvalid(e) {
          return this.on("navigation_map_invalid", e);
        },
        getAt(e) {
          s || d();
          let t = l(e);
          return s[t] || [];
        },
        update() {
          s && p();
        },
        invalidateNavigationMap() {
          (o = null), (a = null), (h = null);
        },
        onNavigationMapChanged(e) {
          return this.on("navigation_map_changed", e);
        },
        getTilePath(e, t, r = {}) {
          var s;
          if (
            (o || g(),
            a || m(),
            h || w(),
            e.x < 0 ||
              e.x >= n ||
              e.y < 0 ||
              e.y >= i ||
              t.x < 0 ||
              t.x >= n ||
              t.y < 0 ||
              t.y >= i)
          )
            return null;
          let d = l(e),
            c = l(t);
          if (o[c] === 1 / 0) return null;
          if (d === c) return [];
          if (-1 != h[d] && h[d] !== h[c]) return null;
          let f = new Fe((e, t) => e.cost < t.cost);
          f.insert({ cost: 0, node: d });
          let p = new Map();
          p.set(d, d);
          let V = new Map();
          for (V.set(d, 0); 0 !== f.length; ) {
            let e = null == (s = f.remove()) ? void 0 : s.node;
            if (e === c) break;
            let t = y(e, r.allowDiagonals);
            for (let r of t) {
              let t = (V.get(e) || 0) + A(e, r) + v(r, c);
              (!V.has(r) || t < V.get(r)) &&
                (V.set(r, t), f.insert({ cost: t, node: r }), p.set(r, e));
            }
          }
          let x = [],
            E = c,
            b = u(E);
          for (x.push(b); E !== d; ) {
            E = p.get(E);
            let e = u(E);
            x.push(e);
          }
          return x.reverse();
        },
        getPath(e, t, r = {}) {
          let i = this.tileWidth(),
            n = this.tileHeight(),
            s = this.getTilePath(this.pos2Tile(e), this.pos2Tile(t), r);
          return s
            ? [
                e,
                ...s.slice(1, -1).map((e) => e.scale(i, n).add(i / 2, n / 2)),
                t,
              ]
            : null;
        },
      };
    return (
      r.use(V),
      r.onNavigationMapInvalid(() => {
        r.invalidateNavigationMap(), r.trigger("navigation_map_changed");
      }),
      e.forEach((e, t) => {
        let i = e.split("");
        (n = Math.max(i.length, n)),
          i.forEach((e, i) => {
            r.spawn(e, L(i, t));
          });
      }),
      r
    );
  }
  function Ui(e = {}) {
    let t = null,
      r = null,
      i = null,
      n = null;
    return {
      id: "agent",
      require: ["pos", "tile"],
      agentSpeed: e.speed ?? 100,
      allowDiagonals: e.allowDiagonals ?? !0,
      getDistanceToTarget() {
        return t ? this.pos.dist(t) : 0;
      },
      getNextLocation: () => (r && i ? r[i] : null),
      getPath: () => (r ? r.slice() : null),
      getTarget: () => t,
      isNavigationFinished: () => !r || null === i,
      isTargetReachable: () => null !== r,
      isTargetReached() {
        return !t || this.pos.eq(t);
      },
      setTarget(e) {
        (t = e),
          (r = this.getLevel().getPath(this.pos, t, {
            allowDiagonals: this.allowDiagonals,
          })),
          (i = r ? 0 : null),
          r
            ? (n ||
                ((n = this.getLevel().onNavigationMapChanged(() => {
                  r &&
                    null !== i &&
                    ((r = this.getLevel().getPath(this.pos, t, {
                      allowDiagonals: this.allowDiagonals,
                    })),
                    (i = r ? 0 : null),
                    r
                      ? this.trigger("navigation-next", this, r[i])
                      : this.trigger("navigation-ended", this));
                })),
                this.onDestroy(() => n.cancel())),
              this.trigger("navigation-started", this),
              this.trigger("navigation-next", this, r[i]))
            : this.trigger("navigation-ended", this);
      },
      update() {
        if (r && null !== i) {
          if (this.pos.sdist(r[i]) < 2) {
            if (i === r.length - 1)
              return (
                (this.pos = t.clone()),
                (i = null),
                this.trigger("navigation-ended", this),
                void this.trigger("target-reached", this)
              );
            i++, this.trigger("navigation-next", this, r[i]);
          }
          this.moveTo(r[i], this.agentSpeed);
        }
      },
      onNavigationStarted(e) {
        return this.on("navigation-started", e);
      },
      onNavigationNext(e) {
        return this.on("navigation-next", e);
      },
      onNavigationEnded(e) {
        return this.on("navigation-ended", e);
      },
      onTargetReached(e) {
        return this.on("target-reached", e);
      },
      inspect: () =>
        JSON.stringify({ target: JSON.stringify(t), path: JSON.stringify(r) }),
    };
  }
  function Ni(e) {
    let t = l.canvas.captureStream(e),
      r = A.ctx.createMediaStreamDestination();
    A.masterNode.connect(r);
    let i = new MediaRecorder(t),
      n = [];
    return (
      (i.ondataavailable = (e) => {
        e.data.size > 0 && n.push(e.data);
      }),
      (i.onerror = () => {
        A.masterNode.disconnect(r), t.getTracks().forEach((e) => e.stop());
      }),
      i.start(),
      {
        resume() {
          i.resume();
        },
        pause() {
          i.pause();
        },
        stop: () => (
          i.stop(),
          A.masterNode.disconnect(r),
          t.getTracks().forEach((e) => e.stop()),
          new Promise((e) => {
            i.onstop = () => {
              e(new Blob(n, { type: "video/mp4" }));
            };
          })
        ),
        download(e = "kaboom.mp4") {
          this.stop().then((t) => Re(e, t));
        },
      }
    );
  }
  function Li() {
    return document.activeElement === l.canvas;
  }
  function Oi(e) {
    e.destroy();
  }
  P(pi, "body"),
    P(gi, "doubleJump"),
    P(mi, "shader"),
    P(wi, "fixed"),
    P(Ai, "stay"),
    P(vi, "health"),
    P(yi, "lifespan"),
    P(Vi, "state"),
    P(xi, "fadeIn"),
    P(Ei, "mask"),
    P(bi, "drawon"),
    P(Si, "onLoad"),
    P(Ri, "scene"),
    P(Mi, "go"),
    P(Ti, "onSceneLeave"),
    P(Pi, "getData"),
    P(Bi, "setData"),
    P(ki, "plug"),
    P(Fi, "center"),
    ((Ii = fi || (fi = {}))[(Ii.None = 0)] = "None"),
    (Ii[(Ii.Left = 1)] = "Left"),
    (Ii[(Ii.Top = 2)] = "Top"),
    (Ii[(Ii.LeftTop = 3)] = "LeftTop"),
    (Ii[(Ii.Right = 4)] = "Right"),
    (Ii[(Ii.Horizontal = 5)] = "Horizontal"),
    (Ii[(Ii.RightTop = 6)] = "RightTop"),
    (Ii[(Ii.HorizontalTop = 7)] = "HorizontalTop"),
    (Ii[(Ii.Bottom = 8)] = "Bottom"),
    (Ii[(Ii.LeftBottom = 9)] = "LeftBottom"),
    (Ii[(Ii.Vertical = 10)] = "Vertical"),
    (Ii[(Ii.LeftVertical = 11)] = "LeftVertical"),
    (Ii[(Ii.RightBottom = 12)] = "RightBottom"),
    (Ii[(Ii.HorizontalBottom = 13)] = "HorizontalBottom"),
    (Ii[(Ii.RightVertical = 14)] = "RightVertical"),
    (Ii[(Ii.All = 15)] = "All"),
    P(Ci, "tile"),
    P(Di, "addLevel"),
    P(Ui, "agent"),
    P(Ni, "record"),
    P(Li, "isFocused"),
    P(Oi, "destroy");
  let Gi = V.root.add.bind(V.root),
    qi = V.root.readd.bind(V.root),
    Hi = V.root.removeAll.bind(V.root),
    Yi = V.root.get.bind(V.root),
    Ki = V.root.wait.bind(V.root),
    ji = V.root.loop.bind(V.root),
    Qi = V.root.tween.bind(V.root);
  function zi(e = 2, t = 1) {
    let r = 0;
    return {
      require: ["scale"],
      update() {
        let i = Math.sin(r * e) * t;
        i < 0 && this.destroy(), (this.scale = L(i)), (r += vr());
      },
    };
  }
  P(zi, "boom");
  let Ji = fe(
      null,
      "data:image/png;base64,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"
    ),
    Xi = fe(
      null,
      "data:image/png;base64,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"
    );
  function Wi(e, t = {}) {
    let r = Gi([jr(e), Ai()]),
      i = 5 * (t.speed || 1),
      n = t.scale || 1;
    r.add([si(Xi), Qr(0), Zr("center"), zi(i, n), ...(t.comps ?? [])]);
    let s = r.add([si(Ji), Qr(0), Zr("center"), ci(), ...(t.comps ?? [])]);
    return (
      s.wait(0.4 / i, () => s.use(zi(i, n))), s.onDestroy(() => r.destroy()), r
    );
  }
  function Zi() {
    V.root.update();
  }
  P(Wi, "addKaboom"), P(Zi, "updateFrame");
  const _i = class e {
    constructor(e, t, r, i = !1) {
      R(this, "source"),
        R(this, "target"),
        R(this, "displacement"),
        R(this, "resolved", !1),
        (this.source = e),
        (this.target = t),
        (this.displacement = r),
        (this.resolved = i);
    }
    reverse() {
      return new e(
        this.target,
        this.source,
        this.displacement.scale(-1),
        this.resolved
      );
    }
    hasOverlap() {
      return !this.displacement.isZero();
    }
    isLeft() {
      return this.displacement.x > 0;
    }
    isRight() {
      return this.displacement.x < 0;
    }
    isTop() {
      return this.displacement.y > 0;
    }
    isBottom() {
      return this.displacement.y < 0;
    }
    preventResolution() {
      this.resolved = !0;
    }
  };
  P(_i, "Collision");
  let $i = _i;
  function en() {
    let t = {},
      r = e.hashGridSize || 64,
      i = new K(),
      n = [];
    function s(e) {
      if (
        (n.push(i.clone()),
        e.pos && i.translate(e.pos),
        e.scale && i.scale(e.scale),
        e.angle && i.rotate(e.angle),
        (e.transform = i.clone()),
        e.c("area") && !e.paused)
      ) {
        let i = e,
          n = i.worldArea().bbox(),
          s = Math.floor(n.pos.x / r),
          o = Math.floor(n.pos.y / r),
          a = Math.ceil((n.pos.x + n.width) / r),
          h = Math.ceil((n.pos.y + n.height) / r),
          l = new Set();
        for (let e = s; e <= a; e++)
          for (let r = o; r <= h; r++)
            if (t[e])
              if (t[e][r]) {
                let n = t[e][r];
                e: for (let e of n) {
                  if (e.paused || !e.exists() || l.has(e.id)) continue;
                  for (let r of i.collisionIgnore) if (e.is(r)) continue e;
                  for (let r of e.collisionIgnore) if (i.is(r)) continue e;
                  let t = ge(i.worldArea(), e.worldArea());
                  if (t) {
                    let r = new $i(i, e, t);
                    i.trigger("collideUpdate", e, r);
                    let n = r.reverse();
                    (n.resolved = r.resolved), e.trigger("collideUpdate", i, n);
                  }
                  l.add(e.id);
                }
                n.push(i);
              } else t[e][r] = [i];
            else (t[e] = {}), (t[e][r] = [i]);
      }
      e.children.forEach(s), (i = n.pop());
    }
    P(s, "checkObj"), s(V.root);
  }
  function tn() {
    let e = V.cam,
      t = N.fromAngle(W(0, 360)).scale(e.shake);
    (e.shake = C(e.shake, 0, 5 * vr())),
      (e.transform = new K()
        .translate(Fi())
        .scale(e.scale)
        .rotate(e.angle)
        .translate((e.pos ?? Fi()).scale(-1).add(t))),
      V.root.draw(),
      ft();
  }
  function rn() {
    let e = E();
    V.events.numListeners("loading") > 0
      ? V.events.trigger("loading", e)
      : nr(() => {
          let t = cr() / 2,
            r = L(cr() / 2, fr() / 2).sub(L(t / 2, 12));
          zt({ pos: L(0), width: cr(), height: fr(), color: G(0, 0, 0) }),
            zt({
              pos: r,
              width: t,
              height: 24,
              fill: !1,
              outline: { width: 4 },
            }),
            zt({ pos: r, width: t * e, height: 24 });
        });
  }
  function nn(e, t) {
    nr(() => {
      let r = L(8);
      qt(), Lt(e);
      let i = lr({
          text: t,
          font: Vt,
          size: 16,
          pos: r,
          color: G(255, 255, 255),
          fixed: !0,
        }),
        n = i.width + 2 * r.x,
        s = i.height + 2 * r.x;
      e.x + n >= cr() && Lt(L(-n, 0)),
        e.y + s >= fr() && Lt(L(0, -s)),
        zt({
          width: n,
          height: s,
          color: G(0, 0, 0),
          radius: 4,
          opacity: 0.8,
          fixed: !0,
        }),
        dr(i),
        Ht();
    });
  }
  function sn() {
    if (Ar.inspect) {
      let e = null;
      for (let t of V.root.get("*", { recursive: !0 }))
        if (t.c("area") && t.isHovering()) {
          e = t;
          break;
        }
      if ((V.root.drawInspect(), e)) {
        let t = [],
          r = e.inspect();
        for (let e in r) r[e] ? t.push(`${e}: ${r[e]}`) : t.push(`${e}`);
        nn(gr(mr()), t.join("\n"));
      }
      nn(L(8), `FPS: ${Ar.fps()}`);
    }
    Ar.paused &&
      nr(() => {
        qt(), Lt(cr(), 0), Lt(-8, 8);
        zt({
          width: 32,
          height: 32,
          anchor: "topright",
          color: G(0, 0, 0),
          opacity: 0.8,
          radius: 4,
          fixed: !0,
        });
        for (let e = 1; e <= 2; e++)
          zt({
            width: 4,
            height: 19.2,
            anchor: "center",
            pos: L((-32 / 3) * e, 16),
            color: G(255, 255, 255),
            radius: 2,
            fixed: !0,
          });
        Ht();
      }),
      1 !== Ar.timeScale &&
        nr(() => {
          qt(), Lt(cr(), fr()), Lt(-8, -8);
          let e = lr({
            text: Ar.timeScale.toFixed(1),
            font: Vt,
            size: 16,
            color: G(255, 255, 255),
            pos: L(-8),
            anchor: "botright",
            fixed: !0,
          });
          zt({
            width: e.width + 16 + 32,
            height: e.height + 16,
            anchor: "botright",
            color: G(0, 0, 0),
            opacity: 0.8,
            radius: 4,
            fixed: !0,
          });
          for (let t = 0; t < 2; t++) {
            let r = Ar.timeScale < 1;
            Wt({
              p1: L(-e.width - 8 * (r ? 2 : 3.5), -8),
              p2: L(-e.width - 8 * (r ? 2 : 3.5), -8 - e.height),
              p3: L(-e.width - 8 * (r ? 3.5 : 2), -8 - e.height / 2),
              pos: L(8 * -t * 1 + (r ? -4 : 0), 0),
              color: G(255, 255, 255),
              fixed: !0,
            });
          }
          dr(e), Ht();
        }),
      Ar.curRecording &&
        nr(() => {
          qt(),
            Lt(0, fr()),
            Lt(24, -24),
            Zt({
              radius: 12,
              color: G(255, 0, 0),
              opacity: j(0, 1, 4 * l.time()),
              fixed: !0,
            }),
            Ht();
        }),
      Ar.showLog &&
        V.logs.length > 0 &&
        nr(() => {
          var t;
          qt(), Lt(0, fr()), Lt(8, -8);
          let r = [];
          for (let e of V.logs) {
            let i = "",
              n = e.msg instanceof Error ? "error" : "info";
            (i += `[time]${e.time.toFixed(2)}[/time]`),
              (i += " "),
              (i += `[${n}]${
                (null == (t = e.msg) ? void 0 : t.toString)
                  ? e.msg.toString()
                  : e.msg
              }[/${n}]`),
              r.push(i);
          }
          V.logs = V.logs.filter((t) => l.time() - t.time < (e.logTime || 4));
          let i = lr({
            text: r.join("\n"),
            font: Vt,
            pos: L(8, -8),
            anchor: "botleft",
            size: 16,
            width: 0.6 * cr(),
            lineSpacing: 4,
            fixed: !0,
            styles: {
              time: { color: G(127, 127, 127) },
              info: { color: G(255, 255, 255) },
              error: { color: G(255, 0, 127) },
            },
          });
          zt({
            width: i.width + 16,
            height: i.height + 16,
            anchor: "botleft",
            color: G(0, 0, 0),
            radius: 4,
            opacity: 0.8,
            fixed: !0,
          }),
            dr(i),
            Ht();
        });
  }
  function on(e) {
    V.events.on("loading", e);
  }
  function an(e) {
    l.onResize(e);
  }
  function hn(e) {
    V.events.on("error", e);
  }
  function ln(e) {
    console.error(e),
      A.ctx.suspend(),
      l.run(() => {
        pt(),
          nr(() => {
            let t = cr(),
              r = fr(),
              i = {
                size: 36,
                width: t - 64,
                letterSpacing: 4,
                lineSpacing: 4,
                font: Vt,
                fixed: !0,
              };
            zt({ width: t, height: r, color: G(0, 0, 255), fixed: !0 });
            let n = lr({
              ...i,
              text: "Error",
              pos: L(32),
              color: G(255, 128, 0),
              fixed: !0,
            });
            dr(n),
              ur({
                ...i,
                text: e.message,
                pos: L(32, 32 + n.height + 16),
                fixed: !0,
              }),
              Ht(),
              V.events.trigger("error", e);
          }),
          Dt();
      });
  }
  function un(e) {
    u.push(e);
  }
  function dn() {
    V.events.onOnce("frameEnd", () => {
      l.quit(),
        d.clear(d.COLOR_BUFFER_BIT | d.DEPTH_BUFFER_BIT | d.STENCIL_BUFFER_BIT);
      let e = d.getParameter(d.MAX_TEXTURE_IMAGE_UNITS);
      for (let t = 0; t < e; t++)
        d.activeTexture(d.TEXTURE0 + t),
          d.bindTexture(d.TEXTURE_2D, null),
          d.bindTexture(d.TEXTURE_CUBE_MAP, null);
      d.bindBuffer(d.ARRAY_BUFFER, null),
        d.bindBuffer(d.ELEMENT_ARRAY_BUFFER, null),
        d.bindRenderbuffer(d.RENDERBUFFER, null),
        d.bindFramebuffer(d.FRAMEBUFFER, null),
        c.destroy(),
        u.forEach((e) => e());
    });
  }
  P(en, "checkFrame"),
    P(tn, "drawFrame"),
    P(rn, "drawLoadScreen"),
    P(nn, "drawInspectText"),
    P(sn, "drawDebug"),
    P(on, "onLoading"),
    P(an, "onResize"),
    P(hn, "onError"),
    P(ln, "handleErr"),
    P(un, "onCleanup"),
    P(dn, "quit");
  let cn = !0;
  function fn() {
    let t = o,
      r = d.drawingBufferWidth / t,
      i = d.drawingBufferHeight / t;
    if (e.letterbox) {
      if (!e.width || !e.height)
        throw new Error("Letterboxing requires width and height defined.");
      let t = r / i,
        n = e.width / e.height;
      if (t > n) {
        let e = i * n,
          t = (r - e) / 2;
        f.viewport = { x: t, y: 0, width: e, height: i };
      } else {
        let e = r / n,
          t = (i - e) / 2;
        f.viewport = { x: 0, y: t, width: r, height: e };
      }
    } else {
      if (e.stretch && (!e.width || !e.height))
        throw new Error("Stretching requires width and height defined.");
      f.viewport = { x: 0, y: 0, width: r, height: i };
    }
  }
  function pn() {
    l.onHide(() => {
      e.backgroundAudio || A.ctx.suspend();
    }),
      l.onShow(() => {
        !e.backgroundAudio && !Ar.paused && A.ctx.resume();
      }),
      l.onResize(() => {
        if (l.isFullscreen()) return;
        let t = e.width && e.height;
        (t && !e.stretch && !e.letterbox) ||
          ((r.width = r.offsetWidth * o),
          (r.height = r.offsetHeight * o),
          fn(),
          t ||
            (f.frameBuffer.free(),
            (f.frameBuffer = new $e(
              c,
              d.drawingBufferWidth,
              d.drawingBufferHeight
            )),
            (f.width = d.drawingBufferWidth / o),
            (f.height = d.drawingBufferHeight / o)));
      }),
      !1 !== e.debug &&
        (l.onKeyPress("f1", () => (Ar.inspect = !Ar.inspect)),
        l.onKeyPress("f2", () => Ar.clearLog()),
        l.onKeyPress("f8", () => (Ar.paused = !Ar.paused)),
        l.onKeyPress("f7", () => {
          Ar.timeScale = Xr(I(Ar.timeScale - 0.2, 0, 2), 1);
        }),
        l.onKeyPress("f9", () => {
          Ar.timeScale = Xr(I(Ar.timeScale + 0.2, 0, 2), 1);
        }),
        l.onKeyPress("f10", () => Ar.stepFrame())),
      e.burp && l.onKeyPress("b", () => We());
  }
  l.run(() => {
    try {
      v.loaded ||
        (1 === E() && !cn && ((v.loaded = !0), V.events.trigger("load"))),
        (!v.loaded && !1 !== e.loadingScreen) || cn
          ? (pt(), rn(), Dt())
          : (Ar.paused || Zi(), en(), pt(), tn(), !1 !== e.debug && sn(), Dt()),
        cn && (cn = !1),
        V.events.trigger("frameEnd");
    } catch (t) {
      ln(t);
    }
  }),
    P(fn, "updateViewport"),
    P(pn, "initEvents"),
    fn(),
    pn();
  let gn = {
    VERSION: "3000.1.17",
    loadRoot: b,
    loadProgress: E,
    loadSprite: fe,
    loadSpriteAtlas: te,
    loadSound: Ue,
    loadBitmapFont: Q,
    loadFont: B,
    loadShader: Ie,
    loadShaderURL: De,
    loadAseprite: Ve,
    loadPedit: ye,
    loadBean: Ne,
    loadJSON: S,
    load: x,
    getSprite: Le,
    getSound: Oe,
    getFont: Ge,
    getBitmapFont: qe,
    getShader: He,
    getAsset: Ye,
    Asset: nt,
    SpriteData: g,
    SoundData: w,
    width: cr,
    height: fr,
    center: Fi,
    dt: vr,
    time: l.time,
    screenshot: l.screenshot,
    record: Ni,
    isFocused: Li,
    setCursor: l.setCursor,
    getCursor: l.getCursor,
    setCursorLocked: l.setCursorLocked,
    isCursorLocked: l.isCursorLocked,
    setFullscreen: l.setFullscreen,
    isFullscreen: l.isFullscreen,
    isTouchscreen: l.isTouchscreen,
    onLoad: Si,
    onLoading: on,
    onResize: an,
    onGamepadConnect: l.onGamepadConnect,
    onGamepadDisconnect: l.onGamepadDisconnect,
    onError: hn,
    onCleanup: un,
    camPos: yr,
    camScale: Vr,
    camRot: xr,
    shake: Er,
    toScreen: br,
    toWorld: Sr,
    setGravity: qr,
    getGravity: Hr,
    setBackground: Yr,
    getBackground: Kr,
    getGamepads: l.getGamepads,
    add: Gi,
    make: Mr,
    destroy: Oi,
    destroyAll: Hi,
    get: Yi,
    readd: qi,
    pos: jr,
    scale: Qr,
    rotate: zr,
    color: Jr,
    opacity: Wr,
    anchor: Zr,
    area: ii,
    sprite: si,
    text: oi,
    polygon: ai,
    rect: hi,
    circle: ui,
    uvquad: li,
    outline: di,
    body: pi,
    doubleJump: gi,
    shader: mi,
    timer: ci,
    fixed: wi,
    stay: Ai,
    health: vi,
    lifespan: yi,
    z: _r,
    move: ei,
    offscreen: ti,
    follow: $r,
    state: Vi,
    fadeIn: xi,
    mask: Ei,
    drawon: bi,
    tile: Ci,
    agent: Ui,
    on: Tr,
    onUpdate: Pr,
    onDraw: Br,
    onAdd: kr,
    onDestroy: Fr,
    onClick: Nr,
    onCollide: Ir,
    onCollideUpdate: Cr,
    onCollideEnd: Dr,
    onHover: Lr,
    onHoverUpdate: Or,
    onHoverEnd: Gr,
    onKeyDown: l.onKeyDown,
    onKeyPress: l.onKeyPress,
    onKeyPressRepeat: l.onKeyPressRepeat,
    onKeyRelease: l.onKeyRelease,
    onMouseDown: l.onMouseDown,
    onMousePress: l.onMousePress,
    onMouseRelease: l.onMouseRelease,
    onMouseMove: l.onMouseMove,
    onCharInput: l.onCharInput,
    onTouchStart: l.onTouchStart,
    onTouchMove: l.onTouchMove,
    onTouchEnd: l.onTouchEnd,
    onScroll: l.onScroll,
    onHide: l.onHide,
    onShow: l.onShow,
    onGamepadButtonDown: l.onGamepadButtonDown,
    onGamepadButtonPress: l.onGamepadButtonPress,
    onGamepadButtonRelease: l.onGamepadButtonRelease,
    onGamepadStick: l.onGamepadStick,
    mousePos: mr,
    mouseDeltaPos: l.mouseDeltaPos,
    isKeyDown: l.isKeyDown,
    isKeyPressed: l.isKeyPressed,
    isKeyPressedRepeat: l.isKeyPressedRepeat,
    isKeyReleased: l.isKeyReleased,
    isMouseDown: l.isMouseDown,
    isMousePressed: l.isMousePressed,
    isMouseReleased: l.isMouseReleased,
    isMouseMoved: l.isMouseMoved,
    isGamepadButtonPressed: l.isGamepadButtonPressed,
    isGamepadButtonDown: l.isGamepadButtonDown,
    isGamepadButtonReleased: l.isGamepadButtonReleased,
    getGamepadStick: l.getGamepadStick,
    charInputted: l.charInputted,
    loop: ji,
    wait: Ki,
    play: Xe,
    volume: Je,
    burp: We,
    audioCtx: A.ctx,
    Line: ue,
    Rect: de,
    Circle: ce,
    Polygon: pe,
    Vec2: N,
    Color: O,
    Mat4: K,
    Quad: H,
    RNG: z,
    rand: W,
    randi: Z,
    randSeed: X,
    vec2: L,
    rgb: G,
    hsl2rgb: q,
    quad: Y,
    choose: $,
    chance: _,
    lerp: C,
    tween: Qi,
    easings: mt,
    map: D,
    mapc: U,
    wave: j,
    deg2rad: k,
    rad2deg: F,
    clamp: I,
    testLineLine: re,
    testRectRect: ee,
    testRectLine: ie,
    testRectPoint: ne,
    testCirclePolygon: he,
    testLinePoint: se,
    testLineCircle: oe,
    drawSprite: jt,
    drawText: ur,
    formatText: lr,
    drawRect: zt,
    drawLine: Jt,
    drawLines: Xt,
    drawTriangle: Wt,
    drawCircle: Zt,
    drawEllipse: _t,
    drawUVQuad: Yt,
    drawPolygon: $t,
    drawFormattedText: dr,
    drawMasked: tr,
    drawSubtracted: rr,
    pushTransform: qt,
    popTransform: Ht,
    pushTranslate: Lt,
    pushScale: Ot,
    pushRotate: Gt,
    pushMatrix: Nt,
    usePostEffect: gt,
    makeCanvas: rt,
    debug: Ar,
    scene: Ri,
    go: Mi,
    onSceneLeave: Ti,
    addLevel: Di,
    getData: Pi,
    setData: Bi,
    download: Ee,
    downloadJSON: Se,
    downloadText: be,
    downloadBlob: Re,
    plug: ki,
    ASCII_CHARS: vt,
    canvas: l.canvas,
    addKaboom: Wi,
    LEFT: N.LEFT,
    RIGHT: N.RIGHT,
    UP: N.UP,
    DOWN: N.DOWN,
    RED: O.RED,
    GREEN: O.GREEN,
    BLUE: O.BLUE,
    YELLOW: O.YELLOW,
    MAGENTA: O.MAGENTA,
    CYAN: O.CYAN,
    WHITE: O.WHITE,
    BLACK: O.BLACK,
    quit: dn,
    Event: Ae,
    EventHandler: ve,
    EventController: we,
  };
  if ((e.plugins && e.plugins.forEach(ki), !1 !== e.global))
    for (let R in gn) window[R] = gn[R];
  return !1 !== e.focus && l.canvas.focus(), gn;
}, "default")({
  global: !1,
  touchToMouse: !0,
  canvas: document.getElementById("game"),
});
function Ut(e, t) {
  const r = document.getElementById("textbox-container"),
    i = document.getElementById("dialogue");
  r.style.display = "block";
  let n = 0,
    s = "";
  const o = setInterval(() => {
      if (n < e.length) return (s += e[n]), (i.innerHTML = s), void n++;
      clearInterval(o);
    }, 5),
    a = document.getElementById("close");
  a.addEventListener("click", function e() {
    t(),
      (r.style.display = "none"),
      (i.innerHTML = ""),
      clearInterval(o),
      a.removeEventListener("click", e);
  });
}
function Nt(e) {
  e.width() / e.height() < 1 ? e.camScale(e.vec2(1)) : e.camScale(e.vec2(1.5));
}
Dt.loadSprite("spritesheet", "./spritesheet.png", {
  sliceX: 39,
  sliceY: 31,
  anims: {
    "idle-down": 780,
    "walk-down": { from: 780, to: 781, loop: !0, speed: 9 },
    "idle-side": 782,
    "walk-side": { from: 782, to: 783, loop: !0, speed: 9 },
    "idle-up": 819,
    "walk-up": { from: 819, to: 820, loop: !0, speed: 9 },
  },
}),
  Dt.loadSprite("map", "./map.png"),
  Dt.setBackground(Dt.Color.fromHex("#311047")),
  Dt.scene("main", async () => {
    const e = (await (await fetch("./map.json")).json()).layers,
      t = Dt.add([Dt.sprite("map"), Dt.pos(0), Dt.scale(4)]),
      r = Dt.make([
        Dt.sprite("spritesheet", { anim: "idle-down" }),
        Dt.area({ shape: new Dt.Rect(Dt.vec2(0, 3), 10, 10) }),
        Dt.body(),
        Dt.anchor("center"),
        Dt.pos(),
        Dt.scale(4),
        { speed: 300, direction: "down", isInDialogue: !1 },
        "player",
      ]);
    for (const i of e)
      if ("boundaries" !== i.name) {
        if ("spawnpoints" === i.name)
          for (const e of i.objects)
            "player" !== e.name ||
              ((r.pos = Dt.vec2(4 * (t.pos.x + e.x), 4 * (t.pos.y + e.y))),
              Dt.add(r));
      } else
        for (const e of i.objects)
          t.add([
            Dt.area({ shape: new Dt.Rect(Dt.vec2(0), e.width, e.height) }),
            Dt.body({ isStatic: !0 }),
            Dt.pos(e.x, e.y),
            e.name,
          ]),
            e.name &&
              r.onCollide(e.name, () => {
                (r.isInDialogue = !0),
                  Ut(M[e.name], () => (r.isInDialogue = !1));
              });
    Nt(Dt),
      Dt.onResize(() => {
        Nt(Dt);
      }),
      Dt.onUpdate(() => {
        Dt.camPos(r.pos.x, r.pos.y + 100);
      }),
      Dt.onMouseDown((e) => {
        if ("left" !== e || r.isInDialogue) return;
        const t = Dt.toWorld(Dt.mousePos());
        r.moveTo(t, r.speed);
        const i = r.pos.angle(t);
        return i > 50 && i < 125 && "walk-up" != r.curAnim()
          ? (r.play("walk-up"), void (r.direction = "up"))
          : i < -50 && i > -125 && "walk-down" != r.curAnim()
          ? (r.play("walk-down"), void (r.direction = "down"))
          : Math.abs(i) > 125
          ? ((r.flipX = !1),
            "walk-side" !== r.curAnim() && r.play("walk-side"),
            void (r.direction = "right"))
          : Math.abs(i) < 50
          ? ((r.flipX = !0),
            "walk-side" !== r.curAnim() && r.play("walk-side"),
            void (r.direction = "left"))
          : void Dt.onMouseRelease(() => {
              "down" !== r.direction
                ? "up" !== r.direction
                  ? r.play("idle-side")
                  : r.play("idle-up")
                : r.play("idle-down");
            });
      });
  }),
  Dt.go("main");
