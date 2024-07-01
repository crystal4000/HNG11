document.addEventListener("DOMContentLoaded", function () {
  const slackNameElement = document.querySelector(
    "[data-testid=slackDisplayName]"
  );
  const slackEmailElement = document.querySelector("[data-testid=slackEmail]");

  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const currentDate = new Date();
  const currentDayOfWeek = daysOfWeek[currentDate.getUTCDay()];
  const currentDayOfWeekElement = document.querySelector(
    "[data-testid=currentDay]"
  );
  const currentUTCTimeElement = document.querySelector(
    "[data-testid=currentTimeUTC]"
  );
  const hngLinkElement = document.querySelector("[data-testid=hngLink]");
  const keywordLinkElement = document.querySelector(
    "[data-testid=keywordLink]"
  );
  const scrapeanywebLinkElement = document.querySelector(
    "[data-testid=scrapeanywebLink]"
  );

  slackNameElement.textContent = "Tania";
  slackEmailElement.textContent = "amandawork2022@gmail.com";
  currentDayOfWeekElement.textContent = currentDayOfWeek;
  currentUTCTimeElement.textContent = Date.now();

  hngLinkElement.href = "https://hng.tech/learn";
  keywordLinkElement.href = "https://keyword.dog";
  scrapeanywebLinkElement.href = "https://scrapeanyweb.site";

  hngLinkElement.textContent = "HNG Internship";
  keywordLinkElement.textContent = "Keyword Dog";
  scrapeanywebLinkElement.textContent = "ScrapeAnyWeb";

  const timelineContainer = document.getElementById("timeline-container");

  const timelineEvents = [
    { date: "2024-07", event: "Finish HNG Internship" },
    { date: "2024-08", event: "Train First AI Model" },
    { date: "2024-09", event: "Start Thesis Research" },
    { date: "2025-01", event: "Complete First Research Project" },
    { date: "2025-05", event: "Complete Masters Degree" },
    { date: "2025-12", event: "Publish First Research Paper" },
    { date: "2026-03", event: "Become a Regular Open Source Contributor" },
    { date: "2026-06", event: "Speak at a Tech Meetup" },
  ];

  timelineEvents.forEach((event) => {
    const eventElement = document.createElement("div");
    eventElement.className = "timeline-event";
    eventElement.innerHTML = `<h3>${event.date}</h3><p>${event.event}</p>`;
    timelineContainer.appendChild(eventElement);
  });
});
