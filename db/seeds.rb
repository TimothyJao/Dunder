# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all

User.create({username: "MichaelScott", password:"MichaelScott"})  #1
User.create({username: "JimHalpert", password:"JimHalpert"}) #2
User.create({username: "DwightSchrute", password:"DwightSchrute"}) #3
User.create({username: "PamelaBeesly", password:"PamelaBeesly"}) #4
User.create({username: "KevinMalone", password:"KevinMalone"}) #5
User.create({username: "AndyBernard", password:"AndyBernard"}) #6
User.create({username: "AngelaMartin", password:"AngelaMartin"}) #7
User.create({username: "TobyFlenderson", password:"TobyFlenderson"}) #8
User.create({username: "StanleyHudson", password:"StanleyHudson"}) #9
User.create({username: "KellyKapoor", password:"KellyKapoor"}) #10
User.create({username: "MeredithPalmer", password:"MeredithPalmer"}) #11
User.create({username: "PhyllisVance", password:"PhyllisVance"}) #12
User.create({username: "OscarMartinez", password:"OscarMartinez"}) #13
User.create({username: "RyanHoward", password:"RyanHoward"}) #14
User.create({username: "Creed Bratton", password: "BOBODDY"}) #15

Server.destroy_all

Server.create({name: "Dunder Mifflin", owner_id: 1, url: "5JX1ng"})
Server.create({name: "HIDE FROM MICHAEL", owner_id: 2, url: "NnxYhR"})
Server.create({name: "Party Planning Committee", owner_id: 1, url: "w6c5D4"})
Server.create({name: "Creed's Thoughts", owner_id: 15, url:"mG6dAy"})

UserServer.destroy_all

UserServer.create({server_id: 1, user_id: 1})
UserServer.create({server_id: 1, user_id: 2})
UserServer.create({server_id: 1, user_id: 3})
UserServer.create({server_id: 1, user_id: 4})
UserServer.create({server_id: 1, user_id: 5})
UserServer.create({server_id: 1, user_id: 6})
UserServer.create({server_id: 1, user_id: 7})
UserServer.create({server_id: 1, user_id: 8})
UserServer.create({server_id: 1, user_id: 9})
UserServer.create({server_id: 1, user_id: 10})
UserServer.create({server_id: 1, user_id: 11})
UserServer.create({server_id: 1, user_id: 12})
UserServer.create({server_id: 1, user_id: 13})
UserServer.create({server_id: 1, user_id: 14})
UserServer.create({server_id: 1, user_id: 15})

UserServer.create({server_id: 2, user_id: 2})
UserServer.create({server_id: 2, user_id: 4})
UserServer.create({server_id: 2, user_id: 5})
UserServer.create({server_id: 2, user_id: 6})
UserServer.create({server_id: 2, user_id: 7})
UserServer.create({server_id: 2, user_id: 8})
UserServer.create({server_id: 2, user_id: 9})
UserServer.create({server_id: 2, user_id: 10})
UserServer.create({server_id: 2, user_id: 11})
UserServer.create({server_id: 2, user_id: 12})
UserServer.create({server_id: 2, user_id: 13})
UserServer.create({server_id: 2, user_id: 14})
UserServer.create({server_id: 2, user_id: 15})

UserServer.create({server_id: 3, user_id: 1})
UserServer.create({server_id: 3, user_id: 4})
UserServer.create({server_id: 3, user_id: 7})
UserServer.create({server_id: 3, user_id: 12})

UserServer.create({server_id: 4, user_id: 1})
UserServer.create({server_id: 4, user_id: 2})
UserServer.create({server_id: 4, user_id: 4})
UserServer.create({server_id: 4, user_id: 4})
UserServer.create({server_id: 4, user_id: 5})
UserServer.create({server_id: 4, user_id: 6})
UserServer.create({server_id: 4, user_id: 7})
UserServer.create({server_id: 4, user_id: 8})
UserServer.create({server_id: 4, user_id: 9})
UserServer.create({server_id: 4, user_id: 10})
UserServer.create({server_id: 4, user_id: 11})
UserServer.create({server_id: 4, user_id: 12})
UserServer.create({server_id: 4, user_id: 13})
UserServer.create({server_id: 4, user_id: 14})
UserServer.create({server_id: 4, user_id: 15})

Channel.destroy_all

#seed server channels

Channel.create({server_id: 1, name: "general"}) #1
Channel.create({server_id: 1, name: "announcements"}) #2
Channel.create({server_id: 1, name: "complaints"}) #3
Channel.create({server_id: 1, name: "music recommendations"}) #4

Channel.create({server_id: 2, name: "general"}) #5
Channel.create({server_id: 2, name: "Venting"}) #6
Channel.create({server_id: 2, name: "Things Michael Says"}) #7
Channel.create({server_id: 2, name: "Michael Jokes"}) #8

Channel.create({server_id: 3, name: "general"}) #9
Channel.create({server_id: 3, name: "Events"}) #10
Channel.create({server_id: 3, name: "Planning Time!"}) #11

Channel.create({server_id: 4, name: "general"}) #12

#seed DM channels
#Michael DMs
Channel.create({name: "DwightSchrute", sender_id: 3, recipient_id: 1}) #13
Channel.create({name: "AndyBernard", sender_id: 6, recipient_id: 1}) #14
Channel.create({name: "JimHalpert", sender_id: 1, recipient_id: 2}) #15
Channel.create({name: "PamelaBeesly", sender_id: 1, recipient_id: 4}) #16


#Jim Halpert DMs
Channel.create({name: "DwightSchrute", sender_id: 3, recipient_id: 2}) #17
Channel.create({name: "PamelaBeesly", sender_id: 2, recipient_id: 4}) #18
Channel.create({name: "KevinMalone", sender_id: 5, recipient_id: 2}) #19
Channel.create({name: "CreedBratton", sender_id: 15, recipient_id: 2}) #20

#Dwight Schrute DMs
Channel.create({name: "AngelaMartin", sender_id: 3, recipient_id: 7}) #21
Channel.create({name: "OscarMartinez", sender_id: 3, recipient_id: 13}) #22

#Pamela Beesly DMs
Channel.create({name: "AngelaMartin", sender_id: 4, recipient_id: 7}) #23
Channel.create({name: "PhyllisVance", sender_id: 4, recipient_id: 12}) #24
Channel.create({name: "RyanHoward", sender_id: 14, recipient_id: 4}) #25
Channel.create({name: "KellyKapoor", sender_id: 10, recipient_id: 4}) #26

#seed server messages

