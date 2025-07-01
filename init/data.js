const sampleListings = [
    {
      "name": "Charles Murray",
      "contact": 8632956167,
      "email": "danielle87@andrade-rivera.com",
      "address": "91137 Turner Roads, New Jay, AZ 71709",
      "category": "Work"
    },
    {
      "name": "Brandon Stone",
      "contact": 3725021874,
      "email": "ijones@fleming.org",
      "address": "227 Robinson Haven Apt. 911, Victorville, MA 49755",
      "category": "School"
    },
    {
      "name": "James Frye",
      "contact": 6282959278,
      "email": "deborah49@yahoo.com",
      "address": "2320 Curtis Pine, North Loriville, AR 71329",
      "category": "Work"
    },
    {
      "name": "Dennis Roberts",
      "contact": 5050022507,
      "email": "bryanwilson@collins-flores.com",
      "address": "40532 Jody Skyway, Samanthaside, GA 73083",
      "category": "Friend"
    },
    {
      "name": "Michelle Daugherty",
      "contact": 4029906554,
      "email": "smithjohn@yahoo.com",
      "address": "USCGC Gibson, FPO AA 77981",
      "category": "Client"
    },
    {
      "name": "Emily Johnson",
      "contact": 9123456789,
      "email": "emily.johnson@example.com",
      "address": "123 Maple Street, Springfield, IL 62704",
      "category": "Friend"
    },
    {
      "name": "Michael Smith",
      "contact": 9876543210,
      "email": "michael.smith@example.com",
      "address": "456 Oak Avenue, Lincoln, NE 68508",
      "category": "Work"
    },
    {
      "name": "Sarah Williams",
      "contact": 8765432109,
      "email": "sarah.williams@example.com",
      "address": "789 Pine Road, Madison, WI 53703",
      "category": "School"
    },
    {
      "name": "David Brown",
      "contact": 7654321098,
      "email": "david.brown@example.com",
      "address": "321 Elm Street, Columbus, OH 43215",
      "category": "Client"
    },
    {
      "name": "Jessica Davis",
      "contact": 6543210987,
      "email": "jessica.davis@example.com",
      "address": "654 Cedar Lane, Austin, TX 73301",
      "category": "Friend"
    },
    {
      "name": "Daniel Miller",
      "contact": 5432109876,
      "email": "daniel.miller@example.com",
      "address": "987 Birch Boulevard, Denver, CO 80203",
      "category": "Work"
    },
    {
      "name": "Ashley Wilson",
      "contact": 4321098765,
      "email": "ashley.wilson@example.com",
      "address": "159 Spruce Drive, Seattle, WA 98101",
      "category": "School"
    },
    {
      "name": "Christopher Moore",
      "contact": 3210987654,
      "email": "christopher.moore@example.com",
      "address": "753 Aspen Court, Portland, OR 97205",
      "category": "Client"
    },
    {
      "name": "Amanda Taylor",
      "contact": 2109876543,
      "email": "amanda.taylor@example.com",
      "address": "852 Willow Way, Boston, MA 02108",
      "category": "Friend"
    },
    {
      "name": "Joshua Anderson",
      "contact": 1098765432,
      "email": "joshua.anderson@example.com",
      "address": "951 Poplar Street, Nashville, TN 37203",
      "category": "Work"
    },
    {
      "name": "Stephanie Thomas",
      "contact": 9987654321,
      "email": "stephanie.thomas@example.com",
      "address": "357 Redwood Road, Phoenix, AZ 85004",
      "category": "School"
    },
    {
      "name": "Matthew Jackson",
      "contact": 8876543210,
      "email": "matthew.jackson@example.com",
      "address": "246 Cypress Avenue, Atlanta, GA 30303",
      "category": "Client"
    },
    {
      "name": "Laura White",
      "contact": 7765432109,
      "email": "laura.white@example.com",
      "address": "135 Dogwood Drive, Miami, FL 33101",
      "category": "Friend"
    },
    {
      "name": "Andrew Harris",
      "contact": 6654321098,
      "email": "andrew.harris@example.com",
      "address": "864 Magnolia Lane, Chicago, IL 60601",
      "category": "Work"
    },
    {
      "name": "Megan Martin",
      "contact": 5543210987,
      "email": "megan.martin@example.com",
      "address": "753 Palm Street, San Francisco, CA 94102",
      "category": "School"
    },
    {
      "name": "Ryan Thompson",
      "contact": 4432109876,
      "email": "ryan.thompson@example.com",
      "address": "642 Fir Avenue, Dallas, TX 75201",
      "category": "Client"
    },
    {
      "name": "Nicole Garcia",
      "contact": 3321098765,
      "email": "nicole.garcia@example.com",
      "address": "531 Hickory Road, Charlotte, NC 28202",
      "category": "Friend"
    },
    {
      "name": "Justin Martinez",
      "contact": 2210987654,
      "email": "justin.martinez@example.com",
      "address": "420 Maple Lane, Indianapolis, IN 46204",
      "category": "Work"
    },
    {
      "name": "Emily Robinson",
      "contact": 1109876543,
      "email": "emily.robinson@example.com",
      "address": "309 Oak Court, Columbus, OH 43215",
      "category": "School"
    },
    {
      "name": "Brandon Clark",
      "contact": 9998765432,
      "email": "brandon.clark@example.com",
      "address": "198 Pine Street, Denver, CO 80203",
      "category": "Client"
    },
    {
      "name": "Rachel Rodriguez",
      "contact": 8887654321,
      "email": "rachel.rodriguez@example.com",
      "address": "287 Cedar Avenue, Seattle, WA 98101",
      "category": "Friend"
    },
    {
      "name": "Kevin Lewis",
      "contact": 7776543210,
      "email": "kevin.lewis@example.com",
      "address": "176 Birch Boulevard, Portland, OR 97205",
      "category": "Work"
    },
    {
      "name": "Olivia Lee",
      "contact": 6665432109,
      "email": "olivia.lee@example.com",
      "address": "65 Spruce Drive, Boston, MA 02108",
      "category": "School"
    },
    {
      "name": "Ethan Walker",
      "contact": 5554321098,
      "email": "ethan.walker@example.com",
      "address": "54 Aspen Court, Nashville, TN 37203",
      "category": "Client"
    },
    {
      "name": "Chloe Hall",
      "contact": 4443210987,
      "email": "chloe.hall@example.com",
      "address": "43 Willow Way, Phoenix, AZ 85004",
      "category": "Friend"
    },
    {
      "name": "Benjamin Allen",
      "contact": 3332109876,
      "email": "benjamin.allen@example.com",
      "address": "32 Poplar Street, Atlanta, GA 30303",
      "category": "Work"
    },
    {
      "name": "Grace Young",
      "contact": 2221098765,
      "email": "grace.young@example.com",
      "address": "21 Redwood Road, Miami, FL 33101",
      "category": "School"
    },
    {
      "name": "Samuel Hernandez",
      "contact": 1110987654,
      "email": "samuel.hernandez@example.com",
      "address": "10 Cypress Avenue, Chicago, IL 60601",
      "category": "Client"
    },
    {
      "name": "Victoria King",
      "contact": 9999876543,
      "email": "victoria.king@example.com",
      "address": "98 Dogwood Drive, San Francisco, CA 94102",
      "category": "Friend"
    },
    {
      "name": "Alexander Wright",
      "contact": 8888765432,
      "email": "alexander.wright@example.com",
      "address": "87 Magnolia Lane, Dallas, TX 75201",
      "category": "Work"
    },
    {
      "name": "Samantha Lopez",
      "contact": 7777654321,
      "email": "samantha.lopez@example.com",
      "address": "76 Palm Street, Charlotte, NC 28202",
      "category": "School"
    }
];

module.exports = {data: sampleListings};
  