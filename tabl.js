var tabagent = {
                '001' : 'Edward Donne',
                '002' : 'Bill Fairbanks',
                '003' : 'Jason Walters',
                '004' : 'Frederick Wardner',
                '005' : 'Stuart Thomas',
                '006' : 'Major Jack Giddings',
                '007' : 'James Bond',
                '008' : 'Bill',
                '009' : 'Unnamed',
                '010' : 'Unnamed',
                '011' : 'Cederic',
                '012' : 'Sam Johnston',
                '013' : 'Briony Thorne'
                };
            var nomAgent = {
                'Edward Donne' : 'Referred to in the Raymond Benson novel, Doubleshot, Edward Donne is the only agent 001.',
                'Bill Fairbanks' : 'A 002 first appears in Thunderball. He is shot through the neck and killed by Francisco Scaramanga, in Beirut, Lebanon, in 1969 (film version: The Man with the Golden Gun 1974). In The Living Daylights film, another Agent 002, named "John", played by Glyn Baker; was training at Gibraltar, with 004 and 007. 002 was "killed" and eliminated from the exercise when he landed close to a waiting SAS guard.',
                'Jason Walters' : '003 first appears in Thunderball. He is found dead, in Siberia, in A View to a Kill. Another (unrelated) MI6 agent is Jack Mason, 003 who is shot in the gut and killed by Nikolai Diavolo, the villain, in the Everything or Nothing video game (2004). Diavolo is connected with the villain Max Zorin from A View to a Kill.',
                'Frederick Wardner' : 'A 004 appears in the Benson novel The Facts of Death. In the Sebastian Faulks novel Devil May Care, Bond girl Scarlett Papava is unveiled as 004, replacing the previous agent who was killed in Berlin.',
                'Stuart Thomas' : 'Was 005 until defective eyesight impaired his marksmanship, and he was made head of Station G (Greece) in Colonel Sun.',
                'Major Jack Giddings' : '006, a Royal Marine commando, is mentioned in On Her Majesty Secret Service. In The Moneypenny Diaries: Guardian Angel he is named as Major Jack Giddings and second to Bond in the 00 section. Alec Trevelyan is another 006 featured in GoldenEye.',
                'James Bond' : 'James Bond is the only agent 007. During You Only Live Twice, Bond was transferred into another branch and given the number 7777, suggesting there was no active agent 007 in that time; he is reinstated as such in The Man with the Golden Gun. In the John Gardner novels, agent 007 is the remaining active 00-agent, the section was disbanded in the 1980s, later contradicted by Raymond Benson novels.',
                'Bill' : 'In the novel Goldfinger, Bond thinks to himself that 008 would likely avenge Bond by killing Goldfinger. As Bond thinks this, he ruminates that 008 is "a good man, more careful than Bond." In the novel Moonraker, 008 (called "Bill" by Bond) is mentioned as being on recuperative leave after returning from a mission behind the Iron Curtain.',
                'Unnamed' : 'Referred to in the novel Thunderball. Also played a minor role in Spectre.',
                'Cederic' : 'Mentioned briefly in the novel Moonraker as vanishing while on assignment in Singapore.',
                'Sam Johnston' : 'Although unmentioned on screen, Benson The World Is Not Enough novelisation has Bond investigating 0012 death at story start (seen in a photograph of a dark-haired man, in the film).',
                'Briony Thorne' : 'A female 00-agent appearing in the comic strip Fear Face (published 18 January 1971 to 20 April 1971 in The Daily Express). Thorne is revealed to be a double agent for China.'
                           };

function CodeAgent(ag)
   {
	if (tabagent[ag]=="Unnamed"){
	nom= prompt('entre le nom de lagent')
	tabagent[ag] = nom;
                                      }   
	alert(tabagent[ag])
   }

	agent = prompt('entre un nom de code');
	CodeAgent(agent);




