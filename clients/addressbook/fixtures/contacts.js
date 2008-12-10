// ==========================================================================
// Addressbook.Contacts Fixtures
// ==========================================================================

require('core') ;

Addressbook.FIXTURES = Addressbook.FIXTURES.concat([

  // TODO: Add your data fixtures here.
  // All fixture records must have a unique guid and a type matching the
  // name of your contact.  See the example below.

   { guid: 1,
     type: 'Contacts',
     firstName: "Michael",
     lastName: "Scott",
	 phonenumber: "703 765 8765",
	 email: "mscott@abc.com",
	 address: "20121 scaterrsville Terrace, Ashburn VA - 20148",
	 classid: "family"
   },
  
   { guid: 2,
     type: 'Contacts',
     firstName: "Dwight",
     lastName: "Schrute",
	 phonenumber: "571 338 7755",
	 email: "dschrute@va.com",
	 address: "10098 fairfax dr, Fairfax VA - 22033",
	 classid: "work"
   },
  
   { guid: 3,
     type: 'Contacts',
     firstName: "Jim",
     lastName: "Halpert",
	 phonenumber: "876 543 3365",
	 email: "jimhalpert@gmail.com",
	 address: "98668 148th Ave, Bellevue WA - 20111",
	 classid: "friend"
   },
  
   { guid: 4,
     type: 'Contacts',
     firstName: "Pam",
     lastName: "Beesly",
	 phonenumber: "901 765 3453",
	 email: "pambeesly@hotmail.com",
	 address: "11705 Olde English Dr., Apt F Reston VA - 20190",
	 classid: "family"
   },
  
   { guid: 5,
    type: 'Contacts',
     firstName: "Ryan",
     lastName: "Howard",
	 phonenumber: "703 543 7654",
	 email: "rhoward@vt.edu",
	 address: "2327 Gapsville Terrace, Reston VA - 20190",
	 classid: "work"
   },

   { guid: 6,
    type: 'Contacts',
     firstName: "Dave",
     lastName: "Howard",
	 phonenumber: "703 543 7654",
	 email: "rhoward@vt.edu",
	 address: "2327 Gapsville Terrace, Reston VA - 20190",
	 classid: "work"
   },

   { guid: 7,
    type: 'Contacts',
     firstName: "Tom",
     lastName: "Charles",
	 phonenumber: "703 543 7654",
	 email: "rhoward@vt.edu",
	 address: "2327 Gapsville Terrace, Reston VA - 20190",
	 classid: "work"
   },

]);
