// ==========================================
// TOY HAVEN - PRODUCTS PAGE
// ==========================================


// ==========================================
// PRODUCT DATA
// ==========================================

const products = [

    // ==========================
    // FIGURINES
    // ==========================

    {
        id: 1,
        name: "Disney Toy Story Ultimate Action Buzz Lightyear Interactive Toy",
        category: "Figurines",
        subcategory: "Movie Characters",
        price: 6650,
        originalPrice: null,
        onSale: false,
        preOrder: false,
        image: "images/products/1.png",
        description: "An interactive Buzz Lightyear action toy inspired by Disney and Pixar's Toy Story."
    },

    {
        id: 2,
        name: "Beyblade X Soar Phoenix 9-60GF Deluxe String Launcher Set",
        category: "Toys",
        subcategory: "Beyblade",
        price: 4600,
        originalPrice: null,
        onSale: false,
        preOrder: false,
        image: "images/products/2.png",
        description: "Beyblade X Soar Phoenix 9-60GF Deluxe String Launcher Set."
    },

    {
        id: 3,
        name: "Mighty Megasaur",
        category: "Toys",
        subcategory: "",
        price: 4900,
        originalPrice: null,
        onSale: false,
        preOrder: false,
        image: "images/products/3.png",
        description: "Mighty Megasaur MegaHunter Dinosaur Tyrannosaurus Rex 26cm"
    },


    {
        id: 4,
        name: "Lightning McQueen Die-Cast Car",
        category: "Toys",
        subcategory: "Diecast Cars",
        price: 2300,
        originalPrice: null,
        onSale: false,
        preOrder: false,
        image: "images/products/4.png",
        description: "A Disney Pixar Cars toy inspired by the popular Cars movie series."
    },

    {
        id: 5,
        name: "Fidget Spinner - Volcano",
        category: "Toys",
        subcategory: "Fidget Spinners",
        price: 1340,
        originalPrice: null,
        onSale: false,
        preOrder: false,
        image: "images/products/5.png",
        description: "A volcano-inspired fidget spinner designed for fun and satisfying spinning."
    },

    {
        id: 6,
        name: "Pokémon Sleeping Snorlax Plush 45cm",
        category: "Toys",
        subcategory: "Pokémon",
        price: 11200,
        originalPrice: null,
        onSale: false,
        preOrder: false,
        image: "images/products/6.png",
        description: "A 45cm Pokémon Snorlax plush toy, perfect for Pokémon fans and collectors."
    },

    {
        id: 7,
        name: "Demon Hunters Plush Derpy Tiger",
        category: "Toys",
        subcategory: "",
        price: 7000,
        originalPrice: null,
        onSale: false,
        preOrder: false,
        image: "images/products/7.png",
        description: "A 30cm Derpy Tiger plush inspired by Netflix's KPop Demon Hunters."
    },

    {
        id: 8,
        name: "Lamborghini Huracan Remote Control Car",
        category: "Toys",
        subcategory: "Diecast Cars",
        price: 12000,
        originalPrice: null,
        onSale: false,
        preOrder: false,
        image: "images/products/8.png",
        description: "A Lamborghini Huracan remote control car designed for exciting racing and imaginative play."
    },

    {
        id: 9,
        name: "One Piece Action Figure Monkey D. Luffy",
        category: "Figurines",
        subcategory: "Anime",
        price: 6000,
        originalPrice: null,
        onSale: false,
        preOrder: false,
        image: "images/products/9.png",
        description: "A Monkey D. Luffy action figure inspired by the One Piece anime series."
    },
    {
        id: 10,
        name: "Batman Action Figure",
        category: "Figurines",
        subcategory: "Movie Characters",
        price: 7500,
        originalPrice: null,
        onSale: false,
        preOrder: false,
        image: "images/products/10.png",
        description: "A Batman action figure for superhero fans and collectors."
    },


    // ==========================
    // BOARD GAMES
    // ==========================

    {
        id: 11,
        name: "Platform 9 3/4 Snow Globe",
        category: "Figurines",
        subcategory: "Movie Characters",
        price: 8500,
        originalPrice: null,
        onSale: false,
        preOrder: false,
        image: "images/products/11.png",
        description: "A Harry Potter Platform 9 3/4 snow globe collectible, perfect for fans and collectors."
    },

    {
        id: 12,
        name: "Mario Figure with Boomerang",
        category: "Figurines",
        subcategory: "Gaming Characters",
        price: 6500,
        originalPrice: null,
        onSale: false,
        preOrder: false,
        image: "images/products/12.png",
        description: "A Super Mario figure featuring Mario with his signature boomerang."
    },

    {
        id: 13,
        name: "Rey Mysterio",
        category: "Figurines",
        subcategory: "WWE",
        price: 7000,
        originalPrice: null,
        onSale: false,
        preOrder: false,
        image: "images/products/13.png",
        description: "A Rey Mysterio collectible figure inspired by the legendary WWE superstar."
    },
    {
        id: 14,
        name: "3D Dragon Chess Set",
        category: "Board Games",
        subcategory: "Chess",
        price: 9500,
        originalPrice: null,
        onSale: false,
        preOrder: false,
        image: "images/products/14.png",
        description: "A 3D dragon-themed chess set designed for an exciting and visually striking chess experience."
    },
    {
        id: 15,
        name: "Pokémon Trading Cards 30th Year Edition",
        category: "Board Games",
        subcategory: "Pokémon Cards",
        price: 12500,
        originalPrice: null,
        onSale: false,
        preOrder: false,
        image: "images/products/15.png",
        description: "A special Pokémon Trading Cards 30th Year Edition collection for Pokémon fans and card collectors."
    },
    {
        id: 16,
        name: "Monopoly Nordic Edition",
        category: "Board Games",
        subcategory: "Monopoly",
        price: 10500,
        originalPrice: null,
        onSale: false,
        preOrder: false,
        image: "images/products/16.png",
        description: "Monopoly Nordic Edition featuring a Nordic-themed board and gameplay."
    },
    {
        id: 17,
        name: "Scrabble Aura Edition",
        category: "Board Games",
        subcategory: "Scrabble",
        price: 9000,
        originalPrice: null,
        onSale: false,
        preOrder: false,
        image: "images/products/17.png",
        description: "Scrabble Aura Edition, a stylish word game for family and friends."
    },
    {
        id: 18,
        name: "Cluedo Luxury Edition",
        category: "Board Games",
        subcategory: "Cluedo",
        price: 11500,
        originalPrice: null,
        onSale: false,
        preOrder: false,
        image: "images/products/18.png",
        description: "Cluedo Luxury Edition, a premium mystery board game for family and friends."
    },
    {
        id: 19,
        name: "The Game of Life",
        category: "Board Games",
        subcategory: "Game of Life",
        price: 9500,
        originalPrice: null,
        onSale: false,
        preOrder: false,
        image: "images/products/19.png",
        description: "The Game of Life board game featuring an entertaining journey through different stages of life."
    },
    {
        id: 20,
        name: "Battleship Vintage Bookshelf Edition",
        category: "Board Games",
        subcategory: "Battleship",
        price: 12000,
        originalPrice: null,
        onSale: false,
        preOrder: false,
        image: "images/products/20.png",
        description: "Battleship Vintage Bookshelf Edition, a classic naval strategy game presented in a stylish bookshelf design."
    },
    {
        id: 21,
        name: "UNO Show 'Em No Mercy Extreme",
        category: "Board Games",
        subcategory: "UNO",
        price: 6500,
        originalPrice: null,
        onSale: false,
        preOrder: false,
        image: "images/products/21.png",
        description: "UNO Show 'Em No Mercy Extreme, an intense and fast-paced card game for family and friends."
    },
    {
        id: 22,
        name: "Connect 4",
        category: "Board Games",
        subcategory: "Connect Four",
        price: 5500,
        originalPrice: null,
        onSale: false,
        preOrder: false,
        image: "images/products/22.png",
        description: "Connect 4, a classic two-player strategy game where players compete to connect four discs in a row."
    },
    {
        id: 23,
        name: "NERF Gun",
        category: "Toys",
        subcategory: "Roleplays",
        price: 5500,
        originalPrice: null,
        onSale: false,
        preOrder: false,
        image: "images/products/23.png",
        description: "NERF is back with new edition"
    },
    {
        id: 24,
        name: "Hot Wheels City Ultimate T-Rex Garage Playset",
        category: "Toys",
        subcategory: "HotWheels",
        price: 18500,
        originalPrice: null,
        onSale: false,
        preOrder: false,
        image: "images/products/24.png",
        description: "Hot Wheels City Ultimate T-Rex Garage Playset featuring an exciting dinosaur-themed garage for imaginative play."
    },
    {
        id: 25,
        name: "Star Wars Light Saber",
        category: "Toys",
        subcategory: "Roleplays",
        price: 5500,
        originalPrice: null,
        onSale: false,
        preOrder: false,
        image: "images/products/25.png",
        description: "Star Wars Lightsaber Forge Electronic Kyber Core "
    },
    {
        id: 26,
        name: "Harry Potter Wand",
        category: "Toys",
        subcategory: "Roleplays",
        price: 6700,
        originalPrice: null,
        onSale: false,
        preOrder: false,
        image: "images/products/26.png",
        description: "Wizarding World Lumos Wand Harry 35.5cm "
    },
    {
        id: 27,
        name: "LEGO Classic 10698 Large Creative Brick Box Classic Building Bricks Set",
        category: "Toys",
        subcategory: "LEGO",
        price: 16500,
        originalPrice: null,
        onSale: false,
        preOrder: false,
        image: "images/products/27.png",
        description: "LEGO Classic 10698 Large Creative Brick Box with a variety of classic building bricks for creative construction and imaginative play."
    },
    {
        id: 28,
        name: "Barbie Signature Doll Marilyn Monroe",
        category: "Toys",
        subcategory: "Barbie",
        price: 15000,
        originalPrice: null,
        onSale: false,
        preOrder: false,
        image: "images/products/28.png",
        description: "Barbie Signature Doll inspired by the iconic Marilyn Monroe, designed for collectors and Barbie fans."
    },
    {
        id: 29,
        name: "Barbie Playset",
        category: "Toys",
        subcategory: "Barbie",
        price: 13500,
        originalPrice: null,
        onSale: false,
        preOrder: false,
        image: "images/products/29.png",
        description: "A Barbie playset designed for imaginative play and creative storytelling."
    },
    {
        id: 30,
        name: "FC 27 - PS5",
        category: "Gaming Consoles",
        subcategory: "CDs",
        price: 14500,
        originalPrice: null,
        onSale: false,
        preOrder: false,
        image: "images/products/30.png",
        description: "EA Sports FC 27 for PlayStation 5."
    },
    {
        id: 31,
        name: "PlayStation Gift Card",
        category: "Gaming Consoles",
        subcategory: "PS Points",
        price: 27000,
        originalPrice: null,
        onSale: false,
        preOrder: false,
        image: "images/products/31.png",
        description: "A PlayStation gift card that can be used to purchase games, add-ons, and other digital content."
    },
    {
        id: 32,
        name: "PlayStation 5 Digital Edition – Marvel's Wolverine Battle Limited Edition Bundle",
        category: "Gaming Consoles",
        subcategory: "Game Devices",
        price: 250000,
        originalPrice: null,
        onSale: false,
        preOrder: false,
        image: "images/products/32.png",
        description: "A limited-edition PlayStation 5 Digital Edition bundle inspired by Marvel's Wolverine."
    },
    {
        id: 33,
        name: "Sonic the Hedgehog Figure",
        category: "Figurines",
        subcategory: "Gaming Characters",
        price: 7500,
        originalPrice: null,
        onSale: false,
        preOrder: false,
        image: "images/products/33.png",
        description: "A Sonic the Hedgehog collectible figure inspired by the popular video game character."
    },
    {
        id: 34,
        name: "Beyblade X CX",
        category: "Toys",
        subcategory: "Beyblade",
        price: 5500,
        originalPrice: null,
        onSale: false,
        preOrder: false,
        image: "images/products/34.png",
        description: "Beyblade X CX spinning top toy designed for exciting battles and competitive play."
    },
    {
        id: 35,
        name: "Beyblade X X-treme Expansion Pack",
        category: "Toys",
        subcategory: "Beyblade",
        price: 7500,
        originalPrice: null,
        onSale: false,
        preOrder: false,
        image: "images/products/35.png",
        description: "Beyblade X X-treme Expansion Pack designed for exciting Beyblade battles and competitive play."
    },
    {
        id: 36,
        name: "Beyblade X Cobalt Dragoon 2-60C Deluxe String Launcher Set",
        category: "Toys",
        subcategory: "Beyblade",
        price: 8500,
        originalPrice: null,
        onSale: false,
        preOrder: false,
        image: "images/products/36.png",
        description: "Beyblade X Cobalt Dragoon 2-60C Deluxe String Launcher Set designed for exciting Beyblade X battles."
    },
    {
        id: 37,
        name: "Beyblade X Clip & Rip Launcher Set",
        category: "Toys",
        subcategory: "Beyblade",
        price: 5500,
        originalPrice: null,
        onSale: false,
        preOrder: false,
        image: "images/products/37.png",
        description: "Beyblade X Clip & Rip Launcher Set designed for quick launches and exciting Beyblade battles."
    },
    {
        id: 38,
        name: "Beyblade X Deluxe Launcher 2 Pack",
        category: "Toys",
        subcategory: "Beyblade",
        price: 6500,
        originalPrice: null,
        onSale: false,
        preOrder: false,
        image: "images/products/38.png",
        description: "Beyblade X Deluxe Launcher 2 Pack featuring two launchers for exciting Beyblade battles."
    },
    {
        id: 39,
        name: "Disney Toy Story Slinky Dog",
        category: "Toys",
        subcategory: "Movie Characters",
        price: 4500,
        originalPrice: null,
        onSale: false,
        preOrder: false,
        image: "images/products/39.png",
        description: "Disney Toy Story Slinky Dog toy inspired by the beloved Toy Story character."
    },
    {
        id: 40,
        name: "Disney Toy Story Ultimate Action Woody Interactive Toy",
        category: "Figurines",
        subcategory: "Movie Characters",
        price: 6650,
        originalPrice: null,
        onSale: false,
        preOrder: false,
        image: "images/products/40.png",
        description: "Disney Toy Story Ultimate Action Woody Interactive Toy inspired by the beloved Toy Story character."
    },
    {
    id: 41,
        name: "Godzilla Figure",
        category: "Figurines",
        subcategory: "Movie Characters",
        price: 8500,
        originalPrice: null,
        onSale: false,
        preOrder: false,
        image: "images/products/41.png",
        description: "Godzilla collectible figure inspired by the legendary giant monster."
    },
    {
        id: 42,
        name: "Assassin’s Creed Ezio 7' Action Figure",
        category: "Figurines",
        subcategory: "Gaming Characters",
        price: 9500,
        originalPrice: null,
        onSale: false,
        preOrder: false,
        image: "images/products/42.png",
        description: "Assassin’s Creed Ezio action figure inspired by the iconic video game character."
    },
    {
        id: 43,
        name: "Back to the Future Ultimate Marty McFly Audition Figure Replica",
        category: "Figurines",
        subcategory: "Movie Characters",
        price: 12500,
        originalPrice: null,
        onSale: false,
        preOrder: false,
        image: "images/products/43.png",
        description: "Back to the Future Ultimate Marty McFly figure replica inspired by the iconic movie character."
    },
    {
        id: 44,
        name: "Batman Earth 2 DC Comics Figure",
        category: "Figurines",
        subcategory: "Movie Characters",
        price: 9000,
        originalPrice: null,
        onSale: false,
        preOrder: false,
        image: "images/products/44.png",
        description: "Batman Earth 2 figure inspired by the iconic DC Comics superhero."
    },
    {
        id: 45,
        name: "Boss Fight Studio Popeye Classic",
        category: "Figurines",
        subcategory: "Movie Characters",
        price: 8500,
        originalPrice: null,
        onSale: false,
        preOrder: false,
        image: "images/products/45.png",
        description: "Boss Fight Studio Popeye Classic figurine inspired by the iconic cartoon character."
    },
    {
        id: 46,
        name: "Chucky Ultimate TV Series Action Figures",
        category: "Figurines",
        subcategory: "Series Characters",
        price: 10500,
        originalPrice: null,
        onSale: false,
        preOrder: false,
        image: "images/products/46.png",
        description: "Chucky Ultimate action figures inspired by the iconic character from the Chucky TV series."
    },
    {
        id: 47,
        name: "Conjuring Universe Annabelle Comes Home Figure",
        category: "Figurines",
        subcategory: "Movie Characters",
        price: 9500,
        originalPrice: null,
        onSale: false,
        preOrder: false,
        image: "images/products/47.png",
        description: "Annabelle figure inspired by the iconic character from The Conjuring Universe and Annabelle Comes Home."
    },
    {
        id: 48,
        name: "Crossbones Marvel Figure",
        category: "Figurines",
        subcategory: "Movie Characters",
        price: 9000,
        originalPrice: null,
        onSale: false,
        preOrder: false,
        image: "images/products/48.png",
        description: "Crossbones Marvel figure inspired by the iconic Marvel character."
    },
    {
        id: 49,
        name: "Dawn of the Planet of the Apes Caesar Action Figure",
        category: "Figurines",
        subcategory: "Movie Characters",
        price: 11000,
        originalPrice: null,
        onSale: false,
        preOrder: false,
        image: "images/products/49.png",
        description: "Caesar action figure inspired by the iconic character from Dawn of the Planet of the Apes."
    },
    {
        id: 50,
        name: "Deadpool Legacy Collection Action Figure",
        category: "Figurines",
        subcategory: "Movie Characters",
        price: 9500,
        originalPrice: null,
        onSale: false,
        preOrder: false,
        image: "images/products/50.png",
        description: "Deadpool Legacy Collection action figure inspired by the iconic Marvel character."
    },
    {
        id: 51,
        name: "Heath Ledger Joker Figure",
        category: "Figurines",
        subcategory: "Movie Characters",
        price: 12000,
        originalPrice: null,
        onSale: false,
        preOrder: false,
        image: "images/products/51.png",
        description: "Joker figure inspired by Heath Ledger's iconic portrayal in The Dark Knight."
    },
    {
        id: 52,
        name: "Justice League Cyborg Figure",
        category: "Figurines",
        subcategory: "Movie Characters",
        price: 9500,
        originalPrice: null,
        onSale: false,
        preOrder: false,
        image: "images/products/52.png",
        description: "Cyborg figure inspired by the iconic DC Comics superhero from the Justice League."
    },
    {
        id: 53,
        name: "Justice League Wonder Woman Figure",
        category: "Figurines",
        subcategory: "Movie Characters",
        price: 9500,
        originalPrice: null,
        onSale: false,
        preOrder: false,
        image: "images/products/53.png",
        description: "Wonder Woman figure inspired by the iconic DC Comics superhero from the Justice League."
    },
    {
        id: 54,
        name: "Suicide Squad Harley Quinn Figure",
        category: "Figurines",
        subcategory: "Movie Characters",
        price: 9500,
        originalPrice: null,
        onSale: false,
        preOrder: false,
        image: "images/products/54.png",
        description: "Harley Quinn figure inspired by the iconic DC Comics character from Suicide Squad."
    },
    {
        id: 55,
        name: "Superman Action Figure",
        category: "Figurines",
        subcategory: "Movie Characters",
        price: 9500,
        originalPrice: null,
        onSale: false,
        preOrder: false,
        image: "images/products/55.png",
        description: "Superman action figure inspired by the iconic DC Comics superhero."
    },
    {
        id: 56,
        name: "Freddy Krueger Nightmare on Elm Street Figure",
        category: "Figurines",
        subcategory: "Movie Characters",
        price: 10000,
        originalPrice: null,
        onSale: false,
        preOrder: false,
        image: "images/products/56.png",
        description: "Freddy Krueger figure inspired by the iconic character from A Nightmare on Elm Street."
    },
    {
        id: 57,
        name: "Game of Thrones Viserion Ice Dragon",
        category: "Figurines",
        subcategory: "Series Characters",
        price: 11000,
        originalPrice: null,
        onSale: false,
        preOrder: false,
        image: "images/products/57.png",
        description: "Viserion Ice Dragon figurine inspired by the iconic dragon from Game of Thrones."
    },
    {
        id: 58,
        name: "Game of Thrones Daenerys Targaryen",
        category: "Figurines",
        subcategory: "Series Characters",
        price: 11000,
        originalPrice: null,
        onSale: false,
        preOrder: false,
        image: "images/products/58.png",
        description: "Daenerys Targaryen figurine inspired by the iconic character from Game of Thrones."
    },
    {
        id: 59,
        name: "Rocket Raccoon Figure",
        category: "Figurines",
        subcategory: "Movie Characters",
        price: 9000,
        originalPrice: null,
        onSale: false,
        preOrder: false,
        image: "images/products/59.png",
        description: "Rocket Raccoon figurine inspired by the iconic Marvel character from the Guardians of the Galaxy films."
    },
    {
        id: 60,
        name: "Ghost Rider Figure",
        category: "Figurines",
        subcategory: "Movie Characters",
        price: 9000,
        originalPrice: null,
        onSale: false,
        preOrder: false,
        image: "images/products/60.png",
        description: "Ghost Rider figurine inspired by the iconic Marvel character."
    },
    {
        id: 61,
        name: "Halo Infinite 1/12 Scale Master Chief Mjolnir Mark VI",
        category: "Figurines",
        subcategory: "Gaming Characters",
        price: 18000,
        originalPrice: null,
        onSale: false,
        preOrder: false,
        image: "images/products/61.png",
        description: "Halo Infinite 1/12 scale Master Chief Mjolnir Mark VI figurine inspired by the iconic Halo video game character."
    },
    {
        id: 62,
        name: "Hulk Figure",
        category: "Figurines",
        subcategory: "Movie Characters",
        price: 10000,
        originalPrice: null,
        onSale: false,
        preOrder: false,
        image: "images/products/62.png",
        description: "Hulk figurine inspired by the iconic Marvel superhero."
    },
    {
        id: 63,
        name: "John Wick Figure",
        category: "Figurines",
        subcategory: "Movie Characters",
        price: 11000,
        originalPrice: null,
        onSale: false,
        preOrder: false,
        image: "images/products/63.png",
        description: "John Wick figurine inspired by the iconic character from the John Wick film series."
    },
    {
        id: 64,
        name: "Attack on Titan Eren Jaeger Figure",
        category: "Figurines",
        subcategory: "Anime",
        price: 10500,
        originalPrice: null,
        onSale: false,
        preOrder: false,
        image: "images/products/64.png",
        description: "Eren Jaeger figurine inspired by the iconic character from Attack on Titan."
    },
    {
        id: 65,
        name: "Jujutsu Kaisen Ryomen Sukuna Figure",
        category: "Figurines",
        subcategory: "Anime",
        price: 10500,
        originalPrice: null,
        onSale: false,
        preOrder: false,
        image: "images/products/65.png",
        description: "Ryomen Sukuna figurine inspired by the powerful character from Jujutsu Kaisen."
    },
    {
        id: 66,
        name: "Gojo Satoru Figure",
        category: "Figurines",
        subcategory: "Anime",
        price: 10500,
        originalPrice: null,
        onSale: false,
        preOrder: false,
        image: "images/products/66.png",
        description: "Gojo Satoru figurine inspired by the iconic character from Jujutsu Kaisen."
    },
    {
        id: 67,
        name: "Yuji Itadori Figure",
        category: "Figurines",
        subcategory: "Anime",
        price: 10500,
        originalPrice: null,
        onSale: false,
        preOrder: false,
        image: "images/products/67.png",
        description: "Yuji Itadori figurine inspired by the main character from Jujutsu Kaisen."
    },
    {
        id: 68,
        name: "Doctor Doom Figure",
        category: "Figurines",
        subcategory: "Movie Characters",
        price: 10000,
        originalPrice: null,
        onSale: false,
        preOrder: false,
        image: "images/products/68.png",
        description: "Doctor Doom figurine inspired by the iconic Marvel supervillain."
    },
    {
        id: 69,
        name: "Jokerized Batman Figure",
        category: "Figurines",
        subcategory: "Movie Characters",
        price: 10000,
        originalPrice: null,
        onSale: false,
        preOrder: false,
        image: "images/products/69.png",
        description: "Jokerized Batman figurine featuring a unique fusion of Batman and Joker-inspired design."
    },
    {
        id: 70,
        name: "Super Saiyan Figure",
        category: "Figurines",
        subcategory: "Anime",
        price: 10500,
        originalPrice: null,
        onSale: false,
        preOrder: false,
        image: "images/products/70.png",
        description: "Super Saiyan figurine inspired by the iconic Dragon Ball anime series."
    },
    {
        id: 71,
        name: "Goku Figure",
        category: "Figurines",
        subcategory: "Anime",
        price: 10500,
        originalPrice: null,
        onSale: false,
        preOrder: false,
        image: "images/products/71.png",
        description: "Goku figurine inspired by the iconic Dragon Ball anime series."
    },
    {
        id: 72,
        name: "Monkey D. Luffy Gear 5 Figure",
        category: "Figurines",
        subcategory: "Anime",
        price: 11000,
        originalPrice: null,
        onSale: false,
        preOrder: false,
        image: "images/products/72.png",
        description: "Monkey D. Luffy Gear 5 figurine inspired by the iconic One Piece anime character."
    },
    {
        id: 73,
        name: "Leonardo Ninja Turtle Figure",
        category: "Figurines",
        subcategory: "Movie Characters",
        price: 9000,
        originalPrice: null,
        onSale: false,
        preOrder: false,
        image: "images/products/73.png",
        description: "Leonardo figurine inspired by the iconic Teenage Mutant Ninja Turtles character."
    },
    {
        id: 74,
        name: "Goldberg WWE Figure",
        category: "Figurines",
        subcategory: "WWE",
        price: 9500,
        originalPrice: null,
        onSale: false,
        preOrder: false,
        image: "images/products/74.png",
        description: "Goldberg figurine inspired by the legendary WWE wrestler."
    },
    {
        id: 75,
        name: "Bret Hart WWE Figure",
        category: "Figurines",
        subcategory: "WWE",
        price: 9500,
        originalPrice: null,
        onSale: false,
        preOrder: false,
        image: "images/products/75.png",
        description: "Bret Hart figurine inspired by the legendary WWE wrestler."
    },
    {
        id: 76,
        name: "John Cena WWE Figure",
        category: "Figurines",
        subcategory: "WWE",
        price: 9500,
        originalPrice: null,
        onSale: false,
        preOrder: false,
        image: "images/products/76.png",
        description: "John Cena figurine inspired by the legendary WWE wrestler."
    },
    {
        id: 77,
        name: "Stone Cold Steve Austin WWE Figure",
        category: "Figurines",
        subcategory: "WWE",
        price: 9500,
        originalPrice: null,
        onSale: false,
        preOrder: false,
        image: "images/products/77.png",
        description: "Stone Cold Steve Austin figurine inspired by the legendary WWE wrestler."
    },
    {
        id: 78,
        name: "Roman Reigns WWE Figure",
        category: "Figurines",
        subcategory: "WWE",
        price: 9500,
        originalPrice: null,
        onSale: false,
        preOrder: false,
        image: "images/products/78.png",
        description: "Roman Reigns figurine inspired by the legendary WWE wrestler."
    },
    {
        id: 79,
        name: "Dustin Henderson Stranger Things Figure",
        category: "Figurines",
        subcategory: "Series Characters",
        price: 9500,
        originalPrice: null,
        onSale: false,
        preOrder: false,
        image: "images/products/79.png",
        description: "Dustin Henderson figurine inspired by the iconic character from the Stranger Things series."
    },
    {
        id: 80,
        name: "Lucas Sinclair Stranger Things Figure",
        category: "Figurines",
        subcategory: "Series Characters",
        price: 9500,
        originalPrice: null,
        onSale: false,
        preOrder: false,
        image: "images/products/80.png",
        description: "Lucas Sinclair figurine inspired by the iconic character from the Stranger Things series."
    },
    {
        id: 81,
        name: "Jim Hopper Stranger Things Figure",
        category: "Figurines",
        subcategory: "Series Characters",
        price: 9500,
        originalPrice: null,
        onSale: false,
        preOrder: false,
        image: "images/products/81.png",
        description: "Jim Hopper figurine inspired by the iconic character from the Stranger Things series."
    },
    {
        id: 82,
        name: "Will Byers Stranger Things Figure",
        category: "Figurines",
        subcategory: "Series Characters",
        price: 9500,
        originalPrice: null,
        onSale: false,
        preOrder: false,
        image: "images/products/82.png",
        description: "Will Byers figurine inspired by the iconic character from the Stranger Things series."
    },
    {
        id: 83,
        name: "Mike Wheeler Stranger Things Figure",
        category: "Figurines",
        subcategory: "Series Characters",
        price: 9500,
        originalPrice: null,
        onSale: false,
        preOrder: false,
        image: "images/products/83.png",
        description: "Mike Wheeler figurine inspired by the iconic character from the Stranger Things series."
    },
    {
        id: 84,
        name: "Demogorgon Stranger Things Figure",
        category: "Figurines",
        subcategory: "Series Characters",
        price: 10500,
        originalPrice: null,
        onSale: false,
        preOrder: false,
        image: "images/products/84.png",
        description: "Demogorgon figurine inspired by the iconic creature from the Stranger Things series."
    },
    {
        id: 85,
        name: "Eleven Stranger Things Figure",
        category: "Figurines",
        subcategory: "Series Characters",
        price: 9500,
        originalPrice: null,
        onSale: false,
        preOrder: false,
        image: "images/products/85.png",
        description: "Eleven figurine inspired by the iconic character from the Stranger Things series."
    },
    {
        id: 86,
        name: "Vecna Stranger Things Figure",
        category: "Figurines",
        subcategory: "Series Characters",
        price: 10500,
        originalPrice: null,
        onSale: false,
        preOrder: false,
        image: "images/products/86.png",
        description: "Vecna figurine inspired by the iconic character from the Stranger Things series."
    },
    {
        id: 87,
        name: "Severus Snape Harry Potter Figure",
        category: "Figurines",
        subcategory: "Movie Characters",
        price: 10000,
        originalPrice: null,
        onSale: false,
        preOrder: false,
        image: "images/products/87.png",
        description: "Severus Snape figurine inspired by the iconic character from the Harry Potter film series."
    },
    {
        id: 88,
        name: "Lord Voldemort Harry Potter Figure",
        category: "Figurines",
        subcategory: "Movie Characters",
        price: 10000,
        originalPrice: null,
        onSale: false,
        preOrder: false,
        image: "images/products/88.png",
        description: "Lord Voldemort figurine inspired by the iconic character from the Harry Potter film series."
    },
    {
        id: 89,
        name: "Draco Malfoy Harry Potter Figure",
        category: "Figurines",
        subcategory: "Movie Characters",
        price: 10000,
        originalPrice: null,
        onSale: false,
        preOrder: false,
        image: "images/products/89.png",
        description: "Draco Malfoy figurine inspired by the iconic character from the Harry Potter film series."
    },
    {
        id: 90,
        name: "Sirius Black Harry Potter Figure",
        category: "Figurines",
        subcategory: "Movie Characters",
        price: 10000,
        originalPrice: null,
        onSale: false,
        preOrder: false,
        image: "images/products/90.png",
        description: "Sirius Black figurine inspired by the iconic character from the Harry Potter film series."
    },
    {
        id: 91,
        name: "Hermione Granger Harry Potter Figure",
        category: "Figurines",
        subcategory: "Movie Characters",
        price: 10000,
        originalPrice: null,
        onSale: false,
        preOrder: false,
        image: "images/products/91.png",
        description: "Hermione Granger figurine inspired by the iconic character from the Harry Potter film series."
    },
    {
        id: 92,
        name: "Albus Dumbledore Harry Potter Figure",
        category: "Figurines",
        subcategory: "Movie Characters",
        price: 10000,
        originalPrice: null,
        onSale: false,
        preOrder: false,
        image: "images/products/92.png",
        description: "Albus Dumbledore figurine inspired by the iconic character from the Harry Potter film series."
    },
    {
        id: 93,
        name: "Harry Potter Figure",
        category: "Figurines",
        subcategory: "Movie Characters",
        price: 10000,
        originalPrice: null,
        onSale: false,
        preOrder: false,
        image: "images/products/93.png",
        description: "Harry Potter figurine inspired by the iconic character from the Harry Potter film series."
    },
    {
        id: 94,
        name: "Jon Snow Game of Thrones Figure",
        category: "Figurines",
        subcategory: "Series Characters",
        price: 11000,
        originalPrice: null,
        onSale: false,
        preOrder: false,
        image: "images/products/94.png",
        description: "Jon Snow figurine inspired by the iconic character from the Game of Thrones series."
    },
    {
        id: 95,
        name: "Barbie Dreamtopia Doll Unicorn Pink",
        category: "Toys",
        subcategory: "Barbie",
        price: 7500,
        originalPrice: null,
        onSale: false,
        preOrder: false,
        image: "images/products/95.png",
        description: "Barbie Dreamtopia Unicorn Doll in pink, inspired by magical fantasy play and storytelling."
    },
    {
        id: 96,
        name: "Barbie Limitless Adventure Malibu Barbie Doll",
        category: "Toys",
        subcategory: "Barbie",
        price: 7500,
        originalPrice: null,
        onSale: false,
        preOrder: false,
        image: "images/products/96.png",
        description: "Barbie Limitless Adventure Malibu Doll designed for imaginative play and adventure-filled storytelling."
    },
    {
        id: 97,
        name: "Barbie Fashionistas Doll in Wheelchair",
        category: "Toys",
        subcategory: "Barbie",
        price: 7500,
        originalPrice: null,
        onSale: false,
        preOrder: false,
        image: "images/products/97.png",
        description: "Barbie Fashionistas doll in a wheelchair, designed to encourage inclusive imaginative play and storytelling."
    },
    {
        id: 98,
        name: "Barbie Fashionistas Doll Pink Gingham Barbie",
        category: "Toys",
        subcategory: "Barbie",
        price: 7500,
        originalPrice: null,
        onSale: false,
        preOrder: false,
        image: "images/products/98.png",
        description: "Barbie Fashionistas doll featuring a stylish pink gingham outfit, designed for imaginative play and storytelling."
    },
    {
        id: 99,
        name: "Barbie Dreamtopia Doll Mermaid",
        category: "Toys",
        subcategory: "Barbie",
        price: 7500,
        originalPrice: null,
        onSale: false,
        preOrder: false,
        image: "images/products/99.png",
        description: "Barbie Dreamtopia Mermaid Doll inspired by magical underwater fantasy adventures and imaginative play."
    },
    {
        id: 100,
        name: "Barbie Careers Football Player Doll",
        category: "Toys",
        subcategory: "Barbie",
        price: 7500,
        originalPrice: null,
        onSale: false,
        preOrder: false,
        image: "images/products/100.png",
        description: "Barbie Careers Football Player Doll designed for imaginative play and inspiring sports-themed storytelling."
    },
    {
        id: 101,
        name: "Land Rover Defender Remote Control Car",
        category: "Toys",
        subcategory: "Diecast Cars",
        price: 12500,
        originalPrice: null,
        onSale: false,
        preOrder: false,
        image: "images/products/101.png",
        description: "Land Rover Defender Remote Control Car designed for exciting off-road play and imaginative driving adventures."
    },
    {
        id: 102,
        name: "Spin n' Stunt Remote Control Car",
        category: "Toys",
        subcategory: "Diecast Cars",
        price: 9500,
        originalPrice: null,
        onSale: false,
        preOrder: false,
        image: "images/products/102.png",
        description: "Spin n' Stunt Remote Control Car designed for exciting spins, tricks, and fun indoor or outdoor play."
    },
    {
        id: 103,
        name: "Batman 1:20 Armoured Racer Remote Control Car",
        category: "Toys",
        subcategory: "Diecast Cars",
        price: 11500,
        originalPrice: null,
        onSale: false,
        preOrder: false,
        image: "images/products/103.png",
        description: "Batman 1:20 Armoured Racer Remote Control Car designed for exciting superhero-themed racing and imaginative play."
    },
    {
        id: 104,
        name: "McLaren MCL36 F1 Remote Control Car",
        category: "Toys",
        subcategory: "Diecast Cars",
        price: 13500,
        originalPrice: null,
        onSale: false,
        preOrder: false,
        image: "images/products/104.png",
        description: "McLaren MCL36 F1 Remote Control Car designed for Formula 1 fans and exciting racing play."
    },
    {
        id: 105,
        name: "Solido 1/18 Volkswagen Beetle 1303 K3 Tribute",
        category: "Toys",
        subcategory: "Diecast Cars",
        price: 18500,
        originalPrice: null,
        onSale: false,
        preOrder: false,
        image: "images/products/105.png",
        description: "Solido 1/18 Volkswagen Beetle 1303 K3 Tribute diecast model featuring detailed styling for collectors and car enthusiasts."
    },
    {
        id: 106,
        name: "Porsche 911",
        category: "Toys",
        subcategory: "Diecast Cars",
        price: 15000,
        originalPrice: null,
        onSale: false,
        preOrder: false,
        image: "images/products/106.png",
        description: "Porsche 911 diecast model featuring detailed styling, designed for collectors and car enthusiasts."
    },
    {
        id: 108,
        name: "Mercedes Benz 500K Special Roadster",
        category: "Toys",
        subcategory: "Diecast Cars",
        price: 18500,
        originalPrice: null,
        onSale: false,
        preOrder: false,
        image: "images/products/108.png",
        description: "Mercedes Benz 500K Special Roadster diecast model featuring detailed classic styling, designed for collectors and car enthusiasts."
    },
    {
        id: 109,
        name: "Aston Martin Valkyrie",
        category: "Toys",
        subcategory: "Diecast Cars",
        price: 16000,
        originalPrice: null,
        onSale: false,
        preOrder: false,
        image: "images/products/109.png",
        description: "Aston Martin Valkyrie diecast model featuring detailed styling, designed for collectors and car enthusiasts."
    },
    {
        id: 110,
        name: "Ferrari F40 White Tokyo",
        category: "Toys",
        subcategory: "Diecast Cars",
        price: 16000,
        originalPrice: null,
        onSale: false,
        preOrder: false,
        image: "images/products/110.png",
        description: "Ferrari F40 White Tokyo diecast model featuring detailed styling, designed for collectors and car enthusiasts."
    },
    {
        id: 111,
        name: "Ferrari FXX-K Evo",
        category: "Toys",
        subcategory: "Diecast Cars",
        price: 16500,
        originalPrice: null,
        onSale: false,
        preOrder: false,
        image: "images/products/111.png",
        description: "Ferrari FXX-K Evo diecast model featuring detailed styling, designed for collectors and car enthusiasts."
    },
    {
        id: 112,
        name: "Mazda RX7 (FD3S) Pandem Rocket Bunny Tiffany Blue",
        category: "Toys",
        subcategory: "Diecast Cars",
        price: 16500,
        originalPrice: null,
        onSale: false,
        preOrder: false,
        image: "images/products/112.png",
        description: "Mazda RX7 (FD3S) Pandem Rocket Bunny Tiffany Blue diecast model featuring detailed styling, designed for collectors and car enthusiasts."
    },
    {
        id: 113,
        name: "Motorhelix Mazda 787B Renown Le Mans",
        category: "Toys",
        subcategory: "Diecast Cars",
        price: 22000,
        originalPrice: null,
        onSale: false,
        preOrder: false,
        image: "images/products/113.png",
        description: "Motorhelix Mazda 787B Renown Le Mans diecast model featuring detailed racing-inspired styling, designed for collectors and motorsport enthusiasts."
    },
    {
        id: 114,
        name: "Toyota Sprinter Trueno",
        category: "Toys",
        subcategory: "Diecast Cars",
        price: 15500,
        originalPrice: null,
        onSale: false,
        preOrder: false,
        image: "images/products/114.png",
        description: "Toyota Sprinter Trueno diecast model featuring detailed styling, designed for collectors and car enthusiasts."
    },
    {
        id: 115,
        name: "Toyota Supra",
        category: "Toys",
        subcategory: "Diecast Cars",
        price: 15500,
        originalPrice: null,
        onSale: false,
        preOrder: false,
        image: "images/products/115.png",
        description: "Toyota Supra diecast model featuring detailed styling, designed for collectors and car enthusiasts."
    },
    {
        id: 116,
        name: "Ford Escort MK2",
        category: "Toys",
        subcategory: "Diecast Cars",
        price: 15500,
        originalPrice: null,
        onSale: false,
        preOrder: false,
        image: "images/products/116.png",
        description: "Ford Escort MK2 diecast model featuring detailed classic styling, designed for collectors and car enthusiasts."
    },
    {
        id: 117,
        name: "Ford Ranger Raptor",
        category: "Toys",
        subcategory: "Diecast Cars",
        price: 16000,
        originalPrice: null,
        onSale: false,
        preOrder: false,
        image: "images/products/117.png",
        description: "Ford Ranger Raptor diecast model featuring detailed styling, designed for collectors and car enthusiasts."
    },
    {
        id: 118,
        name: "BMW M2",
        category: "Toys",
        subcategory: "Diecast Cars",
        price: 15500,
        originalPrice: null,
        onSale: false,
        preOrder: false,
        image: "images/products/118.png",
        description: "BMW M2 diecast model featuring detailed styling, designed for collectors and car enthusiasts."
    },
    {
        id: 119,
        name: "Bugatti Atlantic Type 57",
        category: "Toys",
        subcategory: "Diecast Cars",
        price: 18500,
        originalPrice: null,
        onSale: false,
        preOrder: false,
        image: "images/products/119.png",
        description: "Bugatti Atlantic Type 57 diecast model featuring detailed classic styling, designed for collectors and car enthusiasts."
    },
    {
        id: 120,
        name: "Bodykit TAIKANO KAISHIN",
        category: "Toys",
        subcategory: "Diecast Cars",
        price: 17500,
        originalPrice: null,
        onSale: false,
        preOrder: false,
        image: "images/products/120.png",
        description: "Bodykit TAIKANO KAISHIN diecast model featuring detailed custom styling, designed for collectors and car enthusiasts."
    },
    {
        id: 121,
        name: "EDC Stainless Steel or Aluminum Turbine Fidget Spinner",
        category: "Toys",
        subcategory: "Fidget Spinners",
        price: 8500,
        originalPrice: null,
        onSale: false,
        preOrder: false,
        image: "images/products/121.png",
        description: "EDC Stainless Steel or Aluminum Turbine Fidget Spinner designed for smooth spinning and satisfying everyday play."
    },
    {
        id: 122,
        name: "EDC Brass Small Dual Bar Fidget Spinner",
        category: "Toys",
        subcategory: "Fidget Spinners",
        price: 7500,
        originalPrice: null,
        onSale: false,
        preOrder: false,
        image: "images/products/122.png",
        description: "EDC Brass Small Dual Bar Fidget Spinner designed for smooth spinning and satisfying everyday play."
    },
    {
        id: 123,
        name: "EDC Propeller Fidget Spinner",
        category: "Toys",
        subcategory: "Fidget Spinners",
        price: 7500,
        originalPrice: null,
        onSale: false,
        preOrder: false,
        image: "images/products/123.png",
        description: "EDC Propeller Fidget Spinner designed for smooth spinning and satisfying everyday play."
    },
    {
        id: 124,
        name: "EDC Luminous Tri Bar Spinner Fidget Toy with Caps",
        category: "Toys",
        subcategory: "Fidget Spinners",
        price: 8000,
        originalPrice: null,
        onSale: false,
        preOrder: false,
        image: "images/products/124.png",
        description: "EDC Luminous Tri Bar Spinner Fidget Toy with Caps designed for smooth spinning and satisfying everyday play."
    },
    {
        id: 125,
        name: "Wagon Wheel Fidget Spinner",
        category: "Toys",
        subcategory: "Fidget Spinners",
        price: 7000,
        originalPrice: null,
        onSale: false,
        preOrder: false,
        image: "images/products/125.png",
        description: "Wagon Wheel Fidget Spinner designed for smooth spinning and satisfying everyday play."
    },
    {
        id: 126,
        name: "Brass Skull and Crossbones Fidget Spinner",
        category: "Toys",
        subcategory: "Fidget Spinners",
        price: 7500,
        originalPrice: null,
        onSale: false,
        preOrder: false,
        image: "images/products/126.png",
        description: "Brass Skull and Crossbones Fidget Spinner designed for smooth spinning and satisfying everyday play."
    },
    {
        id: 127,
        name: "EDC Morocco Tri Bar Spinner",
        category: "Toys",
        subcategory: "Fidget Spinners",
        price: 7500,
        originalPrice: null,
        onSale: false,
        preOrder: false,
        image: "images/products/127.png",
        description: "EDC Morocco Tri Bar Spinner designed for smooth spinning and satisfying everyday play."
    },
    {
        id: 128,
        name: "EDC Aluminum 6 Point Fidget Spinner",
        category: "Toys",
        subcategory: "Fidget Spinners",
        price: 7500,
        originalPrice: null,
        onSale: false,
        preOrder: false,
        image: "images/products/128.png",
        description: "EDC Aluminum 6 Point Fidget Spinner designed for smooth spinning and satisfying everyday play."
    },
    {
    id: 129,
        name: "Stars and Stripes Fidget Spinner",
        category: "Toys",
        subcategory: "Fidget Spinners",
        price: 7500,
        originalPrice: null,
        onSale: false,
        preOrder: false,
        image: "images/products/129.png",
        description: "Stars and Stripes Fidget Spinner designed for smooth spinning and satisfying everyday play."
    },
    {
        id: 130,
        name: "Oval Dual Bar Fidget Spinner",
        category: "Toys",
        subcategory: "Fidget Spinners",
        price: 7500,
        originalPrice: null,
        onSale: false,
        preOrder: false,
        image: "images/products/130.png",
        description: "Oval Dual Bar Fidget Spinner designed for smooth spinning and satisfying everyday play."
    },
    {
        id: 131,
        name: "Scuderia Ferrari HP Leclerc 16",
        category: "Toys",
        subcategory: "HotWheels",
        price: 6500,
        originalPrice: null,
        onSale: false,
        preOrder: false,
        image: "images/products/131.png",
        description: "Scuderia Ferrari HP Leclerc 16 Hot Wheels model featuring Ferrari Formula 1 styling, designed for collectors and racing fans."
    },
    {
        id: 132,
        name: "007 Hot Wheels",
        category: "Toys",
        subcategory: "HotWheels",
        price: 6500,
        originalPrice: null,
        onSale: false,
        preOrder: false,
        image: "images/products/132.png",
        description: "007 Hot Wheels model featuring classic James Bond-inspired styling, designed for collectors and racing fans."
    },
    {
        id: 133,
        name: "Toy Story Hot Wheels",
        category: "Toys",
        subcategory: "HotWheels",
        price: 6500,
        originalPrice: null,
        onSale: false,
        preOrder: false,
        image: "images/products/133.png",
        description: "Toy Story Hot Wheels model featuring fun character-inspired styling, designed for collectors and fans."
    },
    {
        id: 134,
        name: "Dracula Hot Wheels",
        category: "Toys",
        subcategory: "HotWheels",
        price: 6500,
        originalPrice: null,
        onSale: false,
        preOrder: false,
        image: "images/products/134.png",
        description: "Dracula Hot Wheels model featuring a classic gothic-inspired design, designed for collectors and fans."
    },
    {
        id: 135,
        name: "Forza Audi 90",
        category: "Toys",
        subcategory: "HotWheels",
        price: 6500,
        originalPrice: null,
        onSale: false,
        preOrder: false,
        image: "images/products/135.png",
        description: "Forza Audi 90 Hot Wheels model featuring racing-inspired Audi styling, designed for collectors and motorsport fans."
    },
    {
        id: 136,
        name: "The Simpsons Hot Wheels",
        category: "Toys",
        subcategory: "HotWheels",
        price: 6500,
        originalPrice: null,
        onSale: false,
        preOrder: false,
        image: "images/products/136.png",
        description: "The Simpsons Hot Wheels model featuring fun character-inspired styling, designed for collectors and fans."
    },
    {
        id: 137,
        name: "The Good Dinosaur Hot Wheels",
        category: "Toys",
        subcategory: "HotWheels",
        price: 6500,
        originalPrice: null,
        onSale: false,
        preOrder: false,
        image: "images/products/137.png",
        description: "The Good Dinosaur Hot Wheels model featuring fun dinosaur-inspired styling, designed for collectors and fans."
    },
    {
        id: 138,
        name: "Stranger Things Hot Wheels",
        category: "Toys",
        subcategory: "HotWheels",
        price: 6500,
        originalPrice: null,
        onSale: false,
        preOrder: false,
        image: "images/products/138.png",
        description: "Stranger Things Hot Wheels model featuring series-inspired styling, designed for collectors and fans."
    },
    {
        id: 139,
        name: "Onward Hot Wheels",
        category: "Toys",
        subcategory: "HotWheels",
        price: 6500,
        originalPrice: null,
        onSale: false,
        preOrder: false,
        image: "images/products/139.png",
        description: "Onward Hot Wheels model featuring fun movie-inspired styling, designed for collectors and fans."
    },
    {
        id: 140,
        name: "Fast & Furious W Motors Lykan Hypersport",
        category: "Toys",
        subcategory: "HotWheels",
        price: 6500,
        originalPrice: null,
        onSale: false,
        preOrder: false,
        image: "images/products/140.png",
        description: "Fast & Furious W Motors Lykan Hypersport Hot Wheels model featuring movie-inspired styling, designed for collectors and fans."
    },
    {
    id: 141,
        name: "Mazda 323 GTR Die-Cast Car",
        category: "Toys",
        subcategory: "HotWheels",
        price: 6500,
        originalPrice: null,
        onSale: false,
        preOrder: false,
        image: "images/products/141.png",
        description: "Mazda 323 GTR Die-Cast Car featuring detailed rally-inspired styling, designed for collectors and car enthusiasts."
    },
    {
        id: 142,
        name: "Road Trip Subaru Legacy GT",
        category: "Toys",
        subcategory: "HotWheels",
        price: 6500,
        originalPrice: null,
        onSale: false,
        preOrder: false,
        image: "images/products/142.png",
        description: "Road Trip Subaru Legacy GT Hot Wheels model featuring detailed sporty styling, designed for collectors and car enthusiasts."
    },
    {
        id: 143,
        name: "Super Silhouette Nissan Silvia",
        category: "Toys",
        subcategory: "HotWheels",
        price: 6500,
        originalPrice: null,
        onSale: false,
        preOrder: false,
        image: "images/products/143.png",
        description: "Super Silhouette Nissan Silvia Hot Wheels model featuring detailed racing-inspired styling, designed for collectors and car enthusiasts."
    },
    {
        id: 144,
        name: "Greenwood Corvette",
        category: "Toys",
        subcategory: "HotWheels",
        price: 6500,
        originalPrice: null,
        onSale: false,
        preOrder: false,
        image: "images/products/144.png",
        description: "Greenwood Corvette Hot Wheels model featuring detailed racing-inspired styling, designed for collectors and car enthusiasts."
    },
    {
        id: 145,
        name: "Datsun 620",
        category: "Toys",
        subcategory: "HotWheels",
        price: 6500,
        originalPrice: null,
        onSale: false,
        preOrder: false,
        image: "images/products/145.png",
        description: "Datsun 620 Hot Wheels model featuring detailed classic pickup styling, designed for collectors and car enthusiasts."
    },
    {
        id: 146,
        name: "Spider-Man Strike 'N Splash NERF Gun",
        category: "Toys",
        subcategory: "Roleplays",
        price: 7500,
        originalPrice: null,
        onSale: false,
        preOrder: false,
        image: "images/products/146.png",
        description: "Spider-Man themed NERF gun designed for fun and imaginative play."
    },
    {
        id: 147,
        name: "Minecraft Bow",
        category: "Toys",
        subcategory: "Roleplays",
        price: 6500,
        originalPrice: null,
        onSale: false,
        preOrder: false,
        image: "images/products/147.png",
        description: "Minecraft Bow featuring a fun game-inspired design, perfect for fans and imaginative play."
    },
    {
        id: 148,
        name: "Fortnite Splash",
        category: "Toys",
        subcategory: "Roleplays",
        price: 6500,
        originalPrice: null,
        onSale: false,
        preOrder: false,
        image: "images/products/148.png",
        description: "Fortnite Splash featuring a fun game-inspired design, perfect for fans and imaginative play."
    },
    {
        id: 149,
        name: "Splash NERF Gun",
        category: "Toys",
        subcategory: "Roleplays",
        price: 7500,
        originalPrice: null,
        onSale: false,
        preOrder: false,
        image: "images/products/149.png",
        description: "NERF gun designed for fun and imaginative play."
    },
    {
        id: 150,
        name: "LEGO Marvel Avengers Tower Set",
        category: "Toys",
        subcategory: "LEGO",
        price: 45000,
        originalPrice: null,
        onSale: false,
        preOrder: false,
        image: "images/products/150.png",
        description: "LEGO Marvel Avengers Tower Set featuring an iconic superhero-themed building design for creative construction and imaginative play."
    },
    {
        id: 151,
        name: "LEGO Home Alone McCallisters' House Set",
        category: "Toys",
        subcategory: "LEGO",
        price: 42000,
        originalPrice: null,
        onSale: false,
        preOrder: false,
        image: "images/products/151.png",
        description: "LEGO Home Alone McCallisters' House Set featuring a detailed movie-inspired house design for creative building and imaginative play."
    },
    {
        id: 152,
        name: "LEGO DC Batman Arkham Asylum Set",
        category: "Toys",
        subcategory: "LEGO",
        price: 40000,
        originalPrice: null,
        onSale: false,
        preOrder: false,
        image: "images/products/152.png",
        description: "LEGO DC Batman Arkham Asylum Set featuring a detailed Batman-themed building design for creative construction and imaginative play."
    },
    {
        id: 153,
        name: "LEGO Captain Jack Sparrow's Pirates of the Caribbean Ship Set",
        category: "Toys",
        subcategory: "LEGO",
        price: 45000,
        originalPrice: null,
        onSale: false,
        preOrder: false,
        image: "images/products/153.png",
        description: "LEGO Captain Jack Sparrow's Pirates of the Caribbean Ship Set featuring a detailed pirate ship design for creative construction and imaginative play."
    },
    {
        id: 154,
        name: "LEGO Marvel Venom Bust Set",
        category: "Toys",
        subcategory: "LEGO",
        price: 35000,
        originalPrice: null,
        onSale: false,
        preOrder: false,
        image: "images/products/154.png",
        description: "LEGO Marvel Venom Bust Set featuring a detailed character-inspired build for creative construction and display."
    },
    {
        id: 155,
        name: "LEGO Harry Potter The Burrow Collectors' Edition Set",
        category: "Toys",
        subcategory: "LEGO",
        price: 45000,
        originalPrice: null,
        onSale: false,
        preOrder: false,
        image: "images/products/155.png",
        description: "LEGO Harry Potter The Burrow Collectors' Edition Set featuring a detailed wizarding-world house build for creative construction and display."
    },
    {
        id: 156,
        name: "LEGO Icons Sherlock Holmes: Book Nook Set",
        category: "Toys",
        subcategory: "LEGO",
        price: 35000,
        originalPrice: null,
        onSale: false,
        preOrder: false,
        image: "images/products/156.png",
        description: "LEGO Icons Sherlock Holmes: Book Nook Set featuring a detailed literary-inspired build for creative construction and display."
    },
    {
        id: 157,
        name: "LEGO Icons 11370 Stranger Things: The Creel House Set",
        category: "Toys",
        subcategory: "LEGO",
        price: 45000,
        originalPrice: null,
        onSale: false,
        preOrder: false,
        image: "images/products/157.png",
        description: "LEGO Icons 11370 Stranger Things: The Creel House Set featuring a detailed series-inspired build for creative construction and display."
    },
    {
        id: 158,
        name: "LEGO Marvel  X-Men: The X-Mansion Set",
        category: "Toys",
        subcategory: "LEGO",
        price: 45000,
        originalPrice: null,
        onSale: false,
        preOrder: false,
        image: "images/products/158.png",
        description: "LEGO Marvel  X-Men: The X-Mansion Set featuring a detailed superhero-themed build for creative construction and display."
    },
    {
        id: 159,
        name: "LEGO Icons Back to the Future Time Machine DeLorean Set",
        category: "Toys",
        subcategory: "LEGO",
        price: 45000,
        originalPrice: null,
        onSale: false,
        preOrder: false,
        image: "images/products/159.png",
        description: "LEGO Icons Back to the Future Time Machine DeLorean Set featuring a detailed movie-inspired build for creative construction and display."
    },
    {
        id: 160,
        name: "LEGO Star Wars New Republic X-Wing Starfighter Set",
        category: "Toys",
        subcategory: "LEGO",
        price: 35000,
        originalPrice: null,
        onSale: false,
        preOrder: false,
        image: "images/products/160.png",
        description: "LEGO Star Wars New Republic X-Wing Starfighter Set featuring a detailed Star Wars-inspired build for creative construction and display."
    },
    {
        id: 161,
        name: "LEGO Technic Mercedes-Benz Unimog U  with Crane Set",
        category: "Toys",
        subcategory: "LEGO",
        price: 40000,
        originalPrice: null,
        onSale: false,
        preOrder: false,
        image: "images/products/161.png",
        description: "LEGO Technic Mercedes-Benz Unimog U  with Crane Set featuring a detailed engineering-inspired build with a working-style crane design."
    },
    {
        id: 162,
        name: "LEGO Icons  The Lord of the Rings: The Shire Set",
        category: "Toys",
        subcategory: "LEGO",
        price: 45000,
        originalPrice: null,
        onSale: false,
        preOrder: false,
        image: "images/products/162.png",
        description: "LEGO Icons  The Lord of the Rings: The Shire Set featuring a detailed Middle-earth-inspired build for creative construction and display."
    },
    {
        id: 163,
        name: "LEGO Jurassic World  World Dinosaur Fossils: Tyrannosaurus Rex Set",
        category: "Toys",
        subcategory: "LEGO",
        price: 45000,
        originalPrice: null,
        onSale: false,
        preOrder: false,
        image: "images/products/163.png",
        description: "LEGO Jurassic World  World Dinosaur Fossils: Tyrannosaurus Rex Set featuring a detailed dinosaur fossil-inspired build for creative construction and display."
    },
    {
        id: 164,
        name: "LEGO NINJAGO City Workshops Set",
        category: "Toys",
        subcategory: "LEGO",
        price: 40000,
        originalPrice: null,
        onSale: false,
        preOrder: false,
        image: "images/products/164.png",
        description: "LEGO NINJAGO City Workshops Set featuring a detailed NINJAGO City-inspired build for creative construction and display."
    },
    {
        id: 165,
        name: "LEGO Icons Porsche 911 Car Model Set",
        category: "Toys",
        subcategory: "LEGO",
        price: 40000,
        originalPrice: null,
        onSale: false,
        preOrder: false,
        image: "images/products/165.png",
        description: "LEGO Icons Porsche 911 Car Model Set featuring a detailed sports car build for creative construction and display."
    },
    {
        id: 166,
        name: "LEGO One Piece Gum-Gum Fruit Set",
        category: "Toys",
        subcategory: "LEGO",
        price: 35000,
        originalPrice: null,
        onSale: false,
        preOrder: false,
        image: "images/products/166.png",
        description: "LEGO One Piece Gum-Gum Fruit Set featuring a detailed anime-inspired build for creative construction and display."
    },
    {
        id: 167,
        name: "LEGO Editions Ayrton Senna Helmet Set",
        category: "Toys",
        subcategory: "LEGO",
        price: 35000,
        originalPrice: null,
        onSale: false,
        preOrder: false,
        image: "images/products/167.png",
        description: "LEGO Editions Ayrton Senna Helmet Set featuring a detailed racing-inspired build for creative construction and display."
    },
    {
        id: 168,
        name: "LEGO Pokémon Iconic Trainer Moments Poké Ball Set",
        category: "Toys",
        subcategory: "LEGO",
        price: 35000,
        originalPrice: null,
        onSale: false,
        preOrder: false,
        image: "images/products/168.png",
        description: "LEGO Pokémon Iconic Trainer Moments Poké Ball Set featuring a detailed Pokémon-inspired build for creative construction and display."
    },
    {
        id: 169,
        name: "LEGO Harry Potter  Hogwarts Castle Set",
        category: "Toys",
        subcategory: "LEGO",
        price: 45000,
        originalPrice: null,
        onSale: false,
        preOrder: false,
        image: "images/products/169.png",
        description: "LEGO Harry Potter  Hogwarts Castle Set featuring a detailed Hogwarts-inspired build for creative construction and display."
    },
    {
        id: 170,
        name: "LEGO Ferrari Daytona SP3 Car Model Set",
        category: "Toys",
        subcategory: "LEGO",
        price: 45000,
        originalPrice: null,
        onSale: false,
        preOrder: false,
        image: "images/products/170.png",
        description: "LEGO Ferrari Daytona SP3 Car Model Set featuring a detailed sports car build for creative construction and display."
    },
    {
        id: 171,
        name: "African Chess Set - Zulu",
        category: "Board Games",
        subcategory: "Chess",
        price: 12000,
        originalPrice: null,
        onSale: false,
        preOrder: false,
        image: "images/products/171.png",
        description: "African Chess Set - Zulu featuring a distinctive culturally inspired design for chess enthusiasts and collectors."
    },
    {
        id: 172,
        name: "African Animal Chess Set",
        category: "Board Games",
        subcategory: "Chess",
        price: 12000,
        originalPrice: null,
        onSale: false,
        preOrder: false,
        image: "images/products/172.png",
        description: "African Animal Chess Set featuring an animal-inspired design for chess enthusiasts and collectors."
    },
    {
        id: 173,
        name: "Super Mario Brothers Chess Set",
        category: "Board Games",
        subcategory: "Chess",
        price: 12000,
        originalPrice: null,
        onSale: false,
        preOrder: false,
        image: "images/products/173.png",
        description: "Super Mario Brothers Chess Set featuring a fun Mario-themed design for chess enthusiasts and collectors."
    },
    {
        id: 174,
        name: "Spartan Warrior Chess Set",
        category: "Board Games",
        subcategory: "Chess",
        price: 12000,
        originalPrice: null,
        onSale: false,
        preOrder: false,
        image: "images/products/174.png",
        description: "Spartan Warrior Chess Set featuring a classic warrior-inspired design for chess enthusiasts and collectors."
    },
    {
        id: 175,
        name: "Crusades Chess Set on Black & Maple Chest",
        category: "Board Games",
        subcategory: "Chess",
        price: 15000,
        originalPrice: null,
        onSale: false,
        preOrder: false,
        image: "images/products/175.png",
        description: "Crusades Chess Set on Black & Maple Chest featuring a detailed historical-inspired design with a wooden storage chest for chess enthusiasts and collectors."
    },
    {
        id: 176,
        name: "Gold and Silver Egyptian Chess Set",
        category: "Board Games",
        subcategory: "Chess",
        price: 14000,
        originalPrice: null,
        onSale: false,
        preOrder: false,
        image: "images/products/176.png",
        description: "Gold and Silver Egyptian Chess Set featuring an Egyptian-inspired design for chess enthusiasts and collectors."
    },
    {
        id: 177,
        name: "Pokémon Trading Card Game (TCG): Mega Charizard",
        category: "Board Games",
        subcategory: "Pokémon Cards",
        price: 9500,
        originalPrice: null,
        onSale: false,
        preOrder: false,
        image: "images/products/177.png",
        description: "Pokémon Trading Card Game (TCG): Mega Charizard featuring a Pokémon-themed card set for collectors and trading card game fans."
    },
    {
        id: 178,
        name: "Pokémon Mega Dream ex: Booster Box",
        category: "Board Games",
        subcategory: "Pokémon Cards",
        price: 12000,
        originalPrice: null,
        onSale: false,
        preOrder: false,
        image: "images/products/178.png",
        description: "Pokémon Mega Dream ex: Booster Box featuring Pokémon Trading Card Game booster packs for collectors and TCG fans."
    },
    {
        id: 179,
        name: "Pokémon 30th Celebration Ultra-Premium Collection Day Edition",
        category: "Board Games",
        subcategory: "Pokémon Cards",
        price: 15000,
        originalPrice: null,
        onSale: false,
        preOrder: false,
        image: "images/products/179.png",
        description: "Pokémon 30th Celebration Ultra-Premium Collection Day Edition featuring a premium Pokémon Trading Card Game collection for collectors and TCG fans."
    },
    {
        id: 180,
        name: "Pokémon 30th Celebration Figure Collection Mewtwo",
        category: "Board Games",
        subcategory: "Pokémon Cards",
        price: 12000,
        originalPrice: null,
        onSale: false,
        preOrder: false,
        image: "images/products/180.png",
        description: "Pokémon 30th Celebration Figure Collection Mewtwo featuring a Pokémon-themed collectible set for fans and collectors."
    },
    {
        id: 181,
        name: "MONOPOLY 90th Anniversary Edition",
        category: "Board Games",
        subcategory: "Monopoly",
        price: 12000,
        originalPrice: null,
        onSale: false,
        preOrder: false,
        image: "images/products/181.png",
        description: "MONOPOLY 90th Anniversary Edition featuring a special anniversary-themed design for classic family board game fun."
    },
    {
        id: 182,
        name: "Monopoly PB Deluxe Edition",
        category: "Board Games",
        subcategory: "Monopoly",
        price: 14000,
        originalPrice: null,
        onSale: false,
        preOrder: false,
        image: "images/products/182.png",
        description: "Monopoly PB Deluxe Edition featuring a premium design for classic Monopoly gameplay and family fun."
    },
    {
        id: 183,
        name: "Monopoly Bianco Edition",
        category: "Board Games",
        subcategory: "Monopoly",
        price: 12000,
        originalPrice: null,
        onSale: false,
        preOrder: false,
        image: "images/products/183.png",
        description: "Monopoly Bianco Edition featuring a stylish design for classic Monopoly gameplay and family fun."
    },
        {
        id: 184,
        name: "Monopoly Aura Edition",
        category: "Board Games",
        subcategory: "Monopoly",
        price: 12000,
        originalPrice: null,
        onSale: false,
        preOrder: false,
        image: "images/products/184.png",
        description: "Monopoly Aura Edition featuring a stylish design for classic Monopoly gameplay and family fun."
    },
    {
        id: 185,
        name: "Monopoly Nordic Edition",
        category: "Board Games",
        subcategory: "Monopoly",
        price: 12000,
        originalPrice: null,
        onSale: false,
        preOrder: false,
        image: "images/products/185.png",
        description: "Monopoly Nordic Edition featuring a Nordic-themed design for classic Monopoly gameplay and family fun."
    },
    {
        id: 186,
        name: "UNO Spin Card Game",
        category: "Board Games",
        subcategory: "UNO",
        price: 7500,
        originalPrice: null,
        onSale: false,
        preOrder: false,
        image: "images/products/186.png",
        description: "UNO Spin Card Game featuring classic UNO gameplay with an exciting spin element for added fun."
    },
    {
        id: 187,
        name: "UNO Elite Formula 1 2025 Core Edition Starter Pack",
        category: "Board Games",
        subcategory: "UNO",
        price: 7500,
        originalPrice: null,
        onSale: false,
        preOrder: false,
        image: "images/products/187.png",
        description: "UNO Elite Formula 1 2025 Core Edition Starter Pack featuring Formula 1-inspired UNO cards for racing fans and card game enthusiasts."
    },
    {
        id: 188,
        name: "UNO Star Wars Matching Card Game",
        category: "Board Games",
        subcategory: "UNO",
        price: 7500,
        originalPrice: null,
        onSale: false,
        preOrder: false,
        image: "images/products/188.png",
        description: "UNO Star Wars Matching Card Game featuring Star Wars-inspired artwork for fun and engaging card game play."
    },
    {
        id: 189,
        name: "UNO Platinum Edition",
        category: "Board Games",
        subcategory: "UNO",
        price: 7500,
        originalPrice: null,
        onSale: false,
        preOrder: false,
        image: "images/products/189.png",
        description: "UNO Platinum Edition featuring a premium design for classic UNO card game fun."
    },
    {
        id: 190,
        name: "UNO The Amazing Spider-Man",
        category: "Board Games",
        subcategory: "UNO",
        price: 7500,
        originalPrice: null,
        onSale: false,
        preOrder: false,
        image: "images/products/190.png",
        description: "UNO The Amazing Spider-Man featuring Spider-Man-inspired artwork for fun and engaging card game play."
    },
    {
        id: 191,
        name: "UNO Batman Card",
        category: "Board Games",
        subcategory: "UNO",
        price: 7500,
        originalPrice: null,
        onSale: false,
        preOrder: false,
        image: "images/products/191.png",
        description: "UNO Batman Card featuring Batman-inspired artwork for fun and engaging card game play."
    },
    {
        id: 192,
        name: "UNO Beetlejuice Beetlejuice",
        category: "Board Games",
        subcategory: "UNO",
        price: 7500,
        originalPrice: null,
        onSale: false,
        preOrder: false,
        image: "images/products/192.png",
        description: "UNO Beetlejuice Beetlejuice featuring movie-inspired artwork for fun and engaging card game play."
    },
    {
        id: 193,
        name: "UNO Barbie The Movie",
        category: "Board Games",
        subcategory: "UNO",
        price: 7500,
        originalPrice: null,
        onSale: false,
        preOrder: false,
        image: "images/products/193.png",
        description: "UNO Barbie The Movie featuring Barbie-inspired artwork for fun and engaging card game play."
    },
    {
        id: 194,
        name: "Avatar Playing Cards",
        category: "Board Games",
        subcategory: "Playing Cards",
        price: 5000,
        originalPrice: null,
        onSale: false,
        preOrder: false,
        image: "images/products/194.png",
        description: "Avatar Playing Cards featuring movie-inspired artwork for casual games and collectors."
    },
    {
        id: 195,
        name: "Peaky Blinders Playing Cards",
        category: "Board Games",
        subcategory: "Playing Cards",
        price: 5000,
        originalPrice: null,
        onSale: false,
        preOrder: false,
        image: "images/products/195.png",
        description: "Peaky Blinders Playing Cards featuring series-inspired artwork for casual games and collectors."
    },
    {
        id: 196,
        name: "Game of Thrones Playing Cards",
        category: "Board Games",
        subcategory: "Playing Cards",
        price: 5000,
        originalPrice: null,
        onSale: false,
        preOrder: false,
        image: "images/products/196.png",
        description: "Game of Thrones Playing Cards featuring series-inspired artwork for casual games and collectors."
    },
    {
        id: 197,
        name: "Toy Story Playing Cards",
        category: "Board Games",
        subcategory: "Playing Cards",
        price: 5000,
        originalPrice: null,
        onSale: false,
        preOrder: false,
        image: "images/products/197.png",
        description: "Toy Story Playing Cards featuring fun movie-inspired artwork for casual games and collectors."
    },
    {
        id: 198,
        name: "Disney Moana Playing Cards",
        category: "Board Games",
        subcategory: "Playing Cards",
        price: 5000,
        originalPrice: null,
        onSale: false,
        preOrder: false,
        image: "images/products/198.png",
        description: "Disney Moana Playing Cards featuring fun movie-inspired artwork for casual games and collectors."
    },
    {
        id: 199,
        name: "Doraemon Playing Cards",
        category: "Board Games",
        subcategory: "Playing Cards",
        price: 5000,
        originalPrice: null,
        onSale: false,
        preOrder: false,
        image: "images/products/199.png",
        description: "Doraemon Playing Cards featuring fun character-inspired artwork for casual games and collectors."
    },
    {
        id: 200,
        name: "17th Kingdom Playing Cards",
        category: "Board Games",
        subcategory: "Playing Cards",
        price: 5000,
        originalPrice: null,
        onSale: false,
        preOrder: false,
        image: "images/products/200.png",
        description: "17th Kingdom Playing Cards featuring a distinctive themed design for casual games and collectors."
    },
    {
        id: 201,
        name: "Wolverine – PS5",
        category: "Gaming Consoles",
        subcategory: "CDs",
        price: 25000,
        originalPrice: null,
        onSale: false,
        preOrder: false,
        image: "images/products/201.png",
        description: "Wolverine – PS5 game disc featuring an action-packed superhero gaming experience for PlayStation 5."
    },
    {
        id: 202,
        name: "NBA 2K27",
        category: "Gaming Consoles",
        subcategory: "CDs",
        price: 25000,
        originalPrice: null,
        onSale: false,
        preOrder: false,
        image: "images/products/202.png",
        description: "NBA 2K27 game disc featuring basketball gameplay for PlayStation players."
    },
    {
        id: 203,
        name: "Metal Gear Solid 2",
        category: "Gaming Consoles",
        subcategory: "CDs",
        price: 25000,
        originalPrice: null,
        onSale: false,
        preOrder: false,
        image: "images/products/203.png",
        description: "Metal Gear Solid 2 game disc featuring a classic stealth-action gaming experience."
    },
    {
        id: 204,
        name: "Halo: Campaign Evolved",
        category: "Gaming Consoles",
        subcategory: "CDs",
        price: 21000,
        originalPrice: null,
        onSale: false,
        preOrder: false,
        image: "images/products/204.png",
        description: "Halo: Campaign Evolved disc featuring a sci-fi action gaming experience for PlayStation 5."
    },
    {
        id: 207,
        name: "EA Sports UFC 6",
        category: "Gaming Consoles",
        subcategory: "CDs",
        price: 19500,
        originalPrice: null,
        onSale: false,
        preOrder: false,
        image: "images/products/207.png",
        description: "EA Sports UFC 6 game disc featuring MMA-inspired sports gameplay for PlayStation players."
    },
    {
        id: 208,
        name: "Red Dead Redemption",
        category: "Gaming Consoles",
        subcategory: "CDs",
        price: 17500,
        originalPrice: null,
        onSale: false,
        preOrder: false,
        image: "images/products/208.png",
        description: "Red Dead Redemption game disc featuring an open-world Western adventure experience for PlayStation players."
    },
    {
        id: 209,
        name: "007 First Light",
        category: "Gaming Consoles",
        subcategory: "CDs",
        price: 22500,
        originalPrice: null,
        onSale: false,
        preOrder: false,
        image: "images/products/209.png",
        description: "007 First Light game disc featuring a cinematic spy-action gaming experience for PlayStation players."
    },
    {
        id: 210,
        name: "WWE 2K26",
        category: "Gaming Consoles",
        subcategory: "CDs",
        price: 20500,
        originalPrice: null,
        onSale: false,
        preOrder: false,
        image: "images/products/210.png",
        description: "WWE 2K26 game disc featuring wrestling gameplay for PlayStation players."
    },
    {
        id: 211,
        name: "Mortal Kombat Legacy Kollection",
        category: "Gaming Consoles",
        subcategory: "CDs",
        price: 18500,
        originalPrice: null,
        onSale: false,
        preOrder: false,
        image: "images/products/211.png",
        description: "Mortal Kombat Legacy Kollection game disc featuring classic fighting game experiences for PlayStation players."
    },
    {
        id: 212,
        name: "Avatar: Frontiers of Pandora From the Ashes Edition",
        category: "Gaming Consoles",
        subcategory: "CDs",
        price: 23000,
        originalPrice: null,
        onSale: false,
        preOrder: false,
        image: "images/products/212.png",
        description: "Avatar: Frontiers of Pandora From the Ashes Edition game disc featuring an immersive action-adventure experience for PlayStation players."
    },
    {
        id: 213,
        name: "Cricket 26",
        category: "Gaming Consoles",
        subcategory: "CDs",
        price: 19000,
        originalPrice: null,
        onSale: false,
        preOrder: false,
        image: "images/products/213.png",
        description: "Cricket 26 game disc featuring cricket gameplay for PlayStation players."
    },
    {
        id: 214,
        name: "Call of Duty: Black Ops 7",
        category: "Gaming Consoles",
        subcategory: "CDs",
        price: 22000,
        originalPrice: null,
        onSale: false,
        preOrder: false,
        image: "images/products/214.png",
        description: "Call of Duty: Black Ops 7 game disc featuring an action-packed first-person shooter experience for PlayStation players."
    },
    {
        id: 215,
        name: "Hitman: World of Assassination Anniversary Edition",
        category: "Gaming Consoles",
        subcategory: "CDs",
        price: 20500,
        originalPrice: null,
        onSale: false,
        preOrder: false,
        image: "images/products/215.png",
        description: "Hitman: World of Assassination Anniversary Edition game disc featuring a stealth-action gaming experience for PlayStation players."
    },
    {
        id: 216,
        name: "Battlefield 6",
        category: "Gaming Consoles",
        subcategory: "CDs",
        price: 21500,
        originalPrice: null,
        onSale: false,
        preOrder: false,
        image: "images/products/216.png",
        description: "Battlefield 6 game disc featuring an action-packed first-person shooter experience for PlayStation players."
    },
    {
        id: 217,
        name: "Ghost of Yotei",
        category: "Gaming Consoles",
        subcategory: "CDs",
        price: 24000,
        originalPrice: null,
        onSale: false,
        preOrder: false,
        image: "images/products/217.png",
        description: "Ghost of Yotei game disc featuring an action-adventure experience for PlayStation players."
    },
    {
        id: 218,
        name: "F1 25",
        category: "Gaming Consoles",
        subcategory: "CDs",
        price: 19500,
        originalPrice: null,
        onSale: false,
        preOrder: false,
        image: "images/products/218.png",
        description: "F1 25 game disc featuring Formula 1 racing gameplay for PlayStation players."
    },
    {
        id: 219,
        name: "NBA 2K26",
        category: "Gaming Consoles",
        subcategory: "CDs",
        price: 18000,
        originalPrice: null,
        onSale: false,
        preOrder: false,
        image: "images/products/219.png",
        description: "NBA 2K26 game disc featuring basketball gameplay for PlayStation players."
    },
    {
        id: 220,
        name: "Sifu",
        category: "Gaming Consoles",
        subcategory: "CDs",
        price: 16500,
        originalPrice: null,
        onSale: false,
        preOrder: false,
        image: "images/products/220.png",
        description: "Sifu game disc featuring an action-packed martial arts gaming experience for PlayStation players."
    },
    {
        id: 221,
        name: "Street Fighter 6",
        category: "Gaming Consoles",
        subcategory: "CDs",
        price: 17500,
        originalPrice: null,
        onSale: false,
        preOrder: false,
        image: "images/products/221.png",
        description: "Street Fighter 6 game disc featuring fast-paced fighting gameplay for PlayStation players."
    },
    {
        id: 222,
        name: "Elden Ring Nightreign",
        category: "Gaming Consoles",
        subcategory: "CDs",
        price: 23500,
        originalPrice: null,
        onSale: false,
        preOrder: false,
        image: "images/products/222.png",
        description: "Elden Ring Nightreign game disc featuring an action-packed fantasy adventure experience for PlayStation players."
    },
    {
        id: 223,
        name: "Until Dawn",
        category: "Gaming Consoles",
        subcategory: "CDs",
        price: 20500,
        originalPrice: null,
        onSale: false,
        preOrder: false,
        image: "images/products/223.png",
        description: "Until Dawn game disc featuring a cinematic horror adventure experience for PlayStation players."
    },
    {
        id: 224,
        name: "Ratchet & Clank: Rift Apart",
        category: "Gaming Consoles",
        subcategory: "CDs",
        price: 19000,
        originalPrice: null,
        onSale: false,
        preOrder: false,
        image: "images/products/224.png",
        description: "Ratchet & Clank: Rift Apart game disc featuring an action-packed adventure experience for PlayStation players."
    },
    {
        id: 225,
        name: "Mortal Kombat 1",
        category: "Gaming Consoles",
        subcategory: "CDs",
        price: 18500,
        originalPrice: null,
        onSale: false,
        preOrder: false,
        image: "images/products/225.png",
        description: "Mortal Kombat 1 game disc featuring fast-paced fighting gameplay for PlayStation players."
    },
    {
        id: 226,
        name: "Tekken 8",
        category: "Gaming Consoles",
        subcategory: "CDs",
        price: 22000,
        originalPrice: null,
        onSale: false,
        preOrder: false,
        image: "images/products/226.png",
        description: "Tekken 8 game disc featuring fast-paced fighting gameplay for PlayStation players."
    },
    {
        id: 227,
        name: "Spider-Man: Miles Morales",
        category: "Gaming Consoles",
        subcategory: "CDs",
        price: 18000,
        originalPrice: null,
        onSale: false,
        preOrder: false,
        image: "images/products/227.png",
        description: "Spider-Man: Miles Morales game disc featuring a superhero action-adventure experience for PlayStation players."
    },
    {
        id: 228,
        name: "Uncharted: Legacy of Thieves Collection",
        category: "Gaming Consoles",
        subcategory: "CDs",
        price: 21500,
        originalPrice: null,
        onSale: false,
        preOrder: false,
        image: "images/products/228.png",
        description: "Uncharted: Legacy of Thieves Collection game disc featuring cinematic action-adventure experiences for PlayStation players."
    },
    {
        id: 229,
        name: "The Last of Us Part II Remastered",
        category: "Gaming Consoles",
        subcategory: "CDs",
        price: 22000,
        originalPrice: null,
        onSale: false,
        preOrder: false,
        image: "images/products/229.png",
        description: "The Last of Us Part II Remastered game disc featuring a cinematic action-adventure experience for PlayStation players."
    },
    {
        id: 230,
        name: "Horizon Zero Dawn Remastered",
        category: "Gaming Consoles",
        subcategory: "CDs",
        price: 21000,
        originalPrice: null,
        onSale: false,
        preOrder: false,
        image: "images/products/230.png",
        description: "Horizon Zero Dawn Remastered game disc featuring an action-adventure experience for PlayStation players."
    },
    {
        id: 231,
        name: "Far Cry 6",
        category: "Gaming Consoles",
        subcategory: "CDs",
        price: 19500,
        originalPrice: null,
        onSale: false,
        preOrder: false,
        image: "images/products/231.png",
        description: "Far Cry 6 game disc featuring an action-adventure experience for PlayStation players."
    },
    {
        id: 232,
        name: "Cyberpunk 2077: Ultimate Edition",
        category: "Gaming Consoles",
        subcategory: "CDs",
        price: 24000,
        originalPrice: null,
        onSale: false,
        preOrder: false,
        image: "images/products/232.png",
        description: "Cyberpunk 2077: Ultimate Edition game disc featuring a futuristic open-world action-adventure experience for PlayStation players."
    },
    {
        id: 233,
        name: "Hogwarts Legacy",
        category: "Gaming Consoles",
        subcategory: "CDs",
        price: 20500,
        originalPrice: null,
        onSale: false,
        preOrder: false,
        image: "images/products/233.png",
        description: "Hogwarts Legacy game disc featuring a magical open-world action-adventure experience for PlayStation players."
    },
    {
        id: 234,
        name: "Black Myth: Wukong",
        category: "Gaming Consoles",
        subcategory: "CDs",
        price: 22500,
        originalPrice: null,
        onSale: false,
        preOrder: false,
        image: "images/products/234.png",
        description: "Black Myth: Wukong game disc featuring an action-adventure experience inspired by Chinese mythology for PlayStation players."
    },
    {
        id: 235,
        name: "Ghost of Tsushima Director’s Cut",
        category: "Gaming Consoles",
        subcategory: "CDs",
        price: 21500,
        originalPrice: null,
        onSale: false,
        preOrder: false,
        image: "images/products/235.png",
        description: "Ghost of Tsushima Director’s Cut game disc featuring an action-adventure experience for PlayStation players."
    },
    {
        id: 236,
        name: "God of War Ragnarök",
        category: "Gaming Consoles",
        subcategory: "CDs",
        price: 23000,
        originalPrice: null,
        onSale: false,
        preOrder: false,
        image: "images/products/236.png",
        description: "God of War Ragnarök game disc featuring an epic action-adventure experience for PlayStation players."
    },
    {
        id: 237,
        name: "Sony PlayStation 5 Slim Digital Edition – 30th Anniversary Limited Edition Bundle",
        category: "Gaming Consoles",
        subcategory: "Game Devices",
        price: 145000,
        originalPrice: null,
        onSale: false,
        preOrder: false,
        image: "images/products/237.png",
        description: "Sony PlayStation 5 Slim Digital Edition – 30th Anniversary Limited Edition Bundle featuring a special anniversary design and digital gaming experience."
    },
    {
        id: 238,
        name: "PlayStation 5 Slim Console – Ghost of Yōtei Limited Edition Bundle",
        category: "Gaming Consoles",
        subcategory: "Game Devices",
        price: 150000,
        originalPrice: null,
        onSale: false,
        preOrder: false,
        image: "images/products/238.png",
        description: "PlayStation 5 Slim Console – Ghost of Yōtei Limited Edition Bundle featuring a special themed design and digital gaming experience."
    },
    {
        id: 239,
        name: "Sony PlayStation 5 Pro",
        category: "Gaming Consoles",
        subcategory: "Game Devices",
        price: 185000,
        originalPrice: null,
        onSale: false,
        preOrder: false,
        image: "images/products/239.png",
        description: "Sony PlayStation 5 Pro featuring enhanced performance and advanced graphics for an immersive gaming experience."
    },
    {
        id: 240,
        name: "Sony PlayStation 5 Slim",
        category: "Gaming Consoles",
        subcategory: "Game Devices",
        price: 135000,
        originalPrice: null,
        onSale: false,
        preOrder: false,
        image: "images/products/240.png",
        description: "Sony PlayStation 5 Slim featuring a compact design and powerful performance for an immersive gaming experience."
    },
];


