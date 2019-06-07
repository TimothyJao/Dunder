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
Channel.create({server_id: 2, name: "Michael Jokes"}) #7

Channel.create({server_id: 3, name: "general"}) #8
Channel.create({server_id: 3, name: "Events"}) #9
Channel.create({server_id: 3, name: "Planning Time!"}) #10

Channel.create({server_id: 4, name: "general"}) #11

#seed DM channels
#Michael DMs
Channel.create({name: "DwightSchrute", sender_id: 3, recipient_id: 1}) #12
Channel.create({name: "AndyBernard", sender_id: 6, recipient_id: 1}) #13
Channel.create({name: "JimHalpert", sender_id: 1, recipient_id: 2}) #14
Channel.create({name: "PamelaBeesly", sender_id: 1, recipient_id: 4}) #15


#Jim Halpert DMs
Channel.create({name: "DwightSchrute", sender_id: 3, recipient_id: 2}) #16
Channel.create({name: "PamelaBeesly", sender_id: 2, recipient_id: 4}) #17
Channel.create({name: "KevinMalone", sender_id: 5, recipient_id: 2}) #18
Channel.create({name: "CreedBratton", sender_id: 15, recipient_id: 2}) #19

#Dwight Schrute DMs
Channel.create({name: "AngelaMartin", sender_id: 3, recipient_id: 7}) #20
Channel.create({name: "OscarMartinez", sender_id: 3, recipient_id: 13}) #21

#Pamela Beesly DMs
Channel.create({name: "PhyllisVance", sender_id: 4, recipient_id: 12}) #22
Channel.create({name: "RyanHoward", sender_id: 14, recipient_id: 4}) #23
Channel.create({name: "KellyKapoor", sender_id: 10, recipient_id: 4}) #24

