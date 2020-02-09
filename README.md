## Hack4Impact Spring '20 Bootcamp challenge

## Bootcamp deliverable - due Feb 8th, 2020
Notes:
I was not able to test this code because of an error I was unable to solve involving a conflict between the mongodb modules using the node standard library and react native. Before implementing the database, I also had a lot of difficulty even getting the connection event to trigger or getting the expo packager to run on my phone or on an android emulator, so I didn't get a lot of time to work on fleshing out the new additions. These issues were likely caused by connection problems on the pc and incorrect or incomplete package installations which I had to resolve. To fix the connection problem I had to downgrade to a previous version of socket.io

The idea of the implementation was to write to the database the users name and socket.id when they logged in, and then give the optional prompt to input another user's name, which if matched in the database would enter a conversation limited to that user using the io.emit function. This is admittedly incomplete since the database could match a user not currently logged in, a problem solved by a proper ui with a message history and multiple threads, but I could not fix the error.