// ==========================================
// ELEMENTS
// ==========================================

const productGrid =
    document.getElementById("productGrid");

const productCount =
    document.getElementById("productCount");

const productSearchForm =
    document.getElementById("productSearchForm");

const productSearchInput =
    document.getElementById("productSearch");

const sortProducts =
    document.getElementById("sortProducts");

const categoryButtons =
    document.querySelectorAll(".category-filter");


// ==========================================
// CURRENT FILTERS
// ==========================================

let currentCategory = "all";
let currentSubcategory = "all";
let currentSearch = "";
let currentPage = 1;
const productsPerPage=12;


// ==========================================
// DISPLAY PRODUCTS
// ==========================================

function displayProducts(productList) {

    productGrid.innerHTML = "";


    if (productList.length === 0) {

        productGrid.innerHTML = `

            <div class="no-products">

                <h2>No products found</h2>

                <p>
                    Try another search or category.
                </p>

            </div>

        `;

        productCount.textContent =
            "No products found";

        return;
    }
    const startIndex = (currentPage - 1) * productsPerPage;
    const endIndex = startIndex + productsPerPage;

    const pageProducts = productList.slice(startIndex, endIndex);

    pageProducts.forEach(product => {

        const productCard =
            document.createElement("div");

        productCard.className =
            "product-card";

        // PRICE

        let priceHTML = `
            <p class="product-price">
                Rs. ${product.price.toLocaleString()}
            </p>
        `;
productCard.innerHTML = `

            <div class="product-image">

                <img
                    src="${product.image}"
                    alt="${product.name}"
                >

                

                <button
                    class="wishlist-button"
                    data-id="${product.id}"
                    aria-label="Add ${product.name} to wishlist"
                >
                    ♡
                </button>

            </div>


            <div class="product-info">

                <span class="product-category">

                    ${product.category}

                    ${
                        product.subcategory
                            ? " • " + product.subcategory
                            : ""
                    }

                </span>


                <h3>
                    ${product.name}
                </h3>


                ${priceHTML}


                <div class="product-actions">

                    <button
                        class="view-product-button"
                        data-id="${product.id}"
                    >
                        VIEW
                    </button>


                    <button
                        class="add-cart-button"
                        data-id="${product.id}"
                    >
                        ADD TO CART
                    </button>

                </div>

            </div>

        `;


        productGrid.appendChild(productCard);

    });


    productCount.textContent =
        `Showing ${productList.length} product${
            productList.length !== 1
                ? "s"
                : ""
        }`;


    updateWishlistButtons();
    renderPagination(productList.length);
}

