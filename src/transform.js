// Creating an exprting module:

module.exports.groupAdultsByAgeRange = function groupAdultsByAgeRange(people) {
  const result = {"20 and younger": { between: 0, and: 20 }};
  const result1 = {"21-30": { between: 21, and: 30 }};
  const result2 = {"31-40": { between: 31, and: 40 }};
  const result3 = {"41-50": { between: 41, and: 50 }};
  const result4 = {"51 and older": { between: 51, and: older }};

let filtered = groupAdultsByAgeRange.filter(val => {
  return val.age <= 20;
});

let filtered1 = groupAdultsByAgeRange.filter(val => {
  return val.age <= 30 && val.age > 20;
});

let filtered2 = groupAdultsByAgeRange.filter(val => {
  return val.age <= 40 && val.age > 30;
});

let filtered3 = groupAdultsByAgeRange.filter(val => {
  return val.age <= 50 && val.age > 40;
});

let filtered4 = groupAdultsByAgeRange.filter(val => {
  return val.age >= 51;
})




