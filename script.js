
function setElementsInnerHTML(nodes, value){
    for (let i = 0; i < nodes.length; i++) {
        nodes[i].innerHTML= value;
     }
}
function popup(response){
    let json = JSON.parse(response);
    if(json.error){
     document.querySelector("div.jumbotron").innerHTML = "IP address not available";
    }
    else{
        let nodes = document.querySelectorAll("*[data-type='ip']");
        setElementsInnerHTML(nodes, json.ip);
        nodes = document.querySelectorAll("*[data-type='hostname']");
        setElementsInnerHTML(nodes, json.hostname);
        nodes = document.querySelectorAll("*[data-type='conn-type']");
        setElementsInnerHTML(nodes, json.connection_type);
        nodes = document.querySelectorAll("*[data-type='isp']");
        setElementsInnerHTML(nodes, json.isp);
        nodes = document.querySelectorAll("*[data-type='asn']");
        setElementsInnerHTML(nodes, json.asn);
        nodes = document.querySelectorAll("*[data-type='org']");
        setElementsInnerHTML(nodes, json.asn_org);
        nodes = document.querySelectorAll("*[data-type='pcode']");
        setElementsInnerHTML(nodes, json.postal_code);
        nodes = document.querySelectorAll("*[data-type='city']");
        setElementsInnerHTML(nodes, json.city);
        nodes = document.querySelectorAll("*[data-type='district']");
        setElementsInnerHTML(nodes, json.district);
        nodes = document.querySelectorAll("*[data-type='region']");
        setElementsInnerHTML(nodes, json.region);        
        nodes = document.querySelectorAll("*[data-type='country']");
        setElementsInnerHTML(nodes, json.country_name);
        nodes = document.querySelectorAll("*[data-type='timezone']");
        setElementsInnerHTML(nodes, json.timezone_name);
        nodes = document.querySelectorAll("*[data-type='cords']");
        setElementsInnerHTML(nodes, "Lat. " + json.latitude + "- Long. " + json.longitude);        
    }

}

function getMyPublicIP(callback) {
    let req = new XMLHttpRequest();
    req.open('GET', "https://json.geoiplookup.io/");
    req.onload = function() {
      if (req.status == 200) {
        callback(this.responseText);
      } else {
        callback("{\"error\": " + req.status + "}");
      }
    }
    req.send();
  }

  getMyPublicIP(popup);