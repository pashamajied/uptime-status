// Configuration
window.Config = {

  // Site Name
  SiteName: 'Uptime Status',

  // Site URL
  SiteUrl: '/',

  // UptimeRobot Api 域名
  // Enter domain name part. default isuptimerobot.com's domain
  // Uptimerobot's api sometimes will report CROS error, you can fill in you own reverse proxy domain name
  // more details are from https://github.com/yb/uptime-status/ 
  ApiDomain: 'api.uptimerobot.com',
  
  // UptimeRobot Api Keys
  // Support both Monitor-Specific and  Read-Only type's Api Key
  ApiKeys: [
    'm783399407-b5654044806678e2a377de7f',
    'm783399409-ec794f627ab64b259503f034',
    'm783491939-22f42834a494fc3eadf69059',
  ],

  // if shows monitored site's URL
  ShowLink: false,

  // Show how many days of log. 
  // API can have 90 days, although free plan says only for 60 days.
  // 60 is the free plan's number for log days. 
  CountDays: 90,

  // Navigation menu at top right. 
  Navi: [
    {
      text: 'Homepage',
      url: 'https://pashamajied.my.id//'
    },
    {
      text: 'GitHub',
      url: 'https://github.com/pashamajied/uptime-status'
    }
  ]
};