function renderPagination(totalProducts) {

    pagination.innerHTML = "";

    const totalPages =
        Math.ceil(
            totalProducts / productsPerPage
        );

    if (totalPages <= 1) {
        return;
    }


    // ==========================================
    // PREVIOUS BUTTON
    // ==========================================

    const previousButton =
        document.createElement("button");

    previousButton.className =
        "pagination-button";

    previousButton.innerHTML =
        "← Previous";

    previousButton.disabled =
        currentPage === 1;

    previousButton.addEventListener(
        "click",
        function () {

            if (currentPage > 1) {

                currentPage--;

                filterProducts();

                window.scrollTo({
                    top: 0,
                    behavior: "smooth"
                });

            }

        }
    );

    pagination.appendChild(
        previousButton
    );


    // ==========================================
    // PAGE BUTTON HELPER
    // ==========================================

    function createPageButton(page) {

        const button =
            document.createElement("button");

        button.textContent = page;

        button.className =
            "pagination-button";

        if (page === currentPage) {

            button.classList.add(
                "active"
            );

        }

        button.addEventListener(
            "click",
            function () {

                currentPage = page;

                filterProducts();

                window.scrollTo({
                    top: 0,
                    behavior: "smooth"
                });

            }
        );

        pagination.appendChild(
            button
        );

    }


    // ==========================================
    // ELLIPSIS
    // ==========================================

    function createEllipsis() {

        const ellipsis =
            document.createElement("span");

        ellipsis.className =
            "pagination-ellipsis";

        ellipsis.textContent =
            "...";

        pagination.appendChild(
            ellipsis
        );

    }


    // ==========================================
    // PAGE NUMBERS
    // ==========================================

    if (totalPages <= 7) {

        for (
            let page = 1;
            page <= totalPages;
            page++
        ) {

            createPageButton(page);

        }

    } else {

        // --------------------------------------
        // FIRST PAGE
        // --------------------------------------

        createPageButton(1);


        // --------------------------------------
        // EARLY PAGES
        // --------------------------------------

        if (currentPage <= 4) {

            for (
                let page = 2;
                page <= 5;
                page++
            ) {

                createPageButton(page);

            }

            createEllipsis();

        }


        // --------------------------------------
        // MIDDLE PAGES
        // --------------------------------------

        else if (
            currentPage > 4 &&
            currentPage < totalPages - 3
        ) {

            createEllipsis();


            for (
                let page = currentPage - 2;
                page <= currentPage + 2;
                page++
            ) {

                createPageButton(page);

            }


            createEllipsis();

        }


        // --------------------------------------
        // LAST PAGES
        // --------------------------------------

        else {

            createEllipsis();


            for (
                let page = totalPages - 4;
                page <= totalPages - 1;
                page++
            ) {

                createPageButton(page);

            }

        }


        // --------------------------------------
        // LAST PAGE
        // --------------------------------------

        createPageButton(
            totalPages
        );

    }


    // ==========================================
    // NEXT BUTTON
    // ==========================================

    const nextButton =
        document.createElement("button");

    nextButton.className =
        "pagination-button";

    nextButton.innerHTML =
        "Next →";

    nextButton.disabled =
        currentPage === totalPages;

    nextButton.addEventListener(
        "click",
        function () {

            if (
                currentPage <
                totalPages
            ) {

                currentPage++;

                filterProducts();

                window.scrollTo({
                    top: 0,
                    behavior: "smooth"
                });

            }

        }
    );

    pagination.appendChild(
        nextButton
    );

}