#seed server messages
    #Dunder Mifflin
        #General
            Message.create({sender_id: 8, parent_id: 1, message: "Hi all. This is the new messaging app for Dunder Mifflin. Please use with care and always treat others with respect."})
            Message.create({sender_id: 1, parent_id: 1, message: "So anything that I type here can be seen by anyone?"})
            Message.create({sender_id: 8, parent_id: 1, message: "Yes Michael..."})
            Message.create({sender_id: 1, parent_id: 1, message: "This is your captain speaking, the office will be flying at an altitude of two stories. Look out your left hand window and you will see Vance Refrigeration."})
            Message.create({sender_id: 1, parent_id: 1, message: "HAHAHA ARE YOU SEEING THIS JIM"})
            Message.create({sender_id: 1, parent_id: 1, message: "I am the ghost of salesman past, do not come near me."})
            Message.create({sender_id: 1, parent_id: 1, message: "Can you squeeze sebaceous cyst?"})
            Message.create({sender_id: 1, parent_id: 1, message: "Wait this isn't google"})
            Message.create({sender_id: 1, parent_id: 1, message: "Toby Flenderson to the principal's office. Your mother called, and it appears that you wet the bed again. So you have to get home to wash your sheets because they are yellow and they're wet with your urine."})
            Message.create({sender_id: 1, parent_id: 1, message: "HAHAHAHAHA"})
        #Anncounements
            Message.create({sender_id: 1, parent_id: 2, message: "MEETING IN CONFERENCE ROOM 5 MINUTES"})
            Message.create({sender_id: 1, parent_id: 2, message: "MEETING IN CONFERENCE ROOM 10 MINUTES"})
            Message.create({sender_id: 1, parent_id: 2, message: "Corporate is coming in later this afternoon. Please be on your best behavior for Jan"})
            Message.create({sender_id: 1, parent_id: 2, message: "MEETING IN CONFERENCE ROOM 5 MINUTES"})
            Message.create({sender_id: 1, parent_id: 2, message: "NO ACTUALLY 2 MINUTES"})
            Message.create({sender_id: 1, parent_id: 2, message: "2 SECONDS"})
            Message.create({sender_id: 1, parent_id: 2, message: "Toby's birthday celebration today! Come to the kitchen for some ice cream cake!"})
            Message.create({sender_id: 8, parent_id: 2, message: "Michael today is saturday. Also my birthday isn't until Monday."})
            Message.create({sender_id: 1, parent_id: 2, message: "This is the only party you'll get. We aren't celebrating on Monday. Enjoy your birthday... NOT"})
        #Complaints    
            Message.create({sender_id: 3, parent_id: 3, message: "Michael. Jim replaced my pens with crayons"})    
            Message.create({sender_id: 1, parent_id: 3, message: "Dually Noted"})    
            Message.create({sender_id: 3, parent_id: 3, message: "Michael. Jim put my stapler in jello again"})    
            Message.create({sender_id: 1, parent_id: 3, message: "Dully Noted"})    
            Message.create({sender_id: 3, parent_id: 3, message: "Michael. Jim made me go into the woman's restroom because of a bomb threat"})    
            Message.create({sender_id: 1, parent_id: 3, message: "Duly Noted"}) 
        #Music Recommendations
            Message.create({sender_id: 10, parent_id: 4, message: "Hey ya'll! Check out this new song by Gwen Stefani :)"}) 
            Message.create({sender_id: 10, parent_id: 4, message: "https://www.youtube.com/watch?v=Kgjkth6BRRY"}) 
            Message.create({sender_id: 11, parent_id: 4, message: "No one wants that kiddy music. Let's get some party music up in here!"})
            Message.create({sender_id: 11, parent_id: 4, message: "https://www.youtube.com/watch?v=DUT5rEU6pqM"})
            Message.create({sender_id: 10, parent_id: 4, message: "Um excuse me? That song is like so old. Get with the times you grandma"})
            Message.create({sender_id: 1, parent_id: 4, message: "Yo check out this song Stanley I think you'll like it"})
            Message.create({sender_id: 1, parent_id: 4, message: "https://www.youtube.com/watch?v=wb5KEO9z_kc"})
            Message.create({sender_id: 1, parent_id: 4, message: "Stanley did you see this?"})
            Message.create({sender_id: 1, parent_id: 4, message: "Helloooooo Stanleyyyyy"})
            Message.create({sender_id: 9, parent_id: 4, message: "No Michael I don't really care"})
            Message.create({sender_id: 1, parent_id: 4, message: "cmon I know you'll like it"})
            Message.create({sender_id: 9, parent_id: 4, message: "Michael I really don't"})
            Message.create({sender_id: 1, parent_id: 4, message: "Earth to Stanley!"})
            Message.create({sender_id: 9, parent_id: 4, message: "DID I STUTTER?"})
    #HIDE FROM MICHAEL
        #GENERAL
            Message.create({sender_id: 2, parent_id: 5, message: "Ok guys. I made this server just to vent about Michael if you need to. Make sure you DO NOT add Michael. Please respond so I know you read this"})
            Message.create({sender_id: 2, parent_id: 5, message: "Oh yeah. No Dwight either"})
            Message.create({sender_id: 4, parent_id: 5, message: "Wooooo!"})
            Message.create({sender_id: 5, parent_id: 5, message: "Aw yeah"})
            Message.create({sender_id: 6, parent_id: 5, message: "Rit-dit-dit-ditoooooooo"})
            Message.create({sender_id: 8, parent_id: 5, message: "Let's make sure this isn't on company times or computers guys..."})
            Message.create({sender_id: 9, parent_id: 5, message: "eh"})
            Message.create({sender_id: 10, parent_id: 5, message: "Oh I have A LOT to say"})
            Message.create({sender_id: 11, parent_id: 5, message: "Party time!"})
            Message.create({sender_id: 12, parent_id: 5, message: "Oh dear... I guess I'll join in too"})
            Message.create({sender_id: 13, parent_id: 5, message: "I'm not an usually mean person but I really need this thank you"})
            Message.create({sender_id: 14, parent_id: 5, message: "Oh man he does not want to see what I have to stay"})
            Message.create({sender_id: 15, parent_id: 5, message: "Who's Michael?"})
        #Venting
            Message.create({sender_id: 10, parent_id: 6, message:"Ok Michael HAS to do something about his coffee breath I really can't stand it"})
            Message.create({sender_id: 4, parent_id: 6, message: "I totally agree"})
            Message.create({sender_id: 9, parent_id: 6, message: "mhm you try talking to him when he breathes in your face two feet away"})
            Message.create({sender_id: 13, parent_id: 6, message: "He really needs to invest in some deodorant"})
            Message.create({sender_id: 12, parent_id: 6, message: "He needs to invest in some detergent too"})
            Message.create({sender_id: 14, parent_id: 6, message: "He should get a new brain while he's at it"})
        #Things Michael Says
            Message.create({sender_id: 10, parent_id: 7, message: "Michael is so dumb that he climbed over a glass wall to see what was on the other side!"})
            Message.create({sender_id: 14, parent_id: 7, message: "LOL nice babe"})
            Message.create({sender_id: 13, parent_id: 7, message: "Good one!"}) 
            Message.create({sender_id: 10, parent_id: 7, message: "This is actually really fun nice job Jim"})   
            Message.create({sender_id: 2, parent_id: 7, message: "No problem just trying to make the office a better place"})   
            Message.create({sender_id: 9, parent_id: 7, message: "Michael is so stupid he tried to put M&M's in alphabetical order"})
            Message.create({sender_id: 2, parent_id: 7, message: "STANLEY HUDSON joining in too! Wow!"})
            Message.create({sender_id: 12, parent_id: 7, message: "Yay Stanley :)"})
            Message.create({sender_id: 5, parent_id: 7, message: "Michael is so dumb he pays his taxes EVERY year"})
            Message.create({sender_id: 5, parent_id: 7, message: "You get it guys? It's because he only needs to pay taxes every other year"})
            Message.create({sender_id: 5, parent_id: 7, message: "Guys?"})
            Message.create({sender_id: 2, parent_id: 7, message: "Wait Kev you know you're supposed do taxes every year right?"})
            Message.create({sender_id: 4, parent_id: 7, message: "Oh dear"})
            Message.create({sender_id: 5, parent_id: 7, message: "As an accountant, I should be the first one to know that you should do taxes every year if that were true"})
            Message.create({sender_id: 13, parent_id: 7, message: "Kevin you should be doing your taxes every year..."})
            Message.create({sender_id: 5, parent_id: 7, message: "Oh... shoot"})
            
    #Party Planning Committee          
        #General
            Message.create({sender_id: 1, parent_id: 8, message: "Ok girls! This will be used to plan parties. I expect no excuses out of you!"})
            Message.create({sender_id: 7, parent_id: 8, message: "Ugh. Do we really have to use this?"})
            Message.create({sender_id: 1, parent_id: 8, message: '"Ugh. Do we really have to use this?"'})
            Message.create({sender_id: 1, parent_id: 8, message: "Of course you do. Now go start planning some parties"})
            Message.create({sender_id: 12, parent_id: 8, message: "I look forward to using this Michael :)"})
        #Events
            Message.create({sender_id: 1, parent_id: 9, message: "An unknown employee's birthday is coming up. Let's make the budget 300 dollars. I heard this employee likes ice cream cake"})
            Message.create({sender_id: 7, parent_id: 9, message: "300 dollars?? A regular party has a budget of 50 dollars"})
            Message.create({sender_id: 4, parent_id: 9, message: "Is this unknown employee's name Michael Scott?"})
            Message.create({sender_id: 1, parent_id: 9, message: "I can't tell I swore to secrecy"})
            Message.create({sender_id: 1, parent_id: 9, message: ";)"})
            Message.create({sender_id: 1, parent_id: 9, message: ";)"})
            Message.create({sender_id: 1, parent_id: 9, message: ";)"})
            Message.create({sender_id: 7, parent_id: 9, message: "OK WE GET IT"})
            Message.create({sender_id: 1, parent_id: 9, message: ";)"})
        #Planning Time!
            Message.create({sender_id: 4, parent_id: 10, message: "Ok let's plan Michael's birthday"})
            Message.create({sender_id: 7, parent_id: 10, message: "What color streamers should we get?"})
            Message.create({sender_id: 12, parent_id: 10, message: "What about green?"})
            Message.create({sender_id: 7, parent_id: 10, message: "Green is whorish"})
            Message.create({sender_id: 12, parent_id: 10, message: "Orange?"})
            Message.create({sender_id: 7, parent_id: 10, message: "Orange is whorish"})
            Message.create({sender_id: 4, parent_id: 10, message: "This is gonna go well..."})
    #Creed's Thoughts
            Message.create({sender_id: 15, parent_id: 11, message: "Hey-o, everyone out there in SyberWorld. It,s old Creed Bratton coming at your again, here from my perch as a Quality Assurance Manager at Dunder Mifflin paper. Just a few observations on the world around me."})
            Message.create({sender_id: 15, parent_id: 11, message: "What do you guys think is the best kind of car? To me, you can,t beat motorcycles. They,re small, and dangerous."})
            Message.create({sender_id: 15, parent_id: 11, message: "I got into a car accident yesterday and I just took off. It didn,t look too bad. The guy was making a big deal out of it, but come on — dogs don,t live forever."})
            Message.create({sender_id: 15, parent_id: 11, message: "Sometimes when I,m sick, or feeling blue, I drink vinegar. I like all kinds: balsamic, vodka, orange juice, leaves."})
            Message.create({sender_id: 15, parent_id: 11, message: "Working in an office is fine, but I,d rather be a millionaire. [Elaborate on this. It,s interesting. Maybe Trademark it, too.]"})
            Message.create({sender_id: 15, parent_id: 11, message: "Today in my office where I work as Director of Quality Assurance, we went to the beach for some reason that was never adequately explained. When we were there, our manager told us to eat hot coals. I thought that was a little bit untoward so I ate a fish. Then a woman I have literally never seen before in my entire life started talking very loudly about something involving Halpert. She was agitated, I,d say. From what I could guess, she was definitely on drugs of some kind, perhaps cocaine, or maybe ‘drines. Also, she is a knock-out. She reminds me of a young Daphne Du Maurier. Also, I stupidly ate the fishbones. I told myself “never again” after the last time, but then you turn around, and bam, they,re in my mouth. I also ate 55 hot dogs in 15 minutes, which is a world record."})
            Message.create({sender_id: 15, parent_id: 11, message: "Everybody remembers: “April showers bring May flowers.” But no one remembers how the rest of that goes. Which I find so frustrating."})
            Message.create({sender_id: 15, parent_id: 11, message: "Reminder: Michael,s safe combo: 26-32-20."})
            Message.create({sender_id: 1, parent_id: 11, message: "Wait what?"})
    
