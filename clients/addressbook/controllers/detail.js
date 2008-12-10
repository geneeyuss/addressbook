// ==========================================================================
// Addressbook.DetailController
// ==========================================================================

require('core');

/** @class

  (Document Your View Here)

  @extends SC.Object
  @author AuthorName
  @version 0.1
  @static
*/
Addressbook.detailController = SC.ObjectController.create(
/** @scope Addressbook.detailController */ {

  // TODO: Add your own code here.
        contentBinding: 'Addressbook.masterController.selection',

        commitChangesImmediately: false,

        createRecord: function() {
        //alert("While Recording");
    //return [this.get('firstName'), this.get('lastName'), this.get('phonenumber')].compact().join(' ');
    Addressbook.Contacts.newRecord({ 'guid': this.get('guid'), 'firstName': this.get('firstName'), 'lastName': this.get('lastName'), 'phonenumber': this.get('phonenumber'), 'email': this.get('email'), 'address': this.get('address'), 'classid': this.get('classid')  });
    },

    deleteRecord: function() {
        //alert("While Deleting");
    //return [this.get('firstName'), this.get('lastName'), this.get('phonenumber')].compact().join(' ');
    //Addressbook.Contacts.removeRecord({ 'guid': this.get('guid'), 'firstName': this.get('firstName'), 'lastName': this.get('lastName'), 'phonenumber': this.get('phonenumber')  });
        Addressbook.Contacts.find(this.get('guid')).destroy();
        //this.destroy;
        //alert(this.isDeleted);
    }

}) ;
