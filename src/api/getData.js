const getBeginnigData = async function() {
    const response = await fetch("./data/data.json")
    if (response.status == 200) {
        let data = await response.json()
        return data.beginningText
    } else {
        new Error(response.statusText)
    }
} 

const getEndingData = async function() {
    const response = await fetch("./data/data.json")
    if (response.status == 200) {
        let data = await response.json()
        return data.endingText
    } else {
        new Error(response.statusText)
    }
} 

const getDataMachine = async function(machineName) {
    const response = await fetch("../data/dataMachines.json")
    if (response.status == 200) {
        let data = await response.json()
        console.log("data : " + data.infosMachine[machineName])
        return data.infosMachine[machineName]
    } else {
        new Error(response.statusText)
    }
} 

const getGalleryMachines = async function() {
    const response = await fetch("./data/dataMachines.json")
    if (response.status == 200) {
        let data = await response.json()
        return data.machinesGallery
    } else {
        new Error(response.statusText)
    }
} 

const getDataQuestions = async function() {
    const response = await fetch("./data/dataQuestions.json")
    if (response.status == 200) {
        let data = await response.json()
        return data.questions
    } else {
        new Error(response.statusText)
    }
} 


export { getBeginnigData, getDataMachine, getGalleryMachines, getDataQuestions, getEndingData }
