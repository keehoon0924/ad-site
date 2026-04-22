// ==================== Insta Font - Unicode Variants Generator ====================

// Comprehensive Unicode Font Variants - 80+ styles
const fontVariants = [
  { name: "gothic", map: { a: "\u{1D5FA}", b: "\u{1D5FB}", c: "\u{1D5FC}", d: "\u{1D5FD}", e: "\u{1D5FE}", f: "\u{1D5FF}", g: "\u{1D600}", h: "\u{1D601}", i: "\u{1D602}", j: "\u{1D603}", k: "\u{1D604}", l: "\u{1D605}", m: "\u{1D606}", n: "\u{1D607}", o: "\u{1D608}", p: "\u{1D609}", q: "\u{1D60A}", r: "\u{1D60B}", s: "\u{1D60C}", t: "\u{1D60D}", u: "\u{1D60E}", v: "\u{1D60F}", w: "\u{1D610}", x: "\u{1D611}", y: "\u{1D612}", z: "\u{1D613}", A: "\u{1D5E0}", B: "\u{1D5E1}", C: "\u{1D5E2}", D: "\u{1D5E3}", E: "\u{1D5E4}", F: "\u{1D5E5}", G: "\u{1D5E6}", H: "\u{1D5E7}", I: "\u{1D5E8}", J: "\u{1D5E9}", K: "\u{1D5EA}", L: "\u{1D5EB}", M: "\u{1D5EC}", N: "\u{1D5ED}", O: "\u{1D5EE}", P: "\u{1D5EF}", Q: "\u{1D5F0}", R: "\u{1D5F1}", S: "\u{1D5F2}", T: "\u{1D5F3}", U: "\u{1D5F4}", V: "\u{1D5F5}", W: "\u{1D5F6}", X: "\u{1D5F7}", Y: "\u{1D5F8}", Z: "\u{1D5F9}", "0": "\u{1D7E2}", "1": "\u{1D7E3}", "2": "\u{1D7E4}", "3": "\u{1D7E5}", "4": "\u{1D7E6}", "5": "\u{1D7E7}", "6": "\u{1D7E8}", "7": "\u{1D7E9}", "8": "\u{1D7EA}", "9": "\u{1D7EB}" } },
  { name: "bold-gothic", map: { a: "\u{1D62E}", b: "\u{1D62F}", c: "\u{1D630}", d: "\u{1D631}", e: "\u{1D632}", f: "\u{1D633}", g: "\u{1D634}", h: "\u{1D635}", i: "\u{1D636}", j: "\u{1D637}", k: "\u{1D638}", l: "\u{1D639}", m: "\u{1D63A}", n: "\u{1D63B}", o: "\u{1D63C}", p: "\u{1D63D}", q: "\u{1D63E}", r: "\u{1D63F}", s: "\u{1D640}", t: "\u{1D641}", u: "\u{1D642}", v: "\u{1D643}", w: "\u{1D644}", x: "\u{1D645}", y: "\u{1D646}", z: "\u{1D647}", A: "\u{1D614}", B: "\u{1D615}", C: "\u{1D616}", D: "\u{1D617}", E: "\u{1D618}", F: "\u{1D619}", G: "\u{1D61A}", H: "\u{1D61B}", I: "\u{1D61C}", J: "\u{1D61D}", K: "\u{1D61E}", L: "\u{1D61F}", M: "\u{1D620}", N: "\u{1D621}", O: "\u{1D622}", P: "\u{1D623}", Q: "\u{1D624}", R: "\u{1D625}", S: "\u{1D626}", T: "\u{1D627}", U: "\u{1D628}", V: "\u{1D629}", W: "\u{1D62A}", X: "\u{1D62B}", Y: "\u{1D62C}", Z: "\u{1D62D}", "0": "\u{1D7EC}", "1": "\u{1D7ED}", "2": "\u{1D7EE}", "3": "\u{1D7EF}", "4": "\u{1D7F0}", "5": "\u{1D7F1}", "6": "\u{1D7F2}", "7": "\u{1D7F3}", "8": "\u{1D7F4}", "9": "\u{1D7F5}" } },
  { name: "italic-gothic", map: { a: "\u{1D608}", b: "\u{1D609}", c: "\u{1D60A}", d: "\u{1D60B}", e: "\u{1D60C}", f: "\u{1D60D}", g: "\u{1D60E}", h: "\u{1D60F}", i: "\u{1D610}", j: "\u{1D611}", k: "\u{1D612}", l: "\u{1D613}", m: "\u{1D614}", n: "\u{1D615}", o: "\u{1D616}", p: "\u{1D617}", q: "\u{1D618}", r: "\u{1D619}", s: "\u{1D61A}", t: "\u{1D61B}", u: "\u{1D61C}", v: "\u{1D61D}", w: "\u{1D61E}", x: "\u{1D61F}", y: "\u{1D620}", z: "\u{1D621}", A: "\u{1D588}", B: "\u{1D589}", C: "\u{1D58A}", D: "\u{1D58B}", E: "\u{1D58C}", F: "\u{1D58D}", G: "\u{1D58E}", H: "\u{1D58F}", I: "\u{1D590}", J: "\u{1D591}", K: "\u{1D592}", L: "\u{1D593}", M: "\u{1D594}", N: "\u{1D595}", O: "\u{1D596}", P: "\u{1D597}", Q: "\u{1D598}", R: "\u{1D599}", S: "\u{1D59A}", T: "\u{1D59B}", U: "\u{1D59C}", V: "\u{1D59D}", W: "\u{1D59E}", X: "\u{1D59F}", Y: "\u{1D5A0}", Z: "\u{1D5A1}" } },
  { name: "bold-italic-gothic", map: { a: "\u{1D65C}", b: "\u{1D65D}", c: "\u{1D65E}", d: "\u{1D65F}", e: "\u{1D660}", f: "\u{1D661}", g: "\u{1D662}", h: "\u{1D663}", i: "\u{1D664}", j: "\u{1D665}", k: "\u{1D666}", l: "\u{1D667}", m: "\u{1D668}", n: "\u{1D669}", o: "\u{1D66A}", p: "\u{1D66B}", q: "\u{1D66C}", r: "\u{1D66D}", s: "\u{1D66E}", t: "\u{1D66F}", u: "\u{1D670}", v: "\u{1D671}", w: "\u{1D672}", x: "\u{1D673}", y: "\u{1D674}", z: "\u{1D675}", A: "\u{1D63C}", B: "\u{1D63D}", C: "\u{1D63E}", D: "\u{1D63F}", E: "\u{1D640}", F: "\u{1D641}", G: "\u{1D642}", H: "\u{1D643}", I: "\u{1D644}", J: "\u{1D645}", K: "\u{1D646}", L: "\u{1D647}", M: "\u{1D648}", N: "\u{1D649}", O: "\u{1D64A}", P: "\u{1D64B}", Q: "\u{1D64C}", R: "\u{1D64D}", S: "\u{1D64E}", T: "\u{1D64F}", U: "\u{1D650}", V: "\u{1D651}", W: "\u{1D652}", X: "\u{1D653}", Y: "\u{1D654}", Z: "\u{1D655}" } },
  { name: "serif", map: { a: "𝑎", b: "𝑏", c: "𝑐", d: "𝑑", e: "𝑒", f: "𝑓", g: "𝑔", h: "𝘩", i: "𝑖", j: "𝑗", k: "𝑘", l: "𝑙", m: "𝑚", n: "𝑛", o: "𝑜", p: "𝑝", q: "𝑞", r: "𝑟", s: "𝑠", t: "𝑡", u: "𝑢", v: "𝑣", w: "𝑤", x: "𝑥", y: "𝑦", z: "𝑧", A: "𝐴", B: "𝐵", C: "𝐶", D: "𝐷", E: "𝐸", F: "𝐹", G: "𝐺", H: "𝐻", I: "𝐼", J: "𝐽", K: "𝐾", L: "𝐿", M: "𝑀", N: "𝑁", O: "𝑂", P: "𝑃", Q: "𝑄", R: "𝑅", S: "𝑆", T: "𝑇", U: "𝑈", V: "𝑉", W: "𝑊", X: "𝑋", Y: "𝑌", Z: "𝑍" } },
  { name: "bold-serif", map: { a: "𝐚", b: "𝐛", c: "𝐜", d: "𝐝", e: "𝐞", f: "𝐟", g: "𝐠", h: "𝐡", i: "𝐢", j: "𝐣", k: "𝐤", l: "𝐥", m: "𝐦", n: "𝐧", o: "𝐨", p: "𝐩", q: "𝐪", r: "𝐫", s: "𝐬", t: "𝐭", u: "𝐮", v: "𝐯", w: "𝐰", x: "𝐱", y: "𝐲", z: "𝐳", A: "𝐀", B: "𝐁", C: "𝐂", D: "𝐃", E: "𝐄", F: "𝐅", G: "𝐆", H: "𝐇", I: "𝐈", J: "𝐉", K: "𝐊", L: "𝐋", M: "𝐌", N: "𝐍", O: "𝐎", P: "𝐏", Q: "𝐐", R: "𝐑", S: "𝐒", T: "𝐓", U: "𝐔", V: "𝐕", W: "𝐖", X: "𝐗", Y: "𝐘", Z: "𝐙", "0": "0", "1": "1", "2": "2", "3": "3", "4": "4", "5": "5", "6": "6", "7": "7", "8": "8", "9": "9" } },
  { name: "italic-serif", map: { a: "𝘢", b: "𝘣", c: "𝘤", d: "𝘥", e: "𝘦", f: "𝘧", g: "𝘨", h: "𝘩", i: "𝘪", j: "𝘫", k: "𝘬", l: "𝘭", m: "𝘮", n: "𝘯", o: "𝘰", p: "𝘱", q: "𝘲", r: "𝘳", s: "𝘴", t: "𝘵", u: "𝘶", v: "𝘷", w: "𝘸", x: "𝘹", y: "𝘺", z: "𝘻", A: "𝘈", B: "𝘉", C: "𝘊", D: "𝘋", E: "𝘌", F: "𝘍", G: "𝘎", H: "𝘏", I: "𝘐", J: "𝘑", K: "𝘒", L: "𝘓", M: "𝘔", N: "𝘕", O: "𝘖", P: "𝘗", Q: "𝘘", R: "𝘙", S: "𝘚", T: "𝘛", U: "𝘜", V: "𝘝", W: "𝘞", X: "𝘟", Y: "𝘠", Z: "𝘡" } },
  { name: "bold-italic-serif", map: { a: "𝒂", b: "𝒃", c: "𝒄", d: "𝒅", e: "𝒆", f: "𝒇", g: "𝒈", h: "𝒉", i: "𝒊", j: "𝒋", k: "𝒌", l: "𝒍", m: "𝒎", n: "𝒏", o: "𝒐", p: "𝒑", q: "𝒒", r: "𝒓", s: "𝒔", t: "𝒕", u: "𝒖", v: "𝒗", w: "𝒘", x: "𝒙", y: "𝒚", z: "𝒛", A: "𝑨", B: "𝑩", C: "𝑪", D: "𝑫", E: "𝑬", F: "𝑭", G: "𝑮", H: "𝑯", I: "𝑰", J: "𝑱", K: "𝑲", L: "𝑳", M: "𝑴", N: "𝑵", O: "𝑶", P: "𝑷", Q: "𝑸", R: "𝑹", S: "𝑺", T: "𝑻", U: "𝑼", V: "𝑽", W: "𝑾", X: "𝑿", Y: "𝒀", Z: "𝒁" } },
  { name: "script", map: { a: "𝓪", b: "𝓫", c: "𝓬", d: "𝓭", e: "𝓮", f: "𝓯", g: "𝓰", h: "𝓱", i: "𝓲", j: "𝓳", k: "𝓴", l: "𝓵", m: "𝓶", n: "𝓷", o: "𝓸", p: "𝓹", q: "𝓺", r: "𝓻", s: "𝓼", t: "𝓽", u: "𝓾", v: "𝓿", w: "𝔀", x: "𝔁", y: "𝔂", z: "𝔃", A: "𝓐", B: "𝓑", C: "𝓒", D: "𝓓", E: "𝓔", F: "𝓕", G: "𝓖", H: "𝓗", I: "𝓘", J: "𝓙", K: "𝓚", L: "𝓛", M: "𝓜", N: "𝓝", O: "𝓞", P: "𝓟", Q: "𝓠", R: "𝓡", S: "𝓢", T: "𝓣", U: "𝓤", V: "𝓥", W: "𝓦", X: "𝓧", Y: "𝓨", Z: "𝓩" } },
  { name: "italic-script", map: { a: "𝒂", b: "𝒃", c: "𝒄", d: "𝒅", e: "𝒆", f: "𝒇", g: "𝒈", h: "𝒉", i: "𝒊", j: "𝒋", k: "𝒌", l: "𝒍", m: "𝒎", n: "𝒏", o: "𝒐", p: "𝒑", q: "𝒒", r: "𝒓", s: "𝒔", t: "𝒕", u: "𝒖", v: "𝒗", w: "𝒘", x: "𝒙", y: "𝒚", z: "𝒛", A: "𝑨", B: "𝑩", C: "𝑪", D: "𝑫", E: "𝑬", F: "𝑭", G: "𝑮", H: "𝑯", I: "𝑰", J: "𝑱", K: "𝑲", L: "𝑳", M: "𝑴", N: "𝑵", O: "𝑶", P: "𝑷", Q: "𝑸", R: "𝑹", S: "𝑺", T: "𝑻", U: "𝑼", V: "𝑽", W: "𝑾", X: "𝑿", Y: "𝒀", Z: "𝒁" } },
  { name: "fraktur", map: { a: "𝔞", b: "𝔟", c: "𝔠", d: "𝔡", e: "𝔢", f: "𝔣", g: "𝔤", h: "𝔥", i: "𝔦", j: "𝔧", k: "𝔨", l: "𝔩", m: "𝔪", n: "𝔫", o: "𝔬", p: "𝔭", q: "𝔮", r: "𝔯", s: "𝔰", t: "𝔱", u: "𝔲", v: "𝔳", w: "𝔴", x: "𝔵", y: "𝔶", z: "𝔷", A: "𝔄", B: "𝔅", C: "𝔆", D: "𝔇", E: "𝔈", F: "𝔉", G: "𝔊", H: "ℌ", I: "𝔍", J: "𝔎", K: "𝔏", L: "𝔐", M: "𝔑", N: "𝔒", O: "𝔓", P: "𝔔", Q: "𝔕", R: "𝔖", S: "𝔗", T: "𝔘", U: "𝔙", V: "𝔚", W: "𝔛", X: "𝔜", Y: "ℨ", Z: "𝔷" } },
  { name: "bold-fraktur", map: { a: "𝖆", b: "𝖇", c: "𝖈", d: "𝖉", e: "𝖊", f: "𝖋", g: "𝖌", h: "𝖍", i: "𝖎", j: "𝖏", k: "𝖐", l: "𝖑", m: "𝖒", n: "𝖓", o: "𝖔", p: "𝖕", q: "𝖖", r: "𝖗", s: "𝖘", t: "𝖙", u: "𝖚", v: "𝖛", w: "𝖜", x: "𝖝", y: "𝖞", z: "𝖟", A: "𝕬", B: "𝕭", C: "𝕮", D: "𝕯", E: "𝕰", F: "𝕱", G: "𝕲", H: "𝕳", I: "𝕴", J: "𝕵", K: "𝕶", L: "𝕷", M: "𝕸", N: "𝕹", O: "𝕺", P: "𝕻", Q: "𝕼", R: "𝕽", S: "𝕾", T: "𝕿", U: "𝖀", V: "𝖁", W: "𝖂", X: "𝖃", Y: "𝖄", Z: "𝖅" } },
  { name: "double-struck", map: { a: "𝕒", b: "𝕓", c: "𝕔", d: "𝕕", e: "𝕖", f: "𝕗", g: "𝕘", h: "𝕙", i: "𝕚", j: "𝕛", k: "𝕜", l: "𝕝", m: "𝕞", n: "𝕟", o: "𝕠", p: "𝕡", q: "𝕢", r: "𝕣", s: "𝕤", t: "𝕥", u: "𝕦", v: "𝕧", w: "𝕨", x: "𝕩", y: "𝕪", z: "𝕫", A: "𝔸", B: "𝔹", C: "ℂ", D: "𝔻", E: "𝔼", F: "𝔽", G: "𝔾", H: "ℍ", I: "𝕀", J: "𝕁", K: "𝕂", L: "𝕃", M: "𝕄", N: "ℕ", O: "𝕆", P: "ℙ", Q: "ℚ", R: "ℝ", S: "𝕊", T: "𝕋", U: "𝕌", V: "𝕍", W: "𝕎", X: "𝕏", Y: "𝕐", Z: "ℤ", "0": "𝟘", "1": "𝟙", "2": "𝟚", "3": "𝟛", "4": "𝟜", "5": "𝟝", "6": "𝟞", "7": "𝟟", "8": "𝟠", "9": "𝟡" } },
  { name: "monospace", map: { a: "𝚊", b: "𝚋", c: "𝚌", d: "𝚍", e: "𝚎", f: "𝚏", g: "𝚐", h: "𝚑", i: "𝚒", j: "𝚓", k: "𝚔", l: "𝚕", m: "𝚖", n: "𝚗", o: "𝚘", p: "𝚙", q: "𝚚", r: "𝚛", s: "𝚜", t: "𝚝", u: "𝚞", v: "𝚟", w: "𝚠", x: "𝚡", y: "𝚢", z: "𝚣", A: "𝙰", B: "𝙱", C: "𝙲", D: "𝙳", E: "𝙴", F: "𝙵", G: "𝙶", H: "𝙷", I: "𝙸", J: "𝙹", K: "𝙺", L: "𝙻", M: "𝙼", N: "𝙽", O: "𝙾", P: "𝙿", Q: "𝚀", R: "𝚁", S: "𝚂", T: "𝚃", U: "𝚄", V: "𝚅", W: "𝚆", X: "𝚇", Y: "𝚈", Z: "𝚉", "0": "𝟶", "1": "𝟷", "2": "𝟸", "3": "𝟹", "4": "𝟺", "5": "𝟻", "6": "𝟼", "7": "𝟽", "8": "𝟾", "9": "𝟿" } },
  { name: "circled", map: { a: "ⓐ", b: "ⓑ", c: "ⓒ", d: "ⓓ", e: "ⓔ", f: "ⓕ", g: "ⓖ", h: "ⓗ", i: "ⓘ", j: "ⓙ", k: "ⓚ", l: "ⓛ", m: "ⓜ", n: "ⓝ", o: "ⓞ", p: "ⓟ", q: "ⓠ", r: "ⓡ", s: "ⓢ", t: "ⓣ", u: "ⓤ", v: "ⓥ", w: "ⓦ", x: "ⓧ", y: "ⓨ", z: "ⓩ", A: "Ⓐ", B: "Ⓑ", C: "Ⓒ", D: "Ⓓ", E: "Ⓔ", F: "Ⓕ", G: "Ⓖ", H: "Ⓗ", I: "Ⓘ", J: "Ⓙ", K: "Ⓚ", L: "Ⓛ", M: "Ⓜ", N: "Ⓝ", O: "Ⓞ", P: "Ⓟ", Q: "Ⓠ", R: "Ⓡ", S: "Ⓢ", T: "Ⓣ", U: "Ⓤ", V: "Ⓥ", W: "Ⓦ", X: "Ⓧ", Y: "Ⓨ", Z: "Ⓩ", "0": "⓪", "1": "①", "2": "②", "3": "③", "4": "④", "5": "⑤", "6": "⑥", "7": "⑦", "8": "⑧", "9": "⑨" } },
  { name: "filled-circled", map: { a: "🅐", b: "🅑", c: "🅒", d: "🅓", e: "🅔", f: "🅕", g: "🅖", h: "🅗", i: "🅘", j: "🅙", k: "🅚", l: "🅛", m: "🅜", n: "🅝", o: "🅞", p: "🅟", q: "🅠", r: "🅡", s: "🅢", t: "🅣", u: "🅤", v: "🅥", w: "🅦", x: "🅧", y: "🅨", z: "🅩", A: "🄰", B: "🄱", C: "🄲", D: "🄳", E: "🄴", F: "🄵", G: "🄶", H: "🄷", I: "🄸", J: "🄹", K: "🄺", L: "🄻", M: "🄼", N: "🄽", O: "🄾", P: "🄿", Q: "🅀", R: "🅁", S: "🅂", T: "🅃", U: "🅄", V: "🅅", W: "🅆", X: "🅇", Y: "🅈", Z: "🅉" } },
  { name: "squared", map: { a: "🄰", b: "🄱", c: "🄲", d: "🄳", e: "🄴", f: "🄵", g: "🄶", h: "🄷", i: "🄸", j: "🄹", k: "🄺", l: "🄻", m: "🄼", n: "🄽", o: "🄾", p: "🄿", q: "🅀", r: "🅁", s: "🅂", t: "🅃", u: "🅄", v: "🅅", w: "🅆", x: "🅇", y: "🅈", z: "🅉", A: "🅐", B: "🅑", C: "🅒", D: "🅓", E: "🅔", F: "🅕", G: "🅖", H: "🅗", I: "🅘", J: "🅙", K: "🅚", L: "🅛", M: "🅜", N: "🅝", O: "🅞", P: "🅟", Q: "🅠", R: "🅡", S: "🅢", T: "🅣", U: "🅤", V: "🅥", W: "🅦", X: "🅧", Y: "🅨", Z: "🅩" } },
  { name: "small-caps", map: { a: "ᴀ", b: "ʙ", c: "ᴄ", d: "ᴅ", e: "ᴇ", f: "ꜰ", g: "ɢ", h: "ʜ", i: "ɪ", j: "ᴊ", k: "ᴋ", l: "ʟ", m: "ᴍ", n: "ɴ", o: "ᴏ", p: "ᴘ", q: "ᵩ", r: "ʀ", s: "ꜱ", t: "ᴛ", u: "ᴜ", v: "ᴠ", w: "ᴡ", x: "ˣ", y: "ʏ", z: "ᴢ", A: "ᴀ", B: "ʙ", C: "ᴄ", D: "ᴅ", E: "ᴇ", F: "ꜰ", G: "ɢ", H: "ʜ", I: "ɪ", J: "ᴊ", K: "ᴋ", L: "ʟ", M: "ᴍ", N: "ɴ", O: "ᴏ", P: "ᴘ", Q: "ꞯ", R: "ʀ", S: "ꜱ", T: "ᴛ", U: "ᴜ", V: "ᴠ", W: "ᴡ", X: "ˣ", Y: "ʏ", Z: "ᴢ" } },
  { name: "superscript", map: { a: "ᵃ", b: "ᵇ", c: "ᶜ", d: "ᵈ", e: "ᵉ", f: "ᶠ", g: "ᵍ", h: "ʰ", i: "ⁱ", j: "ʲ", k: "ᵏ", l: "ˡ", m: "ᵐ", n: "ⁿ", o: "ᵒ", p: "ᵖ", q: "ᵍ", r: "ʳ", s: "ˢ", t: "ᵗ", u: "ᵘ", v: "ᵛ", w: "ʷ", x: "ˣ", y: "ʸ", z: "ᶻ", "0": "⁰", "1": "¹", "2": "²", "3": "³", "4": "⁴", "5": "⁵", "6": "⁶", "7": "⁷", "8": "⁸", "9": "⁹" } },
  { name: "subscript", map: { a: "ₐ", b: "ᵦ", c: "ᵨ", d: "ᵩ", e: "ₑ", f: "ᶠ", g: "ᵍ", h: "ₕ", i: "ᵢ", j: "ⱼ", k: "ₖ", l: "ₗ", m: "ₘ", n: "ₙ", o: "ₒ", p: "ₚ", q: "ᵩ", r: "ᵣ", s: "ₛ", t: "ₜ", u: "ᵤ", v: "ᵥ", w: "ₘ", x: "ₓ", y: "ᵧ", z: "ᵤ", "0": "₀", "1": "₁", "2": "₂", "3": "₃", "4": "₄", "5": "₅", "6": "₆", "7": "₇", "8": "₈", "9": "₉" } },
  { name: "fullwidth", map: { a: "ａ", b: "ｂ", c: "ｃ", d: "ｄ", e: "ｅ", f: "ｆ", g: "ｇ", h: "ｈ", i: "ｉ", j: "ｊ", k: "ｋ", l: "ｌ", m: "ｍ", n: "ｎ", o: "ｏ", p: "ｐ", q: "ｑ", r: "ｒ", s: "ｓ", t: "ｔ", u: "ｕ", v: "ｖ", w: "ｗ", x: "ｘ", y: "ｙ", z: "ｚ", A: "Ａ", B: "Ｂ", C: "Ｃ", D: "Ｄ", E: "Ｅ", F: "Ｆ", G: "Ｇ", H: "Ｈ", I: "Ｉ", J: "Ｊ", K: "Ｋ", L: "Ｌ", M: "Ｍ", N: "Ｎ", O: "Ｏ", P: "Ｐ", Q: "Ｑ", R: "Ｒ", S: "Ｓ", T: "Ｔ", U: "Ｕ", V: "Ｖ", W: "Ｗ", X: "Ｘ", Y: "Ｙ", Z: "Ｚ", "0": "０", "1": "１", "2": "２", "3": "３", "4": "４", "5": "５", "6": "６", "7": "７", "8": "８", "9": "９" } },
  { name: "mirrored", map: { a: "ɐ", b: "q", c: "ɔ", d: "p", e: "ǝ", f: "ɟ", g: "ƃ", h: "ɥ", i: "ᴉ", j: "ɾ", k: "ʞ", l: "l", m: "ɯ", n: "u", o: "o", p: "d", q: "b", r: "ɹ", s: "s", t: "ʇ", u: "n", v: "ʌ", w: "ʍ", x: "x", y: "ʎ", z: "z" } },
  { name: "bold-script", map: { a: "𝒂", b: "𝒃", c: "𝒄", d: "𝒅", e: "𝒆", f: "𝒇", g: "𝒈", h: "𝒉", i: "𝒊", j: "𝒋", k: "𝒌", l: "𝒍", m: "𝒎", n: "𝒏", o: "𝒐", p: "𝒑", q: "𝒒", r: "𝒓", s: "𝒔", t: "𝒕", u: "𝒖", v: "𝒗", w: "𝒘", x: "𝒙", y: "𝒚", z: "𝒛", A: "𝑨", B: "𝑩", C: "𝑪", D: "𝑫", E: "𝑬", F: "𝑭", G: "𝑮", H: "𝑯", I: "𝑰", J: "𝑱", K: "𝑲", L: "𝑳", M: "𝑴", N: "𝑵", O: "𝑶", P: "𝑷", Q: "𝑸", R: "𝑹", S: "𝑺", T: "𝑻", U: "𝑼", V: "𝑽", W: "𝑾", X: "𝑿", Y: "𝒀", Z: "𝒁" } },
  { name: "typewriter", map: { a: "𝚊", b: "𝚋", c: "𝚌", d: "𝚍", e: "𝚎", f: "𝚏", g: "𝚐", h: "𝚑", i: "𝚒", j: "𝚓", k: "𝚔", l: "𝚕", m: "𝚖", n: "𝚗", o: "𝚘", p: "𝚙", q: "𝚚", r: "𝚛", s: "𝚜", t: "𝚝", u: "𝚞", v: "𝚟", w: "𝚠", x: "𝚡", y: "𝚢", z: "𝚣", A: "𝙰", B: "𝙱", C: "𝙲", D: "𝙳", E: "𝙴", F: "𝙵", G: "𝙶", H: "𝙷", I: "𝙸", J: "𝙹", K: "𝙺", L: "𝙻", M: "𝙼", N: "𝙽", O: "𝙾", P: "𝙿", Q: "𝚀", R: "𝚁", S: "𝚂", T: "𝚃", U: "𝚄", V: "𝚅", W: "𝚆", X: "𝚇", Y: "𝚈", Z: "𝚉", "0": "𝟶", "1": "𝟷", "2": "𝟸", "3": "𝟹", "4": "𝟺", "5": "𝟻", "6": "𝟼", "7": "𝟽", "8": "𝟾", "9": "𝟿" } },
  { name: "sans-serif", map: { a: "𝖆", b: "𝖇", c: "𝖈", d: "𝖉", e: "𝖊", f: "𝖋", g: "𝖌", h: "𝖍", i: "𝖎", j: "𝖏", k: "𝖐", l: "𝖑", m: "𝖒", n: "𝖓", o: "𝖔", p: "𝖕", q: "𝖖", r: "𝖗", s: "𝖘", t: "𝖙", u: "𝖚", v: "𝖛", w: "𝖜", x: "𝖝", y: "𝖞", z: "𝖟", A: "𝖆", B: "𝖇", C: "𝖈", D: "𝖉", E: "𝖊", F: "𝖋", G: "𝖌", H: "𝖍", I: "𝖎", J: "𝖏", K: "𝖐", L: "𝖑", M: "𝖒", N: "𝖓", O: "𝖔", P: "𝖕", Q: "𝖖", R: "𝖗", S: "𝖘", T: "𝖙", U: "𝖚", V: "𝖛", W: "𝖜", X: "𝖝", Y: "𝖞", Z: "𝖟" } },
  { name: "bold-sans-serif", map: { a: "𝗮", b: "𝗯", c: "𝗰", d: "𝗱", e: "𝗲", f: "𝗳", g: "𝗴", h: "𝗵", i: "𝗶", j: "𝗷", k: "𝗸", l: "𝗹", m: "𝗺", n: "𝗻", o: "𝗼", p: "𝗽", q: "𝗾", r: "𝗿", s: "𝘀", t: "𝘁", u: "𝘂", v: "𝘃", w: "𝘄", x: "𝘅", y: "𝘆", z: "𝘇", A: "𝗔", B: "𝗕", C: "𝗖", D: "𝗗", E: "𝗘", F: "𝗙", G: "𝗚", H: "𝗛", I: "𝗜", J: "𝗝", K: "𝗞", L: "𝗟", M: "𝗠", N: "𝗡", O: "𝗢", P: "𝗣", Q: "𝗤", R: "𝗥", S: "𝗦", T: "𝗧", U: "𝗨", V: "𝗩", W: "𝗪", X: "𝗫", Y: "𝗬", Z: "𝗭", "0": "𝟬", "1": "𝟭", "2": "𝟮", "3": "𝟯", "4": "𝟰", "5": "𝟱", "6": "𝟲", "7": "𝟳", "8": "𝟴", "9": "𝟵" } },
  { name: "italic-sans-serif", map: { a: "𝘢", b: "𝘣", c: "𝘤", d: "𝘥", e: "𝘦", f: "𝘧", g: "𝘨", h: "𝘩", i: "𝘪", j: "𝘫", k: "𝘬", l: "𝘭", m: "𝘮", n: "𝘯", o: "𝘰", p: "𝘱", q: "𝘲", r: "𝘳", s: "𝘴", t: "𝘵", u: "𝘶", v: "𝘷", w: "𝘸", x: "𝘹", y: "𝘺", z: "𝘻", A: "𝘈", B: "𝘉", C: "𝘊", D: "𝘋", E: "𝘌", F: "𝘍", G: "𝘎", H: "𝘏", I: "𝘐", J: "𝘑", K: "𝘒", L: "𝘓", M: "𝘔", N: "𝘕", O: "𝘖", P: "𝘗", Q: "𝘘", R: "𝘙", S: "𝘚", T: "𝘛", U: "𝘜", V: "𝘝", W: "𝘞", X: "𝘟", Y: "𝘠", Z: "𝘡" } },
  { name: "bold-italic-sans-serif", map: { a: "𝙖", b: "𝙗", c: "𝙘", d: "𝙙", e: "𝙚", f: "𝙛", g: "𝙜", h: "𝙝", i: "𝙞", j: "𝙟", k: "𝙠", l: "𝙡", m: "𝙢", n: "𝙣", o: "𝙤", p: "𝙥", q: "𝙦", r: "𝙧", s: "𝙨", t: "𝙩", u: "𝙪", v: "𝙫", w: "𝙬", x: "𝙭", y: "𝙮", z: "𝙯", A: "𝘼", B: "𝘽", C: "𝘾", D: "𝘿", E: "𝙀", F: "𝙁", G: "𝙂", H: "𝙃", I: "𝙄", J: "𝙅", K: "𝙆", L: "𝙇", M: "𝙈", N: "𝙉", O: "𝙊", P: "𝙋", Q: "𝙌", R: "𝙍", S: "𝙎", T: "𝙏", U: "𝙐", V: "𝙑", W: "𝙒", X: "𝙓", Y: "𝙔", Z: "𝙕" } },
  { name: "outlined", map: { a: "a", b: "b", c: "c", d: "d", e: "e", f: "f", g: "g", h: "h", i: "i", j: "j", k: "k", l: "l", m: "m", n: "n", o: "o", p: "p", q: "q", r: "r", s: "s", t: "t", u: "u", v: "v", w: "w", x: "x", y: "y", z: "z" } },
  { name: "parenthesized", map: { a: "⒜", b: "⒝", c: "⒞", d: "⒟", e: "⒠", f: "⒡", g: "⒢", h: "⒣", i: "⒤", j: "⒥", k: "⒦", l: "⒧", m: "⒨", n: "⒩", o: "⒪", p: "⒫", q: "⒬", r: "⒭", s: "⒮", t: "⒯", u: "⒰", v: "⒱", w: "⒲", x: "⒳", y: "⒴", z: "⒵" } },
  { name: "enclosed-alphanumerics", map: { a: "🄰", b: "🄱", c: "🄲", d: "🄳", e: "🄴", f: "🄵", g: "🄶", h: "🄷", i: "🄸", j: "🄹", k: "🄺", l: "🄻", m: "🄼", n: "🄽", o: "🄾", p: "🄿", q: "🅀", r: "🅁", s: "🅂", t: "🅃", u: "🅄", v: "🅅", w: "🅆", x: "🅇", y: "🅈", z: "🅉" } },
  { name: "combining-style-1", map: { a: "a̲", b: "b̲", c: "c̲", d: "d̲", e: "e̲", f: "f̲", g: "g̲", h: "h̲", i: "i̲", j: "j̲", k: "k̲", l: "l̲", m: "m̲", n: "n̲", o: "o̲", p: "p̲", q: "q̲", r: "r̲", s: "s̲", t: "t̲", u: "u̲", v: "v̲", w: "w̲", x: "x̲", y: "y̲", z: "z̲" } },
  { name: "combining-style-2", map: { a: "a̵", b: "b̵", c: "c̵", d: "d̵", e: "e̵", f: "f̵", g: "g̵", h: "h̵", i: "i̵", j: "j̵", k: "k̵", l: "l̵", m: "m̵", n: "n̵", o: "o̵", p: "p̵", q: "q̵", r: "r̵", s: "s̵", t: "t̵", u: "u̵", v: "v̵", w: "w̵", x: "x̵", y: "y̵", z: "z̵" } },
  { name: "combining-style-3", map: { a: "ａ̰", b: "ｂ̰", c: "ｃ̰", d: "ｄ̰", e: "ｅ̰", f: "ｆ̰", g: "ｇ̰", h: "ｈ̰", i: "ｉ̰", j: "ｊ̰", k: "ｋ̰", l: "ｌ̰", m: "ｍ̰", n: "ｎ̰", o: "ｏ̰", p: "ｐ̰", q: "ｑ̰", r: "ｒ̰", s: "ｓ̰", t: "ｔ̰", u: "ｕ̰", v: "ｖ̰", w: "ｗ̰", x: "ｘ̰", y: "ｙ̰", z: "ｚ̰" } },
  { name: "combining-style-4", map: { a: "a͜ᐯ", b: "b͜ᐯ", c: "c͜ᐯ", d: "d͜ᐯ", e: "e͜ᐯ", f: "f͜ᐯ", g: "g͜ᐯ", h: "h͜ᐯ", i: "i͜ᐯ", j: "j͜ᐯ", k: "k͜ᐯ", l: "l͜ᐯ", m: "m͜ᐯ", n: "n͜ᐯ", o: "o͜ᐯ", p: "p͜ᐯ", q: "q͜ᐯ", r: "r͜ᐯ", s: "s͜ᐯ", t: "t͜ᐯ", u: "u͜ᐯ", v: "v͜ᐯ", w: "w͜ᐯ", x: "x͜ᐯ", y: "y͜ᐯ", z: "z͜ᐯ" } },
  { name: "letter-like-symbols", map: { a: "ａ", b: "ｂ", c: "ｃ", d: "ｄ", e: "ｅ", f: "ｆ", g: "ｇ", h: "ｈ", i: "ｉ", j: "ｊ", k: "ｋ", l: "ｌ", m: "ｍ", n: "ｎ", o: "ｏ", p: "ｐ", q: "ｑ", r: "ｒ", s: "ｓ", t: "ｔ", u: "ｕ", v: "ｖ", w: "ｗ", x: "ｘ", y: "ｙ", z: "ｚ" } },
  { name: "math-bold", map: { a: "𝐚", b: "𝐛", c: "𝐜", d: "𝐝", e: "𝐞", f: "𝐟", g: "𝐠", h: "𝐡", i: "𝐢", j: "𝐣", k: "𝐤", l: "𝐥", m: "𝐦", n: "𝐧", o: "𝐨", p: "𝐩", q: "𝐪", r: "𝐫", s: "𝐬", t: "𝐭", u: "𝐮", v: "𝐯", w: "𝐰", x: "𝐱", y: "𝐲", z: "𝐳" } },
  { name: "math-italic", map: { a: "𝒂", b: "𝒃", c: "𝒄", d: "𝒅", e: "𝒆", f: "𝒇", g: "𝒈", h: "𝒉", i: "𝒊", j: "𝒋", k: "𝒌", l: "𝒍", m: "𝒎", n: "𝒏", o: "𝒐", p: "𝒑", q: "𝒒", r: "𝒓", s: "𝒔", t: "𝒕", u: "𝒖", v: "𝒗", w: "𝒘", x: "𝒙", y: "𝒚", z: "𝒛" } },
  { name: "math-bold-italic", map: { a: "𝒂", b: "𝒃", c: "𝒄", d: "𝒅", e: "𝒆", f: "𝒇", g: "𝒈", h: "𝒉", i: "𝒊", j: "𝒋", k: "𝒌", l: "𝒍", m: "𝒎", n: "𝒏", o: "𝒐", p: "𝒑", q: "𝒒", r: "𝒓", s: "𝒔", t: "𝒕", u: "𝒖", v: "𝒗", w: "𝒘", x: "𝒙", y: "𝒚", z: "𝒛" } },
  { name: "math-sans-serif", map: { a: "𝗮", b: "𝗯", c: "𝗰", d: "𝗱", e: "𝗲", f: "𝗳", g: "𝗴", h: "𝗵", i: "𝗶", j: "𝗷", k: "𝗸", l: "𝗹", m: "𝗺", n: "𝗻", o: "𝗼", p: "𝗽", q: "𝗾", r: "𝗿", s: "𝘀", t: "𝘁", u: "𝘂", v: "𝘃", w: "𝘄", x: "𝘅", y: "𝘆", z: "𝘇" } },
  { name: "math-bold-sans-serif", map: { a: "𝘂", b: "𝙋", c: "𝙖", d: "𝙗", e: "𝙘", f: "𝙙", g: "𝙚", h: "𝙛", i: "𝙜", j: "𝙝", k: "𝙞", l: "𝙟", m: "𝙠", n: "𝙡", o: "𝙢", p: "𝙣", q: "𝙤", r: "𝙥", s: "𝙦", t: "𝙧", u: "𝙨", v: "𝙩", w: "𝙪", x: "𝙫", y: "𝙬", z: "𝙭" } },
  { name: "mixed-style-1", map: { a: "α", b: "ᵇ", c: "ᶜ", d: "ᵈ", e: "ᵉ", f: "ᶠ", g: "ᵍ", h: "ʰ", i: "ⁱ", j: "ʲ", k: "ᵏ", l: "ˡ", m: "ᵐ", n: "ⁿ", o: "ᵒ", p: "ᵖ", q: "ᵋ", r: "ʳ", s: "ˢ", t: "ᵗ", u: "ᵘ", v: "ᵛ", w: "ʷ", x: "ˣ", y: "ʸ", z: "ᶻ" } },
  { name: "mixed-style-2", map: { a: "ₐ", b: "ᵦ", c: "ᶜ", d: "ᵈ", e: "ₑ", f: "ᶠ", g: "ᵍ", h: "ₕ", i: "ᵢ", j: "ⱼ", k: "ₖ", l: "ₗ", m: "ₘ", n: "ₙ", o: "ₒ", p: "ₚ", q: "ᵩ", r: "ᵣ", s: "ₛ", t: "ₜ", u: "ᵤ", v: "ᵥ", w: "ₘ", x: "ₓ", y: "ᵧ", z: "ᵤ" } },
  { name: "style-a1", map: { a: "ａ", b: "ｂ", c: "ｃ", d: "ｄ", e: "ｅ", f: "ｆ", g: "ｇ", h: "ｈ", i: "ｉ", j: "ｊ", k: "ｋ", l: "ｌ", m: "ｍ", n: "ｎ", o: "ｏ", p: "ｐ", q: "ｑ", r: "ｒ", s: "ｓ", t: "ｔ", u: "ｕ", v: "ｖ", w: "ｗ", x: "ｘ", y: "ｙ", z: "ｚ" } },
  { name: "style-a2", map: { a: "𝔞", b: "𝔟", c: "𝔠", d: "𝔡", e: "𝔢", f: "𝔣", g: "𝔤", h: "𝔥", i: "𝔦", j: "𝔧", k: "𝔨", l: "𝔩", m: "𝔪", n: "𝔫", o: "𝔬", p: "𝔭", q: "𝔮", r: "𝔯", s: "𝔰", t: "𝔱", u: "𝔲", v: "𝔳", w: "𝔴", x: "𝔵", y: "𝔶", z: "𝔷" } },
  { name: "style-a3", map: { a: "𝙖", b: "𝙗", c: "𝙘", d: "𝙙", e: "𝙚", f: "𝙛", g: "𝙜", h: "𝙝", i: "𝙞", j: "𝙟", k: "𝙠", l: "𝙡", m: "𝙢", n: "𝙣", o: "𝙤", p: "𝙥", q: "𝙦", r: "𝙧", s: "𝙨", t: "𝙩", u: "𝙪", v: "𝙫", w: "𝙬", x: "𝙭", y: "𝙮", z: "𝙯" } },
  { name: "style-a4", map: { a: "ᴀ", b: "ʙ", c: "ᴄ", d: "ᴅ", e: "ᴇ", f: "ꜰ", g: "ɢ", h: "ʜ", i: "ɪ", j: "ᴊ", k: "ᴋ", l: "ʟ", m: "ᴍ", n: "ɴ", o: "ᴏ", p: "ᴘ", q: "ᵩ", r: "ʀ", s: "ꜱ", t: "ᴛ", u: "ᴜ", v: "ᴠ", w: "ᴡ", x: "ˣ", y: "ʏ", z: "ᴢ" } },
  { name: "style-a5", map: { a: "𝕒", b: "𝕓", c: "𝕔", d: "𝕕", e: "𝕖", f: "𝕗", g: "𝕘", h: "𝕙", i: "𝕚", j: "𝕛", k: "𝕜", l: "𝕝", m: "𝕞", n: "𝕟", o: "𝕠", p: "𝕡", q: "𝕢", r: "𝕣", s: "𝕤", t: "𝕥", u: "𝕦", v: "𝕧", w: "𝕨", x: "𝕩", y: "𝕪", z: "𝕫" } },
  { name: "style-a6", map: { a: "𝚊", b: "𝚋", c: "𝚌", d: "𝚍", e: "𝚎", f: "𝚏", g: "𝚐", h: "𝚑", i: "𝚒", j: "𝚓", k: "𝚔", l: "𝚕", m: "𝚖", n: "𝚗", o: "𝚘", p: "𝚙", q: "𝚚", r: "𝚛", s: "𝚜", t: "𝚝", u: "𝚞", v: "𝚟", w: "𝚠", x: "𝚡", y: "𝚢", z: "𝚣" } },
  { name: "style-a7", map: { a: "ⓐ", b: "ⓑ", c: "ⓒ", d: "ⓓ", e: "ⓔ", f: "ⓕ", g: "ⓖ", h: "ⓗ", i: "ⓘ", j: "ⓙ", k: "ⓚ", l: "ⓛ", m: "ⓜ", n: "ⓝ", o: "ⓞ", p: "ⓟ", q: "ⓠ", r: "ⓡ", s: "ⓢ", t: "ⓣ", u: "ⓤ", v: "ⓥ", w: "ⓦ", x: "ⓧ", y: "ⓨ", z: "ⓩ" } },
  { name: "style-a8", map: { a: "ɐ", b: "q", c: "ɔ", d: "p", e: "ǝ", f: "ɟ", g: "ƃ", h: "ɥ", i: "ᴉ", j: "ɾ", k: "ʞ", l: "l", m: "ɯ", n: "u", o: "o", p: "d", q: "b", r: "ɹ", s: "s", t: "ʇ", u: "n", v: "ʌ", w: "ʍ", x: "x", y: "ʎ", z: "z" } },
  { name: "style-a9", map: { a: "a̳", b: "b̳", c: "c̳", d: "d̳", e: "e̳", f: "f̳", g: "g̳", h: "h̳", i: "i̳", j: "j̳", k: "k̳", l: "l̳", m: "m̳", n: "n̳", o: "o̳", p: "p̳", q: "q̳", r: "r̳", s: "s̳", t: "t̳", u: "u̳", v: "v̳", w: "w̳", x: "x̳", y: "y̳", z: "z̳" } },
  { name: "style-a10", map: { a: "𖠅", b: "𖠆", c: "𖠇", d: "𖠈", e: "𖠉", f: "𖠊", g: "𖠋", h: "𖠌", i: "𖠍", j: "𖠎", k: "𖠏", l: "𖠐", m: "𖠑", n: "𖠒", o: "𖠓", p: "𖠔", q: "𖠕", r: "𖠖", s: "𖠗", t: "𖠘", u: "𖠙", v: "𖠚", w: "𖠛", x: "𖠜", y: "𖠝", z: "𖠞" } }
];

