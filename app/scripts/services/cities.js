'use strict';

/**
 * @ngdoc service
 * @name inkGlobalApp.Cities
 * @description
 * # Cities
 * Service in the inkGlobalApp.
 */
angular.module('inkGlobalApp')
        .service('Cities', function Cities() {
          return [
            /*{
             "id": 2638698,
             "city": "Saint Stephen",
             "lat": 50.333328,
             "lng": -4.9,
             "country": "GB"
             },
             {
             "id": 2647240,
             "city": "Headcorn",
             "lat": 51.169659,
             "lng": 0.62433,
             "country": "GB"
             },
             {
             "id": 2649322,
             "city": "Fleet",
             "lat": 51.283329,
             "lng": -0.83333,
             "country": "GB"
             },
             {
             "id": 2633993,
             "city": "Whyteleafe",
             "lat": 51.308079,
             "lng": -0.08429,
             "country": "GB"
             },
             {
             "id": 2636716,
             "city": "Stratfield Mortimer",
             "lat": 51.37339,
             "lng": -1.03495,
             "country": "GB"
             },
             {
             "id": 2655627,
             "city": "Birchington-on-Sea",
             "lat": 51.375751,
             "lng": 1.3048,
             "country": "GB"
             },
             {
             "id": 2635150,
             "city": "Upminster",
             "lat": 51.555939,
             "lng": 0.2556,
             "country": "GB"
             },
             {
             "id": 6690806,
             "city": "Cranham",
             "lat": 51.565651,
             "lng": 0.2659,
             "country": "GB"
             },
             {
             "id": 2639583,
             "city": "Rayleigh",
             "lat": 51.585709,
             "lng": 0.60459,
             "country": "GB"
             },
             {
             "id": 2653256,
             "city": "Chepstow",
             "lat": 51.640869,
             "lng": -2.67683,
             "country": "GB"
             },
             {
             "id": 7303225,
             "city": "Headwood Bolevad",
             "lat": 51.677078,
             "lng": -0.43825,
             "country": "GB"
             },
             {
             "id": 2647108,
             "city": "Hengoed",
             "lat": 51.650829,
             "lng": -3.23167,
             "country": "GB"
             },
             {
             "id": 6690591,
             "city": "Little Chalfont",
             "lat": 51.668289,
             "lng": -0.57038,
             "country": "GB"
             },
             {
             "id": 2652941,
             "city": "Clare",
             "lat": 52.078609,
             "lng": 0.58167,
             "country": "GB"
             },
             {
             "id": 6301921,
             "city": "Kesgrave",
             "lat": 52.062408,
             "lng": 1.2365,
             "country": "GB"
             },
             {
             "id": 2641591,
             "city": "Newport Pagnell",
             "lat": 52.087311,
             "lng": -0.72218,
             "country": "GB"
             },
             {
             "id": 2636749,
             "city": "Stowmarket",
             "lat": 52.188931,
             "lng": 0.99774,
             "country": "GB"
             },
             {
             "id": 2649568,
             "city": "Feltwell",
             "lat": 52.485809,
             "lng": 0.51945,
             "country": "GB"
             },
             {
             "id": 2634010,
             "city": "Whittlesey",
             "lat": 52.558041,
             "lng": -0.13016,
             "country": "GB"
             },
             {
             "id": 2647242,
             "city": "Heacham",
             "lat": 52.907822,
             "lng": 0.49387,
             "country": "GB"
             },
             {
             "id": 2634493,
             "city": "West Bridgford",
             "lat": 52.92979,
             "lng": -1.12537,
             "country": "GB"
             },
             {
             "id": 2654141,
             "city": "Buxton",
             "lat": 53.257408,
             "lng": -1.90982,
             "country": "GB"
             },
             {
             "id": 2634375,
             "city": "West Kirby",
             "lat": 53.37302,
             "lng": -3.18417,
             "country": "GB"
             },
             {
             "id": 2642204,
             "city": "Moreton",
             "lat": 53.400002,
             "lng": -3.11667,
             "country": "GB"
             },
             {
             "id": 6620310,
             "city": "Didsbury",
             "lat": 53.416981,
             "lng": -2.23145,
             "country": "GB"
             },
             {
             "id": 6691248,
             "city": "Chorlton cum Hardy",
             "lat": 53.435051,
             "lng": -2.2631,
             "country": "GB"
             },
             {
             "id": 2648405,
             "city": "Glossop",
             "lat": 53.443249,
             "lng": -1.949,
             "country": "GB"
             },
             {
             "id": 2637435,
             "city": "South Elmsall",
             "lat": 53.597092,
             "lng": -1.28034,
             "country": "GB"
             },
             {
             "id": 2637958,
             "city": "Shipley",
             "lat": 53.833328,
             "lng": -1.76667,
             "country": "GB"
             },
             {
             "id": 2655459,
             "city": "Blackpool",
             "lat": 53.816669,
             "lng": -3.05,
             "country": "GB"
             },
             {
             "id": 2650517,
             "city": "Easingwold",
             "lat": 54.119099,
             "lng": -1.19225,
             "country": "GB"
             },
             {
             "id": 2652676,
             "city": "Cockermouth",
             "lat": 54.66209,
             "lng": -3.36086,
             "country": "GB"
             },
             {
             "id": 2643812,
             "city": "Lochmaben",
             "lat": 55.130112,
             "lng": -3.44286,
             "country": "GB"
             },
             {
             "id": 2651048,
             "city": "Dover",
             "lat": 51.133331,
             "lng": 1.3,
             "country": "GB"
             },
             {
             "id": 2638717,
             "city": "Saint Neots",
             "lat": 52.216671,
             "lng": -0.26667,
             "country": "GB"
             },
             {
             "id": 2645442,
             "city": "Kingsteignton",
             "lat": 50.549999,
             "lng": -3.58333,
             "country": "GB"
             },
             {
             "id": 2637853,
             "city": "Sidmouth",
             "lat": 50.690941,
             "lng": -3.2397,
             "country": "GB"
             },
             {
             "id": 2633373,
             "city": "Yeovil",
             "lat": 50.941589,
             "lng": -2.63211,
             "country": "GB"
             },
             {
             "id": 2644993,
             "city": "Lambourn",
             "lat": 51.508049,
             "lng": -1.53105,
             "country": "GB"
             },
             {
             "id": 2644577,
             "city": "Leven",
             "lat": 56.200001,
             "lng": -3,
             "country": "GB"
             },
             {
             "id": 2654728,
             "city": "Bridlington",
             "lat": 54.083061,
             "lng": -0.19192,
             "country": "GB"
             },
             {
             "id": 2646828,
             "city": "Histon",
             "lat": 52.251659,
             "lng": 0.10643,
             "country": "GB"
             },
             {
             "id": 2649963,
             "city": "Epping",
             "lat": 51.698151,
             "lng": 0.11055,
             "country": "GB"
             },
             {
             "id": 2640526,
             "city": "Peebles",
             "lat": 55.651901,
             "lng": -3.1888,
             "country": "GB"
             },
             {
             "id": 2640559,
             "city": "Paulton",
             "lat": 51.304722,
             "lng": -2.50028,
             "country": "GB"
             },
             {
             "id": 2638878,
             "city": "Saffron Walden",
             "lat": 52.023369,
             "lng": 0.24234,
             "country": "GB"
             },
             {
             "id": 2643186,
             "city": "Maidenhead",
             "lat": 51.522789,
             "lng": -0.71986,
             "country": "GB"
             },
             {
             "id": 2651930,
             "city": "Cromer",
             "lat": 52.931229,
             "lng": 1.29892,
             "country": "GB"
             },
             {
             "id": 2638027,
             "city": "Sherburn in Elmet",
             "lat": 53.795189,
             "lng": -1.2466,
             "country": "GB"
             },
             {
             "id": 2653279,
             "city": "Cheddleton",
             "lat": 53.069099,
             "lng": -2.04228,
             "country": "GB"
             },
             {
             "id": 2634573,
             "city": "Wellington",
             "lat": 52.700001,
             "lng": -2.51667,
             "country": "GB"
             },
             {
             "id": 2644726,
             "city": "Leatherhead",
             "lat": 51.295929,
             "lng": -0.3259,
             "country": "GB"
             },
             {
             "id": 2636928,
             "city": "Steyning",
             "lat": 50.88744,
             "lng": -0.32787,
             "country": "GB"
             },
             {
             "id": 2643198,
             "city": "Maghull",
             "lat": 53.51619,
             "lng": -2.94117,
             "country": "GB"
             },
             {
             "id": 2642974,
             "city": "Marske-by-the-Sea",
             "lat": 54.591469,
             "lng": -1.01959,
             "country": "GB"
             },
             {
             "id": 2653346,
             "city": "Chard",
             "lat": 50.8727,
             "lng": -2.96597,
             "country": "GB"
             },
             {
             "id": 2640045,
             "city": "Porthmadog",
             "lat": 52.929241,
             "lng": -4.13137,
             "country": "GB"
             },
             {
             "id": 2633808,
             "city": "Winslow",
             "lat": 51.942841,
             "lng": -0.88131,
             "country": "GB"
             },
             {
             "id": 2643071,
             "city": "March",
             "lat": 52.551311,
             "lng": 0.08828,
             "country": "GB"
             },
             {
             "id": 2647198,
             "city": "Heckmondwike",
             "lat": 53.706459,
             "lng": -1.67747,
             "country": "GB"
             },
             {
             "id": 2653290,
             "city": "Cheadle Hulme",
             "lat": 53.376099,
             "lng": -2.1897,
             "country": "GB"
             },
             {
             "id": 2653715,
             "city": "Carnforth",
             "lat": 54.116669,
             "lng": -2.76667,
             "country": "GB"
             },
             {
             "id": 2657859,
             "city": "Abbotts Ann",
             "lat": 51.189861,
             "lng": -1.53126,
             "country": "GB"
             },
             {
             "id": 2655664,
             "city": "Billingham",
             "lat": 54.60828,
             "lng": -1.29214,
             "country": "GB"
             },
             {
             "id": 2654634,
             "city": "Broadstone",
             "lat": 50.75,
             "lng": -1.98333,
             "country": "GB"
             },*/
             {
             "id": 2636531,
             "city": "Sunderland",
             "lat": 54.904652,
             "lng": -1.38222,
             "country": "GB"
             },
             {
             "id": 2637487,
             "city": "Southampton",
             "lat": 50.90395,
             "lng": -1.40428,
             "country": "GB"
             },/*
             {
             "id": 2637087,
             "city": "Stanford-le-Hope",
             "lat": 51.522739,
             "lng": 0.43422,
             "country": "GB"
             },
             {
             "id": 2637111,
             "city": "Stalbridge",
             "lat": 50.958069,
             "lng": -2.37548,
             "country": "GB"
             },
             {
             "id": 2634617,
             "city": "Wednesbury",
             "lat": 52.551399,
             "lng": -2.02355,
             "country": "GB"
             },
             {
             "id": 2651324,
             "city": "Dersingham",
             "lat": 52.84549,
             "lng": 0.50339,
             "country": "GB"
             },
             {
             "id": 2647261,
             "city": "Hayes",
             "lat": 51.515789,
             "lng": -0.4234,
             "country": "GB"
             },
             {
             "id": 2636049,
             "city": "Thatcham",
             "lat": 51.40366,
             "lng": -1.26049,
             "country": "GB"
             },
             {
             "id": 2641555,
             "city": "Newton Aycliffe",
             "lat": 54.61842,
             "lng": -1.5719,
             "country": "GB"
             },
             {
             "id": 2635937,
             "city": "Thrapston",
             "lat": 52.396751,
             "lng": -0.5392,
             "country": "GB"
             },
             {
             "id": 2649210,
             "city": "Forest Row",
             "lat": 51.096409,
             "lng": 0.03262,
             "country": "GB"
             },
             {
             "id": 2648372,
             "city": "Godalming",
             "lat": 51.18462,
             "lng": -0.61725,
             "country": "GB"
             },
             {
             "id": 6693245,
             "city": "Knaphill",
             "lat": 51.31892,
             "lng": -0.61541,
             "country": "GB"
             },
             {
             "id": 2644559,
             "city": "Lewes",
             "lat": 50.873631,
             "lng": 0.01133,
             "country": "GB"
             },
             {
             "id": 2651311,
             "city": "Desborough",
             "lat": 52.44183,
             "lng": -0.82126,
             "country": "GB"
             },
             {
             "id": 3209953,
             "city": "Overcombe",
             "lat": 50.63509,
             "lng": -2.43207,
             "country": "GB"
             },
             {
             "id": 2638600,
             "city": "Sandbach",
             "lat": 53.145149,
             "lng": -2.36251,
             "country": "GB"
             },
             {
             "id": 2647461,
             "city": "Harlow",
             "lat": 51.77655,
             "lng": 0.11158,
             "country": "GB"
             },
             {
             "id": 2656947,
             "city": "Ashington",
             "lat": 50.933121,
             "lng": -0.39087,
             "country": "GB"
             },
             {
             "id": 2645163,
             "city": "Knaresborough",
             "lat": 54.009102,
             "lng": -1.46851,
             "country": "GB"
             },
             {
             "id": 2651561,
             "city": "Dalry",
             "lat": 55.683331,
             "lng": -4.71667,
             "country": "GB"
             },
             {
             "id": 2652877,
             "city": "Cleland",
             "lat": 55.802429,
             "lng": -3.9142,
             "country": "GB"
             },
             {
             "id": 2641599,
             "city": "Newport",
             "lat": 50.701462,
             "lng": -1.29124,
             "country": "GB"
             },
             {
             "id": 2647644,
             "city": "Hale",
             "lat": 51.216671,
             "lng": -0.78333,
             "country": "GB"
             },
             {
             "id": 2634755,
             "city": "Warminster",
             "lat": 51.204342,
             "lng": -2.17873,
             "country": "GB"
             },
             {
             "id": 2634032,
             "city": "Whitley Bay",
             "lat": 55.03973,
             "lng": -1.44713,
             "country": "GB"
             },
             {
             "id": 2654668,
             "city": "Briton Ferry",
             "lat": 51.631062,
             "lng": -3.81898,
             "country": "GB"
             },
             {
             "id": 2652617,
             "city": "Cold Ash",
             "lat": 51.424259,
             "lng": -1.26463,
             "country": "GB"
             },
             {
             "id": 2655785,
             "city": "Beverley",
             "lat": 53.845871,
             "lng": -0.42332,
             "country": "GB"
             },
             {
             "id": 2635703,
             "city": "Tonbridge",
             "lat": 51.192421,
             "lng": 0.27532,
             "country": "GB"
             },
             {
             "id": 2638019,
             "city": "Sheringham",
             "lat": 52.940781,
             "lng": 1.20931,
             "country": "GB"
             },
             {
             "id": 2650628,
             "city": "Durham",
             "lat": 54.77676,
             "lng": -1.57566,
             "country": "GB"
             },
             {
             "id": 2652997,
             "city": "Cinderford",
             "lat": 51.824211,
             "lng": -2.4987,
             "country": "GB"
             },
             {
             "id": 2650732,
             "city": "Dunfermline",
             "lat": 56.07156,
             "lng": -3.45887,
             "country": "GB"
             },
             {
             "id": 6620355,
             "city": "Bowthorpe",
             "lat": 52.63884,
             "lng": 1.21885,
             "country": "GB"
             },
             {
             "id": 2633708,
             "city": "Wokingham",
             "lat": 51.411201,
             "lng": -0.83565,
             "country": "GB"
             },
             {
             "id": 2639912,
             "city": "Preston",
             "lat": 53.76667,
             "lng": -2.71667,
             "country": "GB"
             },
             {
             "id": 2651181,
             "city": "Doddington",
             "lat": 52.496712,
             "lng": 0.06017,
             "country": "GB"
             },
             {
             "id": 2643029,
             "city": "Market Deeping",
             "lat": 52.67654,
             "lng": -0.31629,
             "country": "GB"
             },
             {
             "id": 2646073,
             "city": "Inverurie",
             "lat": 57.284458,
             "lng": -2.37736,
             "country": "GB"
             },
             {
             "id": 2649715,
             "city": "Falmouth",
             "lat": 50.154411,
             "lng": -5.07113,
             "country": "GB"
             },
             {
             "id": 2637546,
             "city": "Solihull",
             "lat": 52.414261,
             "lng": -1.78094,
             "country": "GB"
             },
             {
             "id": 2635022,
             "city": "Valley",
             "lat": 53.284901,
             "lng": -4.56644,
             "country": "GB"
             },
             {
             "id": 2646658,
             "city": "Honiton",
             "lat": 50.799599,
             "lng": -3.18899,
             "country": "GB"
             },
             {
             "id": 2646355,
             "city": "Hurstpierpoint",
             "lat": 50.93388,
             "lng": -0.18007,
             "country": "GB"
             },
             {
             "id": 2642214,
             "city": "Morecambe",
             "lat": 54.068352,
             "lng": -2.86108,
             "country": "GB"
             },
             {
             "id": 2643116,
             "city": "Mangotsfield",
             "lat": 51.487801,
             "lng": -2.50403,
             "country": "GB"
             },
             {
             "id": 2647497,
             "city": "Hardingstone",
             "lat": 52.213581,
             "lng": -0.88582,
             "country": "GB"
             },
             {
             "id": 2650122,
             "city": "Elgin",
             "lat": 57.650002,
             "lng": -3.33333,
             "country": "GB"
             },
             {
             "id": 2633709,
             "city": "Woking",
             "lat": 51.319031,
             "lng": -0.55893,
             "country": "GB"
             },
             {
             "id": 2642313,
             "city": "Monmouth",
             "lat": 51.812649,
             "lng": -2.71363,
             "country": "GB"
             },
             {
             "id": 2636408,
             "city": "Sway",
             "lat": 50.78685,
             "lng": -1.60294,
             "country": "GB"
             },
             {
             "id": 2647655,
             "city": "Hailsham",
             "lat": 50.862202,
             "lng": 0.25775,
             "country": "GB"
             },
             {
             "id": 2646525,
             "city": "Houghton-le-Spring",
             "lat": 54.84034,
             "lng": -1.46427,
             "country": "GB"
             },
             {
             "id": 2651852,
             "city": "Crowborough",
             "lat": 51.06044,
             "lng": 0.16171,
             "country": "GB"
             },
             {
             "id": 2656792,
             "city": "Audley",
             "lat": 53.049999,
             "lng": -2.3,
             "country": "GB"
             },
             {
             "id": 6695204,
             "city": "Barnwood",
             "lat": 51.86393,
             "lng": -2.20087,
             "country": "GB"
             },
             {
             "id": 2634387,
             "city": "Westhoughton",
             "lat": 53.548988,
             "lng": -2.52464,
             "country": "GB"
             },
             {
             "id": 2652861,
             "city": "Clevedon",
             "lat": 51.440571,
             "lng": -2.85745,
             "country": "GB"
             },
             {
             "id": 6615542,
             "city": "Thorpe Hamlet",
             "lat": 52.630322,
             "lng": 1.31337,
             "country": "GB"
             },
             {
             "id": 2637034,
             "city": "Stanwick",
             "lat": 52.331982,
             "lng": -0.56348,
             "country": "GB"
             },
             {
             "id": 2643064,
             "city": "Marchwood",
             "lat": 50.88966,
             "lng": -1.4544,
             "country": "GB"
             },
             {
             "id": 2655777,
             "city": "Bexhill-on-Sea",
             "lat": 50.850231,
             "lng": 0.47095,
             "country": "GB"
             },
             {
             "id": 2643339,
             "city": "Luton",
             "lat": 51.879669,
             "lng": -0.41748,
             "country": "GB"
             },
             {
             "id": 2640729,
             "city": "Oxford",
             "lat": 51.75222,
             "lng": -1.25596,
             "country": "GB"
             },
             {
             "id": 2644411,
             "city": "Lisburn",
             "lat": 54.523369,
             "lng": -6.03527,
             "country": "GB"
             },
             {
             "id": 2633858,
             "city": "Winchester",
             "lat": 51.065128,
             "lng": -1.3187,
             "country": "GB"
             },
             {
             "id": 2652618,
             "city": "Colchester",
             "lat": 51.88921,
             "lng": 0.90421,
             "country": "GB"
             },
             {
             "id": 2651513,
             "city": "Darlington",
             "lat": 54.524288,
             "lng": -1.55039,
             "country": "GB"
             },*/
             {
             "id": 2654675,
             "city": "Bristol",
             "lat": 51.455231,
             "lng": -2.59665,
             "country": "GB"
             },/*
             {
             "id": 2634677,
             "city": "Watford",
             "lat": 51.655312,
             "lng": -0.39602,
             "country": "GB"
             },
             {
             "id": 2651485,
             "city": "Daventry",
             "lat": 52.256882,
             "lng": -1.16066,
             "country": "GB"
             },*/
             {
             "id": 2636841,
             "city": "Stoke-on-Trent",
             "lat": 53.00415,
             "lng": -2.18538,
             "country": "GB"
             },/*
             {
             "id": 2636910,
             "city": "Stirling",
             "lat": 56.11903,
             "lng": -3.93682,
             "country": "GB"
             },
             {
             "id": 2638926,
             "city": "Rutherglen",
             "lat": 55.82885,
             "lng": -4.21376,
             "country": "GB"
             },
             {
             "id": 2653941,
             "city": "Cambridge",
             "lat": 52.200001,
             "lng": 0.11667,
             "country": "GB"
             },*/
             {
             "id": 2654710,
             "city": "Brighton",
             "lat": 50.828381,
             "lng": -0.13947,
             "country": "GB"
             },/*
             {
             "id": 2637891,
             "city": "Shrewsbury",
             "lat": 52.710091,
             "lng": -2.75208,
             "country": "GB"
             },
             {
             "id": 2650752,
             "city": "Dundee",
             "lat": 56.5,
             "lng": -2.96667,
             "country": "GB"
             },
             {
             "id": 2641689,
             "city": "Newbury",
             "lat": 51.40033,
             "lng": -1.32059,
             "country": "GB"
             },
             {
             "id": 2655562,
             "city": "Bishops Stortford",
             "lat": 51.871132,
             "lng": 0.15868,
             "country": "GB"
             },
             {
             "id": 2656719,
             "city": "Aylesbury",
             "lat": 51.81665,
             "lng": -0.81458,
             "country": "GB"
             },
             {
             "id": 2644487,
             "city": "Lincoln",
             "lat": 53.22683,
             "lng": -0.53792,
             "country": "GB"
             },
             {
             "id": 2650967,
             "city": "Dronfield",
             "lat": 53.302212,
             "lng": -1.47507,
             "country": "GB"
             },
             {
             "id": 2646253,
             "city": "Ince-in-Makerfield",
             "lat": 53.533329,
             "lng": -2.61667,
             "country": "GB"
             },
             {
             "id": 2644100,
             "city": "Llanelli",
             "lat": 51.68195,
             "lng": -4.16191,
             "country": "GB"
             },
             {
             "id": 2637142,
             "city": "Stafford",
             "lat": 52.80521,
             "lng": -2.11636,
             "country": "GB"
             },
             {
             "id": 2641430,
             "city": "Northampton",
             "lat": 52.25,
             "lng": -0.88333,
             "country": "GB"
             },
             {
             "id": 2651123,
             "city": "Doncaster",
             "lat": 53.52327,
             "lng": -1.13691,
             "country": "GB"
             },*/
             {
             "id": 2655984,
             "city": "Belfast",
             "lat": 54.583328,
             "lng": -5.93333,
             "country": "GB"
             },
            {
              "id": 2650225,
              "city": "Edinburgh",
              "lat": 55.952061,
              "lng": -3.19648,
              "country": "GB"
            }, /*
             {
             "id": 2654187,
             "city": "Bury",
             "lat": 53.599998,
             "lng": -2.3,
             "country": "GB"
             },
             {
             "id": 2640101,
             "city": "Poole",
             "lat": 50.716671,
             "lng": -2,
             "country": "GB"
             },
             {
             "id": 2645826,
             "city": "Kendal",
             "lat": 54.326809,
             "lng": -2.74757,
             "country": "GB"
             },
             {
             "id": 2637126,
             "city": "Staines",
             "lat": 51.43092,
             "lng": -0.50606,
             "country": "GB"
             },
             {
             "id": 2655524,
             "city": "Blackburn",
             "lat": 53.75,
             "lng": -2.48333,
             "country": "GB"
             },
             {
             "id": 2655613,
             "city": "Birkenhead",
             "lat": 53.393372,
             "lng": -3.01479,
             "country": "GB"
             },
             {
             "id": 2656046,
             "city": "Bedford",
             "lat": 52.13459,
             "lng": -0.46632,
             "country": "GB"
             },
             {
             "id": 2641731,
             "city": "Newark on Trent",
             "lat": 53.066669,
             "lng": -0.81667,
             "country": "GB"
             },
             {
             "id": 2633352,
             "city": "York",
             "lat": 53.95763,
             "lng": -1.08271,
             "country": "GB"
             },
             {
             "id": 2641557,
             "city": "Newton Abbot",
             "lat": 50.52858,
             "lng": -3.61186,
             "country": "GB"
             },
             {
             "id": 2634739,
             "city": "Warrington",
             "lat": 53.39254,
             "lng": -2.58024,
             "country": "GB"
             },*/
             {
             "id": 2644668,
             "city": "Leicester",
             "lat": 52.638599,
             "lng": -1.13169,
             "country": "GB"
             },/*
             {
             "id": 2652002,
             "city": "Crewe",
             "lat": 53.09787,
             "lng": -2.44161,
             "country": "GB"
             },
             {
             "id": 2643490,
             "city": "Lowestoft",
             "lat": 52.475201,
             "lng": 1.75159,
             "country": "GB"
             },
             {
             "id": 2641598,
             "city": "Newport",
             "lat": 51.587742,
             "lng": -2.99835,
             "country": "GB"
             },
             {
             "id": 6698331,
             "city": "Blacon",
             "lat": 53.208321,
             "lng": -2.9253,
             "country": "GB"
             },
             {
             "id": 2655138,
             "city": "Boston",
             "lat": 52.97633,
             "lng": -0.02664,
             "country": "GB"
             },
             {
             "id": 2646458,
             "city": "Huddersfield",
             "lat": 53.64904,
             "lng": -1.78416,
             "country": "GB"
             },
             {
             "id": 2641157,
             "city": "Nuneaton",
             "lat": 52.523232,
             "lng": -1.46523,
             "country": "GB"
             },
             {
             "id": 2647632,
             "city": "Halifax",
             "lat": 53.716671,
             "lng": -1.85,
             "country": "GB"
             },
             {
             "id": 2633842,
             "city": "Windsor",
             "lat": 51.48333,
             "lng": -0.6,
             "country": "GB"
             },
             {
             "id": 2638664,
             "city": "Salisbury",
             "lat": 51.069309,
             "lng": -1.79569,
             "country": "GB"
             },*/
             {
             "id": 2653822,
             "city": "Cardiff",
             "lat": 51.48,
             "lng": -3.18,
             "country": "GB"
             },/*
             {
             "id": 2634451,
             "city": "West Drayton",
             "lat": 51.5,
             "lng": -0.46667,
             "country": "GB"
             },
             {
             "id": 2643567,
             "city": "Loughborough",
             "lat": 52.76667,
             "lng": -1.2,
             "country": "GB"
             },
             {
             "id": 2636534,
             "city": "Sunbury-on-Thames",
             "lat": 51.406059,
             "lng": -0.4137,
             "country": "GB"
             },
             {
             "id": 2654264,
             "city": "Burnley",
             "lat": 53.799999,
             "lng": -2.23333,
             "country": "GB"
             },
             {
             "id": 2636616,
             "city": "Stroud",
             "lat": 51.75,
             "lng": -2.2,
             "country": "GB"
             },
             {
             "id": 2656235,
             "city": "Barry",
             "lat": 51.40667,
             "lng": -3.26944,
             "country": "GB"
             },
             {
             "id": 2637330,
             "city": "Southsea",
             "lat": 50.792049,
             "lng": -1.08593,
             "country": "GB"
             },
             {
             "id": 2640354,
             "city": "Peterborough",
             "lat": 52.573639,
             "lng": -0.24777,
             "country": "GB"
             },
             {
             "id": 2639018,
             "city": "Royston",
             "lat": 52.048321,
             "lng": -0.02438,
             "country": "GB"
             },
             {
             "id": 2639409,
             "city": "Rhyl",
             "lat": 53.31955,
             "lng": -3.48862,
             "country": "GB"
             },
             {
             "id": 2645753,
             "city": "Kettering",
             "lat": 52.398361,
             "lng": -0.72571,
             "country": "GB"
             },
             {
             "id": 2636177,
             "city": "Taunton",
             "lat": 51.021111,
             "lng": -3.10472,
             "country": "GB"
             },
             {
             "id": 2646435,
             "city": "Humberston",
             "lat": 53.530361,
             "lng": -0.02465,
             "country": "GB"
             },
             {
             "id": 2643003,
             "city": "Marlow",
             "lat": 51.569328,
             "lng": -0.77415,
             "country": "GB"
             },
             {
             "id": 2652586,
             "city": "Coleraine",
             "lat": 55.133331,
             "lng": -6.66667,
             "country": "GB"
             },
             {
             "id": 2634869,
             "city": "Wallingford",
             "lat": 51.599819,
             "lng": -1.1248,
             "country": "GB"
             },
             {
             "id": 2636066,
             "city": "Thame",
             "lat": 51.748402,
             "lng": -0.97624,
             "country": "GB"
             },
             {
             "id": 2654092,
             "city": "Caernarfon",
             "lat": 53.141258,
             "lng": -4.27016,
             "country": "GB"
             },
             {
             "id": 2644531,
             "city": "Lichfield",
             "lat": 52.681541,
             "lng": -1.82549,
             "country": "GB"
             },
             {
             "id": 2653192,
             "city": "Chichester",
             "lat": 50.836731,
             "lng": -0.78003,
             "country": "GB"
             },
             {
             "id": 2645093,
             "city": "Knutsford",
             "lat": 53.302891,
             "lng": -2.37482,
             "country": "GB"
             },
             {
             "id": 2653755,
             "city": "Carmarthen",
             "lat": 51.855518,
             "lng": -4.30535,
             "country": "GB"
             },
             {
             "id": 2646393,
             "city": "Huntingdon",
             "lat": 52.33049,
             "lng": -0.18651,
             "country": "GB"
             },
             {
             "id": 2657060,
             "city": "Armagh",
             "lat": 54.349998,
             "lng": -6.66667,
             "country": "GB"
             },
             {
             "id": 2651831,
             "city": "Crowthorne",
             "lat": 51.37027,
             "lng": -0.79219,
             "country": "GB"
             },
             {
             "id": 2635412,
             "city": "Truro",
             "lat": 50.265259,
             "lng": -5.05436,
             "country": "GB"
             },
             {
             "id": 2645724,
             "city": "Kidderminster",
             "lat": 52.388191,
             "lng": -2.25,
             "country": "GB"
             },
             {
             "id": 2636486,
             "city": "Sutton Coldfield",
             "lat": 52.566669,
             "lng": -1.81667,
             "country": "GB"
             },
             {
             "id": 2653266,
             "city": "Chelmsford",
             "lat": 51.735748,
             "lng": 0.46958,
             "country": "GB"
             },
             {
             "id": 2654410,
             "city": "Buckingham",
             "lat": 51.99968,
             "lng": -0.98779,
             "country": "GB"
             },
             {
             "id": 2654755,
             "city": "Bridgend",
             "lat": 51.505829,
             "lng": -3.57722,
             "country": "GB"
             },
             {
             "id": 2638324,
             "city": "Scunthorpe",
             "lat": 53.579048,
             "lng": -0.65437,
             "country": "GB"
             },
             {
             "id": 2644652,
             "city": "Leighton Buzzard",
             "lat": 51.917221,
             "lng": -0.65802,
             "country": "GB"
             },
             {
             "id": 2656241,
             "city": "Barrow in Furness",
             "lat": 54.116669,
             "lng": -3.23333,
             "country": "GB"
             },
             {
             "id": 2647400,
             "city": "Hartlepool",
             "lat": 54.686111,
             "lng": -1.2125,
             "country": "GB"
             },
             {
             "id": 2656194,
             "city": "Basildon",
             "lat": 51.568439,
             "lng": 0.45782,
             "country": "GB"
             },
             {
             "id": 2647044,
             "city": "Hertford",
             "lat": 51.795879,
             "lng": -0.07854,
             "country": "GB"
             },
             {
             "id": 2645889,
             "city": "Keighley",
             "lat": 53.867908,
             "lng": -1.90664,
             "country": "GB"
             },
             {
             "id": 2639272,
             "city": "Rochdale",
             "lat": 53.617661,
             "lng": -2.1552,
             "country": "GB"
             },
             {
             "id": 2657471,
             "city": "Alloa",
             "lat": 56.11586,
             "lng": -3.78997,
             "country": "GB"
             },
             {
             "id": 2656406,
             "city": "Banbury",
             "lat": 52.0602,
             "lng": -1.34029,
             "country": "GB"
             },
             {
             "id": 2647948,
             "city": "Greenock",
             "lat": 55.94838,
             "lng": -4.76121,
             "country": "GB"
             },
             {
             "id": 2647570,
             "city": "Hamilton",
             "lat": 55.76667,
             "lng": -4.03333,
             "country": "GB"
             },
             {
             "id": 2646867,
             "city": "Hinckley",
             "lat": 52.538898,
             "lng": -1.37613,
             "country": "GB"
             },
             {
             "id": 2651101,
             "city": "Dorchester",
             "lat": 50.716671,
             "lng": -2.43333,
             "country": "GB"
             },
             {
             "id": 2656039,
             "city": "Bedlington",
             "lat": 55.130611,
             "lng": -1.59319,
             "country": "GB"
             },
             {
             "id": 2653775,
             "city": "Carlisle",
             "lat": 54.8951,
             "lng": -2.9382,
             "country": "GB"
             },
             {
             "id": 2645721,
             "city": "Kidsgrove",
             "lat": 53.08691,
             "lng": -2.23777,
             "country": "GB"
             },
             {
             "id": 2641843,
             "city": "Neath",
             "lat": 51.66317,
             "lng": -3.80443,
             "country": "GB"
             },
             {
             "id": 2641546,
             "city": "Newton-le-Willows",
             "lat": 53.450001,
             "lng": -2.6,
             "country": "GB"
             },
             {
             "id": 2653232,
             "city": "Cheshunt",
             "lat": 51.707909,
             "lng": -0.03739,
             "country": "GB"
             },
             {
             "id": 2650128,
             "city": "Elderslie",
             "lat": 55.833271,
             "lng": -4.48598,
             "country": "GB"
             },
             {
             "id": 2650096,
             "city": "Ellesmere Port",
             "lat": 53.278751,
             "lng": -2.90134,
             "country": "GB"
             },
             {
             "id": 2638911,
             "city": "Ryde",
             "lat": 50.729988,
             "lng": -1.1621,
             "country": "GB"
             },
             {
             "id": 2653075,
             "city": "Christchurch",
             "lat": 50.733059,
             "lng": -1.77567,
             "country": "GB"
             },
             {
             "id": 2643027,
             "city": "Market Harborough",
             "lat": 52.4776,
             "lng": -0.92053,
             "country": "GB"
             },
             {
             "id": 2640358,
             "city": "Perth",
             "lat": 56.395222,
             "lng": -3.43139,
             "country": "GB"
             },
             {
             "id": 2654412,
             "city": "Buckhurst Hill",
             "lat": 51.624088,
             "lng": 0.03262,
             "country": "GB"
             },
             {
             "id": 2634715,
             "city": "Washington",
             "lat": 54.900002,
             "lng": -1.51667,
             "country": "GB"
             },
             {
             "id": 2647074,
             "city": "Hereford",
             "lat": 52.056839,
             "lng": -2.71482,
             "country": "GB"
             },
             {
             "id": 2651386,
             "city": "Denbigh",
             "lat": 53.183331,
             "lng": -3.41667,
             "country": "GB"
             },
             {
             "id": 2640377,
             "city": "Penzance",
             "lat": 50.11861,
             "lng": -5.53715,
             "country": "GB"
             },
             {
             "id": 2636484,
             "city": "Sutton in Ashfield",
             "lat": 53.12542,
             "lng": -1.26135,
             "country": "GB"
             },
             {
             "id": 2656284,
             "city": "Barnsley",
             "lat": 53.549999,
             "lng": -1.48333,
             "country": "GB"
             },
             {
             "id": 2646274,
             "city": "Ilkeston",
             "lat": 52.970551,
             "lng": -1.30951,
             "country": "GB"
             },
             {
             "id": 2648272,
             "city": "Gosport",
             "lat": 50.79509,
             "lng": -1.12902,
             "country": "GB"
             },
             {
             "id": 2638235,
             "city": "Selby",
             "lat": 53.783329,
             "lng": -1.06667,
             "country": "GB"
             },
             {
             "id": 2656168,
             "city": "Batley",
             "lat": 53.702911,
             "lng": -1.6337,
             "country": "GB"
             },
             {
             "id": 2655273,
             "city": "Bodmin",
             "lat": 50.471512,
             "lng": -4.7243,
             "country": "GB"
             },
             {
             "id": 2638946,
             "city": "Rushden",
             "lat": 52.291389,
             "lng": -0.59923,
             "country": "GB"
             },
             {
             "id": 2647101,
             "city": "Henley on Thames",
             "lat": 51.533329,
             "lng": -0.9,
             "country": "GB"
             },
             {
             "id": 2640967,
             "city": "Omagh",
             "lat": 54.599998,
             "lng": -7.3,
             "country": "GB"
             },
             {
             "id": 2633337,
             "city": "Ystalyfera",
             "lat": 51.767159,
             "lng": -3.78082,
             "country": "GB"
             },
             {
             "id": 2642534,
             "city": "Milford Haven",
             "lat": 51.71278,
             "lng": -5.0341,
             "country": "GB"
             },
             {
             "id": 2635427,
             "city": "Trowbridge",
             "lat": 51.31889,
             "lng": -2.20861,
             "country": "GB"
             },
             {
             "id": 2642992,
             "city": "Marsden",
             "lat": 53.599998,
             "lng": -1.91667,
             "country": "GB"
             },
             {
             "id": 2653584,
             "city": "Castleford",
             "lat": 53.725868,
             "lng": -1.36256,
             "country": "GB"
             },
             {
             "id": 2638035,
             "city": "Shepton Mallet",
             "lat": 51.18972,
             "lng": -2.54722,
             "country": "GB"
             },
             {
             "id": 2633729,
             "city": "Witney",
             "lat": 51.7836,
             "lng": -1.4854,
             "country": "GB"
             },
             {
             "id": 2646613,
             "city": "Horbury",
             "lat": 53.660511,
             "lng": -1.56014,
             "country": "GB"
             },
             {
             "id": 2643697,
             "city": "Long Eaton",
             "lat": 52.898548,
             "lng": -1.27136,
             "country": "GB"
             },
             {
             "id": 2649207,
             "city": "Forfar",
             "lat": 56.643131,
             "lng": -2.89026,
             "country": "GB"
             },
             {
             "id": 2646411,
             "city": "Hungerford",
             "lat": 51.415131,
             "lng": -1.51556,
             "country": "GB"
             },
             {
             "id": 2640972,
             "city": "Olney",
             "lat": 52.15345,
             "lng": -0.70201,
             "country": "GB"
             },
             {
             "id": 2655642,
             "city": "Bingley",
             "lat": 53.84861,
             "lng": -1.83857,
             "country": "GB"
             },
             {
             "id": 2654817,
             "city": "Brecon",
             "lat": 51.946121,
             "lng": -3.38887,
             "country": "GB"
             },
             {
             "id": 2641910,
             "city": "Nairn",
             "lat": 57.58094,
             "lng": -3.87973,
             "country": "GB"
             },
             {
             "id": 2654730,
             "city": "Bridgwater",
             "lat": 51.128368,
             "lng": -3.00356,
             "country": "GB"
             },
             {
             "id": 2639563,
             "city": "Redcar",
             "lat": 54.61657,
             "lng": -1.05999,
             "country": "GB"
             },
             {
             "id": 2642135,
             "city": "Motherwell",
             "lat": 55.789242,
             "lng": -3.99187,
             "country": "GB"
             },
             {
             "id": 2634825,
             "city": "Walton-on-Thames",
             "lat": 51.38533,
             "lng": -0.42066,
             "country": "GB"
             },
             {
             "id": 2642902,
             "city": "Maulden",
             "lat": 52.030628,
             "lng": -0.46975,
             "country": "GB"
             },
             {
             "id": 2636995,
             "city": "Staveley",
             "lat": 53.26667,
             "lng": -1.35,
             "country": "GB"
             },
             {
             "id": 2651983,
             "city": "Crieff",
             "lat": 56.372681,
             "lng": -3.83891,
             "country": "GB"
             },
             {
             "id": 2643314,
             "city": "Lyme Regis",
             "lat": 50.72654,
             "lng": -2.93477,
             "country": "GB"
             },
             {
             "id": 2646472,
             "city": "Hoylake",
             "lat": 53.390461,
             "lng": -3.18066,
             "country": "GB"
             },
             {
             "id": 2657293,
             "city": "Annan",
             "lat": 54.988392,
             "lng": -3.25647,
             "country": "GB"
             },
             {
             "id": 2649258,
             "city": "Folkestone",
             "lat": 51.083328,
             "lng": 1.18333,
             "country": "GB"
             },
             {
             "id": 2652417,
             "city": "Cookstown",
             "lat": 54.643051,
             "lng": -6.74595,
             "country": "GB"
             },
             {
             "id": 2656169,
             "city": "Bathgate",
             "lat": 55.902039,
             "lng": -3.64398,
             "country": "GB"
             },
             {
             "id": 2648559,
             "city": "Glastonbury",
             "lat": 51.147289,
             "lng": -2.71797,
             "country": "GB"
             },
             {
             "id": 2645365,
             "city": "Kinross",
             "lat": 56.204659,
             "lng": -3.42138,
             "country": "GB"
             },
             {
             "id": 2641581,
             "city": "Newry",
             "lat": 54.17841,
             "lng": -6.33739,
             "country": "GB"
             },
             {
             "id": 2640312,
             "city": "Pickering",
             "lat": 54.25,
             "lng": -0.76667,
             "country": "GB"
             },
             {
             "id": 2634135,
             "city": "Whitby",
             "lat": 54.48774,
             "lng": -0.61498,
             "country": "GB"
             },
             {
             "id": 2651498,
             "city": "Dartmouth",
             "lat": 50.3522,
             "lng": -3.5794,
             "country": "GB"
             },
             {
             "id": 2644849,
             "city": "Larne",
             "lat": 54.849998,
             "lng": -5.81667,
             "country": "GB"
             },
             {
             "id": 2655583,
             "city": "Bishop Auckland",
             "lat": 54.65554,
             "lng": -1.67706,
             "country": "GB"
             },
             {
             "id": 2650776,
             "city": "Dunbar",
             "lat": 56.000622,
             "lng": -2.51418,
             "country": "GB"
             },
             {
             "id": 2633651,
             "city": "Woodhall Spa",
             "lat": 53.152149,
             "lng": -0.21453,
             "country": "GB"
             },
             {
             "id": 2656847,
             "city": "Atherton",
             "lat": 53.523708,
             "lng": -2.49354,
             "country": "GB"
             },
             {
             "id": 2644642,
             "city": "Leiston",
             "lat": 52.206108,
             "lng": 1.57757,
             "country": "GB"
             },
             {
             "id": 2643553,
             "city": "Louth",
             "lat": 53.366638,
             "lng": -0.00438,
             "country": "GB"
             },
             {
             "id": 2656402,
             "city": "Banff",
             "lat": 57.664768,
             "lng": -2.52964,
             "country": "GB"
             },
             {
             "id": 2648875,
             "city": "Garforth",
             "lat": 53.791729,
             "lng": -1.38067,
             "country": "GB"
             },
             {
             "id": 2647662,
             "city": "Hagley",
             "lat": 52.426201,
             "lng": -2.12819,
             "country": "GB"
             },
             {
             "id": 2642999,
             "city": "Marple",
             "lat": 53.39452,
             "lng": -2.06292,
             "country": "GB"
             },
             {
             "id": 2643312,
             "city": "Lymington",
             "lat": 50.757671,
             "lng": -1.5443,
             "country": "GB"
             },
             {
             "id": 2639083,
             "city": "Rothesay",
             "lat": 55.836479,
             "lng": -5.05508,
             "country": "GB"
             },
             {
             "id": 2657397,
             "city": "Alva",
             "lat": 56.15284,
             "lng": -3.80505,
             "country": "GB"
             },
             {
             "id": 2650802,
             "city": "Dumbarton",
             "lat": 55.944328,
             "lng": -4.57061,
             "country": "GB"
             },
             {
             "id": 2643144,
             "city": "Maltby",
             "lat": 53.416672,
             "lng": -1.2,
             "country": "GB"
             },
             {
             "id": 2637833,
             "city": "Silsden",
             "lat": 53.914429,
             "lng": -1.93802,
             "country": "GB"
             },
             {
             "id": 2654200,
             "city": "Burton upon Trent",
             "lat": 52.807281,
             "lng": -1.64263,
             "country": "GB"
             },
             {
             "id": 2654269,
             "city": "Burnham-on-Sea",
             "lat": 51.238621,
             "lng": -2.9978,
             "country": "GB"
             },
             {
             "id": 2645486,
             "city": "Kingsbridge",
             "lat": 50.284512,
             "lng": -3.77638,
             "country": "GB"
             },
             {
             "id": 2644444,
             "city": "Linlithgow",
             "lat": 55.976391,
             "lng": -3.60364,
             "country": "GB"
             },
             {
             "id": 2655210,
             "city": "Bonnyrigg",
             "lat": 55.873291,
             "lng": -3.1051,
             "country": "GB"
             },
             {
             "id": 2654394,
             "city": "Buckley",
             "lat": 53.166672,
             "lng": -3.08333,
             "country": "GB"
             },
             {
             "id": 2648004,
             "city": "Great Torrington",
             "lat": 50.953091,
             "lng": -4.14401,
             "country": "GB"
             },
             {
             "id": 2644081,
             "city": "Llanfairfechan",
             "lat": 53.25779,
             "lng": -3.97423,
             "country": "GB"
             },
             {
             "id": 2646384,
             "city": "Huntly",
             "lat": 57.447411,
             "lng": -2.78608,
             "country": "GB"
             },
             {
             "id": 2646862,
             "city": "Hindley",
             "lat": 53.533329,
             "lng": -2.58333,
             "country": "GB"
             },
             {
             "id": 2649955,
             "city": "Epworth",
             "lat": 53.52602,
             "lng": -0.82399,
             "country": "GB"
             },
             {
             "id": 2643853,
             "city": "Locharbriggs",
             "lat": 55.103371,
             "lng": -3.58438,
             "country": "GB"
             },
             {
             "id": 2649198,
             "city": "Formby",
             "lat": 53.553638,
             "lng": -3.06816,
             "country": "GB"
             },
             {
             "id": 2656615,
             "city": "Bala",
             "lat": 52.91111,
             "lng": -3.59722,
             "country": "GB"
             },
             {
             "id": 2654186,
             "city": "Bury St Edmunds",
             "lat": 52.2463,
             "lng": 0.71111,
             "country": "GB"
             },
             {
             "id": 2655692,
             "city": "Biggar",
             "lat": 55.616669,
             "lng": -3.51667,
             "country": "GB"
             },
             {
             "id": 2653224,
             "city": "Chester-le-Street",
             "lat": 54.85862,
             "lng": -1.57408,
             "country": "GB"
             },
             {
             "id": 2638853,
             "city": "Saint Austell",
             "lat": 50.338329,
             "lng": -4.76583,
             "country": "GB"
             },
             {
             "id": 2647957,
             "city": "Greenisland",
             "lat": 54.700001,
             "lng": -5.86667,
             "country": "GB"
             },
             {
             "id": 2648370,
             "city": "Godmanchester",
             "lat": 52.319389,
             "lng": -0.17509,
             "country": "GB"
             },
             {
             "id": 2646941,
             "city": "Highley",
             "lat": 52.448662,
             "lng": -2.38251,
             "country": "GB"
             },
             {
             "id": 2634234,
             "city": "West Wickham",
             "lat": 51.366669,
             "lng": -0.01667,
             "country": "GB"
             },
             {
             "id": 2645660,
             "city": "Kilkeel",
             "lat": 54.061958,
             "lng": -6.00308,
             "country": "GB"
             },
             {
             "id": 2636963,
             "city": "Steeton",
             "lat": 53.883331,
             "lng": -1.95,
             "country": "GB"
             },
             {
             "id": 2652648,
             "city": "Coedpoeth",
             "lat": 53.053909,
             "lng": -3.06234,
             "country": "GB"
             },
             {
             "id": 2643016,
             "city": "Markinch",
             "lat": 56.202141,
             "lng": -3.13517,
             "country": "GB"
             },
             {
             "id": 2636769,
             "city": "Stourbridge",
             "lat": 52.456081,
             "lng": -2.14317,
             "country": "GB"
             },
             {
             "id": 2643096,
             "city": "Mansfield Woodhouse",
             "lat": 53.164951,
             "lng": -1.19384,
             "country": "GB"
             },
             {
             "id": 2638248,
             "city": "Seghill",
             "lat": 55.062248,
             "lng": -1.55027,
             "country": "GB"
             },
             {
             "id": 2639436,
             "city": "Rhosllanerchrugog",
             "lat": 53.009739,
             "lng": -3.05814,
             "country": "GB"
             },
             {
             "id": 2648396,
             "city": "Glusburn",
             "lat": 53.900002,
             "lng": -2,
             "country": "GB"
             },
             {
             "id": 2655117,
             "city": "Boughton",
             "lat": 53.200001,
             "lng": -0.98333,
             "country": "GB"
             },
             {
             "id": 2640106,
             "city": "Pontypool",
             "lat": 51.701111,
             "lng": -3.04444,
             "country": "GB"
             },
             {
             "id": 2636940,
             "city": "Stevenage",
             "lat": 51.902241,
             "lng": -0.20256,
             "country": "GB"
             },
             {
             "id": 2637350,
             "city": "Southowram",
             "lat": 53.709881,
             "lng": -1.83181,
             "country": "GB"
             },
             {
             "id": 2649403,
             "city": "Finningley",
             "lat": 53.486961,
             "lng": -0.99083,
             "country": "GB"
             },
             {
             "id": 2640192,
             "city": "Plympton",
             "lat": 50.390739,
             "lng": -4.06022,
             "country": "GB"
             },
             {
             "id": 2637124,
             "city": "Stainforth",
             "lat": 53.599998,
             "lng": -1.03333,
             "country": "GB"
             },
             {
             "id": 2657845,
             "city": "Abercanaid",
             "lat": 51.72361,
             "lng": -3.36611,
             "country": "GB"
             },
             {
             "id": 2640109,
             "city": "Pontycymer",
             "lat": 51.611179,
             "lng": -3.58421,
             "country": "GB"
             },
             {
             "id": 2639996,
             "city": "Portsmouth",
             "lat": 50.798988,
             "lng": -1.09125,
             "country": "GB"
             },
             {
             "id": 2645841,
             "city": "Kelvedon",
             "lat": 51.840069,
             "lng": 0.7057,
             "country": "GB"
             },
             {
             "id": 2653368,
             "city": "Chapel en le Frith",
             "lat": 53.32407,
             "lng": -1.91291,
             "country": "GB"
             },
             {
             "id": 2647303,
             "city": "Hawarden",
             "lat": 53.18478,
             "lng": -3.02578,
             "country": "GB"
             },
             {
             "id": 2634172,
             "city": "Wheathampstead",
             "lat": 51.811481,
             "lng": -0.29371,
             "country": "GB"
             },
             {
             "id": 2657508,
             "city": "Alfreton",
             "lat": 53.0961,
             "lng": -1.38832,
             "country": "GB"
             },
             {
             "id": 2643625,
             "city": "Long Sutton",
             "lat": 51.216671,
             "lng": -0.93333,
             "country": "GB"
             },
             {
             "id": 2653634,
             "city": "Carterton",
             "lat": 51.759048,
             "lng": -1.59435,
             "country": "GB"
             },
             {
             "id": 2645020,
             "city": "Lakenheath",
             "lat": 52.417549,
             "lng": 0.52211,
             "country": "GB"
             },
             {
             "id": 2655886,
             "city": "Benson",
             "lat": 51.620731,
             "lng": -1.10979,
             "country": "GB"
             },
             {
             "id": 2644581,
             "city": "Leuchars",
             "lat": 56.381741,
             "lng": -2.88253,
             "country": "GB"
             },
             {
             "id": 2645388,
             "city": "Kinloss",
             "lat": 57.634941,
             "lng": -3.57012,
             "country": "GB"
             },
             {
             "id": 2645198,
             "city": "Kirkwall",
             "lat": 58.984791,
             "lng": -2.95873,
             "country": "GB"
             },
             {
             "id": 2653591,
             "city": "Castle Donington",
             "lat": 52.842911,
             "lng": -1.34188,
             "country": "GB"
             },
             {
             "id": 2633397,
             "city": "Yeadon",
             "lat": 53.864368,
             "lng": -1.68743,
             "country": "GB"
             },
             {
             "id": 2639265,
             "city": "Rochford",
             "lat": 51.581982,
             "lng": 0.70673,
             "country": "GB"
             },
             {
             "id": 2637916,
             "city": "Shoreham-by-Sea",
             "lat": 50.834129,
             "lng": -0.27431,
             "country": "GB"
             },
             {
             "id": 2639444,
             "city": "Rhoose",
             "lat": 51.38818,
             "lng": -3.3543,
             "country": "GB"
             },
             {
             "id": 2653043,
             "city": "Churchdown",
             "lat": 51.887112,
             "lng": -2.18163,
             "country": "GB"
             },
             {
             "id": 2634923,
             "city": "Waddington",
             "lat": 53.166672,
             "lng": -0.53333,
             "country": "GB"
             },
             {
             "id": 2633406,
             "city": "Yate",
             "lat": 51.540741,
             "lng": -2.41839,
             "country": "GB"
             },
             {
             "id": 2633485,
             "city": "Wrexham",
             "lat": 53.046638,
             "lng": -2.99132,
             "country": "GB"
             },
             {
             "id": 2633521,
             "city": "Worthing",
             "lat": 50.81448,
             "lng": -0.37126,
             "country": "GB"
             },
             {
             "id": 2633551,
             "city": "Worksop",
             "lat": 53.301819,
             "lng": -1.12404,
             "country": "GB"
             },
             {
             "id": 2633553,
             "city": "Workington",
             "lat": 54.642502,
             "lng": -3.54413,
             "country": "GB"
             },
             {
             "id": 2633563,
             "city": "Worcester",
             "lat": 52.18935,
             "lng": -2.22001,
             "country": "GB"
             },
             {
             "id": 2633681,
             "city": "Wombwell",
             "lat": 53.521889,
             "lng": -1.39698,
             "country": "GB"
             },*/
             {
             "id": 2633691,
             "city": "Wolverhampton",
             "lat": 52.585468,
             "lng": -2.12296,
             "country": "GB"
             },/*
             {
             "id": 2633749,
             "city": "Witham",
             "lat": 51.800072,
             "lng": 0.64038,
             "country": "GB"
             },
             {
             "id": 2633765,
             "city": "Wishaw",
             "lat": 55.76667,
             "lng": -3.91667,
             "country": "GB"
             },
             {
             "id": 2633771,
             "city": "Wisbech",
             "lat": 52.666222,
             "lng": 0.15938,
             "country": "GB"
             },
             {
             "id": 2633810,
             "city": "Winsford",
             "lat": 53.183331,
             "lng": -2.51667,
             "country": "GB"
             },
             {
             "id": 2633883,
             "city": "Wilmslow",
             "lat": 53.32803,
             "lng": -2.23148,
             "country": "GB"
             },
             {
             "id": 2633912,
             "city": "Willenhall",
             "lat": 52.599998,
             "lng": -2.03333,
             "country": "GB"
             },
             {
             "id": 2633936,
             "city": "Wigston Magna",
             "lat": 52.58128,
             "lng": -1.09248,
             "country": "GB"
             },
             {
             "id": 2633948,
             "city": "Wigan",
             "lat": 53.533329,
             "lng": -2.61667,
             "country": "GB"
             },
             {
             "id": 2633954,
             "city": "Widnes",
             "lat": 53.361801,
             "lng": -2.73406,
             "country": "GB"
             },
             {
             "id": 2633976,
             "city": "Wickford",
             "lat": 51.611012,
             "lng": 0.52331,
             "country": "GB"
             },
             {
             "id": 2634021,
             "city": "Whitstable",
             "lat": 51.360699,
             "lng": 1.0257,
             "country": "GB"
             },
             {
             "id": 2634096,
             "city": "Whitehaven",
             "lat": 54.548969,
             "lng": -3.58412,
             "country": "GB"
             },
             {
             "id": 2634103,
             "city": "Whitefield",
             "lat": 53.549999,
             "lng": -2.3,
             "country": "GB"
             },
             {
             "id": 2634155,
             "city": "Whickham",
             "lat": 54.94561,
             "lng": -1.67635,
             "country": "GB"
             },
             {
             "id": 2634202,
             "city": "Weymouth",
             "lat": 50.611359,
             "lng": -2.45334,
             "country": "GB"
             },
             {
             "id": 2634204,
             "city": "Weybridge",
             "lat": 51.372162,
             "lng": -0.45297,
             "country": "GB"
             },
             {
             "id": 2634308,
             "city": "Weston-super-Mare",
             "lat": 51.346031,
             "lng": -2.97665,
             "country": "GB"
             },
             {
             "id": 2634340,
             "city": "West Molesey",
             "lat": 51.399849,
             "lng": -0.37997,
             "country": "GB"
             },
             {
             "id": 2634491,
             "city": "West Bromwich",
             "lat": 52.518681,
             "lng": -1.9945,
             "country": "GB"
             },
             {
             "id": 2634552,
             "city": "Welwyn Garden City",
             "lat": 51.801739,
             "lng": -0.20691,
             "country": "GB"
             },
             {
             "id": 2634578,
             "city": "Wellingborough",
             "lat": 52.302731,
             "lng": -0.69446,
             "country": "GB"
             },
             {
             "id": 2634616,
             "city": "Wednesfield",
             "lat": 52.599998,
             "lng": -2.08333,
             "country": "GB"
             },
             {
             "id": 2634672,
             "city": "Wath upon Dearne",
             "lat": 53.502911,
             "lng": -1.3458,
             "country": "GB"
             },
             {
             "id": 2634686,
             "city": "Waterlooville",
             "lat": 50.880669,
             "lng": -1.0304,
             "country": "GB"
             },
             {
             "id": 2634725,
             "city": "Warwick",
             "lat": 52.283329,
             "lng": -1.58333,
             "country": "GB"
             },
             {
             "id": 2634777,
             "city": "Ware",
             "lat": 51.812649,
             "lng": -0.02832,
             "country": "GB"
             },
             {
             "id": 2634843,
             "city": "Waltham Abbey",
             "lat": 51.687,
             "lng": -0.00421,
             "country": "GB"
             },
             {
             "id": 2634853,
             "city": "Walsall",
             "lat": 52.585281,
             "lng": -1.98396,
             "country": "GB"
             },
             {
             "id": 2634864,
             "city": "Wallsend",
             "lat": 54.991112,
             "lng": -1.53397,
             "country": "GB"
             },
             {
             "id": 2634873,
             "city": "Wallasey",
             "lat": 53.423241,
             "lng": -3.06497,
             "country": "GB"
             },
             {
             "id": 2634887,
             "city": "Walkden",
             "lat": 53.51667,
             "lng": -2.4,
             "country": "GB"
             },*/
             {
             "id": 2634910,
             "city": "Wakefield",
             "lat": 53.683311,
             "lng": -1.49768,
             "country": "GB"
             },/*
             {
             "id": 2635062,
             "city": "Urmston",
             "lat": 53.448521,
             "lng": -2.35419,
             "country": "GB"
             },
             {
             "id": 2635243,
             "city": "Uckfield",
             "lat": 50.969479,
             "lng": 0.09589,
             "country": "GB"
             },
             {
             "id": 2635269,
             "city": "Tynemouth",
             "lat": 55.017879,
             "lng": -1.42559,
             "country": "GB"
             },
             {
             "id": 2635281,
             "city": "Tyldesley",
             "lat": 53.513931,
             "lng": -2.46754,
             "country": "GB"
             },
             {
             "id": 2635603,
             "city": "Totton",
             "lat": 50.91877,
             "lng": -1.49037,
             "country": "GB"
             },
             {
             "id": 2635650,
             "city": "Torquay",
             "lat": 50.46384,
             "lng": -3.51434,
             "country": "GB"
             },
             {
             "id": 2635762,
             "city": "Tiverton",
             "lat": 50.900002,
             "lng": -3.48333,
             "country": "GB"
             },
             {
             "id": 2635785,
             "city": "Tipton",
             "lat": 52.52956,
             "lng": -2.06773,
             "country": "GB"
             },
             {
             "id": 2636005,
             "city": "Thornaby-on-Tees",
             "lat": 54.533329,
             "lng": -1.3,
             "country": "GB"
             },
             {
             "id": 2636032,
             "city": "Thetford",
             "lat": 52.416672,
             "lng": 0.75,
             "country": "GB"
             },
             {
             "id": 2636132,
             "city": "Teignmouth",
             "lat": 50.54768,
             "lng": -3.49637,
             "country": "GB"
             },
             {
             "id": 2636276,
             "city": "Tamworth",
             "lat": 52.633991,
             "lng": -1.69587,
             "country": "GB"
             },
             {
             "id": 2636333,
             "city": "Tadley",
             "lat": 51.350449,
             "lng": -1.1285,
             "country": "GB"
             },
             {
             "id": 2636373,
             "city": "Swinton",
             "lat": 53.5,
             "lng": -2.35,
             "country": "GB"
             },
             {
             "id": 2636389,
             "city": "Swindon",
             "lat": 51.557968,
             "lng": -1.78116,
             "country": "GB"
             },*/
             {
             "id": 2636432,
             "city": "Swansea",
             "lat": 51.620789,
             "lng": -3.94323,
             "country": "GB"
             },/*
             {
             "id": 2636433,
             "city": "Swanscombe",
             "lat": 51.447128,
             "lng": 0.31028,
             "country": "GB"
             },
             {
             "id": 2636439,
             "city": "Swanley",
             "lat": 51.397171,
             "lng": 0.17321,
             "country": "GB"
             },
             {
             "id": 2636465,
             "city": "Swadlincote",
             "lat": 52.773998,
             "lng": -1.55744,
             "country": "GB"
             },
             {
             "id": 2636503,
             "city": "Sutton",
             "lat": 51.349998,
             "lng": -0.2,
             "country": "GB"
             },
             {
             "id": 2636619,
             "city": "Strood",
             "lat": 51.395939,
             "lng": 0.49361,
             "country": "GB"
             },
             {
             "id": 2636663,
             "city": "Stretford",
             "lat": 53.450001,
             "lng": -2.31667,
             "country": "GB"
             },
             {
             "id": 2636713,
             "city": "Stratford-upon-Avon",
             "lat": 52.191662,
             "lng": -1.70734,
             "country": "GB"
             },
             {
             "id": 2636767,
             "city": "Stourport-on-Severn",
             "lat": 52.349998,
             "lng": -2.26667,
             "country": "GB"
             },
             {
             "id": 2636876,
             "city": "Stockton-on-Tees",
             "lat": 54.568481,
             "lng": -1.3187,
             "country": "GB"
             },
             {
             "id": 2636882,
             "city": "Stockport",
             "lat": 53.40979,
             "lng": -2.15761,
             "country": "GB"
             },
             {
             "id": 2637104,
             "city": "Stamford",
             "lat": 52.650002,
             "lng": -0.48333,
             "country": "GB"
             },
             {
             "id": 2637106,
             "city": "Stalybridge",
             "lat": 53.484138,
             "lng": -2.05908,
             "country": "GB"
             },
             {
             "id": 2637235,
             "city": "Spennymoor",
             "lat": 54.698799,
             "lng": -1.60229,
             "country": "GB"
             },
             {
             "id": 2637265,
             "city": "Spalding",
             "lat": 52.78709,
             "lng": -0.15141,
             "country": "GB"
             },
             {
             "id": 2637329,
             "city": "South Shields",
             "lat": 54.998589,
             "lng": -1.4323,
             "country": "GB"
             },
             {
             "id": 2637343,
             "city": "Southport",
             "lat": 53.647789,
             "lng": -3.00648,
             "country": "GB"
             },
             {
             "id": 2637355,
             "city": "South Ockendon",
             "lat": 51.507992,
             "lng": 0.28333,
             "country": "GB"
             },
             {
             "id": 2637433,
             "city": "Southend-on-Sea",
             "lat": 51.537819,
             "lng": 0.71433,
             "country": "GB"
             },
             {
             "id": 2637476,
             "city": "South Benfleet",
             "lat": 51.552952,
             "lng": 0.55962,
             "country": "GB"
             },
             {
             "id": 2637627,
             "city": "Slough",
             "lat": 51.509491,
             "lng": -0.59541,
             "country": "GB"
             },
             {
             "id": 2637659,
             "city": "Sleaford",
             "lat": 52.99826,
             "lng": -0.40941,
             "country": "GB"
             },
             {
             "id": 2637752,
             "city": "Skelmersdale",
             "lat": 53.55024,
             "lng": -2.77348,
             "country": "GB"
             },
             {
             "id": 2637762,
             "city": "Skegness",
             "lat": 53.14362,
             "lng": 0.3363,
             "country": "GB"
             },
             {
             "id": 2637802,
             "city": "Sittingbourne",
             "lat": 51.341282,
             "lng": 0.73282,
             "country": "GB"
             },
             {
             "id": 2637917,
             "city": "Shoreham",
             "lat": 51.333401,
             "lng": 0.17801,
             "country": "GB"
             },*/
            {
              "id": 2638077,
              "city": "Sheffield",
              "lat": 53.382969,
              "lng": -1.4659,
              "country": "GB"
            }, /*
             {
             "id": 2638187,
             "city": "Sevenoaks",
             "lat": 51.26997,
             "lng": 0.19278,
             "country": "GB"
             },
             {
             "id": 2638302,
             "city": "Seaham",
             "lat": 54.839031,
             "lng": -1.34575,
             "country": "GB"
             },
             {
             "id": 2638311,
             "city": "Seaford",
             "lat": 50.771412,
             "lng": 0.10268,
             "country": "GB"
             },
             {
             "id": 2638419,
             "city": "Scarborough",
             "lat": 54.279659,
             "lng": -0.40443,
             "country": "GB"
             },
             {
             "id": 2638568,
             "city": "Sandown",
             "lat": 50.651581,
             "lng": -1.16103,
             "country": "GB"
             },
             {
             "id": 2638671,
             "city": "Salford",
             "lat": 53.487709,
             "lng": -2.29042,
             "country": "GB"
             },
             {
             "id": 2638678,
             "city": "Sale",
             "lat": 53.42519,
             "lng": -2.32443,
             "country": "GB"
             },
             {
             "id": 2638785,
             "city": "Saint Helens",
             "lat": 53.450001,
             "lng": -2.73333,
             "country": "GB"
             },
             {
             "id": 2638864,
             "city": "Saint Andrews",
             "lat": 56.338711,
             "lng": -2.79902,
             "country": "GB"
             },
             {
             "id": 2638867,
             "city": "Saint Albans",
             "lat": 51.75,
             "lng": -0.33333,
             "country": "GB"
             },
             {
             "id": 2638894,
             "city": "Ryton",
             "lat": 52.616669,
             "lng": -2.35,
             "country": "GB"
             },
             {
             "id": 2638960,
             "city": "Runcorn",
             "lat": 53.34174,
             "lng": -2.73124,
             "country": "GB"
             },
             {
             "id": 2638977,
             "city": "Rugeley",
             "lat": 52.7593,
             "lng": -1.93694,
             "country": "GB"
             },
             {
             "id": 2638978,
             "city": "Rugby",
             "lat": 52.370918,
             "lng": -1.26417,
             "country": "GB"
             },
             {
             "id": 2639015,
             "city": "Royton",
             "lat": 53.565071,
             "lng": -2.12267,
             "country": "GB"
             },
             {
             "id": 2639022,
             "city": "Royal Tunbridge Wells",
             "lat": 51.13245,
             "lng": 0.26333,
             "country": "GB"
             },
             {
             "id": 2639069,
             "city": "Rottingdean",
             "lat": 50.809841,
             "lng": -0.05939,
             "country": "GB"
             },
             {
             "id": 2639093,
             "city": "Rotherham",
             "lat": 53.430119,
             "lng": -1.35678,
             "country": "GB"
             },
             {
             "id": 2639189,
             "city": "Romsey",
             "lat": 50.989059,
             "lng": -1.49989,
             "country": "GB"
             },
             {
             "id": 2639268,
             "city": "Rochester",
             "lat": 51.387642,
             "lng": 0.50546,
             "country": "GB"
             },
             {
             "id": 2639317,
             "city": "Risca",
             "lat": 51.60799,
             "lng": -3.10081,
             "country": "GB"
             },
             {
             "id": 2639323,
             "city": "Ripon",
             "lat": 54.135208,
             "lng": -1.52122,
             "country": "GB"
             },
             {
             "id": 2639325,
             "city": "Ripley",
             "lat": 53.033329,
             "lng": -1.4,
             "country": "GB"
             },
             {
             "id": 2639447,
             "city": "Rhondda",
             "lat": 51.658958,
             "lng": -3.44885,
             "country": "GB"
             },
             {
             "id": 2639495,
             "city": "Renfrew",
             "lat": 55.871971,
             "lng": -4.39253,
             "country": "GB"
             },
             {
             "id": 2639506,
             "city": "Reigate",
             "lat": 51.237579,
             "lng": -0.2078,
             "country": "GB"
             },
             {
             "id": 2639545,
             "city": "Redhill",
             "lat": 51.240479,
             "lng": -0.17044,
             "country": "GB"
             },
             {
             "id": 2639557,
             "city": "Redditch",
             "lat": 52.306499,
             "lng": -1.94569,
             "country": "GB"
             },
             {
             "id": 2639577,
             "city": "Reading",
             "lat": 51.456249,
             "lng": -0.97113,
             "country": "GB"
             },
             {
             "id": 2639586,
             "city": "Rawtenstall",
             "lat": 53.70076,
             "lng": -2.28442,
             "country": "GB"
             },
             {
             "id": 2639588,
             "city": "Rawmarsh",
             "lat": 53.460621,
             "lng": -1.34437,
             "country": "GB"
             },
             {
             "id": 2639660,
             "city": "Ramsgate",
             "lat": 51.335758,
             "lng": 1.41552,
             "country": "GB"
             },
             {
             "id": 2639668,
             "city": "Ramsbottom",
             "lat": 53.647888,
             "lng": -2.31683,
             "country": "GB"
             },
             {
             "id": 2639866,
             "city": "Pudsey",
             "lat": 53.79538,
             "lng": -1.66134,
             "country": "GB"
             },
             {
             "id": 2639896,
             "city": "Prestwick",
             "lat": 55.48333,
             "lng": -4.61667,
             "country": "GB"
             },
             {
             "id": 2639897,
             "city": "Prestwich",
             "lat": 53.533329,
             "lng": -2.28333,
             "country": "GB"
             },
             {
             "id": 2639926,
             "city": "Prestatyn",
             "lat": 53.337479,
             "lng": -3.40776,
             "country": "GB"
             },
             {
             "id": 2639928,
             "city": "Prescot",
             "lat": 53.429482,
             "lng": -2.80031,
             "country": "GB"
             },
             {
             "id": 2639958,
             "city": "Poulton le Fylde",
             "lat": 53.833328,
             "lng": -2.98333,
             "country": "GB"
             },
             {
             "id": 2639970,
             "city": "Potters Bar",
             "lat": 51.693531,
             "lng": -0.17835,
             "country": "GB"
             },
             {
             "id": 2639998,
             "city": "Portslade",
             "lat": 50.843349,
             "lng": -0.21544,
             "country": "GB"
             },
             {
             "id": 2640037,
             "city": "Portishead",
             "lat": 51.481991,
             "lng": -2.76973,
             "country": "GB"
             },
             {
             "id": 2640054,
             "city": "Porthcawl",
             "lat": 51.479031,
             "lng": -3.70362,
             "country": "GB"
             },
             {
             "id": 2640060,
             "city": "Port Glasgow",
             "lat": 55.934639,
             "lng": -4.6895,
             "country": "GB"
             },
             {
             "id": 2640104,
             "city": "Pontypridd",
             "lat": 51.6021,
             "lng": -3.34211,
             "country": "GB"
             },
             {
             "id": 2640132,
             "city": "Pontefract",
             "lat": 53.691071,
             "lng": -1.31269,
             "country": "GB"
             },
             {
             "id": 2640155,
             "city": "Polmont",
             "lat": 55.990501,
             "lng": -3.70737,
             "country": "GB"
             },
             {
             "id": 2640190,
             "city": "Plymstock",
             "lat": 50.359989,
             "lng": -4.09049,
             "country": "GB"
             },*/
             {
             "id": 2640194,
             "city": "Plymouth",
             "lat": 50.371529,
             "lng": -4.14305,
             "country": "GB"
             },/*
             {
             "id": 2640246,
             "city": "Pitsea",
             "lat": 51.563869,
             "lng": 0.50859,
             "country": "GB"
             },
             {
             "id": 2640349,
             "city": "Peterlee",
             "lat": 54.760319,
             "lng": -1.33649,
             "country": "GB"
             },
             {
             "id": 2640351,
             "city": "Peterhead",
             "lat": 57.50584,
             "lng": -1.79806,
             "country": "GB"
             },
             {
             "id": 2640465,
             "city": "Penicuik",
             "lat": 55.831661,
             "lng": -3.22423,
             "country": "GB"
             },
             {
             "id": 2640496,
             "city": "Penarth",
             "lat": 51.439419,
             "lng": -3.17609,
             "country": "GB"
             },
             {
             "id": 2640677,
             "city": "Paisley",
             "lat": 55.83173,
             "lng": -4.43254,
             "country": "GB"
             },
             {
             "id": 2640681,
             "city": "Paignton",
             "lat": 50.43565,
             "lng": -3.56789,
             "country": "GB"
             },
             {
             "id": 2640861,
             "city": "Oswestry",
             "lat": 52.86195,
             "lng": -3.05497,
             "country": "GB"
             },
             {
             "id": 2640869,
             "city": "Ossett",
             "lat": 53.679779,
             "lng": -1.58006,
             "country": "GB"
             },
             {
             "id": 2640894,
             "city": "Orpington",
             "lat": 51.374569,
             "lng": 0.09785,
             "country": "GB"
             },
             {
             "id": 2640908,
             "city": "Ormskirk",
             "lat": 53.566849,
             "lng": -2.88178,
             "country": "GB"
             },
             {
             "id": 2641022,
             "city": "Oldham",
             "lat": 53.540508,
             "lng": -2.1183,
             "country": "GB"
             },
             {
             "id": 2641134,
             "city": "Oadby",
             "lat": 52.606209,
             "lng": -1.08354,
             "country": "GB"
             },*/
             {
             "id": 2641170,
             "city": "Nottingham",
             "lat": 52.953602,
             "lng": -1.15047,
             "country": "GB"
             },/*
             {
             "id": 2641181,
             "city": "Norwich",
             "lat": 52.627831,
             "lng": 1.29834,
             "country": "GB"
             },
             {
             "id": 2641224,
             "city": "Northwich",
             "lat": 53.261379,
             "lng": -2.51225,
             "country": "GB"
             },
             {
             "id": 2641267,
             "city": "North Shields",
             "lat": 55.01646,
             "lng": -1.44925,
             "country": "GB"
             },
             {
             "id": 2641319,
             "city": "Lancing",
             "lat": 50.828819,
             "lng": -0.32247,
             "country": "GB"
             },
             {
             "id": 2641435,
             "city": "Northallerton",
             "lat": 54.339008,
             "lng": -1.43243,
             "country": "GB"
             },
             {
             "id": 2641519,
             "city": "Newtownards",
             "lat": 54.592361,
             "lng": -5.69092,
             "country": "GB"
             },
             {
             "id": 2641520,
             "city": "Newtownabbey",
             "lat": 54.659828,
             "lng": -5.90858,
             "country": "GB"
             },
             {
             "id": 2641544,
             "city": "Newton Mearns",
             "lat": 55.773338,
             "lng": -4.33339,
             "country": "GB"
             },
             {
             "id": 2641589,
             "city": "Newquay",
             "lat": 50.41317,
             "lng": -5.08186,
             "country": "GB"
             },
             {
             "id": 2641609,
             "city": "New Milton",
             "lat": 50.756008,
             "lng": -1.6658,
             "country": "GB"
             },
             {
             "id": 2641616,
             "city": "Newmarket",
             "lat": 52.244671,
             "lng": 0.40418,
             "country": "GB"
             },*/
             {
             "id": 2641673,
             "city": "Newcastle upon Tyne",
             "lat": 54.973282,
             "lng": -1.61396,
             "country": "GB"
             },/*
             {
             "id": 2641674,
             "city": "Newcastle under Lyme",
             "lat": 53,
             "lng": -2.23333,
             "country": "GB"
             },
             {
             "id": 2641690,
             "city": "Newburn",
             "lat": 54.987598,
             "lng": -1.74415,
             "country": "GB"
             },
             {
             "id": 2641810,
             "city": "Nelson",
             "lat": 53.833328,
             "lng": -2.2,
             "country": "GB"
             },
             {
             "id": 2641913,
             "city": "Nailsea",
             "lat": 51.432388,
             "lng": -2.75847,
             "country": "GB"
             },
             {
             "id": 2641942,
             "city": "Musselburgh",
             "lat": 55.9417,
             "lng": -3.04991,
             "country": "GB"
             },
             {
             "id": 2642189,
             "city": "Morley",
             "lat": 53.740131,
             "lng": -1.59877,
             "country": "GB"
             },
             {
             "id": 2642423,
             "city": "Mirfield",
             "lat": 53.673431,
             "lng": -1.69636,
             "country": "GB"
             },
             {
             "id": 2642465,
             "city": "Milton Keynes",
             "lat": 52.041721,
             "lng": -0.75583,
             "country": "GB"
             },
             {
             "id": 2642593,
             "city": "Middleton",
             "lat": 53.549999,
             "lng": -2.2,
             "country": "GB"
             },
             {
             "id": 2642607,
             "city": "Middlesbrough",
             "lat": 54.576229,
             "lng": -1.23483,
             "country": "GB"
             },
             {
             "id": 2642683,
             "city": "Mexborough",
             "lat": 53.493889,
             "lng": -1.29243,
             "country": "GB"
             },
             {
             "id": 2642705,
             "city": "Merthyr Tydfil",
             "lat": 51.74794,
             "lng": -3.37779,
             "country": "GB"
             },
             {
             "id": 2642763,
             "city": "Melton Mowbray",
             "lat": 52.765881,
             "lng": -0.88693,
             "country": "GB"
             },
             {
             "id": 2643044,
             "city": "Margate",
             "lat": 51.381321,
             "lng": 1.38617,
             "country": "GB"
             },
             {
             "id": 2643097,
             "city": "Mansfield",
             "lat": 53.133331,
             "lng": -1.2,
             "country": "GB"
             },*/
             {
             "id": 2643123,
             "city": "Manchester",
             "lat": 53.480949,
             "lng": -2.23743,
             "country": "GB"
             },/*
             {
             "id": 2643160,
             "city": "Maldon",
             "lat": 51.731098,
             "lng": 0.67463,
             "country": "GB"
             },
             {
             "id": 2643179,
             "city": "Maidstone",
             "lat": 51.26667,
             "lng": 0.51667,
             "country": "GB"
             },
             {
             "id": 2643218,
             "city": "Maesteg",
             "lat": 51.609261,
             "lng": -3.65823,
             "country": "GB"
             },
             {
             "id": 2643266,
             "city": "Macclesfield",
             "lat": 53.260231,
             "lng": -2.12564,
             "country": "GB"
             },
             {
             "id": 2643696,
             "city": "Longfield",
             "lat": 51.3969,
             "lng": 0.30212,
             "country": "GB"
             },
             {
             "id": 2643734,
             "city": "Londonderry County Borough",
             "lat": 54.997211,
             "lng": -7.30917,
             "country": "GB"
             },
             {
             "id": 2643736,
             "city": "Derry",
             "lat": 54.9981,
             "lng": -7.30934,
             "country": "GB"
             },*/
            {
              "id": 2643741,
              "city": "City of London",
              "lat": 51.512791,
              "lng": -0.09184,
              "country": "GB"
            }, /*
             {
             "id": 2643776,
             "city": "Lofthouse",
             "lat": 53.729469,
             "lng": -1.49697,
             "country": "GB"
             },
             {
             "id": 2644120,
             "city": "Llandudno",
             "lat": 53.324982,
             "lng": -3.83148,
             "country": "GB"
             },
             {
             "id": 2644204,
             "city": "Livingston",
             "lat": 55.902882,
             "lng": -3.52261,
             "country": "GB"
             },*/
            {
              "id": 2644210,
              "city": "Liverpool",
              "lat": 53.41058,
              "lng": -2.97794,
              "country": "GB"
            }, /*
             {
             "id": 2644319,
             "city": "Littlehampton",
             "lat": 50.806911,
             "lng": -0.53782,
             "country": "GB"
             },
             {
             "id": 2644386,
             "city": "Litherland",
             "lat": 53.469929,
             "lng": -2.99809,
             "country": "GB"
             },
             {
             "id": 2644547,
             "city": "Leyland",
             "lat": 53.697861,
             "lng": -2.68758,
             "country": "GB"
             },
             {
             "id": 2644597,
             "city": "Letchworth",
             "lat": 51.979439,
             "lng": -0.2284,
             "country": "GB"
             },
             {
             "id": 2644660,
             "city": "Leigh",
             "lat": 53.48333,
             "lng": -2.51667,
             "country": "GB"
             },
             {
             "id": 2644684,
             "city": "Leek",
             "lat": 53.10434,
             "lng": -2.02207,
             "country": "GB"
             },*/
            {
              "id": 2644688,
              "city": "Leeds",
              "lat": 53.796478,
              "lng": -1.54785,
              "country": "GB"
            }, /*
             {
             "id": 2644737,
             "city": "Royal Leamington Spa",
             "lat": 52.299999,
             "lng": -1.53333,
             "country": "GB"
             },
             {
             "id": 2644853,
             "city": "Larkhall",
             "lat": 55.73333,
             "lng": -3.96667,
             "country": "GB"
             },
             {
             "id": 2644972,
             "city": "Lancaster",
             "lat": 54.066669,
             "lng": -2.83333,
             "country": "GB"
             },
             {
             "id": 2645261,
             "city": "Kirkintilloch",
             "lat": 55.939331,
             "lng": -4.15262,
             "country": "GB"
             },
             {
             "id": 2645298,
             "city": "Kirkcaldy",
             "lat": 56.109821,
             "lng": -3.16149,
             "country": "GB"
             },
             {
             "id": 2645309,
             "city": "Kirkby in Ashfield",
             "lat": 53.099819,
             "lng": -1.24379,
             "country": "GB"
             },
             {
             "id": 2645313,
             "city": "Kirkby",
             "lat": 53.48333,
             "lng": -2.9,
             "country": "GB"
             },
             {
             "id": 2645418,
             "city": "Kingswood",
             "lat": 51.452782,
             "lng": -2.50833,
             "country": "GB"
             },
             {
             "id": 2645420,
             "city": "Kingswinford",
             "lat": 52.497551,
             "lng": -2.16889,
             "country": "GB"
             },*/
             {
             "id": 2645425,
             "city": "Hull",
             "lat": 53.744598,
             "lng": -0.33525,
             "country": "GB"
             },/*
             {
             "id": 2645456,
             "city": "Kings Lynn",
             "lat": 52.75172,
             "lng": 0.39516,
             "country": "GB"
             },
             {
             "id": 2645541,
             "city": "Kilwinning",
             "lat": 55.653332,
             "lng": -4.70666,
             "country": "GB"
             },
             {
             "id": 2645605,
             "city": "Kilmarnock",
             "lat": 55.61171,
             "lng": -4.49581,
             "country": "GB"
             },
             {
             "id": 2645722,
             "city": "Kidlington",
             "lat": 51.821659,
             "lng": -1.2886,
             "country": "GB"
             },
             {
             "id": 2645733,
             "city": "Keynsham",
             "lat": 51.413872,
             "lng": -2.4978,
             "country": "GB"
             },
             {
             "id": 2645822,
             "city": "Kenilworth",
             "lat": 52.342861,
             "lng": -1.58015,
             "country": "GB"
             },
             {
             "id": 2645831,
             "city": "Kempston",
             "lat": 52.11599,
             "lng": -0.50044,
             "country": "GB"
             },
             {
             "id": 2645951,
             "city": "Johnstone",
             "lat": 55.82906,
             "lng": -4.51605,
             "country": "GB"
             },
             {
             "id": 2645972,
             "city": "Jarrow",
             "lat": 54.980358,
             "lng": -1.48423,
             "country": "GB"
             },
             {
             "id": 2646003,
             "city": "Islington",
             "lat": 51.536221,
             "lng": -0.10304,
             "country": "GB"
             },
             {
             "id": 2646032,
             "city": "Irvine",
             "lat": 55.6194,
             "lng": -4.65508,
             "country": "GB"
             },
             {
             "id": 2646042,
             "city": "Irlam",
             "lat": 53.442532,
             "lng": -2.42323,
             "country": "GB"
             },
             {
             "id": 2646057,
             "city": "Ipswich",
             "lat": 52.05917,
             "lng": 1.15545,
             "country": "GB"
             },
             {
             "id": 2646088,
             "city": "Inverness",
             "lat": 57.47908,
             "lng": -4.22398,
             "country": "GB"
             },
             {
             "id": 2646317,
             "city": "Hythe",
             "lat": 50.860039,
             "lng": -1.40162,
             "country": "GB"
             },
             {
             "id": 2646327,
             "city": "Hyde",
             "lat": 53.451309,
             "lng": -2.07943,
             "country": "GB"
             },
             {
             "id": 2646329,
             "city": "Huyton",
             "lat": 53.411499,
             "lng": -2.83935,
             "country": "GB"
             },
             {
             "id": 2646460,
             "city": "Hucknall",
             "lat": 53.033329,
             "lng": -1.2,
             "country": "GB"
             },
             {
             "id": 2646471,
             "city": "Hoyland Nether",
             "lat": 53.5,
             "lng": -1.45,
             "country": "GB"
             },
             {
             "id": 2646504,
             "city": "Hove",
             "lat": 50.830879,
             "lng": -0.1672,
             "country": "GB"
             },
             {
             "id": 2646542,
             "city": "Horwich",
             "lat": 53.601261,
             "lng": -2.54975,
             "country": "GB"
             },
             {
             "id": 2646557,
             "city": "Horsham",
             "lat": 51.06395,
             "lng": -0.32719,
             "country": "GB"
             },
             {
             "id": 2646558,
             "city": "Horsforth",
             "lat": 53.837971,
             "lng": -1.64036,
             "country": "GB"
             },
             {
             "id": 2646606,
             "city": "Horley",
             "lat": 51.174229,
             "lng": -0.15919,
             "country": "GB"
             },
             {
             "id": 2646807,
             "city": "Hoddesdon",
             "lat": 51.761478,
             "lng": -0.01144,
             "country": "GB"
             },
             {
             "id": 2646826,
             "city": "Hitchin",
             "lat": 51.95314,
             "lng": -0.26519,
             "country": "GB"
             },
             {
             "id": 2646914,
             "city": "High Wycombe",
             "lat": 51.62907,
             "lng": -0.74934,
             "country": "GB"
             },
             {
             "id": 2646979,
             "city": "High Blantyre",
             "lat": 55.784382,
             "lng": -4.10007,
             "country": "GB"
             },
             {
             "id": 2647026,
             "city": "Heswall",
             "lat": 53.327332,
             "lng": -3.09648,
             "country": "GB"
             },
             {
             "id": 2647057,
             "city": "Herne Bay",
             "lat": 51.373001,
             "lng": 1.12857,
             "country": "GB"
             },
             {
             "id": 2647138,
             "city": "Hemel Hempstead",
             "lat": 51.753689,
             "lng": -0.47517,
             "country": "GB"
             },
             {
             "id": 2647209,
             "city": "Hebburn",
             "lat": 54.973019,
             "lng": -1.51546,
             "country": "GB"
             },
             {
             "id": 2647227,
             "city": "Heanor",
             "lat": 53.013721,
             "lng": -1.35383,
             "country": "GB"
             },
             {
             "id": 2647246,
             "city": "Hazel Grove",
             "lat": 53.383331,
             "lng": -2.11667,
             "country": "GB"
             },
             {
             "id": 2647248,
             "city": "Haywards Heath",
             "lat": 50.997688,
             "lng": -0.10313,
             "country": "GB"
             },
             {
             "id": 2647265,
             "city": "Haydock",
             "lat": 53.467232,
             "lng": -2.68166,
             "country": "GB"
             },
             {
             "id": 2647310,
             "city": "Haverhill",
             "lat": 52.08226,
             "lng": 0.43891,
             "country": "GB"
             },
             {
             "id": 2647317,
             "city": "Havant",
             "lat": 50.856701,
             "lng": -0.98559,
             "country": "GB"
             },
             {
             "id": 2647349,
             "city": "Hatfield",
             "lat": 51.763378,
             "lng": -0.22419,
             "country": "GB"
             },
             {
             "id": 2647356,
             "city": "Hastings",
             "lat": 50.85519,
             "lng": 0.57292,
             "country": "GB"
             },
             {
             "id": 2647363,
             "city": "Haslingden",
             "lat": 53.703259,
             "lng": -2.32382,
             "country": "GB"
             },
             {
             "id": 2647383,
             "city": "Harwich",
             "lat": 51.94194,
             "lng": 1.28437,
             "country": "GB"
             },
             {
             "id": 2647428,
             "city": "Harrogate",
             "lat": 53.99078,
             "lng": -1.5373,
             "country": "GB"
             },
             {
             "id": 2647451,
             "city": "Harpenden",
             "lat": 51.816841,
             "lng": -0.35706,
             "country": "GB"
             },
             {
             "id": 2647639,
             "city": "Halesowen",
             "lat": 52.448589,
             "lng": -2.04938,
             "country": "GB"
             },
             {
             "id": 2647679,
             "city": "Hadleigh",
             "lat": 51.552689,
             "lng": 0.60983,
             "country": "GB"
             },
             {
             "id": 2647784,
             "city": "Guiseley",
             "lat": 53.87561,
             "lng": -1.71232,
             "country": "GB"
             },
             {
             "id": 2647785,
             "city": "Guisborough",
             "lat": 54.534779,
             "lng": -1.05606,
             "country": "GB"
             },
             {
             "id": 2647793,
             "city": "Guildford",
             "lat": 51.235359,
             "lng": -0.57427,
             "country": "GB"
             },
             {
             "id": 2647837,
             "city": "Grove",
             "lat": 51.609539,
             "lng": -1.42187,
             "country": "GB"
             },
             {
             "id": 2647984,
             "city": "Great Yarmouth",
             "lat": 52.608311,
             "lng": 1.73052,
             "country": "GB"
             },
             {
             "id": 2647985,
             "city": "Great Wyrley",
             "lat": 52.662769,
             "lng": -2.01111,
             "country": "GB"
             },
             {
             "id": 2648026,
             "city": "Great Sankey",
             "lat": 53.392342,
             "lng": -2.63994,
             "country": "GB"
             },
             {
             "id": 2648063,
             "city": "Great Malvern",
             "lat": 52.11161,
             "lng": -2.32515,
             "country": "GB"
             },
             {
             "id": 2648182,
             "city": "Grays",
             "lat": 51.475658,
             "lng": 0.32521,
             "country": "GB"
             },
             {
             "id": 2648187,
             "city": "Gravesend",
             "lat": 51.44138,
             "lng": 0.37371,
             "country": "GB"
             },
             {
             "id": 2648208,
             "city": "Grantham",
             "lat": 52.911491,
             "lng": -0.64184,
             "country": "GB"
             },
             {
             "id": 2648215,
             "city": "Grangemouth",
             "lat": 56.01141,
             "lng": -3.72183,
             "country": "GB"
             },
             {
             "id": 2648273,
             "city": "Gosforth",
             "lat": 55,
             "lng": -1.61667,
             "country": "GB"
             },
             {
             "id": 2648290,
             "city": "Gorseinon",
             "lat": 51.669312,
             "lng": -4.04163,
             "country": "GB"
             },
             {
             "id": 2648319,
             "city": "Goole",
             "lat": 53.716671,
             "lng": -0.86667,
             "country": "GB"
             },
             {
             "id": 2648356,
             "city": "Golborne",
             "lat": 53.476929,
             "lng": -2.59651,
             "country": "GB"
             },
             {
             "id": 2648404,
             "city": "Gloucester",
             "lat": 51.865681,
             "lng": -2.2431,
             "country": "GB"
             },
             {
             "id": 2648438,
             "city": "Glenrothes",
             "lat": 56.195141,
             "lng": -3.17316,
             "country": "GB"
             },*/
            {
              "id": 2648579,
              "city": "Glasgow",
              "lat": 55.86515,
              "lng": -4.25763,
              "country": "GB"
            }, /*
             {
             "id": 2648657,
             "city": "Gillingham",
             "lat": 51.389141,
             "lng": 0.54863,
             "country": "GB"
             },
             {
             "id": 2648683,
             "city": "Giffnock",
             "lat": 55.80373,
             "lng": -4.29488,
             "country": "GB"
             },
             {
             "id": 2648728,
             "city": "Gelligaer",
             "lat": 51.66444,
             "lng": -3.25611,
             "country": "GB"
             },
             {
             "id": 2648773,
             "city": "Gateshead",
             "lat": 54.96209,
             "lng": -1.60168,
             "country": "GB"
             },
             {
             "id": 2648945,
             "city": "Gainsborough",
             "lat": 53.383331,
             "lng": -0.76667,
             "country": "GB"
             },
             {
             "id": 2648970,
             "city": "Fylde",
             "lat": 53.833328,
             "lng": -2.91667,
             "country": "GB"
             },
             {
             "id": 2649024,
             "city": "Frome",
             "lat": 51.22834,
             "lng": -2.32211,
             "country": "GB"
             },
             {
             "id": 2649049,
             "city": "Frinton-on-Sea",
             "lat": 51.838772,
             "lng": 1.24625,
             "country": "GB"
             },
             {
             "id": 2649312,
             "city": "Fleetwood",
             "lat": 53.92527,
             "lng": -3.01085,
             "country": "GB"
             },
             {
             "id": 2649578,
             "city": "Felling",
             "lat": 54.952969,
             "lng": -1.57152,
             "country": "GB"
             },
             {
             "id": 2649579,
             "city": "Felixstowe",
             "lat": 51.963749,
             "lng": 1.3511,
             "country": "GB"
             },
             {
             "id": 2649622,
             "city": "Faversham",
             "lat": 51.3148,
             "lng": 0.88856,
             "country": "GB"
             },
             {
             "id": 2649650,
             "city": "Farnworth",
             "lat": 53.549999,
             "lng": -2.4,
             "country": "GB"
             },
             {
             "id": 2649660,
             "city": "Farnham",
             "lat": 51.214329,
             "lng": -0.79587,
             "country": "GB"
             },
             {
             "id": 2649672,
             "city": "Farnborough",
             "lat": 51.294239,
             "lng": -0.75565,
             "country": "GB"
             },
             {
             "id": 2649692,
             "city": "Fareham",
             "lat": 50.85162,
             "lng": -1.17929,
             "country": "GB"
             },
             {
             "id": 2649723,
             "city": "Falkirk",
             "lat": 55.999168,
             "lng": -3.78713,
             "country": "GB"
             },
             {
             "id": 2649800,
             "city": "Exmouth",
             "lat": 50.617229,
             "lng": -3.40233,
             "country": "GB"
             },
             {
             "id": 2649808,
             "city": "Exeter",
             "lat": 50.723598,
             "lng": -3.52751,
             "country": "GB"
             },
             {
             "id": 2649833,
             "city": "Evesham",
             "lat": 52.092369,
             "lng": -1.94887,
             "country": "GB"
             },
             {
             "id": 2649911,
             "city": "Esher",
             "lat": 51.369259,
             "lng": -0.36572,
             "country": "GB"
             },
             {
             "id": 2649957,
             "city": "Epsom",
             "lat": 51.330502,
             "lng": -0.27011,
             "country": "GB"
             },
             {
             "id": 2650004,
             "city": "Emsworth",
             "lat": 50.84779,
             "lng": -0.93697,
             "country": "GB"
             },
             {
             "id": 2650188,
             "city": "Egham",
             "lat": 51.43158,
             "lng": -0.55239,
             "country": "GB"
             },
             {
             "id": 2650278,
             "city": "Eccles",
             "lat": 53.48333,
             "lng": -2.33333,
             "country": "GB"
             },
             {
             "id": 2650285,
             "city": "Ebbw Vale",
             "lat": 51.777142,
             "lng": -3.20792,
             "country": "GB"
             },
             {
             "id": 2650309,
             "city": "Eastwood",
             "lat": 53,
             "lng": -1.3,
             "country": "GB"
             },
             {
             "id": 2650346,
             "city": "Retford",
             "lat": 53.322128,
             "lng": -0.94315,
             "country": "GB"
             },
             {
             "id": 2650376,
             "city": "East Molesey",
             "lat": 51.39872,
             "lng": -0.34916,
             "country": "GB"
             },
             {
             "id": 2650396,
             "city": "Eastleigh",
             "lat": 50.966671,
             "lng": -1.35,
             "country": "GB"
             },
             {
             "id": 2650405,
             "city": "East Kilbride",
             "lat": 55.76667,
             "lng": -4.16667,
             "country": "GB"
             },
             {
             "id": 2650435,
             "city": "East Grinstead",
             "lat": 51.123821,
             "lng": -0.0061,
             "country": "GB"
             },
             {
             "id": 2650470,
             "city": "East Dereham",
             "lat": 52.683331,
             "lng": 0.93333,
             "country": "GB"
             },
             {
             "id": 2650497,
             "city": "Eastbourne",
             "lat": 50.768711,
             "lng": 0.28453,
             "country": "GB"
             },
             {
             "id": 2650657,
             "city": "Dunstable",
             "lat": 51.886002,
             "lng": -0.52099,
             "country": "GB"
             },
             {
             "id": 2650815,
             "city": "Dukinfield",
             "lat": 53.474972,
             "lng": -2.08809,
             "country": "GB"
             },
             {
             "id": 2650839,
             "city": "Dudley",
             "lat": 52.5,
             "lng": -2.08333,
             "country": "GB"
             },
             {
             "id": 2650962,
             "city": "Droylsden",
             "lat": 53.480049,
             "lng": -2.14543,
             "country": "GB"
             },
             {
             "id": 2650983,
             "city": "Droitwich",
             "lat": 52.26667,
             "lng": -2.15,
             "country": "GB"
             },
             {
             "id": 2651095,
             "city": "Dorking",
             "lat": 51.232899,
             "lng": -0.32942,
             "country": "GB"
             },
             {
             "id": 2651269,
             "city": "Didcot",
             "lat": 51.60928,
             "lng": -1.24214,
             "country": "GB"
             },
             {
             "id": 2651286,
             "city": "Dewsbury",
             "lat": 53.690762,
             "lng": -1.62907,
             "country": "GB"
             },*/
             {
             "id": 2651347,
             "city": "Derby",
             "lat": 52.922771,
             "lng": -1.47663,
             "country": "GB"
             },/*
             {
             "id": 2651357,
             "city": "Denton",
             "lat": 53.456779,
             "lng": -2.11822,
             "country": "GB"
             },
             {
             "id": 2651468,
             "city": "Deal",
             "lat": 51.223221,
             "lng": 1.40432,
             "country": "GB"
             },
             {
             "id": 2651495,
             "city": "Darwen",
             "lat": 53.698029,
             "lng": -2.46494,
             "country": "GB"
             },
             {
             "id": 2651497,
             "city": "Darton",
             "lat": 53.587051,
             "lng": -1.52676,
             "country": "GB"
             },
             {
             "id": 2651500,
             "city": "Dartford",
             "lat": 51.44352,
             "lng": 0.21964,
             "country": "GB"
             },
             {
             "id": 2651621,
             "city": "Dagenham",
             "lat": 51.549999,
             "lng": 0.16667,
             "country": "GB"
             },
             {
             "id": 2651654,
             "city": "Cwmbran",
             "lat": 51.654461,
             "lng": -3.02281,
             "country": "GB"
             },
             {
             "id": 2651715,
             "city": "Cumbernauld",
             "lat": 55.94685,
             "lng": -3.99051,
             "country": "GB"
             },
             {
             "id": 2652053,
             "city": "Crawley",
             "lat": 51.113029,
             "lng": -0.18312,
             "country": "GB"
             },
             {
             "id": 2652095,
             "city": "Cramlington",
             "lat": 55.086521,
             "lng": -1.58598,
             "country": "GB"
             },
             {
             "id": 2652191,
             "city": "Cowley",
             "lat": 51.731392,
             "lng": -1.20742,
             "country": "GB"
             },
             {
             "id": 2652204,
             "city": "Cowes",
             "lat": 50.763062,
             "lng": -1.29772,
             "country": "GB"
             },*/
             {
             "id": 2652221,
             "city": "Coventry",
             "lat": 52.406559,
             "lng": -1.51217,
             "country": "GB"
             },/*
             {
             "id": 2652381,
             "city": "Corby",
             "lat": 52.496368,
             "lng": -0.68939,
             "country": "GB"
             },
             {
             "id": 2652437,
             "city": "Consett",
             "lat": 54.854038,
             "lng": -1.8316,
             "country": "GB"
             },
             {
             "id": 2652458,
             "city": "Conisbrough",
             "lat": 53.48188,
             "lng": -1.23214,
             "country": "GB"
             },
             {
             "id": 2652464,
             "city": "Congleton",
             "lat": 53.163139,
             "lng": -2.21253,
             "country": "GB"
             },
             {
             "id": 2652513,
             "city": "Colwyn Bay",
             "lat": 53.29483,
             "lng": -3.72674,
             "country": "GB"
             },
             {
             "id": 2652544,
             "city": "Colne",
             "lat": 53.857128,
             "lng": -2.16851,
             "country": "GB"
             },
             {
             "id": 2652622,
             "city": "Coity",
             "lat": 51.521999,
             "lng": -3.55531,
             "country": "GB"
             },
             {
             "id": 2652689,
             "city": "Cobham",
             "lat": 51.329971,
             "lng": -0.4113,
             "country": "GB"
             },
             {
             "id": 2652696,
             "city": "Coatbridge",
             "lat": 55.86216,
             "lng": -4.02469,
             "country": "GB"
             },
             {
             "id": 2652698,
             "city": "Coalville",
             "lat": 52.716671,
             "lng": -1.36667,
             "country": "GB"
             },
             {
             "id": 2652730,
             "city": "Clydebank",
             "lat": 55.901371,
             "lng": -4.4057,
             "country": "GB"
             },
             {
             "id": 2652734,
             "city": "Clydach",
             "lat": 51.683331,
             "lng": -3.9,
             "country": "GB"
             },
             {
             "id": 2652819,
             "city": "Clitheroe",
             "lat": 53.866669,
             "lng": -2.4,
             "country": "GB"
             },
             {
             "id": 2652885,
             "city": "Cleethorpes",
             "lat": 53.560471,
             "lng": -0.03225,
             "country": "GB"
             },
             {
             "id": 2652890,
             "city": "Cleckheaton",
             "lat": 53.724049,
             "lng": -1.71294,
             "country": "GB"
             },
             {
             "id": 2652974,
             "city": "Clacton-on-Sea",
             "lat": 51.789669,
             "lng": 1.15597,
             "country": "GB"
             },
             {
             "id": 2652995,
             "city": "Cirencester",
             "lat": 51.717079,
             "lng": -1.96825,
             "country": "GB"
             },
             {
             "id": 2653086,
             "city": "Chorley",
             "lat": 53.650002,
             "lng": -2.61667,
             "country": "GB"
             },
             {
             "id": 2653137,
             "city": "Chipping Sodbury",
             "lat": 51.538132,
             "lng": -2.39379,
             "country": "GB"
             },
             {
             "id": 2653144,
             "city": "Chippenham",
             "lat": 51.459999,
             "lng": -2.12472,
             "country": "GB"
             },
             {
             "id": 2653225,
             "city": "Chesterfield",
             "lat": 53.25,
             "lng": -1.41667,
             "country": "GB"
             },
             {
             "id": 2653228,
             "city": "Chester",
             "lat": 53.190498,
             "lng": -2.89189,
             "country": "GB"
             },
             {
             "id": 2653235,
             "city": "Chesham",
             "lat": 51.700001,
             "lng": -0.6,
             "country": "GB"
             },
             {
             "id": 2653261,
             "city": "Cheltenham",
             "lat": 51.900002,
             "lng": -2.08333,
             "country": "GB"
             },
             {
             "id": 2653265,
             "city": "Chelsea",
             "lat": 51.487549,
             "lng": -0.16936,
             "country": "GB"
             },
             {
             "id": 2653305,
             "city": "Chatham",
             "lat": 51.37891,
             "lng": 0.52786,
             "country": "GB"
             },
             {
             "id": 2653353,
             "city": "Chapletown",
             "lat": 53.465061,
             "lng": -1.47217,
             "country": "GB"
             },
             {
             "id": 2653393,
             "city": "Chalfont Saint Peter",
             "lat": 51.608849,
             "lng": -0.55618,
             "country": "GB"
             },
             {
             "id": 2653520,
             "city": "Caterham",
             "lat": 51.282299,
             "lng": -0.07889,
             "country": "GB"
             },
             {
             "id": 2653558,
             "city": "Castlereagh",
             "lat": 54.573502,
             "lng": -5.88472,
             "country": "GB"
             },
             {
             "id": 2653680,
             "city": "Carrickfergus",
             "lat": 54.715801,
             "lng": -5.8058,
             "country": "GB"
             },
             {
             "id": 2653877,
             "city": "Canterbury",
             "lat": 51.279041,
             "lng": 1.07992,
             "country": "GB"
             },
             {
             "id": 2653883,
             "city": "Cannock",
             "lat": 52.690449,
             "lng": -2.03085,
             "country": "GB"
             },
             {
             "id": 2653945,
             "city": "Camborne",
             "lat": 50.213058,
             "lng": -5.29731,
             "country": "GB"
             },
             {
             "id": 2653947,
             "city": "Camberley",
             "lat": 51.337051,
             "lng": -0.74261,
             "country": "GB"
             },
             {
             "id": 2654089,
             "city": "Caerphilly",
             "lat": 51.57452,
             "lng": -3.218,
             "country": "GB"
             },
             {
             "id": 2654179,
             "city": "Bushey",
             "lat": 51.643162,
             "lng": -0.36053,
             "country": "GB"
             },
             {
             "id": 2654252,
             "city": "Burntwood",
             "lat": 52.680752,
             "lng": -1.92759,
             "country": "GB"
             },
             {
             "id": 2654308,
             "city": "Burgess Hill",
             "lat": 50.958431,
             "lng": -0.13287,
             "country": "GB"
             },
             {
             "id": 2654415,
             "city": "Buckhaven",
             "lat": 56.17149,
             "lng": -3.03377,
             "country": "GB"
             },
             {
             "id": 2654450,
             "city": "Brymbo",
             "lat": 53.066669,
             "lng": -3.06667,
             "country": "GB"
             },
             {
             "id": 2654490,
             "city": "Brownhills",
             "lat": 52.633331,
             "lng": -1.93333,
             "country": "GB"
             },
             {
             "id": 2654579,
             "city": "Bromsgrove",
             "lat": 52.335739,
             "lng": -2.05983,
             "country": "GB"
             },
             {
             "id": 2654635,
             "city": "Broadstairs",
             "lat": 51.359081,
             "lng": 1.43938,
             "country": "GB"
             },
             {
             "id": 2654663,
             "city": "Brixham",
             "lat": 50.39431,
             "lng": -3.51585,
             "country": "GB"
             },
             {
             "id": 2654715,
             "city": "Brighouse",
             "lat": 53.70322,
             "lng": -1.78428,
             "country": "GB"
             },
             {
             "id": 2654724,
             "city": "Brierley Hill",
             "lat": 52.481731,
             "lng": -2.12139,
             "country": "GB"
             },
             {
             "id": 2654782,
             "city": "Brentwood",
             "lat": 51.621269,
             "lng": 0.30556,
             "country": "GB"
             },
             {
             "id": 2654927,
             "city": "Bramhall",
             "lat": 53.358009,
             "lng": -2.16539,
             "country": "GB"
             },
             {
             "id": 2654938,
             "city": "Braintree",
             "lat": 51.878189,
             "lng": 0.55292,
             "country": "GB"
             },*/
            {
              "id": 2654993,
              "city": "Bradford",
              "lat": 53.793911,
              "lng": -1.75206,
              "country": "GB"
            }, /*
             {
             "id": 2655009,
             "city": "Bracknell",
             "lat": 51.413631,
             "lng": -0.75054,
             "country": "GB"
             },
             {
             "id": 2655095,
             "city": "Bournemouth",
             "lat": 50.720482,
             "lng": -1.8795,
             "country": "GB"
             },
             {
             "id": 2655186,
             "city": "Borehamwood",
             "lat": 51.654678,
             "lng": -0.27762,
             "country": "GB"
             },
             {
             "id": 2655198,
             "city": "Bootle",
             "lat": 53.466671,
             "lng": -3.01667,
             "country": "GB"
             },
             {
             "id": 2655237,
             "city": "Bolton",
             "lat": 53.583328,
             "lng": -2.43333,
             "country": "GB"
             },
             {
             "id": 2655262,
             "city": "Bognor Regis",
             "lat": 50.782059,
             "lng": -0.67978,
             "country": "GB"
             },
             {
             "id": 2655315,
             "city": "Blyth",
             "lat": 55.127079,
             "lng": -1.50856,
             "country": "GB"
             },
             {
             "id": 2655329,
             "city": "Bloxwich",
             "lat": 52.618061,
             "lng": -2.00431,
             "country": "GB"
             },
             {
             "id": 2655351,
             "city": "Bletchley",
             "lat": 51.99334,
             "lng": -0.73471,
             "country": "GB"
             },
             {
             "id": 2655557,
             "city": "Bishopstoke",
             "lat": 50.966431,
             "lng": -1.32832,
             "country": "GB"
             },
             {
             "id": 2655582,
             "city": "Bishopbriggs",
             "lat": 55.906689,
             "lng": -4.21869,
             "country": "GB"
             },*/
            {
              "id": 2655603,
              "city": "Birmingham",
              "lat": 52.481419,
              "lng": -1.89983,
              "country": "GB"
            }, /*
             {
             "id": 2655672,
             "city": "Billericay",
             "lat": 51.62867,
             "lng": 0.41963,
             "country": "GB"
             },
             {
             "id": 2655689,
             "city": "Biggleswade",
             "lat": 52.086521,
             "lng": -0.26493,
             "country": "GB"
             },
             {
             "id": 2655707,
             "city": "Bideford",
             "lat": 51.017872,
             "lng": -4.20458,
             "country": "GB"
             },
             {
             "id": 2655708,
             "city": "Biddulph",
             "lat": 53.117241,
             "lng": -2.17584,
             "country": "GB"
             },
             {
             "id": 2655729,
             "city": "Bicester",
             "lat": 51.899979,
             "lng": -1.15357,
             "country": "GB"
             },
             {
             "id": 2655819,
             "city": "Berwick-Upon-Tweed",
             "lat": 55.783329,
             "lng": -2,
             "country": "GB"
             },
             {
             "id": 2655858,
             "city": "Berkhamsted",
             "lat": 51.760399,
             "lng": -0.56528,
             "country": "GB"
             },
             {
             "id": 2655882,
             "city": "Bentley",
             "lat": 53.533329,
             "lng": -1.15,
             "country": "GB"
             },
             {
             "id": 2655942,
             "city": "Belper",
             "lat": 53.0233,
             "lng": -1.48119,
             "country": "GB"
             },
             {
             "id": 2655952,
             "city": "Bellshill",
             "lat": 55.816669,
             "lng": -4.01667,
             "country": "GB"
             },
             {
             "id": 2656031,
             "city": "Bedworth",
             "lat": 52.479099,
             "lng": -1.46909,
             "country": "GB"
             },
             {
             "id": 2656070,
             "city": "Bebington",
             "lat": 53.349998,
             "lng": -3.01667,
             "country": "GB"
             },
             {
             "id": 2656086,
             "city": "Bearsden",
             "lat": 55.915359,
             "lng": -4.33279,
             "country": "GB"
             },
             {
             "id": 2656173,
             "city": "Bath",
             "lat": 51.377949,
             "lng": -2.35907,
             "country": "GB"
             },
             {
             "id": 2656192,
             "city": "Basingstoke",
             "lat": 51.262489,
             "lng": -1.08708,
             "country": "GB"
             },
             {
             "id": 2656258,
             "city": "Barrhead",
             "lat": 55.79916,
             "lng": -4.39285,
             "country": "GB"
             },
             {
             "id": 2656281,
             "city": "Barnstaple",
             "lat": 51.080219,
             "lng": -4.05808,
             "country": "GB"
             },
             {
             "id": 2656379,
             "city": "Banstead",
             "lat": 51.325031,
             "lng": -0.19569,
             "country": "GB"
             },
             {
             "id": 2656396,
             "city": "Bangor",
             "lat": 54.653381,
             "lng": -5.66895,
             "country": "GB"
             },
             {
             "id": 2656397,
             "city": "Bangor",
             "lat": 53.226471,
             "lng": -4.13459,
             "country": "GB"
             },
             {
             "id": 2656407,
             "city": "Banbridge",
             "lat": 54.349998,
             "lng": -6.28333,
             "country": "GB"
             },
             {
             "id": 2656490,
             "city": "Ballymena",
             "lat": 54.863571,
             "lng": -6.27628,
             "country": "GB"
             },
             {
             "id": 2656627,
             "city": "Baildon",
             "lat": 53.847111,
             "lng": -1.78785,
             "country": "GB"
             },
             {
             "id": 2656708,
             "city": "Ayr",
             "lat": 55.46273,
             "lng": -4.63393,
             "country": "GB"
             },
             {
             "id": 2656915,
             "city": "Ashton-under-Lyne",
             "lat": 53.488762,
             "lng": -2.0989,
             "country": "GB"
             },
             {
             "id": 2656918,
             "city": "Ashton in Makerfield",
             "lat": 53.48333,
             "lng": -2.65,
             "country": "GB"
             },
             {
             "id": 2656955,
             "city": "Ashford",
             "lat": 51.145859,
             "lng": 0.87281,
             "country": "GB"
             },
             {
             "id": 2656992,
             "city": "Ascot",
             "lat": 51.41082,
             "lng": -0.6748,
             "country": "GB"
             },
             {
             "id": 2657030,
             "city": "Arnold",
             "lat": 53,
             "lng": -1.13333,
             "country": "GB"
             },
             {
             "id": 2657215,
             "city": "Arbroath",
             "lat": 56.563171,
             "lng": -2.58736,
             "country": "GB"
             },
             {
             "id": 2657255,
             "city": "Antrim",
             "lat": 54.700001,
             "lng": -6.2,
             "country": "GB"
             },
             {
             "id": 2657324,
             "city": "Andover",
             "lat": 51.208279,
             "lng": -1.48246,
             "country": "GB"
             },
             {
             "id": 2657356,
             "city": "Amersham",
             "lat": 51.666672,
             "lng": -0.61667,
             "country": "GB"
             },
             {
             "id": 2657402,
             "city": "Altrincham",
             "lat": 53.38752,
             "lng": -2.34848,
             "country": "GB"
             },
             {
             "id": 2657408,
             "city": "Alton",
             "lat": 51.149311,
             "lng": -0.97469,
             "country": "GB"
             },
             {
             "id": 2657528,
             "city": "Aldridge",
             "lat": 52.605492,
             "lng": -1.91715,
             "country": "GB"
             },
             {
             "id": 2657540,
             "city": "Aldershot",
             "lat": 51.248268,
             "lng": -0.76389,
             "country": "GB"
             },
             {
             "id": 2657613,
             "city": "Airdrie",
             "lat": 55.86602,
             "lng": -3.98025,
             "country": "GB"
             },
             {
             "id": 2657697,
             "city": "Acton",
             "lat": 51.50901,
             "lng": -0.2762,
             "country": "GB"
             },
             {
             "id": 2657770,
             "city": "Accrington",
             "lat": 53.753792,
             "lng": -2.35863,
             "country": "GB"
             },
             {
             "id": 2657780,
             "city": "Abingdon",
             "lat": 51.671089,
             "lng": -1.28278,
             "country": "GB"
             },
             {
             "id": 2657782,
             "city": "Aberystwyth",
             "lat": 52.415482,
             "lng": -4.08292,
             "country": "GB"
             },
             {
             "id": 2657812,
             "city": "Abergele",
             "lat": 53.284359,
             "lng": -3.5822,
             "country": "GB"
             },
             {
             "id": 2657832,
             "city": "Aberdeen",
             "lat": 57.143688,
             "lng": -2.09814,
             "country": "GB"
             },
             {
             "id": 2657835,
             "city": "Aberdare",
             "lat": 51.714378,
             "lng": -3.44918,
             "country": "GB"
             },
             {
             "id": 3209584,
             "city": "Crosby",
             "lat": 53.477779,
             "lng": -3.03333,
             "country": "GB"
             },
             {
             "id": 3345317,
             "city": "Blackwood",
             "lat": 51.667782,
             "lng": -3.2075,
             "country": "GB"
             },
             {
             "id": 3345432,
             "city": "Neston",
             "lat": 51.41222,
             "lng": -2.20056,
             "country": "GB"
             },
             {
             "id": 3345437,
             "city": "Camden Town",
             "lat": 51.540569,
             "lng": -0.14334,
             "country": "GB"
             },
             {
             "id": 3345439,
             "city": "Telford",
             "lat": 52.67659,
             "lng": -2.44926,
             "country": "GB"
             },
             {
             "id": 3345440,
             "city": "Craigavon",
             "lat": 54.44709,
             "lng": -6.387,
             "country": "GB"
             },
             {
             "id": 6545243,
             "city": "Bayswater",
             "lat": 51.511162,
             "lng": -0.18426,
             "country": "GB"
             },
             {
             "id": 6620293,
             "city": "Yateley",
             "lat": 51.343048,
             "lng": -0.82985,
             "country": "GB"
             },
             {
             "id": 6620360,
             "city": "Hedge End",
             "lat": 50.912338,
             "lng": -1.30076,
             "country": "GB"
             },
             {
             "id": 6640028,
             "city": "Hale",
             "lat": 53.378311,
             "lng": -2.33271,
             "country": "GB"
             },
             {
             "id": 6690592,
             "city": "Amersham on the Hill",
             "lat": 51.674679,
             "lng": -0.60742,
             "country": "GB"
             },
             {
             "id": 6690602,
             "city": "Battersea",
             "lat": 51.474751,
             "lng": -0.15547,
             "country": "GB"
             },
             {
             "id": 6690863,
             "city": "Hornchurch",
             "lat": 51.55685,
             "lng": 0.21664,
             "country": "GB"
             },
             {
             "id": 6690866,
             "city": "Surbiton",
             "lat": 51.391479,
             "lng": -0.29825,
             "country": "GB"
             },
             {
             "id": 6690867,
             "city": "Ewell",
             "lat": 51.34948,
             "lng": -0.2494,
             "country": "GB"
             },
             {
             "id": 6690870,
             "city": "Becontree",
             "lat": 51.552898,
             "lng": 0.129,
             "country": "GB"
             },
             {
             "id": 6690877,
             "city": "Brixton",
             "lat": 51.465931,
             "lng": -0.10652,
             "country": "GB"
             },
             {
             "id": 6690989,
             "city": "Bethnal Green",
             "lat": 51.52718,
             "lng": -0.06109,
             "country": "GB"
             },
             {
             "id": 6691219,
             "city": "Failsworth",
             "lat": 53.504841,
             "lng": -2.16568,
             "country": "GB"
             },
             {
             "id": 6691227,
             "city": "Radcliffe",
             "lat": 53.561779,
             "lng": -2.32455,
             "country": "GB"
             },
             {
             "id": 6691235,
             "city": "Heywood",
             "lat": 53.592449,
             "lng": -2.21941,
             "country": "GB"
             },
             {
             "id": 6691766,
             "city": "Longsight",
             "lat": 53.458012,
             "lng": -2.20104,
             "country": "GB"
             },
             {
             "id": 6691884,
             "city": "Heavitree",
             "lat": 50.72044,
             "lng": -3.49646,
             "country": "GB"
             },
             {
             "id": 6691927,
             "city": "Ferndown",
             "lat": 50.80743,
             "lng": -1.89975,
             "country": "GB"
             },
             {
             "id": 6693470,
             "city": "Lytham St Annes",
             "lat": 53.742599,
             "lng": -2.997,
             "country": "GB"
             },
             {
             "id": 6693771,
             "city": "Hadley Wood",
             "lat": 51.666691,
             "lng": -0.16981,
             "country": "GB"
             },
             {
             "id": 6695247,
             "city": "Chapel Allerton",
             "lat": 53.82901,
             "lng": -1.53834,
             "country": "GB"
             },
             {
             "id": 6947041,
             "city": "Blackheath",
             "lat": 51.464699,
             "lng": 0.0079,
             "country": "GB"
             },
             {
             "id": 6947168,
             "city": "Kempston Hardwick",
             "lat": 52.089561,
             "lng": -0.49908,
             "country": "GB"
             },
             {
             "id": 2634569,
             "city": "Wells",
             "lat": 51.207939,
             "lng": -2.64896,
             "country": "GB"
             },
             {
             "id": 6947756,
             "city": "Mendip",
             "lat": 51.237202,
             "lng": -2.6266,
             "country": "GB"
             },
             {
             "id": 7290015,
             "city": "Lower Earley",
             "lat": 51.427078,
             "lng": -0.91979,
             "country": "GB"
             },
             {
             "id": 7302130,
             "city": "Bartley Green",
             "lat": 52.435322,
             "lng": -1.99707,
             "country": "GB"
             },
             {
             "id": 8063096,
             "city": "Earlsfield",
             "lat": 51.443901,
             "lng": -0.1854,
             "country": "GB"
             },
             {
             "id": 145971,
             "city": "Xylotymbou",
             "lat": 35.0191,
             "lng": 33.74057,
             "country": "GB"
             },
             {
             "id": 146189,
             "city": "Pergamos",
             "lat": 35.041672,
             "lng": 33.708328,
             "country": "GB"
             },
             {
             "id": 146451,
             "city": "Kolossi",
             "lat": 34.67083,
             "lng": 32.929169,
             "country": "GB"
             },
             {
             "id": 2653590,
             "city": "Castle Douglas",
             "lat": 54.940948,
             "lng": -3.92784,
             "country": "GB"
             },
             {
             "id": 2633399,
             "city": "Yaxley",
             "lat": 52.517681,
             "lng": -0.25852,
             "country": "GB"
             },
             {
             "id": 2633403,
             "city": "Yatton",
             "lat": 51.966671,
             "lng": -2.53333,
             "country": "GB"
             },
             {
             "id": 2633412,
             "city": "Yarnton",
             "lat": 51.80986,
             "lng": -1.30694,
             "country": "GB"
             },
             {
             "id": 2633445,
             "city": "Wymondham",
             "lat": 52.759781,
             "lng": -0.74055,
             "country": "GB"
             },
             {
             "id": 2633460,
             "city": "Wye",
             "lat": 51.182491,
             "lng": 0.93678,
             "country": "GB"
             },
             {
             "id": 2633474,
             "city": "Wroxall",
             "lat": 52.33791,
             "lng": -1.66898,
             "country": "GB"
             },
             {
             "id": 2633476,
             "city": "Wroughton",
             "lat": 51.524109,
             "lng": -1.79559,
             "country": "GB"
             },
             {
             "id": 2633481,
             "city": "Writtle",
             "lat": 51.729061,
             "lng": 0.42938,
             "country": "GB"
             },
             {
             "id": 2633482,
             "city": "Wrington",
             "lat": 51.361729,
             "lng": -2.76319,
             "country": "GB"
             },
             {
             "id": 2633511,
             "city": "Wotton-under-Edge",
             "lat": 51.63242,
             "lng": -2.34512,
             "country": "GB"
             },
             {
             "id": 2633571,
             "city": "Royal Wootton Bassett",
             "lat": 51.541901,
             "lng": -1.9045,
             "country": "GB"
             },
             {
             "id": 2633575,
             "city": "Wootton",
             "lat": 52.095249,
             "lng": -0.53494,
             "country": "GB"
             },
             {
             "id": 2633577,
             "city": "Wootton",
             "lat": 51.173801,
             "lng": 1.1794,
             "country": "GB"
             },
             {
             "id": 2633609,
             "city": "Wool",
             "lat": 50.679661,
             "lng": -2.2189,
             "country": "GB"
             },
             {
             "id": 2633618,
             "city": "Woodstock",
             "lat": 51.848499,
             "lng": -1.35132,
             "country": "GB"
             },
             {
             "id": 2633664,
             "city": "Woodcote",
             "lat": 52.73333,
             "lng": -2.33333,
             "country": "GB"
             },
             {
             "id": 2633671,
             "city": "Woodbridge",
             "lat": 52.093319,
             "lng": 1.32042,
             "country": "GB"
             },
             {
             "id": 2633692,
             "city": "Wolston",
             "lat": 52.377171,
             "lng": -1.39544,
             "country": "GB"
             },
             {
             "id": 2633694,
             "city": "Wolsingham",
             "lat": 54.73085,
             "lng": -1.88319,
             "country": "GB"
             },
             {
             "id": 2633710,
             "city": "Woburn Sands",
             "lat": 52.015789,
             "lng": -0.64982,
             "country": "GB"
             },
             {
             "id": 2633717,
             "city": "Wivenhoe",
             "lat": 51.85553,
             "lng": 0.95796,
             "country": "GB"
             },
             {
             "id": 2633720,
             "city": "Wiveliscombe",
             "lat": 51.041389,
             "lng": -3.31278,
             "country": "GB"
             },
             {
             "id": 2633723,
             "city": "Witton Gilbert",
             "lat": 54.805721,
             "lng": -1.63686,
             "country": "GB"
             },
             {
             "id": 2633727,
             "city": "Wittering",
             "lat": 52.609718,
             "lng": -0.44151,
             "country": "GB"
             },
             {
             "id": 2633744,
             "city": "Withernsea",
             "lat": 53.731098,
             "lng": 0.03347,
             "country": "GB"
             },
             {
             "id": 2633751,
             "city": "Witchford",
             "lat": 52.38699,
             "lng": 0.20602,
             "country": "GB"
             },
             {
             "id": 2633774,
             "city": "Wirksworth",
             "lat": 53.082321,
             "lng": -1.57391,
             "country": "GB"
             },
             {
             "id": 2633786,
             "city": "Winterton",
             "lat": 53.654968,
             "lng": -0.59885,
             "country": "GB"
             },
             {
             "id": 2633797,
             "city": "Winterbourne",
             "lat": 51.446091,
             "lng": -1.3466,
             "country": "GB"
             },
             {
             "id": 2633824,
             "city": "Wingerworth",
             "lat": 53.201939,
             "lng": -1.43974,
             "country": "GB"
             },
             {
             "id": 2633827,
             "city": "Wingate",
             "lat": 54.732422,
             "lng": -1.37896,
             "country": "GB"
             },
             {
             "id": 2633849,
             "city": "Windlesham",
             "lat": 51.365089,
             "lng": -0.65476,
             "country": "GB"
             },
             {
             "id": 2633851,
             "city": "Windermere",
             "lat": 54.380859,
             "lng": -2.90709,
             "country": "GB"
             },
             {
             "id": 2633860,
             "city": "Winchcombe",
             "lat": 51.953629,
             "lng": -1.96398,
             "country": "GB"
             },
             {
             "id": 2633861,
             "city": "Wincanton",
             "lat": 51.056759,
             "lng": -2.40574,
             "country": "GB"
             },
             {
             "id": 2633863,
             "city": "Wimborne Minster",
             "lat": 50.783329,
             "lng": -1.98333,
             "country": "GB"
             },
             {
             "id": 2633878,
             "city": "Wilshamstead",
             "lat": 52.080879,
             "lng": -0.44889,
             "country": "GB"
             },
             {
             "id": 2633880,
             "city": "Wilsden",
             "lat": 53.820839,
             "lng": -1.85959,
             "country": "GB"
             },
             {
             "id": 2633894,
             "city": "Williton",
             "lat": 51.160831,
             "lng": -3.32083,
             "country": "GB"
             },
             {
             "id": 2633899,
             "city": "Willingham",
             "lat": 53.349998,
             "lng": -0.68333,
             "country": "GB"
             },
             {
             "id": 2633915,
             "city": "Willaston",
             "lat": 53.066669,
             "lng": -2.48333,
             "country": "GB"
             },
             {
             "id": 2633933,
             "city": "Wigton",
             "lat": 54.824821,
             "lng": -3.16114,
             "country": "GB"
             },
             {
             "id": 2633971,
             "city": "Wickham Market",
             "lat": 52.152981,
             "lng": 1.36299,
             "country": "GB"
             },
             {
             "id": 2633974,
             "city": "Wickham",
             "lat": 51.44342,
             "lng": -1.432,
             "country": "GB"
             },
             {
             "id": 2633982,
             "city": "Wick",
             "lat": 58.433331,
             "lng": -3.08333,
             "country": "GB"
             },
             {
             "id": 2633997,
             "city": "Whitworth",
             "lat": 53.65601,
             "lng": -2.1771,
             "country": "GB"
             },
             {
             "id": 2633999,
             "city": "Whitwell",
             "lat": 53.283329,
             "lng": -1.21667,
             "country": "GB"
             },
             {
             "id": 2634015,
             "city": "Whittington",
             "lat": 52.683331,
             "lng": -1.76667,
             "country": "GB"
             },
             {
             "id": 2634095,
             "city": "Whitehead",
             "lat": 54.753712,
             "lng": -5.70933,
             "country": "GB"
             },
             {
             "id": 2634124,
             "city": "Whitchurch",
             "lat": 52.966671,
             "lng": -2.68333,
             "country": "GB"
             },
             {
             "id": 2634138,
             "city": "Whitburn",
             "lat": 54.953331,
             "lng": -1.36861,
             "country": "GB"
             },
             {
             "id": 2634170,
             "city": "Wheaton Aston",
             "lat": 52.711449,
             "lng": -2.22064,
             "country": "GB"
             },
             {
             "id": 2634171,
             "city": "Wheatley",
             "lat": 51.747311,
             "lng": -1.13936,
             "country": "GB"
             },
             {
             "id": 2634192,
             "city": "Whalley",
             "lat": 53.82209,
             "lng": -2.40712,
             "country": "GB"
             },
             {
             "id": 2634194,
             "city": "Whaley Bridge",
             "lat": 53.330311,
             "lng": -1.9826,
             "country": "GB"
             },
             {
             "id": 2634217,
             "city": "Wetherby",
             "lat": 53.92836,
             "lng": -1.38672,
             "country": "GB"
             },
             {
             "id": 2634236,
             "city": "West Wellow",
             "lat": 50.972729,
             "lng": -1.58293,
             "country": "GB"
             },
             {
             "id": 2634251,
             "city": "West Thurrock",
             "lat": 51.478279,
             "lng": 0.27672,
             "country": "GB"
             },
             {
             "id": 2634288,
             "city": "West Rainton",
             "lat": 54.816669,
             "lng": -1.5,
             "country": "GB"
             },
             {
             "id": 2634307,
             "city": "Weston Turville",
             "lat": 51.791679,
             "lng": -0.75767,
             "country": "GB"
             },
             {
             "id": 2634317,
             "city": "Westoning",
             "lat": 51.9814,
             "lng": -0.49698,
             "country": "GB"
             },
             {
             "id": 2634345,
             "city": "West Mersea",
             "lat": 51.777981,
             "lng": 0.91873,
             "country": "GB"
             },
             {
             "id": 2634349,
             "city": "West Malling",
             "lat": 51.292728,
             "lng": 0.40907,
             "country": "GB"
             },
             {
             "id": 2634378,
             "city": "West Kilbride",
             "lat": 55.683331,
             "lng": -4.85,
             "country": "GB"
             },
             {
             "id": 2634405,
             "city": "West Hallam",
             "lat": 52.970928,
             "lng": -1.35846,
             "country": "GB"
             },
             {
             "id": 2634413,
             "city": "Westgate on Sea",
             "lat": 51.382389,
             "lng": 1.33673,
             "country": "GB"
             },
             {
             "id": 2634434,
             "city": "Westerham",
             "lat": 51.266319,
             "lng": 0.06892,
             "country": "GB"
             },
             {
             "id": 2634447,
             "city": "West End",
             "lat": 50.92741,
             "lng": -1.33282,
             "country": "GB"
             },
             {
             "id": 2634467,
             "city": "West Cornforth",
             "lat": 54.702862,
             "lng": -1.51938,
             "country": "GB"
             },
             {
             "id": 2634477,
             "city": "West Calder",
             "lat": 55.851879,
             "lng": -3.56981,
             "country": "GB"
             },
             {
             "id": 2634478,
             "city": "West Byfleet",
             "lat": 51.339458,
             "lng": -0.49338,
             "country": "GB"
             },
             {
             "id": 2634499,
             "city": "West Bergholt",
             "lat": 51.912209,
             "lng": 0.84986,
             "country": "GB"
             },
             {
             "id": 2634538,
             "city": "Wendover",
             "lat": 51.763008,
             "lng": -0.74149,
             "country": "GB"
             },
             {
             "id": 2634545,
             "city": "Wemyss Bay",
             "lat": 55.876141,
             "lng": -4.8895,
             "country": "GB"
             },
             {
             "id": 2634550,
             "city": "Wem",
             "lat": 52.858349,
             "lng": -2.71826,
             "country": "GB"
             },
             {
             "id": 2634553,
             "city": "Welwyn",
             "lat": 51.833099,
             "lng": -0.21359,
             "country": "GB"
             },
             {
             "id": 2634560,
             "city": "Welshpool",
             "lat": 52.659729,
             "lng": -3.1471,
             "country": "GB"
             },
             {
             "id": 2634567,
             "city": "Wells-next-the-Sea",
             "lat": 52.951641,
             "lng": 0.8511,
             "country": "GB"
             },
             {
             "id": 2634581,
             "city": "Wellesbourne Mountford",
             "lat": 52.183331,
             "lng": -1.58333,
             "country": "GB"
             },
             {
             "id": 2634618,
             "city": "Wedmore",
             "lat": 51.227268,
             "lng": -2.81152,
             "country": "GB"
             },
             {
             "id": 2634623,
             "city": "Weaverham",
             "lat": 53.260181,
             "lng": -2.57291,
             "country": "GB"
             },
             {
             "id": 2634660,
             "city": "Watton at Stone",
             "lat": 51.858421,
             "lng": -0.11381,
             "country": "GB"
             },
             {
             "id": 2634661,
             "city": "Watton",
             "lat": 53.933331,
             "lng": -0.45,
             "country": "GB"
             },
             {
             "id": 2634671,
             "city": "Watlington",
             "lat": 51.643269,
             "lng": -1.00448,
             "country": "GB"
             },
             {
             "id": 2634682,
             "city": "Water Orton",
             "lat": 52.515751,
             "lng": -1.74005,
             "country": "GB"
             },
             {
             "id": 2634690,
             "city": "Wateringbury",
             "lat": 51.255428,
             "lng": 0.42317,
             "country": "GB"
             },
             {
             "id": 2634701,
             "city": "Waterbeach",
             "lat": 52.26553,
             "lng": 0.19123,
             "country": "GB"
             },
             {
             "id": 2634704,
             "city": "Watchet",
             "lat": 51.181889,
             "lng": -3.33079,
             "country": "GB"
             },
             {
             "id": 2634716,
             "city": "Washington",
             "lat": 50.904869,
             "lng": -0.40649,
             "country": "GB"
             },
             {
             "id": 2634736,
             "city": "Warsop",
             "lat": 53.21402,
             "lng": -1.15091,
             "country": "GB"
             },
             {
             "id": 2634743,
             "city": "Warrenpoint",
             "lat": 54.099468,
             "lng": -6.25088,
             "country": "GB"
             },
             {
             "id": 2634759,
             "city": "Warlingham",
             "lat": 51.309422,
             "lng": -0.05609,
             "country": "GB"
             },
             {
             "id": 2634768,
             "city": "Waringstown",
             "lat": 54.434311,
             "lng": -6.29929,
             "country": "GB"
             },
             {
             "id": 2634772,
             "city": "Wargrave",
             "lat": 51.500679,
             "lng": -0.86577,
             "country": "GB"
             },
             {
             "id": 2634776,
             "city": "Wareham",
             "lat": 50.688862,
             "lng": -2.1104,
             "country": "GB"
             },
             {
             "id": 2634782,
             "city": "Wardle",
             "lat": 53.650002,
             "lng": -2.13333,
             "country": "GB"
             },
             {
             "id": 2634796,
             "city": "Warboys",
             "lat": 52.403519,
             "lng": -0.07931,
             "country": "GB"
             },
             {
             "id": 2634801,
             "city": "Wantage",
             "lat": 51.588459,
             "lng": -1.42565,
             "country": "GB"
             },
             {
             "id": 2634842,
             "city": "Waltham Cross",
             "lat": 51.689049,
             "lng": -0.0333,
             "country": "GB"
             },
             {
             "id": 2634844,
             "city": "Waltham",
             "lat": 53.51667,
             "lng": -0.1,
             "country": "GB"
             },
             {
             "id": 2634894,
             "city": "Wales",
             "lat": 53.340611,
             "lng": -1.28162,
             "country": "GB"
             },
             {
             "id": 2634914,
             "city": "Wainfleet All Saints",
             "lat": 53.105701,
             "lng": 0.23583,
             "country": "GB"
             },
             {
             "id": 2634918,
             "city": "Wadhurst",
             "lat": 51.062302,
             "lng": 0.33929,
             "country": "GB"
             },
             {
             "id": 2634920,
             "city": "Wadebridge",
             "lat": 50.517342,
             "lng": -4.83633,
             "country": "GB"
             },
             {
             "id": 2634925,
             "city": "Waddesdon",
             "lat": 51.846748,
             "lng": -0.92105,
             "country": "GB"
             },
             {
             "id": 2634966,
             "city": "Victoria",
             "lat": 51.75,
             "lng": -3.2,
             "country": "GB"
             },
             {
             "id": 2634975,
             "city": "Verwood",
             "lat": 50.875751,
             "lng": -1.87023,
             "country": "GB"
             },
             {
             "id": 2634985,
             "city": "Ventnor",
             "lat": 50.594791,
             "lng": -1.20369,
             "country": "GB"
             },
             {
             "id": 2635043,
             "city": "Uttoxeter",
             "lat": 52.89838,
             "lng": -1.86488,
             "country": "GB"
             },
             {
             "id": 2635052,
             "city": "Usk",
             "lat": 51.703468,
             "lng": -2.90332,
             "country": "GB"
             },
             {
             "id": 2635054,
             "city": "Ushaw Moor",
             "lat": 54.77803,
             "lng": -1.6472,
             "country": "GB"
             },
             {
             "id": 2635101,
             "city": "Uppingham",
             "lat": 52.588032,
             "lng": -0.72272,
             "country": "GB"
             },
             {
             "id": 2635183,
             "city": "Ulverston",
             "lat": 54.195938,
             "lng": -3.09626,
             "country": "GB"
             },
             {
             "id": 2635239,
             "city": "Uddingston",
             "lat": 55.81971,
             "lng": -4.08362,
             "country": "GB"
             },
             {
             "id": 2635294,
             "city": "Twyford",
             "lat": 51.475182,
             "lng": -0.86037,
             "country": "GB"
             },
             {
             "id": 2635321,
             "city": "Tuxford",
             "lat": 53.230042,
             "lng": -0.89325,
             "country": "GB"
             },
             {
             "id": 2635329,
             "city": "Turriff",
             "lat": 57.538399,
             "lng": -2.45932,
             "country": "GB"
             },
             {
             "id": 2635442,
             "city": "Troon",
             "lat": 55.543591,
             "lng": -4.66335,
             "country": "GB"
             },
             {
             "id": 2635459,
             "city": "Tring",
             "lat": 51.794708,
             "lng": -0.65824,
             "country": "GB"
             },
             {
             "id": 2635465,
             "city": "Trimdon",
             "lat": 54.69878,
             "lng": -1.42881,
             "country": "GB"
             },
             {
             "id": 2635496,
             "city": "Treorchy",
             "lat": 51.65958,
             "lng": -3.50587,
             "country": "GB"
             },
             {
             "id": 2635524,
             "city": "Treharris",
             "lat": 51.66457,
             "lng": -3.30725,
             "country": "GB"
             },
             {
             "id": 2635540,
             "city": "Treeton",
             "lat": 53.385639,
             "lng": -1.35189,
             "country": "GB"
             },
             {
             "id": 2635547,
             "city": "Tredegar",
             "lat": 51.772511,
             "lng": -3.24679,
             "country": "GB"
             },
             {
             "id": 2635563,
             "city": "Tranent",
             "lat": 55.944389,
             "lng": -2.95412,
             "country": "GB"
             },
             {
             "id": 2635571,
             "city": "Trafford Park",
             "lat": 53.468788,
             "lng": -2.31194,
             "country": "GB"
             },
             {
             "id": 2635590,
             "city": "Tow Law",
             "lat": 54.74456,
             "lng": -1.81434,
             "country": "GB"
             },
             {
             "id": 2635597,
             "city": "Towcester",
             "lat": 52.133591,
             "lng": -0.99057,
             "country": "GB"
             },
             {
             "id": 2635604,
             "city": "Tottington",
             "lat": 53.613258,
             "lng": -2.34071,
             "country": "GB"
             },
             {
             "id": 2635610,
             "city": "Totnes",
             "lat": 50.431068,
             "lng": -3.6843,
             "country": "GB"
             },
             {
             "id": 2635651,
             "city": "Torpoint",
             "lat": 50.37505,
             "lng": -4.19566,
             "country": "GB"
             },
             {
             "id": 2635680,
             "city": "Topsham",
             "lat": 50.685959,
             "lng": -3.46696,
             "country": "GB"
             },
             {
             "id": 2635689,
             "city": "Tonyrefail",
             "lat": 51.584019,
             "lng": -3.43041,
             "country": "GB"
             },
             {
             "id": 2635720,
             "city": "Tollesbury",
             "lat": 51.759129,
             "lng": 0.83462,
             "country": "GB"
             },
             {
             "id": 2635744,
             "city": "Todmorden",
             "lat": 53.71434,
             "lng": -2.09701,
             "country": "GB"
             },
             {
             "id": 2635774,
             "city": "Tisbury",
             "lat": 51.062832,
             "lng": -2.08058,
             "country": "GB"
             },
             {
             "id": 2635783,
             "city": "Tiptree",
             "lat": 51.812592,
             "lng": 0.74887,
             "country": "GB"
             },
             {
             "id": 2635829,
             "city": "Tillicoultry",
             "lat": 56.152512,
             "lng": -3.74015,
             "country": "GB"
             },
             {
             "id": 2635836,
             "city": "Tilbury",
             "lat": 51.462479,
             "lng": 0.35856,
             "country": "GB"
             },
             {
             "id": 2635859,
             "city": "Tickhill",
             "lat": 53.431938,
             "lng": -1.10859,
             "country": "GB"
             },
             {
             "id": 2635864,
             "city": "Tibshelf",
             "lat": 53.14436,
             "lng": -1.34056,
             "country": "GB"
             },
             {
             "id": 2635877,
             "city": "Thurston",
             "lat": 52.252441,
             "lng": 0.80749,
             "country": "GB"
             },
             {
             "id": 2635881,
             "city": "Thurso",
             "lat": 58.592709,
             "lng": -3.52594,
             "country": "GB"
             },
             {
             "id": 2635978,
             "city": "Thornley",
             "lat": 54.75,
             "lng": -1.43333,
             "country": "GB"
             },
             {
             "id": 2635988,
             "city": "Thorngumbald",
             "lat": 53.721001,
             "lng": -0.17175,
             "country": "GB"
             },
             {
             "id": 2636021,
             "city": "Thirsk",
             "lat": 54.232979,
             "lng": -1.34411,
             "country": "GB"
             },
             {
             "id": 2636031,
             "city": "Theydon Bois",
             "lat": 51.674259,
             "lng": 0.09781,
             "country": "GB"
             },
             {
             "id": 2636045,
             "city": "Theale",
             "lat": 51.436939,
             "lng": -1.077,
             "country": "GB"
             },
             {
             "id": 2636047,
             "city": "Thaxted",
             "lat": 51.953259,
             "lng": 0.34478,
             "country": "GB"
             },
             {
             "id": 2636062,
             "city": "Thames Ditton",
             "lat": 51.389641,
             "lng": -0.33928,
             "country": "GB"
             },
             {
             "id": 2636069,
             "city": "Teynham",
             "lat": 51.330448,
             "lng": 0.80526,
             "country": "GB"
             },
             {
             "id": 2636071,
             "city": "Tewkesbury",
             "lat": 51.99453,
             "lng": -2.15681,
             "country": "GB"
             },
             {
             "id": 2636083,
             "city": "Tetbury",
             "lat": 51.639439,
             "lng": -2.16222,
             "country": "GB"
             },
             {
             "id": 2636092,
             "city": "Terrington Saint Clement",
             "lat": 52.75,
             "lng": 0.3,
             "country": "GB"
             },
             {
             "id": 2636101,
             "city": "Tenterden",
             "lat": 51.068451,
             "lng": 0.68776,
             "country": "GB"
             },
             {
             "id": 2636104,
             "city": "Tenby",
             "lat": 51.67268,
             "lng": -4.70263,
             "country": "GB"
             },
             {
             "id": 2636105,
             "city": "Tenbury Wells",
             "lat": 52.299999,
             "lng": -2.58333,
             "country": "GB"
             },
             {
             "id": 2636158,
             "city": "Tayport",
             "lat": 56.446991,
             "lng": -2.87966,
             "country": "GB"
             },
             {
             "id": 2636174,
             "city": "Tavistock",
             "lat": 50.549438,
             "lng": -4.14418,
             "country": "GB"
             },
             {
             "id": 2636183,
             "city": "Tattenhall",
             "lat": 53.12188,
             "lng": -2.76746,
             "country": "GB"
             },
             {
             "id": 2636190,
             "city": "Tarvin",
             "lat": 53.197369,
             "lng": -2.76548,
             "country": "GB"
             },
             {
             "id": 2636209,
             "city": "Tarporley",
             "lat": 53.15918,
             "lng": -2.66867,
             "country": "GB"
             },
             {
             "id": 2636215,
             "city": "Tarleton",
             "lat": 53.68005,
             "lng": -2.82968,
             "country": "GB"
             },
             {
             "id": 2636271,
             "city": "Tandragee",
             "lat": 54.354858,
             "lng": -6.41396,
             "country": "GB"
             },
             {
             "id": 2636321,
             "city": "Tain",
             "lat": 57.809029,
             "lng": -4.05991,
             "country": "GB"
             },
             {
             "id": 2636331,
             "city": "Tadworth",
             "lat": 51.291119,
             "lng": -0.23586,
             "country": "GB"
             },
             {
             "id": 2636335,
             "city": "Tadcaster",
             "lat": 53.883221,
             "lng": -1.26344,
             "country": "GB"
             },
             {
             "id": 2636341,
             "city": "Syston",
             "lat": 52.683331,
             "lng": -1.06667,
             "country": "GB"
             },
             {
             "id": 2636394,
             "city": "Swillington",
             "lat": 53.768459,
             "lng": -1.4175,
             "country": "GB"
             },
             {
             "id": 2636409,
             "city": "Swavesey",
             "lat": 52.301552,
             "lng": -0.00476,
             "country": "GB"
             },
             {
             "id": 2636438,
             "city": "Swanmore",
             "lat": 50.944038,
             "lng": -1.18021,
             "country": "GB"
             },
             {
             "id": 2636445,
             "city": "Swanage",
             "lat": 50.60923,
             "lng": -1.9626,
             "country": "GB"
             },
             {
             "id": 2636464,
             "city": "Swaffham",
             "lat": 52.646919,
             "lng": 0.68871,
             "country": "GB"
             },
             {
             "id": 2636485,
             "city": "Sutton Courtenay",
             "lat": 51.6413,
             "lng": -1.27682,
             "country": "GB"
             },
             {
             "id": 2636487,
             "city": "Sutton Bridge",
             "lat": 52.769951,
             "lng": 0.1855,
             "country": "GB"
             },
             {
             "id": 2636564,
             "city": "Sudbury",
             "lat": 52.038898,
             "lng": 0.73117,
             "country": "GB"
             },
             {
             "id": 2636582,
             "city": "Sturry",
             "lat": 51.301319,
             "lng": 1.12155,
             "country": "GB"
             },
             {
             "id": 2636583,
             "city": "Sturminster Newton",
             "lat": 50.926811,
             "lng": -2.30515,
             "country": "GB"
             },
             {
             "id": 2636594,
             "city": "Studley",
             "lat": 52.27026,
             "lng": -1.89188,
             "country": "GB"
             },
             {
             "id": 2636667,
             "city": "Strensall",
             "lat": 54.039989,
             "lng": -1.03512,
             "country": "GB"
             },
             {
             "id": 2636671,
             "city": "Street",
             "lat": 51.124722,
             "lng": -2.74,
             "country": "GB"
             },
             {
             "id": 2636710,
             "city": "Strathaven",
             "lat": 55.677101,
             "lng": -4.0668,
             "country": "GB"
             },
             {
             "id": 2636719,
             "city": "Stranraer",
             "lat": 54.90234,
             "lng": -5.02731,
             "country": "GB"
             },
             {
             "id": 2636744,
             "city": "Strabane",
             "lat": 54.82373,
             "lng": -7.46916,
             "country": "GB"
             },
             {
             "id": 2636748,
             "city": "Stow on the Wold",
             "lat": 51.93008,
             "lng": -1.72382,
             "country": "GB"
             },
             {
             "id": 2636782,
             "city": "Stotfold",
             "lat": 52.016319,
             "lng": -0.23209,
             "country": "GB"
             },
             {
             "id": 2636786,
             "city": "Storrington",
             "lat": 50.917648,
             "lng": -0.45473,
             "country": "GB"
             },
             {
             "id": 2636790,
             "city": "Stornoway",
             "lat": 58.209251,
             "lng": -6.38649,
             "country": "GB"
             },
             {
             "id": 2636802,
             "city": "Stoney Stanton",
             "lat": 52.548389,
             "lng": -1.2793,
             "country": "GB"
             },
             {
             "id": 2636804,
             "city": "Stone",
             "lat": 51.450321,
             "lng": 0.2647,
             "country": "GB"
             },
             {
             "id": 2636810,
             "city": "Stonehouse",
             "lat": 55.666672,
             "lng": -3.98333,
             "country": "GB"
             },
             {
             "id": 2636811,
             "city": "Stonehouse",
             "lat": 51.75,
             "lng": -2.28333,
             "country": "GB"
             },
             {
             "id": 2636814,
             "city": "Stonehaven",
             "lat": 56.96365,
             "lng": -2.21177,
             "country": "GB"
             },
             {
             "id": 2636822,
             "city": "Stone",
             "lat": 52.905899,
             "lng": -2.15409,
             "country": "GB"
             },
             {
             "id": 2636824,
             "city": "Stone",
             "lat": 51.80246,
             "lng": -0.87032,
             "country": "GB"
             },
             {
             "id": 2636826,
             "city": "Stone",
             "lat": 51,
             "lng": 0.76667,
             "country": "GB"
             },
             {
             "id": 2636830,
             "city": "Stokesley",
             "lat": 54.469978,
             "lng": -1.1933,
             "country": "GB"
             },
             {
             "id": 2636840,
             "city": "Stoke Poges",
             "lat": 51.544411,
             "lng": -0.5888,
             "country": "GB"
             },
             {
             "id": 2636844,
             "city": "Stokenchurch",
             "lat": 51.65831,
             "lng": -0.8974,
             "country": "GB"
             },
             {
             "id": 2636854,
             "city": "Stoke Gifford",
             "lat": 51.516861,
             "lng": -2.54053,
             "country": "GB"
             },
             {
             "id": 2636881,
             "city": "Stocksbridge",
             "lat": 53.482491,
             "lng": -1.59373,
             "country": "GB"
             },
             {
             "id": 2636914,
             "city": "Stilton",
             "lat": 52.487881,
             "lng": -0.28894,
             "country": "GB"
             },
             {
             "id": 2636932,
             "city": "Stewarton",
             "lat": 55.666672,
             "lng": -4.5,
             "country": "GB"
             },
             {
             "id": 2636938,
             "city": "Stevenston",
             "lat": 55.639702,
             "lng": -4.75339,
             "country": "GB"
             },
             {
             "id": 2636945,
             "city": "Stepps",
             "lat": 55.888988,
             "lng": -4.1521,
             "country": "GB"
             },
             {
             "id": 2636967,
             "city": "Steeple Claydon",
             "lat": 51.936432,
             "lng": -0.98328,
             "country": "GB"
             },
             {
             "id": 2637016,
             "city": "Staplehurst",
             "lat": 51.161098,
             "lng": 0.55249,
             "country": "GB"
             },
             {
             "id": 2637052,
             "city": "Stansted",
             "lat": 51.900002,
             "lng": 0.2,
             "country": "GB"
             },
             {
             "id": 2637093,
             "city": "Standon",
             "lat": 52.916672,
             "lng": -2.28333,
             "country": "GB"
             },
             {
             "id": 2637110,
             "city": "Stalham",
             "lat": 52.77079,
             "lng": 1.51783,
             "country": "GB"
             },
             {
             "id": 2637214,
             "city": "Spixworth",
             "lat": 52.685291,
             "lng": 1.32027,
             "country": "GB"
             },
             {
             "id": 2637224,
             "city": "Spilsby",
             "lat": 53.17363,
             "lng": 0.09373,
             "country": "GB"
             },
             {
             "id": 2637268,
             "city": "Sowerby Bridge",
             "lat": 53.70903,
             "lng": -1.90929,
             "country": "GB"
             },
             {
             "id": 2637277,
             "city": "Southwold",
             "lat": 52.327518,
             "lng": 1.67979,
             "country": "GB"
             },
             {
             "id": 2637296,
             "city": "Southwell",
             "lat": 53.078041,
             "lng": -0.95538,
             "country": "GB"
             },
             {
             "id": 2637298,
             "city": "Southwater",
             "lat": 51.023689,
             "lng": -0.35173,
             "country": "GB"
             },
             {
             "id": 2637310,
             "city": "Tidworth",
             "lat": 51.231419,
             "lng": -1.66324,
             "country": "GB"
             },
             {
             "id": 2637356,
             "city": "South Nutfield",
             "lat": 51.01667,
             "lng": -0.13333,
             "country": "GB"
             },
             {
             "id": 2637373,
             "city": "South Molton",
             "lat": 51.01667,
             "lng": -3.83333,
             "country": "GB"
             },
             {
             "id": 2637374,
             "city": "Southminster",
             "lat": 51.662281,
             "lng": 0.82968,
             "country": "GB"
             },
             {
             "id": 2637405,
             "city": "South Hetton",
             "lat": 54.799061,
             "lng": -1.40671,
             "country": "GB"
             },
             {
             "id": 2637450,
             "city": "South Collingham",
             "lat": 53.133331,
             "lng": -0.76667,
             "country": "GB"
             },
             {
             "id": 2637461,
             "city": "South Cave",
             "lat": 53.769871,
             "lng": -0.60107,
             "country": "GB"
             },
             {
             "id": 2637471,
             "city": "South Brent",
             "lat": 50.42654,
             "lng": -3.83426,
             "country": "GB"
             },
             {
             "id": 2637488,
             "city": "Southam",
             "lat": 52.252659,
             "lng": -1.3884,
             "country": "GB"
             },
             {
             "id": 2637526,
             "city": "Somerton",
             "lat": 51.954208,
             "lng": -1.27613,
             "country": "GB"
             },
             {
             "id": 2637528,
             "city": "Somersham",
             "lat": 52.383331,
             "lng": 0,
             "country": "GB"
             },
             {
             "id": 2637554,
             "city": "Soham",
             "lat": 52.331772,
             "lng": 0.33869,
             "country": "GB"
             },
             {
             "id": 2637571,
             "city": "Snodland",
             "lat": 51.329708,
             "lng": 0.44305,
             "country": "GB"
             },
             {
             "id": 2637580,
             "city": "Snettisham",
             "lat": 52.877811,
             "lng": 0.50292,
             "country": "GB"
             },
             {
             "id": 2637599,
             "city": "Snaith",
             "lat": 53.69112,
             "lng": -1.02859,
             "country": "GB"
             },
             {
             "id": 2637607,
             "city": "Smethwick",
             "lat": 52.49699,
             "lng": -1.97305,
             "country": "GB"
             },
             {
             "id": 2637652,
             "city": "Sleights",
             "lat": 54.455059,
             "lng": -0.66484,
             "country": "GB"
             },
             {
             "id": 2637702,
             "city": "Skipton",
             "lat": 53.961441,
             "lng": -2.01676,
             "country": "GB"
             },
             {
             "id": 2637748,
             "city": "Skelton",
             "lat": 53.716671,
             "lng": -0.83333,
             "country": "GB"
             },
             {
             "id": 2637756,
             "city": "Skellingthorpe",
             "lat": 53.23531,
             "lng": -0.61905,
             "country": "GB"
             },
             {
             "id": 2637809,
             "city": "Sion Mills",
             "lat": 54.787521,
             "lng": -7.47276,
             "country": "GB"
             },
             {
             "id": 2637836,
             "city": "Silloth",
             "lat": 54.868698,
             "lng": -3.38448,
             "country": "GB"
             },
             {
             "id": 2637845,
             "city": "Sileby",
             "lat": 52.732861,
             "lng": -1.10773,
             "country": "GB"
             },
             {
             "id": 2637871,
             "city": "Sible Hedingham",
             "lat": 51.977718,
             "lng": 0.59262,
             "country": "GB"
             },
             {
             "id": 2637889,
             "city": "Shrivenham",
             "lat": 51.59853,
             "lng": -1.65461,
             "country": "GB"
             },
             {
             "id": 2637936,
             "city": "Shirland",
             "lat": 53.121552,
             "lng": -1.40464,
             "country": "GB"
             },
             {
             "id": 2637941,
             "city": "Shirebrook",
             "lat": 53.203331,
             "lng": -1.21336,
             "country": "GB"
             },
             {
             "id": 2637948,
             "city": "Shipton under Wychwood",
             "lat": 51.860352,
             "lng": -1.59847,
             "country": "GB"
             },
             {
             "id": 2637954,
             "city": "Shipston on Stour",
             "lat": 52.06057,
             "lng": -1.62778,
             "country": "GB"
             },
             {
             "id": 2637962,
             "city": "Shipdham",
             "lat": 52.627708,
             "lng": 0.89294,
             "country": "GB"
             },
             {
             "id": 2637983,
             "city": "Shildon",
             "lat": 54.629971,
             "lng": -1.64295,
             "country": "GB"
             },
             {
             "id": 2637985,
             "city": "Shifnal",
             "lat": 52.670429,
             "lng": -2.37248,
             "country": "GB"
             },
             {
             "id": 2638009,
             "city": "Shevington",
             "lat": 53.572361,
             "lng": -2.69316,
             "country": "GB"
             },
             {
             "id": 2638033,
             "city": "Sherborne",
             "lat": 50.950001,
             "lng": -2.5,
             "country": "GB"
             },
             {
             "id": 2638036,
             "city": "Shepshed",
             "lat": 52.765701,
             "lng": -1.29021,
             "country": "GB"
             },
             {
             "id": 2638039,
             "city": "Shepperton",
             "lat": 51.395458,
             "lng": -0.44889,
             "country": "GB"
             },
             {
             "id": 2638047,
             "city": "Shenstone",
             "lat": 52.633331,
             "lng": -1.83333,
             "country": "GB"
             },
             {
             "id": 2638051,
             "city": "Shenley AV",
             "lat": 51.69054,
             "lng": -0.28067,
             "country": "GB"
             },
             {
             "id": 2638065,
             "city": "Shelley",
             "lat": 53.599998,
             "lng": -1.68333,
             "country": "GB"
             },
             {
             "id": 2638074,
             "city": "Shefford",
             "lat": 52.0387,
             "lng": -0.33399,
             "country": "GB"
             },
             {
             "id": 2638081,
             "city": "Sheerness",
             "lat": 51.439461,
             "lng": 0.76029,
             "country": "GB"
             },
             {
             "id": 2638111,
             "city": "Shawbury",
             "lat": 52.783329,
             "lng": -2.65,
             "country": "GB"
             },
             {
             "id": 2638138,
             "city": "Shanklin",
             "lat": 50.626129,
             "lng": -1.1785,
             "country": "GB"
             },
             {
             "id": 2638157,
             "city": "Shaftesbury",
             "lat": 51.00528,
             "lng": -2.19333,
             "country": "GB"
             },
             {
             "id": 2638192,
             "city": "Settle",
             "lat": 54.068649,
             "lng": -2.2772,
             "country": "GB"
             },
             {
             "id": 2638207,
             "city": "Send",
             "lat": 51.28875,
             "lng": -0.52666,
             "country": "GB"
             },
             {
             "id": 2638219,
             "city": "Selsey",
             "lat": 50.735008,
             "lng": -0.78979,
             "country": "GB"
             },
             {
             "id": 2638229,
             "city": "Selkirk",
             "lat": 55.547379,
             "lng": -2.83911,
             "country": "GB"
             },
             {
             "id": 2638259,
             "city": "Sedgefield",
             "lat": 54.65329,
             "lng": -1.44952,
             "country": "GB"
             },
             {
             "id": 2638264,
             "city": "Seaview",
             "lat": 50.719559,
             "lng": -1.11164,
             "country": "GB"
             },
             {
             "id": 2638273,
             "city": "Seaton Delaval",
             "lat": 55.07196,
             "lng": -1.52609,
             "country": "GB"
             },
             {
             "id": 2638277,
             "city": "Seaton",
             "lat": 52.57489,
             "lng": -0.66759,
             "country": "GB"
             },
             {
             "id": 2638348,
             "city": "Scotter",
             "lat": 53.496521,
             "lng": -0.67429,
             "country": "GB"
             },
             {
             "id": 2638386,
             "city": "Scholes",
             "lat": 53.82346,
             "lng": -1.42805,
             "country": "GB"
             },
             {
             "id": 2638448,
             "city": "Scalby",
             "lat": 53.76667,
             "lng": -0.71667,
             "country": "GB"
             },
             {
             "id": 2638464,
             "city": "Saxmundham",
             "lat": 52.21497,
             "lng": 1.48805,
             "country": "GB"
             },
             {
             "id": 2638467,
             "city": "Saxilby",
             "lat": 53.26746,
             "lng": -0.66253,
             "country": "GB"
             },
             {
             "id": 2638473,
             "city": "Sawtry",
             "lat": 52.439838,
             "lng": -0.28422,
             "country": "GB"
             },
             {
             "id": 2638474,
             "city": "Sawston",
             "lat": 52.120892,
             "lng": 0.16943,
             "country": "GB"
             },
             {
             "id": 2638481,
             "city": "Sawbridgeworth",
             "lat": 51.816669,
             "lng": 0.15,
             "country": "GB"
             },
             {
             "id": 2638490,
             "city": "Saundersfoot",
             "lat": 51.711842,
             "lng": -4.70069,
             "country": "GB"
             },
             {
             "id": 2638495,
             "city": "Saughall",
             "lat": 53.226181,
             "lng": -2.95649,
             "country": "GB"
             },
             {
             "id": 2638515,
             "city": "Sapcote",
             "lat": 52.537071,
             "lng": -1.279,
             "country": "GB"
             },
             {
             "id": 2638520,
             "city": "Sanquhar",
             "lat": 55.365269,
             "lng": -3.9216,
             "country": "GB"
             },
             {
             "id": 2638530,
             "city": "Sandy",
             "lat": 52.129269,
             "lng": -0.28925,
             "country": "GB"
             },
             {
             "id": 2638542,
             "city": "Sandwich",
             "lat": 51.272228,
             "lng": 1.33776,
             "country": "GB"
             },
             {
             "id": 2638593,
             "city": "Sandford",
             "lat": 51.332279,
             "lng": -2.83122,
             "country": "GB"
             },
             {
             "id": 2638639,
             "city": "Saltford",
             "lat": 51.40139,
             "lng": -2.45944,
             "country": "GB"
             },
             {
             "id": 2638648,
             "city": "Saltcoats",
             "lat": 55.616669,
             "lng": -4.8,
             "country": "GB"
             },
             {
             "id": 2638650,
             "city": "Saltburn-by-the-Sea",
             "lat": 54.582371,
             "lng": -0.97367,
             "country": "GB"
             },
             {
             "id": 2638651,
             "city": "Saltash",
             "lat": 50.409592,
             "lng": -4.22514,
             "country": "GB"
             },
             {
             "id": 2638669,
             "city": "Salfords",
             "lat": 51.204342,
             "lng": -0.16744,
             "country": "GB"
             },
             {
             "id": 2638682,
             "city": "Salcombe",
             "lat": 50.237431,
             "lng": -3.76874,
             "country": "GB"
             },
             {
             "id": 2638708,
             "city": "Saint Osyth",
             "lat": 51.799999,
             "lng": 1.08333,
             "country": "GB"
             },
             {
             "id": 2638757,
             "city": "Saint Leonards",
             "lat": 50.833328,
             "lng": -1.85,
             "country": "GB"
             },
             {
             "id": 2638767,
             "city": "Saint Just",
             "lat": 50.116669,
             "lng": -5.7,
             "country": "GB"
             },
             {
             "id": 2638778,
             "city": "St Ives",
             "lat": 50.208611,
             "lng": -5.4875,
             "country": "GB"
             },
             {
             "id": 2638800,
             "city": "Saintfield",
             "lat": 54.460461,
             "lng": -5.83065,
             "country": "GB"
             },
             {
             "id": 2638817,
             "city": "Saint Dennis",
             "lat": 50.383331,
             "lng": -4.88333,
             "country": "GB"
             },
             {
             "id": 2638828,
             "city": "Saint Columb Major",
             "lat": 50.433331,
             "lng": -4.93333,
             "country": "GB"
             },
             {
             "id": 2638855,
             "city": "Saint Asaph",
             "lat": 53.26667,
             "lng": -3.45,
             "country": "GB"
             },
             {
             "id": 2638870,
             "city": "Saint Agnes",
             "lat": 50.313629,
             "lng": -5.20452,
             "country": "GB"
             },
             {
             "id": 2638888,
             "city": "Sacriston",
             "lat": 54.817692,
             "lng": -1.6241,
             "country": "GB"
             },
             {
             "id": 2638909,
             "city": "Rye",
             "lat": 50.951141,
             "lng": 0.7337,
             "country": "GB"
             },
             {
             "id": 2638925,
             "city": "Ruthin",
             "lat": 53.113682,
             "lng": -3.31782,
             "country": "GB"
             },
             {
             "id": 2638930,
             "city": "Rustington",
             "lat": 50.810268,
             "lng": -0.50674,
             "country": "GB"
             },
             {
             "id": 2638938,
             "city": "Ruskington",
             "lat": 53.045441,
             "lng": -0.38692,
             "country": "GB"
             },
             {
             "id": 2638995,
             "city": "Ruddington",
             "lat": 52.89254,
             "lng": -1.14953,
             "country": "GB"
             },
             {
             "id": 2639014,
             "city": "Ruabon",
             "lat": 52.987801,
             "lng": -3.03883,
             "country": "GB"
             },
             {
             "id": 2639017,
             "city": "Royston",
             "lat": 53.599998,
             "lng": -1.45,
             "country": "GB"
             },
             {
             "id": 2639042,
             "city": "Rowlands Gill",
             "lat": 54.91922,
             "lng": -1.74489,
             "country": "GB"
             },
             {
             "id": 2639074,
             "city": "Rothwell",
             "lat": 52.416672,
             "lng": -0.8,
             "country": "GB"
             },
             {
             "id": 2639101,
             "city": "Rothbury",
             "lat": 55.310589,
             "lng": -1.90845,
             "country": "GB"
             },
             {
             "id": 2639104,
             "city": "Rosyth",
             "lat": 56.036888,
             "lng": -3.438,
             "country": "GB"
             },
             {
             "id": 2639106,
             "city": "Rostrevor",
             "lat": 54.099998,
             "lng": -6.2,
             "country": "GB"
             },
             {
             "id": 2639110,
             "city": "Ross on Wye",
             "lat": 51.916672,
             "lng": -2.56667,
             "country": "GB"
             },
             {
             "id": 2639123,
             "city": "Rossett",
             "lat": 53.109211,
             "lng": -2.94478,
             "country": "GB"
             },
             {
             "id": 2639239,
             "city": "Rode Heath",
             "lat": 53.116669,
             "lng": -2.28333,
             "country": "GB"
             },
             {
             "id": 2639282,
             "city": "Robertsbridge",
             "lat": 50.985691,
             "lng": 0.47253,
             "country": "GB"
             },
             {
             "id": 2639296,
             "city": "Roade",
             "lat": 52.158241,
             "lng": -0.89745,
             "country": "GB"
             },
             {
             "id": 2639310,
             "city": "Rishton",
             "lat": 53.768059,
             "lng": -2.41444,
             "country": "GB"
             },
             {
             "id": 2639320,
             "city": "Ripponden",
             "lat": 53.674492,
             "lng": -1.94183,
             "country": "GB"
             },
             {
             "id": 2639326,
             "city": "Ripley",
             "lat": 51.299068,
             "lng": -0.49164,
             "country": "GB"
             },
             {
             "id": 2639343,
             "city": "Ringmer",
             "lat": 50.89307,
             "lng": 0.05545,
             "country": "GB"
             },
             {
             "id": 2639381,
             "city": "Rickmansworth",
             "lat": 51.639278,
             "lng": -0.47295,
             "country": "GB"
             },
             {
             "id": 2639389,
             "city": "Richmond",
             "lat": 51.460049,
             "lng": -0.30075,
             "country": "GB"
             },
             {
             "id": 2639393,
             "city": "Riccall",
             "lat": 53.833309,
             "lng": -1.0573,
             "country": "GB"
             },
             {
             "id": 2639407,
             "city": "Rhymney",
             "lat": 51.759979,
             "lng": -3.28553,
             "country": "GB"
             },
             {
             "id": 2639425,
             "city": "Rhuddlan",
             "lat": 53.283329,
             "lng": -3.46667,
             "country": "GB"
             },
             {
             "id": 2639482,
             "city": "Resolven",
             "lat": 51.711929,
             "lng": -3.69745,
             "country": "GB"
             },
             {
             "id": 2639489,
             "city": "Repton",
             "lat": 52.839828,
             "lng": -1.55061,
             "country": "GB"
             },
             {
             "id": 2639492,
             "city": "Renton",
             "lat": 55.972,
             "lng": -4.58399,
             "country": "GB"
             },
             {
             "id": 2639511,
             "city": "Reepham",
             "lat": 53.23333,
             "lng": -0.43333,
             "country": "GB"
             },
             {
             "id": 2639520,
             "city": "Reed",
             "lat": 52.008289,
             "lng": -0.01905,
             "country": "GB"
             },
             {
             "id": 2639536,
             "city": "Redlynch",
             "lat": 51.09861,
             "lng": -2.42667,
             "country": "GB"
             },
             {
             "id": 2639567,
             "city": "Redbourn",
             "lat": 51.798962,
             "lng": -0.39594,
             "country": "GB"
             },
             {
             "id": 2639582,
             "city": "Rayne",
             "lat": 51.866669,
             "lng": 0.58333,
             "country": "GB"
             },
             {
             "id": 2639600,
             "city": "Raunds",
             "lat": 52.34428,
             "lng": -0.53657,
             "country": "GB"
             },
             {
             "id": 2639621,
             "city": "Rathfriland",
             "lat": 54.25,
             "lng": -6.16667,
             "country": "GB"
             },
             {
             "id": 2639653,
             "city": "Randalstown",
             "lat": 54.75,
             "lng": -6.3,
             "country": "GB"
             },
             {
             "id": 2639664,
             "city": "Ramsey",
             "lat": 52.448158,
             "lng": -0.10703,
             "country": "GB"
             },
             {
             "id": 2639687,
             "city": "Rainworth",
             "lat": 53.118832,
             "lng": -1.11852,
             "country": "GB"
             },
             {
             "id": 2639691,
             "city": "Rainham",
             "lat": 51.363232,
             "lng": 0.60893,
             "country": "GB"
             },
             {
             "id": 2639693,
             "city": "Rainford",
             "lat": 53.502232,
             "lng": -2.78839,
             "country": "GB"
             },
             {
             "id": 2639710,
             "city": "Radyr",
             "lat": 51.518639,
             "lng": -3.25829,
             "country": "GB"
             },
             {
             "id": 2639715,
             "city": "Radstock",
             "lat": 51.28862,
             "lng": -2.46003,
             "country": "GB"
             },
             {
             "id": 2639719,
             "city": "Radley",
             "lat": 51.687462,
             "lng": -1.24025,
             "country": "GB"
             },
             {
             "id": 2639720,
             "city": "Radlett",
             "lat": 51.685928,
             "lng": -0.31868,
             "country": "GB"
             },
             {
             "id": 2639727,
             "city": "Radcliffe on Trent",
             "lat": 52.948021,
             "lng": -1.03855,
             "country": "GB"
             },
             {
             "id": 2639755,
             "city": "Quorndon",
             "lat": 52.74461,
             "lng": -1.17348,
             "country": "GB"
             },
             {
             "id": 2639779,
             "city": "Queniborough",
             "lat": 52.70591,
             "lng": -1.04749,
             "country": "GB"
             },
             {
             "id": 2639788,
             "city": "Queensferry",
             "lat": 55.98333,
             "lng": -3.4,
             "country": "GB"
             },
             {
             "id": 2639792,
             "city": "Queensbury",
             "lat": 53.76667,
             "lng": -1.91667,
             "country": "GB"
             },
             {
             "id": 2639796,
             "city": "Queenborough",
             "lat": 51.416199,
             "lng": 0.74767,
             "country": "GB"
             },
             {
             "id": 2639823,
             "city": "Pyle",
             "lat": 51.51667,
             "lng": -3.7,
             "country": "GB"
             },
             {
             "id": 2639828,
             "city": "Pwllheli",
             "lat": 52.8899,
             "lng": -4.41451,
             "country": "GB"
             },
             {
             "id": 2639845,
             "city": "Purfleet",
             "lat": 51.483898,
             "lng": 0.24247,
             "country": "GB"
             },
             {
             "id": 2639864,
             "city": "Pulborough",
             "lat": 50.957352,
             "lng": -0.49902,
             "country": "GB"
             },
             {
             "id": 2639874,
             "city": "Prudhoe",
             "lat": 54.96154,
             "lng": -1.85168,
             "country": "GB"
             },
             {
             "id": 2639888,
             "city": "Princes Risborough",
             "lat": 51.725491,
             "lng": -0.83144,
             "country": "GB"
             },
             {
             "id": 2639902,
             "city": "Prestonpans",
             "lat": 55.959389,
             "lng": -2.98038,
             "country": "GB"
             },
             {
             "id": 2639925,
             "city": "Prestbury",
             "lat": 53.283329,
             "lng": -2.15,
             "country": "GB"
             },
             {
             "id": 2639934,
             "city": "Preesall",
             "lat": 53.918201,
             "lng": -2.96633,
             "country": "GB"
             },
             {
             "id": 2639941,
             "city": "Poynton",
             "lat": 53.349998,
             "lng": -2.11667,
             "country": "GB"
             },
             {
             "id": 2639964,
             "city": "Potton",
             "lat": 52.129108,
             "lng": -0.21561,
             "country": "GB"
             },
             {
             "id": 2639991,
             "city": "Portstewart",
             "lat": 55.18132,
             "lng": -6.71402,
             "country": "GB"
             },
             {
             "id": 2640004,
             "city": "Portrush",
             "lat": 55.195919,
             "lng": -6.6493,
             "country": "GB"
             },
             {
             "id": 2640030,
             "city": "Portlethen",
             "lat": 57.054741,
             "lng": -2.13066,
             "country": "GB"
             },
             {
             "id": 2640046,
             "city": "Porthleven",
             "lat": 50.086182,
             "lng": -5.31501,
             "country": "GB"
             },
             {
             "id": 2640084,
             "city": "Portaferry",
             "lat": 54.383331,
             "lng": -5.55,
             "country": "GB"
             },
             {
             "id": 2640090,
             "city": "Poringland",
             "lat": 52.567558,
             "lng": 1.34961,
             "country": "GB"
             },
             {
             "id": 2640110,
             "city": "Pontyberem",
             "lat": 51.778259,
             "lng": -4.1689,
             "country": "GB"
             },
             {
             "id": 2640131,
             "city": "Ponteland",
             "lat": 55.05024,
             "lng": -1.74532,
             "country": "GB"
             },
             {
             "id": 2640134,
             "city": "Pontardulais",
             "lat": 51.71423,
             "lng": -4.03859,
             "country": "GB"
             },
             {
             "id": 2640185,
             "city": "Pocklington",
             "lat": 53.93335,
             "lng": -0.78106,
             "country": "GB"
             },
             {
             "id": 2640255,
             "city": "Pitlochry",
             "lat": 56.705139,
             "lng": -3.73432,
             "country": "GB"
             },
             {
             "id": 2640273,
             "city": "Pinxton",
             "lat": 53.090618,
             "lng": -1.31767,
             "country": "GB"
             },
             {
             "id": 2640279,
             "city": "Pinchbeck",
             "lat": 52.81303,
             "lng": -0.16256,
             "country": "GB"
             },
             {
             "id": 2640285,
             "city": "Pilsley",
             "lat": 53.150002,
             "lng": -1.36667,
             "country": "GB"
             },
             {
             "id": 2640327,
             "city": "Pewsey",
             "lat": 51.338551,
             "lng": -1.76545,
             "country": "GB"
             },
             {
             "id": 2640332,
             "city": "Petworth",
             "lat": 50.986691,
             "lng": -0.61,
             "country": "GB"
             },
             {
             "id": 2640360,
             "city": "Pershore",
             "lat": 52.111629,
             "lng": -2.07586,
             "country": "GB"
             },
             {
             "id": 2640367,
             "city": "Perranporth",
             "lat": 50.343769,
             "lng": -5.15558,
             "country": "GB"
             },
             {
             "id": 2640393,
             "city": "Pentyrch",
             "lat": 51.528889,
             "lng": -3.295,
             "country": "GB"
             },
             {
             "id": 2640413,
             "city": "Penryn",
             "lat": 50.168121,
             "lng": -5.10416,
             "country": "GB"
             },
             {
             "id": 2640416,
             "city": "Penrith",
             "lat": 54.665791,
             "lng": -2.75757,
             "country": "GB"
             },
             {
             "id": 2640460,
             "city": "Penkridge",
             "lat": 52.725559,
             "lng": -2.1156,
             "country": "GB"
             },
             {
             "id": 2640463,
             "city": "Penistone",
             "lat": 53.525719,
             "lng": -1.63027,
             "country": "GB"
             },
             {
             "id": 2640484,
             "city": "Pencoed",
             "lat": 51.523708,
             "lng": -3.50016,
             "country": "GB"
             },
             {
             "id": 2640498,
             "city": "Pembury",
             "lat": 51.14296,
             "lng": 0.32187,
             "country": "GB"
             },
             {
             "id": 2640502,
             "city": "Pembroke Dock",
             "lat": 51.691608,
             "lng": -4.94036,
             "country": "GB"
             },
             {
             "id": 2640503,
             "city": "Pembroke",
             "lat": 51.674641,
             "lng": -4.91286,
             "country": "GB"
             },
             {
             "id": 2640511,
             "city": "Pelton",
             "lat": 54.873051,
             "lng": -1.6095,
             "country": "GB"
             },
             {
             "id": 2640512,
             "city": "Pelsall",
             "lat": 52.629101,
             "lng": -1.96738,
             "country": "GB"
             },
             {
             "id": 2640517,
             "city": "Pegswood",
             "lat": 55.179298,
             "lng": -1.64525,
             "country": "GB"
             },
             {
             "id": 2640574,
             "city": "Patna",
             "lat": 55.363701,
             "lng": -4.50457,
             "country": "GB"
             },
             {
             "id": 2640589,
             "city": "Partridge Green",
             "lat": 50.9594,
             "lng": -0.30796,
             "country": "GB"
             },
             {
             "id": 2640593,
             "city": "Partington",
             "lat": 53.418839,
             "lng": -2.42815,
             "country": "GB"
             },
             {
             "id": 2640601,
             "city": "Parkstone",
             "lat": 50.729939,
             "lng": -1.94492,
             "country": "GB"
             },
             {
             "id": 2640621,
             "city": "Parbold",
             "lat": 53.59145,
             "lng": -2.77028,
             "country": "GB"
             },
             {
             "id": 2640623,
             "city": "Par",
             "lat": 50.35392,
             "lng": -4.71085,
             "country": "GB"
             },
             {
             "id": 2640624,
             "city": "Papworth Everard",
             "lat": 52.248932,
             "lng": -0.11827,
             "country": "GB"
             },
             {
             "id": 2640651,
             "city": "Pannal",
             "lat": 53.960312,
             "lng": -1.53573,
             "country": "GB"
             },
             {
             "id": 2640654,
             "city": "Pangbourne",
             "lat": 51.4837,
             "lng": -1.08519,
             "country": "GB"
             },
             {
             "id": 2640685,
             "city": "Padstow",
             "lat": 50.538849,
             "lng": -4.93664,
             "country": "GB"
             },
             {
             "id": 2640687,
             "city": "Padiham",
             "lat": 53.801868,
             "lng": -2.31511,
             "country": "GB"
             },
             {
             "id": 2640690,
             "city": "Paddock Wood",
             "lat": 51.17942,
             "lng": 0.38547,
             "country": "GB"
             },
             {
             "id": 2640717,
             "city": "Oxted",
             "lat": 51.25687,
             "lng": -0.00601,
             "country": "GB"
             },
             {
             "id": 2640762,
             "city": "Overtown",
             "lat": 55.75,
             "lng": -3.91667,
             "country": "GB"
             },
             {
             "id": 2640765,
             "city": "Overton",
             "lat": 51.243889,
             "lng": -1.26154,
             "country": "GB"
             },
             {
             "id": 2640777,
             "city": "Over",
             "lat": 53.183331,
             "lng": -2.55,
             "country": "GB"
             },
             {
             "id": 2640781,
             "city": "Outwell",
             "lat": 52.609459,
             "lng": 0.23333,
             "country": "GB"
             },
             {
             "id": 2640825,
             "city": "Oundle",
             "lat": 52.48093,
             "lng": -0.46732,
             "country": "GB"
             },
             {
             "id": 2640832,
             "city": "Oughtibridge",
             "lat": 53.436119,
             "lng": -1.53902,
             "country": "GB"
             },
             {
             "id": 2640834,
             "city": "Ottery Saint Mary",
             "lat": 50.75,
             "lng": -3.26667,
             "country": "GB"
             },
             {
             "id": 2640840,
             "city": "Ottershaw",
             "lat": 51.362621,
             "lng": -0.52752,
             "country": "GB"
             },
             {
             "id": 2640857,
             "city": "Otley",
             "lat": 53.905529,
             "lng": -1.69383,
             "country": "GB"
             },
             {
             "id": 2640910,
             "city": "Ormiston",
             "lat": 55.913021,
             "lng": -2.93985,
             "country": "GB"
             },
             {
             "id": 2640912,
             "city": "Ormesby Saint Margaret",
             "lat": 52.666672,
             "lng": 1.7,
             "country": "GB"
             },
             {
             "id": 2640981,
             "city": "Old Windsor",
             "lat": 51.458069,
             "lng": -0.58674,
             "country": "GB"
             },
             {
             "id": 2641007,
             "city": "Oldmeldrum",
             "lat": 57.334919,
             "lng": -2.3199,
             "country": "GB"
             },
             {
             "id": 2641014,
             "city": "Old Kilpatrick",
             "lat": 55.922409,
             "lng": -4.45567,
             "country": "GB"
             },
             {
             "id": 2641036,
             "city": "Oldbury",
             "lat": 52.5,
             "lng": -2.01667,
             "country": "GB"
             },
             {
             "id": 2641049,
             "city": "Okehampton",
             "lat": 50.738411,
             "lng": -4.0016,
             "country": "GB"
             },
             {
             "id": 2641079,
             "city": "Odiham",
             "lat": 51.25407,
             "lng": -0.93933,
             "country": "GB"
             },
             {
             "id": 2641108,
             "city": "Oban",
             "lat": 56.412689,
             "lng": -5.47062,
             "country": "GB"
             },
             {
             "id": 2641120,
             "city": "Oakley",
             "lat": 56.066669,
             "lng": -3.55,
             "country": "GB"
             },
             {
             "id": 2641128,
             "city": "Oakham",
             "lat": 52.666672,
             "lng": -0.73333,
             "country": "GB"
             },
             {
             "id": 2641130,
             "city": "Oakengates",
             "lat": 52.695011,
             "lng": -2.45036,
             "country": "GB"
             },
             {
             "id": 2641193,
             "city": "Norton Canes",
             "lat": 52.671421,
             "lng": -1.96262,
             "country": "GB"
             },
             {
             "id": 2641233,
             "city": "North Walsham",
             "lat": 52.821209,
             "lng": 1.38746,
             "country": "GB"
             },
             {
             "id": 2641284,
             "city": "North Petherton",
             "lat": 51.09243,
             "lng": -3.01549,
             "country": "GB"
             },
             {
             "id": 2641287,
             "city": "Northorpe",
             "lat": 53.466671,
             "lng": -0.65,
             "country": "GB"
             },
             {
             "id": 2641318,
             "city": "Northleach",
             "lat": 51.829941,
             "lng": -1.83712,
             "country": "GB"
             },
             {
             "id": 2641356,
             "city": "North Ferriby",
             "lat": 53.721241,
             "lng": -0.5052,
             "country": "GB"
             },
             {
             "id": 2641370,
             "city": "North Elmham",
             "lat": 52.746399,
             "lng": 0.94611,
             "country": "GB"
             },
             {
             "id": 2641419,
             "city": "North Berwick",
             "lat": 56.05825,
             "lng": -2.7229,
             "country": "GB"
             },
             {
             "id": 2641434,
             "city": "Northam",
             "lat": 51.033329,
             "lng": -4.21667,
             "country": "GB"
             },
             {
             "id": 2641506,
             "city": "Neyland",
             "lat": 51.71014,
             "lng": -4.95155,
             "country": "GB"
             },
             {
             "id": 2641510,
             "city": "New Tredegar",
             "lat": 51.720509,
             "lng": -3.2413,
             "country": "GB"
             },
             {
             "id": 2641523,
             "city": "Newtown",
             "lat": 52.51667,
             "lng": -3.3,
             "country": "GB"
             },
             {
             "id": 2641528,
             "city": "Newton Stewart",
             "lat": 54.95784,
             "lng": -4.48315,
             "country": "GB"
             },
             {
             "id": 2641549,
             "city": "Newtonhill",
             "lat": 57.033329,
             "lng": -2.15,
             "country": "GB"
             },
             {
             "id": 2641577,
             "city": "New Scone",
             "lat": 56.419418,
             "lng": -3.40507,
             "country": "GB"
             },
             {
             "id": 2641582,
             "city": "New Romney",
             "lat": 50.985989,
             "lng": 0.94122,
             "country": "GB"
             },
             {
             "id": 2641593,
             "city": "Newport-On-Tay",
             "lat": 56.43911,
             "lng": -2.9367,
             "country": "GB"
             },
             {
             "id": 2641595,
             "city": "Newport",
             "lat": 52.783329,
             "lng": -2.38333,
             "country": "GB"
             },
             {
             "id": 2641610,
             "city": "Newmilns",
             "lat": 55.60751,
             "lng": -4.32416,
             "country": "GB"
             },
             {
             "id": 2641612,
             "city": "New Mills",
             "lat": 53.365921,
             "lng": -1.99986,
             "country": "GB"
             },
             {
             "id": 2641618,
             "city": "Newmains",
             "lat": 55.76667,
             "lng": -3.88333,
             "country": "GB"
             },
             {
             "id": 2641629,
             "city": "Newington",
             "lat": 51.352169,
             "lng": 0.66768,
             "country": "GB"
             },
             {
             "id": 2641630,
             "city": "Newick",
             "lat": 50.975182,
             "lng": 0.01579,
             "country": "GB"
             },
             {
             "id": 2641637,
             "city": "Newhaven",
             "lat": 50.796928,
             "lng": 0.05545,
             "country": "GB"
             },
             {
             "id": 2641649,
             "city": "New Ferry",
             "lat": 53.360458,
             "lng": -2.99377,
             "country": "GB"
             },
             {
             "id": 2641651,
             "city": "Newent",
             "lat": 51.933651,
             "lng": -2.40815,
             "country": "GB"
             },
             {
             "id": 2641658,
             "city": "New Cumnock",
             "lat": 55.39563,
             "lng": -4.18458,
             "country": "GB"
             },
             {
             "id": 2641692,
             "city": "Newburgh",
             "lat": 56.333328,
             "lng": -3.25,
             "country": "GB"
             },
             {
             "id": 2641710,
             "city": "Newbold Verdon",
             "lat": 52.629589,
             "lng": -1.3422,
             "country": "GB"
             },
             {
             "id": 2641718,
             "city": "Newbiggin-by-the-Sea",
             "lat": 55.185322,
             "lng": -1.51469,
             "country": "GB"
             },
             {
             "id": 2641729,
             "city": "Newarthill",
             "lat": 55.815102,
             "lng": -3.93733,
             "country": "GB"
             },
             {
             "id": 2641760,
             "city": "Nettleham",
             "lat": 53.266029,
             "lng": -0.48866,
             "country": "GB"
             },
             {
             "id": 2641765,
             "city": "Netley",
             "lat": 50.876339,
             "lng": -1.35398,
             "country": "GB"
             },
             {
             "id": 2641773,
             "city": "Netherton",
             "lat": 52.48333,
             "lng": -2.08333,
             "country": "GB"
             },
             {
             "id": 2641776,
             "city": "Nether Poppleton",
             "lat": 53.98793,
             "lng": -1.15062,
             "country": "GB"
             },
             {
             "id": 2641811,
             "city": "Nelson",
             "lat": 51.653332,
             "lng": -3.28444,
             "country": "GB"
             },
             {
             "id": 2641815,
             "city": "Neilston",
             "lat": 55.78574,
             "lng": -4.42637,
             "country": "GB"
             },
             {
             "id": 2641827,
             "city": "Needingworth",
             "lat": 52.330509,
             "lng": -0.03116,
             "country": "GB"
             },
             {
             "id": 2641828,
             "city": "Needham Market",
             "lat": 52.155499,
             "lng": 1.0516,
             "country": "GB"
             },
             {
             "id": 2641861,
             "city": "Navenby",
             "lat": 53.1068,
             "lng": -0.52494,
             "country": "GB"
             },
             {
             "id": 2641884,
             "city": "Narborough",
             "lat": 52.566669,
             "lng": -1.2,
             "country": "GB"
             },
             {
             "id": 2641892,
             "city": "Nantwich",
             "lat": 53.068779,
             "lng": -2.52051,
             "country": "GB"
             },
             {
             "id": 2641912,
             "city": "Nailsworth",
             "lat": 51.693821,
             "lng": -2.2199,
             "country": "GB"
             },
             {
             "id": 2641915,
             "city": "Nafferton",
             "lat": 54.019169,
             "lng": -0.38976,
             "country": "GB"
             },
             {
             "id": 2641922,
             "city": "Mytholmroyd",
             "lat": 53.730652,
             "lng": -1.98258,
             "country": "GB"
             },
             {
             "id": 2641966,
             "city": "Mundesley",
             "lat": 52.86219,
             "lng": 1.39552,
             "country": "GB"
             },
             {
             "id": 2641997,
             "city": "Mulbarton",
             "lat": 52.559132,
             "lng": 1.23327,
             "country": "GB"
             },
             {
             "id": 2642054,
             "city": "Much Wenlock",
             "lat": 52.595821,
             "lng": -2.55749,
             "country": "GB"
             },
             {
             "id": 2642057,
             "city": "Much Hadham",
             "lat": 51.854069,
             "lng": 0.07188,
             "country": "GB"
             },
             {
             "id": 2642096,
             "city": "Mountsorrel",
             "lat": 52.716671,
             "lng": -1.15,
             "country": "GB"
             },
             {
             "id": 2642116,
             "city": "Mountain Ash",
             "lat": 51.683609,
             "lng": -3.38008,
             "country": "GB"
             },
             {
             "id": 2642143,
             "city": "Mossley",
             "lat": 53.514542,
             "lng": -2.03462,
             "country": "GB"
             },
             {
             "id": 2642182,
             "city": "Morpeth",
             "lat": 55.167648,
             "lng": -1.6912,
             "country": "GB"
             },
             {
             "id": 2642200,
             "city": "Moreton in Marsh",
             "lat": 51.989639,
             "lng": -1.70297,
             "country": "GB"
             },
             {
             "id": 2642302,
             "city": "Montrose",
             "lat": 56.700001,
             "lng": -2.45,
             "country": "GB"
             },
             {
             "id": 2642372,
             "city": "Mold",
             "lat": 53.16674,
             "lng": -3.14143,
             "country": "GB"
             },
             {
             "id": 2642376,
             "city": "Moira",
             "lat": 54.480209,
             "lng": -6.22822,
             "country": "GB"
             },
             {
             "id": 2642384,
             "city": "Moffat",
             "lat": 55.332272,
             "lng": -3.44542,
             "country": "GB"
             },
             {
             "id": 2642412,
             "city": "Mitcheldean",
             "lat": 51.864399,
             "lng": -2.4895,
             "country": "GB"
             },
             {
             "id": 2642417,
             "city": "Misterton",
             "lat": 53.450001,
             "lng": -0.85,
             "country": "GB"
             },
             {
             "id": 2642430,
             "city": "Mintlaw",
             "lat": 57.524139,
             "lng": -2.00099,
             "country": "GB"
             },
             {
             "id": 2642450,
             "city": "Minehead",
             "lat": 51.20565,
             "lng": -3.47875,
             "country": "GB"
             },
             {
             "id": 2642452,
             "city": "Minchinhampton",
             "lat": 51.706749,
             "lng": -2.18502,
             "country": "GB"
             },
             {
             "id": 2642482,
             "city": "Milnthorpe",
             "lat": 54.216671,
             "lng": -2.76667,
             "country": "GB"
             },
             {
             "id": 2642483,
             "city": "Milnrow",
             "lat": 53.611149,
             "lng": -2.11266,
             "country": "GB"
             },
             {
             "id": 2642484,
             "city": "Milngavie",
             "lat": 55.940708,
             "lng": -4.32311,
             "country": "GB"
             },
             {
             "id": 2642505,
             "city": "Millom",
             "lat": 54.21072,
             "lng": -3.272,
             "country": "GB"
             },
             {
             "id": 2642511,
             "city": "Millisle",
             "lat": 54.60638,
             "lng": -5.52973,
             "country": "GB"
             },
             {
             "id": 2642533,
             "city": "Milford on Sea",
             "lat": 50.725609,
             "lng": -1.59004,
             "country": "GB"
             },
             {
             "id": 2642537,
             "city": "Milford",
             "lat": 51.172722,
             "lng": -0.65042,
             "country": "GB"
             },
             {
             "id": 2642544,
             "city": "Mildenhall",
             "lat": 51.425598,
             "lng": -1.69988,
             "country": "GB"
             },
             {
             "id": 2642549,
             "city": "Milborne Port",
             "lat": 50.966049,
             "lng": -2.46248,
             "country": "GB"
             },
             {
             "id": 2642557,
             "city": "Midsomer Norton",
             "lat": 51.285671,
             "lng": -2.48591,
             "country": "GB"
             },
             {
             "id": 2642567,
             "city": "Midhurst",
             "lat": 50.985592,
             "lng": -0.74003,
             "country": "GB"
             },
             {
             "id": 2642573,
             "city": "Middlewich",
             "lat": 53.192959,
             "lng": -2.44402,
             "country": "GB"
             },
             {
             "id": 2642603,
             "city": "Middlestown",
             "lat": 53.650791,
             "lng": -1.59762,
             "country": "GB"
             },
             {
             "id": 2642632,
             "city": "Mid Calder",
             "lat": 55.892609,
             "lng": -3.48002,
             "country": "GB"
             },
             {
             "id": 2642687,
             "city": "Mevagissey",
             "lat": 50.273239,
             "lng": -4.79166,
             "country": "GB"
             },
             {
             "id": 2642695,
             "city": "Metheringham",
             "lat": 53.140148,
             "lng": -0.40368,
             "country": "GB"
             },
             {
             "id": 2642697,
             "city": "Messingham",
             "lat": 53.528278,
             "lng": -0.65385,
             "country": "GB"
             },
             {
             "id": 2642733,
             "city": "Meopham",
             "lat": 51.368439,
             "lng": 0.36007,
             "country": "GB"
             },
             {
             "id": 2642743,
             "city": "Menston",
             "lat": 53.890411,
             "lng": -1.74395,
             "country": "GB"
             },
             {
             "id": 2642755,
             "city": "Menai Bridge",
             "lat": 53.227749,
             "lng": -4.16926,
             "country": "GB"
             },
             {
             "id": 2642766,
             "city": "Meltham",
             "lat": 53.583328,
             "lng": -1.85,
             "country": "GB"
             },
             {
             "id": 2642786,
             "city": "Melksham",
             "lat": 51.37281,
             "lng": -2.14002,
             "country": "GB"
             },
             {
             "id": 2642801,
             "city": "Melbourne",
             "lat": 52.821899,
             "lng": -1.42522,
             "country": "GB"
             },
             {
             "id": 2642802,
             "city": "Melbourn",
             "lat": 52.08128,
             "lng": 0.01514,
             "country": "GB"
             },
             {
             "id": 2642843,
             "city": "Measham",
             "lat": 52.70644,
             "lng": -1.50637,
             "country": "GB"
             },
             {
             "id": 2642876,
             "city": "Mayfield",
             "lat": 53,
             "lng": -1.76667,
             "country": "GB"
             },
             {
             "id": 2642882,
             "city": "Maybole",
             "lat": 55.35503,
             "lng": -4.68026,
             "country": "GB"
             },
             {
             "id": 2642904,
             "city": "Mauchline",
             "lat": 55.516041,
             "lng": -4.37928,
             "country": "GB"
             },
             {
             "id": 2642905,
             "city": "Mattishall",
             "lat": 52.65905,
             "lng": 1.0325,
             "country": "GB"
             },
             {
             "id": 2642910,
             "city": "Matlock",
             "lat": 53.138378,
             "lng": -1.5556,
             "country": "GB"
             },
             {
             "id": 2642927,
             "city": "Maryport",
             "lat": 54.71434,
             "lng": -3.49509,
             "country": "GB"
             },
             {
             "id": 2642947,
             "city": "Martock",
             "lat": 50.97361,
             "lng": -2.76684,
             "country": "GB"
             },
             {
             "id": 2642959,
             "city": "Martham",
             "lat": 52.704639,
             "lng": 1.63636,
             "country": "GB"
             },
             {
             "id": 2642963,
             "city": "Marston Moretaine",
             "lat": 52.064098,
             "lng": -0.54932,
             "country": "GB"
             },
             {
             "id": 2642980,
             "city": "Marshfield",
             "lat": 51.53389,
             "lng": -3.07306,
             "country": "GB"
             },
             {
             "id": 2643010,
             "city": "Marlborough",
             "lat": 51.42062,
             "lng": -1.72751,
             "country": "GB"
             },
             {
             "id": 2643011,
             "city": "Markyate",
             "lat": 51.838459,
             "lng": -0.46345,
             "country": "GB"
             },
             {
             "id": 2643012,
             "city": "Marks Tey",
             "lat": 51.876282,
             "lng": 0.76424,
             "country": "GB"
             },
             {
             "id": 2643019,
             "city": "Markfield",
             "lat": 52.687469,
             "lng": -1.27476,
             "country": "GB"
             },
             {
             "id": 2643021,
             "city": "Market Weighton",
             "lat": 53.863098,
             "lng": -0.66505,
             "country": "GB"
             },
             {
             "id": 2643023,
             "city": "Market Rasen",
             "lat": 53.387642,
             "lng": -0.33781,
             "country": "GB"
             },
             {
             "id": 2643025,
             "city": "Market Lavington",
             "lat": 51.28756,
             "lng": -1.97729,
             "country": "GB"
             },
             {
             "id": 2643028,
             "city": "Market Drayton",
             "lat": 52.90538,
             "lng": -2.49012,
             "country": "GB"
             },
             {
             "id": 2643030,
             "city": "Market Bosworth",
             "lat": 52.624279,
             "lng": -1.40174,
             "country": "GB"
             },
             {
             "id": 2643060,
             "city": "Marden",
             "lat": 51.17482,
             "lng": 0.48855,
             "country": "GB"
             },
             {
             "id": 2643095,
             "city": "Manston",
             "lat": 50.950001,
             "lng": -2.26667,
             "country": "GB"
             },
             {
             "id": 2643107,
             "city": "Manningtree",
             "lat": 51.945381,
             "lng": 1.06112,
             "country": "GB"
             },
             {
             "id": 2643142,
             "city": "Malton",
             "lat": 54.134541,
             "lng": -0.79669,
             "country": "GB"
             },
             {
             "id": 2643146,
             "city": "Malmesbury",
             "lat": 51.581749,
             "lng": -2.09708,
             "country": "GB"
             },
             {
             "id": 2643196,
             "city": "Magor",
             "lat": 51.579441,
             "lng": -2.83139,
             "country": "GB"
             },
             {
             "id": 2643208,
             "city": "Magherafelt",
             "lat": 54.753559,
             "lng": -6.60656,
             "country": "GB"
             },
             {
             "id": 2643211,
             "city": "Maghera",
             "lat": 54.843899,
             "lng": -6.67145,
             "country": "GB"
             },
             {
             "id": 2643251,
             "city": "Machynlleth",
             "lat": 52.590969,
             "lng": -3.85051,
             "country": "GB"
             },
             {
             "id": 2643259,
             "city": "Machen",
             "lat": 51.595989,
             "lng": -3.1419,
             "country": "GB"
             },
             {
             "id": 2643262,
             "city": "Macduff",
             "lat": 57.67012,
             "lng": -2.49686,
             "country": "GB"
             },
             {
             "id": 2643276,
             "city": "Lytchett Matravers",
             "lat": 50.758259,
             "lng": -2.07806,
             "country": "GB"
             },
             {
             "id": 2643298,
             "city": "Lyneham",
             "lat": 51.51667,
             "lng": -1.96667,
             "country": "GB"
             },
             {
             "id": 2643304,
             "city": "Lyndhurst",
             "lat": 50.872589,
             "lng": -1.57662,
             "country": "GB"
             },
             {
             "id": 2643309,
             "city": "Lymm",
             "lat": 53.38105,
             "lng": -2.47763,
             "country": "GB"
             },
             {
             "id": 2643313,
             "city": "Lyminge",
             "lat": 51.129509,
             "lng": 1.08896,
             "country": "GB"
             },
             {
             "id": 2643318,
             "city": "Lydney",
             "lat": 51.725979,
             "lng": -2.52605,
             "country": "GB"
             },
             {
             "id": 2643327,
             "city": "Lydd",
             "lat": 50.952259,
             "lng": 0.9074,
             "country": "GB"
             },
             {
             "id": 2643329,
             "city": "Lydbrook",
             "lat": 51.837631,
             "lng": -2.57818,
             "country": "GB"
             },
             {
             "id": 2643337,
             "city": "Lutterworth",
             "lat": 52.456341,
             "lng": -1.20218,
             "country": "GB"
             },
             {
             "id": 2643385,
             "city": "Lundin Links",
             "lat": 56.212399,
             "lng": -2.95296,
             "country": "GB"
             },
             {
             "id": 2643425,
             "city": "Ludlow",
             "lat": 52.37431,
             "lng": -2.71311,
             "country": "GB"
             },
             {
             "id": 2643437,
             "city": "Luddenden Foot",
             "lat": 53.718731,
             "lng": -1.94582,
             "country": "GB"
             },
             {
             "id": 2643543,
             "city": "Lowdham",
             "lat": 53.012051,
             "lng": -1.00483,
             "country": "GB"
             },
             {
             "id": 2643583,
             "city": "Lostwithiel",
             "lat": 50.407841,
             "lng": -4.67023,
             "country": "GB"
             },
             {
             "id": 2643587,
             "city": "Lossiemouth",
             "lat": 57.721359,
             "lng": -3.28341,
             "country": "GB"
             },
             {
             "id": 2643618,
             "city": "Longtown",
             "lat": 51.950001,
             "lng": -2.98333,
             "country": "GB"
             },
             {
             "id": 2643620,
             "city": "Longton",
             "lat": 52.98333,
             "lng": -2.13333,
             "country": "GB"
             },
             {
             "id": 2643628,
             "city": "Long Stratton",
             "lat": 52.488029,
             "lng": 1.23478,
             "country": "GB"
             },
             {
             "id": 2643646,
             "city": "Longridge",
             "lat": 53.833328,
             "lng": -2.58333,
             "country": "GB"
             },
             {
             "id": 2643652,
             "city": "Longniddry",
             "lat": 55.97543,
             "lng": -2.89593,
             "country": "GB"
             },
             {
             "id": 2643661,
             "city": "Long Melford",
             "lat": 52.07481,
             "lng": 0.71639,
             "country": "GB"
             },
             {
             "id": 2643673,
             "city": "Long Lawford",
             "lat": 52.38176,
             "lng": -1.30716,
             "country": "GB"
             },
             {
             "id": 2643704,
             "city": "Longdendale",
             "lat": 53.466671,
             "lng": -2,
             "country": "GB"
             },
             {
             "id": 2643707,
             "city": "Long Crendon",
             "lat": 51.772942,
             "lng": -0.99684,
             "country": "GB"
             },
             {
             "id": 2643714,
             "city": "Long Buckby",
             "lat": 52.302601,
             "lng": -1.08113,
             "country": "GB"
             },
             {
             "id": 2643726,
             "city": "Long Ashton",
             "lat": 51.42997,
             "lng": -2.66098,
             "country": "GB"
             },
             {
             "id": 2643773,
             "city": "Loftus",
             "lat": 54.555431,
             "lng": -0.89459,
             "country": "GB"
             },
             {
             "id": 2643783,
             "city": "Loddon",
             "lat": 52.5327,
             "lng": 1.48183,
             "country": "GB"
             },
             {
             "id": 2643791,
             "city": "Lockerbie",
             "lat": 55.12302,
             "lng": -3.35635,
             "country": "GB"
             },
             {
             "id": 2643797,
             "city": "Lochwinnoch",
             "lat": 55.795212,
             "lng": -4.63034,
             "country": "GB"
             },
             {
             "id": 2643825,
             "city": "Lochgilphead",
             "lat": 56.03796,
             "lng": -5.43206,
             "country": "GB"
             },
             {
             "id": 2643827,
             "city": "Lochgelly",
             "lat": 56.128262,
             "lng": -3.30964,
             "country": "GB"
             },
             {
             "id": 2643862,
             "city": "Loanhead",
             "lat": 55.879452,
             "lng": -3.15874,
             "country": "GB"
             },
             {
             "id": 2643933,
             "city": "Llantwit Major",
             "lat": 51.410702,
             "lng": -3.48632,
             "country": "GB"
             },
             {
             "id": 2643934,
             "city": "Llantwit Fardre",
             "lat": 51.5546,
             "lng": -3.33241,
             "country": "GB"
             },
             {
             "id": 2643937,
             "city": "Llantrisant",
             "lat": 51.540279,
             "lng": -3.37389,
             "country": "GB"
             },
             {
             "id": 2643957,
             "city": "Llanrwst",
             "lat": 53.140209,
             "lng": -3.79527,
             "country": "GB"
             },
             {
             "id": 2643990,
             "city": "Llanidloes",
             "lat": 52.449772,
             "lng": -3.53997,
             "country": "GB"
             },
             {
             "id": 2643993,
             "city": "Llanharry",
             "lat": 51.514221,
             "lng": -3.4324,
             "country": "GB"
             },
             {
             "id": 2643994,
             "city": "Llanharan",
             "lat": 51.538052,
             "lng": -3.43906,
             "country": "GB"
             },
             {
             "id": 2644021,
             "city": "Llangollen",
             "lat": 52.968288,
             "lng": -3.17127,
             "country": "GB"
             },
             {
             "id": 2644037,
             "city": "Llangefni",
             "lat": 53.255611,
             "lng": -4.31063,
             "country": "GB"
             },
             {
             "id": 2644080,
             "city": "Llanfairpwllgwyngyll",
             "lat": 53.221409,
             "lng": -4.20329,
             "country": "GB"
             },
             {
             "id": 2644107,
             "city": "Llandysul",
             "lat": 52.04166,
             "lng": -4.30909,
             "country": "GB"
             },
             {
             "id": 2644115,
             "city": "Llandybie",
             "lat": 51.820438,
             "lng": -4.0071,
             "country": "GB"
             },
             {
             "id": 2644122,
             "city": "Llandrindod Wells",
             "lat": 52.241638,
             "lng": -3.37868,
             "country": "GB"
             },
             {
             "id": 2644127,
             "city": "Llandovery",
             "lat": 51.994148,
             "lng": -3.79637,
             "country": "GB"
             },
             {
             "id": 2644167,
             "city": "Llanbradach",
             "lat": 51.606392,
             "lng": -3.23028,
             "country": "GB"
             },
             {
             "id": 2644207,
             "city": "Liversedge",
             "lat": 53.705139,
             "lng": -1.69327,
             "country": "GB"
             },
             {
             "id": 2644268,
             "city": "Littleport",
             "lat": 52.45784,
             "lng": 0.30603,
             "country": "GB"
             },
             {
             "id": 2644271,
             "city": "Little Paxton",
             "lat": 52.25045,
             "lng": -0.25801,
             "country": "GB"
             },
             {
             "id": 2644299,
             "city": "Little Lever",
             "lat": 53.549999,
             "lng": -2.36667,
             "country": "GB"
             },
             {
             "id": 2644333,
             "city": "Little Eaton",
             "lat": 52.97028,
             "lng": -1.4595,
             "country": "GB"
             },
             {
             "id": 2644350,
             "city": "Little Clacton",
             "lat": 51.825569,
             "lng": 1.14215,
             "country": "GB"
             },
             {
             "id": 2644381,
             "city": "Little Amwell",
             "lat": 51.783329,
             "lng": -0.03333,
             "country": "GB"
             },
             {
             "id": 2644398,
             "city": "Liss",
             "lat": 51.043961,
             "lng": -0.89393,
             "country": "GB"
             },
             {
             "id": 2644400,
             "city": "Lisnaskea",
             "lat": 54.25,
             "lng": -7.45,
             "country": "GB"
             },
             {
             "id": 2644409,
             "city": "Liskeard",
             "lat": 50.454498,
             "lng": -4.46517,
             "country": "GB"
             },
             {
             "id": 2644419,
             "city": "Liphook",
             "lat": 51.07716,
             "lng": -0.8032,
             "country": "GB"
             },
             {
             "id": 2644437,
             "city": "Linthwaite",
             "lat": 53.62418,
             "lng": -1.85017,
             "country": "GB"
             },
             {
             "id": 2644451,
             "city": "Lingwood",
             "lat": 52.62104,
             "lng": 1.48616,
             "country": "GB"
             },
             {
             "id": 2644455,
             "city": "Lingfield",
             "lat": 51.17482,
             "lng": -0.01287,
             "country": "GB"
             },
             {
             "id": 2644501,
             "city": "Limavady",
             "lat": 55.050449,
             "lng": -6.95074,
             "country": "GB"
             },
             {
             "id": 2644544,
             "city": "Leysdown-on-Sea",
             "lat": 51.397301,
             "lng": 0.92156,
             "country": "GB"
             },
             {
             "id": 2644578,
             "city": "Leven",
             "lat": 53.883331,
             "lng": -0.31667,
             "country": "GB"
             },
             {
             "id": 2644600,
             "city": "Lesmahagow",
             "lat": 55.636681,
             "lng": -3.88736,
             "country": "GB"
             },
             {
             "id": 2644605,
             "city": "Lerwick",
             "lat": 60.15453,
             "lng": -1.14941,
             "country": "GB"
             },
             {
             "id": 2644613,
             "city": "Leominster",
             "lat": 52.226521,
             "lng": -2.73907,
             "country": "GB"
             },
             {
             "id": 2644622,
             "city": "Lennoxtown",
             "lat": 55.97263,
             "lng": -4.20001,
             "country": "GB"
             },
             {
             "id": 2644624,
             "city": "Lenham",
             "lat": 51.237049,
             "lng": 0.71892,
             "country": "GB"
             },
             {
             "id": 2644676,
             "city": "Leeswood",
             "lat": 53.133469,
             "lng": -3.09466,
             "country": "GB"
             },
             {
             "id": 2644680,
             "city": "Lee-on-the-Solent",
             "lat": 50.801689,
             "lng": -1.20174,
             "country": "GB"
             },
             {
             "id": 2644707,
             "city": "Ledbury",
             "lat": 52.036388,
             "lng": -2.42635,
             "country": "GB"
             },
             {
             "id": 2644710,
             "city": "Leconfield",
             "lat": 53.8773,
             "lng": -0.45729,
             "country": "GB"
             },
             {
             "id": 2644719,
             "city": "Lechlade",
             "lat": 51.694031,
             "lng": -1.69128,
             "country": "GB"
             },
             {
             "id": 2644795,
             "city": "Law",
             "lat": 55.75,
             "lng": -3.88333,
             "country": "GB"
             },
             {
             "id": 2644809,
             "city": "Laurencekirk",
             "lat": 56.833382,
             "lng": -2.4654,
             "country": "GB"
             },
             {
             "id": 2644811,
             "city": "Launceston",
             "lat": 50.63699,
             "lng": -4.36006,
             "country": "GB"
             },
             {
             "id": 2644860,
             "city": "Largs",
             "lat": 55.796291,
             "lng": -4.86337,
             "country": "GB"
             },
             {
             "id": 2644867,
             "city": "Larbert",
             "lat": 56.022461,
             "lng": -3.82872,
             "country": "GB"
             },
             {
             "id": 2644905,
             "city": "Langtoft",
             "lat": 52.698341,
             "lng": -0.3404,
             "country": "GB"
             },
             {
             "id": 2644914,
             "city": "Langport",
             "lat": 51.037781,
             "lng": -2.82806,
             "country": "GB"
             },
             {
             "id": 2644917,
             "city": "Langley Park",
             "lat": 54.799789,
             "lng": -1.67005,
             "country": "GB"
             },
             {
             "id": 2644927,
             "city": "Langholm",
             "lat": 55.151009,
             "lng": -2.99889,
             "country": "GB"
             },
             {
             "id": 2644929,
             "city": "Langho",
             "lat": 53.80217,
             "lng": -2.45076,
             "country": "GB"
             },
             {
             "id": 2644968,
             "city": "Lanchester",
             "lat": 54.821079,
             "lng": -1.74256,
             "country": "GB"
             },
             {
             "id": 2644976,
             "city": "Lanark",
             "lat": 55.67371,
             "lng": -3.7817,
             "country": "GB"
             },
             {
             "id": 2644981,
             "city": "Lampeter",
             "lat": 52.11285,
             "lng": -4.08039,
             "country": "GB"
             },
             {
             "id": 2645080,
             "city": "Laceby",
             "lat": 53.54092,
             "lng": -0.1683,
             "country": "GB"
             },
             {
             "id": 2645099,
             "city": "Knowle",
             "lat": 52.383331,
             "lng": -1.73333,
             "country": "GB"
             },
             {
             "id": 2645102,
             "city": "Knottingley",
             "lat": 53.707779,
             "lng": -1.25639,
             "country": "GB"
             },
             {
             "id": 2645155,
             "city": "Knighton",
             "lat": 52.349998,
             "lng": -3.05,
             "country": "GB"
             },
             {
             "id": 2645161,
             "city": "Knebworth",
             "lat": 51.866741,
             "lng": -0.18394,
             "country": "GB"
             },
             {
             "id": 2645180,
             "city": "Kirton in Lindsey",
             "lat": 53.475479,
             "lng": -0.59566,
             "country": "GB"
             },
             {
             "id": 2645181,
             "city": "Kirton",
             "lat": 52.927738,
             "lng": -0.06008,
             "country": "GB"
             },
             {
             "id": 2645191,
             "city": "Kirriemuir",
             "lat": 56.673981,
             "lng": -3.00343,
             "country": "GB"
             },
             {
             "id": 2645232,
             "city": "Kirk Sandall",
             "lat": 53.562111,
             "lng": -1.06876,
             "country": "GB"
             },
             {
             "id": 2645249,
             "city": "Kirkliston",
             "lat": 55.95364,
             "lng": -3.40288,
             "country": "GB"
             },
             {
             "id": 2645280,
             "city": "Kirkham",
             "lat": 53.78244,
             "lng": -2.87189,
             "country": "GB"
             },
             {
             "id": 2645287,
             "city": "Kirkcudbright",
             "lat": 54.838299,
             "lng": -4.04908,
             "country": "GB"
             },
             {
             "id": 2645291,
             "city": "Kirkconnel",
             "lat": 55.385609,
             "lng": -3.99836,
             "country": "GB"
             },
             {
             "id": 2645314,
             "city": "Kirkburton",
             "lat": 53.61047,
             "lng": -1.70292,
             "country": "GB"
             },
             {
             "id": 2645335,
             "city": "Kirby Muxloe",
             "lat": 52.633381,
             "lng": -1.23322,
             "country": "GB"
             },
             {
             "id": 2645358,
             "city": "Kintore",
             "lat": 57.237209,
             "lng": -2.3454,
             "country": "GB"
             },
             {
             "id": 2645361,
             "city": "Kintbury",
             "lat": 51.399578,
             "lng": -1.44865,
             "country": "GB"
             },
             {
             "id": 2645411,
             "city": "Kington",
             "lat": 52.200001,
             "lng": -2.01667,
             "country": "GB"
             },
             {
             "id": 2645413,
             "city": "Kings Worthy",
             "lat": 51.088619,
             "lng": -1.2978,
             "country": "GB"
             },
             {
             "id": 2645460,
             "city": "Kings Langley",
             "lat": 51.713951,
             "lng": -0.45044,
             "country": "GB"
             },
             {
             "id": 2645464,
             "city": "Kingskerswell",
             "lat": 50.499149,
             "lng": -3.58195,
             "country": "GB"
             },
             {
             "id": 2645479,
             "city": "Kingsclere",
             "lat": 51.324871,
             "lng": -1.24339,
             "country": "GB"
             },
             {
             "id": 2645483,
             "city": "Kingsbury",
             "lat": 52.561062,
             "lng": -1.67936,
             "country": "GB"
             },
             {
             "id": 2645500,
             "city": "Kinghorn",
             "lat": 56.068958,
             "lng": -3.17607,
             "country": "GB"
             },
             {
             "id": 2645525,
             "city": "Kincardine",
             "lat": 56.066669,
             "lng": -3.71667,
             "country": "GB"
             },
             {
             "id": 2645539,
             "city": "Kimberley",
             "lat": 52.98333,
             "lng": -1.26667,
             "country": "GB"
             },
             {
             "id": 2645548,
             "city": "Kilsyth",
             "lat": 55.97596,
             "lng": -4.05916,
             "country": "GB"
             },
             {
             "id": 2645599,
             "city": "Kilmaurs",
             "lat": 55.638008,
             "lng": -4.5273,
             "country": "GB"
             },
             {
             "id": 2645611,
             "city": "Kilmacolm",
             "lat": 55.894699,
             "lng": -4.62643,
             "country": "GB"
             },
             {
             "id": 2645613,
             "city": "Killyleagh",
             "lat": 54.400002,
             "lng": -5.71667,
             "country": "GB"
             },
             {
             "id": 2645653,
             "city": "Killamarsh",
             "lat": 53.323952,
             "lng": -1.31688,
             "country": "GB"
             },
             {
             "id": 2645663,
             "city": "Kilgetty",
             "lat": 51.732029,
             "lng": -4.71983,
             "country": "GB"
             },
             {
             "id": 2645703,
             "city": "Kilburn",
             "lat": 53.005798,
             "lng": -1.43869,
             "country": "GB"
             },
             {
             "id": 2645712,
             "city": "Kilbirnie",
             "lat": 55.75082,
             "lng": -4.68791,
             "country": "GB"
             },
             {
             "id": 2645714,
             "city": "Kilbarchan",
             "lat": 55.836201,
             "lng": -4.55356,
             "country": "GB"
             },
             {
             "id": 2645720,
             "city": "Kidwelly",
             "lat": 51.736389,
             "lng": -4.30333,
             "country": "GB"
             },
             {
             "id": 2645728,
             "city": "Kibworth Harcourt",
             "lat": 52.544392,
             "lng": -0.99491,
             "country": "GB"
             },
             {
             "id": 2645734,
             "city": "Keyingham",
             "lat": 53.70961,
             "lng": -0.11325,
             "country": "GB"
             },
             {
             "id": 2645756,
             "city": "Keswick",
             "lat": 54.599468,
             "lng": -3.13256,
             "country": "GB"
             },
             {
             "id": 2645761,
             "city": "Kessingland",
             "lat": 52.419868,
             "lng": 1.70878,
             "country": "GB"
             },
             {
             "id": 2645778,
             "city": "Keresley",
             "lat": 52.451561,
             "lng": -1.53319,
             "country": "GB"
             },
             {
             "id": 2645803,
             "city": "Kennoway",
             "lat": 56.210812,
             "lng": -3.04917,
             "country": "GB"
             },
             {
             "id": 2645804,
             "city": "Kennington",
             "lat": 51.1674,
             "lng": 0.88491,
             "country": "GB"
             },
             {
             "id": 2645830,
             "city": "Kemsing",
             "lat": 51.306042,
             "lng": 0.22917,
             "country": "GB"
             },
             {
             "id": 2645833,
             "city": "Kempsey",
             "lat": 52.139359,
             "lng": -2.21751,
             "country": "GB"
             },
             {
             "id": 2645836,
             "city": "Kemnay",
             "lat": 57.235729,
             "lng": -2.44395,
             "country": "GB"
             },
             {
             "id": 2645840,
             "city": "Kelvedon Hatch",
             "lat": 51.667389,
             "lng": 0.26814,
             "country": "GB"
             },
             {
             "id": 2645843,
             "city": "Kelty",
             "lat": 56.133621,
             "lng": -3.3869,
             "country": "GB"
             },
             {
             "id": 2645849,
             "city": "Kelso",
             "lat": 55.598141,
             "lng": -2.43382,
             "country": "GB"
             },
             {
             "id": 2645853,
             "city": "Kelsall",
             "lat": 53.207748,
             "lng": -2.71242,
             "country": "GB"
             },
             {
             "id": 2645880,
             "city": "Keith",
             "lat": 57.536331,
             "lng": -2.94811,
             "country": "GB"
             },
             {
             "id": 2645891,
             "city": "Kegworth",
             "lat": 52.83482,
             "lng": -1.28042,
             "country": "GB"
             },
             {
             "id": 2645898,
             "city": "Keelby",
             "lat": 53.575802,
             "lng": -0.24701,
             "country": "GB"
             },
             {
             "id": 2645911,
             "city": "Kearsley",
             "lat": 53.533329,
             "lng": -2.38333,
             "country": "GB"
             },
             {
             "id": 2645917,
             "city": "Keady",
             "lat": 54.25,
             "lng": -6.7,
             "country": "GB"
             },
             {
             "id": 2645970,
             "city": "Jedburgh",
             "lat": 55.479969,
             "lng": -2.552,
             "country": "GB"
             },
             {
             "id": 2645983,
             "city": "Ixworth",
             "lat": 52.298931,
             "lng": 0.8341,
             "country": "GB"
             },
             {
             "id": 2645988,
             "city": "Ivybridge",
             "lat": 50.390388,
             "lng": -3.91914,
             "country": "GB"
             },
             {
             "id": 2645989,
             "city": "Ivinghoe",
             "lat": 51.836021,
             "lng": -0.62983,
             "country": "GB"
             },
             {
             "id": 2645990,
             "city": "Iver",
             "lat": 51.5,
             "lng": -0.5,
             "country": "GB"
             },
             {
             "id": 2646012,
             "city": "Isleham",
             "lat": 52.342892,
             "lng": 0.41212,
             "country": "GB"
             },
             {
             "id": 2646034,
             "city": "Irthlingborough",
             "lat": 52.32674,
             "lng": -0.61129,
             "country": "GB"
             },
             {
             "id": 2646055,
             "city": "Irchester",
             "lat": 52.281078,
             "lng": -0.6451,
             "country": "GB"
             },
             {
             "id": 2646062,
             "city": "Ipplepen",
             "lat": 50.489189,
             "lng": -3.639,
             "country": "GB"
             },
             {
             "id": 2646104,
             "city": "Inverkeithing",
             "lat": 56.03297,
             "lng": -3.39555,
             "country": "GB"
             },
             {
             "id": 2646115,
             "city": "Invergordon",
             "lat": 57.688599,
             "lng": -4.16745,
             "country": "GB"
             },
             {
             "id": 2646134,
             "city": "Inverbervie",
             "lat": 56.844631,
             "lng": -2.27997,
             "country": "GB"
             },
             {
             "id": 2646172,
             "city": "Innerleithen",
             "lat": 55.61927,
             "lng": -3.06301,
             "country": "GB"
             },
             {
             "id": 2646202,
             "city": "Ingoldmells",
             "lat": 53.194141,
             "lng": 0.33358,
             "country": "GB"
             },
             {
             "id": 2646208,
             "city": "Ingleby Greenhow",
             "lat": 54.449829,
             "lng": -1.10687,
             "country": "GB"
             },
             {
             "id": 2646219,
             "city": "Ingatestone",
             "lat": 51.670269,
             "lng": 0.38359,
             "country": "GB"
             },
             {
             "id": 2646256,
             "city": "Immingham",
             "lat": 53.612389,
             "lng": -0.22219,
             "country": "GB"
             },
             {
             "id": 2646265,
             "city": "Ilminster",
             "lat": 50.926842,
             "lng": -2.91009,
             "country": "GB"
             },
             {
             "id": 2646272,
             "city": "Ilkley",
             "lat": 53.924492,
             "lng": -1.82326,
             "country": "GB"
             },
             {
             "id": 2646276,
             "city": "Ilfracombe",
             "lat": 51.209301,
             "lng": -4.11344,
             "country": "GB"
             },
             {
             "id": 2646279,
             "city": "Ilchester",
             "lat": 51.005871,
             "lng": -2.67981,
             "country": "GB"
             },
             {
             "id": 2646311,
             "city": "Ibstock",
             "lat": 52.685539,
             "lng": -1.39965,
             "country": "GB"
             },
             {
             "id": 2646316,
             "city": "Hythe",
             "lat": 51.071499,
             "lng": 1.08421,
             "country": "GB"
             },
             {
             "id": 2646403,
             "city": "Hunstanton",
             "lat": 52.950001,
             "lng": 0.5,
             "country": "GB"
             },
             {
             "id": 2646406,
             "city": "Hunmanby",
             "lat": 54.179569,
             "lng": -0.32007,
             "country": "GB"
             },
             {
             "id": 2646499,
             "city": "Howden",
             "lat": 53.742062,
             "lng": -0.86569,
             "country": "GB"
             },
             {
             "id": 2646507,
             "city": "Houston",
             "lat": 55.868591,
             "lng": -4.55201,
             "country": "GB"
             },
             {
             "id": 2646559,
             "city": "Horsford",
             "lat": 52.70153,
             "lng": 1.24015,
             "country": "GB"
             },
             {
             "id": 2646578,
             "city": "Horrabridge",
             "lat": 50.50843,
             "lng": -4.10042,
             "country": "GB"
             },
             {
             "id": 2646583,
             "city": "Hornsea",
             "lat": 53.910412,
             "lng": -0.16806,
             "country": "GB"
             },
             {
             "id": 2646595,
             "city": "Horncastle",
             "lat": 53.207748,
             "lng": -0.1172,
             "country": "GB"
             },
             {
             "id": 2646620,
             "city": "Hopton on Sea",
             "lat": 52.533329,
             "lng": 1.73333,
             "country": "GB"
             },
             {
             "id": 2646654,
             "city": "Hook",
             "lat": 51.284248,
             "lng": -0.95967,
             "country": "GB"
             },
             {
             "id": 2646656,
             "city": "Hoo",
             "lat": 51.417519,
             "lng": 0.5652,
             "country": "GB"
             },
             {
             "id": 2646670,
             "city": "Holywood",
             "lat": 54.63863,
             "lng": -5.82473,
             "country": "GB"
             },
             {
             "id": 2646673,
             "city": "Holywell",
             "lat": 53.274658,
             "lng": -3.22895,
             "country": "GB"
             },
             {
             "id": 2646675,
             "city": "Holytown",
             "lat": 55.82011,
             "lng": -3.9727,
             "country": "GB"
             },
             {
             "id": 2646686,
             "city": "Holyhead",
             "lat": 53.30621,
             "lng": -4.63211,
             "country": "GB"
             },
             {
             "id": 2646694,
             "city": "Holton le Clay",
             "lat": 53.505199,
             "lng": -0.063,
             "country": "GB"
             },
             {
             "id": 2646704,
             "city": "Holsworthy",
             "lat": 50.811958,
             "lng": -4.35383,
             "country": "GB"
             },
             {
             "id": 2646716,
             "city": "Holmfirth",
             "lat": 53.569679,
             "lng": -1.78777,
             "country": "GB"
             },
             {
             "id": 2646720,
             "city": "Holmes Chapel",
             "lat": 53.201401,
             "lng": -2.35742,
             "country": "GB"
             },
             {
             "id": 2646787,
             "city": "Holbeach",
             "lat": 52.804008,
             "lng": 0.01442,
             "country": "GB"
             },
             {
             "id": 2646814,
             "city": "Hockley",
             "lat": 52.5,
             "lng": -1.91667,
             "country": "GB"
             },
             {
             "id": 2646850,
             "city": "Hinton",
             "lat": 51.489719,
             "lng": -2.38472,
             "country": "GB"
             },
             {
             "id": 2646856,
             "city": "Hingham",
             "lat": 52.579689,
             "lng": 0.98422,
             "country": "GB"
             },
             {
             "id": 2646863,
             "city": "Hindhead",
             "lat": 51.113811,
             "lng": -0.73351,
             "country": "GB"
             },
             {
             "id": 2646890,
             "city": "Hillsborough",
             "lat": 54.463451,
             "lng": -6.07664,
             "country": "GB"
             },
             {
             "id": 2646916,
             "city": "Highworth",
             "lat": 51.630508,
             "lng": -1.711,
             "country": "GB"
             },
             {
             "id": 2646921,
             "city": "High Valleyfield",
             "lat": 56.063568,
             "lng": -3.59913,
             "country": "GB"
             },
             {
             "id": 2646922,
             "city": "Hightown",
             "lat": 53.51667,
             "lng": -3.05,
             "country": "GB"
             },
             {
             "id": 2646963,
             "city": "High Etherley",
             "lat": 54.653912,
             "lng": -1.74363,
             "country": "GB"
             },
             {
             "id": 2646972,
             "city": "Highclere",
             "lat": 51.3386,
             "lng": -1.37569,
             "country": "GB"
             },
             {
             "id": 2646977,
             "city": "Highbridge",
             "lat": 51.216671,
             "lng": -2.98333,
             "country": "GB"
             },
             {
             "id": 2646981,
             "city": "High Bentham",
             "lat": 54.118229,
             "lng": -2.51199,
             "country": "GB"
             },
             {
             "id": 2646985,
             "city": "Higham Ferrers",
             "lat": 52.305962,
             "lng": -0.59342,
             "country": "GB"
             },
             {
             "id": 2647007,
             "city": "Hexham",
             "lat": 54.96986,
             "lng": -2.104,
             "country": "GB"
             },
             {
             "id": 2647021,
             "city": "Hetton le Hole",
             "lat": 54.816669,
             "lng": -1.45,
             "country": "GB"
             },
             {
             "id": 2647023,
             "city": "Hethersett",
             "lat": 52.59761,
             "lng": 1.17359,
             "country": "GB"
             },
             {
             "id": 2647097,
             "city": "Henlow",
             "lat": 52.030209,
             "lng": -0.28599,
             "country": "GB"
             },
             {
             "id": 2647102,
             "city": "Henley in Arden",
             "lat": 52.290321,
             "lng": -1.77807,
             "country": "GB"
             },
             {
             "id": 2647111,
             "city": "Henfield",
             "lat": 50.932041,
             "lng": -0.27328,
             "country": "GB"
             },
             {
             "id": 2647120,
             "city": "Hemsworth",
             "lat": 53.612671,
             "lng": -1.35424,
             "country": "GB"
             },
             {
             "id": 2647123,
             "city": "Hemsby",
             "lat": 52.69714,
             "lng": 1.69181,
             "country": "GB"
             },
             {
             "id": 2647125,
             "city": "Hempstead",
             "lat": 52.016529,
             "lng": 0.37886,
             "country": "GB"
             },
             {
             "id": 2647133,
             "city": "Hemingford Grey",
             "lat": 52.317558,
             "lng": -0.10029,
             "country": "GB"
             },
             {
             "id": 2647143,
             "city": "Helston",
             "lat": 50.103191,
             "lng": -5.27045,
             "country": "GB"
             },
             {
             "id": 2647145,
             "city": "Helsby",
             "lat": 53.27396,
             "lng": -2.76905,
             "country": "GB"
             },
             {
             "id": 2647178,
             "city": "Helensburgh",
             "lat": 56.006142,
             "lng": -4.72648,
             "country": "GB"
             },
             {
             "id": 2647187,
             "city": "Heighington",
             "lat": 53.21241,
             "lng": -0.45902,
             "country": "GB"
             },
             {
             "id": 2647191,
             "city": "Hedon",
             "lat": 53.73962,
             "lng": -0.19655,
             "country": "GB"
             },
             {
             "id": 2647200,
             "city": "Heckington",
             "lat": 52.981831,
             "lng": -0.29903,
             "country": "GB"
             },
             {
             "id": 2647207,
             "city": "Hebden Bridge",
             "lat": 53.740929,
             "lng": -2.01337,
             "country": "GB"
             },
             {
             "id": 2647229,
             "city": "Healing",
             "lat": 53.581009,
             "lng": -0.16202,
             "country": "GB"
             },
             {
             "id": 2647232,
             "city": "Heage",
             "lat": 53.050499,
             "lng": -1.44688,
             "country": "GB"
             },
             {
             "id": 2647258,
             "city": "Hayle",
             "lat": 50.183922,
             "lng": -5.42137,
             "country": "GB"
             },
             {
             "id": 2647260,
             "city": "Hayfield",
             "lat": 53.378929,
             "lng": -1.94544,
             "country": "GB"
             },
             {
             "id": 2647269,
             "city": "Haxby",
             "lat": 54.01635,
             "lng": -1.0768,
             "country": "GB"
             },
             {
             "id": 2647278,
             "city": "Haworth",
             "lat": 53.829048,
             "lng": -1.94827,
             "country": "GB"
             },
             {
             "id": 2647289,
             "city": "Hawkinge",
             "lat": 51.112759,
             "lng": 1.16176,
             "country": "GB"
             },
             {
             "id": 2647291,
             "city": "Hawkhurst",
             "lat": 51.047901,
             "lng": 0.51095,
             "country": "GB"
             },
             {
             "id": 2647311,
             "city": "Haverfordwest",
             "lat": 51.801689,
             "lng": -4.96914,
             "country": "GB"
             },
             {
             "id": 2647340,
             "city": "Hathern",
             "lat": 52.795479,
             "lng": -1.25644,
             "country": "GB"
             },
             {
             "id": 2647343,
             "city": "Hatfield Peverel",
             "lat": 51.775909,
             "lng": 0.59489,
             "country": "GB"
             },
             {
             "id": 2647359,
             "city": "Hassocks",
             "lat": 50.928139,
             "lng": -0.16617,
             "country": "GB"
             },
             {
             "id": 2647365,
             "city": "Haslemere",
             "lat": 51.090149,
             "lng": -0.70785,
             "country": "GB"
             },
             {
             "id": 2647385,
             "city": "Harwell",
             "lat": 51.599468,
             "lng": -1.29175,
             "country": "GB"
             },
             {
             "id": 2647391,
             "city": "Hartshill",
             "lat": 52.54203,
             "lng": -1.52006,
             "country": "GB"
             },
             {
             "id": 2647406,
             "city": "Harthill",
             "lat": 55.866669,
             "lng": -3.75,
             "country": "GB"
             },
             {
             "id": 2647421,
             "city": "Harrow on the Hill",
             "lat": 51.571419,
             "lng": -0.33371,
             "country": "GB"
             },
             {
             "id": 2647467,
             "city": "Harleston",
             "lat": 52.401211,
             "lng": 1.29815,
             "country": "GB"
             },
             {
             "id": 2647487,
             "city": "Harefield",
             "lat": 51.599998,
             "lng": -0.48333,
             "country": "GB"
             },
             {
             "id": 2647502,
             "city": "Harbury",
             "lat": 52.235371,
             "lng": -1.45706,
             "country": "GB"
             },
             {
             "id": 2647585,
             "city": "Hamble",
             "lat": 50.859661,
             "lng": -1.32432,
             "country": "GB"
             },
             {
             "id": 2647593,
             "city": "Haltwhistle",
             "lat": 54.971008,
             "lng": -2.45682,
             "country": "GB"
             },
             {
             "id": 2647599,
             "city": "Halton",
             "lat": 53.316669,
             "lng": -2.7,
             "country": "GB"
             },
             {
             "id": 2647605,
             "city": "Halstead",
             "lat": 51.327961,
             "lng": 0.13269,
             "country": "GB"
             },
             {
             "id": 2647638,
             "city": "Halesworth",
             "lat": 52.346401,
             "lng": 1.5029,
             "country": "GB"
             },
             {
             "id": 2647675,
             "city": "Hadlow",
             "lat": 51.224171,
             "lng": 0.33914,
             "country": "GB"
             },
             {
             "id": 2647677,
             "city": "Hadley",
             "lat": 52.700001,
             "lng": -2.48333,
             "country": "GB"
             },
             {
             "id": 2647686,
             "city": "Haddington",
             "lat": 55.95612,
             "lng": -2.78332,
             "country": "GB"
             },
             {
             "id": 2647688,
             "city": "Haddenham",
             "lat": 51.773258,
             "lng": -0.92628,
             "country": "GB"
             },
             {
             "id": 2647759,
             "city": "Gunnislake",
             "lat": 50.52441,
             "lng": -4.21333,
             "country": "GB"
             },
             {
             "id": 2647761,
             "city": "Gunness",
             "lat": 53.590801,
             "lng": -0.72834,
             "country": "GB"
             },
             {
             "id": 2647778,
             "city": "Gullane",
             "lat": 56.035389,
             "lng": -2.82951,
             "country": "GB"
             },
             {
             "id": 2647910,
             "city": "Gretna",
             "lat": 54.993801,
             "lng": -3.06594,
             "country": "GB"
             },
             {
             "id": 2647919,
             "city": "Gresford",
             "lat": 53.085388,
             "lng": -2.97062,
             "country": "GB"
             },
             {
             "id": 2647962,
             "city": "Greenhithe",
             "lat": 51.45026,
             "lng": 0.28539,
             "country": "GB"
             },
             {
             "id": 2647975,
             "city": "Greenfield",
             "lat": 53.283329,
             "lng": -3.21667,
             "country": "GB"
             },
             {
             "id": 2648003,
             "city": "Great Totham",
             "lat": 51.77354,
             "lng": 0.68932,
             "country": "GB"
             },
             {
             "id": 2648057,
             "city": "Great Missenden",
             "lat": 51.704189,
             "lng": -0.70797,
             "country": "GB"
             },
             {
             "id": 2648084,
             "city": "Great Harwood",
             "lat": 53.785118,
             "lng": -2.40865,
             "country": "GB"
             },
             {
             "id": 2648096,
             "city": "Great Gonerby",
             "lat": 52.93507,
             "lng": -0.66685,
             "country": "GB"
             },
             {
             "id": 2648097,
             "city": "Great Glen",
             "lat": 52.575481,
             "lng": -1.0349,
             "country": "GB"
             },
             {
             "id": 2648117,
             "city": "Great Dunmow",
             "lat": 51.872299,
             "lng": 0.36255,
             "country": "GB"
             },
             {
             "id": 2648120,
             "city": "Driffield",
             "lat": 54.00489,
             "lng": -0.43872,
             "country": "GB"
             },
             {
             "id": 2648168,
             "city": "Great Barford",
             "lat": 52.157909,
             "lng": -0.35235,
             "country": "GB"
             },
             {
             "id": 2648172,
             "city": "Great Ayton",
             "lat": 54.491482,
             "lng": -1.13623,
             "country": "GB"
             },
             {
             "id": 2648205,
             "city": "Grantown on Spey",
             "lat": 57.316669,
             "lng": -3.61667,
             "country": "GB"
             },
             {
             "id": 2648253,
             "city": "Goxhill",
             "lat": 53.67635,
             "lng": -0.33759,
             "country": "GB"
             },
             {
             "id": 2648259,
             "city": "Gourock",
             "lat": 55.961571,
             "lng": -4.81789,
             "country": "GB"
             },
             {
             "id": 2648301,
             "city": "Goring",
             "lat": 51.52322,
             "lng": -1.13342,
             "country": "GB"
             },
             {
             "id": 2648308,
             "city": "Gorebridge",
             "lat": 55.84594,
             "lng": -3.04563,
             "country": "GB"
             },
             {
             "id": 2648314,
             "city": "Goostrey",
             "lat": 53.22731,
             "lng": -2.33919,
             "country": "GB"
             },
             {
             "id": 2648363,
             "city": "Godstone",
             "lat": 51.248428,
             "lng": -0.06781,
             "country": "GB"
             },
             {
             "id": 2648373,
             "city": "Gobowen",
             "lat": 52.896149,
             "lng": -3.03686,
             "country": "GB"
             },
             {
             "id": 2648383,
             "city": "Gnosall",
             "lat": 52.78558,
             "lng": -2.25483,
             "country": "GB"
             },
             {
             "id": 2648385,
             "city": "Glyn-neath",
             "lat": 51.747501,
             "lng": -3.61833,
             "country": "GB"
             },
             {
             "id": 2648549,
             "city": "Glemsford",
             "lat": 52.103512,
             "lng": 0.66912,
             "country": "GB"
             },
             {
             "id": 2648603,
             "city": "Glanamman",
             "lat": 51.799999,
             "lng": -3.93333,
             "country": "GB"
             },
             {
             "id": 2648626,
             "city": "Girvan",
             "lat": 55.24255,
             "lng": -4.85551,
             "country": "GB"
             },
             {
             "id": 2648627,
             "city": "Girton",
             "lat": 52.23333,
             "lng": 0.08333,
             "country": "GB"
             },
             {
             "id": 2648642,
             "city": "Gilwern",
             "lat": 51.824749,
             "lng": -3.09355,
             "country": "GB"
             },
             {
             "id": 2648658,
             "city": "Gillingham",
             "lat": 51.03833,
             "lng": -2.27611,
             "country": "GB"
             },
             {
             "id": 2648670,
             "city": "Gilfach Goch",
             "lat": 51.592129,
             "lng": -3.47296,
             "country": "GB"
             },
             {
             "id": 2648829,
             "city": "Garstang",
             "lat": 53.90081,
             "lng": -2.77417,
             "country": "GB"
             },
             {
             "id": 2648899,
             "city": "Gamlingay",
             "lat": 52.155609,
             "lng": -0.19303,
             "country": "GB"
             },
             {
             "id": 2648909,
             "city": "Galston",
             "lat": 55.600929,
             "lng": -4.38172,
             "country": "GB"
             },
             {
             "id": 2648954,
             "city": "Gaerwen",
             "lat": 53.221119,
             "lng": -4.27362,
             "country": "GB"
             },
             {
             "id": 2649000,
             "city": "Fulbourn",
             "lat": 52.18325,
             "lng": 0.22213,
             "country": "GB"
             },
             {
             "id": 2649029,
             "city": "Frodsham",
             "lat": 53.294849,
             "lng": -2.72745,
             "country": "GB"
             },
             {
             "id": 2649033,
             "city": "Frizington",
             "lat": 54.541851,
             "lng": -3.4946,
             "country": "GB"
             },
             {
             "id": 2649052,
             "city": "Frimley",
             "lat": 51.302879,
             "lng": -0.72527,
             "country": "GB"
             },
             {
             "id": 2649069,
             "city": "Freshwater",
             "lat": 50.692001,
             "lng": -1.50787,
             "country": "GB"
             },
             {
             "id": 2649076,
             "city": "Fremington",
             "lat": 51.066669,
             "lng": -4.11667,
             "country": "GB"
             },
             {
             "id": 2649083,
             "city": "Freckleton",
             "lat": 53.75433,
             "lng": -2.86489,
             "country": "GB"
             },
             {
             "id": 2649089,
             "city": "Fraserburgh",
             "lat": 57.687439,
             "lng": -2.01844,
             "country": "GB"
             },
             {
             "id": 2649104,
             "city": "Framlingham",
             "lat": 52.221169,
             "lng": 1.34205,
             "country": "GB"
             },
             {
             "id": 2649126,
             "city": "Fowey",
             "lat": 50.336342,
             "lng": -4.6386,
             "country": "GB"
             },
             {
             "id": 2649132,
             "city": "Four Marks",
             "lat": 51.107349,
             "lng": -1.04945,
             "country": "GB"
             },
             {
             "id": 2649169,
             "city": "Fort William",
             "lat": 56.816479,
             "lng": -5.11208,
             "country": "GB"
             },
             {
             "id": 2649170,
             "city": "Fortuneswell",
             "lat": 50.560299,
             "lng": -2.44243,
             "country": "GB"
             },
             {
             "id": 2649179,
             "city": "Forth",
             "lat": 55.765018,
             "lng": -3.68874,
             "country": "GB"
             },
             {
             "id": 2649192,
             "city": "Forres",
             "lat": 57.611252,
             "lng": -3.61078,
             "country": "GB"
             },
             {
             "id": 2649228,
             "city": "Fordingbridge",
             "lat": 50.927471,
             "lng": -1.79029,
             "country": "GB"
             },
             {
             "id": 2649295,
             "city": "Flitwick",
             "lat": 52.00338,
             "lng": -0.49472,
             "country": "GB"
             },
             {
             "id": 2649301,
             "city": "Flint",
             "lat": 53.244881,
             "lng": -3.13231,
             "country": "GB"
             },
             {
             "id": 2649349,
             "city": "Fitzwilliam",
             "lat": 53.632881,
             "lng": -1.3769,
             "country": "GB"
             },
             {
             "id": 2649372,
             "city": "Fishguard",
             "lat": 51.993759,
             "lng": -4.97631,
             "country": "GB"
             },
             {
             "id": 2649376,
             "city": "Fishburn",
             "lat": 54.682961,
             "lng": -1.43631,
             "country": "GB"
             },
             {
             "id": 2649428,
             "city": "Finedon",
             "lat": 52.339169,
             "lng": -0.65008,
             "country": "GB"
             },
             {
             "id": 2649463,
             "city": "Filey",
             "lat": 54.209999,
             "lng": -0.28917,
             "country": "GB"
             },
             {
             "id": 2649516,
             "city": "Ferryhill",
             "lat": 54.683331,
             "lng": -1.55,
             "country": "GB"
             },
             {
             "id": 2649528,
             "city": "Fernhill Heath",
             "lat": 52.230019,
             "lng": -2.19659,
             "country": "GB"
             },
             {
             "id": 2649531,
             "city": "Ferndale",
             "lat": 51.660561,
             "lng": -3.4475,
             "country": "GB"
             },
             {
             "id": 2649593,
             "city": "Featherstone",
             "lat": 53.67688,
             "lng": -1.35647,
             "country": "GB"
             },
             {
             "id": 2649609,
             "city": "Fazeley",
             "lat": 52.614429,
             "lng": -1.6985,
             "country": "GB"
             },
             {
             "id": 2649624,
             "city": "Fauldhouse",
             "lat": 55.827492,
             "lng": -3.70741,
             "country": "GB"
             },
             {
             "id": 2649652,
             "city": "Farnsfield",
             "lat": 53.10223,
             "lng": -1.0332,
             "country": "GB"
             },
             {
             "id": 2649657,
             "city": "Farnham Royal",
             "lat": 51.54208,
             "lng": -0.61584,
             "country": "GB"
             },
             {
             "id": 2649666,
             "city": "Farndon",
             "lat": 53.049999,
             "lng": -0.85,
             "country": "GB"
             },
             {
             "id": 2649686,
             "city": "Faringdon",
             "lat": 51.656441,
             "lng": -1.58676,
             "country": "GB"
             },
             {
             "id": 2649730,
             "city": "Fakenham",
             "lat": 52.82996,
             "lng": 0.8477,
             "country": "GB"
             },
             {
             "id": 2649741,
             "city": "Fairford",
             "lat": 51.70816,
             "lng": -1.78128,
             "country": "GB"
             },
             {
             "id": 2649774,
             "city": "Eynsham",
             "lat": 51.780769,
             "lng": -1.37454,
             "country": "GB"
             },
             {
             "id": 2649775,
             "city": "Eynsford",
             "lat": 51.367649,
             "lng": 0.21132,
             "country": "GB"
             },
             {
             "id": 2649784,
             "city": "Eyemouth",
             "lat": 55.8713,
             "lng": -2.0901,
             "country": "GB"
             },
             {
             "id": 2649788,
             "city": "Eye",
             "lat": 52.608002,
             "lng": -0.19209,
             "country": "GB"
             },
             {
             "id": 2649803,
             "city": "Exminster",
             "lat": 50.680752,
             "lng": -3.49706,
             "country": "GB"
             },
             {
             "id": 2649805,
             "city": "Exhall",
             "lat": 52.464642,
             "lng": -1.48144,
             "country": "GB"
             },
             {
             "id": 2649852,
             "city": "Euxton",
             "lat": 53.669899,
             "lng": -2.67615,
             "country": "GB"
             },
             {
             "id": 2649863,
             "city": "Etwall",
             "lat": 52.88353,
             "lng": -1.60023,
             "country": "GB"
             },
             {
             "id": 2649873,
             "city": "Eton",
             "lat": 51.488331,
             "lng": -0.60905,
             "country": "GB"
             },
             {
             "id": 2649984,
             "city": "Enniskillen",
             "lat": 54.346149,
             "lng": -7.64133,
             "country": "GB"
             },
             {
             "id": 2650000,
             "city": "Enderby",
             "lat": 52.58778,
             "lng": -1.20619,
             "country": "GB"
             },
             {
             "id": 2650007,
             "city": "Emneth",
             "lat": 52.642441,
             "lng": 0.20857,
             "country": "GB"
             },
             {
             "id": 2650023,
             "city": "Ely",
             "lat": 52.398571,
             "lng": 0.25811,
             "country": "GB"
             },
             {
             "id": 2650051,
             "city": "Elstead",
             "lat": 51.183109,
             "lng": -0.70724,
             "country": "GB"
             },
             {
             "id": 2650059,
             "city": "Elsenham",
             "lat": 51.91431,
             "lng": 0.22934,
             "country": "GB"
             },
             {
             "id": 2650068,
             "city": "Elmswell",
             "lat": 52.23616,
             "lng": 0.91247,
             "country": "GB"
             },
             {
             "id": 2650086,
             "city": "Ellon",
             "lat": 57.364052,
             "lng": -2.07313,
             "country": "GB"
             },
             {
             "id": 2650097,
             "city": "Ellesmere",
             "lat": 52.916672,
             "lng": -2.88333,
             "country": "GB"
             },
             {
             "id": 2650110,
             "city": "Elland",
             "lat": 53.685101,
             "lng": -1.83878,
             "country": "GB"
             },
             {
             "id": 2650174,
             "city": "Egremont",
             "lat": 54.479408,
             "lng": -3.52756,
             "country": "GB"
             },
             {
             "id": 2650184,
             "city": "Eglinton",
             "lat": 55.01667,
             "lng": -7.18333,
             "country": "GB"
             },
             {
             "id": 2650200,
             "city": "Edwinstowe",
             "lat": 53.194538,
             "lng": -1.06439,
             "country": "GB"
             },
             {
             "id": 2650244,
             "city": "Edenfield",
             "lat": 53.66674,
             "lng": -2.30481,
             "country": "GB"
             },
             {
             "id": 2650246,
             "city": "Edenbridge",
             "lat": 51.191719,
             "lng": 0.06729,
             "country": "GB"
             },
             {
             "id": 2650274,
             "city": "Eccleshall",
             "lat": 52.857891,
             "lng": -2.24971,
             "country": "GB"
             },
             {
             "id": 2650293,
             "city": "Eaton Socon",
             "lat": 52.217522,
             "lng": -0.28925,
             "country": "GB"
             },
             {
             "id": 2650295,
             "city": "Eaton Bray",
             "lat": 51.876968,
             "lng": -0.59167,
             "country": "GB"
             },
             {
             "id": 2650311,
             "city": "East Wittering",
             "lat": 50.769691,
             "lng": -0.87444,
             "country": "GB"
             },
             {
             "id": 2650341,
             "city": "Eastry",
             "lat": 51.246391,
             "lng": 1.30776,
             "country": "GB"
             },
             {
             "id": 2650357,
             "city": "East Peckham",
             "lat": 51.212341,
             "lng": 0.38624,
             "country": "GB"
             },
             {
             "id": 2650368,
             "city": "Easton",
             "lat": 50.533329,
             "lng": -2.45,
             "country": "GB"
             },
             {
             "id": 2650392,
             "city": "East Linton",
             "lat": 55.98737,
             "lng": -2.65682,
             "country": "GB"
             },
             {
             "id": 2650397,
             "city": "East Leake",
             "lat": 52.830151,
             "lng": -1.18103,
             "country": "GB"
             },
             {
             "id": 2650411,
             "city": "East Horsley",
             "lat": 51.273579,
             "lng": -0.43207,
             "country": "GB"
             },
             {
             "id": 2650424,
             "city": "East Harling",
             "lat": 52.438431,
             "lng": 0.93353,
             "country": "GB"
             },
             {
             "id": 2650489,
             "city": "East Calder",
             "lat": 55.891861,
             "lng": -3.46372,
             "country": "GB"
             },
             {
             "id": 2650519,
             "city": "Easington",
             "lat": 53.653591,
             "lng": 0.11501,
             "country": "GB"
             },
             {
             "id": 2650550,
             "city": "Earls Colne",
             "lat": 51.927441,
             "lng": 0.70107,
             "country": "GB"
             },
             {
             "id": 2650552,
             "city": "Earls Barton",
             "lat": 52.26627,
             "lng": -0.75248,
             "country": "GB"
             },
             {
             "id": 2650563,
             "city": "Earby",
             "lat": 53.915459,
             "lng": -2.14285,
             "country": "GB"
             },
             {
             "id": 2650572,
             "city": "Eaglesham",
             "lat": 55.741192,
             "lng": -4.27459,
             "country": "GB"
             },
             {
             "id": 2650584,
             "city": "Dyserth",
             "lat": 53.30032,
             "lng": -3.41262,
             "country": "GB"
             },
             {
             "id": 2650589,
             "city": "Dymchurch",
             "lat": 51.02544,
             "lng": 0.99392,
             "country": "GB"
             },
             {
             "id": 2650601,
             "city": "Dyce",
             "lat": 57.205219,
             "lng": -2.17676,
             "country": "GB"
             },
             {
             "id": 2650613,
             "city": "Dursley",
             "lat": 51.681389,
             "lng": -2.35333,
             "country": "GB"
             },
             {
             "id": 2650646,
             "city": "Duntocher",
             "lat": 55.92437,
             "lng": -4.41545,
             "country": "GB"
             },
             {
             "id": 2650673,
             "city": "Duns",
             "lat": 55.777039,
             "lng": -2.34575,
             "country": "GB"
             },
             {
             "id": 2650681,
             "city": "Dunoon",
             "lat": 55.94698,
             "lng": -4.92303,
             "country": "GB"
             },
             {
             "id": 2650686,
             "city": "Dunnington",
             "lat": 53.950001,
             "lng": -0.25,
             "country": "GB"
             },
             {
             "id": 2650712,
             "city": "Dunkirk",
             "lat": 51.291691,
             "lng": 0.97929,
             "country": "GB"
             },
             {
             "id": 2650718,
             "city": "Dunipace",
             "lat": 56.027,
             "lng": -3.91471,
             "country": "GB"
             },
             {
             "id": 2650721,
             "city": "Dunholme",
             "lat": 53.300671,
             "lng": -0.46541,
             "country": "GB"
             },
             {
             "id": 2650726,
             "city": "Dungiven",
             "lat": 54.933331,
             "lng": -6.91667,
             "country": "GB"
             },
             {
             "id": 2650729,
             "city": "Dungannon",
             "lat": 54.503441,
             "lng": -6.76723,
             "country": "GB"
             },
             {
             "id": 2650748,
             "city": "Dundonald",
             "lat": 55.566669,
             "lng": -4.58333,
             "country": "GB"
             },
             {
             "id": 2650761,
             "city": "Dunchurch",
             "lat": 52.33757,
             "lng": -1.29136,
             "country": "GB"
             },
             {
             "id": 2650769,
             "city": "Dunblane",
             "lat": 56.188431,
             "lng": -3.96417,
             "country": "GB"
             },
             {
             "id": 2650836,
             "city": "Duffield",
             "lat": 52.986271,
             "lng": -1.48865,
             "country": "GB"
             },
             {
             "id": 2650976,
             "city": "Dromore",
             "lat": 54.51667,
             "lng": -7.46667,
             "country": "GB"
             },
             {
             "id": 2650996,
             "city": "Dreghorn",
             "lat": 55.599998,
             "lng": -4.61667,
             "country": "GB"
             },
             {
             "id": 2651020,
             "city": "Downton",
             "lat": 51,
             "lng": -1.73333,
             "country": "GB"
             },
             {
             "id": 2651023,
             "city": "Downpatrick",
             "lat": 54.326328,
             "lng": -5.70345,
             "country": "GB"
             },
             {
             "id": 2651030,
             "city": "Downham Market",
             "lat": 52.60289,
             "lng": 0.37899,
             "country": "GB"
             },
             {
             "id": 2651117,
             "city": "Donisthorpe",
             "lat": 52.72401,
             "lng": -1.538,
             "country": "GB"
             },
             {
             "id": 2651119,
             "city": "Donington",
             "lat": 52.90461,
             "lng": -0.20505,
             "country": "GB"
             },
             {
             "id": 2651133,
             "city": "Donaghadee",
             "lat": 54.633331,
             "lng": -5.53333,
             "country": "GB"
             },
             {
             "id": 2651151,
             "city": "Dollar",
             "lat": 56.162449,
             "lng": -3.67135,
             "country": "GB"
             },
             {
             "id": 2651154,
             "city": "Dolgellau",
             "lat": 52.743198,
             "lng": -3.88508,
             "country": "GB"
             },
             {
             "id": 2651172,
             "city": "Dodworth",
             "lat": 53.54306,
             "lng": -1.52779,
             "country": "GB"
             },
             {
             "id": 2651214,
             "city": "Diss",
             "lat": 52.376751,
             "lng": 1.1091,
             "country": "GB"
             },
             {
             "id": 2651215,
             "city": "Disley",
             "lat": 53.35865,
             "lng": -2.03848,
             "country": "GB"
             },
             {
             "id": 2651245,
             "city": "Dingwall",
             "lat": 57.59531,
             "lng": -4.42721,
             "country": "GB"
             },
             {
             "id": 2651248,
             "city": "Dinas Powys",
             "lat": 51.43486,
             "lng": -3.21398,
             "country": "GB"
             },
             {
             "id": 2651294,
             "city": "Devizes",
             "lat": 51.350842,
             "lng": -1.99421,
             "country": "GB"
             },
             {
             "id": 2651309,
             "city": "Desford",
             "lat": 52.62598,
             "lng": -1.29395,
             "country": "GB"
             },
             {
             "id": 2651366,
             "city": "Denny",
             "lat": 56.023499,
             "lng": -3.90812,
             "country": "GB"
             },
             {
             "id": 2651374,
             "city": "Denholme",
             "lat": 53.801891,
             "lng": -1.89503,
             "country": "GB"
             },
             {
             "id": 2651378,
             "city": "Denham",
             "lat": 51.566669,
             "lng": -0.5,
             "country": "GB"
             },
             {
             "id": 2651382,
             "city": "Denby Dale",
             "lat": 53.572281,
             "lng": -1.65895,
             "country": "GB"
             },
             {
             "id": 2651407,
             "city": "Deganwy",
             "lat": 53.304459,
             "lng": -3.82735,
             "country": "GB"
             },
             {
             "id": 2651461,
             "city": "Deanshanger",
             "lat": 52.049961,
             "lng": -0.88663,
             "country": "GB"
             },
             {
             "id": 2651474,
             "city": "Dawlish",
             "lat": 50.581181,
             "lng": -3.46644,
             "country": "GB"
             },
             {
             "id": 2651492,
             "city": "Datchet",
             "lat": 51.483898,
             "lng": -0.57893,
             "country": "GB"
             },
             {
             "id": 2651496,
             "city": "Darvel",
             "lat": 55.60976,
             "lng": -4.28142,
             "country": "GB"
             },
             {
             "id": 2651520,
             "city": "Darfield",
             "lat": 53.533901,
             "lng": -1.37595,
             "country": "GB"
             },
             {
             "id": 2651521,
             "city": "Daresbury",
             "lat": 53.341839,
             "lng": -2.635,
             "country": "GB"
             },
             {
             "id": 2651532,
             "city": "Danbury",
             "lat": 51.71645,
             "lng": 0.58245,
             "country": "GB"
             },
             {
             "id": 2651551,
             "city": "Dalton in Furness",
             "lat": 54.150002,
             "lng": -3.16667,
             "country": "GB"
             },
             {
             "id": 2651587,
             "city": "Dalkeith",
             "lat": 55.89341,
             "lng": -3.06381,
             "country": "GB"
             },
             {
             "id": 2651609,
             "city": "Dalbeattie",
             "lat": 54.932781,
             "lng": -3.82271,
             "country": "GB"
             },
             {
             "id": 2651662,
             "city": "Cuxton",
             "lat": 51.374298,
             "lng": 0.45688,
             "country": "GB"
             },
             {
             "id": 2651685,
             "city": "Currie",
             "lat": 55.8964,
             "lng": -3.30845,
             "country": "GB"
             },
             {
             "id": 2651698,
             "city": "Cupar",
             "lat": 56.31876,
             "lng": -3.01204,
             "country": "GB"
             },
             {
             "id": 2651706,
             "city": "Cumnock",
             "lat": 55.454449,
             "lng": -4.26644,
             "country": "GB"
             },
             {
             "id": 2651732,
             "city": "Culmore",
             "lat": 55.049999,
             "lng": -7.26667,
             "country": "GB"
             },
             {
             "id": 2651738,
             "city": "Cullybackey",
             "lat": 54.888748,
             "lng": -6.34701,
             "country": "GB"
             },
             {
             "id": 2651739,
             "city": "Cullompton",
             "lat": 50.855301,
             "lng": -3.39268,
             "country": "GB"
             },
             {
             "id": 2651748,
             "city": "Cullingworth",
             "lat": 53.82444,
             "lng": -1.8973,
             "country": "GB"
             },
             {
             "id": 2651763,
             "city": "Culcheth",
             "lat": 53.451099,
             "lng": -2.52104,
             "country": "GB"
             },
             {
             "id": 2651777,
             "city": "Cuffley",
             "lat": 51.707989,
             "lng": -0.11209,
             "country": "GB"
             },
             {
             "id": 2651778,
             "city": "Cudworth",
             "lat": 53.571308,
             "lng": -1.41595,
             "country": "GB"
             },
             {
             "id": 2651788,
             "city": "Cuckfield",
             "lat": 51.010731,
             "lng": -0.14068,
             "country": "GB"
             },
             {
             "id": 2651804,
             "city": "Crumlin",
             "lat": 54.624321,
             "lng": -6.2156,
             "country": "GB"
             },
             {
             "id": 2651843,
             "city": "Crowland",
             "lat": 52.675709,
             "lng": -0.16849,
             "country": "GB"
             },
             {
             "id": 2651857,
             "city": "Croston",
             "lat": 53.66217,
             "lng": -2.77523,
             "country": "GB"
             },
             {
             "id": 2651870,
             "city": "Crosshouse",
             "lat": 55.612579,
             "lng": -4.55091,
             "country": "GB"
             },
             {
             "id": 2651872,
             "city": "Cross Hands",
             "lat": 51.79306,
             "lng": -4.0875,
             "country": "GB"
             },
             {
             "id": 2651873,
             "city": "Crossgates",
             "lat": 56.066669,
             "lng": -3.38333,
             "country": "GB"
             },
             {
             "id": 2651878,
             "city": "Crossford",
             "lat": 56.049999,
             "lng": -3.5,
             "country": "GB"
             },
             {
             "id": 2651915,
             "city": "Crook",
             "lat": 54.700001,
             "lng": -1.73333,
             "country": "GB"
             },
             {
             "id": 2651927,
             "city": "Cromford",
             "lat": 53.108479,
             "lng": -1.56014,
             "country": "GB"
             },
             {
             "id": 2651948,
             "city": "Crofton",
             "lat": 53.656391,
             "lng": -1.42968,
             "country": "GB"
             },
             {
             "id": 2651971,
             "city": "Cringleford",
             "lat": 52.60482,
             "lng": 1.24334,
             "country": "GB"
             },
             {
             "id": 2651985,
             "city": "Cricklade",
             "lat": 51.64061,
             "lng": -1.85738,
             "country": "GB"
             },
             {
             "id": 2652000,
             "city": "Crewkerne",
             "lat": 50.88298,
             "lng": -2.79588,
             "country": "GB"
             },
             {
             "id": 2652007,
             "city": "Creswell",
             "lat": 53.25,
             "lng": -1.21667,
             "country": "GB"
             },
             {
             "id": 2652034,
             "city": "Crediton",
             "lat": 50.783329,
             "lng": -3.65,
             "country": "GB"
             },
             {
             "id": 2652035,
             "city": "Credenhill",
             "lat": 52.083511,
             "lng": -2.80804,
             "country": "GB"
             },
             {
             "id": 2652061,
             "city": "Craven Arms",
             "lat": 52.443081,
             "lng": -2.83562,
             "country": "GB"
             },
             {
             "id": 2652082,
             "city": "Cranleigh",
             "lat": 51.14209,
             "lng": -0.48374,
             "country": "GB"
             },
             {
             "id": 2652087,
             "city": "Cranfield",
             "lat": 52.068691,
             "lng": -0.60884,
             "country": "GB"
             },
             {
             "id": 2652088,
             "city": "Cranbrook",
             "lat": 51.096619,
             "lng": 0.53567,
             "country": "GB"
             },
             {
             "id": 2652176,
             "city": "Coylton",
             "lat": 55.445278,
             "lng": -4.5195,
             "country": "GB"
             },
             {
             "id": 2652181,
             "city": "Coxhoe",
             "lat": 54.714748,
             "lng": -1.50356,
             "country": "GB"
             },
             {
             "id": 2652198,
             "city": "Cowie",
             "lat": 56.066669,
             "lng": -3.86667,
             "country": "GB"
             },
             {
             "id": 2652207,
             "city": "Cowdenbeath",
             "lat": 56.111938,
             "lng": -3.34426,
             "country": "GB"
             },
             {
             "id": 2652209,
             "city": "Cowbridge",
             "lat": 51.460281,
             "lng": -3.44167,
             "country": "GB"
             },
             {
             "id": 2652236,
             "city": "Coupar Angus",
             "lat": 56.545521,
             "lng": -3.26774,
             "country": "GB"
             },
             {
             "id": 2652239,
             "city": "Countesthorpe",
             "lat": 52.553791,
             "lng": -1.14526,
             "country": "GB"
             },
             {
             "id": 2652269,
             "city": "Cottenham",
             "lat": 52.28743,
             "lng": 0.1254,
             "country": "GB"
             },
             {
             "id": 2652282,
             "city": "Cotgrave",
             "lat": 52.908588,
             "lng": -1.03752,
             "country": "GB"
             },
             {
             "id": 2652289,
             "city": "Costessey",
             "lat": 52.659142,
             "lng": 1.2097,
             "country": "GB"
             },
             {
             "id": 2652294,
             "city": "Cosham",
             "lat": 50.846539,
             "lng": -1.06344,
             "country": "GB"
             },
             {
             "id": 2652298,
             "city": "Cosby",
             "lat": 52.55127,
             "lng": -1.19395,
             "country": "GB"
             },
             {
             "id": 2652318,
             "city": "Corsham",
             "lat": 51.43433,
             "lng": -2.18437,
             "country": "GB"
             },
             {
             "id": 2652382,
             "city": "Corbridge",
             "lat": 54.973652,
             "lng": -2.01798,
             "country": "GB"
             },
             {
             "id": 2652389,
             "city": "Coppull",
             "lat": 53.625271,
             "lng": -2.65854,
             "country": "GB"
             },
             {
             "id": 2652396,
             "city": "Copmanthorpe",
             "lat": 53.914188,
             "lng": -1.14209,
             "country": "GB"
             },
             {
             "id": 2652423,
             "city": "Cookham",
             "lat": 51.559361,
             "lng": -0.7081,
             "country": "GB"
             },
             {
             "id": 2652426,
             "city": "Conwy",
             "lat": 53.280769,
             "lng": -3.83039,
             "country": "GB"
             },
             {
             "id": 2652439,
             "city": "Conon Bridge",
             "lat": 57.566299,
             "lng": -4.43678,
             "country": "GB"
             },
             {
             "id": 2652461,
             "city": "Coningsby",
             "lat": 53.10598,
             "lng": -0.17595,
             "country": "GB"
             },
             {
             "id": 2652463,
             "city": "Congresbury",
             "lat": 51.371349,
             "lng": -2.81018,
             "country": "GB"
             },
             {
             "id": 2652478,
             "city": "Comrie",
             "lat": 56.379101,
             "lng": -3.9949,
             "country": "GB"
             },
             {
             "id": 2652491,
             "city": "Compton",
             "lat": 51.020191,
             "lng": -1.33992,
             "country": "GB"
             },
             {
             "id": 2652502,
             "city": "Comberton",
             "lat": 52.187092,
             "lng": 0.01905,
             "country": "GB"
             },
             {
             "id": 2652505,
             "city": "Comber",
             "lat": 54.54937,
             "lng": -5.74379,
             "country": "GB"
             },
             {
             "id": 2652508,
             "city": "Combe Martin",
             "lat": 51.19873,
             "lng": -4.02343,
             "country": "GB"
             },
             {
             "id": 2652516,
             "city": "Colwich",
             "lat": 52.78764,
             "lng": -1.98206,
             "country": "GB"
             },
             {
             "id": 2652525,
             "city": "Coltishall",
             "lat": 52.728039,
             "lng": 1.36653,
             "country": "GB"
             },
             {
             "id": 2652546,
             "city": "Colnbrook",
             "lat": 51.483841,
             "lng": -0.52142,
             "country": "GB"
             },
             {
             "id": 2652558,
             "city": "Collingham",
             "lat": 53.911671,
             "lng": -1.41174,
             "country": "GB"
             },
             {
             "id": 2652577,
             "city": "Colinton",
             "lat": 55.907391,
             "lng": -3.25609,
             "country": "GB"
             },
             {
             "id": 2652585,
             "city": "Colerne",
             "lat": 51.438332,
             "lng": -2.2628,
             "country": "GB"
             },
             {
             "id": 2652591,
             "city": "Coleford",
             "lat": 51.799999,
             "lng": -2.6,
             "country": "GB"
             },
             {
             "id": 2652640,
             "city": "Coggeshall",
             "lat": 51.87077,
             "lng": 0.68536,
             "country": "GB"
             },
             {
             "id": 2652653,
             "city": "Codsall",
             "lat": 52.62989,
             "lng": -2.20148,
             "country": "GB"
             },
             {
             "id": 2652656,
             "city": "Codicote",
             "lat": 51.850521,
             "lng": -0.2367,
             "country": "GB"
             },
             {
             "id": 2652681,
             "city": "Cockenzie",
             "lat": 55.968231,
             "lng": -2.96562,
             "country": "GB"
             },
             {
             "id": 2652695,
             "city": "Coates",
             "lat": 51.7075,
             "lng": -2.03389,
             "country": "GB"
             },
             {
             "id": 2652703,
             "city": "Coalisland",
             "lat": 54.541801,
             "lng": -6.70166,
             "country": "GB"
             },
             {
             "id": 2652739,
             "city": "Clutton",
             "lat": 51.329441,
             "lng": -2.54306,
             "country": "GB"
             },
             {
             "id": 2652771,
             "city": "Clowne",
             "lat": 53.27449,
             "lng": -1.26406,
             "country": "GB"
             },
             {
             "id": 2652790,
             "city": "Clophill",
             "lat": 52.027271,
             "lng": -0.42377,
             "country": "GB"
             },
             {
             "id": 2652849,
             "city": "Cliffe",
             "lat": 51.462238,
             "lng": 0.49833,
             "country": "GB"
             },
             {
             "id": 2652857,
             "city": "Cleveleys",
             "lat": 53.877499,
             "lng": -3.03987,
             "country": "GB"
             },
             {
             "id": 2652874,
             "city": "Cleobury Mortimer",
             "lat": 52.378529,
             "lng": -2.48196,
             "country": "GB"
             },
             {
             "id": 2652876,
             "city": "Clenchwarton",
             "lat": 52.756039,
             "lng": 0.3579,
             "country": "GB"
             },
             {
             "id": 2652891,
             "city": "Cleator Moor",
             "lat": 54.521431,
             "lng": -3.5159,
             "country": "GB"
             },
             {
             "id": 2652898,
             "city": "Clayton West",
             "lat": 53.595009,
             "lng": -1.61107,
             "country": "GB"
             },
             {
             "id": 2652899,
             "city": "Clayton le Moors",
             "lat": 53.76667,
             "lng": -2.38333,
             "country": "GB"
             },
             {
             "id": 2652908,
             "city": "Claydon",
             "lat": 52.148129,
             "lng": -1.33295,
             "country": "GB"
             },
             {
             "id": 2652950,
             "city": "Clapham",
             "lat": 52.160851,
             "lng": -0.49529,
             "country": "GB"
             },
             {
             "id": 2652976,
             "city": "Clackmannan",
             "lat": 56.10743,
             "lng": -3.75098,
             "country": "GB"
             },
             {
             "id": 2653021,
             "city": "Church Stretton",
             "lat": 52.537781,
             "lng": -2.80149,
             "country": "GB"
             },
             {
             "id": 2653049,
             "city": "Church",
             "lat": 53.75177,
             "lng": -2.39121,
             "country": "GB"
             },
             {
             "id": 2653056,
             "city": "Chudleigh",
             "lat": 50.604961,
             "lng": -3.60031,
             "country": "GB"
             },
             {
             "id": 2653060,
             "city": "Chryston",
             "lat": 55.902802,
             "lng": -4.10759,
             "country": "GB"
             },
             {
             "id": 2653085,
             "city": "Chorleywood",
             "lat": 51.650002,
             "lng": -0.48333,
             "country": "GB"
             },
             {
             "id": 2653095,
             "city": "Cholsey",
             "lat": 51.5728,
             "lng": -1.15356,
             "country": "GB"
             },
             {
             "id": 2653109,
             "city": "Chobham",
             "lat": 51.34584,
             "lng": -0.60459,
             "country": "GB"
             },
             {
             "id": 2653131,
             "city": "Chirk",
             "lat": 52.93586,
             "lng": -3.05738,
             "country": "GB"
             },
             {
             "id": 2653138,
             "city": "Chipping Ongar",
             "lat": 51.703789,
             "lng": 0.24548,
             "country": "GB"
             },
             {
             "id": 2653139,
             "city": "Chipping Norton",
             "lat": 51.94109,
             "lng": -1.5453,
             "country": "GB"
             },
             {
             "id": 2653140,
             "city": "Chipping Campden",
             "lat": 52.049641,
             "lng": -1.7767,
             "country": "GB"
             },
             {
             "id": 2653145,
             "city": "Chinnor",
             "lat": 51.701771,
             "lng": -0.91161,
             "country": "GB"
             },
             {
             "id": 2653178,
             "city": "Chigwell",
             "lat": 51.619991,
             "lng": 0.07596,
             "country": "GB"
             },
             {
             "id": 2653183,
             "city": "Chiddingfold",
             "lat": 51.11866,
             "lng": -0.62262,
             "country": "GB"
             },
             {
             "id": 2653188,
             "city": "Chickerell",
             "lat": 50.62429,
             "lng": -2.5028,
             "country": "GB"
             },
             {
             "id": 2653239,
             "city": "Chertsey",
             "lat": 51.388119,
             "lng": -0.50782,
             "country": "GB"
             },
             {
             "id": 2653281,
             "city": "Cheddar",
             "lat": 51.275372,
             "lng": -2.77662,
             "country": "GB"
             },
             {
             "id": 2653292,
             "city": "Cheadle",
             "lat": 52.98333,
             "lng": -1.98333,
             "country": "GB"
             },
             {
             "id": 2653298,
             "city": "Chatteris",
             "lat": 52.454048,
             "lng": 0.05006,
             "country": "GB"
             },
             {
             "id": 2653307,
             "city": "Chasetown",
             "lat": 52.672321,
             "lng": -1.92535,
             "country": "GB"
             },
             {
             "id": 2653310,
             "city": "Chartham",
             "lat": 51.256199,
             "lng": 1.01836,
             "country": "GB"
             },
             {
             "id": 2653324,
             "city": "Charlton Kings",
             "lat": 51.883739,
             "lng": -2.04239,
             "country": "GB"
             },
             {
             "id": 2653339,
             "city": "Charlbury",
             "lat": 51.8727,
             "lng": -1.48247,
             "country": "GB"
             },
             {
             "id": 2653343,
             "city": "Charfield",
             "lat": 51.62722,
             "lng": -2.40667,
             "country": "GB"
             },
             {
             "id": 2653357,
             "city": "Chapel Saint Leonards",
             "lat": 53.216671,
             "lng": 0.31667,
             "country": "GB"
             },
             {
             "id": 2653366,
             "city": "Chapelhall",
             "lat": 55.843491,
             "lng": -3.94881,
             "country": "GB"
             },
             {
             "id": 2653391,
             "city": "Chalgrove",
             "lat": 51.664761,
             "lng": -1.0764,
             "country": "GB"
             },
             {
             "id": 2653392,
             "city": "Chalford",
             "lat": 51.72583,
             "lng": -2.15139,
             "country": "GB"
             },
             {
             "id": 2653394,
             "city": "Chalfont Saint Giles",
             "lat": 51.63184,
             "lng": -0.57026,
             "country": "GB"
             },
             {
             "id": 2653499,
             "city": "Catterick",
             "lat": 54.37542,
             "lng": -1.63328,
             "country": "GB"
             },
             {
             "id": 2653500,
             "city": "Catterall",
             "lat": 53.87965,
             "lng": -2.76478,
             "country": "GB"
             },
             {
             "id": 2653504,
             "city": "Catrine",
             "lat": 55.504219,
             "lng": -4.33026,
             "country": "GB"
             },
             {
             "id": 2653505,
             "city": "Caton",
             "lat": 54.066669,
             "lng": -2.71667,
             "country": "GB"
             },
             {
             "id": 2653534,
             "city": "Castlewellan",
             "lat": 54.26667,
             "lng": -5.93333,
             "country": "GB"
             },
             {
             "id": 2653550,
             "city": "Castleside",
             "lat": 54.83429,
             "lng": -1.87849,
             "country": "GB"
             },
             {
             "id": 2653594,
             "city": "Castlederg",
             "lat": 54.700001,
             "lng": -7.6,
             "country": "GB"
             },
             {
             "id": 2653595,
             "city": "Castledawson",
             "lat": 54.777229,
             "lng": -6.56227,
             "country": "GB"
             },
             {
             "id": 2653601,
             "city": "Castle Cary",
             "lat": 51.09,
             "lng": -2.51417,
             "country": "GB"
             },
             {
             "id": 2653656,
             "city": "Carryduff",
             "lat": 54.51799,
             "lng": -5.88713,
             "country": "GB"
             },
             {
             "id": 2653704,
             "city": "Carnoustie",
             "lat": 56.501362,
             "lng": -2.70905,
             "country": "GB"
             },
             {
             "id": 2653756,
             "city": "Carluke",
             "lat": 55.73595,
             "lng": -3.83019,
             "country": "GB"
             },
             {
             "id": 2653824,
             "city": "Cardenden",
             "lat": 56.143101,
             "lng": -3.25687,
             "country": "GB"
             },
             {
             "id": 2653825,
             "city": "Carcroft",
             "lat": 53.582821,
             "lng": -1.17648,
             "country": "GB"
             },
             {
             "id": 2653845,
             "city": "Capel Saint Mary",
             "lat": 52.003689,
             "lng": 1.04482,
             "country": "GB"
             },
             {
             "id": 2653910,
             "city": "Campsall",
             "lat": 53.619171,
             "lng": -1.18002,
             "country": "GB"
             },
             {
             "id": 2653915,
             "city": "Campbeltown",
             "lat": 55.425831,
             "lng": -5.60764,
             "country": "GB"
             },
             {
             "id": 2653974,
             "city": "Calne",
             "lat": 51.438789,
             "lng": -2.00571,
             "country": "GB"
             },
             {
             "id": 2653981,
             "city": "Callington",
             "lat": 50.501469,
             "lng": -4.31314,
             "country": "GB"
             },
             {
             "id": 2653989,
             "city": "Callander",
             "lat": 56.244099,
             "lng": -4.21637,
             "country": "GB"
             },
             {
             "id": 2654014,
             "city": "Caldicot",
             "lat": 51.586609,
             "lng": -2.75736,
             "country": "GB"
             },
             {
             "id": 2654020,
             "city": "Caldercruix",
             "lat": 55.888859,
             "lng": -3.88664,
             "country": "GB"
             },
             {
             "id": 2654043,
             "city": "Caistor",
             "lat": 53.496731,
             "lng": -0.31538,
             "country": "GB"
             },
             {
             "id": 2654044,
             "city": "Caister-on-Sea",
             "lat": 52.64809,
             "lng": 1.72648,
             "country": "GB"
             },
             {
             "id": 2654054,
             "city": "Cairnryan",
             "lat": 54.971039,
             "lng": -5.01982,
             "country": "GB"
             },
             {
             "id": 2654066,
             "city": "Cairneyhill",
             "lat": 56.059078,
             "lng": -3.53518,
             "country": "GB"
             },
             {
             "id": 2654093,
             "city": "Caerleon",
             "lat": 51.60952,
             "lng": -2.95378,
             "country": "GB"
             },
             {
             "id": 2654095,
             "city": "Caergwrle",
             "lat": 53.109531,
             "lng": -3.03808,
             "country": "GB"
             },
             {
             "id": 2654107,
             "city": "Cadnam",
             "lat": 50.920471,
             "lng": -1.5797,
             "country": "GB"
             },
             {
             "id": 2654115,
             "city": "Caddington",
             "lat": 51.866211,
             "lng": -0.45679,
             "country": "GB"
             },
             {
             "id": 2654194,
             "city": "Burwell",
             "lat": 53.293049,
             "lng": 0.03463,
             "country": "GB"
             },
             {
             "id": 2654199,
             "city": "Burtonwood",
             "lat": 53.429482,
             "lng": -2.65852,
             "country": "GB"
             },
             {
             "id": 2654201,
             "city": "Burton upon Stather",
             "lat": 53.649109,
             "lng": -0.68453,
             "country": "GB"
             },
             {
             "id": 2654208,
             "city": "Burton Latimer",
             "lat": 52.363682,
             "lng": -0.67853,
             "country": "GB"
             },
             {
             "id": 2654209,
             "city": "Burton Joyce",
             "lat": 52.988251,
             "lng": -1.03407,
             "country": "GB"
             },
             {
             "id": 2654216,
             "city": "Burton",
             "lat": 53.26667,
             "lng": -0.56667,
             "country": "GB"
             },
             {
             "id": 2654226,
             "city": "Bursledon",
             "lat": 50.886581,
             "lng": -1.31596,
             "country": "GB"
             },
             {
             "id": 2654229,
             "city": "Burry Port",
             "lat": 51.684349,
             "lng": -4.24687,
             "country": "GB"
             },
             {
             "id": 2654255,
             "city": "Burntisland",
             "lat": 56.062481,
             "lng": -3.23176,
             "country": "GB"
             },
             {
             "id": 2654260,
             "city": "Burnopfield",
             "lat": 54.906239,
             "lng": -1.72486,
             "country": "GB"
             },
             {
             "id": 2654265,
             "city": "Burniston",
             "lat": 54.323849,
             "lng": -0.44813,
             "country": "GB"
             },
             {
             "id": 2654270,
             "city": "Burnham on Crouch",
             "lat": 51.632721,
             "lng": 0.81488,
             "country": "GB"
             },
             {
             "id": 2654285,
             "city": "Burley in Wharfedale",
             "lat": 53.910198,
             "lng": -1.75798,
             "country": "GB"
             },
             {
             "id": 2654298,
             "city": "Burgh le Marsh",
             "lat": 53.161579,
             "lng": 0.24484,
             "country": "GB"
             },
             {
             "id": 2654323,
             "city": "Buntingford",
             "lat": 51.946121,
             "lng": -0.01841,
             "country": "GB"
             },
             {
             "id": 2654327,
             "city": "Bungay",
             "lat": 52.454342,
             "lng": 1.43818,
             "country": "GB"
             },
             {
             "id": 2654357,
             "city": "Bulford",
             "lat": 51.189301,
             "lng": -1.76009,
             "country": "GB"
             },
             {
             "id": 2654359,
             "city": "Builth Wells",
             "lat": 52.149399,
             "lng": -3.40469,
             "country": "GB"
             },
             {
             "id": 2654371,
             "city": "Bugle",
             "lat": 50.395771,
             "lng": -4.79334,
             "country": "GB"
             },
             {
             "id": 2654372,
             "city": "Bugbrooke",
             "lat": 52.21006,
             "lng": -1.01304,
             "country": "GB"
             },
             {
             "id": 2654376,
             "city": "Budleigh Salterton",
             "lat": 50.629829,
             "lng": -3.32181,
             "country": "GB"
             },
             {
             "id": 2654380,
             "city": "Bude",
             "lat": 50.824348,
             "lng": -4.5413,
             "country": "GB"
             },
             {
             "id": 2654411,
             "city": "Buckie",
             "lat": 57.675701,
             "lng": -2.96238,
             "country": "GB"
             },
             {
             "id": 2654416,
             "city": "Buckfastleigh",
             "lat": 50.481319,
             "lng": -3.77913,
             "country": "GB"
             },
             {
             "id": 2654419,
             "city": "Buckden",
             "lat": 52.294151,
             "lng": -0.24912,
             "country": "GB"
             },
             {
             "id": 2654437,
             "city": "Brynmawr",
             "lat": 51.799999,
             "lng": -3.18333,
             "country": "GB"
             },
             {
             "id": 2654447,
             "city": "Brynamman",
             "lat": 51.799999,
             "lng": -3.86667,
             "country": "GB"
             },
             {
             "id": 2654454,
             "city": "Bruton",
             "lat": 51.112499,
             "lng": -2.45278,
             "country": "GB"
             },
             {
             "id": 2654461,
             "city": "Brundall",
             "lat": 52.622681,
             "lng": 1.43876,
             "country": "GB"
             },
             {
             "id": 2654480,
             "city": "Broxburn",
             "lat": 55.934151,
             "lng": -3.47133,
             "country": "GB"
             },
             {
             "id": 2654481,
             "city": "Broxbourne",
             "lat": 51.74712,
             "lng": -0.01923,
             "country": "GB"
             },
             {
             "id": 2654502,
             "city": "Broughton Astley",
             "lat": 52.52787,
             "lng": -1.21768,
             "country": "GB"
             },
             {
             "id": 2654509,
             "city": "Broughton",
             "lat": 52.366669,
             "lng": -0.76667,
             "country": "GB"
             },
             {
             "id": 2654515,
             "city": "Broughshane",
             "lat": 54.892601,
             "lng": -6.20899,
             "country": "GB"
             },
             {
             "id": 2654532,
             "city": "Brough",
             "lat": 53.700001,
             "lng": -0.58333,
             "country": "GB"
             },
             {
             "id": 2654539,
             "city": "Broseley",
             "lat": 52.613209,
             "lng": -2.48269,
             "country": "GB"
             },
             {
             "id": 2654589,
             "city": "Bromham",
             "lat": 52.145081,
             "lng": -0.52906,
             "country": "GB"
             },
             {
             "id": 2654615,
             "city": "Brockenhurst",
             "lat": 50.819359,
             "lng": -1.57303,
             "country": "GB"
             },
             {
             "id": 2654628,
             "city": "Broadway",
             "lat": 52.033329,
             "lng": -1.85,
             "country": "GB"
             },
             {
             "id": 2654630,
             "city": "Broadwater",
             "lat": 50.816669,
             "lng": -0.36667,
             "country": "GB"
             },
             {
             "id": 2654660,
             "city": "Brixworth",
             "lat": 52.329121,
             "lng": -0.9035,
             "country": "GB"
             },
             {
             "id": 2654711,
             "city": "Brightlingsea",
             "lat": 51.811642,
             "lng": 1.02336,
             "country": "GB"
             },
             {
             "id": 2654721,
             "city": "Brigg",
             "lat": 53.55201,
             "lng": -0.49214,
             "country": "GB"
             },
             {
             "id": 2654725,
             "city": "Brierfield",
             "lat": 53.82468,
             "lng": -2.23415,
             "country": "GB"
             },
             {
             "id": 2654726,
             "city": "Bridport",
             "lat": 50.733799,
             "lng": -2.75831,
             "country": "GB"
             },
             {
             "id": 2654731,
             "city": "Bridgnorth",
             "lat": 52.53661,
             "lng": -2.42033,
             "country": "GB"
             },
             {
             "id": 2654736,
             "city": "Bridge of Weir",
             "lat": 55.849998,
             "lng": -4.58333,
             "country": "GB"
             },
             {
             "id": 2654742,
             "city": "Bridge of Earn",
             "lat": 56.348419,
             "lng": -3.4065,
             "country": "GB"
             },
             {
             "id": 2654747,
             "city": "Bridge of Allan",
             "lat": 56.154018,
             "lng": -3.94631,
             "country": "GB"
             },
             {
             "id": 2654767,
             "city": "Brewood",
             "lat": 52.67712,
             "lng": -2.17414,
             "country": "GB"
             },
             {
             "id": 2654787,
             "city": "Brentford",
             "lat": 51.486191,
             "lng": -0.3083,
             "country": "GB"
             },
             {
             "id": 2654807,
             "city": "Bredon",
             "lat": 52.03046,
             "lng": -2.11,
             "country": "GB"
             },
             {
             "id": 2654824,
             "city": "Brechin",
             "lat": 56.729931,
             "lng": -2.65729,
             "country": "GB"
             },
             {
             "id": 2654832,
             "city": "Bream",
             "lat": 51.748219,
             "lng": -2.57747,
             "country": "GB"
             },
             {
             "id": 2654848,
             "city": "Brayton",
             "lat": 53.765099,
             "lng": -1.08921,
             "country": "GB"
             },
             {
             "id": 2654858,
             "city": "Braunton",
             "lat": 51.108471,
             "lng": -4.16131,
             "country": "GB"
             },
             {
             "id": 2654883,
             "city": "Bransgore",
             "lat": 50.781528,
             "lng": -1.73771,
             "country": "GB"
             },
             {
             "id": 2654897,
             "city": "Brandon",
             "lat": 52.381989,
             "lng": -1.39956,
             "country": "GB"
             },
             {
             "id": 2654915,
             "city": "Brampton",
             "lat": 54.950001,
             "lng": -2.73333,
             "country": "GB"
             },
             {
             "id": 2654919,
             "city": "Brampton",
             "lat": 52.320389,
             "lng": -0.22007,
             "country": "GB"
             },
             {
             "id": 2654924,
             "city": "Bramley",
             "lat": 51.194511,
             "lng": -0.55927,
             "country": "GB"
             },
             {
             "id": 2654925,
             "city": "Bramhope",
             "lat": 53.884892,
             "lng": -1.61641,
             "country": "GB"
             },
             {
             "id": 2654991,
             "city": "Bradford-on-Avon",
             "lat": 51.347721,
             "lng": -2.25065,
             "country": "GB"
             },
             {
             "id": 2655012,
             "city": "Brackley",
             "lat": 52.033329,
             "lng": -1.15,
             "country": "GB"
             },
             {
             "id": 2655043,
             "city": "Boxgrove",
             "lat": 50.858841,
             "lng": -0.7136,
             "country": "GB"
             },
             {
             "id": 2655069,
             "city": "Bowdon",
             "lat": 53.376438,
             "lng": -2.36532,
             "country": "GB"
             },
             {
             "id": 2655078,
             "city": "Bovington Camp",
             "lat": 50.697819,
             "lng": -2.23506,
             "country": "GB"
             },
             {
             "id": 2655079,
             "city": "Bovingdon",
             "lat": 51.723122,
             "lng": -0.5367,
             "country": "GB"
             },
             {
             "id": 2655081,
             "city": "Bovey Tracey",
             "lat": 50.59259,
             "lng": -3.67543,
             "country": "GB"
             },
             {
             "id": 2655087,
             "city": "Bourton on the Water",
             "lat": 51.866669,
             "lng": -1.75,
             "country": "GB"
             },
             {
             "id": 2655097,
             "city": "Bourne End",
             "lat": 51.576221,
             "lng": -0.71291,
             "country": "GB"
             },
             {
             "id": 2655099,
             "city": "Bourne",
             "lat": 52.76667,
             "lng": -0.38333,
             "country": "GB"
             },
             {
             "id": 2655123,
             "city": "Bottisham",
             "lat": 52.222801,
             "lng": 0.25878,
             "country": "GB"
             },
             {
             "id": 2655128,
             "city": "Botley",
             "lat": 50.91433,
             "lng": -1.26984,
             "country": "GB"
             },
             {
             "id": 2655130,
             "city": "Bothwell",
             "lat": 55.802719,
             "lng": -4.06835,
             "country": "GB"
             },
             {
             "id": 2655136,
             "city": "Boston Spa",
             "lat": 53.90419,
             "lng": -1.34523,
             "country": "GB"
             },
             {
             "id": 2655143,
             "city": "Bosham",
             "lat": 50.830879,
             "lng": -0.85384,
             "country": "GB"
             },
             {
             "id": 2655168,
             "city": "Borrowash",
             "lat": 52.906731,
             "lng": -1.38411,
             "country": "GB"
             },
             {
             "id": 2655172,
             "city": "Borough Green",
             "lat": 51.29158,
             "lng": 0.30478,
             "country": "GB"
             },
             {
             "id": 2655173,
             "city": "Boroughbridge",
             "lat": 54.0895,
             "lng": -1.4011,
             "country": "GB"
             },
             {
             "id": 2655188,
             "city": "Boreham",
             "lat": 51.19944,
             "lng": -2.16556,
             "country": "GB"
             },
             {
             "id": 2655211,
             "city": "Bonnybridge",
             "lat": 56.001518,
             "lng": -3.8886,
             "country": "GB"
             },
             {
             "id": 2655214,
             "city": "Bonhill",
             "lat": 55.979439,
             "lng": -4.5638,
             "country": "GB"
             },
             {
             "id": 2655215,
             "city": "Boness",
             "lat": 56.01667,
             "lng": -3.61667,
             "country": "GB"
             },
             {
             "id": 2655230,
             "city": "Bolton upon Dearne",
             "lat": 53.51667,
             "lng": -1.31667,
             "country": "GB"
             },
             {
             "id": 2655232,
             "city": "Bolton le Sands",
             "lat": 54.083328,
             "lng": -2.78333,
             "country": "GB"
             },
             {
             "id": 2655242,
             "city": "Bolsover",
             "lat": 53.228458,
             "lng": -1.29204,
             "country": "GB"
             },
             {
             "id": 2655245,
             "city": "Bollington",
             "lat": 53.29446,
             "lng": -2.10963,
             "country": "GB"
             },
             {
             "id": 2655250,
             "city": "The Boldons",
             "lat": 54.9426,
             "lng": -1.45349,
             "country": "GB"
             },
             {
             "id": 2655331,
             "city": "Bloxham",
             "lat": 52.01812,
             "lng": -1.37527,
             "country": "GB"
             },
             {
             "id": 2655346,
             "city": "Blidworth",
             "lat": 53.098492,
             "lng": -1.11689,
             "country": "GB"
             },
             {
             "id": 2655352,
             "city": "Bletchingley",
             "lat": 51.240589,
             "lng": -0.10038,
             "country": "GB"
             },
             {
             "id": 2655369,
             "city": "Blaydon-on-Tyne",
             "lat": 54.964611,
             "lng": -1.71392,
             "country": "GB"
             },
             {
             "id": 2655378,
             "city": "Blandford Forum",
             "lat": 50.860729,
             "lng": -2.16174,
             "country": "GB"
             },
             {
             "id": 2655394,
             "city": "Blairgowrie",
             "lat": 56.591572,
             "lng": -3.34045,
             "country": "GB"
             },
             {
             "id": 2655413,
             "city": "Blaenavon",
             "lat": 51.774021,
             "lng": -3.08537,
             "country": "GB"
             },
             {
             "id": 2655414,
             "city": "Blaenau-Ffestiniog",
             "lat": 52.99464,
             "lng": -3.93697,
             "country": "GB"
             },
             {
             "id": 2655418,
             "city": "Blackwood",
             "lat": 55.666672,
             "lng": -3.91667,
             "country": "GB"
             },
             {
             "id": 2655420,
             "city": "Blackwell",
             "lat": 53.116669,
             "lng": -1.33333,
             "country": "GB"
             },
             {
             "id": 2655454,
             "city": "Blackrod",
             "lat": 53.592289,
             "lng": -2.58026,
             "country": "GB"
             },
             {
             "id": 2655523,
             "city": "Blackburn",
             "lat": 55.866669,
             "lng": -3.63333,
             "country": "GB"
             },
             {
             "id": 2655532,
             "city": "Blaby",
             "lat": 52.575771,
             "lng": -1.16403,
             "country": "GB"
             },
             {
             "id": 2655548,
             "city": "Bishopton",
             "lat": 55.909691,
             "lng": -4.5056,
             "country": "GB"
             },
             {
             "id": 2655550,
             "city": "Bishopthorpe",
             "lat": 53.919102,
             "lng": -1.09915,
             "country": "GB"
             },
             {
             "id": 2655551,
             "city": "Bishops Waltham",
             "lat": 50.950001,
             "lng": -1.21667,
             "country": "GB"
             },
             {
             "id": 2655556,
             "city": "Bishopston",
             "lat": 51.577499,
             "lng": -4.04806,
             "country": "GB"
             },
             {
             "id": 2655558,
             "city": "Bishopsteignton",
             "lat": 50.551929,
             "lng": -3.53852,
             "country": "GB"
             },
             {
             "id": 2655564,
             "city": "Bishops Lydeard",
             "lat": 51.05917,
             "lng": -3.18778,
             "country": "GB"
             },
             {
             "id": 2655618,
             "city": "Birdwell",
             "lat": 53.513981,
             "lng": -1.47929,
             "country": "GB"
             },
             {
             "id": 2655624,
             "city": "Bircotes",
             "lat": 53.419331,
             "lng": -1.04905,
             "country": "GB"
             },
             {
             "id": 2655643,
             "city": "Bingham",
             "lat": 52.94978,
             "lng": -0.95907,
             "country": "GB"
             },
             {
             "id": 2655654,
             "city": "Bilston",
             "lat": 52.566669,
             "lng": -2.06667,
             "country": "GB"
             },
             {
             "id": 2655655,
             "city": "Bilsthorpe",
             "lat": 53.14024,
             "lng": -1.03392,
             "country": "GB"
             },
             {
             "id": 2655662,
             "city": "Billingshurst",
             "lat": 51.019211,
             "lng": -0.45413,
             "country": "GB"
             },
             {
             "id": 2655666,
             "city": "Billinge",
             "lat": 53.497952,
             "lng": -2.7081,
             "country": "GB"
             },
             {
             "id": 2655690,
             "city": "Biggin Hill",
             "lat": 51.41629,
             "lng": -0.10947,
             "country": "GB"
             },
             {
             "id": 2655718,
             "city": "Bicknacre",
             "lat": 51.694031,
             "lng": 0.58519,
             "country": "GB"
             },
             {
             "id": 2655781,
             "city": "Bewdley",
             "lat": 52.375389,
             "lng": -2.31717,
             "country": "GB"
             },
             {
             "id": 2655800,
             "city": "Betws",
             "lat": 51.569172,
             "lng": -3.58833,
             "country": "GB"
             },
             {
             "id": 2655804,
             "city": "Bethesda",
             "lat": 53.166672,
             "lng": -4.08333,
             "country": "GB"
             },
             {
             "id": 2655861,
             "city": "Berkeley",
             "lat": 51.691109,
             "lng": -2.45917,
             "country": "GB"
             },
             {
             "id": 2655864,
             "city": "Bere Alston",
             "lat": 50.48233,
             "lng": -4.19034,
             "country": "GB"
             },
             {
             "id": 2655925,
             "city": "Bembridge",
             "lat": 50.68634,
             "lng": -1.08275,
             "country": "GB"
             },
             {
             "id": 2655994,
             "city": "Beith",
             "lat": 55.749229,
             "lng": -4.6368,
             "country": "GB"
             },
             {
             "id": 2656000,
             "city": "Beighton",
             "lat": 53.333328,
             "lng": -1.33333,
             "country": "GB"
             },
             {
             "id": 2656033,
             "city": "Bedwas",
             "lat": 51.591831,
             "lng": -3.19886,
             "country": "GB"
             },
             {
             "id": 2656051,
             "city": "Bedale",
             "lat": 54.288109,
             "lng": -1.59181,
             "country": "GB"
             },
             {
             "id": 2656067,
             "city": "Beccles",
             "lat": 52.453499,
             "lng": 1.56401,
             "country": "GB"
             },
             {
             "id": 2656100,
             "city": "Beaminster",
             "lat": 50.808998,
             "lng": -2.7391,
             "country": "GB"
             },
             {
             "id": 2656120,
             "city": "Beaconsfield",
             "lat": 51.61219,
             "lng": -0.64732,
             "country": "GB"
             },
             {
             "id": 2656144,
             "city": "Bawtry",
             "lat": 53.431461,
             "lng": -1.01878,
             "country": "GB"
             },
             {
             "id": 2656161,
             "city": "Battle",
             "lat": 50.91732,
             "lng": 0.48417,
             "country": "GB"
             },
             {
             "id": 2656184,
             "city": "Bassingbourn",
             "lat": 52.078209,
             "lng": -0.0539,
             "country": "GB"
             },
             {
             "id": 2656193,
             "city": "Basing",
             "lat": 51.26667,
             "lng": -1.03333,
             "country": "GB"
             },
             {
             "id": 2656206,
             "city": "Barton upon Humber",
             "lat": 53.680038,
             "lng": -0.43765,
             "country": "GB"
             },
             {
             "id": 2656207,
             "city": "Barton under Needwood",
             "lat": 52.76268,
             "lng": -1.724,
             "country": "GB"
             },
             {
             "id": 2656212,
             "city": "Barton-le-Clay",
             "lat": 51.965981,
             "lng": -0.42731,
             "country": "GB"
             },
             {
             "id": 2656239,
             "city": "Barrow upon Soar",
             "lat": 52.751781,
             "lng": -1.14601,
             "country": "GB"
             },
             {
             "id": 2656240,
             "city": "Barrow upon Humber",
             "lat": 53.675499,
             "lng": -0.38062,
             "country": "GB"
             },
             {
             "id": 2656243,
             "city": "Barrowford",
             "lat": 53.8465,
             "lng": -2.21838,
             "country": "GB"
             },
             {
             "id": 2656246,
             "city": "Barrowby",
             "lat": 52.916359,
             "lng": -0.69094,
             "country": "GB"
             },
             {
             "id": 2656277,
             "city": "Barnt Green",
             "lat": 52.35902,
             "lng": -2.00715,
             "country": "GB"
             },
             {
             "id": 2656287,
             "city": "Barnoldswick",
             "lat": 53.91711,
             "lng": -2.18705,
             "country": "GB"
             },
             {
             "id": 2656293,
             "city": "Barnham",
             "lat": 50.8312,
             "lng": -0.63789,
             "country": "GB"
             },
             {
             "id": 2656305,
             "city": "Barnard Castle",
             "lat": 54.5415,
             "lng": -1.919,
             "country": "GB"
             },
             {
             "id": 2656311,
             "city": "Barmouth",
             "lat": 52.72377,
             "lng": -4.05748,
             "country": "GB"
             },
             {
             "id": 2656322,
             "city": "Barlestone",
             "lat": 52.647179,
             "lng": -1.37013,
             "country": "GB"
             },
             {
             "id": 2656324,
             "city": "Barlborough",
             "lat": 53.287949,
             "lng": -1.28815,
             "country": "GB"
             },
             {
             "id": 2656340,
             "city": "Bargoed",
             "lat": 51.683331,
             "lng": -3.23333,
             "country": "GB"
             },
             {
             "id": 2656354,
             "city": "Bardsey",
             "lat": 53.884918,
             "lng": -1.44539,
             "country": "GB"
             },
             {
             "id": 2656378,
             "city": "Banwell",
             "lat": 51.328941,
             "lng": -2.86914,
             "country": "GB"
             },
             {
             "id": 2656382,
             "city": "Bannockburn",
             "lat": 56.089779,
             "lng": -3.91092,
             "country": "GB"
             },
             {
             "id": 2656388,
             "city": "Banks",
             "lat": 53.683331,
             "lng": -2.91667,
             "country": "GB"
             },
             {
             "id": 2656405,
             "city": "Banchory",
             "lat": 57.051682,
             "lng": -2.48824,
             "country": "GB"
             },
             {
             "id": 2656421,
             "city": "Bampton",
             "lat": 51.726341,
             "lng": -1.54547,
             "country": "GB"
             },
             {
             "id": 2656483,
             "city": "Ballynahinch",
             "lat": 54.400002,
             "lng": -5.88333,
             "country": "GB"
             },
             {
             "id": 2656488,
             "city": "Ballymoney",
             "lat": 55.070801,
             "lng": -6.51009,
             "country": "GB"
             },
             {
             "id": 2656509,
             "city": "Ballygowan",
             "lat": 54.501652,
             "lng": -5.79168,
             "country": "GB"
             },
             {
             "id": 2656528,
             "city": "Ballyclare",
             "lat": 54.76667,
             "lng": -6.01667,
             "country": "GB"
             },
             {
             "id": 2656531,
             "city": "Ballycastle",
             "lat": 55.204441,
             "lng": -6.24298,
             "country": "GB"
             },
             {
             "id": 2656551,
             "city": "Ballingry",
             "lat": 56.163921,
             "lng": -3.32841,
             "country": "GB"
             },
             {
             "id": 2656586,
             "city": "Balerno",
             "lat": 55.884369,
             "lng": -3.33975,
             "country": "GB"
             },
             {
             "id": 2656594,
             "city": "Baldock",
             "lat": 51.987808,
             "lng": -0.18835,
             "country": "GB"
             },
             {
             "id": 2656617,
             "city": "Bakewell",
             "lat": 53.213379,
             "lng": -1.67481,
             "country": "GB"
             },
             {
             "id": 2656632,
             "city": "Bagshot",
             "lat": 51.360691,
             "lng": -0.68802,
             "country": "GB"
             },
             {
             "id": 2656636,
             "city": "Bagillt",
             "lat": 53.2654,
             "lng": -3.16551,
             "country": "GB"
             },
             {
             "id": 2656642,
             "city": "Badsey",
             "lat": 52.088188,
             "lng": -1.89925,
             "country": "GB"
             },
             {
             "id": 2656666,
             "city": "Bacup",
             "lat": 53.703362,
             "lng": -2.2007,
             "country": "GB"
             },
             {
             "id": 2656713,
             "city": "Aylsham",
             "lat": 52.79512,
             "lng": 1.25178,
             "country": "GB"
             },
             {
             "id": 2656716,
             "city": "Aylesford",
             "lat": 51.303741,
             "lng": 0.47936,
             "country": "GB"
             },
             {
             "id": 2656725,
             "city": "Axminster",
             "lat": 50.782589,
             "lng": -2.99787,
             "country": "GB"
             },
             {
             "id": 2656730,
             "city": "Axbridge",
             "lat": 51.286942,
             "lng": -2.81694,
             "country": "GB"
             },
             {
             "id": 2656731,
             "city": "Awsworth",
             "lat": 52.98912,
             "lng": -1.28354,
             "country": "GB"
             },
             {
             "id": 2656752,
             "city": "Aviemore",
             "lat": 57.19553,
             "lng": -3.8259,
             "country": "GB"
             },
             {
             "id": 2656759,
             "city": "Aveley",
             "lat": 51.49987,
             "lng": 0.25174,
             "country": "GB"
             },
             {
             "id": 2656799,
             "city": "Auchtermuchty",
             "lat": 56.29158,
             "lng": -3.23428,
             "country": "GB"
             },
             {
             "id": 2656803,
             "city": "Auchterarder",
             "lat": 56.29612,
             "lng": -3.70692,
             "country": "GB"
             },
             {
             "id": 2656818,
             "city": "Auchinleck",
             "lat": 55.471569,
             "lng": -4.29337,
             "country": "GB"
             },
             {
             "id": 2656833,
             "city": "Atworth",
             "lat": 51.392342,
             "lng": -2.19297,
             "country": "GB"
             },
             {
             "id": 2656837,
             "city": "Attleborough",
             "lat": 52.512932,
             "lng": -1.45487,
             "country": "GB"
             },
             {
             "id": 2656848,
             "city": "Atherstone",
             "lat": 52.575359,
             "lng": -1.54693,
             "country": "GB"
             },
             {
             "id": 2656855,
             "city": "Astwood Bank",
             "lat": 52.25993,
             "lng": -1.93754,
             "country": "GB"
             },
             {
             "id": 2656864,
             "city": "Aston Clinton",
             "lat": 51.800201,
             "lng": -0.7254,
             "country": "GB"
             },
             {
             "id": 2656891,
             "city": "Aspatria",
             "lat": 54.765739,
             "lng": -3.32783,
             "country": "GB"
             },
             {
             "id": 2656907,
             "city": "Askern",
             "lat": 53.61639,
             "lng": -1.15237,
             "country": "GB"
             },
             {
             "id": 2656908,
             "city": "Askam in Furness",
             "lat": 54.183331,
             "lng": -3.21667,
             "country": "GB"
             },
             {
             "id": 2656914,
             "city": "Ashurst",
             "lat": 50.932362,
             "lng": -0.32375,
             "country": "GB"
             },
             {
             "id": 2656924,
             "city": "Ashtead",
             "lat": 51.308731,
             "lng": -0.29972,
             "country": "GB"
             },
             {
             "id": 2656952,
             "city": "Ashfordby",
             "lat": 52.75,
             "lng": -0.95,
             "country": "GB"
             },
             {
             "id": 2656970,
             "city": "Ashby de la Zouch",
             "lat": 52.746319,
             "lng": -1.4732,
             "country": "GB"
             },
             {
             "id": 2656977,
             "city": "Ashburton",
             "lat": 50.515591,
             "lng": -3.75572,
             "country": "GB"
             },
             {
             "id": 2656981,
             "city": "Ashbourne",
             "lat": 53.01667,
             "lng": -1.73333,
             "country": "GB"
             },
             {
             "id": 2656985,
             "city": "Ash",
             "lat": 52.950001,
             "lng": -2.65,
             "country": "GB"
             },
             {
             "id": 2656997,
             "city": "Arundel",
             "lat": 50.854229,
             "lng": -0.55393,
             "country": "GB"
             },
             {
             "id": 2657029,
             "city": "Arnside",
             "lat": 54.20179,
             "lng": -2.83374,
             "country": "GB"
             },
             {
             "id": 2657051,
             "city": "Armthorpe",
             "lat": 53.535179,
             "lng": -1.05341,
             "country": "GB"
             },
             {
             "id": 2657054,
             "city": "Armitage",
             "lat": 52.741928,
             "lng": -1.88266,
             "country": "GB"
             },
             {
             "id": 2657067,
             "city": "Armadale",
             "lat": 55.883331,
             "lng": -3.7,
             "country": "GB"
             },
             {
             "id": 2657073,
             "city": "Arlesey",
             "lat": 52.00713,
             "lng": -0.26565,
             "country": "GB"
             },
             {
             "id": 2657125,
             "city": "Ardrossan",
             "lat": 55.650181,
             "lng": -4.80659,
             "country": "GB"
             },
             {
             "id": 2657216,
             "city": "Arborfield",
             "lat": 51.401428,
             "lng": -0.92006,
             "country": "GB"
             },
             {
             "id": 2657224,
             "city": "Appley Bridge",
             "lat": 53.577808,
             "lng": -2.7209,
             "country": "GB"
             },
             {
             "id": 2657233,
             "city": "Appledore",
             "lat": 51.049999,
             "lng": -4.2,
             "country": "GB"
             },
             {
             "id": 2657240,
             "city": "Appleby",
             "lat": 53.616669,
             "lng": -0.56667,
             "country": "GB"
             },
             {
             "id": 2657267,
             "city": "Anstruther",
             "lat": 56.223148,
             "lng": -2.70229,
             "country": "GB"
             },
             {
             "id": 2657268,
             "city": "Anstey",
             "lat": 52.650002,
             "lng": -1.18333,
             "country": "GB"
             },
             {
             "id": 2657282,
             "city": "Annfield Plain",
             "lat": 54.857491,
             "lng": -1.73827,
             "country": "GB"
             },
             {
             "id": 2657337,
             "city": "Ampthill",
             "lat": 52.026939,
             "lng": -0.49567,
             "country": "GB"
             },
             {
             "id": 2657345,
             "city": "Ammanford",
             "lat": 51.792789,
             "lng": -3.98833,
             "country": "GB"
             },
             {
             "id": 2657347,
             "city": "Amlwch",
             "lat": 53.409859,
             "lng": -4.34712,
             "country": "GB"
             },
             {
             "id": 2657355,
             "city": "Amesbury",
             "lat": 51.171719,
             "lng": -1.77897,
             "country": "GB"
             },
             {
             "id": 2657360,
             "city": "Ambleside",
             "lat": 54.43261,
             "lng": -2.96167,
             "country": "GB"
             },
             {
             "id": 2657362,
             "city": "Amble",
             "lat": 55.333328,
             "lng": -1.58333,
             "country": "GB"
             },
             {
             "id": 2657374,
             "city": "Alyth",
             "lat": 56.622089,
             "lng": -3.23005,
             "country": "GB"
             },
             {
             "id": 2657395,
             "city": "Alvechurch",
             "lat": 52.35173,
             "lng": -1.96531,
             "country": "GB"
             },
             {
             "id": 2657430,
             "city": "Alsager",
             "lat": 53.096169,
             "lng": -2.30649,
             "country": "GB"
             },
             {
             "id": 2657432,
             "city": "Alrewas",
             "lat": 52.73278,
             "lng": -1.74968,
             "country": "GB"
             },
             {
             "id": 2657433,
             "city": "Alresford",
             "lat": 51.853889,
             "lng": 1.00203,
             "country": "GB"
             },
             {
             "id": 2657438,
             "city": "Alnwick",
             "lat": 55.413181,
             "lng": -1.70563,
             "country": "GB"
             },
             {
             "id": 2657445,
             "city": "Alness",
             "lat": 57.695961,
             "lng": -4.2551,
             "country": "GB"
             },
             {
             "id": 2657509,
             "city": "Alford",
             "lat": 57.232571,
             "lng": -2.70298,
             "country": "GB"
             },
             {
             "id": 2657513,
             "city": "Alexandria",
             "lat": 55.99379,
             "lng": -4.5864,
             "country": "GB"
             },
             {
             "id": 2657546,
             "city": "Alderley Edge",
             "lat": 53.303928,
             "lng": -2.23773,
             "country": "GB"
             },
             {
             "id": 2657548,
             "city": "Alderholt",
             "lat": 50.916672,
             "lng": -1.83333,
             "country": "GB"
             },
             {
             "id": 2657551,
             "city": "Alderbury",
             "lat": 51.043541,
             "lng": -1.73382,
             "country": "GB"
             },
             {
             "id": 2657557,
             "city": "Aldeburgh",
             "lat": 52.152592,
             "lng": 1.60124,
             "country": "GB"
             },
             {
             "id": 2657566,
             "city": "Alcester",
             "lat": 52.216671,
             "lng": -1.86667,
             "country": "GB"
             },
             {
             "id": 2657571,
             "city": "Albrighton",
             "lat": 52.633331,
             "lng": -2.26667,
             "country": "GB"
             },
             {
             "id": 2657634,
             "city": "Ahoghill",
             "lat": 54.866669,
             "lng": -6.36667,
             "country": "GB"
             },
             {
             "id": 2657668,
             "city": "Adlington",
             "lat": 53.613232,
             "lng": -2.60676,
             "country": "GB"
             },
             {
             "id": 2657676,
             "city": "Addlestone",
             "lat": 51.371349,
             "lng": -0.49353,
             "country": "GB"
             },
             {
             "id": 2657680,
             "city": "Addingham",
             "lat": 53.944519,
             "lng": -1.88424,
             "country": "GB"
             },
             {
             "id": 2657684,
             "city": "Adderbury",
             "lat": 52.016899,
             "lng": -1.31192,
             "country": "GB"
             },
             {
             "id": 2657704,
             "city": "Acle",
             "lat": 52.63681,
             "lng": 1.54757,
             "country": "GB"
             },
             {
             "id": 2657774,
             "city": "Abram",
             "lat": 53.508549,
             "lng": -2.59266,
             "country": "GB"
             },
             {
             "id": 2657775,
             "city": "Aboyne",
             "lat": 57.075459,
             "lng": -2.78023,
             "country": "GB"
             },
             {
             "id": 2657784,
             "city": "Abertillery",
             "lat": 51.729809,
             "lng": -3.13432,
             "country": "GB"
             },
             {
             "id": 2657804,
             "city": "Aberkenfig",
             "lat": 51.540001,
             "lng": -3.59556,
             "country": "GB"
             },
             {
             "id": 2657815,
             "city": "Abergavenny",
             "lat": 51.82098,
             "lng": -3.01743,
             "country": "GB"
             },
             {
             "id": 2657820,
             "city": "Aberfeldy",
             "lat": 56.619999,
             "lng": -3.86453,
             "country": "GB"
             },
             {
             "id": 2657844,
             "city": "Abercarn",
             "lat": 51.647331,
             "lng": -3.13476,
             "country": "GB"
             },
             {
             "id": 2657863,
             "city": "Abbots Langley",
             "lat": 51.70573,
             "lng": -0.41757,
             "country": "GB"
             },
             {
             "id": 3209552,
             "city": "Benllech",
             "lat": 53.320438,
             "lng": -4.22607,
             "country": "GB"
             },
             {
             "id": 3236250,
             "city": "Shiremoor",
             "lat": 55.035351,
             "lng": -1.5095,
             "country": "GB"
             },
             {
             "id": 3345096,
             "city": "Flexbury",
             "lat": 50.835091,
             "lng": -4.54499,
             "country": "GB"
             },
             {
             "id": 3345189,
             "city": "Tumble",
             "lat": 51.783611,
             "lng": -4.10972,
             "country": "GB"
             },
             {
             "id": 3345234,
             "city": "Southgate",
             "lat": 51.569439,
             "lng": -4.08972,
             "country": "GB"
             },
             {
             "id": 3345279,
             "city": "Price Town",
             "lat": 51.61832,
             "lng": -3.53662,
             "country": "GB"
             },
             {
             "id": 3345280,
             "city": "Ogmore Vale",
             "lat": 51.602299,
             "lng": -3.54217,
             "country": "GB"
             },
             {
             "id": 3345283,
             "city": "Tonypandy",
             "lat": 51.622021,
             "lng": -3.45544,
             "country": "GB"
             },
             {
             "id": 3345315,
             "city": "Abertridwr",
             "lat": 51.595829,
             "lng": -3.26833,
             "country": "GB"
             },
             {
             "id": 3345316,
             "city": "Beddau",
             "lat": 51.553982,
             "lng": -3.35814,
             "country": "GB"
             },
             {
             "id": 3345319,
             "city": "Cwmbach",
             "lat": 51.705559,
             "lng": -3.40944,
             "country": "GB"
             },
             {
             "id": 3345375,
             "city": "Woolavington",
             "lat": 51.164928,
             "lng": -2.93814,
             "country": "GB"
             },
             {
             "id": 3345395,
             "city": "Pucklechurch",
             "lat": 51.485828,
             "lng": -2.43389,
             "country": "GB"
             },
             {
             "id": 3345396,
             "city": "Peasedown Saint John",
             "lat": 51.316669,
             "lng": -2.42417,
             "country": "GB"
             },
             {
             "id": 3345400,
             "city": "Severn Beach",
             "lat": 51.56036,
             "lng": -2.66279,
             "country": "GB"
             },
             {
             "id": 3345403,
             "city": "Easton-in-Gordano",
             "lat": 51.475922,
             "lng": -2.69987,
             "country": "GB"
             },
             {
             "id": 6269326,
             "city": "Lamesley",
             "lat": 54.915668,
             "lng": -1.60945,
             "country": "GB"
             },
             {
             "id": 6269591,
             "city": "Barlby",
             "lat": 53.799641,
             "lng": -1.04061,
             "country": "GB"
             },
             {
             "id": 6301958,
             "city": "Blackmoorfoot",
             "lat": 53.614231,
             "lng": -1.85588,
             "country": "GB"
             },
             {
             "id": 6301962,
             "city": "Meltham Mills",
             "lat": 53.59388,
             "lng": -1.83989,
             "country": "GB"
             },
             {
             "id": 6453268,
             "city": "Breighton",
             "lat": 53.796879,
             "lng": -0.92415,
             "country": "GB"
             },
             {
             "id": 6457269,
             "city": "Fontwell",
             "lat": 50.855202,
             "lng": -0.64831,
             "country": "GB"
             },
             {
             "id": 6545174,
             "city": "Kennington",
             "lat": 51.487961,
             "lng": -0.10566,
             "country": "GB"
             },
             {
             "id": 6545250,
             "city": "Lambeth",
             "lat": 51.496349,
             "lng": -0.11152,
             "country": "GB"
             },
             {
             "id": 6615508,
             "city": "Tankerton",
             "lat": 51.363701,
             "lng": 1.04913,
             "country": "GB"
             },
             {
             "id": 6615590,
             "city": "Cheadle Heath",
             "lat": 53.401859,
             "lng": -2.19088,
             "country": "GB"
             },
             {
             "id": 6619766,
             "city": "Bradley Cross",
             "lat": 51.274879,
             "lng": -2.76256,
             "country": "GB"
             },
             {
             "id": 6619985,
             "city": "Copthorne",
             "lat": 51.13929,
             "lng": -0.11742,
             "country": "GB"
             },
             {
             "id": 6620367,
             "city": "Virginia Water",
             "lat": 51.403431,
             "lng": -0.56651,
             "country": "GB"
             },
             {
             "id": 6620444,
             "city": "Gerrards Cross",
             "lat": 51.586102,
             "lng": -0.55543,
             "country": "GB"
             },
             {
             "id": 6621541,
             "city": "Maidenbower",
             "lat": 51.107811,
             "lng": -0.15286,
             "country": "GB"
             },
             {
             "id": 6621542,
             "city": "Furnace Green",
             "lat": 51.107422,
             "lng": -0.16889,
             "country": "GB"
             },
             {
             "id": 6621545,
             "city": "Broadfield",
             "lat": 51.097141,
             "lng": -0.20664,
             "country": "GB"
             },
             {
             "id": 6621546,
             "city": "Bewbush",
             "lat": 51.103291,
             "lng": -0.22312,
             "country": "GB"
             },
             {
             "id": 6621547,
             "city": "Gossops Green",
             "lat": 51.11105,
             "lng": -0.21728,
             "country": "GB"
             },
             {
             "id": 6621548,
             "city": "Langley Green",
             "lat": 51.12817,
             "lng": -0.19835,
             "country": "GB"
             },
             {
             "id": 6640065,
             "city": "Bidford-on-avon",
             "lat": 52.167252,
             "lng": -1.85652,
             "country": "GB"
             },
             {
             "id": 6640068,
             "city": "Westhill",
             "lat": 57.15263,
             "lng": -2.27966,
             "country": "GB"
             },
             {
             "id": 6640069,
             "city": "Clarkston",
             "lat": 55.785938,
             "lng": -4.27651,
             "country": "GB"
             },
             {
             "id": 6690167,
             "city": "Kings Hill",
             "lat": 51.274368,
             "lng": 0.40237,
             "country": "GB"
             },
             {
             "id": 6690565,
             "city": "Crouch End",
             "lat": 51.579708,
             "lng": -0.12373,
             "country": "GB"
             },
             {
             "id": 6690574,
             "city": "Clerkenwell",
             "lat": 51.52438,
             "lng": -0.11022,
             "country": "GB"
             },
             {
             "id": 6690581,
             "city": "Belsize Park",
             "lat": 51.547668,
             "lng": -0.17228,
             "country": "GB"
             },
             {
             "id": 6690590,
             "city": "Barnsbury",
             "lat": 51.540668,
             "lng": -0.11675,
             "country": "GB"
             },
             {
             "id": 6690593,
             "city": "Barbican",
             "lat": 51.519878,
             "lng": -0.09446,
             "country": "GB"
             },
             {
             "id": 6690801,
             "city": "Grange Hill",
             "lat": 51.611851,
             "lng": 0.08612,
             "country": "GB"
             },
             {
             "id": 6690802,
             "city": "Collier Row",
             "lat": 51.59893,
             "lng": 0.166,
             "country": "GB"
             },
             {
             "id": 6690805,
             "city": "Elm Park",
             "lat": 51.549702,
             "lng": 0.20136,
             "country": "GB"
             },
             {
             "id": 6690808,
             "city": "Chafford Hundred",
             "lat": 51.489201,
             "lng": 0.2944,
             "country": "GB"
             },
             {
             "id": 6690812,
             "city": "Chadwell St Mary",
             "lat": 51.4814,
             "lng": 0.36343,
             "country": "GB"
             },
             {
             "id": 6690830,
             "city": "Ditton Hill",
             "lat": 51.386238,
             "lng": -0.32495,
             "country": "GB"
             },
             {
             "id": 6690831,
             "city": "Hinchley Wood",
             "lat": 51.374611,
             "lng": -0.33838,
             "country": "GB"
             },
             {
             "id": 6690865,
             "city": "Hainault",
             "lat": 51.60836,
             "lng": 0.10716,
             "country": "GB"
             },
             {
             "id": 6690868,
             "city": "Harold Wood",
             "lat": 51.59462,
             "lng": 0.23294,
             "country": "GB"
             },
             {
             "id": 6690869,
             "city": "Chadwell Heath",
             "lat": 51.571209,
             "lng": 0.13271,
             "country": "GB"
             },
             {
             "id": 6691216,
             "city": "Cheetham Hill",
             "lat": 53.498619,
             "lng": -2.23846,
             "country": "GB"
             },
             {
             "id": 6691221,
             "city": "Crumpsall",
             "lat": 53.518269,
             "lng": -2.24447,
             "country": "GB"
             },
             {
             "id": 6691222,
             "city": "Blackley",
             "lat": 53.517651,
             "lng": -2.21443,
             "country": "GB"
             },
             {
             "id": 6691237,
             "city": "Hollingworth",
             "lat": 53.632881,
             "lng": -2.11083,
             "country": "GB"
             },
             {
             "id": 6691251,
             "city": "Burnage",
             "lat": 53.432652,
             "lng": -2.19967,
             "country": "GB"
             },
             {
             "id": 6691252,
             "city": "Fallowfield",
             "lat": 53.439812,
             "lng": -2.21572,
             "country": "GB"
             },
             {
             "id": 6691253,
             "city": "Heaton Chapel",
             "lat": 53.430149,
             "lng": -2.17538,
             "country": "GB"
             },
             {
             "id": 6691255,
             "city": "Haughton Green",
             "lat": 53.441181,
             "lng": -2.09827,
             "country": "GB"
             },
             {
             "id": 6691257,
             "city": "Hulme",
             "lat": 53.465721,
             "lng": -2.24885,
             "country": "GB"
             },
             {
             "id": 6691951,
             "city": "Clayton-le-Woods",
             "lat": 53.696892,
             "lng": -2.66818,
             "country": "GB"
             },
             {
             "id": 6692466,
             "city": "Brixton Hill",
             "lat": 51.452129,
             "lng": -0.123,
             "country": "GB"
             },
             {
             "id": 6692918,
             "city": "Featherstone",
             "lat": 52.644829,
             "lng": -2.09315,
             "country": "GB"
             },
             {
             "id": 6692919,
             "city": "Belmont",
             "lat": 52.042721,
             "lng": -2.74169,
             "country": "GB"
             },
             {
             "id": 6692920,
             "city": "Calcot",
             "lat": 51.440578,
             "lng": -1.05091,
             "country": "GB"
             },
             {
             "id": 6693001,
             "city": "Benwell",
             "lat": 54.972961,
             "lng": -1.66926,
             "country": "GB"
             },
             {
             "id": 6693007,
             "city": "Earl Shilton",
             "lat": 52.57682,
             "lng": -1.31536,
             "country": "GB"
             },
             {
             "id": 6693100,
             "city": "Bay Horse",
             "lat": 53.96867,
             "lng": -2.77603,
             "country": "GB"
             },
             {
             "id": 6693203,
             "city": "Colden Common",
             "lat": 50.994831,
             "lng": -1.31143,
             "country": "GB"
             },
             {
             "id": 6693236,
             "city": "Charvil",
             "lat": 51.475731,
             "lng": -0.88591,
             "country": "GB"
             },
             {
             "id": 6693239,
             "city": "Essington",
             "lat": 52.629101,
             "lng": -2.0577,
             "country": "GB"
             },
             {
             "id": 6693242,
             "city": "Bordon",
             "lat": 51.113571,
             "lng": -0.86245,
             "country": "GB"
             },
             {
             "id": 6693668,
             "city": "Larkfield",
             "lat": 51.294559,
             "lng": 0.42615,
             "country": "GB"
             },
             {
             "id": 6693776,
             "city": "Greenhill",
             "lat": 51.58342,
             "lng": -0.3386,
             "country": "GB"
             },
             {
             "id": 6693989,
             "city": "Grappenhall",
             "lat": 53.37204,
             "lng": -2.54675,
             "country": "GB"
             },
             {
             "id": 6694830,
             "city": "Eaglescliffe",
             "lat": 54.525211,
             "lng": -1.35043,
             "country": "GB"
             },
             {
             "id": 6695249,
             "city": "Ash",
             "lat": 51.278831,
             "lng": 1.27974,
             "country": "GB"
             },
             {
             "id": 6695949,
             "city": "Winscombe",
             "lat": 51.31321,
             "lng": -2.83177,
             "country": "GB"
             },
             {
             "id": 6696027,
             "city": "Chiseldon",
             "lat": 51.51606,
             "lng": -1.73206,
             "country": "GB"
             },
             {
             "id": 6696635,
             "city": "Southchurch Village",
             "lat": 51.540489,
             "lng": 0.72935,
             "country": "GB"
             },
             {
             "id": 6696772,
             "city": "Darras Hall",
             "lat": 55.035599,
             "lng": -1.76425,
             "country": "GB"
             },
             {
             "id": 6697375,
             "city": "Donnington",
             "lat": 51.951351,
             "lng": -1.72142,
             "country": "GB"
             },
             {
             "id": 6698329,
             "city": "Appleton Thorn",
             "lat": 53.350449,
             "lng": -2.54488,
             "country": "GB"
             },
             {
             "id": 6698373,
             "city": "Chelmsley Wood",
             "lat": 52.4781,
             "lng": -1.73813,
             "country": "GB"
             },
             {
             "id": 6930866,
             "city": "Crawley Down",
             "lat": 51.120609,
             "lng": -0.0773,
             "country": "GB"
             },
             {
             "id": 6931071,
             "city": "Grange-over-Sands",
             "lat": 54.196468,
             "lng": -2.90433,
             "country": "GB"
             },
             {
             "id": 6940296,
             "city": "Cowplain",
             "lat": 50.894112,
             "lng": -1.01824,
             "country": "GB"
             },
             {
             "id": 6940298,
             "city": "Ruardean",
             "lat": 51.855011,
             "lng": -2.55054,
             "country": "GB"
             },
             {
             "id": 6940518,
             "city": "Canford Heath",
             "lat": 50.750999,
             "lng": -1.96862,
             "country": "GB"
             },
             {
             "id": 6941037,
             "city": "High Barnet",
             "lat": 51.656212,
             "lng": -0.20768,
             "country": "GB"
             },
             {
             "id": 6941086,
             "city": "Balsall Common",
             "lat": 52.391861,
             "lng": -1.6504,
             "country": "GB"
             },
             {
             "id": 6941089,
             "city": "Ingleton",
             "lat": 54.153919,
             "lng": -2.46849,
             "country": "GB"
             },
             {
             "id": 6946746,
             "city": "Penparcau",
             "lat": 52.403332,
             "lng": -4.07417,
             "country": "GB"
             },
             {
             "id": 6947746,
             "city": "Alderney",
             "lat": 49.7136,
             "lng": -2.19958,
             "country": "GB"
             },
             {
             "id": 6950979,
             "city": "Eversley",
             "lat": 51.35387,
             "lng": -0.88888,
             "country": "GB"
             },
             {
             "id": 7290043,
             "city": "Isle Of Mull",
             "lat": 56.446892,
             "lng": -5.77126,
             "country": "GB"
             },
             {
             "id": 7302135,
             "city": "Abbey Wood",
             "lat": 51.486881,
             "lng": 0.10746,
             "country": "GB"
             },
             {
             "id": 7521859,
             "city": "Seer Green",
             "lat": 51.617962,
             "lng": -0.60592,
             "country": "GB"
             },
             {
             "id": 8128721,
             "city": "Peacehaven",
             "lat": 50.792702,
             "lng": -0.00652,
             "country": "GB"
             },
             {
             "id": 8224207,
             "city": "Appleby-in-Westmorland",
             "lat": 54.577042,
             "lng": -2.48978,
             "country": "GB"
             },
             {
             "id": 8224780,
             "city": "Cradley Heath",
             "lat": 52.472141,
             "lng": -2.08212,
             "country": "GB"
             },
             {
             "id": 8224782,
             "city": "Shirley",
             "lat": 52.41074,
             "lng": -1.81952,
             "country": "GB"
             },
             {
             "id": 8224783,
             "city": "Stanley",
             "lat": 54.867962,
             "lng": -1.69846,
             "country": "GB"
             },
             {
             "id": 8224784,
             "city": "Stockton Heath",
             "lat": 53.370838,
             "lng": -2.57406,
             "country": "GB"
             },
             {
             "id": 8260052,
             "city": "Pontyclun",
             "lat": 51.521622,
             "lng": -3.39145,
             "country": "GB"
             },
             {
             "id": 8260056,
             "city": "Pentre",
             "lat": 51.654289,
             "lng": -3.49133,
             "country": "GB"
             },
             {
             "id": 8260059,
             "city": "Catterick Garrison",
             "lat": 54.37748,
             "lng": -1.72232,
             "country": "GB"
             }*/
          ];
        });
