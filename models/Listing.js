/**
 * Created by sharjeel on 12/12/17.
 */
var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Listing Model
 * =============
 */

var Listing = new keystone.List('Listing', {
    track: true,
    autokey: { path: 'key', from: 'name', unique: true }
});


Listing.add({
    name: { type: String, required: true, initial: true },
    publishedDate: { type: Types.Date, index: true },
    state: { type: Types.Select, options: 'draft, scheduled, active, past', noedit: true },
    startDate: { type: Types.Datetime, required: true, initial: true, index: true, width: 'short', note: 'e.g. 2014-07-15 / 6:00pm' },
    endDate: { type: Types.Datetime, required: true, initial: true, index: true, width: 'short', note: 'e.g. 2014-07-15 / 9:00pm' },
    description: { type: Types.Html, wysiwyg: true },
});