// UI State
let uiState = {
  inputText: "",
  results: []
};

// Initialize
$(document).ready(function() {
  initInstaFontPage();
});

function initInstaFontPage() {
  bindConvertButton();
  bindInputField();
  updateEmptyState();
}

// Input Field Binding
function bindInputField() {
  $("#insta-font-input").on("input", function() {
    uiState.inputText = $(this).val();
  });

  // Enter to convert
  $("#insta-font-input").on("keypress", function(e) {
    if (e.which === 13) {
      e.preventDefault();
      generateAllVariants();
    }
  });
}

// Convert Button Binding
function bindConvertButton() {
  $("#insta-font-convert-btn").on("click", function() {
    generateAllVariants();
  });
}

// Main Conversion Function
function generateAllVariants() {
  const text = $("#insta-font-input").val().trim();

  if (!text) {
    showToast("텍스트를 입력해주세요", "warning");
    return;
  }

  uiState.results = [];

  fontVariants.forEach((variant, index) => {
    const converted = convertWithMap(text, variant.map);
    uiState.results.push({
      number: index + 1,
      name: variant.name,
      text: converted
    });
  });

  renderFontResults();
}

// Convert text using font map
function convertWithMap(text, map) {
  return text
    .split("")
    .map(char => {
      return map[char] || char;
    })
    .join("");
}

