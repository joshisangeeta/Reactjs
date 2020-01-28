var ActiveDirectory = require("activedirectory");
var config = {
  url: "ldap://ema.lilly.com",
  baseDN: "dc=ema,dc=lilly,dc=com",
  username: "C271913",
  password: "password"
};
var ad = new ActiveDirectory(config);
