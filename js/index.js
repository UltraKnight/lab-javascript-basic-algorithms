// Iteration 1: Names and Input
let hacker1 = 'Vanderlei';
console.log(`The driver's name is ${hacker1}`);
let hacker2 = 'Marcos';
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
} else if(hacker2.length > hacker1.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
} else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);
}

// Iteration 3: Loops
let tempName = '';
for (let i = 0; i < hacker1.length; i++) {
    tempName += hacker1[i].toUpperCase() + ' ';
}
console.log(tempName);

let navigatorsName = '';
for (let i = hacker2.length - 1; i >= 0; i--) {
    navigatorsName += hacker2[i];
}
console.log(navigatorsName);

if(hacker1 < hacker2) {
    console.log("The driver's name goes first.");
} else if(hacker2 < hacker1) {
    console.log("Yo, the navigator goes first definitely.");
} else {
    console.log("What?! You both have the same name?");
}

//Bonus 1
let text = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi consectetur metus a risus condimentum faucibus. Nulla a pretium sapien. Vestibulum eget gravida nisl. Aenean vehicula et arcu non interdum. Vestibulum libero lectus, faucibus nec erat eu, bibendum aliquam mauris. Curabitur posuere malesuada nisl, et pretium felis pellentesque id. Sed pharetra vestibulum efficitur. In rutrum risus a pulvinar mattis. Proin sed molestie arcu. Aliquam erat volutpat. Praesent at nunc eu mauris tincidunt gravida. Phasellus tincidunt nulla eu urna rutrum imperdiet. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
Mauris mattis est commodo malesuada fringilla. Proin eu enim turpis. Cras eleifend felis urna, sit amet pharetra ipsum hendrerit consequat. Aenean lobortis, arcu vitae efficitur ultricies, sem tellus ultrices dui, sed finibus nulla nibh ac sapien. In gravida non lorem sed pretium. Curabitur sem dui, porttitor sit amet scelerisque sit amet, euismod sed ante. Aenean a felis fermentum, ullamcorper sem id, pretium risus. Proin congue congue lectus, nec varius tellus bibendum vel. Proin nec vehicula tellus. Duis consectetur eget nulla at laoreet. Donec non nunc pharetra, accumsan justo id, rhoncus nunc. Nunc sapien quam, ullamcorper sed tellus vel, fermentum posuere ligula. Aliquam ac lectus nisl. Sed at urna nec lorem elementum laoreet id et enim. Mauris pellentesque ante eget pellentesque finibus.
Aenean iaculis nulla nec nulla scelerisque, faucibus condimentum lorem laoreet. Nulla elementum lobortis lorem a semper. Vestibulum et vulputate neque. Fusce mattis rhoncus odio eget tempor. Mauris placerat ex libero, a elementum dui sagittis vitae. Proin quis mi sed mi fringilla tristique. Suspendisse aliquet tortor nec pulvinar varius. Vivamus vel lectus elementum, rutrum velit sed, pulvinar nunc. Nunc in augue ligula. Sed turpis lorem, scelerisque eget commodo at, aliquam in turpis. Donec a consectetur urna. Mauris sollicitudin pharetra tortor, et aliquam sem blandit eu. Donec vitae tempus ante, vitae pretium mauris. Vestibulum eget ante sed neque imperdiet interdum.`;

//match retorna um array (de palavras) e length o tamanho desse array
let numOfWords = text.match(/(\w+)/g).length; //w for alphanumerical characteres and + for one or more repeated characters, g to not stop at the first match
console.log(numOfWords);

//Bonus 2
let phraseToCheck = "Amor, Roma";
let phraseReverse = "";

//remove punctuations, spaces and put all letters in lower case
phraseToCheck = phraseToCheck.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()] /g, "").toLowerCase();

for(let i = phraseToCheck.length - 1; i >= 0; i--) {
    phraseReverse += phraseToCheck[i];
}

//compare the phrase with its backwards version
if (phraseToCheck === phraseReverse) {
    console.log("It's a Palindrome");
} else {
    console.log("It's not a Palindrome");
}