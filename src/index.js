/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  // your implementation
  var count=0 , j=0; 

  for(var i=0;i<preferences.length;i++){
    var pref1=preferences[i]-1;
    var pref2=preferences[pref1]-1;
    var pref3=preferences[pref2]-1;

    if(pref1 == pref2 ||
       pref2 == pref3 ||
       pref3 == pref1)
      continue;

    if(i==pref3)
      count++; 
  }
  count/=3;

  return count;
};
