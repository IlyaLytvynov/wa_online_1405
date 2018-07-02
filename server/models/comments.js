/**
 * Created by IlyaLitvinov on 01.12.15.
 */
var _ = require('lodash');
var items = [
    {
        author: 'Jack Jones',
        date: new Date(),
        text: 'Hello world, I am a dummy comment',
        id: guid()
    },
    {
        author: 'John Smith',
        date: new Date(),
        text: 'Hello world, I am a dommy comment!!',
        id: guid()
    }];

function guid() {
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }
  return s4() + s4()
}

var commentsModel = {
    setItem: function (data) {
        data.id = guid();
        data.date = new Date();

        items.push(data);
        console.log('add to Array');
        return items;
    },
    getItems: function () {
        return items;
    },
    updateItem: function (data, id) {
        var index = items.indexOf(_.find(items, function (item) {
            return item.id === id;
        }));

        if(index === -1) {
            throw new Error("Wrong id provided!")
        }
        var updatedObject = items[index];

        updatedObject.date = new Date();
        updatedObject.author = data.author || updatedObject.author;
        updatedObject.text = data.text ||  updatedObject.text;
        console.log(data);
        return updatedObject;
    },
    deleteItem: function (id) {
        var index = items.indexOf(_.find(items, function (item) {
            return item.id === id;
        }));

        if (index === -1) {
            return false;
        }

        items.splice(index, 1);
        return items;
    }
};

module.exports = commentsModel;
