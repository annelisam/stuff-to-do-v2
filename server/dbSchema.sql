CREATE DATABASE project2;

USE project2;

INSERT INTO users (name, email) VALUES ('steve', 'steve@gmail.com');
INSERT INTO users (name, email) VALUES ('bill', 'bill@gmail.com');
INSERT INTO users (name, email) VALUES ('will', 'will@gmail.com');

INSERT INTO events (name, description, urlPhoto, dateTime, address, city, state, zipCode, lat, lng, UserId) VALUES ('Party', 'Party for the poeple', 'http://www.latimes.com/resizer/kDNdvau5NTBtXp2HrYs5Fl7E9eo=/1400x0/arc-anglerfish-arc2-prod-tronc.s3.amazonaws.com/public/Y7LPVSFQTZBEBA5F5N27BNMGTU.jpg', '2018-06-10 21:00:00', '757 Westwood Plaza', 'Los Angeles', 'CA', '90095', '34.066482', '-118.445070', 1);
INSERT INTO events (name, description, urlPhoto, dateTime, address, city, state, zipCode, lat, lng, UserId) VALUES ('BBQ', 'BBQ for the poeple', 'http://www.dannyboyzbbq.com/images/ribslarge.jpg', '2018-06-15 21:00:00', '10970 Le Conte Ave', 'Los Angeles', 'CA', '90024', '34.063520', '-118.447726', 2);
INSERT INTO events (name, description, urlPhoto, dateTime, address, city, state, zipCode, lat, lng, UserId) VALUES ('Art Show', 'Art Show for the poeple', 'http://blog.theheartbandits.com/wp-content/uploads/2012/08/date-idea.jpg', '2018-06-25 21:00:00', '962 Hilgard Ave', 'Los Angeles', 'CA', '90024', '34.062177', '-1118.441137', 3);

