const data = [
    {
        title: "Hello there",
        description: "Hey i am south Indian guy movie",
        tags: ['movie', 'film', 'action']
    },
    {
        title: "welcome to pak",
        description: "Hey i am south Indian guy movie",
        tags: ['movie', 'film', 'drama']
    },
    {
        title: "welcome to pak hindi",
        description: "Hey i am south Indian guy movie",
        tags: ['movie', 'film', 'drama','hindi']
    }
]


// console.log(queryString)
// console.log(dataString)

function getMatch(source, data) {
    let queryString, dataString;
    queryString = (typeof(source) === 'string') ?
    source?.split(" "): queryString = source;
    dataString = data?.split(" ")
    let common = 0;
    queryString?.forEach((dString) => {
        dataString.forEach((qString) => {
            if (dString.toLowerCase() === qString.toLocaleLowerCase()) { common++ }
        })
    });
    return common;
}

function getCounter(dataSet, query) {
    const value = dataSet.map((item) => {
        const title = getMatch(item.title, query);
        const description = getMatch(item.description, query);
        const tags = getMatch(item.tags, query);
        const result = {
            title: title ,
            description: description,
            tags: tags,
        };
        return result;

    })
    return value;

}

// const result = getMatch(dataString, queryString);
const hehe = getCounter(data,'how can hindi film')


const finalWeight = hehe?.map((item)=> {
    const totalScore = (item.title * 20 % 25) + (item.description * 15 % 20) + (item.tags * 10 %15);
    return totalScore
})

console.log(hehe);
console.log(finalWeight)