// ==========================================
// FILTER PRODUCTS
// ==========================================

function filterProducts() {

    let filteredProducts =
        [...products];


    // ==========================
    // MAIN CATEGORY
    // ==========================

    if (currentCategory !== "all") {

        filteredProducts =
            filteredProducts.filter(product =>

                product.category.toLowerCase() ===
                currentCategory.toLowerCase()

            );

    }


    // ==========================
    // SUBCATEGORY
    // ==========================

    if (
        currentSubcategory !== "all"
    ) {

        filteredProducts =
            filteredProducts.filter(product =>

                product.subcategory &&
                product.subcategory.toLowerCase() ===
                currentSubcategory.toLowerCase()

            );

    }

    // SEARCH
    // ==========================

    if (
        currentSearch.trim() !== ""
    ) {

        const search =
            currentSearch.toLowerCase();


        filteredProducts =
            filteredProducts.filter(product =>

                product.name
                    .toLowerCase()
                    .includes(search)

                ||

                product.category
                    .toLowerCase()
                    .includes(search)

                ||

                (
                    product.subcategory &&
                    product.subcategory
                        .toLowerCase()
                        .includes(search)
                )

            );

    }


    // ==========================
    // SORTING
    // ==========================

    if (sortProducts) {

        const sortValue =
            sortProducts.value;


        if (sortValue === "low") {

            filteredProducts.sort(
                (a, b) =>
                    a.price - b.price
            );

        }


        if (sortValue === "high") {

            filteredProducts.sort(
                (a, b) =>
                    b.price - a.price
            );

        }


        if (sortValue === "name") {

            filteredProducts.sort(
                (a, b) =>
                    a.name.localeCompare(
                        b.name
                    )
            );

        }

    }


    displayProducts(
        filteredProducts
    );

}