#seed dms
    #Michael
        #Dwight
            Message.create({sender_id: 3, parent_id: 12, message: "Michael! I have today's daily report"})
            Message.create({sender_id: 1, parent_id: 12, message: "You don't have to do this Dwight..."})
            Message.create({sender_id: 3, parent_id: 12, message: "This is part of my duties as Assistant Regional Manager"})
            Message.create({sender_id: 1, parent_id: 12, message: "Assistant to the Regional Manager*"})
            Message.create({sender_id: 3, parent_id: 12, message: "It's the same thing"})
            Message.create({sender_id: 1, parent_id: 12, message: "No it's not"})
            Message.create({sender_id: 3, parent_id: 12, message: "Ok do you want to daily report or not?"})
            Message.create({sender_id: 1, parent_id: 12, message: "No I don't so stop bothering me unless it's something important"})
            Message.create({sender_id: 3, parent_id: 12, message: "Michael! I have something important!"})
            Message.create({sender_id: 1, parent_id: 12, message: "Dwight I swear if it's something like you saw a deer while driving..."})
            Message.create({sender_id: 3, parent_id: 12, message: "I wouldn't bother you with anything that unimportant. But what if I saw a turtle outside?"})
            Message.create({sender_id: 1, parent_id: 12, message: "Of course tell me about the turtle are you crazy?"})
            Message.create({sender_id: 1, parent_id: 12, message: "Ok so what's the important news"})
            Message.create({sender_id: 3, parent_id: 12, message: "The rest of the office has a group chat about you"})
            Message.create({sender_id: 1, parent_id: 12, message: "Wait what?"})
        #Andy
            Message.create({sender_id: 6, parent_id: 13, message: "yo bossman I'm going get coffee you want any?"})
            Message.create({sender_id: 1, parent_id: 13, message: "Oh yeah can you pick me up a cup?"})
            Message.create({sender_id: 6, parent_id: 13, message: "Of course bossman you got it"})
            Message.create({sender_id: 6, parent_id: 13, message: "yo bossman I'm going to Alfredo's Pizza for lunch you want anything?"})
            Message.create({sender_id: 1, parent_id: 13, message: "Oh yeah can you pick me up a meatball parm?"})
            Message.create({sender_id: 6, parent_id: 13, message: "Of course bossman you got it"})
            Message.create({sender_id: 6, parent_id: 13, message: "yo bossman I'm going to the restroom do you want anything from there?"})
            Message.create({sender_id: 1, parent_id: 13, message: "What the heck Andy"})
        #Jim
            Message.create({sender_id: 1, parent_id: 14, message: "Hey Jim have you seen this?"})
            Message.create({sender_id: 1, parent_id: 14, message: "https://www.reddit.com/r/wholesomememes/comments/bxlid8/the_hat_with_good_intentions/"})
            Message.create({sender_id: 2, parent_id: 14, message: "Oh yeah very cool"})
            Message.create({sender_id: 1, parent_id: 14, message: "Hey Jim have you seen this?"})
            Message.create({sender_id: 1, parent_id: 14, message: "https://www.reddit.com/r/aww/comments/5k14f1/baby_platypuses_the_most_underrated_cute_animals/"})
            Message.create({sender_id: 2, parent_id: 14, message: "Oh wow awesome lol"})
            Message.create({sender_id: 1, parent_id: 14, message: "Hey Jim have you seen this?"})
            Message.create({sender_id: 1, parent_id: 14, message: "https://www.reddit.com/user/nba/comments/bnwxnm/kawhi_sents_raptors_to_ecf_snet/"})
            Message.create({sender_id: 1, parent_id: 14, message: "Hey Jim have you seen this?"})
            Message.create({sender_id: 1, parent_id: 14, message: "https://www.reddit.com/r/gifs/comments/bxkgs5/hes_not_a_fan_of_the_slow_feed_dog_bowl/"})
            Message.create({sender_id: 1, parent_id: 14, message: "Jim hello?"})

        #Pam
            Message.create({sender_id: 1, parent_id: 15, message: "Pam?"})
            Message.create({sender_id: 1, parent_id: 15, message: "Pammmmmmmmm"})
            Message.create({sender_id: 1, parent_id: 15, message: "Pam I'm bored"})
            Message.create({sender_id: 4, parent_id: 15, message: "Ok so what do you want me to do about that"})
            Message.create({sender_id: 1, parent_id: 15, message: "Pam do you want to play basketball in the warehouse?"})
            Message.create({sender_id: 4, parent_id: 15, message: "I'm busy Michael"})
            Message.create({sender_id: 1, parent_id: 15, message: "cmon Pam let's go"})
            Message.create({sender_id: 1, parent_id: 15, message: "Pammmmmmmm"})
    #Jim
        #Dwight
            Message.create({sender_id: 3, parent_id: 16, message: "Jim where did you put my stapler?"})
            Message.create({sender_id: 3, parent_id: 16, message: "Jim I'm going to report you to HR"})
            Message.create({sender_id: 2, parent_id: 16, message: "I don't know Dwight I didn't touch it I swear"})
            Message.create({sender_id: 3, parent_id: 16, message: "You have 3 seconds Jim"})
            Message.create({sender_id: 3, parent_id: 16, message: "Oh nevermind I found it"})
        #Pamela
            Message.create({sender_id: 2, parent_id: 17, message: "Ok Dwight is really ticking me off right now. Do you wanna pull a prank on him?"})
            Message.create({sender_id: 4, parent_id: 17, message: "Down. Where do you want me to take him?"})
            Message.create({sender_id: 2, parent_id: 17, message: "Take him to the warehouse. I just need 5 minutes"})
            Message.create({sender_id: 4, parent_id: 17, message: "Got it."})
        #Kevin 
            Message.create({sender_id: 4, parent_id: 18, message: "Hey are you watching the Heats and 76ers game tonight?"})
            Message.create({sender_id: 2, parent_id: 18, message: "Of course! We're definately beating Lebron"})
            Message.create({sender_id: 4, parent_id: 18, message: "You wanna sneak out a little early and go to Poor Richard's to watch?"})
            Message.create({sender_id: 2, parent_id: 18, message: "Oh yeah sure just give me 15 minutes"})
            Message.create({sender_id: 4, parent_id: 18, message: "Another prank on Dwight?"})
            Message.create({sender_id: 2, parent_id: 18, message: "You know it"})
            Message.create({sender_id: 4, parent_id: 18, message: "I look forward to it"})
        #Creed
            Message.create({sender_id: 15, parent_id: 19, message: "Hey wide-eyes, the tall dude is messing with your stuff"})
            Message.create({sender_id: 2, parent_id: 19, message: "Creed who do you think you're talking to?"})
            Message.create({sender_id: 15, parent_id: 19, message: "HEY THAT'S NONE OF YOUR BUISNESS"})
    #Dwight
        #Angela
            Message.create({sender_id: 3, parent_id: 20, message:"Hey monkey. Any news you have to report?"})
            Message.create({sender_id: 7, parent_id: 20, message:"Hi D. Those idiots made a server to make fun of Michael"})
            Message.create({sender_id: 3, parent_id: 20, message:"What?? Who's the ringleader?"})
            Message.create({sender_id: 7, parent_id: 20, message:"Who else would it be? It's obviously Jim"})
            Message.create({sender_id: 3, parent_id: 20, message:"I'm going to tell Michael"})
            Message.create({sender_id: 7, parent_id: 20, message:"Don't mention me"})
            Message.create({sender_id: 3, parent_id: 20, message:"Of course not monkey"})
        #Oscar
            Message.create({sender_id: 3, parent_id: 21, message:"Hey I know you're secret"})
            Message.create({sender_id: 13, parent_id: 21, message:"What secret are you talking about?"})
            Message.create({sender_id: 3, parent_id: 21, message:"I know about your personal choice and you're refusal to walk a 'straight' path"})
            Message.create({sender_id: 13, parent_id: 21, message:"Please Dwight don't tell anyone I beg you. I haven't even told my parents yet"})
            Message.create({sender_id: 3, parent_id: 21, message:"It's too late I told HR. You'll be docked a sick day"})
            Message.create({sender_id: 13, parent_id: 21, message:"Oh... dang it"})
            Message.create({sender_id: 3, parent_id: 21, message:"You deserve it. Time thief"})
    #Pam
        #Phyllis
            Message.create({sender_id: 4, parent_id: 22, message:"Nice outfit Phyllis ;)"})
            Message.create({sender_id: 12, parent_id: 22, message:"Oh you're wearing the same thing!"})
            Message.create({sender_id: 4, parent_id: 22, message:"H&M at the Steamtown Mall?"})
            Message.create({sender_id: 12, parent_id: 22, message:"Can't resist a 60% off sale"})
            Message.create({sender_id: 4, parent_id: 22, message:"Well it looks good on you"})
            Message.create({sender_id: 12, parent_id: 22, message:"It looks great on you too"})
        #Ryan
            Message.create({sender_id: 14, parent_id: 23, message:"Hey I know the whole you and Roy thing is a little raw but do you want to go grab drinks sometime?"})    
            Message.create({sender_id: 4, parent_id: 23, message:"No, sorry I just want a little 'me' time right now. Also aren't you dating Kelly?"})    
            Message.create({sender_id: 14, parent_id: 23, message:"I wouldn't call what me and Kelly have 'dating'"})
            Message.create({sender_id: 14, parent_id: 23, message:"It's a very open relationship"})
            Message.create({sender_id: 4, parent_id: 23, message:"Whatever floats your boat"})
        #Kelly
            Message.create({sender_id: 10, parent_id: 24, message:"PAM HOW DARE YOU I THOUGHT WE WERE FRIENDS"})
            Message.create({sender_id: 10, parent_id: 24, message:"What happened??"})
            Message.create({sender_id: 10, parent_id: 24, message:"RYAN TOLD ME ABOUT THIS MESSAGES YOU SENT TO HIM"})
            Message.create({sender_id: 10, parent_id: 24, message:"What messages? What are you talking about?"})
            Message.create({sender_id: 10, parent_id: 24, message:"Ryan left his computer open so I decided to snoop around. I saw your name in the DM section and I was about to open it when Ryan came back. He said that you were making moves on him. I can't believe you would hurt me like this."})
            Message.create({sender_id: 10, parent_id: 24, message:"... ask him if you could read those messages. I didn't do anything"})
            Message.create({sender_id: 10, parent_id: 24, message:"I will and if I see anything fishy you're dead"})
            Message.create({sender_id: 10, parent_id: 24, message:"Sorry Pam I just read the messages"})
            


