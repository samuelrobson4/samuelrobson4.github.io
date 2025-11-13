/**
 * World Clock - Displays current time in SF and London
 */
(function() {
  'use strict';

  function updateClocks() {
    const now = new Date();

    // San Francisco (PST/PDT - UTC-8/-7)
    const sfTime = new Date(now.toLocaleString("en-US", {timeZone: "America/Los_Angeles"}));

    // London (GMT/BST - UTC+0/+1)
    const londonTime = new Date(now.toLocaleString("en-US", {timeZone: "Europe/London"}));

    // Format time as HH:MM:SS
    const formatTime = (date) => {
      return date.toLocaleTimeString('en-US', {
        hour12: false,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
      });
    };

    // Update DOM elements
    const sfElement = document.getElementById('time-sf');
    const londonElement = document.getElementById('time-london');

    if (sfElement) sfElement.textContent = formatTime(sfTime);
    if (londonElement) londonElement.textContent = formatTime(londonTime);
  }

  // Update immediately and then every second
  updateClocks();
  setInterval(updateClocks, 1000);
})();
