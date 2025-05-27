doc.type.html
html lang en
script
header=document create.element(header)
header.style.backgroundcolor=#4caf50
header.style.color=’white’
header.style.padding=’10px’
header.style.textalign=’center’
header.style.text.fontsize=’24px’
header.textcontent=’welcome to covid strings8 second round’
document appendchild(header)
<header.html>
heading variables 
the heading numbers that determine where each heading and subheading go 
heading1=second round overview
heading2=matchups
heading3=second round questions
heading4=advancing rounds
subheading1=team stealing
subheading2=result for matchup1
subheading3=result for matchup2
<header.html>
second round overview
is an overview of the second round of the covid strings contest
html
head
utf8
viewport content=width=device-width, initial-scale=one
title covidstrings 8 second round bracket
div id bracket class bracket div
script src bracket.js
link rel= stylesheet href=css
head
body
bracket-container{}
matchup
solid zero;
padding 
text align center 
filename=covid strings eight second round .js
highest remaining seed=(greatest remaining num value in covid strings list)
lowest remaining seed = (lowest remaining num value in covid strings list)
intermediateseed1=(first middle remaining value in covid strings list)
intermediateseed2=(second middle remaining value in covid strings list)
createround=covid strings eight second round 
round = document.createelement(div);
round.classlist.add(round);
for (let i = zero; i < teams.length; i += two) {
round.appendchild(creatematchup(teams[i],teams[i + one]));
return round;
bracket.appendchild(createround(teams));
<header.html>
matchups
contains4 teams which equals 2 matchups 
matchup1=(lowest remaining seed versus highest remaining seed)
matchup =document.createelement(div);
matchup.classlist.add(matchup);
matchup.innerHTML = div>${team1}</div><div>${team2}</div>;
return matchup;
matchup2=(intermediate seed two versus intermediate seed one)
matchup =document.createelement(div);
matchup.classlist.add(matchup);
matchup.innerhtml =div>${team1}</div><div>${team2}</div>;
return matchup;
(if event target covid strings seed list contains matchup)
return matchup
else 
create matchup
<header.html>
second round questions
the questions asked in the second round of the covid strings contest
java util.scanner
java.util
second round questions=questions[16-25]
collections.shuffle(arrays.aslist(questions)
question16
question17
question18
question19
question20
question21
question22
question23
question24
question25
private string getblanks(int numberofblanks)
char[] chars =new char[numberofblanks]
arrays.fill chars 
return new string chars 
bracket.addeventlistener((Event) => 
myclass=(non-concatenated)
if category==math problem:
prompt
log
else:
select from multiple choice
if category ==multiplechoice:
select answer
else:
prompt
log
myclass=new myclass(concatenated) 
return category
if category==math problem:
prompt
log
else:
select from multiple choice
if category ==multiplechoice:
select answer
else:
prompt
log
import syntax 
team1=lower ranked seed
team2=the higher seeded opponent
Points: 10 Points Or 20 Points
<Subheading.Html>
Team Stealing
Steal Points(StealingTeam,VictimTeam,PointsToSteal)
If(VictimTeam.Points>=PointToSteal)
VictimTeam.Points-=PointToSteal;
StealingTeamPoints+=PointsToSteal
Console.Log([StealingTeam.Name} Stole Points From {Victim Team Name}!)
Else:
Console.Log({VictimTeam.Name} Doesnt Have Enough Points To Steal)
If Teams Final  Answer==Incorrect:
Opposing Team Steals
Else:
Change Covid Strings Matchup  Score
<Header.Html>
Advancing Rounds 
Contains The Criteria For Teams In The Second Round To Advance To The Championship 
advanceteams=slice(currentteams)
result=declarewinner(matchup1)
if highest remaining seed score>=forty:
console.log(highest remaining seed advances)
else:
console.log(lowest remaining seed advances)
result=declarewinner(matchup2)
if intermeidate seed1 score>=forty:
console.log(intermediate seed1 advances)
else:
console.log(intermediate seed2 advances)
return filename
