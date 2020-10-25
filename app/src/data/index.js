import axios from "axios";

export const CharacterArray = () => {
let page1 = "https://rickandmortyapi.com/api/character/?page=1";
let page2 = "https://rickandmortyapi.com/api/character/?page=2";
let page3 = "https://rickandmortyapi.com/api/character/?page=3";
let page4 = "https://rickandmortyapi.com/api/character/?page=4";
let page5 = "https://rickandmortyapi.com/api/character/?page=5";
let page6 = "https://rickandmortyapi.com/api/character/?page=6";
let page7 = "https://rickandmortyapi.com/api/character/?page=7";
let page8 = "https://rickandmortyapi.com/api/character/?page=8";
let page9 = "https://rickandmortyapi.com/api/character/?page=9";
let page10 = "https://rickandmortyapi.com/api/character/?page=10";
let page11 = "https://rickandmortyapi.com/api/character/?page=11";
let page12 = "https://rickandmortyapi.com/api/character/?page=12";
let page13 = "https://rickandmortyapi.com/api/character/?page=13";
let page14 = "https://rickandmortyapi.com/api/character/?page=14";
let page15 = "https://rickandmortyapi.com/api/character/?page=15";
let page16 = "https://rickandmortyapi.com/api/character/?page=16";
let page17 = "https://rickandmortyapi.com/api/character/?page=17";
let page18 = "https://rickandmortyapi.com/api/character/?page=18";
let page19 = "https://rickandmortyapi.com/api/character/?page=19";
let page20 = "https://rickandmortyapi.com/api/character/?page=20";
let page21 = "https://rickandmortyapi.com/api/character/?page=21";
let page22 = "https://rickandmortyapi.com/api/character/?page=22";
let page23 = "https://rickandmortyapi.com/api/character/?page=23";
let page24 = "https://rickandmortyapi.com/api/character/?page=24";
let page25 = "https://rickandmortyapi.com/api/character/?page=25";
let page26 = "https://rickandmortyapi.com/api/character/?page=26";
let page27 = "https://rickandmortyapi.com/api/character/?page=27";
let page28 = "https://rickandmortyapi.com/api/character/?page=28";
let page29 = "https://rickandmortyapi.com/api/character/?page=29";
let page30 = "https://rickandmortyapi.com/api/character/?page=30";
let page31 = "https://rickandmortyapi.com/api/character/?page=31";
let page32 = "https://rickandmortyapi.com/api/character/?page=32";
let page33 = "https://rickandmortyapi.com/api/character/?page=33"; 
let page34 = "https://rickandmortyapi.com/api/character/?page=34";

const res1 = axios.get(page1);
const res2 = axios.get(page2);
const res3 = axios.get(page3);
const res4 = axios.get(page4);
const res5 = axios.get(page5);
const res6 = axios.get(page6);
const res7 = axios.get(page7);
const res8 = axios.get(page8);
const res9 = axios.get(page9);
const res10 = axios.get(page10);
const res11 = axios.get(page11);
const res12 = axios.get(page12);
const res13 = axios.get(page13);
const res14 = axios.get(page14);
const res15 = axios.get(page15);
const res16 = axios.get(page16);
const res17 = axios.get(page17);
const res18 = axios.get(page18);
const res19 = axios.get(page19);
const res20 = axios.get(page20);
const res21 = axios.get(page21);
const res22 = axios.get(page22);
const res23 = axios.get(page23);
const res24 = axios.get(page24);
const res25 = axios.get(page25);
const res26 = axios.get(page26);
const res27 = axios.get(page27);
const res28 = axios.get(page28);
const res29 = axios.get(page29);
const res30 = axios.get(page30);
const res31 = axios.get(page31);
const res32 = axios.get(page32);
const res33 = axios.get(page33); 
const res34 = axios.get(page34);


axios
    .all([res1, res2, res3, res4, res5, res6, res7, res8, res9, res10, res11, res12,  res13, res14, res15, res16, res17, res18, res19, res20, res21, res22, res23, res24, res25, res26, res27, res28, res29, res30, res31, res32, res33, res34])
  .then(
    axios.spread((...responses) => {
        const response1 = responses[0].data.results;
        const response2 = responses[1].data.results;
        const response3 = responses[2].data.results;
        const response4 = responses[3].data.results;
        const response5 = responses[4].data.results;
        const response6 = responses[5].data.results;
        const response7 = responses[6].data.results;
        const response8 = responses[7].data.results;
        const response9 = responses[8].data.results;
        const response10 = responses[9].data.results;
        const response11 = responses[10].data.results;
        const response12 = responses[11].data.results;
        const response13 = responses[12].data.results;
        const response14 = responses[13].data.results;
        const response15 = responses[14].data.results;
        const response16 = responses[15].data.results;
        const response17 = responses[16].data.results;
        const response18 = responses[17].data.results;
        const response19 = responses[18].data.results;
        const response20 = responses[19].data.results;
        const response21 = responses[20].data.results;
        const response22 = responses[21].data.results;
        const response23 = responses[22].data.results;
        const response24 = responses[23].data.results;
        const response25 = responses[24].data.results;
        const response26 = responses[25].data.results;
        const response27 = responses[26].data.results;
        const response28 = responses[27].data.results;
        const response29 = responses[28].data.results;
        const response30 = responses[29].data.results;
        const response31 = responses[30].data.results;
        const response32 = responses[31].data.results;
        const response33 = responses[32].data.results;
        const response34 = responses[33].data.results;

        // use/access the results
        console.log(response1, response2, response3, response4, response5, response6, response7, response8, response9, response10, response11, response12, response13, response14, response15, response16, response17, response18, response19, response20, response21, response22, response23, response24, response25, response26, response27, response28, response29, response30, response31, response32, response33, response34) ;
        
        // const response1 = () => {
        //     const newArr = [];
        //     responses[0].map((data) => newArr.push(data));
        //     return console.log(newArr);
        // };

        const charArr = [{
        id: null,
        name: "",
        status: "",
        species: "",
        type: "",
        gender: "",
        origin: {
            name: "",
            url: ""
        },
        location: {
            name: "",
            url: ""
        },
        image: "",
        episode: [
            ""
        ],
        url: "",
        created: ""
        }];

        console.log("Character Array: ", charArr)
    })
  )
  .catch(errors => {
    // react on errors.
    console.error(errors);
  });
}
