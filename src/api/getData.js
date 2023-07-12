const getData = async function() {
    const response = await fetch("./data.json")
    if (response.status == 200) {
        let data = await response.json()
        console.log(data)
        return data
    } else {
        new Error(response.statusText)
    }
} 

const getHomeData = async function() {
    const response = await fetch("./data.json")
    if (response.status == 200) {
        let data = await response.json()
        return data.homeText
    } else {
        new Error(response.statusText)
    }
} 

const getDataMachines = async function() {
    const response = await fetch("./data.json")
    if (response.status == 200) {
        let data = await response.json()
        return data.machines
    } else {
        new Error(response.statusText)
    }
} 

const getDataQuestions = async function() {
    const response = await fetch("./data.json")
    if (response.status == 200) {
        let data = await response.json()
        return data.questions
    } else {
        new Error(response.statusText)
    }
} 


export { getData, getHomeData, getDataMachines, getDataQuestions }
