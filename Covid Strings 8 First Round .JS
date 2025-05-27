doc. type. html
html. lang.en
script
header=document create.element(header)
header.style.backgroundcolor=#4caf50
header.style.color=’white’
header.style.padding=’10px’
header.style.textalign=’center’
header.style.text.fontsize=’24px’
header.textcontent=’welcome to covid strings8 first round’
document appendchild(header)
<header.html>
heading variables 
the heading numbers that determine where each heading and subheading go 
heading1=first round overview
heading2=matchups
heading3=first round questions
heading4=advancing rounds
subheading1=team stealing
subheading2=result for matchup1
subheading3=result for matchup2
subheading4=result for matchup3
subheading5=result for matchup4
<header.html>
first round overview
an overview of the first round of covid strings8 includes seeding 
html 
head
utf eight
viewport content=width=device-width, initial-scale=one
title covid strings8 first round bracket 
div id bracket class bracket div
script src bracket.js
link rel= stylesheet href=css
head
body
bracket
matchup
solid zero
padding 
text align center 
filename=covid strings eight first round .js
first round=(highest overall seed ,second highest seed third highest seed first middle seed, second middle seed,  third lowest seed ,second lowest seed,lowest overall seed)
highest overall seed = 1 seed
second highest seed=2 seed
third highest seed=3 seed
firstmiddleseed=4seed
second middle seed = 5 seed
third lowest seed= 6 seed
second lowest seed = 7 seed
lowest overall seed = 8 seed
document.addeventlistener(domcontentloaded, () => {
bracket = document.getelementbyid(bracket);
covid strings 8 teams=[blue,pink,red,magenta,orange,black,indigo]
<header.html>
matchups 
for first round there are 8 teams which equals 4 matchups 
matchup1=(black versus red )
matchup =document.createelement(div);
matchup.classlist.add(matchup);
matchup.innerHTML = <div>${team1}</div><div>${team2}</div>;
return matchup;
matchup2=(indigo isos versus blue curve crushers)
matchup = document.createelement(div);
matchup.classlist.add(matchup);
matchup.innerHTML = <div>${team1}</div><div>${team2}</div>;
return matchup;
matchup3=(orange versus magenta)
matchup =document.createelement(div);
matchup.classlist.add(matchup);
matchup.innerhtml = <div>${team1}</div><div>${team2}</div>;
return matchup;
matchup4=(teal versus pink)
matchup = document.createelement(div);
matchup.classlist.add(matchup);
matchup.innerhtml= <div>${team1}</div><div>${team2}</div>;
return matchup;
createround =covid strings eight first round
const round =document.createelement(div);
round.classlist.add(round);
for (let i = zero; i < teams.length; i += two) 
round.appendchild(creatematchup(teams[i],teams[i + one]));
return round;
bracket.appendchild(createround(teams));
matchup.inner html = <div class=team>${team1}</div><div class=team>${team2}</div>;
<header.html>
first round questions
the questions asked in the first round of the covid strings contest
java util.scanner
java.util
first round questions=questions[1-15]
collections.shuffle(arrays.aslist(questions)
question1
question2
question3
question4
question5
question6
question7
question8
question9
question10
question11
question12
question13
question14
question15
for multiple choice questions in covid strings 
if selectedanswer==correct:
return true
else:
return false
If selectedanswer=incorrect
return false
else:
return true
team1=lower ranked seed
team2=the higher seeded opponent
points: 10 points or 20 points
<subheading.html>
team stealing
steal points(stealingteam,victimteam,pointstosteal)
if(victimteam.points>=pointtosteal)
victimteam.points-=pointtosteal;
stealingteampoints+=pointstosteal
console.log([stealingteam.name} stole points from {victim team name}!)
else:
console.log({victimteam.name} doesnt have enough points to steal)
if teams final answer==incorrect:
opposing team steals
else:
change covid strings matchup score
team.addeventlistener(click, () => {
team.classlist.toggle(selected)
<header.html>
advancing rounds
contains criteria required for a team to advance to the second round 
advancingteams=(currentteams)
result=declarewinner(matchup1)
if red score>=forty:
console.log(red protein spikers win)
else:
remain
if black score>=forty:
console.log(black night riders win)
else:
remain
<subheading.html>
result for matchup2 
the code for how to determine the end result of matchup2 of covid atrings 
result=declarewinner(matchup2)
if blue score>=forty:
console.log(blue curve crushers win)
else
remain
if indigo score>=forty:
console.log(indigo isos win)
else
remain
<subheading.html>
result for matchup3 
the code for how to determine the end result of matchup3 of covid strings
result=declarewinner(matchup3)
if magenta score>=fourty:
console.log(magenta magnetizers win)
else:
remain
if orange score>=forty:
console.log(orange rna messengers win)
else:
remain
<subheading.html>
result for matchup4 
the code for how to determine the end result of matchup4 of covid strings 
result=declarewinner(matchup4)
if pink score>fourty:
console.log(pink covid disease fighters win)
else:
remain
if teal score>=forty:
console.log(teal terminators win)
else
remain
return filename
