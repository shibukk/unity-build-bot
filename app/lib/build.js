var request = require("request");

var ApiClient = function(token, org, project, buildTarget) {
  var token = token;
  var org = org;
  var project = project;
  var buildTarget = buildTarget;

  var getUrl = function(funcName, extend = "") {
    var url = "https://build-api.cloud.unity3d.com/api/v1/";
    url += `orgs/${org}/projects/${project}/buildtargets/${buildTarget}/${funcName}`;
    if (extend) {
      url += extend;
    }
    return url;
  };

  var getHeader = function() {
    return {
      "Content-Type": "application/json",
      "Authorization": `Basic ${token}`
    };
  }

  return {
    build: function() {
      return request.post({url: getUrl("builds"), headers: getHeader()});
    },
    cancel: function() {
      return request.delete({url: getUrl("builds"), headers: getHeader()});
    },
    download_urls: function() {
      return request.get({url: getUrl("builds", "?buildStatus=success&per_page=1&page=1"), headers: getHeader()});
    }
  };
};

module.exports = ApiClient;
