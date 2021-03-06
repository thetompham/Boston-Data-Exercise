function renderPosts(boston, container) {
  const people = boston.data;
  const len = boston.data.length;
  let html = '';
  for (let i = 0; i < len; i++) {
    html +=
      '<li class="post">' + '<h2>' + people[i][8] + '</h2>' + '<h3>' + people[i][11] + '</h3>';
  }

  // TODO: add code to display the html variable inside a ul element with id="data"
  // Hint: you can use the container parameter's innerHTML property to insert Html tags
  container.innerHTML = '<ul id = "data">' + html + '</ul>';
}
renderPosts(boston, document.getElementById('container'));

function renderTopSalaries(boston, container) {
  const people = boston.data;
  var topSalaries = people.sort((a,b) => b[11]-a[11]).slice(0,5);
  const len = topSalaries.length;
  let html = '';
  for (let i = 0; i < len; i++) {
    html +=
      '<li class="post">' + 
      '<h2>' + 
      topSalaries[i][8] + 
      '</h2>' + 
      '<h3>' + 
      topSalaries[i][11] + 
      '</h3>';
  }

  container.innerHTML = '<ul id = "topSalaries">' + html + '</ul>';
}
renderTopSalaries(boston, document.getElementById('container'));

function renderTopEmployees(boston, container) {
  const people = boston.data;
  var topEmployees = people.filter((a) => a > 200000);
  const len = topEmployeess.length;
  let html = '';
  for (let i = 0; i < len; i++) {
    html +=
      '<li class="post">' + 
      '<h2>' + 
      topEmployees[i][8] + 
      '</h2>' + 
      '<h3>' + 
      topEmployees[i][11] + 
      '</h3>';
  }

  container.innerHTML = '<ul id = "topEmployees">' + html + '</ul>';
}
renderTopSalaries(boston, document.getElementById('container'));
