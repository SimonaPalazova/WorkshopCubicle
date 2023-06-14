const Accessory = require('../models/Accessory');

exports.getAll = () => Accessory.find();

exports.create = (accessoryData) => {
    Accessory.create(accessoryData);
}

exports.getOthers = (accessoriesIds) => Accessory.find({_id: {$nin: accessoriesIds}});