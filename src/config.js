const BASEDIR = process.cwd();
const { FOLDERS } = require(`${BASEDIR}/constants/folders.js`);
const { MODE } = require(`${FOLDERS.constantsDir}/blend_mode.js`);
const { NETWORK } = require(`${FOLDERS.constantsDir}/network.js`);

const network = NETWORK.eth;

const solanaMetadata = {
  symbol: "STB",
  seller_fee_basis_points: 1000, // Define how much % you want from secondary market sales 1000 = 10%
  external_url: "therandoms.io", // Add your website URL here. Ex. https://thepeanutgalleryandco.co.za/
  creators: [
    {
      address: "YOUR_WALLET_ADDRESS_HERE", // Add your owner wallet address here. Ex. 0x5cE5D823f4bD8Ec610868fBa65832B479152C7E1
      share: 100,
    },
  ],
};

const layerConfigurations = [{
  growEditionSizeTo: 8888
  ,
  layersOrder: [
    { name: "Background"},
    { name: "Body" },
    { name: "Body Gear" },
    { name: "Head" },
    { name: "Head Trait" },
    { name: "Head Gear" },
    { name: "Ears" },
    
// Backgrounds Incompatibilities

  ],
  incompatibleTraits: {
// ------- Light blue ------- //
    "Background/Light blue": [
      "Body/Aquarium",
      "Body/Light blue",
      // Body Gear
      "Body Gear/Light blue puffy jacket",
      "Body Gear/Light blue randoms tee",
      "Body Gear/Light blue scarf",
      // Head 
      "Head/Light blue",
      "Head/Light blue cat",
    ],
// ------- Light blue clouded ------- //
    "Background/Light blue clouded": [
      "Body/Aquarium",
      "Body/Light blue",
      // Body Gear
      "Body Gear/Light blue puffy jacket",
      "Body Gear/Light blue randoms tee",
      "Body Gear/Light blue scarf",
      "Body Gear/Light blue open shirt",
      // Head 
      "Head/Light blue",
      "Head/Light blue cat",
    ],
    // ------- Light green -------
    "Background/Light green": [
      "Body/Light green",
      "Body/Open orange cat",
      "Body/Levitating light green",
      "Body/Open yellow random",
      // Body Gear
      "Body Gear/Light green scales",
      // Head 
      "Head/Light green",
      "Head/Light green cat",
    ],

    // ------ Orange -------
    "Background/Orange": [
      "Body/Orange",
      "Body/Orange two piece",
      "Body/Open yellow random with hat",
      "Body/Levitating orange",
      // Body Gear
      "Body Gear/Orange cracked",
      "Body Gear/Orange octopus",
      "Body Gear/Orange stripped",
      // Head       
      "Head/Orange",
      "Head/Orange cat",
      "Head/Orange ape",
    ],
    // ------ Red -------
    "Background/Red": [
      "Body/Red",
      "Body/Open yellow cat",
      // Body Gear
      "Body Gear/Red dripped",
      "Body Gear/Red hoodie",
      "Body Gear/Red school pull",
      "Body Gear/Red tee snake", 
      "Body Gear/Red stripped", 
      // Head 
      "Head/Red",
      "Head/Red clock",
      "Head/Red apple",     
    ],
    // ------ Violet -------
    "Background/Violet": [
      "Body/Violet",
      "Body/Levitating violet",
      "Body/Violet two piece",
      // Body Gear
      "Body Gear/Violet cat tee",
      "Body Gear/Violet cracked",
      "Body Gear/Violet octopus", 
      // Head          
      "Head/Violet",
      "Head/Violet cat",
      "Head/Violet box"

    ],
    // ------ Yellow -------
    "Background/Yellow": [
      "Body/Yellow",
      "Body/Yellow two piece",
      "Body/Levitating yellow",
      "Body/Open green random",
      // Body Gear
      "Body Gear/Yellow blue pocket shirt",
      "Body Gear/Yellow dripped",
      "Body Gear/Yellow octopus",
      "Body Gear/Orange spotted",
      "Body Gear/Yellow orange spotted shirt",
      // Head  
      "Head/Yellow",
      "Head/Yellow ape",
      "Head/Bee hive"     

    ],
     // ------ Green -------
    "Background/Green": [
      "Body/Green",
      // Body Gear
      "Body Gear/Green camo hoodie",
      "Body Gear/Green cracked",
      "Body Gear/Green dripped",
      "Body Gear/Green orange pocket shirt",
      "Body Gear/Green puffy jacket",
      "Body Gear/Green school pull",
      // Head 
      "Head/Green"
    ],

     // ------ Blue -------
    "Background/Blue": [
      "Body/Levitating blue",
      "Body/Blue",

      // Body Gear
      "Body Gear/Blue cracked",
      "Body Gear/Blue dripped",
      "Body Gear/Blue randoms hoodie",
      "Body Gear/Blue puffy jacket",
      "Body Gear/Blue scales",
      "Body Gear/Blue skull tee",
      "Body Gear/Blue violet camo tee",
      // Head 
      "Head/Blue clock",
      "Head/Blue ape",
    ],

     // ------ Blue clouded -------
    "Background/Blue clouded": [
      "Body/Levitating blue",
     // Body Gear
     "Body Gear/Blue cracked",
     "Body Gear/Blue dripped",
     "Body Gear/Blue randoms hoodie",
     "Body Gear/Blue puffy jacket",
     "Body Gear/Blue scales",
     "Body Gear/Blue skull tee",
     "Body Gear/Blue violet camo tee",
      // Head 
      "Head/Blue clock",
      "Head/Blue ape", 
    ],

     // ------ Yellow  clouded -------
    "Background/Yellow clouded": [
      "Body/Yellow",
      "Body/Yellow two piece",
      "Body/Levitating yellow",
      "Body/Open green random",
      // Body Gear
      "Body Gear/Yellow blue pocket shirt",
      "Body Gear/Yellow dripped",
      "Body Gear/Yellow octopus",
      "Body Gear/Orange spotted",
      "Body Gear/Yellow orange spotted shirt",
      // Head 
      "Head/Yellow",
      "Head/Yellow ape",
      "Head/Bee hive"  
      
    ],

     // ------ Beige -------
    "Background/Beige": [
      // Body Gear
      "Body Gear/Andy's banana tee",
      "Body Gear/Beige hoodie",
      "Body Gear/Beige ILOVENFT tee",
      "Body Gear/Beige work shirt",
      "Body Gear/Beige smiley tee",
      // Head 
      "Head/Beige box",

    ],

    // !!!!!!!!!!!!!!!!!!!! ------  SPIRAL/SPECIAL BackgroundS ------- !!!!!!!!!!!!!
     // !!!!! ------ Yellow  spiral ------- !!!!!

    "Background/Yellow spiral": [
      "Body/Levitating blue",
      "Body/Yellow",
      "Body/Aquarium",
      "Body/Open red cat",
      "Body/Open orange cat",
      "Body/Levitating light green",
      "Body/Open yellow random",
      "Body/Orange two piece",
      "Body/Open yellow random with hat",
      "Body/Levitating orange",
      "Body/Open yellow cat",
      "Body/Levitating violet",
      "Body/Open green random wall eyed",
      "Body/Violet two piece",
      "Body/Open green random",
      "Body/Levitating yellow",
      "Body/Yellow two piece",
       // BODYGEAR
       "Body Gear/Blue puffy jacket",
       "Body Gear/Green puffy jacket",
       "Body Gear/Light blue puffy jacket",
       "Body Gear/Astronaut",

      // Head 
      "Head/Yellow",
      "Head/Yellow ape",
      "Head/Bee hive",
      "Head/Violet cat",
      "Head/Orange cat",
      "Head/Light green cat",
      "Head/Light blue cat",


          // !!!!! ------ Red Violet ------- !!!!!
    ],
    "Background/Red violet spiral": [
      "Body/Levitating blue",
      "Body/Aquarium",
      "Body/Open red cat",
      "Body/Open orange cat",
      "Body/Levitating light green",
      "Body/Open yellow random",
      "Body/Orange two piece",
      "Body/Open yellow random with hat",
      "Body/Levitating orange",
      "Body/Open yellow cat",
      "Body/Levitating violet",
      "Body/Open green random wall eyed",
      "Body/Violet two piece",
      "Body/Open green random",
      "Body/Levitating yellow",
      "Body/Yellow two piece",
      // Bodygear
       "Body Gear/Blue puffy jacket",
       "Body Gear/Green puffy jacket",
       "Body Gear/Light blue puffy jacket",
       "Body Gear/Astronaut",

          // !!!!! ------ Blue  spiral ------- !!!!!
    ],
    "Background/Blue spiral": [
      "Body/Levitating blue",
      "Body/Aquarium",
      "Body/Open red cat",
      "Body/Open orange cat",
      "Body/Levitating light green",
      "Body/Open yellow random",
      "Body/Orange two piece",
      "Body/Open yellow random with hat",
      "Body/Levitating orange",
      "Body/Open yellow cat",
      "Body/Levitating violet",
      "Body/Open green random wall eyed",
      "Body/Violet two piece",
      "Body/Open green random",
      "Body/Levitating yellow",
      "Body/Yellow two piece",
      "Body/Blue",
    // Body Gear 
     "Body Gear/Blue cracked",
     "Body Gear/Blue dripped",
     "Body Gear/Blue randoms hoodie",
     "Body Gear/Blue scales",
     "Body Gear/Blue skull tee",
     "Body Gear/Blue violet camo tee",
     // Bodygear
     "Body Gear/Blue puffy jacket",
     "Body Gear/Green puffy jacket",
     "Body Gear/Light blue puffy jacket",
     "Body Gear/Astronaut",
      // HEADS INCOMP 
      "Head/Violet cat",
      "Head/Light green cat",
      "Head/Light blue cat",
      "Head/Orange cat",
      "Head/Blue ape",
      "Head/Blue clock",

    ],
    "Background/Orange spiral": [
      "Body/Levitating blue",
      "Body/Aquarium",
      "Body/Open red cat",
      "Body/Open orange cat",
      "Body/Levitating light green",
      "Body/Open yellow random",
      "Body/Orange two piece",
      "Body/Orange",
      "Body/Open yellow random with hat",
      "Body/Levitating orange",
      "Body/Open yellow cat",
      "Body/Levitating violet",
      "Body/Open green random wall eyed",
      "Body/Violet two piece",
      "Body/Open green random",
      "Body/Levitating yellow",
      "Body/Yellow two piece",
      // Bodygear
      "Body Gear/Blue puffy jacket",
      "Body Gear/Green puffy jacket",
      "Body Gear/Light blue puffy jacket",
      "Body Gear/Astronaut",
 // HEADS INCOMP 
      "Head/Violet cat",
      "Head/Light green cat",
      "Head/Light blue cat",
      "Head/Orange ape",
      "Head/Orange head",
      "Head/Orange cat",

    ],
    "Background/Light blue yellow spiral": [
      "Body/Levitating blue",
      "Body/Aquarium",
      "Body/Open red cat",
      "Body/Open orange cat",
      "Body/Levitating light green",
      "Body/Open yellow random",
      "Body/Orange two piece",
      "Body/Open yellow random with hat",
      "Body/Levitating orange",
      "Body/Open yellow cat",
      "Body/Levitating violet",
      "Body/Open green random wall eyed",
      "Body/Violet two piece",
      "Body/Open green random",
      "Body/Levitating yellow",
      "Body/Yellow two piece",
      // Bodygear
      "Body Gear/Blue puffy jacket",
      "Body Gear/Green puffy jacket",
      "Body Gear/Light blue puffy jacket",
      "Body Gear/Astronaut",
    ],
    "Background/Green Spiral": [
      "Body/Levitating blue",
      "Body/Aquarium",
      "Body/Open red cat",
      "Body/Open orange cat",
      "Body/Levitating light green",
      "Body/Open yellow random",
      "Body/Orange two piece",
      "Body/Open yellow random with hat",
      "Body/Levitating orange",
      "Body/Open yellow cat",
      "Body/Levitating violet",
      "Body/Open green random wall eyed",
      "Body/Violet two piece",
      "Body/Open green random",
      "Body/Levitating yellow",
      "Body/Yellow two piece",
      // Bodygear
      "Body Gear/Blue puffy jacket",
      "Body Gear/Green puffy jacket",
      "Body Gear/Light blue puffy jacket",
      "Body Gear/Astronaut"
    ],

    // ------ FRAME BACKGROUNDS EXCEPTIONS -------
    "Background/Yellow frame": [
      // Body Gear
      "Head Gear/Cloud",
      "Head/Violet box",
     ],

     "Background/Violet frame": [
      // Body Gear
      "Head Gear/Cloud",
      "Head/Violet box",
     ],

     "Background/Light blue frame": [
      // Body Gear
      "Head Gear/Cloud",
      "Head/Violet box",
     ],

     "Background/Light green frame": [
      // Body Gear
      "Head Gear/Cloud",
      "Head/Violet box",
     ],

     "Background/Orange frame": [
      // Body Gear
      "Head Gear/Cloud",
      "Head/Violet box",
     ],

     "Background/Red frame": [
      // Body Gear
      "Head Gear/Cloud",
      "Head/Beige box",
      "Head/Rubik box",
      "Head/Violet box",
     ],

     "Background/Yellow frame": [
      // Body Gear
      "Head Gear/Cloud",
      "Head/Beige box",
      "Head/Rubik box",
      "Head/Violet box",
     ],


     // ################ Body ##################
    "Body/Green": [
      // Body Gear
      "Body Gear/Green camo hoodie",
      "Body Gear/Green cracked",
      "Body Gear/Green dripped",
      "Body Gear/Green orange pocket shirt",
      "Body Gear/Green puffy jacket",
      "Body Gear/Green school pull",
      // Head 
    ],

    "Body/Blue": [
      // Body Gear
      "Body Gear/Blue stripped",
      "Body Gear/Blue puffy jacket",
      "Body Gear/Blue cracked",
      "Body Gear/Blue dripped",
      "Body Gear/Blue randoms hoodie",
      "Body Gear/Blue skull tee",
      "Body Gear/Blue violet camo tee",
      // Head 
    ],


    "Body/Light blue": [
      // Body Gear
     "Body Gear/Light blue puffy jacket",
     "Body Gear/Light blue randoms tee",
     "Body Gear/Light blue scarf",
     "Body Gear/Light blue open shirt",
     // Head 
     // Head Gear


    ],
    "Body/Light green": [
    // Body Gear
     "Body Gear/Light green scales", 
     // Head 
    ],
    "Body/Orange": [
      // Body Gear
      "Body Gear/Orange cracked",
      "Body Gear/Orange octopus",
      "Body Gear/Orange stripped",
     // Head 
    ],
    "Body/Red": [
      // Body Gear
      "Body Gear/Red dripped",
      "Body Gear/Red hoodie",
      "Body Gear/Red school pull",
      "Body Gear/Red tee snake", 
      "Body Gear/Red stripped", 
      "Body Gear/Red blue overalls", 
      "Body Gear/Heart necklace", 
     // Head 
     // Head Traits  
     "Head trait/Red mask", 
    ],

    "Body/Violet": [
      // Body Gear
      "Body Gear/Violet cat tee",
      "Body Gear/Violet cracked",
      "Body Gear/Violet octopus", 
     // Head 
     "Head trait/Violet skull", 
    ],

    "Body/Yellow": [
      // Body Gear
      "Body Gear/Yellow blue pocket shirt",
      "Body Gear/Yellow dripped",
      "Body Gear/Yellow octopus",
      "Body Gear/Yellow orange spotted shirt",
      "Body Gear/Yellow stripped"
     // Head 
    ],


              // @@@@@@@@@@@@@@@@@@@@       Heads exceptions     @@@@@@@@@@@@@@@
    "Head/Violet": [
     "Head Trait/Violet skull", 
     "Head Trait/Pablo's face",
    ],

    "Head/Green": [
      "Head Gear/Flower", 
     ],

    "Head/Light blue": [
    "Head Trait/Light blue mask",
    "Head Gear/Diamond",
     ],

      "Head/Red": [
      "Head Trait/Red mask", 
      "Head Gear/Heart", 
     ],


 //              99999999999################ EXCETPIONS Head Gear ##################999999999
       "Head Gear/Ninja": [
        "Head Trait/Multi eyes",
        "Head Trait/Light blue mask",
        "Head Trait/VR mask",
        "Head Trait/Glasses one",
        "Head Trait/Glasses two",
        "Head Trait/Reverse",
      ],

      

      // PPPPPPPPPPPPP    Astronaut    PPPPPPPPPPPPPPPPP

        "Body Gear/Astronaut": [
          "Head Gear/Durag",
          "Head Gear/Astronaut"
          ], 

        // PPPPPPPPPPPPP    Magritte    PPPPPPPPPPPPPPPPPP

        "Body Gear/Magritte suit": [
          "Head Trait/Magritte face"
          ], 

 // PPPPPPPPPPPPP    Bodygear exception - Green puffy  PPPPPPPPPPPPPPPPPP
          "Body Gear/Green puffy jacket": [
            "Head Gear/Ninja"
            ], 
      
    



     //         77777777777777777333333  EXCETPIONS Head Traits 33333377777777777777777
     "Head Trait/Cat left looking": [
      "Head/Green",
      "Head/Light blue",
      "Head/Light green",
      "Head/Orange",
      "Head/Red",
      "Head/Violet",
      "Head/Yellow",
      "Head/Beige box",
      "Head/Orange ape",
      "Head/Blue ape",
      "Head/Blue clock",
      "Head/Red clock",
      "Head/Yellow ape",
      "Head/Rubik box",
  ],
  "Head Trait/Cat right looking": [
    "Head/Green",
    "Head/Light blue",
    "Head/Light green",
    "Head/Orange",
    "Head/Red",
    "Head/Violet",
    "Head/Yellow",
    "Head/Beige box",
    "Head/Orange ape",
    "Head/Blue ape",
    "Head/Blue clock",
    "Head/Red clock",
    "Head/Yellow ape",
    "Head/Rubik box",
],
"Head Trait/Cat crossed eyes": [
  "Head/Green",
  "Head/Light blue",
  "Head/Light green",
  "Head/Orange",
  "Head/Red",
  "Head/Violet",
  "Head/Yellow",
  "Head/Beige box",
  "Head/Orange ape",
  "Head/Blue ape",
  "Head/Blue clock",
  "Head/Red clock",
  "Head/Yellow ape",
  "Head/Rubik box",
],
"Head Trait/Cat cyclops": [
  "Head/Green",
  "Head/Light blue",
  "Head/Light green",
  "Head/Orange",
  "Head/Red",
  "Head/Violet",
  "Head/Yellow",
  "Head/Beige box",
  "Head/Orange ape",
  "Head/Blue ape",
  "Head/Blue clock",
  "Head/Red clock",
  "Head/Yellow ape",
  "Head/Rubik box",
],

"Head Trait/Multi eyes": [
  // Head Gear
  "Head Gear/Ninja",
  "Head Gear/Light green snakes",
  "Head Gear/Red beige snakes",
  "Head Gear/Diamond",
  "Head Gear/Heart",
  "Head Gear/Plant",
  "Head Gear/Fire",
  "Head Gear/Yellow hair",
  "Head Gear/Yellow bowl hair",
  "Head Gear/Orange bowl hair",
  "Head Gear/Beige spikes",
  "Head Gear/Flower",
  "Head Gear/Yellow spikes",
  "Head Gear/Cracked egg",
  "Head Trait/Magritte face",
],

"Head Trait/Double eyes": [
  // Head Gear
  "Head Gear/Ninja",
  "Head Gear/Durag",
  "Head Gear/Light green snakes",
  "Head Gear/Flower",
  "Head Trait/Magritte face",
],

"Head Trait/Red mask": [
  // Head Gear
  "Head Gear/Ninja",
  "Head Gear/Light green snakes",
  "Head Gear/Red beige snakes",
  "Head Gear/Diamond",
  "Head Gear/Heart",
  "Head Gear/Fire",
  "Head Gear/Yellow hair",
  "Head Gear/Yellow bowl hair",
  "Head Gear/Orange bowl hair",
  "Head Gear/Beige spikes",
  "Head Gear/Flower",
  "Head Gear/Yellow spikes",
  "Head Gear/Cracked egg",
  "Head Trait/Magritte face",

],
"Head Trait/Light blue mask": [
  // Head Gear
  "Head Gear/Ninja",
  "Head Gear/Light green snakes",
  "Head Gear/Red beige snakes",
  "Head Gear/Diamond",
  "Head Gear/Heart",
  "Head Gear/Fire",
  "Head Gear/Yellow hair",
  "Head Gear/Yellow bowl hair",
  "Head Gear/Orange bowl hair",
  "Head Gear/Beige spikes",
  "Head Gear/Flower",
  "Head Gear/Yellow spikes",
  "Head Gear/Cracked egg",
  "Head Trait/Magritte face",
],
"Head Trait/VR mask": [
  // Head Gear
  "Head Gear/Ninja",
  "Head Gear/Diamond",
  "Head Gear/Durag",
  "Head Gear/Heart",
  "Head Gear/Astronaut",
  "Head Gear/Fire",
  "Head Gear/Yellow hair",
  "Head Gear/Yellow long hair",
  "Head Gear/Yellow bowl hair",
  "Head Gear/Orange bowl hair",
  "Head Gear/Orange long hair",
  "Head Gear/Flower",
  "Head Gear/Cracked egg",
  "Head Trait/Magritte face",
],

"Head Trait/Beige skull red eyes": [
  "Head Gear/Ninja",
  "Head Trait/Magritte face",
  "Head Gear/Astronaut"
 ],

 "Head Trait/Violet skull": [
  "Head Gear/Ninja",
  "Head Trait/Magritte face",
  "Head Gear/Astronaut"
 ],

 "Head Trait/Bottom skull 3 eyes": [
  "Head Gear/Astronaut"
 ],
 "Head Trait/Bottom skull": [
  "Head Gear/Astronaut", 
  "Head Gear/Magritte face", 
  "Head Gear/Ninja"

 ],
 "Head Trait/Beige robot skull": [
  "Head Gear/Astronaut"
 ],



    // !!!!!!!!! INVISIBLE Head Trait EXCEPTIONS !!!!!!!! //
    "Head Trait/None": [
      // Body Gear
      "Head/Green",
      "Head/Light blue",
      "Head/Light green",
      "Head/Orange",
      "Head/Red",
      "Head/Violet",
      "Head/Yellow",
    ],



// -------------------------------- ***** Final Traits ***** ---------------------------
// FINAL & Dependencies BODIES!!! 

  },
  dependentTraits: {
    "Body/Open green random": [
      "Body Gear/None",
    ],
    "Body/Levitating blue": [
      "Body Gear/None",
    ],
    "Body/Blue": [
      "Head/Blue ape",
    ],
    "Body/Aquarium": [
      "Body Gear/None",
    ],
    "Body/Open red cat": [
      "Body Gear/None",
    ],
    "Body/Open orange cat": [
      "Body Gear/None",
    ],
    "Body/Levitating light green": [
      "Body Gear/None",
    ],
    "Body/Open yellow random": [
      "Body Gear/None",
    ],
    "Body/Orange two piece": [
      "Body Gear/None",
    ],
    "Body/Levitating orange": [
      "Body Gear/None",
    ],
    "Body/Open yellow random with hat": [
      "Body Gear/None",
    ],
    "Body/Open yellow cat": [
      "Body Gear/None",
    ],
    "Body/Levitating violet": [
      "Body Gear/None",
    ],
    "Body/Open green random wall eyed": [
      "Body Gear/None",
    ],
    "Body/Violet two piece": [
      "Body Gear/None",
    ],
    "Body/Yellow two piece": [
      "Body Gear/None",
    ],
    "Body/Open green random": [
      "Body Gear/None"
    ],
    "Body/Levitating yellow": [
      "Body Gear/None"
    ],  

 // !!!!!!!!!! DEPENDENCIES BODY GEAR - BODY !!!!!!!!!!!

    "Body Gear/Orange spotted": [
      "Body/Yellow",
      "Body/Blue",
      "Body/Violet",
    ],

    "Body Gear/Blue spotted": [
      "Body/Red",
      "Body/Orange",
      "Body/Green",
    ],

    "Body Gear/Earth": [
      "Body/Blue",
      "Body/Light blue",
    ],

    "Body Gear/Scales": [
      "Body/Blue",
      "Body/Light blue",
      "Body/Green",
      "Body/Light green",
    ],
    "Body Gear/Mondrian": [
      "Body/Blue",
      "Body/Yellow",
      "Body/Red"
    ],

    "Body Gear/Fire": [
      "Body/Yellow",
      "Body/Orange",
    ],

            // !!!!!!!!!! DEPENDENCIES BODY - HEADS !!!!!!!!!!!
          "Body/Green": [
            "Head/Green",
            "Head/Bee hive",
            "Head/Beige box",
            "Head/Blue clock",
            "Head/Red apple",
            "Head/Red clock",
            "Head/Rubik box",
            "Head/Violet box",
          ],
          "Body/Light blue": [
            "Head/Light blue",
            "Head/Bee hive",
            "Head/Beige box",
            "Head/Blue clock",
            "Head/Light blue cat",
            "Head/Red apple",
            "Head/Red clock",
            "Head/Rubik box",
            "Head/Violet box",
          ],
          "Body/Light green": [
            "Head/Light green",
            "Head/Bee hive",
            "Head/Beige box",
            "Head/Blue clock",
            "Head/Light green cat",
            "Head/Red apple",
            "Head/Red clock",
            "Head/Rubik box",
            "Head/Violet box",
          ],
          "Body/Orange": [
            "Head/Orange",
            "Head/Bee hive",
            "Head/Beige box",
            "Head/Blue clock",
            "Head/Orange ape",
            "Head/Orange cat",
            "Head/Red apple",
            "Head/Red clock",
            "Head/Rubik box",
            "Head/Violet box",
          ],
          "Body/Red": [
            "Head/Red",
            "Head/Bee hive",
            "Head/Beige box",
            "Head/Blue clock",
            "Head/Red apple",
            "Head/Red clock",
            "Head/Rubik box",
            "Head/Violet box"
          ],
          "Body/Violet": [
            "Head/Violet",
            "Head/Bee hive",
            "Head/Beige box",
            "Head/Blue clock",
            "Head/Red apple",
            "Head/Red clock",
            "Head/Rubik box",
            "Head/Violet box",
            "Head/Violet cat",
          ],
          "Body/Yellow": [
            "Head/Yellow",
            "Head/Bee hive",
            "Head/Beige box",
            "Head/Blue clock",
            "Head/Red apple",
            "Head/Pablo's face",
            "Head/Red clock",
            "Head/Rubik box",
            "Head/Violet box",
            "Head/Yellow ape",
          ],

          "Body/Blue": [
            "Head/Bee hive",
            "Head/Beige box",
            "Head/Blue ape",
            "Head/Blue clock",
            "Head/Red apple",
            "Head/Red clock",
            "Head/Rubik box",
            "Head/Violet box",
          ],

      // !!!!!!!!!!!!!! FINAL HEAD TRAITS !!!!!!!!!!!!!!
    "Head Trait/Bottom skull": [
      "Ears/None"
      ],   
      "Head Trait/Bottom skull 3 eyes": [
      "Head Gear/None",
      "Ears/None"

      ],
      "Head Trait/Discord mask": [
      "Head Gear/None",
      "Head Gear/Plant",
      "Ears/None"
      ],   
      "Head Trait/Beige robot skull": [
      "Head Gear/None",
      "Ears/None"
    ],   
    "Head Trait/Beige skull red eyes": [
    "Ears/None"

      ],
      "Head Trait/Robot one": [
      "Head Gear/None",
      "Ears/None"
      ],
      "Head Trait/Robot two": [
      "Head Gear/None",
      "Ears/None"
      ],
      "Head Trait/Violet skull": [
        "Ears/None"
      ],
       "Head Trait/Magritte face": [
        "Head Gear/None",
        "Ears/None"
       ],
       

      
 // !!!!!!!!!!!!!! FINAL HEADS !!!!!!!!!!!!!!
      "Head/Bee hive": [
        "Head Trait/None",
        "Head Gear/None",
        "Ears/None"
      ],
      "Head/Yellow ape": [
        "Head Trait/Left looking",
        "Head Trait/Right looking",
        "Head Trait/Crossed eyes",
        "Head Trait/Yellow right",
        "Head Trait/Glasses one",
        "Head Trait/Glasses two",
        "Head Trait/Cyclops",
        "Head Gear/Beige bucket",
        "Head Gear/Light blue bucket",
        "Head Gear/Green bucket",
        "Head Gear/Red bucket",
        "Head Gear/Beige hat",
        "Head Gear/Green hat",
        "Head Gear/Orange hat",
        "Ears/None"
      ],
      "Head/Light blue ape": [
        "Head Trait/Left looking",
        "Head Trait/Right looking",
        "Head Trait/Crossed eyes",
        "Head Trait/Yellow Right looking",
        "Head Trait/Glasses one",
        "Head Trait/Glasses two",
        "Head Trait/Cyclops",
        "Head Gear/Beige bucket",
        "Head Gear/Light blue bucket",
        "Head Gear/Green bucket",
        "Head Gear/Red bucket",
        "Head Gear/Beige hat",
        "Head Gear/Green hat",
        "Head Gear/Orange hat",
        "Ears/None"
      ],
      "Head/Violet box": [
        "Head Trait/None",
        "Head Gear/None",
        "Ears/None"
      ],
      "Head/Violet cat": [
        "Head Trait/Cat left looking",
        "Head Trait/Cat right looking",
        "Head Trait/Cat crossed eyes",
        "Head Trait/Cat Cyclops",
        "Head Gear/None",
        "Ears/None"
      ],
      "Head/Rubik box": [
        "Head Trait/None",
        "Head Gear/None",
        "Ears/None"
      ],
      "Head/Red clock": [
        "Head Trait/Left looking",
        "Head Trait/Right looking",
        "Head Trait/Crossed eyes",
        "Head Trait/Yellow Right looking",
        "Head Gear/None",
        "Ears/None",
      ],
      "Head/Red apple": [
        "Head Trait/Left looking",
        "Head Trait/Right looking",
        "Head Trait/Crossed eyes",
        "Head Trait/Double eyes",
        "Head Trait/Glasses one",
        "Head Trait/Glasses two",
        "Head Trait/Cyclops",
        "Head Trait/Orange Mustache",
        "Head Trait/Reverse",
        "Head Trait/Yellow mustache",
        "Head Trait/Yellow Right looking",
        "Head Gear/None",
        "Ears/None"
      ],
    
      "Head/Orange cat": [
        "Head Trait/Cat left looking",
        "Head Trait/Cat right looking",
        "Head Trait/Cat crossed eyes",
        "Head Trait/Cat cyclops",
        "Head Gear/None",
        "Ears/None"
      ],
      "Head/Orange ape": [
        "Head Trait/Left looking",
        "Head Trait/Right looking",
        "Head Trait/Crossed eyes",
        "Head Trait/Yellowright",
        "Head Trait/Glasses one",
        "Head Trait/Glasses two",
        "Head Trait/Cyclops",
        "Head Gear/Beige bucket",
        "Head Gear/Light blue bucket",
        "Head Gear/Green bucket",
        "Head Gear/Red bucket",
        "Head Gear/Beige hat",
        "Head Gear/Green hat",
        "Head Gear/Orange hat",
        "Ears/None"
      ],
      "Head/Light green cat": [
        "Head Trait/Cat left looking",
        "Head Trait/Cat right looking",
        "Head Trait/Cat crossed eyes",
        "Head Trait/Cat Cyclops",
        "Head Gear/None",
        "Ears/None"
      ],
      "Head/Light blue cat": [
        "Head Trait/Cat left looking",
        "Head Trait/Cat right looking",
        "Head Trait/Cat crossed eyes",
        "Head Trait/Cat Cyclops",
        "Head Gear/None",
        "Head Gear/Diamond",
        "Ears/None"
      ],
      "Head/Blue clock": [
        "Head Trait/Left looking",
        "Head Trait/Right looking",
        "Head Trait/Crossed eyes",
        "Head Trait/Yellowright",
        "Head Gear/None",
        "Ears/None"
      ],
      "Head/Blue ape": [
        "Head Trait/Left looking",
        "Head Trait/Right looking",
        "Head Trait/Crossed eyes",
        "Head Trait/Yellowright",
        "Head Trait/Glasses one",
        "Head Trait/Glasses two",
        "Head Trait/Cyclops",
        "Head Gear/Beige bucket",
        "Head Gear/Light blue bucket",
        "Head Gear/Green bucket",
        "Head Gear/Red bucket",
        "Head Gear/Beige hat",
        "Head Gear/Green hat",
        "Head Gear/Orange hat",
        "Ears/None"
      ],

      "Head/Beige box": [
        "Head Trait/None",
        "Head Gear/None",
        "Ears/None"
      ],

     // 8888888888888888888888 FINAL Head Traits 8888888888888888888888

     "Head Trait/Pablo's face": [
      "Head Gear/None",
      "Head Gear/Andy's banana",
      "Head Gear/Unicorn",
      "Head Gear/Beige horns",
      "Head Gear/Plant",
      "Head Gear/Blue horns",
      "Head Gear/Astronaut",
      "Head Gear/Yellow burst",
      "Head Gear/Blue burst",
      "Ears/None"
    ],
    
    
  

     // 8888888888888888888888 FINAL Head Gear 8888888888888888888888

     "Head Gear/Beige horns": [
      "Ears/None"
    ],

    "Head Gear/Blue horns": [
      "Ears/None"
    ],
    "Head Gear/Light green snakes": [
      "Ears/None"
    ],
    "Head Gear/Red beige snakes": [
      "Ears/None"
    ],
    "Head Gear/Astronaut": [
      "Ears/None"
    ],
   



   }

  
  
},

];

