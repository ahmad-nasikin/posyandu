
module.exports = (id_bayi, list_vaksin) => {
  let bulk = [];

  for (var i = 0; i <= list_vaksin.length - 1; i++) {
    let obj = {};
    obj.BayiId   = id_bayi;
    obj.VaksinId = list_vaksin[i].id;
    obj.sudah    = 0;
    bulk.push(obj)
  }

  return bulk;
}