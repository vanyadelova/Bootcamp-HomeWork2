module.exports.groupAdultsByAgeRange = function groupAdultsByAgeRange(
  people = []
) {
  const result = {};
  const result1 = people.filter(grp => {
    return grp.age <= 20;
  });
  const result2 = people.filter(grp => {
    return grp.age <= 30 && grp.age > 20;
  });
  const result3 = people.filter(grp => {
    return grp.age <= 40 && grp.age > 30;
  });
  const result4 = people.filter(grp => {
    return grp.age <= 50 && grp.age > 40;
  });
  const result5 = people.filter(grp => {
    return grp.age >= 51;
  });

  if (result1.length > 0) {
    result["20 and younger"] = result1;
  }
  if (result2.length > 0) {
    result["21-30"] = result2;
  }
  if (result3.length > 0) {
    result["31-40"] = result3;
  }
  if (result4.length > 0) {
    result["41-50"] = result4;
  }
  if (result5.length > 0) {
    result["51 and older"] = result5;
  }
  return result;
};
