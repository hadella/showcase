// URL for ISS tracking api
// let url = "http://api.open-notify.org/iss-now.json";
let url = "https://api.wheretheiss.at/v1/satellites/25544";

// Stores the satellite image
let img;
let img_loaded = false;

// Stores the (x,y) coordinates of the ISS
let issX;
let issY;

// Flag indicates we've received at least one ISS update
let hasIssData = false;

// List of (x,y) ISS coordinates
let issPath = [];

// Stores JSON output received from the api
let iss_text;

function preload() {
  img = loadImage("assets/Blue_Marble_2002.png");

  img_loaded = true;
}

function scheduleNext() {
  setTimeout(function () {
    getIssPosition();
    scheduleNext();
  }, 5000);
}

function setup() {
  createCanvas(960, 484);

  // Alternative to preload:
  // loadImage(
  //   "assets/Blue_Marble_2002.png",
  //   function (loaded) {
  //     img = loaded;
  //     img_loaded = true;
  //   },
  //   function (err) {
  //     console.log("failed:", err);
  //   },
  // );

  // Request the ISS position every 5 seconds
  setInterval(getIssPosition, 5000);

  scheduleNext();
}

function getIssPosition() {
  loadJSON(url, (data) => {
    // Grab the ISS latitude/longitude data
    let longitude = data.longitude;
    let latitude = data.latitude;
    let timestamp = data.timestamp;

    // Scale to to window area
    issX = map(longitude, -180, 180, 0, width);
    issY = map(latitude, -90, 90, height, 0);

    // Show the received JSON
    iss_text = JSON.stringify(data);

    // window.parent.postMessage(iss_text, "*");
    window.parent.postMessage(
      "timestamp: " +
        timestamp +
        "   latitude: " +
        latitude.toFixed(4) +
        "   longitude: " +
        longitude.toFixed(4),
      "*",
    );

    // Add this coordinate to the path
    issPath.push({ x: issX, y: issY });

    // Update flag
    hasIssData = true;
  });
}

function drawPath() {
  stroke(255, 0, 0); // red

  // Draws lines in between coordinates
  for (let i = 1; i < issPath.length - 1; i++) {
    let x1 = issPath[i - 1].x;
    let y1 = issPath[i - 1].y;

    let x2 = issPath[i].x;
    let y2 = issPath[i].y;

    // Skip if we would wrap across window
    if (x2 - x1 < 0) continue;

    line(x1, y1, x2, y2);
  }
}

function draw() {
  // Show the satellite projection as the background
  if (img_loaded) {
    image(img, 0, 0, img.width / 2, img.height / 2);
  }

  if (hasIssData) {
    drawPath();

    fill(255, 0, 0); // red
    ellipse(issX, issY, 10, 10);
  }
}
