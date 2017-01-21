var students = [
  {name: 'Peter', track: 'iOS', achievements: 258, points: 785},
  {name: 'Sarah', track: 'Web Dev', achievements: 236, points:  857},
  {name: 'Jane', track: 'Web Design', achievements: 271, points:  786},
  {name: 'Jules', track: 'JavaScript', achievements: 280 , points: 867},
  {name: 'Mike', track: 'PHP', achievements: 237, points:  795},
];

var message = '';
var student;
var html;  
  
function print(message) {
  var outputDiv = document.getElementById('output');
  outputDiv.innerHTML = message;
}
  
 
for (var i = 0; i < students.length; i += 1) {
  student = students[i];
  message += '<h2>Student: ' + student.name + '</h2>';
  message += '<p>Track: ' + student.track + '</p>';
  message += '<p>Achievements: ' + student.achievements + '</p>';
  message += '<p>Points: ' + student.points + '</p>';    
}

print(message);