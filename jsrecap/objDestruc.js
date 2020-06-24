let thingToDo = {
    morning: 'Exercise',
    afternoon: 'Work',
    evening: 'Code',
    night: ['Sleep', 'Dream']
}

//Destructuring
let {morning, afternoon} = thingToDo;
morning = 'Run'
console.log(morning, '-', afternoon)

let uniStudent = ({name, university}) => {
    // let {name, university} = student -- Other way
    console.log(`${name} from ${university}`)
}

uniStudent({
    name: 'Ryan',
    university: 'FMU'
})