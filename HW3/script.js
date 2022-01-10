const q1 = document.createElement("h2");
q1.textContent = "Table with styles you want to add";
document.body.appendChild(q1);

const table = document.createElement("table");
document.body.appendChild(table);

const tableInfo = [
  {
    studentName: "John",
    Age: 19,
    Phone: "455 - 983 - 0903",
    Address: "123 Ave, San Francisco, CA, 94011",
  },
  {
    studentName: "Alex",
    Age: 21,
    Phone: "455 - 983 - 0912",
    Address: "456 Rd, San Francisco, CA, 94012",
  },
  {
    studentName: "Josh",
    Age: 22,
    Phone: "455 - 345 - 0912",
    Address: "789 Dr, Newark, CA, 94016",
  },
  {
    studentName: "Matt",
    Age: 23,
    Phone: "321 - 345 - 0912",
    Address: "223 Dr, Sunnyvale, CA, 94016",
  },
];

function helper(rowContent, isHead = false) {
  const tr = document.createElement("tr");

  for (const c of rowContent) {
    const col = document.createElement(isHead ? "th" : "td");
    col.textContent = c;
    tr.appendChild(col);
  }

  return tr;
}

const thead = document.createElement("thead");
thead.appendChild(helper(Object.keys(tableInfo[0]), true));
table.appendChild(thead);

const tbody = document.createElement("tbody");
tableInfo.forEach((row) => {
  const rowContent = Object.values(row);
  tbody.appendChild(helper(rowContent));
});
table.appendChild(tbody);



const q2 = document.createElement("h2");
q2.textContent = "Order list and unordered list";
document.body.appendChild(q2);

const list = ["HTML", "JavaScript", "CSS", "React", "Redux", "Java"];

const q2o = document.createElement("h3");
q2o.textContent = "An ordered technologies list";
document.body.appendChild(q2o);

const orderedLst = document.createElement("ol");
list.forEach((item) => {
  const li = document.createElement("li");
  li.textContent = item;
  orderedLst.appendChild(li);
});
document.body.appendChild(orderedLst);

const q2u = document.createElement("h3");
q2u.textContent = "An unordered technologies list";
document.body.appendChild(q2u);

const unorderedLst = document.createElement("ul");
list.forEach((item) => {
  const li = document.createElement("li");
  li.textContent = item;
  unorderedLst.appendChild(li);
});
document.body.appendChild(unorderedLst);



const q3 = document.createElement("h2");
q3.textContent = "A dropdown list with the following options";
document.body.appendChild(q3);

const select = document.createElement("select");
select.id = "cities";
select.className = "cities";
document.body.appendChild(select);

const dropDownList = [
  { value: "newark", content: "Newark" },
  { value: "santaClara", content: "Santa Clara" },
  { value: "unionCity", content: "Union City" },
  { value: "albany", content: "Albany" },
  { value: "dalyCity", content: "Daly City" },
  { value: "sanJose", content: "San Jose" },
];

dropDownList.forEach(({ value, content }) => {
  const option = document.createElement("option");
  option.value = value;
  option.textContent = content;
  select.appendChild(option);
});
