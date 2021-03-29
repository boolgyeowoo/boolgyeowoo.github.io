// 외부 JSON 가져오기
// Localhost에서 작동시킬 시 보안 문제로 로딩 안될 수 있음. 보안 설정을 잠깐 끄거나 서버에 올려서 돌리시오.
function loadJSON(jsonPath, isAsync, callback) {   
    let xobj = new XMLHttpRequest();
        xobj.overrideMimeType("application/json");
    xobj.open('GET', jsonPath, isAsync);
    xobj.onreadystatechange = function () {
          if (xobj.readyState == 4 && xobj.status == "200") {
            // Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
            callback(xobj.responseText);
          }
    };
    xobj.send(null);  
}

function init() {
    // DB 로드
    loadJSON("script/sessions.json", true, response => {
        populateSessionBars(JSON.parse(response));
    });
}

function populateSessionBars(db) {
    let output = "<ul>";
    
    Object.keys(db).forEach(id =>
        { output += `<li class="ses_link" style="background-image:url(img/session/${db[id].image}), linear-gradient(to right, ${db[id].grad_start}, ${db[id].grad_end});"><a href="${db[id].href}" class="session_ds"><div class="session_tt">${db[id].full_name}</div><div class="session_dt">${db[id].date}</div></a></li>` }
    );
    
    output += "</ul>"
    
    document.getElementById("sesson_nav_root").innerHTML = output;
}