// // If you have selected Solana then the collection starts from 0 automatically
// const layerConfigurations = [
//   {
//     growEditionSizeTo: 2,
//     layersOrder: [
//       { name: "Background" },
//       { name: "Eyeball" },
//       { name: "Eye color" },
//       { name: "Iris" },
//       { name: "Shine" },
//       { name: "Bottom lid" },
//       { name: "Top lid" },
//     ]
//   },
// ];

/* Example of configuration settings
const layerConfigurations = [
  {
    growEditionSizeTo: 2,
    maxRepeatedTraits: 1,
    layersOrder: [
      { name: "Backgrasqwsound" },
      { name: "Eyeball" },
      { name: "Eye color", maxRepeatedTrait: 2 },
      { name: "Iris" },
      { name: "Shine" },
      { name: "Bottom lid", maxRepeatedTrait: 3 },
      { name: "Top lid" },
    ],
    layerItemsMaxRepeatedTraits: [
      { name: "Background/Black ", layerItemMaxRepeatedTrait: 4 },
      { name: "Eyeball/Red", layerItemMaxRepeatedTrait: 5 }
    ],
    incompatibleTraits: {
      "Eye color/Cyan": [
        "Eyeball/Red",
      ],
      "Iris/Large": [
        "Bottom lid/High",
        "Top lid/High"
      ],
    },
    dependentTraits: {
      "Eye color/Cyan": [
        "Eyeball/White",
      ],
      "Background/Blue": [
        "Eyeball/Red",
        "Top lid/low"
      ],
    }
  },
];
*/

