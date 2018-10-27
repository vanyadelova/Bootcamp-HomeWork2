// Creating an exprting module:

module.exports.groupAdultsByAgeRange = function groupAdultsByAgeRange(people){

    const result = { '20 and younger': [ { name: 'John', age: 20 } ] }
    const result2 = { 
        '31-40': [ { name: 'Anna', age: 31 }, { name: 'John', age: 32 } ]}
        
        const result3 = { 
            '41-50': [ { name: 'Maria', age: 45 }, { name: 'Daniel', age: 44 } ]}

            const result4 = { 
                '51 and older': [ { name: 'Hank', age: 60 }, { name: 'Peter', age: 52 } ]}

            }
           
            let filtered = groupAdultsByAgeRange.filter(val => {
                return val.age <= 20;
              });

              let filtered2 = groupAdultsByAgeRange.filter(val => {
                return val.age <= 40 && val.age > 30;
              });
        
              let filtered3 = groupAdultsByAgeRange.filter(val => {
                return val.age <= 50 && val.age > 40;
              });
    

              let filtered4 = groupAdultsByAgeRange.filter(val => {
                return val.age >= 51;
              });

  





