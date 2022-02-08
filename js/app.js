// console.log('YOO SEMANGAT');
var  firstName = 'Alvino gartner';

firstName = 'Mia';
 console.log(firstName);

 // const tidak bisa di isi lagi kecuali isinya array atau objek
 const numbers = ['1', '2', 3];

 numbers[2] = 'belajarlah sampai mati';
 console.log(numbers);

 if (true){
     //var bisa di tanggil di luar dari blog program
     var name = 'Alvino';

     // sedangkan let tidak bisa di panggil di luar blog program
     let lastName = 'Gartner';
 }

console.log(name);

// console.log(lastName);


/**
 * ?switch case digunakan untuk kondisi > 4
 * !sedangkan if digunakan untuk kondisi < 4
 */

const number = 25

// !! di gunakan untuk mengecek ada tidak nilai di dalam data tersebut
console.log(!!number);
let age = 26;
switch (age) {
    case 26:
        console.log(age);
        break;
    case 27:
        console.log(age);
        break;
    case 28:
        console.log(age);
        break;
    case 29:
        console.log(age);
        break;
    case 30:
        console.log(age);
        break;
    
    default:
        console.log('undifined')
        break;
}

setTimeout(function(){
    console.log('Alvino Gartner');
},2000);

let no = 1;

// untuk menjalankan fungsi secara terus menerus dengan batasan waktu
// setInterval(() => {
//     no++;
//     console.log(no);
// }, 1000);



const poeple = [
    {
        fistName :'Alvino',
        lastName : 'Gartner',
        age : 26
    },
    {
        fistName :'Alvino',
        lastName : 'Gartner',
        age : 25
    },
    {
        fistName :'Alvino',
        lastName : 'Gartner',
        age : 27
    },
    {
        fistName :'Alvino',
        lastName : 'Gartner',
        age : 29
    },
    {
        fistName :'Alvino',
        lastName : 'Gartner',
        age : 30
    },
];

const findPoeple = poeple.find((item) => item.age > 27);

// filter
const filterPeople = poeple.filter((item) => {
    return item.age > 26;
});

// map
const mapPeople = filterPeople.map((item) => {
    return {
        name : `${item.fistName} ${item.lastName}`,
        age : item.age,
    };
});
console.log(findPoeple);

/**
* !YT parsinta
* ?menit 8 : 41 
* * link https://www.youtube.com/watch?v=0dGd-0mM4Ac
*/