// ==========================================
// CATEGORY FILTER BUTTONS
// ==========================================

categoryButtons.forEach(button => {

    button.addEventListener(
        "click",
        function () {

            categoryButtons.forEach(btn => {

                btn.classList.remove(
                    "active"
                );

            });


            this.classList.add(
                "active"
            );


            currentCategory =
                this.dataset.category;


            currentSubcategory =
                this.dataset.subcategory ||
                "all";
            currentPage = 1;

            filterProducts();

        }
    );

});
// ==========================================
// SHOW / HIDE SUBCATEGORIES
// ==========================================

const subcategoryGroups =
    document.querySelectorAll(
        ".subcategory-filters"
    );


function hideAllSubcategories() {

    subcategoryGroups.forEach(group => {

        group.style.display = "none";

    });

}


function showSubcategories(category) {

    hideAllSubcategories();

    const matchingGroup =
        document.querySelector(
            `.subcategory-filters[data-parent="${category}"]`
        );

    if (matchingGroup) {

        matchingGroup.style.display = "block";

    }

}


// MAIN CATEGORY BUTTONS

categoryButtons.forEach(button => {

    if (
        button.classList.contains(
            "subcategory"
        )
    ) {
        return;
    }


    button.addEventListener(
        "click",
        function () {

            const category =
                this.dataset.category;


            if (
                category === "all"
            ) {

                hideAllSubcategories();

                return;

            }


            showSubcategories(
                category
            );

        }
    );

});


