// ==========================================================================
// Addressbook.Contacts
// ==========================================================================

require('core');

/** @class

  (Document your class here)

  @extends SC.Record
  @author AuthorName
  @version 0.1
*/
Addressbook.Contacts = SC.Record.extend(
/** @scope Addressbook.Contacts.prototype */ {

  // TODO: Add your own code here.

  //dataSource: Contacts.server,
  dataSource: Addressbook.server,
  resourceURL: 'contacts',

  getWorkContacts: function() {
        //alert(Addressbook.Contacts.find('family'));
        if(this.get('classid') === "work")
        {
                    return [this.get('firstName'), this.get('lastName'), this.get('phonenumber'), this.get('email'), this.get('address'), this.get('classid')].compact().join(' ');
        }
        else
        {
                return null;
        }

  }.property('firstName', 'lastName', 'phonenumber', 'email', 'address', 'classid'),

  // TODO: Add your own code here.
  getFamilyContacts: function() {
        //alert("In Contact.js ---- changes");
        //alert("getFamilyContacts");

        //alert(Addressbook.Contacts.find('family'))
        if(this.get('classid') === "family")
        {
        return [this.get('firstName'), this.get('lastName'), this.get('phonenumber'), this.get('email'), this.get('address'), this.get('classid')].compact().join(' ');
    }

  }.property('firstName', 'lastName', 'phonenumber', 'email', 'address', 'classid'),

  getFriendsContacts: function() {
        //alert("In Contact.js ---- changes");
        //alert("getFamilyContacts");

        //alert(Addressbook.Contacts.find('family'))
        if(this.get('classid') === "friend")
        {
        return [this.get('firstName'), this.get('lastName'), this.get('phonenumber'), this.get('email'), this.get('address'), this.get('classid')].compact().join(' ');
    }

  }.property('firstName', 'lastName', 'phonenumber', 'email', 'address', 'classid')

}) ;

Addressbook.Contacts.allRecords = SC.Collection.create({ recordType: Addressbook.Contacts });