const shuffleLayerConfigurations = false;

const debugLogs = false;

const format = {
  width: 2000 ,
  height: 2000,
  smoothing: false,
};

const gif = {
  export: false,
  repeat: 0,
  quality: 100,
  delay: 500,
};

const text = {
  only: false,
  color: "#ffffff",
  size: 20,
  xGap: 40,
  yGap: 40,
  align: "left",
  baseline: "top",
  weight: "regular",
  family: "Courier",
  spacer: " => ",
};

const pixelFormat = {
  ratio: 2 / 270,
};

const background = {
  generate: false,
  brightness: "80%",
  static: false,
  default: "#000000",
};

// These are additional items that will be added to each NFT. You can remove them or add new ones as well if needed.
// Uncomment the lines if you would like to use these and update the details.
const extraMetadata = {
  //creator: "NFT_CREATOR_HERE", // Add the creator of the NFT collection here. Ex. The Peanut Gallery And Co
  //external_url: "YOUR_WEBSITE_URL_HERE"  // Add your website URL here. This will be added to each of your NFTs. Ex. https://thepeanutgalleryandco.co.za/
};
 
const rarityDelimiter = "#";

const uniqueDnaTorrance = 10000000;

const preview = {
  thumbPerRow: 10,
  thumbWidth: 200,
  imageRatio: format.height / format.width,
  imageName: "preview.png",
};

const preview_gif = {
  numberOfImages: 5,
  order: "ASC", // ASC, DESC, MIXED
  repeat: 0,
  quality: 100,
  delay: 500,
  imageName: "preview.gif",
};

module.exports = {
  format,
  background,
  uniqueDnaTorrance,
  layerConfigurations,
  rarityDelimiter,
  preview,
  shuffleLayerConfigurations,
  debugLogs,
  extraMetadata,
  pixelFormat,
  text,
  network,
  solanaMetadata,
  gif,
  preview_gif,
};

