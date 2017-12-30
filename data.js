module.exports = [
    {
        keys: ['functional', 'map','array'], 
        name: 'Array.map', 
        description: 'creates a new array with the results of calling a provided function on every element in the calling array', 
        examples:[
            {
                name:'example 1',
                code:'var array1 = [1, 4, 9, 16];' +  
                    '// pass a function to map'+
                    'const map1 = array1.map(x => x * 2);'+
                    'console.log(map1);'+ 
                    '// expected output: Array [2, 8, 18, 32]'
        }]
    }
]

