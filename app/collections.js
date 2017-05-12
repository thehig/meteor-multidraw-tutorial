const Beers = new Meteor.Collection('Beers');

Meteor.methods({
  insertBeer(numBeers, date) {
    check(parseInt(numBeers, 10), Number);
    check(date, Date);

    return Beers.insert({ beers: numBeers, date });
  },
  removeBeer(id) {
    check(id, String);
    return Beers.remove(id);
  },
});
