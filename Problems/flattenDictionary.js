var testObj = [
    {"US":  
          {"CA":
              {"San Francisco":
                  {"3 42nd Ave":"My Home"}
              }
          }
    },
    {"a":{"b":{"c":{"d":{"e":"f"}, "z":"X"}}, "carlo":"ang"}},
    {"a":{"b":{"c":{"d":{"e":"f"}}}}},
    {"a":"b"},
    {"a":"b"},
    {"c":"d"}
  ];

function flatten(dictionary) {
    
    var result = {};

    var keys = Object.keys(dictionary);

    keys.forEach(key => {
        var value = dictionary[key];
        
        if(typeof value !== 'object') result[key] = value;
        else {
            var childDictionary = flatten(value);
            Object.keys(childDictionary).forEach(childKey => {
                result[key + "." + childKey] = childDictionary[childKey];
            });
        }
    });

    return result;
}

function flattenDictionaryList(list) {
    let results = [];
    list.forEach(dictionary => {
        results.push(flatten(dictionary));
    })
    return results;
}
console.log(flattenDictionaryList(testObj));
//console.log(flatten( ));