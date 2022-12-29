exports = module.exports = exports = module.exports = function() {
  var mod = {
    exists: function(list, key, value, parent) {
      // console.log(list, key, value, parent);
      if (!app.has(parent)) parent = "";
      for (var listKey in list) {
        var item = list[listKey];
        if (app.has(parent)) {
          if (item[parent][key] === value) return item;
        } else {
          if (item[key] === value) return item;
        }
      }
    },
    has: function(value) {
      return typeof value !== "undefined" && value !== null && value !== "" && value !== false;
    },
    changed: function(left, right, match, skip) {
      if (!app.has(skip)) skip = [];
      for (var i=0; i<=match.length-1; i++) {
        var key = match[i];
        if (
          skip.indexOf(key) < 0
          && left[key] !== right[key]
          && (mod.has(left[key]) || mod.has(right[key]))
        ) {
          // console.log(key, left[key], right[key], match);
          return key;
        }
      }
    },
    keyProperCase: function(obj) {
      for (var key in obj) {
        var value = obj[key];
        delete obj[key];
        key = app.utils.string.toProperCase(key);
        obj[key] = value;
      }
    }
  };
  return mod;
}