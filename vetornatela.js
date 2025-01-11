let num = [5,2,6,9,4]
num.sort()

/*
for (let pos=0; pos<num.length;pos++){
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
} */

for (let pos in num) {
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}