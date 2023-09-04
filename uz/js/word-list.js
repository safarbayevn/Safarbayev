const wordList = [
    {
        word: "mubina",
        hint: "Jozibali, istarasi issiq, lobar, ochiq chehrali, rostgo'y latofatli, zebo qiz."
    },
    {
        word: "imron",
        hint: "Tiriklik, barhayotlik, imonli, e'tiqodli, jasur, ko'p yashovchi. Qur'onda Maryamning otasining ismi hamda Isoning bobosining nomi bo'lgan."
    },
    {
        word: "ali",
        hint: "Eng yuksak, eng ulug', yuqori martabali. Bu nom Muhammad payg'ambarning kuyovining ismidir."
    },
    {
        word: "imona",
        hint: "Ishonch, ishonish, e'tiqod qilish, toat ibodat qilish, sig'inish; imoni, e'tiqodi mustahkam."
    },
    {
        word: "maftuna",
        hint: "Zavqlantiruvchi, maftun etuvchi; chiroyli, jozibali, go'zal, latofatli."
    },
    {
        word: "farrux",
        hint: "Bu ism fors-tojikcha bo'lib, quyidagi ma'nolarga ega: Baxtli, baxtiyor yoki chiroyli, ochiq chehrali."
    },
    {
        word: "madina",
        hint: "Saudiya Arabistonidagi muqaddas shahar, ziyoratgox bo'lgan Madinai Munavvara ismidan olingan ism."
    },
    {
        word: "ruhshona",
        hint: "Nurli, ravshan, porlovchi, hushro'y, zebo, suluv."
    },
    {
        word: "diyora",
        hint: "O'lka, zamin, ona yurtning vafodor, fidokor, elim, yurtim deb yashovchi farzand."
    },
    {
        word: "kamron",
        hint: "Baxtga elituvchi, baxt keltiruvchi. Odamlarni xushnud qilib, quvonch ulashuvchi."
    },
    {
        word: "amir",
        hint: "Hokim, hukmron, yo'lboshchi yoki Amr - hayot, tiriklik."
    },
    {
        word: "gulom",
        hint: "O'tmishda hukmronlar saroyidagi yosh xizmatkor."
    },
    {
        word: "ezoza",
        hint: "Hurmatga, izzat-ikromga, e'zozlanishga sazovor qiz."
    },
    {
        word: "mustafo",
        hint: "Tanlangan, saralab olingan, dovyurak. Bu nom Muhammad SAVning siyratlaridan biridir."
    },
    {
        word: "shohrux",
        hint: "Shohlar avlodidek viqorli, kelishgan, chiroyli yoki shaxmatdagi shoh figurasi ruhi (ladya, to'ra)"
    },
    {
        word: "muslima",
        hint: "Musulmon, xudojo'y ayol, soliha, Allohga itoat etuvchi mo'mina qiz."
    },
    {
        word: "firdavs",
        hint: "Bog', ko'kalamzor, jannat bog'i, jannat, sakkizinchi jannat nomi."
    },
    {
        word: "gulnoza",
        hint: "Gul kabi nafis, nozik yoki nozli, jilvali gul, yohud go`zal va nozli qiz"
    },
    {
        word: "temur",
        hint: "Temirdek mustahkam irodali, mahkam, ya'ni baloqazolarga bardoshli, umri uzoq bola."
    },
    {
        word: "oygul",
        hint: "Oydek suluv, go'zallikda yorqin, guldek zebo, nafis, chiroyli, maftunkor, istarali qiz."
    },
    {
        word: "sora",
        hint: "Bu ism Yahudiycha bo'lib, quyidagi ma'nolarga ega: Tanlangan, saralangan; eng a'lo; yoki toza, pokiza, xolis"
    },
    {
        word: "safar",
        hint: "Safar oyi (musulmon yil hisobining ikkinchi oyi) tug'ilgan bola yoki safar chog'i, yo'lda tug'ilgan bola."
    },
    {
        word: "muyassar",
        hint: "Orzu qilib yurib erishilgan; Alloh erishtirgan, sovg'a qilgan, muyassar qilgan qiz."
    },
    {
        word: "farhod",
        hint: "Aqlli, zukko, fahm-farosatli, dono yigit. Alisher Navoiyning asari qahramonidek tog'ni talqon qiluvchi bo'lsin"
    },
    {
        word: "gozal",
        hint: "Ko'rkam, chiroyli, zebo, suluv, latofatli, jozibali, nazokatli."
    },
    {
        word: "faxriddin",
        hint: "Dinning faxri, iftixori, shavkati, shoniu-sharafi, g'ururi."
    },
    {
        word: "avaz",
        hint: "Avval turmagan bolalarning o'rniga, evaziga kelgan bola."
    },
    {
        word: "jasur",
        hint: "Qaytmas, mard, jur'atli, jasoratli, dovyurak, qo'rqmas, yuragida o'ti bor."
    },
    {
        word: "nilufar",
        hint: "Nilufar (savsan) o'simligidek chiroyli, zebo qiz, o'ziga maftun etuvchi."
    },
    {
        word: "umid",
        hint: "Orzu, umid qilingan, kutilgan yoki yashab ketishga umid qilingan bola."
    },
    {
        word: "guli",
        hint: "“Gul“ so'zi bilan boshlanadigan ba'zi qo'shma ismlarning shakli"
    },
    {
        word: "shavkat",
        hint: "Shon-sharafli, dong'i olamlarga yoyilgan, kuchli, qudratli, irodali, zabardast, kuch-g'ayratli, shijoatli."
    },
    {
        word: "gulnora",
        hint: "Anor gulidek zebo, gul chehrali qiz yoki anor gullaganda tug'ilgan qiz."
    },
    // {
    //     word: "",
    //     hint: ""
    // },
    // {
    //     word: "",
    //     hint: ""
    // },
    // {
    //     word: "",
    //     hint: ""
    // },
    // {
    //     word: "",
    //     hint: ""
    // },
    // {
    //     word: "",
    //     hint: ""
    // },
    // {
    //     word: "",
    //     hint: ""
    // },
    // {
    //     word: "",
    //     hint: ""
    // },
    // {
    //     word: "",
    //     hint: ""
    // },
    // {
    //     word: "",
    //     hint: ""
    // },
    // {
    //     word: "",
    //     hint: ""
    // },
    // {
    //     word: "",
    //     hint: ""
    // },
    // {
    //     word: "",
    //     hint: ""
    // },
    // {
    //     word: "",
    //     hint: ""
    // },
    // {
    //     word: "",
    //     hint: ""
    // },
    // {
    //     word: "",
    //     hint: ""
    // },
    // {
    //     word: "",
    //     hint: ""
    // },
    // {
    //     word: "",
    //     hint: ""
    // },
    // {
    //     word: "",
    //     hint: ""
    // },
    // {
    //     word: "",
    //     hint: ""
    // },
    // {
    //     word: "",
    //     hint: ""
    // },
    // {
    //     word: "",
    //     hint: ""
    // },
    // {
    //     word: "",
    //     hint: ""
    // },
    // {
    //     word: "",
    //     hint: ""
    // },
    // {
    //     word: "",
    //     hint: ""
    // },
    // {
    //     word: "",
    //     hint: ""
    // },
    // {
    //     word: "",
    //     hint: ""
    // },
    // {
    //     word: "",
    //     hint: ""
    // },
    // {
    //     word: "",
    //     hint: ""
    // },
    // {
    //     word: "",
    //     hint: ""
    // },
    // {
    //     word: "",
    //     hint: ""
    // },
    // {
    //     word: "",
    //     hint: ""
    // },
    // {
    //     word: "",
    //     hint: ""
    // },
    // {
    //     word: "",
    //     hint: ""
    // },
]