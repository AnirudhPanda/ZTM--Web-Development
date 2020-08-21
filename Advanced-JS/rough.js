let obj = {
    user0: 'Santa',
    user1: 'martha',
    user3: 'Neon'
}

Object.keys(obj).forEach((key, index) => {
    console.log(key, obj[key]);
})

Object.values(obj).forEach(value => {
    console.log(value);
})
Object.entries(obj).forEach(value => {
    console.log(value);
})