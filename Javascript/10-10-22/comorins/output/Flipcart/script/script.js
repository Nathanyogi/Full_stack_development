let best_offer = {
    electronics :[{
        img:"https://rukminim1.flixcart.com/image/200/200/knyxqq80/dslr-camera/r/y/x/digital-camera-eos-m50-mark-ii-eos-m50-mark-ii-canon-original-imag2gzkexzqhyhu.jpeg?q=70",
        device:"camera",
        price:"3999",
        brands:"Canon,sony,"
    },
    {
        img:"https://rukminim1.flixcart.com/image/200/200/printer/j/j/y/hp-laserjet-m1005-multifunction-original-imadxhzpeb9qbrfg.jpeg?q=70",
        device:"printers",
        price:"5000",
        brands:"HP"
    },
    {
        img:"https://rukminim1.flixcart.com/image/200/200/ktszgy80/monitor/b/b/5/ed320qr-full-hd-um-je0ss-p01-acer-original-imag72hyazezew4b.jpeg?q=70",
        device:"Monitors",
        price:"7500",
        brands:"Lenovo"
    },
    {
        img:"https://rukminim1.flixcart.com/image/200/200/l5jxt3k0/power-bank/b/p/m/power-bank-3-pd-22-5w-10000-rtx2108-realme-original-imagg7jckgt9zgag.jpeg?q=70",
        device:"Power Bank",
        price:"2000",
        brands:"Mi,Realme"
    },
    {
        img:"https://rukminim1.flixcart.com/image/200/200/xif0q/projector/e/p/v/k9-pro-android-fhd-1080p-10-pre007-full-hd-egate-original-imagg9k9zauxwrfj.jpeg?q=70",
        device:"Projector",
        price:"6990",
        brands:"Vega,Philips & More"
    },
    ],
    beauty_food_toys:[
        {
            img:"https://rukminim1.flixcart.com/image/200/200/l4d2ljk0/bat/3/4/4/1000-hitman-full-size-double-blade-poplar-cricket-bat-advance-original-imagf9zzgxxfamce.jpeg?q=70",
            product:"Cricket,Football & More",
            Discount:"70%",
            brands:"Ceat,Nivia",
        },
        {
            img:"https://rukminim1.flixcart.com/image/200/200/l2qhjm80/musical-keyboard/o/q/n/100-bigfun-37-key-piano-keyboard-toy-with-dc-power-niveeka-original-imageys6jwkgs4kw.jpeg?q=70",
            product:"Musical Keyboard",
            Discount:"70%",
            brands:"Beston,Redbox & More",
        },
        {
            img:"https://rukminim1.flixcart.com/image/200/200/j3xbzww0/face-wash/4/4/s/150-purifying-neem-face-wash-himalaya-original-imaeuyfzgdmythzw.jpeg?q=70",
            product:"Skincare",
            Discount:"40%",
            brands:"Himalaya,MamaEarth & More",
        },
        {
            img:"https://rukminim1.flixcart.com/image/200/200/klzhq4w0/jam-spread/w/q/u/510-chocolate-peanut-butter-crunchy-510g-jar-nut-butter-original-imagyzpqqfaguxny.jpeg?q=70",
            product:"Food Spreads",
            Discount:"75%",
            brands:"Myfiness,Alpino & More",
        },
    ]
}
function createkey(key){
    if(! localStorage.getItem(key)){
        localStorage.setItem(key,JSON.stringify([]))
    }
}
createKey("top_offer")