// ==========================================
// SEARCH
// ==========================================

if (
    productSearchForm &&
    productSearchInput
) {

    productSearchForm.addEventListener(
        "submit",
        function(event) {

            event.preventDefault();

            currentSearch =
                productSearchInput.value.trim();
            currentPage = 1;

            filterProducts();

        }
    );


    productSearchInput.addEventListener(
        "input",
        function() {

            currentSearch =
                this.value.trim();
            currentPage = 1;

            filterProducts();

        }
    );

}


// ==========================================
// SORTING
// ==========================================

if (sortProducts) {

    sortProducts.addEventListener(
        "change",
        function() {
            currentPage = 1;

            filterProducts();

        }
    );

}


// ==========================================
// CART
// ==========================================

function getCart() {

    return JSON.parse(
        localStorage.getItem(
            "toyHavenCart"
        )
    ) || [];

}


function saveCart(cart) {

    localStorage.setItem(
        "toyHavenCart",
        JSON.stringify(cart)
    );

}


// ==========================================
// ADD TO CART
// ==========================================

function addToCart(productId) {

    const product =
        products.find(
            item =>
                item.id === productId
        );


    if (!product) return;


    const cart =
        getCart();


    const existingProduct =
        cart.find(
            item =>
                item.id === productId
        );


    if (existingProduct) {

        existingProduct.quantity += 1;

    } else {

        cart.push({

            id: product.id,

            name: product.name,

            category: product.category,

            subcategory:
                product.subcategory,

            price: product.price,

            image: product.image,

            quantity: 1

        });

    }


    saveCart(cart);

    updateCartCount();


    showNotification(
        `${product.name} added to cart!`
    );

}