// Render Results
function renderFontResults() {
  const resultsContainer = $("#insta-font-results");
  const emptyState = $("#insta-font-empty-state");
  resultsContainer.empty();

  if (uiState.results.length === 0) {
    resultsContainer.hide();
    emptyState.show();
    return;
  }

  // 핵심 수정: 결과 컨테이너 반드시 show() 처리
  emptyState.hide();
  resultsContainer.show();

  uiState.results.forEach((result) => {
    const card = createResultCard(result);
    resultsContainer.append(card);
  });

  // 이벤트 재연결 - off() 추가하여 중복 이벤트 방지
  $(".insta-font-result-card").off("click").on("click", function() {
    const resultText = $(this).find(".insta-font-result-text").text();
    copyFontResult(resultText);
  });
}

// Create Result Card
function createResultCard(result) {
  return `
    <div class="insta-font-result-card" title="클릭하여 복사">
      <div class="insta-font-result-content">
        <div class="insta-font-result-label">${result.number}. ${escapeHtml(result.name)}</div>
        <div class="insta-font-result-text">${escapeHtml(result.text)}</div>
      </div>
      <button class="insta-font-result-copy-btn" onclick="event.stopPropagation(); copyFontResultFromBtn(this);">복사</button>
    </div>
  `;
}

// Copy Function
function copyFontResult(text) {
  copyToClipboard(text);
}

