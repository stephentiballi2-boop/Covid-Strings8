<doctype.html>
<html lang en>
<script>
<header.html>
heading for heading variables 
the heading numbers that determine where each heading and subheading go 
heading1=fan voting rounds
heading2=string voting
heading3=result
heading4=non-concatenated string variables
heading5=concatenated string variables
heading6=second round
heading7=third round
heading8=fourth round
heading9=fifth round
subheading1=covid strings first round matchups
subheading2=first round non-concatenated string advancing
subheading3=first round concatenated string advancing
subheading4=second round non-concatenated string advancing
subheading5=second round concatenated string advancing
subheading6=third round non-concatenated string advancing
subheading7=third round concatenated string advancing
subheading8=fourth round non-concatenated string advancing
subheading9=fourth round concatenated string advancing
subheading10=covid strings fan voting victory
filename=covid strings8 fan voting.js
<meta charset utf-8>
<meta name “viewport” content=”width=device-width,initial scale 1>
<title covid strings8 fan voting</title>
<style>
vote button
margin:5px;
padding:10px;
background-color:4caf50
color:white;
border:none;
cursor:pointer;
vote  button.hover
background color 45a049
</style>
</head>
<header.html>
fan voting rounds
the number of rounds overall in covid strings fan voting
total entry limit=32
non-concatenated string limit=16
concatenated string  limit=16
amount of rounds=math.log(entry limit) /math.log(2) 
for (i=amount_ of_ rounds;-i>0;i- -)
s=round+(amount_ of_ rounds; i+1)+’ of amount_ of_ rounds consist of ‘math.pow(2,i-1)+matches’;
<h1 vote for your favorite string>
<header.html>
string voting
the processes by which a user votes for their favorite string
<button class=vote button on click “vote” (‘string 1’) <string pair button>
<button class=vote button  on click “vote” (‘string 2’) <string pair button>
<button class=vote button  on click “vote” (‘string 3’) <string pair button>
<button class=vote button  on click “vote” (‘string 4’) <string pair button>
<button class=vote button  on click “vote” (‘string 5’) <string pair button>
<button class=vote button  on click “vote” (‘string 6’) <string pair button>
<button class=vote button  on click “vote” (‘string 7’) <string pair button>
<button class=vote button  on click “vote” (‘string 8’) <string pair button>
<button class=vote button  on click “vote” (‘string 9’) <string pair button>
<button class=vote button  on click “vote” (‘string 10’) <string pair button>
<button class=vote button  on click “vote” (‘string 11’) <string pair button>
<button class=vote button  on click “vote” (‘string 12’) <string pair button>
<button class=vote button  on click “vote” (‘string 13’) <string pair button>
<button class=vote button  on click “vote” (‘string 14’) <string pair button>
<button class=vote button  on click “vote” (‘string 15’) <string pair button>
<button class=vote button  on click “vote” (‘string 16’) <string pair button>
<header.html>
first round 
the first round in covid strings fan voting
render round
roundcontainer.innerhtml=<h1 round {first round}<h1>
candidates foreach((candidate,index)
candidatediv.innerhtml
<p> {candidate name } {candidate votes} votes </p>
<button on click= “vote {index} >”vote for {candidate name}</button>
round container.appendchild(candidatediv)
add event listener (‘dom content loaded ,()
let current round=1
total rounds= 5
round container=document.get element by id(‘round-container’)
nextroundbutton=document.get element by id(‘next-round’)
window open 
window vote function(index)
candidates [index] votes++
commence round.addeventlistener(click)
if current round==round 1:
commence round 1
else:
remain 
<subheading.html>
covid strings first round matchups
the matchups that appear in the first round of covid strings fan voting 
<div class=”matchup” 
non-concatenated strings
matchup1=string 5 vs string 12
<button id vote string 5 “vote for string 5” </button>
<button id vote string 12 “vote for string 12” </button>
<div class =”results”>
<p> string 5 <span id= “votes string 5 >0</span> votes <p>
<p> string 12 <span id= “votes string 12 >0</span> votes <p>
<div>
matchup2=string 7 vs string 10
<button id vote string 7 “vote for string 7” </button>
<button id vote string 10 “vote for string 10”</button>
<div class =”results”>
<p> string 7 <span id= “votes string 7 >0</span> votes <p>
<p> string 10 <span id= “votes string 10 >0</span> votes <p>
<div>
matchup3=string 1 vs string 16
<button id vote string 1 “vote for string 1” </button>
<button id vote string 16 “vote for string 16” </button>
<div class =”results”>
<p> string 1 <span id= “votes string 1 >0</span> votes <p>
<p> string 16 <span id= “votes string 16 >0</span> votes <p>
<div>
matchup4=string 6 vs string 11
<button id vote string 6 “vote for string 6” </button>
<button id vote string 11 “vote for string 11” </button>
<div class =”results”>
<p> string 6 <span id= “votes string 6 >0</span> votes <p>
<p> string 11 <span id= “votes string 11 >0</span> votes <p>
<div>
matchup5=string 3 vs string 14
<button id vote string 3 “vote for string 3” </button>
<button id vote string 14 “vote for string 14” </button>
<div class =”results”>
<p> string 3 <span id= “votes string 3 >0</span> votes <p>
<p> string 14 <span id= “votes string 14 >0</span> votes <p>
<div>
matchup6=string 2 vs string 15
<button id vote string 2 “vote for string 2” </button>
<button id vote string 15 “vote for string 15” </button>
<div class =”results”>
<p> string 2 <span id= “votes string 2 >0</span> votes <p>
<p> string 15 <span id= “votes string 15 >0</span> votes <p>
<div>
matchup7=string 4 vs string 13
<button id vote string 4 “vote for string 4” </button>
<button id vote string 13 “vote for string 13” </button>
<div class =”results”>
<p> string 4 <span id= “votes string 4 >0</span> votes <p>
<p> string 13 <span id= “votes string 13 >0</span> votes <p>
<div>
matchup8=string 8 vs string 9
<button id vote string 8 “vote for string 8” </button>
<button id vote string 9 “vote for string 9” </button>
<div class =”results”>
<p> string 8 <span id= “votes string 8 >0</span> votes <p>
<p> string 9 <span id= “votes string 9 >0</span> votes <p>
<div>
<div class=”matchup” 
concatenated strings 
matchup1=string 4 vs string 13
<button id vote string 4 “vote for string 4” </button>
<button id vote string 13 “vote for string 13” </button>
<div class =”results”>
<p> string 4 <span id= “votes string 4 >0</span> votes <p>
<p> string 13 <span id= “votes string 13 >0</span> votes <p>
<div>
matchup2=string 6 vs string 11
<button id vote string 6 “vote for string 6” </button>
<button id vote string 11 “vote for string 11” </button>
<div class =”results”>
<p> string 6 <span id= “votes string 6 >0</span> votes <p>
<p> string 11 <span id= “votes string 11 >0</span> votes <p>
<div>
matchup3=string 8 vs string 9
<button id vote string 8 “vote for string 8” </button>
<button id vote string 9 “vote for string 9” </button>
<div class =”results”>
<p> string 8 <span id= “votes string 8 >0</span> votes <p>
<p> string 9 <span id= “votes string 9 >0</span> votes <p>
<div>
matchup4=string 3 vs string 14
<button id vote string 3 “vote for string 3” </button>
<button id vote string 14 “vote for string 14” </button>
<div class =”results”>
<p> string 3 <span id= “votes string 3 >0</span> votes <p>
<p> string 14 <span id= “votes string 14 >0</span> votes <p>
<div>
matchup5=string 2 vs string 15
<button id vote string 2 “vote for string 2” </button>
<button id vote string 15 “vote for string 15” </button>
<div class =”results”>
<p> string 2 <span id= “votes string 2 >0</span> votes <p>
<p> string 15 <span id= “votes string 15 >0</span> votes <p>
<div>
matchup6=string 1 vs string 16
<button id vote string 1 “vote for string 1” </button>
<button id vote string 16 “vote for string 16” </button>
<div class =”results”>
<p> string 1 <span id= “votes string 1 >0</span> votes <p>
<p> string 16 <span id= “votes string 16 >0</span> votes <p>
<div>
matchup7=string 5 vs string 12
<button id vote string 5 “vote for string 5” </button>
<button id vote string 12 “vote for string 12” </button>
<div class =”results”>
<p> string 5 <span id= “votes string 5 >0</span> votes <p>
<p> string 12 <span id= “votes string 12 >0</span> votes <p>
<div>
matchup8=string 7 vs string 10
<button id vote string 7 “vote for string 7” </button>
<button id vote string 10 “vote for string 10” </button>
<div class =”results”>
<p> string 7 <span id= “votes string 7 >0</span> votes <p>
<p> string 10 <span id= “votes string 10 >0</span> votes <p>
<div>
<h2 id =”result”></h2>
<header.html>
result
the end result of voting on a particular pair of strings
<script src=”vote.js”>
<script>
<body>
<html>
vote js file notes:
votes={
‘string 1
‘string 2’
vote (string)
if (votes.hasownproperty(character))
votes [character]++
display results
else:
console.error(‘invalid string’)
displayresults
result element=document get element by id (‘result’)
result element inner html
<header.html>
non-concatenated string variables 
non-concatenated strings in covid strings
non-concatenated strings list=[1:phrase “covid trackers can use peoples personal data against them”, 2:phrase “when using a covid tracker safety is one option”, 3:phrase “when it comes to the origins of covid knowledge is power”, 4:phrase “ba286 and hv and jn1 can also cause problems”,5:phrase “mental health impacts can also change”, 6:phrase “given the new flu like virus things may change”, 7:phrase “you dont need webmd to tell you covid fatigue is real”, 8:phrase “the worst case scenario can still happen”, 9:math problem “if a poll found that 80 percent of americans believe they get enough sleep to prevent the worst effects of covid how many arent sure?”, 10:math problem “if the margin of error is 3.44 percent what is the range?”, 11:math problem “if 95 percent of americans find the 9 month effect to be somewhat exaggerated how many dont”?, 12:math problem “if 61 percent say it is mildly exaggerated how many believe it is greatly exaggerated?”, 13:math problem “if 58 percent of the 61 percent say that they believe the effect on the body to be around 6 months how many believe it to be 7-8 months?”,14:sentence “covid is so unpopular it wouldnt be anybodys third party spoiler?”,15:sentence “covid is a thousandth as old as the pythagorean theorem,”16:sentence “its crazy that 11 percent of republicans mildly oppose ivermectin”]
non-concatenated string1=phrase “covid trackers can use peoples personal data against them”
non-concatenated string2=phrase “when using a covid tracker safety is one option”
non-concatenated string3=phrase “when it comes to the origins of covid knowledge is power”
non-concatenated string4=phrase “ba286 and hv and jn1 can also cause problems”
non-concatenated string5=phrase “mental health impacts can also change”
non-concatenated string6=phrase “given the new flu like virus things may change”
non-concatenated string7=phrase “you dont need webmd to tell you covid fatigue is real”
non-concatenated string8=phrase “the worst case scenario can still happen”
non-concatenated string9=math problem “if a poll found that 80 percent of americans believe they get enough sleep to prevent the worst effects of covid how many arent sure?”
non-concatenated string10=math problem “if the margin of error is 3.44 percent what is the range?”
non-concatenated string11=math problem “if 95 percent of americans find the 9 month effect to be somewhat exaggerated how many dont”?
non-concatenated string12=math problem “if 61 percent say it is mildly exaggerated how many believe it is greatly exaggerated?”
non-concatenated string13=math problem “if 58 percent of the 61 percent say that they believe the effect on the body to be around 6 months how many believe it to be 7-8 months?”
non-concatenated string14=sentence “covid is so unpopular it wouldnt be anybodys third party spoiler?”
non-concatenated string15=sentence “covid is a thousandth as old as the pythagorean theorem”
non-concatenated string16=sentence “its crazy that 11 percent of republicans mildly oppose ivermectin”
chapter=document.queryselector(chapter)
chapter inner html
replace ‘ with / 
for apostrophe in covid strings8 fan voting
select characters
edit diffuse property
desired color=green
<p>string 1[votes ‘string 1 ‘]}votes</p>
<p>string 2[votes ‘string 2 ‘]}votes</p>
<p>string 3 [votes ‘string 3 ‘]}votes</p>
<p>string 4 [votes ‘string 4 ‘]}votes</p>
<p>string 5[votes ‘string 5 ‘]}votes</p>
<p>string 6[votes ‘string 6 ‘]}votes</p>
<p>string 7 [votes ‘string 7 ‘]}votes</p>
<p>string 8[votes ‘string 8 ‘]}votes</p>
<p>string 9 [votes ‘string 9 ‘]}votes</p>
<p>string 10 [votes ‘string 10 ‘]}votes</p>
<p>string 11[votes ‘string 11 ‘]}votes</p>
<p>string 12 [votes ‘string 12 ‘]}votes</p>
<p>string 13 [votes ‘string 13 ‘]}votes</p>
<p>string 14 [votes ‘string 14 ‘]}votes</p>
<p>string 15 [votes ‘string 15 ‘]}votes</p>
<p>string 16 [votes ‘string 16 ‘]}votes</p>
<subheading.html>
first round non-concatenated string advancing 
the code designed to advancing winning non-concatenated strings 
advance to next round (strings to advance)
sorted strings=(strings.sort(string1,string2) string 1 votes string 2 votes)
advancing strings=sorted strings.slice(0,num to 8)
return advancing strings 
if result matchup1>=.5
if result matchup2>=.5
if result matchup3>=.5
if result matchup4>=.5
if result matchup5>=.5
if result matchup6>=.5
if result matchup7>=.5
if result matchup8>=.5
<header.html>
concatenated string variables
concatenated strings in covid strings
concatenated string list=[1:phrase “if”+”you”+”do”+”have”+”it”+”sleep”+”and”+”relaxation”+”are”+”some”+”strategies”, 2:phrase “any”+”covid”+”prescription”+”is”+"not”+”as”+”good”+”as”+”a”+”lexus”+”rx”, 3:math problem “if”+”a”+”study”+”found”+”that”+”the”+”amount”+”of”+”sleep”+”needed”+”to”+”help”+”your”+”immune”+”system”+”post”+”covid”+”was”+”10”+”hours”+”if”+”the”+”average”+”american”+”gets”+”only”+”7”+”hours”+”what”+”is”+”the”+”difference?”, 4:math problem “if”+”the”+”same”+”study”+”found”+”that”+”vaccinated”+”individuals”+”needed”+”8”+”hours”+”what”+”is”+”the”+”difference?”, 5:math problem “if”+”it”+”turns”+”out”+”that”+”this”+”effect”+”existed”+”for”+”at”+”least”+”9”+”months”+”what”+”would”+”the”+”recommended”+”guidance”+”be?”,6:phrase “uv”+”light”+”can”+”be”+”safely”+”eliminated”+”as”+”any”+”treatment”,7:phrase “it”+”should”+”be”+”obvious”+”that”+”bleach”+”is”+”similarily”+”ineffective”, 8:math problem “if”+”a”+”poll”+”found”+”that”+”68”+”percent”+"of"+”republicans”+”believe”+”that”+”ivermectin”+”is”+”a”+”safe”+”covid”+”treatment”+”what”+”is”+”the”+”percent”+”who”+”oppose?”,9:math problem “if”+”the”+”margin”+”of”+”error”+”is”+”6.55”+”percent”+”what”+”is”+”the”+”range?”, 10:math problem “out”+”of”+”the”+”32”+”percent”+”who”+”oppose”+”ivermectin”+”89”+”percent”+”strongly”+”oppose”+”it”+”being”+”touted”+”as”+”a”+”cure”+”how”+”many”+”mildly”+”oppose”+”it?”, 11:phrase “bleach"+"can"+"be”+”used”+”if”+”it”+”is”+”disinfected”+”on”+”hard”+”surfaces”,12:phrase “you”+”can”+”include”+”collodial”+”silver”+”too”, 13:phrase “it”+”would”+”also”+”better”+”than”+”ivertmectin”+”or”+”dietary”+”supplements”, 14:phrase “at”+”least”+”it”+”would”+”make”+”you”+”feel”+”a”+”ok”, 15:sentence “covid”+”is”+”no”+”exception”+”to”+”the”+”rule”+”that”+”sleep”+”helps”+”strengthen”+”your”+”immune”+”system”, 16:sentence ”covid”+”is”+”something”+”that”+”you”+”dont”+”want”+”natural”+”immunity”+”from”]
concatenated string1= phrase “if”+”you”+”do”+”have”+”it”+”sleep”+”and”+”relaxation”+”are”+”some”+”strategies”
concatenated string2=phrase “any”+”covid”+”prescription”+”is”+”not”+”as”+”good”+”as”+”lexus”+”a”+”rx”
concatenated string3=math problem “if”+”a”+”study”+”found”+”that”+”the”+”amount”+”of”+”sleep”+”needed”+”to”+”help”+”your”+”immune”+”system”+”post”+”covid”+”was”+”10”+”hours”+”if”+”the”+”average”+”american”+”gets”+”only”+”7”+”hours”+”what”+”is”+”the”+”difference?”
concatenated string4=math problem “if”+”the”+”same”+”study”+”found”+”that”+”vaccinated”+”individuals”+”needed”+”8”+”hours”+”what”+”is”+”the”+”difference?”
concatenated string5=math problem “if”+”it”+”turns”+”out”+”that”+”this”+”effect”+”existed”+”for”+”at”+”least”+”9”+”months”+”what”+”would”+”the”+”recommended”+”guidance”+”be?”
concatenated string6=phrase “uv”+”light”+”can”+”be”+”safely”+”eliminated”+”as”+”any”+”treatment”
concatenated string7=phrase “it”+”should”+”be”+”obvious”+”that”+”bleach”+”is”+”similarily”+”ineffective”
concatenated string8=math problem “if”+”a”+”poll”+”found”+”that”+”68”+”percent”+”of”+”republicans”+”believe”+”that”+”ivermectin”+”is”+”a”+”safe”+”covid”+”treatment”+”what”+”is”+”the”+”percent”+”who”+”oppose?”
concatenated string9=math problem “if”+”the”+”margin”+”of”+”error”+”is”+”6.55”+”percent”+”what”+”is”+”the”+”range?”
concatenated string10=math problem “out”+”of”+”the”+”32”+”percent”+”who”+”oppose”+”ivermectin”+”89”+”percent”+”strongly”+”oppose”+”it”+”being”+”touted”+”as”+”a”+”cure”+”how”+”many”+”mildly”+”oppose”+”it?”
concatenated string11=phrase “bleach”+”can”+”be”+”used”+”if”+”it”+”is”+”disinfected”+”on”+”hard”+”surfaces”
concatenated string12=phrase “you”+"can”+”include”+”collodial”+”silver”+”too”
concatenated string13=phrase “it”+”would”+”also”+”better”+”than”+”ivertmectin”+”or”+”dietary”+”supplements”
concatenated string14=phrase “at”+”least”+”it”+”would”+”make”+”you”+”feel”+”a”+”ok”
concatenated string15=sentence “covid”+”is”+”no”+”exception”+”to”+”the”+”rule”+”that”+”sleep”+”helps”+”strengthen”+”your”+”immune”+”system”
concatenated string16=sentence ”covid”+”is”+”something”+”that”+”you”+”dont”+”want”+”natural”+”immunity”+”from”
chapter=document.queryselector(chapter)
chapter inner html
replace ‘ with / 
for apostrophe in covid strings8 fan voting
select characters
edit diffuse property
desired color=green
<p>string 1[votes ‘string 1 ‘]}votes</p>
<p>string 2[votes ‘string 2 ‘]}votes</p>
<p>string 3 [votes ‘string 3 ‘]}votes</p>
<p>string 4 [votes ‘string 4 ‘]}votes</p>
<p>string 5[votes ‘string 5 ‘]}votes</p>
<p>string 6[votes ‘string 6 ‘]}votes</p>
<p>string 7 [votes ‘string 7 ‘]}votes</p>
<p>string 8[votes ‘string 8 ‘]}votes</p>
<p>string 9 [votes ‘string 9 ‘]}votes</p>
<p>string 10 [votes ‘string 10 ‘]}votes</p>
<p>string 11[votes ‘string 11 ‘]}votes</p>
<p>string 12 [votes ‘string 12 ‘]}votes</p>
<p>string 13 [votes ‘string 13 ‘]}votes</p>
<p>string 14 [votes ‘string 14 ‘]}votes</p>
<p>string 15 [votes ‘string 15 ‘]}votes</p>
<p>string 16 [votes ‘string 16 ‘]}votes</p>
<subheading.html>
first round  concatenated string advancing 
the code designed to advancing winning concatenated strings 
advance to next round (strings to advance)
sorted strings=(strings.sort(string1,string2) string 1 votes string 2 votes)
advancing strings=sorted strings.slice(0,num to 8)
return advancing strings 
percentage calculator
part=number of votes per day in round 
whole=total number of votes for string
calculate {part,whole}
return (part/whole)*100
display (part,whole)
percentage=this.calculate(part,whole)
return {part} is {percentage} of {whole}
result=percentagecalculator.display()
console log result 
if result matchup1>=.5
if result matchup2>=.5
if result matchup3>=.5
if result matchup4>=.5
if result matchup5>=.5
if result matchup6>=.5
if result matchup7>=.5
if result matchup8>=.5
newwindow=window.open(current round)
currentround=first round
window.close(current round)
window.vote=function(index)
candidates [index] votes++;
next round button.addeventlistener(‘click’,()
if(currentround <totalrounds)
currentround++
else:
alert(‘voting has ended)
if nextroundbutton.disabled=true
conclude voting for first round
<header.html>
second round
the second round of fan voting
render round
roundcontainer.innerhtml=<h2 round {second round} <h2>
candidates foreach((candidate,index)
candidatediv.innerhtml
<p> {candidate name } {candidate votes} votes </p>
<button on click= “vote {index} >”vote for {candidate name} </button>
round container.appendchild(candidatediv)
add event listener (‘dom content loaded)
let current round=round2
total rounds= 5
round container=document.get element by id(‘round-container’)
nextroundbutton=document.get element by id(‘next-round’)
window open 
window vote function (index)
candidates [index] votes++
commence round.addeventlistener(click)
if current round==round 2:
commence round 2
else:
remain 
string numbers[non-concatenated strings:name ‘string pair1’ votes 
name: ‘string pair2’ votes
name: ‘string pair3’ votes
name:’string pair4’ votes
string numbers[concatenated strings :name ‘string pair1’ votes 
name: ‘string pair 2’ votes
name: ‘string pair3’ votes
name:’string pair4’ votes
<subheading.html>
second round non-concatenated string advancing 
the code designed to advancing winning non-concatenated strings 
advance to next round (strings to advance)
sorted strings=(strings.sort(string1,string2) string 1 votes string 2 votes)
advancing strings=sorted strings.slice(0,num to 4)
percentage calculator
part=number of votes per day in round 
whole=total number of votes for string
calculate {part,whole}
return (part/whole)*100
display (part,whole)
percentage=this.calculate(part,whole)
return {part} is {percentage} of {whole}
result=percentagecalculator.display()
console log result 
return advancing strings 
if result matchup1>=.5
if result matchup2>=.5
if result matchup3>=.5
if result matchup4>=.5
concatenated strings 
name string1 votes
name string2 votes
name string3 votes
name string4 votes
name string5 votes
name string6 votes
name string7 votes
name string8 votes
<subheading.html>
second round concatenated string advancing 
advance to next round (strings to advance)
sorted strings=(strings.sort(string1,string2) string 1 votes string 2 votes)
advancing strings=sorted strings.slice(0,num to 4)
return advancing strings
percentage calculator
part=number of votes per day in round 
whole=total number of votes for string
calculate {part,whole}
return (part/whole)*100
display (part,whole)
percentage=this.calculate(part,whole)
return {part} is {percentage} of {whole}
result=percentagecalculator.display()
console log result  
if result matchup1>=.5
if result matchup2>=.5
if result matchup3>=.5
if result matchup4>=.5
newwindow=window.open(current round)
currentround=first round
window.close(current round)
window.vote =function(index)
candidates [index] votes++;
next round button.addeventlistener(‘click’,()
if(currentround <totalrounds)
currentround++
else:
alert(‘voting has ended)
if nextroundbutton.disabled=true
conclude voting for second round
<header.html>
third round
the third round of fan voting
render round
roundcontainer.innerhtml=<h3 round {third round} <h3>
candidates foreach((candidate,index)
candidatediv.innerhtml
<p> {candidate name } {candidate votes} votes </p>
<button on click= “vote {index} >”vote for {candidate name} </button>
round container.appendchild(candidatediv)
add event listener (‘dom content loaded)
let current round=round3
total rounds= 5
round container=document.get element by id(‘round-container’)
nextroundbutton=document.get element by id(‘next-round’)
window open 
window vote function (index)
candidates [index] votes++
commence round.addeventlistener(click)
if current round ==round 3:
commence round 3
else:
remain 
string numbers[non-concatenated strings :name  ‘string pair1’ votes 
name: ‘string pair2’ votes
string numbers[concatenated strings :name  ‘string pair1’ votes 
name: ‘string pair2’ votes
<subheading.html>
third round non-concatenated string advancing 
the code designed to advancing winning non-concatenated strings 
advance to next round (strings to advance)
sorted strings=(strings.sort(string1,string2) string 1 votes string 2 votes)
advancing strings=sorted strings.slice(0,num to 2)
return advancing strings
percentage calculator
part=number of votes per day in round 
whole=total number of votes for string
calculate {part,whole}
return (part/whole)*100
display (part,whole)
percentage=this.calculate(part,whole)
return {part} is {percentage} of {whole}
result=percentagecalculator.display()
console log result  
if result matchup1>=.5
if result matchup2>=.5
name string1 votes
name string2 votes
name string3 votes
name string4 votes
<subheading.html>
third round concatenated string advancing 
the code designed to advancing winning concatenated strings 
advance to next round (strings to advance)
sorted strings=(strings.sort(string1,string2) string 1 votes string 2 votes)
advancing strings=sorted strings.slice(0,num to 2)
return advancing strings 
percentage calculator
part=number of votes per day in round 
whole=total number of votes for string
calculate {part,whole}
return (part/whole)*100
display (part,whole)
percentage=this.calculate(part,whole)
return {part} is {percentage} of {whole}
result=percentagecalculator.display()
console log result 
if result matchup1>=.5
if result matchup2>=.5
newwindow=window.open(current round)
window.close(current round)
window.vote=function(index)
candidates [index] votes++;
next round button.addeventlistener(‘click’,()
if(currentround <totalrounds)
currentround++
else:
alert(‘voting has ended)
if nextroundbutton.disabled=true
conclude voting for third round 
<header.html>
fourth round
the fourth round of fan voting
render round
roundcontainer.innerhtml=<h4 round {fourth round} <h4>
candidates foreach((candidate,index)
candidatediv.innerhtml
<p> {candidate name } {candidate votes} votes </p>
<button on click= “vote {index} >”vote for {candidate name}</button>
round container.appendchild(candidatediv)
add event listener (‘dom content loaded)
let current round= round 4
total rounds=5
round container=document.get element by id(‘round-container’)
nextroundbutton=document.get element by id(‘next-round’)
string numbers[non-concatenated strings :name ‘string pair1’ votes 
string numbers[concatenated strings :name ‘string pair1’ votes 
name string1 votes
name string2 votes 
<subheading.html>
fourth round non-concatenated string advancing 
the code designed to advancing winning non-concatenated strings 
advance to next round (strings to advance)
sorted strings=(strings.sort(string1,string2)string 1 votes string 2 votes)
advancing strings=sorted strings.slice(last concatenated string last non-concatenated string )
return advancing strings 
percentage calculator
part=number of votes per day in round 
whole=total number of votes for string
calculate {part,whole}
return (part/whole)*100
display (part,whole)
percentage=this.calculate(part,whole)
return {part} is {percentage} of {whole}
result=percentagecalculator.display()
console log result 
if result matchup1>=.5
name string1 votes
name string2 votes
<subheading.html>
fourth round concatenated string advancing 
the code designed to advancing winning concatenated strings 
advance to next round (strings to advance)
sorted strings=(strings.sort(string1,string2) string 1 votes string 2 votes)
advancing strings=sorted strings.slice(last concatenated string last non-concatenated string)
return advancing strings 
percentage calculator
part=number of votes per day in round 
whole=total number of votes for string
calculate {part,whole}
return (part/whole)*100
display (part,whole)
percentage=this.calculate(part,whole)
return {part} is {percentage} of {whole}
result=percentagecalculator.display()
console log result 
if result matchup1>=.5
newwindow=window.open(current round)
window.close(current round)
window.vote=function(index)
candidates [index] votes++;
next round button.addeventlistener(‘click’,()
if(currentround <totalrounds)
currentround++
else:
alert(‘voting has ended)
if nextroundbutton.disabled=true
conclude voting for fourth round 
<header.html>
fifth round
the fifth round of fan voting
render round
roundcontainer.innerhtml=<h5 round {fifth round} <h5>
candidates foreach((candidate,index)
candidatediv.innerhtml
<p> {candidate name} {candidate votes} votes</p>
<button on click= “vote {index} >”vote for {candidate name} </button>
round container.appendchild(candidatediv)
add event listener (‘dom content loaded)
let current round=round5
total rounds= 5
round container=document.get element by id(‘round-container’)
nextroundbutton=document.get element by id(‘next-round’)
string numbers[name ‘string pair votes‘]
last remaining non-concatenated string 
last remaining non-concatenated string 
<subheading.html>
covid strings fan voting victory
the end result of fan voting 
advance to next round (strings to advance)
sorted strings=(strings.sort(string1,string2) string 1 votes string 2 votes)
advancing strings=sorted strings.slice(winner string)
return winner
last remaining non-concatenated string=last non-concatenated string variable left in fan voting
last remaining concatenated string=last concatenated string variable left in fan voting
return advancing strings 
percentage calculator
part=number of votes per day in round 
whole=total number of votes for string
calculate {part,whole}
return (part/whole)*100
display (part,whole)
percentage=this.calculate(part,whole)
return {part} is {percentage} of {whole}
result=percentagecalculator.display()
console log result 
if last remaining non-concatenated string>=.5
if last remaining concatenated string>=.5
newwindow=window.open(current round)
window.close(current round)
window.vote=function(index)
candidates [index] votes++;
next round button.addeventlistener(‘click’,()
if(currentround <totalrounds)
currentround++
else:
alert(‘voting has ended)
if nextroundbutton.disabled=true
conclude voting for fifth round 
return filename