// ==========================================
// ADD TO CART BUTTON
// ==========================================

document.addEventListener(
    "click",
    function(event) {

        if (
            event.target.classList.contains(
                "add-cart-button"
            )
        ) {

            const productId =
                Number(
                    event.target.dataset.id
                );


            addToCart(productId);

        }

    }
);


// ==========================================
// CART COUNTER
// ==========================================

function updateCartCount() {

    const cart =
        getCart();


    const totalItems =
        cart.reduce(
            (total, item) =>
                total + item.quantity,
            0
        );


    const cartLink =
        document.querySelector(
            '.header-icons a[href="cart.html"]'
        );


    if (!cartLink) return;


    let counter =
        cartLink.querySelector(
            ".cart-count"
        );


    if (!counter) {

        counter =
            document.createElement(
                "span"
            );

        counter.className =
            "cart-count";

        cartLink.appendChild(
            counter
        );

    }


    counter.textContent =
        totalItems;

}


// ==========================================
// WISHLIST
// ==========================================

function getWishlist() {

    return JSON.parse(
        localStorage.getItem(
            "toyHavenWishlist"
        )
    ) || [];

}


function saveWishlist(wishlist) {

    localStorage.setItem(
        "toyHavenWishlist",
        JSON.stringify(wishlist)
    );

}


