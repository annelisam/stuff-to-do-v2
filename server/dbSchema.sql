CREATE DATABASE project2;

USE project2;

INSERT INTO users (name, email) VALUES ('steve', 'steve@gmail.com');
INSERT INTO users (name, email) VALUES ('bill', 'bill@gmail.com');
INSERT INTO users (name, email) VALUES ('will', 'will@gmail.com');

INSERT INTO events (name, description, urlPhoto, dateTime, address, city, state, zipCode, lat, lng, UserId) VALUES ('Party', 'Party for the poeple', 'http://www.latimes.com/resizer/kDNdvau5NTBtXp2HrYs5Fl7E9eo=/1400x0/arc-anglerfish-arc2-prod-tronc.s3.amazonaws.com/public/Y7LPVSFQTZBEBA5F5N27BNMGTU.jpg', '2018-06-10 21:00:00', '757 Westwood Plaza', 'Los Angeles', 'CA', '90095', '34.066482', '-118.445070', 1);
INSERT INTO events (name, description, urlPhoto, dateTime, address, city, state, zipCode, lat, lng, UserId) VALUES ('BBQ', 'BBQ for the poeple', 'http://www.dannyboyzbbq.com/images/ribslarge.jpg', '2018-06-15 21:00:00', '10970 Le Conte Ave', 'Los Angeles', 'CA', '90024', '34.063520', '-118.447726', 2);
INSERT INTO events (name, description, urlPhoto, dateTime, address, city, state, zipCode, lat, lng, UserId) VALUES ('Art Show', 'Art Show for the poeple', 'http://blog.theheartbandits.com/wp-content/uploads/2012/08/date-idea.jpg', '2018-06-25 21:00:00', '962 Hilgard Ave', 'Los Angeles', 'CA', '90024', '34.062177', '-1118.441137', 3);

INSERT INTO events (name, description, urlPhoto, dateTime, address, city, state, zipCode, lat, lng, UserId) VALUES ('Pug meetup', 'Who’s ready for some March Wagness?! Let\s ring in spring time with curly tails and pug snorts. On Saturday March 24th we are heading back west to LA Pug Meetup favorite, Boneyard Dog Park!', 'https://c1.staticflickr.com/1/77/207445620_37a21f91cd_b.jpg', '2018-03-24 11:00:00', 'Duquesne Avenue', 'Culver City', 'CA', '90230', '34.0139', '-118.3865', 4);

