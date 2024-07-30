const Router = require('koa-router');  

const router = Router({prefix: '/api/v1/sections'});

let sections = [
  {section:'A', prompt:'WHEN INVOLVED IN A PROJECT WITH OTHER PEOPLE:', statement1:'I can be relied upon to see that work that needs to be done is organised.', statement2:'I pick up slips and omissions that others fail to notice.', statement3:'I react strongly when meetings look like losing track of the main objective.', statement4:'I produce original suggestions.', statement5:'I analyse other people’s ideas objectively, for both merits and failings.', statement6:'I am keen to find out the latest ideas and developments.', statement7:'I have an aptitude for organising people.', statement8:'I am always ready to support good suggestions that help to resolve a problem.'},
  {section:'B', prompt:'IN SEEKING SATISFACTION THROUGH MY WORK:', statement1:'I like to have a strong influence on decisions.', statement2:'I feel in my element where work requires a high degree of attention and concentration.', statement3:'I am concerned to help colleagues with their problems.', statement4:'I like to make critical discrimination between alternatives.', statement5:'I tend to have a creative approach to problem solving.', statement6:'I enjoy reconciling different points of view.', statement7:'I am more interested in practicalities than new ideas.', statement8:'I particularly enjoy exploring different views and techniques.'},
  {section:'C', prompt:'WHEN THE TEAM IS TRYING TO SOLVE A PARTICULARLY COMPLEX PROBLEM: ', statement1:'I keep a watching eye on areas where difficulty may arise.', statement2:'I explore ideas that may have a wider application than in the immediate task.', statement3:'I like to weigh up and evaluate a range of suggestions thoroughly before choosing.', statement4:'I can co-ordinate and use productively other people’s abilities and talents.', statement5:'I can usually find the argument to refute unsound propositions.', statement6:'I often produce a new approach to a long continuing problem.', statement7:'I am ready to make my personal views known in a forceful way if necessary.', statement8:'I am ready to help whenever I can.'},
  {section:'D', prompt:'IN CARRYING OUT MY DAY-TO-DAY WORK:', statement1:'I am keen to see there is nothing vague about my task and objectives.', statement2:'I am not reluctant to emphasise my own point of view in meetings.', statement3:'I can work with all sorts of people provided that they have got something worthwhile to contribute.', statement4:'I make a point of following up interesting ideas and/or people.', statement5:'I can usually find the argument to refute unsound propositions.', statement6:'I tend to see patterns where others would see items as unconnected.', statement7:'Being busy gives me real satisfaction.', statement8:'I have a quiet interest in getting to know people better.'},
  {section:'E', prompt:'IF I AM SUDDENLY GIVEN A DIFFICULT TASK WITH LIMITED TIME AND UNFAMILIAR PEOPLE:', statement1:'I often find my imagination frustrated by working in a group.', statement2:'I find my personal skill particularly appropriate in achieving agreement.', statement3:'My feelings seldom interfere with my judgement.', statement4:'I strive to build up an effective structure.', statement5:'I can work with people who vary widely in their personal qualities and outlook.', statement6:'I feel it is sometimes worth incurring some temporary unpopularity if one is to succeed in getting one’s views across in a group.', statement7:'I usually know someone whose specialist knowledge is particularly apt.', statement8:'I seem to develop a natural sense of urgency.'},
  {section:'F', prompt:'WHEN SUDDENLY ASKED TO CONSIDER A NEW PROJECT:', statement1:'I start to look around for possible ideas and openings.', statement2:'I am concerned to finish and perfect current work before I start.', statement3:'I approach the problem in a carefully analytical way.', statement4:'I am able to assert myself to get other people involved if necessary.', statement5:'I am able to take an independent and innovative look at most situations.', statement6:'I am happy to take the lead when action is required.', statement7:'I can respond positively to my colleagues and their initiatives.', statement8:'I find it hard to give in a job where the goals are not clearly defined.'},
  {section:'G', prompt:'IN CONTRIBUTING TO GROUP PROJECTS IN GENERAL:', statement1:'I think I have a talent for sorting out the concrete steps that need to be taken given a broad brief.', statement2:'My considered judgement may take time but is usually near the mark.', statement3:'A broad range of personal contacts is important to my style of working.', statement4:'I have an eye for getting the details right.', statement5:'I try to make my mark in group meetings.', statement6:'I can see how ideas and techniques can be used in new relationships.', statement7:'I see both sides of a problem and take a decision acceptable to all.', statement8:'I get on well with others and work hard for the team.'}
];  

router.get('/', getAll);    
router.get('/:id([0-9]{1,})', getById);

function getAll(cnx, next){  
  cnx.body = sections;  
}  

function getById(cnx, next){
  let id = cnx.params.id;  
  if ((id < sections.length+1) && (id > 0)) {
    cnx.body = sections[id-1];
  } else {
    cnx.status = 404;
  }
}

module.exports = router;