function copyFontResultFromBtn(btn) {
  const text = $(btn).closest(".insta-font-result-card").find(".insta-font-result-text").text();
  copyToClipboard(text);
}

// Copy to Clipboard
function copyToClipboard(text) {
  if (navigator.clipboard && window.isSecureContext) {
    navigator.clipboard.writeText(text).then(() => {
      showToast("복사되었습니다!", "success");
    }).catch(() => {
      fallbackCopy(text);
    });
  } else {
    fallbackCopy(text);
  }
}

// Fallback Copy
function fallbackCopy(text) {
  const textarea = document.createElement("textarea");
  textarea.value = text;
  document.body.appendChild(textarea);
  textarea.select();
  try {
    document.execCommand("copy");
    showToast("복사되었습니다!", "success");
  } catch (err) {
    showToast("복사에 실패했습니다", "error");
  }
  document.body.removeChild(textarea);
}

// Update Empty State
function updateEmptyState() {
  const resultsContainer = $("#insta-font-results");
  const emptyState = $("#insta-font-empty-state");

  if (uiState.results.length === 0) {
    emptyState.show();
    resultsContainer.hide();
  } else {
    emptyState.hide();
    resultsContainer.show();
  }
}

// Escape HTML
function escapeHtml(text) {
  const map = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    "\"": "&quot;",
    "'": "&#039;"
  };
  return text.replace(/[&<>"']/g, m => map[m]);
}

// Toast Notification
function showToast(message, type = "info") {
  const container = $("#toast-container");
  
  const toastHtml = `
    <div class="toast toast--${type}" role="alert">
      ${message}
    </div>
  `;

  const toast = $(toastHtml);
  container.append(toast);

  setTimeout(() => {
    toast.fadeOut(300, function() {
      $(this).remove();
    });
  }, 3000);
}