// ==========================================
// TOGGLE WISHLIST
// ==========================================

function toggleWishlist(productId) {

    const wishlist =
        getWishlist();


    const product =
        products.find(
            item =>
                item.id === productId
        );


    if (!product) return;


    const index =
        wishlist.findIndex(
            item =>
                item.id === productId
        );


    if (index === -1) {

        wishlist.push({

            id: product.id,

            name: product.name,

            category: product.category,

            subcategory:
                product.subcategory,

            price: product.price,

            image: product.image,

            description:
                product.description,

            status: "Interested"

        });


        showNotification(
            "Added to wishlist!"
        );

    } else {

        wishlist.splice(
            index,
            1
        );


        showNotification(
            "Removed from wishlist."
        );

    }


    saveWishlist(
        wishlist
    );

    updateWishlistButtons();

}


// ==========================================
// UPDATE WISHLIST BUTTONS
// ==========================================

function updateWishlistButtons() {

    const wishlist =
        getWishlist();


    document
        .querySelectorAll(
            ".wishlist-button"
        )
        .forEach(button => {

            const id =
                Number(
                    button.dataset.id
                );


            const isWishlisted =
                wishlist.some(
                    item =>
                        item.id === id
                );


            if (isWishlisted) {

                button.classList.add(
                    "wishlisted"
                );

                button.innerHTML =
                    "♥";

            } else {

                button.classList.remove(
                    "wishlisted"
                );

                button.innerHTML =
                    "♡";

            }

        });

}


// ==========================================
// WISHLIST BUTTON CLICK
// ==========================================

document.addEventListener(
    "click",
    function(event) {

        if (
            event.target.classList.contains(
                "wishlist-button"
            )
        ) {

            const productId =
                Number(
                    event.target.dataset.id
                );


            toggleWishlist(
                productId
            );

        }

    }
);


// ==========================================
// PRODUCT MODAL
// ==========================================

function showProductModal(product) {

    const existingModal =
        document.querySelector(
            ".product-modal"
        );


    if (existingModal) {

        existingModal.remove();

    }


    const modal =
        document.createElement(
            "div"
        );


    modal.className =
        "product-modal";


    modal.innerHTML = `

        <div class="product-modal-content">

            <button
                class="modal-close"
                aria-label="Close"
            >
                ×
            </button>


            <img
                src="${product.image}"
                alt="${product.name}"
            >


            <div class="modal-info">

                <span>
                    ${product.category}
                    ${
                        product.subcategory
                            ? " • " +
                              product.subcategory
                            : ""
                    }
                </span>


                <h2>
                    ${product.name}
                </h2>


                <p>
                    ${product.description}
                </p>


                <h3>
                    Rs.
                    ${product.price.toLocaleString()}
                </h3>


                <button
                    class="modal-cart-button"
                    data-id="${product.id}"
                >
                    ADD TO CART
                </button>

            </div>

        </div>

    `;


    document.body.appendChild(
        modal
    );


    setTimeout(() => {

        modal.classList.add(
            "show"
        );

    }, 10);


    modal
        .querySelector(
            ".modal-close"
        )
        .addEventListener(
            "click",
            () => {

                modal.remove();

            }
        );


    modal.addEventListener(
        "click",
        event => {

            if (
                event.target === modal
            ) {

                modal.remove();

            }

        }
    );


    modal
        .querySelector(
            ".modal-cart-button"
        )
        .addEventListener(
            "click",
            () => {

                addToCart(
                    product.id
                );

                modal.remove();

            }
        );

}


// ==========================================
// VIEW PRODUCT
// ==========================================

document.addEventListener(
    "click",
    function(event) {

        if (
            event.target.classList.contains(
                "view-product-button"
            )
        ) {

            const productId =
                Number(
                    event.target.dataset.id
                );


            const product =
                products.find(
                    item =>
                        item.id === productId
                );


            if (product) {

                showProductModal(
                    product
                );

            }

        }

    }
);


// ==========================================
// NOTIFICATION
// ==========================================

function showNotification(message) {

    const oldNotification =
        document.querySelector(
            ".shop-notification"
        );


    if (oldNotification) {

        oldNotification.remove();

    }


    const notification =
        document.createElement(
            "div"
        );


    notification.className =
        "shop-notification";


    notification.textContent =
        message;


    document.body.appendChild(
        notification
    );


    setTimeout(() => {

        notification.classList.add(
            "show"
        );

    }, 10);


    setTimeout(() => {

        notification.classList.remove(
            "show"
        );


        setTimeout(() => {

            notification.remove();

        }, 300);

    }, 2000);

}


// ==========================================
// URL FILTERS
// ==========================================

const urlParams =
    new URLSearchParams(
        window.location.search
    );


const urlCategory =
    urlParams.get(
        "category"
    );


const urlSubcategory =
    urlParams.get(
        "subcategory"
    );


// MAIN CATEGORY

if (urlCategory) {

    const matchingButton =
        [
            ...categoryButtons
        ].find(
            button =>

                button.dataset.category
                    .toLowerCase() ===
                urlCategory.toLowerCase()

        );


    if (matchingButton) {

        categoryButtons.forEach(
            button =>
                button.classList.remove(
                    "active"
                )
        );


        matchingButton.classList.add(
            "active"
        );


        currentCategory =
            matchingButton.dataset.category;

    }

}


// SUBCATEGORY

if (urlSubcategory) {

    currentSubcategory =
        urlSubcategory;

}
// ==========================================
// INITIAL DISPLAY
// ==========================================

filterProducts();

updateCartCount();